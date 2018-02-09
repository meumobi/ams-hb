var globalConfig = {
    analytics: {
        trackAdblock: true,
        trackPrebid: false,
    },    
    autoRefresh: {
        interval: 15000, //milliseconds
        minVisibility: 0.80, //range 0-1
        onlyIfBidWinner: false,
    },
    bidTimeout: 1500 
}
console.log("config loaded");
