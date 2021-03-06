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

If you'd like more details about the prebid workflow we recommend to read [theguardian post about hb](https://github.com/guardian/frontend/blob/ea9fcb675025e8e8c4f6489ed892937979f07f34/static/src/javascripts/projects/common/modules/commercial/docs/header-bidding.md), explaining:
- how the browser performs auctions
- how AdServer responds to them read
- how adverts are displayed

UPDATE 2018-05-24: we use prebid.js v1.11.0

# ONE by AOL: Dynamic Ad Call Library
Ads with asynchronous tags allow page content to be loaded independently from ad content, reducing the overall load time of the page.

[Ad Server tag library DAC.js](https://learn.oneadserver.aol.com/reader/NwjtoyhHugfpQzAulJ_o9A/5SMTKNtxD2uPB9JdxkA2Xw) (Dynamic Ad Call) is the JavaScript core component that contains the base code needed for all ad calls and additional code to, e.g., request screen properties or geo location.

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
    prebidAdUnitIds: ["6494071"],
    autoRefresh: {
      interval: 15000, // milliseconds
      minVisibility: 0.49, // range 0-1
      onlyIfBidWinner: false
    },
    gdpr: true,
    sizes: {
      desktop: [
        [970, 250],
        [970, 90]
      ],
      tablet: [
        [728, 90],
        [300, 600]
      ],
      phone: [
        [300, 250]
      ]
    },
    adUnits: [
      {
        code: "6494071",
        bounds: [
            { id: 6494072, min: 0, max: 768 },
            { id: 6494071, min: 769, max: 9999 },
        ],
        sizeid: '16',
        labelAny: ["desktop"],
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
  gdpr: hbAMS.settings.gdpr,
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
    code: "6489219",
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
You must to set the trackerName 
```
ga('create', 'UA-28563613-5', 'auto', 'ams');
...
pbams.que.push(function () {
      pbams.enableAnalytics({
          provider: 'ga',
          options: {
              trackerName: 'ams',
              global: 'ga',
              enableDistribution: false,
          }
      });
  });
```

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
    "improvedigitalBidAdapter",
    "criteoBidAdapter",
    "googleAnalyticsAdapter"
]
```

## Consent Management (GDPR)

In order to enable you must to set **hbAMS.settings.gdpr = true** and add CMP script on your page. A working demo can be found [here](https://ams-hb.firebaseapp.com/demos/cmp.html).

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

# Tips for Troubleshooting

Check form prebid.org
- [Tips for troubleshooting](http://prebid.org/dev-docs/toubleshooting-tips.html)
- [Prebid.js Troubleshooting Guide](http://prebid.org/dev-docs/prebid-troubleshooting-guide.html)

# Furthermore

- [Implementing OAth's CMP js](https://b2b.oath.com/c/cmp-guide-final?x=XzWzWi)
- [PREBID EVOLUTION](https://rubiconproject.com/insights/thought-leadership/header-bidding-3-0-the-prebid-evolution-continues/)
