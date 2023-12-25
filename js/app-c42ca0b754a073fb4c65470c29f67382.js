/*! For license information please see app.js.LICENSE.txt */
!function(e) {
    var t = {};
    function n(i) {
        if (t[i])
            return t[i].exports;
        var r = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(r.exports, r, r.exports, n),
        r.l = !0,
        r.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var i = Object.create(null);
        if (n.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var r in e)
                n.d(i, r, function(t) {
                    return e[t]
                }
                .bind(null, r));
        return i
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 52)
}([, , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return a
    }
    )),
    n.d(t, "b", (function() {
        return c
    }
    )),
    n.d(t, "c", (function() {
        return f
    }
    )),
    n.d(t, "d", (function() {
        return r
    }
    )),
    n.d(t, "e", (function() {
        return s
    }
    )),
    n.d(t, "f", (function() {
        return d
    }
    )),
    n.d(t, "g", (function() {
        return b
    }
    )),
    n.d(t, "h", (function() {
        return v
    }
    )),
    n.d(t, "i", (function() {
        return h
    }
    )),
    n.d(t, "j", (function() {
        return u
    }
    )),
    n.d(t, "k", (function() {
        return p
    }
    )),
    n.d(t, "l", (function() {
        return l
    }
    )),
    n.d(t, "m", (function() {
        return g
    }
    )),
    n.d(t, "n", (function() {
        return m
    }
    ));
    const i = Object.prototype.toString;
    function r(e) {
        switch (i.call(e)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
            return !0;
        default:
            return b(e, Error)
        }
    }
    function o(e, t) {
        return i.call(e) === `[object ${t}]`
    }
    function s(e) {
        return o(e, "ErrorEvent")
    }
    function a(e) {
        return o(e, "DOMError")
    }
    function c(e) {
        return o(e, "DOMException")
    }
    function l(e) {
        return o(e, "String")
    }
    function u(e) {
        return null === e || "object" != typeof e && "function" != typeof e
    }
    function h(e) {
        return o(e, "Object")
    }
    function d(e) {
        return "undefined" != typeof Event && b(e, Event)
    }
    function f(e) {
        return "undefined" != typeof Element && b(e, Element)
    }
    function p(e) {
        return o(e, "RegExp")
    }
    function m(e) {
        return Boolean(e && e.then && "function" == typeof e.then)
    }
    function g(e) {
        return h(e) && "nativeEvent"in e && "preventDefault"in e && "stopPropagation"in e
    }
    function v(e) {
        return "number" == typeof e && e != e
    }
    function b(e, t) {
        try {
            return e instanceof t
        } catch (e) {
            return !1
        }
    }
}
, , function(e, t, n) {
    "use strict";
    (function(e) {
        function i(e) {
            return e && e.Math == Math ? e : void 0
        }
        n.d(t, "a", (function() {
            return r
        }
        )),
        n.d(t, "b", (function() {
            return o
        }
        )),
        n.d(t, "c", (function() {
            return s
        }
        ));
        const r = "object" == typeof globalThis && i(globalThis) || "object" == typeof window && i(window) || "object" == typeof self && i(self) || "object" == typeof e && i(e) || function() {
            return this
        }() || {};
        function o() {
            return r
        }
        function s(e, t, n) {
            const i = n || r
              , o = i.__SENTRY__ = i.__SENTRY__ || {};
            return o[e] || (o[e] = t())
        }
    }
    ).call(this, n(31))
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return p
    }
    ));
    var i = n(18)
      , r = n(15)
      , o = n(4)
      , s = n(21)
      , a = n(13)
      , c = n(9);
    const l = "00000000000000000000000000000000"
      , u = 100;
    class h {
        __init() {
            this._stack = [{}]
        }
        constructor(e, t=new a.a, n=4) {
            this._version = n,
            h.prototype.__init.call(this),
            this.getStackTop().scope = t,
            e && this.bindClient(e)
        }
        isOlderThan(e) {
            return this._version < e
        }
        bindClient(e) {
            this.getStackTop().client = e,
            e && e.setupIntegrations && e.setupIntegrations()
        }
        pushScope() {
            const e = a.a.clone(this.getScope());
            return this.getStack().push({
                client: this.getClient(),
                scope: e
            }),
            e
        }
        popScope() {
            return !(this.getStack().length <= 1) && !!this.getStack().pop()
        }
        withScope(e) {
            const t = this.pushScope();
            try {
                e(t)
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
        captureException(e, t) {
            const n = new Error("Sentry syntheticException");
            return this._lastEventId = this._withClient(((i,r)=>i.captureException(e, {
                originalException: e,
                syntheticException: n,
                ...t
            }, r))) || l,
            this._lastEventId
        }
        captureMessage(e, t, n) {
            const i = new Error(e);
            return this._lastEventId = this._withClient(((r,o)=>r.captureMessage(e, t, {
                originalException: e,
                syntheticException: i,
                ...n
            }, o))) || l,
            this._lastEventId
        }
        captureEvent(e, t) {
            const n = this._withClient(((n,i)=>n.captureEvent(e, {
                ...t
            }, i))) || l;
            return "transaction" !== e.type && (this._lastEventId = n),
            n
        }
        lastEventId() {
            return this._lastEventId
        }
        addBreadcrumb(e, t) {
            const {scope: n, client: o} = this.getStackTop();
            if (!n || !o)
                return;
            const {beforeBreadcrumb: s=null, maxBreadcrumbs: a=u} = o.getOptions && o.getOptions() || {};
            if (a <= 0)
                return;
            const c = {
                timestamp: Object(i.a)(),
                ...e
            }
              , l = s ? Object(r.b)((()=>s(c, t))) : c;
            null !== l && n.addBreadcrumb(l, a)
        }
        setUser(e) {
            const t = this.getScope();
            t && t.setUser(e)
        }
        setTags(e) {
            const t = this.getScope();
            t && t.setTags(e)
        }
        setExtras(e) {
            const t = this.getScope();
            t && t.setExtras(e)
        }
        setTag(e, t) {
            const n = this.getScope();
            n && n.setTag(e, t)
        }
        setExtra(e, t) {
            const n = this.getScope();
            n && n.setExtra(e, t)
        }
        setContext(e, t) {
            const n = this.getScope();
            n && n.setContext(e, t)
        }
        configureScope(e) {
            const {scope: t, client: n} = this.getStackTop();
            t && n && e(t)
        }
        run(e) {
            const t = f(this);
            try {
                e(this)
            } finally {
                f(t)
            }
        }
        getIntegration(e) {
            const t = this.getClient();
            if (!t)
                return null;
            try {
                return t.getIntegration(e)
            } catch (t) {
                return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.c.warn(`Cannot retrieve integration ${e.id} from the current Hub`),
                null
            }
        }
        startTransaction(e, t) {
            return this._callExtensionMethod("startTransaction", e, t)
        }
        traceHeaders() {
            return this._callExtensionMethod("traceHeaders")
        }
        captureSession(e=!1) {
            if (e)
                return this.endSession();
            this._sendSessionUpdate()
        }
        endSession() {
            const e = this.getStackTop()
              , t = e && e.scope
              , n = t && t.getSession();
            n && Object(c.a)(n),
            this._sendSessionUpdate(),
            t && t.setSession()
        }
        startSession(e) {
            const {scope: t, client: n} = this.getStackTop()
              , {release: i, environment: r} = n && n.getOptions() || {}
              , {userAgent: s} = o.a.navigator || {}
              , a = Object(c.b)({
                release: i,
                environment: r,
                ...t && {
                    user: t.getUser()
                },
                ...s && {
                    userAgent: s
                },
                ...e
            });
            if (t) {
                const e = t.getSession && t.getSession();
                e && "ok" === e.status && Object(c.c)(e, {
                    status: "exited"
                }),
                this.endSession(),
                t.setSession(a)
            }
            return a
        }
        shouldSendDefaultPii() {
            const e = this.getClient()
              , t = e && e.getOptions();
            return Boolean(t && t.sendDefaultPii)
        }
        _sendSessionUpdate() {
            const {scope: e, client: t} = this.getStackTop();
            if (!e)
                return;
            const n = e.getSession();
            n && t && t.captureSession && t.captureSession(n)
        }
        _withClient(e) {
            const {scope: t, client: n} = this.getStackTop();
            return n && e(n, t)
        }
        _callExtensionMethod(e, ...t) {
            const n = d().__SENTRY__;
            if (n && n.extensions && "function" == typeof n.extensions[e])
                return n.extensions[e].apply(this, t);
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.c.warn(`Extension method ${e} couldn't be found, doing nothing.`)
        }
    }
    function d() {
        return o.a.__SENTRY__ = o.a.__SENTRY__ || {
            extensions: {},
            hub: void 0
        },
        o.a
    }
    function f(e) {
        const t = d()
          , n = g(t);
        return v(t, e),
        n
    }
    function p() {
        const e = d();
        return m(e) && !g(e).isOlderThan(4) || v(e, new h),
        Object(s.b)() ? function(e) {
            try {
                const t = d().__SENTRY__
                  , n = t && t.extensions && t.extensions.domain && t.extensions.domain.active;
                if (!n)
                    return g(e);
                if (!m(n) || g(n).isOlderThan(4)) {
                    const t = g(e).getStackTop();
                    v(n, new h(t.client,a.a.clone(t.scope)))
                }
                return g(n)
            } catch (t) {
                return g(e)
            }
        }(e) : g(e)
    }
    function m(e) {
        return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
    }
    function g(e) {
        return Object(o.c)("hub", (()=>new h), e)
    }
    function v(e, t) {
        if (!e)
            return !1;
        return (e.__SENTRY__ = e.__SENTRY__ || {}).hub = t,
        !0
    }
}
, , , function(e, t, n) {
    "use strict";
    function i(e, t="name", n="content") {
        const i = document.querySelector(`[${t}~=${e}]`);
        return i ? i[n] : null
    }
    n.d(t, "a", (function() {
        return i
    }
    ))
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return c
    }
    )),
    n.d(t, "b", (function() {
        return s
    }
    )),
    n.d(t, "c", (function() {
        return a
    }
    ));
    var i = n(18)
      , r = n(24)
      , o = n(10);
    function s(e) {
        const t = Object(i.b)()
          , n = {
            sid: Object(r.f)(),
            init: !0,
            timestamp: t,
            started: t,
            duration: 0,
            status: "ok",
            errors: 0,
            ignoreDuration: !1,
            toJSON: ()=>function(e) {
                return Object(o.c)({
                    sid: `${e.sid}`,
                    init: e.init,
                    started: new Date(1e3 * e.started).toISOString(),
                    timestamp: new Date(1e3 * e.timestamp).toISOString(),
                    status: e.status,
                    errors: e.errors,
                    did: "number" == typeof e.did || "string" == typeof e.did ? `${e.did}` : void 0,
                    duration: e.duration,
                    attrs: {
                        release: e.release,
                        environment: e.environment,
                        ip_address: e.ipAddress,
                        user_agent: e.userAgent
                    }
                })
            }(n)
        };
        return e && a(n, e),
        n
    }
    function a(e, t={}) {
        if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
        e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)),
        e.timestamp = t.timestamp || Object(i.b)(),
        t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
        t.sid && (e.sid = 32 === t.sid.length ? t.sid : Object(r.f)()),
        void 0 !== t.init && (e.init = t.init),
        !e.did && t.did && (e.did = `${t.did}`),
        "number" == typeof t.started && (e.started = t.started),
        e.ignoreDuration)
            e.duration = void 0;
        else if ("number" == typeof t.duration)
            e.duration = t.duration;
        else {
            const t = e.timestamp - e.started;
            e.duration = t >= 0 ? t : 0
        }
        t.release && (e.release = t.release),
        t.environment && (e.environment = t.environment),
        !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
        !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
        "number" == typeof t.errors && (e.errors = t.errors),
        t.status && (e.status = t.status)
    }
    function c(e, t) {
        let n = {};
        t ? n = {
            status: t
        } : "ok" === e.status && (n = {
            status: "exited"
        }),
        a(e, n)
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return a
    }
    )),
    n.d(t, "b", (function() {
        return h
    }
    )),
    n.d(t, "c", (function() {
        return m
    }
    )),
    n.d(t, "d", (function() {
        return p
    }
    )),
    n.d(t, "e", (function() {
        return s
    }
    )),
    n.d(t, "f", (function() {
        return l
    }
    )),
    n.d(t, "g", (function() {
        return c
    }
    )),
    n.d(t, "h", (function() {
        return u
    }
    ));
    var i = n(36)
      , r = n(2)
      , o = n(12);
    function s(e, t, n) {
        if (!(t in e))
            return;
        const i = e[t]
          , r = n(i);
        if ("function" == typeof r)
            try {
                c(r, i)
            } catch (e) {}
        e[t] = r
    }
    function a(e, t, n) {
        Object.defineProperty(e, t, {
            value: n,
            writable: !0,
            configurable: !0
        })
    }
    function c(e, t) {
        const n = t.prototype || {};
        e.prototype = t.prototype = n,
        a(e, "__sentry_original__", t)
    }
    function l(e) {
        return e.__sentry_original__
    }
    function u(e) {
        return Object.keys(e).map((t=>`${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`)).join("&")
    }
    function h(e) {
        if (Object(r.d)(e))
            return {
                message: e.message,
                name: e.name,
                stack: e.stack,
                ...f(e)
            };
        if (Object(r.f)(e)) {
            const t = {
                type: e.type,
                target: d(e.target),
                currentTarget: d(e.currentTarget),
                ...f(e)
            };
            return "undefined" != typeof CustomEvent && Object(r.g)(e, CustomEvent) && (t.detail = e.detail),
            t
        }
        return e
    }
    function d(e) {
        try {
            return Object(r.c)(e) ? Object(i.b)(e) : Object.prototype.toString.call(e)
        } catch (e) {
            return "<unknown>"
        }
    }
    function f(e) {
        if ("object" == typeof e && null !== e) {
            const t = {};
            for (const n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t
        }
        return {}
    }
    function p(e, t=40) {
        const n = Object.keys(h(e));
        if (n.sort(),
        !n.length)
            return "[object has no keys]";
        if (n[0].length >= t)
            return Object(o.d)(n[0], t);
        for (let e = n.length; e > 0; e--) {
            const i = n.slice(0, e).join(", ");
            if (!(i.length > t))
                return e === n.length ? i : Object(o.d)(i, t)
        }
        return ""
    }
    function m(e) {
        return g(e, new Map)
    }
    function g(e, t) {
        if (Object(r.i)(e)) {
            const n = t.get(e);
            if (void 0 !== n)
                return n;
            const i = {};
            t.set(e, i);
            for (const n of Object.keys(e))
                void 0 !== e[n] && (i[n] = g(e[n], t));
            return i
        }
        if (Array.isArray(e)) {
            const n = t.get(e);
            if (void 0 !== n)
                return n;
            const i = [];
            return t.set(e, i),
            e.forEach((e=>{
                i.push(g(e, t))
            }
            )),
            i
        }
        return e
    }
}
, , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return s
    }
    )),
    n.d(t, "b", (function() {
        return o
    }
    )),
    n.d(t, "c", (function() {
        return a
    }
    )),
    n.d(t, "d", (function() {
        return r
    }
    ));
    var i = n(2);
    function r(e, t=0) {
        return "string" != typeof e || 0 === t || e.length <= t ? e : `${e.substr(0, t)}...`
    }
    function o(e, t) {
        let n = e;
        const i = n.length;
        if (i <= 150)
            return n;
        t > i && (t = i);
        let r = Math.max(t - 60, 0);
        r < 5 && (r = 0);
        let o = Math.min(r + 140, i);
        return o > i - 5 && (o = i),
        o === i && (r = Math.max(o - 140, 0)),
        n = n.slice(r, o),
        r > 0 && (n = `'{snip} ${n}`),
        o < i && (n += " {snip}"),
        n
    }
    function s(e, t) {
        if (!Array.isArray(e))
            return "";
        const n = [];
        for (let t = 0; t < e.length; t++) {
            const i = e[t];
            try {
                n.push(String(i))
            } catch (e) {
                n.push("[value cannot be serialized]")
            }
        }
        return n.join(t)
    }
    function a(e, t=[], n=!1) {
        return t.some((t=>function(e, t, n=!1) {
            return !!Object(i.l)(e) && (Object(i.k)(t) ? t.test(e) : !!Object(i.l)(t) && (n ? e === t : e.includes(t)))
        }(e, t, n)))
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return u
    }
    )),
    n.d(t, "b", (function() {
        return d
    }
    ));
    var i = n(2)
      , r = n(18)
      , o = n(28)
      , s = n(15)
      , a = n(24)
      , c = n(4)
      , l = n(9);
    class u {
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
        static clone(e) {
            const t = new u;
            return e && (t._breadcrumbs = [...e._breadcrumbs],
            t._tags = {
                ...e._tags
            },
            t._extra = {
                ...e._extra
            },
            t._contexts = {
                ...e._contexts
            },
            t._user = e._user,
            t._level = e._level,
            t._span = e._span,
            t._session = e._session,
            t._transactionName = e._transactionName,
            t._fingerprint = e._fingerprint,
            t._eventProcessors = [...e._eventProcessors],
            t._requestSession = e._requestSession,
            t._attachments = [...e._attachments],
            t._sdkProcessingMetadata = {
                ...e._sdkProcessingMetadata
            }),
            t
        }
        addScopeListener(e) {
            this._scopeListeners.push(e)
        }
        addEventProcessor(e) {
            return this._eventProcessors.push(e),
            this
        }
        setUser(e) {
            return this._user = e || {},
            this._session && Object(l.c)(this._session, {
                user: e
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
        setRequestSession(e) {
            return this._requestSession = e,
            this
        }
        setTags(e) {
            return this._tags = {
                ...this._tags,
                ...e
            },
            this._notifyScopeListeners(),
            this
        }
        setTag(e, t) {
            return this._tags = {
                ...this._tags,
                [e]: t
            },
            this._notifyScopeListeners(),
            this
        }
        setExtras(e) {
            return this._extra = {
                ...this._extra,
                ...e
            },
            this._notifyScopeListeners(),
            this
        }
        setExtra(e, t) {
            return this._extra = {
                ...this._extra,
                [e]: t
            },
            this._notifyScopeListeners(),
            this
        }
        setFingerprint(e) {
            return this._fingerprint = e,
            this._notifyScopeListeners(),
            this
        }
        setLevel(e) {
            return this._level = e,
            this._notifyScopeListeners(),
            this
        }
        setTransactionName(e) {
            return this._transactionName = e,
            this._notifyScopeListeners(),
            this
        }
        setContext(e, t) {
            return null === t ? delete this._contexts[e] : this._contexts[e] = t,
            this._notifyScopeListeners(),
            this
        }
        setSpan(e) {
            return this._span = e,
            this._notifyScopeListeners(),
            this
        }
        getSpan() {
            return this._span
        }
        getTransaction() {
            const e = this.getSpan();
            return e && e.transaction
        }
        setSession(e) {
            return e ? this._session = e : delete this._session,
            this._notifyScopeListeners(),
            this
        }
        getSession() {
            return this._session
        }
        update(e) {
            if (!e)
                return this;
            if ("function" == typeof e) {
                const t = e(this);
                return t instanceof u ? t : this
            }
            return e instanceof u ? (this._tags = {
                ...this._tags,
                ...e._tags
            },
            this._extra = {
                ...this._extra,
                ...e._extra
            },
            this._contexts = {
                ...this._contexts,
                ...e._contexts
            },
            e._user && Object.keys(e._user).length && (this._user = e._user),
            e._level && (this._level = e._level),
            e._fingerprint && (this._fingerprint = e._fingerprint),
            e._requestSession && (this._requestSession = e._requestSession)) : Object(i.i)(e) && (this._tags = {
                ...this._tags,
                ...e.tags
            },
            this._extra = {
                ...this._extra,
                ...e.extra
            },
            this._contexts = {
                ...this._contexts,
                ...e.contexts
            },
            e.user && (this._user = e.user),
            e.level && (this._level = e.level),
            e.fingerprint && (this._fingerprint = e.fingerprint),
            e.requestSession && (this._requestSession = e.requestSession)),
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
        addBreadcrumb(e, t) {
            const n = "number" == typeof t ? t : 100;
            if (n <= 0)
                return this;
            const i = {
                timestamp: Object(r.a)(),
                ...e
            };
            return this._breadcrumbs = [...this._breadcrumbs, i].slice(-n),
            this._notifyScopeListeners(),
            this
        }
        clearBreadcrumbs() {
            return this._breadcrumbs = [],
            this._notifyScopeListeners(),
            this
        }
        addAttachment(e) {
            return this._attachments.push(e),
            this
        }
        getAttachments() {
            return this._attachments
        }
        clearAttachments() {
            return this._attachments = [],
            this
        }
        applyToEvent(e, t={}) {
            if (this._extra && Object.keys(this._extra).length && (e.extra = {
                ...this._extra,
                ...e.extra
            }),
            this._tags && Object.keys(this._tags).length && (e.tags = {
                ...this._tags,
                ...e.tags
            }),
            this._user && Object.keys(this._user).length && (e.user = {
                ...this._user,
                ...e.user
            }),
            this._contexts && Object.keys(this._contexts).length && (e.contexts = {
                ...this._contexts,
                ...e.contexts
            }),
            this._level && (e.level = this._level),
            this._transactionName && (e.transaction = this._transactionName),
            this._span) {
                e.contexts = {
                    trace: this._span.getTraceContext(),
                    ...e.contexts
                };
                const t = this._span.transaction && this._span.transaction.name;
                t && (e.tags = {
                    transaction: t,
                    ...e.tags
                })
            }
            return this._applyFingerprint(e),
            e.breadcrumbs = [...e.breadcrumbs || [], ...this._breadcrumbs],
            e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0,
            e.sdkProcessingMetadata = {
                ...e.sdkProcessingMetadata,
                ...this._sdkProcessingMetadata
            },
            this._notifyEventProcessors([...h(), ...this._eventProcessors], e, t)
        }
        setSDKProcessingMetadata(e) {
            return this._sdkProcessingMetadata = {
                ...this._sdkProcessingMetadata,
                ...e
            },
            this
        }
        _notifyEventProcessors(e, t, n, r=0) {
            return new o.a(((o,a)=>{
                const c = e[r];
                if (null === t || "function" != typeof c)
                    o(t);
                else {
                    const l = c({
                        ...t
                    }, n);
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.id && null === l && s.c.log(`Event processor "${c.id}" dropped event`),
                    Object(i.n)(l) ? l.then((t=>this._notifyEventProcessors(e, t, n, r + 1).then(o))).then(null, a) : this._notifyEventProcessors(e, l, n, r + 1).then(o).then(null, a)
                }
            }
            ))
        }
        _notifyScopeListeners() {
            this._notifyingListeners || (this._notifyingListeners = !0,
            this._scopeListeners.forEach((e=>{
                e(this)
            }
            )),
            this._notifyingListeners = !1)
        }
        _applyFingerprint(e) {
            e.fingerprint = e.fingerprint ? Object(a.c)(e.fingerprint) : [],
            this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)),
            e.fingerprint && !e.fingerprint.length && delete e.fingerprint
        }
    }
    function h() {
        return Object(c.c)("globalEventProcessors", (()=>[]))
    }
    function d(e) {
        h().push(e)
    }
}
, , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    }
    )),
    n.d(t, "b", (function() {
        return o
    }
    )),
    n.d(t, "c", (function() {
        return a
    }
    ));
    var i = n(4);
    const r = ["debug", "info", "warn", "error", "log", "assert", "trace"];
    function o(e) {
        if (!("console"in i.a))
            return e();
        const t = i.a.console
          , n = {};
        r.forEach((e=>{
            const i = t[e] && t[e].__sentry_original__;
            e in t && i && (n[e] = t[e],
            t[e] = i)
        }
        ));
        try {
            return e()
        } finally {
            Object.keys(n).forEach((e=>{
                t[e] = n[e]
            }
            ))
        }
    }
    function s() {
        let e = !1;
        const t = {
            enable: ()=>{
                e = !0
            }
            ,
            disable: ()=>{
                e = !1
            }
        };
        return "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? r.forEach((n=>{
            t[n] = (...t)=>{
                e && o((()=>{
                    i.a.console[n](`Sentry Logger [${n}]:`, ...t)
                }
                ))
            }
        }
        )) : r.forEach((e=>{
            t[e] = ()=>{}
        }
        )),
        t
    }
    let a;
    a = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? Object(i.c)("logger", s) : s()
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return L
    }
    ));
    var i = e=>{
        if ("function" == typeof e)
            return e;
        return function() {
            return e
        }
    }
      , r = "undefined" != typeof self ? self : null
      , o = "undefined" != typeof window ? window : null
      , s = r || o || s
      , a = 0
      , c = 1
      , l = 2
      , u = 3
      , h = "closed"
      , d = "errored"
      , f = "joined"
      , p = "joining"
      , m = "leaving"
      , g = "phx_close"
      , v = "phx_error"
      , b = "phx_join"
      , y = "phx_reply"
      , _ = "phx_leave"
      , w = "longpoll"
      , E = "websocket"
      , k = 4
      , x = class {
        constructor(e, t, n, i) {
            this.channel = e,
            this.event = t,
            this.payload = n || function() {
                return {}
            }
            ,
            this.receivedResp = null,
            this.timeout = i,
            this.timeoutTimer = null,
            this.recHooks = [],
            this.sent = !1
        }
        resend(e) {
            this.timeout = e,
            this.reset(),
            this.send()
        }
        send() {
            this.hasReceived("timeout") || (this.startTimeout(),
            this.sent = !0,
            this.channel.socket.push({
                topic: this.channel.topic,
                event: this.event,
                payload: this.payload(),
                ref: this.ref,
                join_ref: this.channel.joinRef()
            }))
        }
        receive(e, t) {
            return this.hasReceived(e) && t(this.receivedResp.response),
            this.recHooks.push({
                status: e,
                callback: t
            }),
            this
        }
        reset() {
            this.cancelRefEvent(),
            this.ref = null,
            this.refEvent = null,
            this.receivedResp = null,
            this.sent = !1
        }
        matchReceive({status: e, response: t, _ref: n}) {
            this.recHooks.filter((t=>t.status === e)).forEach((e=>e.callback(t)))
        }
        cancelRefEvent() {
            this.refEvent && this.channel.off(this.refEvent)
        }
        cancelTimeout() {
            clearTimeout(this.timeoutTimer),
            this.timeoutTimer = null
        }
        startTimeout() {
            this.timeoutTimer && this.cancelTimeout(),
            this.ref = this.channel.socket.makeRef(),
            this.refEvent = this.channel.replyEventName(this.ref),
            this.channel.on(this.refEvent, (e=>{
                this.cancelRefEvent(),
                this.cancelTimeout(),
                this.receivedResp = e,
                this.matchReceive(e)
            }
            )),
            this.timeoutTimer = setTimeout((()=>{
                this.trigger("timeout", {})
            }
            ), this.timeout)
        }
        hasReceived(e) {
            return this.receivedResp && this.receivedResp.status === e
        }
        trigger(e, t) {
            this.channel.trigger(this.refEvent, {
                status: e,
                response: t
            })
        }
    }
      , S = class {
        constructor(e, t) {
            this.callback = e,
            this.timerCalc = t,
            this.timer = null,
            this.tries = 0
        }
        reset() {
            this.tries = 0,
            clearTimeout(this.timer)
        }
        scheduleTimeout() {
            clearTimeout(this.timer),
            this.timer = setTimeout((()=>{
                this.tries = this.tries + 1,
                this.callback()
            }
            ), this.timerCalc(this.tries + 1))
        }
    }
      , A = class {
        static request(e, t, n, i, r, o, a) {
            if (s.XDomainRequest) {
                let n = new s.XDomainRequest;
                return this.xdomainRequest(n, e, t, i, r, o, a)
            }
            {
                let c = new s.XMLHttpRequest;
                return this.xhrRequest(c, e, t, n, i, r, o, a)
            }
        }
        static xdomainRequest(e, t, n, i, r, o, s) {
            return e.timeout = r,
            e.open(t, n),
            e.onload = ()=>{
                let t = this.parseJSON(e.responseText);
                s && s(t)
            }
            ,
            o && (e.ontimeout = o),
            e.onprogress = ()=>{}
            ,
            e.send(i),
            e
        }
        static xhrRequest(e, t, n, i, r, o, s, a) {
            return e.open(t, n, !0),
            e.timeout = o,
            e.setRequestHeader("Content-Type", i),
            e.onerror = ()=>a && a(null),
            e.onreadystatechange = ()=>{
                if (e.readyState === k && a) {
                    let t = this.parseJSON(e.responseText);
                    a(t)
                }
            }
            ,
            s && (e.ontimeout = s),
            e.send(r),
            e
        }
        static parseJSON(e) {
            if (!e || "" === e)
                return null;
            try {
                return JSON.parse(e)
            } catch (t) {
                return console && console.log("failed to parse JSON response", e),
                null
            }
        }
        static serialize(e, t) {
            let n = [];
            for (var i in e) {
                if (!Object.prototype.hasOwnProperty.call(e, i))
                    continue;
                let r = t ? `${t}[${i}]` : i
                  , o = e[i];
                "object" == typeof o ? n.push(this.serialize(o, r)) : n.push(encodeURIComponent(r) + "=" + encodeURIComponent(o))
            }
            return n.join("&")
        }
        static appendParams(e, t) {
            if (0 === Object.keys(t).length)
                return e;
            let n = e.match(/\?/) ? "&" : "?";
            return `${e}${n}${this.serialize(t)}`
        }
    }
      , C = class {
        constructor(e) {
            this.endPoint = null,
            this.token = null,
            this.skipHeartbeat = !0,
            this.reqs = new Set,
            this.awaitingBatchAck = !1,
            this.currentBatch = null,
            this.currentBatchTimer = null,
            this.batchBuffer = [],
            this.onopen = function() {}
            ,
            this.onerror = function() {}
            ,
            this.onmessage = function() {}
            ,
            this.onclose = function() {}
            ,
            this.pollEndpoint = this.normalizeEndpoint(e),
            this.readyState = a,
            this.poll()
        }
        normalizeEndpoint(e) {
            return e.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + E), "$1/" + w)
        }
        endpointURL() {
            return A.appendParams(this.pollEndpoint, {
                token: this.token
            })
        }
        closeAndRetry(e, t, n) {
            this.close(e, t, n),
            this.readyState = a
        }
        ontimeout() {
            this.onerror("timeout"),
            this.closeAndRetry(1005, "timeout", !1)
        }
        isActive() {
            return this.readyState === c || this.readyState === a
        }
        poll() {
            this.ajax("GET", "application/json", null, (()=>this.ontimeout()), (e=>{
                if (e) {
                    var {status: t, token: n, messages: i} = e;
                    this.token = n
                } else
                    t = 0;
                switch (t) {
                case 200:
                    i.forEach((e=>{
                        setTimeout((()=>this.onmessage({
                            data: e
                        })), 0)
                    }
                    )),
                    this.poll();
                    break;
                case 204:
                    this.poll();
                    break;
                case 410:
                    this.readyState = c,
                    this.onopen({}),
                    this.poll();
                    break;
                case 403:
                    this.onerror(403),
                    this.close(1008, "forbidden", !1);
                    break;
                case 0:
                case 500:
                    this.onerror(500),
                    this.closeAndRetry(1011, "internal server error", 500);
                    break;
                default:
                    throw new Error(`unhandled poll status ${t}`)
                }
            }
            ))
        }
        send(e) {
            this.currentBatch ? this.currentBatch.push(e) : this.awaitingBatchAck ? this.batchBuffer.push(e) : (this.currentBatch = [e],
            this.currentBatchTimer = setTimeout((()=>{
                this.batchSend(this.currentBatch),
                this.currentBatch = null
            }
            ), 0))
        }
        batchSend(e) {
            this.awaitingBatchAck = !0,
            this.ajax("POST", "application/x-ndjson", e.join("\n"), (()=>this.onerror("timeout")), (e=>{
                this.awaitingBatchAck = !1,
                e && 200 === e.status ? this.batchBuffer.length > 0 && (this.batchSend(this.batchBuffer),
                this.batchBuffer = []) : (this.onerror(e && e.status),
                this.closeAndRetry(1011, "internal server error", !1))
            }
            ))
        }
        close(e, t, n) {
            for (let e of this.reqs)
                e.abort();
            this.readyState = u;
            let i = Object.assign({
                code: 1e3,
                reason: void 0,
                wasClean: !0
            }, {
                code: e,
                reason: t,
                wasClean: n
            });
            this.batchBuffer = [],
            clearTimeout(this.currentBatchTimer),
            this.currentBatchTimer = null,
            "undefined" != typeof CloseEvent ? this.onclose(new CloseEvent("close",i)) : this.onclose(i)
        }
        ajax(e, t, n, i, r) {
            let o;
            o = A.request(e, this.endpointURL(), t, n, this.timeout, (()=>{
                this.reqs.delete(o),
                i()
            }
            ), (e=>{
                this.reqs.delete(o),
                this.isActive() && r(e)
            }
            )),
            this.reqs.add(o)
        }
    }
      , T = {
        HEADER_LENGTH: 1,
        META_LENGTH: 4,
        KINDS: {
            push: 0,
            reply: 1,
            broadcast: 2
        },
        encode(e, t) {
            if (e.payload.constructor === ArrayBuffer)
                return t(this.binaryEncode(e));
            {
                let n = [e.join_ref, e.ref, e.topic, e.event, e.payload];
                return t(JSON.stringify(n))
            }
        },
        decode(e, t) {
            if (e.constructor === ArrayBuffer)
                return t(this.binaryDecode(e));
            {
                let[n,i,r,o,s] = JSON.parse(e);
                return t({
                    join_ref: n,
                    ref: i,
                    topic: r,
                    event: o,
                    payload: s
                })
            }
        },
        binaryEncode(e) {
            let {join_ref: t, ref: n, event: i, topic: r, payload: o} = e
              , s = this.META_LENGTH + t.length + n.length + r.length + i.length
              , a = new ArrayBuffer(this.HEADER_LENGTH + s)
              , c = new DataView(a)
              , l = 0;
            c.setUint8(l++, this.KINDS.push),
            c.setUint8(l++, t.length),
            c.setUint8(l++, n.length),
            c.setUint8(l++, r.length),
            c.setUint8(l++, i.length),
            Array.from(t, (e=>c.setUint8(l++, e.charCodeAt(0)))),
            Array.from(n, (e=>c.setUint8(l++, e.charCodeAt(0)))),
            Array.from(r, (e=>c.setUint8(l++, e.charCodeAt(0)))),
            Array.from(i, (e=>c.setUint8(l++, e.charCodeAt(0))));
            var u = new Uint8Array(a.byteLength + o.byteLength);
            return u.set(new Uint8Array(a), 0),
            u.set(new Uint8Array(o), a.byteLength),
            u.buffer
        },
        binaryDecode(e) {
            let t = new DataView(e)
              , n = t.getUint8(0)
              , i = new TextDecoder;
            switch (n) {
            case this.KINDS.push:
                return this.decodePush(e, t, i);
            case this.KINDS.reply:
                return this.decodeReply(e, t, i);
            case this.KINDS.broadcast:
                return this.decodeBroadcast(e, t, i)
            }
        },
        decodePush(e, t, n) {
            let i = t.getUint8(1)
              , r = t.getUint8(2)
              , o = t.getUint8(3)
              , s = this.HEADER_LENGTH + this.META_LENGTH - 1
              , a = n.decode(e.slice(s, s + i));
            s += i;
            let c = n.decode(e.slice(s, s + r));
            s += r;
            let l = n.decode(e.slice(s, s + o));
            return s += o,
            {
                join_ref: a,
                ref: null,
                topic: c,
                event: l,
                payload: e.slice(s, e.byteLength)
            }
        },
        decodeReply(e, t, n) {
            let i = t.getUint8(1)
              , r = t.getUint8(2)
              , o = t.getUint8(3)
              , s = t.getUint8(4)
              , a = this.HEADER_LENGTH + this.META_LENGTH
              , c = n.decode(e.slice(a, a + i));
            a += i;
            let l = n.decode(e.slice(a, a + r));
            a += r;
            let u = n.decode(e.slice(a, a + o));
            a += o;
            let h = n.decode(e.slice(a, a + s));
            a += s;
            let d = e.slice(a, e.byteLength);
            return {
                join_ref: c,
                ref: l,
                topic: u,
                event: y,
                payload: {
                    status: h,
                    response: d
                }
            }
        },
        decodeBroadcast(e, t, n) {
            let i = t.getUint8(1)
              , r = t.getUint8(2)
              , o = this.HEADER_LENGTH + 2
              , s = n.decode(e.slice(o, o + i));
            o += i;
            let a = n.decode(e.slice(o, o + r));
            return o += r,
            {
                join_ref: null,
                ref: null,
                topic: s,
                event: a,
                payload: e.slice(o, e.byteLength)
            }
        }
    }
      , L = class {
        constructor(e, t={}) {
            this.stateChangeCallbacks = {
                open: [],
                close: [],
                error: [],
                message: []
            },
            this.channels = [],
            this.sendBuffer = [],
            this.ref = 0,
            this.timeout = t.timeout || 1e4,
            this.transport = t.transport || s.WebSocket || C,
            this.establishedConnections = 0,
            this.defaultEncoder = T.encode.bind(T),
            this.defaultDecoder = T.decode.bind(T),
            this.closeWasClean = !1,
            this.binaryType = t.binaryType || "arraybuffer",
            this.connectClock = 1,
            this.transport !== C ? (this.encode = t.encode || this.defaultEncoder,
            this.decode = t.decode || this.defaultDecoder) : (this.encode = this.defaultEncoder,
            this.decode = this.defaultDecoder);
            let n = null;
            o && o.addEventListener && (o.addEventListener("pagehide", (e=>{
                this.conn && (this.disconnect(),
                n = this.connectClock)
            }
            )),
            o.addEventListener("pageshow", (e=>{
                n === this.connectClock && (n = null,
                this.connect())
            }
            ))),
            this.heartbeatIntervalMs = t.heartbeatIntervalMs || 3e4,
            this.rejoinAfterMs = e=>t.rejoinAfterMs ? t.rejoinAfterMs(e) : [1e3, 2e3, 5e3][e - 1] || 1e4,
            this.reconnectAfterMs = e=>t.reconnectAfterMs ? t.reconnectAfterMs(e) : [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][e - 1] || 5e3,
            this.logger = t.logger || null,
            this.longpollerTimeout = t.longpollerTimeout || 2e4,
            this.params = i(t.params || {}),
            this.endPoint = `${e}/${E}`,
            this.vsn = t.vsn || "2.0.0",
            this.heartbeatTimeoutTimer = null,
            this.heartbeatTimer = null,
            this.pendingHeartbeatRef = null,
            this.reconnectTimer = new S((()=>{
                this.teardown((()=>this.connect()))
            }
            ),this.reconnectAfterMs)
        }
        getLongPollTransport() {
            return C
        }
        replaceTransport(e) {
            this.connectClock++,
            this.closeWasClean = !0,
            this.reconnectTimer.reset(),
            this.sendBuffer = [],
            this.conn && (this.conn.close(),
            this.conn = null),
            this.transport = e
        }
        protocol() {
            return location.protocol.match(/^https/) ? "wss" : "ws"
        }
        endPointURL() {
            let e = A.appendParams(A.appendParams(this.endPoint, this.params()), {
                vsn: this.vsn
            });
            return "/" !== e.charAt(0) ? e : "/" === e.charAt(1) ? `${this.protocol()}:${e}` : `${this.protocol()}://${location.host}${e}`
        }
        disconnect(e, t, n) {
            this.connectClock++,
            this.closeWasClean = !0,
            this.reconnectTimer.reset(),
            this.teardown(e, t, n)
        }
        connect(e) {
            e && (console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),
            this.params = i(e)),
            this.conn || (this.connectClock++,
            this.closeWasClean = !1,
            this.conn = new this.transport(this.endPointURL()),
            this.conn.binaryType = this.binaryType,
            this.conn.timeout = this.longpollerTimeout,
            this.conn.onopen = ()=>this.onConnOpen(),
            this.conn.onerror = e=>this.onConnError(e),
            this.conn.onmessage = e=>this.onConnMessage(e),
            this.conn.onclose = e=>this.onConnClose(e))
        }
        log(e, t, n) {
            this.logger(e, t, n)
        }
        hasLogger() {
            return null !== this.logger
        }
        onOpen(e) {
            let t = this.makeRef();
            return this.stateChangeCallbacks.open.push([t, e]),
            t
        }
        onClose(e) {
            let t = this.makeRef();
            return this.stateChangeCallbacks.close.push([t, e]),
            t
        }
        onError(e) {
            let t = this.makeRef();
            return this.stateChangeCallbacks.error.push([t, e]),
            t
        }
        onMessage(e) {
            let t = this.makeRef();
            return this.stateChangeCallbacks.message.push([t, e]),
            t
        }
        ping(e) {
            if (!this.isConnected())
                return !1;
            let t = this.makeRef()
              , n = Date.now();
            this.push({
                topic: "phoenix",
                event: "heartbeat",
                payload: {},
                ref: t
            });
            let i = this.onMessage((r=>{
                r.ref === t && (this.off([i]),
                e(Date.now() - n))
            }
            ));
            return !0
        }
        clearHeartbeats() {
            clearTimeout(this.heartbeatTimer),
            clearTimeout(this.heartbeatTimeoutTimer)
        }
        onConnOpen() {
            this.hasLogger() && this.log("transport", `connected to ${this.endPointURL()}`),
            this.closeWasClean = !1,
            this.establishedConnections++,
            this.flushSendBuffer(),
            this.reconnectTimer.reset(),
            this.resetHeartbeat(),
            this.stateChangeCallbacks.open.forEach((([,e])=>e()))
        }
        heartbeatTimeout() {
            this.pendingHeartbeatRef && (this.pendingHeartbeatRef = null,
            this.hasLogger() && this.log("transport", "heartbeat timeout. Attempting to re-establish connection"),
            this.triggerChanError(),
            this.closeWasClean = !1,
            this.teardown((()=>this.reconnectTimer.scheduleTimeout()), 1e3, "heartbeat timeout"))
        }
        resetHeartbeat() {
            this.conn && this.conn.skipHeartbeat || (this.pendingHeartbeatRef = null,
            this.clearHeartbeats(),
            this.heartbeatTimer = setTimeout((()=>this.sendHeartbeat()), this.heartbeatIntervalMs))
        }
        teardown(e, t, n) {
            if (!this.conn)
                return e && e();
            this.waitForBufferDone((()=>{
                this.conn && (t ? this.conn.close(t, n || "") : this.conn.close()),
                this.waitForSocketClosed((()=>{
                    this.conn && (this.conn.onopen = function() {}
                    ,
                    this.conn.onerror = function() {}
                    ,
                    this.conn.onmessage = function() {}
                    ,
                    this.conn.onclose = function() {}
                    ,
                    this.conn = null),
                    e && e()
                }
                ))
            }
            ))
        }
        waitForBufferDone(e, t=1) {
            5 !== t && this.conn && this.conn.bufferedAmount ? setTimeout((()=>{
                this.waitForBufferDone(e, t + 1)
            }
            ), 150 * t) : e()
        }
        waitForSocketClosed(e, t=1) {
            5 !== t && this.conn && this.conn.readyState !== u ? setTimeout((()=>{
                this.waitForSocketClosed(e, t + 1)
            }
            ), 150 * t) : e()
        }
        onConnClose(e) {
            let t = e && e.code;
            this.hasLogger() && this.log("transport", "close", e),
            this.triggerChanError(),
            this.clearHeartbeats(),
            this.closeWasClean || 1e3 === t || this.reconnectTimer.scheduleTimeout(),
            this.stateChangeCallbacks.close.forEach((([,t])=>t(e)))
        }
        onConnError(e) {
            this.hasLogger() && this.log("transport", e);
            let t = this.transport
              , n = this.establishedConnections;
            this.stateChangeCallbacks.error.forEach((([,i])=>{
                i(e, t, n)
            }
            )),
            (t === this.transport || n > 0) && this.triggerChanError()
        }
        triggerChanError() {
            this.channels.forEach((e=>{
                e.isErrored() || e.isLeaving() || e.isClosed() || e.trigger(v)
            }
            ))
        }
        connectionState() {
            switch (this.conn && this.conn.readyState) {
            case a:
                return "connecting";
            case c:
                return "open";
            case l:
                return "closing";
            default:
                return "closed"
            }
        }
        isConnected() {
            return "open" === this.connectionState()
        }
        remove(e) {
            this.off(e.stateChangeRefs),
            this.channels = this.channels.filter((t=>t.joinRef() !== e.joinRef()))
        }
        off(e) {
            for (let t in this.stateChangeCallbacks)
                this.stateChangeCallbacks[t] = this.stateChangeCallbacks[t].filter((([t])=>-1 === e.indexOf(t)))
        }
        channel(e, t={}) {
            let n = new class {
                constructor(e, t, n) {
                    this.state = h,
                    this.topic = e,
                    this.params = i(t || {}),
                    this.socket = n,
                    this.bindings = [],
                    this.bindingRef = 0,
                    this.timeout = this.socket.timeout,
                    this.joinedOnce = !1,
                    this.joinPush = new x(this,b,this.params,this.timeout),
                    this.pushBuffer = [],
                    this.stateChangeRefs = [],
                    this.rejoinTimer = new S((()=>{
                        this.socket.isConnected() && this.rejoin()
                    }
                    ),this.socket.rejoinAfterMs),
                    this.stateChangeRefs.push(this.socket.onError((()=>this.rejoinTimer.reset()))),
                    this.stateChangeRefs.push(this.socket.onOpen((()=>{
                        this.rejoinTimer.reset(),
                        this.isErrored() && this.rejoin()
                    }
                    ))),
                    this.joinPush.receive("ok", (()=>{
                        this.state = f,
                        this.rejoinTimer.reset(),
                        this.pushBuffer.forEach((e=>e.send())),
                        this.pushBuffer = []
                    }
                    )),
                    this.joinPush.receive("error", (()=>{
                        this.state = d,
                        this.socket.isConnected() && this.rejoinTimer.scheduleTimeout()
                    }
                    )),
                    this.onClose((()=>{
                        this.rejoinTimer.reset(),
                        this.socket.hasLogger() && this.socket.log("channel", `close ${this.topic} ${this.joinRef()}`),
                        this.state = h,
                        this.socket.remove(this)
                    }
                    )),
                    this.onError((e=>{
                        this.socket.hasLogger() && this.socket.log("channel", `error ${this.topic}`, e),
                        this.isJoining() && this.joinPush.reset(),
                        this.state = d,
                        this.socket.isConnected() && this.rejoinTimer.scheduleTimeout()
                    }
                    )),
                    this.joinPush.receive("timeout", (()=>{
                        this.socket.hasLogger() && this.socket.log("channel", `timeout ${this.topic} (${this.joinRef()})`, this.joinPush.timeout),
                        new x(this,_,i({}),this.timeout).send(),
                        this.state = d,
                        this.joinPush.reset(),
                        this.socket.isConnected() && this.rejoinTimer.scheduleTimeout()
                    }
                    )),
                    this.on(y, ((e,t)=>{
                        this.trigger(this.replyEventName(t), e)
                    }
                    ))
                }
                join(e=this.timeout) {
                    if (this.joinedOnce)
                        throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
                    return this.timeout = e,
                    this.joinedOnce = !0,
                    this.rejoin(),
                    this.joinPush
                }
                onClose(e) {
                    this.on(g, e)
                }
                onError(e) {
                    return this.on(v, (t=>e(t)))
                }
                on(e, t) {
                    let n = this.bindingRef++;
                    return this.bindings.push({
                        event: e,
                        ref: n,
                        callback: t
                    }),
                    n
                }
                off(e, t) {
                    this.bindings = this.bindings.filter((n=>!(n.event === e && (void 0 === t || t === n.ref))))
                }
                canPush() {
                    return this.socket.isConnected() && this.isJoined()
                }
                push(e, t, n=this.timeout) {
                    if (t = t || {},
                    !this.joinedOnce)
                        throw new Error(`tried to push '${e}' to '${this.topic}' before joining. Use channel.join() before pushing events`);
                    let i = new x(this,e,(function() {
                        return t
                    }
                    ),n);
                    return this.canPush() ? i.send() : (i.startTimeout(),
                    this.pushBuffer.push(i)),
                    i
                }
                leave(e=this.timeout) {
                    this.rejoinTimer.reset(),
                    this.joinPush.cancelTimeout(),
                    this.state = m;
                    let t = ()=>{
                        this.socket.hasLogger() && this.socket.log("channel", `leave ${this.topic}`),
                        this.trigger(g, "leave")
                    }
                      , n = new x(this,_,i({}),e);
                    return n.receive("ok", (()=>t())).receive("timeout", (()=>t())),
                    n.send(),
                    this.canPush() || n.trigger("ok", {}),
                    n
                }
                onMessage(e, t, n) {
                    return t
                }
                isMember(e, t, n, i) {
                    return !(this.topic !== e || i && i !== this.joinRef() && (this.socket.hasLogger() && this.socket.log("channel", "dropping outdated message", {
                        topic: e,
                        event: t,
                        payload: n,
                        joinRef: i
                    }),
                    1))
                }
                joinRef() {
                    return this.joinPush.ref
                }
                rejoin(e=this.timeout) {
                    this.isLeaving() || (this.socket.leaveOpenTopic(this.topic),
                    this.state = p,
                    this.joinPush.resend(e))
                }
                trigger(e, t, n, i) {
                    let r = this.onMessage(e, t, n, i);
                    if (t && !r)
                        throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");
                    let o = this.bindings.filter((t=>t.event === e));
                    for (let e = 0; e < o.length; e++)
                        o[e].callback(r, n, i || this.joinRef())
                }
                replyEventName(e) {
                    return `chan_reply_ ${e}`
                }
                isClosed() {
                    return this.state === h
                }
                isErrored() {
                    return this.state === d
                }
                isJoined() {
                    return this.state === f
                }
                isJoining() {
                    return this.state === p
                }
                isLeaving() {
                    return this.state === m
                }
            }
            (e,t,this);
            return this.channels.push(n),
            n
        }
        push(e) {
            if (this.hasLogger()) {
                let {topic: t, event: n, payload: i, ref: r, join_ref: o} = e;
                this.log("push", `${t} ${n} (${o}, ${r})`, i)
            }
            this.isConnected() ? this.encode(e, (e=>this.conn.send(e))) : this.sendBuffer.push((()=>this.encode(e, (e=>this.conn.send(e)))))
        }
        makeRef() {
            let e = this.ref + 1;
            return e === this.ref ? this.ref = 0 : this.ref = e,
            this.ref.toString()
        }
        sendHeartbeat() {
            this.pendingHeartbeatRef && !this.isConnected() || (this.pendingHeartbeatRef = this.makeRef(),
            this.push({
                topic: "phoenix",
                event: "heartbeat",
                payload: {},
                ref: this.pendingHeartbeatRef
            }),
            this.heartbeatTimeoutTimer = setTimeout((()=>this.heartbeatTimeout()), this.heartbeatIntervalMs))
        }
        flushSendBuffer() {
            this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach((e=>e())),
            this.sendBuffer = [])
        }
        onConnMessage(e) {
            this.decode(e.data, (e=>{
                let {topic: t, event: n, payload: i, ref: r, join_ref: o} = e;
                r && r === this.pendingHeartbeatRef && (this.clearHeartbeats(),
                this.pendingHeartbeatRef = null,
                this.heartbeatTimer = setTimeout((()=>this.sendHeartbeat()), this.heartbeatIntervalMs)),
                this.hasLogger() && this.log("receive", `${i.status || ""} ${t} ${n} ${r && "(" + r + ")" || ""}`, i);
                for (let e = 0; e < this.channels.length; e++) {
                    const s = this.channels[e];
                    s.isMember(t, n, i, o) && s.trigger(n, i, r, o)
                }
                for (let t = 0; t < this.stateChangeCallbacks.message.length; t++) {
                    let[,n] = this.stateChangeCallbacks.message[t];
                    n(e)
                }
            }
            ))
        }
        leaveOpenTopic(e) {
            let t = this.channels.find((t=>t.topic === e && (t.isJoined() || t.isJoining())));
            t && (this.hasLogger() && this.log("transport", `leaving duplicate topic "${e}"`),
            t.leave())
        }
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return o
    }
    )),
    n.d(t, "b", (function() {
        return r
    }
    )),
    n.d(t, "c", (function() {
        return s
    }
    ));
    var i = n(5);
    function r(e, t) {
        return Object(i.a)().captureException(e, {
            captureContext: t
        })
    }
    function o(e, t) {
        return Object(i.a)().captureEvent(e, t)
    }
    function s(e) {
        Object(i.a)().withScope(e)
    }
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        n.d(t, "a", (function() {
            return l
        }
        )),
        n.d(t, "b", (function() {
            return u
        }
        ));
        var i = n(21)
          , r = n(4);
        const o = Object(r.b)()
          , s = {
            nowSeconds: ()=>Date.now() / 1e3
        };
        const a = Object(i.b)() ? function() {
            try {
                return Object(i.a)(e, "perf_hooks").performance
            } catch (e) {
                return
            }
        }() : function() {
            const {performance: e} = o;
            if (!e || !e.now)
                return;
            return {
                now: ()=>e.now(),
                timeOrigin: Date.now() - e.now()
            }
        }()
          , c = void 0 === a ? s : {
            nowSeconds: ()=>(a.timeOrigin + a.now()) / 1e3
        }
          , l = s.nowSeconds.bind(s)
          , u = c.nowSeconds.bind(c);
        let h;
        (()=>{
            const {performance: e} = o;
            if (!e || !e.now)
                return void (h = "none");
            const t = 36e5
              , n = e.now()
              , i = Date.now()
              , r = e.timeOrigin ? Math.abs(e.timeOrigin + n - i) : t
              , s = r < t
              , a = e.timing && e.timing.navigationStart
              , c = "number" == typeof a ? Math.abs(a + n - i) : t;
            s || c < t ? r <= c ? (h = "timeOrigin",
            e.timeOrigin) : h = "navigationStart" : h = "dateNow"
        }
        )()
    }
    ).call(this, n(30)(e))
}
, , function(e, t, n) {
    "use strict";
    var i, r;
    function o() {
        o = function() {
            return t
        }
        ;
        var e, t = {}, n = Object.prototype, i = n.hasOwnProperty, r = Object.defineProperty || function(e, t, n) {
            e[t] = n.value
        }
        , s = "function" == typeof Symbol ? Symbol : {}, a = s.iterator || "@@iterator", l = s.asyncIterator || "@@asyncIterator", u = s.toStringTag || "@@toStringTag";
        function h(e, t, n) {
            return Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }),
            e[t]
        }
        try {
            h({}, "")
        } catch (e) {
            h = function(e, t, n) {
                return e[t] = n
            }
        }
        function d(e, t, n, i) {
            var o = t && t.prototype instanceof b ? t : b
              , s = Object.create(o.prototype)
              , a = new P(i || []);
            return r(s, "_invoke", {
                value: C(e, n, a)
            }),
            s
        }
        function f(e, t, n) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, n)
                }
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                }
            }
        }
        t.wrap = d;
        var p = "suspendedStart"
          , m = "executing"
          , g = "completed"
          , v = {};
        function b() {}
        function y() {}
        function _() {}
        var w = {};
        h(w, a, (function() {
            return this
        }
        ));
        var E = Object.getPrototypeOf
          , k = E && E(E(j([])));
        k && k !== n && i.call(k, a) && (w = k);
        var x = _.prototype = b.prototype = Object.create(w);
        function S(e) {
            ["next", "throw", "return"].forEach((function(t) {
                h(e, t, (function(e) {
                    return this._invoke(t, e)
                }
                ))
            }
            ))
        }
        function A(e, t) {
            function n(r, o, s, a) {
                var l = f(e[r], e, o);
                if ("throw" !== l.type) {
                    var u = l.arg
                      , h = u.value;
                    return h && "object" == c(h) && i.call(h, "__await") ? t.resolve(h.__await).then((function(e) {
                        n("next", e, s, a)
                    }
                    ), (function(e) {
                        n("throw", e, s, a)
                    }
                    )) : t.resolve(h).then((function(e) {
                        u.value = e,
                        s(u)
                    }
                    ), (function(e) {
                        return n("throw", e, s, a)
                    }
                    ))
                }
                a(l.arg)
            }
            var o;
            r(this, "_invoke", {
                value: function(e, i) {
                    function r() {
                        return new t((function(t, r) {
                            n(e, i, t, r)
                        }
                        ))
                    }
                    return o = o ? o.then(r, r) : r()
                }
            })
        }
        function C(t, n, i) {
            var r = p;
            return function(o, s) {
                if (r === m)
                    throw new Error("Generator is already running");
                if (r === g) {
                    if ("throw" === o)
                        throw s;
                    return {
                        value: e,
                        done: !0
                    }
                }
                for (i.method = o,
                i.arg = s; ; ) {
                    var a = i.delegate;
                    if (a) {
                        var c = T(a, i);
                        if (c) {
                            if (c === v)
                                continue;
                            return c
                        }
                    }
                    if ("next" === i.method)
                        i.sent = i._sent = i.arg;
                    else if ("throw" === i.method) {
                        if (r === p)
                            throw r = g,
                            i.arg;
                        i.dispatchException(i.arg)
                    } else
                        "return" === i.method && i.abrupt("return", i.arg);
                    r = m;
                    var l = f(t, n, i);
                    if ("normal" === l.type) {
                        if (r = i.done ? g : "suspendedYield",
                        l.arg === v)
                            continue;
                        return {
                            value: l.arg,
                            done: i.done
                        }
                    }
                    "throw" === l.type && (r = g,
                    i.method = "throw",
                    i.arg = l.arg)
                }
            }
        }
        function T(t, n) {
            var i = n.method
              , r = t.iterator[i];
            if (r === e)
                return n.delegate = null,
                "throw" === i && t.iterator.return && (n.method = "return",
                n.arg = e,
                T(t, n),
                "throw" === n.method) || "return" !== i && (n.method = "throw",
                n.arg = new TypeError("The iterator does not provide a '" + i + "' method")),
                v;
            var o = f(r, t.iterator, n.arg);
            if ("throw" === o.type)
                return n.method = "throw",
                n.arg = o.arg,
                n.delegate = null,
                v;
            var s = o.arg;
            return s ? s.done ? (n[t.resultName] = s.value,
            n.next = t.nextLoc,
            "return" !== n.method && (n.method = "next",
            n.arg = e),
            n.delegate = null,
            v) : s : (n.method = "throw",
            n.arg = new TypeError("iterator result is not an object"),
            n.delegate = null,
            v)
        }
        function L(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]),
            2 in e && (t.finallyLoc = e[2],
            t.afterLoc = e[3]),
            this.tryEntries.push(t)
        }
        function O(e) {
            var t = e.completion || {};
            t.type = "normal",
            delete t.arg,
            e.completion = t
        }
        function P(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            e.forEach(L, this),
            this.reset(!0)
        }
        function j(t) {
            if (t || "" === t) {
                var n = t[a];
                if (n)
                    return n.call(t);
                if ("function" == typeof t.next)
                    return t;
                if (!isNaN(t.length)) {
                    var r = -1
                      , o = function n() {
                        for (; ++r < t.length; )
                            if (i.call(t, r))
                                return n.value = t[r],
                                n.done = !1,
                                n;
                        return n.value = e,
                        n.done = !0,
                        n
                    };
                    return o.next = o
                }
            }
            throw new TypeError(c(t) + " is not iterable")
        }
        return y.prototype = _,
        r(x, "constructor", {
            value: _,
            configurable: !0
        }),
        r(_, "constructor", {
            value: y,
            configurable: !0
        }),
        y.displayName = h(_, u, "GeneratorFunction"),
        t.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === y || "GeneratorFunction" === (t.displayName || t.name))
        }
        ,
        t.mark = function(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, _) : (e.__proto__ = _,
            h(e, u, "GeneratorFunction")),
            e.prototype = Object.create(x),
            e
        }
        ,
        t.awrap = function(e) {
            return {
                __await: e
            }
        }
        ,
        S(A.prototype),
        h(A.prototype, l, (function() {
            return this
        }
        )),
        t.AsyncIterator = A,
        t.async = function(e, n, i, r, o) {
            void 0 === o && (o = Promise);
            var s = new A(d(e, n, i, r),o);
            return t.isGeneratorFunction(n) ? s : s.next().then((function(e) {
                return e.done ? e.value : s.next()
            }
            ))
        }
        ,
        S(x),
        h(x, u, "Generator"),
        h(x, a, (function() {
            return this
        }
        )),
        h(x, "toString", (function() {
            return "[object Generator]"
        }
        )),
        t.keys = function(e) {
            var t = Object(e)
              , n = [];
            for (var i in t)
                n.push(i);
            return n.reverse(),
            function e() {
                for (; n.length; ) {
                    var i = n.pop();
                    if (i in t)
                        return e.value = i,
                        e.done = !1,
                        e
                }
                return e.done = !0,
                e
            }
        }
        ,
        t.values = j,
        P.prototype = {
            constructor: P,
            reset: function(t) {
                if (this.prev = 0,
                this.next = 0,
                this.sent = this._sent = e,
                this.done = !1,
                this.delegate = null,
                this.method = "next",
                this.arg = e,
                this.tryEntries.forEach(O),
                !t)
                    for (var n in this)
                        "t" === n.charAt(0) && i.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
            },
            stop: function() {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type)
                    throw e.arg;
                return this.rval
            },
            dispatchException: function(t) {
                if (this.done)
                    throw t;
                var n = this;
                function r(i, r) {
                    return a.type = "throw",
                    a.arg = t,
                    n.next = i,
                    r && (n.method = "next",
                    n.arg = e),
                    !!r
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                    var s = this.tryEntries[o]
                      , a = s.completion;
                    if ("root" === s.tryLoc)
                        return r("end");
                    if (s.tryLoc <= this.prev) {
                        var c = i.call(s, "catchLoc")
                          , l = i.call(s, "finallyLoc");
                        if (c && l) {
                            if (this.prev < s.catchLoc)
                                return r(s.catchLoc, !0);
                            if (this.prev < s.finallyLoc)
                                return r(s.finallyLoc)
                        } else if (c) {
                            if (this.prev < s.catchLoc)
                                return r(s.catchLoc, !0)
                        } else {
                            if (!l)
                                throw new Error("try statement without catch or finally");
                            if (this.prev < s.finallyLoc)
                                return r(s.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var r = this.tryEntries[n];
                    if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                        var o = r;
                        break
                    }
                }
                o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                var s = o ? o.completion : {};
                return s.type = e,
                s.arg = t,
                o ? (this.method = "next",
                this.next = o.finallyLoc,
                v) : this.complete(s)
            },
            complete: function(e, t) {
                if ("throw" === e.type)
                    throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                this.method = "return",
                this.next = "end") : "normal" === e.type && t && (this.next = t),
                v
            },
            finish: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e)
                        return this.complete(n.completion, n.afterLoc),
                        O(n),
                        v
                }
            },
            catch: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                        var i = n.completion;
                        if ("throw" === i.type) {
                            var r = i.arg;
                            O(n)
                        }
                        return r
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(t, n, i) {
                return this.delegate = {
                    iterator: j(t),
                    resultName: n,
                    nextLoc: i
                },
                "next" === this.method && (this.arg = e),
                v
            }
        },
        t
    }
    function s(e, t, n, i, r, o, s) {
        try {
            var a = e[o](s)
              , c = a.value
        } catch (e) {
            return void n(e)
        }
        a.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    function a(e) {
        return function() {
            var t = this
              , n = arguments;
            return new Promise((function(i, r) {
                var o = e.apply(t, n);
                function a(e) {
                    s(o, i, r, a, c, "next", e)
                }
                function c(e) {
                    s(o, i, r, a, c, "throw", e)
                }
                a(void 0)
            }
            ))
        }
    }
    function c(e) {
        return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        c(e)
    }
    function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, i)
        }
        return n
    }
    function u(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? l(Object(n), !0).forEach((function(t) {
                h(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function h(e, t, n) {
        return (t = function(e) {
            var t = function(e, t) {
                if ("object" !== c(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var i = n.call(e, t || "default");
                    if ("object" !== c(i))
                        return i;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === c(t) ? t : String(t)
        }(t))in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function d(e) {
        return function(e) {
            if (Array.isArray(e))
                return m(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                return Array.from(e)
        }(e) || p(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function f(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
                var i, r, o, s, a = [], c = !0, l = !1;
                try {
                    if (o = (n = n.call(e)).next,
                    0 === t) {
                        if (Object(n) !== n)
                            return;
                        c = !1
                    } else
                        for (; !(c = (i = o.call(n)).done) && (a.push(i.value),
                        a.length !== t); c = !0)
                            ;
                } catch (e) {
                    l = !0,
                    r = e
                } finally {
                    try {
                        if (!c && null != n.return && (s = n.return(),
                        Object(s) !== s))
                            return
                    } finally {
                        if (l)
                            throw r
                    }
                }
                return a
            }
        }(e, t) || p(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function p(e, t) {
        if (e) {
            if ("string" == typeof e)
                return m(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? m(e, t) : void 0
        }
    }
    function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++)
            i[n] = e[n];
        return i
    }
    n.d(t, "a", (function() {
        return Xn
    }
    ));
    var g, v, b, y, _ = !1, w = !1, E = [];
    function k(e) {
        !function(e) {
            E.includes(e) || E.push(e);
            w || _ || (_ = !0,
            queueMicrotask(S))
        }(e)
    }
    function x(e) {
        var t = E.indexOf(e);
        -1 !== t && E.splice(t, 1)
    }
    function S() {
        _ = !1,
        w = !0;
        for (var e = 0; e < E.length; e++)
            E[e]();
        E.length = 0,
        w = !1
    }
    var A = !0;
    function C(e) {
        v = e
    }
    var T = []
      , L = []
      , O = [];
    function P(e, t) {
        "function" == typeof t ? (e._x_cleanups || (e._x_cleanups = []),
        e._x_cleanups.push(t)) : (t = e,
        L.push(t))
    }
    function j(e, t) {
        e._x_attributeCleanups && Object.entries(e._x_attributeCleanups).forEach((function(n) {
            var i = f(n, 2)
              , r = i[0]
              , o = i[1];
            (void 0 === t || t.includes(r)) && (o.forEach((function(e) {
                return e()
            }
            )),
            delete e._x_attributeCleanups[r])
        }
        ))
    }
    var R = new MutationObserver(H)
      , D = !1;
    function N() {
        R.observe(document, {
            subtree: !0,
            childList: !0,
            attributes: !0,
            attributeOldValue: !0
        }),
        D = !0
    }
    function I() {
        (M = M.concat(R.takeRecords())).length && !$ && ($ = !0,
        queueMicrotask((function() {
            H(M),
            M.length = 0,
            $ = !1
        }
        ))),
        R.disconnect(),
        D = !1
    }
    var M = []
      , $ = !1;
    function U(e) {
        if (!D)
            return e();
        I();
        var t = e();
        return N(),
        t
    }
    var F = !1
      , B = [];
    function H(e) {
        if (F)
            B = B.concat(e);
        else {
            for (var t = [], n = [], i = new Map, r = new Map, o = function() {
                if (e[s].target._x_ignoreMutationObserver)
                    return 1;
                if ("childList" === e[s].type && (e[s].addedNodes.forEach((function(e) {
                    return 1 === e.nodeType && t.push(e)
                }
                )),
                e[s].removedNodes.forEach((function(e) {
                    return 1 === e.nodeType && n.push(e)
                }
                ))),
                "attributes" === e[s].type) {
                    var o = e[s].target
                      , a = e[s].attributeName
                      , c = e[s].oldValue
                      , l = function() {
                        i.has(o) || i.set(o, []),
                        i.get(o).push({
                            name: a,
                            value: o.getAttribute(a)
                        })
                    }
                      , u = function() {
                        r.has(o) || r.set(o, []),
                        r.get(o).push(a)
                    };
                    o.hasAttribute(a) && null === c ? l() : o.hasAttribute(a) ? (u(),
                    l()) : u()
                }
            }, s = 0; s < e.length; s++)
                o();
            r.forEach((function(e, t) {
                j(t, e)
            }
            )),
            i.forEach((function(e, t) {
                T.forEach((function(n) {
                    return n(t, e)
                }
                ))
            }
            ));
            for (var a = function() {
                var e = l[c];
                if (t.includes(e))
                    return 1;
                if (L.forEach((function(t) {
                    return t(e)
                }
                )),
                e._x_cleanups)
                    for (; e._x_cleanups.length; )
                        e._x_cleanups.pop()()
            }, c = 0, l = n; c < l.length; c++)
                a();
            t.forEach((function(e) {
                e._x_ignoreSelf = !0,
                e._x_ignore = !0
            }
            ));
            for (var u = function() {
                var e = d[h];
                return n.includes(e) ? 0 : e.isConnected ? (delete e._x_ignoreSelf,
                delete e._x_ignore,
                O.forEach((function(t) {
                    return t(e)
                }
                )),
                e._x_ignore = !0,
                void (e._x_ignoreSelf = !0)) : 0
            }, h = 0, d = t; h < d.length; h++)
                u();
            t.forEach((function(e) {
                delete e._x_ignoreSelf,
                delete e._x_ignore
            }
            )),
            t = null,
            n = null,
            i = null,
            r = null
        }
    }
    function q(e) {
        return z(W(e))
    }
    function V(e, t, n) {
        return e._x_dataStack = [t].concat(d(W(n || e))),
        function() {
            e._x_dataStack = e._x_dataStack.filter((function(e) {
                return e !== t
            }
            ))
        }
    }
    function J(e, t) {
        var n = e._x_dataStack[0];
        Object.entries(t).forEach((function(e) {
            var t = f(e, 2)
              , i = t[0]
              , r = t[1];
            n[i] = r
        }
        ))
    }
    function W(e) {
        return e._x_dataStack ? e._x_dataStack : "function" == typeof ShadowRoot && e instanceof ShadowRoot ? W(e.host) : e.parentNode ? W(e.parentNode) : []
    }
    function z(e) {
        var t = new Proxy({},{
            ownKeys: function() {
                return Array.from(new Set(e.flatMap((function(e) {
                    return Object.keys(e)
                }
                ))))
            },
            has: function(t, n) {
                return e.some((function(e) {
                    return e.hasOwnProperty(n)
                }
                ))
            },
            get: function(n, i) {
                return (e.find((function(e) {
                    if (e.hasOwnProperty(i)) {
                        var n = Object.getOwnPropertyDescriptor(e, i);
                        if (n.get && n.get._x_alreadyBound || n.set && n.set._x_alreadyBound)
                            return !0;
                        if ((n.get || n.set) && n.enumerable) {
                            var r = n.get
                              , o = n.set
                              , s = n;
                            r = r && r.bind(t),
                            o = o && o.bind(t),
                            r && (r._x_alreadyBound = !0),
                            o && (o._x_alreadyBound = !0),
                            Object.defineProperty(e, i, u(u({}, s), {}, {
                                get: r,
                                set: o
                            }))
                        }
                        return !0
                    }
                    return !1
                }
                )) || {})[i]
            },
            set: function(t, n, i) {
                var r = e.find((function(e) {
                    return e.hasOwnProperty(n)
                }
                ));
                return r ? r[n] = i : e[e.length - 1][n] = i,
                !0
            }
        });
        return t
    }
    function G(e) {
        var t = function(e) {
            return "object" === c(e) && !Array.isArray(e) && null !== e
        };
        return function n(i) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            Object.entries(Object.getOwnPropertyDescriptors(i)).forEach((function(o) {
                var s = f(o, 2)
                  , a = s[0]
                  , l = s[1]
                  , u = l.value;
                if (!1 !== l.enumerable && void 0 !== u) {
                    var h = "" === r ? a : "".concat(r, ".").concat(a);
                    "object" === c(u) && null !== u && u._x_interceptor ? i[a] = u.initialize(e, h, a) : !t(u) || u === i || u instanceof Element || n(u, h)
                }
            }
            ))
        }(e)
    }
    function Y(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}
          , n = {
            initialValue: void 0,
            _x_interceptor: !0,
            initialize: function(t, n, i) {
                return e(this.initialValue, (function() {
                    return K(t, n)
                }
                ), (function(e) {
                    return X(t, n, e)
                }
                ), n, i)
            }
        };
        return t(n),
        function(e) {
            if ("object" === c(e) && null !== e && e._x_interceptor) {
                var t = n.initialize.bind(n);
                n.initialize = function(i, r, o) {
                    var s = e.initialize(i, r, o);
                    return n.initialValue = s,
                    t(i, r, o)
                }
            } else
                n.initialValue = e;
            return n
        }
    }
    function K(e, t) {
        return t.split(".").reduce((function(e, t) {
            return e[t]
        }
        ), e)
    }
    function X(e, t, n) {
        if ("string" == typeof t && (t = t.split(".")),
        1 !== t.length) {
            if (0 === t.length)
                throw error;
            return e[t[0]] || (e[t[0]] = {}),
            X(e[t[0]], t.slice(1), n)
        }
        e[t[0]] = n
    }
    var Z = {};
    function Q(e, t) {
        Z[e] = t
    }
    function ee(e, t) {
        return Object.entries(Z).forEach((function(n) {
            var i = f(n, 2)
              , r = i[0]
              , o = i[1];
            Object.defineProperty(e, "$".concat(r), {
                get: function() {
                    var e = f(ye(t), 2)
                      , n = e[0]
                      , i = e[1];
                    return n = u({
                        interceptor: Y
                    }, n),
                    P(t, i),
                    o(t, n)
                },
                enumerable: !1
            })
        }
        )),
        e
    }
    function te(e, t, n) {
        try {
            for (var i = arguments.length, r = new Array(i > 3 ? i - 3 : 0), o = 3; o < i; o++)
                r[o - 3] = arguments[o];
            return n.apply(void 0, r)
        } catch (n) {
            ne(n, e, t)
        }
    }
    function ne(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
        Object.assign(e, {
            el: t,
            expression: n
        }),
        console.warn("Alpine Expression Error: ".concat(e.message, "\n\n").concat(n ? 'Expression: "' + n + '"\n\n' : ""), t),
        setTimeout((function() {
            throw e
        }
        ), 0)
    }
    var ie = !0;
    function re(e, t) {
        var n, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return oe(e, t)((function(e) {
            return n = e
        }
        ), i),
        n
    }
    function oe() {
        return se.apply(void 0, arguments)
    }
    var se = function(e, t) {
        var n = {};
        ee(n, e);
        var i = [n].concat(d(W(e)));
        if ("function" == typeof t)
            return ae(i, t);
        var r = function(e, t, n) {
            var i = function(e, t) {
                if (ce[e])
                    return ce[e];
                var n = Object.getPrototypeOf(a(o().mark((function e() {
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).constructor
                  , i = /^[\n\s]*if.*\(.*\)/.test(e) || /^(let|const)\s/.test(e) ? "(() => { ".concat(e, " })()") : e
                  , r = function() {
                    try {
                        return new n(["__self", "scope"],"with (scope) { __self.result = ".concat(i, " }; __self.finished = true; return __self.result;"))
                    } catch (n) {
                        return ne(n, t, e),
                        Promise.resolve()
                    }
                }
                  , s = r();
                return ce[e] = s,
                s
            }(t, n);
            return function() {
                var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}
                  , o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , s = o.scope
                  , a = void 0 === s ? {} : s
                  , c = o.params
                  , l = void 0 === c ? [] : c;
                i.result = void 0,
                i.finished = !1;
                var u = z([a].concat(d(e)));
                if ("function" == typeof i) {
                    var h = i(i, u).catch((function(e) {
                        return ne(e, n, t)
                    }
                    ));
                    i.finished ? (le(r, i.result, u, l, n),
                    i.result = void 0) : h.then((function(e) {
                        le(r, e, u, l, n)
                    }
                    )).catch((function(e) {
                        return ne(e, n, t)
                    }
                    )).finally((function() {
                        return i.result = void 0
                    }
                    ))
                }
            }
        }(i, t, e);
        return te.bind(null, e, t, r)
    };
    function ae(e, t) {
        return function() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}
              , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , r = i.scope
              , o = void 0 === r ? {} : r
              , s = i.params
              , a = void 0 === s ? [] : s
              , c = t.apply(z([o].concat(d(e))), a);
            le(n, c)
        }
    }
    var ce = {};
    function le(e, t, n, i, r) {
        if (ie && "function" == typeof t) {
            var o = t.apply(n, i);
            o instanceof Promise ? o.then((function(t) {
                return le(e, t, n, i)
            }
            )).catch((function(e) {
                return ne(e, r, t)
            }
            )) : e(o)
        } else
            e(t)
    }
    var ue = "x-";
    function he() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return ue + e
    }
    var de = {};
    function fe(e, t) {
        de[e] = t
    }
    function pe(e, t, n) {
        var i = {}
          , r = Array.from(t).map(we((function(e, t) {
            return i[e] = t
        }
        ))).filter(xe).map(function(e, t) {
            return function(n) {
                var i = n.name
                  , r = n.value
                  , o = i.match(Se())
                  , s = i.match(/:([a-zA-Z0-9\-:]+)/)
                  , a = i.match(/\.[^.\]]+(?=[^\]]*$)/g) || []
                  , c = t || e[i] || i;
                return {
                    type: o ? o[1] : null,
                    value: s ? s[1] : null,
                    modifiers: a.map((function(e) {
                        return e.replace(".", "")
                    }
                    )),
                    expression: r,
                    original: c
                }
            }
        }(i, n)).sort(Te);
        return r.map((function(t) {
            return function(e, t) {
                var n = function() {}
                  , i = de[t.type] || n
                  , r = ye(e)
                  , o = f(r, 2)
                  , s = o[0]
                  , a = o[1];
                !function(e, t, n) {
                    e._x_attributeCleanups || (e._x_attributeCleanups = {}),
                    e._x_attributeCleanups[t] || (e._x_attributeCleanups[t] = []),
                    e._x_attributeCleanups[t].push(n)
                }(e, t.original, a);
                var c = function() {
                    e._x_ignore || e._x_ignoreSelf || (i.inline && i.inline(e, t, s),
                    i = i.bind(i, e, t, s),
                    me ? ge.get(ve).push(i) : i())
                };
                return c.runCleanups = a,
                c
            }(e, t)
        }
        ))
    }
    var me = !1
      , ge = new Map
      , ve = Symbol();
    function be(e) {
        me = !0;
        var t = Symbol();
        ve = t,
        ge.set(t, []);
        var n = function() {
            for (; ge.get(t).length; )
                ge.get(t).shift()();
            ge.delete(t)
        };
        e(n),
        me = !1,
        n()
    }
    function ye(e) {
        var t = []
          , n = function(e) {
            var t = function() {};
            return [function(n) {
                var i = v(n);
                return e._x_effects || (e._x_effects = new Set,
                e._x_runEffects = function() {
                    e._x_effects.forEach((function(e) {
                        return e()
                    }
                    ))
                }
                ),
                e._x_effects.add(i),
                t = function() {
                    void 0 !== i && (e._x_effects.delete(i),
                    b(i))
                }
                ,
                i
            }
            , function() {
                t()
            }
            ]
        }(e)
          , i = f(n, 2)
          , r = i[0]
          , o = i[1];
        t.push(o);
        return [{
            Alpine: gt,
            effect: r,
            cleanup: function(e) {
                return t.push(e)
            },
            evaluateLater: oe.bind(oe, e),
            evaluate: re.bind(re, e)
        }, function() {
            return t.forEach((function(e) {
                return e()
            }
            ))
        }
        ]
    }
    var _e = function(e, t) {
        return function(n) {
            var i = n.name
              , r = n.value;
            return i.startsWith(e) && (i = i.replace(e, t)),
            {
                name: i,
                value: r
            }
        }
    };
    function we() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}
        ;
        return function(t) {
            var n = t.name
              , i = t.value
              , r = Ee.reduce((function(e, t) {
                return t(e)
            }
            ), {
                name: n,
                value: i
            })
              , o = r.name
              , s = r.value;
            return o !== n && e(o, n),
            {
                name: o,
                value: s
            }
        }
    }
    var Ee = [];
    function ke(e) {
        Ee.push(e)
    }
    function xe(e) {
        var t = e.name;
        return Se().test(t)
    }
    var Se = function() {
        return new RegExp("^".concat(ue, "([^:^.]+)\\b"))
    };
    var Ae = "DEFAULT"
      , Ce = ["ignore", "ref", "data", "id", "bind", "init", "for", "mask", "model", "modelable", "transition", "show", "if", Ae, "teleport", "element"];
    function Te(e, t) {
        var n = -1 === Ce.indexOf(e.type) ? Ae : e.type
          , i = -1 === Ce.indexOf(t.type) ? Ae : t.type;
        return Ce.indexOf(n) - Ce.indexOf(i)
    }
    function Le(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        e.dispatchEvent(new CustomEvent(t,{
            detail: n,
            bubbles: !0,
            composed: !0,
            cancelable: !0
        }))
    }
    var Oe = []
      , Pe = !1;
    function je() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}
        ;
        return queueMicrotask((function() {
            Pe || setTimeout((function() {
                Re()
            }
            ))
        }
        )),
        new Promise((function(t) {
            Oe.push((function() {
                e(),
                t()
            }
            ))
        }
        ))
    }
    function Re() {
        for (Pe = !1; Oe.length; )
            Oe.shift()()
    }
    function De(e, t) {
        if ("function" == typeof ShadowRoot && e instanceof ShadowRoot)
            Array.from(e.children).forEach((function(e) {
                return De(e, t)
            }
            ));
        else {
            var n = !1;
            if (t(e, (function() {
                return n = !0
            }
            )),
            !n)
                for (var i = e.firstElementChild; i; )
                    De(i, t),
                    i = i.nextElementSibling
        }
    }
    function Ne(e) {
        for (var t, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
            i[r - 1] = arguments[r];
        (t = console).warn.apply(t, ["Alpine Warning: ".concat(e)].concat(i))
    }
    var Ie = []
      , Me = [];
    function $e() {
        return Ie.map((function(e) {
            return e()
        }
        ))
    }
    function Ue() {
        return Ie.concat(Me).map((function(e) {
            return e()
        }
        ))
    }
    function Fe(e) {
        Ie.push(e)
    }
    function Be(e) {
        Me.push(e)
    }
    function He(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return qe(e, (function(e) {
            if ((t ? Ue() : $e()).some((function(t) {
                return e.matches(t)
            }
            )))
                return !0
        }
        ))
    }
    function qe(e, t) {
        if (e) {
            if (t(e))
                return e;
            if (e._x_teleportBack && (e = e._x_teleportBack),
            e.parentElement)
                return qe(e.parentElement, t)
        }
    }
    function Ve(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : De;
        be((function() {
            t(e, (function(e, t) {
                pe(e, e.attributes).forEach((function(e) {
                    return e()
                }
                )),
                e._x_ignore && t()
            }
            ))
        }
        ))
    }
    function Je(e, t) {
        return Array.isArray(t) ? We(e, t.join(" ")) : "object" === c(t) && null !== t ? function(e, t) {
            var n = function(e) {
                return e.split(" ").filter(Boolean)
            }
              , i = Object.entries(t).flatMap((function(e) {
                var t = f(e, 2)
                  , i = t[0];
                return !!t[1] && n(i)
            }
            )).filter(Boolean)
              , r = Object.entries(t).flatMap((function(e) {
                var t = f(e, 2)
                  , i = t[0];
                return !t[1] && n(i)
            }
            )).filter(Boolean)
              , o = []
              , s = [];
            return r.forEach((function(t) {
                e.classList.contains(t) && (e.classList.remove(t),
                s.push(t))
            }
            )),
            i.forEach((function(t) {
                e.classList.contains(t) || (e.classList.add(t),
                o.push(t))
            }
            )),
            function() {
                s.forEach((function(t) {
                    return e.classList.add(t)
                }
                )),
                o.forEach((function(t) {
                    return e.classList.remove(t)
                }
                ))
            }
        }(e, t) : "function" == typeof t ? Je(e, t()) : We(e, t)
    }
    function We(e, t) {
        var n, i;
        return t = !0 === t ? t = "" : t || "",
        n = t.split(" ").filter((function(t) {
            return !e.classList.contains(t)
        }
        )).filter(Boolean),
        (i = e.classList).add.apply(i, d(n)),
        function() {
            var t;
            (t = e.classList).remove.apply(t, d(n))
        }
    }
    function ze(e, t) {
        return "object" === c(t) && null !== t ? function(e, t) {
            var n = {};
            return Object.entries(t).forEach((function(t) {
                var i = f(t, 2)
                  , r = i[0]
                  , o = i[1];
                n[r] = e.style[r],
                r.startsWith("--") || (r = r.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()),
                e.style.setProperty(r, o)
            }
            )),
            setTimeout((function() {
                0 === e.style.length && e.removeAttribute("style")
            }
            )),
            function() {
                ze(e, n)
            }
        }(e, t) : function(e, t) {
            var n = e.getAttribute("style", t);
            return e.setAttribute("style", t),
            function() {
                e.setAttribute("style", n || "")
            }
        }(e, t)
    }
    function Ge(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}
          , n = !1;
        return function() {
            n ? t.apply(this, arguments) : (n = !0,
            e.apply(this, arguments))
        }
    }
    function Ye(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        e._x_transition || (e._x_transition = {
            enter: {
                during: n,
                start: n,
                end: n
            },
            leave: {
                during: n,
                start: n,
                end: n
            },
            in: function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}
                  , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}
                ;
                Xe(e, t, {
                    during: this.enter.during,
                    start: this.enter.start,
                    end: this.enter.end
                }, n, i)
            },
            out: function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}
                  , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}
                ;
                Xe(e, t, {
                    during: this.leave.during,
                    start: this.leave.start,
                    end: this.leave.end
                }, n, i)
            }
        })
    }
    function Ke(e) {
        var t = e.parentNode;
        if (t)
            return t._x_hidePromise ? t : Ke(t)
    }
    function Xe(e, t) {
        var n, i, r, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, s = o.during, a = o.start, c = o.end, l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {}
        , u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function() {}
        ;
        if (e._x_transitioning && e._x_transitioning.cancel(),
        0 === Object.keys(s).length && 0 === Object.keys(a).length && 0 === Object.keys(c).length)
            return l(),
            void u();
        Ze(e, {
            start: function() {
                n = t(e, a)
            },
            during: function() {
                i = t(e, s)
            },
            before: l,
            end: function() {
                n(),
                r = t(e, c)
            },
            after: u,
            cleanup: function() {
                i(),
                r()
            }
        })
    }
    function Ze(e, t) {
        var n, i, r, o = Ge((function() {
            U((function() {
                n = !0,
                i || t.before(),
                r || (t.end(),
                Re()),
                t.after(),
                e.isConnected && t.cleanup(),
                delete e._x_transitioning
            }
            ))
        }
        ));
        e._x_transitioning = {
            beforeCancels: [],
            beforeCancel: function(e) {
                this.beforeCancels.push(e)
            },
            cancel: Ge((function() {
                for (; this.beforeCancels.length; )
                    this.beforeCancels.shift()();
                o()
            }
            )),
            finish: o
        },
        U((function() {
            t.start(),
            t.during()
        }
        )),
        Pe = !0,
        requestAnimationFrame((function() {
            if (!n) {
                var o = 1e3 * Number(getComputedStyle(e).transitionDuration.replace(/,.*/, "").replace("s", ""))
                  , s = 1e3 * Number(getComputedStyle(e).transitionDelay.replace(/,.*/, "").replace("s", ""));
                0 === o && (o = 1e3 * Number(getComputedStyle(e).animationDuration.replace("s", ""))),
                U((function() {
                    t.before()
                }
                )),
                i = !0,
                requestAnimationFrame((function() {
                    n || (U((function() {
                        t.end()
                    }
                    )),
                    Re(),
                    setTimeout(e._x_transitioning.finish, o + s),
                    r = !0)
                }
                ))
            }
        }
        ))
    }
    function Qe(e, t, n) {
        if (-1 === e.indexOf(t))
            return n;
        var i = e[e.indexOf(t) + 1];
        if (!i)
            return n;
        if ("scale" === t && isNaN(i))
            return n;
        if ("duration" === t) {
            var r = i.match(/([0-9]+)ms/);
            if (r)
                return r[1]
        }
        return "origin" === t && ["top", "right", "left", "center", "bottom"].includes(e[e.indexOf(t) + 2]) ? [i, e[e.indexOf(t) + 2]].join(" ") : i
    }
    fe("transition", (function(e, t, n) {
        var i = t.value
          , r = t.modifiers
          , o = t.expression
          , s = n.evaluate;
        "function" == typeof o && (o = s(o)),
        o ? function(e, t, n) {
            Ye(e, Je, "");
            var i = {
                enter: function(t) {
                    e._x_transition.enter.during = t
                },
                "enter-start": function(t) {
                    e._x_transition.enter.start = t
                },
                "enter-end": function(t) {
                    e._x_transition.enter.end = t
                },
                leave: function(t) {
                    e._x_transition.leave.during = t
                },
                "leave-start": function(t) {
                    e._x_transition.leave.start = t
                },
                "leave-end": function(t) {
                    e._x_transition.leave.end = t
                }
            };
            i[n](t)
        }(e, o, i) : function(e, t, n) {
            Ye(e, ze);
            var i = !t.includes("in") && !t.includes("out") && !n
              , r = i || t.includes("in") || ["enter"].includes(n)
              , o = i || t.includes("out") || ["leave"].includes(n);
            t.includes("in") && !i && (t = t.filter((function(e, n) {
                return n < t.indexOf("out")
            }
            )));
            t.includes("out") && !i && (t = t.filter((function(e, n) {
                return n > t.indexOf("out")
            }
            )));
            var s = !t.includes("opacity") && !t.includes("scale")
              , a = s || t.includes("opacity")
              , c = s || t.includes("scale")
              , l = a ? 0 : 1
              , u = c ? Qe(t, "scale", 95) / 100 : 1
              , h = Qe(t, "delay", 0)
              , d = Qe(t, "origin", "center")
              , f = "opacity, transform"
              , p = Qe(t, "duration", 150) / 1e3
              , m = Qe(t, "duration", 75) / 1e3
              , g = "cubic-bezier(0.4, 0.0, 0.2, 1)";
            r && (e._x_transition.enter.during = {
                transformOrigin: d,
                transitionDelay: h,
                transitionProperty: f,
                transitionDuration: "".concat(p, "s"),
                transitionTimingFunction: g
            },
            e._x_transition.enter.start = {
                opacity: l,
                transform: "scale(".concat(u, ")")
            },
            e._x_transition.enter.end = {
                opacity: 1,
                transform: "scale(1)"
            });
            o && (e._x_transition.leave.during = {
                transformOrigin: d,
                transitionDelay: h,
                transitionProperty: f,
                transitionDuration: "".concat(m, "s"),
                transitionTimingFunction: g
            },
            e._x_transition.leave.start = {
                opacity: 1,
                transform: "scale(1)"
            },
            e._x_transition.leave.end = {
                opacity: l,
                transform: "scale(".concat(u, ")")
            })
        }(e, r, i)
    }
    )),
    window.Element.prototype._x_toggleAndCascadeWithTransitions = function(e, t, n, i) {
        var r = function() {
            "visible" === document.visibilityState ? requestAnimationFrame(n) : setTimeout(n)
        };
        t ? e._x_transition && (e._x_transition.enter || e._x_transition.leave) ? e._x_transition.enter && (Object.entries(e._x_transition.enter.during).length || Object.entries(e._x_transition.enter.start).length || Object.entries(e._x_transition.enter.end).length) ? e._x_transition.in(n) : r() : e._x_transition ? e._x_transition.in(n) : r() : (e._x_hidePromise = e._x_transition ? new Promise((function(t, n) {
            e._x_transition.out((function() {}
            ), (function() {
                return t(i)
            }
            )),
            e._x_transitioning.beforeCancel((function() {
                return n({
                    isFromCancelledTransition: !0
                })
            }
            ))
        }
        )) : Promise.resolve(i),
        queueMicrotask((function() {
            var t = Ke(e);
            t ? (t._x_hideChildren || (t._x_hideChildren = []),
            t._x_hideChildren.push(e)) : queueMicrotask((function() {
                (function e(t) {
                    var n = Promise.all([t._x_hidePromise].concat(d((t._x_hideChildren || []).map(e)))).then((function(e) {
                        return (0,
                        f(e, 1)[0])()
                    }
                    ));
                    return delete t._x_hidePromise,
                    delete t._x_hideChildren,
                    n
                }
                )(e).catch((function(e) {
                    if (!e.isFromCancelledTransition)
                        throw e
                }
                ))
            }
            ))
        }
        )))
    }
    ;
    var et = !1;
    function tt(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}
        ;
        return function() {
            return et ? t.apply(void 0, arguments) : e.apply(void 0, arguments)
        }
    }
    function nt(e, t, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
        switch (e._x_bindings || (e._x_bindings = g({})),
        e._x_bindings[t] = n,
        t = i.includes("camel") ? at(t) : t) {
        case "value":
            it(e, n);
            break;
        case "style":
            ot(e, n);
            break;
        case "class":
            rt(e, n);
            break;
        default:
            st(e, t, n)
        }
    }
    function it(e, t) {
        if ("radio" === e.type)
            void 0 === e.attributes.value && (e.value = t),
            window.fromModel && (e.checked = ct(e.value, t));
        else if ("checkbox" === e.type)
            Number.isInteger(t) ? e.value = t : Number.isInteger(t) || Array.isArray(t) || "boolean" == typeof t || [null, void 0].includes(t) ? Array.isArray(t) ? e.checked = t.some((function(t) {
                return ct(t, e.value)
            }
            )) : e.checked = !!t : e.value = String(t);
        else if ("SELECT" === e.tagName)
            !function(e, t) {
                var n = [].concat(t).map((function(e) {
                    return e + ""
                }
                ));
                Array.from(e.options).forEach((function(e) {
                    e.selected = n.includes(e.value)
                }
                ))
            }(e, t);
        else {
            if (e.value === t)
                return;
            e.value = t
        }
    }
    function rt(e, t) {
        e._x_undoAddedClasses && e._x_undoAddedClasses(),
        e._x_undoAddedClasses = Je(e, t)
    }
    function ot(e, t) {
        e._x_undoAddedStyles && e._x_undoAddedStyles(),
        e._x_undoAddedStyles = ze(e, t)
    }
    function st(e, t, n) {
        [null, void 0, !1].includes(n) && function(e) {
            return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(e)
        }(t) ? e.removeAttribute(t) : (lt(t) && (n = t),
        function(e, t, n) {
            e.getAttribute(t) != n && e.setAttribute(t, n)
        }(e, t, n))
    }
    function at(e) {
        return e.toLowerCase().replace(/-(\w)/g, (function(e, t) {
            return t.toUpperCase()
        }
        ))
    }
    function ct(e, t) {
        return e == t
    }
    function lt(e) {
        return ["disabled", "checked", "required", "readonly", "hidden", "open", "selected", "autofocus", "itemscope", "multiple", "novalidate", "allowfullscreen", "allowpaymentrequest", "formnovalidate", "autoplay", "controls", "loop", "muted", "playsinline", "default", "ismap", "reversed", "async", "defer", "nomodule"].includes(e)
    }
    function ut(e, t) {
        var n;
        return function() {
            var i = this
              , r = arguments
              , o = function() {
                n = null,
                e.apply(i, r)
            };
            clearTimeout(n),
            n = setTimeout(o, t)
        }
    }
    function ht(e, t) {
        var n;
        return function() {
            var i = this
              , r = arguments;
            n || (e.apply(i, r),
            n = !0,
            setTimeout((function() {
                return n = !1
            }
            ), t))
        }
    }
    var dt = {}
      , ft = !1;
    var pt = {};
    var mt = {};
    var gt = {
        get reactive() {
            return g
        },
        get release() {
            return b
        },
        get effect() {
            return v
        },
        get raw() {
            return y
        },
        version: "3.10.2",
        flushAndStopDeferringMutations: function() {
            F = !1,
            H(B),
            B = []
        },
        dontAutoEvaluateFunctions: function(e) {
            var t = ie;
            ie = !1,
            e(),
            ie = t
        },
        disableEffectScheduling: function(e) {
            A = !1,
            e(),
            A = !0
        },
        setReactivityEngine: function(e) {
            g = e.reactive,
            b = e.release,
            v = function(t) {
                return e.effect(t, {
                    scheduler: function(e) {
                        A ? k(e) : e()
                    }
                })
            }
            ,
            y = e.raw
        },
        closestDataStack: W,
        skipDuringClone: tt,
        addRootSelector: Fe,
        addInitSelector: Be,
        addScopeToNode: V,
        deferMutations: function() {
            F = !0
        },
        mapAttributes: ke,
        evaluateLater: oe,
        setEvaluator: function(e) {
            se = e
        },
        mergeProxies: z,
        findClosest: qe,
        closestRoot: He,
        interceptor: Y,
        transition: Xe,
        setStyles: ze,
        mutateDom: U,
        directive: fe,
        throttle: ht,
        debounce: ut,
        evaluate: re,
        initTree: Ve,
        nextTick: je,
        prefixed: he,
        prefix: function(e) {
            ue = e
        },
        plugin: function(e) {
            e(gt)
        },
        magic: Q,
        store: function(e, t) {
            if (ft || (dt = g(dt),
            ft = !0),
            void 0 === t)
                return dt[e];
            dt[e] = t,
            "object" === c(t) && null !== t && t.hasOwnProperty("init") && "function" == typeof t.init && dt[e].init(),
            G(dt[e])
        },
        start: function() {
            var e;
            document.body || Ne("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),
            Le(document, "alpine:init"),
            Le(document, "alpine:initializing"),
            N(),
            e = function(e) {
                return Ve(e, De)
            }
            ,
            O.push(e),
            P((function(e) {
                De(e, (function(e) {
                    return j(e)
                }
                ))
            }
            )),
            function(e) {
                T.push(e)
            }((function(e, t) {
                pe(e, t).forEach((function(e) {
                    return e()
                }
                ))
            }
            )),
            Array.from(document.querySelectorAll(Ue())).filter((function(e) {
                return !He(e.parentElement, !0)
            }
            )).forEach((function(e) {
                Ve(e)
            }
            )),
            Le(document, "alpine:initialized")
        },
        clone: function(e, t) {
            var n, i;
            t._x_dataStack || (t._x_dataStack = e._x_dataStack),
            et = !0,
            n = function() {
                var e;
                e = !1,
                Ve(t, (function(t, n) {
                    De(t, (function(t, i) {
                        if (e && function(e) {
                            return $e().some((function(t) {
                                return e.matches(t)
                            }
                            ))
                        }(t))
                            return i();
                        e = !0,
                        n(t, i)
                    }
                    ))
                }
                ))
            }
            ,
            i = v,
            C((function(e, t) {
                var n = i(e);
                return b(n),
                function() {}
            }
            )),
            n(),
            C(i),
            et = !1
        },
        bound: function(e, t, n) {
            if (e._x_bindings && void 0 !== e._x_bindings[t])
                return e._x_bindings[t];
            var i = e.getAttribute(t);
            return null === i ? "function" == typeof n ? n() : n : lt(t) ? !![t, "true"].includes(i) : "" === i || i
        },
        $data: q,
        data: function(e, t) {
            mt[e] = t
        },
        bind: function(e, t) {
            pt[e] = "function" != typeof t ? function() {
                return t
            }
            : t
        }
    };
    function vt(e, t) {
        for (var n = Object.create(null), i = e.split(","), r = 0; r < i.length; r++)
            n[i[r]] = !0;
        return t ? function(e) {
            return !!n[e.toLowerCase()]
        }
        : function(e) {
            return !!n[e]
        }
    }
    h(i = {}, 1, "TEXT"),
    h(i, 2, "CLASS"),
    h(i, 4, "STYLE"),
    h(i, 8, "PROPS"),
    h(i, 16, "FULL_PROPS"),
    h(i, 32, "HYDRATE_EVENTS"),
    h(i, 64, "STABLE_FRAGMENT"),
    h(i, 128, "KEYED_FRAGMENT"),
    h(i, 256, "UNKEYED_FRAGMENT"),
    h(i, 512, "NEED_PATCH"),
    h(i, 1024, "DYNAMIC_SLOTS"),
    h(i, 2048, "DEV_ROOT_FRAGMENT"),
    h(i, -1, "HOISTED"),
    h(i, -2, "BAIL"),
    h(r = {}, 1, "STABLE"),
    h(r, 2, "DYNAMIC"),
    h(r, 3, "FORWARDED");
    var bt, yt = Object.freeze({}), _t = (Object.freeze([]),
    Object.assign), wt = Object.prototype.hasOwnProperty, Et = function(e, t) {
        return wt.call(e, t)
    }, kt = Array.isArray, xt = function(e) {
        return "[object Map]" === Tt(e)
    }, St = function(e) {
        return "symbol" === c(e)
    }, At = function(e) {
        return null !== e && "object" === c(e)
    }, Ct = Object.prototype.toString, Tt = function(e) {
        return Ct.call(e)
    }, Lt = function(e) {
        return Tt(e).slice(8, -1)
    }, Ot = function(e) {
        return "string" == typeof e && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e
    }, Pt = function(e) {
        var t = Object.create(null);
        return function(n) {
            return t[n] || (t[n] = e(n))
        }
    }, jt = /-(\w)/g, Rt = (Pt((function(e) {
        return e.replace(jt, (function(e, t) {
            return t ? t.toUpperCase() : ""
        }
        ))
    }
    )),
    /\B([A-Z])/g), Dt = (Pt((function(e) {
        return e.replace(Rt, "-$1").toLowerCase()
    }
    )),
    Pt((function(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }
    ))), Nt = (Pt((function(e) {
        return e ? "on".concat(Dt(e)) : ""
    }
    )),
    function(e, t) {
        return e !== t && (e == e || t == t)
    }
    ), It = new WeakMap, Mt = [], $t = Symbol("iterate"), Ut = Symbol("Map key iterate");
    function Ft(e) {
        return e && !0 === e._isEffect
    }
    var Bt = 0;
    function Ht(e, t) {
        var n = function() {
            if (!n.active)
                return e();
            if (!Mt.includes(n)) {
                qt(n);
                try {
                    return Jt.push(Vt),
                    Vt = !0,
                    Mt.push(n),
                    bt = n,
                    e()
                } finally {
                    Mt.pop(),
                    zt(),
                    bt = Mt[Mt.length - 1]
                }
            }
        };
        return n.id = Bt++,
        n.allowRecurse = !!t.allowRecurse,
        n._isEffect = !0,
        n.active = !0,
        n.raw = e,
        n.deps = [],
        n.options = t,
        n
    }
    function qt(e) {
        var t = e.deps;
        if (t.length) {
            for (var n = 0; n < t.length; n++)
                t[n].delete(e);
            t.length = 0
        }
    }
    var Vt = !0
      , Jt = [];
    function Wt() {
        Jt.push(Vt),
        Vt = !1
    }
    function zt() {
        var e = Jt.pop();
        Vt = void 0 === e || e
    }
    function Gt(e, t, n) {
        if (Vt && void 0 !== bt) {
            var i = It.get(e);
            i || It.set(e, i = new Map);
            var r = i.get(n);
            r || i.set(n, r = new Set),
            r.has(bt) || (r.add(bt),
            bt.deps.push(r),
            bt.options.onTrack && bt.options.onTrack({
                effect: bt,
                target: e,
                type: t,
                key: n
            }))
        }
    }
    function Yt(e, t, n, i, r, o) {
        var s = It.get(e);
        if (s) {
            var a = new Set
              , c = function(e) {
                e && e.forEach((function(e) {
                    (e !== bt || e.allowRecurse) && a.add(e)
                }
                ))
            };
            if ("clear" === t)
                s.forEach(c);
            else if ("length" === n && kt(e))
                s.forEach((function(e, t) {
                    ("length" === t || t >= i) && c(e)
                }
                ));
            else
                switch (void 0 !== n && c(s.get(n)),
                t) {
                case "add":
                    kt(e) ? Ot(n) && c(s.get("length")) : (c(s.get($t)),
                    xt(e) && c(s.get(Ut)));
                    break;
                case "delete":
                    kt(e) || (c(s.get($t)),
                    xt(e) && c(s.get(Ut)));
                    break;
                case "set":
                    xt(e) && c(s.get($t))
                }
            a.forEach((function(s) {
                s.options.onTrigger && s.options.onTrigger({
                    effect: s,
                    target: e,
                    key: n,
                    type: t,
                    newValue: i,
                    oldValue: r,
                    oldTarget: o
                }),
                s.options.scheduler ? s.options.scheduler(s) : s()
            }
            ))
        }
    }
    var Kt = vt("__proto__,__v_isRef,__isVue")
      , Xt = new Set(Object.getOwnPropertyNames(Symbol).map((function(e) {
        return Symbol[e]
    }
    )).filter(St))
      , Zt = rn()
      , Qt = rn(!1, !0)
      , en = rn(!0)
      , tn = rn(!0, !0)
      , nn = {};
    function rn() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
          , t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return function(n, i, r) {
            if ("__v_isReactive" === i)
                return !e;
            if ("__v_isReadonly" === i)
                return e;
            if ("__v_raw" === i && r === (e ? t ? Rn : jn : t ? Pn : On).get(n))
                return n;
            var o = kt(n);
            if (!e && o && Et(nn, i))
                return Reflect.get(nn, i, r);
            var s = Reflect.get(n, i, r);
            return (St(i) ? Xt.has(i) : Kt(i)) ? s : (e || Gt(n, "get", i),
            t ? s : $n(s) ? !o || !Ot(i) ? s.value : s : At(s) ? e ? Nn(s) : Dn(s) : s)
        }
    }
    function on() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return function(t, n, i, r) {
            var o = t[n];
            if (!e && (i = Mn(i),
            o = Mn(o),
            !kt(t) && $n(o) && !$n(i)))
                return o.value = i,
                !0;
            var s = kt(t) && Ot(n) ? Number(n) < t.length : Et(t, n)
              , a = Reflect.set(t, n, i, r);
            return t === Mn(r) && (s ? Nt(i, o) && Yt(t, "set", n, i, o) : Yt(t, "add", n, i)),
            a
        }
    }
    ["includes", "indexOf", "lastIndexOf"].forEach((function(e) {
        var t = Array.prototype[e];
        nn[e] = function() {
            for (var e = Mn(this), n = 0, i = this.length; n < i; n++)
                Gt(e, "get", n + "");
            for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
                o[s] = arguments[s];
            var a = t.apply(e, o);
            return -1 === a || !1 === a ? t.apply(e, o.map(Mn)) : a
        }
    }
    )),
    ["push", "pop", "shift", "unshift", "splice"].forEach((function(e) {
        var t = Array.prototype[e];
        nn[e] = function() {
            Wt();
            for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++)
                n[i] = arguments[i];
            var r = t.apply(this, n);
            return zt(),
            r
        }
    }
    ));
    var sn = {
        get: Zt,
        set: on(),
        deleteProperty: function(e, t) {
            var n = Et(e, t)
              , i = e[t]
              , r = Reflect.deleteProperty(e, t);
            return r && n && Yt(e, "delete", t, void 0, i),
            r
        },
        has: function(e, t) {
            var n = Reflect.has(e, t);
            return St(t) && Xt.has(t) || Gt(e, "has", t),
            n
        },
        ownKeys: function(e) {
            return Gt(e, "iterate", kt(e) ? "length" : $t),
            Reflect.ownKeys(e)
        }
    }
      , an = {
        get: en,
        set: function(e, t) {
            return console.warn('Set operation on key "'.concat(String(t), '" failed: target is readonly.'), e),
            !0
        },
        deleteProperty: function(e, t) {
            return console.warn('Delete operation on key "'.concat(String(t), '" failed: target is readonly.'), e),
            !0
        }
    }
      , cn = (_t({}, sn, {
        get: Qt,
        set: on(!0)
    }),
    _t({}, an, {
        get: tn
    }),
    function(e) {
        return At(e) ? Dn(e) : e
    }
    )
      , ln = function(e) {
        return At(e) ? Nn(e) : e
    }
      , un = function(e) {
        return e
    }
      , hn = function(e) {
        return Reflect.getPrototypeOf(e)
    };
    function dn(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          , i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
          , r = Mn(e = e.__v_raw)
          , o = Mn(t);
        t !== o && !n && Gt(r, "get", t),
        !n && Gt(r, "get", o);
        var s = hn(r)
          , a = s.has
          , c = i ? un : n ? ln : cn;
        return a.call(r, t) ? c(e.get(t)) : a.call(r, o) ? c(e.get(o)) : void (e !== r && e.get(t))
    }
    function fn(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          , n = this.__v_raw
          , i = Mn(n)
          , r = Mn(e);
        return e !== r && !t && Gt(i, "has", e),
        !t && Gt(i, "has", r),
        e === r ? n.has(e) : n.has(e) || n.has(r)
    }
    function pn(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return e = e.__v_raw,
        !t && Gt(Mn(e), "iterate", $t),
        Reflect.get(e, "size", e)
    }
    function mn(e) {
        e = Mn(e);
        var t = Mn(this);
        return hn(t).has.call(t, e) || (t.add(e),
        Yt(t, "add", e, e)),
        this
    }
    function gn(e, t) {
        t = Mn(t);
        var n = Mn(this)
          , i = hn(n)
          , r = i.has
          , o = i.get
          , s = r.call(n, e);
        s ? Ln(n, r, e) : (e = Mn(e),
        s = r.call(n, e));
        var a = o.call(n, e);
        return n.set(e, t),
        s ? Nt(t, a) && Yt(n, "set", e, t, a) : Yt(n, "add", e, t),
        this
    }
    function vn(e) {
        var t = Mn(this)
          , n = hn(t)
          , i = n.has
          , r = n.get
          , o = i.call(t, e);
        o ? Ln(t, i, e) : (e = Mn(e),
        o = i.call(t, e));
        var s = r ? r.call(t, e) : void 0
          , a = t.delete(e);
        return o && Yt(t, "delete", e, void 0, s),
        a
    }
    function bn() {
        var e = Mn(this)
          , t = 0 !== e.size
          , n = xt(e) ? new Map(e) : new Set(e)
          , i = e.clear();
        return t && Yt(e, "clear", void 0, void 0, n),
        i
    }
    function yn(e, t) {
        return function(n, i) {
            var r = this
              , o = r.__v_raw
              , s = Mn(o)
              , a = t ? un : e ? ln : cn;
            return !e && Gt(s, "iterate", $t),
            o.forEach((function(e, t) {
                return n.call(i, a(e), a(t), r)
            }
            ))
        }
    }
    function _n(e, t, n) {
        return function() {
            var i = this.__v_raw
              , r = Mn(i)
              , o = xt(r)
              , s = "entries" === e || e === Symbol.iterator && o
              , a = "keys" === e && o
              , c = i[e].apply(i, arguments)
              , l = n ? un : t ? ln : cn;
            return !t && Gt(r, "iterate", a ? Ut : $t),
            h({
                next: function() {
                    var e = c.next()
                      , t = e.value
                      , n = e.done;
                    return n ? {
                        value: t,
                        done: n
                    } : {
                        value: s ? [l(t[0]), l(t[1])] : l(t),
                        done: n
                    }
                }
            }, Symbol.iterator, (function() {
                return this
            }
            ))
        }
    }
    function wn(e) {
        return function() {
            var t = (arguments.length <= 0 ? void 0 : arguments[0]) ? 'on key "'.concat(arguments.length <= 0 ? void 0 : arguments[0], '" ') : "";
            return console.warn("".concat(Dt(e), " operation ").concat(t, "failed: target is readonly."), Mn(this)),
            "delete" !== e && this
        }
    }
    var En = {
        get: function(e) {
            return dn(this, e)
        },
        get size() {
            return pn(this)
        },
        has: fn,
        add: mn,
        set: gn,
        delete: vn,
        clear: bn,
        forEach: yn(!1, !1)
    }
      , kn = {
        get: function(e) {
            return dn(this, e, !1, !0)
        },
        get size() {
            return pn(this)
        },
        has: fn,
        add: mn,
        set: gn,
        delete: vn,
        clear: bn,
        forEach: yn(!1, !0)
    }
      , xn = {
        get: function(e) {
            return dn(this, e, !0)
        },
        get size() {
            return pn(this, !0)
        },
        has: function(e) {
            return fn.call(this, e, !0)
        },
        add: wn("add"),
        set: wn("set"),
        delete: wn("delete"),
        clear: wn("clear"),
        forEach: yn(!0, !1)
    }
      , Sn = {
        get: function(e) {
            return dn(this, e, !0, !0)
        },
        get size() {
            return pn(this, !0)
        },
        has: function(e) {
            return fn.call(this, e, !0)
        },
        add: wn("add"),
        set: wn("set"),
        delete: wn("delete"),
        clear: wn("clear"),
        forEach: yn(!0, !0)
    };
    function An(e, t) {
        var n = t ? e ? Sn : kn : e ? xn : En;
        return function(t, i, r) {
            return "__v_isReactive" === i ? !e : "__v_isReadonly" === i ? e : "__v_raw" === i ? t : Reflect.get(Et(n, i) && i in t ? n : t, i, r)
        }
    }
    ["keys", "values", "entries", Symbol.iterator].forEach((function(e) {
        En[e] = _n(e, !1, !1),
        xn[e] = _n(e, !0, !1),
        kn[e] = _n(e, !1, !0),
        Sn[e] = _n(e, !0, !0)
    }
    ));
    var Cn = {
        get: An(!1, !1)
    }
      , Tn = (An(!1, !0),
    {
        get: An(!0, !1)
    });
    An(!0, !0);
    function Ln(e, t, n) {
        var i = Mn(n);
        if (i !== n && t.call(e, i)) {
            var r = Lt(e);
            console.warn("Reactive ".concat(r, " contains both the raw and reactive versions of the same object").concat("Map" === r ? " as keys" : "", ", which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible."))
        }
    }
    var On = new WeakMap
      , Pn = new WeakMap
      , jn = new WeakMap
      , Rn = new WeakMap;
    function Dn(e) {
        return e && e.__v_isReadonly ? e : In(e, !1, sn, Cn, On)
    }
    function Nn(e) {
        return In(e, !0, an, Tn, jn)
    }
    function In(e, t, n, i, r) {
        if (!At(e))
            return console.warn("value cannot be made reactive: ".concat(String(e))),
            e;
        if (e.__v_raw && (!t || !e.__v_isReactive))
            return e;
        var o = r.get(e);
        if (o)
            return o;
        var s, a = (s = e).__v_skip || !Object.isExtensible(s) ? 0 : function(e) {
            switch (e) {
            case "Object":
            case "Array":
                return 1;
            case "Map":
            case "Set":
            case "WeakMap":
            case "WeakSet":
                return 2;
            default:
                return 0
            }
        }(Lt(s));
        if (0 === a)
            return e;
        var c = new Proxy(e,2 === a ? i : n);
        return r.set(e, c),
        c
    }
    function Mn(e) {
        return e && Mn(e.__v_raw) || e
    }
    function $n(e) {
        return Boolean(e && !0 === e.__v_isRef)
    }
    Q("nextTick", (function() {
        return je
    }
    )),
    Q("dispatch", (function(e) {
        return Le.bind(Le, e)
    }
    )),
    Q("watch", (function(e, t) {
        var n = t.evaluateLater
          , i = t.effect;
        return function(t, r) {
            var o, s = n(t), a = !0, c = i((function() {
                return s((function(e) {
                    JSON.stringify(e),
                    a ? o = e : queueMicrotask((function() {
                        r(e, o),
                        o = e
                    }
                    )),
                    a = !1
                }
                ))
            }
            ));
            e._x_effects.delete(c)
        }
    }
    )),
    Q("store", (function() {
        return dt
    }
    )),
    Q("data", (function(e) {
        return q(e)
    }
    )),
    Q("root", (function(e) {
        return He(e)
    }
    )),
    Q("refs", (function(e) {
        return e._x_refs_proxy || (e._x_refs_proxy = z(function(e) {
            var t = []
              , n = e;
            for (; n; )
                n._x_refs && t.push(n._x_refs),
                n = n.parentNode;
            return t
        }(e))),
        e._x_refs_proxy
    }
    ));
    var Un = {};
    function Fn(e) {
        return Un[e] || (Un[e] = 0),
        ++Un[e]
    }
    function Bn(e, t) {
        return qe(e, (function(e) {
            if (e._x_ids && e._x_ids[t])
                return !0
        }
        ))
    }
    function Hn(e, t, n) {
        Q(t, (function(t) {
            return Ne("You can't use [$".concat(directiveName, '] without first installing the "').concat(e, '" plugin here: https://alpinejs.dev/plugins/').concat(n), t)
        }
        ))
    }
    Q("id", (function(e) {
        return function(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
              , i = Bn(e, t)
              , r = i ? i._x_ids[t] : Fn(t);
            return n ? "".concat(t, "-").concat(r, "-").concat(n) : "".concat(t, "-").concat(r)
        }
    }
    )),
    Q("el", (function(e) {
        return e
    }
    )),
    Hn("Focus", "focus", "focus"),
    Hn("Persist", "persist", "persist"),
    fe("modelable", (function(e, t, n) {
        var i = t.expression
          , r = n.effect
          , o = n.evaluateLater
          , s = o(i)
          , a = function() {
            var e;
            return s((function(t) {
                return e = t
            }
            )),
            e
        }
          , c = o("".concat(i, " = __placeholder"))
          , l = function(e) {
            return c((function() {}
            ), {
                scope: {
                    __placeholder: e
                }
            })
        }
          , u = a();
        l(u),
        queueMicrotask((function() {
            if (e._x_model) {
                e._x_removeModelListeners.default();
                var t = e._x_model.get
                  , n = e._x_model.set;
                r((function() {
                    return l(t())
                }
                )),
                r((function() {
                    return n(a())
                }
                ))
            }
        }
        ))
    }
    )),
    fe("teleport", (function(e, t, n) {
        var i = t.expression
          , r = n.cleanup;
        "template" !== e.tagName.toLowerCase() && Ne("x-teleport can only be used on a <template> tag", e);
        var o = document.querySelector(i);
        o || Ne('Cannot find x-teleport element for selector: "'.concat(i, '"'));
        var s = e.content.cloneNode(!0).firstElementChild;
        e._x_teleport = s,
        s._x_teleportBack = e,
        e._x_forwardEvents && e._x_forwardEvents.forEach((function(t) {
            s.addEventListener(t, (function(t) {
                t.stopPropagation(),
                e.dispatchEvent(new t.constructor(t.type,t))
            }
            ))
        }
        )),
        V(s, {}, e),
        U((function() {
            o.appendChild(s),
            Ve(s),
            s._x_ignore = !0
        }
        )),
        r((function() {
            return s.remove()
        }
        ))
    }
    ));
    var qn = function() {};
    function Vn(e, t, n, i) {
        var r = e
          , o = function(e) {
            return i(e)
        }
          , s = {}
          , a = function(e, t) {
            return function(n) {
                return t(e, n)
            }
        };
        if (n.includes("dot") && (t = t.replace(/-/g, ".")),
        n.includes("camel") && (t = function(e) {
            return e.toLowerCase().replace(/-(\w)/g, (function(e, t) {
                return t.toUpperCase()
            }
            ))
        }(t)),
        n.includes("passive") && (s.passive = !0),
        n.includes("capture") && (s.capture = !0),
        n.includes("window") && (r = window),
        n.includes("document") && (r = document),
        n.includes("prevent") && (o = a(o, (function(e, t) {
            t.preventDefault(),
            e(t)
        }
        ))),
        n.includes("stop") && (o = a(o, (function(e, t) {
            t.stopPropagation(),
            e(t)
        }
        ))),
        n.includes("self") && (o = a(o, (function(t, n) {
            n.target === e && t(n)
        }
        ))),
        (n.includes("away") || n.includes("outside")) && (r = document,
        o = a(o, (function(t, n) {
            e.contains(n.target) || !1 !== n.target.isConnected && (e.offsetWidth < 1 && e.offsetHeight < 1 || !1 !== e._x_isShown && t(n))
        }
        ))),
        n.includes("once") && (o = a(o, (function(e, n) {
            e(n),
            r.removeEventListener(t, o, s)
        }
        ))),
        o = a(o, (function(e, i) {
            (function(e) {
                return ["keydown", "keyup"].includes(e)
            }
            )(t) && function(e, t) {
                var n = t.filter((function(e) {
                    return !["window", "document", "prevent", "stop", "once"].includes(e)
                }
                ));
                if (n.includes("debounce")) {
                    var i = n.indexOf("debounce");
                    n.splice(i, Jn((n[i + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
                }
                if (0 === n.length)
                    return !1;
                if (1 === n.length && Wn(e.key).includes(n[0]))
                    return !1;
                var r = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((function(e) {
                    return n.includes(e)
                }
                ));
                if (n = n.filter((function(e) {
                    return !r.includes(e)
                }
                )),
                r.length > 0) {
                    if (r.filter((function(t) {
                        return "cmd" !== t && "super" !== t || (t = "meta"),
                        e["".concat(t, "Key")]
                    }
                    )).length === r.length && Wn(e.key).includes(n[0]))
                        return !1
                }
                return !0
            }(i, n) || e(i)
        }
        )),
        n.includes("debounce")) {
            var c = n[n.indexOf("debounce") + 1] || "invalid-wait"
              , l = Jn(c.split("ms")[0]) ? Number(c.split("ms")[0]) : 250;
            o = ut(o, l)
        }
        if (n.includes("throttle")) {
            var u = n[n.indexOf("throttle") + 1] || "invalid-wait"
              , h = Jn(u.split("ms")[0]) ? Number(u.split("ms")[0]) : 250;
            o = ht(o, h)
        }
        return r.addEventListener(t, o, s),
        function() {
            r.removeEventListener(t, o, s)
        }
    }
    function Jn(e) {
        return !Array.isArray(e) && !isNaN(e)
    }
    function Wn(e) {
        if (!e)
            return [];
        e = e.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
        var t = {
            ctrl: "control",
            slash: "/",
            space: "-",
            spacebar: "-",
            cmd: "meta",
            esc: "escape",
            up: "arrow-up",
            down: "arrow-down",
            left: "arrow-left",
            right: "arrow-right",
            period: ".",
            equal: "="
        };
        return t[e] = e,
        Object.keys(t).map((function(n) {
            if (t[n] === e)
                return n
        }
        )).filter((function(e) {
            return e
        }
        ))
    }
    function zn(e) {
        var t, n = e ? parseFloat(e) : null;
        return t = n,
        Array.isArray(t) || isNaN(t) ? e : n
    }
    function Gn(e, t, n, i) {
        var r = {};
        if (/^\[.*\]$/.test(e.item) && Array.isArray(t))
            e.item.replace("[", "").replace("]", "").split(",").map((function(e) {
                return e.trim()
            }
            )).forEach((function(e, n) {
                r[e] = t[n]
            }
            ));
        else if (/^\{.*\}$/.test(e.item) && !Array.isArray(t) && "object" === c(t)) {
            e.item.replace("{", "").replace("}", "").split(",").map((function(e) {
                return e.trim()
            }
            )).forEach((function(e) {
                r[e] = t[e]
            }
            ))
        } else
            r[e.item] = t;
        return e.index && (r[e.index] = n),
        e.collection && (r[e.collection] = i),
        r
    }
    function Yn() {}
    function Kn(e, t, n) {
        fe(t, (function(i) {
            return Ne("You can't use [x-".concat(t, '] without first installing the "').concat(e, '" plugin here: https://alpinejs.dev/plugins/').concat(n), i)
        }
        ))
    }
    qn.inline = function(e, t, n) {
        var i = t.modifiers
          , r = n.cleanup;
        i.includes("self") ? e._x_ignoreSelf = !0 : e._x_ignore = !0,
        r((function() {
            i.includes("self") ? delete e._x_ignoreSelf : delete e._x_ignore
        }
        ))
    }
    ,
    fe("ignore", qn),
    fe("effect", (function(e, t, n) {
        var i = t.expression;
        return (0,
        n.effect)(oe(e, i))
    }
    )),
    fe("model", (function(e, t, n) {
        var i = t.modifiers
          , r = t.expression
          , o = n.effect
          , s = n.cleanup
          , a = oe(e, r)
          , c = "".concat(r, " = rightSideOfExpression($event, ").concat(r, ")")
          , l = oe(e, c)
          , u = "select" === e.tagName.toLowerCase() || ["checkbox", "radio"].includes(e.type) || i.includes("lazy") ? "change" : "input"
          , h = function(e, t, n) {
            "radio" === e.type && U((function() {
                e.hasAttribute("name") || e.setAttribute("name", n)
            }
            ));
            return function(n, i) {
                return U((function() {
                    if (n instanceof CustomEvent && void 0 !== n.detail)
                        return n.detail || n.target.value;
                    if ("checkbox" === e.type) {
                        if (Array.isArray(i)) {
                            var r = t.includes("number") ? zn(n.target.value) : n.target.value;
                            return n.target.checked ? i.concat([r]) : i.filter((function(e) {
                                return !(e == r)
                            }
                            ))
                        }
                        return n.target.checked
                    }
                    if ("select" === e.tagName.toLowerCase() && e.multiple)
                        return t.includes("number") ? Array.from(n.target.selectedOptions).map((function(e) {
                            return zn(e.value || e.text)
                        }
                        )) : Array.from(n.target.selectedOptions).map((function(e) {
                            return e.value || e.text
                        }
                        ));
                    var o = n.target.value;
                    return t.includes("number") ? zn(o) : t.includes("trim") ? o.trim() : o
                }
                ))
            }
        }(e, i, r)
          , d = Vn(e, u, i, (function(e) {
            l((function() {}
            ), {
                scope: {
                    $event: e,
                    rightSideOfExpression: h
                }
            })
        }
        ));
        e._x_removeModelListeners || (e._x_removeModelListeners = {}),
        e._x_removeModelListeners.default = d,
        s((function() {
            return e._x_removeModelListeners.default()
        }
        ));
        var f = oe(e, "".concat(r, " = __placeholder"));
        e._x_model = {
            get: function() {
                var e;
                return a((function(t) {
                    return e = t
                }
                )),
                e
            },
            set: function(e) {
                f((function() {}
                ), {
                    scope: {
                        __placeholder: e
                    }
                })
            }
        },
        e._x_forceModelUpdate = function() {
            a((function(t) {
                void 0 === t && r.match(/\./) && (t = ""),
                window.fromModel = !0,
                U((function() {
                    return nt(e, "value", t)
                }
                )),
                delete window.fromModel
            }
            ))
        }
        ,
        o((function() {
            i.includes("unintrusive") && document.activeElement.isSameNode(e) || e._x_forceModelUpdate()
        }
        ))
    }
    )),
    fe("cloak", (function(e) {
        return queueMicrotask((function() {
            return U((function() {
                return e.removeAttribute(he("cloak"))
            }
            ))
        }
        ))
    }
    )),
    Be((function() {
        return "[".concat(he("init"), "]")
    }
    )),
    fe("init", tt((function(e, t, n) {
        var i = t.expression
          , r = n.evaluate;
        return "string" == typeof i ? !!i.trim() && r(i, {}, !1) : r(i, {}, !1)
    }
    ))),
    fe("text", (function(e, t, n) {
        var i = t.expression
          , r = n.effect
          , o = (0,
        n.evaluateLater)(i);
        r((function() {
            o((function(t) {
                U((function() {
                    e.textContent = t
                }
                ))
            }
            ))
        }
        ))
    }
    )),
    fe("html", (function(e, t, n) {
        var i = t.expression
          , r = n.effect
          , o = (0,
        n.evaluateLater)(i);
        r((function() {
            o((function(t) {
                U((function() {
                    e.innerHTML = t,
                    e._x_ignoreSelf = !0,
                    Ve(e),
                    delete e._x_ignoreSelf
                }
                ))
            }
            ))
        }
        ))
    }
    )),
    ke(_e(":", he("bind:"))),
    fe("bind", (function(e, t, n) {
        var i = t.value
          , r = t.modifiers
          , o = t.expression
          , s = t.original
          , a = n.effect;
        if (!i)
            return function(e, t, n, i) {
                var r = {};
                o = r,
                Object.entries(pt).forEach((function(e) {
                    var t = f(e, 2)
                      , n = t[0]
                      , i = t[1];
                    Object.defineProperty(o, n, {
                        get: function() {
                            return function() {
                                return i.apply(void 0, arguments)
                            }
                        }
                    })
                }
                ));
                var o;
                var s = oe(e, t)
                  , a = [];
                for (; a.length; )
                    a.pop()();
                s((function(t) {
                    var i = Object.entries(t).map((function(e) {
                        var t = f(e, 2);
                        return {
                            name: t[0],
                            value: t[1]
                        }
                    }
                    ))
                      , r = function(e) {
                        return Array.from(e).map(we()).filter((function(e) {
                            return !xe(e)
                        }
                        ))
                    }(i);
                    i = i.map((function(e) {
                        return r.find((function(t) {
                            return t.name === e.name
                        }
                        )) ? {
                            name: "x-bind:".concat(e.name),
                            value: '"'.concat(e.value, '"')
                        } : e
                    }
                    )),
                    pe(e, i, n).map((function(e) {
                        a.push(e.runCleanups),
                        e()
                    }
                    ))
                }
                ), {
                    scope: r
                })
            }(e, o, s);
        if ("key" === i)
            return function(e, t) {
                e._x_keyExpression = t
            }(e, o);
        var c = oe(e, o);
        a((function() {
            return c((function(t) {
                void 0 === t && o.match(/\./) && (t = ""),
                U((function() {
                    return nt(e, i, t, r)
                }
                ))
            }
            ))
        }
        ))
    }
    )),
    Fe((function() {
        return "[".concat(he("data"), "]")
    }
    )),
    fe("data", tt((function(e, t, n) {
        var i = t.expression
          , r = n.cleanup;
        i = "" === i ? "{}" : i;
        var o = {};
        ee(o, e);
        var s, a, c = {};
        s = c,
        a = o,
        Object.entries(mt).forEach((function(e) {
            var t = f(e, 2)
              , n = t[0]
              , i = t[1];
            Object.defineProperty(s, n, {
                get: function() {
                    return function() {
                        return i.bind(a).apply(void 0, arguments)
                    }
                },
                enumerable: !1
            })
        }
        ));
        var l = re(e, i, {
            scope: c
        });
        void 0 === l && (l = {}),
        ee(l, e);
        var u = g(l);
        G(u);
        var h = V(e, u);
        u.init && re(e, u.init),
        r((function() {
            u.destroy && re(e, u.destroy),
            h()
        }
        ))
    }
    ))),
    fe("show", (function(e, t, n) {
        var i = t.modifiers
          , r = t.expression
          , o = n.effect
          , s = oe(e, r);
        e._x_doHide || (e._x_doHide = function() {
            U((function() {
                return e.style.display = "none"
            }
            ))
        }
        ),
        e._x_doShow || (e._x_doShow = function() {
            U((function() {
                1 === e.style.length && "none" === e.style.display ? e.removeAttribute("style") : e.style.removeProperty("display")
            }
            ))
        }
        );
        var a, c = function() {
            e._x_doHide(),
            e._x_isShown = !1
        }, l = function() {
            e._x_doShow(),
            e._x_isShown = !0
        }, u = function() {
            return setTimeout(l)
        }, h = Ge((function(e) {
            return e ? l() : c()
        }
        ), (function(t) {
            "function" == typeof e._x_toggleAndCascadeWithTransitions ? e._x_toggleAndCascadeWithTransitions(e, t, l, c) : t ? u() : c()
        }
        )), d = !0;
        o((function() {
            return s((function(e) {
                (d || e !== a) && (i.includes("immediate") && (e ? u() : c()),
                h(e),
                a = e,
                d = !1)
            }
            ))
        }
        ))
    }
    )),
    fe("for", (function(e, t, n) {
        var i = t.expression
          , r = n.effect
          , o = n.cleanup
          , s = function(e) {
            var t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/
              , n = /^\s*\(|\)\s*$/g
              , i = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/
              , r = e.match(i);
            if (!r)
                return;
            var o = {};
            o.items = r[2].trim();
            var s = r[1].replace(n, "").trim()
              , a = s.match(t);
            a ? (o.item = s.replace(t, "").trim(),
            o.index = a[1].trim(),
            a[2] && (o.collection = a[2].trim())) : o.item = s;
            return o
        }(i)
          , a = oe(e, s.items)
          , l = oe(e, e._x_keyExpression || "index");
        e._x_prevKeys = [],
        e._x_lookup = {},
        r((function() {
            return function(e, t, n, i) {
                var r = function(e) {
                    return "object" === c(e) && !Array.isArray(e)
                }
                  , o = e;
                n((function(n) {
                    var s;
                    s = n,
                    !Array.isArray(s) && !isNaN(s) && n >= 0 && (n = Array.from(Array(n).keys(), (function(e) {
                        return e + 1
                    }
                    ))),
                    void 0 === n && (n = []);
                    var a = e._x_lookup
                      , l = e._x_prevKeys
                      , h = []
                      , d = [];
                    if (r(n))
                        n = Object.entries(n).map((function(e) {
                            var r = f(e, 2)
                              , o = r[0]
                              , s = r[1]
                              , a = Gn(t, s, o, n);
                            i((function(e) {
                                return d.push(e)
                            }
                            ), {
                                scope: u({
                                    index: o
                                }, a)
                            }),
                            h.push(a)
                        }
                        ));
                    else
                        for (var p = 0; p < n.length; p++) {
                            var m = Gn(t, n[p], p, n);
                            i((function(e) {
                                return d.push(e)
                            }
                            ), {
                                scope: u({
                                    index: p
                                }, m)
                            }),
                            h.push(m)
                        }
                    for (var v = [], b = [], y = [], _ = [], w = 0; w < l.length; w++) {
                        var E = l[w];
                        -1 === d.indexOf(E) && y.push(E)
                    }
                    l = l.filter((function(e) {
                        return !y.includes(e)
                    }
                    ));
                    for (var k = "template", S = 0; S < d.length; S++) {
                        var A = d[S]
                          , C = l.indexOf(A);
                        if (-1 === C)
                            l.splice(S, 0, A),
                            v.push([k, S]);
                        else if (C !== S) {
                            var T = l.splice(S, 1)[0]
                              , L = l.splice(C - 1, 1)[0];
                            l.splice(S, 0, L),
                            l.splice(C, 0, T),
                            b.push([T, L])
                        } else
                            _.push(A);
                        k = A
                    }
                    for (var O = 0; O < y.length; O++) {
                        var P = y[O];
                        a[P]._x_effects && a[P]._x_effects.forEach(x),
                        a[P].remove(),
                        a[P] = null,
                        delete a[P]
                    }
                    for (var j = function() {
                        var e = f(b[R], 2)
                          , t = e[0]
                          , n = e[1]
                          , i = a[t]
                          , r = a[n]
                          , o = document.createElement("div");
                        U((function() {
                            r.after(o),
                            i.after(r),
                            r._x_currentIfEl && r.after(r._x_currentIfEl),
                            o.before(i),
                            i._x_currentIfEl && i.after(i._x_currentIfEl),
                            o.remove()
                        }
                        )),
                        J(r, h[d.indexOf(n)])
                    }, R = 0; R < b.length; R++)
                        j();
                    for (var D = function() {
                        var e = f(v[N], 2)
                          , t = e[0]
                          , n = e[1]
                          , i = "template" === t ? o : a[t];
                        i._x_currentIfEl && (i = i._x_currentIfEl);
                        var r = h[n]
                          , s = d[n]
                          , l = document.importNode(o.content, !0).firstElementChild;
                        V(l, g(r), o),
                        U((function() {
                            i.after(l),
                            Ve(l)
                        }
                        )),
                        "object" === c(s) && Ne("x-for key cannot be an object, it must be a string or an integer", o),
                        a[s] = l
                    }, N = 0; N < v.length; N++)
                        D();
                    for (var I = 0; I < _.length; I++)
                        J(a[_[I]], h[d.indexOf(_[I])]);
                    o._x_prevKeys = d
                }
                ))
            }(e, s, a, l)
        }
        )),
        o((function() {
            Object.values(e._x_lookup).forEach((function(e) {
                return e.remove()
            }
            )),
            delete e._x_prevKeys,
            delete e._x_lookup
        }
        ))
    }
    )),
    Yn.inline = function(e, t, n) {
        var i = t.expression
          , r = n.cleanup
          , o = He(e);
        o._x_refs || (o._x_refs = {}),
        o._x_refs[i] = e,
        r((function() {
            return delete o._x_refs[i]
        }
        ))
    }
    ,
    fe("ref", Yn),
    fe("if", (function(e, t, n) {
        var i = t.expression
          , r = n.effect
          , o = n.cleanup
          , s = oe(e, i);
        r((function() {
            return s((function(t) {
                t ? function() {
                    if (e._x_currentIfEl)
                        return e._x_currentIfEl;
                    var t = e.content.cloneNode(!0).firstElementChild;
                    V(t, {}, e),
                    U((function() {
                        e.after(t),
                        Ve(t)
                    }
                    )),
                    e._x_currentIfEl = t,
                    e._x_undoIf = function() {
                        De(t, (function(e) {
                            e._x_effects && e._x_effects.forEach(x)
                        }
                        )),
                        t.remove(),
                        delete e._x_currentIfEl
                    }
                }() : e._x_undoIf && (e._x_undoIf(),
                delete e._x_undoIf)
            }
            ))
        }
        )),
        o((function() {
            return e._x_undoIf && e._x_undoIf()
        }
        ))
    }
    )),
    fe("id", (function(e, t, n) {
        var i = t.expression;
        (0,
        n.evaluate)(i).forEach((function(t) {
            return function(e, t) {
                e._x_ids || (e._x_ids = {}),
                e._x_ids[t] || (e._x_ids[t] = Fn(t))
            }(e, t)
        }
        ))
    }
    )),
    ke(_e("@", he("on:"))),
    fe("on", tt((function(e, t, n) {
        var i = t.value
          , r = t.modifiers
          , o = t.expression
          , s = n.cleanup
          , a = o ? oe(e, o) : function() {}
        ;
        "template" === e.tagName.toLowerCase() && (e._x_forwardEvents || (e._x_forwardEvents = []),
        e._x_forwardEvents.includes(i) || e._x_forwardEvents.push(i));
        var c = Vn(e, i, r, (function(e) {
            a((function() {}
            ), {
                scope: {
                    $event: e
                },
                params: [e]
            })
        }
        ));
        s((function() {
            return c()
        }
        ))
    }
    ))),
    Kn("Collapse", "collapse", "collapse"),
    Kn("Intersect", "intersect", "intersect"),
    Kn("Focus", "trap", "focus"),
    Kn("Mask", "mask", "mask"),
    gt.setEvaluator((function(e, t) {
        var n = {};
        ee(n, e);
        var i = [n].concat(d(W(e)));
        if ("function" == typeof t)
            return ae(i, t);
        return te.bind(null, e, t, (function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , r = n.scope
              , o = void 0 === r ? {} : r
              , s = n.params
              , a = void 0 === s ? [] : s
              , c = z([o].concat(d(i)));
            void 0 !== c[t] && le(e, c[t], c, a)
        }
        ))
    }
    )),
    gt.setReactivityEngine({
        reactive: Dn,
        effect: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yt;
            Ft(e) && (e = e.raw);
            var n = Ht(e, t);
            return t.lazy || n(),
            n
        },
        release: function(e) {
            e.active && (qt(e),
            e.options.onStop && e.options.onStop(),
            e.active = !1)
        },
        raw: Mn
    });
    var Xn = gt
}
, function(e, t, n) {
    "use strict";
    (function(e, i) {
        n.d(t, "a", (function() {
            return s
        }
        )),
        n.d(t, "b", (function() {
            return o
        }
        ));
        var r = n(35);
        function o() {
            return !Object(r.a)() && "[object process]" === Object.prototype.toString.call(void 0 !== e ? e : 0)
        }
        function s(e, t) {
            return e.require(t)
        }
    }
    ).call(this, n(39), n(30)(e))
}
, , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return l
    }
    )),
    n.d(t, "b", (function() {
        return c
    }
    )),
    n.d(t, "c", (function() {
        return h
    }
    )),
    n.d(t, "d", (function() {
        return u
    }
    )),
    n.d(t, "e", (function() {
        return a
    }
    )),
    n.d(t, "f", (function() {
        return o
    }
    ));
    var i = n(10)
      , r = (n(12),
    n(4));
    function o() {
        const e = r.a
          , t = e.crypto || e.msCrypto;
        if (t && t.randomUUID)
            return t.randomUUID().replace(/-/g, "");
        const n = t && t.getRandomValues ? ()=>t.getRandomValues(new Uint8Array(1))[0] : ()=>16 * Math.random();
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (e=>(e ^ (15 & n()) >> e / 4).toString(16)))
    }
    function s(e) {
        return e.exception && e.exception.values ? e.exception.values[0] : void 0
    }
    function a(e) {
        const {message: t, event_id: n} = e;
        if (t)
            return t;
        const i = s(e);
        return i ? i.type && i.value ? `${i.type}: ${i.value}` : i.type || i.value || n || "<unknown>" : n || "<unknown>"
    }
    function c(e, t, n) {
        const i = e.exception = e.exception || {}
          , r = i.values = i.values || []
          , o = r[0] = r[0] || {};
        o.value || (o.value = t || ""),
        o.type || (o.type = n || "Error")
    }
    function l(e, t) {
        const n = s(e);
        if (!n)
            return;
        const i = n.mechanism;
        if (n.mechanism = {
            type: "generic",
            handled: !0,
            ...i,
            ...t
        },
        t && "data"in t) {
            const e = {
                ...i && i.data,
                ...t.data
            };
            n.mechanism.data = e
        }
    }
    function u(e) {
        if (e && e.__sentry_captured__)
            return !0;
        try {
            Object(i.a)(e, "__sentry_captured__", !0)
        } catch (e) {}
        return !1
    }
    function h(e) {
        return Array.isArray(e) ? e : [e]
    }
}
, function(e, t, n) {
    "use strict";
    var i = n(16)
      , r = n(8);
    t.a = {
        init: function() {
            if (window.channelSocket)
                return window.channelSocket;
            var e = Object(r.a)("channel_token")
              , t = e ? function(e) {
                var t = new i.a("/user_socket",{
                    params: {
                        channel_token: e
                    }
                });
                return t.isGuest = !1,
                t
            }(e) : function() {
                var e = new i.a("/guest_socket",{
                    params: {}
                });
                return e.isGuest = !0,
                e
            }();
            return t.onError(o),
            t.onOpen(s),
            t.connect(),
            window.channelSocket = t,
            window.consecutiveReconnectAttempts = 0,
            t
        },
        get: function() {
            return window.channelSocket
        }
    };
    var o = function() {
        window.consecutiveReconnectAttempts = window.consecutiveReconnectAttempts + 1,
        window.consecutiveReconnectAttempts > 10 && (document.hidden ? (window.channelSocket.disconnect(),
        document.addEventListener("visibilitychange", (function() {
            window.location.reload()
        }
        ))) : window.location.reload())
    }
      , s = function() {
        window.consecutiveReconnectAttempts = 0
    }
}
, function(e, t, n) {
    "use strict";
    var i = n(8);
    const r = "plaid_link_token"
      , o = "plaid_request_origin_uri";
    let s;
    t.a = {
        hook: {
            mounted() {
                "true" == this.el.getAttribute("data-skip-hook") || this.el.addEventListener("click", u)
            },
            updated() {
                if (!("true" == this.el.getAttribute("data-skip-hook"))) {
                    this.el.removeEventListener("click", u);
                    "Plaid" == this.el.getAttribute("phx-hook") && this.el.addEventListener("click", u)
                }
            }
        },
        hookOAuth: {
            mounted() {
                try {
                    const e = sessionStorage.getItem(r);
                    e ? (a(this.el),
                    window.Plaid.create({
                        token: e,
                        receivedRedirectUri: window.location.href,
                        onSuccess: (e,t)=>{
                            c(e, t);
                            const n = sessionStorage.getItem(o);
                            setTimeout((()=>window.location.replace(n)), 3e3)
                        }
                        ,
                        onEvent: (e,t)=>l(e, t)
                    }).open()) : window.location.replace("/")
                } catch (e) {
                    console.error("Plaid OAuth hook failed", e)
                }
            },
            updated() {
                a(this.el)
            }
        },
        init: function(e) {
            const t = Object(i.a)("user_uid");
            if (!t)
                return console.error("Could not setup plaid, userUid not found.");
            s = e.channel(`plaid_link:${t}`),
            s.join(),
            s.on("plaid_complete", (e=>{
                document.querySelectorAll(".c-flash").forEach((e=>e.remove()))
            }
            ))
        }
    };
    const a = e=>{
        const t = sessionStorage.getItem(o);
        t ? e.setAttribute("href", t) : e.setAttribute("href", "/")
    }
      , c = (e,t,n=null)=>s.push("plaid_on_success", {
        publicToken: e,
        metadata: t,
        bank_account_uid: n
    })
      , l = (e,t,n=null)=>{
        switch (e) {
        case "ERROR":
            return s.push("connect_error", {
                metadata: t,
                bank_account_uid: n
            });
        case "EXIT":
            return s.push("connect_exit", {
                metadata: t,
                bank_account_uid: n
            })
        }
    }
      , u = function(e) {
        const t = e.target.getAttribute("data-bank-account-uid");
        s.push("get_connection_config", {
            bank_account_uid: t
        }).receive("ok", (({env: e, key: n, token: i})=>{
            sessionStorage.setItem(r, i),
            sessionStorage.setItem(o, window.location.href),
            window.Plaid.create({
                clientName: "River Financial",
                product: ["auth"],
                onSuccess: (e,n)=>c(e, n, t),
                onEvent: (e,n)=>l(e, n, t),
                env: e,
                key: n,
                token: i
            }).open()
        }
        ))
    }
}
, function(e, t, n) {
    var i, r;
    i = function() {
        var e, t, n = {
            version: "0.2.0"
        }, i = n.settings = {
            minimum: .08,
            easing: "ease",
            positionUsing: "",
            speed: 200,
            trickle: !0,
            trickleRate: .02,
            trickleSpeed: 800,
            showSpinner: !0,
            barSelector: '[role="bar"]',
            spinnerSelector: '[role="spinner"]',
            parent: "body",
            template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        };
        function r(e, t, n) {
            return e < t ? t : e > n ? n : e
        }
        function o(e) {
            return 100 * (-1 + e)
        }
        function s(e, t, n) {
            var r;
            return (r = "translate3d" === i.positionUsing ? {
                transform: "translate3d(" + o(e) + "%,0,0)"
            } : "translate" === i.positionUsing ? {
                transform: "translate(" + o(e) + "%,0)"
            } : {
                "margin-left": o(e) + "%"
            }).transition = "all " + t + "ms " + n,
            r
        }
        n.configure = function(e) {
            var t, n;
            for (t in e)
                void 0 !== (n = e[t]) && e.hasOwnProperty(t) && (i[t] = n);
            return this
        }
        ,
        n.status = null,
        n.set = function(e) {
            var t = n.isStarted();
            e = r(e, i.minimum, 1),
            n.status = 1 === e ? null : e;
            var o = n.render(!t)
              , l = o.querySelector(i.barSelector)
              , u = i.speed
              , h = i.easing;
            return o.offsetWidth,
            a((function(t) {
                "" === i.positionUsing && (i.positionUsing = n.getPositioningCSS()),
                c(l, s(e, u, h)),
                1 === e ? (c(o, {
                    transition: "none",
                    opacity: 1
                }),
                o.offsetWidth,
                setTimeout((function() {
                    c(o, {
                        transition: "all " + u + "ms linear",
                        opacity: 0
                    }),
                    setTimeout((function() {
                        n.remove(),
                        t()
                    }
                    ), u)
                }
                ), u)) : setTimeout(t, u)
            }
            )),
            this
        }
        ,
        n.isStarted = function() {
            return "number" == typeof n.status
        }
        ,
        n.start = function() {
            n.status || n.set(0);
            var e = function() {
                setTimeout((function() {
                    n.status && (n.trickle(),
                    e())
                }
                ), i.trickleSpeed)
            };
            return i.trickle && e(),
            this
        }
        ,
        n.done = function(e) {
            return e || n.status ? n.inc(.3 + .5 * Math.random()).set(1) : this
        }
        ,
        n.inc = function(e) {
            var t = n.status;
            return t ? ("number" != typeof e && (e = (1 - t) * r(Math.random() * t, .1, .95)),
            t = r(t + e, 0, .994),
            n.set(t)) : n.start()
        }
        ,
        n.trickle = function() {
            return n.inc(Math.random() * i.trickleRate)
        }
        ,
        e = 0,
        t = 0,
        n.promise = function(i) {
            return i && "resolved" !== i.state() ? (0 === t && n.start(),
            e++,
            t++,
            i.always((function() {
                0 == --t ? (e = 0,
                n.done()) : n.set((e - t) / e)
            }
            )),
            this) : this
        }
        ,
        n.render = function(e) {
            if (n.isRendered())
                return document.getElementById("nprogress");
            u(document.documentElement, "nprogress-busy");
            var t = document.createElement("div");
            t.id = "nprogress",
            t.innerHTML = i.template;
            var r, s = t.querySelector(i.barSelector), a = e ? "-100" : o(n.status || 0), l = document.querySelector(i.parent);
            return c(s, {
                transition: "all 0 linear",
                transform: "translate3d(" + a + "%,0,0)"
            }),
            i.showSpinner || (r = t.querySelector(i.spinnerSelector)) && f(r),
            l != document.body && u(l, "nprogress-custom-parent"),
            l.appendChild(t),
            t
        }
        ,
        n.remove = function() {
            h(document.documentElement, "nprogress-busy"),
            h(document.querySelector(i.parent), "nprogress-custom-parent");
            var e = document.getElementById("nprogress");
            e && f(e)
        }
        ,
        n.isRendered = function() {
            return !!document.getElementById("nprogress")
        }
        ,
        n.getPositioningCSS = function() {
            var e = document.body.style
              , t = "WebkitTransform"in e ? "Webkit" : "MozTransform"in e ? "Moz" : "msTransform"in e ? "ms" : "OTransform"in e ? "O" : "";
            return t + "Perspective"in e ? "translate3d" : t + "Transform"in e ? "translate" : "margin"
        }
        ;
        var a = function() {
            var e = [];
            function t() {
                var n = e.shift();
                n && n(t)
            }
            return function(n) {
                e.push(n),
                1 == e.length && t()
            }
        }()
          , c = function() {
            var e = ["Webkit", "O", "Moz", "ms"]
              , t = {};
            function n(e) {
                return e.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, (function(e, t) {
                    return t.toUpperCase()
                }
                ))
            }
            function i(t) {
                var n = document.body.style;
                if (t in n)
                    return t;
                for (var i, r = e.length, o = t.charAt(0).toUpperCase() + t.slice(1); r--; )
                    if ((i = e[r] + o)in n)
                        return i;
                return t
            }
            function r(e) {
                return e = n(e),
                t[e] || (t[e] = i(e))
            }
            function o(e, t, n) {
                t = r(t),
                e.style[t] = n
            }
            return function(e, t) {
                var n, i, r = arguments;
                if (2 == r.length)
                    for (n in t)
                        void 0 !== (i = t[n]) && t.hasOwnProperty(n) && o(e, n, i);
                else
                    o(e, r[1], r[2])
            }
        }();
        function l(e, t) {
            return ("string" == typeof e ? e : d(e)).indexOf(" " + t + " ") >= 0
        }
        function u(e, t) {
            var n = d(e)
              , i = n + t;
            l(n, t) || (e.className = i.substring(1))
        }
        function h(e, t) {
            var n, i = d(e);
            l(e, t) && (n = i.replace(" " + t + " ", " "),
            e.className = n.substring(1, n.length - 1))
        }
        function d(e) {
            return (" " + (e.className || "") + " ").replace(/\s+/gi, " ")
        }
        function f(e) {
            e && e.parentNode && e.parentNode.removeChild(e)
        }
        return n
    }
    ,
    void 0 === (r = "function" == typeof i ? i.call(t, n, t, e) : i) || (e.exports = r)
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return a
    }
    )),
    n.d(t, "b", (function() {
        return s
    }
    )),
    n.d(t, "c", (function() {
        return o
    }
    ));
    var i, r = n(2);
    function o(e) {
        return new a((t=>{
            t(e)
        }
        ))
    }
    function s(e) {
        return new a(((t,n)=>{
            n(e)
        }
        ))
    }
    !function(e) {
        e[e.PENDING = 0] = "PENDING";
        e[e.RESOLVED = 1] = "RESOLVED";
        e[e.REJECTED = 2] = "REJECTED"
    }(i || (i = {}));
    class a {
        __init() {
            this._state = i.PENDING
        }
        __init2() {
            this._handlers = []
        }
        constructor(e) {
            a.prototype.__init.call(this),
            a.prototype.__init2.call(this),
            a.prototype.__init3.call(this),
            a.prototype.__init4.call(this),
            a.prototype.__init5.call(this),
            a.prototype.__init6.call(this);
            try {
                e(this._resolve, this._reject)
            } catch (e) {
                this._reject(e)
            }
        }
        then(e, t) {
            return new a(((n,i)=>{
                this._handlers.push([!1, t=>{
                    if (e)
                        try {
                            n(e(t))
                        } catch (e) {
                            i(e)
                        }
                    else
                        n(t)
                }
                , e=>{
                    if (t)
                        try {
                            n(t(e))
                        } catch (e) {
                            i(e)
                        }
                    else
                        i(e)
                }
                ]),
                this._executeHandlers()
            }
            ))
        }
        catch(e) {
            return this.then((e=>e), e)
        }
        finally(e) {
            return new a(((t,n)=>{
                let i, r;
                return this.then((t=>{
                    r = !1,
                    i = t,
                    e && e()
                }
                ), (t=>{
                    r = !0,
                    i = t,
                    e && e()
                }
                )).then((()=>{
                    r ? n(i) : t(i)
                }
                ))
            }
            ))
        }
        __init3() {
            this._resolve = e=>{
                this._setResult(i.RESOLVED, e)
            }
        }
        __init4() {
            this._reject = e=>{
                this._setResult(i.REJECTED, e)
            }
        }
        __init5() {
            this._setResult = (e,t)=>{
                this._state === i.PENDING && (Object(r.n)(t) ? t.then(this._resolve, this._reject) : (this._state = e,
                this._value = t,
                this._executeHandlers()))
            }
        }
        __init6() {
            this._executeHandlers = ()=>{
                if (this._state === i.PENDING)
                    return;
                const e = this._handlers.slice();
                this._handlers = [],
                e.forEach((e=>{
                    e[0] || (this._state === i.RESOLVED && e[1](this._value),
                    this._state === i.REJECTED && e[2](this._value),
                    e[0] = !0)
                }
                ))
            }
        }
    }
}
, , function(e, t) {
    e.exports = function(e) {
        if (!e.webpackPolyfill) {
            var t = Object.create(e);
            t.children || (t.children = []),
            Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function() {
                    return t.l
                }
            }),
            Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function() {
                    return t.i
                }
            }),
            Object.defineProperty(t, "exports", {
                enumerable: !0
            }),
            t.webpackPolyfill = 1
        }
        return t
    }
}
, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        e.addEventListener("click", (function() {
            const n = e.getAttribute("data-copy")
              , i = e.getAttribute("data-success-msg") || "Copied"
              , r = e.getAttribute("data-copied-event")
              , o = e.getAttribute("id");
            !function(e, t, n, i, r, o) {
                const s = document.createElement("textarea");
                if (s.value = e,
                document.body.append(s),
                s.select(),
                document.execCommand("copy"),
                s.remove(),
                !t)
                    return;
                const a = t.innerHTML;
                t.disabled = !0,
                t.innerHTML = i,
                r && o && o.pushEvent(r, {
                    id: n
                });
                setTimeout((function() {
                    t.innerHTML = a,
                    t.disabled = !1
                }
                ), 1e3)
            }(n, e, o, i, r, t)
        }
        ))
    }
    t.a = {
        hook: {
            mounted() {
                i(this.el, this)
            }
        },
        init: function() {
            document.querySelectorAll(".js-copy-to-clipboard").forEach(i)
        }
    }
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        e.addEventListener("click", (function() {
            !function({text: e, url: t, title: n}) {
                if (!navigator.share)
                    return void console.error("navigator.share API not supported.");
                navigator.share({
                    title: n,
                    text: e,
                    url: t
                }).then((()=>{}
                )).catch((e=>console.error("Error sharing", e)))
            }(e.getAttribute("data-share"))
        }
        ))
    }
    t.a = {
        hook: {
            mounted() {
                i(this.el)
            }
        },
        init: function() {
            navigator.share || function() {
                const e = ".js-share { display: none; }"
                  , t = document.createElement("style");
                t.type = "text/css",
                t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e));
                document.getElementsByTagName("head")[0].appendChild(t)
            }(),
            document.querySelectorAll(".js-share").forEach(i)
        }
    }
}
, function(e, t, n) {
    "use strict";
    const i = [0, 32];
    function r(e, t) {
        var n;
        document.addEventListener("click", (n = e,
        function(e) {
            n.contains(e.target) || c(n)
        }
        ));
        const r = function(e) {
            return e.querySelector(".js-dropdown__selected")
        }(e);
        r.addEventListener("click", o(e)),
        r.addEventListener("keydown", function(e) {
            return function(t) {
                (i.includes(t.keyCode) || 13 === t.keyCode) && a(e),
                27 === t.keyCode && c(e)
            }
        }(e)),
        u(e).addEventListener("click", o(e)),
        function(e) {
            return e.querySelectorAll(".js-dropdown__list-item")
        }(e).forEach((n=>{
            n.addEventListener("click", function(e, t) {
                return function(n) {
                    t || s(n.target, e),
                    c(e)
                }
            }(e, t)),
            t || n.addEventListener("keydown", function(e) {
                return function(t) {
                    (i.includes(t.keyCode) || 13 === t.keyCode) && (s(t.target, e),
                    c(e)),
                    27 === t.keyCode && c(e)
                }
            }(e))
        }
        ))
    }
    function o(e) {
        return function(t) {
            a(e)
        }
    }
    function s(e, t) {
        t.querySelector(".js-dropdown__selected-content").innerHTML = e.innerHTML;
        const n = function(e) {
            return e.querySelector(".js-dropdown__form")
        }(t);
        if (n) {
            const t = function(e, t) {
                return e.querySelector(`[value=${t}]`)
            }(n, e.dataset.value);
            t.selected = !0
        }
    }
    function a(e) {
        l(e).classList.toggle("hidden"),
        u(e).classList.toggle("expanded")
    }
    function c(e) {
        const t = l(e);
        t && t.classList.add("hidden"),
        u(e).classList.remove("expanded")
    }
    function l(e) {
        return e.querySelector(".js-dropdown__list")
    }
    function u(e) {
        return e.querySelector(".js-dropdown__arrow")
    }
    t.a = {
        hook: {
            mounted: function() {
                r(this.el, !0)
            }
        },
        init: function() {
            document.querySelectorAll(".js-dropdown").forEach((e=>r(e, !1)))
        }
    }
}
, function(e, t, n) {
    "use strict";
    function i() {
        return "undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && !!__SENTRY_BROWSER_BUNDLE__
    }
    n.d(t, "a", (function() {
        return i
    }
    ))
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return c
    }
    )),
    n.d(t, "b", (function() {
        return s
    }
    ));
    var i = n(2)
      , r = n(4);
    const o = Object(r.b)();
    function s(e, t) {
        try {
            let n = e;
            const i = 5
              , r = 80
              , o = [];
            let s = 0
              , c = 0;
            const l = " > "
              , u = l.length;
            let h;
            for (; n && s++ < i && (h = a(n, t),
            !("html" === h || s > 1 && c + o.length * u + h.length >= r)); )
                o.push(h),
                c += h.length,
                n = n.parentNode;
            return o.reverse().join(l)
        } catch (e) {
            return "<unknown>"
        }
    }
    function a(e, t) {
        const n = e
          , r = [];
        let o, s, a, c, l;
        if (!n || !n.tagName)
            return "";
        r.push(n.tagName.toLowerCase());
        const u = t && t.length ? t.filter((e=>n.getAttribute(e))).map((e=>[e, n.getAttribute(e)])) : null;
        if (u && u.length)
            u.forEach((e=>{
                r.push(`[${e[0]}="${e[1]}"]`)
            }
            ));
        else if (n.id && r.push(`#${n.id}`),
        o = n.className,
        o && Object(i.l)(o))
            for (s = o.split(/\s+/),
            l = 0; l < s.length; l++)
                r.push(`.${s[l]}`);
        const h = ["type", "name", "title", "alt"];
        for (l = 0; l < h.length; l++)
            a = h[l],
            c = n.getAttribute(a),
            c && r.push(`[${a}="${c}"]`);
        return r.join("")
    }
    function c() {
        try {
            return o.document.location.href
        } catch (e) {
            return ""
        }
    }
}
, , , function(e, t) {
    var n, i, r = e.exports = {};
    function o() {
        throw new Error("setTimeout has not been defined")
    }
    function s() {
        throw new Error("clearTimeout has not been defined")
    }
    function a(e) {
        if (n === setTimeout)
            return setTimeout(e, 0);
        if ((n === o || !n) && setTimeout)
            return n = setTimeout,
            setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }
    !function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : o
        } catch (e) {
            n = o
        }
        try {
            i = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (e) {
            i = s
        }
    }();
    var c, l = [], u = !1, h = -1;
    function d() {
        u && c && (u = !1,
        c.length ? l = c.concat(l) : h = -1,
        l.length && f())
    }
    function f() {
        if (!u) {
            var e = a(d);
            u = !0;
            for (var t = l.length; t; ) {
                for (c = l,
                l = []; ++h < t; )
                    c && c[h].run();
                h = -1,
                t = l.length
            }
            c = null,
            u = !1,
            function(e) {
                if (i === clearTimeout)
                    return clearTimeout(e);
                if ((i === s || !i) && clearTimeout)
                    return i = clearTimeout,
                    clearTimeout(e);
                try {
                    i(e)
                } catch (t) {
                    try {
                        return i.call(null, e)
                    } catch (t) {
                        return i.call(this, e)
                    }
                }
            }(e)
        }
    }
    function p(e, t) {
        this.fun = e,
        this.array = t
    }
    function m() {}
    r.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
        l.push(new p(e,t)),
        1 !== l.length || u || a(f)
    }
    ,
    p.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    r.title = "browser",
    r.browser = !0,
    r.env = {},
    r.argv = [],
    r.version = "",
    r.versions = {},
    r.on = m,
    r.addListener = m,
    r.once = m,
    r.off = m,
    r.removeListener = m,
    r.removeAllListeners = m,
    r.emit = m,
    r.prependListener = m,
    r.prependOnceListener = m,
    r.listeners = function(e) {
        return []
    }
    ,
    r.binding = function(e) {
        throw new Error("process.binding is not supported")
    }
    ,
    r.cwd = function() {
        return "/"
    }
    ,
    r.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }
    ,
    r.umask = function() {
        return 0
    }
}
, function(e, t, n) {
    "use strict";
    function i() {
        var e = document.querySelector(".c-nav-product");
        e.classList.contains("c-nav-product--show-responsive-menu") ? e.classList.remove("c-nav-product--show-responsive-menu") : e.classList.add("c-nav-product--show-responsive-menu")
    }
    function r({hitSelector: e, revealSelector: t}) {
        const n = document.querySelectorAll(e)
          , i = document.querySelectorAll(t);
        if (n.length !== i.length)
            throw new Error("incorrect dropdown setup, you must have an element to show for every reveal element");
        n.forEach(((e,t)=>{
            let n = !1;
            const r = i[t];
            function o(e) {
                r && r.classList.remove("is-visible"),
                n = !1
            }
            e && e.addEventListener("click", (function(e) {
                i.forEach((e=>{
                    e.classList.remove("is-visible")
                }
                )),
                n ? o() : function(e) {
                    e.stopPropagation(),
                    r && r.classList.add("is-visible"),
                    n = !0
                }(e)
            }
            )),
            r && document.addEventListener("click", o)
        }
        ))
    }
    n.d(t, "a", (function() {
        return r
    }
    )),
    t.b = {
        init: function() {
            const e = document.querySelector(".js-nav");
            e && (e.addEventListener("click", i),
            r({
                hitSelector: ".js-nav-product-dropdown",
                revealSelector: ".js-nav-product-menu"
            }))
        }
    }
}
, function(e, t, n) {
    "use strict";
    var i = "consecutive-reloads"
      , r = ["phx-click-loading", "phx-change-loading", "phx-submit-loading", "phx-keydown-loading", "phx-keyup-loading", "phx-blur-loading", "phx-focus-loading"]
      , o = "data-phx-component"
      , s = "data-phx-link"
      , a = "data-phx-ref"
      , c = "data-phx-ref-src"
      , l = "track-uploads"
      , u = "data-phx-upload-ref"
      , h = "data-phx-preflighted-refs"
      , d = "drop-target"
      , f = "data-phx-active-refs"
      , p = "phx:live-file:updated"
      , m = "data-phx-skip"
      , g = "data-phx-prune"
      , v = "page-loading"
      , b = "phx-connected"
      , y = "phx-loading"
      , _ = "phx-no-feedback"
      , w = "phx-error"
      , E = "data-phx-parent-id"
      , k = "data-phx-main"
      , x = "data-phx-root-id"
      , S = "feedback-for"
      , A = "phx-has-focused"
      , C = ["text", "textarea", "number", "email", "password", "search", "tel", "url", "date", "time", "datetime-local", "color", "range"]
      , T = ["checkbox", "radio"]
      , L = "phx-has-submitted"
      , O = "data-phx-session"
      , P = `[${O}]`
      , j = "data-phx-sticky"
      , R = "data-phx-static"
      , D = "data-phx-readonly"
      , N = "data-phx-disabled"
      , I = "disable-with"
      , M = "data-phx-disable-with-restore"
      , $ = "hook"
      , U = "update"
      , F = "phxPrivate"
      , B = "auto-recover"
      , H = "phx:live-socket:debug"
      , q = "phx:live-socket:profiling"
      , V = "phx:live-socket:latency-sim"
      , J = "mounted"
      , W = "debounce-trigger"
      , z = "throttled"
      , G = "debounce-prev-key"
      , Y = {
        debounce: 300,
        throttle: 300
    }
      , K = "d"
      , X = "s"
      , Z = "c"
      , Q = "e"
      , ee = "r"
      , te = "t"
      , ne = (e,t)=>console.error && console.error(e, t)
      , ie = e=>{
        let t = typeof e;
        return "number" === t || "string" === t && /^(0|[1-9]\d*)$/.test(e)
    }
    ;
    var re, oe = e=>"function" == typeof e ? e : function() {
        return e
    }
    , se = e=>JSON.parse(JSON.stringify(e)), ae = (e,t,n)=>{
        do {
            if (e.matches(`[${t}]`) && !e.disabled)
                return e;
            e = e.parentElement || e.parentNode
        } while (null !== e && 1 === e.nodeType && !(n && n.isSameNode(e) || e.matches(P)));
        return null
    }
    , ce = e=>null !== e && "object" == typeof e && !(e instanceof Array), le = e=>{
        for (let t in e)
            return !1;
        return !0
    }
    , ue = (e,t)=>e && t(e), he = function(e, t, n, i) {
        e.forEach((e=>{
            let t = new class {
                constructor(e, t, n) {
                    this.liveSocket = n,
                    this.entry = e,
                    this.offset = 0,
                    this.chunkSize = t,
                    this.chunkTimer = null,
                    this.uploadChannel = n.channel(`lvu:${e.ref}`, {
                        token: e.metadata()
                    })
                }
                error(e) {
                    clearTimeout(this.chunkTimer),
                    this.uploadChannel.leave(),
                    this.entry.error(e)
                }
                upload() {
                    this.uploadChannel.onError((e=>this.error(e))),
                    this.uploadChannel.join().receive("ok", (e=>this.readNextChunk())).receive("error", (e=>this.error(e)))
                }
                isDone() {
                    return this.offset >= this.entry.file.size
                }
                readNextChunk() {
                    let e = new window.FileReader
                      , t = this.entry.file.slice(this.offset, this.chunkSize + this.offset);
                    e.onload = e=>{
                        if (null !== e.target.error)
                            return ne("Read error: " + e.target.error);
                        this.offset += e.target.result.byteLength,
                        this.pushChunk(e.target.result)
                    }
                    ,
                    e.readAsArrayBuffer(t)
                }
                pushChunk(e) {
                    this.uploadChannel.isJoined() && this.uploadChannel.push("chunk", e).receive("ok", (()=>{
                        this.entry.progress(this.offset / this.entry.file.size * 100),
                        this.isDone() || (this.chunkTimer = setTimeout((()=>this.readNextChunk()), this.liveSocket.getLatencySim() || 0))
                    }
                    ))
                }
            }
            (e,n.config.chunk_size,i);
            t.upload()
        }
        ))
    }, de = {
        canPushState: ()=>void 0 !== history.pushState,
        dropLocal(e, t, n) {
            return e.removeItem(this.localKey(t, n))
        },
        updateLocal(e, t, n, i, r) {
            let o = this.getLocal(e, t, n)
              , s = this.localKey(t, n)
              , a = null === o ? i : r(o);
            return e.setItem(s, JSON.stringify(a)),
            a
        },
        getLocal(e, t, n) {
            return JSON.parse(e.getItem(this.localKey(t, n)))
        },
        updateCurrentState(e) {
            this.canPushState() && history.replaceState(e(history.state || {}), "", window.location.href)
        },
        pushState(e, t, n) {
            if (this.canPushState()) {
                if (n !== window.location.href) {
                    if ("redirect" == t.type && t.scroll) {
                        let e = history.state || {};
                        e.scroll = t.scroll,
                        history.replaceState(e, "", window.location.href)
                    }
                    delete t.scroll,
                    history[e + "State"](t, "", n || null);
                    let i = this.getHashTargetEl(window.location.hash);
                    i ? i.scrollIntoView() : "redirect" === t.type && window.scroll(0, 0)
                }
            } else
                this.redirect(n)
        },
        setCookie(e, t) {
            document.cookie = `${e}=${t}`
        },
        getCookie: e=>document.cookie.replace(new RegExp(`(?:(?:^|.*;s*)${e}s*=s*([^;]*).*$)|^.*$`), "$1"),
        redirect(e, t) {
            t && de.setCookie("__phoenix_flash__", t + "; max-age=60000; path=/"),
            window.location = e
        },
        localKey: (e,t)=>`${e}-${t}`,
        getHashTargetEl(e) {
            let t = e.toString().substring(1);
            if ("" !== t)
                return document.getElementById(t) || document.querySelector(`a[name="${t}"]`)
        }
    }, fe = de, pe = {
        byId: e=>document.getElementById(e) || ne(`no id found for ${e}`),
        removeClass(e, t) {
            e.classList.remove(t),
            0 === e.classList.length && e.removeAttribute("class")
        },
        all(e, t, n) {
            if (!e)
                return [];
            let i = Array.from(e.querySelectorAll(t));
            return n ? i.forEach(n) : i
        },
        childNodeLength(e) {
            let t = document.createElement("template");
            return t.innerHTML = e,
            t.content.childElementCount
        },
        isUploadInput: e=>"file" === e.type && null !== e.getAttribute(u),
        findUploadInputs(e) {
            return this.all(e, `input[type="file"][${u}]`)
        },
        findComponentNodeList(e, t) {
            return this.filterWithinSameLiveView(this.all(e, `[${o}="${t}"]`), e)
        },
        isPhxDestroyed: e=>!(!e.id || !pe.private(e, "destroyed")),
        isExternalClick: e=>e.ctrlKey || e.shiftKey || e.metaKey || e.button && 1 === e.button || "_blank" === e.target.getAttribute("target"),
        markPhxChildDestroyed(e) {
            this.isPhxChild(e) && e.setAttribute(O, ""),
            this.putPrivate(e, "destroyed", !0)
        },
        findPhxChildrenInFragment(e, t) {
            let n = document.createElement("template");
            return n.innerHTML = e,
            this.findPhxChildren(n.content, t)
        },
        isIgnored: (e,t)=>"ignore" === (e.getAttribute(t) || e.getAttribute("data-phx-update")),
        isPhxUpdate: (e,t,n)=>e.getAttribute && n.indexOf(e.getAttribute(t)) >= 0,
        findPhxSticky(e) {
            return this.all(e, `[${j}]`)
        },
        findPhxChildren(e, t) {
            return this.all(e, `${P}[${E}="${t}"]`)
        },
        findParentCIDs(e, t) {
            let n = new Set(t)
              , i = t.reduce(((t,n)=>{
                let i = `[${o}="${n}"] [${o}]`;
                return this.filterWithinSameLiveView(this.all(e, i), e).map((e=>parseInt(e.getAttribute(o)))).forEach((e=>t.delete(e))),
                t
            }
            ), n);
            return 0 === i.size ? new Set(t) : i
        },
        filterWithinSameLiveView(e, t) {
            return t.querySelector(P) ? e.filter((e=>this.withinSameLiveView(e, t))) : e
        },
        withinSameLiveView(e, t) {
            for (; e = e.parentNode; ) {
                if (e.isSameNode(t))
                    return !0;
                if (null !== e.getAttribute(O))
                    return !1
            }
        },
        private: (e,t)=>e[F] && e[F][t],
        deletePrivate(e, t) {
            e[F] && delete e[F][t]
        },
        putPrivate(e, t, n) {
            e[F] || (e[F] = {}),
            e[F][t] = n
        },
        updatePrivate(e, t, n, i) {
            let r = this.private(e, t);
            void 0 === r ? this.putPrivate(e, t, i(n)) : this.putPrivate(e, t, i(r))
        },
        copyPrivates(e, t) {
            t[F] && (e[F] = t[F])
        },
        putTitle(e) {
            let t = document.querySelector("title")
              , {prefix: n, suffix: i} = t.dataset;
            document.title = `${n || ""}${e}${i || ""}`
        },
        debounce(e, t, n, i, r, o, s, a) {
            let c = e.getAttribute(n)
              , l = e.getAttribute(r);
            "" === c && (c = i),
            "" === l && (l = o);
            let u = c || l;
            switch (u) {
            case null:
                return a();
            case "blur":
                return void (this.once(e, "debounce-blur") && e.addEventListener("blur", (()=>a())));
            default:
                let n = parseInt(u)
                  , i = ()=>l ? this.deletePrivate(e, z) : a()
                  , r = this.incCycle(e, W, i);
                if (isNaN(n))
                    return ne(`invalid throttle/debounce value: ${u}`);
                if (l) {
                    let i = !1;
                    if ("keydown" === t.type) {
                        let n = this.private(e, G);
                        this.putPrivate(e, G, t.key),
                        i = n !== t.key
                    }
                    if (!i && this.private(e, z))
                        return !1;
                    a(),
                    this.putPrivate(e, z, !0),
                    setTimeout((()=>{
                        s() && this.triggerCycle(e, W)
                    }
                    ), n)
                } else
                    setTimeout((()=>{
                        s() && this.triggerCycle(e, W, r)
                    }
                    ), n);
                let o = e.form;
                o && this.once(o, "bind-debounce") && o.addEventListener("submit", (()=>{
                    Array.from(new FormData(o).entries(), (([e])=>{
                        let t = o.querySelector(`[name="${e}"]`);
                        this.incCycle(t, W),
                        this.deletePrivate(t, z)
                    }
                    ))
                }
                )),
                this.once(e, "bind-debounce") && e.addEventListener("blur", (()=>this.triggerCycle(e, W)))
            }
        },
        triggerCycle(e, t, n) {
            let[i,r] = this.private(e, t);
            n || (n = i),
            n === i && (this.incCycle(e, t),
            r())
        },
        once(e, t) {
            return !0 !== this.private(e, t) && (this.putPrivate(e, t, !0),
            !0)
        },
        incCycle(e, t, n=function() {}
        ) {
            let[i] = this.private(e, t) || [0, n];
            return i++,
            this.putPrivate(e, t, [i, n]),
            i
        },
        discardError(e, t, n) {
            let i = t.getAttribute && t.getAttribute(n)
              , r = i && e.querySelector(`[id="${i}"], [name="${i}"], [name="${i}[]"]`);
            r && (this.private(r, A) || this.private(r, L) || t.classList.add(_))
        },
        showError(e, t) {
            (e.id || e.name) && this.all(e.form, `[${t}="${e.id}"], [${t}="${e.name}"]`, (e=>{
                this.removeClass(e, _)
            }
            ))
        },
        isPhxChild: e=>e.getAttribute && e.getAttribute(E),
        isPhxSticky: e=>e.getAttribute && null !== e.getAttribute(j),
        firstPhxChild(e) {
            return this.isPhxChild(e) ? e : this.all(e, `[${E}]`)[0]
        },
        dispatchEvent(e, t, n={}) {
            let i = {
                bubbles: void 0 === n.bubbles || !!n.bubbles,
                cancelable: !0,
                detail: n.detail || {}
            }
              , r = "click" === t ? new MouseEvent("click",i) : new CustomEvent(t,i);
            e.dispatchEvent(r)
        },
        cloneNode(e, t) {
            if (void 0 === t)
                return e.cloneNode(!0);
            {
                let n = e.cloneNode(!1);
                return n.innerHTML = t,
                n
            }
        },
        mergeAttrs(e, t, n={}) {
            let i = n.exclude || []
              , r = n.isIgnored
              , o = t.attributes;
            for (let n = o.length - 1; n >= 0; n--) {
                let r = o[n].name;
                i.indexOf(r) < 0 && e.setAttribute(r, t.getAttribute(r))
            }
            let s = e.attributes;
            for (let n = s.length - 1; n >= 0; n--) {
                let i = s[n].name;
                r ? i.startsWith("data-") && !t.hasAttribute(i) && e.removeAttribute(i) : t.hasAttribute(i) || e.removeAttribute(i)
            }
        },
        mergeFocusedInput(e, t) {
            e instanceof HTMLSelectElement || pe.mergeAttrs(e, t, {
                exclude: ["value"]
            }),
            t.readOnly ? e.setAttribute("readonly", !0) : e.removeAttribute("readonly")
        },
        hasSelectionRange: e=>e.setSelectionRange && ("text" === e.type || "textarea" === e.type),
        restoreFocus(e, t, n) {
            if (!pe.isTextualInput(e))
                return;
            let i = e.matches(":focus");
            e.readOnly && e.blur(),
            i || e.focus(),
            this.hasSelectionRange(e) && e.setSelectionRange(t, n)
        },
        isFormInput: e=>/^(?:input|select|textarea)$/i.test(e.tagName) && "button" !== e.type,
        syncAttrsToProps(e) {
            e instanceof HTMLInputElement && T.indexOf(e.type.toLocaleLowerCase()) >= 0 && (e.checked = null !== e.getAttribute("checked"))
        },
        isTextualInput: e=>C.indexOf(e.type) >= 0,
        isNowTriggerFormExternal: (e,t)=>e.getAttribute && null !== e.getAttribute(t),
        syncPendingRef(e, t, n) {
            let i = e.getAttribute(a);
            if (null === i)
                return !0;
            let o = e.getAttribute(c);
            return pe.isFormInput(e) || null !== e.getAttribute(n) ? (pe.isUploadInput(e) && pe.mergeAttrs(e, t, {
                isIgnored: !0
            }),
            pe.putPrivate(e, a, t),
            !1) : (r.forEach((n=>{
                e.classList.contains(n) && t.classList.add(n)
            }
            )),
            t.setAttribute(a, i),
            t.setAttribute(c, o),
            !0)
        },
        cleanChildNodes(e, t) {
            if (pe.isPhxUpdate(e, t, ["append", "prepend"])) {
                let t = [];
                e.childNodes.forEach((e=>{
                    if (!e.id) {
                        e.nodeType === Node.TEXT_NODE && "" === e.nodeValue.trim() || ne(`only HTML element tags with an id are allowed inside containers with phx-update.\n\nremoving illegal node: "${(e.outerHTML || e.nodeValue).trim()}"\n\n`),
                        t.push(e)
                    }
                }
                )),
                t.forEach((e=>e.remove()))
            }
        },
        replaceRootContainer(e, t, n) {
            let i = new Set(["id", O, R, k, x]);
            if (e.tagName.toLowerCase() === t.toLowerCase())
                return Array.from(e.attributes).filter((e=>!i.has(e.name.toLowerCase()))).forEach((t=>e.removeAttribute(t.name))),
                Object.keys(n).filter((e=>!i.has(e.toLowerCase()))).forEach((t=>e.setAttribute(t, n[t]))),
                e;
            {
                let r = document.createElement(t);
                return Object.keys(n).forEach((e=>r.setAttribute(e, n[e]))),
                i.forEach((t=>r.setAttribute(t, e.getAttribute(t)))),
                r.innerHTML = e.innerHTML,
                e.replaceWith(r),
                r
            }
        },
        getSticky(e, t, n) {
            let i = (pe.private(e, "sticky") || []).find((([e])=>t === e));
            if (i) {
                let[e,t,n] = i;
                return n
            }
            return "function" == typeof n ? n() : n
        },
        deleteSticky(e, t) {
            this.updatePrivate(e, "sticky", [], (e=>e.filter((([e,n])=>e !== t))))
        },
        putSticky(e, t, n) {
            let i = n(e);
            this.updatePrivate(e, "sticky", [], (e=>{
                let r = e.findIndex((([e])=>t === e));
                return r >= 0 ? e[r] = [t, n, i] : e.push([t, n, i]),
                e
            }
            ))
        },
        applyStickyOperations(e) {
            let t = pe.private(e, "sticky");
            t && t.forEach((([t,n,i])=>this.putSticky(e, t, n)))
        }
    }, me = pe, ge = class {
        static isActive(e, t) {
            let n = void 0 === t._phxRef
              , i = e.getAttribute(f).split(",").indexOf(be.genFileRef(t)) >= 0;
            return t.size > 0 && (n || i)
        }
        static isPreflighted(e, t) {
            return e.getAttribute(h).split(",").indexOf(be.genFileRef(t)) >= 0 && this.isActive(e, t)
        }
        constructor(e, t, n) {
            this.ref = be.genFileRef(t),
            this.fileEl = e,
            this.file = t,
            this.view = n,
            this.meta = null,
            this._isCancelled = !1,
            this._isDone = !1,
            this._progress = 0,
            this._lastProgressSent = -1,
            this._onDone = function() {}
            ,
            this._onElUpdated = this.onElUpdated.bind(this),
            this.fileEl.addEventListener(p, this._onElUpdated)
        }
        metadata() {
            return this.meta
        }
        progress(e) {
            this._progress = Math.floor(e),
            this._progress > this._lastProgressSent && (this._progress >= 100 ? (this._progress = 100,
            this._lastProgressSent = 100,
            this._isDone = !0,
            this.view.pushFileProgress(this.fileEl, this.ref, 100, (()=>{
                be.untrackFile(this.fileEl, this.file),
                this._onDone()
            }
            ))) : (this._lastProgressSent = this._progress,
            this.view.pushFileProgress(this.fileEl, this.ref, this._progress)))
        }
        cancel() {
            this._isCancelled = !0,
            this._isDone = !0,
            this._onDone()
        }
        isDone() {
            return this._isDone
        }
        error(e="failed") {
            this.fileEl.removeEventListener(p, this._onElUpdated),
            this.view.pushFileProgress(this.fileEl, this.ref, {
                error: e
            }),
            be.clearFiles(this.fileEl)
        }
        onDone(e) {
            this._onDone = ()=>{
                this.fileEl.removeEventListener(p, this._onElUpdated),
                e()
            }
        }
        onElUpdated() {
            -1 === this.fileEl.getAttribute(f).split(",").indexOf(this.ref) && this.cancel()
        }
        toPreflightPayload() {
            return {
                last_modified: this.file.lastModified,
                name: this.file.name,
                relative_path: this.file.webkitRelativePath,
                size: this.file.size,
                type: this.file.type,
                ref: this.ref
            }
        }
        uploader(e) {
            if (this.meta.uploader) {
                let t = e[this.meta.uploader] || ne(`no uploader configured for ${this.meta.uploader}`);
                return {
                    name: this.meta.uploader,
                    callback: t
                }
            }
            return {
                name: "channel",
                callback: he
            }
        }
        zipPostFlight(e) {
            this.meta = e.entries[this.ref],
            this.meta || ne(`no preflight upload response returned with ref ${this.ref}`, {
                input: this.fileEl,
                response: e
            })
        }
    }
    , ve = 0, be = class {
        static genFileRef(e) {
            let t = e._phxRef;
            return void 0 !== t ? t : (e._phxRef = (ve++).toString(),
            e._phxRef)
        }
        static getEntryDataURL(e, t, n) {
            let i = this.activeFiles(e).find((e=>this.genFileRef(e) === t));
            n(URL.createObjectURL(i))
        }
        static hasUploadsInProgress(e) {
            let t = 0;
            return me.findUploadInputs(e).forEach((e=>{
                e.getAttribute(h) !== e.getAttribute("data-phx-done-refs") && t++
            }
            )),
            t > 0
        }
        static serializeUploads(e) {
            let t = this.activeFiles(e)
              , n = {};
            return t.forEach((t=>{
                let i = {
                    path: e.name
                }
                  , r = e.getAttribute(u);
                n[r] = n[r] || [],
                i.ref = this.genFileRef(t),
                i.last_modified = t.lastModified,
                i.name = t.name || i.ref,
                i.relative_path = t.webkitRelativePath,
                i.type = t.type,
                i.size = t.size,
                n[r].push(i)
            }
            )),
            n
        }
        static clearFiles(e) {
            e.value = null,
            e.removeAttribute(u),
            me.putPrivate(e, "files", [])
        }
        static untrackFile(e, t) {
            me.putPrivate(e, "files", me.private(e, "files").filter((e=>!Object.is(e, t))))
        }
        static trackFiles(e, t) {
            if (null !== e.getAttribute("multiple")) {
                let n = t.filter((t=>!this.activeFiles(e).find((e=>Object.is(e, t)))));
                me.putPrivate(e, "files", this.activeFiles(e).concat(n)),
                e.value = null
            } else
                me.putPrivate(e, "files", t)
        }
        static activeFileInputs(e) {
            let t = me.findUploadInputs(e);
            return Array.from(t).filter((e=>e.files && this.activeFiles(e).length > 0))
        }
        static activeFiles(e) {
            return (me.private(e, "files") || []).filter((t=>ge.isActive(e, t)))
        }
        static inputsAwaitingPreflight(e) {
            let t = me.findUploadInputs(e);
            return Array.from(t).filter((e=>this.filesAwaitingPreflight(e).length > 0))
        }
        static filesAwaitingPreflight(e) {
            return this.activeFiles(e).filter((t=>!ge.isPreflighted(e, t)))
        }
        constructor(e, t, n) {
            this.view = t,
            this.onComplete = n,
            this._entries = Array.from(be.filesAwaitingPreflight(e) || []).map((n=>new ge(e,n,t))),
            this.numEntriesInProgress = this._entries.length
        }
        entries() {
            return this._entries
        }
        initAdapterUpload(e, t, n) {
            this._entries = this._entries.map((t=>(t.zipPostFlight(e),
            t.onDone((()=>{
                this.numEntriesInProgress--,
                0 === this.numEntriesInProgress && this.onComplete()
            }
            )),
            t)));
            let i = this._entries.reduce(((e,t)=>{
                let {name: i, callback: r} = t.uploader(n.uploaders);
                return e[i] = e[i] || {
                    callback: r,
                    entries: []
                },
                e[i].entries.push(t),
                e
            }
            ), {});
            for (let r in i) {
                let {callback: o, entries: s} = i[r];
                o(s, t, e, n)
            }
        }
    }
    , ye = {
        focusMain() {
            let e = document.querySelector("main h1, main, h1");
            if (e) {
                let t = e.tabIndex;
                e.tabIndex = -1,
                e.focus(),
                e.tabIndex = t
            }
        },
        anyOf: (e,t)=>t.find((t=>e instanceof t)),
        isFocusable(e, t) {
            return e instanceof HTMLAnchorElement && "ignore" !== e.rel || e instanceof HTMLAreaElement && void 0 !== e.href || !e.disabled && this.anyOf(e, [HTMLInputElement, HTMLSelectElement, HTMLTextAreaElement, HTMLButtonElement]) || e instanceof HTMLIFrameElement || e.tabIndex > 0 || !t && 0 === e.tabIndex && null !== e.getAttribute("tabindex") && "true" !== e.getAttribute("aria-hidden")
        },
        attemptFocus(e, t) {
            if (this.isFocusable(e, t))
                try {
                    e.focus()
                } catch (e) {}
            return !!document.activeElement && document.activeElement.isSameNode(e)
        },
        focusFirstInteractive(e) {
            let t = e.firstElementChild;
            for (; t; ) {
                if (this.attemptFocus(t, !0) || this.focusFirstInteractive(t, !0))
                    return !0;
                t = t.nextElementSibling
            }
        },
        focusFirst(e) {
            let t = e.firstElementChild;
            for (; t; ) {
                if (this.attemptFocus(t) || this.focusFirst(t))
                    return !0;
                t = t.nextElementSibling
            }
        },
        focusLast(e) {
            let t = e.lastElementChild;
            for (; t; ) {
                if (this.attemptFocus(t) || this.focusLast(t))
                    return !0;
                t = t.previousElementSibling
            }
        }
    }, _e = {
        LiveFileUpload: {
            activeRefs() {
                return this.el.getAttribute(f)
            },
            preflightedRefs() {
                return this.el.getAttribute(h)
            },
            mounted() {
                this.preflightedWas = this.preflightedRefs()
            },
            updated() {
                let e = this.preflightedRefs();
                this.preflightedWas !== e && (this.preflightedWas = e,
                "" === e && this.__view.cancelSubmit(this.el.form)),
                "" === this.activeRefs() && (this.el.value = null),
                this.el.dispatchEvent(new CustomEvent(p))
            }
        },
        LiveImgPreview: {
            mounted() {
                this.ref = this.el.getAttribute("data-phx-entry-ref"),
                this.inputEl = document.getElementById(this.el.getAttribute(u)),
                be.getEntryDataURL(this.inputEl, this.ref, (e=>{
                    this.url = e,
                    this.el.src = e
                }
                ))
            },
            destroyed() {
                URL.revokeObjectURL(this.url)
            }
        },
        FocusWrap: {
            mounted() {
                this.focusStart = this.el.firstElementChild,
                this.focusEnd = this.el.lastElementChild,
                this.focusStart.addEventListener("focus", (()=>ye.focusLast(this.el))),
                this.focusEnd.addEventListener("focus", (()=>ye.focusFirst(this.el))),
                this.el.addEventListener("phx:show-end", (()=>this.el.focus())),
                "none" !== window.getComputedStyle(this.el).display && ye.focusFirst(this.el)
            }
        }
    };
    var we = "undefined" == typeof document ? void 0 : document
      , Ee = !!we && "content"in we.createElement("template")
      , ke = !!we && we.createRange && "createContextualFragment"in we.createRange();
    function xe(e) {
        return e = e.trim(),
        Ee ? function(e) {
            var t = we.createElement("template");
            return t.innerHTML = e,
            t.content.childNodes[0]
        }(e) : ke ? function(e) {
            return re || (re = we.createRange()).selectNode(we.body),
            re.createContextualFragment(e).childNodes[0]
        }(e) : function(e) {
            var t = we.createElement("body");
            return t.innerHTML = e,
            t.childNodes[0]
        }(e)
    }
    function Se(e, t) {
        var n, i, r = e.nodeName, o = t.nodeName;
        return r === o || (n = r.charCodeAt(0),
        i = o.charCodeAt(0),
        n <= 90 && i >= 97 ? r === o.toUpperCase() : i <= 90 && n >= 97 && o === r.toUpperCase())
    }
    function Ae(e, t, n) {
        e[n] !== t[n] && (e[n] = t[n],
        e[n] ? e.setAttribute(n, "") : e.removeAttribute(n))
    }
    var Ce = {
        OPTION: function(e, t) {
            var n = e.parentNode;
            if (n) {
                var i = n.nodeName.toUpperCase();
                "OPTGROUP" === i && (i = (n = n.parentNode) && n.nodeName.toUpperCase()),
                "SELECT" !== i || n.hasAttribute("multiple") || (e.hasAttribute("selected") && !t.selected && (e.setAttribute("selected", "selected"),
                e.removeAttribute("selected")),
                n.selectedIndex = -1)
            }
            Ae(e, t, "selected")
        },
        INPUT: function(e, t) {
            Ae(e, t, "checked"),
            Ae(e, t, "disabled"),
            e.value !== t.value && (e.value = t.value),
            t.hasAttribute("value") || e.removeAttribute("value")
        },
        TEXTAREA: function(e, t) {
            var n = t.value;
            e.value !== n && (e.value = n);
            var i = e.firstChild;
            if (i) {
                var r = i.nodeValue;
                if (r == n || !n && r == e.placeholder)
                    return;
                i.nodeValue = n
            }
        },
        SELECT: function(e, t) {
            if (!t.hasAttribute("multiple")) {
                for (var n, i, r = -1, o = 0, s = e.firstChild; s; )
                    if ("OPTGROUP" === (i = s.nodeName && s.nodeName.toUpperCase()))
                        s = (n = s).firstChild;
                    else {
                        if ("OPTION" === i) {
                            if (s.hasAttribute("selected")) {
                                r = o;
                                break
                            }
                            o++
                        }
                        !(s = s.nextSibling) && n && (s = n.nextSibling,
                        n = null)
                    }
                e.selectedIndex = r
            }
        }
    };
    function Te() {}
    function Le(e) {
        if (e)
            return e.getAttribute && e.getAttribute("id") || e.id
    }
    var Oe, Pe = (Oe = function(e, t) {
        var n, i, r, o, s = t.attributes;
        if (11 !== t.nodeType && 11 !== e.nodeType) {
            for (var a = s.length - 1; a >= 0; a--)
                i = (n = s[a]).name,
                r = n.namespaceURI,
                o = n.value,
                r ? (i = n.localName || i,
                e.getAttributeNS(r, i) !== o && ("xmlns" === n.prefix && (i = n.name),
                e.setAttributeNS(r, i, o))) : e.getAttribute(i) !== o && e.setAttribute(i, o);
            for (var c = e.attributes, l = c.length - 1; l >= 0; l--)
                i = (n = c[l]).name,
                (r = n.namespaceURI) ? (i = n.localName || i,
                t.hasAttributeNS(r, i) || e.removeAttributeNS(r, i)) : t.hasAttribute(i) || e.removeAttribute(i)
        }
    }
    ,
    function(e, t, n) {
        if (n || (n = {}),
        "string" == typeof t)
            if ("#document" === e.nodeName || "HTML" === e.nodeName || "BODY" === e.nodeName) {
                var i = t;
                (t = we.createElement("html")).innerHTML = i
            } else
                t = xe(t);
        var r = n.getNodeKey || Le
          , o = n.onBeforeNodeAdded || Te
          , s = n.onNodeAdded || Te
          , a = n.onBeforeElUpdated || Te
          , c = n.onElUpdated || Te
          , l = n.onBeforeNodeDiscarded || Te
          , u = n.onNodeDiscarded || Te
          , h = n.onBeforeElChildrenUpdated || Te
          , d = !0 === n.childrenOnly
          , f = Object.create(null)
          , p = [];
        function m(e) {
            p.push(e)
        }
        function g(e, t) {
            if (1 === e.nodeType)
                for (var n = e.firstChild; n; ) {
                    var i = void 0;
                    t && (i = r(n)) ? m(i) : (u(n),
                    n.firstChild && g(n, t)),
                    n = n.nextSibling
                }
        }
        function v(e, t, n) {
            !1 !== l(e) && (t && t.removeChild(e),
            u(e),
            g(e, n))
        }
        function b(e) {
            s(e);
            for (var t = e.firstChild; t; ) {
                var n = t.nextSibling
                  , i = r(t);
                if (i) {
                    var o = f[i];
                    o && Se(t, o) ? (t.parentNode.replaceChild(o, t),
                    y(o, t)) : b(t)
                } else
                    b(t);
                t = n
            }
        }
        function y(e, t, n) {
            var i = r(t);
            if (i && delete f[i],
            !n) {
                if (!1 === a(e, t))
                    return;
                if (Oe(e, t),
                c(e),
                !1 === h(e, t))
                    return
            }
            "TEXTAREA" !== e.nodeName ? function(e, t) {
                var n, i, s, a, c, l = t.firstChild, u = e.firstChild;
                e: for (; l; ) {
                    for (a = l.nextSibling,
                    n = r(l); u; ) {
                        if (s = u.nextSibling,
                        l.isSameNode && l.isSameNode(u)) {
                            l = a,
                            u = s;
                            continue e
                        }
                        i = r(u);
                        var h = u.nodeType
                          , d = void 0;
                        if (h === l.nodeType && (1 === h ? (n ? n !== i && ((c = f[n]) ? s === c ? d = !1 : (e.insertBefore(c, u),
                        i ? m(i) : v(u, e, !0),
                        u = c) : d = !1) : i && (d = !1),
                        (d = !1 !== d && Se(u, l)) && y(u, l)) : 3 !== h && 8 != h || (d = !0,
                        u.nodeValue !== l.nodeValue && (u.nodeValue = l.nodeValue))),
                        d) {
                            l = a,
                            u = s;
                            continue e
                        }
                        i ? m(i) : v(u, e, !0),
                        u = s
                    }
                    if (n && (c = f[n]) && Se(c, l))
                        e.appendChild(c),
                        y(c, l);
                    else {
                        var p = o(l);
                        !1 !== p && (p && (l = p),
                        l.actualize && (l = l.actualize(e.ownerDocument || we)),
                        e.appendChild(l),
                        b(l))
                    }
                    l = a,
                    u = s
                }
                !function(e, t, n) {
                    for (; t; ) {
                        var i = t.nextSibling;
                        (n = r(t)) ? m(n) : v(t, e, !0),
                        t = i
                    }
                }(e, u, i);
                var g = Ce[e.nodeName];
                g && g(e, t)
            }(e, t) : Ce.TEXTAREA(e, t)
        }
        !function e(t) {
            if (1 === t.nodeType || 11 === t.nodeType)
                for (var n = t.firstChild; n; ) {
                    var i = r(n);
                    i && (f[i] = n),
                    e(n),
                    n = n.nextSibling
                }
        }(e);
        var _, w, E = e, k = E.nodeType, x = t.nodeType;
        if (!d)
            if (1 === k)
                1 === x ? Se(e, t) || (u(e),
                E = function(e, t) {
                    for (var n = e.firstChild; n; ) {
                        var i = n.nextSibling;
                        t.appendChild(n),
                        n = i
                    }
                    return t
                }(e, (_ = t.nodeName,
                (w = t.namespaceURI) && "http://www.w3.org/1999/xhtml" !== w ? we.createElementNS(w, _) : we.createElement(_)))) : E = t;
            else if (3 === k || 8 === k) {
                if (x === k)
                    return E.nodeValue !== t.nodeValue && (E.nodeValue = t.nodeValue),
                    E;
                E = t
            }
        if (E === t)
            u(e);
        else {
            if (t.isSameNode && t.isSameNode(E))
                return;
            if (y(E, t, d),
            p)
                for (var S = 0, A = p.length; S < A; S++) {
                    var C = f[p[S]];
                    C && v(C, C.parentNode, !1)
                }
        }
        return !d && E !== e && e.parentNode && (E.actualize && (E = E.actualize(e.ownerDocument || we)),
        e.parentNode.replaceChild(E, e)),
        E
    }
    ), je = class {
        static patchEl(e, t, n) {
            Pe(e, t, {
                childrenOnly: !1,
                onBeforeElUpdated: (e,t)=>{
                    if (n && n.isSameNode(e) && me.isFormInput(e))
                        return me.mergeFocusedInput(e, t),
                        !1
                }
            })
        }
        constructor(e, t, n, i, r) {
            this.view = e,
            this.liveSocket = e.liveSocket,
            this.container = t,
            this.id = n,
            this.rootID = e.root.id,
            this.html = i,
            this.targetCID = r,
            this.cidPatch = ie(this.targetCID),
            this.callbacks = {
                beforeadded: [],
                beforeupdated: [],
                beforephxChildAdded: [],
                afteradded: [],
                afterupdated: [],
                afterdiscarded: [],
                afterphxChildAdded: [],
                aftertransitionsDiscarded: []
            }
        }
        before(e, t) {
            this.callbacks[`before ${e}`].push(t)
        }
        after(e, t) {
            this.callbacks[`after ${e}`].push(t)
        }
        trackBefore(e, ...t) {
            this.callbacks[`before ${e}`].forEach((e=>e(...t)))
        }
        trackAfter(e, ...t) {
            this.callbacks[`after ${e}`].forEach((e=>e(...t)))
        }
        markPrunableContentForRemoval() {
            me.all(this.container, "[phx-update=append] > *, [phx-update=prepend] > *", (e=>{
                e.setAttribute(g, "")
            }
            ))
        }
        perform() {
            let {view: e, liveSocket: t, container: n, html: i} = this
              , r = this.isCIDPatch() ? this.targetCIDContainer(i) : n;
            if (this.isCIDPatch() && !r)
                return;
            let s = t.getActiveElement()
              , {selectionStart: a, selectionEnd: c} = s && me.hasSelectionRange(s) ? s : {}
              , l = t.binding(U)
              , u = t.binding(S)
              , h = t.binding(I)
              , d = t.binding("trigger-action")
              , f = t.binding("remove")
              , p = []
              , m = []
              , v = []
              , b = []
              , y = null
              , _ = t.time("premorph container prep", (()=>this.buildDiffHTML(n, i, l, r)));
            return this.trackBefore("added", n),
            this.trackBefore("updated", n, n),
            t.time("morphdom", (()=>{
                Pe(r, _, {
                    childrenOnly: null === r.getAttribute(o),
                    getNodeKey: e=>me.isPhxDestroyed(e) ? null : e.id,
                    onBeforeNodeAdded: e=>(this.trackBefore("added", e),
                    e),
                    onNodeAdded: t=>{
                        t instanceof HTMLImageElement && t.srcset ? t.srcset = t.srcset : t instanceof HTMLVideoElement && t.autoplay && t.play(),
                        me.isNowTriggerFormExternal(t, d) && (y = t),
                        me.discardError(r, t, u),
                        (me.isPhxChild(t) && e.ownsElement(t) || me.isPhxSticky(t) && e.ownsElement(t.parentNode)) && this.trackAfter("phxChildAdded", t),
                        p.push(t)
                    }
                    ,
                    onNodeDiscarded: e=>{
                        (me.isPhxChild(e) || me.isPhxSticky(e)) && t.destroyViewByEl(e),
                        this.trackAfter("discarded", e)
                    }
                    ,
                    onBeforeNodeDiscarded: e=>!(!e.getAttribute || null === e.getAttribute(g)) || (null === e.parentNode || !me.isPhxUpdate(e.parentNode, l, ["append", "prepend"]) || !e.id) && (e.getAttribute && e.getAttribute(f) ? (b.push(e),
                    !1) : !this.skipCIDSibling(e)),
                    onElUpdated: e=>{
                        me.isNowTriggerFormExternal(e, d) && (y = e),
                        m.push(e)
                    }
                    ,
                    onBeforeElUpdated: (e,t)=>{
                        if (me.cleanChildNodes(t, l),
                        this.skipCIDSibling(t))
                            return !1;
                        if (me.isPhxSticky(e))
                            return !1;
                        if (me.isIgnored(e, l) || e.form && e.form.isSameNode(y))
                            return this.trackBefore("updated", e, t),
                            me.mergeAttrs(e, t, {
                                isIgnored: !0
                            }),
                            m.push(e),
                            me.applyStickyOperations(e),
                            !1;
                        if ("number" === e.type && e.validity && e.validity.badInput)
                            return !1;
                        if (!me.syncPendingRef(e, t, h))
                            return me.isUploadInput(e) && (this.trackBefore("updated", e, t),
                            m.push(e)),
                            me.applyStickyOperations(e),
                            !1;
                        if (me.isPhxChild(t)) {
                            let n = e.getAttribute(O);
                            return me.mergeAttrs(e, t, {
                                exclude: [R]
                            }),
                            "" !== n && e.setAttribute(O, n),
                            e.setAttribute(x, this.rootID),
                            me.applyStickyOperations(e),
                            !1
                        }
                        return me.copyPrivates(t, e),
                        me.discardError(r, t, u),
                        s && e.isSameNode(s) && me.isFormInput(e) && "hidden" !== e.type ? (this.trackBefore("updated", e, t),
                        me.mergeFocusedInput(e, t),
                        me.syncAttrsToProps(e),
                        m.push(e),
                        me.applyStickyOperations(e),
                        !1) : (me.isPhxUpdate(t, l, ["append", "prepend"]) && v.push(new class {
                            constructor(e, t, n) {
                                let i = new Set
                                  , r = new Set([...t.children].map((e=>e.id)))
                                  , o = [];
                                Array.from(e.children).forEach((e=>{
                                    if (e.id && (i.add(e.id),
                                    r.has(e.id))) {
                                        let t = e.previousElementSibling && e.previousElementSibling.id;
                                        o.push({
                                            elementId: e.id,
                                            previousElementId: t
                                        })
                                    }
                                }
                                )),
                                this.containerId = t.id,
                                this.updateType = n,
                                this.elementsToModify = o,
                                this.elementIdsToAdd = [...r].filter((e=>!i.has(e)))
                            }
                            perform() {
                                let e = me.byId(this.containerId);
                                this.elementsToModify.forEach((t=>{
                                    t.previousElementId ? ue(document.getElementById(t.previousElementId), (e=>{
                                        ue(document.getElementById(t.elementId), (t=>{
                                            t.previousElementSibling && t.previousElementSibling.id == e.id || e.insertAdjacentElement("afterend", t)
                                        }
                                        ))
                                    }
                                    )) : ue(document.getElementById(t.elementId), (t=>{
                                        null == t.previousElementSibling || e.insertAdjacentElement("afterbegin", t)
                                    }
                                    ))
                                }
                                )),
                                "prepend" == this.updateType && this.elementIdsToAdd.reverse().forEach((t=>{
                                    ue(document.getElementById(t), (t=>e.insertAdjacentElement("afterbegin", t)))
                                }
                                ))
                            }
                        }
                        (e,t,t.getAttribute(l))),
                        me.syncAttrsToProps(t),
                        me.applyStickyOperations(t),
                        this.trackBefore("updated", e, t),
                        !0)
                    }
                })
            }
            )),
            t.isDebugEnabled() && function() {
                let e = new Set
                  , t = document.querySelectorAll("*[id]");
                for (let n = 0, i = t.length; n < i; n++)
                    e.has(t[n].id) ? console.error(`Multiple IDs detected: ${t[n].id}. Ensure unique element ids.`) : e.add(t[n].id)
            }(),
            v.length > 0 && t.time("post-morph append/prepend restoration", (()=>{
                v.forEach((e=>e.perform()))
            }
            )),
            t.silenceEvents((()=>me.restoreFocus(s, a, c))),
            me.dispatchEvent(document, "phx:update"),
            p.forEach((e=>this.trackAfter("added", e))),
            m.forEach((e=>this.trackAfter("updated", e))),
            b.length > 0 && (t.transitionRemoves(b),
            t.requestDOMUpdate((()=>{
                b.forEach((e=>{
                    let n = me.firstPhxChild(e);
                    n && t.destroyViewByEl(n),
                    e.remove()
                }
                )),
                this.trackAfter("transitionsDiscarded", b)
            }
            ))),
            y && (t.unload(),
            y.submit()),
            !0
        }
        isCIDPatch() {
            return this.cidPatch
        }
        skipCIDSibling(e) {
            return e.nodeType === Node.ELEMENT_NODE && null !== e.getAttribute(m)
        }
        targetCIDContainer(e) {
            if (!this.isCIDPatch())
                return;
            let[t,...n] = me.findComponentNodeList(this.container, this.targetCID);
            return 0 === n.length && 1 === me.childNodeLength(e) ? t : t && t.parentNode
        }
        buildDiffHTML(e, t, n, i) {
            let r = this.isCIDPatch()
              , s = r && i.getAttribute(o) === this.targetCID.toString();
            if (!r || s)
                return t;
            {
                let e = null
                  , n = document.createElement("template");
                e = me.cloneNode(i);
                let[r,...s] = me.findComponentNodeList(e, this.targetCID);
                return n.innerHTML = t,
                s.forEach((e=>e.remove())),
                Array.from(e.childNodes).forEach((e=>{
                    e.id && e.nodeType === Node.ELEMENT_NODE && e.getAttribute(o) !== this.targetCID.toString() && (e.setAttribute(m, ""),
                    e.innerHTML = "")
                }
                )),
                Array.from(n.content.childNodes).forEach((t=>e.insertBefore(t, r))),
                r.remove(),
                e.outerHTML
            }
        }
    }
    , Re = class {
        static extract(e) {
            let {[ee]: t, [Q]: n, [te]: i} = e;
            return delete e[ee],
            delete e[Q],
            delete e[te],
            {
                diff: e,
                title: i,
                reply: t || null,
                events: n || []
            }
        }
        constructor(e, t) {
            this.viewId = e,
            this.rendered = {},
            this.mergeDiff(t)
        }
        parentViewId() {
            return this.viewId
        }
        toString(e) {
            return this.recursiveToString(this.rendered, this.rendered[Z], e)
        }
        recursiveToString(e, t=e[Z], n) {
            let i = {
                buffer: "",
                components: t,
                onlyCids: n = n ? new Set(n) : null
            };
            return this.toOutputBuffer(e, null, i),
            i.buffer
        }
        componentCIDs(e) {
            return Object.keys(e[Z] || {}).map((e=>parseInt(e)))
        }
        isComponentOnlyDiff(e) {
            return !!e[Z] && 1 === Object.keys(e).length
        }
        getComponent(e, t) {
            return e[Z][t]
        }
        mergeDiff(e) {
            let t = e[Z]
              , n = {};
            if (delete e[Z],
            this.rendered = this.mutableMerge(this.rendered, e),
            this.rendered[Z] = this.rendered[Z] || {},
            t) {
                let i = this.rendered[Z];
                for (let e in t)
                    t[e] = this.cachedFindComponent(e, t[e], i, t, n);
                for (let e in t)
                    i[e] = t[e];
                e[Z] = t
            }
        }
        cachedFindComponent(e, t, n, i, r) {
            if (r[e])
                return r[e];
            {
                let o, s, a = t[X];
                if (ie(a)) {
                    let e;
                    e = a > 0 ? this.cachedFindComponent(a, i[a], n, i, r) : n[-a],
                    s = e[X],
                    o = this.cloneMerge(e, t),
                    o[X] = s
                } else
                    o = void 0 !== t[X] ? t : this.cloneMerge(n[e] || {}, t);
                return r[e] = o,
                o
            }
        }
        mutableMerge(e, t) {
            return void 0 !== t[X] ? t : (this.doMutableMerge(e, t),
            e)
        }
        doMutableMerge(e, t) {
            for (let n in t) {
                let i = t[n]
                  , r = e[n];
                ce(i) && void 0 === i[X] && ce(r) ? this.doMutableMerge(r, i) : e[n] = i
            }
        }
        cloneMerge(e, t) {
            let n = {
                ...e,
                ...t
            };
            for (let i in n) {
                let r = t[i]
                  , o = e[i];
                ce(r) && void 0 === r[X] && ce(o) && (n[i] = this.cloneMerge(o, r))
            }
            return n
        }
        componentToString(e) {
            return this.recursiveCIDToString(this.rendered[Z], e)
        }
        pruneCIDs(e) {
            e.forEach((e=>delete this.rendered[Z][e]))
        }
        get() {
            return this.rendered
        }
        isNewFingerprint(e={}) {
            return !!e[X]
        }
        templateStatic(e, t) {
            return "number" == typeof e ? t[e] : e
        }
        toOutputBuffer(e, t, n) {
            if (e[K])
                return this.comprehensionToBuffer(e, t, n);
            let {[X]: i} = e;
            i = this.templateStatic(i, t),
            n.buffer += i[0];
            for (let r = 1; r < i.length; r++)
                this.dynamicToBuffer(e[r - 1], t, n),
                n.buffer += i[r]
        }
        comprehensionToBuffer(e, t, n) {
            let {[K]: i, [X]: r} = e;
            r = this.templateStatic(r, t);
            let o = t || e.p;
            for (let e = 0; e < i.length; e++) {
                let t = i[e];
                n.buffer += r[0];
                for (let e = 1; e < r.length; e++)
                    this.dynamicToBuffer(t[e - 1], o, n),
                    n.buffer += r[e]
            }
        }
        dynamicToBuffer(e, t, n) {
            "number" == typeof e ? n.buffer += this.recursiveCIDToString(n.components, e, n.onlyCids) : ce(e) ? this.toOutputBuffer(e, t, n) : n.buffer += e
        }
        recursiveCIDToString(e, t, n) {
            let i = e[t] || ne(`no component for CID ${t}`, e)
              , r = document.createElement("template");
            r.innerHTML = this.recursiveToString(i, e, n);
            let s = r.content
              , a = n && !n.has(t)
              , [c,l] = Array.from(s.childNodes).reduce((([e,n],i,s)=>i.nodeType === Node.ELEMENT_NODE ? i.getAttribute(o) ? [e, !0] : (i.setAttribute(o, t),
            i.id || (i.id = `${this.parentViewId()}-${t}-${s}`),
            a && (i.setAttribute(m, ""),
            i.innerHTML = ""),
            [!0, n]) : "" !== i.nodeValue.trim() ? (ne(`only HTML element tags are allowed at the root of components.\n\ngot: "${i.nodeValue.trim()}"\n\nwithin:\n`, r.innerHTML.trim()),
            i.replaceWith(this.createSpan(i.nodeValue, t)),
            [!0, n]) : (i.remove(),
            [e, n])), [!1, !1]);
            return c || l ? !c && l ? (ne("expected at least one HTML element tag directly inside a component, but only subcomponents were found. A component must render at least one HTML tag directly inside itself.", r.innerHTML.trim()),
            r.innerHTML) : r.innerHTML : (ne("expected at least one HTML element tag inside a component, but the component is empty:\n", r.innerHTML.trim()),
            this.createSpan("", t).outerHTML)
        }
        createSpan(e, t) {
            let n = document.createElement("span");
            return n.innerText = e,
            n.setAttribute(o, t),
            n
        }
    }
    , De = 1, Ne = class {
        static makeID() {
            return De++
        }
        static elementID(e) {
            return e.phxHookId
        }
        constructor(e, t, n) {
            this.__view = e,
            this.liveSocket = e.liveSocket,
            this.__callbacks = n,
            this.__listeners = new Set,
            this.__isDisconnected = !1,
            this.el = t,
            this.el.phxHookId = this.constructor.makeID();
            for (let e in this.__callbacks)
                this[e] = this.__callbacks[e]
        }
        __mounted() {
            this.mounted && this.mounted()
        }
        __updated() {
            this.updated && this.updated()
        }
        __beforeUpdate() {
            this.beforeUpdate && this.beforeUpdate()
        }
        __destroyed() {
            this.destroyed && this.destroyed()
        }
        __reconnected() {
            this.__isDisconnected && (this.__isDisconnected = !1,
            this.reconnected && this.reconnected())
        }
        __disconnected() {
            this.__isDisconnected = !0,
            this.disconnected && this.disconnected()
        }
        pushEvent(e, t={}, n=function() {}
        ) {
            return this.__view.pushHookEvent(null, e, t, n)
        }
        pushEventTo(e, t, n={}, i=function() {}
        ) {
            return this.__view.withinTargets(e, ((e,r)=>e.pushHookEvent(r, t, n, i)))
        }
        handleEvent(e, t) {
            let n = (n,i)=>i ? e : t(n.detail);
            return window.addEventListener(`phx:${e}`, n),
            this.__listeners.add(n),
            n
        }
        removeHandleEvent(e) {
            let t = e(null, !0);
            window.removeEventListener(`phx:${t}`, e),
            this.__listeners.delete(e)
        }
        upload(e, t) {
            return this.__view.dispatchUploads(e, t)
        }
        uploadTo(e, t, n) {
            return this.__view.withinTargets(e, (e=>e.dispatchUploads(t, n)))
        }
        __cleanup__() {
            this.__listeners.forEach((e=>this.removeHandleEvent(e)))
        }
    }
    , Ie = null, Me = {
        exec(e, t, n, i, r) {
            let[o,s] = r || [null, {}];
            ("[" === t.charAt(0) ? JSON.parse(t) : [[o, s]]).forEach((([r,a])=>{
                r === o && s.data && (a.data = Object.assign(a.data || {}, s.data)),
                this.filterToEls(i, a).forEach((o=>{
                    this[`exec_ ${r}`](e, t, n, i, o, a)
                }
                ))
            }
            ))
        },
        isVisible: e=>!!(e.offsetWidth || e.offsetHeight || e.getClientRects().length > 0),
        exec_dispatch(e, t, n, i, r, {to: o, event: s, detail: a, bubbles: c}) {
            (a = a || {}).dispatcher = i,
            me.dispatchEvent(r, s, {
                detail: a,
                bubbles: c
            })
        },
        exec_push(e, t, n, i, r, o) {
            if (!n.isConnected())
                return;
            let {event: s, data: a, target: c, page_loading: l, loading: u, value: h, dispatcher: d} = o
              , f = {
                loading: u,
                value: h,
                target: c,
                page_loading: !!l
            }
              , p = "change" === e && d ? d : i
              , m = c || p.getAttribute(n.binding("target")) || p;
            n.withinTargets(m, ((n,r)=>{
                if ("change" === e) {
                    let {newCid: e, _target: a, callback: c} = o;
                    a = a || (me.isFormInput(i) ? i.name : void 0),
                    a && (f._target = a),
                    n.pushInput(i, r, e, s || t, f, c)
                } else
                    "submit" === e ? n.submitForm(i, r, s || t, f) : n.pushEvent(e, i, r, s || t, a, f)
            }
            ))
        },
        exec_navigate(e, t, n, i, r, {href: o, replace: s}) {
            n.liveSocket.historyRedirect(o, s ? "replace" : "push")
        },
        exec_patch(e, t, n, i, r, {href: o, replace: s}) {
            n.liveSocket.pushHistoryPatch(o, s ? "replace" : "push", i)
        },
        exec_focus(e, t, n, i, r) {
            window.requestAnimationFrame((()=>ye.attemptFocus(r)))
        },
        exec_focus_first(e, t, n, i, r) {
            window.requestAnimationFrame((()=>ye.focusFirstInteractive(r) || ye.focusFirst(r)))
        },
        exec_push_focus(e, t, n, i, r) {
            window.requestAnimationFrame((()=>Ie = r || i))
        },
        exec_pop_focus(e, t, n, i, r) {
            window.requestAnimationFrame((()=>{
                Ie && Ie.focus(),
                Ie = null
            }
            ))
        },
        exec_add_class(e, t, n, i, r, {names: o, transition: s, time: a}) {
            this.addOrRemoveClasses(r, o, [], s, a, n)
        },
        exec_remove_class(e, t, n, i, r, {names: o, transition: s, time: a}) {
            this.addOrRemoveClasses(r, [], o, s, a, n)
        },
        exec_transition(e, t, n, i, r, {time: o, transition: s}) {
            let[a,c,l] = s;
            n.transition(o, (()=>this.addOrRemoveClasses(r, a.concat(c), [])), (()=>this.addOrRemoveClasses(r, l, a.concat(c))))
        },
        exec_toggle(e, t, n, i, r, {display: o, ins: s, outs: a, time: c}) {
            this.toggle(e, n, r, o, s, a, c)
        },
        exec_show(e, t, n, i, r, {display: o, transition: s, time: a}) {
            this.show(e, n, r, o, s, a)
        },
        exec_hide(e, t, n, i, r, {display: o, transition: s, time: a}) {
            this.hide(e, n, r, o, s, a)
        },
        exec_set_attr(e, t, n, i, r, {attr: [o,s]}) {
            this.setOrRemoveAttrs(r, [[o, s]], [])
        },
        exec_remove_attr(e, t, n, i, r, {attr: o}) {
            this.setOrRemoveAttrs(r, [], [o])
        },
        show(e, t, n, i, r, o) {
            this.isVisible(n) || this.toggle(e, t, n, i, r, null, o)
        },
        hide(e, t, n, i, r, o) {
            this.isVisible(n) && this.toggle(e, t, n, i, null, r, o)
        },
        toggle(e, t, n, i, r, o, s) {
            let[a,c,l] = r || [[], [], []]
              , [u,h,d] = o || [[], [], []];
            if (a.length > 0 || u.length > 0)
                if (this.isVisible(n)) {
                    let e = ()=>{
                        this.addOrRemoveClasses(n, h, a.concat(c).concat(l)),
                        window.requestAnimationFrame((()=>{
                            this.addOrRemoveClasses(n, u, []),
                            window.requestAnimationFrame((()=>this.addOrRemoveClasses(n, d, h)))
                        }
                        ))
                    }
                    ;
                    n.dispatchEvent(new Event("phx:hide-start")),
                    t.transition(s, e, (()=>{
                        this.addOrRemoveClasses(n, [], u.concat(d)),
                        me.putSticky(n, "toggle", (e=>e.style.display = "none")),
                        n.dispatchEvent(new Event("phx:hide-end"))
                    }
                    ))
                } else {
                    if ("remove" === e)
                        return;
                    let r = ()=>{
                        this.addOrRemoveClasses(n, c, u.concat(h).concat(d)),
                        me.putSticky(n, "toggle", (e=>e.style.display = i || "block")),
                        window.requestAnimationFrame((()=>{
                            this.addOrRemoveClasses(n, a, []),
                            window.requestAnimationFrame((()=>this.addOrRemoveClasses(n, l, c)))
                        }
                        ))
                    }
                    ;
                    n.dispatchEvent(new Event("phx:show-start")),
                    t.transition(s, r, (()=>{
                        this.addOrRemoveClasses(n, [], a.concat(l)),
                        n.dispatchEvent(new Event("phx:show-end"))
                    }
                    ))
                }
            else
                this.isVisible(n) ? window.requestAnimationFrame((()=>{
                    n.dispatchEvent(new Event("phx:hide-start")),
                    me.putSticky(n, "toggle", (e=>e.style.display = "none")),
                    n.dispatchEvent(new Event("phx:hide-end"))
                }
                )) : window.requestAnimationFrame((()=>{
                    n.dispatchEvent(new Event("phx:show-start")),
                    me.putSticky(n, "toggle", (e=>e.style.display = i || "block")),
                    n.dispatchEvent(new Event("phx:show-end"))
                }
                ))
        },
        addOrRemoveClasses(e, t, n, i, r, o) {
            let[s,a,c] = i || [[], [], []];
            if (s.length > 0) {
                let i = ()=>this.addOrRemoveClasses(e, a.concat(s), [])
                  , l = ()=>this.addOrRemoveClasses(e, t.concat(c), n.concat(s).concat(a));
                return o.transition(r, i, l)
            }
            window.requestAnimationFrame((()=>{
                let[i,r] = me.getSticky(e, "classes", [[], []])
                  , o = t.filter((t=>i.indexOf(t) < 0 && !e.classList.contains(t)))
                  , s = n.filter((t=>r.indexOf(t) < 0 && e.classList.contains(t)))
                  , a = i.filter((e=>n.indexOf(e) < 0)).concat(o)
                  , c = r.filter((e=>t.indexOf(e) < 0)).concat(s);
                me.putSticky(e, "classes", (e=>(e.classList.remove(...c),
                e.classList.add(...a),
                [a, c])))
            }
            ))
        },
        setOrRemoveAttrs(e, t, n) {
            let[i,r] = me.getSticky(e, "attrs", [[], []])
              , o = t.map((([e,t])=>e)).concat(n)
              , s = i.filter((([e,t])=>!o.includes(e))).concat(t)
              , a = r.filter((e=>!o.includes(e))).concat(n);
            me.putSticky(e, "attrs", (e=>(a.forEach((t=>e.removeAttribute(t))),
            s.forEach((([t,n])=>e.setAttribute(t, n))),
            [s, a])))
        },
        hasAllClasses: (e,t)=>t.every((t=>e.classList.contains(t))),
        isToggledOut(e, t) {
            return !this.isVisible(e) || this.hasAllClasses(e, t)
        },
        filterToEls: (e,{to: t})=>t ? me.all(document, t) : [e]
    }, $e = (e,t,n=[])=>{
        let i = new FormData(e)
          , r = [];
        i.forEach(((e,t,n)=>{
            e instanceof File && r.push(t)
        }
        )),
        r.forEach((e=>i.delete(e)));
        let o = new URLSearchParams;
        for (let[e,t] of i.entries())
            (0 === n.length || n.indexOf(e) >= 0) && o.append(e, t);
        for (let e in t)
            o.append(e, t[e]);
        return o.toString()
    }
    , Ue = class {
        constructor(e, t, n, i, r) {
            this.isDead = !1,
            this.liveSocket = t,
            this.flash = i,
            this.parent = n,
            this.root = n ? n.root : this,
            this.el = e,
            this.id = this.el.id,
            this.ref = 0,
            this.childJoins = 0,
            this.loaderTimer = null,
            this.pendingDiffs = [],
            this.pruningCIDs = [],
            this.redirect = !1,
            this.href = null,
            this.joinCount = this.parent ? this.parent.joinCount - 1 : 0,
            this.joinPending = !0,
            this.destroyed = !1,
            this.joinCallback = function(e) {
                e && e()
            }
            ,
            this.stopCallback = function() {}
            ,
            this.pendingJoinOps = this.parent ? null : [],
            this.viewHooks = {},
            this.uploaders = {},
            this.formSubmits = [],
            this.children = this.parent ? null : {},
            this.root.children[this.id] = {},
            this.channel = this.liveSocket.channel(`lv:${this.id}`, (()=>({
                redirect: this.redirect ? this.href : void 0,
                url: this.redirect ? void 0 : this.href || void 0,
                params: this.connectParams(r),
                session: this.getSession(),
                static: this.getStatic(),
                flash: this.flash
            })))
        }
        setHref(e) {
            this.href = e
        }
        setRedirect(e) {
            this.redirect = !0,
            this.href = e
        }
        isMain() {
            return this.el.hasAttribute(k)
        }
        connectParams(e) {
            let t = this.liveSocket.params(this.el)
              , n = me.all(document, `[${this.binding("track-static")}]`).map((e=>e.src || e.href)).filter((e=>"string" == typeof e));
            return n.length > 0 && (t._track_static = n),
            t._mounts = this.joinCount,
            t._live_referer = e,
            t
        }
        isConnected() {
            return this.channel.canPush()
        }
        getSession() {
            return this.el.getAttribute(O)
        }
        getStatic() {
            let e = this.el.getAttribute(R);
            return "" === e ? null : e
        }
        destroy(e=function() {}
        ) {
            this.destroyAllChildren(),
            this.destroyed = !0,
            delete this.root.children[this.id],
            this.parent && delete this.root.children[this.parent.id][this.id],
            clearTimeout(this.loaderTimer);
            let t = ()=>{
                e();
                for (let e in this.viewHooks)
                    this.destroyHook(this.viewHooks[e])
            }
            ;
            me.markPhxChildDestroyed(this.el),
            this.log("destroyed", (()=>["the child has been removed from the parent"])),
            this.channel.leave().receive("ok", t).receive("error", t).receive("timeout", t)
        }
        setContainerClasses(...e) {
            this.el.classList.remove(b, y, w),
            this.el.classList.add(...e)
        }
        showLoader(e) {
            if (clearTimeout(this.loaderTimer),
            e)
                this.loaderTimer = setTimeout((()=>this.showLoader()), e);
            else {
                for (let e in this.viewHooks)
                    this.viewHooks[e].__disconnected();
                this.setContainerClasses(y)
            }
        }
        execAll(e) {
            me.all(this.el, `[${e}]`, (t=>this.liveSocket.execJS(t, t.getAttribute(e))))
        }
        hideLoader() {
            clearTimeout(this.loaderTimer),
            this.setContainerClasses(b),
            this.execAll(this.binding("connected"))
        }
        triggerReconnected() {
            for (let e in this.viewHooks)
                this.viewHooks[e].__reconnected()
        }
        log(e, t) {
            this.liveSocket.log(this, e, t)
        }
        transition(e, t, n=function() {}
        ) {
            this.liveSocket.transition(e, t, n)
        }
        withinTargets(e, t) {
            if (e instanceof HTMLElement || e instanceof SVGElement)
                return this.liveSocket.owner(e, (n=>t(n, e)));
            if (ie(e)) {
                0 === me.findComponentNodeList(this.el, e).length ? ne(`no component found matching phx-target of ${e}`) : t(this, parseInt(e))
            } else {
                let n = Array.from(document.querySelectorAll(e));
                0 === n.length && ne(`nothing found matching the phx-target selector "${e}"`),
                n.forEach((e=>this.liveSocket.owner(e, (n=>t(n, e)))))
            }
        }
        applyDiff(e, t, n) {
            this.log(e, (()=>["", se(t)]));
            let {diff: i, reply: r, events: o, title: s} = Re.extract(t);
            n({
                diff: i,
                reply: r,
                events: o
            }),
            s && window.requestAnimationFrame((()=>me.putTitle(s)))
        }
        onJoin(e) {
            let {rendered: t, container: n} = e;
            if (n) {
                let[e,t] = n;
                this.el = me.replaceRootContainer(this.el, e, t)
            }
            this.childJoins = 0,
            this.joinPending = !0,
            this.flash = null,
            fe.dropLocal(this.liveSocket.localStorage, window.location.pathname, i),
            this.applyDiff("mount", t, (({diff: t, events: n})=>{
                this.rendered = new Re(this.id,t);
                let i = this.renderContainer(null, "join");
                this.dropPendingRefs();
                let r = this.formsForRecovery(i);
                this.joinCount++,
                r.length > 0 ? r.forEach((([e,t,o],s)=>{
                    this.pushFormRecovery(e, o, (e=>{
                        s === r.length - 1 && this.onJoinComplete(e, i, n)
                    }
                    ))
                }
                )) : this.onJoinComplete(e, i, n)
            }
            ))
        }
        dropPendingRefs() {
            me.all(document, `[${c}="${this.id}"][${a}]`, (e=>{
                e.removeAttribute(a),
                e.removeAttribute(c)
            }
            ))
        }
        onJoinComplete({live_patch: e}, t, n) {
            if (this.joinCount > 1 || this.parent && !this.parent.isJoinPending())
                return this.applyJoinPatch(e, t, n);
            0 === me.findPhxChildrenInFragment(t, this.id).filter((e=>{
                let t = e.id && this.el.querySelector(`[id="${e.id}"]`)
                  , n = t && t.getAttribute(R);
                return n && e.setAttribute(R, n),
                this.joinChild(e)
            }
            )).length ? this.parent ? (this.root.pendingJoinOps.push([this, ()=>this.applyJoinPatch(e, t, n)]),
            this.parent.ackJoin(this)) : (this.onAllChildJoinsComplete(),
            this.applyJoinPatch(e, t, n)) : this.root.pendingJoinOps.push([this, ()=>this.applyJoinPatch(e, t, n)])
        }
        attachTrueDocEl() {
            this.el = me.byId(this.id),
            this.el.setAttribute(x, this.root.id)
        }
        execNewMounted() {
            me.all(this.el, `[${this.binding($)}], [data-phx-${$}]`, (e=>{
                this.maybeAddNewHook(e)
            }
            )),
            me.all(this.el, `[${this.binding(J)}]`, (e=>this.maybeMounted(e)))
        }
        applyJoinPatch(e, t, n) {
            this.attachTrueDocEl();
            let i = new je(this,this.el,this.id,t,null);
            if (i.markPrunableContentForRemoval(),
            this.performPatch(i, !1),
            this.joinNewChildren(),
            this.execNewMounted(),
            this.joinPending = !1,
            this.liveSocket.dispatchEvents(n),
            this.applyPendingUpdates(),
            e) {
                let {kind: t, to: n} = e;
                this.liveSocket.historyPatch(n, t)
            }
            this.hideLoader(),
            this.joinCount > 1 && this.triggerReconnected(),
            this.stopCallback()
        }
        triggerBeforeUpdateHook(e, t) {
            this.liveSocket.triggerDOM("onBeforeElUpdated", [e, t]);
            let n = this.getHook(e)
              , i = n && me.isIgnored(e, this.binding(U));
            if (n && !e.isEqualNode(t) && (!i || (r = e.dataset,
            o = t.dataset,
            JSON.stringify(r) !== JSON.stringify(o))))
                return n.__beforeUpdate(),
                n;
            var r, o
        }
        maybeMounted(e) {
            let t = e.getAttribute(this.binding(J))
              , n = t && me.private(e, "mounted");
            t && !n && (this.liveSocket.execJS(e, t),
            me.putPrivate(e, "mounted", !0))
        }
        maybeAddNewHook(e, t) {
            let n = this.addHook(e);
            n && n.__mounted()
        }
        performPatch(e, t) {
            let n = []
              , i = !1
              , r = new Set;
            return e.after("added", (e=>{
                this.liveSocket.triggerDOM("onNodeAdded", [e]),
                this.maybeAddNewHook(e),
                e.getAttribute && this.maybeMounted(e)
            }
            )),
            e.after("phxChildAdded", (e=>{
                me.isPhxSticky(e) ? this.liveSocket.joinRootViews() : i = !0
            }
            )),
            e.before("updated", ((e,t)=>{
                this.triggerBeforeUpdateHook(e, t) && r.add(e.id)
            }
            )),
            e.after("updated", (e=>{
                r.has(e.id) && this.getHook(e).__updated()
            }
            )),
            e.after("discarded", (e=>{
                e.nodeType === Node.ELEMENT_NODE && n.push(e)
            }
            )),
            e.after("transitionsDiscarded", (e=>this.afterElementsRemoved(e, t))),
            e.perform(),
            this.afterElementsRemoved(n, t),
            i
        }
        afterElementsRemoved(e, t) {
            let n = [];
            e.forEach((e=>{
                let t = me.all(e, `[${o}]`)
                  , i = me.all(e, `[${this.binding($)}]`);
                t.concat(e).forEach((e=>{
                    let t = this.componentID(e);
                    ie(t) && -1 === n.indexOf(t) && n.push(t)
                }
                )),
                i.concat(e).forEach((e=>{
                    let t = this.getHook(e);
                    t && this.destroyHook(t)
                }
                ))
            }
            )),
            t && this.maybePushComponentsDestroyed(n)
        }
        joinNewChildren() {
            me.findPhxChildren(this.el, this.id).forEach((e=>this.joinChild(e)))
        }
        getChildById(e) {
            return this.root.children[this.id][e]
        }
        getDescendentByEl(e) {
            return e.id === this.id ? this : this.children[e.getAttribute(E)][e.id]
        }
        destroyDescendent(e) {
            for (let t in this.root.children)
                for (let n in this.root.children[t])
                    if (n === e)
                        return this.root.children[t][n].destroy()
        }
        joinChild(e) {
            if (!this.getChildById(e.id)) {
                let t = new Ue(e,this.liveSocket,this);
                return this.root.children[this.id][t.id] = t,
                t.join(),
                this.childJoins++,
                !0
            }
        }
        isJoinPending() {
            return this.joinPending
        }
        ackJoin(e) {
            this.childJoins--,
            0 === this.childJoins && (this.parent ? this.parent.ackJoin(this) : this.onAllChildJoinsComplete())
        }
        onAllChildJoinsComplete() {
            this.joinCallback((()=>{
                this.pendingJoinOps.forEach((([e,t])=>{
                    e.isDestroyed() || t()
                }
                )),
                this.pendingJoinOps = []
            }
            ))
        }
        update(e, t) {
            if (this.isJoinPending() || this.liveSocket.hasPendingLink() && this.root.isMain())
                return this.pendingDiffs.push({
                    diff: e,
                    events: t
                });
            this.rendered.mergeDiff(e);
            let n = !1;
            this.rendered.isComponentOnlyDiff(e) ? this.liveSocket.time("component patch complete", (()=>{
                me.findParentCIDs(this.el, this.rendered.componentCIDs(e)).forEach((t=>{
                    this.componentPatch(this.rendered.getComponent(e, t), t) && (n = !0)
                }
                ))
            }
            )) : le(e) || this.liveSocket.time("full patch complete", (()=>{
                let t = this.renderContainer(e, "update")
                  , i = new je(this,this.el,this.id,t,null);
                n = this.performPatch(i, !0)
            }
            )),
            this.liveSocket.dispatchEvents(t),
            n && this.joinNewChildren()
        }
        renderContainer(e, t) {
            return this.liveSocket.time(`toString diff (${t})`, (()=>{
                let t = this.el.tagName
                  , n = e ? this.rendered.componentCIDs(e).concat(this.pruningCIDs) : null;
                return `<${t}>${this.rendered.toString(n)}</${t}>`
            }
            ))
        }
        componentPatch(e, t) {
            if (le(e))
                return !1;
            let n = this.rendered.componentToString(t)
              , i = new je(this,this.el,this.id,n,t);
            return this.performPatch(i, !0)
        }
        getHook(e) {
            return this.viewHooks[Ne.elementID(e)]
        }
        addHook(e) {
            if (Ne.elementID(e) || !e.getAttribute)
                return;
            let t = e.getAttribute(`data-phx-${$}`) || e.getAttribute(this.binding($));
            if (t && !this.ownsElement(e))
                return;
            let n = this.liveSocket.getHookCallbacks(t);
            if (n) {
                e.id || ne(`no DOM ID for hook "${t}". Hooks require a unique ID on each element.`, e);
                let i = new Ne(this,e,n);
                return this.viewHooks[Ne.elementID(i.el)] = i,
                i
            }
            null !== t && ne(`unknown hook found for "${t}"`, e)
        }
        destroyHook(e) {
            e.__destroyed(),
            e.__cleanup__(),
            delete this.viewHooks[Ne.elementID(e.el)]
        }
        applyPendingUpdates() {
            this.pendingDiffs.forEach((({diff: e, events: t})=>this.update(e, t))),
            this.pendingDiffs = [],
            this.eachChild((e=>e.applyPendingUpdates()))
        }
        eachChild(e) {
            let t = this.root.children[this.id] || {};
            for (let n in t)
                e(this.getChildById(n))
        }
        onChannel(e, t) {
            this.liveSocket.onChannel(this.channel, e, (e=>{
                this.isJoinPending() ? this.root.pendingJoinOps.push([this, ()=>t(e)]) : this.liveSocket.requestDOMUpdate((()=>t(e)))
            }
            ))
        }
        bindChannel() {
            this.liveSocket.onChannel(this.channel, "diff", (e=>{
                this.liveSocket.requestDOMUpdate((()=>{
                    this.applyDiff("update", e, (({diff: e, events: t})=>this.update(e, t)))
                }
                ))
            }
            )),
            this.onChannel("redirect", (({to: e, flash: t})=>this.onRedirect({
                to: e,
                flash: t
            }))),
            this.onChannel("live_patch", (e=>this.onLivePatch(e))),
            this.onChannel("live_redirect", (e=>this.onLiveRedirect(e))),
            this.channel.onError((e=>this.onError(e))),
            this.channel.onClose((e=>this.onClose(e)))
        }
        destroyAllChildren() {
            this.eachChild((e=>e.destroy()))
        }
        onLiveRedirect(e) {
            let {to: t, kind: n, flash: i} = e
              , r = this.expandURL(t);
            this.liveSocket.historyRedirect(r, n, i)
        }
        onLivePatch(e) {
            let {to: t, kind: n} = e;
            this.href = this.expandURL(t),
            this.liveSocket.historyPatch(t, n)
        }
        expandURL(e) {
            return e.startsWith("/") ? `${window.location.protocol}//${window.location.host}${e}` : e
        }
        onRedirect({to: e, flash: t}) {
            this.liveSocket.redirect(e, t)
        }
        isDestroyed() {
            return this.destroyed
        }
        joinDead() {
            this.isDead = !0
        }
        join(e) {
            this.showLoader(this.liveSocket.loaderTimeout),
            this.bindChannel(),
            this.isMain() && (this.stopCallback = this.liveSocket.withPageLoading({
                to: this.href,
                kind: "initial"
            })),
            this.joinCallback = t=>{
                t = t || function() {}
                ,
                e ? e(this.joinCount, t) : t()
            }
            ,
            this.liveSocket.wrapPush(this, {
                timeout: !1
            }, (()=>this.channel.join().receive("ok", (e=>{
                this.isDestroyed() || this.liveSocket.requestDOMUpdate((()=>this.onJoin(e)))
            }
            )).receive("error", (e=>!this.isDestroyed() && this.onJoinError(e))).receive("timeout", (()=>!this.isDestroyed() && this.onJoinError({
                reason: "timeout"
            })))))
        }
        onJoinError(e) {
            return "unauthorized" === e.reason || "stale" === e.reason ? (this.log("error", (()=>["unauthorized live_redirect. Falling back to page request", e])),
            this.onRedirect({
                to: this.href
            })) : ((e.redirect || e.live_redirect) && (this.joinPending = !1,
            this.channel.leave()),
            e.redirect ? this.onRedirect(e.redirect) : e.live_redirect ? this.onLiveRedirect(e.live_redirect) : (this.log("error", (()=>["unable to join", e])),
            void (this.liveSocket.isConnected() && this.liveSocket.reloadWithJitter(this))))
        }
        onClose(e) {
            if (!this.isDestroyed()) {
                if (this.liveSocket.hasPendingLink() && "leave" !== e)
                    return this.liveSocket.reloadWithJitter(this);
                this.destroyAllChildren(),
                this.liveSocket.dropActiveElement(this),
                document.activeElement && document.activeElement.blur(),
                this.liveSocket.isUnloaded() && this.showLoader(200)
            }
        }
        onError(e) {
            this.onClose(e),
            this.liveSocket.isConnected() && this.log("error", (()=>["view crashed", e])),
            this.liveSocket.isUnloaded() || this.displayError()
        }
        displayError() {
            this.isMain() && me.dispatchEvent(window, "phx:page-loading-start", {
                detail: {
                    to: this.href,
                    kind: "error"
                }
            }),
            this.showLoader(),
            this.setContainerClasses(y, w),
            this.execAll(this.binding("disconnected"))
        }
        pushWithReply(e, t, n, i=function() {}
        ) {
            if (!this.isConnected())
                return;
            let[r,[o],s] = e ? e() : [null, [], {}]
              , a = function() {};
            return (s.page_loading || o && null !== o.getAttribute(this.binding(v))) && (a = this.liveSocket.withPageLoading({
                kind: "element",
                target: o
            })),
            "number" != typeof n.cid && delete n.cid,
            this.liveSocket.wrapPush(this, {
                timeout: !0
            }, (()=>this.channel.push(t, n, 3e4).receive("ok", (e=>{
                let t = t=>{
                    e.redirect && this.onRedirect(e.redirect),
                    e.live_patch && this.onLivePatch(e.live_patch),
                    e.live_redirect && this.onLiveRedirect(e.live_redirect),
                    null !== r && this.undoRefs(r),
                    a(),
                    i(e, t)
                }
                ;
                e.diff ? this.liveSocket.requestDOMUpdate((()=>{
                    this.applyDiff("update", e.diff, (({diff: e, reply: n, events: i})=>{
                        this.update(e, i),
                        t(n)
                    }
                    ))
                }
                )) : t(null)
            }
            ))))
        }
        undoRefs(e) {
            this.isConnected() && me.all(document, `[${c}="${this.id}"][${a}="${e}"]`, (e=>{
                let t = e.getAttribute(N);
                e.removeAttribute(a),
                e.removeAttribute(c),
                null !== e.getAttribute(D) && (e.readOnly = !1,
                e.removeAttribute(D)),
                null !== t && (e.disabled = "true" === t,
                e.removeAttribute(N)),
                r.forEach((t=>me.removeClass(e, t)));
                let n = e.getAttribute(M);
                null !== n && (e.innerText = n,
                e.removeAttribute(M));
                let i = me.private(e, a);
                if (i) {
                    let t = this.triggerBeforeUpdateHook(e, i);
                    je.patchEl(e, i, this.liveSocket.getActiveElement()),
                    t && t.__updated(),
                    me.deletePrivate(e, a)
                }
            }
            ))
        }
        putRef(e, t, n={}) {
            let i = this.ref++
              , r = this.binding(I);
            return n.loading && (e = e.concat(me.all(document, n.loading))),
            e.forEach((e=>{
                e.classList.add(`phx-${t}-loading`),
                e.setAttribute(a, i),
                e.setAttribute(c, this.el.id);
                let n = e.getAttribute(r);
                null !== n && (e.getAttribute(M) || e.setAttribute(M, e.innerText),
                "" !== n && (e.innerText = n),
                e.setAttribute("disabled", ""))
            }
            )),
            [i, e, n]
        }
        componentID(e) {
            let t = e.getAttribute && e.getAttribute(o);
            return t ? parseInt(t) : null
        }
        targetComponentID(e, t, n={}) {
            if (ie(t))
                return t;
            let i = e.getAttribute(this.binding("target"));
            return ie(i) ? parseInt(i) : t && (null !== i || n.target) ? this.closestComponentID(t) : null
        }
        closestComponentID(e) {
            return ie(e) ? e : e ? ue(e.closest(`[${o}]`), (e=>this.ownsElement(e) && this.componentID(e))) : null
        }
        pushHookEvent(e, t, n, i) {
            if (!this.isConnected())
                return this.log("hook", (()=>["unable to push hook event. LiveView not connected", t, n])),
                !1;
            let[r,o,s] = this.putRef([], "hook");
            return this.pushWithReply((()=>[r, o, s]), "event", {
                type: "hook",
                event: t,
                value: n,
                cid: this.closestComponentID(e)
            }, ((e,t)=>i(t, r))),
            r
        }
        extractMeta(e, t, n) {
            let i = this.binding("value-");
            for (let n = 0; n < e.attributes.length; n++) {
                t || (t = {});
                let r = e.attributes[n].name;
                r.startsWith(i) && (t[r.replace(i, "")] = e.getAttribute(r))
            }
            if (void 0 !== e.value && (t || (t = {}),
            t.value = e.value,
            "INPUT" === e.tagName && T.indexOf(e.type) >= 0 && !e.checked && delete t.value),
            n) {
                t || (t = {});
                for (let e in n)
                    t[e] = n[e]
            }
            return t
        }
        pushEvent(e, t, n, i, r, o={}) {
            this.pushWithReply((()=>this.putRef([t], e, o)), "event", {
                type: e,
                event: i,
                value: this.extractMeta(t, r, o.value),
                cid: this.targetComponentID(t, n, o)
            })
        }
        pushFileProgress(e, t, n, i=function() {}
        ) {
            this.liveSocket.withinOwners(e.form, ((r,o)=>{
                r.pushWithReply(null, "progress", {
                    event: e.getAttribute(r.binding("progress")),
                    ref: e.getAttribute(u),
                    entry_ref: t,
                    progress: n,
                    cid: r.targetComponentID(e.form, o)
                }, i)
            }
            ))
        }
        pushInput(e, t, n, i, r, o) {
            let s, a, c = ie(n) ? n : this.targetComponentID(e.form, t), l = ()=>this.putRef([e, e.form], "change", r);
            a = e.getAttribute(this.binding("change")) ? $e(e.form, {
                _target: r._target
            }, [e.name]) : $e(e.form, {
                _target: r._target
            }),
            me.isUploadInput(e) && e.files && e.files.length > 0 && be.trackFiles(e, Array.from(e.files)),
            s = be.serializeUploads(e);
            let u = {
                type: "form",
                event: i,
                value: a,
                uploads: s,
                cid: c
            };
            this.pushWithReply(l, "event", u, (n=>{
                if (me.showError(e, this.liveSocket.binding(S)),
                me.isUploadInput(e) && null !== e.getAttribute("data-phx-auto-upload")) {
                    if (be.filesAwaitingPreflight(e).length > 0) {
                        let[i,r] = l();
                        this.uploadFiles(e.form, t, i, c, (t=>{
                            o && o(n),
                            this.triggerAwaitingSubmit(e.form)
                        }
                        ))
                    }
                } else
                    o && o(n)
            }
            ))
        }
        triggerAwaitingSubmit(e) {
            let t = this.getScheduledSubmit(e);
            if (t) {
                let[n,i,r,o] = t;
                this.cancelSubmit(e),
                o()
            }
        }
        getScheduledSubmit(e) {
            return this.formSubmits.find((([t,n,i,r])=>t.isSameNode(e)))
        }
        scheduleSubmit(e, t, n, i) {
            if (this.getScheduledSubmit(e))
                return !0;
            this.formSubmits.push([e, t, n, i])
        }
        cancelSubmit(e) {
            this.formSubmits = this.formSubmits.filter((([t,n,i])=>!t.isSameNode(e) || (this.undoRefs(n),
            !1)))
        }
        disableForm(e, t={}) {
            let n = e=>!(ae(e, `${this.binding(U)}=ignore`, e.form) || ae(e, "data-phx-update=ignore", e.form))
              , i = Array.from(e.elements)
              , r = i.filter((e=>e.hasAttribute(this.binding(I))))
              , o = i.filter((e=>"BUTTON" == e.tagName)).filter(n)
              , s = i.filter((e=>["INPUT", "TEXTAREA", "SELECT"].includes(e.tagName))).filter(n);
            return o.forEach((e=>{
                e.setAttribute(N, e.disabled),
                e.disabled = !0
            }
            )),
            s.forEach((e=>{
                e.setAttribute(D, e.readOnly),
                e.readOnly = !0,
                e.files && (e.setAttribute(N, e.disabled),
                e.disabled = !0)
            }
            )),
            e.setAttribute(this.binding(v), ""),
            this.putRef([e].concat(r).concat(o).concat(s), "submit", t)
        }
        pushFormSubmit(e, t, n, i, r) {
            let o = ()=>this.disableForm(e, i)
              , s = this.targetComponentID(e, t);
            if (be.hasUploadsInProgress(e)) {
                let[s,a] = o()
                  , c = ()=>this.pushFormSubmit(e, t, n, i, r);
                return this.scheduleSubmit(e, s, i, c)
            }
            if (be.inputsAwaitingPreflight(e).length > 0) {
                let[a,c] = o()
                  , l = ()=>[a, c, i];
                this.uploadFiles(e, t, a, s, (t=>{
                    let i = $e(e, {});
                    this.pushWithReply(l, "event", {
                        type: "form",
                        event: n,
                        value: i,
                        cid: s
                    }, r)
                }
                ))
            } else {
                let t = $e(e, {});
                this.pushWithReply(o, "event", {
                    type: "form",
                    event: n,
                    value: t,
                    cid: s
                }, r)
            }
        }
        uploadFiles(e, t, n, i, r) {
            let o = this.joinCount
              , s = be.activeFileInputs(e)
              , a = s.length;
            s.forEach((e=>{
                let i = new be(e,this,(()=>{
                    a--,
                    0 === a && r()
                }
                ));
                this.uploaders[e] = i;
                let s = i.entries().map((e=>e.toPreflightPayload()))
                  , c = {
                    ref: e.getAttribute(u),
                    entries: s,
                    cid: this.targetComponentID(e.form, t)
                };
                this.log("upload", (()=>["sending preflight request", c])),
                this.pushWithReply(null, "allow_upload", c, (e=>{
                    if (this.log("upload", (()=>["got preflight response", e])),
                    e.error) {
                        this.undoRefs(n);
                        let[t,i] = e.error;
                        this.log("upload", (()=>[`error for entry ${t}`, i]))
                    } else {
                        let t = e=>{
                            this.channel.onError((()=>{
                                this.joinCount === o && e()
                            }
                            ))
                        }
                        ;
                        i.initAdapterUpload(e, t, this.liveSocket)
                    }
                }
                ))
            }
            ))
        }
        dispatchUploads(e, t) {
            let n = me.findUploadInputs(this.el).filter((t=>t.name === e));
            0 === n.length ? ne(`no live file inputs found matching the name "${e}"`) : n.length > 1 ? ne(`duplicate live file inputs found matching the name "${e}"`) : me.dispatchEvent(n[0], l, {
                detail: {
                    files: t
                }
            })
        }
        pushFormRecovery(e, t, n) {
            this.liveSocket.withinOwners(e, ((i,r)=>{
                let o = e.elements[0]
                  , s = e.getAttribute(this.binding(B)) || e.getAttribute(this.binding("change"));
                Me.exec("change", s, i, o, ["push", {
                    _target: o.name,
                    newCid: t,
                    callback: n
                }])
            }
            ))
        }
        pushLinkPatch(e, t, n) {
            let i = this.liveSocket.setPendingLink(e)
              , r = t ? ()=>this.putRef([t], "click") : null
              , o = ()=>this.liveSocket.redirect(window.location.href)
              , s = this.pushWithReply(r, "live_patch", {
                url: e
            }, (t=>{
                this.liveSocket.requestDOMUpdate((()=>{
                    t.link_redirect ? this.liveSocket.replaceMain(e, null, n, i) : (this.liveSocket.commitPendingLink(i) && (this.href = e),
                    this.applyPendingUpdates(),
                    n && n(i))
                }
                ))
            }
            ));
            s ? s.receive("timeout", o) : o()
        }
        formsForRecovery(e) {
            if (0 === this.joinCount)
                return [];
            let t = this.binding("change")
              , n = document.createElement("template");
            return n.innerHTML = e,
            me.all(this.el, `form[${t}]`).filter((e=>e.id && this.ownsElement(e))).filter((e=>e.elements.length > 0)).filter((e=>"ignore" !== e.getAttribute(this.binding(B)))).map((e=>{
                let i = n.content.querySelector(`form[id="${e.id}"][${t}="${e.getAttribute(t)}"]`);
                return i ? [e, i, this.targetComponentID(i)] : [e, null, null]
            }
            )).filter((([e,t,n])=>t))
        }
        maybePushComponentsDestroyed(e) {
            let t = e.filter((e=>0 === me.findComponentNodeList(this.el, e).length));
            t.length > 0 && (this.pruningCIDs.push(...t),
            this.pushWithReply(null, "cids_will_destroy", {
                cids: t
            }, (()=>{
                this.pruningCIDs = this.pruningCIDs.filter((e=>-1 !== t.indexOf(e)));
                let e = t.filter((e=>0 === me.findComponentNodeList(this.el, e).length));
                e.length > 0 && this.pushWithReply(null, "cids_destroyed", {
                    cids: e
                }, (e=>{
                    this.rendered.pruneCIDs(e.cids)
                }
                ))
            }
            )))
        }
        ownsElement(e) {
            let t = e.closest(P);
            return e.getAttribute(E) === this.id || t && t.id === this.id || !t && this.isDead
        }
        submitForm(e, t, n, i={}) {
            me.putPrivate(e, L, !0);
            let r = this.liveSocket.binding(S)
              , o = Array.from(e.elements);
            o.forEach((e=>me.putPrivate(e, L, !0))),
            this.liveSocket.blurActiveElement(this),
            this.pushFormSubmit(e, t, n, i, (()=>{
                o.forEach((e=>me.showError(e, r))),
                this.liveSocket.restorePreviouslyActiveFocus()
            }
            ))
        }
        binding(e) {
            return this.liveSocket.binding(e)
        }
    }
    , Fe = class {
        constructor(e, t, n={}) {
            if (this.unloaded = !1,
            !t || "Object" === t.constructor.name)
                throw new Error('\n      a phoenix Socket must be provided as the second argument to the LiveSocket constructor. For example:\n\n          import {Socket} from "phoenix"\n          import {LiveSocket} from "phoenix_live_view"\n          let liveSocket = new LiveSocket("/live", Socket, {...})\n      ');
            this.socket = new t(e,n),
            this.bindingPrefix = n.bindingPrefix || "phx-",
            this.opts = n,
            this.params = oe(n.params || {}),
            this.viewLogger = n.viewLogger,
            this.metadataCallbacks = n.metadata || {},
            this.defaults = Object.assign(se(Y), n.defaults || {}),
            this.activeElement = null,
            this.prevActive = null,
            this.silenced = !1,
            this.main = null,
            this.outgoingMainEl = null,
            this.clickStartedAtTarget = null,
            this.linkRef = 1,
            this.roots = {},
            this.href = window.location.href,
            this.pendingLink = null,
            this.currentLocation = se(window.location),
            this.hooks = n.hooks || {},
            this.uploaders = n.uploaders || {},
            this.loaderTimeout = n.loaderTimeout || 1,
            this.reloadWithJitterTimer = null,
            this.maxReloads = n.maxReloads || 10,
            this.reloadJitterMin = n.reloadJitterMin || 5e3,
            this.reloadJitterMax = n.reloadJitterMax || 1e4,
            this.failsafeJitter = n.failsafeJitter || 3e4,
            this.localStorage = n.localStorage || window.localStorage,
            this.sessionStorage = n.sessionStorage || window.sessionStorage,
            this.boundTopLevelEvents = !1,
            this.domCallbacks = Object.assign({
                onNodeAdded: oe(),
                onBeforeElUpdated: oe()
            }, n.dom || {}),
            this.transitions = new Be,
            window.addEventListener("pagehide", (e=>{
                this.unloaded = !0
            }
            )),
            this.socket.onOpen((()=>{
                this.isUnloaded() && window.location.reload()
            }
            ))
        }
        isProfileEnabled() {
            return "true" === this.sessionStorage.getItem(q)
        }
        isDebugEnabled() {
            return "true" === this.sessionStorage.getItem(H)
        }
        isDebugDisabled() {
            return "false" === this.sessionStorage.getItem(H)
        }
        enableDebug() {
            this.sessionStorage.setItem(H, "true")
        }
        enableProfiling() {
            this.sessionStorage.setItem(q, "true")
        }
        disableDebug() {
            this.sessionStorage.setItem(H, "false")
        }
        disableProfiling() {
            this.sessionStorage.removeItem(q)
        }
        enableLatencySim(e) {
            this.enableDebug(),
            console.log("latency simulator enabled for the duration of this browser session. Call disableLatencySim() to disable"),
            this.sessionStorage.setItem(V, e)
        }
        disableLatencySim() {
            this.sessionStorage.removeItem(V)
        }
        getLatencySim() {
            let e = this.sessionStorage.getItem(V);
            return e ? parseInt(e) : null
        }
        getSocket() {
            return this.socket
        }
        connect() {
            "localhost" !== window.location.hostname || this.isDebugDisabled() || this.enableDebug();
            let e = ()=>{
                this.joinRootViews() ? (this.bindTopLevelEvents(),
                this.socket.connect()) : this.main ? this.socket.connect() : this.bindTopLevelEvents({
                    dead: !0
                }),
                this.joinDeadView()
            }
            ;
            ["complete", "loaded", "interactive"].indexOf(document.readyState) >= 0 ? e() : document.addEventListener("DOMContentLoaded", (()=>e()))
        }
        disconnect(e) {
            clearTimeout(this.reloadWithJitterTimer),
            this.socket.disconnect(e)
        }
        replaceTransport(e) {
            clearTimeout(this.reloadWithJitterTimer),
            this.socket.replaceTransport(e),
            this.connect()
        }
        execJS(e, t, n=null) {
            this.owner(e, (i=>Me.exec(n, t, i, e)))
        }
        unload() {
            this.unloaded || (this.main && this.isConnected() && this.log(this.main, "socket", (()=>["disconnect for page nav"])),
            this.unloaded = !0,
            this.destroyAllViews(),
            this.disconnect())
        }
        triggerDOM(e, t) {
            this.domCallbacks[e](...t)
        }
        time(e, t) {
            if (!this.isProfileEnabled() || !console.time)
                return t();
            console.time(e);
            let n = t();
            return console.timeEnd(e),
            n
        }
        log(e, t, n) {
            if (this.viewLogger) {
                let[i,r] = n();
                this.viewLogger(e, t, i, r)
            } else if (this.isDebugEnabled()) {
                let[i,r] = n();
                ((e,t,n,i)=>{
                    e.liveSocket.isDebugEnabled() && console.log(`${e.id} ${t}: ${n} - `, i)
                }
                )(e, t, i, r)
            }
        }
        requestDOMUpdate(e) {
            this.transitions.after(e)
        }
        transition(e, t, n=function() {}
        ) {
            this.transitions.addTransition(e, t, n)
        }
        onChannel(e, t, n) {
            e.on(t, (e=>{
                let t = this.getLatencySim();
                t ? setTimeout((()=>n(e)), t) : n(e)
            }
            ))
        }
        wrapPush(e, t, n) {
            let i = this.getLatencySim()
              , r = e.joinCount;
            if (!i)
                return this.isConnected() && t.timeout ? n().receive("timeout", (()=>{
                    e.joinCount !== r || e.isDestroyed() || this.reloadWithJitter(e, (()=>{
                        this.log(e, "timeout", (()=>["received timeout while communicating with server. Falling back to hard refresh for recovery"]))
                    }
                    ))
                }
                )) : n();
            let o = {
                receives: [],
                receive(e, t) {
                    this.receives.push([e, t])
                }
            };
            return setTimeout((()=>{
                e.isDestroyed() || o.receives.reduce(((e,[t,n])=>e.receive(t, n)), n())
            }
            ), i),
            o
        }
        reloadWithJitter(e, t) {
            clearTimeout(this.reloadWithJitterTimer),
            this.disconnect();
            let n = this.reloadJitterMin
              , r = this.reloadJitterMax
              , o = Math.floor(Math.random() * (r - n + 1)) + n
              , s = fe.updateLocal(this.localStorage, window.location.pathname, i, 0, (e=>e + 1));
            s > this.maxReloads && (o = this.failsafeJitter),
            this.reloadWithJitterTimer = setTimeout((()=>{
                e.isDestroyed() || e.isConnected() || (e.destroy(),
                t ? t() : this.log(e, "join", (()=>[`encountered ${s} consecutive reloads`])),
                s > this.maxReloads && this.log(e, "join", (()=>[`exceeded ${this.maxReloads} consecutive reloads. Entering failsafe mode`])),
                this.hasPendingLink() ? window.location = this.pendingLink : window.location.reload())
            }
            ), o)
        }
        getHookCallbacks(e) {
            return e && e.startsWith("Phoenix.") ? _e[e.split(".")[1]] : this.hooks[e]
        }
        isUnloaded() {
            return this.unloaded
        }
        isConnected() {
            return this.socket.isConnected()
        }
        getBindingPrefix() {
            return this.bindingPrefix
        }
        binding(e) {
            return `${this.getBindingPrefix()}${e}`
        }
        channel(e, t) {
            return this.socket.channel(e, t)
        }
        joinDeadView() {
            let e = document.body;
            if (e && !this.isPhxView(e) && !this.isPhxView(document.firstElementChild)) {
                let t = this.newRootView(e);
                t.setHref(this.getHref()),
                t.joinDead(),
                this.main || (this.main = t),
                window.requestAnimationFrame((()=>t.execNewMounted()))
            }
        }
        joinRootViews() {
            let e = !1;
            return me.all(document, `${P}:not([${E}])`, (t=>{
                if (!this.getRootById(t.id)) {
                    let e = this.newRootView(t);
                    e.setHref(this.getHref()),
                    e.join(),
                    t.hasAttribute(k) && (this.main = e)
                }
                e = !0
            }
            )),
            e
        }
        redirect(e, t) {
            this.disconnect(),
            fe.redirect(e, t)
        }
        replaceMain(e, t, n=null, i=this.setPendingLink(e)) {
            let r = this.currentLocation.href;
            this.outgoingMainEl = this.outgoingMainEl || this.main.el;
            let o = me.cloneNode(this.outgoingMainEl, "");
            this.main.showLoader(this.loaderTimeout),
            this.main.destroy(),
            this.main = this.newRootView(o, t, r),
            this.main.setRedirect(e),
            this.transitionRemoves(),
            this.main.join(((e,t)=>{
                1 === e && this.commitPendingLink(i) && this.requestDOMUpdate((()=>{
                    me.findPhxSticky(document).forEach((e=>o.appendChild(e))),
                    this.outgoingMainEl.replaceWith(o),
                    this.outgoingMainEl = null,
                    n && requestAnimationFrame(n),
                    t()
                }
                ))
            }
            ))
        }
        transitionRemoves(e) {
            let t = this.binding("remove");
            (e = e || me.all(document, `[${t}]`)).forEach((e=>{
                document.body.contains(e) && this.execJS(e, e.getAttribute(t), "remove")
            }
            ))
        }
        isPhxView(e) {
            return e.getAttribute && null !== e.getAttribute(O)
        }
        newRootView(e, t, n) {
            let i = new Ue(e,this,null,t,n);
            return this.roots[i.id] = i,
            i
        }
        owner(e, t) {
            let n = ue(e.closest(P), (e=>this.getViewByEl(e))) || this.main;
            n && t(n)
        }
        withinOwners(e, t) {
            this.owner(e, (n=>t(n, e)))
        }
        getViewByEl(e) {
            let t = e.getAttribute(x);
            return ue(this.getRootById(t), (t=>t.getDescendentByEl(e)))
        }
        getRootById(e) {
            return this.roots[e]
        }
        destroyAllViews() {
            for (let e in this.roots)
                this.roots[e].destroy(),
                delete this.roots[e];
            this.main = null
        }
        destroyViewByEl(e) {
            let t = this.getRootById(e.getAttribute(x));
            t && t.id === e.id ? (t.destroy(),
            delete this.roots[t.id]) : t && t.destroyDescendent(e.id)
        }
        setActiveElement(e) {
            if (this.activeElement === e)
                return;
            this.activeElement = e;
            let t = ()=>{
                e === this.activeElement && (this.activeElement = null),
                e.removeEventListener("mouseup", this),
                e.removeEventListener("touchend", this)
            }
            ;
            e.addEventListener("mouseup", t),
            e.addEventListener("touchend", t)
        }
        getActiveElement() {
            return document.activeElement === document.body ? this.activeElement || document.activeElement : document.activeElement || document.body
        }
        dropActiveElement(e) {
            this.prevActive && e.ownsElement(this.prevActive) && (this.prevActive = null)
        }
        restorePreviouslyActiveFocus() {
            this.prevActive && this.prevActive !== document.body && this.prevActive.focus()
        }
        blurActiveElement() {
            this.prevActive = this.getActiveElement(),
            this.prevActive !== document.body && this.prevActive.blur()
        }
        bindTopLevelEvents({dead: e}={}) {
            this.boundTopLevelEvents || (this.boundTopLevelEvents = !0,
            this.socket.onClose((e=>e && 1001 === e.code ? this.unload() : e && 1e3 === e.code && this.main ? this.reloadWithJitter(this.main) : void 0)),
            document.body.addEventListener("click", (function() {}
            )),
            window.addEventListener("pageshow", (e=>{
                e.persisted && (this.getSocket().disconnect(),
                this.withPageLoading({
                    to: window.location.href,
                    kind: "redirect"
                }),
                window.location.reload())
            }
            ), !0),
            e || this.bindNav(),
            this.bindClicks(),
            e || this.bindForms(),
            this.bind({
                keyup: "keyup",
                keydown: "keydown"
            }, ((e,t,n,i,r,o)=>{
                let s = i.getAttribute(this.binding("key"))
                  , a = e.key && e.key.toLowerCase();
                if (s && s.toLowerCase() !== a)
                    return;
                let c = {
                    key: e.key,
                    ...this.eventMeta(t, e, i)
                };
                Me.exec(t, r, n, i, ["push", {
                    data: c
                }])
            }
            )),
            this.bind({
                blur: "focusout",
                focus: "focusin"
            }, ((e,t,n,i,r,o)=>{
                if (!o) {
                    let o = {
                        key: e.key,
                        ...this.eventMeta(t, e, i)
                    };
                    Me.exec(t, r, n, i, ["push", {
                        data: o
                    }])
                }
            }
            )),
            this.bind({
                blur: "blur",
                focus: "focus"
            }, ((e,t,n,i,r,o,s)=>{
                if ("window" === s) {
                    let r = this.eventMeta(t, e, i);
                    Me.exec(t, o, n, i, ["push", {
                        data: r
                    }])
                }
            }
            )),
            window.addEventListener("dragover", (e=>e.preventDefault())),
            window.addEventListener("drop", (e=>{
                e.preventDefault();
                let t = ue(ae(e.target, this.binding(d)), (e=>e.getAttribute(this.binding(d))))
                  , n = t && document.getElementById(t)
                  , i = Array.from(e.dataTransfer.files || []);
                n && !n.disabled && 0 !== i.length && n.files instanceof FileList && (be.trackFiles(n, i),
                n.dispatchEvent(new Event("input",{
                    bubbles: !0
                })))
            }
            )),
            this.on(l, (e=>{
                let t = e.target;
                if (!me.isUploadInput(t))
                    return;
                let n = Array.from(e.detail.files || []).filter((e=>e instanceof File || e instanceof Blob));
                be.trackFiles(t, n),
                t.dispatchEvent(new Event("input",{
                    bubbles: !0
                }))
            }
            )))
        }
        eventMeta(e, t, n) {
            let i = this.metadataCallbacks[e];
            return i ? i(t, n) : {}
        }
        setPendingLink(e) {
            return this.linkRef++,
            this.pendingLink = e,
            this.linkRef
        }
        commitPendingLink(e) {
            return this.linkRef === e && (this.href = this.pendingLink,
            this.pendingLink = null,
            !0)
        }
        getHref() {
            return this.href
        }
        hasPendingLink() {
            return !!this.pendingLink
        }
        bind(e, t) {
            for (let n in e) {
                let i = e[n];
                this.on(i, (e=>{
                    let r = this.binding(n)
                      , o = this.binding(`window-${n}`)
                      , s = e.target.getAttribute && e.target.getAttribute(r);
                    s ? this.debounce(e.target, e, i, (()=>{
                        this.withinOwners(e.target, (i=>{
                            t(e, n, i, e.target, s, null)
                        }
                        ))
                    }
                    )) : me.all(document, `[${o}]`, (r=>{
                        let s = r.getAttribute(o);
                        this.debounce(r, e, i, (()=>{
                            this.withinOwners(r, (i=>{
                                t(e, n, i, r, s, "window")
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
                ))
            }
        }
        bindClicks() {
            window.addEventListener("click", (e=>this.clickStartedAtTarget = e.target)),
            this.bindClick("click", "click", !1),
            this.bindClick("mousedown", "capture-click", !0)
        }
        bindClick(e, t, n) {
            let i = this.binding(t);
            window.addEventListener(e, (e=>{
                let t = null;
                if (n)
                    t = e.target.matches(`[${i}]`) ? e.target : e.target.querySelector(`[${i}]`);
                else {
                    let n = this.clickStartedAtTarget || e.target;
                    t = ae(n, i),
                    this.dispatchClickAway(e, n),
                    this.clickStartedAtTarget = null
                }
                let r = t && t.getAttribute(i);
                r ? ("#" === t.getAttribute("href") && e.preventDefault(),
                this.debounce(t, e, "click", (()=>{
                    this.withinOwners(t, (n=>{
                        Me.exec("click", r, n, t, ["push", {
                            data: this.eventMeta("click", e, t)
                        }])
                    }
                    ))
                }
                ))) : n || void 0 === e.target.href || me.isExternalClick(e) || this.unload()
            }
            ), n)
        }
        dispatchClickAway(e, t) {
            let n = this.binding("click-away");
            me.all(document, `[${n}]`, (i=>{
                i.isSameNode(t) || i.contains(t) || this.withinOwners(e.target, (t=>{
                    let r = i.getAttribute(n);
                    Me.isVisible(i) && Me.exec("click", r, t, i, ["push", {
                        data: this.eventMeta("click", e, e.target)
                    }])
                }
                ))
            }
            ))
        }
        bindNav() {
            if (!fe.canPushState())
                return;
            history.scrollRestoration && (history.scrollRestoration = "manual");
            let e = null;
            window.addEventListener("scroll", (t=>{
                clearTimeout(e),
                e = setTimeout((()=>{
                    fe.updateCurrentState((e=>Object.assign(e, {
                        scroll: window.scrollY
                    })))
                }
                ), 100)
            }
            )),
            window.addEventListener("popstate", (e=>{
                if (!this.registerNewLocation(window.location))
                    return;
                let {type: t, id: n, root: i, scroll: r} = e.state || {}
                  , o = window.location.href;
                this.requestDOMUpdate((()=>{
                    this.main.isConnected() && "patch" === t && n === this.main.id ? this.main.pushLinkPatch(o, null) : this.replaceMain(o, null, (()=>{
                        i && this.replaceRootHistory(),
                        "number" == typeof r && setTimeout((()=>{
                            window.scrollTo(0, r)
                        }
                        ), 0)
                    }
                    ))
                }
                ))
            }
            ), !1),
            window.addEventListener("click", (e=>{
                let t = ae(e.target, s)
                  , n = t && t.getAttribute(s)
                  , i = e.metaKey || e.ctrlKey || 1 === e.button;
                if (!n || !this.isConnected() || !this.main || i)
                    return;
                let r = t.href
                  , o = t.getAttribute("data-phx-link-state");
                e.preventDefault(),
                e.stopImmediatePropagation(),
                this.pendingLink !== r && this.requestDOMUpdate((()=>{
                    if ("patch" === n)
                        this.pushHistoryPatch(r, o, t);
                    else {
                        if ("redirect" !== n)
                            throw new Error(`expected ${s} to be "patch" or "redirect", got: ${n}`);
                        this.historyRedirect(r, o)
                    }
                    let e = t.getAttribute(this.binding("click"));
                    e && this.requestDOMUpdate((()=>this.execJS(t, e, "click")))
                }
                ))
            }
            ), !1)
        }
        dispatchEvent(e, t={}) {
            me.dispatchEvent(window, `phx:${e}`, {
                detail: t
            })
        }
        dispatchEvents(e) {
            e.forEach((([e,t])=>this.dispatchEvent(e, t)))
        }
        withPageLoading(e, t) {
            me.dispatchEvent(window, "phx:page-loading-start", {
                detail: e
            });
            let n = ()=>me.dispatchEvent(window, "phx:page-loading-stop", {
                detail: e
            });
            return t ? t(n) : n
        }
        pushHistoryPatch(e, t, n) {
            if (!this.isConnected())
                return fe.redirect(e);
            this.withPageLoading({
                to: e,
                kind: "patch"
            }, (i=>{
                this.main.pushLinkPatch(e, n, (n=>{
                    this.historyPatch(e, t, n),
                    i()
                }
                ))
            }
            ))
        }
        historyPatch(e, t, n=this.setPendingLink(e)) {
            this.commitPendingLink(n) && (fe.pushState(t, {
                type: "patch",
                id: this.main.id
            }, e),
            this.registerNewLocation(window.location))
        }
        historyRedirect(e, t, n) {
            if (!this.isConnected())
                return fe.redirect(e, n);
            if (/^\/$|^\/[^\/]+.*$/.test(e)) {
                let {protocol: t, host: n} = window.location;
                e = `${t}//${n}${e}`
            }
            let i = window.scrollY;
            this.withPageLoading({
                to: e,
                kind: "redirect"
            }, (r=>{
                this.replaceMain(e, n, (()=>{
                    fe.pushState(t, {
                        type: "redirect",
                        id: this.main.id,
                        scroll: i
                    }, e),
                    this.registerNewLocation(window.location),
                    r()
                }
                ))
            }
            ))
        }
        replaceRootHistory() {
            fe.pushState("replace", {
                root: !0,
                type: "patch",
                id: this.main.id
            })
        }
        registerNewLocation(e) {
            let {pathname: t, search: n} = this.currentLocation;
            return t + n !== e.pathname + e.search && (this.currentLocation = se(e),
            !0)
        }
        bindForms() {
            let e = 0
              , t = !1;
            this.on("submit", (e=>{
                let n = e.target.getAttribute(this.binding("submit"))
                  , i = e.target.getAttribute(this.binding("change"));
                t || !i || n || (t = !0,
                e.preventDefault(),
                this.unload(),
                this.withinOwners(e.target, (t=>{
                    t.disableForm(e.target),
                    window.requestAnimationFrame((()=>e.target.submit()))
                }
                )))
            }
            ), !0),
            this.on("submit", (e=>{
                let t = e.target.getAttribute(this.binding("submit"));
                if (!t)
                    return this.unload();
                e.preventDefault(),
                e.target.disabled = !0,
                this.withinOwners(e.target, (n=>{
                    Me.exec("submit", t, n, e.target, ["push", {}])
                }
                ))
            }
            ), !1);
            for (let t of ["change", "input"])
                this.on(t, (n=>{
                    let i = this.binding("change")
                      , r = n.target
                      , o = r.getAttribute(i)
                      , s = r.form && r.form.getAttribute(i)
                      , a = o || s;
                    if (!a)
                        return;
                    if ("number" === r.type && r.validity && r.validity.badInput)
                        return;
                    let c = o ? r : r.form
                      , l = e;
                    e++;
                    let {at: u, type: h} = me.private(r, "prev-iteration") || {};
                    u === l - 1 && t !== h || (me.putPrivate(r, "prev-iteration", {
                        at: l,
                        type: t
                    }),
                    this.debounce(r, n, t, (()=>{
                        this.withinOwners(c, (e=>{
                            me.putPrivate(r, A, !0),
                            me.isTextualInput(r) || this.setActiveElement(r),
                            Me.exec("change", a, e, r, ["push", {
                                _target: n.target.name,
                                dispatcher: c
                            }])
                        }
                        ))
                    }
                    )))
                }
                ), !1)
        }
        debounce(e, t, n, i) {
            if ("blur" === n || "focusout" === n)
                return i();
            let r = this.binding("debounce")
              , o = this.binding("throttle")
              , s = this.defaults.debounce.toString()
              , a = this.defaults.throttle.toString();
            this.withinOwners(e, (n=>{
                me.debounce(e, t, r, s, o, a, (()=>!n.isDestroyed() && document.body.contains(e)), (()=>{
                    i()
                }
                ))
            }
            ))
        }
        silenceEvents(e) {
            this.silenced = !0,
            e(),
            this.silenced = !1
        }
        on(e, t) {
            window.addEventListener(e, (e=>{
                this.silenced || t(e)
            }
            ))
        }
    }
    , Be = class {
        constructor() {
            this.transitions = new Set,
            this.pendingOps = [],
            this.reset()
        }
        reset() {
            this.transitions.forEach((e=>{
                clearTimeout(e),
                this.transitions.delete(e)
            }
            )),
            this.flushPendingOps()
        }
        after(e) {
            0 === this.size() ? e() : this.pushPendingOp(e)
        }
        addTransition(e, t, n) {
            t();
            let i = setTimeout((()=>{
                this.transitions.delete(i),
                n(),
                0 === this.size() && this.flushPendingOps()
            }
            ), e);
            this.transitions.add(i)
        }
        pushPendingOp(e) {
            this.pendingOps.push(e)
        }
        size() {
            return this.transitions.size
        }
        flushPendingOps() {
            this.pendingOps.forEach((e=>e())),
            this.pendingOps = []
        }
    }
    , He = n(16), qe = n(27), Ve = n.n(qe), Je = n(17), We = n(8);
    let ze;
    var Ge = {
        hook: {
            mounted() {
                Ke.call(this),
                Xe(this.el)
            },
            updated() {
                Xe(this.el)
            }
        }
    };
    function Ye(e) {
        e.preventDefault(),
        e.stopPropagation(),
        this.el.disabled = !0;
        const t = this.el.dataset
          , {clickDisableText: n, phxClick: i} = t;
        null !== n && (this.el.innerText = n);
        const r = {};
        for (const e in t) {
            const n = e.split("phxValue");
            if ("" == n[0] && 2 == n.length) {
                r[n[1].charAt(0).toLowerCase() + n[1].slice(1)] = t[e]
            }
        }
        this.pushEvent(i, r)
    }
    function Ke() {
        this.el.addEventListener("click", Ye.bind(this))
    }
    const Xe = e=>{
        const {disableAtText: t, disableAt: n} = e.dataset;
        if (null !== t && null !== n && null !== ze) {
            clearTimeout(ze);
            const i = Math.max(0, n - Date.now());
            i > 0 && (ze = setTimeout((()=>{
                e.disabled = !0,
                e.innerText = t
            }
            ), i))
        }
    }
      , Ze = e=>{
        e.setAttribute("value", e.value)
    }
    ;
    function Qe(e, t) {
        return e.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, t)
    }
    function et(e, {prefix: t, suffix: n, separator: i, decimalPlaces: r, max: o, isAutoFixDecimalPlaces: s, isAutoFixDecimalPlacesIfPresent: a, dynamicColor: c, dynamicSize: l, skipEmptyValidation: u, setEmptyToZero: h, previousValue: d}, f) {
        let p = e.value;
        if ("" === p && u)
            return;
        let m = e.selectionStart;
        if (e.previousValue === t + "0" && (p.match(/\$[0-9]0\b/) || p.length > e.previousValue.length + 1)) {
            const e = p.lastIndexOf("0");
            p = p.slice(0, e) + p.slice(e + 1)
        } else if (e.previousValue === "0" + n && p.match(/\b(?<!0\.)[1-9]\d*0\sBTC\b/)) {
            const e = p.lastIndexOf("0");
            p = p.slice(0, e) + p.slice(e + 1)
        }
        const g = p.length;
        if (p.indexOf(".") >= 0) {
            const e = p.indexOf(".");
            let o = p.substring(0, e)
              , c = p.substring(e);
            o = Qe(o, i),
            o = o.replace(/^0/, ""),
            h && "" === o && (o = "0"),
            o = Qe(o, i),
            c = Qe(c, ""),
            "blur" === f && (s || a && tt(p)) && (c += "0".repeat(r)),
            c = c.substring(0, r),
            p = t + o + "." + c + n
        } else
            p = Qe(p, i),
            p = p.replace(/^0+/, ""),
            h && "" === p && (p = "0"),
            p = Qe(p, i),
            p = t + p + n,
            "blur" === f && (s ? p = p + "." + "0".repeat(r) : a && tt(p) && (p += "0".repeat(r)));
        if (e.value = function(e, t, n, i) {
            const r = e.replace(/[^\d^\.]/g, "");
            return parseFloat(r) > i ? e.slice(0, i.toString().length) : e
        }(p, 0, 0, o),
        "blur" !== f) {
            m = p.length - g + m,
            e.setSelectionRange(m, m)
        }
        c && nt(e),
        l && it(e),
        e.previousValue = e.value
    }
    function tt(e) {
        return /\.\d{0,2}/.test(e)
    }
    function nt(e) {
        if (e.readOnly)
            e.classList.add("text-gray-60");
        else {
            0 == +e.value.replace(/[^\d^\.]/g, "") ? e.classList.add("text-gray-315") : e.classList.add("text-gold-500")
        }
    }
    function it(e) {
        e.clientWidth > 0 ? rt(e) : setTimeout((()=>{
            rt(e)
        }
        ), 50)
    }
    function rt(e) {
        e.style.fontSize = "64px";
        for (var t, n = parseInt(e.style.fontSize); n > 0 && e.clientWidth > 0 && function(e) {
            const t = document.createElement("div");
            t.style.position = "absolute",
            t.style.visibility = "hidden",
            t.style.whiteSpace = "nowrap",
            t.style.left = "-9999px",
            t.style.fontSize = e.style.fontSize,
            t.style.color = e.style.color,
            t.innerText = e.value,
            document.body.appendChild(t);
            const n = parseInt(window.getComputedStyle(t).width);
            return document.body.removeChild(t),
            n
        }(t = e) + t.getBoundingClientRect().width / 10 > e.clientWidth; )
            n -= 4,
            e.style.fontSize = n.toString() + "px"
    }
    var ot = ({prefix: e, suffix: t="", separator: n, decimalPlaces: i, max: r, isSyncValueAttribute: o=!1, isAutoFixDecimalPlaces: s=!0, isAutoFixDecimalPlacesIfPresent: a=!1, dynamicColor: c=!1, dynamicSize: l=!1, skipEmptyValidation: u=!0, setEmptyToZero: h=!1, previousValue: d=""})=>{
        const f = {
            prefix: e,
            suffix: t,
            separator: n,
            decimalPlaces: i,
            max: r,
            isAutoFixDecimalPlaces: s,
            isAutoFixDecimalPlacesIfPresent: a,
            dynamicColor: c,
            dynamicSize: l,
            skipEmptyValidation: u,
            setEmptyToZero: h,
            previousValue: d
        };
        return {
            mounted() {
                const e = this.el;
                this.el.previousValue = "$0",
                et(e, f, "blur"),
                e.addEventListener("input", (t=>{
                    224 !== t.keyCode && (et(e, f, null),
                    o && Ze(e))
                }
                )),
                e.addEventListener("blur", (()=>et(e, f, "blur"))),
                c && nt(e),
                l && it(e)
            },
            updated() {
                (e && "" !== this.el.value && !this.el.value.startsWith(e) || t && "" !== this.el.value && !this.el.value.endsWith(t)) && et(this.el, f, "blur"),
                c && nt(this.el),
                l && it(this.el)
            }
        }
    }
    ;
    var st = {
        hook: ot({
            prefix: "",
            separator: "",
            decimalPlaces: 8,
            max: 1e4
        })
    }
      , at = {
        hook: ot({
            prefix: "",
            separator: "",
            decimalPlaces: 8,
            isSyncValueAttribute: !0,
            isAutoFixDecimalPlaces: !1
        })
    };
    var ct = {
        hook: ot({
            prefix: "",
            suffix: " BTC",
            separator: "",
            decimalPlaces: 8,
            isSyncValueAttribute: !0,
            isAutoFixDecimalPlaces: !1,
            dynamicColor: !0,
            dynamicSize: !0,
            skipEmptyValidation: !1,
            setEmptyToZero: !0,
            max: 1e3
        })
    }
      , lt = n(32)
      , ut = {
        hook: {
            mounted() {
                ht(this.el)
            }
        },
        init: function() {
            document.querySelectorAll(".js-delegate-click").forEach(ht)
        }
    };
    function ht(e) {
        e.addEventListener("click", (function() {
            const t = e.getAttribute("data-target");
            if (t) {
                t.split(",").forEach((e=>{
                    const t = document.querySelectorAll(e)
                      , n = Array.from(t).filter((e=>null !== e.offsetParent)).pop();
                    setTimeout((()=>{
                        n && n.click()
                    }
                    ))
                }
                ))
            }
        }
        ))
    }
    const dt = "modal-is-visible";
    let ft = !1;
    var pt = {
        hook: {
            mounted() {
                ft || (document.addEventListener("keydown", gt),
                ft = !0),
                mt(this.el)
            },
            updated() {
                mt(this.el)
            },
            destroyed() {
                document.querySelector("body").classList.remove(dt)
            }
        }
    };
    function mt(e) {
        const t = document.querySelector("body");
        e.classList.contains("c-modal--visible") ? t.classList.add(dt) : t.classList.remove(dt)
    }
    const gt = e=>{
        "Escape" === e.key && [...document.getElementsByClassName("c-modal__overlay")].forEach((e=>e.click()))
    }
    ;
    var vt = n(26)
      , bt = n(33);
    var yt = {
        hook: ot({
            prefix: "",
            separator: "",
            decimalPlaces: 2,
            max: 999999999
        })
    };
    var _t = {
        hook: ot({
            prefix: "$",
            separator: ",",
            decimalPlaces: 2,
            max: 1e9,
            isAutoFixDecimalPlaces: !1,
            isAutoFixDecimalPlacesIfPresent: !0,
            isSyncValueAttribute: !0,
            dynamicColor: !0,
            dynamicSize: !0,
            skipEmptyValidation: !1,
            setEmptyToZero: !0,
            previousValue: ""
        })
    }
      , wt = {
        hook: ot({
            prefix: "",
            isAutoFixDecimalPlaces: !1,
            separator: "",
            decimalPlaces: 2,
            max: 100
        })
    }
      , Et = n(34)
      , kt = function(e, t, n, i, r) {
        if (window.gtag)
            switch (window.gtag("event", t, {
                event_category: e,
                event_label: n,
                value: r,
                currency: "USD"
            }),
            n) {
            case "signup-email-and-phone-verified":
                window.gtag("event", "sign_up", {});
                break;
            case "private_client_submission":
                window.gtag("event", "private_client_submission", {});
                break;
            case "institutional_submission":
                window.gtag("event", "institutional_submission", {});
                break;
            case "mining-waitlist":
                window.gtag("event", "generate_lead", {
                    currency: "USD",
                    value: r
                })
            }
    }
      , xt = {
        hook: {
            mounted: function() {
                const {trackingCategory: e, trackingAction: t, trackingName: n, trackingTxid: i, trackingValue: r} = this.el.dataset
                  , o = parseFloat(r);
                kt(e, t, n, i, o)
            },
            deadViewCompatible: !0
        }
    };
    let St;
    var At = {
        hook: {
            mounted() {
                Ct(this.el, !1)
            },
            updated() {
                clearTimeout(St),
                Ct(this.el, !0)
            }
        }
    };
    const Ct = (e,t)=>{
        const n = e.dataset.priceExpiresAt
          , [i] = e.getElementsByClassName(e.dataset.countClass)
          , [r] = e.getElementsByClassName(e.dataset.counterLeftClass)
          , [o] = e.getElementsByClassName(e.dataset.counterRightClass)
          , s = t ? 50 : 0
          , a = Math.max(0, n - Date.now())
          , c = Math.max(0, a - s);
        if (r.style.animationDuration = `${c}ms`,
        o.style.animationDuration = `${c}ms`,
        i.innerText = Math.ceil(a / 1e3),
        Tt(i, a),
        a > 0) {
            const t = e.dataset.counterRunAnimationClass;
            e.classList.remove(t),
            St = setTimeout((()=>{
                e.classList.add(t)
            }
            ), s)
        }
    }
      , Tt = (e,t)=>{
        if (!(t <= 0)) {
            const n = Math.min(t, 1e3);
            St = setTimeout((()=>{
                const i = t - n;
                e.innerText = Math.ceil(i / 1e3),
                Tt(e, i)
            }
            ), n)
        }
    }
      , Lt = {};
    var Ot = {
        hook: {
            updated() {
                Pt(this.el, Lt)
            },
            destroyed() {
                clearTimeout(Lt[this.el.id])
            }
        }
    };
    const Pt = (e,t)=>{
        const {blinkColor: n, color: i} = e.dataset;
        e.style.color = n,
        t[e.id] = setTimeout((()=>{
            e.style.color = i
        }
        ), 500)
    }
      , jt = e=>{
        const t = e.keyCode;
        return t >= 48 && t <= 57 || t >= 96 && t <= 105
    }
    ;
    var Rt = {
        hook: {
            mounted() {
                const e = this.el;
                let t = !0;
                const {"currentSsnLast-4": n} = e.dataset;
                n && (Nt(e, n),
                e.addEventListener("blur", (()=>{
                    t && Nt(e, n)
                }
                )),
                e.addEventListener("focus", (()=>{
                    t && (e.value = "")
                }
                )),
                e.addEventListener("change", (()=>{
                    t = !1
                }
                ))),
                e.addEventListener("keydown", (e=>{
                    (e.shiftKey || !jt(e) && !Dt(e)) && e.preventDefault()
                }
                ))
            }
        }
    };
    const Dt = e=>[8, 46, 37, 39].includes(e.keyCode)
      , Nt = (e,t)=>{
        e.value = `*** - ** - ${t}`
    }
    ;
    var It = {
        hook: {
            mounted() {
                const e = this.el;
                $t(e),
                e.addEventListener("keydown", (e=>{
                    jt(e) || Mt(e) || 65 == e.keyCode || e.preventDefault()
                }
                )),
                e.addEventListener("keyup", (e=>{
                    Mt(e) || $t(e.target)
                }
                ))
            }
        }
    };
    const Mt = e=>[8, 46, 37, 39, 224, 17, 16].includes(e.keyCode)
      , $t = e=>{
        const t = e.value.replace(/\D/g, "")
          , n = t.substring(0, 3)
          , i = t.slice(3, 15)
          , r = t.length;
        e.value = r > 3 ? `(${n}) ${i}` : r > 0 ? `(${n}` : ""
    }
    ;
    var Ut = n(20)
      , Ft = {
        hook: {
            mounted() {
                this.el.addEventListener("click", (e=>{
                    window.scrollTo(0, 0)
                }
                ))
            }
        }
    };
    const Bt = {
        AutoDisableButton: Ge.hook,
        BtcInput: st.hook,
        BTCWithdrawalInput: at.hook,
        BTCWithdrawalInputWithSuffix: ct.hook,
        CopyToClipboard: lt.a.hook,
        DelegateClick: ut.hook,
        Modal: pt.hook,
        Plaid: vt.a.hook,
        PlaidOAuth: vt.a.hookOAuth,
        Share: bt.a.hook,
        UsdInput: yt.hook,
        UsdInputWithPrefix: _t.hook,
        PercentageInput: wt.hook,
        Dropdown: Et.a.hook,
        TrackingEvent: xt.hook,
        AnimatedCounter: At.hook,
        BlinkTextOnChange: Ot.hook,
        SsnInput: Rt.hook,
        PhoneNumberInput: It.hook,
        ScrollToTop: Ft.hook
    };
    t.a = {
        init: function() {
            if (window.liveSocket)
                return window.liveSocket;
            const e = Object(We.a)("channel_token")
              , t = e ? function(e) {
                const t = new Fe("/live",He.a,{
                    dom: {
                        onBeforeElUpdated(e, t) {
                            e._x_dataStack && window.Alpine.clone(e, t)
                        }
                    },
                    hooks: Bt,
                    params: {
                        channel_token: e,
                        _csrf_token: Ht()
                    }
                });
                return t
            }(e) : function() {
                const e = new Fe("/live",He.a,{
                    dom: {
                        onBeforeElUpdated(e, t) {
                            e._x_dataStack && window.Alpine.clone(e, t)
                        }
                    },
                    hooks: Bt,
                    params: {
                        _csrf_token: Ht()
                    }
                });
                return e
            }();
            return Ve.a.configure({
                showSpinner: !1
            }),
            window.addEventListener("phx:page-loading-start", (e=>Ve.a.start())),
            window.addEventListener("phx:page-loading-stop", (e=>Ve.a.done())),
            t.socket.onError((function() {
                const e = document.querySelectorAll("meta[name='csrf-token'][csrf-param='_csrf_token']").length;
                Je.a({
                    message: "Failed to connect liveview websocket",
                    extra: {
                        csrfToken: Ht(),
                        totalCsrfTokenTagCount: e
                    },
                    level: "debug"
                })
            }
            )),
            t.connect(),
            window.liveSocket = t,
            window.Alpine = Ut.a,
            t.boundTopLevelEvents || [...document.querySelectorAll("[phx-hook]")].map((e=>{
                let t = e.getAttribute("phx-hook")
                  , n = Bt[t];
                if (n.deadViewCompatible) {
                    n.mounted.bind(Object.assign(Object.assign({}, n), {
                        el: e
                    }))()
                }
            }
            )),
            t
        },
        get: ()=>window.liveSocket
    };
    const Ht = ()=>document.querySelector("meta[name='csrf-token']").getAttribute("content")
}
, , , , , , , , , , , function(e, t, n) {
    e.exports = n(69)
}
, function(e, t, n) {
    e.exports = {
        fontWeightNormal: "300",
        fontWeightMedium: "500",
        gold: "#c5a063",
        goldDarker: "#8a7d6c",
        grayLighter: "#f6f7fa",
        green: "#63d49e",
        red: "#cc2323",
        redLight: "#e35959",
        blueLight: "#8088a5",
        blueLighter: "#a9abb9",
        blue: "#4b5066",
        white: "#fff",
        neutral50: "#E4E4E4",
        neutral300: "#9A9A9A",
        neutral700: "#393939",
        primary500: "#C5A063"
    }
}
, function(e, t, n) {
    "use strict";
    !function() {
        var e = function() {
            if ("function" == typeof window.CustomEvent)
                return window.CustomEvent;
            function e(e, t) {
                t = t || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var n = document.createEvent("CustomEvent");
                return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
                n
            }
            return e.prototype = window.Event.prototype,
            e
        }();
        function t(e, t) {
            var n = document.createElement("input");
            return n.type = "hidden",
            n.name = e,
            n.value = t,
            n
        }
        function n(e, n) {
            var i = e.getAttribute("data-to")
              , r = t("_method", e.getAttribute("data-method"))
              , o = t("_csrf_token", e.getAttribute("data-csrf"))
              , s = document.createElement("form")
              , a = document.createElement("input")
              , c = e.getAttribute("target");
            s.method = "get" === e.getAttribute("data-method") ? "get" : "post",
            s.action = i,
            s.style.display = "none",
            c ? s.target = c : n && (s.target = "_blank"),
            s.appendChild(o),
            s.appendChild(r),
            document.body.appendChild(s),
            a.type = "submit",
            s.appendChild(a),
            a.click()
        }
        window.addEventListener("click", (function(t) {
            var i = t.target;
            if (!t.defaultPrevented)
                for (; i && i.getAttribute; ) {
                    var r = new e("phoenix.link.click",{
                        bubbles: !0,
                        cancelable: !0
                    });
                    if (!i.dispatchEvent(r))
                        return t.preventDefault(),
                        t.stopImmediatePropagation(),
                        !1;
                    if (i.getAttribute("data-method"))
                        return n(i, t.metaKey || t.shiftKey),
                        t.preventDefault(),
                        !1;
                    i = i.parentNode
                }
        }
        ), !1),
        window.addEventListener("phoenix.link.click", (function(e) {
            var t = e.target.getAttribute("data-confirm");
            t && !window.confirm(t) && e.preventDefault()
        }
        ), !1)
    }()
}
, , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n.r(t);
    n(53),
    n(54);
    var i = n(26)
      , r = n(8)
      , o = function(e) {
        const t = Object(r.a)("user_uid");
        if (!t)
            return console.error("Could not setup plaid, userUid not found.");
        const n = e.channel(`balance:${t}`);
        n.join(),
        n.on("updated", l)
    };
    const s = /(?:\d|\,)+\.?\d+$/
      , a = /(?:\d|\,)*\.?\d+\s(\w+)$/
      , c = (e,t)=>null != e.match(s) ? e.replace(s, `${t}`) : null != e.match(a) ? e.replace(a, `${t} $1`) : t
      , l = ({balance_type: e, total_btc_balance: t, total_withdrawable_btc_amount: n, total_usd_balance: i, total_usd_worth: r})=>{
        if ("user" !== e)
            ;
        else {
            [...document.getElementsByClassName("js-user-total-btc-balance")].forEach((e=>{
                e.innerText = c(e.innerText, t)
            }
            ));
            [...document.getElementsByClassName("js-user-total-withdrawable-btc-amount")].forEach((e=>{
                e.innerText = c(e.innerText, n)
            }
            ));
            [...document.getElementsByClassName("js-user-total-usd-balance")].forEach((e=>{
                e.innerText = c(e.innerText, i)
            }
            ));
            [...document.getElementsByClassName("js-user-total-usd-worth")].forEach((e=>{
                e.innerText = c(e.innerText, r)
            }
            ))
        }
    }
    ;
    var u = function(e) {
        const t = Object(r.a)("user_session_uid");
        if (!t)
            return console.error("Could not setup user session monitoring, userSessionUid not found.");
        const n = e.channel(`user_session:${t}`);
        n.join(),
        n.on("logout", (()=>{
            document.hidden && document.addEventListener("visibilitychange", (()=>{
                window.location.reload()
            }
            ))
        }
        ))
    }
      , h = function(e) {
        if (!new RegExp(/unconfirmed_email/g).test(window.location.href))
            return;
        const t = Object(r.a)("user_email_token");
        if (!t)
            return console.error("Could not setup id verification monitoring, user_email_token not found.");
        const n = e.channel(`registration:${t}`);
        n.join(),
        n.on("email_confirmed", (()=>{
            window.location.replace("/setup_phone")
        }
        ))
    }
      , d = n(41)
      , f = n(25)
      , p = function() {
        const e = document.getElementById("js-requestAccess");
        null != e && e.addEventListener("submit", (function(t) {
            t.preventDefault(),
            function(e) {
                var t = e.querySelector('input[type="submit"]');
                t.disabled = !0;
                var n = new XMLHttpRequest;
                n.open(e.method, e.action),
                n.setRequestHeader("Accept", "application/json; charset=utf-8"),
                n.setRequestHeader("Content-Type", "application/json; charset=UTF-8"),
                n.onloadend = function(e) {
                    400 === e.target.status ? (alert("Something went wrong"),
                    t.disabled = !1) : 200 === e.target.status && function() {
                        const e = document.getElementById("js-requestAccessSubmitText")
                          , t = document.getElementById("js-requestAccessFormContainer");
                        e.classList.remove("h-hide"),
                        t.classList.add("h-hide")
                    }()
                }
                ,
                n.send(JSON.stringify({
                    fields: [{
                        name: "email",
                        value: e.elements.email.value
                    }, {
                        name: "firstname",
                        value: e.elements.firstname.value
                    }, {
                        name: "lastname",
                        value: e.elements.lastname.value
                    }, {
                        name: "country",
                        value: e.elements.country.value
                    }, {
                        name: "state",
                        value: e.elements.state.value
                    }]
                }))
            }(e)
        }
        ))
    };
    var m = function() {
        window.zESettings = {
            webWidget: {
                authenticate: {
                    chat: {
                        jwtFn: function(e) {
                            fetch("/support/auth_chat").then((function(t) {
                                t.text().then((function(t) {
                                    e(t)
                                }
                                ))
                            }
                            ))
                        }
                    }
                }
            }
        }
    };
    var g = function() {
        !function() {
            const e = w();
            if (!e)
                return;
            v(),
            b(),
            e.onchange = function() {
                v(),
                b()
            }
        }(),
        function() {
            const e = _();
            if (!e)
                return;
            y(),
            e.onchange = function() {
                y()
            }
        }()
    };
    function v() {
        const e = document.querySelector(".js-unsupported-jurisdiction-warning")
          , t = w();
        if (!e)
            return;
        e.getAttribute("data-permitted-states").includes(t.value) && "ID" != t.value ? e.classList.add("h-hide") : e.classList.remove("h-hide")
    }
    function b() {
        const e = w()
          , t = document.querySelector(".js-hawaiiDisclaimer");
        t && ("HI" == e.value ? t.classList.remove("h-hide") : t.classList.add("h-hide"))
    }
    function y() {
        const e = w()
          , t = _();
        t && ("USA" == t.value ? e.style.display = "initial" : (e.style.display = "none",
        e.value = ""))
    }
    function _() {
        return document.querySelector(".js-signup-country")
    }
    function w() {
        return document.querySelector(".js-signup-state")
    }
    var E = n(40);
    try {
        d.a.init();
        const e = f.a.init();
        e.isGuest ? h(e) : (i.a.init(e),
        o(e),
        u(e))
    } catch (e) {
        console.error("Failed to setup live socket", e)
    }
    document.addEventListener("DOMContentLoaded", (()=>{
        E.b.init(),
        p(),
        m(),
        g()
    }
    )),
    window.onpageshow = function(e) {
        const t = ["/login", "/sessions/login_sms", "/sessions/login_totp"];
        if (e.persisted) {
            const e = window.location.pathname;
            t.includes(e) && window.location.reload()
        }
    }
}
]);
//# sourceMappingURL=./app.js-5f9aeed67246c911c090123531d13d9b.map
