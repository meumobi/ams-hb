ADTECH.config.page = {
  protocol: 'https',
  server: 'secserv.adtech.de',
  network: '1502.1',
  siteid: '670202',
  gdpr: true,
  params: {
    loc: '100'
  }
};

var adUnits = [{
  code: 6489219,
  sizes: [[728, 90], [970, 90], [970, 250]],
  fif: { usefif: true },
  bounds: [	
    { id: 6493810, min: 0, max: 768 },	
    { id: 6489219, min: 769, max: 9999 },	
  ],	
  sizeid: '225',
  params: {
    alias: '',
    target: '_blank',
    
  },
  bids: [
    {
      bidder: 'smartadserver',
      params: {
        domain: '//www8.smartadserver.com',
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
      bidder: 'rubicon',
      params: {
        accountId: '14794',
        siteId: '83734',
        zoneId: '395240'
      }
    },
  ]
}];

ADTECH.config.placements[6489219] = adUnits[0];
ADTECH.debugMode = true;

var pbams = pbams || {};
pbams.que = pbams.que || [];

pbams.que.push(function() {
  pbams.addAdUnits(adUnits);
  pbams.requestBids({
    bidsBackHandler: initAdserver
  });
});

function initAdserver() {
  console.log("initAdserver - From prebid callback");
  ADTECH.enqueueAd(6489219);
  ADTECH.executeQueue();  
  console.log("initAdserver - End");
}

setTimeout(function() {
  window.alert("Call to Adserver outside prebid callback");
  ADTECH.enqueueAd(6489219);
  ADTECH.executeQueue();  
}, 9000);

