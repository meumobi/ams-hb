var hbAMS = {};

hbAMS.settings = {
  siteId: '909912',
  analytics: {
      trackAdblock: true,
      trackPrebid: true,
  },    
  autoRefresh: {
      interval: 10000, //milliseconds
      minVisibility: 0.49, //range 0-1
      onlyIfBidWinner: false
  },
  prebidAdUnitIds: ["6546430", "6546432", 6546433, 6546434, 6546435, 6546436, 6568501, 6568502, 6568503, 6568504, 6568505, 6570074, 6570075, 6570109, 6570119, 6570135]
}

// Wallpaper

var wallpaperdesk = 6546436
var awallpaperdesk = 'fbowallpaperdesk'
var wallpapermob = 6546437
var awallpapermob = 'fbowallpapermob'
var wallpapertab = 6546438
var awallpapertab = 'fbowallpapertab'

// Square ATF


var squareatfdesk = 6546430;
var asquareatfdesk = 'fbosquareatfadesk';
var squareatftab = 6546432;
var asquareatftab = 'fbosquareatfatab';
var leaderatfmob = 6546433;
var aleaderatfmob = 'fboleaderatfamob';

// Square BTF

var squarebtfdesk = 6568501;
var asquarebtfdesk = 'fbosquarestf2desk';
var squarebtftab = 6570109;
var asquarebtftab = 'fbosquarestf2tab';
var leaderbtfmob = 6570135;
var aleaderbtfmob = 'fboleaderstfamob';

// Square STF

var squarestf1desk = 6546434;
var asquarestf1desk = 'fbosquarestfadesk';
var squarestftab = 6546435
var asquarestftab = 'fbosquarestfatab';
var leaderstf1mob = 6570119;
var aleaderstf1mob = 'fboleaderstfbmob';

// Square stfb

var squarestf2desk = 6568502;
var asquarestf2desk = 'fbosquareatfcdesk';
var squarestf2tab = 6570074;
var asquarestf2tab = 'fbosquareatfctab';
var leaderstf2mob = 6568504;
var aleaderstf2mob = 'fboleaderatfbmob';

// Square stfc

var squarestf3desk = 6568503;
var asquarestf3desk = 'fbosquareatfbdesk';
var squarestf3tab = 6570075;
var asquarestf3tab = 'fbosquareatfbtab';
var leaderstf3mob = 6568505;
var aleaderstf3mob = 'fboleaderatfcmob';



// Improve Digital

var IdPOLsquareatfdesk = 1122992
var IdPOLsquarestf1desk = 1122993
var IdPOLsquarebtfdesk = 1134868
var IdPOLsquareatftab = 1122992
var IdPOLsquarestftab = 1122993
var IdPOLsquarebtftab = 1134868
var IdPOLleaderatfmob = 1132901
var IdPOLleaderbtfmob = 1134869
var IdPOLleaderstf1mob = 1132904
var IdPOLsquarestf2desk = 1132331
var IdPOLsquarestf2tab = 1132331
var IdPOLleaderstf2mob = 1132902
var IdPOLsquarestf3tab = 1132330
var IdPOLsquarestf3desk = 1132330
var IdPOLleaderstf3mob = 1132903

// Rubicon

var IdSiteRubidesk = '168096'
var IdSiteRubimob = '168098'
var IdzoneRubiatfd = '838466'
var IdzoneRubiatfm = '810984'
var IdzoneRubibtfd = '810970'
var IdzoneRubibtfm = '810988'
var IdzoneRubistfd = '838464'
var IdzoneRubistfm = '845076'
var IdzoneRubistfb = '838466'
var IdzoneRubistfbm = '845078'
var IdzoneRubistfcd = '838468'
var IdzoneRubistfcm = '845080'


// Smart Adserver

var IdSiteSAS = '206540'

