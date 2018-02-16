(function () {
    var d = document;
    var pbs = d.createElement("script");
    pbs.type = "text/javascript";
    pbs.src = 'https://admytests.firebaseapp.com/js/pbams.js';
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

(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-113326323-1', 'auto');

function trackJavaScriptError(e) {
    var ie = window.event,
        errMsg = e.message || ie.errorMessage;
    var errSrc = (e.filename || ie.errorUrl) + ': ' + (e.lineno || ie.errorLine);
    ga('send', 'event', 'JavaScript Error', errMsg, errSrc, { 'nonInteraction': 1 });
}

window.addEventListener('error', trackJavaScriptError, false);
var times = 0;
var QUEUEMANAGER = {
    queue: [],
    processing: false, 
    add: function (params, callback) {
        var date = new Date();
        console.log("add times:" + times + "|" + date.getTime() );         
        this.queue.push([params, callback]);
        this.process();
    },
    process: function() {  
        if (!this.processing) {         
            if (this.queue.length>0) {
                this.processing = true;  
                times++;
                var date = new Date();
                console.log("init times:" + times + "|" + date.getTime() );  
                var item = this.queue.shift();
                item[1](item[0]);
                                          
            }
        }       
    },
    end: function() {
        if (this.processing) {
            var date = new Date();
            console.log("end times:" + times +  "|" + date.getTime() );                    
            this.processing = false;  
            this.process();
        }
    }
}


var HELPERS = {
    arrayDiff: function(array1, array2) {
        return array1.filter(function (i) {
            return array2.indexOf(i) === -1;
        });
    },
    /*
        filterArrayByKeys([1,2,3,4], [2,4])) return [2,4]
    */
    filterArrayByKeys: function (array, keys) {
        return array.filter(
            function (e) {
                return !(this.indexOf(e) < 0);
            }
            , keys);
    },

    lookupByToken: function (array, token) {
        var lookup = [];
        for (var i = 0, len = array.length; i < len; i++) {
            lookup[array[i][token]] = array[i];
        }
        return lookup;
    },

    mergeRecursive: function (obj1, obj2) {
        if (Array.isArray(obj2)) {
            return obj1.concat(obj2);
        };
        for (var p in obj2) {
            try {
                // Property in destination object set; update its value.
                if (obj2[p].constructor == Object) {
                    obj1[p] = mergeRecursive(obj1[p], obj2[p]);
                } else if (Array.isArray(obj2[p])) {
                    obj1[p] = obj1[p].concat(obj2[p]);
                } else {
                    obj1[p] = obj2[p];
                }
            } catch (e) {
                // Property in destination object not set; create it and set its value.
                obj1[p] = obj2[p];
            }
        };

        return obj1;
    },

    trackAdblock: function () {
        console.log('tracking adblock');
        var test = document.createElement('div');
        test.innerHTML = '&nbsp;';
        test.className = 'adsbox';
        document.body.appendChild(test);
        window.setTimeout(function () {
            if (test.offsetHeight === 0) {
                ga('send', 'event', 'Ad Setting', 'Adblock', 'Enabled');
            } else {
                ga('send', 'event', 'Ad Setting', 'Adblock', 'Disabled');
            }
            test.remove();
        }, 400);
    },

    logAdUnits: function(adUnitIds) {
        var output = [];
        for (var j = 0; j < adUnitIds.length; j++) {
            console.log(adUnitIds[j]);
            output.push({
                'adunitid': adUnitIds[j]
            });
        }
        
        if (output.length) {
            if (console.table) {
                console.table(output);
            } else {
                for (var j = 0; j < output.length; j++) {
                    console.log(output[j]);
                }
            } 
        }
    },

    logBidResponses: function (responses) {

        var output = [];
        for (var adunit in responses) {
            if (responses.hasOwnProperty(adunit)) {
                var bids = responses[adunit].bids;
                for (var i = 0; i < bids.length; i++) {
                    var b = bids[i];
                    output.push({
                        'adunit': adunit, 'adId': b.adId, 'size': b.size, 'bidder': b.bidder,
                        'time': b.timeToRespond, 'cpm': b.cpm, 'msg': b.statusMessage
                    });
                }
            }
        }
        if (output.length) {
            if (console.table) {
                console.table(output);
            } else {
                for (var j = 0; j < output.length; j++) {
                    console.log(output[j]);
                }
            }
        } else {
            console.warn('NO prebid responses');
        }
    }
};

var CONFIG = {
    adServer: function (siteId) {
        var urlams = location.href;
        var nbcar = urlams.length;
        var urlnb = 29;
        var catnb = 4;
        var posa = nbcar - 15;
        urlend = urlams.substring(posa, nbcar - 1);

        kvpage = urlams.substring(urlnb, urlnb + catnb);
        urllrn = urlams.substring(30, 20);

        var ref = document.referrer
        var urlref = ref.substring(0, 28)

        // Adserver 

        var adServer = {};

        adServer.config = {
            protocol: 'https',
            server: 'secserv.adtech.de',
            network: '1502.1',
            siteid: siteId,
            params: {
                loc: '100',
                kvcat: kvpage + '',
                kvref: urlref + '',
                kvrefhb: urlref + '',
                kvurlend: urlend + '',
            }
        }

        return adServer;
    },

    hbAMS: function () {
        var defaultSettings = {
            analytics: {
                trackAdblock: true,
                trackPrebid: true,
            },
            autoRefresh: {
                interval: 15000, // milliseconds
                minVisibility: 0.75, // range 0-1
                onlyIfBidWinner: false,
            },
            // prebidAdUnits: ["6544251"],
            bidTimeout: 1200
        }

        return defaultSettings;
    }
};

var pbams = pbams || {};

var hbAMS = (function (hb, HELPERS, CONFIG, ADTECH, pbams, queueManager) {

    var adUnitIdsAutoRefresh = [];
    var adUnitIdsBade = [];
    var adUnitsByToken;
    var localSettings = hb.settings;




    pbams.que = pbams.que || [];
    hb.settings = HELPERS.mergeRecursive(CONFIG.hbAMS(), localSettings);
    console.log("Current settings");
    console.dir(hb.settings);

    var status = {
        initAdServerSet: false,
        refreshing: false
    }

    function initAdserver() {        
        console.log("initing adserver");
        console.log("loginiAdServerSet: " + status.initAdServerSet);
        if (status.initAdServerSet) return;
        console.log("initAdServerSet undefined or false");
        (function () {
            console.log("self-invoking function");
            console.log(CONFIG.adServer(hb.settings.siteId));
            if (!CONFIG.adServer(hb.settings.siteId)) {
                console.error("adServer.config Object missing");
                return;
            }
            ADTECH.config.page = CONFIG.adServer(hb.settings.siteId).config;
            
            console.log("adUnitsByToken");
            console.log(adUnitsByToken);
            for (var slot in adUnitsByToken) {
                console.log("ADTECH enqueue: " + slot);
                ADTECH.enqueueAd(slot);
            }
            console.log(ADTECH.config.placements);
            console.log(ADTECH.config);
            ADTECH.executeQueue();

        })();
        status.initAdServerSet = true;
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

    function sendAdserverRequest(bidResponses) {            
        var targetingParams = pbams.getAdserverTargeting();
        var responses = pbams.getBidResponses();     
        console.log(pbams.getAllWinningBids());
        console.log("hb.settings.autoRefresh.onlyIfBidWinner: " + hb.settings.autoRefresh.onlyIfBidWinner);       
        console.log("status.refreshing: " + status.refreshing);       
        if (hb.settings.autoRefresh.onlyIfBidWinner && status.refreshing) {
            var winners = pbams.getAllWinningBids();
            winners = HELPERS.lookupByToken(winners,'adUnitCode');
            adUnitsByToken = HELPERS.lookupByToken(filterAdUnitsByIds(adUnitsByToken, Object.keys(winners)), 'code');
            console.log("winners");
            console.log(winners);
        }
        status.refreshing = false;
        console.log("Send AdServer request");
        HELPERS.logBidResponses(responses);
        console.log(pbams.adserverRequestSent);
        
        if (pbams.adserverRequestSent) return;
        console.log("Set pbams.adserverRequestSent true");
        pbams.adserverRequestSent = true;
        console.log(adUnitsByToken);
        for (var slot in adUnitsByToken) {
            console.log("init slot: " + slot);
            var paramsObj = {
                target: '_blank',
                loc: '100'
            };
            
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
                paramsObj['kvhb_refresh'] = true;
                var bidderCode = targetingParams[slot]['hb_bidder'];
                var idplacement = slot + '';
                console.log(idplacement);

                
                paramsObj['kvhb_pb_' + bidderCode.substring(0, 5)] = targetingParams[slot]['hb_pb'];
                paramsObj['kvhb_adid_' + bidderCode.substring(0, 5)] = targetingParams[slot]['hb_adid'];
                paramsObj['kvhb_deal_' + bidderCode.substring(0, 5)] = targetingParams[slot]['hb_deal'];
                paramsObj['kvhb_size'] = targetingParams[slot]['hb_size'];
                
            }   
            ADTECH.config.placements[slot].params = paramsObj;

            console.log("end slot: " + slot);
            
        }
        console.log("End sendAdserverRequest");
        
        initAdserver(); 
        queueManager.end();      
    }

    function requestBids(adUnitIds) {
        console.log("Request bids");
        HELPERS.logAdUnits(adUnitIds);            
        var adUnits = filterAdUnitsByIds(HELPERS.lookupByToken(hb.settings.adUnits, 'code'), adUnitIds);
        console.log(adUnits);
        adUnitsByToken = HELPERS.lookupByToken(adUnits, 'code');
        console.log(adUnitsByToken);             
        status.initAdServerSet = false;
        
        pbams.que.push(function() {
            pbams.adserverRequestSent = false;     
            pbams.requestBids({
                adUnits: adUnits,
                timeout: 1200,//hb.settings.bidTimeout, 
                bidsBackHandler: sendAdserverRequest
            });     
        });
    }
    
    function loadAdUnitIdsOnPage() {
        var adUnitsOnPage = document.getElementsByClassName("ams-ad");
        return [].slice.call(adUnitsOnPage).map(element => element.id);
    }

    function filterAdUnitsByIds(adUnits, adUnitIds) {
        return adUnitIds.map(function(e) {
            return adUnits[e];
        });            
    }      

    function filterAdUnitIdsVisibility(adUnitIds) {            
        return adUnitIds.filter(function(element) {    
            if (document.getElementById(element)) {
                var elementVisibility = VisSense(document.getElementById(element));  
                return elementVisibility.percentage() > hb.settings.autoRefresh.minVisibility;
            } else {
                return false;
            }
        });
    }    

    function filterAdUnitIdsAutoRefresh(adUnits, adUnitIds) {            
        return adUnitIds.filter(function(element) {                
            return adUnits[element].autoRefresh;
        });
    }

    function configBid() {
        pbams.que.push(function () {
            pbams.setPriceGranularity('dense');
            pbams.setConfig({ priceGranularity: 'dense' }, { cookieSyncDelay: 200 });
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
            if (hb.settings.analytics.trackPrebid) {
                trackPrebid();
            }
        });
    }

    function refresh() {
        status.refreshing = true;
        var adUnitIdsVisible = filterAdUnitIdsVisibility(adUnitIdsAutoRefresh);
        if (adUnitIdsVisible.length > 0) {    
            console.log("refreshing: " + adUnitIdsVisible.length);           
            requestBids(adUnitIdsVisible);     
                    
        }
    }

    function addAdUnitIds(adUnitIds) {                       
        var adUnitIdsToBid = HELPERS.arrayDiff(adUnitIds, adUnitIdsBade);
        console.log("Add Ad units to bid: " + adUnitIdsToBid.length);
        HELPERS.logAdUnits(adUnitIdsToBid);
        if (adUnitIdsToBid.length > 0) {
            requestBids(adUnitIdsToBid);     
            adUnitIdsBade = adUnitIdsBade.concat(adUnitIdsToBid);   
            adUnitIdsAutoRefresh = adUnitIdsAutoRefresh.concat(filterAdUnitIdsAutoRefresh(HELPERS.lookupByToken(hb.settings.adUnits, 'code'), adUnitIdsToBid));
        } 
    }

    function trackPrebid() {
        console.log('tracking prebid');
        pbams.que.push(function () {
            pbams.enableAnalytics({
                provider: 'ga',
                options: {
                    global: 'ga',
                    enableDistribution: false,
                }
            });
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        //if (!hb.settings.prebidAdUnitIds || hb.settings.prebidAdUnitIds.length == 0) {
            var adUnitIdsAvailableOnPage = loadAdUnitIdsOnPage();    
            console.log("DOMContentLoaded, total of adUnits on page: " + adUnitIdsAvailableOnPage.length);
            if (adUnitIdsAvailableOnPage.length>0) {
                addAdUnitIds(adUnitIdsAvailableOnPage);
            }            
        //}       
           
        setInterval(
            function () {
                refresh();
            }, hb.settings.autoRefresh.interval
        );
        if (hb.settings.analytics.trackAdblock) {
            HELPERS.trackAdblock();
        }
    });

    configBid();
    // var adUnitsByToken = HELPERS.lookupByToken(hb.settings.adUnits, 'code');
    //var filteredArray = HELPERS.filterArrayByKeys(Object.keys(adUnitsByToken), hbAMS.settings.prebidAdUnitIds);
    // console.log(Object.values(filteredArray));

    if (hb.settings.prebidAdUnitIds && hb.settings.prebidAdUnitIds.length > 0) {
        queueManager.add(hb.settings.prebidAdUnitIds, addAdUnitIds);
    }

    return hb;
}(hbAMS, HELPERS, CONFIG, ADTECH, pbams, QUEUEMANAGER));