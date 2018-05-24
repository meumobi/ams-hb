# Ad.MySports header-bidding

This project is a [prebid.js](http://prebid.org/) implementation for [ADTECH/AOL AdServer](https://oneadserver.aol.com/), including extra features as:
- auto-refresh
- [prebid analytics with GA](http://prebid.org/overview/ga-analytics.html)
- adblock tracker
- auto-detect Ad Units on DOMContentLoaded

We've took care to use javascript able to run on following browser versions:
- Chrome 49+
- Safari 9+
- IE 11+ 
- Firefox 52+
- Samsung 6.2+

We didn't test on all of these browsers versions but should work.

UPDATE 2018-05-24: we use prebid.js v1.11.0

# Prebid launched on load and DOMContentLoaded event
The prebid is launched on load with a predefined list of AdUnits Ids, and when DOMContentLoaded is fired the DOM is parsed to check AdUnits Ids missing on load and re-call a bid for them.
The DOMContenLoaded solution is also used when Ad Unit is loaded through an AdServer (DFP for example) and not set directly on html page.

To setup and customize the `ams-ad` each site should load a configuration with the 2 mandatory variables: hbAMS and adServer.

## hbAMS variable

hbAMS variable defined settings and AdUnits.

```
var hbAMS = {
  settings: {
    siteId: '670202',
    prebidAdUnitIds: [],
    autoRefresh: {
      interval: 15000, // milliseconds
      minVisibility: 0.49, // range 0-1
      onlyIfBidWinner: false
    },
    adUnits: [
      {
        code: 6494071,
        bounds: [
            { id: 6494072, min: 0, max: 768 },
            { id: 6494071, min: 769, max: 9999 },
        ],
        sizeid: '16',
        bids: []
      },
    ]
  }
};
```

## adServer variable

adServer variable defines the config of AdServer, including key/value you'd like to pass.

```
var adServer = {};

adServer.config = {
  protocol: 'https',
  server: 'secserv.adtech.de',
  network: '1502.1',
  siteid: hbAMS.settings.siteId,
  params: {
    loc: '100',
    kvcat: '[CATEGORY NAME HERE]',
    kvurl: '[URL]',
  }
};
```

# Mandatory updates
On [v1.*](http://prebid.org/dev-docs/publisher-api-reference.html#module_pbjs.addAdUnits) Prebid.js demands **size** on adUnit i.e.:
```json
 {
    code: 6489219,
    fif: { usefif: true },
    sizes: [[728, 90], [970, 90], [970, 250]],
    bounds: [
        { id: 6493810, min: 0, max: 768 },
        { id: 6489219, min: 769, max: 9999 },
    ],
    sizeid: '225',
    bids: []
},
```

SizeMapping must be [removed](http://prebid.org/dev-docs//prebid-1.0-API.html#size-mapping-changes) from adUnits.


# Customization
## auto-refresh
The auto-refresh allows to refresh specific AdUnits each period with certain conditions. The period is defined by `interval`.

```
autoRefresh: {
    interval: 15000, // milliseconds
    minVisibility: 0.75, // range 0-1
    onlyIfBidWinner: false,
},
```
  - `minVisibility`: the min visibility required for the AdUnit on viewport to be refreshed. This should prevent to refresh Ad Units out of viewport and decrease their cpm due to low/none visibility.
  - `onlyIfBidWinner`: refresh Ad Unit only if exists a bid winner, else cancel.

Each Ad Unit to be refreshed requires the property `autoRefresh` set to true, by default this propoerty is false.

```
{
    code: 6490489,
    fif: { usefif: true },
    autoRefresh: true,
    sizes: [[300, 600], [300, 250]],
    ...
```

To prevent blink effects we recommend to only use auto-refresh on prefixed height Ad Units.

## adblock tracker
```
var defaultSettings = {
  analytics: {
      trackAdblock: true,
      trackPrebid: true,
  },
```

For more details we recommend the read of [Detecting Adblock on your site and logging it to Google Analytics](http://blog.dynamicdrive.com/detecting-adblock-on-your-site-and-logging-it-to-google-analytics/)

## prebid analytics with GA

[prebid analytics with GA](http://prebid.org/overview/ga-analytics.html)

# Prebid.js
## Change list of modules
To make sure the build only includes the [modules]((https://github.com/prebid/Prebid.js/tree/master/modules)) you want, you can specify the modules to be included with the --modules CLI argument

```
$ gulp build --modules=smartadserverBidAdapter,rubiconBidAdapter
```

Alternatively, a `.json` file can be specified that contains a list of modules you would like to include.

```
$ gulp build --modules=modules.json
```

With modules.json containing the following

```
[
    "consentManagement",
    "smartadserverBidAdapter",
    "rubiconBidAdapter",
    "aolBidAdapter",
    "widespaceBidAdapter",
    "improvedigitalBidAdapter"
]
```

## Custom namespacing
Build prebid from source setting `globalVarName` from package.json to pbams, see [prebid/Prebid.js#409](https://github.com/prebid/Prebid.js/pull/409) for details

# Call Ad Unit through DFP

```
<script type="text/javascript" src="//admytests.firebaseapp.com/js/DAC.js"></script>
<script type="text/javascript" src="//admytests.firebaseapp.com/js/hb_cpprg.js"></script>
<script type="text/javascript" src="//admytests.firebaseapp.com/js/hb_ams-lib.js"></script>
<div id="6544251" class="ams-ad"></div>
```

# Adjust Bid Price for Gross/Net
Bidders may have different pricing deals with publishers, and the returned bid prices may or may not reflect what the publisher will truly receive in the end.
Prebid.js allows the publisher to [adjust the bidding price](http://prebid.org/blog/adjust-bid-price) before the bids targeting are set on the ad server tag. This feature is supported by [pbjs.bidderSettings](http://prebid.org/dev-docs/publisher-api-reference.html#module_pbjs.bidderSettings)

```
    pbjs.bidderSettings = {
      rubicon: {
        bidCpmAdjustment : function(bidCpm){
          // adjust the bid in real time before the auction takes place
          return bidCpm * 0.85;
        }
      }
    };
```