var PageIdSASdeskATF = '893406'
var PageIdSASdeskBTF = '893407'
var PageIdSASdeskSTF = '893408'
var PageIdSAStabATF = '893413'
var PageIdSAStabBTF = '893414'
var PageIdSAStabSTF = '893415'
var PageIdSASmobATF = '893409'
var PageIdSASmobBTF = '893410'
var PageIdSASmobSTF = '893411'
var PageIdSASdeskstfb = '909145'
var PageIdSASmobstfb = '909146'
var PageIdSASdeskstfc = '909149'
var PageIdSASmobstfc = '909150'
var sizeIdSASleader = '45846'
var sizeIdSASsquare = '45838'
var sizeIdSASheader = '46454'

// WideSpace

var sidheader ='bb215c0b-aa8c-4d23-8369-1e4bcbd3526f';
var sidsquare = '4c74a4d5-b314-494e-9245-1891f312af90';

/* var AdUnits*/

hbAMS.settings.adUnits = [

    // Wallpaper

{
    code: wallpaperdesk,
    alias: awallpaperdesk,
    responsive: {useresponsive: true},
    bounds: [
        { id: wallpapermob, min: 0, max: 767 },
        { id: wallpapertab, min: 768, max: 1023 },
        { id: wallpaperdesk, min: 1024, max: 9999 },
    ],
    sizeid: '16',
    bids: []
},
// Square ATF
{
    code: squareatfdesk,
    autoRefresh: true,
    alias: asquareatfdesk,
    responsive: {useresponsive: true},
    fif: { usefif: true },
    sizeMapping: [
        {
            minWidth: 1024,
            sizes: [300, 250]
        },
    ],
    bounds: [
        { id: squareatfdesk, min: 1024, max: 9999 }
    ],
    sizeid: '225',
    bids: [ 
        {
            bidder: 'rubicon',
            params: {
                accountId: '14794',
                siteId: IdSiteRubidesk,
                zoneId: IdzoneRubiatfd,
                position: 'atf',
                floor: '0.20',
            }
        },
        {
            bidder: "improvedigital",
            params: {
                placementId: IdPOLsquareatfdesk,
            }
        },
        {
            bidder: 'smartadserver',
            params: {
                domain: '//prg.smartadserver.com',
                siteId: IdSiteSAS,
                pageId: PageIdSASdeskATF,
                formatId: sizeIdSASsquare,
            }
        },  

    ]
},
{
    code: squareatftab,
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
            sizes: [300, 250]
        },
    ],
    bounds: [
        { id: asquareatftab, min: 768, max: 1023, adContainerId: squareatfdesk },
    ],
    bids: [
        {
            bidder: 'rubicon',
            params: {
                accountId: '14794',
                siteId: IdSiteRubidesk,
                zoneId: IdzoneRubiatfd,
                position: 'atf',
                floor: '0.20',
            }
        },
        {
            bidder: "improvedigital",
            params: {
                placementId: IdPOLsquareatftab,
            }
        },
        {
            bidder: 'smartadserver',
            params: {
                domain: '//prg.smartadserver.com',
                siteId: IdSiteSAS,
                pageId: PageIdSAStabATF,
                formatId: sizeIdSASsquare,
            }
        },   
    ]
},
{
    code: leaderatfmob,
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
            sizes: [[320, 50], [320, 100]]
        },
    ],
    bounds: [
        { id: aleaderatfmob, min: 0, max: 767, adContainerId: squareatfdesk },
    ],
    bids: [
        {
            bidder: 'rubicon',
            params: {
                accountId: '14794',
                siteId: IdSiteRubimob,
                zoneId: IdzoneRubibtfm,
                position: 'btf',
                floor: '0.20',
            }
        },
        {
            bidder: "improvedigital",
            params: {
                placementId: IdPOLleaderbtfmob,
            }
        },
        {
            bidder: 'smartadserver',
            params: {
                domain: '//prg.smartadserver.com',
                siteId: IdSiteSAS,
                pageId: PageIdSASmobBTF,
                formatId: sizeIdSASsquare,
            }
        },  
 
    ]
},
    // Square BTF
{
    code: squarebtfdesk,
    alias: asquarebtfdesk,
    responsive: {useresponsive: true},
    fif: { usefif: true },
    sizeMapping: [
        {
            minWidth: 1024,
            sizes: [[300, 250], [300, 600]]
        },
    ],
    bounds: [
        { id: squarebtfdesk, min: 1024, max: 9999 }
    ],
    sizeid: '225',
    bids: [ 
        {
            bidder: 'rubicon',
            params: {
                accountId: '14794',
                siteId: IdSiteRubidesk,
                zoneId: IdzoneRubibtfd,
                position: 'btf',
                floor: '0.20',
            }
        },
        {
            bidder: "improvedigital",
            params: {
                placementId: IdPOLsquarebtfdesk,
            }
        },
        {
            bidder: 'smartadserver',
            params: {
                domain: '//prg.smartadserver.com',
                siteId: IdSiteSAS,
                pageId: PageIdSASdeskBTF,
                formatId: sizeIdSASsquare,
            }
        },   
    ]
},
{
    code: squarebtftab,
    alias: asquarebtftab,
    responsive: {useresponsive: true},
    fif: { usefif: true },
    sizeMapping: [
        {
            minWidth: 1024,
            sizes: []
        },
        {
            minWidth: 768,
            sizes: [300, 250]
        },
    ],
    bounds: [
        { id: asquarebtftab, min: 768, max: 1023, adContainerId: squarebtfdesk },
    ],
    bids: [
        {
            bidder: 'rubicon',
            params: {
                accountId: '14794',
                siteId: IdSiteRubidesk,
                zoneId: IdzoneRubibtfd,
                position: 'btf',
                floor: '0.20',
            }
        },
        {
            bidder: "improvedigital",
            params: {
                placementId: IdPOLsquarebtftab,
            }
        },
        {
            bidder: 'smartadserver',
            params: {
                domain: '//prg.smartadserver.com',
                siteId: IdSiteSAS,
                pageId: PageIdSAStabBTF,
                formatId: sizeIdSASsquare,
            }
        },   
    ]
},
{
    code: leaderbtfmob,
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
            sizes: [[320, 50], [320, 100]]
        },
    ],
    bounds: [
        { id: aleaderbtfmob, min: 0, max: 767, adContainerId: squarebtfdesk },
    ],
    bids: [
        {
            bidder: 'rubicon',
            params: {
                accountId: '14794',
                siteId: IdSiteRubimob,
                zoneId: IdzoneRubibtfm,
                position: 'btf',
                floor: '0.20',
            }
        },
        {
            bidder: "improvedigital",
            params: {
                placementId: IdPOLleaderbtfmob,
            }
        },
        {
            bidder: 'smartadserver',
            params: {
                domain: '//prg.smartadserver.com',
                siteId: IdSiteSAS,
                pageId: PageIdSASmobBTF,
                formatId: sizeIdSASsquare,
            }
        },  
    ]
},
/**  ------------------------------------------------------------- */



