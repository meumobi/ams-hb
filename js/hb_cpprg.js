/* Websites infos */

var AMSID = '909426';

var pbAMS = {
    analytics: {
        trackAdblock: true,
        trackPrebid: true,
    },    
    autoRefresh: {
        interval: 15000, //milliseconds
        minVisibility: 0.75, //range 0-1
    }
}

var prebidAdUnits = ["6544251"];


/* Wallpaper */

var wallpaperdesk = 6544243
var awallpaperdesk = 'CPPwallpaperatfdesk'
var wallpapertab = 6544244
var awallpapertab = 'CPPwallpaperatftab'
var wallpapermob = 6544240
var awallpapermob = 'CPPwallpaperatfmob'

/* Rich Media */

var richdesk = 6544254
var arichdesk = 'CPPrichbtfdesk'
var richtab = 6544241
var arichtab = 'CPPrichbtftab'
var richmob = 6544239
var arichtab = 'CPPrichbtfmob'

/* leaderboard ATF */

var leaderatfdesk = 6544248
var aleaderatfdesk = 'CPPleaderatfdesk'
var leaderatftab = 6544249
var aleaderatftab = 'CPPleaderatftab'
var leaderatfmob = 6544252
var aleaderatfmob = 'CPPleaderatfmob'

/* leaderboard BTF */

var leaderbtfdesk = 6544253
var aleaderbtfdesk = 'CPPleaderbtfdesk'
var leaderbtftab = 6544247
var aleaderbtftab = 'CPPleaderbtftab'
var leaderbtfmob = 6544503
var aleaderbtfmob = 'CPPleaderbtfmob'

/* medium rectangle ATF */

var squareatfdesk = 6544250
var asquareatfdesk = 'CPPsquareatfdesk'
var squareatftab = 6544246
var asquareatftab = 'CPPsquareatftab'
var squareatfmob = 6544496
var asquareatfmob = 'CPPsquareatfmob'

/* medium rectangle STF */

var squarestfdesk = 6544251
var asquarestfdesk = 'CPPsquarestfdesk'
var squarestftab = 6544237
var asquarestftab = 'CPPsquarestftab'
var squarestfmob = 6544502
var asquarestfmob = 'CPPsquarestfmob'

// SAS

var IdSiteSAS = '205386'

var PageIdSASdeskATF = '889763'
var PageIdSASdeskBTF = '889764'
var PageIdSASdeskSTF = '889765'
var PageIdSAStabATF = '889770'
var PageIdSAStabBTF = '889771'
var PageIdSAStabSTF = '889772'
var PageIdSASmobATF = '889766'
var PageIdSASmobBTF = '889767'
var PageIdSASmobSTF = '889768'

var sizeIdSASleader = '45846'
var sizeIdSASsquare = '45838'
var sizeIdSASheader = '46454'

// Improve Digital

var IdPOLPlacementleaddeskatf = 1121204
var IdPOLPlacementleaddeskbtf = 1121205
var IdPOLPlacementsquadeskatf = 1121206
var IdPOLPlacementsquadeskstf = 1121207
var IdPOLPlacementleadtabatf = 1121212
var IdPOLPlacementleadtabbtf = 1121211
var IdPOLPlacementsquatabatf = 1121210
var IdPOLPlacementsquatabstf = 1121209
var IdPOLPlacementleadmobatf = 1121213
var IdPOLPlacementleadmobbtf = 1121214
var IdPOLPlacementsquamobatf = 1121215
var IdPOLPlacementsquamobstf = 1121216

/*var Rubicon*/

var IdSiteRubidesk =  '167462';
var IdSiteRubimob =  '167484';

var IdzoneRubiatfd =  '806224';
var IdzoneRubibtfd =  '806226';
var IdzoneRubiatfm =  '806228';
var IdzoneRubibtfm =  '806230';

// keyvalue AMS

var urlams = location.href;
var nbcar = urlams.length;
var urlnb = 29;
var catnb = 4;
var posa = nbcar-15;
urlend = urlams.substring(posa, nbcar-1);

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
    siteid: AMSID,
    params: {
        loc: '100',
        kvcat: kvpage + '',
        kvref: urlref + '',
        kvrefhb: urlref + '',
        kvurlend: urlend + '',
    }
}


/* var AdUnits*/

