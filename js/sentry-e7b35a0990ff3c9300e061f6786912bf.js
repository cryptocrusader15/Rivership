!function(t) {
    var e = {};
    function n(r) {
        if (e[r])
            return e[r].exports;
        var i = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n),
        i.l = !0,
        i.exports
    }
    n.m = t,
    n.c = e,
    n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(t, e) {
        if (1 & e && (t = n(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var i in t)
                n.d(r, i, function(e) {
                    return t[e]
                }
                .bind(null, i));
        return r
    }
    ,
    n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return n.d(e, "a", e),
        e
    }
    ,
    n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    n.p = "",
    n(n.s = 64)
}([, , function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return c
    }
    )),
    n.d(e, "b", (function() {
        return a
    }
    )),
    n.d(e, "c", (function() {
        return f
    }
    )),
    n.d(e, "d", (function() {
        return i
    }
    )),
    n.d(e, "e", (function() {
        return s
    }
    )),
    n.d(e, "f", (function() {
        return _
    }
    )),
    n.d(e, "g", (function() {
        return b
    }
    )),
    n.d(e, "h", (function() {
        return y
    }
    )),
    n.d(e, "i", (function() {
        return d
    }
    )),
    n.d(e, "j", (function() {
        return l
    }
    )),
    n.d(e, "k", (function() {
        return p
    }
    )),
    n.d(e, "l", (function() {
        return u
    }
    )),
    n.d(e, "m", (function() {
        return g
    }
    )),
    n.d(e, "n", (function() {
        return h
    }
    ));
    const r = Object.prototype.toString;
    function i(t) {
        switch (r.call(t)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
            return !0;
        default:
            return b(t, Error)
        }
    }
    function o(t, e) {
        return r.call(t) === `[object ${e}]`
    }
    function s(t) {
        return o(t, "ErrorEvent")
    }
    function c(t) {
        return o(t, "DOMError")
    }
    function a(t) {
        return o(t, "DOMException")
    }
    function u(t) {
        return o(t, "String")
    }
    function l(t) {
        return null === t || "object" != typeof t && "function" != typeof t
    }
    function d(t) {
        return o(t, "Object")
    }
    function _(t) {
        return "undefined" != typeof Event && b(t, Event)
    }
    function f(t) {
        return "undefined" != typeof Element && b(t, Element)
    }
    function p(t) {
        return o(t, "RegExp")
    }
    function h(t) {
        return Boolean(t && t.then && "function" == typeof t.then)
    }
    function g(t) {
        return d(t) && "nativeEvent"in t && "preventDefault"in t && "stopPropagation"in t
    }
    function y(t) {
        return "number" == typeof t && t != t
    }
    function b(t, e) {
        try {
            return t instanceof e
        } catch (t) {
            return !1
        }
    }
}
, , function(t, e, n) {
    "use strict";
    (function(t) {
        function r(t) {
            return t && t.Math == Math ? t : void 0
        }
        n.d(e, "a", (function() {
            return i
        }
        )),
        n.d(e, "b", (function() {
            return o
        }
        )),
        n.d(e, "c", (function() {
            return s
        }
        ));
        const i = "object" == typeof globalThis && r(globalThis) || "object" == typeof window && r(window) || "object" == typeof self && r(self) || "object" == typeof t && r(t) || function() {
            return this
        }() || {};
        function o() {
            return i
        }
        function s(t, e, n) {
            const r = n || i
              , o = r.__SENTRY__ = r.__SENTRY__ || {};
            return o[t] || (o[t] = e())
        }
    }
    ).call(this, n(31))
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return p
    }
    ));
    var r = n(18)
      , i = n(15)
      , o = n(4)
      , s = n(21)
      , c = n(13)
      , a = n(9);
    const u = "00000000000000000000000000000000"
      , l = 100;
    class d {
        __init() {
            this._stack = [{}]
        }
        constructor(t, e=new c.a, n=4) {
            this._version = n,
            d.prototype.__init.call(this),
            this.getStackTop().scope = e,
            t && this.bindClient(t)
        }
        isOlderThan(t) {
            return this._version < t
        }
        bindClient(t) {
            this.getStackTop().client = t,
            t && t.setupIntegrations && t.setupIntegrations()
        }
        pushScope() {
            const t = c.a.clone(this.getScope());
            return this.getStack().push({
                client: this.getClient(),
                scope: t
            }),
            t
        }
        popScope() {
            return !(this.getStack().length <= 1) && !!this.getStack().pop()
        }
        withScope(t) {
            const e = this.pushScope();
            try {
                t(e)
            } finally {
                this.popScope()
            }
        }
        getClient() {
            return this.getStackTop().client
        }
        getScope() {
            return this.getStackTop().scope
        }
        getStack() {
            return this._stack
        }
        getStackTop() {
            return this._stack[this._stack.length - 1]
        }
        captureException(t, e) {
            const n = new Error("Sentry syntheticException");
            return this._lastEventId = this._withClient(((r,i)=>r.captureException(t, {
                originalException: t,
                syntheticException: n,
                ...e
            }, i))) || u,
            this._lastEventId
        }
        captureMessage(t, e, n) {
            const r = new Error(t);
            return this._lastEventId = this._withClient(((i,o)=>i.captureMessage(t, e, {
                originalException: t,
                syntheticException: r,
                ...n
            }, o))) || u,
            this._lastEventId
        }
        captureEvent(t, e) {
            const n = this._withClient(((n,r)=>n.captureEvent(t, {
                ...e
            }, r))) || u;
            return "transaction" !== t.type && (this._lastEventId = n),
            n
        }
        lastEventId() {
            return this._lastEventId
        }
        addBreadcrumb(t, e) {
            const {scope: n, client: o} = this.getStackTop();
            if (!n || !o)
                return;
            const {beforeBreadcrumb: s=null, maxBreadcrumbs: c=l} = o.getOptions && o.getOptions() || {};
            if (c <= 0)
                return;
            const a = {
                timestamp: Object(r.a)(),
                ...t
            }
              , u = s ? Object(i.b)((()=>s(a, e))) : a;
            null !== u && n.addBreadcrumb(u, c)
        }
        setUser(t) {
            const e = this.getScope();
            e && e.setUser(t)
        }
        setTags(t) {
            const e = this.getScope();
            e && e.setTags(t)
        }
        setExtras(t) {
            const e = this.getScope();
            e && e.setExtras(t)
        }
        setTag(t, e) {
            const n = this.getScope();
            n && n.setTag(t, e)
        }
        setExtra(t, e) {
            const n = this.getScope();
            n && n.setExtra(t, e)
        }
        setContext(t, e) {
            const n = this.getScope();
            n && n.setContext(t, e)
        }
        configureScope(t) {
            const {scope: e, client: n} = this.getStackTop();
            e && n && t(e)
        }
        run(t) {
            const e = f(this);
            try {
                t(this)
            } finally {
                f(e)
            }
        }
        getIntegration(t) {
            const e = this.getClient();
            if (!e)
                return null;
            try {
                return e.getIntegration(t)
            } catch (e) {
                return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.c.warn(`Cannot retrieve integration ${t.id} from the current Hub`),
                null
            }
        }
        startTransaction(t, e) {
            return this._callExtensionMethod("startTransaction", t, e)
        }
        traceHeaders() {
            return this._callExtensionMethod("traceHeaders")
        }
        captureSession(t=!1) {
            if (t)
                return this.endSession();
            this._sendSessionUpdate()
        }
        endSession() {
            const t = this.getStackTop()
              , e = t && t.scope
              , n = e && e.getSession();
            n && Object(a.a)(n),
            this._sendSessionUpdate(),
            e && e.setSession()
        }
        startSession(t) {
            const {scope: e, client: n} = this.getStackTop()
              , {release: r, environment: i} = n && n.getOptions() || {}
              , {userAgent: s} = o.a.navigator || {}
              , c = Object(a.b)({
                release: r,
                environment: i,
                ...e && {
                    user: e.getUser()
                },
                ...s && {
                    userAgent: s
                },
                ...t
            });
            if (e) {
                const t = e.getSession && e.getSession();
                t && "ok" === t.status && Object(a.c)(t, {
                    status: "exited"
                }),
                this.endSession(),
                e.setSession(c)
            }
            return c
        }
        shouldSendDefaultPii() {
            const t = this.getClient()
              , e = t && t.getOptions();
            return Boolean(e && e.sendDefaultPii)
        }
        _sendSessionUpdate() {
            const {scope: t, client: e} = this.getStackTop();
            if (!t)
                return;
            const n = t.getSession();
            n && e && e.captureSession && e.captureSession(n)
        }
        _withClient(t) {
            const {scope: e, client: n} = this.getStackTop();
            return n && t(n, e)
        }
        _callExtensionMethod(t, ...e) {
            const n = _().__SENTRY__;
            if (n && n.extensions && "function" == typeof n.extensions[t])
                return n.extensions[t].apply(this, e);
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.c.warn(`Extension method ${t} couldn't be found, doing nothing.`)
        }
    }
    function _() {
        return o.a.__SENTRY__ = o.a.__SENTRY__ || {
            extensions: {},
            hub: void 0
        },
        o.a
    }
    function f(t) {
        const e = _()
          , n = g(e);
        return y(e, t),
        n
    }
    function p() {
        const t = _();
        return h(t) && !g(t).isOlderThan(4) || y(t, new d),
        Object(s.b)() ? function(t) {
            try {
                const e = _().__SENTRY__
                  , n = e && e.extensions && e.extensions.domain && e.extensions.domain.active;
                if (!n)
                    return g(t);
                if (!h(n) || g(n).isOlderThan(4)) {
                    const e = g(t).getStackTop();
                    y(n, new d(e.client,c.a.clone(e.scope)))
                }
                return g(n)
            } catch (e) {
                return g(t)
            }
        }(t) : g(t)
    }
    function h(t) {
        return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
    }
    function g(t) {
        return Object(o.c)("hub", (()=>new d), t)
    }
    function y(t, e) {
        if (!t)
            return !1;
        return (t.__SENTRY__ = t.__SENTRY__ || {}).hub = e,
        !0
    }
}
, , , , function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return a
    }
    )),
    n.d(e, "b", (function() {
        return s
    }
    )),
    n.d(e, "c", (function() {
        return c
    }
    ));
    var r = n(18)
      , i = n(24)
      , o = n(10);
    function s(t) {
        const e = Object(r.b)()
          , n = {
            sid: Object(i.f)(),
            init: !0,
            timestamp: e,
            started: e,
            duration: 0,
            status: "ok",
            errors: 0,
            ignoreDuration: !1,
            toJSON: ()=>function(t) {
                return Object(o.c)({
                    sid: `${t.sid}`,
                    init: t.init,
                    started: new Date(1e3 * t.started).toISOString(),
                    timestamp: new Date(1e3 * t.timestamp).toISOString(),
                    status: t.status,
                    errors: t.errors,
                    did: "number" == typeof t.did || "string" == typeof t.did ? `${t.did}` : void 0,
                    duration: t.duration,
                    attrs: {
                        release: t.release,
                        environment: t.environment,
                        ip_address: t.ipAddress,
                        user_agent: t.userAgent
                    }
                })
            }(n)
        };
        return t && c(n, t),
        n
    }
    function c(t, e={}) {
        if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address),
        t.did || e.did || (t.did = e.user.id || e.user.email || e.user.username)),
        t.timestamp = e.timestamp || Object(r.b)(),
        e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration),
        e.sid && (t.sid = 32 === e.sid.length ? e.sid : Object(i.f)()),
        void 0 !== e.init && (t.init = e.init),
        !t.did && e.did && (t.did = `${e.did}`),
        "number" == typeof e.started && (t.started = e.started),
        t.ignoreDuration)
            t.duration = void 0;
        else if ("number" == typeof e.duration)
            t.duration = e.duration;
        else {
            const e = t.timestamp - t.started;
            t.duration = e >= 0 ? e : 0
        }
        e.release && (t.release = e.release),
        e.environment && (t.environment = e.environment),
        !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress),
        !t.userAgent && e.userAgent && (t.userAgent = e.userAgent),
        "number" == typeof e.errors && (t.errors = e.errors),
        e.status && (t.status = e.status)
    }
    function a(t, e) {
        let n = {};
        e ? n = {
            status: e
        } : "ok" === t.status && (n = {
            status: "exited"
        }),
        c(t, n)
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return c
    }
    )),
    n.d(e, "b", (function() {
        return d
    }
    )),
    n.d(e, "c", (function() {
        return h
    }
    )),
    n.d(e, "d", (function() {
        return p
    }
    )),
    n.d(e, "e", (function() {
        return s
    }
    )),
    n.d(e, "f", (function() {
        return u
    }
    )),
    n.d(e, "g", (function() {
        return a
    }
    )),
    n.d(e, "h", (function() {
        return l
    }
    ));
    var r = n(36)
      , i = n(2)
      , o = n(12);
    function s(t, e, n) {
        if (!(e in t))
            return;
        const r = t[e]
          , i = n(r);
        if ("function" == typeof i)
            try {
                a(i, r)
            } catch (t) {}
        t[e] = i
    }
    function c(t, e, n) {
        Object.defineProperty(t, e, {
            value: n,
            writable: !0,
            configurable: !0
        })
    }
    function a(t, e) {
        const n = e.prototype || {};
        t.prototype = e.prototype = n,
        c(t, "__sentry_original__", e)
    }
    function u(t) {
        return t.__sentry_original__
    }
    function l(t) {
        return Object.keys(t).map((e=>`${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`)).join("&")
    }
    function d(t) {
        if (Object(i.d)(t))
            return {
                message: t.message,
                name: t.name,
                stack: t.stack,
                ...f(t)
            };
        if (Object(i.f)(t)) {
            const e = {
                type: t.type,
                target: _(t.target),
                currentTarget: _(t.currentTarget),
                ...f(t)
            };
            return "undefined" != typeof CustomEvent && Object(i.g)(t, CustomEvent) && (e.detail = t.detail),
            e
        }
        return t
    }
    function _(t) {
        try {
            return Object(i.c)(t) ? Object(r.b)(t) : Object.prototype.toString.call(t)
        } catch (t) {
            return "<unknown>"
        }
    }
    function f(t) {
        if ("object" == typeof t && null !== t) {
            const e = {};
            for (const n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        }
        return {}
    }
    function p(t, e=40) {
        const n = Object.keys(d(t));
        if (n.sort(),
        !n.length)
            return "[object has no keys]";
        if (n[0].length >= e)
            return Object(o.d)(n[0], e);
        for (let t = n.length; t > 0; t--) {
            const r = n.slice(0, t).join(", ");
            if (!(r.length > e))
                return t === n.length ? r : Object(o.d)(r, e)
        }
        return ""
    }
    function h(t) {
        return g(t, new Map)
    }
    function g(t, e) {
        if (Object(i.i)(t)) {
            const n = e.get(t);
            if (void 0 !== n)
                return n;
            const r = {};
            e.set(t, r);
            for (const n of Object.keys(t))
                void 0 !== t[n] && (r[n] = g(t[n], e));
            return r
        }
        if (Array.isArray(t)) {
            const n = e.get(t);
            if (void 0 !== n)
                return n;
            const r = [];
            return e.set(t, r),
            t.forEach((t=>{
                r.push(g(t, e))
            }
            )),
            r
        }
        return t
    }
}
, , function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return s
    }
    )),
    n.d(e, "b", (function() {
        return o
    }
    )),
    n.d(e, "c", (function() {
        return c
    }
    )),
    n.d(e, "d", (function() {
        return i
    }
    ));
    var r = n(2);
    function i(t, e=0) {
        return "string" != typeof t || 0 === e || t.length <= e ? t : `${t.substr(0, e)}...`
    }
    function o(t, e) {
        let n = t;
        const r = n.length;
        if (r <= 150)
            return n;
        e > r && (e = r);
        let i = Math.max(e - 60, 0);
        i < 5 && (i = 0);
        let o = Math.min(i + 140, r);
        return o > r - 5 && (o = r),
        o === r && (i = Math.max(o - 140, 0)),
        n = n.slice(i, o),
        i > 0 && (n = `'{snip} ${n}`),
        o < r && (n += " {snip}"),
        n
    }
    function s(t, e) {
        if (!Array.isArray(t))
            return "";
        const n = [];
        for (let e = 0; e < t.length; e++) {
            const r = t[e];
            try {
                n.push(String(r))
            } catch (t) {
                n.push("[value cannot be serialized]")
            }
        }
        return n.join(e)
    }
    function c(t, e=[], n=!1) {
        return e.some((e=>function(t, e, n=!1) {
            return !!Object(r.l)(t) && (Object(r.k)(e) ? e.test(t) : !!Object(r.l)(e) && (n ? t === e : t.includes(e)))
        }(t, e, n)))
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return l
    }
    )),
    n.d(e, "b", (function() {
        return _
    }
    ));
    var r = n(2)
      , i = n(18)
      , o = n(28)
      , s = n(15)
      , c = n(24)
      , a = n(4)
      , u = n(9);
    class l {
        constructor() {
            this._notifyingListeners = !1,
            this._scopeListeners = [],
            this._eventProcessors = [],
            this._breadcrumbs = [],
            this._attachments = [],
            this._user = {},
            this._tags = {},
            this._extra = {},
            this._contexts = {},
            this._sdkProcessingMetadata = {}
        }
        static clone(t) {
            const e = new l;
            return t && (e._breadcrumbs = [...t._breadcrumbs],
            e._tags = {
                ...t._tags
            },
            e._extra = {
                ...t._extra
            },
            e._contexts = {
                ...t._contexts
            },
            e._user = t._user,
            e._level = t._level,
            e._span = t._span,
            e._session = t._session,
            e._transactionName = t._transactionName,
            e._fingerprint = t._fingerprint,
            e._eventProcessors = [...t._eventProcessors],
            e._requestSession = t._requestSession,
            e._attachments = [...t._attachments],
            e._sdkProcessingMetadata = {
                ...t._sdkProcessingMetadata
            }),
            e
        }
        addScopeListener(t) {
            this._scopeListeners.push(t)
        }
        addEventProcessor(t) {
            return this._eventProcessors.push(t),
            this
        }
        setUser(t) {
            return this._user = t || {},
            this._session && Object(u.c)(this._session, {
                user: t
            }),
            this._notifyScopeListeners(),
            this
        }
        getUser() {
            return this._user
        }
        getRequestSession() {
            return this._requestSession
        }
        setRequestSession(t) {
            return this._requestSession = t,
            this
        }
        setTags(t) {
            return this._tags = {
                ...this._tags,
                ...t
            },
            this._notifyScopeListeners(),
            this
        }
        setTag(t, e) {
            return this._tags = {
                ...this._tags,
                [t]: e
            },
            this._notifyScopeListeners(),
            this
        }
        setExtras(t) {
            return this._extra = {
                ...this._extra,
                ...t
            },
            this._notifyScopeListeners(),
            this
        }
        setExtra(t, e) {
            return this._extra = {
                ...this._extra,
                [t]: e
            },
            this._notifyScopeListeners(),
            this
        }
        setFingerprint(t) {
            return this._fingerprint = t,
            this._notifyScopeListeners(),
            this
        }
        setLevel(t) {
            return this._level = t,
            this._notifyScopeListeners(),
            this
        }
        setTransactionName(t) {
            return this._transactionName = t,
            this._notifyScopeListeners(),
            this
        }
        setContext(t, e) {
            return null === e ? delete this._contexts[t] : this._contexts[t] = e,
            this._notifyScopeListeners(),
            this
        }
        setSpan(t) {
            return this._span = t,
            this._notifyScopeListeners(),
            this
        }
        getSpan() {
            return this._span
        }
        getTransaction() {
            const t = this.getSpan();
            return t && t.transaction
        }
        setSession(t) {
            return t ? this._session = t : delete this._session,
            this._notifyScopeListeners(),
            this
        }
        getSession() {
            return this._session
        }
        update(t) {
            if (!t)
                return this;
            if ("function" == typeof t) {
                const e = t(this);
                return e instanceof l ? e : this
            }
            return t instanceof l ? (this._tags = {
                ...this._tags,
                ...t._tags
            },
            this._extra = {
                ...this._extra,
                ...t._extra
            },
            this._contexts = {
                ...this._contexts,
                ...t._contexts
            },
            t._user && Object.keys(t._user).length && (this._user = t._user),
            t._level && (this._level = t._level),
            t._fingerprint && (this._fingerprint = t._fingerprint),
            t._requestSession && (this._requestSession = t._requestSession)) : Object(r.i)(t) && (this._tags = {
                ...this._tags,
                ...t.tags
            },
            this._extra = {
                ...this._extra,
                ...t.extra
            },
            this._contexts = {
                ...this._contexts,
                ...t.contexts
            },
            t.user && (this._user = t.user),
            t.level && (this._level = t.level),
            t.fingerprint && (this._fingerprint = t.fingerprint),
            t.requestSession && (this._requestSession = t.requestSession)),
            this
        }
        clear() {
            return this._breadcrumbs = [],
            this._tags = {},
            this._extra = {},
            this._user = {},
            this._contexts = {},
            this._level = void 0,
            this._transactionName = void 0,
            this._fingerprint = void 0,
            this._requestSession = void 0,
            this._span = void 0,
            this._session = void 0,
            this._notifyScopeListeners(),
            this._attachments = [],
            this
        }
        addBreadcrumb(t, e) {
            const n = "number" == typeof e ? e : 100;
            if (n <= 0)
                return this;
            const r = {
                timestamp: Object(i.a)(),
                ...t
            };
            return this._breadcrumbs = [...this._breadcrumbs, r].slice(-n),
            this._notifyScopeListeners(),
            this
        }
        clearBreadcrumbs() {
            return this._breadcrumbs = [],
            this._notifyScopeListeners(),
            this
        }
        addAttachment(t) {
            return this._attachments.push(t),
            this
        }
        getAttachments() {
            return this._attachments
        }
        clearAttachments() {
            return this._attachments = [],
            this
        }
        applyToEvent(t, e={}) {
            if (this._extra && Object.keys(this._extra).length && (t.extra = {
                ...this._extra,
                ...t.extra
            }),
            this._tags && Object.keys(this._tags).length && (t.tags = {
                ...this._tags,
                ...t.tags
            }),
            this._user && Object.keys(this._user).length && (t.user = {
                ...this._user,
                ...t.user
            }),
            this._contexts && Object.keys(this._contexts).length && (t.contexts = {
                ...this._contexts,
                ...t.contexts
            }),
            this._level && (t.level = this._level),
            this._transactionName && (t.transaction = this._transactionName),
            this._span) {
                t.contexts = {
                    trace: this._span.getTraceContext(),
                    ...t.contexts
                };
                const e = this._span.transaction && this._span.transaction.name;
                e && (t.tags = {
                    transaction: e,
                    ...t.tags
                })
            }
            return this._applyFingerprint(t),
            t.breadcrumbs = [...t.breadcrumbs || [], ...this._breadcrumbs],
            t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0,
            t.sdkProcessingMetadata = {
                ...t.sdkProcessingMetadata,
                ...this._sdkProcessingMetadata
            },
            this._notifyEventProcessors([...d(), ...this._eventProcessors], t, e)
        }
        setSDKProcessingMetadata(t) {
            return this._sdkProcessingMetadata = {
                ...this._sdkProcessingMetadata,
                ...t
            },
            this
        }
        _notifyEventProcessors(t, e, n, i=0) {
            return new o.a(((o,c)=>{
                const a = t[i];
                if (null === e || "function" != typeof a)
                    o(e);
                else {
                    const u = a({
                        ...e
                    }, n);
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.id && null === u && s.c.log(`Event processor "${a.id}" dropped event`),
                    Object(r.n)(u) ? u.then((e=>this._notifyEventProcessors(t, e, n, i + 1).then(o))).then(null, c) : this._notifyEventProcessors(t, u, n, i + 1).then(o).then(null, c)
                }
            }
            ))
        }
        _notifyScopeListeners() {
            this._notifyingListeners || (this._notifyingListeners = !0,
            this._scopeListeners.forEach((t=>{
                t(this)
            }
            )),
            this._notifyingListeners = !1)
        }
        _applyFingerprint(t) {
            t.fingerprint = t.fingerprint ? Object(c.c)(t.fingerprint) : [],
            this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)),
            t.fingerprint && !t.fingerprint.length && delete t.fingerprint
        }
    }
    function d() {
        return Object(a.c)("globalEventProcessors", (()=>[]))
    }
    function _(t) {
        d().push(t)
    }
}
, , function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return i
    }
    )),
    n.d(e, "b", (function() {
        return o
    }
    )),
    n.d(e, "c", (function() {
        return c
    }
    ));
    var r = n(4);
    const i = ["debug", "info", "warn", "error", "log", "assert", "trace"];
    function o(t) {
        if (!("console"in r.a))
            return t();
        const e = r.a.console
          , n = {};
        i.forEach((t=>{
            const r = e[t] && e[t].__sentry_original__;
            t in e && r && (n[t] = e[t],
            e[t] = r)
        }
        ));
        try {
            return t()
        } finally {
            Object.keys(n).forEach((t=>{
                e[t] = n[t]
            }
            ))
        }
    }
    function s() {
        let t = !1;
        const e = {
            enable: ()=>{
                t = !0
            }
            ,
            disable: ()=>{
                t = !1
            }
        };
        return "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? i.forEach((n=>{
            e[n] = (...e)=>{
                t && o((()=>{
                    r.a.console[n](`Sentry Logger [${n}]:`, ...e)
                }
                ))
            }
        }
        )) : i.forEach((t=>{
            e[t] = ()=>{}
        }
        )),
        e
    }
    let c;
    c = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? Object(r.c)("logger", s) : s()
}
, , function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return o
    }
    )),
    n.d(e, "b", (function() {
        return i
    }
    )),
    n.d(e, "c", (function() {
        return s
    }
    ));
    var r = n(5);
    function i(t, e) {
        return Object(r.a)().captureException(t, {
            captureContext: e
        })
    }
    function o(t, e) {
        return Object(r.a)().captureEvent(t, e)
    }
    function s(t) {
        Object(r.a)().withScope(t)
    }
}
, function(t, e, n) {
    "use strict";
    (function(t) {
        n.d(e, "a", (function() {
            return u
        }
        )),
        n.d(e, "b", (function() {
            return l
        }
        ));
        var r = n(21)
          , i = n(4);
        const o = Object(i.b)()
          , s = {
            nowSeconds: ()=>Date.now() / 1e3
        };
        const c = Object(r.b)() ? function() {
            try {
                return Object(r.a)(t, "perf_hooks").performance
            } catch (t) {
                return
            }
        }() : function() {
            const {performance: t} = o;
            if (!t || !t.now)
                return;
            return {
                now: ()=>t.now(),
                timeOrigin: Date.now() - t.now()
            }
        }()
          , a = void 0 === c ? s : {
            nowSeconds: ()=>(c.timeOrigin + c.now()) / 1e3
        }
          , u = s.nowSeconds.bind(s)
          , l = a.nowSeconds.bind(a);
        let d;
        (()=>{
            const {performance: t} = o;
            if (!t || !t.now)
                return void (d = "none");
            const e = 36e5
              , n = t.now()
              , r = Date.now()
              , i = t.timeOrigin ? Math.abs(t.timeOrigin + n - r) : e
              , s = i < e
              , c = t.timing && t.timing.navigationStart
              , a = "number" == typeof c ? Math.abs(c + n - r) : e;
            s || a < e ? i <= a ? (d = "timeOrigin",
            t.timeOrigin) : d = "navigationStart" : d = "dateNow"
        }
        )()
    }
    ).call(this, n(30)(t))
}
, , , function(t, e, n) {
    "use strict";
    (function(t, r) {
        n.d(e, "a", (function() {
            return s
        }
        )),
        n.d(e, "b", (function() {
            return o
        }
        ));
        var i = n(35);
        function o() {
            return !Object(i.a)() && "[object process]" === Object.prototype.toString.call(void 0 !== t ? t : 0)
        }
        function s(t, e) {
            return t.require(e)
        }
    }
    ).call(this, n(39), n(30)(t))
}
, , , function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return u
    }
    )),
    n.d(e, "b", (function() {
        return a
    }
    )),
    n.d(e, "c", (function() {
        return d
    }
    )),
    n.d(e, "d", (function() {
        return l
    }
    )),
    n.d(e, "e", (function() {
        return c
    }
    )),
    n.d(e, "f", (function() {
        return o
    }
    ));
    var r = n(10)
      , i = (n(12),
    n(4));
    function o() {
        const t = i.a
          , e = t.crypto || t.msCrypto;
        if (e && e.randomUUID)
            return e.randomUUID().replace(/-/g, "");
        const n = e && e.getRandomValues ? ()=>e.getRandomValues(new Uint8Array(1))[0] : ()=>16 * Math.random();
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (t=>(t ^ (15 & n()) >> t / 4).toString(16)))
    }
    function s(t) {
        return t.exception && t.exception.values ? t.exception.values[0] : void 0
    }
    function c(t) {
        const {message: e, event_id: n} = t;
        if (e)
            return e;
        const r = s(t);
        return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
    }
    function a(t, e, n) {
        const r = t.exception = t.exception || {}
          , i = r.values = r.values || []
          , o = i[0] = i[0] || {};
        o.value || (o.value = e || ""),
        o.type || (o.type = n || "Error")
    }
    function u(t, e) {
        const n = s(t);
        if (!n)
            return;
        const r = n.mechanism;
        if (n.mechanism = {
            type: "generic",
            handled: !0,
            ...r,
            ...e
        },
        e && "data"in e) {
            const t = {
                ...r && r.data,
                ...e.data
            };
            n.mechanism.data = t
        }
    }
    function l(t) {
        if (t && t.__sentry_captured__)
            return !0;
        try {
            Object(r.a)(t, "__sentry_captured__", !0)
        } catch (t) {}
        return !1
    }
    function d(t) {
        return Array.isArray(t) ? t : [t]
    }
}
, , , , function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return c
    }
    )),
    n.d(e, "b", (function() {
        return s
    }
    )),
    n.d(e, "c", (function() {
        return o
    }
    ));
    var r, i = n(2);
    function o(t) {
        return new c((e=>{
            e(t)
        }
        ))
    }
    function s(t) {
        return new c(((e,n)=>{
            n(t)
        }
        ))
    }
    !function(t) {
        t[t.PENDING = 0] = "PENDING";
        t[t.RESOLVED = 1] = "RESOLVED";
        t[t.REJECTED = 2] = "REJECTED"
    }(r || (r = {}));
    class c {
        __init() {
            this._state = r.PENDING
        }
        __init2() {
            this._handlers = []
        }
        constructor(t) {
            c.prototype.__init.call(this),
            c.prototype.__init2.call(this),
            c.prototype.__init3.call(this),
            c.prototype.__init4.call(this),
            c.prototype.__init5.call(this),
            c.prototype.__init6.call(this);
            try {
                t(this._resolve, this._reject)
            } catch (t) {
                this._reject(t)
            }
        }
        then(t, e) {
            return new c(((n,r)=>{
                this._handlers.push([!1, e=>{
                    if (t)
                        try {
                            n(t(e))
                        } catch (t) {
                            r(t)
                        }
                    else
                        n(e)
                }
                , t=>{
                    if (e)
                        try {
                            n(e(t))
                        } catch (t) {
                            r(t)
                        }
                    else
                        r(t)
                }
                ]),
                this._executeHandlers()
            }
            ))
        }
        catch(t) {
            return this.then((t=>t), t)
        }
        finally(t) {
            return new c(((e,n)=>{
                let r, i;
                return this.then((e=>{
                    i = !1,
                    r = e,
                    t && t()
                }
                ), (e=>{
                    i = !0,
                    r = e,
                    t && t()
                }
                )).then((()=>{
                    i ? n(r) : e(r)
                }
                ))
            }
            ))
        }
        __init3() {
            this._resolve = t=>{
                this._setResult(r.RESOLVED, t)
            }
        }
        __init4() {
            this._reject = t=>{
                this._setResult(r.REJECTED, t)
            }
        }
        __init5() {
            this._setResult = (t,e)=>{
                this._state === r.PENDING && (Object(i.n)(e) ? e.then(this._resolve, this._reject) : (this._state = t,
                this._value = e,
                this._executeHandlers()))
            }
        }
        __init6() {
            this._executeHandlers = ()=>{
                if (this._state === r.PENDING)
                    return;
                const t = this._handlers.slice();
                this._handlers = [],
                t.forEach((t=>{
                    t[0] || (this._state === r.RESOLVED && t[1](this._value),
                    this._state === r.REJECTED && t[2](this._value),
                    t[0] = !0)
                }
                ))
            }
        }
    }
}
, , function(t, e) {
    t.exports = function(t) {
        if (!t.webpackPolyfill) {
            var e = Object.create(t);
            e.children || (e.children = []),
            Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l
                }
            }),
            Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i
                }
            }),
            Object.defineProperty(e, "exports", {
                enumerable: !0
            }),
            e.webpackPolyfill = 1
        }
        return e
    }
}
, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}
, , , , function(t, e, n) {
    "use strict";
    function r() {
        return "undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && !!__SENTRY_BROWSER_BUNDLE__
    }
    n.d(e, "a", (function() {
        return r
    }
    ))
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return a
    }
    )),
    n.d(e, "b", (function() {
        return s
    }
    ));
    var r = n(2)
      , i = n(4);
    const o = Object(i.b)();
    function s(t, e) {
        try {
            let n = t;
            const r = 5
              , i = 80
              , o = [];
            let s = 0
              , a = 0;
            const u = " > "
              , l = u.length;
            let d;
            for (; n && s++ < r && (d = c(n, e),
            !("html" === d || s > 1 && a + o.length * l + d.length >= i)); )
                o.push(d),
                a += d.length,
                n = n.parentNode;
            return o.reverse().join(u)
        } catch (t) {
            return "<unknown>"
        }
    }
    function c(t, e) {
        const n = t
          , i = [];
        let o, s, c, a, u;
        if (!n || !n.tagName)
            return "";
        i.push(n.tagName.toLowerCase());
        const l = e && e.length ? e.filter((t=>n.getAttribute(t))).map((t=>[t, n.getAttribute(t)])) : null;
        if (l && l.length)
            l.forEach((t=>{
                i.push(`[${t[0]}="${t[1]}"]`)
            }
            ));
        else if (n.id && i.push(`#${n.id}`),
        o = n.className,
        o && Object(r.l)(o))
            for (s = o.split(/\s+/),
            u = 0; u < s.length; u++)
                i.push(`.${s[u]}`);
        const d = ["type", "name", "title", "alt"];
        for (u = 0; u < d.length; u++)
            c = d[u],
            a = n.getAttribute(c),
            a && i.push(`[${c}="${a}"]`);
        return i.join("")
    }
    function a() {
        try {
            return o.document.location.href
        } catch (t) {
            return ""
        }
    }
}
, , , function(t, e) {
    var n, r, i = t.exports = {};
    function o() {
        throw new Error("setTimeout has not been defined")
    }
    function s() {
        throw new Error("clearTimeout has not been defined")
    }
    function c(t) {
        if (n === setTimeout)
            return setTimeout(t, 0);
        if ((n === o || !n) && setTimeout)
            return n = setTimeout,
            setTimeout(t, 0);
        try {
            return n(t, 0)
        } catch (e) {
            try {
                return n.call(null, t, 0)
            } catch (e) {
                return n.call(this, t, 0)
            }
        }
    }
    !function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : o
        } catch (t) {
            n = o
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (t) {
            r = s
        }
    }();
    var a, u = [], l = !1, d = -1;
    function _() {
        l && a && (l = !1,
        a.length ? u = a.concat(u) : d = -1,
        u.length && f())
    }
    function f() {
        if (!l) {
            var t = c(_);
            l = !0;
            for (var e = u.length; e; ) {
                for (a = u,
                u = []; ++d < e; )
                    a && a[d].run();
                d = -1,
                e = u.length
            }
            a = null,
            l = !1,
            function(t) {
                if (r === clearTimeout)
                    return clearTimeout(t);
                if ((r === s || !r) && clearTimeout)
                    return r = clearTimeout,
                    clearTimeout(t);
                try {
                    r(t)
                } catch (e) {
                    try {
                        return r.call(null, t)
                    } catch (e) {
                        return r.call(this, t)
                    }
                }
            }(t)
        }
    }
    function p(t, e) {
        this.fun = t,
        this.array = e
    }
    function h() {}
    i.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
        u.push(new p(t,e)),
        1 !== u.length || l || c(f)
    }
    ,
    p.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    i.title = "browser",
    i.browser = !0,
    i.env = {},
    i.argv = [],
    i.version = "",
    i.versions = {},
    i.on = h,
    i.addListener = h,
    i.once = h,
    i.off = h,
    i.removeListener = h,
    i.removeAllListeners = h,
    i.emit = h,
    i.prependListener = h,
    i.prependOnceListener = h,
    i.listeners = function(t) {
        return []
    }
    ,
    i.binding = function(t) {
        throw new Error("process.binding is not supported")
    }
    ,
    i.cwd = function() {
        return "/"
    }
    ,
    i.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }
    ,
    i.umask = function() {
        return 0
    }
}
, , , , function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return r
    }
    )),
    n.d(e, "b", (function() {
        return s
    }
    )),
    n.d(e, "c", (function() {
        return i
    }
    ));
    n(49);
    function r(...t) {
        const e = t.sort(((t,e)=>t[0] - e[0])).map((t=>t[1]));
        return (t,n=0)=>{
            const r = [];
            for (const i of t.split("\n").slice(n)) {
                const t = i.replace(/\(error: (.*)\)/, "$1");
                for (const n of e) {
                    const e = n(t);
                    if (e) {
                        r.push(e);
                        break
                    }
                }
            }
            return function(t) {
                if (!t.length)
                    return [];
                let e = t;
                const n = e[0].function || ""
                  , r = e[e.length - 1].function || "";
                -1 === n.indexOf("captureMessage") && -1 === n.indexOf("captureException") || (e = e.slice(1));
                -1 !== r.indexOf("sentryWrapped") && (e = e.slice(0, -1));
                return e.slice(0, 50).map((t=>({
                    ...t,
                    filename: t.filename || e[0].filename,
                    function: t.function || "?"
                }))).reverse()
            }(r)
        }
    }
    function i(t) {
        return Array.isArray(t) ? r(...t) : t
    }
    const o = "<anonymous>";
    function s(t) {
        try {
            return t && "function" == typeof t && t.name || o
        } catch (t) {
            return o
        }
    }
}
, , , , function(t, e, n) {
    "use strict";
    (function(t) {
        n.d(e, "a", (function() {
            return c
        }
        )),
        n.d(e, "b", (function() {
            return a
        }
        ));
        var r = n(2)
          , i = n(48)
          , o = n(10)
          , s = n(43);
        function c(t, e=1 / 0, n=1 / 0) {
            try {
                return u("", t, e, n)
            } catch (t) {
                return {
                    ERROR: `**non-serializable** (${t})`
                }
            }
        }
        function a(t, e=3, n=102400) {
            const r = c(t, e);
            return i = r,
            function(t) {
                return ~-encodeURI(t).split(/%..|./).length
            }(JSON.stringify(i)) > n ? a(t, e - 1, n) : r;
            var i
        }
        function u(e, n, c=1 / 0, a=1 / 0, l=Object(i.a)()) {
            const [d,_] = l;
            if (null === n || ["number", "boolean", "string"].includes(typeof n) && !Object(r.h)(n))
                return n;
            const f = function(e, n) {
                try {
                    return "domain" === e && n && "object" == typeof n && n._events ? "[Domain]" : "domainEmitter" === e ? "[DomainEmitter]" : void 0 !== t && n === t ? "[Global]" : "undefined" != typeof window && n === window ? "[Window]" : "undefined" != typeof document && n === document ? "[Document]" : Object(r.m)(n) ? "[SyntheticEvent]" : "number" == typeof n && n != n ? "[NaN]" : void 0 === n ? "[undefined]" : "function" == typeof n ? `[Function: ${Object(s.b)(n)}]` : "symbol" == typeof n ? `[${String(n)}]` : "bigint" == typeof n ? `[BigInt: ${String(n)}]` : `[object ${Object.getPrototypeOf(n).constructor.name}]`
                } catch (t) {
                    return `**non-serializable** (${t})`
                }
            }(e, n);
            if (!f.startsWith("[object "))
                return f;
            if (n.__sentry_skip_normalization__)
                return n;
            if (0 === c)
                return f.replace("object ", "");
            if (d(n))
                return "[Circular ~]";
            const p = n;
            if (p && "function" == typeof p.toJSON)
                try {
                    return u("", p.toJSON(), c - 1, a, l)
                } catch (t) {}
            const h = Array.isArray(n) ? [] : {};
            let g = 0;
            const y = Object(o.b)(n);
            for (const t in y) {
                if (!Object.prototype.hasOwnProperty.call(y, t))
                    continue;
                if (g >= a) {
                    h[t] = "[MaxProperties ~]";
                    break
                }
                const e = y[t];
                h[t] = u(t, e, c - 1, a, l),
                g++
            }
            return _(n),
            h
        }
    }
    ).call(this, n(31))
}
, function(t, e, n) {
    "use strict";
    function r() {
        const t = "function" == typeof WeakSet
          , e = t ? new WeakSet : [];
        return [function(n) {
            if (t)
                return !!e.has(n) || (e.add(n),
                !1);
            for (let t = 0; t < e.length; t++) {
                if (e[t] === n)
                    return !0
            }
            return e.push(n),
            !1
        }
        , function(n) {
            if (t)
                e.delete(n);
            else
                for (let t = 0; t < e.length; t++)
                    if (e[t] === n) {
                        e.splice(t, 1);
                        break
                    }
        }
        ]
    }
    n.d(e, "a", (function() {
        return r
    }
    ))
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        let e, n = t[0], r = 1;
        for (; r < t.length; ) {
            const i = t[r]
              , o = t[r + 1];
            if (r += 2,
            ("optionalAccess" === i || "optionalCall" === i) && null == n)
                return;
            "access" === i || "optionalAccess" === i ? (e = n,
            n = o(n)) : "call" !== i && "optionalCall" !== i || (n = o(((...t)=>n.call(e, ...t))),
            e = void 0)
        }
        return n
    }
    n.d(e, "a", (function() {
        return r
    }
    ))
}
, , , , , , , , , , , , , , , function(t, e, n) {
    t.exports = n(67)
}
, , , function(t, e, n) {
    "use strict";
    n.r(e);
    var r = {};
    n.r(r),
    n.d(r, "FunctionToString", (function() {
        return s
    }
    )),
    n.d(r, "InboundFilters", (function() {
        return d
    }
    ));
    var i = n(10);
    let o;
    class s {
        constructor() {
            s.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "FunctionToString"
        }
        __init() {
            this.name = s.id
        }
        setupOnce() {
            o = Function.prototype.toString,
            Function.prototype.toString = function(...t) {
                const e = Object(i.f)(this) || this;
                return o.apply(e, t)
            }
        }
    }
    s.__initStatic();
    var c = n(15)
      , a = n(24)
      , u = n(12);
    const l = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
    class d {
        static __initStatic() {
            this.id = "InboundFilters"
        }
        __init() {
            this.name = d.id
        }
        constructor(t={}) {
            this._options = t,
            d.prototype.__init.call(this)
        }
        setupOnce(t, e) {
            const n = t=>{
                const n = e();
                if (n) {
                    const e = n.getIntegration(d);
                    if (e) {
                        const r = n.getClient()
                          , i = r ? r.getOptions() : {}
                          , o = function(t={}, e={}) {
                            return {
                                allowUrls: [...t.allowUrls || [], ...e.allowUrls || []],
                                denyUrls: [...t.denyUrls || [], ...e.denyUrls || []],
                                ignoreErrors: [...t.ignoreErrors || [], ...e.ignoreErrors || [], ...l],
                                ignoreInternal: void 0 === t.ignoreInternal || t.ignoreInternal
                            }
                        }(e._options, i);
                        return function(t, e) {
                            if (e.ignoreInternal && function(t) {
                                try {
                                    return "SentryError" === t.exception.values[0].type
                                } catch (t) {}
                                return !1
                            }(t))
                                return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.c.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${Object(a.e)(t)}`),
                                !0;
                            if (function(t, e) {
                                if (!e || !e.length)
                                    return !1;
                                return function(t) {
                                    if (t.message)
                                        return [t.message];
                                    if (t.exception)
                                        try {
                                            const {type: e="", value: n=""} = t.exception.values && t.exception.values[0] || {};
                                            return [`${n}`, `${e}: ${n}`]
                                        } catch (e) {
                                            return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.c.error(`Cannot extract message for event ${Object(a.e)(t)}`),
                                            []
                                        }
                                    return []
                                }(t).some((t=>Object(u.c)(t, e)))
                            }(t, e.ignoreErrors))
                                return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.c.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${Object(a.e)(t)}`),
                                !0;
                            if (function(t, e) {
                                if (!e || !e.length)
                                    return !1;
                                const n = _(t);
                                return !!n && Object(u.c)(n, e)
                            }(t, e.denyUrls))
                                return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.c.warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${Object(a.e)(t)}.\nUrl: ${_(t)}`),
                                !0;
                            if (!function(t, e) {
                                if (!e || !e.length)
                                    return !0;
                                const n = _(t);
                                return !n || Object(u.c)(n, e)
                            }(t, e.allowUrls))
                                return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.c.warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${Object(a.e)(t)}.\nUrl: ${_(t)}`),
                                !0;
                            return !1
                        }(t, o) ? null : t
                    }
                }
                return t
            }
            ;
            n.id = this.name,
            t(n)
        }
    }
    function _(t) {
        try {
            let e;
            try {
                e = t.exception.values[0].stacktrace.frames
            } catch (t) {}
            return e ? function(t=[]) {
                for (let e = t.length - 1; e >= 0; e--) {
                    const n = t[e];
                    if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename)
                        return n.filename || null
                }
                return null
            }(e) : null
        } catch (e) {
            return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.c.error(`Cannot extract url for event ${Object(a.e)(t)}`),
            null
        }
    }
    d.__initStatic();
    var f = n(5)
      , p = n(13);
    const h = [];
    function g(t) {
        const e = t.defaultIntegrations || []
          , n = t.integrations;
        let r;
        e.forEach((t=>{
            t.isDefaultInstance = !0
        }
        )),
        r = Array.isArray(n) ? [...e, ...n] : "function" == typeof n ? Object(a.c)(n(e)) : e;
        const i = function(t) {
            const e = {};
            return t.forEach((t=>{
                const {name: n} = t
                  , r = e[n];
                r && !r.isDefaultInstance && t.isDefaultInstance || (e[n] = t)
            }
            )),
            Object.values(e)
        }(r)
          , o = i.findIndex((t=>"Debug" === t.name));
        if (-1 !== o) {
            const [t] = i.splice(o, 1);
            i.push(t)
        }
        return i
    }
    class y extends Error {
        constructor(t, e="warn") {
            super(t),
            this.message = t,
            this.name = new.target.prototype.constructor.name,
            Object.setPrototypeOf(this, new.target.prototype),
            this.logLevel = e
        }
    }
    const b = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
    function m(t, e=!1) {
        const {host: n, path: r, pass: i, port: o, projectId: s, protocol: c, publicKey: a} = t;
        return `${c}://${a}${e && i ? `:${i}` : ""}@${n}${o ? `:${o}` : ""}/${r ? `${r}/` : r}${s}`
    }
    function v(t) {
        return {
            protocol: t.protocol,
            publicKey: t.publicKey || "",
            pass: t.pass || "",
            host: t.host,
            port: t.port || "",
            path: t.path || "",
            projectId: t.projectId
        }
    }
    function E(t) {
        const e = "string" == typeof t ? function(t) {
            const e = b.exec(t);
            if (!e)
                throw new y(`Invalid Sentry Dsn: ${t}`);
            const [n,r,i="",o,s="",c] = e.slice(1);
            let a = ""
              , u = c;
            const l = u.split("/");
            if (l.length > 1 && (a = l.slice(0, -1).join("/"),
            u = l.pop()),
            u) {
                const t = u.match(/^\d+/);
                t && (u = t[0])
            }
            return v({
                host: o,
                pass: i,
                path: a,
                projectId: u,
                port: s,
                protocol: n,
                publicKey: r
            })
        }(t) : v(t);
        return function(t) {
            if ("undefined" != typeof __SENTRY_DEBUG__ && !__SENTRY_DEBUG__)
                return;
            const {port: e, projectId: n, protocol: r} = t;
            if (["protocol", "publicKey", "host", "projectId"].forEach((e=>{
                if (!t[e])
                    throw new y(`Invalid Sentry Dsn: ${e} missing`)
            }
            )),
            !n.match(/^\d+$/))
                throw new y(`Invalid Sentry Dsn: Invalid projectId ${n}`);
            if (!function(t) {
                return "http" === t || "https" === t
            }(r))
                throw new y(`Invalid Sentry Dsn: Invalid protocol ${r}`);
            if (e && isNaN(parseInt(e, 10)))
                throw new y(`Invalid Sentry Dsn: Invalid port ${e}`)
        }(e),
        e
    }
    function S(t) {
        const e = t.protocol ? `${t.protocol}:` : ""
          , n = t.port ? `:${t.port}` : "";
        return `${e}//${t.host}${n}${t.path ? `/${t.path}` : ""}/api/`
    }
    function O(t, e={}) {
        const n = "string" == typeof e ? e : e.tunnel
          , r = "string" != typeof e && e._metadata ? e._metadata.sdk : void 0;
        return n || `${function(t) {
            return `${S(t)}${t.projectId}/envelope/`
        }(t)}?${function(t, e) {
            return Object(i.h)({
                sentry_key: t.publicKey,
                sentry_version: "7",
                ...e && {
                    sentry_client: `${e.name}/${e.version}`
                }
            })
        }(t, r)}`
    }
    var j = n(43)
      , w = n(4);
    const x = Object(w.b)();
    function T() {
        if (!("fetch"in x))
            return !1;
        try {
            return new Headers,
            new Request("http://www.example.com"),
            new Response,
            !0
        } catch (t) {
            return !1
        }
    }
    function D(t) {
        return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
    }
    var k = n(28)
      , R = n(2);
    const N = Object(w.b)()
      , U = {}
      , B = {};
    function $(t) {
        if (!B[t])
            switch (B[t] = !0,
            t) {
            case "console":
                !function() {
                    if (!("console"in N))
                        return;
                    c.a.forEach((function(t) {
                        t in N.console && Object(i.e)(N.console, t, (function(e) {
                            return function(...n) {
                                I("console", {
                                    args: n,
                                    level: t
                                }),
                                e && e.apply(N.console, n)
                            }
                        }
                        ))
                    }
                    ))
                }();
                break;
            case "dom":
                !function() {
                    if (!("document"in N))
                        return;
                    const t = I.bind(null, "dom")
                      , e = M(t, !0);
                    N.document.addEventListener("click", e, !1),
                    N.document.addEventListener("keypress", e, !1),
                    ["EventTarget", "Node"].forEach((e=>{
                        const n = N[e] && N[e].prototype;
                        n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (Object(i.e)(n, "addEventListener", (function(e) {
                            return function(n, r, i) {
                                if ("click" === n || "keypress" == n)
                                    try {
                                        const r = this
                                          , o = r.__sentry_instrumentation_handlers__ = r.__sentry_instrumentation_handlers__ || {}
                                          , s = o[n] = o[n] || {
                                            refCount: 0
                                        };
                                        if (!s.handler) {
                                            const r = M(t);
                                            s.handler = r,
                                            e.call(this, n, r, i)
                                        }
                                        s.refCount++
                                    } catch (t) {}
                                return e.call(this, n, r, i)
                            }
                        }
                        )),
                        Object(i.e)(n, "removeEventListener", (function(t) {
                            return function(e, n, r) {
                                if ("click" === e || "keypress" == e)
                                    try {
                                        const n = this
                                          , i = n.__sentry_instrumentation_handlers__ || {}
                                          , o = i[e];
                                        o && (o.refCount--,
                                        o.refCount <= 0 && (t.call(this, e, o.handler, r),
                                        o.handler = void 0,
                                        delete i[e]),
                                        0 === Object.keys(i).length && delete n.__sentry_instrumentation_handlers__)
                                    } catch (t) {}
                                return t.call(this, e, n, r)
                            }
                        }
                        )))
                    }
                    ))
                }();
                break;
            case "xhr":
                !function() {
                    if (!("XMLHttpRequest"in N))
                        return;
                    const t = XMLHttpRequest.prototype;
                    Object(i.e)(t, "open", (function(t) {
                        return function(...e) {
                            const n = this
                              , r = e[1]
                              , o = n.__sentry_xhr__ = {
                                method: Object(R.l)(e[0]) ? e[0].toUpperCase() : e[0],
                                url: e[1]
                            };
                            Object(R.l)(r) && "POST" === o.method && r.match(/sentry_key/) && (n.__sentry_own_request__ = !0);
                            const s = function() {
                                if (4 === n.readyState) {
                                    try {
                                        o.status_code = n.status
                                    } catch (t) {}
                                    I("xhr", {
                                        args: e,
                                        endTimestamp: Date.now(),
                                        startTimestamp: Date.now(),
                                        xhr: n
                                    })
                                }
                            };
                            return "onreadystatechange"in n && "function" == typeof n.onreadystatechange ? Object(i.e)(n, "onreadystatechange", (function(t) {
                                return function(...e) {
                                    return s(),
                                    t.apply(n, e)
                                }
                            }
                            )) : n.addEventListener("readystatechange", s),
                            t.apply(n, e)
                        }
                    }
                    )),
                    Object(i.e)(t, "send", (function(t) {
                        return function(...e) {
                            return this.__sentry_xhr__ && void 0 !== e[0] && (this.__sentry_xhr__.body = e[0]),
                            I("xhr", {
                                args: e,
                                startTimestamp: Date.now(),
                                xhr: this
                            }),
                            t.apply(this, e)
                        }
                    }
                    ))
                }();
                break;
            case "fetch":
                !function() {
                    if (!function() {
                        if (!T())
                            return !1;
                        if (D(x.fetch))
                            return !0;
                        let t = !1;
                        const e = x.document;
                        if (e && "function" == typeof e.createElement)
                            try {
                                const n = e.createElement("iframe");
                                n.hidden = !0,
                                e.head.appendChild(n),
                                n.contentWindow && n.contentWindow.fetch && (t = D(n.contentWindow.fetch)),
                                e.head.removeChild(n)
                            } catch (t) {
                                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.c.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
                            }
                        return t
                    }())
                        return;
                    Object(i.e)(N, "fetch", (function(t) {
                        return function(...e) {
                            const n = {
                                args: e,
                                fetchData: {
                                    method: G(e),
                                    url: C(e)
                                },
                                startTimestamp: Date.now()
                            };
                            return I("fetch", {
                                ...n
                            }),
                            t.apply(N, e).then((t=>(I("fetch", {
                                ...n,
                                endTimestamp: Date.now(),
                                response: t
                            }),
                            t)), (t=>{
                                throw I("fetch", {
                                    ...n,
                                    endTimestamp: Date.now(),
                                    error: t
                                }),
                                t
                            }
                            ))
                        }
                    }
                    ))
                }();
                break;
            case "history":
                !function() {
                    if (!function() {
                        const t = x.chrome
                          , e = t && t.app && t.app.runtime
                          , n = "history"in x && !!x.history.pushState && !!x.history.replaceState;
                        return !e && n
                    }())
                        return;
                    const t = N.onpopstate;
                    function e(t) {
                        return function(...e) {
                            const n = e.length > 2 ? e[2] : void 0;
                            if (n) {
                                const t = P
                                  , e = String(n);
                                P = e,
                                I("history", {
                                    from: t,
                                    to: e
                                })
                            }
                            return t.apply(this, e)
                        }
                    }
                    N.onpopstate = function(...e) {
                        const n = N.location.href
                          , r = P;
                        if (P = n,
                        I("history", {
                            from: r,
                            to: n
                        }),
                        t)
                            try {
                                return t.apply(this, e)
                            } catch (t) {}
                    }
                    ,
                    Object(i.e)(N.history, "pushState", e),
                    Object(i.e)(N.history, "replaceState", e)
                }();
                break;
            case "error":
                q = N.onerror,
                N.onerror = function(t, e, n, r, i) {
                    return I("error", {
                        column: r,
                        error: i,
                        line: n,
                        msg: t,
                        url: e
                    }),
                    !!q && q.apply(this, arguments)
                }
                ;
                break;
            case "unhandledrejection":
                F = N.onunhandledrejection,
                N.onunhandledrejection = function(t) {
                    return I("unhandledrejection", t),
                    !F || F.apply(this, arguments)
                }
                ;
                break;
            default:
                return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.c.warn("unknown instrumentation type:", t))
            }
    }
    function Y(t, e) {
        U[t] = U[t] || [],
        U[t].push(e),
        $(t)
    }
    function I(t, e) {
        if (t && U[t])
            for (const n of U[t] || [])
                try {
                    n(e)
                } catch (e) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.c.error(`Error while triggering instrumentation handler.\nType: ${t}\nName: ${Object(j.b)(n)}\nError:`, e)
                }
    }
    function G(t=[]) {
        return "Request"in N && Object(R.g)(t[0], Request) && t[0].method ? String(t[0].method).toUpperCase() : t[1] && t[1].method ? String(t[1].method).toUpperCase() : "GET"
    }
    function C(t=[]) {
        return "string" == typeof t[0] ? t[0] : "Request"in N && Object(R.g)(t[0], Request) ? t[0].url : String(t[0])
    }
    let P;
    let L, A;
    function M(t, e=!1) {
        return n=>{
            if (!n || A === n)
                return;
            if (function(t) {
                if ("keypress" !== t.type)
                    return !1;
                try {
                    const e = t.target;
                    if (!e || !e.tagName)
                        return !0;
                    if ("INPUT" === e.tagName || "TEXTAREA" === e.tagName || e.isContentEditable)
                        return !1
                } catch (t) {}
                return !0
            }(n))
                return;
            const r = "keypress" === n.type ? "input" : n.type;
            (void 0 === L || function(t, e) {
                if (!t)
                    return !0;
                if (t.type !== e.type)
                    return !0;
                try {
                    if (t.target !== e.target)
                        return !0
                } catch (t) {}
                return !1
            }(A, n)) && (t({
                event: n,
                name: r,
                global: e
            }),
            A = n),
            clearTimeout(L),
            L = N.setTimeout((()=>{
                L = void 0
            }
            ), 1e3)
        }
    }
    let q = null;
    let F = null;
    var H = n(49)
      , z = n(47);
    function W(t, e=[]) {
        return [t, e]
    }
    function J(t, e) {
        const [n,r] = t;
        return [n, [...r, e]]
    }
    function X(t, e) {
        t[1].forEach((t=>{
            const n = t[0].type;
            e(t, n)
        }
        ))
    }
    function K(t, e) {
        return (e || new TextEncoder).encode(t)
    }
    function V(t, e) {
        const [n,r] = t;
        let i = JSON.stringify(n);
        function o(t) {
            "string" == typeof i ? i = "string" == typeof t ? i + t : [K(i, e), t] : i.push("string" == typeof t ? K(t, e) : t)
        }
        for (const t of r) {
            const [e,n] = t;
            if (o(`\n ${JSON.stringify(e)}\n`),
            "string" == typeof n || n instanceof Uint8Array)
                o(n);
            else {
                let t;
                try {
                    t = JSON.stringify(n)
                } catch (e) {
                    t = JSON.stringify(Object(z.a)(n))
                }
                o(t)
            }
        }
        return "string" == typeof i ? i : function(t) {
            const e = t.reduce(((t,e)=>t + e.length), 0)
              , n = new Uint8Array(e);
            let r = 0;
            for (const e of t)
                n.set(e, r),
                r += e.length;
            return n
        }(i)
    }
    function Q(t, e) {
        const n = "string" == typeof t.data ? K(t.data, e) : t.data;
        return [Object(i.c)({
            type: "attachment",
            length: n.length,
            filename: t.filename,
            content_type: t.contentType,
            attachment_type: t.attachmentType
        }), n]
    }
    const Z = {
        session: "session",
        sessions: "session",
        attachment: "attachment",
        transaction: "transaction",
        event: "error",
        client_report: "internal",
        user_report: "default"
    };
    function tt(t) {
        return Z[t]
    }
    var et = n(18);
    function nt(t) {
        if (!t || !t.sdk)
            return;
        const {name: e, version: n} = t.sdk;
        return {
            name: e,
            version: n
        }
    }
    function rt(t, e, n, r) {
        const o = nt(n)
          , s = t.type || "event";
        !function(t, e) {
            e && (t.sdk = t.sdk || {},
            t.sdk.name = t.sdk.name || e.name,
            t.sdk.version = t.sdk.version || e.version,
            t.sdk.integrations = [...t.sdk.integrations || [], ...e.integrations || []],
            t.sdk.packages = [...t.sdk.packages || [], ...e.packages || []])
        }(t, n && n.sdk);
        const c = function(t, e, n, r) {
            const o = t.sdkProcessingMetadata && t.sdkProcessingMetadata.dynamicSamplingContext;
            return {
                event_id: t.event_id,
                sent_at: (new Date).toISOString(),
                ...e && {
                    sdk: e
                },
                ...!!n && {
                    dsn: m(r)
                },
                ..."transaction" === t.type && o && {
                    trace: Object(i.c)({
                        ...o
                    })
                }
            }
        }(t, o, r, e);
        delete t.sdkProcessingMetadata;
        return W(c, [[{
            type: s
        }, t]])
    }
    var it = n(9);
    const ot = "Not capturing exception because it's already been captured.";
    class st {
        __init() {
            this._integrations = {}
        }
        __init2() {
            this._integrationsInitialized = !1
        }
        __init3() {
            this._numProcessing = 0
        }
        __init4() {
            this._outcomes = {}
        }
        constructor(t) {
            if (st.prototype.__init.call(this),
            st.prototype.__init2.call(this),
            st.prototype.__init3.call(this),
            st.prototype.__init4.call(this),
            this._options = t,
            t.dsn) {
                this._dsn = E(t.dsn);
                const e = O(this._dsn, t);
                this._transport = t.transport({
                    recordDroppedEvent: this.recordDroppedEvent.bind(this),
                    ...t.transportOptions,
                    url: e
                })
            } else
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.c.warn("No DSN provided, client will not do anything.")
        }
        captureException(t, e, n) {
            if (Object(a.d)(t))
                return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.c.log(ot));
            let r;
            return this._process(this.eventFromException(t, e).then((t=>this._captureEvent(t, e, n))).then((t=>{
                r = t
            }
            ))),
            r
        }
        captureMessage(t, e, n, r) {
            let i;
            const o = Object(R.j)(t) ? this.eventFromMessage(String(t), e, n) : this.eventFromException(t, n);
            return this._process(o.then((t=>this._captureEvent(t, n, r))).then((t=>{
                i = t
            }
            ))),
            i
        }
        captureEvent(t, e, n) {
            if (e && e.originalException && Object(a.d)(e.originalException))
                return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.c.log(ot));
            let r;
            return this._process(this._captureEvent(t, e, n).then((t=>{
                r = t
            }
            ))),
            r
        }
        captureSession(t) {
            this._isEnabled() ? "string" != typeof t.release ? ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.c.warn("Discarded session because of missing or non-string release") : (this.sendSession(t),
            Object(it.c)(t, {
                init: !1
            })) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.c.warn("SDK not enabled, will not capture session.")
        }
        getDsn() {
            return this._dsn
        }
        getOptions() {
            return this._options
        }
        getTransport() {
            return this._transport
        }
        flush(t) {
            const e = this._transport;
            return e ? this._isClientDoneProcessing(t).then((n=>e.flush(t).then((t=>n && t)))) : Object(k.c)(!0)
        }
        close(t) {
            return this.flush(t).then((t=>(this.getOptions().enabled = !1,
            t)))
        }
        setupIntegrations() {
            this._isEnabled() && !this._integrationsInitialized && (this._integrations = function(t) {
                const e = {};
                return t.forEach((t=>{
                    e[t.name] = t,
                    -1 === h.indexOf(t.name) && (t.setupOnce(p.b, f.a),
                    h.push(t.name),
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.c.log(`Integration installed: ${t.name}`))
                }
                )),
                e
            }(this._options.integrations),
            this._integrationsInitialized = !0)
        }
        getIntegrationById(t) {
            return this._integrations[t]
        }
        getIntegration(t) {
            try {
                return this._integrations[t.id] || null
            } catch (e) {
                return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.c.warn(`Cannot retrieve integration ${t.id} from the current Client`),
                null
            }
        }
        sendEvent(t, e={}) {
            if (this._dsn) {
                let n = rt(t, this._dsn, this._options._metadata, this._options.tunnel);
                for (const t of e.attachments || [])
                    n = J(n, Q(t, this._options.transportOptions && this._options.transportOptions.textEncoder));
                this._sendEnvelope(n)
            }
        }
        sendSession(t) {
            if (this._dsn) {
                const e = function(t, e, n, r) {
                    const i = nt(n);
                    return W({
                        sent_at: (new Date).toISOString(),
                        ...i && {
                            sdk: i
                        },
                        ...!!r && {
                            dsn: m(e)
                        }
                    }, ["aggregates"in t ? [{
                        type: "sessions"
                    }, t] : [{
                        type: "session"
                    }, t]])
                }(t, this._dsn, this._options._metadata, this._options.tunnel);
                this._sendEnvelope(e)
            }
        }
        recordDroppedEvent(t, e, n) {
            if (this._options.sendClientReports) {
                const n = `${t}:${e}`;
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.c.log(`Adding outcome: "${n}"`),
                this._outcomes[n] = this._outcomes[n] + 1 || 1
            }
        }
        _updateSessionFromEvent(t, e) {
            let n = !1
              , r = !1;
            const i = e.exception && e.exception.values;
            if (i) {
                r = !0;
                for (const t of i) {
                    const e = t.mechanism;
                    if (e && !1 === e.handled) {
                        n = !0;
                        break
                    }
                }
            }
            const o = "ok" === t.status;
            (o && 0 === t.errors || o && n) && (Object(it.c)(t, {
                ...n && {
                    status: "crashed"
                },
                errors: t.errors || Number(r || n)
            }),
            this.captureSession(t))
        }
        _isClientDoneProcessing(t) {
            return new k.a((e=>{
                let n = 0;
                const r = setInterval((()=>{
                    0 == this._numProcessing ? (clearInterval(r),
                    e(!0)) : (n += 1,
                    t && n >= t && (clearInterval(r),
                    e(!1)))
                }
                ), 1)
            }
            ))
        }
        _isEnabled() {
            return !1 !== this.getOptions().enabled && void 0 !== this._dsn
        }
        _prepareEvent(t, e, n) {
            const {normalizeDepth: r=3, normalizeMaxBreadth: i=1e3} = this.getOptions()
              , o = {
                ...t,
                event_id: t.event_id || e.event_id || Object(a.f)(),
                timestamp: t.timestamp || Object(et.a)()
            };
            this._applyClientOptions(o),
            this._applyIntegrationsMetadata(o);
            let s = n;
            e.captureContext && (s = p.a.clone(s).update(e.captureContext));
            let c = Object(k.c)(o);
            if (s && s.getAttachments) {
                const t = [...e.attachments || [], ...s.getAttachments()];
                t.length && (e.attachments = t),
                c = s.applyToEvent(o, e)
            }
            return c.then((t=>"number" == typeof r && r > 0 ? this._normalizeEvent(t, r, i) : t))
        }
        _normalizeEvent(t, e, n) {
            if (!t)
                return null;
            const r = {
                ...t,
                ...t.breadcrumbs && {
                    breadcrumbs: t.breadcrumbs.map((t=>({
                        ...t,
                        ...t.data && {
                            data: Object(z.a)(t.data, e, n)
                        }
                    })))
                },
                ...t.user && {
                    user: Object(z.a)(t.user, e, n)
                },
                ...t.contexts && {
                    contexts: Object(z.a)(t.contexts, e, n)
                },
                ...t.extra && {
                    extra: Object(z.a)(t.extra, e, n)
                }
            };
            return t.contexts && t.contexts.trace && r.contexts && (r.contexts.trace = t.contexts.trace,
            t.contexts.trace.data && (r.contexts.trace.data = Object(z.a)(t.contexts.trace.data, e, n))),
            t.spans && (r.spans = t.spans.map((t=>(t.data && (t.data = Object(z.a)(t.data, e, n)),
            t)))),
            r
        }
        _applyClientOptions(t) {
            const e = this.getOptions()
              , {environment: n, release: r, dist: i, maxValueLength: o=250} = e;
            "environment"in t || (t.environment = "environment"in e ? n : "production"),
            void 0 === t.release && void 0 !== r && (t.release = r),
            void 0 === t.dist && void 0 !== i && (t.dist = i),
            t.message && (t.message = Object(u.d)(t.message, o));
            const s = t.exception && t.exception.values && t.exception.values[0];
            s && s.value && (s.value = Object(u.d)(s.value, o));
            const c = t.request;
            c && c.url && (c.url = Object(u.d)(c.url, o))
        }
        _applyIntegrationsMetadata(t) {
            const e = Object.keys(this._integrations);
            e.length > 0 && (t.sdk = t.sdk || {},
            t.sdk.integrations = [...t.sdk.integrations || [], ...e])
        }
        _captureEvent(t, e={}, n) {
            return this._processEvent(t, e, n).then((t=>t.event_id), (t=>{
                if ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) {
                    const e = t;
                    "log" === e.logLevel ? c.c.log(e.message) : c.c.warn(e)
                }
            }
            ))
        }
        _processEvent(t, e, n) {
            const r = this.getOptions()
              , {sampleRate: i} = r;
            if (!this._isEnabled())
                return Object(k.b)(new y("SDK not enabled, will not capture event.","log"));
            const o = "transaction" === t.type
              , s = o ? "beforeSendTransaction" : "beforeSend"
              , c = r[s];
            return !o && "number" == typeof i && Math.random() > i ? (this.recordDroppedEvent("sample_rate", "error", t),
            Object(k.b)(new y(`Discarding event because it's not included in the random sample (sampling rate = ${i})`,"log"))) : this._prepareEvent(t, e, n).then((n=>{
                if (null === n)
                    throw this.recordDroppedEvent("event_processor", t.type || "error", t),
                    new y("An event processor returned `null`, will not send event.","log");
                if (e.data && !0 === e.data.__sentry__ || !c)
                    return n;
                return function(t, e) {
                    const n = `\`${e}\` must return \`null\` or a valid event.`;
                    if (Object(R.n)(t))
                        return t.then((t=>{
                            if (!Object(R.i)(t) && null !== t)
                                throw new y(n);
                            return t
                        }
                        ), (t=>{
                            throw new y(`\`${e}\` rejected with ${t}`)
                        }
                        ));
                    if (!Object(R.i)(t) && null !== t)
                        throw new y(n);
                    return t
                }(c(n, e), s)
            }
            )).then((r=>{
                if (null === r)
                    throw this.recordDroppedEvent("before_send", t.type || "error", t),
                    new y(`\`${s}\` returned \`null\`, will not send event.`,"log");
                const i = n && n.getSession();
                !o && i && this._updateSessionFromEvent(i, r);
                const c = r.transaction_info;
                if (o && c && r.transaction !== t.transaction) {
                    const t = "custom";
                    r.transaction_info = {
                        ...c,
                        source: t,
                        changes: [...c.changes, {
                            source: t,
                            timestamp: r.timestamp,
                            propagations: c.propagations
                        }]
                    }
                }
                return this.sendEvent(r, e),
                r
            }
            )).then(null, (t=>{
                if (t instanceof y)
                    throw t;
                throw this.captureException(t, {
                    data: {
                        __sentry__: !0
                    },
                    originalException: t
                }),
                new y(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${t}`)
            }
            ))
        }
        _process(t) {
            this._numProcessing++,
            t.then((t=>(this._numProcessing--,
            t)), (t=>(this._numProcessing--,
            t)))
        }
        _sendEnvelope(t) {
            this._transport && this._dsn ? this._transport.send(t).then(null, (t=>{
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.c.error("Error while sending event:", t)
            }
            )) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.c.error("Transport disabled")
        }
        _clearOutcomes() {
            const t = this._outcomes;
            return this._outcomes = {},
            Object.keys(t).map((e=>{
                const [n,r] = e.split(":");
                return {
                    reason: n,
                    category: r,
                    quantity: t[e]
                }
            }
            ))
        }
    }
    const ct = "7.23.0";
    function at(t, e) {
        const n = lt(t, e)
          , r = {
            type: e && e.name,
            value: _t(e)
        };
        return n.length && (r.stacktrace = {
            frames: n
        }),
        void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"),
        r
    }
    function ut(t, e) {
        return {
            exception: {
                values: [at(t, e)]
            }
        }
    }
    function lt(t, e) {
        const n = e.stacktrace || e.stack || ""
          , r = function(t) {
            if (t) {
                if ("number" == typeof t.framesToPop)
                    return t.framesToPop;
                if (dt.test(t.message))
                    return 1
            }
            return 0
        }(e);
        try {
            return t(n, r)
        } catch (t) {}
        return []
    }
    const dt = /Minified React error #\d+;/i;
    function _t(t) {
        const e = t && t.message;
        return e ? e.error && "string" == typeof e.error.message ? e.error.message : e : "No error message"
    }
    function ft(t, e, n, r, o) {
        let s;
        if (Object(R.e)(e) && e.error) {
            return ut(t, e.error)
        }
        if (Object(R.a)(e) || Object(R.b)(e)) {
            const i = e;
            if ("stack"in e)
                s = ut(t, e);
            else {
                const e = i.name || (Object(R.a)(i) ? "DOMError" : "DOMException")
                  , o = i.message ? `${e}: ${i.message}` : e;
                s = pt(t, o, n, r),
                Object(a.b)(s, o)
            }
            return "code"in i && (s.tags = {
                ...s.tags,
                "DOMException.code": `${i.code}`
            }),
            s
        }
        if (Object(R.d)(e))
            return ut(t, e);
        if (Object(R.i)(e) || Object(R.f)(e)) {
            return s = function(t, e, n, r) {
                const o = Object(f.a)().getClient()
                  , s = o && o.getOptions().normalizeDepth
                  , c = {
                    exception: {
                        values: [{
                            type: Object(R.f)(e) ? e.constructor.name : r ? "UnhandledRejection" : "Error",
                            value: `Non-Error ${r ? "promise rejection" : "exception"} captured with keys: ${Object(i.d)(e)}`
                        }]
                    },
                    extra: {
                        __serialized__: Object(z.b)(e, s)
                    }
                };
                if (n) {
                    const e = lt(t, n);
                    e.length && (c.exception.values[0].stacktrace = {
                        frames: e
                    })
                }
                return c
            }(t, e, n, o),
            Object(a.a)(s, {
                synthetic: !0
            }),
            s
        }
        return s = pt(t, e, n, r),
        Object(a.b)(s, `${e}`, void 0),
        Object(a.a)(s, {
            synthetic: !0
        }),
        s
    }
    function pt(t, e, n, r) {
        const i = {
            message: e
        };
        if (r && n) {
            const r = lt(t, n);
            r.length && (i.exception = {
                values: [{
                    value: e,
                    stacktrace: {
                        frames: r
                    }
                }]
            })
        }
        return i
    }
    var ht = n(17);
    const gt = w.a;
    let yt = 0;
    function bt() {
        return yt > 0
    }
    function mt() {
        yt++,
        setTimeout((()=>{
            yt--
        }
        ))
    }
    function vt(t, e={}, n) {
        if ("function" != typeof t)
            return t;
        try {
            const e = t.__sentry_wrapped__;
            if (e)
                return e;
            if (Object(i.f)(t))
                return t
        } catch (e) {
            return t
        }
        const r = function() {
            const r = Array.prototype.slice.call(arguments);
            try {
                n && "function" == typeof n && n.apply(this, arguments);
                const i = r.map((t=>vt(t, e)));
                return t.apply(this, i)
            } catch (t) {
                throw mt(),
                Object(ht.c)((n=>{
                    n.addEventProcessor((t=>(e.mechanism && (Object(a.b)(t, void 0, void 0),
                    Object(a.a)(t, e.mechanism)),
                    t.extra = {
                        ...t.extra,
                        arguments: r
                    },
                    t))),
                    Object(ht.b)(t)
                }
                )),
                t
            }
        };
        try {
            for (const e in t)
                Object.prototype.hasOwnProperty.call(t, e) && (r[e] = t[e])
        } catch (t) {}
        Object(i.g)(r, t),
        Object(i.a)(t, "__sentry_wrapped__", r);
        try {
            Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
                get: ()=>t.name
            })
        } catch (t) {}
        return r
    }
    var Et = n(36);
    const St = ["fatal", "error", "warning", "log", "info", "debug"];
    function Ot(t) {
        return "warn" === t ? "warning" : St.includes(t) ? t : "log"
    }
    function jt(t) {
        if (!t)
            return {};
        const e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
        if (!e)
            return {};
        const n = e[6] || ""
          , r = e[8] || "";
        return {
            host: e[4],
            path: e[5],
            protocol: e[2],
            relative: e[5] + n + r
        }
    }
    const wt = "Breadcrumbs";
    class xt {
        static __initStatic() {
            this.id = wt
        }
        __init() {
            this.name = xt.id
        }
        constructor(t) {
            xt.prototype.__init.call(this),
            this.options = {
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0,
                ...t
            }
        }
        setupOnce() {
            this.options.console && Y("console", Tt),
            this.options.dom && Y("dom", function(t) {
                function e(e) {
                    let n, r = "object" == typeof t ? t.serializeAttribute : void 0;
                    "string" == typeof r && (r = [r]);
                    try {
                        n = e.event.target ? Object(Et.b)(e.event.target, r) : Object(Et.b)(e.event, r)
                    } catch (t) {
                        n = "<unknown>"
                    }
                    0 !== n.length && Object(f.a)().addBreadcrumb({
                        category: `ui.${e.name}`,
                        message: n
                    }, {
                        event: e.event,
                        name: e.name,
                        global: e.global
                    })
                }
                return e
            }(this.options.dom)),
            this.options.xhr && Y("xhr", Dt),
            this.options.fetch && Y("fetch", kt),
            this.options.history && Y("history", Rt)
        }
        addSentryBreadcrumb(t) {
            this.options.sentry && Object(f.a)().addBreadcrumb({
                category: "sentry." + ("transaction" === t.type ? "transaction" : "event"),
                event_id: t.event_id,
                level: t.level,
                message: Object(a.e)(t)
            }, {
                event: t
            })
        }
    }
    function Tt(t) {
        for (let e = 0; e < t.args.length; e++)
            if ("ref=Ref<" === t.args[e]) {
                t.args[e + 1] = "viewRef";
                break
            }
        const e = {
            category: "console",
            data: {
                arguments: t.args,
                logger: "console"
            },
            level: Ot(t.level),
            message: Object(u.a)(t.args, " ")
        };
        if ("assert" === t.level) {
            if (!1 !== t.args[0])
                return;
            e.message = `Assertion failed: ${Object(u.a)(t.args.slice(1), " ") || "console.assert"}`,
            e.data.arguments = t.args.slice(1)
        }
        Object(f.a)().addBreadcrumb(e, {
            input: t.args,
            level: t.level
        })
    }
    function Dt(t) {
        if (t.endTimestamp) {
            if (t.xhr.__sentry_own_request__)
                return;
            const {method: e, url: n, status_code: r, body: i} = t.xhr.__sentry_xhr__ || {};
            Object(f.a)().addBreadcrumb({
                category: "xhr",
                data: {
                    method: e,
                    url: n,
                    status_code: r
                },
                type: "http"
            }, {
                xhr: t.xhr,
                input: i
            })
        } else
            ;
    }
    function kt(t) {
        t.endTimestamp && (t.fetchData.url.match(/sentry_key/) && "POST" === t.fetchData.method || (t.error ? Object(f.a)().addBreadcrumb({
            category: "fetch",
            data: t.fetchData,
            level: "error",
            type: "http"
        }, {
            data: t.error,
            input: t.args
        }) : Object(f.a)().addBreadcrumb({
            category: "fetch",
            data: {
                ...t.fetchData,
                status_code: t.response.status
            },
            type: "http"
        }, {
            input: t.args,
            response: t.response
        })))
    }
    function Rt(t) {
        let e = t.from
          , n = t.to;
        const r = jt(gt.location.href);
        let i = jt(e);
        const o = jt(n);
        i.path || (i = r),
        r.protocol === o.protocol && r.host === o.host && (n = o.relative),
        r.protocol === i.protocol && r.host === i.host && (e = i.relative),
        Object(f.a)().addBreadcrumb({
            category: "navigation",
            data: {
                from: e,
                to: n
            }
        })
    }
    xt.__initStatic();
    class Nt extends st {
        constructor(t) {
            t._metadata = t._metadata || {},
            t._metadata.sdk = t._metadata.sdk || {
                name: "sentry.javascript.browser",
                packages: [{
                    name: "npm:@sentry/browser",
                    version: ct
                }],
                version: ct
            },
            super(t),
            t.sendClientReports && gt.document && gt.document.addEventListener("visibilitychange", (()=>{
                "hidden" === gt.document.visibilityState && this._flushOutcomes()
            }
            ))
        }
        eventFromException(t, e) {
            return function(t, e, n, r) {
                const i = ft(t, e, n && n.syntheticException || void 0, r);
                return Object(a.a)(i),
                i.level = "error",
                n && n.event_id && (i.event_id = n.event_id),
                Object(k.c)(i)
            }(this._options.stackParser, t, e, this._options.attachStacktrace)
        }
        eventFromMessage(t, e="info", n) {
            return function(t, e, n="info", r, i) {
                const o = pt(t, e, r && r.syntheticException || void 0, i);
                return o.level = n,
                r && r.event_id && (o.event_id = r.event_id),
                Object(k.c)(o)
            }(this._options.stackParser, t, e, n, this._options.attachStacktrace)
        }
        sendEvent(t, e) {
            const n = this.getIntegrationById(wt);
            Object(H.a)([n, "optionalAccess", t=>t.addSentryBreadcrumb, "optionalCall", e=>e(t)]),
            super.sendEvent(t, e)
        }
        _prepareEvent(t, e, n) {
            return t.platform = t.platform || "javascript",
            super._prepareEvent(t, e, n)
        }
        _flushOutcomes() {
            const t = this._clearOutcomes();
            if (0 === t.length)
                return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.c.log("No outcomes to send"));
            if (!this._dsn)
                return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.c.log("No dsn provided, will not send outcomes"));
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.c.log("Sending outcomes:", t);
            const e = O(this._dsn, this._options)
              , n = (r = t,
            W((i = this._options.tunnel && m(this._dsn)) ? {
                dsn: i
            } : {}, [[{
                type: "client_report"
            }, {
                timestamp: o || Object(et.a)(),
                discarded_events: r
            }]]));
            var r, i, o;
            try {
                const t = "[object Navigator]" === Object.prototype.toString.call(gt && gt.navigator);
                if (t && "function" == typeof gt.navigator.sendBeacon && !this._options.transportOptions) {
                    gt.navigator.sendBeacon.bind(gt.navigator)(e, V(n))
                } else
                    this._sendEnvelope(n)
            } catch (t) {
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.c.error(t)
            }
        }
    }
    const Ut = "?";
    function Bt(t, e, n, r) {
        const i = {
            filename: t,
            function: e,
            in_app: !0
        };
        return void 0 !== n && (i.lineno = n),
        void 0 !== r && (i.colno = r),
        i
    }
    const $t = /^\s*at (?:(.*\).*?|.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
      , Yt = /\((\S*)(?::(\d+))(?::(\d+))\)/
      , It = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i
      , Gt = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
      , Ct = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i
      , Pt = [[30, t=>{
        const e = $t.exec(t);
        if (e) {
            if (e[2] && 0 === e[2].indexOf("eval")) {
                const t = Yt.exec(e[2]);
                t && (e[2] = t[1],
                e[3] = t[2],
                e[4] = t[3])
            }
            const [t,n] = At(e[1] || Ut, e[2]);
            return Bt(n, t, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0)
        }
    }
    ], [50, t=>{
        const e = It.exec(t);
        if (e) {
            if (e[3] && e[3].indexOf(" > eval") > -1) {
                const t = Gt.exec(e[3]);
                t && (e[1] = e[1] || "eval",
                e[3] = t[1],
                e[4] = t[2],
                e[5] = "")
            }
            let t = e[3]
              , n = e[1] || Ut;
            return [n,t] = At(n, t),
            Bt(t, n, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
        }
    }
    ], [40, t=>{
        const e = Ct.exec(t);
        return e ? Bt(e[2], e[1] || Ut, +e[3], e[4] ? +e[4] : void 0) : void 0
    }
    ]]
      , Lt = Object(j.a)(...Pt)
      , At = (t,e)=>{
        const n = -1 !== t.indexOf("safari-extension")
          , r = -1 !== t.indexOf("safari-web-extension");
        return n || r ? [-1 !== t.indexOf("@") ? t.split("@")[0] : Ut, n ? `safari-extension:${e}` : `safari-web-extension:${e}`] : [t, e]
    }
      , Mt = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
    class qt {
        static __initStatic() {
            this.id = "TryCatch"
        }
        __init() {
            this.name = qt.id
        }
        constructor(t) {
            qt.prototype.__init.call(this),
            this._options = {
                XMLHttpRequest: !0,
                eventTarget: !0,
                requestAnimationFrame: !0,
                setInterval: !0,
                setTimeout: !0,
                ...t
            }
        }
        setupOnce() {
            this._options.setTimeout && Object(i.e)(gt, "setTimeout", Ft),
            this._options.setInterval && Object(i.e)(gt, "setInterval", Ft),
            this._options.requestAnimationFrame && Object(i.e)(gt, "requestAnimationFrame", Ht),
            this._options.XMLHttpRequest && "XMLHttpRequest"in gt && Object(i.e)(XMLHttpRequest.prototype, "send", zt);
            const t = this._options.eventTarget;
            if (t) {
                (Array.isArray(t) ? t : Mt).forEach(Wt)
            }
        }
    }
    function Ft(t) {
        return function(...e) {
            const n = e[0];
            return e[0] = vt(n, {
                mechanism: {
                    data: {
                        function: Object(j.b)(t)
                    },
                    handled: !0,
                    type: "instrument"
                }
            }),
            t.apply(this, e)
        }
    }
    function Ht(t) {
        return function(e) {
            return t.apply(this, [vt(e, {
                mechanism: {
                    data: {
                        function: "requestAnimationFrame",
                        handler: Object(j.b)(t)
                    },
                    handled: !0,
                    type: "instrument"
                }
            })])
        }
    }
    function zt(t) {
        return function(...e) {
            const n = this;
            return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((t=>{
                t in n && "function" == typeof n[t] && Object(i.e)(n, t, (function(e) {
                    const n = {
                        mechanism: {
                            data: {
                                function: t,
                                handler: Object(j.b)(e)
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }
                      , r = Object(i.f)(e);
                    return r && (n.mechanism.data.handler = Object(j.b)(r)),
                    vt(e, n)
                }
                ))
            }
            )),
            t.apply(this, e)
        }
    }
    function Wt(t) {
        const e = gt
          , n = e[t] && e[t].prototype;
        n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (Object(i.e)(n, "addEventListener", (function(e) {
            return function(n, r, i) {
                try {
                    "function" == typeof r.handleEvent && (r.handleEvent = vt(r.handleEvent, {
                        mechanism: {
                            data: {
                                function: "handleEvent",
                                handler: Object(j.b)(r),
                                target: t
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }))
                } catch (t) {}
                return e.apply(this, [n, vt(r, {
                    mechanism: {
                        data: {
                            function: "addEventListener",
                            handler: Object(j.b)(r),
                            target: t
                        },
                        handled: !0,
                        type: "instrument"
                    }
                }), i])
            }
        }
        )),
        Object(i.e)(n, "removeEventListener", (function(t) {
            return function(e, n, r) {
                const i = n;
                try {
                    const n = i && i.__sentry_wrapped__;
                    n && t.call(this, e, n, r)
                } catch (t) {}
                return t.call(this, e, i, r)
            }
        }
        )))
    }
    qt.__initStatic();
    class Jt {
        static __initStatic() {
            this.id = "GlobalHandlers"
        }
        __init() {
            this.name = Jt.id
        }
        __init2() {
            this._installFunc = {
                onerror: Xt,
                onunhandledrejection: Kt
            }
        }
        constructor(t) {
            Jt.prototype.__init.call(this),
            Jt.prototype.__init2.call(this),
            this._options = {
                onerror: !0,
                onunhandledrejection: !0,
                ...t
            }
        }
        setupOnce() {
            Error.stackTraceLimit = 50;
            const t = this._options;
            for (const n in t) {
                const r = this._installFunc[n];
                r && t[n] && (e = n,
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.c.log(`Global Handler attached: ${e}`),
                r(),
                this._installFunc[n] = void 0)
            }
            var e
        }
    }
    function Xt() {
        Y("error", (t=>{
            const [e,n,r] = Zt();
            if (!e.getIntegration(Jt))
                return;
            const {msg: i, url: o, line: s, column: c, error: a} = t;
            if (bt() || a && a.__sentry_own_request__)
                return;
            const u = void 0 === a && Object(R.l)(i) ? function(t, e, n, r) {
                const i = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
                let o = Object(R.e)(t) ? t.message : t
                  , s = "Error";
                const c = o.match(i);
                c && (s = c[1],
                o = c[2]);
                const a = {
                    exception: {
                        values: [{
                            type: s,
                            value: o
                        }]
                    }
                };
                return Vt(a, e, n, r)
            }(i, o, s, c) : Vt(ft(n, a || i, void 0, r, !1), o, s, c);
            u.level = "error",
            Qt(e, a, u, "onerror")
        }
        ))
    }
    function Kt() {
        Y("unhandledrejection", (t=>{
            const [e,n,r] = Zt();
            if (!e.getIntegration(Jt))
                return;
            let i = t;
            try {
                "reason"in t ? i = t.reason : "detail"in t && "reason"in t.detail && (i = t.detail.reason)
            } catch (t) {}
            if (bt() || i && i.__sentry_own_request__)
                return !0;
            const o = Object(R.j)(i) ? {
                exception: {
                    values: [{
                        type: "UnhandledRejection",
                        value: `Non-Error promise rejection captured with value: ${String(i)}`
                    }]
                }
            } : ft(n, i, void 0, r, !0);
            o.level = "error",
            Qt(e, i, o, "onunhandledrejection")
        }
        ))
    }
    function Vt(t, e, n, r) {
        const i = t.exception = t.exception || {}
          , o = i.values = i.values || []
          , s = o[0] = o[0] || {}
          , c = s.stacktrace = s.stacktrace || {}
          , a = c.frames = c.frames || []
          , u = isNaN(parseInt(r, 10)) ? void 0 : r
          , l = isNaN(parseInt(n, 10)) ? void 0 : n
          , d = Object(R.l)(e) && e.length > 0 ? e : Object(Et.a)();
        return 0 === a.length && a.push({
            colno: u,
            filename: d,
            function: "?",
            in_app: !0,
            lineno: l
        }),
        t
    }
    function Qt(t, e, n, r) {
        Object(a.a)(n, {
            handled: !1,
            type: r
        }),
        t.captureEvent(n, {
            originalException: e
        })
    }
    function Zt() {
        const t = Object(f.a)()
          , e = t.getClient()
          , n = e && e.getOptions() || {
            stackParser: ()=>[],
            attachStacktrace: !1
        };
        return [t, n.stackParser, n.attachStacktrace]
    }
    Jt.__initStatic();
    class te {
        static __initStatic() {
            this.id = "LinkedErrors"
        }
        __init() {
            this.name = te.id
        }
        constructor(t={}) {
            te.prototype.__init.call(this),
            this._key = t.key || "cause",
            this._limit = t.limit || 5
        }
        setupOnce() {
            const t = Object(f.a)().getClient();
            t && Object(p.b)(((e,n)=>{
                const r = Object(f.a)().getIntegration(te);
                return r ? function(t, e, n, r, i) {
                    if (!(r.exception && r.exception.values && i && Object(R.g)(i.originalException, Error)))
                        return r;
                    const o = ee(t, n, i.originalException, e);
                    return r.exception.values = [...o, ...r.exception.values],
                    r
                }(t.getOptions().stackParser, r._key, r._limit, e, n) : e
            }
            ))
        }
    }
    function ee(t, e, n, r, i=[]) {
        if (!Object(R.g)(n[r], Error) || i.length + 1 >= e)
            return i;
        const o = at(t, n[r]);
        return ee(t, e, n[r], r, [o, ...i])
    }
    te.__initStatic();
    class ne {
        constructor() {
            ne.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "Dedupe"
        }
        __init() {
            this.name = ne.id
        }
        setupOnce(t, e) {
            const n = t=>{
                const n = e().getIntegration(ne);
                if (n) {
                    try {
                        if (function(t, e) {
                            if (!e)
                                return !1;
                            if (function(t, e) {
                                const n = t.message
                                  , r = e.message;
                                if (!n && !r)
                                    return !1;
                                if (n && !r || !n && r)
                                    return !1;
                                if (n !== r)
                                    return !1;
                                if (!ie(t, e))
                                    return !1;
                                if (!re(t, e))
                                    return !1;
                                return !0
                            }(t, e))
                                return !0;
                            if (function(t, e) {
                                const n = oe(e)
                                  , r = oe(t);
                                if (!n || !r)
                                    return !1;
                                if (n.type !== r.type || n.value !== r.value)
                                    return !1;
                                if (!ie(t, e))
                                    return !1;
                                if (!re(t, e))
                                    return !1;
                                return !0
                            }(t, e))
                                return !0;
                            return !1
                        }(t, n._previousEvent))
                            return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.c.warn("Event dropped due to being a duplicate of previously captured event."),
                            null
                    } catch (e) {
                        return n._previousEvent = t
                    }
                    return n._previousEvent = t
                }
                return t
            }
            ;
            n.id = this.name,
            t(n)
        }
    }
    function re(t, e) {
        let n = se(t)
          , r = se(e);
        if (!n && !r)
            return !0;
        if (n && !r || !n && r)
            return !1;
        if (r.length !== n.length)
            return !1;
        for (let t = 0; t < r.length; t++) {
            const e = r[t]
              , i = n[t];
            if (e.filename !== i.filename || e.lineno !== i.lineno || e.colno !== i.colno || e.function !== i.function)
                return !1
        }
        return !0
    }
    function ie(t, e) {
        let n = t.fingerprint
          , r = e.fingerprint;
        if (!n && !r)
            return !0;
        if (n && !r || !n && r)
            return !1;
        try {
            return !(n.join("") !== r.join(""))
        } catch (t) {
            return !1
        }
    }
    function oe(t) {
        return t.exception && t.exception.values && t.exception.values[0]
    }
    function se(t) {
        const e = t.exception;
        if (e)
            try {
                return e.values[0].stacktrace.frames
            } catch (t) {
                return
            }
    }
    ne.__initStatic();
    class ce {
        constructor() {
            ce.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "HttpContext"
        }
        __init() {
            this.name = ce.id
        }
        setupOnce() {
            Object(p.b)((t=>{
                if (Object(f.a)().getIntegration(ce)) {
                    if (!gt.navigator && !gt.location && !gt.document)
                        return t;
                    const e = t.request && t.request.url || gt.location && gt.location.href
                      , {referrer: n} = gt.document || {}
                      , {userAgent: r} = gt.navigator || {}
                      , i = {
                        ...e && {
                            url: e
                        },
                        headers: {
                            ...t.request && t.request.headers,
                            ...n && {
                                Referer: n
                            },
                            ...r && {
                                "User-Agent": r
                            }
                        }
                    };
                    return {
                        ...t,
                        request: i
                    }
                }
                return t
            }
            ))
        }
    }
    function ae(t) {
        const e = [];
        function n(t) {
            return e.splice(e.indexOf(t), 1)[0]
        }
        return {
            $: e,
            add: function(r) {
                if (!(void 0 === t || e.length < t))
                    return Object(k.b)(new y("Not adding Promise because buffer limit was reached."));
                const i = r();
                return -1 === e.indexOf(i) && e.push(i),
                i.then((()=>n(i))).then(null, (()=>n(i).then(null, (()=>{}
                )))),
                i
            },
            drain: function(t) {
                return new k.a(((n,r)=>{
                    let i = e.length;
                    if (!i)
                        return n(!0);
                    const o = setTimeout((()=>{
                        t && t > 0 && n(!1)
                    }
                    ), t);
                    e.forEach((t=>{
                        Object(k.c)(t).then((()=>{
                            --i || (clearTimeout(o),
                            n(!0))
                        }
                        ), r)
                    }
                    ))
                }
                ))
            }
        }
    }
    ce.__initStatic();
    function ue(t, {statusCode: e, headers: n}, r=Date.now()) {
        const i = {
            ...t
        }
          , o = n && n["x-sentry-rate-limits"]
          , s = n && n["retry-after"];
        if (o)
            for (const t of o.trim().split(",")) {
                const [e,n] = t.split(":", 2)
                  , o = parseInt(e, 10)
                  , s = 1e3 * (isNaN(o) ? 60 : o);
                if (n)
                    for (const t of n.split(";"))
                        i[t] = r + s;
                else
                    i.all = r + s
            }
        else
            s ? i.all = r + function(t, e=Date.now()) {
                const n = parseInt(`${t}`, 10);
                if (!isNaN(n))
                    return 1e3 * n;
                const r = Date.parse(`${t}`);
                return isNaN(r) ? 6e4 : r - e
            }(s, r) : 429 === e && (i.all = r + 6e4);
        return i
    }
    function le(t, e, n=ae(t.bufferSize || 30)) {
        let r = {};
        return {
            send: function(i) {
                const o = [];
                if (X(i, ((e,n)=>{
                    const i = tt(n);
                    if (function(t, e, n=Date.now()) {
                        return function(t, e) {
                            return t[e] || t.all || 0
                        }(t, e) > n
                    }(r, i)) {
                        const r = de(e, n);
                        t.recordDroppedEvent("ratelimit_backoff", i, r)
                    } else
                        o.push(e)
                }
                )),
                0 === o.length)
                    return Object(k.c)();
                const s = W(i[0], o)
                  , a = e=>{
                    X(s, ((n,r)=>{
                        const i = de(n, r);
                        t.recordDroppedEvent(e, tt(r), i)
                    }
                    ))
                }
                ;
                return n.add((()=>e({
                    body: V(s, t.textEncoder)
                }).then((t=>{
                    void 0 !== t.statusCode && (t.statusCode < 200 || t.statusCode >= 300) && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.c.warn(`Sentry responded with status code ${t.statusCode} to sent event.`),
                    r = ue(r, t)
                }
                ), (t=>{
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.c.error("Failed while sending event:", t),
                    a("network_error")
                }
                )))).then((t=>t), (t=>{
                    if (t instanceof y)
                        return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.c.error("Skipped sending event because buffer is full."),
                        a("queue_overflow"),
                        Object(k.c)();
                    throw t
                }
                ))
            },
            flush: t=>n.drain(t)
        }
    }
    function de(t, e) {
        if ("event" === e || "transaction" === e)
            return Array.isArray(t) ? t[1] : void 0
    }
    let _e;
    function fe(t, e=function() {
        if (_e)
            return _e;
        if (D(gt.fetch))
            return _e = gt.fetch.bind(gt);
        const t = gt.document;
        let e = gt.fetch;
        if (t && "function" == typeof t.createElement)
            try {
                const n = t.createElement("iframe");
                n.hidden = !0,
                t.head.appendChild(n);
                const r = n.contentWindow;
                r && r.fetch && (e = r.fetch),
                t.head.removeChild(n)
            } catch (t) {
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.c.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
            }
        return _e = e.bind(gt)
    }()) {
        return le(t, (function(n) {
            const r = {
                body: n.body,
                method: "POST",
                referrerPolicy: "origin",
                headers: t.headers,
                keepalive: n.body.length <= 65536,
                ...t.fetchOptions
            };
            try {
                return e(t.url, r).then((t=>({
                    statusCode: t.status,
                    headers: {
                        "x-sentry-rate-limits": t.headers.get("X-Sentry-Rate-Limits"),
                        "retry-after": t.headers.get("Retry-After")
                    }
                })))
            } catch (t) {
                return _e = void 0,
                Object(k.b)(t)
            }
        }
        ))
    }
    function pe(t) {
        return le(t, (function(e) {
            return new k.a(((n,r)=>{
                const i = new XMLHttpRequest;
                i.onerror = r,
                i.onreadystatechange = ()=>{
                    4 === i.readyState && n({
                        statusCode: i.status,
                        headers: {
                            "x-sentry-rate-limits": i.getResponseHeader("X-Sentry-Rate-Limits"),
                            "retry-after": i.getResponseHeader("Retry-After")
                        }
                    })
                }
                ,
                i.open("POST", t.url);
                for (const e in t.headers)
                    Object.prototype.hasOwnProperty.call(t.headers, e) && i.setRequestHeader(e, t.headers[e]);
                i.send(e.body)
            }
            ))
        }
        ))
    }
    const he = [new r.InboundFilters, new r.FunctionToString, new qt, new xt, new Jt, new te, new ne, new ce];
    function ge(t={}) {
        void 0 === t.defaultIntegrations && (t.defaultIntegrations = he),
        void 0 === t.release && ("string" == typeof __SENTRY_RELEASE__ && (t.release = __SENTRY_RELEASE__),
        gt.SENTRY_RELEASE && gt.SENTRY_RELEASE.id && (t.release = gt.SENTRY_RELEASE.id)),
        void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0),
        void 0 === t.sendClientReports && (t.sendClientReports = !0);
        const e = {
            ...t,
            stackParser: Object(j.c)(t.stackParser || Lt),
            integrations: g(t),
            transport: t.transport || (T() ? fe : pe)
        };
        !function(t, e) {
            !0 === e.debug && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? c.c.enable() : console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."));
            const n = Object(f.a)()
              , r = n.getScope();
            r && r.update(e.initialScope);
            const i = new t(e);
            n.bindClient(i)
        }(Nt, e),
        t.autoSessionTracking && function() {
            if (void 0 === gt.document)
                return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.c.warn("Session tracking in non-browser environment with @sentry/browser is not supported."));
            const t = Object(f.a)();
            if (!t.captureSession)
                return;
            ye(t),
            Y("history", (({from: t, to: e})=>{
                void 0 !== t && t !== e && ye(Object(f.a)())
            }
            ))
        }()
    }
    function ye(t) {
        t.startSession({
            ignoreDuration: !0
        }),
        t.captureSession()
    }
    document.addEventListener("DOMContentLoaded", (()=>{
        let t;
        switch (window.location.hostname) {
        case "river.com":
            t = "production";
            break;
        case "web.river.engineering":
            t = "staging";
            break;
        case "web.dev.river.engineering":
            t = "development";
            break;
        case "web.dev2.river.engineering":
            t = "development2"
        }
        ge({
            dsn: "https://41d8c4bbadac4b5abbe3e4a7c6999452@o1382860.ingest.sentry.io/6698596",
            environment: t
        })
    }
    ))
}
]);
//# sourceMappingURL=./sentry.js-c4150247c1f954df3bb0647cdd348c1f.map