// Square STF
{
    code: squarestf1desk,
    alias: asquarestf1desk,
    responsive: {useresponsive: true},
    fif: { usefif: true },
    sizeMapping: [
        {
            minWidth: 1024,
            sizes: [300, 250]
        },
    ],
    bounds: [
        { id: squarestf1desk, min: 1024, max: 9999 }
    ],
    sizeid: '225',
    bids: [ 
        {
            bidder: 'rubicon',
            params: {
                accountId: '14794',
                siteId: IdSiteRubidesk,
                zoneId: IdzoneRubistfd,
                floor: '0.20',
            }
        },
        {
            bidder: "improvedigital",
            params: {
                placementId: IdPOLsquarestf1desk,
            }
        },
        {
            bidder: 'smartadserver',
            params: {
                domain: '//prg.smartadserver.com',
                siteId: IdSiteSAS,
                pageId: PageIdSASdeskSTF,
                formatId: sizeIdSASsquare,
            }
        },
    ]
},
{
    code: squarestftab,
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
            sizes: [300, 250]
        },
    ],
    bounds: [
        { id: asquarestftab, min: 768, max: 1023, adContainerId: squarestf1desk },
    ],
    bids: [
        {
            bidder: 'rubicon',
            params: {
                accountId: '14794',
                siteId: IdSiteRubidesk,
                zoneId: IdzoneRubistfd,
                floor: '0.20',
            }
        },
        {
            bidder: "improvedigital",
            params: {
                placementId: IdPOLsquarestftab,
            }
        },
        {
            bidder: 'smartadserver',
            params: {
                domain: '//prg.smartadserver.com',
                siteId: IdSiteSAS,
                pageId: PageIdSASdeskSTF,
                formatId: sizeIdSASsquare,
            }
        },
    ]
},
{
    code: leaderstf1mob,
    alias: aleaderstf1mob,
    responsive: {useresponsive: true},
    fif: { usefif: true },
    sizeMapping: [
        {
            minWidth: 768,
            sizes: []
        },
        {
            minWidth: 0,
            sizes: [[320, 50], [320, 100]]
        },
    ],
    bounds: [
        { id: aleaderstf1mob, min: 0, max: 767, adContainerId: squarestf1desk },
    ],
    bids: [
        {
            bidder: 'rubicon',
            params: {
                accountId: '14794',
                siteId: IdSiteRubimob,
                zoneId: IdzoneRubistfm,
                floor: '0.20',
            }
        },
        {
            bidder: "improvedigital",
            params: {
                placementId: IdPOLleaderstf1mob,
            }
        },
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
            bidder: 'widespace',
            params: {
                sid: sidsquare,
                currency: 'USD'
            }
        },
        {
            bidder: 'widespace',
            params: {
                sid: sidheader,
                currency: 'USD'
            }
        },  
     
    ]
},


