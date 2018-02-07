/* prebid.js v0.34.2
Updated : 2018-01-30 */
!(function(e) {
    var t = window.pbamsChunk;
    window.pbamsChunk = function(n, o, a) {
        for (var s, d, u, c = 0, f = []; c < n.length; c++) d = n[c], r[d] && f.push(r[d][0]), r[d] = 0;
        for (s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s]);
        for (t && t(n, o, a); f.length;) f.shift()();
        if (a)
            for (c = 0; c < a.length; c++) u = i(i.s = a[c]);
        return u
    };
    var n = {},
        r = {
            123: 0
        };

    function i(t) {
        if (n[t]) return n[t].exports;
        var r = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, i), r.l = !0, r.exports
    }
    i.e = function(e) {}, i.m = e, i.c = n, i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i.oe = function(e) {
        throw console.error(e), e
    }, i(i.s = 342)
})({
    0: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
        t.parseSizesInput = function(e) {
            var t = [];
            if ("string" == typeof e) {
                var n = e.split(","),
                    r = /^(\d)+x(\d)+$/i;
                if (n)
                    for (var o in n) S(n, o) && n[o].match(r) && t.push(n[o])
            } else if ("object" === (void 0 === e ? "undefined" : i(e))) {
                var a = e.length;
                if (a > 0)
                    if (2 === a && "number" == typeof e[0] && "number" == typeof e[1]) t.push(v(e));
                    else
                        for (var s = 0; s < a; s++) t.push(v(e[s]))
            }
            return t
        }, t.parseGPTSingleSizeArray = v, t.uniques = E, t.flatten = T, t.getBidRequest = function(e) {
            return pbams._bidsRequested.map((function(t) {
                return t.bids.find((function(t) {
                    return t.bidId === e
                }))
            })).find((function(e) {
                return e
            }))
        }, t.getKeys = A, t.getValue = _, t.getBidderCodes = function() {
            return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pbams.adUnits).map((function(e) {
                return e.bids.map((function(e) {
                    return e.bidder
                })).reduce(T, [])
            })).reduce(T).filter(E)
        }, t.isGptPubadsDefined = function() {
            if (window.googletag && t.isFn(window.googletag.pubads) && t.isFn(window.googletag.pubads().getSlots)) return !0
        }, t.getHighestCpm = function(e, t) {
            if (e.cpm === t.cpm) return e.timeToRespond > t.timeToRespond ? t : e;
            return e.cpm < t.cpm ? t : e
        }, t.shuffle = function(e) {
            var t = e.length;
            for (; t > 0;) {
                var n = Math.floor(Math.random() * t),
                    r = e[--t];
                e[t] = e[n], e[n] = r
            }
            return e
        }, t.adUnitsFilter = function(e, t) {
            return e.includes(t && t.placementCode || t && t.adUnitCode)
        }, t.isSrcdocSupported = function(e) {
            return e.defaultView && e.defaultView.frameElement && "srcdoc" in e.defaultView.frameElement && !/firefox/i.test(navigator.userAgent)
        }, t.deepClone = function(e) {
            return (0, d.default)(e)
        }, t.inIframe = function() {
            try {
                return window.self !== window.top
            } catch (e) {
                return !0
            }
        }, t.isSafariBrowser = function() {
            return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
        }, t.replaceAuctionPrice = function(e, t) {
            if (!e) return;
            return e.replace(/\$\{AUCTION_PRICE\}/g, t)
        }, t.getBidderRequestAllAdUnits = function(e) {
            return pbams._bidsRequested.find((function(t) {
                return t.bidderCode === e
            }))
        }, t.getBidderRequest = function(e, t) {
            return pbams._bidsRequested.find((function(n) {
                return n.bids.filter((function(n) {
                    return n.bidder === e && n.placementCode === t
                })).length > 0
            })) || {
                start: null,
                requestId: null
            }
        }, t.cookiesAreEnabled = function() {
            if (window.navigator.cookieEnabled || document.cookie.length) return !0;
            return window.document.cookie = "prebid.cookieTest", -1 != window.document.cookie.indexOf("prebid.cookieTest")
        }, t.delayExecution = function(e, t) {
            if (t < 1) throw new Error("numRequiredCalls must be a positive number. Got " + t);
            var n = 0;
            return function() {
                ++n === t && e.apply(null, arguments)
            }
        }, t.groupBy = function(e, t) {
            return e.reduce((function(e, n) {
                return (e[n[t]] = e[n[t]] || []).push(n), e
            }), {})
        }, t.deepAccess = function(e, t) {
            t = String(t).split(".");
            for (var n = 0; n < t.length; n++)
                if (void 0 === (e = e[t[n]])) return;
            return e
        }, t.createContentToExecuteExtScriptInFriendlyFrame = function(e) {
            if (!e) return "";
            return '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;<\/script></head><body>\x3c!--PRE_SCRIPT_TAG_MACRO--\x3e<script src="' + e + '"><\/script>\x3c!--POST_SCRIPT_TAG_MACRO--\x3e</body></html>'
        }, t.getDefinedParams = function(e, t) {
            return t.filter((function(t) {
                return e[t]
            })).reduce((function(t, n) {
                return r(t, (function(e, t, n) {
                    t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n;
                    return e
                })({}, n, e[n]))
            }), {})
        }, t.isValidMediaTypes = function(e) {
            var t = ["banner", "native", "video"];
            if (!Object.keys(e).every((function(e) {
                    return t.includes(e)
                }))) return !1;
            if (e.video && e.video.context) return ["instream", "outstream"].includes(e.video.context);
            return !0
        }, t.unsupportedBidderMessage = function(e, t) {
            var n = e.mediaType || Object.keys(e.mediaTypes).join(", "),
                r = 1 === t.length ? "This bidder" : "These bidders";
            return "\n    " + e.code + " is a " + n + " ad unit\n    containing bidders that don't support " + n + ": " + t.join(", ") + ".\n    " + r + " won't fetch demand.\n  "
        };
        var o, a = n(9),
            s = n(46),
            d = (o = s) && o.__esModule ? o : {
                default: o
            };
        var u = n(4),
            c = !1,
            f = Object.prototype.toString,
            l = null;
        try {
            l = console.info.bind(window.console)
        } catch (e) {}
        t.replaceTokenInString = function(e, t, n) {
            return this._each(t, (function(t, r) {
                t = void 0 === t ? "" : t;
                var i = n + r.toUpperCase() + n,
                    o = new RegExp(i, "g");
                e = e.replace(o, t)
            })), e
        };
        var p, g = (p = 0, function() {
            return ++p
        });

        function b() {
            return g() + Math.random().toString(16).substr(2)
        }

        function v(e) {
            if (t.isArray(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1])) return e[0] + "x" + e[1]
        }

        function y() {
            return window.console && window.console.log
        }
        t.getUniqueIdentifierStr = b, t.generateUUID = function e(t) {
            return t ? (t ^ 16 * Math.random() >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
        }, t.getBidIdParameter = function(e, t) {
            return t && t[e] ? t[e] : ""
        }, t.tryAppendQueryString = function(e, t, n) {
            return n ? e + (t + "=") + encodeURIComponent(n) + "&" : e
        }, t.parseQueryStringParameters = function(e) {
            var t = "";
            for (var n in e) e.hasOwnProperty(n) && (t += n + "=" + encodeURIComponent(e[n]) + "&");
            return t
        }, t.transformAdServerTargetingObj = function(e) {
            return e && Object.getOwnPropertyNames(e).length > 0 ? A(e).map((function(t) {
                return t + "=" + encodeURIComponent(_(e, t))
            })).join("&") : ""
        }, t.getTopWindowLocation = function() {
            var e = void 0;
            try {
                window.top.location.toString(), e = window.top.location
            } catch (t) {
                e = window.location
            }
            return e
        }, t.getTopWindowUrl = function() {
            var e = void 0;
            try {
                e = this.getTopWindowLocation().href
            } catch (t) {
                e = ""
            }
            return e
        }, t.getTopWindowReferrer = function() {
            try {
                return window.top.document.referrer
            } catch (e) {
                return document.referrer
            }
        }, t.logWarn = function(e) {
            m() && console.warn && console.warn("WARNING: " + e)
        }, t.logInfo = function(e, t) {
            m() && y() && l && (t && 0 !== t.length || (t = ""), l("INFO: " + e + ("" === t ? "" : " : params : "), t))
        }, t.logMessage = function(e) {
            m() && y() && console.log("MESSAGE: " + e)
        }, t.hasConsoleLogger = y;
        var m = function() {
            if (!1 === a.config.getConfig("debug") && !1 === c) {
                var e = "TRUE" === h(u.DEBUG_MODE).toUpperCase();
                a.config.setConfig({
                    debug: e
                }), c = !0
            }
            return !!a.config.getConfig("debug")
        };
        t.debugTurnedOn = m, t.logError = function() {
            m() && window.console && window.console.error && console.error.apply(console, arguments)
        }, t.createInvisibleIframe = function() {
            var e = document.createElement("iframe");
            return e.id = b(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", e
        };
        var h = function(e) {
            var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.search);
            return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
        };
        t.getParameterByName = h, t.hasValidBidRequest = function(e, t, n) {
            var r = !1;

            function i(e, n) {
                n === t[o] && (r = !0)
            }
            for (var o = 0; o < t.length; o++)
                if (r = !1, this._each(e, i), !r) return this.logError("Params are missing for bid request. One of these required paramaters are missing: " + t, n), !1;
            return !0
        }, t.addEventHandler = function(e, t, n) {
            e.addEventListener ? e.addEventListener(t, n, !0) : e.attachEvent && e.attachEvent("on" + t, n)
        }, t.isA = function(e, t) {
            return f.call(e) === "[object " + t + "]"
        }, t.isFn = function(e) {
            return this.isA(e, "Function")
        }, t.isStr = function(e) {
            return this.isA(e, "String")
        }, t.isArray = function(e) {
            return this.isA(e, "Array")
        }, t.isNumber = function(e) {
            return this.isA(e, "Number")
        }, t.isEmpty = function(e) {
            if (!e) return !0;
            if (t.isArray(e) || t.isStr(e)) return !(e.length > 0);
            for (var n in e)
                if (hasOwnProperty.call(e, n)) return !1;
            return !0
        }, t.isEmptyStr = function(e) {
            return this.isStr(e) && (!e || 0 === e.length)
        }, t._each = function(e, t) {
            if (!this.isEmpty(e)) {
                if (this.isFn(e.forEach)) return e.forEach(t, this);
                var n = 0,
                    r = e.length;
                if (r > 0)
                    for (; n < r; n++) t(e[n], n, e);
                else
                    for (n in e) hasOwnProperty.call(e, n) && t.call(this, e[n], n)
            }
        }, t.contains = function(e, t) {
            if (this.isEmpty(e)) return !1;
            if (this.isFn(e.indexOf)) return -1 !== e.indexOf(t);
            for (var n = e.length; n--;)
                if (e[n] === t) return !0;
            return !1
        }, t.indexOf = (function() {
            if (Array.prototype.indexOf) return Array.prototype.indexOf
        })(), t._map = function(e, t) {
            if (this.isEmpty(e)) return [];
            if (this.isFn(e.map)) return e.map(t);
            var n = [];
            return this._each(e, (function(r, i) {
                n.push(t(r, i, e))
            })), n
        };
        var S = function(e, t) {
            return e.hasOwnProperty ? e.hasOwnProperty(t) : void 0 !== e[t] && e.constructor.prototype[t] !== e[t]
        };

        function E(e, t, n) {
            return n.indexOf(e) === t
        }

        function T(e, t) {
            return e.concat(t)
        }

        function A(e) {
            return Object.keys(e)
        }

        function _(e, t) {
            return e[t]
        }
        t.insertElement = function(e, t, n) {
            t = t || document;
            var r = void 0;
            r = n ? t.getElementsByTagName(n) : t.getElementsByTagName("head");
            try {
                (r = r.length ? r : t.getElementsByTagName("body")).length && (r = r[0]).insertBefore(e, r.firstChild)
            } catch (e) {}
        }, t.triggerPixel = function(e) {
            (new Image).src = e
        }, t.insertUserSyncIframe = function(e) {
            var n = this.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"),
                r = document.createElement("div");
            r.innerHTML = n;
            var i = r.firstChild;
            t.insertElement(i)
        }, t.createTrackPixelHtml = function(e) {
            if (!e) return "";
            var t = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
            return t += '<img src="' + encodeURI(e) + '"></div>'
        }, t.createTrackPixelIframeHtml = function(e) {
            var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            return e ? (n && (e = encodeURI(e)), r && (r = 'sandbox="' + r + '"'), "<iframe " + r + ' id="' + t.getUniqueIdentifierStr() + '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0p;width:0p;display:none;"\n      scrolling="no"\n      src="' + e + '">\n    </iframe>') : ""
        }, t.getIframeDocument = function(e) {
            if (e) {
                var t = void 0;
                try {
                    t = e.contentWindow ? e.contentWindow.document : e.contentDocument.document ? e.contentDocument.document : e.contentDocument
                } catch (e) {
                    this.logError("Cannot get iframe document", e)
                }
                return t
            }
        }, t.getValueString = function(e, t, n) {
            return void 0 === t || null === t ? n : this.isStr(t) ? t : this.isNumber(t) ? t.toString() : void this.logWarn("Unsuported type for param: " + e + " required type: String")
        }
    },
    1: function(e, t, n) {
        "use strict";
        var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            i = n(0),
            o = n(47),
            a = n(15),
            s = n(6),
            d = n(0),
            u = n(4),
            c = n(11),
            f = void 0,
            l = {};
        t.bidderRegistry = l;
        var p = {
                endpoint: u.S2S.DEFAULT_ENDPOINT,
                adapter: u.S2S.ADAPTER,
                syncEndpoint: u.S2S.SYNC_ENDPOINT
            },
            g = "random",
            b = {
                random: !0,
                fixed: !0
            },
            v = {},
            y = g;

        function m(e) {
            var t = e.bidderCode,
                n = e.requestId,
                s = e.bidderRequestId;
            return e.adUnits.map((function(e) {
                return e.bids.filter((function(e) {
                    return e.bidder === t
                })).map((function(t) {
                    var u = e.sizes;
                    if (e.sizeMapping) {
                        var c = (0, o.mapSizes)(e);
                        if ("" === c) return "";
                        u = c
                    }
                    e.mediaTypes && (d.isValidMediaTypes(e.mediaTypes) ? t = r({}, t, {
                        mediaTypes: e.mediaTypes
                    }) : d.logError("mediaTypes is not correctly configured for adunit " + e.code));
                    var f = e.nativeParams || d.deepAccess(e, "mediaTypes.native");
                    return f && (t = r({}, t, {
                        nativeParams: (0, a.processNativeAdUnitParams)(f)
                    })), t = r({}, t, (0, i.getDefinedParams)(e, ["mediaType", "renderer"])), r({}, t, {
                        placementCode: e.code,
                        transactionId: e.transactionId,
                        sizes: u,
                        bidId: t.bid_id || d.getUniqueIdentifierStr(),
                        bidderRequestId: s,
                        requestId: n
                    })
                }))
            })).reduce(i.flatten, []).filter((function(e) {
                return "" !== e
            }))
        }
        t.callBids = function(e) {
            var t = e.adUnits,
                n = e.cbTimeout,
                r = d.generateUUID(),
                a = Date.now(),
                s = {
                    timestamp: a,
                    requestId: r,
                    timeout: n
                };
            c.emit(u.EVENTS.AUCTION_INIT, s);
            var b = (0, i.getBidderCodes)(t);
            y === g && (b = (0, i.shuffle)(b));
            var v = l[p.adapter];
            v && (v.setConfig(p), v.queueSync({
                bidderCodes: b
            }));
            var h = [],
                S = !1;
            if (p.enabled) {
                (S = p.testing && void 0 !== f) && (h = f.getSourceBidderMap(t)[f.CLIENT]);
                var E = p.bidders;
                b = b.filter((function(e) {
                    return !E.includes(e) || h.includes(e)
                }));
                var T = d.deepClone(t);
                T.forEach((function(e) {
                    var t, n;
                    e.sizeMapping && (e.sizes = (0, o.mapSizes)(e), delete e.sizeMapping), e.sizes = (t = e, n = [], d.parseSizesInput(t.sizes).forEach((function(e) {
                        var t = e.split("x"),
                            r = {
                                w: parseInt(t[0]),
                                h: parseInt(t[1])
                            };
                        n.push(r)
                    })), n), e.bids = e.bids.filter((function(e) {
                        return E.includes(e.bidder) && (!S || e.finalSource !== f.CLIENT)
                    })).map((function(e) {
                        return e.bid_id = d.getUniqueIdentifierStr(), e
                    }))
                })), T = T.filter((function(e) {
                    return 0 !== e.bids.length
                }));
                var A = d.generateUUID();
                E.forEach((function(e) {
                    var t = d.getUniqueIdentifierStr(),
                        n = {
                            bidderCode: e,
                            requestId: r,
                            bidderRequestId: t,
                            tid: A,
                            bids: m({
                                bidderCode: e,
                                requestId: r,
                                bidderRequestId: t,
                                adUnits: T
                            }),
                            start: (new Date).getTime(),
                            auctionStart: a,
                            timeout: p.timeout,
                            src: u.S2S.SRC
                        };
                    0 !== n.bids.length && (pbams._bidsRequested.push(n), c.emit(u.EVENTS.BID_REQUESTED, n))
                }));
                var _ = {
                    tid: A,
                    ad_units: T
                };
                d.logMessage("CALLING S2S HEADER BIDDERS ==== " + E.join(",")), _.ad_units.length && v.callBids(_)
            }
            var I = [],
                w = d.deepClone(t);
            w.forEach((function(e) {
                e.bids = e.bids.filter((function(e) {
                    return !S || e.finalSource !== f.SERVER
                }))
            })), w = w.filter((function(e) {
                return 0 !== e.bids.length
            })), b.forEach((function(e) {
                if (l[e]) {
                    var t = d.getUniqueIdentifierStr(),
                        i = {
                            bidderCode: e,
                            requestId: r,
                            bidderRequestId: t,
                            bids: m({
                                bidderCode: e,
                                requestId: r,
                                bidderRequestId: t,
                                adUnits: w
                            }),
                            auctionStart: a,
                            timeout: n
                        };
                    i.bids && 0 !== i.bids.length && (pbams._bidsRequested.push(i), I.push(i))
                } else d.logError("Adapter trying to be called which does not exist: " + e + " adaptermanager.callBids")
            })), I.forEach((function(e) {
                e.start = (new Date).getTime();
                var t = l[e.bidderCode];
                e.bids && 0 !== e.bids.length && (d.logMessage("CALLING BIDDER ======= " + e.bidderCode), c.emit(u.EVENTS.BID_REQUESTED, e), t.callBids(e))
            }))
        }, t.videoAdapters = [], t.registerBidAdapter = function(e, n) {
            var r = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes,
                i = void 0 === r ? [] : r;
            e && n ? "function" == typeof e.callBids ? (l[n] = e, i.includes("video") && t.videoAdapters.push(n), i.includes("native") && a.nativeAdapters.push(n)) : d.logError("Bidder adaptor error for bidder code: " + n + "bidder must implement a callBids() function") : d.logError("bidAdaptor or bidderCode not specified")
        }, t.aliasBidAdapter = function(e, n) {
            var i, o;
            if (void 0 === l[n]) {
                var u = l[e];
                if (void 0 === u) d.logError('bidderCode "' + e + '" is not an existing bidder.', "adaptermanager.aliasBidAdapter");
                else try {
                    var c = void 0,
                        f = (i = e, o = [], t.videoAdapters.includes(i) && o.push("video"), a.nativeAdapters.includes(i) && o.push("native"), o);
                    if (u.constructor.prototype != Object.prototype)(c = new u.constructor).setBidderCode(n);
                    else {
                        var p = u.getSpec();
                        c = (0, s.newBidder)(r({}, p, {
                            code: n
                        }))
                    }
                    this.registerBidAdapter(c, n, {
                        supportedMediaTypes: f
                    })
                } catch (t) {
                    d.logError(e + " bidder does not currently support aliasing.", "adaptermanager.aliasBidAdapter")
                }
            } else d.logMessage('alias name "' + n + '" has been already specified.')
        }, t.registerAnalyticsAdapter = function(e) {
            var t = e.adapter,
                n = e.code;
            t && n ? "function" == typeof t.enableAnalytics ? (t.code = n, v[n] = t) : d.logError('Prebid Error: Analytics adaptor error for analytics "' + n + '"\n        analytics adapter must implement an enableAnalytics() function') : d.logError("Prebid Error: analyticsAdapter or analyticsCode not specified")
        }, t.enableAnalytics = function(e) {
            d.isArray(e) || (e = [e]), d._each(e, (function(e) {
                var t = v[e.provider];
                t ? t.enableAnalytics(e) : d.logError("Prebid Error: no analytics adapter found in registry for\n        " + e.provider + ".")
            }))
        }, t.setBidderSequence = function(e) {
            b[e] ? y = e : d.logWarn("Invalid order: " + e + ". Bidder Sequence was not set.")
        }, t.getBidAdapter = function(e) {
            return l[e]
        }, t.setS2SConfig = function(e) {
            p = e
        }, t.setS2STestingModule = function(e) {
            f = e
        }
    },
    11: function(e, t, n) {
        "use strict";
        var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            i = n(0),
            o = n(4),
            a = Array.prototype.slice,
            s = Array.prototype.push,
            d = i._map(o.EVENTS, (function(e) {
                return e
            })),
            u = o.EVENT_ID_PATHS,
            c = [];
        e.exports = (function() {
            var e = {},
                t = {};
            return t.on = function(t, n, r) {
                if (a = t, i.contains(d, a)) {
                    var o = e[t] || {
                        que: []
                    };
                    r ? (o[r] = o[r] || {
                        que: []
                    }, o[r].que.push(n)) : o.que.push(n), e[t] = o
                } else i.logError("Wrong event name : " + t + " Valid event names :" + d);
                var a
            }, t.emit = function(t) {
                !(function(t, n) {
                    i.logMessage("Emitting event for: " + t);
                    var r = n[0] || {},
                        o = r[u[t]],
                        a = e[t] || {
                            que: []
                        },
                        d = i._map(a, (function(e, t) {
                            return t
                        })),
                        f = [];
                    c.push({
                        eventType: t,
                        args: r,
                        id: o
                    }), o && i.contains(d, o) && s.apply(f, a[o].que), s.apply(f, a.que), i._each(f, (function(e) {
                        if (e) try {
                            e.apply(null, n)
                        } catch (e) {
                            i.logError("Error executing handler:", "events.js", e)
                        }
                    }))
                })(t, a.call(arguments, 1))
            }, t.off = function(t, n, r) {
                var o = e[t];
                i.isEmpty(o) || i.isEmpty(o.que) && i.isEmpty(o[r]) || r && (i.isEmpty(o[r]) || i.isEmpty(o[r].que)) || (r ? i._each(o[r].que, (function(e) {
                    var t = o[r].que;
                    e === n && t.splice(i.indexOf.call(t, e), 1)
                })) : i._each(o.que, (function(e) {
                    var t = o.que;
                    e === n && t.splice(i.indexOf.call(t, e), 1)
                })), e[t] = o)
            }, t.get = function() {
                return e
            }, t.getEvents = function() {
                var e = [];
                return i._each(c, (function(t) {
                    var n = r({}, t);
                    e.push(n)
                })), e
            }, t
        })()
    },
    12: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = (function() {
            return function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return (function(e, t) {
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            !r && s.return && s.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                })(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        })();

        function i(e) {
            return e ? e.replace(/^\?/, "").split("&").reduce((function(e, t) {
                var n = t.split("="),
                    i = r(n, 2),
                    o = i[0],
                    a = i[1];
                return /\[\]$/.test(o) ? (e[o = o.replace("[]", "")] = e[o] || [], e[o].push(a)) : e[o] = a || "", e
            }), {}) : {}
        }

        function o(e) {
            return Object.keys(e).map((function(t) {
                return Array.isArray(e[t]) ? e[t].map((function(e) {
                    return t + "[]=" + e
                })).join("&") : t + "=" + e[t]
            })).join("&")
        }
        t.parseQS = i, t.formatQS = o, t.parse = function(e, t) {
            var n = document.createElement("a");
            t && "noDecodeWholeURL" in t && t.noDecodeWholeURL ? n.href = e : n.href = decodeURIComponent(e);
            return {
                protocol: (n.protocol || "").replace(/:$/, ""),
                hostname: n.hostname,
                port: +n.port,
                pathname: n.pathname.replace(/^(?!\/)/, "/"),
                search: i(n.search || ""),
                hash: (n.hash || "").replace(/^#/, ""),
                host: n.host || window.location.host
            }
        }, t.format = function(e) {
            return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":" + e.port : "")) + (e.pathname || "") + (e.search ? "?" + o(e.search || "") : "") + (e.hash ? "#" + e.hash : "")
        }
    },
    13: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.NATIVE = "native", t.VIDEO = "video", t.BANNER = "banner"
    },
    14: function(e, t) {
        var n = e.exports = {
            version: "2.5.3"
        };
        "number" == typeof __e && (__e = n)
    },
    15: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.hasNonNativeBidder = t.nativeBidder = t.nativeAdUnit = t.NATIVE_TARGETING_KEYS = t.NATIVE_KEYS = t.nativeAdapters = void 0;
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        t.processNativeAdUnitParams = function(e) {
            if (e && e.type && (function(e) {
                    if (!e || !Object.keys(s).includes(e)) return (0, i.logError)(e + " nativeParam is not supported"), !1;
                    return !0
                })(e.type)) return s[e.type];
            return e
        }, t.nativeBidIsValid = function(e) {
            var t = (0, i.getBidRequest)(e.adId);
            if (!t) return !1;
            if (!(0, i.deepAccess)(e, "native.clickUrl")) return !1;
            var n = t.nativeParams;
            if (!n) return !0;
            var r = Object.keys(n).filter((function(e) {
                    return n[e].required
                })),
                o = Object.keys(e.native).filter((function(t) {
                    return e.native[t]
                }));
            return r.every((function(e) {
                return o.includes(e)
            }))
        }, t.fireNativeTrackers = function(e, t) {
            var n = void 0;
            n = "click" === e.action ? t.native && t.native.clickTrackers : t.native && t.native.impressionTrackers;
            (n || []).forEach(i.triggerPixel)
        }, t.getNativeTargeting = function(e) {
            var t = {};
            return Object.keys(e.native).forEach((function(n) {
                var i = a[n],
                    o = e.native[n];
                "object" === (void 0 === o ? "undefined" : r(o)) && o.url && (o = o.url), i && (t[i] = o)
            })), t
        };
        var i = n(0),
            o = t.nativeAdapters = [],
            a = t.NATIVE_KEYS = {
                title: "hb_native_title",
                body: "hb_native_body",
                sponsoredBy: "hb_native_brand",
                image: "hb_native_image",
                icon: "hb_native_icon",
                clickUrl: "hb_native_linkurl",
                cta: "hb_native_cta"
            },
            s = (t.NATIVE_TARGETING_KEYS = Object.keys(a).map((function(e) {
                return a[e]
            })), {
                image: {
                    image: {
                        required: !0
                    },
                    title: {
                        required: !0
                    },
                    sponsoredBy: {
                        required: !0
                    },
                    clickUrl: {
                        required: !0
                    },
                    body: {
                        required: !1
                    },
                    icon: {
                        required: !1
                    }
                }
            });
        t.nativeAdUnit = function(e) {
            var t = "native" === e.mediaType,
                n = (0, i.deepAccess)(e, "mediaTypes.native");
            return t || n
        };
        var d = t.nativeBidder = function(e) {
            return o.includes(e.bidder)
        };
        t.hasNonNativeBidder = function(e) {
            return e.bids.filter((function(e) {
                return !d(e)
            })).length
        }
    },
    16: function(e, t) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    },
    17: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Renderer = o;
        var r = n(5),
            i = (function(e) {
                {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }
            })(n(0));

        function o(e) {
            var t = this,
                n = e.url,
                o = e.config,
                a = e.id,
                s = e.callback,
                d = e.loaded;
            this.url = n, this.config = o, this.handlers = {}, this.id = a, this.loaded = d, this.cmd = [], this.push = function(e) {
                "function" == typeof e ? t.loaded ? e.call() : t.cmd.push(e) : i.logError("Commands given to Renderer.push must be wrapped in a function")
            }, this.callback = s || function() {
                t.loaded = !0, t.process()
            }, (0, r.loadScript)(n, this.callback, !0)
        }
        o.install = function(e) {
            return new o({
                url: e.url,
                config: e.config,
                id: e.id,
                callback: e.callback,
                loaded: e.loaded
            })
        }, o.prototype.getConfig = function() {
            return this.config
        }, o.prototype.setRender = function(e) {
            this.render = e
        }, o.prototype.setEventHandlers = function(e) {
            this.handlers = e
        }, o.prototype.handleVideoEvent = function(e) {
            var t = e.id,
                n = e.eventName;
            "function" == typeof this.handlers[n] && this.handlers[n](), i.logMessage("Prebid Renderer event for id " + t + " type " + n)
        }, o.prototype.process = function() {
            for (; this.cmd.length > 0;) try {
                this.cmd.shift().call()
            } catch (e) {
                i.logError("Error processing Renderer command: ", e)
            }
        }
    },
    18: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.userSync = void 0;
        var r = (function() {
                return function(e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return (function(e, t) {
                        var n = [],
                            r = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            i = !0, o = e
                        } finally {
                            try {
                                !r && s.return && s.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return n
                    })(e, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            })(),
            i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            };
        t.newUserSync = s;
        var o = (function(e) {
                {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }
            })(n(0)),
            a = n(9);

        function s(e) {
            var t = {},
                n = {
                    image: [],
                    iframe: []
                },
                s = !1,
                d = {},
                u = e.config;

            function c() {
                if (u.syncEnabled && e.browserSupportsCookies && !s) {
                    try {
                        !(function() {
                            if (!u.pixelEnabled) return;
                            o.shuffle(n.image).forEach((function(e) {
                                var t = r(e, 2),
                                    n = t[0],
                                    i = t[1];
                                o.logMessage("Invoking image pixel user sync for bidder: " + n), o.triggerPixel(i)
                            }))
                        })(), (function() {
                            if (!u.iframeEnabled) return;
                            o.shuffle(n.iframe).forEach((function(e) {
                                var t = r(e, 2),
                                    n = t[0],
                                    i = t[1];
                                o.logMessage("Invoking iframe user sync for bidder: " + n), o.insertUserSyncIframe(i)
                            }))
                        })()
                    } catch (e) {
                        return o.logError("Error firing user syncs", e)
                    }
                    n = {
                        image: [],
                        iframe: []
                    }, s = !0
                }
            }
            return a.config.getConfig("userSync", (function(e) {
                u = i(u, e.userSync)
            })), t.registerSync = function(e, t, r) {
                return u.syncEnabled && o.isArray(n[e]) ? t ? Number(d[t]) >= u.syncsPerBidder ? o.logWarn('Number of user syncs exceeded for "{$bidder}"') : u.enabledBidders && u.enabledBidders.length && u.enabledBidders.indexOf(t) < 0 ? o.logWarn('Bidder "' + t + '" not supported') : (n[e].push([t, r]), (i = d)[a = t] ? i[a] += 1 : i[a] = 1, void(d = i)) : o.logWarn("Bidder is required for registering sync") : o.logWarn('User sync type "' + e + '" not supported');
                var i, a
            }, t.syncUsers = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                if (e) return window.setTimeout(c, Number(e));
                c()
            }, t.triggerUserSyncs = function() {
                u.enableOverride && t.syncUsers()
            }, t
        }
        a.config.setDefaults({
            userSync: {
                syncEnabled: !0,
                pixelEnabled: !0,
                syncsPerBidder: 5,
                syncDelay: 3e3
            }
        });
        var d = !o.isSafariBrowser() && o.cookiesAreEnabled();
        t.userSync = s({
            config: a.config.getConfig("userSync"),
            browserSupportsCookies: d
        })
    },
    19: function(e, t, n) {
        var r = n(16),
            i = n(14),
            o = n(22),
            a = n(353),
            s = n(33),
            d = "prototype",
            u = function(e, t, n) {
                var c, f, l, p, g = e & u.F,
                    b = e & u.G,
                    v = e & u.S,
                    y = e & u.P,
                    m = e & u.B,
                    h = b ? r : v ? r[t] || (r[t] = {}) : (r[t] || {})[d],
                    S = b ? i : i[t] || (i[t] = {}),
                    E = S[d] || (S[d] = {});
                for (c in b && (n = t), n) l = ((f = !g && h && void 0 !== h[c]) ? h : n)[c], p = m && f ? s(l, r) : y && "function" == typeof l ? s(Function.call, l) : l, h && a(h, c, l, e & u.U), S[c] != l && o(S, c, p), y && E[c] != l && (E[c] = l)
            };
        r.core = i, u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, e.exports = u
    },
    2: function(e, t, n) {
        "use strict";
        var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            i = (function() {
                return function(e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return (function(e, t) {
                        var n = [],
                            r = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            i = !0, o = e
                        } finally {
                            try {
                                !r && s.return && s.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return n
                    })(e, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            })(),
            o = n(0),
            a = n(28),
            s = n(15),
            d = n(29),
            u = n(48),
            c = n(17),
            f = n(9),
            l = n(49),
            p = n(4),
            g = p.EVENTS.AUCTION_END,
            b = n(0),
            v = n(11),
            y = {
                byAdUnit: [],
                all: [],
                oneTime: null,
                timer: !1
            },
            m = {};

        function h(e) {
            return e.bidderCode
        }

        function S(e) {
            return e.bidder
        }

        function E(e, t) {
            return e + t
        }

        function T() {
            return pbams._bidsRequested.map((function(e) {
                return e.bids
            })).reduce(o.flatten, []).filter(o.adUnitsFilter.bind(this, pbams._adUnitCodes)).map((function(e) {
                return "indexExchange" === e.bidder ? e.sizes.length : 1
            })).reduce((function(e, t) {
                return e + t
            }), 0) === pbams._bidsReceived.filter(o.adUnitsFilter.bind(this, pbams._adUnitCodes)).length
        }

        function A(e, t) {
            function n(t) {
                return "Invalid bid from " + e.bidderCode + ". Ignoring bid: " + t
            }
            return e ? t ? (0, o.getBidderRequest)(e.bidderCode, t).start ? "native" !== e.mediaType || (0, s.nativeBidIsValid)(e) ? "video" !== e.mediaType || (0, d.isValidVideoBid)(e) ? !("banner" === e.mediaType && !(function(e, t) {
                if ((e.width || 0 === e.width) && (e.height || 0 === e.height)) return !0;
                var n = (0, o.getBidderRequest)(e.bidderCode, t),
                    r = n && n.bids && n.bids[0] && n.bids[0].sizes,
                    a = b.parseSizesInput(r);
                if (1 === a.length) {
                    var s = a[0].split("x"),
                        d = i(s, 2),
                        u = d[0],
                        c = d[1];
                    return e.width = u, e.height = c, !0
                }
                return !1
            })(e, t)) || (b.logError(n("Banner bids require a width and height")), !1) : (b.logError(n("Video bid does not have required vastUrl or renderer property")), !1) : (b.logError(n("Native bid missing some required properties.")), !1) : (b.logError(n("Cannot find valid matching bid request.")), !1) : (b.logError(n("No adUnitCode was supplied to addBidResponse.")), !1) : (b.logError("Some adapter tried to add an undefined bid for " + t + "."), !1)
        }

        function _(e, t) {
            var n = (0, o.getBidderRequest)(e.bidderCode, t);
            r(e, {
                requestId: n.requestId,
                responseTimestamp: (new Date).getTime(),
                requestTimestamp: n.start,
                cpm: parseFloat(e.cpm) || 0,
                bidder: e.bidderCode,
                adUnitCode: t
            }), e.timeToRespond = e.responseTimestamp - e.requestTimestamp, v.emit(p.EVENTS.BID_ADJUSTMENT, e);
            var i = n.bids && n.bids[0] && n.bids[0].renderer;
            i && (e.renderer = c.Renderer.install({
                url: i.url
            }), e.renderer.setRender(i.render));
            var s, d = (0, a.getPriceBucketString)(e.cpm, f.config.getConfig("customPriceBucket"), f.config.getConfig("currency.granularityMultiplier"));
            e.pbLg = d.low, e.pbMg = d.med, e.pbHg = d.high, e.pbAg = d.auto, e.pbDg = d.dense, e.pbCg = d.custom, e.bidderCode && (e.cpm > 0 || e.dealId) && (s = C(e.bidderCode, e)), e.adserverTargeting = r(e.adserverTargeting || {}, s)
        }

        function I(e) {
            if (e.timeToRespond > pbams.cbTimeout + pbams.timeoutBuffer) {
                t.executeCallback(!0)
            }
        }

        function w(e) {
            var n, r;
            v.emit(p.EVENTS.BID_RESPONSE, e), pbams._bidsReceived.push(e), e.adUnitCode && (function(e) {
                var t = this;
                return pbams._bidsRequested.map((function(n) {
                    return n.bids.filter(o.adUnitsFilter.bind(t, pbams._adUnitCodes)).filter((function(t) {
                        return t.placementCode === e
                    }))
                })).reduce(o.flatten, []).map((function(e) {
                    return "indexExchange" === e.bidder ? e.sizes.length : 1
                })).reduce(E, 0) === pbams._bidsReceived.filter((function(t) {
                    return t.adUnitCode === e
                })).length
            })(e.adUnitCode) && (n = e.adUnitCode, r = [n], O(y.byAdUnit, r)), T() && t.executeCallback()
        }

        function C(e, t) {
            var n = {},
                i = pbams.bidderSettings;
            t && i && j(n, N(), t);
            return e && t && i && i[e] && i[e][p.JSON_MAPPING.ADSERVER_TARGETING] ? (j(n, i[e], t), t.alwaysUseBid = i[e].alwaysUseBid, t.sendStandardTargeting = i[e].sendStandardTargeting) : m[e] && (j(n, m[e], t), t.alwaysUseBid = m[e].alwaysUseBid, t.sendStandardTargeting = m[e].sendStandardTargeting), t.native && (n = r({}, n, (0, s.getNativeTargeting)(t))), n
        }

        function j(e, t, n) {
            var r = t[p.JSON_MAPPING.ADSERVER_TARGETING];
            return n.size = n.getSize(), b._each(r, (function(r) {
                var i = r.key,
                    o = r.val;
                if (e[i] && b.logWarn("The key: " + i + " is getting ovewritten"), b.isFn(o)) try {
                    o = o(n)
                } catch (e) {
                    b.logError("bidmanager", "ERROR", e)
                }(void 0 === t.suppressEmptyKeys || !0 !== t.suppressEmptyKeys) && "hb_deal" !== i || !b.isEmptyStr(o) && null !== o && void 0 !== o ? e[i] = o : b.logInfo("suppressing empty key '" + i + "' from adserver targeting")
            })), e
        }

        function O(e, t) {
            var n = this;
            b.isArray(e) && e.forEach((function(e) {
                var r = t || pbams._adUnitCodes,
                    i = [pbams._bidsReceived.filter(o.adUnitsFilter.bind(n, r)).reduce(B, {})];
                e.apply(pbams, i)
            }))
        }

        function B(e, t) {
            return e[t.adUnitCode] || (e[t.adUnitCode] = {
                bids: []
            }), e[t.adUnitCode].bids.push(t), e
        }

        function U(e) {
            var t = e.bidderCode,
                n = e.cpm,
                i = void 0;
            if (pbams.bidderSettings && (t && pbams.bidderSettings[t] && "function" == typeof pbams.bidderSettings[t].bidCpmAdjustment ? i = pbams.bidderSettings[t].bidCpmAdjustment : pbams.bidderSettings[p.JSON_MAPPING.BD_SETTING_STANDARD] && "function" == typeof pbams.bidderSettings[p.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (i = pbams.bidderSettings[p.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment), i)) try {
                n = i(e.cpm, r({}, e))
            } catch (e) {
                b.logError("Error during bid adjustment", "bidmanager.js", e)
            }
            n >= 0 && (e.cpm = n)
        }

        function N() {
            var e = f.config.getConfig("priceGranularity"),
                t = pbams.bidderSettings;
            return t[p.JSON_MAPPING.BD_SETTING_STANDARD] || (t[p.JSON_MAPPING.BD_SETTING_STANDARD] = {}), t[p.JSON_MAPPING.BD_SETTING_STANDARD][p.JSON_MAPPING.ADSERVER_TARGETING] || (t[p.JSON_MAPPING.BD_SETTING_STANDARD][p.JSON_MAPPING.ADSERVER_TARGETING] = [{
                key: "hb_bidder",
                val: function(e) {
                    return e.bidderCode
                }
            }, {
                key: "hb_adid",
                val: function(e) {
                    return e.adId
                }
            }, {
                key: "hb_pb",
                val: function(t) {
                    return e === p.GRANULARITY_OPTIONS.AUTO ? t.pbAg : e === p.GRANULARITY_OPTIONS.DENSE ? t.pbDg : e === p.GRANULARITY_OPTIONS.LOW ? t.pbLg : e === p.GRANULARITY_OPTIONS.MEDIUM ? t.pbMg : e === p.GRANULARITY_OPTIONS.HIGH ? t.pbHg : e === p.GRANULARITY_OPTIONS.CUSTOM ? t.pbCg : void 0
                }
            }, {
                key: "hb_size",
                val: function(e) {
                    return e.size
                }
            }, {
                key: "hb_deal",
                val: function(e) {
                    return e.dealId
                }
            }]), t[p.JSON_MAPPING.BD_SETTING_STANDARD]
        }
        t.getTimedOutBidders = function() {
            return pbams._bidsRequested.map(h).filter(o.uniques).filter((function(e) {
                return pbams._bidsReceived.map(S).filter(o.uniques).indexOf(e) < 0
            }))
        }, t.bidsBackAll = function() {
            return T()
        }, t.addBidResponse = (0, l.createHook)("asyncSeries", (function(e, t) {
            var n;
            A(t, e) && (_(t, e), "video" === t.mediaType ? (n = t, f.config.getConfig("usePrebidCache") ? (0, u.store)([n], (function(e, t) {
                e ? b.logWarn("Failed to save to the video cache: " + e + ". Video bid must be discarded.") : (n.videoCacheKey = t[0].uuid, n.vastUrl || (n.vastUrl = (0, u.getCacheUrl)(n.videoCacheKey)), w(n)), I(n)
            })) : (w(n), I(n))) : (w(t), I(t)))
        })), t.getKeyValueTargetingPairs = function() {
            return C.apply(void 0, arguments)
        }, t.registerDefaultBidderSetting = function(e, t) {
            m[e] = t
        }, t.executeCallback = function(e) {
            if (!e && y.timer && clearTimeout(y.timer), !0 !== y.all.called && (O(y.all), y.all.called = !0, e)) {
                var n = t.getTimedOutBidders();
                n.length && v.emit(p.EVENTS.BID_TIMEOUT, n)
            }
            if (y.oneTime) {
                v.emit(g);
                try {
                    O([y.oneTime])
                } catch (e) {
                    b.logError("Error executing bidsBackHandler", null, e)
                } finally {
                    y.oneTime = null, y.timer = !1, pbams.clearAuction()
                }
            }
        }, t.externalCallbackReset = function() {
            y.all.called = !1
        }, t.addOneTimeCallback = function(e, t) {
            y.oneTime = e, y.timer = t
        }, t.addCallback = function(e, t, n) {
            t.id = e, p.CB.TYPE.ALL_BIDS_BACK === n ? y.all.push(t) : p.CB.TYPE.AD_UNIT_BIDS_BACK === n && y.byAdUnit.push(t)
        }, v.on(p.EVENTS.BID_ADJUSTMENT, (function(e) {
            U(e)
        })), t.adjustBids = function() {
            return U.apply(void 0, arguments)
        }, t.getStandardBidderAdServerTargeting = function() {
            return N()[p.JSON_MAPPING.ADSERVER_TARGETING]
        }
    },
    20: function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    },
    21: function(e, t, n) {
        "use strict";
        var r = n(0),
            i = n(9),
            o = n(15);

        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var s = n(2),
            d = n(0),
            u = n(4),
            c = t,
            f = [];

        function l(e) {
            return "string" == typeof e ? [e] : d.isArray(e) ? e : pbams._adUnitCodes || []
        }

        function p() {
            return s.getStandardBidderAdServerTargeting().map((function(e) {
                return e.key
            })).concat(u.TARGETING_KEYS).filter(r.uniques)
        }

        function g(e) {
            return {
                adUnitCode: e,
                cpm: 0,
                adserverTargeting: {},
                timeToRespond: 0
            }
        }
        c.resetPresetTargeting = function(e) {
            if ((0, r.isGptPubadsDefined)()) {
                var t = l(e),
                    n = pbams.adUnits.filter((function(e) {
                        return t.includes(e.code)
                    }));
                window.googletag.pubads().getSlots().forEach((function(e) {
                    f.forEach((function(t) {
                        n.forEach((function(n) {
                            n.code !== e.getAdUnitPath() && n.code !== e.getSlotElementId() || e.setTargeting(t, null)
                        }))
                    }))
                }))
            }
        }, c.getAllTargeting = function(e) {
            var t, n, s, d, b, v, y = l(e),
                m = (d = y, b = c.getWinningBids(d), v = p(), b = b.map((function(e) {
                    return a({}, e.adUnitCode, Object.keys(e.adserverTargeting).filter((function(t) {
                        return void 0 === e.sendStandardTargeting || e.sendStandardTargeting || -1 === v.indexOf(t)
                    })).map((function(t) {
                        return a({}, t.substring(0, 20), [e.adserverTargeting[t]])
                    })))
                }))).concat(function(e) {
                    var t = p();
                    return pbams._bidsReceived.filter(r.adUnitsFilter.bind(this, e)).map((function(e) {
                        if (e.alwaysUseBid) return a({}, e.adUnitCode, Object.keys(e.adserverTargeting).map((function(n) {
                            if (!(t.indexOf(n) > -1)) return a({}, n.substring(0, 20), [e.adserverTargeting[n]])
                        })).filter((function(e) {
                            return e
                        })))
                    })).filter((function(e) {
                        return e
                    }))
                }(y)).concat(i.config.getConfig("enableSendAllBids") ? (t = u.TARGETING_KEYS.concat(o.NATIVE_TARGETING_KEYS), n = [], s = (0, r.groupBy)(pbams._bidsReceived, "adUnitCode"), Object.keys(s).forEach((function(e) {
                    var t = (0, r.groupBy)(s[e], "bidderCode");
                    Object.keys(t).forEach((function(e) {
                        return n.push(t[e].reduce(r.getHighestCpm, g()))
                    }))
                })), n.map((function(e) {
                    if (e.adserverTargeting) return a({}, e.adUnitCode, (n = e, t.filter((function(t) {
                        return void 0 !== e.adserverTargeting[t]
                    })).map((function(e) {
                        return a({}, (e + "_" + n.bidderCode).substring(0, 20), [n.adserverTargeting[e]])
                    }))));
                    var n
                })).filter((function(e) {
                    return e
                }))) : []);
            return m.map((function(e) {
                Object.keys(e).map((function(t) {
                    e[t].map((function(e) {
                        -1 === f.indexOf(Object.keys(e)[0]) && (f = Object.keys(e).concat(f))
                    }))
                }))
            })), m
        }, c.setTargeting = function(e) {
            window.googletag.pubads().getSlots().forEach((function(t) {
                e.filter((function(e) {
                    return Object.keys(e)[0] === t.getAdUnitPath() || Object.keys(e)[0] === t.getSlotElementId()
                })).forEach((function(e) {
                    return e[Object.keys(e)[0]].forEach((function(e) {
                        e[Object.keys(e)[0]].map((function(n) {
                            return d.logMessage("Attempting to set key value for slot: " + t.getSlotElementId() + " key: " + Object.keys(e)[0] + " value: " + n), n
                        })).forEach((function(n) {
                            t.setTargeting(Object.keys(e)[0], n)
                        }))
                    }))
                }))
            }))
        }, c.getWinningBids = function(e) {
            var t = l(e);
            return pbams._bidsReceived.filter((function(e) {
                return t.includes(e.adUnitCode)
            })).filter((function(e) {
                return e.cpm > 0
            })).map((function(e) {
                return e.adUnitCode
            })).filter(r.uniques).map((function(e) {
                return pbams._bidsReceived.filter((function(t) {
                    return t.adUnitCode === e ? t : null
                })).reduce(r.getHighestCpm, g(e))
            }))
        }, c.setTargetingForAst = function() {
            var e = pbams.getAdserverTargeting();
            Object.keys(e).forEach((function(t) {
                return Object.keys(e[t]).forEach((function(n) {
                    if (d.logMessage("Attempting to set targeting for targetId: " + t + " key: " + n + " value: " + e[t][n]), d.isStr(e[t][n]) || d.isArray(e[t][n])) {
                        var r = {},
                            i = "hb_adid";
                        r[n.substring(0, i.length) === i ? n.toUpperCase() : n] = e[t][n], window.apntag.setKeywords(t, r)
                    }
                }))
            }))
        }, c.isApntagDefined = function() {
            if (window.apntag && d.isFn(window.apntag.setKeywords)) return !0
        }
    },
    22: function(e, t, n) {
        var r = n(347),
            i = n(352);
        e.exports = n(23) ? function(e, t, n) {
            return r.f(e, t, i(1, n))
        } : function(e, t, n) {
            return e[t] = n, e
        }
    },
    23: function(e, t, n) {
        e.exports = !n(24)((function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        }))
    },
    24: function(e, t) {
        e.exports = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    },
    25: function(e, t) {
        var n = 0,
            r = Math.random();
        e.exports = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
        }
    },
    26: function(e, t, n) {
        var r = n(35);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == r(e) ? e.split("") : Object(e)
        }
    },
    27: function(e, t, n) {
        var r = n(40)("unscopables"),
            i = Array.prototype;
        void 0 == i[r] && n(22)(i, r, {}), e.exports = function(e) {
            i[r][e] = !0
        }
    },
    28: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0),
            i = 2,
            o = {
                buckets: [{
                    min: 0,
                    max: 5,
                    increment: .5
                }]
            },
            a = {
                buckets: [{
                    min: 0,
                    max: 20,
                    increment: .1
                }]
            },
            s = {
                buckets: [{
                    min: 0,
                    max: 20,
                    increment: .01
                }]
            },
            d = {
                buckets: [{
                    min: 0,
                    max: 3,
                    increment: .01
                }, {
                    min: 3,
                    max: 8,
                    increment: .05
                }, {
                    min: 8,
                    max: 20,
                    increment: .5
                }]
            },
            u = {
                buckets: [{
                    min: 0,
                    max: 5,
                    increment: .05
                }, {
                    min: 5,
                    max: 10,
                    increment: .1
                }, {
                    min: 10,
                    max: 20,
                    increment: .5
                }]
            };

        function c(e, t, n) {
            var r = "";
            if (!f(t)) return r;
            var o = t.buckets.reduce((function(e, t) {
                    return e.max > t.max ? e : t
                }), {
                    max: 0
                }),
                a = t.buckets.find((function(t) {
                    if (e > o.max * n) {
                        var a = t.precision;
                        void 0 === a && (a = i), r = (t.max * n).toFixed(a)
                    } else if (e <= t.max * n && e >= t.min * n) return t
                }));
            return a && (r = (function(e, t, n, r) {
                void 0 === n && (n = i);
                var o = 1 / (t * r);
                return (Math.floor(e * o) / o).toFixed(n)
            })(e, a.increment, a.precision, n)), r
        }

        function f(e) {
            if (r.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
            var t = !0;
            return e.buckets.forEach((function(e) {
                void 0 !== e.min && e.max && e.increment || (t = !1)
            })), t
        }
        t.getPriceBucketString = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                r = parseFloat(e);
            return isNaN(r) && (r = ""), {
                low: "" === r ? "" : c(e, o, n),
                med: "" === r ? "" : c(e, a, n),
                high: "" === r ? "" : c(e, s, n),
                auto: "" === r ? "" : c(e, u, n),
                dense: "" === r ? "" : c(e, d, n),
                custom: "" === r ? "" : c(e, t, n)
            }
        }, t.isValidPriceConfig = f
    },
    29: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.hasNonVideoBidder = t.videoBidder = t.videoAdUnit = void 0, t.isValidVideoBid = function(e) {
            var t = (0, i.getBidRequest)(e.adId),
                n = t && (0, i.deepAccess)(t, "mediaTypes.video"),
                r = n && (0, i.deepAccess)(n, "context");
            if (!t || n && r !== a) return o.config.getConfig("usePrebidCache") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : ((0, i.logError)("\n        This bid contains only vastXml and will not work when prebid-cache is disabled.\n        Try enabling prebid-cache with pbams.setConfig({ usePrebidCache: true });\n      "), !1);
            if (r === a) return !(!e.renderer && !t.renderer);
            return !0
        };
        var r = n(1),
            i = n(0),
            o = n(9),
            a = "outstream",
            s = (t.videoAdUnit = function(e) {
                var t = "video" === e.mediaType,
                    n = (0, i.deepAccess)(e, "mediaTypes.video");
                return t || n
            }, t.videoBidder = function(e) {
                return r.videoAdapters.includes(e.bidder)
            });
        t.hasNonVideoBidder = function(e) {
            return e.bids.filter((function(e) {
                return !s(e)
            })).length
        }
    },
    3: function(e, t, n) {
        "use strict";
        var r = n(0);
        t.createBid = function(e, t) {
            return new function(e, t) {
                var n = t && t.bidId || r.getUniqueIdentifierStr(),
                    i = e || 0;
                this.bidderCode = t && t.bidder || "", this.width = 0, this.height = 0, this.statusMessage = (function() {
                    switch (i) {
                        case 0:
                            return "Pending";
                        case 1:
                            return "Bid available";
                        case 2:
                            return "Bid returned empty or error response";
                        case 3:
                            return "Bid timed out"
                    }
                })(), this.adId = n, this.mediaType = "banner", this.getStatusCode = function() {
                    return i
                }, this.getSize = function() {
                    return this.width + "x" + this.height
                }
            }(e, t)
        }
    },
    30: function(e, t) {
        var n;
        n = (function() {
            return this
        })();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    },
    31: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getGlobal = function() {
            return window.pbams
        }, window.pbams = window.pbams || {}, window.pbams.cmd = window.pbams.cmd || [], window.pbams.que = window.pbams.que || []
    },
    32: function(e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return n.call(e, t)
        }
    },
    33: function(e, t, n) {
        var r = n(354);
        e.exports = function(e, t, n) {
            if (r(e), void 0 === t) return e;
            switch (n) {
                case 1:
                    return function(n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function(n, r) {
                        return e.call(t, n, r)
                    };
                case 3:
                    return function(n, r, i) {
                        return e.call(t, n, r, i)
                    }
            }
            return function() {
                return e.apply(t, arguments)
            }
        }
    },
    34: function(e, t, n) {
        var r = n(33),
            i = n(26),
            o = n(36),
            a = n(38),
            s = n(355);
        e.exports = function(e, t) {
            var n = 1 == e,
                d = 2 == e,
                u = 3 == e,
                c = 4 == e,
                f = 6 == e,
                l = 5 == e || f,
                p = t || s;
            return function(t, s, g) {
                for (var b, v, y = o(t), m = i(y), h = r(s, g, 3), S = a(m.length), E = 0, T = n ? p(t, S) : d ? p(t, 0) : void 0; S > E; E++)
                    if ((l || E in m) && (v = h(b = m[E], E, y), e))
                        if (n) T[E] = v;
                        else if (v) switch (e) {
                    case 3:
                        return !0;
                    case 5:
                        return b;
                    case 6:
                        return E;
                    case 2:
                        T.push(b)
                } else if (c) return !1;
                return f ? -1 : u || c ? c : T
            }
        }
    },
    342: function(e, t, n) {
        e.exports = n(343)
    },
    343: function(e, t, n) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            o = n(31),
            a = n(0),
            s = n(29),
            d = n(15);
        n(344);
        var u = n(12),
            c = n(372),
            f = n(18),
            l = n(5),
            p = n(7),
            g = n(9);

        function b(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var v = (0, o.getGlobal)(),
            y = n(4),
            m = n(0),
            h = n(2),
            S = n(1),
            E = n(3),
            T = n(11),
            A = n(373),
            _ = n(21),
            I = f.userSync.syncUsers,
            w = f.userSync.triggerUserSyncs,
            C = y.EVENTS.BID_WON,
            j = y.EVENTS.SET_TARGETING,
            O = y.EVENTS.ADD_AD_UNITS,
            B = !1,
            U = [],
            N = {
                bidWon: function(e) {
                    var t = v._bidsRequested.map((function(e) {
                        return e.bids.map((function(e) {
                            return e.placementCode
                        }))
                    })).reduce(a.flatten).filter(a.uniques);
                    if (!m.contains(t, e)) return void m.logError('The "' + e + '" placement is not defined.');
                    return !0
                }
            };

        function P(e, t, n) {
            e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t, e.defaultView.frameElement.height = n)
        }

        function R(e) {
            e.forEach((function(e) {
                if (void 0 === e.called) try {
                    e.call(), e.called = !0
                } catch (e) {
                    m.logError("Error processing command :", "prebid.js", e)
                }
            }))
        }
        v._bidsRequested = [], v._bidsReceived = [], v._adUnitCodes = [], v._winningBids = [], v._adsReceived = [], v.bidderSettings = v.bidderSettings || {}, v.bidderTimeout = v.bidderTimeout, v.cbTimeout = v.cbTimeout || 200, v.timeoutBuffer = 200, v.logging = v.logging, v.publisherDomain = v.publisherDomain, v.libLoaded = !0, v.version = "v0.34.2", m.logInfo("Prebid.js v0.34.2 loaded"), v.adUnits = v.adUnits || [], v.triggerUserSyncs = w, v.getAdserverTargetingForAdUnitCodeStr = function(e) {
            if (m.logInfo("Invoking pbams.getAdserverTargetingForAdUnitCodeStr", arguments), e) {
                var t = v.getAdserverTargetingForAdUnitCode(e);
                return m.transformAdServerTargetingObj(t)
            }
            m.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")
        }, v.getAdserverTargetingForAdUnitCode = function(e) {
            return v.getAdserverTargeting(e)[e]
        }, v.getAdserverTargeting = function(e) {
            return m.logInfo("Invoking pbams.getAdserverTargeting", arguments), _.getAllTargeting(e).map((function(e) {
                return b({}, Object.keys(e)[0], e[Object.keys(e)[0]].map((function(e) {
                    return b({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(", "))
                })).reduce((function(e, t) {
                    return i(t, e)
                }), {}))
            })).reduce((function(e, t) {
                var n = Object.keys(t)[0];
                return e[n] = i({}, e[n], t[n]), e
            }), {})
        }, v.getBidResponses = function() {
            m.logInfo("Invoking pbams.getBidResponses", arguments);
            var e = v._bidsReceived.filter(a.adUnitsFilter.bind(this, v._adUnitCodes)),
                t = e && e.length && e[e.length - 1].requestId;
            return e.map((function(e) {
                return e.adUnitCode
            })).filter(a.uniques).map((function(n) {
                return e.filter((function(e) {
                    return e.requestId === t && e.adUnitCode === n
                }))
            })).filter((function(e) {
                return e && e[0] && e[0].adUnitCode
            })).map((function(e) {
                return b({}, e[0].adUnitCode, {
                    bids: e
                })
            })).reduce((function(e, t) {
                return i(e, t)
            }), {})
        }, v.getBidResponsesForAdUnitCode = function(e) {
            return {
                bids: v._bidsReceived.filter((function(t) {
                    return t.adUnitCode === e
                }))
            }
        }, v.setTargetingForGPTAsync = function(e) {
            if (m.logInfo("Invoking pbams.setTargetingForGPTAsync", arguments), (0, a.isGptPubadsDefined)()) {
                var t = _.getAllTargeting(e);
                _.resetPresetTargeting(e), _.setTargeting(t), T.emit(j)
            } else m.logError("window.googletag is not defined on the page")
        }, v.setTargetingForAst = function() {
            m.logInfo("Invoking pbams.setTargetingForAn", arguments), _.isApntagDefined() ? (_.setTargetingForAst(), T.emit(j)) : m.logError("window.apntag is not defined on the page")
        }, v.allBidsAvailable = function() {
            return m.logWarn("pbams.allBidsAvailable will be removed in Prebid 1.0. Alternative solution is in progress. See https://github.com/prebid/Prebid.js/issues/1087 for more details."), m.logInfo("Invoking pbams.allBidsAvailable", arguments), h.bidsBackAll()
        }, v.renderAd = function(e, t) {
            if (m.logInfo("Invoking pbams.renderAd", arguments), m.logMessage("Calling renderAd with adId :" + t), e && t) try {
                var n = v._bidsReceived.find((function(e) {
                    return e.adId === t
                }));
                if (n) {
                    n.ad = m.replaceAuctionPrice(n.ad, n.cpm), n.adUrl = m.replaceAuctionPrice(n.adUrl, n.cpm), v._winningBids.push(n), T.emit(C, n);
                    var r = n.height,
                        i = n.width,
                        o = n.ad,
                        a = n.mediaType,
                        s = n.adUrl,
                        d = n.renderer;
                    if (d && d.url) d.render(n);
                    else if (e === document && !m.inIframe() || "video" === a) m.logError("Error trying to write ad. Ad render call ad id " + t + " was prevented from writing to the main document.");
                    else if (o) e.write(o), e.close(), P(e, i, r);
                    else if (s) {
                        var u = m.createInvisibleIframe();
                        u.height = r, u.width = i, u.style.display = "inline", u.style.overflow = "hidden", u.src = s, m.insertElement(u, e, "body"), P(e, i, r)
                    } else m.logError("Error trying to write ad. No ad for bid response id: " + t)
                } else m.logError("Error trying to write ad. Cannot find ad by given id : " + t)
            } catch (e) {
                m.logError("Error trying to write ad Id :" + t + " to the page:" + e.message)
            } else m.logError("Error trying to write ad Id :" + t + " to the page. Missing document or adId")
        }, v.removeAdUnit = function(e) {
            if (m.logInfo("Invoking pbams.removeAdUnit", arguments), e)
                for (var t = 0; t < v.adUnits.length; t++) v.adUnits[t].code === e && v.adUnits.splice(t, 1)
        }, v.clearAuction = function() {
            B = !1;
            var e = g.config.getConfig("userSync") || {};
            e.enableOverride || I(e.syncDelay), m.logMessage("Prebid auction cleared"), U.length && U.shift()()
        }, v.requestBids = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.bidsBackHandler,
                n = e.timeout,
                r = e.adUnits,
                i = e.adUnitCodes;
            T.emit("requestBids");
            var o = v.cbTimeout = n || g.config.getConfig("bidderTimeout");
            if (r = r || v.adUnits, m.logInfo("Invoking pbams.requestBids", arguments), i && i.length ? r = r.filter((function(e) {
                    return i.includes(e.code)
                })) : i = r && r.map((function(e) {
                    return e.code
                })), r.filter(s.videoAdUnit).filter(s.hasNonVideoBidder).forEach((function(e) {
                    var t = e.bids.filter((function(e) {
                        return !(0, s.videoBidder)(e)
                    })).map((function(e) {
                        return e.bidder
                    }));
                    m.logWarn(m.unsupportedBidderMessage(e, t)), e.bids = e.bids.filter(s.videoBidder)
                })), r.filter(d.nativeAdUnit).filter(d.hasNonNativeBidder).forEach((function(e) {
                    var t = e.bids.filter((function(e) {
                        return !(0, d.nativeBidder)(e)
                    })).map((function(e) {
                        return e.bidder
                    }));
                    m.logWarn(m.unsupportedBidderMessage(e, t)), e.bids = e.bids.filter(d.nativeBidder)
                })), B) U.push((function() {
                v.requestBids({
                    bidsBackHandler: t,
                    timeout: o,
                    adUnits: r,
                    adUnitCodes: i
                })
            }));
            else {
                if (B = !0, v._adUnitCodes = i, h.externalCallbackReset(), v._bidsRequested = [], v._bidsReceived = v._bidsReceived.filter((function(e) {
                        return !v._adUnitCodes.includes(e.adUnitCode)
                    })), !r || 0 === r.length) return m.logMessage("No adUnits configured. No bids requested."), "function" == typeof t && h.addOneTimeCallback(t, !1), void h.executeCallback();
                var a = h.executeCallback.bind(h, !0),
                    u = setTimeout(a, o);
                (0, p.setAjaxTimeout)(o), "function" == typeof t && h.addOneTimeCallback(t, u), S.callBids({
                    adUnits: r,
                    adUnitCodes: i,
                    cbTimeout: o
                }), 0 === v._bidsRequested.length && h.executeCallback()
            }
        }, v.addAdUnits = function(e) {
            m.logInfo("Invoking pbams.addAdUnits", arguments), m.isArray(e) ? (e.forEach((function(e) {
                return e.transactionId = m.generateUUID()
            })), v.adUnits.push.apply(v.adUnits, e)) : "object" === (void 0 === e ? "undefined" : r(e)) && (e.transactionId = m.generateUUID(), v.adUnits.push(e)), T.emit(O)
        }, v.onEvent = function(e, t, n) {
            m.logInfo("Invoking pbams.onEvent", arguments), m.isFn(t) ? !n || N[e].call(null, n) ? T.on(e, t, n) : m.logError('The id provided is not valid for event "' + e + '" and no handler was set.') : m.logError('The event handler provided is not a function and was not set on event "' + e + '".')
        }, v.offEvent = function(e, t, n) {
            m.logInfo("Invoking pbams.offEvent", arguments), n && !N[e].call(null, n) || T.off(e, t, n)
        }, v.addCallback = function(e, t) {
            m.logWarn("pbams.addCallback will be removed in Prebid 1.0. Please use onEvent instead"), m.logInfo("Invoking pbams.addCallback", arguments);
            var n = null;
            return e && t && "function" == typeof t ? (n = m.getUniqueIdentifierStr, h.addCallback(n, t, e), n) : (m.logError("error registering callback. Check method signature"), n)
        }, v.removeCallback = function() {
            return m.logWarn("pbams.removeCallback will be removed in Prebid 1.0. Please use offEvent instead."), null
        }, v.registerBidAdapter = function(e, t) {
            m.logInfo("Invoking pbams.registerBidAdapter", arguments);
            try {
                S.registerBidAdapter(e(), t)
            } catch (e) {
                m.logError("Error registering bidder adapter : " + e.message)
            }
        }, v.registerAnalyticsAdapter = function(e) {
            m.logInfo("Invoking pbams.registerAnalyticsAdapter", arguments);
            try {
                S.registerAnalyticsAdapter(e)
            } catch (e) {
                m.logError("Error registering analytics adapter : " + e.message)
            }
        }, v.bidsAvailableForAdapter = function(e) {
            m.logInfo("Invoking pbams.bidsAvailableForAdapter", arguments), v._bidsRequested.find((function(t) {
                return t.bidderCode === e
            })).bids.map((function(t) {
                return i(t, E.createBid(1), {
                    bidderCode: e,
                    adUnitCode: t.placementCode
                })
            })).map((function(e) {
                return v._bidsReceived.push(e)
            }))
        }, v.createBid = function(e) {
            return m.logInfo("Invoking pbams.createBid", arguments), E.createBid(e)
        }, v.addBidResponse = function(e, t) {
            m.logWarn("pbams.addBidResponse will be removed in Prebid 1.0. Each bidder will be passed a reference to addBidResponse function in callBids as an argument. See https://github.com/prebid/Prebid.js/issues/1087 for more details."), m.logInfo("Invoking pbams.addBidResponse", arguments), h.addBidResponse(e, t)
        }, v.loadScript = function(e, t, n) {
            m.logInfo("Invoking pbams.loadScript", arguments), (0, l.loadScript)(e, t, n)
        }, v.enableAnalytics = function(e) {
            e && !m.isEmpty(e) ? (m.logInfo("Invoking pbams.enableAnalytics for: ", e), S.enableAnalytics(e)) : m.logError("pbams.enableAnalytics should be called with option {}")
        }, v.aliasBidder = function(e, t) {
            m.logInfo("Invoking pbams.aliasBidder", arguments), e && t ? S.aliasBidAdapter(e, t) : m.logError("bidderCode and alias must be passed as arguments", "pbams.aliasBidder")
        }, v.setPriceGranularity = function(e) {
            m.logWarn("pbams.setPriceGranularity will be removed in Prebid 1.0. Use pbams.setConfig({ priceGranularity: <granularity> }) instead."), m.logInfo("Invoking pbams.setPriceGranularity", arguments), g.config.setConfig({
                priceGranularity: e
            })
        }, v.enableSendAllBids = function() {
            g.config.setConfig({
                enableSendAllBids: !0
            })
        }, v.getAllWinningBids = function() {
            return v._winningBids
        }, v.buildMasterVideoTagFromAdserverTag = function(e, t) {
            m.logWarn("pbams.buildMasterVideoTagFromAdserverTag will be removed in Prebid 1.0. Include the dfpVideoSupport module in your build, and use the pbams.adservers.dfp.buildVideoAdUrl function instead"), m.logInfo("Invoking pbams.buildMasterVideoTagFromAdserverTag", arguments);
            var n = (0, u.parse)(e);
            if (0 === v._bidsReceived.length) return e;
            if ("dfp" === t.adserver.toLowerCase()) {
                var r = A.dfpAdserver(t, n);
                return r.verifyAdserverTag() || m.logError("Invalid adserverTag, required google params are missing in query string"), r.appendQueryParams(), (0, u.format)(r.urlComponents)
            }
            m.logError("Only DFP adserver is supported")
        }, v.setBidderSequence = S.setBidderSequence, v.getHighestCpmBids = function(e) {
            return _.getWinningBids(e)
        }, v.setS2SConfig = function(e) {
            if (m.contains(Object.keys(e), "accountId"))
                if (m.contains(Object.keys(e), "bidders")) {
                    var t = i({
                        enabled: !1,
                        endpoint: y.S2S.DEFAULT_ENDPOINT,
                        timeout: 1e3,
                        maxBids: 1,
                        adapter: y.S2S.ADAPTER,
                        syncEndpoint: y.S2S.SYNC_ENDPOINT,
                        cookieSet: !0,
                        bidders: []
                    }, e);
                    S.setS2SConfig(t)
                } else m.logError("bidders missing in Server to Server config");
            else m.logError("accountId missing in Server to Server config")
        }, v.getConfig = g.config.getConfig, v.setConfig = g.config.setConfig, v.que.push((function() {
            return (0, c.listenMessagesFromCreative)()
        })), v.cmd.push = function(e) {
            if ("function" == typeof e) try {
                e.call()
            } catch (e) {
                m.logError("Error processing command :", e.message, e.stack)
            } else m.logError("Commands written into pbams.cmd.push must be wrapped in a function")
        }, v.que.push = v.cmd.push, v.processQueue = function() {
            R(v.que), R(v.cmd)
        }
    },
    344: function(e, t, n) {
        "use strict";
        n(345), n(358), n(360), n(363), Number.isInteger = Number.isInteger || function(e) {
            return "number" == typeof e && isFinite(e) && Math.floor(e) === e
        }
    },
    345: function(e, t, n) {
        n(346), e.exports = n(14).Array.find
    },
    346: function(e, t, n) {
        "use strict";
        var r = n(19),
            i = n(34)(5),
            o = "find",
            a = !0;
        o in [] && Array(1)[o]((function() {
            a = !1
        })), r(r.P + r.F * a, "Array", {
            find: function(e) {
                return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), n(27)(o)
    },
    347: function(e, t, n) {
        var r = n(348),
            i = n(349),
            o = n(351),
            a = Object.defineProperty;
        t.f = n(23) ? Object.defineProperty : function(e, t, n) {
            if (r(e), t = o(t, !0), r(n), i) try {
                return a(e, t, n)
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e
        }
    },
    348: function(e, t, n) {
        var r = n(20);
        e.exports = function(e) {
            if (!r(e)) throw TypeError(e + " is not an object!");
            return e
        }
    },
    349: function(e, t, n) {
        e.exports = !n(23) && !n(24)((function() {
            return 7 != Object.defineProperty(n(350)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }))
    },
    35: function(e, t) {
        var n = {}.toString;
        e.exports = function(e) {
            return n.call(e).slice(8, -1)
        }
    },
    350: function(e, t, n) {
        var r = n(20),
            i = n(16).document,
            o = r(i) && r(i.createElement);
        e.exports = function(e) {
            return o ? i.createElement(e) : {}
        }
    },
    351: function(e, t, n) {
        var r = n(20);
        e.exports = function(e, t) {
            if (!r(e)) return e;
            var n, i;
            if (t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
            if ("function" == typeof(n = e.valueOf) && !r(i = n.call(e))) return i;
            if (!t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    352: function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    },
    353: function(e, t, n) {
        var r = n(16),
            i = n(22),
            o = n(32),
            a = n(25)("src"),
            s = "toString",
            d = Function[s],
            u = ("" + d).split(s);
        n(14).inspectSource = function(e) {
            return d.call(e)
        }, (e.exports = function(e, t, n, s) {
            var d = "function" == typeof n;
            d && (o(n, "name") || i(n, "name", t)), e[t] !== n && (d && (o(n, a) || i(n, a, e[t] ? "" + e[t] : u.join(String(t)))), e === r ? e[t] = n : s ? e[t] ? e[t] = n : i(e, t, n) : (delete e[t], i(e, t, n)))
        })(Function.prototype, s, (function() {
            return "function" == typeof this && this[a] || d.call(this)
        }))
    },
    354: function(e, t) {
        e.exports = function(e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
        }
    },
    355: function(e, t, n) {
        var r = n(356);
        e.exports = function(e, t) {
            return new(r(e))(t)
        }
    },
    356: function(e, t, n) {
        var r = n(20),
            i = n(357),
            o = n(40)("species");
        e.exports = function(e) {
            var t;
            return i(e) && ("function" != typeof(t = e.constructor) || t !== Array && !i(t.prototype) || (t = void 0), r(t) && null === (t = t[o]) && (t = void 0)), void 0 === t ? Array : t
        }
    },
    357: function(e, t, n) {
        var r = n(35);
        e.exports = Array.isArray || function(e) {
            return "Array" == r(e)
        }
    },
    358: function(e, t, n) {
        n(359), e.exports = n(14).Array.findIndex
    },
    359: function(e, t, n) {
        "use strict";
        var r = n(19),
            i = n(34)(6),
            o = "findIndex",
            a = !0;
        o in [] && Array(1)[o]((function() {
            a = !1
        })), r(r.P + r.F * a, "Array", {
            findIndex: function(e) {
                return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), n(27)(o)
    },
    36: function(e, t, n) {
        var r = n(37);
        e.exports = function(e) {
            return Object(r(e))
        }
    },
    360: function(e, t, n) {
        n(361), e.exports = n(14).Array.includes
    },
    361: function(e, t, n) {
        "use strict";
        var r = n(19),
            i = n(42)(!0);
        r(r.P, "Array", {
            includes: function(e) {
                return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), n(27)("includes")
    },
    362: function(e, t, n) {
        var r = n(39),
            i = Math.max,
            o = Math.min;
        e.exports = function(e, t) {
            return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t)
        }
    },
    363: function(e, t, n) {
        n(364), e.exports = n(14).Object.assign
    },
    364: function(e, t, n) {
        var r = n(19);
        r(r.S + r.F, "Object", {
            assign: n(365)
        })
    },
    365: function(e, t, n) {
        "use strict";
        var r = n(366),
            i = n(370),
            o = n(371),
            a = n(36),
            s = n(26),
            d = Object.assign;
        e.exports = !d || n(24)((function() {
            var e = {},
                t = {},
                n = Symbol(),
                r = "abcdefghijklmnopqrst";
            return e[n] = 7, r.split("").forEach((function(e) {
                t[e] = e
            })), 7 != d({}, e)[n] || Object.keys(d({}, t)).join("") != r
        })) ? function(e, t) {
            for (var n = a(e), d = arguments.length, u = 1, c = i.f, f = o.f; d > u;)
                for (var l, p = s(arguments[u++]), g = c ? r(p).concat(c(p)) : r(p), b = g.length, v = 0; b > v;) f.call(p, l = g[v++]) && (n[l] = p[l]);
            return n
        } : d
    },
    366: function(e, t, n) {
        var r = n(367),
            i = n(369);
        e.exports = Object.keys || function(e) {
            return r(e, i)
        }
    },
    367: function(e, t, n) {
        var r = n(32),
            i = n(43),
            o = n(42)(!1),
            a = n(368)("IE_PROTO");
        e.exports = function(e, t) {
            var n, s = i(e),
                d = 0,
                u = [];
            for (n in s) n != a && r(s, n) && u.push(n);
            for (; t.length > d;) r(s, n = t[d++]) && (~o(u, n) || u.push(n));
            return u
        }
    },
    368: function(e, t, n) {
        var r = n(41)("keys"),
            i = n(25);
        e.exports = function(e) {
            return r[e] || (r[e] = i(e))
        }
    },
    369: function(e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    37: function(e, t) {
        e.exports = function(e) {
            if (void 0 == e) throw TypeError("Can't call method on  " + e);
            return e
        }
    },
    370: function(e, t) {
        t.f = Object.getOwnPropertySymbols
    },
    371: function(e, t) {
        t.f = {}.propertyIsEnumerable
    },
    372: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.listenMessagesFromCreative = function() {
            addEventListener("message", d, !1)
        };
        var r, i = n(11),
            o = (r = i) && r.__esModule ? r : {
                default: r
            },
            a = n(15);
        var s = n(4).EVENTS.BID_WON;

        function d(e) {
            var t, n, r, i, d, u, c, f, l, p, g, b, v, y = e.message ? "message" : "data",
                m = {};
            try {
                m = JSON.parse(e[y])
            } catch (e) {
                return
            }
            if (m.adId) {
                var h = pbams._bidsReceived.find((function(e) {
                    return e.adId === m.adId
                }));
                "Prebid Request" === m.message && (t = h, n = m.adServerDomain, r = e.source, i = t.adId, d = t.ad, u = t.adUrl, c = t.width, f = t.height, i && (p = (l = t).adUnitCode, g = l.width, b = l.height, (v = document.getElementById(window.googletag.pubads().getSlots().find((function(e) {
                    return e.getAdUnitPath() === p || e.getSlotElementId() === p
                })).getSlotElementId()).querySelector("iframe")).width = "" + g, v.height = "" + b, r.postMessage(JSON.stringify({
                    message: "Prebid Response",
                    ad: d,
                    adUrl: u,
                    adId: i,
                    width: c,
                    height: f
                }), n)), pbams._winningBids.push(h), o.default.emit(s, h)), "Prebid Native" === m.message && ((0, a.fireNativeTrackers)(m, h), pbams._winningBids.push(h), o.default.emit(s, h))
            }
        }
    },
    373: function(e, t, n) {
        "use strict";
        var r = n(12),
            i = n(21);
        t.dfpAdserver = function(e, t) {
            var n = new function(e) {
                this.name = e.adserver, this.code = e.code, this.getWinningBidByCode = function() {
                    return (0, i.getWinningBids)(this.code)[0]
                }
            }(e);
            n.urlComponents = t;
            var o = {
                    env: "vp",
                    gdfp_req: "1",
                    impl: "s",
                    unviewed_position_start: "1"
                },
                a = ["output", "iu", "sz", "url", "correlator", "description_url", "hl"];
            return n.appendQueryParams = function() {
                var e, t = n.getWinningBidByCode();
                t && (this.urlComponents.search.description_url = encodeURIComponent(t.vastUrl), this.urlComponents.search.cust_params = (e = t.adserverTargeting, encodeURIComponent((0, r.formatQS)(e))), this.urlComponents.search.correlator = Date.now())
            }, n.verifyAdserverTag = function() {
                for (var e in o)
                    if (!this.urlComponents.search.hasOwnProperty(e) || this.urlComponents.search[e] !== o[e]) return !1;
                for (var t in a)
                    if (!this.urlComponents.search.hasOwnProperty(a[t])) return !1;
                return !0
            }, n
        }
    },
    38: function(e, t, n) {
        var r = n(39),
            i = Math.min;
        e.exports = function(e) {
            return e > 0 ? i(r(e), 9007199254740991) : 0
        }
    },
    39: function(e, t) {
        var n = Math.ceil,
            r = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
        }
    },
    4: function(e, t) {
        e.exports = {
            JSON_MAPPING: {
                PL_CODE: "code",
                PL_SIZE: "sizes",
                PL_BIDS: "bids",
                BD_BIDDER: "bidder",
                BD_ID: "paramsd",
                BD_PL_ID: "placementId",
                ADSERVER_TARGETING: "adserverTargeting",
                BD_SETTING_STANDARD: "standard"
            },
            REPO_AND_VERSION: "prebid_prebid_0.34.2",
            DEBUG_MODE: "pbjs_debug",
            STATUS: {
                GOOD: 1,
                NO_BID: 2
            },
            CB: {
                TYPE: {
                    ALL_BIDS_BACK: "allRequestedBidsBack",
                    AD_UNIT_BIDS_BACK: "adUnitBidsBack",
                    BID_WON: "bidWon",
                    REQUEST_BIDS: "requestBids"
                }
            },
            EVENTS: {
                AUCTION_INIT: "auctionInit",
                AUCTION_END: "auctionEnd",
                BID_ADJUSTMENT: "bidAdjustment",
                BID_TIMEOUT: "bidTimeout",
                BID_REQUESTED: "bidRequested",
                BID_RESPONSE: "bidResponse",
                BID_WON: "bidWon",
                SET_TARGETING: "setTargeting",
                REQUEST_BIDS: "requestBids",
                ADD_AD_UNITS: "addAdUnits"
            },
            EVENT_ID_PATHS: {
                bidWon: "adUnitCode"
            },
            GRANULARITY_OPTIONS: {
                LOW: "low",
                MEDIUM: "medium",
                HIGH: "high",
                AUTO: "auto",
                DENSE: "dense",
                CUSTOM: "custom"
            },
            TARGETING_KEYS: ["hb_bidder", "hb_adid", "hb_pb", "hb_size", "hb_deal"],
            S2S: {
                DEFAULT_ENDPOINT: "https://prebid.adnxs.com/pbs/v1/auction",
                SRC: "s2s",
                ADAPTER: "prebidServer",
                SYNC_ENDPOINT: "https://prebid.adnxs.com/pbs/v1/cookie_sync",
                SYNCED_BIDDERS_KEY: "pbjsSyncs"
            }
        }
    },
    40: function(e, t, n) {
        var r = n(41)("wks"),
            i = n(25),
            o = n(16).Symbol,
            a = "function" == typeof o;
        (e.exports = function(e) {
            return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e))
        }).store = r
    },
    41: function(e, t, n) {
        var r = n(16),
            i = "__core-js_shared__",
            o = r[i] || (r[i] = {});
        e.exports = function(e) {
            return o[e] || (o[e] = {})
        }
    },
    42: function(e, t, n) {
        var r = n(43),
            i = n(38),
            o = n(362);
        e.exports = function(e) {
            return function(t, n, a) {
                var s, d = r(t),
                    u = i(d.length),
                    c = o(a, u);
                if (e && n != n) {
                    for (; u > c;)
                        if ((s = d[c++]) != s) return !0
                } else
                    for (; u > c; c++)
                        if ((e || c in d) && d[c] === n) return e || c || 0;
                return !e && -1
            }
        }
    },
    43: function(e, t, n) {
        var r = n(26),
            i = n(37);
        e.exports = function(e) {
            return r(i(e))
        }
    },
    46: function(e, t) {
        e.exports = function e(t) {
            var n = Array.isArray(t) ? [] : {};
            for (var r in t) {
                var i = t[r];
                n[r] = i && "object" == typeof i ? e(i) : i
            }
            return n
        }
    },
    47: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.setWindow = t.getScreenWidth = t.mapSizes = void 0;
        var r = (function(e) {
            {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }
        })(n(0));
        var i = void 0;

        function o(e) {
            var t = e || i || window,
                n = t.document;
            return t.innerWidth ? t.innerWidth : n.body.clientWidth ? n.body.clientWidth : n.documentElement.clientWidth ? n.documentElement.clientWidth : 0
        }
        t.mapSizes = function(e) {
            if (t = e.sizeMapping, !(r.isArray(t) && t.length > 0 || (r.logInfo("No size mapping defined"), 0))) return e.sizes;
            var t;
            var n = o();
            if (!n) {
                var i = e.sizeMapping.reduce((function(e, t) {
                    return e.minWidth < t.minWidth ? t : e
                }));
                return i.sizes && i.sizes.length ? i.sizes : e.sizes
            }
            var a = "",
                s = e.sizeMapping.find((function(e) {
                    return n >= e.minWidth
                }));
            return s && s.sizes && s.sizes.length ? (a = s.sizes, r.logMessage("AdUnit : " + e.code + " resized based on device width to : " + a)) : r.logMessage("AdUnit : " + e.code + " not mapped to any sizes for device width. This request will be suppressed."), a
        }, t.getScreenWidth = o, t.setWindow = function(e) {
            i = e
        }
    },
    48: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.store = function(e, t) {
            var n = {
                puts: e.map(o)
            };
            (0, r.ajax)(i, (a = t, {
                success: function(e) {
                    var t = void 0;
                    try {
                        t = JSON.parse(e).responses
                    } catch (e) {
                        return void a(e, [])
                    }
                    t ? a(null, t) : a(new Error("The cache server didn't respond with a responses property."), [])
                },
                error: function(e, t) {
                    a(new Error("Error storing video ad in the cache: " + e + ": " + JSON.stringify(t)), [])
                }
            }), JSON.stringify(n), {
                contentType: "text/plain",
                withCredentials: !0
            });
            var a
        }, t.getCacheUrl = function(e) {
            return i + "?uuid=" + e
        };
        var r = n(7),
            i = "https://prebid.adnxs.com/pbc/v1/cache";

        function o(e) {
            return {
                type: "xml",
                value: e.vastXml ? e.vastXml : '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA[' + e.vastUrl + "]]></VASTAdTagURI>\n        <Impression></Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>"
            }
        }
    },
    49: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
        t.createHook = function(e, t, n) {
            var a = [{
                    fn: t,
                    priority: 0
                }],
                s = {
                    sync: function() {
                        for (var e = this, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        a.forEach((function(t) {
                            t.fn.apply(e, n)
                        }))
                    },
                    asyncSeries: function() {
                        for (var e = this, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        var o = 0;
                        return a[o].fn.apply(this, n.concat((function t() {
                            for (var n = arguments.length, r = Array(n), s = 0; s < n; s++) r[s] = arguments[s];
                            var d = a[++o];
                            if ("object" === (void 0 === d ? "undefined" : i(d)) && "function" == typeof d.fn) return d.fn.apply(e, r.concat(t))
                        })))
                    }
                };
            if (!s[e]) throw "invalid hook type";
            var d = {
                addHook: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
                    "function" == typeof e && (a.push({
                        fn: e,
                        priority: t
                    }), a.sort((function(e, t) {
                        return t.priority - e.priority
                    })))
                },
                removeHook: function(e) {
                    a = a.filter((function(n) {
                        return n.fn === t || n.fn !== e
                    }))
                }
            };
            "string" == typeof n && (o[n] = d);
            return r((function() {
                for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                if (0 === a.length) return t.apply(this, r);
                return s[e].apply(this, r)
            }), d)
        };
        var o = t.hooks = {}
    },
    5: function(e, t, n) {
        "use strict";
        var r = n(0),
            i = {};

        function o(e, t) {
            var n = document.createElement("script");
            n.type = "text/javascript", n.async = !0, t && "function" == typeof t && (n.readyState ? n.onreadystatechange = function() {
                "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null, t())
            } : n.onload = function() {
                t()
            }), n.src = e;
            var r = document.getElementsByTagName("head");
            (r = r.length ? r : document.getElementsByTagName("body")).length && (r = r[0]).insertBefore(n, r.firstChild)
        }
        t.loadScript = function(e, t, n) {
            e ? n ? i[e] ? t && "function" == typeof t && (i[e].loaded ? t() : i[e].callbacks.push(t)) : (i[e] = {
                loaded: !1,
                callbacks: []
            }, t && "function" == typeof t && i[e].callbacks.push(t), o(e, (function() {
                i[e].loaded = !0;
                try {
                    for (var t = 0; t < i[e].callbacks.length; t++) i[e].callbacks[t]()
                } catch (e) {
                    r.logError("Error executing callback", "adloader.js:loadScript", e)
                }
            }))) : o(e, t) : r.logError("Error attempting to request empty URL", "adloader.js:loadScript")
        }
    },
    6: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            };
        t.registerBidder = function(e) {
            var t = Array.isArray(e.supportedMediaTypes) ? {
                supportedMediaTypes: e.supportedMediaTypes
            } : void 0;

            function n(e) {
                var n = v(e);
                a.default.registerBidAdapter(n, e.code, t)
            }
            n(e), Array.isArray(e.aliases) && e.aliases.forEach((function(t) {
                n(i({}, e, {
                    code: t
                }))
            }))
        }, t.newBidder = v;
        var o = g(n(8)),
            a = g(n(1)),
            s = n(9),
            d = n(7),
            u = g(n(2)),
            c = g(n(3)),
            f = n(4),
            l = n(18),
            p = n(0);

        function g(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var b = ["requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency"];

        function v(e) {
            return i(new o.default(e.code), {
                getSpec: function() {
                    return Object.freeze(e)
                },
                registerSyncs: t,
                callBids: function(o) {
                    if (Array.isArray(o.bids)) {
                        var a = {},
                            s = [],
                            l = o.bids.filter(n);
                        if (0 !== l.length) {
                            var g = {};
                            l.forEach((function(e) {
                                g[e.bidId] = e, e.adUnitCode || (e.adUnitCode = e.placementCode)
                            }));
                            var v = e.buildRequests(l, o);
                            if (v && 0 !== v.length) {
                                Array.isArray(v) || (v = [v]);
                                var y = (0, p.delayExecution)(S, v.length);
                                v.forEach((function(t) {
                                    switch (t.method) {
                                        case "GET":
                                            (0, d.ajax)("" + t.url + (function(e) {
                                                if (e) return "?" + ("object" === (void 0 === e ? "undefined" : r(e)) ? (0, p.parseQueryStringParameters)(e) : e);
                                                return ""
                                            })(t.data), {
                                                success: n,
                                                error: o
                                            }, void 0, i({
                                                method: "GET",
                                                withCredentials: !0
                                            }, t.options));
                                            break;
                                        case "POST":
                                            (0, d.ajax)(t.url, {
                                                success: n,
                                                error: o
                                            }, "string" == typeof t.data ? t.data : JSON.stringify(t.data), i({
                                                method: "POST",
                                                contentType: "text/plain",
                                                withCredentials: !0
                                            }, t.options));
                                            break;
                                        default:
                                            (0, p.logWarn)("Skipping invalid request from " + e.code + ". Request type " + t.type + " must be GET or POST"), y()
                                    }

                                    function n(n, r) {
                                        try {
                                            n = JSON.parse(n)
                                        } catch (e) {}
                                        n = {
                                            body: n,
                                            headers: {
                                                get: r.getResponseHeader.bind(r)
                                            }
                                        }, s.push(n);
                                        var o = void 0;
                                        try {
                                            o = e.interpretResponse(n, t)
                                        } catch (t) {
                                            return (0, p.logError)("Bidder " + e.code + " failed to interpret the server's response. Continuing without bids", null, t), void y()
                                        }

                                        function d(t) {
                                            if (d = t, u = Object.keys(d), b.every((function(e) {
                                                    return u.includes(e)
                                                }))) {
                                                var n = g[t.requestId];
                                                if (n) {
                                                    var r = i(c.default.createBid(f.STATUS.GOOD, n), t);
                                                    o = n.placementCode, s = r, a[o] = !0, h(o, s)
                                                } else(0, p.logWarn)("Bidder " + e.code + " made bid for unknown request ID: " + t.requestId + ". Ignoring.")
                                            } else(0, p.logError)("Bidder " + e.code + " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params.");
                                            var o, s, d, u
                                        }
                                        o && (o.forEach ? o.forEach(d) : d(o)), y()
                                    }

                                    function o(t) {
                                        (0, p.logError)("Server call for " + e.code + " failed: " + t + ". Continuing without bids."), y()
                                    }
                                }))
                            } else S()
                        } else S()
                    }

                    function m() {
                        o.bids.map((function(e) {
                            return e.placementCode
                        })).forEach((function(t) {
                            var n;
                            t && !a[t] && h(t, ((n = c.default.createBid(f.STATUS.NO_BID)).code = e.code, n.bidderCode = e.code, n))
                        }))
                    }

                    function h(e, t) {
                        try {
                            u.default.addBidResponse(e, t)
                        } catch (t) {
                            (0, p.logError)("Error adding bid", e, t)
                        }
                    }

                    function S() {
                        m(), t(s)
                    }
                }
            });

            function t(t) {
                if (e.getUserSyncs) {
                    var n = e.getUserSyncs({
                        iframeEnabled: s.config.getConfig("userSync.iframeEnabled"),
                        pixelEnabled: s.config.getConfig("userSync.pixelEnabled")
                    }, t);
                    n && (Array.isArray(n) || (n = [n]), n.forEach((function(t) {
                        l.userSync.registerSync(t.type, e.code, t.url)
                    })))
                }
            }

            function n(t) {
                return !!e.isBidRequestValid(t) || ((0, p.logWarn)("Invalid bid sent to bidder " + e.code + ": " + JSON.stringify(t)), !1)
            }
        }
    },
    7: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
        t.setAjaxTimeout = function(e) {
            d = e
        }, t.ajax = function(e, t, n) {
            var u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            try {
                var c = void 0,
                    f = !1,
                    l = u.method || (n ? "POST" : "GET"),
                    p = "object" === (void 0 === t ? "undefined" : i(t)) ? t : {
                        success: function() {
                            a.logMessage("xhr success")
                        },
                        error: function(e) {
                            a.logError("xhr error", null, e)
                        }
                    };
                if ("function" == typeof t && (p.success = t), window.XMLHttpRequest ? void 0 === (c = new window.XMLHttpRequest).responseType && (f = !0) : f = !0, f ? ((c = new window.XDomainRequest).onload = function() {
                        p.success(c.responseText, c)
                    }, c.onerror = function() {
                        p.error("error", c)
                    }, c.ontimeout = function() {
                        p.error("timeout", c)
                    }, c.onprogress = function() {
                        a.logMessage("xhr onprogress")
                    }) : c.onreadystatechange = function() {
                        if (c.readyState === s) {
                            var e = c.status;
                            e >= 200 && e < 300 || 304 === e ? p.success(c.responseText, c) : p.error(c.statusText, c)
                        }
                    }, "GET" === l && n) {
                    var g = (0, o.parse)(e, u);
                    r(g.search, n), e = (0, o.format)(g)
                }
                c.open(l, e), c.timeout = d, f || (u.withCredentials && (c.withCredentials = !0), a._each(u.customHeaders, (function(e, t) {
                    c.setRequestHeader(t, e)
                })), u.preflight && c.setRequestHeader("X-Requested-With", "XMLHttpRequest"), c.setRequestHeader("Content-Type", u.contentType || "text/plain")), c.send("POST" === l && n)
            } catch (e) {
                a.logError("xhr construction", e)
            }
        };
        var o = n(12),
            a = n(0),
            s = 4,
            d = 3e3
    },
    8: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            var t = e;
            return {
                callBids: function() {},
                setBidderCode: function(e) {
                    t = e
                },
                getBidderCode: function() {
                    return t
                }
            }
        }
    },
    9: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.config = void 0;
        var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
        t.newConfig = g;
        var o = n(28);
        var a = n(0),
            s = !1,
            d = 3e3,
            u = window.location.origin,
            c = 100,
            f = !1,
            l = {
                LOW: "low",
                MEDIUM: "medium",
                HIGH: "high",
                AUTO: "auto",
                DENSE: "dense",
                CUSTOM: "custom"
            },
            p = "*";

        function g() {
            var e = [],
                t = {},
                n = {
                    _debug: s,
                    get debug() {
                        return pbams.logging || !1 === pbams.logging ? pbams.logging : this._debug
                    },
                    set debug(e) {
                        this._debug = e
                    },
                    _bidderTimeout: d,
                    get bidderTimeout() {
                        return pbams.bidderTimeout || this._bidderTimeout
                    },
                    set bidderTimeout(e) {
                        this._bidderTimeout = e
                    },
                    _publisherDomain: u,
                    get publisherDomain() {
                        return pbams.publisherDomain || this._publisherDomain
                    },
                    set publisherDomain(e) {
                        this._publisherDomain = e
                    },
                    _cookieSyncDelay: c,
                    get cookieSyncDelay() {
                        return pbams.cookieSyncDelay || this._cookieSyncDelay
                    },
                    set cookieSyncDelay(e) {
                        this._cookieSyncDelay = e
                    },
                    _priceGranularity: l.MEDIUM,
                    set priceGranularity(e) {
                        (function(e) {
                            if (!e) return a.logError("Prebid Error: no value passed to `setPriceGranularity()`"), !1;
                            if ("string" == typeof e) g(e) || a.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");
                            else if ("object" === (void 0 === e ? "undefined" : i(e)) && !(0, o.isValidPriceConfig)(e)) return a.logError("Invalid custom price value passed to `setPriceGranularity()`"), !1;
                            return !0
                        })(e) && ("string" == typeof e ? this._priceGranularity = g(e) ? e : l.MEDIUM : "object" === (void 0 === e ? "undefined" : i(e)) && (this._customPriceBucket = e, this._priceGranularity = l.CUSTOM, a.logMessage("Using custom price granularity")))
                    },
                    get priceGranularity() {
                        return this._priceGranularity
                    },
                    _customPriceBucket: {},
                    get customPriceBucket() {
                        return this._customPriceBucket
                    },
                    _sendAllBids: f,
                    get enableSendAllBids() {
                        return this._sendAllBids
                    },
                    set enableSendAllBids(e) {
                        this._sendAllBids = e
                    },
                    set bidderSequence(e) {
                        pbams.setBidderSequence(e)
                    },
                    set s2sConfig(e) {
                        pbams.setS2SConfig(e)
                    }
                };

            function g(e) {
                return Object.keys(l).find((function(t) {
                    return e === l[t]
                }))
            }
            return {
                getConfig: function() {
                    if (arguments.length <= 1 && "function" != typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
                        var t = arguments.length <= 0 ? void 0 : arguments[0];
                        return t ? a.deepAccess(n, t) : n
                    }
                    return function(t, n) {
                        var r = n;
                        if ("string" != typeof t && (r = t, t = p), "function" == typeof r) return e.push({
                                topic: t,
                                callback: r
                            }),
                            function() {
                                e.splice(e.indexOf(n), 1)
                            };
                        a.logError("listener must be a function")
                    }.apply(void 0, arguments)
                },
                setConfig: function(o) {
                    if ("object" === (void 0 === o ? "undefined" : i(o))) {
                        var s, d, u = {};
                        Object.keys(o).forEach((function(e) {
                            var a = o[e];
                            "object" === i(t[e]) && "object" === (void 0 === a ? "undefined" : i(a)) && (a = r({}, t[e], a)), u[e] = n[e] = a
                        })), s = u, d = Object.keys(s), e.filter((function(e) {
                            return d.includes(e.topic)
                        })).forEach((function(e) {
                            var t, n, r;
                            e.callback((t = {}, n = e.topic, r = s[e.topic], n in t ? Object.defineProperty(t, n, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[n] = r, t))
                        })), e.filter((function(e) {
                            return e.topic === p
                        })).forEach((function(e) {
                            return e.callback(s)
                        }))
                    } else a.logError("setConfig options must be an object")
                },
                setDefaults: function(e) {
                    "object" === (void 0 === t ? "undefined" : i(t)) ? (r(t, e), r(n, e)) : a.logError("defaults must be an object")
                }
            }
        }
        t.config = g()
    }
});
pbamsChunk([46], {
    96: function(e, r, i) {
        i(97), e.exports = i(98)
    },
    97: function(e, r, i) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.spec = void 0;
        var t, a = l(["//", "/pubapi/3.0/", "/", "/", "/", "/ADTECH;v=2;cmd=bid;cors=yes;alias=", "", "", ";misc=", ""], ["//", "/pubapi/3.0/", "/", "/", "/", "/ADTECH;v=2;cmd=bid;cors=yes;alias=", "", "", ";misc=", ""]),
            n = l(["//", "/bidRequest?"], ["//", "/bidRequest?"]),
            o = l(["dcn=", "&pos=", "&cmd=bid", ""], ["dcn=", "&pos=", "&cmd=bid", ""]),
            s = (function(e) {
                {
                    if (e && e.__esModule) return e;
                    var r = {};
                    if (null != e)
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i]);
                    return r.default = e, r
                }
            })(i(0)),
            d = i(6),
            c = i(9),
            p = i(4),
            u = (t = p) && t.__esModule ? t : {
                default: t
            };

        function l(e, r) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(r)
                }
            }))
        }
        var m = {
                AOL: "aol",
                ONEMOBILE: "onemobile",
                ONEDISPLAY: "onedisplay"
            },
            f = {
                DISPLAY: {
                    GET: "display-get"
                },
                MOBILE: {
                    GET: "mobile-get",
                    POST: "mobile-post"
                }
            },
            b = {
                IFRAME: {
                    TAG: "iframe",
                    TYPE: "iframe"
                },
                IMAGE: {
                    TAG: "img",
                    TYPE: "image"
                }
            },
            v = y(a, "host", "network", "placement", "pageid", "sizeid", "alias", "bidfloor", "keyValues", "misc"),
            E = y(n, "host"),
            g = y(o, "dcn", "pos", "ext"),
            O = {
                us: "adserver-us.adtech.advertising.com",
                eu: "adserver-eu.adtech.advertising.com",
                as: "adserver-as.adtech.advertising.com"
            },
            h = "hb.nexage.com",
            I = 300;
        pbams.aolGlobals = {
            pixelsDropped: !1
        };
        var x, A = (x = !0, function() {
            var e = pbams.bidderSettings;
            x && e && e.aol && "function" == typeof e.aol.bidCpmAdjustment && (s.logWarn("bidCpmAdjustment is active for the AOL adapter. As of Prebid 0.14, AOL can bid in net â€“ please contact your accounts team to enable."), x = !1)
        });

        function y(e) {
            for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), t = 1; t < r; t++) i[t - 1] = arguments[t];
            return function() {
                for (var r = arguments.length, t = Array(r), a = 0; a < r; a++) t[a] = arguments[a];
                var n = t[t.length - 1] || {},
                    o = [e[0]];
                return i.forEach((function(r, i) {
                    var a = Number.isInteger(r) ? t[r] : n[r];
                    o.push(a, e[i + 1])
                })), o.join("")
            }
        }

        function S(e) {
            var r, i, t, a = e.params,
                n = a.server,
                o = a.region || "us",
                d = void 0;
            return O.hasOwnProperty(o) || (s.logWarn("Unknown region '" + o + "' for AOL bidder."), o = "us"), d = n || O[o], a.region = o, v({
                host: d,
                network: a.network,
                placement: parseInt(a.placement),
                pageid: a.pageId || 0,
                sizeid: a.sizeId || 0,
                alias: a.alias || s.getUniqueIdentifierStr(),
                bidfloor: (t = a.bidFloor, void 0 !== t ? ";bidfloor=" + t.toString() : ""),
                keyValues: (r = a.keyValues, i = "", s._each(r, (function(e, r) {
                    i += ";kv" + r + "=" + encodeURIComponent(e)
                })), i),
                misc: (new Date).getTime()
            })
        }

        function T(e) {
            return E({
                host: e.params.host || h
            })
        }

        function L(e) {
            var r = e.params,
                i = r.dcn,
                t = r.pos,
                a = T(e);
            if (i && t) {
                var n = "";
                "https:" === document.location.protocol && (e.params.ext = e.params.ext || {}, e.params.ext.secure = 1), s._each(e.params.ext, (function(e, r) {
                    n += "&" + r + "=" + encodeURIComponent(e)
                })), a += g({
                    dcn: i,
                    pos: t,
                    ext: n
                })
            }
            return a
        }

        function P(e) {
            return e === m.AOL || e === m.ONEMOBILE
        }

        function G(e) {
            if (P(e.bidder) && e.params.id && e.params.imp && e.params.imp[0]) {
                var r = e.params.imp[0];
                return r.id && r.tagid && (r.banner && r.banner.w && r.banner.h || r.video && r.video.mimes && r.video.minduration && r.video.maxduration)
            }
        }

        function j(e) {
            return P(e.bidder) && e.params.dcn && e.params.pos
        }

        function D(e) {
            return ((r = e.bidder) === m.AOL || r === m.ONEDISPLAY) && e.params.placement && e.params.network;
            var r
        }
        var M = r.spec = {
            code: m.AOL,
            aliases: [m.ONEMOBILE, m.ONEDISPLAY],
            isBidRequestValid: function(e) {
                return D(e) || (j(r = e) || G(r));
                var r
            },
            buildRequests: function(e) {
                return e.map((function(e) {
                    var r, i = j(r = e) ? f.MOBILE.GET : G(r) ? f.MOBILE.POST : D(r) ? f.DISPLAY.GET : void 0;
                    if (i) return (function(e, r) {
                        var i = void 0;
                        switch (e) {
                            case f.DISPLAY.GET:
                                i = {
                                    url: S(r),
                                    method: "GET"
                                };
                                break;
                            case f.MOBILE.GET:
                                i = {
                                    url: L(r),
                                    method: "GET"
                                };
                                break;
                            case f.MOBILE.POST:
                                i = {
                                    url: T(r),
                                    method: "POST",
                                    data: r.params,
                                    options: {
                                        contentType: "application/json",
                                        customHeaders: {
                                            "x-openrtb-version": "2.2"
                                        }
                                    }
                                }
                        }
                        return i.bidderCode = r.bidder, i.bidId = r.bidId, i.userSyncOn = r.params.userSyncOn, i
                    })(i, e)
                }))
            },
            interpretResponse: function(e, r) {
                var i = e.body;
                if (A(), i) {
                    var t = (function(e, r) {
                        var i = void 0;
                        try {
                            i = e.seatbid[0].bid[0]
                        } catch (e) {
                            return
                        }
                        var t = void 0;
                        if (i.ext && i.ext.encp) t = i.ext.encp;
                        else if (null === (t = i.price) || isNaN(t)) return void s.logError("Invalid price in bid response", m.AOL, bid);
                        var a = i.adm;
                        return e.ext && e.ext.pixels && c.config.getConfig("aol.userSyncOn") !== u.default.EVENTS.BID_RESPONSE && (a += "<script>if(!parent.pbams.aolGlobals.pixelsDropped){parent.pbams.aolGlobals.pixelsDropped=true;" + e.ext.pixels.replace(/<\/?script( type=('|")text\/javascript('|")|)?>/g, "") + "}<\/script>"), {
                            bidderCode: r.bidderCode,
                            requestId: r.bidId,
                            ad: a,
                            cpm: t,
                            width: i.w,
                            height: i.h,
                            creativeId: i.crid,
                            pubapiId: e.id,
                            currency: e.cur,
                            dealId: i.dealid,
                            netRevenue: !0,
                            ttl: I
                        }
                    })(i, r);
                    if (t) return t
                } else s.logError("Empty bid response", r.bidderCode, i)
            },
            getUserSyncs: function(e, r) {
                var i = r[0];
                return c.config.getConfig("aol.userSyncOn") === u.default.EVENTS.BID_RESPONSE && !pbams.aolGlobals.pixelsDropped && i.ext && i.ext.pixels ? (pbams.aolGlobals.pixelsDropped = !0, (function(e) {
                    var r = /\w*(?=\s)/,
                        i = /src=("|')(.*?)\1/,
                        t = [];
                    if (e) {
                        var a = e.match(/(img|iframe)[\s\S]*?src\s*=\s*("|')(.*?)\2/gi);
                        a && a.forEach((function(e) {
                            var a = e.match(r)[0],
                                n = e.match(i)[2];
                            a && a && t.push({
                                type: a === b.IMAGE.TAG ? b.IMAGE.TYPE : b.IFRAME.TYPE,
                                url: n
                            })
                        }))
                    }
                    return t
                })(i.ext.pixels)) : []
            }
        };
        (0, d.registerBidder)(M)
    },
    98: function(e, r) {}
}, [96]);
pbamsChunk([103], {
    137: function(t, i, e) {
        t.exports = e(138)
    },
    138: function(t, i, e) {
        "use strict";
        var n = e(3),
            r = e(2),
            a = e(5),
            o = e(1),
            s = e(0),
            d = function() {
                var t = ("http:" === window.location.protocol ? "http:" : "https:") + "//static.criteo.net/js/ld/publishertag.js",
                    i = "criteo",
                    e = 125,
                    o = 1;

                function d(t) {
                    window.Criteo = window.Criteo || {}, window.Criteo.events = window.Criteo.events || [];
                    window.Criteo.events.push((function() {
                        for (var i, n, a = t.bids || [], d = [], p = !1, u = 0; u < a.length; u++) {
                            var w = a[u],
                                v = s.parseSizesInput(w.sizes);
                            d.push(new Criteo.PubTag.DirectBidding.DirectBiddingSlot(w.placementCode, w.params.zoneId, w.params.nativeCallback ? w.params.nativeCallback : void 0, w.transactionId, v.map((function(t) {
                                var i = t.indexOf("x"),
                                    e = parseInt(t.substring(0, i)),
                                    n = parseInt(t.substring(i + 1, t.length));
                                return new Criteo.PubTag.DirectBidding.Size(e, n)
                            })), w.params.publisherSubId)), i = w.params.networkId || i, void 0 !== w.params.integrationMode && (n = "amp" == w.params.integrationMode.toLowerCase() ? 1 : 0), p |= void 0 !== w.params.audit
                        }
                        var g, b = new Criteo.PubTag.DirectBidding.DirectBiddingEvent(e, new Criteo.PubTag.DirectBidding.DirectBiddingUrlBuilder(p), d, (g = d, function(t) {
                            var i = (function(t) {
                                try {
                                    return JSON.parse(t)
                                } catch (t) {
                                    return {}
                                }
                            })(t);
                            if (void 0 === i.slots) return c(g)();
                            for (var e = 0; e < g.length; e++) {
                                for (var n = null, a = 0; a < i.slots.length; a++)
                                    if (i.slots[a] && i.slots[a].impid === g[e].impId) {
                                        n = i.slots.splice(a, 1)[0];
                                        break
                                    }
                                var o = l(n, g[e]);
                                r.addBidResponse(g[e].impId, o)
                            }
                        }), c(d), c(d), void 0, i, n, o);
                        window.criteo_pubtag.push(b)
                    }))
                }

                function c(t) {
                    return function() {
                        for (var i = 0; i < t.length; i++) r.addBidResponse(t[i].impId, p())
                    }
                }

                function p() {
                    var t = n.createBid(2);
                    return t.bidderCode = i, t
                }

                function l(t, e) {
                    var r = void 0;
                    return t ? ((r = n.createBid(1)).bidderCode = i, r.cpm = t.cpm, e.nativeCallback && t.native ? "function" != typeof e.nativeCallback ? s.logError("Criteo bid: nativeCallback parameter is not a function") : (window.criteo_pubtag.native_slots = window.criteo_pubtag.native_slots || {}, window.criteo_pubtag.native_slots["" + r.adId] = {
                        callback: e.nativeCallback,
                        nativeResponse: t.native
                    }, r.ad = '<script type="text/javascript">\n  let win = window;\n  for (const i=0; i<10; ++i) {\n    win = win.parent;\n    if (win.criteo_pubtag && win.criteo_pubtag.native_slots) {\n      let responseSlot = win.criteo_pubtag.native_slots["' + r.adId + '"];\n      responseSlot.callback(responseSlot.nativeResponse);\n      break;\n    }\n  }\n<\/script>') : (r.width = t.width, r.height = t.height, r.ad = t.creative)) : r = p(), r
                }
                return {
                    callBids: function(i) {
                        !window.criteo_pubtag || window.criteo_pubtag instanceof Array ? (d(i), a.loadScript(t, (function() {}), !0)) : d(i)
                    }
                }
            };
        o.registerBidAdapter(new d, "criteo"), t.exports = d
    }
}, [137]);
pbamsChunk([96], {
    160: function(e, n, o) {
        e.exports = o(161)
    },
    161: function(e, n, o) {
        "use strict";
        var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            i = o(11),
            s = o(0),
            a = o(4),
            r = o(1),
            d = a.EVENTS.BID_REQUESTED,
            c = a.EVENTS.BID_TIMEOUT,
            u = a.EVENTS.BID_RESPONSE,
            l = a.EVENTS.BID_WON,
            f = {
                nonInteraction: !0
            },
            p = [],
            b = null,
            m = !0,
            v = "Prebid.js Bids",
            y = 0,
            g = !1,
            T = null,
            w = !0;

        function E() {
            if (m && "function" == typeof window[b]) {
                for (var e = 0; e < p.length; e++) p[e].call();
                p.push = function(e) {
                    e.call()
                }, m = !1
            }
            s.logMessage("event count sent to GA: " + y)
        }

        function S(e) {
            return e ? Math.floor(100 * e) : 0
        }

        function h(e) {
            e && e.bidderCode && p.push((function() {
                y++, window[b](T, "event", v, "Requests", e.bidderCode, 1, f)
            })), E()
        }

        function $(e) {
            e && e.bidderCode && p.push((function() {
                var n, o, t, i, s = S(e.cpm),
                    a = e.bidderCode;
                if (void 0 !== e.timeToRespond && g) {
                    y++;
                    var r = ((n = e.timeToRespond) >= 0 && n < 200 ? o = "0-200ms" : n >= 200 && n < 300 ? o = "0200-300ms" : n >= 300 && n < 400 ? o = "0300-400ms" : n >= 400 && n < 500 ? o = "0400-500ms" : n >= 500 && n < 600 ? o = "0500-600ms" : n >= 600 && n < 800 ? o = "0600-800ms" : n >= 800 && n < 1e3 ? o = "0800-1000ms" : n >= 1e3 && n < 1200 ? o = "1000-1200ms" : n >= 1200 && n < 1500 ? o = "1200-1500ms" : n >= 1500 && n < 2e3 ? o = "1500-2000ms" : n >= 2e3 && (o = "2000ms above"), o);
                    window[b](T, "event", "Prebid.js Load Time Distribution", r, a, 1, f)
                }
                if (e.cpm > 0) {
                    y += 2;
                    var d = ((t = e.cpm) >= 0 && t < .5 ? i = "$0-0.5" : t >= .5 && t < 1 ? i = "$0.5-1" : t >= 1 && t < 1.5 ? i = "$1-1.5" : t >= 1.5 && t < 2 ? i = "$1.5-2" : t >= 2 && t < 2.5 ? i = "$2-2.5" : t >= 2.5 && t < 3 ? i = "$2.5-3" : t >= 3 && t < 4 ? i = "$3-4" : t >= 4 && t < 6 ? i = "$4-6" : t >= 6 && t < 8 ? i = "$6-8" : t >= 8 && (i = "$8 above"), i);
                    g && (y++, window[b](T, "event", "Prebid.js CPM Distribution", d, a, 1, f)), window[b](T, "event", v, "Bids", a, s, f), window[b](T, "event", v, "Bid Load Time", a, e.timeToRespond, f)
                }
            })), E()
        }

        function D(e) {
            p.push((function() {
                s._each(e, (function(e) {
                    y++, window[b](T, "event", v, "Timeouts", e, f)
                }))
            })), E()
        }

        function N(e) {
            var n = S(e.cpm);
            p.push((function() {
                y++, window[b](T, "event", v, "Wins", e.bidderCode, n, f)
            })), E()
        }
        n.enableAnalytics = function(e) {
            var n = e.provider,
                o = e.options;
            b = n || "ga", T = o && o.trackerName ? o.trackerName + ".send" : "send", w = void 0 === o || void 0 === o.sampling || Math.random() < parseFloat(o.sampling), o && void 0 !== o.global && (b = o.global), o && void 0 !== o.enableDistribution && (g = o.enableDistribution);
            if (w) {
                var a = i.getEvents();
                s._each(a, (function(e) {
                    if ("object" === (void 0 === e ? "undefined" : t(e))) {
                        var n = e.args;
                        if (e.eventType === d) h(n);
                        else if (e.eventType === u) $(n);
                        else if (e.eventType === c) {
                            D(n)
                        } else e.eventType === l && N(n)
                    }
                })), i.on(d, (function(e) {
                    h(e)
                })), i.on(u, (function(e) {
                    $(e)
                })), i.on(c, (function(e) {
                    D(e)
                })), i.on(l, (function(e) {
                    N(e)
                }))
            } else s.logMessage("Prebid.js google analytics disabled by sampling");
            this.enableAnalytics = function() {
                return s.logMessage("Analytics adapter already enabled, unnecessary call to `enableAnalytics`.")
            }
        }, n.getTrackerSend = function() {
            return T
        }, r.registerAnalyticsAdapter({
            adapter: n,
            code: "ga"
        })
    }
}, [160]);
pbamsChunk([34], {
    171: function(e, r, t) {
        t(172), e.exports = t(173)
    },
    172: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.spec = void 0;
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            n = (function(e) {
                {
                    if (e && e.__esModule) return e;
                    var r = {};
                    if (null != e)
                        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
                    return r.default = e, r
                }
            })(t(0)),
            s = t(6),
            a = t(18);
        var d = r.spec = {
            version: "4.0.0",
            code: "improvedigital",
            aliases: ["id"],
            isBidRequestValid: function(e) {
                return !!(e && e.params && (e.params.placementId || e.params.placementKey && e.params.publisherId))
            },
            buildRequests: function(e) {
                var r = e.map((function(e) {
                        return (function(e) {
                            var r = n.getBidIdParameter("adUnitCode", e) || null,
                                t = n.getBidIdParameter("placementId", e.params) || null,
                                i = null,
                                s = null;
                            null === t && (i = n.getBidIdParameter("publisherId", e.params) || null, s = n.getBidIdParameter("placementKey", e.params) || null);
                            var a = n.getBidIdParameter("keyValues", e.params) || null,
                                d = n.getBidIdParameter("size", e.params) || null,
                                u = n.getBidIdParameter("bidId", e),
                                o = n.getBidIdParameter("transactionId", e),
                                p = {};
                            t ? p.placementId = t : (i && (p.publisherId = i), s && (p.placementKey = s));
                            a && (p.keyValues = a);
                            d && d.w && d.h && (p.size = {}, p.size.h = d.h, p.size.w = d.w);
                            u && (p.id = u);
                            r && (p.adUnitId = r);
                            o && (p.transactionId = o);
                            return p
                        })(e)
                    })),
                    t = new u("hb"),
                    i = {
                        singleRequestMode: !1,
                        httpRequestType: t.CONSTANTS.HTTP_REQUEST_TYPE.GET,
                        returnObjType: t.CONSTANTS.RETURN_OBJ_TYPE.PREBID,
                        libVersion: this.version
                    },
                    s = t.createRequest(r, i);
                return s.errors && s.errors.length > 0 && n.logError("ID WARNING 0x01"), s.requests
            },
            interpretResponse: function(e, r) {
                var t = [];
                return n._each(e.body.bid, (function(e) {
                    if (e.price && null !== e.price && !e.hasOwnProperty("errorCode") && "string" == typeof e.adm) {
                        var r = {},
                            s = "";
                        e.nurl && e.nurl.length > 0 && (s = '<img src="' + e.nurl + '" width="0" height="0" style="display:none">'), r.ad = s + "<script>" + e.adm + "<\/script>", r.adId = e.id, r.cpm = parseFloat(e.price), r.creativeId = e.crid, r.currency = e.currency ? e.currency.toUpperCase() : "USD", n.isNumber(e.lid) ? r.dealId = e.lid : "object" === i(e.lid) && e.lid[1] && (r.dealId = e.lid[1]), r.height = e.h, r.netRevenue = !!e.isNet && e.isNet, r.requestId = e.id, r.ttl = 300, r.width = e.w, t.push(r), n.isArray(e.sync) && n._each(e.sync, (function(e) {
                            a.userSync.registerSync("image", d.code, e)
                        }))
                    }
                })), t
            }
        };

        function u(e) {
            this.CONSTANTS = {
                HTTP_REQUEST_TYPE: {
                    GET: 0,
                    POST: 1
                },
                HTTP_SECURITY: {
                    STANDARD: 0,
                    SECURE: 1
                },
                AD_SERVER_BASE_URL: "ad.360yield.com",
                END_POINT: e || "hb",
                AD_SERVER_URL_PARAM: "jsonp=",
                CLIENT_VERSION: "JS-4.2.0",
                MAX_URL_LENGTH: 2083,
                ERROR_CODES: {
                    BAD_HTTP_REQUEST_TYPE_PARAM: 1,
                    MISSING_PLACEMENT_PARAMS: 2,
                    LIB_VERSION_MISSING: 3
                },
                RETURN_OBJ_TYPE: {
                    DEFAULT: 0,
                    PREBID: 1
                }
            }, this.getErrorReturn = function(e) {
                return {
                    idMappings: {},
                    requests: {},
                    errorCode: e
                }
            }, this.createRequest = function(e, r, t) {
                if (r.httpRequestType !== this.CONSTANTS.HTTP_REQUEST_TYPE.GET) return this.getErrorReturn(this.CONSTANTS.ERROR_CODES.BAD_HTTP_REQUEST_TYPE_PARAM);
                if (!r.libVersion) return this.getErrorReturn(this.CONSTANTS.ERROR_CODES.LIB_VERSION_MISSING);
                r.returnObjType = r.returnObjType || this.CONSTANTS.RETURN_OBJ_TYPE.DEFAULT;
                var i = [],
                    s = void 0,
                    a = void 0;
                if (n.isArray(e))
                    for (a = 0; a < e.length; a++) s = this.createImpressionObject(e[a]), i.push(s);
                else s = this.createImpressionObject(e), i.push(s);
                var d = !0;
                r.returnObjType === this.CONSTANTS.RETURN_OBJ_TYPE.PREBID && (d = !1);
                var u = {
                    requests: []
                };
                d && (u.idMappings = []);
                var o = null,
                    p = (1 === r.secure ? "https" : "http") + "://" + this.CONSTANTS.AD_SERVER_BASE_URL + "/" + this.CONSTANTS.END_POINT + "?" + this.CONSTANTS.AD_SERVER_URL_PARAM,
                    l = {
                        bid_request: this.createBasicBidRequestObject(r, t)
                    };
                for (a = 0; a < i.length; a++)
                    if ((s = i[a]).errorCode)(o = o || []).push({
                        errorCode: s.errorCode,
                        adUnitId: s.adUnitId
                    });
                    else {
                        d && u.idMappings.push({
                            adUnitId: s.adUnitId,
                            id: s.impressionObject.id
                        }), l.bid_request.imp = l.bid_request.imp || [], l.bid_request.imp.push(s.impressionObject);
                        var c = !1;
                        (p + encodeURIComponent(JSON.stringify(l))).length > this.CONSTANTS.MAX_URL_LENGTH && (c = !0, l.bid_request.imp.length > 1 && (l.bid_request.imp.pop(), d && u.idMappings.pop(), a--)), !c && r.singleRequestMode && a !== i.length - 1 || (u.requests.push(this.formatRequest(r, l)), l = {
                            bid_request: this.createBasicBidRequestObject(r, t)
                        })
                    }
                return o && (u.errors = o), u
            }, this.formatRequest = function(e, r) {
                switch (e.returnObjType) {
                    case this.CONSTANTS.RETURN_OBJ_TYPE.PREBID:
                        return {
                            method: "GET",
                            url: "//" + this.CONSTANTS.AD_SERVER_BASE_URL + "/" + this.CONSTANTS.END_POINT,
                            data: "" + this.CONSTANTS.AD_SERVER_URL_PARAM + JSON.stringify(r)
                        };
                    default:
                        return {
                            url: (1 === e.secure ? "https" : "http") + "://" + this.CONSTANTS.AD_SERVER_BASE_URL + "/" + this.CONSTANTS.END_POINT + "?" + this.CONSTANTS.AD_SERVER_URL_PARAM + encodeURIComponent(JSON.stringify(r))
                        }
                }
            }, this.createBasicBidRequestObject = function(e, r) {
                var t = {};
                if (e.requestId ? t.id = e.requestId : t.id = n.getUniqueIdentifierStr(), e.domain && (t.domain = e.domain), e.page && (t.page = e.page), e.ref && (t.ref = e.ref), e.callback && (t.callback = e.callback), "secure" in e && (t.secure = e.secure), e.libVersion && (t.version = e.libVersion + "-" + this.CONSTANTS.CLIENT_VERSION), r)
                    for (var i in r) t[i] = r[i];
                return t
            }, this.createImpressionObject = function(e) {
                var r = {},
                    t = {};
                if (r.impressionObject = t, e.id ? t.id = e.id : t.id = n.getUniqueIdentifierStr(), e.adUnitId && (r.adUnitId = e.adUnitId), e.placementId && (t.pid = e.placementId), e.publisherId && (t.pubid = e.publisherId), e.placementKey && (t.pkey = e.placementKey), e.transactionId && (t.tid = e.transactionId), e.keyValues)
                    for (var i in e.keyValues)
                        for (var s = 0; s < e.keyValues[i].length; s++) t.kvw = t.kvw || {}, t.kvw[i] = t.kvw[i] || [], t.kvw[i].push(e.keyValues[i][s]);
                return e.size && e.size.w && e.size.h ? (t.banner = {}, t.banner.w = e.size.w, t.banner.h = e.size.h) : t.banner = {}, t.pid || t.pubid || t.pkey || t.banner && t.banner.w && t.banner.h || (r.impressionObject = null, r.errorCode = this.CONSTANTS.ERROR_CODES.MISSING_PLACEMENT_PARAMS), r
            }
        }(0, s.registerBidder)(d), r.ImproveDigitalAdServerJSClient = u
    },
    173: function(e, r) {}
}, [171]);
pbamsChunk([82], {
    226: function(e, i, d) {
        e.exports = d(227)
    },
    227: function(e, i, d) {
        "use strict";
        var a = Object.assign || function(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var d = arguments[i];
                    for (var a in d) Object.prototype.hasOwnProperty.call(d, a) && (e[a] = d[a])
                }
                return e
            },
            t = d(4),
            r = d(0),
            n = d(2),
            o = d(3),
            s = d(5),
            c = d(8).default,
            p = function() {
                var e = new c("piximedia"),
                    i = {},
                    d = function(e, i, d) {
                        return e + "/" + encodeURIComponent(i) + "=" + d
                    };
                return e.callBids = function(a) {
                    r._each(a.bids, (function(t) {
                        if (t.placementCode && t.sizes && t.params && t.params.siteId && t.params.placementId) {
                            var n = t.params.hasOwnProperty("sizes") ? t.params.sizes : t.sizes;
                            n = r.parseSizesInput(n);
                            var o = r.getUniqueIdentifierStr(),
                                c = t.params.prebidUrl || "//static.adserver.pm/prebid";
                            for (var p in t.params)
                                if (t.params.hasOwnProperty(p)) {
                                    var m = t.params[p];
                                    switch (p) {
                                        case "siteId":
                                            c = d(c, "site_id", encodeURIComponent(m));
                                            break;
                                        case "placementId":
                                            c = d(c, "placement_id", encodeURIComponent(m));
                                            break;
                                        case "dealId":
                                            c = d(c, "l_id", encodeURIComponent(m));
                                            break;
                                        case "sizes":
                                        case "prebidUrl":
                                            break;
                                        default:
                                            c = d(c, p, "function" == typeof m ? encodeURIComponent((m(e, a, t) || "").toString()) : encodeURIComponent((m || "").toString()))
                                    }
                                }
                            c = d(c, "jsonp", "pbams.handlePiximediaCallback"), c = d(c, "sizes", encodeURIComponent(n.join(","))), c = d(c, "cbid", encodeURIComponent(o)), c = d(c, "rand", String(Math.floor(1e9 * Math.random()))), i[o] = {
                                bidObj: t,
                                url: c,
                                start: (new Date).getTime()
                            }, r.logMessage("[Piximedia] Dispatching header Piximedia to URL " + c), s.loadScript(c)
                        }
                    }))
                }, pbams.handlePiximediaCallback = function(e) {
                    if (e && e.hasOwnProperty("foundbypm")) {
                        var d, a = i[e.cbid];
                        if (a) {
                            var s = a.bidObj,
                                c = (new Date).getTime();
                            c -= a.start, e.foundbypm && e.width && e.height && e.html && e.cpm && e.currency ? ((d = o.createBid(t.STATUS.GOOD)).bidderCode = s.bidder, d.width = e.width, d.height = e.height, d.ad = e.html, d.cpm = e.cpm, d.currency = e.currency, e.dealId ? d.dealId = e.dealId : d.dealId = null, n.addBidResponse(s.placementCode, d), r.logMessage("[Piximedia] Registered bidresponse from URL " + a.url + " (time: " + String(c) + ")"), r.logMessage("[Piximedia] ======> BID placementCode: " + s.placementCode + " CPM: " + String(d.cpm) + " " + d.currency + " Format: " + String(d.width) + "x" + String(d.height))) : ((d = o.createBid(t.STATUS.NO_BID)).bidderCode = s.bidder, n.addBidResponse(s.placementCode, d), r.logMessage("[Piximedia] Registered BLANK bidresponse from URL " + a.url + " (time: " + String(c) + ")"), r.logMessage("[Piximedia] ======> NOBID placementCode: " + s.placementCode)), i[e.cbid] = null
                        } else r.logMessage("[Piximedia] Couldn't find stash for cbid=" + e.cbid)
                    }
                }, a(this, {
                    callBids: e.callBids,
                    setBidderCode: e.setBidderCode,
                    getBidderCode: e.getBidderCode
                })
            };
        d(1).registerBidAdapter(new p, "piximedia"), e.exports = p
    }
}, [226]);
pbamsChunk([76], {
    268: function(e, r, t) {
        e.exports = t(269)
    },
    269: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.spec = void 0;
        var i = (function() {
                return function(e, r) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return (function(e, r) {
                        var t = [],
                            i = !0,
                            n = !1,
                            o = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (t.push(a.value), !r || t.length !== r); i = !0);
                        } catch (e) {
                            n = !0, o = e
                        } finally {
                            try {
                                !i && s.return && s.return()
                            } finally {
                                if (n) throw o
                            }
                        }
                        return t
                    })(e, r);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            })(),
            n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
        r.masSizeOrdering = v, r.resetUserSync = function() {
            y = !1
        };
        var o = (function(e) {
                {
                    if (e && e.__esModule) return e;
                    var r = {};
                    if (null != e)
                        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
                    return r.default = e, r
                }
            })(t(0)),
            a = t(6),
            s = t(9);
        var d = "pbjs_lite_v0.34.2";
        var u = {
            1: "468x60",
            2: "728x90",
            5: "120x90",
            8: "120x600",
            9: "160x600",
            10: "300x600",
            13: "200x200",
            14: "250x250",
            15: "300x250",
            16: "336x280",
            19: "300x100",
            31: "980x120",
            32: "250x360",
            33: "180x500",
            35: "980x150",
            37: "468x400",
            38: "930x180",
            43: "320x50",
            44: "300x50",
            48: "300x300",
            54: "300x1050",
            55: "970x90",
            57: "970x250",
            58: "1000x90",
            59: "320x80",
            60: "320x150",
            61: "1000x1000",
            65: "640x480",
            67: "320x480",
            68: "1800x1000",
            72: "320x320",
            73: "320x160",
            78: "980x240",
            79: "980x300",
            80: "980x400",
            83: "480x300",
            94: "970x310",
            96: "970x210",
            101: "480x320",
            102: "768x1024",
            103: "480x280",
            108: "320x240",
            113: "1000x300",
            117: "320x100",
            125: "800x250",
            126: "200x600",
            144: "980x600",
            195: "600x300",
            199: "640x200",
            213: "1030x590",
            214: "980x360"
        };
        o._each(u, (function(e, r) {
            return u[e] = r
        }));
        var c = r.spec = {
            code: "rubicon",
            aliases: ["rubiconLite"],
            supportedMediaTypes: ["video"],
            isBidRequestValid: function(e) {
                if ("object" !== n(e.params)) return !1;
                var r = e.params;
                return !!/^\d+$/.test(r.accountId) && (!(f(e).length < 1) && !!("video" !== e.mediaType || "object" === n(r.video) && r.video.size_id))
            },
            buildRequests: function(e, r) {
                return e.map((function(e) {
                    if (e.startTime = (new Date).getTime(), "video" === e.mediaType) {
                        var t = e.params,
                            i = f(e),
                            a = {
                                page_url: t.referrer ? t.referrer : o.getTopWindowUrl(),
                                resolution: l(),
                                account_id: t.accountId,
                                integration: d,
                                timeout: r.timeout - (Date.now() - r.auctionStart + 500),
                                stash_creatives: !0,
                                ae_pass_through_parameters: t.video.aeParams,
                                slots: []
                            },
                            u = {
                                site_id: t.siteId,
                                zone_id: t.zoneId,
                                position: t.position || "btf",
                                floor: parseFloat(t.floor) > .01 ? t.floor : .01,
                                element_id: e.adUnitCode,
                                name: e.adUnitCode,
                                language: t.video.language,
                                width: i[0],
                                height: i[1],
                                size_id: t.video.size_id
                            };
                        return t.inventory && "object" === n(t.inventory) && (u.inventory = t.inventory), t.keywords && Array.isArray(t.keywords) && (u.keywords = t.keywords), t.visitor && "object" === n(t.visitor) && (u.visitor = t.visitor), a.slots.push(u), {
                            method: "POST",
                            url: "//fastlane-adv.rubiconproject.com/v1/auction/video",
                            data: a,
                            bidRequest: e
                        }
                    }
                    var c = e.params,
                        p = c.accountId,
                        v = c.siteId,
                        y = c.zoneId,
                        x = c.position,
                        m = c.floor,
                        h = c.keywords,
                        b = c.visitor,
                        g = c.inventory,
                        _ = c.userId,
                        w = c.referrer;
                    m = (m = parseFloat(m)) > .01 ? m : .01, x = x || "btf";
                    var j = f(e),
                        z = ["account_id", p, "site_id", v, "zone_id", y, "size_id", j[0], "alt_size_ids", j.slice(1).join(",") || void 0, "p_pos", x, "rp_floor", m, "rp_secure", "https:" === location.protocol ? "1" : "0", "tk_flint", d, "tid", e.transactionId, "p_screen_res", l(), "kw", h, "tk_user_key", _];
                    return null !== b && "object" === (void 0 === b ? "undefined" : n(b)) && o._each(b, (function(e, r) {
                        return z.push("tg_v." + r, e)
                    })), null !== g && "object" === (void 0 === g ? "undefined" : n(g)) && o._each(g, (function(e, r) {
                        return z.push("tg_i." + r, e)
                    })), z.push("rand", Math.random(), "rf", w || o.getTopWindowUrl()), {
                        method: "GET",
                        url: "//fastlane.rubiconproject.com/a/api/fastlane.json",
                        data: z = (z = z.concat(function() {
                            var e = (r = window.DigiTrust && (s.config.getConfig("digiTrustId") || window.DigiTrust.getUser({
                                member: "T9QSFKPDN9"
                            })), r && r.success && r.identity || null);
                            var r;
                            if (!e || e.privacy && e.privacy.optout) return [];
                            return ["dt.id", e.id, "dt.keyv", e.keyv, "dt.pref", 0]
                        }())).reduce((function(e, r, t) {
                            return t % 2 == 0 && void 0 !== z[t + 1] ? e + r + "=" + encodeURIComponent(z[t + 1]) + "&" : e
                        }), "").slice(0, -1),
                        bidRequest: e
                    }
                }))
            },
            interpretResponse: function(e, r) {
                var t = r.bidRequest,
                    o = (e = e.body).ads;
                return "object" !== (void 0 === e ? "undefined" : n(e)) || "ok" !== e.status ? [] : ("object" === (void 0 === t ? "undefined" : n(t)) && "video" === t.mediaType && "object" === (void 0 === o ? "undefined" : n(o)) && (o = o[t.adUnitCode]), !Array.isArray(o) || o.length < 1 ? [] : (o = o.sort(p)).reduce((function(e, r) {
                    if ("ok" !== r.status) return [];
                    var n, o = {
                        requestId: t.bidId,
                        currency: "USD",
                        creativeId: r.creative_id,
                        cpm: r.cpm || 0,
                        dealId: r.deal,
                        ttl: 300,
                        netRevenue: s.config.getConfig("rubicon.netRevenue") || !1
                    };
                    if ("video" === t.mediaType) o.width = t.params.video.playerWidth, o.height = t.params.video.playerHeight, o.vastUrl = r.creative_depot_url, o.impression_id = r.impression_id;
                    else {
                        o.ad = (n = r.script, "<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='" + r.impression_id + "'>\n<script type='text/javascript'>" + n + "<\/script>\n</div>\n</body>\n</html>");
                        var a = u[r.size_id].split("x").map((function(e) {
                                return Number(e)
                            })),
                            d = i(a, 2);
                        o.width = d[0], o.height = d[1]
                    }
                    return o.rubiconTargeting = (Array.isArray(r.targeting) ? r.targeting : []).reduce((function(e, r) {
                        return e[r.key] = r.values[0], e
                    }), {
                        rpfl_elemid: t.adUnitCode
                    }), e.push(o), e
                }), []))
            },
            getUserSyncs: function(e) {
                if (!y && e.iframeEnabled) return y = !0, {
                    type: "iframe",
                    url: "https://tap-secure.rubiconproject.com/partner/scripts/rubicon/emily.html?rtb_ext=1"
                }
            }
        };

        function p(e, r) {
            return (r.cpm || 0) - (e.cpm || 0)
        }

        function l() {
            return [window.screen.width, window.screen.height].join("x")
        }

        function f(e) {
            var r = e.params;
            if ("video" === e.mediaType) {
                var t = [];
                return r.video.playerWidth && r.video.playerHeight ? t = [r.video.playerWidth, r.video.playerHeight] : Array.isArray(e.sizes) && e.sizes.length > 0 && Array.isArray(e.sizes[0]) && e.sizes[0].length > 1 && (t = e.sizes[0]), t
            }
            return v(Array.isArray(r.sizes) ? r.sizes.map((function(e) {
                return (u[e] || "").split("x")
            })) : e.sizes)
        }

        function v(e) {
            var r = [15, 2, 9];
            return o.parseSizesInput(e).reduce((function(e, r) {
                var t = parseInt(u[r], 10);
                return t && e.push(t), e
            }), []).sort((function(e, t) {
                var i = r.indexOf(e),
                    n = r.indexOf(t);
                return i > -1 || n > -1 ? -1 === i ? 1 : -1 === n ? -1 : i - n : e - t
            }))
        }
        var y = !1;
        (0, a.registerBidder)(c)
    }
}, [268]);
pbamsChunk([74], {
    283: function(e, r, a) {
        e.exports = a(284)
    },
    284: function(e, r, a) {
        "use strict";
        var d = a(0),
            t = a(3),
            s = a(2),
            n = a(5),
            i = a(12),
            o = function() {
                var e = function(e) {
                    var r = "sas_" + d.getUniqueIdentifierStr();
                    return pbams[r] = function(r) {
                        var a;
                        r ? (d.logMessage("[SmartAdServer] bid response for placementCode " + e.placementCode), (a = t.createBid(1)).bidderCode = "smartadserver", a.cpm = r.cpm, a.currency = r.currency, a.ad = r.ad, a.adUrl = r.adUrl, a.width = r.width, a.height = r.height, a.dealId = r.dealId, s.addBidResponse(e.placementCode, a)) : (d.logMessage("[SmartAdServer] no bid response for placementCode " + e.placementCode), (a = t.createBid(2)).bidderCode = "smartadserver", s.addBidResponse(e.placementCode, a))
                    }, r
                };
                return {
                    callBids: function(r) {
                        for (var a = 0; a < r.bids.length; a++) {
                            var d = r.bids[a],
                                t = i.parse(d.params.domain);
                            t.pathname = "/prebid", t.search = {
                                pbjscbk: "pbams." + e(d),
                                siteid: d.params.siteId,
                                pgid: d.params.pageId,
                                fmtid: d.params.formatId,
                                ccy: d.params.currency || "USD",
                                bidfloor: d.params.bidfloor || 0,
                                tgt: encodeURIComponent(d.params.target || ""),
                                tag: d.placementCode,
                                sizes: d.sizes.map((function(e) {
                                    return e[0] + "x" + e[1]
                                })).join(","),
                                async: 1
                            }, n.loadScript(i.format(t))
                        }
                    }
                }
            };
        a(1).registerBidAdapter(new o, "smartadserver"), e.exports = o
    }
}, [283]);
pbamsChunk([59], {
    334: function(e, r, i) {
        e.exports = i(335)
    },
    335: function(e, r, i) {
        "use strict";
        var a = i(0),
            d = i(5),
            t = i(2),
            n = i(3),
            c = "1.0.3";

        function s() {
            var e = ("https:" === document.location.protocol ? "https:" : "http:") + "//engine.widespace.com/map/engine/hb/dynamic?",
                r = "pbams.widespaceHandleCB";
            var i = function(e) {
                if (e)
                    for (var r = void 0, i = "widespace", d = 0, c = e.length; d < c; d++) {
                        var s = e[d],
                            o = "",
                            p = [];
                        s.sizes = {
                            height: s.height,
                            width: s.width
                        };
                        var h = a.getBidRequest(s.callbackUid);
                        h && (i = h.bidder, o = h.placementCode, p = h.sizes), s && s.callbackUid && "noad" !== s.status && u(s.sizes, p) ? ((r = n.createBid(1)).bidderCode = i, r.cpm = s.cpm, r.cur = s.currency, r.creative_id = s.adId, r.ad = s.code, r.width = s.width, r.height = s.height, t.addBidResponse(o, r)) : ((r = n.createBid(2)).bidderCode = i, t.addBidResponse(o, r))
                    }

                function u(e, r) {
                    for (var i = 0, a = r.length; i < a; i++)
                        if (e.width === r[i][0] && e.height === r[i][1]) return !0;
                    return !1
                }
            };
            return {
                callBids: function(t) {
                    for (var n = t && t.bids || [], s = 0; s < n.length; s++) {
                        var o = n[s],
                            p = o.bidId,
                            h = o.params.sid,
                            u = o.params.cur || o.params.currency,
                            b = "";
                        b = a.parseSizesInput(o.sizes).reduce((function(e, r) {
                            return e ? e + "," + r : r
                        }), b);
                        var l = e;
                        l = a.tryAppendQueryString(l, "hb.ver", c);
                        var m = {
                            hb: "1",
                            "hb.name": "prebidjs",
                            "hb.callback": r,
                            "hb.callbackUid": p,
                            "hb.sizes": b,
                            "hb.currency": u,
                            sid: h
                        };
                        if (o.params.demo)
                            for (var g = ["gender", "country", "region", "postal", "city", "yob"], v = 0; v < g.length; v++) o.params.demo[g[v]] && (m["hb.demo." + g[v]] = o.params.demo[g[v]]);
                        l += "#";
                        for (var f = Object.keys(m), w = 0; w < f.length; w++) {
                            var y = f[w];
                            l += y + "=" + m[y] + "&"
                        }
                        pbams.widespaceHandleCB = window[r] = i, d.loadScript(l)
                    }
                }
            }
        }
        i(1).registerBidAdapter(new s, "widespace"), e.exports = s
    }
}, [334]);
pbams.processQueue();