var hbAMS = {
    settings: {
        siteId: '670202',
        prebidAdUnitIds: [6489219, 6490489],
        autoRefresh: {
            interval: 15000, // milliseconds
            minVisibility: 0.49, // range 0-1
            onlyIfBidWinner: false
        },
    }
};

hbAMS.settings.adUnits = [
    {
        code: 6494071,
        bounds: [
            { id: 6494072, min: 0, max: 768 },
            { id: 6494071, min: 769, max: 9999 },
        ],
        sizeid: '16',
        bids: []
    },
    {
        code: 6489219,
        fif: { usefif: true },
        //sizes: [[728, 90], [970, 90], [970, 250]],
        sizeMapping: [
            {
                minWidth: 769,
                sizes: [[728, 90], [970, 90], [970, 250]]
            },
        ],
        bounds: [
            { id: 6493810, min: 0, max: 768 },
            { id: 6489219, min: 769, max: 9999 },
        ],
        sizeid: '225',
        bids: [
            {
                bidder: 'smartadserver',
                params: {
                    domain: '//prg.smartadserver.com',
                    siteId: '170999',
                    pageId: '842325',
                    formatId: '45846'
                }
            },
            {
                bidder: 'aol',
                params: {
                placement: '6033655',
                network: '1502.1',
                server: 'adserver.adtech.de',
                }
            },
            {
                bidder: 'piximedia',
                params: {
                    siteId: 'MANGO_SURF',
                    placementId: 'RG_MPU',
                    currency: 'USD',
                }
            },
            {
                bidder: 'rubicon',
                params: {
                    accountId: '14794',
                    siteId: '83734',
                    zoneId: '395240'
                }
            },
        ]
    },
    {
        code: 6493810,
        //sizes: [[320, 50], [320, 100]],
        sizeMapping: [

            {
                minWidth: 769,
                sizes: []
            },
            {
                minWidth: 0,
                sizes: [[320, 50], [320, 100], [320, 53], [320, 160], [320, 320]]
            },
        ],
        bids: [
            {
                bidder: 'smartadserver',
                params: {
                    domain: '//prg.smartadserver.com',
                    siteId: '170999',
                    pageId: '845267',
                    formatId: '46454'
                }
            },
            {
                bidder: 'widespace',
                params: {
                    sid: '620f5133-4b47-4bbf-823c-6b4fe293b6e1',
                    currency: 'USD'
                }
            },
            {
                bidder: 'rubicon',
                params: {
                    accountId: '14794',
                    siteId: '83768',
                    zoneId: '395364',
                    sizes: '[43]'
                }
            },

        ]
    },
    {
        code: 6490489,
        fif: { usefif: true },
        autoRefresh: true,
        sizeMapping: [
            {
                minWidth: 768,
                sizes: [[300, 600], [300, 250]]
            },
        ],
        bounds: [
            { id: 6494025, min: 0, max: 768 },
            { id: 6490489, min: 769, max: 9999 },
        ],
        sizeid: '170',
        bids: [
            {
                bidder: 'smartadserver',
                params: {
                    domain: '//prg.smartadserver.com',
                    siteId: '170999',
                    pageId: '842325',
                    formatId: '45838'
                }
            },
            {
                bidder: 'piximedia',
                params: {
                    siteId: 'MANGO_SURF',
                    placementId: 'RG_MPU',
                    currency: 'USD',
                }
            },
            {
                bidder: 'rubicon',
                params: {
                    accountId: '14794',
                    siteId: '83734',
                    zoneId: '395240'
                }
            }
        ]
    },

    {
        code: 6494025,
        fif: { usefif: true },
        //sizes: [[300, 600], [300, 250]],
        sizeMapping: [
            {
                minWidth: 769,
                sizes: []
            },
            {
                minWidth: 0,
                sizes: [[300, 600], [300, 250]]
            },
        ],
        bounds: [
            { id: 6494025, min: 0, max: 768 },
            { id: 6490489, min: 769, max: 9999 },
        ],
        sizeid: '170',
        bids: [
            {
                bidder: 'smartadserver',
                params: {
                    domain: 'https://www8.smartadserver.com',
                    siteId: '170999',
                    pageId: '842325',
                    formatId: '45838'
                }
            },
            {
                bidder: 'rubicon',
                params: {
                    accountId: '14794',
                    siteId: '83768',
                    zoneId: '395364',
                    sizes: [15]
                }
            }
        ]
    },
    {
        code: 6495503,
        fif: { usefif: true },
        autoRefresh: true,
        //sizes: [[728, 90], [970, 90], [970, 250]],
        sizeMapping: [
            {
                minWidth: 0,
                sizes: [[728, 90], [970, 90], [970, 250]]
            },
        ],
        bounds: [
            { id: 6495504, min: 0, max: 768 },
            { id: 6495503, min: 769, max: 9999 },
        ],
        sizeid: '225',
        bids: [
            {
                bidder: 'smartadserver',
                params: {
                    domain: '//prg.smartadserver.com',
                    siteId: '170999',
                    pageId: '845211',
                    formatId: '45846'
                }
            },
            {
                bidder: 'rubicon',
                params: {
                    accountId: '14794',
                    siteId: '83734',
                    zoneId: '703820'
                }
            },
        ]
    },
];
