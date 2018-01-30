var BID_TIMEOUT = 1200;
var initAdServerSet;

function lookupByToken(array, token) {
    var lookup = [];
    for (var i = 0, len = array.length; i < len; i++) {
        lookup[array[i][token]] = array[i];
    }
    return lookup;
}

function initAdserver() {
    console.log("call adserver");
    if (initAdServerSet) return;

   /** console.log("Init Adserver");*/
    (function () {
        if (!adServer.config) {
            console.error("adServer.config Object missing");
            return;
        }
        ADTECH.config.page = adServer.config;

        for (var slot in adUnitsByToken) {
            ADTECH.enqueueAd(slot);
        }
        console.log(ADTECH.config.placements);
        ADTECH.executeQueue();

    })();
    initAdServerSet = true;
}
/*
(function () {
    var d = document;
    var pbs = d.createElement("script");
    pbs.type = "text/javascript";
    pbs.dataset.cfasync= "false";
    pbs.src = 'https://vlibs.advertising.com/prebid/adapters=smartadserver,rubicon,widespace,piximedia,criteo,improvedigital,pubwise;/prebid-1.x.x.js';
    var target = d.getElementsByTagName("head")[0];
    target.insertBefore(pbs, target.firstChild);
})();
*/

(function () {
    var d = document;
    var pbs = d.createElement("script");
    pbs.type = "text/javascript";
    pbs.src = 'https://s3.eu-central-1.amazonaws.com/hbams/lib/prebid-a.js';
    var target = d.getElementsByTagName("head")[0];
    target.insertBefore(pbs, target.firstChild);
})();


var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

var adUnitsByToken = lookupByToken(adUnits, 'code');

if (adUnits) {
    pbjs.que.push(function () {
        pbjs.addAdUnits(adUnits);
        pbjs.setPriceGranularity('dense');
        pbjs.setConfig({ priceGranularity: 'dense' }, { cookieSyncDelay: 200});
        pbjs.bidderSettings = {
            rubicon: {
                bidCpmAdjustment: function (bidCpm) {
                    // adjust the bid in real time before the auction takes place
                    return bidCpm * 0.85;
                }
            },
            smartadserver: {
                bidCpmAdjustment: function (bidCpm) {
                    // adjust the bid in real time before the auction takes place
                    return bidCpm * 0.87;
                }
            },
            aol: {
                bidCpmAdjustment: function (bidCpm) {
                    // adjust the bid in real time before the auction takes place
                    return bidCpm * 0.88;
                }
            },
            improvedigital: {
                bidCpmAdjustment: function (bidCpm) {
                    // adjust the bid in real time before the auction takes place
                    return bidCpm * 0.80;
                }
            }
        };

        pbjs.que.push(function() 
        { pbjs.enableAnalytics(
            { provider: 'ga', 
            options: 
            { global: 'ga', 
            enableDistribution: false, 
        } 
    }); 
        });

        pbjs.requestBids({
            timeout: BID_TIMEOUT, // The primary timeout is set here
            bidsBackHandler: sendAdserverRequest
        });

    });
}

/**
 * Handles bids response that is returned.
 *
 * @param {Object} response The bid response object.
 * @param {Number} response.cpm The CPM of the bid.
 * @param {String} response.alias The alias of the bid.
 * @param {String} response.bidKey The key of the bid.
 * @param {String} response.mpAliasKey The key of the alias.
 * @param {String} response.adContainerId The id of the container associated with the bid in the DOM.
 */

var sizeAMS;
function sendAdserverRequest(bidResponses) {

    var targetingParams = pbjs.getAdserverTargeting();
    var responses = pbjs.getBidResponses()
  /*  console.log('All bid responses', responses);
    console.log('Targeting parameters from all ad units', targetingParams);*/

    if (pbjs.adserverRequestSent) return;
    pbjs.adserverRequestSent = true;

   /* console.log('adUnits', adUnitsByToken);*/

    for (var slot in adUnitsByToken) {

       console.log('Current slot', slot);
        var paramsObj = {
            target: '_blank',
            loc: '100'
        };

       ADTECH.config.placements[slot] = {
            responsive: {useresponsive: true,}
        };

      /**  if (adUnitsByToken[slot].responsive) {
            ADTECH.config.placements[slot].responsive = adUnitsByToken[slot].responsive;
        }*/

        if (adUnitsByToken[slot].bounds) {
            ADTECH.config.placements[slot].responsive.bounds = adUnitsByToken[slot].bounds;
        }

        if (adUnitsByToken[slot].sizeid) {
            ADTECH.config.placements[slot].sizeid = adUnitsByToken[slot].sizeid;
        }

        if (adUnitsByToken[slot].alias) {
            ADTECH.config.placements[slot].alias = adUnitsByToken[slot].alias;
        }

        if (adUnitsByToken[slot].fif) {
            ADTECH.config.placements[slot].fif = adUnitsByToken[slot].fif;
        }

        if (targetingParams.hasOwnProperty(slot)) {
            var bidderCode = targetingParams[slot]['hb_bidder'];
            var idplacement = slot + '';
            console.log(idplacement);

            paramsObj['kvhb_pb_' + bidderCode.substring(0, 5)] = targetingParams[slot]['hb_pb'];
            paramsObj['kvhb_adid_' + bidderCode.substring(0, 5)] = targetingParams[slot]['hb_adid'];
            paramsObj['kvhb_deal_' + bidderCode.substring(0, 5)] = targetingParams[slot]['hb_deal'];
            paramsObj['kvhb_size'] = targetingParams[slot]['hb_size'];
          /*  var sizeAMS = targetingParams[slot]['hb_size'];
            console.log(sizeAMS);

            if (sizeAMS == "970x250"){
                document.getElementById(idplacement).style.height = "250px";
            }
            if (sizeAMS == "1000x250"){
                document.getElementById(idplacement).style.height = "250px";
            }
            if (sizeAMS == "300x600"){
                document.getElementById(idplacement).style.height = "600px";
            }*/
         /*   if (adUnitsByToken[slot].fif) {
                ADTECH.config.placements[slot].fif = adUnitsByToken[slot].fif;
            }
*/
        }
        ADTECH.config.placements[slot].params = paramsObj;
    }

    initAdserver();
    
}