// Square stfb
{
    code: squarestf2desk,
    alias: asquarestf2desk,
    responsive: {useresponsive: true},
    fif: { usefif: true },
    sizeMapping: [
        {
            minWidth: 1024,
            sizes: [300, 250]
        },
    ],
    bounds: [
        { id: squarestf2desk, min: 1024, max: 9999 }
    ],
    sizeid: '225',
    bids: [ 
        {
            bidder: 'rubicon',
            params: {
                accountId: '14794',
                siteId: IdSiteRubidesk,
                zoneId: IdzoneRubistfb,
                floor: '0.20',
            }
        },
        {
            bidder: "improvedigital",
            params: {
                placementId: IdPOLsquarestf2desk,
            }
        },
        {
            bidder: 'smartadserver',
            params: {
                domain: '//prg.smartadserver.com',
                siteId: IdSiteSAS,
                pageId: PageIdSASdeskstfb,
                formatId: sizeIdSASsquare,
            }
        },
    ]
},
{
    code: squarestf2tab,
    alias: asquarestf2tab,
    responsive: {useresponsive: true},
    fif: { usefif: true },
    sizeMapping: [
        {
            minWidth: 1024,
            sizes: []
        },
        {
            minWidth: 768,
            sizes: [300, 250]
        },
    ],
    bounds: [
        { id: asquarestf2tab, min: 768, max: 1023, adContainerId: squarestf2desk },
    ],
    bids: [
        {
            bidder: 'rubicon',
            params: {
                accountId: '14794',
                siteId: IdSiteRubidesk,
                zoneId: IdzoneRubistfb,
                floor: '0.20',
            }
        },
        {
            bidder: "improvedigital",
            params: {
                placementId: IdPOLsquarestf2tab,
            }
        },
        {
            bidder: 'smartadserver',
            params: {
                domain: '//prg.smartadserver.com',
                siteId: IdSiteSAS,
                pageId: PageIdSASdeskstfb,
                formatId: sizeIdSASsquare,
            }
        },
    ]
},
{
    code: leaderstf2mob,
    alias: aleaderstf2mob,
    responsive: {useresponsive: true},
    fif: { usefif: true },
    sizeMapping: [
        {
            minWidth: 768,
            sizes: []
        },
        {
            minWidth: 0,
            sizes: [[320, 50], [320, 100]]
        },
    ],
    bounds: [
        { id: aleaderstf2mob, min: 0, max: 767, adContainerId: squarestf2desk },
    ],
    bids: [
        {
            bidder: 'rubicon',
            params: {
                accountId: '14794',
                siteId: IdSiteRubimob,
                zoneId: IdzoneRubistfbm,
                floor: '0.20',
            }
        },
        {
            bidder: "improvedigital",
            params: {
                placementId: IdPOLleaderstf2mob,
            }
        },
        {
            bidder: 'smartadserver',
            params: {
                domain: '//prg.smartadserver.com',
                siteId: IdSiteSAS,
                pageId: PageIdSASmobstfb,
                formatId: sizeIdSASsquare,
            }
        },
    ]
},


