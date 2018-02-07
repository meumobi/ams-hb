(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
    a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
    a.async = 1;
    console.log('google');
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-113326323-1', 'auto');


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
    if (initAdServerSet) return;

    (function () {
        if (!adServer.config) {
            console.error("adServer.config Object missing");
            return;
        }
        ADTECH.config.page = adServer.config;

        for (var slot in adUnitsByToken) {
            console.log("slot:" + slot);
            if (adUnitsByToken[slot].winner || !adUnitsByToken[slot].refreshing) {
                
                ADTECH.enqueueAd(slot);
            }
        }
        console.log(ADTECH.config.placements);
        ADTECH.executeQueue();

    })();
    initAdServerSet = true;
}

(function () {
    var d = document;
    var pbs = d.createElement("script");
    pbs.type = "text/javascript";
    pbs.src = 'https://s3.eu-central-1.amazonaws.com/hbams/lib/prebid-a.js';
    var target = d.getElementsByTagName("head")[0];
    target.insertBefore(pbs, target.firstChild);
})();
(function () {
    var d = document;
    var vis = d.createElement("script");
    vis.type = "text/javascript";
    vis.src = 'https://cdnjs.cloudflare.com/ajax/libs/vissense/0.10.0/vissense.min.js';
    var target = d.getElementsByTagName("head")[0];
    target.insertBefore(vis, target.firstChild);
})();


var pbjs = pbjs || {};
var pbams = pbjs || {};
pbams.que = pbams.que || [];

var adUnitsByToken;

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
var teste = 0;
var sizeAMS;
function sendAdserverRequest(bidResponses) {
    var targetingParams = pbams.getAdserverTargeting();
    var responses = pbams.getBidResponses();

    if (pbams.adserverRequestSent) return;
    pbams.adserverRequestSent = true;

    for (var slot in adUnitsByToken) {
        var paramsObj = {
            target: '_blank',
            loc: '100'
        };
        
        var bids = responses[slot].bids;
        var winner = false;
        for (var i in bids) {
            if (bids[i].cpm > 0) {                
                winner = true;
                break;
            }
        }     
        adUnitsByToken[slot].winner = winner;
        
        ADTECH.config.placements[slot] = {
            responsive: {useresponsive: true,}
        };

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

        }
        ADTECH.config.placements[slot].params = paramsObj;
    }
    initAdserver();

}


function requestBids(adUnits) {
    console.log('bidding: ' + adUnits.length);
    adUnitsByToken = lookupByToken(adUnits, 'code');   
       
    initAdServerSet = false;
    
    pbams.que.push(function() {
        pbams.adserverRequestSent = false;
        pbams.addAdUnits(adUnits);
        pbams.requestBids({
            timeout: BID_TIMEOUT, 
            bidsBackHandler: sendAdserverRequest
        });     
    });
}

function loadAdUnitsIdsOnPage() {
   var adUnitsOnPage = document.getElementsByClassName("ams-ad");
   return [].slice.call(adUnitsOnPage).map(element => element.id);
}

function filterAdUnitsByIds(adUnits, ids) {
    return adUnits.filter(function(element) {
        if (ids.indexOf(element.code,0) >= 0) {
            return true;
        } else {
            return false;
        }
    });
}

function filterAdUnitsBade(adUnitsBade, adUnitsToBid) {
    return adUnitsToBid.filter(function(element) {
        if (adUnitsBade.indexOf(element.code,0) >= 0) {
            return false;
        } else {
            return true;
        }
    });
}

function filterAdUnitsVisibility(adUnits) {
    return adUnits.filter(function(element) {    
        if (document.getElementById(element.code)) {
            var elementVisibility = VisSense(document.getElementById(element.code));  
            return elementVisibility.percentage() > pbAMS.autoRefresh.minVisibility;
        } else {
            return false;
        }
    });
}

function filterAdUnitsAutoRefresh(adUnits) {
    return adUnits.filter(function(element) {
        return element.autoRefresh;
    });
}