var adUnits = [
    {
        code: wallpaperdesk + '',
        responsive: {useresponsive: true},
        bounds: [
            { id: wallpapermob, min: 0, max: 767 },
            { id: wallpapertab, min: 768, max: 1023 },
            { id: wallpaperdesk, min: 1024, max: 9999 },
        ],
        sizeid: '16',
        bids: []
    },
    {
        code: richdesk + '',
        responsive: {useresponsive: true},
        bounds: [
            { id: richmob, min: 0, max: 767 },
            { id: richtab, min: 768, max: 1023 },
            { id: richdesk, min: 1024, max: 9999 },
        ],
        sizeid: '16',
        bids: []
    },
    {
        code: leaderatfdesk + '',
        alias: aleaderatfdesk,
        autoRefresh: true,
        fif: { usefif: true },
        responsive: {useresponsive: true},        
        sizeMapping: [
            {
                minWidth: 1024,
                sizes: [[728, 90]]
            },
        ],
        bounds: [
            { id: 6544248, min: 1024, max: 9999 }
        ],
        sizeid: '225',
        bids: [ 
            {
                bidder: 'smartadserver',
                params: {
                    domain: '//prg.smartadserver.com',
                    siteId: IdSiteSAS,
                    pageId: PageIdSASdeskATF,
                    formatId: sizeIdSASleader,
                }
            },
            {
                bidder: "improvedigital",
                params: {
                    placementId: IdPOLPlacementleaddeskatf,
                }
            },
            {
                bidder: 'rubicon',
                params: {
                    accountId: '14794',
                    siteId: IdSiteRubidesk,
                    zoneId: IdzoneRubiatfd,
                    floor: '0.20',
                }
            },
        ]
    },
    {
        code: leaderatftab + '',
        alias: aleaderatftab,
        responsive: {useresponsive: true},
        fif: { usefif: true },
        sizeMapping: [
            {
                minWidth: 1024,
                sizes: []
            },
            {
                minWidth: 768,
                sizes: [[728, 90]]
            },
        ],
        bounds: [
            { id: aleaderatftab, min: 768, max: 1023, adContainerId: leaderatfdesk },
        ],
        bids: [
            {
                bidder: 'smartadserver',
                params: {
                    domain: '//prg.smartadserver.com',
                    siteId: IdSiteSAS,
                    pageId: PageIdSAStabATF,
                    formatId: sizeIdSASleader,
                }
            },
                    {
            bidder: "improvedigital",
            params: {
                placementId: IdPOLPlacementleadtabatf,
            }
        },
        {
            bidder: 'rubicon',
            params: {
                accountId: '14794',
                siteId: IdSiteRubidesk,
                zoneId: IdzoneRubiatfd,
                floor: '0.20',
            }
        },
        ]
    },
    {
        code: leaderatfmob + '',
        alias: aleaderatfmob,
        responsive: {useresponsive: true},
        fif: { usefif: true },
        sizeMapping: [
            {
                minWidth: 768,
                sizes: []
            },
            {
                minWidth: 0,
                sizes: [[320, 50], [320, 100], [320, 53], [320, 160], [320, 320]]
            },
        ],
        bounds: [
            { id: aleaderatfmob, min: 0, max: 767, adContainerId: leaderatfdesk },
        ],
        bids: [
            {
                bidder: 'smartadserver',
                params: {
                    domain: '//prg.smartadserver.com',
                    siteId: IdSiteSAS,
                    pageId: PageIdSASmobATF,
                    formatId: sizeIdSASheader,
                }
            },
            {
                bidder: "improvedigital",
                params: {
                    placementId: IdPOLPlacementleadmobatf,
                }
            },
            {
                bidder: 'rubicon',
                params: {
                    accountId: '14794',
                    siteId: IdSiteRubimob,
                    zoneId: IdzoneRubiatfm,
                    floor: '0.20',
                }
            },
        ]
    },
    {
        code: leaderbtfdesk + '',
        responsive: {useresponsive: true},
        autoRefresh: true,
        fif: { usefif: true },
        sizeMapping: [
            {
                minWidth: 1024,
                sizes: [[728, 90]]
            },
        ],
        bounds: [
            { id: leaderbtfdesk, min: 1024, max: 9999 }
        ],
        sizeid: '225',
        bids: [
            {
                bidder: 'smartadserver',
                params: {
                    domain: '//prg.smartadserver.com',
                    siteId: IdSiteSAS,
                    pageId: PageIdSASdeskBTF,
                    formatId: sizeIdSASleader,
                }
            },
            {
                bidder: "improvedigital",
                params: {
                    placementId: IdPOLPlacementleaddeskbtf,
                }
            },
            {
                bidder: 'rubicon',
                params: {
                    accountId: '14794',
                    siteId: IdSiteRubidesk,
                    zoneId: IdzoneRubibtfd,
                    floor: '0.20',
                }
            },
         ]
    },
    {
        code: leaderbtftab + '',
        alias: aleaderbtftab,
        responsive: {useresponsive: true},
        fif: { usefif: true },
        sizeMapping: [
            {
                minWidth: 1024,
                sizes: []
            },
            {
                minWidth: 768,
                sizes: [[728, 90]]
            },
        ],
        bounds: [
            { id: aleaderbtftab, min: 768, max: 1023, adContainerId: leaderbtfdesk },
        ],
        bids: [
            {
                bidder: 'smartadserver',
                params: {
                    domain: '//prg.smartadserver.com',
                    siteId: IdSiteSAS,
                    pageId: PageIdSAStabBTF,
                    formatId: sizeIdSASleader,
                }
            },
            {
                bidder: "improvedigital",
                params: {
                    placementId: IdPOLPlacementleadtabbtf,
                }
            },
            {
                bidder: 'rubicon',
                params: {
                    accountId: '14794',
                    siteId: IdSiteRubidesk,
                    zoneId: IdzoneRubibtfd,
                    floor: '0.20',
                }
            },
        ]
    },
    {
        code: leaderbtfmob + '',
        alias: aleaderbtfmob,
        responsive: {useresponsive: true},
        fif: { usefif: true },
        sizeMapping: [
            {
                minWidth: 768,
                sizes: []
            },
            {
                minWidth: 0,
                sizes: [[320, 50], [320, 100], [320, 53], [320, 160], [320, 320]]
            },
        ],
        bounds: [
            { id: aleaderbtfmob, min: 0, max: 767, adContainerId: leaderbtfdesk },
        ],
        bids: [
            {
                bidder: 'smartadserver',
                params: {
                    domain: '//prg.smartadserver.com',
                    siteId: IdSiteSAS,
                    pageId: PageIdSASmobBTF,
                    formatId: sizeIdSASheader,
                }
            },
            {
                bidder: "improvedigital",
                params: {
                    placementId: IdPOLPlacementleadmobbtf,
                }
            },
            {
                bidder: 'rubicon',
                params: {
                    accountId: '14794',
                    siteId: IdSiteRubimob,
                    zoneId: IdzoneRubibtfm,
                    floor: '0.20',
                }
            },
        ]
    },
    {
        code: squareatfdesk + '',
        responsive: {useresponsive: true},
        autoRefresh: true,
        fif: { usefif: true },
        sizeMapping: [
            {
                minWidth: 1024,
                sizes: [[300, 250], [300, 600]]
            },
        ],
        bounds: [
            { id: squareatfdesk, min: 1024, max: 9999 }
        ],
        sizeid: '170',
        bids: [ 
            {
                bidder: 'smartadserver',
                params: {
                    domain: '//prg.smartadserver.com',
                    siteId: IdSiteSAS,
                    pageId: PageIdSASdeskATF,
                    formatId: sizeIdSASsquare,
                }
            },
            {
                bidder: "improvedigital",
                params: {
                    placementId: IdPOLPlacementsquadeskatf,
                }
            },
            {
                bidder: 'rubicon',
                params: {
                    accountId: '14794',
                    siteId: IdSiteRubidesk,
                    zoneId: IdzoneRubiatfd,
                    floor: '0.20',
                }
            },
        ]
    },
    {
        code: squareatftab + '',
        alias: asquareatftab,
        responsive: {useresponsive: true},
        fif: { usefif: true },
        sizeMapping: [
            {
                minWidth: 1024,
                sizes: []
            },
            {
                minWidth: 768,
                sizes: [[300, 250]]
            },
        ],
        bounds: [
            { id: asquareatftab, min: 768, max: 1023, adContainerId: squareatfdesk },
        ],
        bids: [
            {
                bidder: 'smartadserver',
                params: {
                    domain: '//prg.smartadserver.com',
                    siteId: IdSiteSAS,
                    pageId: PageIdSAStabATF,
                    formatId: sizeIdSASsquare,
                }
            },
            {
                bidder: "improvedigital",
                params: {
                    placementId: IdPOLPlacementsquatabatf,
                }
            },
            {
                bidder: 'rubicon',
                params: {
                    accountId: '14794',
                    siteId: IdSiteRubidesk,
                    zoneId: IdzoneRubiatfd,
                    floor: '0.20',
                }
            },
        ]
    },
    {
        code: squareatfmob + '',
        alias: asquareatfmob,
        responsive: {useresponsive: true},
        fif: { usefif: true },
        sizeMapping: [
            {
                minWidth: 768,
                sizes: []
            },
            {
                minWidth: 0,
                sizes: [[300, 250], [300, 600]]
            },
        ],
        bounds: [
            { id: asquareatfmob, min: 0, max: 767, adContainerId: squareatfdesk },
        ],
        bids: [
            {
                bidder: 'smartadserver',
                params: {
                    domain: '//prg.smartadserver.com',
                    siteId: IdSiteSAS,
                    pageId: PageIdSASmobATF,
                    formatId: sizeIdSASsquare,
                }
            },
            {
                bidder: "improvedigital",
                params: {
                    placementId: IdPOLPlacementsquamobatf,
                }
            },
            {
                bidder: 'rubicon',
                params: {
                    accountId: '14794',
                    siteId: IdSiteRubimob,
                    zoneId: IdzoneRubiatfm,
                    floor: '0.20',
                }
            },
        ]
    },
    {
        code: squarestfdesk + '',
        responsive: {useresponsive: true},
        fif: { usefif: true },
        sizeMapping: [
            {
                minWidth: 1024,
                sizes: [[300, 250], [300, 600]]
            },
        ],
        bounds: [
            { id: squarestfdesk, min: 1024, max: 9999 }
        ],
        sizeid: '170',
        bids: [
            {
                bidder: 'smartadserver',
                params: {
                    domain: '//prg.smartadserver.com',
                    siteId: IdSiteSAS,
                    pageId: PageIdSASdeskSTF,
                    formatId: sizeIdSASsquare,
                }
            },
            {
                bidder: "improvedigital",
                params: {
                    placementId: IdPOLPlacementsquadeskstf,
                }
            },
            {
                bidder: 'rubicon',
                params: {
                    accountId: '14794',
                    siteId: IdSiteRubidesk,
                    zoneId: IdzoneRubibtfd,
                    floor: '0.20',
                }
            },
         ]
    },
    {
        code: squarestftab + '',
        alias: asquarestftab,
        responsive: {useresponsive: true},
        fif: { usefif: true },
        sizeMapping: [
            {
                minWidth: 1024,
                sizes: []
            },
            {
                minWidth: 768,
                sizes: [[300, 250]]
            },
        ],
        bounds: [
            { id: asquarestftab, min: 768, max: 1023, adContainerId: squarestfdesk },
        ],
        bids: [
            {
                bidder: 'smartadserver',
                params: {
                    domain: '//prg.smartadserver.com',
                    siteId: IdSiteSAS,
                    pageId: PageIdSAStabSTF,
                    formatId: sizeIdSASsquare,
                }
            },
            {
                bidder: "improvedigital",
                params: {
                    placementId: IdPOLPlacementsquatabstf,
                }
            },
            {
                bidder: 'rubicon',
                params: {
                    accountId: '14794',
                    siteId: IdSiteRubidesk,
                    zoneId: IdzoneRubibtfd,
                    floor: '0.20',
                }
            },
        ]
    },
    {
        code: squarestfmob + '',
        alias: asquarestfmob,
        responsive: {useresponsive: true},
        fif: { usefif: true },
        sizeMapping: [
            {
                minWidth: 768,
                sizes: []
            },
            {
                minWidth: 0,
                sizes: [[300, 250], [300, 600]]
            },
        ],
        bounds: [
            { id: asquarestfmob, min: 0, max: 767, adContainerId: squarestfdesk },
        ],
        bids: [
            {
                bidder: 'smartadserver',
                params: {
                    domain: '//prg.smartadserver.com',
                    siteId: IdSiteSAS,
                    pageId: PageIdSASmobSTF,
                    formatId: sizeIdSASsquare,
                }
            },
            {
                bidder: "improvedigital",
                params: {
                    placementId: IdPOLPlacementsquamobstf,
                }
            },
            {
                bidder: 'rubicon',
                params: {
                    accountId: '14794',
                    siteId: IdSiteRubimob,
                    zoneId: IdzoneRubibtfm,
                    floor: '0.20',
                }
            },
        ]
    },
 
]

function placesquare() {
    

    var div1 = document.createElement("div");
    
    div1.setAttribute("id", "squarestf");
    
    var div2 = document.getElementsByClassName("evcal_month_line")[1];
    
    var parentDiv = div2.parentNode;
    
    parentDiv.insertBefore(div1, div2);
    
    document.getElementById('squarestf').appendChild(document.getElementById('6544251'));
    document.getElementById('squarestf').style.marginTop ="10px";
    }

    document.addEventListener('DOMContentLoaded', function () {
        // placesquare()
    }, false);


(function () {
    var d = document;
    var helpers = d.createElement("script");
    helpers.type = "text/javascript";
    helpers.src = 'https://firebasestorage.googleapis.com/v0/b/admytests.appspot.com/o/helpers.js?alt=media&token=f48e6b91-cb1b-488c-b26e-8624bb5180df';
    var target = d.getElementsByTagName("head")[0];
    target.insertBefore(helpers, target.firstChild);
})();    


    