// Square stfc
{
    code: squarestf3desk,
    autoRefresh: true,
    alias: asquarestf3desk,
    responsive: {useresponsive: true},
    fif: { usefif: true },
    sizeMapping: [
        {
            minWidth: 1024,
            sizes: [300, 250]
        },
    ],
    bounds: [
        { id: squarestf3desk, min: 1024, max: 9999 }
    ],
    sizeid: '225',
    bids: [ 
        {
            bidder: 'rubicon',
            params: {
                accountId: '14794',
                siteId: IdSiteRubidesk,
                zoneId: IdzoneRubistfcd,
                floor: '0.20',
            }
        },
        {
            bidder: "improvedigital",
            params: {
                placementId: IdPOLsquarestf3desk,
            }
        },
        {
            bidder: 'smartadserver',
            params: {
                domain: '//prg.smartadserver.com',
                siteId: IdSiteSAS,
                pageId: PageIdSASdeskstfc,
                formatId: sizeIdSASsquare,
            }
        },
    ]
},
{
    code: squarestf3tab,
    alias: asquarestf3tab,
    responsive: {useresponsive: true},
    fif: { usefif: true },
    sizeMapping: [
        {
            minWidth: 1024,
            sizes: []
        },
        {
            minWidth: 768,
            sizes: [300, 250]
        },
    ],
    bounds: [
        { id: asquarestf3tab, min: 768, max: 1023, adContainerId: squarestf3desk },
    ],
    bids: [
        {
            bidder: 'rubicon',
            params: {
                accountId: '14794',
                siteId: IdSiteRubidesk,
                zoneId: IdzoneRubistfcd,
                floor: '0.20',
            }
        },
        {
            bidder: "improvedigital",
            params: {
                placementId: IdPOLsquarestf3tab,
            }
        },
        {
            bidder: 'smartadserver',
            params: {
                domain: '//prg.smartadserver.com',
                siteId: IdSiteSAS,
                pageId: PageIdSASdeskstfc,
                formatId: sizeIdSASsquare,
            }
        },
    ]
},
{
    code: leaderstf3mob,
    alias: aleaderstf3mob,
    responsive: {useresponsive: true},
    fif: { usefif: true },
    sizeMapping: [
        {
            minWidth: 768,
            sizes: []
        },
        {
            minWidth: 0,
            sizes: [[320, 50], [320, 100]]
        },
    ],
    bounds: [
        { id: aleaderstf3mob, min: 0, max: 767, adContainerId: squarestf3desk },
    ],
    bids: [
        {
            bidder: 'rubicon',
            params: {
                accountId: '14794',
                siteId: IdSiteRubimob,
                zoneId: IdzoneRubistfcm,
                floor: '0.20',
            }
        },
        {
            bidder: "improvedigital",
            params: {
                placementId: IdPOLleaderstf3mob,
            }
        },
        {
            bidder: 'smartadserver',
            params: {
                domain: '//prg.smartadserver.com',
                siteId: IdSiteSAS,
                pageId: PageIdSASmobstfc,
                formatId: sizeIdSASsquare,
            }
        },
    ]
},

]