function configBid(){

    pbams.que.push(function () {
        pbams.setPriceGranularity('dense');
        pbams.setConfig({ priceGranularity: 'dense' }, { cookieSyncDelay: 200});
        pbams.bidderSettings = {
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
        if (pbAMS.analytics.trackPrebid) {        
            trackPrebid();            
        }
    });
}

var adUnitsAutoRefresh = [];
var adUnitsBade = []; 
function refresh() {    
    var adUnitsVisible = filterAdUnitsVisibility(adUnitsAutoRefresh);
    adUnitsVisible = adUnitsVisible.map(function(element) {
        element.refreshing = true;
        return element;
    })
    console.log(adUnitsVisible);
    if (adUnitsVisible.length > 0) {    
        console.log("refreshing: " + adUnitsVisible.length);        
        requestBids(adUnitsVisible); 
    }
}

function addAdUnits(adUnitsIds) {
    var adUnitsToBid = filterAdUnitsByIds(adUnits, adUnitsIds);
    adUnitsToBid = filterAdUnitsBade(adUnitsBade, adUnitsToBid);
    console.log("adding: " + adUnitsToBid.length);  
    if (adUnitsToBid.length > 0) {
        requestBids(adUnitsToBid);
        adUnitsBade = adUnitsBade.concat(adUnitsToBid);
        var newAdUnitsAutoRefresh = filterAdUnitsAutoRefresh(adUnitsToBid);
        if (newAdUnitsAutoRefresh.length > 0) {
            adUnitsAutoRefresh = adUnitsAutoRefresh.concat(newAdUnitsAutoRefresh);
        }
    } 
}

function trackAdblock() {
    console.log('tracking adblock');    
    var test = document.createElement('div');
    test.innerHTML = '&nbsp;';
    test.className = 'adsbox';
    document.body.appendChild(test);
    window.setTimeout(function() {
        if (test.offsetHeight === 0) {
            ga('send', 'event', 'Ad Setting', 'Adblock', 'Enabled');
        } else {
            ga('send', 'event', 'Ad Setting', 'Adblock', 'Disabled');            
        }
        test.remove();
    }, 400);
}

function trackPrebid() {
    console.log('tracking prebid');
    pbams.que.push(function() { 
        pbams.enableAnalytics({ 
        provider: 'ga', 
            options: { 
                global: 'ga', 
                enableDistribution: false,                         
            } 
        }); 
    });
}

function autoAddAdUnits() {
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {     
            if (mutation.addedNodes && mutation.addedNodes.length > 0) {    
                [].some.call(mutation.addedNodes, function(el) {
                    if (el.classList.contains('ams-ad')) {
                        console.log("autoload: " + el.id);     
                        addAdUnits([el.id]);
                    } 
                });                
            }
            
        });
    });    
    var observerConfig = {
        attributes: true,
        childList: true,
        characterData: true
    };    
    observer.observe(document.body, observerConfig);
}

function trackJavaScriptError(e) {
    var ie = window.event,
        errMsg = e.message || ie.errorMessage;
    var errSrc = (e.filename || ie.errorUrl) + ': ' + (e.lineno || ie.errorLine);
    ga('send', 'event', 'JavaScript Error', errMsg, errSrc, { 'nonInteraction': 1 });

}

configBid();
if (pbAMS.prebidAdUnits) {
    addAdUnits(pbAMS.prebidAdUnits);
}
window.addEventListener('error', trackJavaScriptError, false);
document.addEventListener('DOMContentLoaded',function() {  
    autoAddAdUnits();  
    var adUnitsIdAvailableOnPage = loadAdUnitsIdsOnPage();    
    console.log("DOMLoad: " + adUnitsIdAvailableOnPage.length);
    
    addAdUnits(adUnitsIdAvailableOnPage);    
    setInterval(function(){refresh();},pbAMS.autoRefresh.interval);
    if (pbAMS.analytics.trackAdblock) {
        trackAdblock();
    }
});