function initAdserverb() {
    console.log("call adserver");
    if (initAdServerSet) return;

   /** console.log("Init Adserver");*/
    (function () {
        if (!adServer.config) {
            console.error("adServer.config Object missing");
            return;
        }
        ADTECH.config.page = adServer.config;

        
            ADTECH.enqueueAd(slottorefresh);
        
        console.log(ADTECH.config.placements);
        ADTECH.executeQueue();

    })();
    initAdServerSet = true;
}



function sendAdserverRequestb(bidResponses) {

    var targetingParams = pbjs.getAdserverTargeting();
    var responses = pbjs.getBidResponses()
  /*  console.log('All bid responses', responses);
    console.log('Targeting parameters from all ad units', targetingParams);*/

    if (pbjs.adserverRequestSent) return;
    pbjs.adserverRequestSent = true;

   /* console.log('adUnits', adUnitsByToken);*/



       console.log('Current slottorefresh', slottorefresh);
        var paramsObj = {
            target: '_blank',
            loc: '100'
        };

       ADTECH.config.placements[slottorefresh] = {
            responsive: {useresponsive: true,}
        };

      /**  if (adUnitsByToken[slottorefresh].responsive) {
            ADTECH.config.placements[slottorefresh].responsive = adUnitsByToken[slottorefresh].responsive;
        }*/
        if (amsrefresh) {

            paramsObj['kvhb_refresh'] = true;
        }
        if (adUnitsByToken[slottorefresh].bounds) {
            ADTECH.config.placements[slottorefresh].responsive.bounds = adUnitsByToken[slottorefresh].bounds;
        }

        if (adUnitsByToken[slottorefresh].sizeid) {
            ADTECH.config.placements[slottorefresh].sizeid = adUnitsByToken[slottorefresh].sizeid;
        }

        if (adUnitsByToken[slottorefresh].alias) {
            ADTECH.config.placements[slottorefresh].alias = adUnitsByToken[slottorefresh].alias;
        }

        if (adUnitsByToken[slottorefresh].fif) {
            ADTECH.config.placements[slottorefresh].fif = adUnitsByToken[slottorefresh].fif;
        }

        if (targetingParams.hasOwnProperty(slottorefresh)) {
            var bidderCode = targetingParams[slottorefresh]['hb_bidder'];
            var idplacement = slottorefresh + '';
            console.log(idplacement);

            paramsObj['kvhb_pb_' + bidderCode.substring(0, 5)] = targetingParams[slottorefresh]['hb_pb'];
            paramsObj['kvhb_adid_' + bidderCode.substring(0, 5)] = targetingParams[slottorefresh]['hb_adid'];
            paramsObj['kvhb_deal_' + bidderCode.substring(0, 5)] = targetingParams[slottorefresh]['hb_deal'];
            paramsObj['kvhb_size'] = targetingParams[slottorefresh]['hb_size'];
          /*  var sizeAMS = targetingParams[slottorefresh]['hb_size'];
            console.log(sizeAMS);

            if (sizeAMS == "970x250"){
                document.getElementById(idplacement).style.height = "250px";
            }
            if (sizeAMS == "1000x250"){
                document.getElementById(idplacement).style.height = "250px";
            }
            if (sizeAMS == "300x600"){
                document.getElementById(idplacement).style.height = "600px";
            }*/
         /*   if (adUnitsByToken[slottorefresh].fif) {
                ADTECH.config.placements[slottorefresh].fif = adUnitsByToken[slottorefresh].fif;
            }
*/
        }
        ADTECH.config.placements[slottorefresh].params = paramsObj;


    initAdserverb();
    
}


function refreshBid(slotto) {
slottorefresh = slotto
    amsrefresh = true;
    initAdServerSet = false;
    pbjs.adserverRequestSent = false;
    pbjs.que.push(function() {
        pbjs.requestBids({
         timeout: BID_TIMEOUT, 
         bidsBackHandler: sendAdserverRequestb
     });
     
    });
  }