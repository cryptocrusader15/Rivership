/*! For license information please see public.js.LICENSE.txt */
!function(t) {
    var e = {};
    function n(i) {
        if (e[i])
            return e[i].exports;
        var r = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(r.exports, r, r.exports, n),
        r.l = !0,
        r.exports
    }
    n.m = t,
    n.c = e,
    n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
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
        var i = Object.create(null);
        if (n.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var r in t)
                n.d(i, r, function(e) {
                    return t[e]
                }
                .bind(null, r));
        return i
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
    n(n.s = 55)
}([function(t, e, n) {
    "use strict";
    var i = Math.PI
      , r = 2 * i
      , o = 1e-6
      , s = r - o;
    function a() {
        this._x0 = this._y0 = this._x1 = this._y1 = null,
        this._ = ""
    }
    function c() {
        return new a
    }
    a.prototype = c.prototype = {
        constructor: a,
        moveTo: function(t, e) {
            this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e)
        },
        closePath: function() {
            null !== this._x1 && (this._x1 = this._x0,
            this._y1 = this._y0,
            this._ += "Z")
        },
        lineTo: function(t, e) {
            this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +e)
        },
        quadraticCurveTo: function(t, e, n, i) {
            this._ += "Q" + +t + "," + +e + "," + (this._x1 = +n) + "," + (this._y1 = +i)
        },
        bezierCurveTo: function(t, e, n, i, r, o) {
            this._ += "C" + +t + "," + +e + "," + +n + "," + +i + "," + (this._x1 = +r) + "," + (this._y1 = +o)
        },
        arcTo: function(t, e, n, r, s) {
            t = +t,
            e = +e,
            n = +n,
            r = +r,
            s = +s;
            var a = this._x1
              , c = this._y1
              , u = n - t
              , l = r - e
              , h = a - t
              , f = c - e
              , d = h * h + f * f;
            if (s < 0)
                throw new Error("negative radius: " + s);
            if (null === this._x1)
                this._ += "M" + (this._x1 = t) + "," + (this._y1 = e);
            else if (d > o)
                if (Math.abs(f * u - l * h) > o && s) {
                    var p = n - a
                      , g = r - c
                      , m = u * u + l * l
                      , v = p * p + g * g
                      , _ = Math.sqrt(m)
                      , y = Math.sqrt(d)
                      , b = s * Math.tan((i - Math.acos((m + d - v) / (2 * _ * y))) / 2)
                      , x = b / y
                      , w = b / _;
                    Math.abs(x - 1) > o && (this._ += "L" + (t + x * h) + "," + (e + x * f)),
                    this._ += "A" + s + "," + s + ",0,0," + +(f * p > h * g) + "," + (this._x1 = t + w * u) + "," + (this._y1 = e + w * l)
                } else
                    this._ += "L" + (this._x1 = t) + "," + (this._y1 = e);
            else
                ;
        },
        arc: function(t, e, n, a, c, u) {
            t = +t,
            e = +e,
            u = !!u;
            var l = (n = +n) * Math.cos(a)
              , h = n * Math.sin(a)
              , f = t + l
              , d = e + h
              , p = 1 ^ u
              , g = u ? a - c : c - a;
            if (n < 0)
                throw new Error("negative radius: " + n);
            null === this._x1 ? this._ += "M" + f + "," + d : (Math.abs(this._x1 - f) > o || Math.abs(this._y1 - d) > o) && (this._ += "L" + f + "," + d),
            n && (g < 0 && (g = g % r + r),
            g > s ? this._ += "A" + n + "," + n + ",0,1," + p + "," + (t - l) + "," + (e - h) + "A" + n + "," + n + ",0,1," + p + "," + (this._x1 = f) + "," + (this._y1 = d) : g > o && (this._ += "A" + n + "," + n + ",0," + +(g >= i) + "," + p + "," + (this._x1 = t + n * Math.cos(c)) + "," + (this._y1 = e + n * Math.sin(c))))
        },
        rect: function(t, e, n, i) {
            this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e) + "h" + +n + "v" + +i + "h" + -n + "Z"
        },
        toString: function() {
            return this._
        }
    };
    var u = c
      , l = function(t) {
        return function() {
            return t
        }
    }
      , h = (Math.abs,
    Math.atan2,
    Math.cos,
    Math.max,
    Math.min,
    Math.sin,
    Math.sqrt,
    1e-12)
      , f = Math.PI
      , d = 2 * f;
    function p(t) {
        this._context = t
    }
    p.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._point = 0
        },
        lineEnd: function() {
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, e) {
            switch (t = +t,
            e = +e,
            this._point) {
            case 0:
                this._point = 1,
                this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                break;
            case 1:
                this._point = 2;
            default:
                this._context.lineTo(t, e)
            }
        }
    };
    var g = function(t) {
        return new p(t)
    };
    function m(t) {
        return t[0]
    }
    function v(t) {
        return t[1]
    }
    var _ = function() {
        var t = m
          , e = v
          , n = l(!0)
          , i = null
          , r = g
          , o = null;
        function s(s) {
            var a, c, l, h = s.length, f = !1;
            for (null == i && (o = r(l = u())),
            a = 0; a <= h; ++a)
                !(a < h && n(c = s[a], a, s)) === f && ((f = !f) ? o.lineStart() : o.lineEnd()),
                f && o.point(+t(c, a, s), +e(c, a, s));
            if (l)
                return o = null,
                l + "" || null
        }
        return s.x = function(e) {
            return arguments.length ? (t = "function" == typeof e ? e : l(+e),
            s) : t
        }
        ,
        s.y = function(t) {
            return arguments.length ? (e = "function" == typeof t ? t : l(+t),
            s) : e
        }
        ,
        s.defined = function(t) {
            return arguments.length ? (n = "function" == typeof t ? t : l(!!t),
            s) : n
        }
        ,
        s.curve = function(t) {
            return arguments.length ? (r = t,
            null != i && (o = r(i)),
            s) : r
        }
        ,
        s.context = function(t) {
            return arguments.length ? (null == t ? i = o = null : o = r(i = t),
            s) : i
        }
        ,
        s
    }
      , y = function() {
        var t = m
          , e = null
          , n = l(0)
          , i = v
          , r = l(!0)
          , o = null
          , s = g
          , a = null;
        function c(c) {
            var l, h, f, d, p, g = c.length, m = !1, v = new Array(g), _ = new Array(g);
            for (null == o && (a = s(p = u())),
            l = 0; l <= g; ++l) {
                if (!(l < g && r(d = c[l], l, c)) === m)
                    if (m = !m)
                        h = l,
                        a.areaStart(),
                        a.lineStart();
                    else {
                        for (a.lineEnd(),
                        a.lineStart(),
                        f = l - 1; f >= h; --f)
                            a.point(v[f], _[f]);
                        a.lineEnd(),
                        a.areaEnd()
                    }
                m && (v[l] = +t(d, l, c),
                _[l] = +n(d, l, c),
                a.point(e ? +e(d, l, c) : v[l], i ? +i(d, l, c) : _[l]))
            }
            if (p)
                return a = null,
                p + "" || null
        }
        function h() {
            return _().defined(r).curve(s).context(o)
        }
        return c.x = function(n) {
            return arguments.length ? (t = "function" == typeof n ? n : l(+n),
            e = null,
            c) : t
        }
        ,
        c.x0 = function(e) {
            return arguments.length ? (t = "function" == typeof e ? e : l(+e),
            c) : t
        }
        ,
        c.x1 = function(t) {
            return arguments.length ? (e = null == t ? null : "function" == typeof t ? t : l(+t),
            c) : e
        }
        ,
        c.y = function(t) {
            return arguments.length ? (n = "function" == typeof t ? t : l(+t),
            i = null,
            c) : n
        }
        ,
        c.y0 = function(t) {
            return arguments.length ? (n = "function" == typeof t ? t : l(+t),
            c) : n
        }
        ,
        c.y1 = function(t) {
            return arguments.length ? (i = null == t ? null : "function" == typeof t ? t : l(+t),
            c) : i
        }
        ,
        c.lineX0 = c.lineY0 = function() {
            return h().x(t).y(n)
        }
        ,
        c.lineY1 = function() {
            return h().x(t).y(i)
        }
        ,
        c.lineX1 = function() {
            return h().x(e).y(n)
        }
        ,
        c.defined = function(t) {
            return arguments.length ? (r = "function" == typeof t ? t : l(!!t),
            c) : r
        }
        ,
        c.curve = function(t) {
            return arguments.length ? (s = t,
            null != o && (a = s(o)),
            c) : s
        }
        ,
        c.context = function(t) {
            return arguments.length ? (null == t ? o = a = null : a = s(o = t),
            c) : o
        }
        ,
        c
    };
    x(g);
    function b(t) {
        this._curve = t
    }
    function x(t) {
        function e(e) {
            return new b(t(e))
        }
        return e._curve = t,
        e
    }
    b.prototype = {
        areaStart: function() {
            this._curve.areaStart()
        },
        areaEnd: function() {
            this._curve.areaEnd()
        },
        lineStart: function() {
            this._curve.lineStart()
        },
        lineEnd: function() {
            this._curve.lineEnd()
        },
        point: function(t, e) {
            this._curve.point(e * Math.sin(t), e * -Math.cos(t))
        }
    };
    Array.prototype.slice;
    Math.sqrt(1 / 3);
    var w = Math.sin(f / 10) / Math.sin(7 * f / 10)
      , k = (Math.sin(d / 10),
    Math.cos(d / 10),
    Math.sqrt(3),
    Math.sqrt(3),
    Math.sqrt(12),
    function() {}
    );
    function E(t, e, n) {
        t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + e) / 6, (t._y0 + 4 * t._y1 + n) / 6)
    }
    function S(t) {
        this._context = t
    }
    S.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = NaN,
            this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 3:
                E(this, this._x1, this._y1);
            case 2:
                this._context.lineTo(this._x1, this._y1)
            }
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, e) {
            switch (t = +t,
            e = +e,
            this._point) {
            case 0:
                this._point = 1,
                this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3,
                this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
            default:
                E(this, t, e)
            }
            this._x0 = this._x1,
            this._x1 = t,
            this._y0 = this._y1,
            this._y1 = e
        }
    };
    function A(t) {
        this._context = t
    }
    A.prototype = {
        areaStart: k,
        areaEnd: k,
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN,
            this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 1:
                this._context.moveTo(this._x2, this._y2),
                this._context.closePath();
                break;
            case 2:
                this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3),
                this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3),
                this._context.closePath();
                break;
            case 3:
                this.point(this._x2, this._y2),
                this.point(this._x3, this._y3),
                this.point(this._x4, this._y4)
            }
        },
        point: function(t, e) {
            switch (t = +t,
            e = +e,
            this._point) {
            case 0:
                this._point = 1,
                this._x2 = t,
                this._y2 = e;
                break;
            case 1:
                this._point = 2,
                this._x3 = t,
                this._y3 = e;
                break;
            case 2:
                this._point = 3,
                this._x4 = t,
                this._y4 = e,
                this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + e) / 6);
                break;
            default:
                E(this, t, e)
            }
            this._x0 = this._x1,
            this._x1 = t,
            this._y0 = this._y1,
            this._y1 = e
        }
    };
    function C(t) {
        this._context = t
    }
    C.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = NaN,
            this._point = 0
        },
        lineEnd: function() {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, e) {
            switch (t = +t,
            e = +e,
            this._point) {
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                var n = (this._x0 + 4 * this._x1 + t) / 6
                  , i = (this._y0 + 4 * this._y1 + e) / 6;
                this._line ? this._context.lineTo(n, i) : this._context.moveTo(n, i);
                break;
            case 3:
                this._point = 4;
            default:
                E(this, t, e)
            }
            this._x0 = this._x1,
            this._x1 = t,
            this._y0 = this._y1,
            this._y1 = e
        }
    };
    function T(t, e) {
        this._basis = new S(t),
        this._beta = e
    }
    T.prototype = {
        lineStart: function() {
            this._x = [],
            this._y = [],
            this._basis.lineStart()
        },
        lineEnd: function() {
            var t = this._x
              , e = this._y
              , n = t.length - 1;
            if (n > 0)
                for (var i, r = t[0], o = e[0], s = t[n] - r, a = e[n] - o, c = -1; ++c <= n; )
                    i = c / n,
                    this._basis.point(this._beta * t[c] + (1 - this._beta) * (r + i * s), this._beta * e[c] + (1 - this._beta) * (o + i * a));
            this._x = this._y = null,
            this._basis.lineEnd()
        },
        point: function(t, e) {
            this._x.push(+t),
            this._y.push(+e)
        }
    };
    (function t(e) {
        function n(t) {
            return 1 === e ? new S(t) : new T(t,e)
        }
        return n.beta = function(e) {
            return t(+e)
        }
        ,
        n
    }
    )(.85);
    function L(t, e, n) {
        t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - e), t._y2 + t._k * (t._y1 - n), t._x2, t._y2)
    }
    function M(t, e) {
        this._context = t,
        this._k = (1 - e) / 6
    }
    M.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN,
            this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 2:
                this._context.lineTo(this._x2, this._y2);
                break;
            case 3:
                L(this, this._x1, this._y1)
            }
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, e) {
            switch (t = +t,
            e = +e,
            this._point) {
            case 0:
                this._point = 1,
                this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                break;
            case 1:
                this._point = 2,
                this._x1 = t,
                this._y1 = e;
                break;
            case 2:
                this._point = 3;
            default:
                L(this, t, e)
            }
            this._x0 = this._x1,
            this._x1 = this._x2,
            this._x2 = t,
            this._y0 = this._y1,
            this._y1 = this._y2,
            this._y2 = e
        }
    };
    (function t(e) {
        function n(t) {
            return new M(t,e)
        }
        return n.tension = function(e) {
            return t(+e)
        }
        ,
        n
    }
    )(0);
    function O(t, e) {
        this._context = t,
        this._k = (1 - e) / 6
    }
    O.prototype = {
        areaStart: k,
        areaEnd: k,
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN,
            this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 1:
                this._context.moveTo(this._x3, this._y3),
                this._context.closePath();
                break;
            case 2:
                this._context.lineTo(this._x3, this._y3),
                this._context.closePath();
                break;
            case 3:
                this.point(this._x3, this._y3),
                this.point(this._x4, this._y4),
                this.point(this._x5, this._y5)
            }
        },
        point: function(t, e) {
            switch (t = +t,
            e = +e,
            this._point) {
            case 0:
                this._point = 1,
                this._x3 = t,
                this._y3 = e;
                break;
            case 1:
                this._point = 2,
                this._context.moveTo(this._x4 = t, this._y4 = e);
                break;
            case 2:
                this._point = 3,
                this._x5 = t,
                this._y5 = e;
                break;
            default:
                L(this, t, e)
            }
            this._x0 = this._x1,
            this._x1 = this._x2,
            this._x2 = t,
            this._y0 = this._y1,
            this._y1 = this._y2,
            this._y2 = e
        }
    };
    (function t(e) {
        function n(t) {
            return new O(t,e)
        }
        return n.tension = function(e) {
            return t(+e)
        }
        ,
        n
    }
    )(0);
    function P(t, e) {
        this._context = t,
        this._k = (1 - e) / 6
    }
    P.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN,
            this._point = 0
        },
        lineEnd: function() {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, e) {
            switch (t = +t,
            e = +e,
            this._point) {
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3,
                this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                break;
            case 3:
                this._point = 4;
            default:
                L(this, t, e)
            }
            this._x0 = this._x1,
            this._x1 = this._x2,
            this._x2 = t,
            this._y0 = this._y1,
            this._y1 = this._y2,
            this._y2 = e
        }
    };
    (function t(e) {
        function n(t) {
            return new P(t,e)
        }
        return n.tension = function(e) {
            return t(+e)
        }
        ,
        n
    }
    )(0);
    function N(t, e, n) {
        var i = t._x1
          , r = t._y1
          , o = t._x2
          , s = t._y2;
        if (t._l01_a > h) {
            var a = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a
              , c = 3 * t._l01_a * (t._l01_a + t._l12_a);
            i = (i * a - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c,
            r = (r * a - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c
        }
        if (t._l23_a > h) {
            var u = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a
              , l = 3 * t._l23_a * (t._l23_a + t._l12_a);
            o = (o * u + t._x1 * t._l23_2a - e * t._l12_2a) / l,
            s = (s * u + t._y1 * t._l23_2a - n * t._l12_2a) / l
        }
        t._context.bezierCurveTo(i, r, o, s, t._x2, t._y2)
    }
    function j(t, e) {
        this._context = t,
        this._alpha = e
    }
    j.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN,
            this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 2:
                this._context.lineTo(this._x2, this._y2);
                break;
            case 3:
                this.point(this._x2, this._y2)
            }
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, e) {
            if (t = +t,
            e = +e,
            this._point) {
                var n = this._x2 - t
                  , i = this._y2 - e;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + i * i, this._alpha))
            }
            switch (this._point) {
            case 0:
                this._point = 1,
                this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
            default:
                N(this, t, e)
            }
            this._l01_a = this._l12_a,
            this._l12_a = this._l23_a,
            this._l01_2a = this._l12_2a,
            this._l12_2a = this._l23_2a,
            this._x0 = this._x1,
            this._x1 = this._x2,
            this._x2 = t,
            this._y0 = this._y1,
            this._y1 = this._y2,
            this._y2 = e
        }
    };
    (function t(e) {
        function n(t) {
            return e ? new j(t,e) : new M(t,0)
        }
        return n.alpha = function(e) {
            return t(+e)
        }
        ,
        n
    }
    )(.5);
    function D(t, e) {
        this._context = t,
        this._alpha = e
    }
    D.prototype = {
        areaStart: k,
        areaEnd: k,
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN,
            this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 1:
                this._context.moveTo(this._x3, this._y3),
                this._context.closePath();
                break;
            case 2:
                this._context.lineTo(this._x3, this._y3),
                this._context.closePath();
                break;
            case 3:
                this.point(this._x3, this._y3),
                this.point(this._x4, this._y4),
                this.point(this._x5, this._y5)
            }
        },
        point: function(t, e) {
            if (t = +t,
            e = +e,
            this._point) {
                var n = this._x2 - t
                  , i = this._y2 - e;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + i * i, this._alpha))
            }
            switch (this._point) {
            case 0:
                this._point = 1,
                this._x3 = t,
                this._y3 = e;
                break;
            case 1:
                this._point = 2,
                this._context.moveTo(this._x4 = t, this._y4 = e);
                break;
            case 2:
                this._point = 3,
                this._x5 = t,
                this._y5 = e;
                break;
            default:
                N(this, t, e)
            }
            this._l01_a = this._l12_a,
            this._l12_a = this._l23_a,
            this._l01_2a = this._l12_2a,
            this._l12_2a = this._l23_2a,
            this._x0 = this._x1,
            this._x1 = this._x2,
            this._x2 = t,
            this._y0 = this._y1,
            this._y1 = this._y2,
            this._y2 = e
        }
    };
    (function t(e) {
        function n(t) {
            return e ? new D(t,e) : new O(t,0)
        }
        return n.alpha = function(e) {
            return t(+e)
        }
        ,
        n
    }
    )(.5);
    function R(t, e) {
        this._context = t,
        this._alpha = e
    }
    R.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN,
            this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        },
        lineEnd: function() {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, e) {
            if (t = +t,
            e = +e,
            this._point) {
                var n = this._x2 - t
                  , i = this._y2 - e;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + i * i, this._alpha))
            }
            switch (this._point) {
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3,
                this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                break;
            case 3:
                this._point = 4;
            default:
                N(this, t, e)
            }
            this._l01_a = this._l12_a,
            this._l12_a = this._l23_a,
            this._l01_2a = this._l12_2a,
            this._l12_2a = this._l23_2a,
            this._x0 = this._x1,
            this._x1 = this._x2,
            this._x2 = t,
            this._y0 = this._y1,
            this._y1 = this._y2,
            this._y2 = e
        }
    };
    (function t(e) {
        function n(t) {
            return e ? new R(t,e) : new P(t,0)
        }
        return n.alpha = function(e) {
            return t(+e)
        }
        ,
        n
    }
    )(.5);
    function $(t) {
        this._context = t
    }
    $.prototype = {
        areaStart: k,
        areaEnd: k,
        lineStart: function() {
            this._point = 0
        },
        lineEnd: function() {
            this._point && this._context.closePath()
        },
        point: function(t, e) {
            t = +t,
            e = +e,
            this._point ? this._context.lineTo(t, e) : (this._point = 1,
            this._context.moveTo(t, e))
        }
    };
    function I(t) {
        return t < 0 ? -1 : 1
    }
    function U(t, e, n) {
        var i = t._x1 - t._x0
          , r = e - t._x1
          , o = (t._y1 - t._y0) / (i || r < 0 && -0)
          , s = (n - t._y1) / (r || i < 0 && -0)
          , a = (o * r + s * i) / (i + r);
        return (I(o) + I(s)) * Math.min(Math.abs(o), Math.abs(s), .5 * Math.abs(a)) || 0
    }
    function F(t, e) {
        var n = t._x1 - t._x0;
        return n ? (3 * (t._y1 - t._y0) / n - e) / 2 : e
    }
    function H(t, e, n) {
        var i = t._x0
          , r = t._y0
          , o = t._x1
          , s = t._y1
          , a = (o - i) / 3;
        t._context.bezierCurveTo(i + a, r + a * e, o - a, s - a * n, o, s)
    }
    function B(t) {
        this._context = t
    }
    function q(t) {
        this._context = new V(t)
    }
    function V(t) {
        this._context = t
    }
    function z(t) {
        this._context = t
    }
    function W(t) {
        var e, n, i = t.length - 1, r = new Array(i), o = new Array(i), s = new Array(i);
        for (r[0] = 0,
        o[0] = 2,
        s[0] = t[0] + 2 * t[1],
        e = 1; e < i - 1; ++e)
            r[e] = 1,
            o[e] = 4,
            s[e] = 4 * t[e] + 2 * t[e + 1];
        for (r[i - 1] = 2,
        o[i - 1] = 7,
        s[i - 1] = 8 * t[i - 1] + t[i],
        e = 1; e < i; ++e)
            n = r[e] / o[e - 1],
            o[e] -= n,
            s[e] -= n * s[e - 1];
        for (r[i - 1] = s[i - 1] / o[i - 1],
        e = i - 2; e >= 0; --e)
            r[e] = (s[e] - r[e + 1]) / o[e];
        for (o[i - 1] = (t[i] + r[i - 1]) / 2,
        e = 0; e < i - 1; ++e)
            o[e] = 2 * t[e + 1] - r[e + 1];
        return [r, o]
    }
    B.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN,
            this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
            case 3:
                H(this, this._t0, F(this, this._t0))
            }
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, e) {
            var n = NaN;
            if (e = +e,
            (t = +t) !== this._x1 || e !== this._y1) {
                switch (this._point) {
                case 0:
                    this._point = 1,
                    this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3,
                    H(this, F(this, n = U(this, t, e)), n);
                    break;
                default:
                    H(this, this._t0, n = U(this, t, e))
                }
                this._x0 = this._x1,
                this._x1 = t,
                this._y0 = this._y1,
                this._y1 = e,
                this._t0 = n
            }
        }
    },
    (q.prototype = Object.create(B.prototype)).point = function(t, e) {
        B.prototype.point.call(this, e, t)
    }
    ,
    V.prototype = {
        moveTo: function(t, e) {
            this._context.moveTo(e, t)
        },
        closePath: function() {
            this._context.closePath()
        },
        lineTo: function(t, e) {
            this._context.lineTo(e, t)
        },
        bezierCurveTo: function(t, e, n, i, r, o) {
            this._context.bezierCurveTo(e, t, i, n, o, r)
        }
    },
    z.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x = [],
            this._y = []
        },
        lineEnd: function() {
            var t = this._x
              , e = this._y
              , n = t.length;
            if (n)
                if (this._line ? this._context.lineTo(t[0], e[0]) : this._context.moveTo(t[0], e[0]),
                2 === n)
                    this._context.lineTo(t[1], e[1]);
                else
                    for (var i = W(t), r = W(e), o = 0, s = 1; s < n; ++o,
                    ++s)
                        this._context.bezierCurveTo(i[0][o], r[0][o], i[1][o], r[1][o], t[s], e[s]);
            (this._line || 0 !== this._line && 1 === n) && this._context.closePath(),
            this._line = 1 - this._line,
            this._x = this._y = null
        },
        point: function(t, e) {
            this._x.push(+t),
            this._y.push(+e)
        }
    };
    function J(t, e) {
        this._context = t,
        this._t = e
    }
    J.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x = this._y = NaN,
            this._point = 0
        },
        lineEnd: function() {
            0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y),
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line >= 0 && (this._t = 1 - this._t,
            this._line = 1 - this._line)
        },
        point: function(t, e) {
            switch (t = +t,
            e = +e,
            this._point) {
            case 0:
                this._point = 1,
                this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                break;
            case 1:
                this._point = 2;
            default:
                if (this._t <= 0)
                    this._context.lineTo(this._x, e),
                    this._context.lineTo(t, e);
                else {
                    var n = this._x * (1 - this._t) + t * this._t;
                    this._context.lineTo(n, this._y),
                    this._context.lineTo(n, e)
                }
            }
            this._x = t,
            this._y = e
        }
    };
    var Y = Array.prototype.slice
      , G = function(t) {
        return t
    }
      , X = 1e-6;
    function Z(t) {
        return "translate(" + (t + .5) + ",0)"
    }
    function K(t) {
        return "translate(0," + (t + .5) + ")"
    }
    function Q(t) {
        return function(e) {
            return +t(e)
        }
    }
    function tt(t) {
        var e = Math.max(0, t.bandwidth() - 1) / 2;
        return t.round() && (e = Math.round(e)),
        function(n) {
            return +t(n) + e
        }
    }
    function et() {
        return !this.__axis
    }
    function nt(t, e) {
        var n = []
          , i = null
          , r = null
          , o = 6
          , s = 6
          , a = 3
          , c = 1 === t || 4 === t ? -1 : 1
          , u = 4 === t || 2 === t ? "x" : "y"
          , l = 1 === t || 3 === t ? Z : K;
        function h(h) {
            var f = null == i ? e.ticks ? e.ticks.apply(e, n) : e.domain() : i
              , d = null == r ? e.tickFormat ? e.tickFormat.apply(e, n) : G : r
              , p = Math.max(o, 0) + a
              , g = e.range()
              , m = +g[0] + .5
              , v = +g[g.length - 1] + .5
              , _ = (e.bandwidth ? tt : Q)(e.copy())
              , y = h.selection ? h.selection() : h
              , b = y.selectAll(".domain").data([null])
              , x = y.selectAll(".tick").data(f, e).order()
              , w = x.exit()
              , k = x.enter().append("g").attr("class", "tick")
              , E = x.select("line")
              , S = x.select("text");
            b = b.merge(b.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")),
            x = x.merge(k),
            E = E.merge(k.append("line").attr("stroke", "currentColor").attr(u + "2", c * o)),
            S = S.merge(k.append("text").attr("fill", "currentColor").attr(u, c * p).attr("dy", 1 === t ? "0em" : 3 === t ? "0.71em" : "0.32em")),
            h !== y && (b = b.transition(h),
            x = x.transition(h),
            E = E.transition(h),
            S = S.transition(h),
            w = w.transition(h).attr("opacity", X).attr("transform", (function(t) {
                return isFinite(t = _(t)) ? l(t) : this.getAttribute("transform")
            }
            )),
            k.attr("opacity", X).attr("transform", (function(t) {
                var e = this.parentNode.__axis;
                return l(e && isFinite(e = e(t)) ? e : _(t))
            }
            ))),
            w.remove(),
            b.attr("d", 4 === t || 2 == t ? s ? "M" + c * s + "," + m + "H0.5V" + v + "H" + c * s : "M0.5," + m + "V" + v : s ? "M" + m + "," + c * s + "V0.5H" + v + "V" + c * s : "M" + m + ",0.5H" + v),
            x.attr("opacity", 1).attr("transform", (function(t) {
                return l(_(t))
            }
            )),
            E.attr(u + "2", c * o),
            S.attr(u, c * p).text(d),
            y.filter(et).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", 2 === t ? "start" : 4 === t ? "end" : "middle"),
            y.each((function() {
                this.__axis = _
            }
            ))
        }
        return h.scale = function(t) {
            return arguments.length ? (e = t,
            h) : e
        }
        ,
        h.ticks = function() {
            return n = Y.call(arguments),
            h
        }
        ,
        h.tickArguments = function(t) {
            return arguments.length ? (n = null == t ? [] : Y.call(t),
            h) : n.slice()
        }
        ,
        h.tickValues = function(t) {
            return arguments.length ? (i = null == t ? null : Y.call(t),
            h) : i && i.slice()
        }
        ,
        h.tickFormat = function(t) {
            return arguments.length ? (r = t,
            h) : r
        }
        ,
        h.tickSize = function(t) {
            return arguments.length ? (o = s = +t,
            h) : o
        }
        ,
        h.tickSizeInner = function(t) {
            return arguments.length ? (o = +t,
            h) : o
        }
        ,
        h.tickSizeOuter = function(t) {
            return arguments.length ? (s = +t,
            h) : s
        }
        ,
        h.tickPadding = function(t) {
            return arguments.length ? (a = +t,
            h) : a
        }
        ,
        h
    }
    var it = function(t, e) {
        return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
    }
      , rt = function(t) {
        var e;
        return 1 === t.length && (e = t,
        t = function(t, n) {
            return it(e(t), n)
        }
        ),
        {
            left: function(e, n, i, r) {
                for (null == i && (i = 0),
                null == r && (r = e.length); i < r; ) {
                    var o = i + r >>> 1;
                    t(e[o], n) < 0 ? i = o + 1 : r = o
                }
                return i
            },
            right: function(e, n, i, r) {
                for (null == i && (i = 0),
                null == r && (r = e.length); i < r; ) {
                    var o = i + r >>> 1;
                    t(e[o], n) > 0 ? r = o : i = o + 1
                }
                return i
            }
        }
    };
    var ot = rt(it)
      , st = ot.right
      , at = (ot.left,
    st);
    var ct = function(t, e) {
        let n, i;
        if (void 0 === e)
            for (const e of t)
                null != e && (void 0 === n ? e >= e && (n = i = e) : (n > e && (n = e),
                i < e && (i = e)));
        else {
            let r = -1;
            for (let o of t)
                null != (o = e(o, ++r, t)) && (void 0 === n ? o >= o && (n = i = o) : (n > o && (n = o),
                i < o && (i = o)))
        }
        return [n, i]
    };
    var ut = Array.prototype
      , lt = (ut.slice,
    ut.map,
    Math.sqrt(50))
      , ht = Math.sqrt(10)
      , ft = Math.sqrt(2)
      , dt = function(t, e, n) {
        var i, r, o, s, a = -1;
        if (n = +n,
        (t = +t) === (e = +e) && n > 0)
            return [t];
        if ((i = e < t) && (r = t,
        t = e,
        e = r),
        0 === (s = pt(t, e, n)) || !isFinite(s))
            return [];
        if (s > 0)
            for (t = Math.ceil(t / s),
            e = Math.floor(e / s),
            o = new Array(r = Math.ceil(e - t + 1)); ++a < r; )
                o[a] = (t + a) * s;
        else
            for (t = Math.floor(t * s),
            e = Math.ceil(e * s),
            o = new Array(r = Math.ceil(t - e + 1)); ++a < r; )
                o[a] = (t - a) / s;
        return i && o.reverse(),
        o
    };
    function pt(t, e, n) {
        var i = (e - t) / Math.max(0, n)
          , r = Math.floor(Math.log(i) / Math.LN10)
          , o = i / Math.pow(10, r);
        return r >= 0 ? (o >= lt ? 10 : o >= ht ? 5 : o >= ft ? 2 : 1) * Math.pow(10, r) : -Math.pow(10, -r) / (o >= lt ? 10 : o >= ht ? 5 : o >= ft ? 2 : 1)
    }
    function gt(t, e, n) {
        var i = Math.abs(e - t) / Math.max(0, n)
          , r = Math.pow(10, Math.floor(Math.log(i) / Math.LN10))
          , o = i / r;
        return o >= lt ? r *= 10 : o >= ht ? r *= 5 : o >= ft && (r *= 2),
        e < t ? -r : r
    }
    function mt(t, e) {
        let n;
        if (void 0 === e)
            for (const e of t)
                null != e && (n > e || void 0 === n && e >= e) && (n = e);
        else {
            let i = -1;
            for (let r of t)
                null != (r = e(r, ++i, t)) && (n > r || void 0 === n && r >= r) && (n = r)
        }
        return n
    }
    function vt(t, e) {
        switch (arguments.length) {
        case 0:
            break;
        case 1:
            this.range(t);
            break;
        default:
            this.range(e).domain(t)
        }
        return this
    }
    Symbol("implicit");
    var _t = function(t, e, n) {
        t.prototype = e.prototype = n,
        n.constructor = t
    };
    function yt(t, e) {
        var n = Object.create(t.prototype);
        for (var i in e)
            n[i] = e[i];
        return n
    }
    function bt() {}
    var xt = .7
      , wt = 1 / xt
      , kt = "\\s*([+-]?\\d+)\\s*"
      , Et = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*"
      , St = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*"
      , At = /^#([0-9a-f]{3,8})$/
      , Ct = new RegExp("^rgb\\(" + [kt, kt, kt] + "\\)$")
      , Tt = new RegExp("^rgb\\(" + [St, St, St] + "\\)$")
      , Lt = new RegExp("^rgba\\(" + [kt, kt, kt, Et] + "\\)$")
      , Mt = new RegExp("^rgba\\(" + [St, St, St, Et] + "\\)$")
      , Ot = new RegExp("^hsl\\(" + [Et, St, St] + "\\)$")
      , Pt = new RegExp("^hsla\\(" + [Et, St, St, Et] + "\\)$")
      , Nt = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    };
    function jt() {
        return this.rgb().formatHex()
    }
    function Dt() {
        return this.rgb().formatRgb()
    }
    function Rt(t) {
        var e, n;
        return t = (t + "").trim().toLowerCase(),
        (e = At.exec(t)) ? (n = e[1].length,
        e = parseInt(e[1], 16),
        6 === n ? $t(e) : 3 === n ? new Ht(e >> 8 & 15 | e >> 4 & 240,e >> 4 & 15 | 240 & e,(15 & e) << 4 | 15 & e,1) : 8 === n ? It(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (255 & e) / 255) : 4 === n ? It(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, ((15 & e) << 4 | 15 & e) / 255) : null) : (e = Ct.exec(t)) ? new Ht(e[1],e[2],e[3],1) : (e = Tt.exec(t)) ? new Ht(255 * e[1] / 100,255 * e[2] / 100,255 * e[3] / 100,1) : (e = Lt.exec(t)) ? It(e[1], e[2], e[3], e[4]) : (e = Mt.exec(t)) ? It(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = Ot.exec(t)) ? zt(e[1], e[2] / 100, e[3] / 100, 1) : (e = Pt.exec(t)) ? zt(e[1], e[2] / 100, e[3] / 100, e[4]) : Nt.hasOwnProperty(t) ? $t(Nt[t]) : "transparent" === t ? new Ht(NaN,NaN,NaN,0) : null
    }
    function $t(t) {
        return new Ht(t >> 16 & 255,t >> 8 & 255,255 & t,1)
    }
    function It(t, e, n, i) {
        return i <= 0 && (t = e = n = NaN),
        new Ht(t,e,n,i)
    }
    function Ut(t) {
        return t instanceof bt || (t = Rt(t)),
        t ? new Ht((t = t.rgb()).r,t.g,t.b,t.opacity) : new Ht
    }
    function Ft(t, e, n, i) {
        return 1 === arguments.length ? Ut(t) : new Ht(t,e,n,null == i ? 1 : i)
    }
    function Ht(t, e, n, i) {
        this.r = +t,
        this.g = +e,
        this.b = +n,
        this.opacity = +i
    }
    function Bt() {
        return "#" + Vt(this.r) + Vt(this.g) + Vt(this.b)
    }
    function qt() {
        var t = this.opacity;
        return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
    }
    function Vt(t) {
        return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16)
    }
    function zt(t, e, n, i) {
        return i <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN),
        new Jt(t,e,n,i)
    }
    function Wt(t) {
        if (t instanceof Jt)
            return new Jt(t.h,t.s,t.l,t.opacity);
        if (t instanceof bt || (t = Rt(t)),
        !t)
            return new Jt;
        if (t instanceof Jt)
            return t;
        var e = (t = t.rgb()).r / 255
          , n = t.g / 255
          , i = t.b / 255
          , r = Math.min(e, n, i)
          , o = Math.max(e, n, i)
          , s = NaN
          , a = o - r
          , c = (o + r) / 2;
        return a ? (s = e === o ? (n - i) / a + 6 * (n < i) : n === o ? (i - e) / a + 2 : (e - n) / a + 4,
        a /= c < .5 ? o + r : 2 - o - r,
        s *= 60) : a = c > 0 && c < 1 ? 0 : s,
        new Jt(s,a,c,t.opacity)
    }
    function Jt(t, e, n, i) {
        this.h = +t,
        this.s = +e,
        this.l = +n,
        this.opacity = +i
    }
    function Yt(t, e, n) {
        return 255 * (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e)
    }
    function Gt(t, e, n, i, r) {
        var o = t * t
          , s = o * t;
        return ((1 - 3 * t + 3 * o - s) * e + (4 - 6 * o + 3 * s) * n + (1 + 3 * t + 3 * o - 3 * s) * i + s * r) / 6
    }
    _t(bt, Rt, {
        copy: function(t) {
            return Object.assign(new this.constructor, this, t)
        },
        displayable: function() {
            return this.rgb().displayable()
        },
        hex: jt,
        formatHex: jt,
        formatHsl: function() {
            return Wt(this).formatHsl()
        },
        formatRgb: Dt,
        toString: Dt
    }),
    _t(Ht, Ft, yt(bt, {
        brighter: function(t) {
            return t = null == t ? wt : Math.pow(wt, t),
            new Ht(this.r * t,this.g * t,this.b * t,this.opacity)
        },
        darker: function(t) {
            return t = null == t ? xt : Math.pow(xt, t),
            new Ht(this.r * t,this.g * t,this.b * t,this.opacity)
        },
        rgb: function() {
            return this
        },
        displayable: function() {
            return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
        },
        hex: Bt,
        formatHex: Bt,
        formatRgb: qt,
        toString: qt
    })),
    _t(Jt, (function(t, e, n, i) {
        return 1 === arguments.length ? Wt(t) : new Jt(t,e,n,null == i ? 1 : i)
    }
    ), yt(bt, {
        brighter: function(t) {
            return t = null == t ? wt : Math.pow(wt, t),
            new Jt(this.h,this.s,this.l * t,this.opacity)
        },
        darker: function(t) {
            return t = null == t ? xt : Math.pow(xt, t),
            new Jt(this.h,this.s,this.l * t,this.opacity)
        },
        rgb: function() {
            var t = this.h % 360 + 360 * (this.h < 0)
              , e = isNaN(t) || isNaN(this.s) ? 0 : this.s
              , n = this.l
              , i = n + (n < .5 ? n : 1 - n) * e
              , r = 2 * n - i;
            return new Ht(Yt(t >= 240 ? t - 240 : t + 120, r, i),Yt(t, r, i),Yt(t < 120 ? t + 240 : t - 120, r, i),this.opacity)
        },
        displayable: function() {
            return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
        },
        formatHsl: function() {
            var t = this.opacity;
            return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "hsl(" : "hsla(") + (this.h || 0) + ", " + 100 * (this.s || 0) + "%, " + 100 * (this.l || 0) + "%" + (1 === t ? ")" : ", " + t + ")")
        }
    }));
    var Xt = function(t) {
        return function() {
            return t
        }
    };
    function Zt(t, e) {
        return function(n) {
            return t + n * e
        }
    }
    function Kt(t) {
        return 1 == (t = +t) ? Qt : function(e, n) {
            return n - e ? function(t, e, n) {
                return t = Math.pow(t, n),
                e = Math.pow(e, n) - t,
                n = 1 / n,
                function(i) {
                    return Math.pow(t + i * e, n)
                }
            }(e, n, t) : Xt(isNaN(e) ? n : e)
        }
    }
    function Qt(t, e) {
        var n = e - t;
        return n ? Zt(t, n) : Xt(isNaN(t) ? e : t)
    }
    var te = function t(e) {
        var n = Kt(e);
        function i(t, e) {
            var i = n((t = Ft(t)).r, (e = Ft(e)).r)
              , r = n(t.g, e.g)
              , o = n(t.b, e.b)
              , s = Qt(t.opacity, e.opacity);
            return function(e) {
                return t.r = i(e),
                t.g = r(e),
                t.b = o(e),
                t.opacity = s(e),
                t + ""
            }
        }
        return i.gamma = t,
        i
    }(1);
    function ee(t) {
        return function(e) {
            var n, i, r = e.length, o = new Array(r), s = new Array(r), a = new Array(r);
            for (n = 0; n < r; ++n)
                i = Ft(e[n]),
                o[n] = i.r || 0,
                s[n] = i.g || 0,
                a[n] = i.b || 0;
            return o = t(o),
            s = t(s),
            a = t(a),
            i.opacity = 1,
            function(t) {
                return i.r = o(t),
                i.g = s(t),
                i.b = a(t),
                i + ""
            }
        }
    }
    ee((function(t) {
        var e = t.length - 1;
        return function(n) {
            var i = n <= 0 ? n = 0 : n >= 1 ? (n = 1,
            e - 1) : Math.floor(n * e)
              , r = t[i]
              , o = t[i + 1]
              , s = i > 0 ? t[i - 1] : 2 * r - o
              , a = i < e - 1 ? t[i + 2] : 2 * o - r;
            return Gt((n - i / e) * e, s, r, o, a)
        }
    }
    )),
    ee((function(t) {
        var e = t.length;
        return function(n) {
            var i = Math.floor(((n %= 1) < 0 ? ++n : n) * e)
              , r = t[(i + e - 1) % e]
              , o = t[i % e]
              , s = t[(i + 1) % e]
              , a = t[(i + 2) % e];
            return Gt((n - i / e) * e, r, o, s, a)
        }
    }
    ));
    var ne = function(t, e) {
        e || (e = []);
        var n, i = t ? Math.min(e.length, t.length) : 0, r = e.slice();
        return function(o) {
            for (n = 0; n < i; ++n)
                r[n] = t[n] * (1 - o) + e[n] * o;
            return r
        }
    };
    function ie(t) {
        return ArrayBuffer.isView(t) && !(t instanceof DataView)
    }
    function re(t, e) {
        var n, i = e ? e.length : 0, r = t ? Math.min(i, t.length) : 0, o = new Array(r), s = new Array(i);
        for (n = 0; n < r; ++n)
            o[n] = he(t[n], e[n]);
        for (; n < i; ++n)
            s[n] = e[n];
        return function(t) {
            for (n = 0; n < r; ++n)
                s[n] = o[n](t);
            return s
        }
    }
    var oe = function(t, e) {
        var n = new Date;
        return t = +t,
        e = +e,
        function(i) {
            return n.setTime(t * (1 - i) + e * i),
            n
        }
    }
      , se = function(t, e) {
        return t = +t,
        e = +e,
        function(n) {
            return t * (1 - n) + e * n
        }
    }
      , ae = function(t, e) {
        var n, i = {}, r = {};
        for (n in null !== t && "object" == typeof t || (t = {}),
        null !== e && "object" == typeof e || (e = {}),
        e)
            n in t ? i[n] = he(t[n], e[n]) : r[n] = e[n];
        return function(t) {
            for (n in i)
                r[n] = i[n](t);
            return r
        }
    }
      , ce = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g
      , ue = new RegExp(ce.source,"g");
    var le = function(t, e) {
        var n, i, r, o = ce.lastIndex = ue.lastIndex = 0, s = -1, a = [], c = [];
        for (t += "",
        e += ""; (n = ce.exec(t)) && (i = ue.exec(e)); )
            (r = i.index) > o && (r = e.slice(o, r),
            a[s] ? a[s] += r : a[++s] = r),
            (n = n[0]) === (i = i[0]) ? a[s] ? a[s] += i : a[++s] = i : (a[++s] = null,
            c.push({
                i: s,
                x: se(n, i)
            })),
            o = ue.lastIndex;
        return o < e.length && (r = e.slice(o),
        a[s] ? a[s] += r : a[++s] = r),
        a.length < 2 ? c[0] ? function(t) {
            return function(e) {
                return t(e) + ""
            }
        }(c[0].x) : function(t) {
            return function() {
                return t
            }
        }(e) : (e = c.length,
        function(t) {
            for (var n, i = 0; i < e; ++i)
                a[(n = c[i]).i] = n.x(t);
            return a.join("")
        }
        )
    }
      , he = function(t, e) {
        var n, i = typeof e;
        return null == e || "boolean" === i ? Xt(e) : ("number" === i ? se : "string" === i ? (n = Rt(e)) ? (e = n,
        te) : le : e instanceof Rt ? te : e instanceof Date ? oe : ie(e) ? ne : Array.isArray(e) ? re : "function" != typeof e.valueOf && "function" != typeof e.toString || isNaN(e) ? ae : se)(t, e)
    }
      , fe = function(t, e) {
        return t = +t,
        e = +e,
        function(n) {
            return Math.round(t * (1 - n) + e * n)
        }
    }
      , de = function(t) {
        return +t
    }
      , pe = [0, 1];
    function ge(t) {
        return t
    }
    function me(t, e) {
        return (e -= t = +t) ? function(n) {
            return (n - t) / e
        }
        : (n = isNaN(e) ? NaN : .5,
        function() {
            return n
        }
        );
        var n
    }
    function ve(t) {
        var e, n = t[0], i = t[t.length - 1];
        return n > i && (e = n,
        n = i,
        i = e),
        function(t) {
            return Math.max(n, Math.min(i, t))
        }
    }
    function _e(t, e, n) {
        var i = t[0]
          , r = t[1]
          , o = e[0]
          , s = e[1];
        return r < i ? (i = me(r, i),
        o = n(s, o)) : (i = me(i, r),
        o = n(o, s)),
        function(t) {
            return o(i(t))
        }
    }
    function ye(t, e, n) {
        var i = Math.min(t.length, e.length) - 1
          , r = new Array(i)
          , o = new Array(i)
          , s = -1;
        for (t[i] < t[0] && (t = t.slice().reverse(),
        e = e.slice().reverse()); ++s < i; )
            r[s] = me(t[s], t[s + 1]),
            o[s] = n(e[s], e[s + 1]);
        return function(e) {
            var n = at(t, e, 1, i) - 1;
            return o[n](r[n](e))
        }
    }
    function be(t, e) {
        return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())
    }
    function xe() {
        var t, e, n, i, r, o, s = pe, a = pe, c = he, u = ge;
        function l() {
            return i = Math.min(s.length, a.length) > 2 ? ye : _e,
            r = o = null,
            h
        }
        function h(e) {
            return isNaN(e = +e) ? n : (r || (r = i(s.map(t), a, c)))(t(u(e)))
        }
        return h.invert = function(n) {
            return u(e((o || (o = i(a, s.map(t), se)))(n)))
        }
        ,
        h.domain = function(t) {
            return arguments.length ? (s = Array.from(t, de),
            u === ge || (u = ve(s)),
            l()) : s.slice()
        }
        ,
        h.range = function(t) {
            return arguments.length ? (a = Array.from(t),
            l()) : a.slice()
        }
        ,
        h.rangeRound = function(t) {
            return a = Array.from(t),
            c = fe,
            l()
        }
        ,
        h.clamp = function(t) {
            return arguments.length ? (u = t ? ve(s) : ge,
            h) : u !== ge
        }
        ,
        h.interpolate = function(t) {
            return arguments.length ? (c = t,
            l()) : c
        }
        ,
        h.unknown = function(t) {
            return arguments.length ? (n = t,
            h) : n
        }
        ,
        function(n, i) {
            return t = n,
            e = i,
            l()
        }
    }
    function we(t, e) {
        return xe()(t, e)
    }
    var ke = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
    function Ee(t) {
        if (!(e = ke.exec(t)))
            throw new Error("invalid format: " + t);
        var e;
        return new Se({
            fill: e[1],
            align: e[2],
            sign: e[3],
            symbol: e[4],
            zero: e[5],
            width: e[6],
            comma: e[7],
            precision: e[8] && e[8].slice(1),
            trim: e[9],
            type: e[10]
        })
    }
    function Se(t) {
        this.fill = void 0 === t.fill ? " " : t.fill + "",
        this.align = void 0 === t.align ? ">" : t.align + "",
        this.sign = void 0 === t.sign ? "-" : t.sign + "",
        this.symbol = void 0 === t.symbol ? "" : t.symbol + "",
        this.zero = !!t.zero,
        this.width = void 0 === t.width ? void 0 : +t.width,
        this.comma = !!t.comma,
        this.precision = void 0 === t.precision ? void 0 : +t.precision,
        this.trim = !!t.trim,
        this.type = void 0 === t.type ? "" : t.type + ""
    }
    Ee.prototype = Se.prototype,
    Se.prototype.toString = function() {
        return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    }
    ;
    function Ae(t, e) {
        if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0)
            return null;
        var n, i = t.slice(0, n);
        return [i.length > 1 ? i[0] + i.slice(2) : i, +t.slice(n + 1)]
    }
    var Ce, Te, Le, Me, Oe = function(t) {
        return (t = Ae(Math.abs(t))) ? t[1] : NaN
    }, Pe = function(t, e) {
        var n = Ae(t, e);
        if (!n)
            return t + "";
        var i = n[0]
          , r = n[1];
        return r < 0 ? "0." + new Array(-r).join("0") + i : i.length > r + 1 ? i.slice(0, r + 1) + "." + i.slice(r + 1) : i + new Array(r - i.length + 2).join("0")
    }, Ne = {
        "%": function(t, e) {
            return (100 * t).toFixed(e)
        },
        b: function(t) {
            return Math.round(t).toString(2)
        },
        c: function(t) {
            return t + ""
        },
        d: function(t) {
            return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10)
        },
        e: function(t, e) {
            return t.toExponential(e)
        },
        f: function(t, e) {
            return t.toFixed(e)
        },
        g: function(t, e) {
            return t.toPrecision(e)
        },
        o: function(t) {
            return Math.round(t).toString(8)
        },
        p: function(t, e) {
            return Pe(100 * t, e)
        },
        r: Pe,
        s: function(t, e) {
            var n = Ae(t, e);
            if (!n)
                return t + "";
            var i = n[0]
              , r = n[1]
              , o = r - (Ce = 3 * Math.max(-8, Math.min(8, Math.floor(r / 3)))) + 1
              , s = i.length;
            return o === s ? i : o > s ? i + new Array(o - s + 1).join("0") : o > 0 ? i.slice(0, o) + "." + i.slice(o) : "0." + new Array(1 - o).join("0") + Ae(t, Math.max(0, e + o - 1))[0]
        },
        X: function(t) {
            return Math.round(t).toString(16).toUpperCase()
        },
        x: function(t) {
            return Math.round(t).toString(16)
        }
    }, je = function(t) {
        return t
    }, De = Array.prototype.map, Re = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
    Te = function(t) {
        var e, n, i = void 0 === t.grouping || void 0 === t.thousands ? je : (e = De.call(t.grouping, Number),
        n = t.thousands + "",
        function(t, i) {
            for (var r = t.length, o = [], s = 0, a = e[0], c = 0; r > 0 && a > 0 && (c + a + 1 > i && (a = Math.max(1, i - c)),
            o.push(t.substring(r -= a, r + a)),
            !((c += a + 1) > i)); )
                a = e[s = (s + 1) % e.length];
            return o.reverse().join(n)
        }
        ), r = void 0 === t.currency ? "" : t.currency[0] + "", o = void 0 === t.currency ? "" : t.currency[1] + "", s = void 0 === t.decimal ? "." : t.decimal + "", a = void 0 === t.numerals ? je : function(t) {
            return function(e) {
                return e.replace(/[0-9]/g, (function(e) {
                    return t[+e]
                }
                ))
            }
        }(De.call(t.numerals, String)), c = void 0 === t.percent ? "%" : t.percent + "", u = void 0 === t.minus ? "-" : t.minus + "", l = void 0 === t.nan ? "NaN" : t.nan + "";
        function h(t) {
            var e = (t = Ee(t)).fill
              , n = t.align
              , h = t.sign
              , f = t.symbol
              , d = t.zero
              , p = t.width
              , g = t.comma
              , m = t.precision
              , v = t.trim
              , _ = t.type;
            "n" === _ ? (g = !0,
            _ = "g") : Ne[_] || (void 0 === m && (m = 12),
            v = !0,
            _ = "g"),
            (d || "0" === e && "=" === n) && (d = !0,
            e = "0",
            n = "=");
            var y = "$" === f ? r : "#" === f && /[boxX]/.test(_) ? "0" + _.toLowerCase() : ""
              , b = "$" === f ? o : /[%p]/.test(_) ? c : ""
              , x = Ne[_]
              , w = /[defgprs%]/.test(_);
            function k(t) {
                var r, o, c, f = y, k = b;
                if ("c" === _)
                    k = x(t) + k,
                    t = "";
                else {
                    var E = (t = +t) < 0 || 1 / t < 0;
                    if (t = isNaN(t) ? l : x(Math.abs(t), m),
                    v && (t = function(t) {
                        t: for (var e, n = t.length, i = 1, r = -1; i < n; ++i)
                            switch (t[i]) {
                            case ".":
                                r = e = i;
                                break;
                            case "0":
                                0 === r && (r = i),
                                e = i;
                                break;
                            default:
                                if (!+t[i])
                                    break t;
                                r > 0 && (r = 0)
                            }
                        return r > 0 ? t.slice(0, r) + t.slice(e + 1) : t
                    }(t)),
                    E && 0 == +t && "+" !== h && (E = !1),
                    f = (E ? "(" === h ? h : u : "-" === h || "(" === h ? "" : h) + f,
                    k = ("s" === _ ? Re[8 + Ce / 3] : "") + k + (E && "(" === h ? ")" : ""),
                    w)
                        for (r = -1,
                        o = t.length; ++r < o; )
                            if (48 > (c = t.charCodeAt(r)) || c > 57) {
                                k = (46 === c ? s + t.slice(r + 1) : t.slice(r)) + k,
                                t = t.slice(0, r);
                                break
                            }
                }
                g && !d && (t = i(t, 1 / 0));
                var S = f.length + t.length + k.length
                  , A = S < p ? new Array(p - S + 1).join(e) : "";
                switch (g && d && (t = i(A + t, A.length ? p - k.length : 1 / 0),
                A = ""),
                n) {
                case "<":
                    t = f + t + k + A;
                    break;
                case "=":
                    t = f + A + t + k;
                    break;
                case "^":
                    t = A.slice(0, S = A.length >> 1) + f + t + k + A.slice(S);
                    break;
                default:
                    t = A + f + t + k
                }
                return a(t)
            }
            return m = void 0 === m ? 6 : /[gprs]/.test(_) ? Math.max(1, Math.min(21, m)) : Math.max(0, Math.min(20, m)),
            k.toString = function() {
                return t + ""
            }
            ,
            k
        }
        return {
            format: h,
            formatPrefix: function(t, e) {
                var n = h(((t = Ee(t)).type = "f",
                t))
                  , i = 3 * Math.max(-8, Math.min(8, Math.floor(Oe(e) / 3)))
                  , r = Math.pow(10, -i)
                  , o = Re[8 + i / 3];
                return function(t) {
                    return n(r * t) + o
                }
            }
        }
    }({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["$", ""],
        minus: "-"
    }),
    Le = Te.format,
    Me = Te.formatPrefix;
    var $e = function(t, e, n, i) {
        var r, o = gt(t, e, n);
        switch ((i = Ee(null == i ? ",f" : i)).type) {
        case "s":
            var s = Math.max(Math.abs(t), Math.abs(e));
            return null != i.precision || isNaN(r = function(t, e) {
                return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Oe(e) / 3))) - Oe(Math.abs(t)))
            }(o, s)) || (i.precision = r),
            Me(i, s);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
            null != i.precision || isNaN(r = function(t, e) {
                return t = Math.abs(t),
                e = Math.abs(e) - t,
                Math.max(0, Oe(e) - Oe(t)) + 1
            }(o, Math.max(Math.abs(t), Math.abs(e)))) || (i.precision = r - ("e" === i.type));
            break;
        case "f":
        case "%":
            null != i.precision || isNaN(r = function(t) {
                return Math.max(0, -Oe(Math.abs(t)))
            }(o)) || (i.precision = r - 2 * ("%" === i.type))
        }
        return Le(i)
    };
    function Ie(t) {
        var e = t.domain;
        return t.ticks = function(t) {
            var n = e();
            return dt(n[0], n[n.length - 1], null == t ? 10 : t)
        }
        ,
        t.tickFormat = function(t, n) {
            var i = e();
            return $e(i[0], i[i.length - 1], null == t ? 10 : t, n)
        }
        ,
        t.nice = function(n) {
            null == n && (n = 10);
            var i, r = e(), o = 0, s = r.length - 1, a = r[o], c = r[s];
            return c < a && (i = a,
            a = c,
            c = i,
            i = o,
            o = s,
            s = i),
            (i = pt(a, c, n)) > 0 ? i = pt(a = Math.floor(a / i) * i, c = Math.ceil(c / i) * i, n) : i < 0 && (i = pt(a = Math.ceil(a * i) / i, c = Math.floor(c * i) / i, n)),
            i > 0 ? (r[o] = Math.floor(a / i) * i,
            r[s] = Math.ceil(c / i) * i,
            e(r)) : i < 0 && (r[o] = Math.ceil(a * i) / i,
            r[s] = Math.floor(c * i) / i,
            e(r)),
            t
        }
        ,
        t
    }
    var Ue = function(t, e) {
        var n, i = 0, r = (t = t.slice()).length - 1, o = t[i], s = t[r];
        return s < o && (n = i,
        i = r,
        r = n,
        n = o,
        o = s,
        s = n),
        t[i] = e.floor(o),
        t[r] = e.ceil(s),
        t
    };
    var Fe = new Date
      , He = new Date;
    function Be(t, e, n, i) {
        function r(e) {
            return t(e = new Date(+e)),
            e
        }
        return r.floor = r,
        r.ceil = function(n) {
            return t(n = new Date(n - 1)),
            e(n, 1),
            t(n),
            n
        }
        ,
        r.round = function(t) {
            var e = r(t)
              , n = r.ceil(t);
            return t - e < n - t ? e : n
        }
        ,
        r.offset = function(t, n) {
            return e(t = new Date(+t), null == n ? 1 : Math.floor(n)),
            t
        }
        ,
        r.range = function(n, i, o) {
            var s, a = [];
            if (n = r.ceil(n),
            o = null == o ? 1 : Math.floor(o),
            !(n < i && o > 0))
                return a;
            do {
                a.push(s = new Date(+n)),
                e(n, o),
                t(n)
            } while (s < n && n < i);
            return a
        }
        ,
        r.filter = function(n) {
            return Be((function(e) {
                if (e >= e)
                    for (; t(e),
                    !n(e); )
                        e.setTime(e - 1)
            }
            ), (function(t, i) {
                if (t >= t)
                    if (i < 0)
                        for (; ++i <= 0; )
                            for (; e(t, -1),
                            !n(t); )
                                ;
                    else
                        for (; --i >= 0; )
                            for (; e(t, 1),
                            !n(t); )
                                ;
            }
            ))
        }
        ,
        n && (r.count = function(e, i) {
            return Fe.setTime(+e),
            He.setTime(+i),
            t(Fe),
            t(He),
            Math.floor(n(Fe, He))
        }
        ,
        r.every = function(t) {
            return t = Math.floor(t),
            isFinite(t) && t > 0 ? t > 1 ? r.filter(i ? function(e) {
                return i(e) % t == 0
            }
            : function(e) {
                return r.count(0, e) % t == 0
            }
            ) : r : null
        }
        ),
        r
    }
    var qe = Be((function() {}
    ), (function(t, e) {
        t.setTime(+t + e)
    }
    ), (function(t, e) {
        return e - t
    }
    ));
    qe.every = function(t) {
        return t = Math.floor(t),
        isFinite(t) && t > 0 ? t > 1 ? Be((function(e) {
            e.setTime(Math.floor(e / t) * t)
        }
        ), (function(e, n) {
            e.setTime(+e + n * t)
        }
        ), (function(e, n) {
            return (n - e) / t
        }
        )) : qe : null
    }
    ;
    var Ve = qe
      , ze = (qe.range,
    1e3)
      , We = 6e4
      , Je = 36e5
      , Ye = 864e5
      , Ge = 6048e5
      , Xe = Be((function(t) {
        t.setTime(t - t.getMilliseconds())
    }
    ), (function(t, e) {
        t.setTime(+t + e * ze)
    }
    ), (function(t, e) {
        return (e - t) / ze
    }
    ), (function(t) {
        return t.getUTCSeconds()
    }
    ))
      , Ze = Xe
      , Ke = (Xe.range,
    Be((function(t) {
        t.setTime(t - t.getMilliseconds() - t.getSeconds() * ze)
    }
    ), (function(t, e) {
        t.setTime(+t + e * We)
    }
    ), (function(t, e) {
        return (e - t) / We
    }
    ), (function(t) {
        return t.getMinutes()
    }
    )))
      , Qe = (Ke.range,
    Be((function(t) {
        t.setTime(t - t.getMilliseconds() - t.getSeconds() * ze - t.getMinutes() * We)
    }
    ), (function(t, e) {
        t.setTime(+t + e * Je)
    }
    ), (function(t, e) {
        return (e - t) / Je
    }
    ), (function(t) {
        return t.getHours()
    }
    )))
      , tn = (Qe.range,
    Be((function(t) {
        t.setHours(0, 0, 0, 0)
    }
    ), (function(t, e) {
        t.setDate(t.getDate() + e)
    }
    ), (function(t, e) {
        return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * We) / Ye
    }
    ), (function(t) {
        return t.getDate() - 1
    }
    )))
      , en = tn;
    tn.range;
    function nn(t) {
        return Be((function(e) {
            e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7),
            e.setHours(0, 0, 0, 0)
        }
        ), (function(t, e) {
            t.setDate(t.getDate() + 7 * e)
        }
        ), (function(t, e) {
            return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * We) / Ge
        }
        ))
    }
    var rn = nn(0)
      , on = nn(1)
      , sn = nn(2)
      , an = nn(3)
      , cn = nn(4)
      , un = nn(5)
      , ln = nn(6)
      , hn = (rn.range,
    on.range,
    sn.range,
    an.range,
    cn.range,
    un.range,
    ln.range,
    Be((function(t) {
        t.setDate(1),
        t.setHours(0, 0, 0, 0)
    }
    ), (function(t, e) {
        t.setMonth(t.getMonth() + e)
    }
    ), (function(t, e) {
        return e.getMonth() - t.getMonth() + 12 * (e.getFullYear() - t.getFullYear())
    }
    ), (function(t) {
        return t.getMonth()
    }
    )))
      , fn = hn
      , dn = (hn.range,
    Be((function(t) {
        t.setMonth(0, 1),
        t.setHours(0, 0, 0, 0)
    }
    ), (function(t, e) {
        t.setFullYear(t.getFullYear() + e)
    }
    ), (function(t, e) {
        return e.getFullYear() - t.getFullYear()
    }
    ), (function(t) {
        return t.getFullYear()
    }
    )));
    dn.every = function(t) {
        return isFinite(t = Math.floor(t)) && t > 0 ? Be((function(e) {
            e.setFullYear(Math.floor(e.getFullYear() / t) * t),
            e.setMonth(0, 1),
            e.setHours(0, 0, 0, 0)
        }
        ), (function(e, n) {
            e.setFullYear(e.getFullYear() + n * t)
        }
        )) : null
    }
    ;
    var pn = dn
      , gn = (dn.range,
    Be((function(t) {
        t.setUTCSeconds(0, 0)
    }
    ), (function(t, e) {
        t.setTime(+t + e * We)
    }
    ), (function(t, e) {
        return (e - t) / We
    }
    ), (function(t) {
        return t.getUTCMinutes()
    }
    )))
      , mn = gn
      , vn = (gn.range,
    Be((function(t) {
        t.setUTCMinutes(0, 0, 0)
    }
    ), (function(t, e) {
        t.setTime(+t + e * Je)
    }
    ), (function(t, e) {
        return (e - t) / Je
    }
    ), (function(t) {
        return t.getUTCHours()
    }
    )))
      , _n = vn
      , yn = (vn.range,
    Be((function(t) {
        t.setUTCHours(0, 0, 0, 0)
    }
    ), (function(t, e) {
        t.setUTCDate(t.getUTCDate() + e)
    }
    ), (function(t, e) {
        return (e - t) / Ye
    }
    ), (function(t) {
        return t.getUTCDate() - 1
    }
    )))
      , bn = yn;
    yn.range;
    function xn(t) {
        return Be((function(e) {
            e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7),
            e.setUTCHours(0, 0, 0, 0)
        }
        ), (function(t, e) {
            t.setUTCDate(t.getUTCDate() + 7 * e)
        }
        ), (function(t, e) {
            return (e - t) / Ge
        }
        ))
    }
    var wn = xn(0)
      , kn = xn(1)
      , En = xn(2)
      , Sn = xn(3)
      , An = xn(4)
      , Cn = xn(5)
      , Tn = xn(6)
      , Ln = (wn.range,
    kn.range,
    En.range,
    Sn.range,
    An.range,
    Cn.range,
    Tn.range,
    Be((function(t) {
        t.setUTCDate(1),
        t.setUTCHours(0, 0, 0, 0)
    }
    ), (function(t, e) {
        t.setUTCMonth(t.getUTCMonth() + e)
    }
    ), (function(t, e) {
        return e.getUTCMonth() - t.getUTCMonth() + 12 * (e.getUTCFullYear() - t.getUTCFullYear())
    }
    ), (function(t) {
        return t.getUTCMonth()
    }
    )))
      , Mn = Ln
      , On = (Ln.range,
    Be((function(t) {
        t.setUTCMonth(0, 1),
        t.setUTCHours(0, 0, 0, 0)
    }
    ), (function(t, e) {
        t.setUTCFullYear(t.getUTCFullYear() + e)
    }
    ), (function(t, e) {
        return e.getUTCFullYear() - t.getUTCFullYear()
    }
    ), (function(t) {
        return t.getUTCFullYear()
    }
    )));
    On.every = function(t) {
        return isFinite(t = Math.floor(t)) && t > 0 ? Be((function(e) {
            e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t),
            e.setUTCMonth(0, 1),
            e.setUTCHours(0, 0, 0, 0)
        }
        ), (function(e, n) {
            e.setUTCFullYear(e.getUTCFullYear() + n * t)
        }
        )) : null
    }
    ;
    var Pn = On;
    On.range;
    function Nn(t) {
        if (0 <= t.y && t.y < 100) {
            var e = new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);
            return e.setFullYear(t.y),
            e
        }
        return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)
    }
    function jn(t) {
        if (0 <= t.y && t.y < 100) {
            var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
            return e.setUTCFullYear(t.y),
            e
        }
        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
    }
    function Dn(t) {
        return {
            y: t,
            m: 0,
            d: 1,
            H: 0,
            M: 0,
            S: 0,
            L: 0
        }
    }
    var Rn, $n, In, Un, Fn = {
        "-": "",
        _: " ",
        0: "0"
    }, Hn = /^\s*\d+/, Bn = /^%/, qn = /[\\^$*+?|[\]().{}]/g;
    function Vn(t, e, n) {
        var i = t < 0 ? "-" : ""
          , r = (i ? -t : t) + ""
          , o = r.length;
        return i + (o < n ? new Array(n - o + 1).join(e) + r : r)
    }
    function zn(t) {
        return t.replace(qn, "\\$&")
    }
    function Wn(t) {
        return new RegExp("^(?:" + t.map(zn).join("|") + ")","i")
    }
    function Jn(t) {
        for (var e = {}, n = -1, i = t.length; ++n < i; )
            e[t[n].toLowerCase()] = n;
        return e
    }
    function Yn(t, e, n) {
        var i = Hn.exec(e.slice(n, n + 1));
        return i ? (t.w = +i[0],
        n + i[0].length) : -1
    }
    function Gn(t, e, n) {
        var i = Hn.exec(e.slice(n, n + 1));
        return i ? (t.u = +i[0],
        n + i[0].length) : -1
    }
    function Xn(t, e, n) {
        var i = Hn.exec(e.slice(n, n + 2));
        return i ? (t.U = +i[0],
        n + i[0].length) : -1
    }
    function Zn(t, e, n) {
        var i = Hn.exec(e.slice(n, n + 2));
        return i ? (t.V = +i[0],
        n + i[0].length) : -1
    }
    function Kn(t, e, n) {
        var i = Hn.exec(e.slice(n, n + 2));
        return i ? (t.W = +i[0],
        n + i[0].length) : -1
    }
    function Qn(t, e, n) {
        var i = Hn.exec(e.slice(n, n + 4));
        return i ? (t.y = +i[0],
        n + i[0].length) : -1
    }
    function ti(t, e, n) {
        var i = Hn.exec(e.slice(n, n + 2));
        return i ? (t.y = +i[0] + (+i[0] > 68 ? 1900 : 2e3),
        n + i[0].length) : -1
    }
    function ei(t, e, n) {
        var i = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
        return i ? (t.Z = i[1] ? 0 : -(i[2] + (i[3] || "00")),
        n + i[0].length) : -1
    }
    function ni(t, e, n) {
        var i = Hn.exec(e.slice(n, n + 2));
        return i ? (t.m = i[0] - 1,
        n + i[0].length) : -1
    }
    function ii(t, e, n) {
        var i = Hn.exec(e.slice(n, n + 2));
        return i ? (t.d = +i[0],
        n + i[0].length) : -1
    }
    function ri(t, e, n) {
        var i = Hn.exec(e.slice(n, n + 3));
        return i ? (t.m = 0,
        t.d = +i[0],
        n + i[0].length) : -1
    }
    function oi(t, e, n) {
        var i = Hn.exec(e.slice(n, n + 2));
        return i ? (t.H = +i[0],
        n + i[0].length) : -1
    }
    function si(t, e, n) {
        var i = Hn.exec(e.slice(n, n + 2));
        return i ? (t.M = +i[0],
        n + i[0].length) : -1
    }
    function ai(t, e, n) {
        var i = Hn.exec(e.slice(n, n + 2));
        return i ? (t.S = +i[0],
        n + i[0].length) : -1
    }
    function ci(t, e, n) {
        var i = Hn.exec(e.slice(n, n + 3));
        return i ? (t.L = +i[0],
        n + i[0].length) : -1
    }
    function ui(t, e, n) {
        var i = Hn.exec(e.slice(n, n + 6));
        return i ? (t.L = Math.floor(i[0] / 1e3),
        n + i[0].length) : -1
    }
    function li(t, e, n) {
        var i = Bn.exec(e.slice(n, n + 1));
        return i ? n + i[0].length : -1
    }
    function hi(t, e, n) {
        var i = Hn.exec(e.slice(n));
        return i ? (t.Q = +i[0],
        n + i[0].length) : -1
    }
    function fi(t, e, n) {
        var i = Hn.exec(e.slice(n));
        return i ? (t.Q = 1e3 * +i[0],
        n + i[0].length) : -1
    }
    function di(t, e) {
        return Vn(t.getDate(), e, 2)
    }
    function pi(t, e) {
        return Vn(t.getHours(), e, 2)
    }
    function gi(t, e) {
        return Vn(t.getHours() % 12 || 12, e, 2)
    }
    function mi(t, e) {
        return Vn(1 + en.count(pn(t), t), e, 3)
    }
    function vi(t, e) {
        return Vn(t.getMilliseconds(), e, 3)
    }
    function _i(t, e) {
        return vi(t, e) + "000"
    }
    function yi(t, e) {
        return Vn(t.getMonth() + 1, e, 2)
    }
    function bi(t, e) {
        return Vn(t.getMinutes(), e, 2)
    }
    function xi(t, e) {
        return Vn(t.getSeconds(), e, 2)
    }
    function wi(t) {
        var e = t.getDay();
        return 0 === e ? 7 : e
    }
    function ki(t, e) {
        return Vn(rn.count(pn(t), t), e, 2)
    }
    function Ei(t, e) {
        var n = t.getDay();
        return t = n >= 4 || 0 === n ? cn(t) : cn.ceil(t),
        Vn(cn.count(pn(t), t) + (4 === pn(t).getDay()), e, 2)
    }
    function Si(t) {
        return t.getDay()
    }
    function Ai(t, e) {
        return Vn(on.count(pn(t), t), e, 2)
    }
    function Ci(t, e) {
        return Vn(t.getFullYear() % 100, e, 2)
    }
    function Ti(t, e) {
        return Vn(t.getFullYear() % 1e4, e, 4)
    }
    function Li(t) {
        var e = t.getTimezoneOffset();
        return (e > 0 ? "-" : (e *= -1,
        "+")) + Vn(e / 60 | 0, "0", 2) + Vn(e % 60, "0", 2)
    }
    function Mi(t, e) {
        return Vn(t.getUTCDate(), e, 2)
    }
    function Oi(t, e) {
        return Vn(t.getUTCHours(), e, 2)
    }
    function Pi(t, e) {
        return Vn(t.getUTCHours() % 12 || 12, e, 2)
    }
    function Ni(t, e) {
        return Vn(1 + bn.count(Pn(t), t), e, 3)
    }
    function ji(t, e) {
        return Vn(t.getUTCMilliseconds(), e, 3)
    }
    function Di(t, e) {
        return ji(t, e) + "000"
    }
    function Ri(t, e) {
        return Vn(t.getUTCMonth() + 1, e, 2)
    }
    function $i(t, e) {
        return Vn(t.getUTCMinutes(), e, 2)
    }
    function Ii(t, e) {
        return Vn(t.getUTCSeconds(), e, 2)
    }
    function Ui(t) {
        var e = t.getUTCDay();
        return 0 === e ? 7 : e
    }
    function Fi(t, e) {
        return Vn(wn.count(Pn(t), t), e, 2)
    }
    function Hi(t, e) {
        var n = t.getUTCDay();
        return t = n >= 4 || 0 === n ? An(t) : An.ceil(t),
        Vn(An.count(Pn(t), t) + (4 === Pn(t).getUTCDay()), e, 2)
    }
    function Bi(t) {
        return t.getUTCDay()
    }
    function qi(t, e) {
        return Vn(kn.count(Pn(t), t), e, 2)
    }
    function Vi(t, e) {
        return Vn(t.getUTCFullYear() % 100, e, 2)
    }
    function zi(t, e) {
        return Vn(t.getUTCFullYear() % 1e4, e, 4)
    }
    function Wi() {
        return "+0000"
    }
    function Ji() {
        return "%"
    }
    function Yi(t) {
        return +t
    }
    function Gi(t) {
        return Math.floor(+t / 1e3)
    }
    !function(t) {
        Rn = function(t) {
            var e = t.dateTime
              , n = t.date
              , i = t.time
              , r = t.periods
              , o = t.days
              , s = t.shortDays
              , a = t.months
              , c = t.shortMonths
              , u = Wn(r)
              , l = Jn(r)
              , h = Wn(o)
              , f = Jn(o)
              , d = Wn(s)
              , p = Jn(s)
              , g = Wn(a)
              , m = Jn(a)
              , v = Wn(c)
              , _ = Jn(c)
              , y = {
                a: function(t) {
                    return s[t.getDay()]
                },
                A: function(t) {
                    return o[t.getDay()]
                },
                b: function(t) {
                    return c[t.getMonth()]
                },
                B: function(t) {
                    return a[t.getMonth()]
                },
                c: null,
                d: di,
                e: di,
                f: _i,
                H: pi,
                I: gi,
                j: mi,
                L: vi,
                m: yi,
                M: bi,
                p: function(t) {
                    return r[+(t.getHours() >= 12)]
                },
                Q: Yi,
                s: Gi,
                S: xi,
                u: wi,
                U: ki,
                V: Ei,
                w: Si,
                W: Ai,
                x: null,
                X: null,
                y: Ci,
                Y: Ti,
                Z: Li,
                "%": Ji
            }
              , b = {
                a: function(t) {
                    return s[t.getUTCDay()]
                },
                A: function(t) {
                    return o[t.getUTCDay()]
                },
                b: function(t) {
                    return c[t.getUTCMonth()]
                },
                B: function(t) {
                    return a[t.getUTCMonth()]
                },
                c: null,
                d: Mi,
                e: Mi,
                f: Di,
                H: Oi,
                I: Pi,
                j: Ni,
                L: ji,
                m: Ri,
                M: $i,
                p: function(t) {
                    return r[+(t.getUTCHours() >= 12)]
                },
                Q: Yi,
                s: Gi,
                S: Ii,
                u: Ui,
                U: Fi,
                V: Hi,
                w: Bi,
                W: qi,
                x: null,
                X: null,
                y: Vi,
                Y: zi,
                Z: Wi,
                "%": Ji
            }
              , x = {
                a: function(t, e, n) {
                    var i = d.exec(e.slice(n));
                    return i ? (t.w = p[i[0].toLowerCase()],
                    n + i[0].length) : -1
                },
                A: function(t, e, n) {
                    var i = h.exec(e.slice(n));
                    return i ? (t.w = f[i[0].toLowerCase()],
                    n + i[0].length) : -1
                },
                b: function(t, e, n) {
                    var i = v.exec(e.slice(n));
                    return i ? (t.m = _[i[0].toLowerCase()],
                    n + i[0].length) : -1
                },
                B: function(t, e, n) {
                    var i = g.exec(e.slice(n));
                    return i ? (t.m = m[i[0].toLowerCase()],
                    n + i[0].length) : -1
                },
                c: function(t, n, i) {
                    return E(t, e, n, i)
                },
                d: ii,
                e: ii,
                f: ui,
                H: oi,
                I: oi,
                j: ri,
                L: ci,
                m: ni,
                M: si,
                p: function(t, e, n) {
                    var i = u.exec(e.slice(n));
                    return i ? (t.p = l[i[0].toLowerCase()],
                    n + i[0].length) : -1
                },
                Q: hi,
                s: fi,
                S: ai,
                u: Gn,
                U: Xn,
                V: Zn,
                w: Yn,
                W: Kn,
                x: function(t, e, i) {
                    return E(t, n, e, i)
                },
                X: function(t, e, n) {
                    return E(t, i, e, n)
                },
                y: ti,
                Y: Qn,
                Z: ei,
                "%": li
            };
            function w(t, e) {
                return function(n) {
                    var i, r, o, s = [], a = -1, c = 0, u = t.length;
                    for (n instanceof Date || (n = new Date(+n)); ++a < u; )
                        37 === t.charCodeAt(a) && (s.push(t.slice(c, a)),
                        null != (r = Fn[i = t.charAt(++a)]) ? i = t.charAt(++a) : r = "e" === i ? " " : "0",
                        (o = e[i]) && (i = o(n, r)),
                        s.push(i),
                        c = a + 1);
                    return s.push(t.slice(c, a)),
                    s.join("")
                }
            }
            function k(t, e) {
                return function(n) {
                    var i, r, o = Dn(1900);
                    if (E(o, t, n += "", 0) != n.length)
                        return null;
                    if ("Q"in o)
                        return new Date(o.Q);
                    if ("p"in o && (o.H = o.H % 12 + 12 * o.p),
                    "V"in o) {
                        if (o.V < 1 || o.V > 53)
                            return null;
                        "w"in o || (o.w = 1),
                        "Z"in o ? (r = (i = jn(Dn(o.y))).getUTCDay(),
                        i = r > 4 || 0 === r ? kn.ceil(i) : kn(i),
                        i = bn.offset(i, 7 * (o.V - 1)),
                        o.y = i.getUTCFullYear(),
                        o.m = i.getUTCMonth(),
                        o.d = i.getUTCDate() + (o.w + 6) % 7) : (r = (i = e(Dn(o.y))).getDay(),
                        i = r > 4 || 0 === r ? on.ceil(i) : on(i),
                        i = en.offset(i, 7 * (o.V - 1)),
                        o.y = i.getFullYear(),
                        o.m = i.getMonth(),
                        o.d = i.getDate() + (o.w + 6) % 7)
                    } else
                        ("W"in o || "U"in o) && ("w"in o || (o.w = "u"in o ? o.u % 7 : "W"in o ? 1 : 0),
                        r = "Z"in o ? jn(Dn(o.y)).getUTCDay() : e(Dn(o.y)).getDay(),
                        o.m = 0,
                        o.d = "W"in o ? (o.w + 6) % 7 + 7 * o.W - (r + 5) % 7 : o.w + 7 * o.U - (r + 6) % 7);
                    return "Z"in o ? (o.H += o.Z / 100 | 0,
                    o.M += o.Z % 100,
                    jn(o)) : e(o)
                }
            }
            function E(t, e, n, i) {
                for (var r, o, s = 0, a = e.length, c = n.length; s < a; ) {
                    if (i >= c)
                        return -1;
                    if (37 === (r = e.charCodeAt(s++))) {
                        if (r = e.charAt(s++),
                        !(o = x[r in Fn ? e.charAt(s++) : r]) || (i = o(t, n, i)) < 0)
                            return -1
                    } else if (r != n.charCodeAt(i++))
                        return -1
                }
                return i
            }
            return y.x = w(n, y),
            y.X = w(i, y),
            y.c = w(e, y),
            b.x = w(n, b),
            b.X = w(i, b),
            b.c = w(e, b),
            {
                format: function(t) {
                    var e = w(t += "", y);
                    return e.toString = function() {
                        return t
                    }
                    ,
                    e
                },
                parse: function(t) {
                    var e = k(t += "", Nn);
                    return e.toString = function() {
                        return t
                    }
                    ,
                    e
                },
                utcFormat: function(t) {
                    var e = w(t += "", b);
                    return e.toString = function() {
                        return t
                    }
                    ,
                    e
                },
                utcParse: function(t) {
                    var e = k(t, jn);
                    return e.toString = function() {
                        return t
                    }
                    ,
                    e
                }
            }
        }(t),
        $n = Rn.format,
        Rn.parse,
        In = Rn.utcFormat,
        Un = Rn.utcParse
    }({
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    var Xi = "%Y-%m-%dT%H:%M:%S.%LZ";
    Date.prototype.toISOString || In(Xi);
    +new Date("2000-01-01T00:00:00.000Z") || Un(Xi);
    var Zi = 1e3
      , Ki = 6e4
      , Qi = 36e5
      , tr = 864e5
      , er = 2592e6
      , nr = 31536e6;
    function ir(t) {
        return new Date(t)
    }
    function rr(t) {
        return t instanceof Date ? +t : +new Date(+t)
    }
    function or(t, e, n, i, r, o, s, a, c) {
        var u = we(ge, ge)
          , l = u.invert
          , h = u.domain
          , f = c(".%L")
          , d = c(":%S")
          , p = c("%I:%M")
          , g = c("%I %p")
          , m = c("%a %d")
          , v = c("%b %d")
          , _ = c("%B")
          , y = c("%Y")
          , b = [[s, 1, Zi], [s, 5, 5e3], [s, 15, 15e3], [s, 30, 3e4], [o, 1, Ki], [o, 5, 3e5], [o, 15, 9e5], [o, 30, 18e5], [r, 1, Qi], [r, 3, 108e5], [r, 6, 216e5], [r, 12, 432e5], [i, 1, tr], [i, 2, 1728e5], [n, 1, 6048e5], [e, 1, er], [e, 3, 7776e6], [t, 1, nr]];
        function x(a) {
            return (s(a) < a ? f : o(a) < a ? d : r(a) < a ? p : i(a) < a ? g : e(a) < a ? n(a) < a ? m : v : t(a) < a ? _ : y)(a)
        }
        function w(e, n, i, r) {
            if (null == e && (e = 10),
            "number" == typeof e) {
                var o = Math.abs(i - n) / e
                  , s = rt((function(t) {
                    return t[2]
                }
                )).right(b, o);
                s === b.length ? (r = gt(n / nr, i / nr, e),
                e = t) : s ? (r = (s = b[o / b[s - 1][2] < b[s][2] / o ? s - 1 : s])[1],
                e = s[0]) : (r = Math.max(gt(n, i, e), 1),
                e = a)
            }
            return null == r ? e : e.every(r)
        }
        return u.invert = function(t) {
            return new Date(l(t))
        }
        ,
        u.domain = function(t) {
            return arguments.length ? h(Array.from(t, rr)) : h().map(ir)
        }
        ,
        u.ticks = function(t, e) {
            var n, i = h(), r = i[0], o = i[i.length - 1], s = o < r;
            return s && (n = r,
            r = o,
            o = n),
            n = (n = w(t, r, o, e)) ? n.range(r, o + 1) : [],
            s ? n.reverse() : n
        }
        ,
        u.tickFormat = function(t, e) {
            return null == e ? x : c(e)
        }
        ,
        u.nice = function(t, e) {
            var n = h();
            return (t = w(t, n[0], n[n.length - 1], e)) ? h(Ue(n, t)) : u
        }
        ,
        u.copy = function() {
            return be(u, or(t, e, n, i, r, o, s, a, c))
        }
        ,
        u
    }
    var sr = "http://www.w3.org/1999/xhtml"
      , ar = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: sr,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    }
      , cr = function(t) {
        var e = t += ""
          , n = e.indexOf(":");
        return n >= 0 && "xmlns" !== (e = t.slice(0, n)) && (t = t.slice(n + 1)),
        ar.hasOwnProperty(e) ? {
            space: ar[e],
            local: t
        } : t
    };
    function ur(t) {
        return function() {
            var e = this.ownerDocument
              , n = this.namespaceURI;
            return n === sr && e.documentElement.namespaceURI === sr ? e.createElement(t) : e.createElementNS(n, t)
        }
    }
    function lr(t) {
        return function() {
            return this.ownerDocument.createElementNS(t.space, t.local)
        }
    }
    var hr = function(t) {
        var e = cr(t);
        return (e.local ? lr : ur)(e)
    };
    function fr() {}
    var dr = function(t) {
        return null == t ? fr : function() {
            return this.querySelector(t)
        }
    };
    function pr() {
        return []
    }
    var gr = function(t) {
        return null == t ? pr : function() {
            return this.querySelectorAll(t)
        }
    }
      , mr = function(t) {
        return function() {
            return this.matches(t)
        }
    }
      , vr = function(t) {
        return new Array(t.length)
    };
    function _r(t, e) {
        this.ownerDocument = t.ownerDocument,
        this.namespaceURI = t.namespaceURI,
        this._next = null,
        this._parent = t,
        this.__data__ = e
    }
    _r.prototype = {
        constructor: _r,
        appendChild: function(t) {
            return this._parent.insertBefore(t, this._next)
        },
        insertBefore: function(t, e) {
            return this._parent.insertBefore(t, e)
        },
        querySelector: function(t) {
            return this._parent.querySelector(t)
        },
        querySelectorAll: function(t) {
            return this._parent.querySelectorAll(t)
        }
    };
    function yr(t, e, n, i, r, o) {
        for (var s, a = 0, c = e.length, u = o.length; a < u; ++a)
            (s = e[a]) ? (s.__data__ = o[a],
            i[a] = s) : n[a] = new _r(t,o[a]);
        for (; a < c; ++a)
            (s = e[a]) && (r[a] = s)
    }
    function br(t, e, n, i, r, o, s) {
        var a, c, u, l = {}, h = e.length, f = o.length, d = new Array(h);
        for (a = 0; a < h; ++a)
            (c = e[a]) && (d[a] = u = "$" + s.call(c, c.__data__, a, e),
            u in l ? r[a] = c : l[u] = c);
        for (a = 0; a < f; ++a)
            (c = l[u = "$" + s.call(t, o[a], a, o)]) ? (i[a] = c,
            c.__data__ = o[a],
            l[u] = null) : n[a] = new _r(t,o[a]);
        for (a = 0; a < h; ++a)
            (c = e[a]) && l[d[a]] === c && (r[a] = c)
    }
    function xr(t, e) {
        return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
    }
    function wr(t) {
        return function() {
            this.removeAttribute(t)
        }
    }
    function kr(t) {
        return function() {
            this.removeAttributeNS(t.space, t.local)
        }
    }
    function Er(t, e) {
        return function() {
            this.setAttribute(t, e)
        }
    }
    function Sr(t, e) {
        return function() {
            this.setAttributeNS(t.space, t.local, e)
        }
    }
    function Ar(t, e) {
        return function() {
            var n = e.apply(this, arguments);
            null == n ? this.removeAttribute(t) : this.setAttribute(t, n)
        }
    }
    function Cr(t, e) {
        return function() {
            var n = e.apply(this, arguments);
            null == n ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n)
        }
    }
    var Tr = function(t) {
        return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
    };
    function Lr(t) {
        return function() {
            this.style.removeProperty(t)
        }
    }
    function Mr(t, e, n) {
        return function() {
            this.style.setProperty(t, e, n)
        }
    }
    function Or(t, e, n) {
        return function() {
            var i = e.apply(this, arguments);
            null == i ? this.style.removeProperty(t) : this.style.setProperty(t, i, n)
        }
    }
    function Pr(t, e) {
        return t.style.getPropertyValue(e) || Tr(t).getComputedStyle(t, null).getPropertyValue(e)
    }
    function Nr(t) {
        return function() {
            delete this[t]
        }
    }
    function jr(t, e) {
        return function() {
            this[t] = e
        }
    }
    function Dr(t, e) {
        return function() {
            var n = e.apply(this, arguments);
            null == n ? delete this[t] : this[t] = n
        }
    }
    function Rr(t) {
        return t.trim().split(/^|\s+/)
    }
    function $r(t) {
        return t.classList || new Ir(t)
    }
    function Ir(t) {
        this._node = t,
        this._names = Rr(t.getAttribute("class") || "")
    }
    function Ur(t, e) {
        for (var n = $r(t), i = -1, r = e.length; ++i < r; )
            n.add(e[i])
    }
    function Fr(t, e) {
        for (var n = $r(t), i = -1, r = e.length; ++i < r; )
            n.remove(e[i])
    }
    function Hr(t) {
        return function() {
            Ur(this, t)
        }
    }
    function Br(t) {
        return function() {
            Fr(this, t)
        }
    }
    function qr(t, e) {
        return function() {
            (e.apply(this, arguments) ? Ur : Fr)(this, t)
        }
    }
    Ir.prototype = {
        add: function(t) {
            this._names.indexOf(t) < 0 && (this._names.push(t),
            this._node.setAttribute("class", this._names.join(" ")))
        },
        remove: function(t) {
            var e = this._names.indexOf(t);
            e >= 0 && (this._names.splice(e, 1),
            this._node.setAttribute("class", this._names.join(" ")))
        },
        contains: function(t) {
            return this._names.indexOf(t) >= 0
        }
    };
    function Vr() {
        this.textContent = ""
    }
    function zr(t) {
        return function() {
            this.textContent = t
        }
    }
    function Wr(t) {
        return function() {
            var e = t.apply(this, arguments);
            this.textContent = null == e ? "" : e
        }
    }
    function Jr() {
        this.innerHTML = ""
    }
    function Yr(t) {
        return function() {
            this.innerHTML = t
        }
    }
    function Gr(t) {
        return function() {
            var e = t.apply(this, arguments);
            this.innerHTML = null == e ? "" : e
        }
    }
    function Xr() {
        this.nextSibling && this.parentNode.appendChild(this)
    }
    function Zr() {
        this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
    }
    function Kr() {
        return null
    }
    function Qr() {
        var t = this.parentNode;
        t && t.removeChild(this)
    }
    function to() {
        return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling)
    }
    function eo() {
        return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling)
    }
    var no = {}
      , io = null;
    "undefined" != typeof document && ("onmouseenter"in document.documentElement || (no = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }));
    function ro(t, e, n) {
        return t = oo(t, e, n),
        function(e) {
            var n = e.relatedTarget;
            n && (n === this || 8 & n.compareDocumentPosition(this)) || t.call(this, e)
        }
    }
    function oo(t, e, n) {
        return function(i) {
            var r = io;
            io = i;
            try {
                t.call(this, this.__data__, e, n)
            } finally {
                io = r
            }
        }
    }
    function so(t) {
        return t.trim().split(/^|\s+/).map((function(t) {
            var e = ""
              , n = t.indexOf(".");
            return n >= 0 && (e = t.slice(n + 1),
            t = t.slice(0, n)),
            {
                type: t,
                name: e
            }
        }
        ))
    }
    function ao(t) {
        return function() {
            var e = this.__on;
            if (e) {
                for (var n, i = 0, r = -1, o = e.length; i < o; ++i)
                    n = e[i],
                    t.type && n.type !== t.type || n.name !== t.name ? e[++r] = n : this.removeEventListener(n.type, n.listener, n.capture);
                ++r ? e.length = r : delete this.__on
            }
        }
    }
    function co(t, e, n) {
        var i = no.hasOwnProperty(t.type) ? ro : oo;
        return function(r, o, s) {
            var a, c = this.__on, u = i(e, o, s);
            if (c)
                for (var l = 0, h = c.length; l < h; ++l)
                    if ((a = c[l]).type === t.type && a.name === t.name)
                        return this.removeEventListener(a.type, a.listener, a.capture),
                        this.addEventListener(a.type, a.listener = u, a.capture = n),
                        void (a.value = e);
            this.addEventListener(t.type, u, n),
            a = {
                type: t.type,
                name: t.name,
                value: e,
                listener: u,
                capture: n
            },
            c ? c.push(a) : this.__on = [a]
        }
    }
    function uo(t, e, n) {
        var i = Tr(t)
          , r = i.CustomEvent;
        "function" == typeof r ? r = new r(e,n) : (r = i.document.createEvent("Event"),
        n ? (r.initEvent(e, n.bubbles, n.cancelable),
        r.detail = n.detail) : r.initEvent(e, !1, !1)),
        t.dispatchEvent(r)
    }
    function lo(t, e) {
        return function() {
            return uo(this, t, e)
        }
    }
    function ho(t, e) {
        return function() {
            return uo(this, t, e.apply(this, arguments))
        }
    }
    var fo = [null];
    function po(t, e) {
        this._groups = t,
        this._parents = e
    }
    function go() {
        return new po([[document.documentElement]],fo)
    }
    po.prototype = go.prototype = {
        constructor: po,
        select: function(t) {
            "function" != typeof t && (t = dr(t));
            for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
                for (var o, s, a = e[r], c = a.length, u = i[r] = new Array(c), l = 0; l < c; ++l)
                    (o = a[l]) && (s = t.call(o, o.__data__, l, a)) && ("__data__"in o && (s.__data__ = o.__data__),
                    u[l] = s);
            return new po(i,this._parents)
        },
        selectAll: function(t) {
            "function" != typeof t && (t = gr(t));
            for (var e = this._groups, n = e.length, i = [], r = [], o = 0; o < n; ++o)
                for (var s, a = e[o], c = a.length, u = 0; u < c; ++u)
                    (s = a[u]) && (i.push(t.call(s, s.__data__, u, a)),
                    r.push(s));
            return new po(i,r)
        },
        filter: function(t) {
            "function" != typeof t && (t = mr(t));
            for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
                for (var o, s = e[r], a = s.length, c = i[r] = [], u = 0; u < a; ++u)
                    (o = s[u]) && t.call(o, o.__data__, u, s) && c.push(o);
            return new po(i,this._parents)
        },
        data: function(t, e) {
            if (!t)
                return p = new Array(this.size()),
                l = -1,
                this.each((function(t) {
                    p[++l] = t
                }
                )),
                p;
            var n, i = e ? br : yr, r = this._parents, o = this._groups;
            "function" != typeof t && (n = t,
            t = function() {
                return n
            }
            );
            for (var s = o.length, a = new Array(s), c = new Array(s), u = new Array(s), l = 0; l < s; ++l) {
                var h = r[l]
                  , f = o[l]
                  , d = f.length
                  , p = t.call(h, h && h.__data__, l, r)
                  , g = p.length
                  , m = c[l] = new Array(g)
                  , v = a[l] = new Array(g);
                i(h, f, m, v, u[l] = new Array(d), p, e);
                for (var _, y, b = 0, x = 0; b < g; ++b)
                    if (_ = m[b]) {
                        for (b >= x && (x = b + 1); !(y = v[x]) && ++x < g; )
                            ;
                        _._next = y || null
                    }
            }
            return (a = new po(a,r))._enter = c,
            a._exit = u,
            a
        },
        enter: function() {
            return new po(this._enter || this._groups.map(vr),this._parents)
        },
        exit: function() {
            return new po(this._exit || this._groups.map(vr),this._parents)
        },
        join: function(t, e, n) {
            var i = this.enter()
              , r = this
              , o = this.exit();
            return i = "function" == typeof t ? t(i) : i.append(t + ""),
            null != e && (r = e(r)),
            null == n ? o.remove() : n(o),
            i && r ? i.merge(r).order() : r
        },
        merge: function(t) {
            for (var e = this._groups, n = t._groups, i = e.length, r = n.length, o = Math.min(i, r), s = new Array(i), a = 0; a < o; ++a)
                for (var c, u = e[a], l = n[a], h = u.length, f = s[a] = new Array(h), d = 0; d < h; ++d)
                    (c = u[d] || l[d]) && (f[d] = c);
            for (; a < i; ++a)
                s[a] = e[a];
            return new po(s,this._parents)
        },
        order: function() {
            for (var t = this._groups, e = -1, n = t.length; ++e < n; )
                for (var i, r = t[e], o = r.length - 1, s = r[o]; --o >= 0; )
                    (i = r[o]) && (s && 4 ^ i.compareDocumentPosition(s) && s.parentNode.insertBefore(i, s),
                    s = i);
            return this
        },
        sort: function(t) {
            function e(e, n) {
                return e && n ? t(e.__data__, n.__data__) : !e - !n
            }
            t || (t = xr);
            for (var n = this._groups, i = n.length, r = new Array(i), o = 0; o < i; ++o) {
                for (var s, a = n[o], c = a.length, u = r[o] = new Array(c), l = 0; l < c; ++l)
                    (s = a[l]) && (u[l] = s);
                u.sort(e)
            }
            return new po(r,this._parents).order()
        },
        call: function() {
            var t = arguments[0];
            return arguments[0] = this,
            t.apply(null, arguments),
            this
        },
        nodes: function() {
            var t = new Array(this.size())
              , e = -1;
            return this.each((function() {
                t[++e] = this
            }
            )),
            t
        },
        node: function() {
            for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
                for (var i = t[e], r = 0, o = i.length; r < o; ++r) {
                    var s = i[r];
                    if (s)
                        return s
                }
            return null
        },
        size: function() {
            var t = 0;
            return this.each((function() {
                ++t
            }
            )),
            t
        },
        empty: function() {
            return !this.node()
        },
        each: function(t) {
            for (var e = this._groups, n = 0, i = e.length; n < i; ++n)
                for (var r, o = e[n], s = 0, a = o.length; s < a; ++s)
                    (r = o[s]) && t.call(r, r.__data__, s, o);
            return this
        },
        attr: function(t, e) {
            var n = cr(t);
            if (arguments.length < 2) {
                var i = this.node();
                return n.local ? i.getAttributeNS(n.space, n.local) : i.getAttribute(n)
            }
            return this.each((null == e ? n.local ? kr : wr : "function" == typeof e ? n.local ? Cr : Ar : n.local ? Sr : Er)(n, e))
        },
        style: function(t, e, n) {
            return arguments.length > 1 ? this.each((null == e ? Lr : "function" == typeof e ? Or : Mr)(t, e, null == n ? "" : n)) : Pr(this.node(), t)
        },
        property: function(t, e) {
            return arguments.length > 1 ? this.each((null == e ? Nr : "function" == typeof e ? Dr : jr)(t, e)) : this.node()[t]
        },
        classed: function(t, e) {
            var n = Rr(t + "");
            if (arguments.length < 2) {
                for (var i = $r(this.node()), r = -1, o = n.length; ++r < o; )
                    if (!i.contains(n[r]))
                        return !1;
                return !0
            }
            return this.each(("function" == typeof e ? qr : e ? Hr : Br)(n, e))
        },
        text: function(t) {
            return arguments.length ? this.each(null == t ? Vr : ("function" == typeof t ? Wr : zr)(t)) : this.node().textContent
        },
        html: function(t) {
            return arguments.length ? this.each(null == t ? Jr : ("function" == typeof t ? Gr : Yr)(t)) : this.node().innerHTML
        },
        raise: function() {
            return this.each(Xr)
        },
        lower: function() {
            return this.each(Zr)
        },
        append: function(t) {
            var e = "function" == typeof t ? t : hr(t);
            return this.select((function() {
                return this.appendChild(e.apply(this, arguments))
            }
            ))
        },
        insert: function(t, e) {
            var n = "function" == typeof t ? t : hr(t)
              , i = null == e ? Kr : "function" == typeof e ? e : dr(e);
            return this.select((function() {
                return this.insertBefore(n.apply(this, arguments), i.apply(this, arguments) || null)
            }
            ))
        },
        remove: function() {
            return this.each(Qr)
        },
        clone: function(t) {
            return this.select(t ? eo : to)
        },
        datum: function(t) {
            return arguments.length ? this.property("__data__", t) : this.node().__data__
        },
        on: function(t, e, n) {
            var i, r, o = so(t + ""), s = o.length;
            if (!(arguments.length < 2)) {
                for (a = e ? co : ao,
                null == n && (n = !1),
                i = 0; i < s; ++i)
                    this.each(a(o[i], e, n));
                return this
            }
            var a = this.node().__on;
            if (a)
                for (var c, u = 0, l = a.length; u < l; ++u)
                    for (i = 0,
                    c = a[u]; i < s; ++i)
                        if ((r = o[i]).type === c.type && r.name === c.name)
                            return c.value
        },
        dispatch: function(t, e) {
            return this.each(("function" == typeof e ? ho : lo)(t, e))
        }
    };
    var mo = go
      , vo = function(t) {
        return "string" == typeof t ? new po([[document.querySelector(t)]],[document.documentElement]) : new po([[t]],fo)
    }
      , _o = 0;
    function yo() {
        this._ = "@" + (++_o).toString(36)
    }
    yo.prototype = function() {
        return new yo
    }
    .prototype = {
        constructor: yo,
        get: function(t) {
            for (var e = this._; !(e in t); )
                if (!(t = t.parentNode))
                    return;
            return t[e]
        },
        set: function(t, e) {
            return t[this._] = e
        },
        remove: function(t) {
            return this._ in t && delete t[this._]
        },
        toString: function() {
            return this._
        }
    };
    var bo = function() {
        for (var t, e = io; t = e.sourceEvent; )
            e = t;
        return e
    }
      , xo = function(t, e) {
        var n = t.ownerSVGElement || t;
        if (n.createSVGPoint) {
            var i = n.createSVGPoint();
            return i.x = e.clientX,
            i.y = e.clientY,
            [(i = i.matrixTransform(t.getScreenCTM().inverse())).x, i.y]
        }
        var r = t.getBoundingClientRect();
        return [e.clientX - r.left - t.clientLeft, e.clientY - r.top - t.clientTop]
    }
      , wo = {
        value: function() {}
    };
    function ko() {
        for (var t, e = 0, n = arguments.length, i = {}; e < n; ++e) {
            if (!(t = arguments[e] + "") || t in i || /[\s.]/.test(t))
                throw new Error("illegal type: " + t);
            i[t] = []
        }
        return new Eo(i)
    }
    function Eo(t) {
        this._ = t
    }
    function So(t, e) {
        return t.trim().split(/^|\s+/).map((function(t) {
            var n = ""
              , i = t.indexOf(".");
            if (i >= 0 && (n = t.slice(i + 1),
            t = t.slice(0, i)),
            t && !e.hasOwnProperty(t))
                throw new Error("unknown type: " + t);
            return {
                type: t,
                name: n
            }
        }
        ))
    }
    function Ao(t, e) {
        for (var n, i = 0, r = t.length; i < r; ++i)
            if ((n = t[i]).name === e)
                return n.value
    }
    function Co(t, e, n) {
        for (var i = 0, r = t.length; i < r; ++i)
            if (t[i].name === e) {
                t[i] = wo,
                t = t.slice(0, i).concat(t.slice(i + 1));
                break
            }
        return null != n && t.push({
            name: e,
            value: n
        }),
        t
    }
    Eo.prototype = ko.prototype = {
        constructor: Eo,
        on: function(t, e) {
            var n, i = this._, r = So(t + "", i), o = -1, s = r.length;
            if (!(arguments.length < 2)) {
                if (null != e && "function" != typeof e)
                    throw new Error("invalid callback: " + e);
                for (; ++o < s; )
                    if (n = (t = r[o]).type)
                        i[n] = Co(i[n], t.name, e);
                    else if (null == e)
                        for (n in i)
                            i[n] = Co(i[n], t.name, null);
                return this
            }
            for (; ++o < s; )
                if ((n = (t = r[o]).type) && (n = Ao(i[n], t.name)))
                    return n
        },
        copy: function() {
            var t = {}
              , e = this._;
            for (var n in e)
                t[n] = e[n].slice();
            return new Eo(t)
        },
        call: function(t, e) {
            if ((n = arguments.length - 2) > 0)
                for (var n, i, r = new Array(n), o = 0; o < n; ++o)
                    r[o] = arguments[o + 2];
            if (!this._.hasOwnProperty(t))
                throw new Error("unknown type: " + t);
            for (o = 0,
            n = (i = this._[t]).length; o < n; ++o)
                i[o].value.apply(e, r)
        },
        apply: function(t, e, n) {
            if (!this._.hasOwnProperty(t))
                throw new Error("unknown type: " + t);
            for (var i = this._[t], r = 0, o = i.length; r < o; ++r)
                i[r].value.apply(e, n)
        }
    };
    var To, Lo, Mo = ko, Oo = 0, Po = 0, No = 0, jo = 0, Do = 0, Ro = 0, $o = "object" == typeof performance && performance.now ? performance : Date, Io = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
        setTimeout(t, 17)
    }
    ;
    function Uo() {
        return Do || (Io(Fo),
        Do = $o.now() + Ro)
    }
    function Fo() {
        Do = 0
    }
    function Ho() {
        this._call = this._time = this._next = null
    }
    function Bo(t, e, n) {
        var i = new Ho;
        return i.restart(t, e, n),
        i
    }
    function qo() {
        Do = (jo = $o.now()) + Ro,
        Oo = Po = 0;
        try {
            !function() {
                Uo(),
                ++Oo;
                for (var t, e = To; e; )
                    (t = Do - e._time) >= 0 && e._call.call(null, t),
                    e = e._next;
                --Oo
            }()
        } finally {
            Oo = 0,
            function() {
                var t, e, n = To, i = 1 / 0;
                for (; n; )
                    n._call ? (i > n._time && (i = n._time),
                    t = n,
                    n = n._next) : (e = n._next,
                    n._next = null,
                    n = t ? t._next = e : To = e);
                Lo = t,
                zo(i)
            }(),
            Do = 0
        }
    }
    function Vo() {
        var t = $o.now()
          , e = t - jo;
        e > 1e3 && (Ro -= e,
        jo = t)
    }
    function zo(t) {
        Oo || (Po && (Po = clearTimeout(Po)),
        t - Do > 24 ? (t < 1 / 0 && (Po = setTimeout(qo, t - $o.now() - Ro)),
        No && (No = clearInterval(No))) : (No || (jo = $o.now(),
        No = setInterval(Vo, 1e3)),
        Oo = 1,
        Io(qo)))
    }
    Ho.prototype = Bo.prototype = {
        constructor: Ho,
        restart: function(t, e, n) {
            if ("function" != typeof t)
                throw new TypeError("callback is not a function");
            n = (null == n ? Uo() : +n) + (null == e ? 0 : +e),
            this._next || Lo === this || (Lo ? Lo._next = this : To = this,
            Lo = this),
            this._call = t,
            this._time = n,
            zo()
        },
        stop: function() {
            this._call && (this._call = null,
            this._time = 1 / 0,
            zo())
        }
    };
    var Wo = function(t, e, n) {
        var i = new Ho;
        return e = null == e ? 0 : +e,
        i.restart((function(n) {
            i.stop(),
            t(n + e)
        }
        ), e, n),
        i
    }
      , Jo = Mo("start", "end", "cancel", "interrupt")
      , Yo = []
      , Go = function(t, e, n, i, r, o) {
        var s = t.__transition;
        if (s) {
            if (n in s)
                return
        } else
            t.__transition = {};
        !function(t, e, n) {
            var i, r = t.__transition;
            function o(t) {
                n.state = 1,
                n.timer.restart(s, n.delay, n.time),
                n.delay <= t && s(t - n.delay)
            }
            function s(o) {
                var u, l, h, f;
                if (1 !== n.state)
                    return c();
                for (u in r)
                    if ((f = r[u]).name === n.name) {
                        if (3 === f.state)
                            return Wo(s);
                        4 === f.state ? (f.state = 6,
                        f.timer.stop(),
                        f.on.call("interrupt", t, t.__data__, f.index, f.group),
                        delete r[u]) : +u < e && (f.state = 6,
                        f.timer.stop(),
                        f.on.call("cancel", t, t.__data__, f.index, f.group),
                        delete r[u])
                    }
                if (Wo((function() {
                    3 === n.state && (n.state = 4,
                    n.timer.restart(a, n.delay, n.time),
                    a(o))
                }
                )),
                n.state = 2,
                n.on.call("start", t, t.__data__, n.index, n.group),
                2 === n.state) {
                    for (n.state = 3,
                    i = new Array(h = n.tween.length),
                    u = 0,
                    l = -1; u < h; ++u)
                        (f = n.tween[u].value.call(t, t.__data__, n.index, n.group)) && (i[++l] = f);
                    i.length = l + 1
                }
            }
            function a(e) {
                for (var r = e < n.duration ? n.ease.call(null, e / n.duration) : (n.timer.restart(c),
                n.state = 5,
                1), o = -1, s = i.length; ++o < s; )
                    i[o].call(t, r);
                5 === n.state && (n.on.call("end", t, t.__data__, n.index, n.group),
                c())
            }
            function c() {
                for (var i in n.state = 6,
                n.timer.stop(),
                delete r[e],
                r)
                    return;
                delete t.__transition
            }
            r[e] = n,
            n.timer = Bo(o, 0, n.time)
        }(t, n, {
            name: e,
            index: i,
            group: r,
            on: Jo,
            tween: Yo,
            time: o.time,
            delay: o.delay,
            duration: o.duration,
            ease: o.ease,
            timer: null,
            state: 0
        })
    };
    function Xo(t, e) {
        var n = Ko(t, e);
        if (n.state > 0)
            throw new Error("too late; already scheduled");
        return n
    }
    function Zo(t, e) {
        var n = Ko(t, e);
        if (n.state > 3)
            throw new Error("too late; already running");
        return n
    }
    function Ko(t, e) {
        var n = t.__transition;
        if (!n || !(n = n[e]))
            throw new Error("transition not found");
        return n
    }
    var Qo, ts, es, ns, is = 180 / Math.PI, rs = {
        translateX: 0,
        translateY: 0,
        rotate: 0,
        skewX: 0,
        scaleX: 1,
        scaleY: 1
    }, os = function(t, e, n, i, r, o) {
        var s, a, c;
        return (s = Math.sqrt(t * t + e * e)) && (t /= s,
        e /= s),
        (c = t * n + e * i) && (n -= t * c,
        i -= e * c),
        (a = Math.sqrt(n * n + i * i)) && (n /= a,
        i /= a,
        c /= a),
        t * i < e * n && (t = -t,
        e = -e,
        c = -c,
        s = -s),
        {
            translateX: r,
            translateY: o,
            rotate: Math.atan2(e, t) * is,
            skewX: Math.atan(c) * is,
            scaleX: s,
            scaleY: a
        }
    };
    function ss(t, e, n, i) {
        function r(t) {
            return t.length ? t.pop() + " " : ""
        }
        return function(o, s) {
            var a = []
              , c = [];
            return o = t(o),
            s = t(s),
            function(t, i, r, o, s, a) {
                if (t !== r || i !== o) {
                    var c = s.push("translate(", null, e, null, n);
                    a.push({
                        i: c - 4,
                        x: se(t, r)
                    }, {
                        i: c - 2,
                        x: se(i, o)
                    })
                } else
                    (r || o) && s.push("translate(" + r + e + o + n)
            }(o.translateX, o.translateY, s.translateX, s.translateY, a, c),
            function(t, e, n, o) {
                t !== e ? (t - e > 180 ? e += 360 : e - t > 180 && (t += 360),
                o.push({
                    i: n.push(r(n) + "rotate(", null, i) - 2,
                    x: se(t, e)
                })) : e && n.push(r(n) + "rotate(" + e + i)
            }(o.rotate, s.rotate, a, c),
            function(t, e, n, o) {
                t !== e ? o.push({
                    i: n.push(r(n) + "skewX(", null, i) - 2,
                    x: se(t, e)
                }) : e && n.push(r(n) + "skewX(" + e + i)
            }(o.skewX, s.skewX, a, c),
            function(t, e, n, i, o, s) {
                if (t !== n || e !== i) {
                    var a = o.push(r(o) + "scale(", null, ",", null, ")");
                    s.push({
                        i: a - 4,
                        x: se(t, n)
                    }, {
                        i: a - 2,
                        x: se(e, i)
                    })
                } else
                    1 === n && 1 === i || o.push(r(o) + "scale(" + n + "," + i + ")")
            }(o.scaleX, o.scaleY, s.scaleX, s.scaleY, a, c),
            o = s = null,
            function(t) {
                for (var e, n = -1, i = c.length; ++n < i; )
                    a[(e = c[n]).i] = e.x(t);
                return a.join("")
            }
        }
    }
    var as = ss((function(t) {
        return "none" === t ? rs : (Qo || (Qo = document.createElement("DIV"),
        ts = document.documentElement,
        es = document.defaultView),
        Qo.style.transform = t,
        t = es.getComputedStyle(ts.appendChild(Qo), null).getPropertyValue("transform"),
        ts.removeChild(Qo),
        t = t.slice(7, -1).split(","),
        os(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
    }
    ), "px, ", "px)", "deg)")
      , cs = ss((function(t) {
        return null == t ? rs : (ns || (ns = document.createElementNS("http://www.w3.org/2000/svg", "g")),
        ns.setAttribute("transform", t),
        (t = ns.transform.baseVal.consolidate()) ? (t = t.matrix,
        os(t.a, t.b, t.c, t.d, t.e, t.f)) : rs)
    }
    ), ", ", ")", ")");
    function us(t, e) {
        var n, i;
        return function() {
            var r = Zo(this, t)
              , o = r.tween;
            if (o !== n)
                for (var s = 0, a = (i = n = o).length; s < a; ++s)
                    if (i[s].name === e) {
                        (i = i.slice()).splice(s, 1);
                        break
                    }
            r.tween = i
        }
    }
    function ls(t, e, n) {
        var i, r;
        if ("function" != typeof n)
            throw new Error;
        return function() {
            var o = Zo(this, t)
              , s = o.tween;
            if (s !== i) {
                r = (i = s).slice();
                for (var a = {
                    name: e,
                    value: n
                }, c = 0, u = r.length; c < u; ++c)
                    if (r[c].name === e) {
                        r[c] = a;
                        break
                    }
                c === u && r.push(a)
            }
            o.tween = r
        }
    }
    function hs(t, e, n) {
        var i = t._id;
        return t.each((function() {
            var t = Zo(this, i);
            (t.value || (t.value = {}))[e] = n.apply(this, arguments)
        }
        )),
        function(t) {
            return Ko(t, i).value[e]
        }
    }
    var fs = function(t, e) {
        var n;
        return ("number" == typeof e ? se : e instanceof Rt ? te : (n = Rt(e)) ? (e = n,
        te) : le)(t, e)
    };
    function ds(t) {
        return function() {
            this.removeAttribute(t)
        }
    }
    function ps(t) {
        return function() {
            this.removeAttributeNS(t.space, t.local)
        }
    }
    function gs(t, e, n) {
        var i, r, o = n + "";
        return function() {
            var s = this.getAttribute(t);
            return s === o ? null : s === i ? r : r = e(i = s, n)
        }
    }
    function ms(t, e, n) {
        var i, r, o = n + "";
        return function() {
            var s = this.getAttributeNS(t.space, t.local);
            return s === o ? null : s === i ? r : r = e(i = s, n)
        }
    }
    function vs(t, e, n) {
        var i, r, o;
        return function() {
            var s, a, c = n(this);
            if (null != c)
                return (s = this.getAttribute(t)) === (a = c + "") ? null : s === i && a === r ? o : (r = a,
                o = e(i = s, c));
            this.removeAttribute(t)
        }
    }
    function _s(t, e, n) {
        var i, r, o;
        return function() {
            var s, a, c = n(this);
            if (null != c)
                return (s = this.getAttributeNS(t.space, t.local)) === (a = c + "") ? null : s === i && a === r ? o : (r = a,
                o = e(i = s, c));
            this.removeAttributeNS(t.space, t.local)
        }
    }
    function ys(t, e) {
        return function(n) {
            this.setAttribute(t, e(n))
        }
    }
    function bs(t, e) {
        return function(n) {
            this.setAttributeNS(t.space, t.local, e(n))
        }
    }
    function xs(t, e) {
        var n, i;
        function r() {
            var r = e.apply(this, arguments);
            return r !== i && (n = (i = r) && bs(t, r)),
            n
        }
        return r._value = e,
        r
    }
    function ws(t, e) {
        var n, i;
        function r() {
            var r = e.apply(this, arguments);
            return r !== i && (n = (i = r) && ys(t, r)),
            n
        }
        return r._value = e,
        r
    }
    function ks(t, e) {
        return function() {
            Xo(this, t).delay = +e.apply(this, arguments)
        }
    }
    function Es(t, e) {
        return e = +e,
        function() {
            Xo(this, t).delay = e
        }
    }
    function Ss(t, e) {
        return function() {
            Zo(this, t).duration = +e.apply(this, arguments)
        }
    }
    function As(t, e) {
        return e = +e,
        function() {
            Zo(this, t).duration = e
        }
    }
    function Cs(t, e) {
        if ("function" != typeof e)
            throw new Error;
        return function() {
            Zo(this, t).ease = e
        }
    }
    function Ts(t, e, n) {
        var i, r, o = function(t) {
            return (t + "").trim().split(/^|\s+/).every((function(t) {
                var e = t.indexOf(".");
                return e >= 0 && (t = t.slice(0, e)),
                !t || "start" === t
            }
            ))
        }(e) ? Xo : Zo;
        return function() {
            var s = o(this, t)
              , a = s.on;
            a !== i && (r = (i = a).copy()).on(e, n),
            s.on = r
        }
    }
    var Ls = mo.prototype.constructor;
    function Ms(t) {
        return function() {
            this.style.removeProperty(t)
        }
    }
    function Os(t, e, n) {
        return function(i) {
            this.style.setProperty(t, e(i), n)
        }
    }
    function Ps(t, e, n) {
        var i, r;
        function o() {
            var o = e.apply(this, arguments);
            return o !== r && (i = (r = o) && Os(t, o, n)),
            i
        }
        return o._value = e,
        o
    }
    var Ns = 0;
    function js(t, e, n, i) {
        this._groups = t,
        this._parents = e,
        this._name = n,
        this._id = i
    }
    function Ds(t) {
        return mo().transition(t)
    }
    function Rs() {
        return ++Ns
    }
    var $s = mo.prototype;
    js.prototype = Ds.prototype = {
        constructor: js,
        select: function(t) {
            var e = this._name
              , n = this._id;
            "function" != typeof t && (t = dr(t));
            for (var i = this._groups, r = i.length, o = new Array(r), s = 0; s < r; ++s)
                for (var a, c, u = i[s], l = u.length, h = o[s] = new Array(l), f = 0; f < l; ++f)
                    (a = u[f]) && (c = t.call(a, a.__data__, f, u)) && ("__data__"in a && (c.__data__ = a.__data__),
                    h[f] = c,
                    Go(h[f], e, n, f, h, Ko(a, n)));
            return new js(o,this._parents,e,n)
        },
        selectAll: function(t) {
            var e = this._name
              , n = this._id;
            "function" != typeof t && (t = gr(t));
            for (var i = this._groups, r = i.length, o = [], s = [], a = 0; a < r; ++a)
                for (var c, u = i[a], l = u.length, h = 0; h < l; ++h)
                    if (c = u[h]) {
                        for (var f, d = t.call(c, c.__data__, h, u), p = Ko(c, n), g = 0, m = d.length; g < m; ++g)
                            (f = d[g]) && Go(f, e, n, g, d, p);
                        o.push(d),
                        s.push(c)
                    }
            return new js(o,s,e,n)
        },
        filter: function(t) {
            "function" != typeof t && (t = mr(t));
            for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
                for (var o, s = e[r], a = s.length, c = i[r] = [], u = 0; u < a; ++u)
                    (o = s[u]) && t.call(o, o.__data__, u, s) && c.push(o);
            return new js(i,this._parents,this._name,this._id)
        },
        merge: function(t) {
            if (t._id !== this._id)
                throw new Error;
            for (var e = this._groups, n = t._groups, i = e.length, r = n.length, o = Math.min(i, r), s = new Array(i), a = 0; a < o; ++a)
                for (var c, u = e[a], l = n[a], h = u.length, f = s[a] = new Array(h), d = 0; d < h; ++d)
                    (c = u[d] || l[d]) && (f[d] = c);
            for (; a < i; ++a)
                s[a] = e[a];
            return new js(s,this._parents,this._name,this._id)
        },
        selection: function() {
            return new Ls(this._groups,this._parents)
        },
        transition: function() {
            for (var t = this._name, e = this._id, n = Rs(), i = this._groups, r = i.length, o = 0; o < r; ++o)
                for (var s, a = i[o], c = a.length, u = 0; u < c; ++u)
                    if (s = a[u]) {
                        var l = Ko(s, e);
                        Go(s, t, n, u, a, {
                            time: l.time + l.delay + l.duration,
                            delay: 0,
                            duration: l.duration,
                            ease: l.ease
                        })
                    }
            return new js(i,this._parents,t,n)
        },
        call: $s.call,
        nodes: $s.nodes,
        node: $s.node,
        size: $s.size,
        empty: $s.empty,
        each: $s.each,
        on: function(t, e) {
            var n = this._id;
            return arguments.length < 2 ? Ko(this.node(), n).on.on(t) : this.each(Ts(n, t, e))
        },
        attr: function(t, e) {
            var n = cr(t)
              , i = "transform" === n ? cs : fs;
            return this.attrTween(t, "function" == typeof e ? (n.local ? _s : vs)(n, i, hs(this, "attr." + t, e)) : null == e ? (n.local ? ps : ds)(n) : (n.local ? ms : gs)(n, i, e))
        },
        attrTween: function(t, e) {
            var n = "attr." + t;
            if (arguments.length < 2)
                return (n = this.tween(n)) && n._value;
            if (null == e)
                return this.tween(n, null);
            if ("function" != typeof e)
                throw new Error;
            var i = cr(t);
            return this.tween(n, (i.local ? xs : ws)(i, e))
        },
        style: function(t, e, n) {
            var i = "transform" == (t += "") ? as : fs;
            return null == e ? this.styleTween(t, function(t, e) {
                var n, i, r;
                return function() {
                    var o = Pr(this, t)
                      , s = (this.style.removeProperty(t),
                    Pr(this, t));
                    return o === s ? null : o === n && s === i ? r : r = e(n = o, i = s)
                }
            }(t, i)).on("end.style." + t, Ms(t)) : "function" == typeof e ? this.styleTween(t, function(t, e, n) {
                var i, r, o;
                return function() {
                    var s = Pr(this, t)
                      , a = n(this)
                      , c = a + "";
                    return null == a && (this.style.removeProperty(t),
                    c = a = Pr(this, t)),
                    s === c ? null : s === i && c === r ? o : (r = c,
                    o = e(i = s, a))
                }
            }(t, i, hs(this, "style." + t, e))).each(function(t, e) {
                var n, i, r, o, s = "style." + e, a = "end." + s;
                return function() {
                    var c = Zo(this, t)
                      , u = c.on
                      , l = null == c.value[s] ? o || (o = Ms(e)) : void 0;
                    u === n && r === l || (i = (n = u).copy()).on(a, r = l),
                    c.on = i
                }
            }(this._id, t)) : this.styleTween(t, function(t, e, n) {
                var i, r, o = n + "";
                return function() {
                    var s = Pr(this, t);
                    return s === o ? null : s === i ? r : r = e(i = s, n)
                }
            }(t, i, e), n).on("end.style." + t, null)
        },
        styleTween: function(t, e, n) {
            var i = "style." + (t += "");
            if (arguments.length < 2)
                return (i = this.tween(i)) && i._value;
            if (null == e)
                return this.tween(i, null);
            if ("function" != typeof e)
                throw new Error;
            return this.tween(i, Ps(t, e, null == n ? "" : n))
        },
        text: function(t) {
            return this.tween("text", "function" == typeof t ? function(t) {
                return function() {
                    var e = t(this);
                    this.textContent = null == e ? "" : e
                }
            }(hs(this, "text", t)) : function(t) {
                return function() {
                    this.textContent = t
                }
            }(null == t ? "" : t + ""))
        },
        remove: function() {
            return this.on("end.remove", (t = this._id,
            function() {
                var e = this.parentNode;
                for (var n in this.__transition)
                    if (+n !== t)
                        return;
                e && e.removeChild(this)
            }
            ));
            var t
        },
        tween: function(t, e) {
            var n = this._id;
            if (t += "",
            arguments.length < 2) {
                for (var i, r = Ko(this.node(), n).tween, o = 0, s = r.length; o < s; ++o)
                    if ((i = r[o]).name === t)
                        return i.value;
                return null
            }
            return this.each((null == e ? us : ls)(n, t, e))
        },
        delay: function(t) {
            var e = this._id;
            return arguments.length ? this.each(("function" == typeof t ? ks : Es)(e, t)) : Ko(this.node(), e).delay
        },
        duration: function(t) {
            var e = this._id;
            return arguments.length ? this.each(("function" == typeof t ? Ss : As)(e, t)) : Ko(this.node(), e).duration
        },
        ease: function(t) {
            var e = this._id;
            return arguments.length ? this.each(Cs(e, t)) : Ko(this.node(), e).ease
        },
        end: function() {
            var t, e, n = this, i = n._id, r = n.size();
            return new Promise((function(o, s) {
                var a = {
                    value: s
                }
                  , c = {
                    value: function() {
                        0 == --r && o()
                    }
                };
                n.each((function() {
                    var n = Zo(this, i)
                      , r = n.on;
                    r !== t && ((e = (t = r).copy())._.cancel.push(a),
                    e._.interrupt.push(a),
                    e._.end.push(c)),
                    n.on = e
                }
                ))
            }
            ))
        }
    };
    var Is = {
        time: null,
        delay: 0,
        duration: 250,
        ease: function(t) {
            return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
        }
    };
    function Us(t, e) {
        for (var n; !(n = t.__transition) || !(n = n[e]); )
            if (!(t = t.parentNode))
                return Is.time = Uo(),
                Is;
        return n
    }
    mo.prototype.interrupt = function(t) {
        return this.each((function() {
            !function(t, e) {
                var n, i, r, o = t.__transition, s = !0;
                if (o) {
                    for (r in e = null == e ? null : e + "",
                    o)
                        (n = o[r]).name === e ? (i = n.state > 2 && n.state < 5,
                        n.state = 6,
                        n.timer.stop(),
                        n.on.call(i ? "interrupt" : "cancel", t, t.__data__, n.index, n.group),
                        delete o[r]) : s = !1;
                    s && delete t.__transition
                }
            }(this, t)
        }
        ))
    }
    ,
    mo.prototype.transition = function(t) {
        var e, n;
        t instanceof js ? (e = t._id,
        t = t._name) : (e = Rs(),
        (n = Is).time = Uo(),
        t = null == t ? null : t + "");
        for (var i = this._groups, r = i.length, o = 0; o < r; ++o)
            for (var s, a = i[o], c = a.length, u = 0; u < c; ++u)
                (s = a[u]) && Go(s, t, e, u, a, n || Us(s, e));
        return new js(i,this._parents,t,e)
    }
    ;
    e.a = {
        area: y,
        axisBottom: function(t) {
            return nt(3, t)
        },
        axisLeft: function(t) {
            return nt(4, t)
        },
        axisRight: function(t) {
            return nt(2, t)
        },
        bisector: rt,
        extent: ct,
        line: _,
        max: function(t, e) {
            let n;
            if (void 0 === e)
                for (const e of t)
                    null != e && (n < e || void 0 === n && e >= e) && (n = e);
            else {
                let i = -1;
                for (let r of t)
                    null != (r = e(r, ++i, t)) && (n < r || void 0 === n && r >= r) && (n = r)
            }
            return n
        },
        min: mt,
        mouse: function(t) {
            var e = bo();
            return e.changedTouches && (e = e.changedTouches[0]),
            xo(t, e)
        },
        scaleLinear: function t() {
            var e = we(ge, ge);
            return e.copy = function() {
                return be(e, t())
            }
            ,
            vt.apply(e, arguments),
            Ie(e)
        },
        scaleUtc: function() {
            return vt.apply(or(Pn, Mn, wn, bn, _n, mn, Ze, Ve, In).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
        },
        select: vo,
        transition: Ds,
        timeDay: en,
        timeFormat: $n,
        timeMonth: fn
    }
}
, function(t, e, n) {
    t.exports = {
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
, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return a
    }
    )),
    n.d(e, "b", (function() {
        return c
    }
    )),
    n.d(e, "c", (function() {
        return d
    }
    )),
    n.d(e, "d", (function() {
        return r
    }
    )),
    n.d(e, "e", (function() {
        return s
    }
    )),
    n.d(e, "f", (function() {
        return f
    }
    )),
    n.d(e, "g", (function() {
        return _
    }
    )),
    n.d(e, "h", (function() {
        return v
    }
    )),
    n.d(e, "i", (function() {
        return h
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
        return m
    }
    )),
    n.d(e, "n", (function() {
        return g
    }
    ));
    const i = Object.prototype.toString;
    function r(t) {
        switch (i.call(t)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
            return !0;
        default:
            return _(t, Error)
        }
    }
    function o(t, e) {
        return i.call(t) === `[object ${e}]`
    }
    function s(t) {
        return o(t, "ErrorEvent")
    }
    function a(t) {
        return o(t, "DOMError")
    }
    function c(t) {
        return o(t, "DOMException")
    }
    function u(t) {
        return o(t, "String")
    }
    function l(t) {
        return null === t || "object" != typeof t && "function" != typeof t
    }
    function h(t) {
        return o(t, "Object")
    }
    function f(t) {
        return "undefined" != typeof Event && _(t, Event)
    }
    function d(t) {
        return "undefined" != typeof Element && _(t, Element)
    }
    function p(t) {
        return o(t, "RegExp")
    }
    function g(t) {
        return Boolean(t && t.then && "function" == typeof t.then)
    }
    function m(t) {
        return h(t) && "nativeEvent"in t && "preventDefault"in t && "stopPropagation"in t
    }
    function v(t) {
        return "number" == typeof t && t != t
    }
    function _(t, e) {
        try {
            return t instanceof e
        } catch (t) {
            return !1
        }
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "b", (function() {
        return i
    }
    )),
    n.d(e, "a", (function() {
        return r
    }
    )),
    n.d(e, "e", (function() {
        return a
    }
    )),
    n.d(e, "d", (function() {
        return c
    }
    )),
    n.d(e, "c", (function() {
        return u
    }
    )),
    n.d(e, "f", (function() {
        return h
    }
    ));
    const i = "M1 6H3L3 2.5H4L2 0L0 2.5H1L1 4.5V6Z"
      , r = "M3 0L1 0L1 3.5L0 3.5L2 6L4 3.5H3L3 1.5L3 0Z"
      , o = {
        all: {
            month: "short",
            day: "numeric",
            year: "numeric"
        },
        year: {
            month: "short",
            day: "numeric"
        },
        month: {
            month: "short",
            day: "numeric"
        },
        week: {
            weekday: "short",
            day: "numeric"
        },
        day: {
            hour: "numeric",
            minute: "numeric"
        }
    }
      , s = "TH/s";
    function a(t, e) {
        switch (e) {
        case "USD":
            return `${t < 0 ? "-" : ""}${"$"}${l(t, 2)}`;
        case "BTC":
            {
                const e = "BTC";
                return `${t < 0 ? "-" : ""}${l(t, 8)} ${e}`
            }
        case s:
            {
                const e = s;
                return `${l(t, 3)} ${e}`
            }
        default:
            return `error: unknown unitsType: ${e}`
        }
    }
    function c(t, e) {
        return l(100 * t / e, 2)
    }
    function u(t, e, n=!1) {
        if (e) {
            let i = o[e];
            return n && (i.timeZone = "UTC"),
            t.toLocaleString(void 0, i)
        }
        return t.toLocaleString(void 0, {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric"
        })
    }
    const l = (t,e)=>{
        const n = Number(Math.abs(t).toFixed(e)).toString().split(".");
        n.push("00");
        return n[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "." + n[1].padEnd(e, "0")
    }
    ;
    function h() {
        return document.body.clientWidth < 512
    }
}
, function(t, e, n) {
    "use strict";
    (function(t) {
        function i(t) {
            return t && t.Math == Math ? t : void 0
        }
        n.d(e, "a", (function() {
            return r
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
        const r = "object" == typeof globalThis && i(globalThis) || "object" == typeof window && i(window) || "object" == typeof self && i(self) || "object" == typeof t && i(t) || function() {
            return this
        }() || {};
        function o() {
            return r
        }
        function s(t, e, n) {
            const i = n || r
              , o = i.__SENTRY__ = i.__SENTRY__ || {};
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
    var i = n(18)
      , r = n(15)
      , o = n(4)
      , s = n(21)
      , a = n(13)
      , c = n(9);
    const u = "00000000000000000000000000000000"
      , l = 100;
    class h {
        __init() {
            this._stack = [{}]
        }
        constructor(t, e=new a.a, n=4) {
            this._version = n,
            h.prototype.__init.call(this),
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
            const t = a.a.clone(this.getScope());
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
            return this._lastEventId = this._withClient(((i,r)=>i.captureException(t, {
                originalException: t,
                syntheticException: n,
                ...e
            }, r))) || u,
            this._lastEventId
        }
        captureMessage(t, e, n) {
            const i = new Error(t);
            return this._lastEventId = this._withClient(((r,o)=>r.captureMessage(t, e, {
                originalException: t,
                syntheticException: i,
                ...n
            }, o))) || u,
            this._lastEventId
        }
        captureEvent(t, e) {
            const n = this._withClient(((n,i)=>n.captureEvent(t, {
                ...e
            }, i))) || u;
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
            const {beforeBreadcrumb: s=null, maxBreadcrumbs: a=l} = o.getOptions && o.getOptions() || {};
            if (a <= 0)
                return;
            const c = {
                timestamp: Object(i.a)(),
                ...t
            }
              , u = s ? Object(r.b)((()=>s(c, e))) : c;
            null !== u && n.addBreadcrumb(u, a)
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
            const e = d(this);
            try {
                t(this)
            } finally {
                d(e)
            }
        }
        getIntegration(t) {
            const e = this.getClient();
            if (!e)
                return null;
            try {
                return e.getIntegration(t)
            } catch (e) {
                return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.c.warn(`Cannot retrieve integration ${t.id} from the current Hub`),
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
            n && Object(c.a)(n),
            this._sendSessionUpdate(),
            e && e.setSession()
        }
        startSession(t) {
            const {scope: e, client: n} = this.getStackTop()
              , {release: i, environment: r} = n && n.getOptions() || {}
              , {userAgent: s} = o.a.navigator || {}
              , a = Object(c.b)({
                release: i,
                environment: r,
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
                t && "ok" === t.status && Object(c.c)(t, {
                    status: "exited"
                }),
                this.endSession(),
                e.setSession(a)
            }
            return a
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
            const n = f().__SENTRY__;
            if (n && n.extensions && "function" == typeof n.extensions[t])
                return n.extensions[t].apply(this, e);
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.c.warn(`Extension method ${t} couldn't be found, doing nothing.`)
        }
    }
    function f() {
        return o.a.__SENTRY__ = o.a.__SENTRY__ || {
            extensions: {},
            hub: void 0
        },
        o.a
    }
    function d(t) {
        const e = f()
          , n = m(e);
        return v(e, t),
        n
    }
    function p() {
        const t = f();
        return g(t) && !m(t).isOlderThan(4) || v(t, new h),
        Object(s.b)() ? function(t) {
            try {
                const e = f().__SENTRY__
                  , n = e && e.extensions && e.extensions.domain && e.extensions.domain.active;
                if (!n)
                    return m(t);
                if (!g(n) || m(n).isOlderThan(4)) {
                    const e = m(t).getStackTop();
                    v(n, new h(e.client,a.a.clone(e.scope)))
                }
                return m(n)
            } catch (e) {
                return m(t)
            }
        }(t) : m(t)
    }
    function g(t) {
        return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
    }
    function m(t) {
        return Object(o.c)("hub", (()=>new h), t)
    }
    function v(t, e) {
        if (!t)
            return !1;
        return (t.__SENTRY__ = t.__SENTRY__ || {}).hub = e,
        !0
    }
}
, , function(t, e, n) {
    "use strict";
    n.d(e, "c", (function() {
        return s
    }
    )),
    n.d(e, "a", (function() {
        return a
    }
    )),
    n.d(e, "b", (function() {
        return c
    }
    ));
    var i = n(3)
      , r = n(1)
      , o = n.n(r);
    const s = (t,e,n)=>{
        const {position: r, fontSize: s, unitsType: a, utc: c=!1} = n;
        if (!e)
            return t.transition().style("opacity", 0);
        const {timeFrame: u, value: l, date: h} = e;
        t.style("pointer-events", "none").style("user-select", "none").style("font-size", `${s}px`),
        0 == t.style("opacity") && t.transition().style("opacity", 1),
        t.selectAll("text").remove();
        const f = t.append("text")
          , d = f.append("tspan").text(Object(i.e)(l, a)).attr("x", r.x).attr("y", r.y).style("fill", "white")
          , p = f.append("tspan").text(`${Object(i.c)(h, u, c)}`).attr("dx", 5).style("fill", o.a.neutral300);
        if (e.dateStart) {
            let t, n;
            const r = l - e.valueStart;
            t = Object(i.e)(r, a);
            const s = Object(i.d)(r, e.valueStart);
            r < 0 ? (t = `${t} (${s}%)`,
            n = o.a.redLight) : (t = `+${t} (${s}%)`,
            n = o.a.green),
            d.style("fill", n).text(t),
            p.text(`${Object(i.c)(e.dateStart, u, c)} - ${Object(i.c)(h, u, c)}`)
        }
        if (!r.leftReference) {
            const {width: t} = f.node().getBBox();
            f.attr("transform", `translate(${-t}, 0)`)
        }
    }
    ;
    function a(t, e, n, i) {
        const r = t.append("g").style("visibility", "hidden").attr("class", "tooltip-popup")
          , s = function(t) {
            r.style("visibility", "visible")
        };
        t.append("g").attr("class", "tooltip-icon").attr("transform", `translate(${n},${i - 38})`).attr("font-weight", o.a.fontWeightMedium).on("touchstart", s).on("mouseover", s).on("mouseleave", (function(t) {
            r.style("visibility", "hidden")
        }
        )).append("path").attr("d", "M6.5 0C2.88889 0 0 2.88889 0 6.5C0 10.1111 2.88889 13 6.5 13C10.1111 13 13 10.1111 13 6.5C13 2.88889 10.1111 0 6.5 0ZM6.50006 10.1111C6.50006 10.1111 6.21117 10.3278 5.9945 10.3278H5.85006H5.77783C5.41672 10.2556 5.20006 9.89444 5.3445 9.53333L5.85006 7.51111L6.06672 6.57222C6.18839 6.08554 5.96844 6.191 5.71381 6.3131C5.515 6.40842 5.29505 6.51388 5.20006 6.35555C5.06358 6.0826 5.76527 5.61623 6.39136 5.2001L6.50006 5.12778C6.50006 5.12778 6.78895 4.91111 7.00561 4.91111H7.15006H7.22228C7.58339 4.98333 7.80006 5.34444 7.72784 5.70555L7.22228 7.72778L7.00561 8.66667C6.88837 9.13562 7.08833 9.03363 7.33086 8.90992C7.53654 8.80501 7.77285 8.68448 7.87228 8.88333C7.87228 9.17222 7.07784 9.75 6.50006 10.1111ZM6.57252 4.47778C7.07807 4.62222 7.58363 4.33333 7.72808 3.82778C7.87252 3.32222 7.58363 2.81667 7.00585 2.67222C6.5003 2.52778 5.99474 2.81667 5.8503 3.32222C5.77808 3.82778 6.06696 4.33333 6.57252 4.47778Z").attr("fill", o.a.neutral300).attr("fill-rule", "evenodd");
        const a = r.append("rect").attr("x", n - 20).attr("y", -44).attr("height", 50).attr("rx", 6).attr("ry", 6).attr("fill", "#555")
          , c = r.append("text").text(e).attr("fill", "white").attr("font-weight", 100).attr("font-size", "14px").attr("dy", -12).attr("dx", 45)
          , u = c.node().getBBox().width;
        a.attr("width", u + 90).attr("x", n - u / 2 - 45 + 10),
        r.append("g").attr("transform", `translate(${n + 7}, -3)`).append("rect").attr("width", 10).attr("height", 10).attr("fill", "#555").attr("style", "transform: rotate(45deg)"),
        c.attr("x", n - u / 2 - 45 + 10)
    }
    function c() {
        const t = document.getElementsByName("charts-component")[0].clientWidth;
        let e = 80;
        return t >= 1216 && t < 1500 && (e = 91),
        t >= 1116 && t < 1216 && (e = 95),
        t >= 949 && t < 1116 && (e = 100),
        e
    }
}
, function(t, e, n) {
    "use strict";
    function i(t, e="name", n="content") {
        const i = document.querySelector(`[${e}~=${t}]`);
        return i ? i[n] : null
    }
    n.d(e, "a", (function() {
        return i
    }
    ))
}
, function(t, e, n) {
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
        return a
    }
    ));
    var i = n(18)
      , r = n(24)
      , o = n(10);
    function s(t) {
        const e = Object(i.b)()
          , n = {
            sid: Object(r.f)(),
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
        return t && a(n, t),
        n
    }
    function a(t, e={}) {
        if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address),
        t.did || e.did || (t.did = e.user.id || e.user.email || e.user.username)),
        t.timestamp = e.timestamp || Object(i.b)(),
        e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration),
        e.sid && (t.sid = 32 === e.sid.length ? e.sid : Object(r.f)()),
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
    function c(t, e) {
        let n = {};
        e ? n = {
            status: e
        } : "ok" === t.status && (n = {
            status: "exited"
        }),
        a(t, n)
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return a
    }
    )),
    n.d(e, "b", (function() {
        return h
    }
    )),
    n.d(e, "c", (function() {
        return g
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
        return c
    }
    )),
    n.d(e, "h", (function() {
        return l
    }
    ));
    var i = n(36)
      , r = n(2)
      , o = n(12);
    function s(t, e, n) {
        if (!(e in t))
            return;
        const i = t[e]
          , r = n(i);
        if ("function" == typeof r)
            try {
                c(r, i)
            } catch (t) {}
        t[e] = r
    }
    function a(t, e, n) {
        Object.defineProperty(t, e, {
            value: n,
            writable: !0,
            configurable: !0
        })
    }
    function c(t, e) {
        const n = e.prototype || {};
        t.prototype = e.prototype = n,
        a(t, "__sentry_original__", e)
    }
    function u(t) {
        return t.__sentry_original__
    }
    function l(t) {
        return Object.keys(t).map((e=>`${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`)).join("&")
    }
    function h(t) {
        if (Object(r.d)(t))
            return {
                message: t.message,
                name: t.name,
                stack: t.stack,
                ...d(t)
            };
        if (Object(r.f)(t)) {
            const e = {
                type: t.type,
                target: f(t.target),
                currentTarget: f(t.currentTarget),
                ...d(t)
            };
            return "undefined" != typeof CustomEvent && Object(r.g)(t, CustomEvent) && (e.detail = t.detail),
            e
        }
        return t
    }
    function f(t) {
        try {
            return Object(r.c)(t) ? Object(i.b)(t) : Object.prototype.toString.call(t)
        } catch (t) {
            return "<unknown>"
        }
    }
    function d(t) {
        if ("object" == typeof t && null !== t) {
            const e = {};
            for (const n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        }
        return {}
    }
    function p(t, e=40) {
        const n = Object.keys(h(t));
        if (n.sort(),
        !n.length)
            return "[object has no keys]";
        if (n[0].length >= e)
            return Object(o.d)(n[0], e);
        for (let t = n.length; t > 0; t--) {
            const i = n.slice(0, t).join(", ");
            if (!(i.length > e))
                return t === n.length ? i : Object(o.d)(i, e)
        }
        return ""
    }
    function g(t) {
        return m(t, new Map)
    }
    function m(t, e) {
        if (Object(r.i)(t)) {
            const n = e.get(t);
            if (void 0 !== n)
                return n;
            const i = {};
            e.set(t, i);
            for (const n of Object.keys(t))
                void 0 !== t[n] && (i[n] = m(t[n], e));
            return i
        }
        if (Array.isArray(t)) {
            const n = e.get(t);
            if (void 0 !== n)
                return n;
            const i = [];
            return e.set(t, i),
            t.forEach((t=>{
                i.push(m(t, e))
            }
            )),
            i
        }
        return t
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "b", (function() {
        return r
    }
    )),
    n.d(e, "c", (function() {
        return o
    }
    )),
    n.d(e, "a", (function() {
        return s
    }
    ));
    var i = n(0);
    const r = (t,e)=>i.a.scaleUtc().domain(i.a.extent(t.chart, (t=>t.date))).range([e.margin.left, e.width - e.margin.right])
      , o = (t,e,n=1,r=1)=>i.a.scaleLinear().domain([i.a.min(t.chart, (t=>t.value * n)), i.a.max(t.chart, (t=>t.value * r))]).nice().range([e.height - e.margin.bottom, e.margin.top])
      , s = (t,e,n,r)=>{
        const o = e.invert(t)
          , s = i.a.bisector((t=>t.date)).left(r.chart, o, 1)
          , a = r.chart[s - 1]
          , c = r.chart[s]
          , u = null != a && null != c && o - a.date > c.date - o ? c : a
          , l = null != a && null != c && o - a.date > c.date - o ? a : c;
        return {
            xCoord: e(u.date),
            yCoord: n(u.value),
            date: u.date,
            value: u.value,
            priorValue: null != l ? l.value : r.chart.at(-2).value
        }
    }
}
, function(t, e, n) {
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
        return a
    }
    )),
    n.d(e, "d", (function() {
        return r
    }
    ));
    var i = n(2);
    function r(t, e=0) {
        return "string" != typeof t || 0 === e || t.length <= e ? t : `${t.substr(0, e)}...`
    }
    function o(t, e) {
        let n = t;
        const i = n.length;
        if (i <= 150)
            return n;
        e > i && (e = i);
        let r = Math.max(e - 60, 0);
        r < 5 && (r = 0);
        let o = Math.min(r + 140, i);
        return o > i - 5 && (o = i),
        o === i && (r = Math.max(o - 140, 0)),
        n = n.slice(r, o),
        r > 0 && (n = `'{snip} ${n}`),
        o < i && (n += " {snip}"),
        n
    }
    function s(t, e) {
        if (!Array.isArray(t))
            return "";
        const n = [];
        for (let e = 0; e < t.length; e++) {
            const i = t[e];
            try {
                n.push(String(i))
            } catch (t) {
                n.push("[value cannot be serialized]")
            }
        }
        return n.join(e)
    }
    function a(t, e=[], n=!1) {
        return e.some((e=>function(t, e, n=!1) {
            return !!Object(i.l)(t) && (Object(i.k)(e) ? e.test(t) : !!Object(i.l)(e) && (n ? t === e : t.includes(e)))
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
        return f
    }
    ));
    var i = n(2)
      , r = n(18)
      , o = n(28)
      , s = n(15)
      , a = n(24)
      , c = n(4)
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
            t._requestSession && (this._requestSession = t._requestSession)) : Object(i.i)(t) && (this._tags = {
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
            const i = {
                timestamp: Object(r.a)(),
                ...t
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
            this._notifyEventProcessors([...h(), ...this._eventProcessors], t, e)
        }
        setSDKProcessingMetadata(t) {
            return this._sdkProcessingMetadata = {
                ...this._sdkProcessingMetadata,
                ...t
            },
            this
        }
        _notifyEventProcessors(t, e, n, r=0) {
            return new o.a(((o,a)=>{
                const c = t[r];
                if (null === e || "function" != typeof c)
                    o(e);
                else {
                    const u = c({
                        ...e
                    }, n);
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.id && null === u && s.c.log(`Event processor "${c.id}" dropped event`),
                    Object(i.n)(u) ? u.then((e=>this._notifyEventProcessors(t, e, n, r + 1).then(o))).then(null, a) : this._notifyEventProcessors(t, u, n, r + 1).then(o).then(null, a)
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
            t.fingerprint = t.fingerprint ? Object(a.c)(t.fingerprint) : [],
            this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)),
            t.fingerprint && !t.fingerprint.length && delete t.fingerprint
        }
    }
    function h() {
        return Object(c.c)("globalEventProcessors", (()=>[]))
    }
    function f(t) {
        h().push(t)
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "b", (function() {
        return d
    }
    )),
    n.d(e, "a", (function() {
        return p
    }
    )),
    n.d(e, "c", (function() {
        return g
    }
    )),
    n.d(e, "e", (function() {
        return m
    }
    )),
    n.d(e, "d", (function() {
        return v
    }
    ));
    var i = n(0)
      , r = n(7)
      , o = n(11)
      , s = n(1)
      , a = n.n(s);
    const c = a.a.gold
      , u = a.a.goldDarker
      , l = "c-time-series-chart-container"
      , h = "c-time-series-chart-container--loading";
    function f() {
        return i.a.select(`.${l}`)
    }
    function d() {
        return document.getElementsByClassName(l)[0]
    }
    function p() {
        f().selectAll("*").remove()
    }
    function g() {
        p(),
        d().classList.add(h)
    }
    function m() {
        d().classList.remove(h)
    }
    const v = ({data: t, layout: e, timeFrame: n, tooltipConfig: s, version: l=1})=>{
        const {height: h, width: d, margin: p, areaHeight: g} = e
          , m = Object(o.b)(t, e)
          , v = Object(o.c)(t, e)
          , _ = i.a.area().defined((t=>!isNaN(t.value))).x((t=>m(t.date))).y1((t=>v(t.value))).y0(g)
          , y = i.a.line().defined((t=>!isNaN(t.value))).x((t=>m(t.date))).y((t=>v(t.value)))
          , b = f().append("svg").attr("viewBox", [0, 0, d, h]).style("-webkit-tap-highlight-color", "transparent").style("overflow", "visible")
          , x = b.append("linearGradient").attr("id", "areaGradient").attr("x1", "0%").attr("x2", "0%").attr("y1", "0%").attr("y2", "120%");
        x.append("stop").attr("offset", "0").attr("stop-color", u).attr("stop-opacity", 1),
        x.append("stop").attr("offset", "1").attr("stop-color", "transparent").attr("stop-opacity", 1);
        const w = b.append("path").datum(t.chart).attr("fill", "url(#areaGradient)").attr("d", _);
        b.append("path").datum(t.chart).attr("fill", "none").attr("stroke", c).attr("stroke-width", 1.5).attr("stroke-linejoin", "round").attr("stroke-linecap", "round").attr("d", y),
        b.selectAll("text").style("user-select", "none");
        const k = b.append("linearGradient").attr("id", "areaGradient2").attr("x1", "0%").attr("x2", "0%").attr("y1", "0%").attr("y2", "100%");
        k.append("stop").attr("offset", "0").attr("stop-color", a.a.neutral300).attr("stop-opacity", "0"),
        k.append("stop").attr("offset", "100%").attr("stop-color", "white").attr("stop-opacity", "0.8");
        var E = b.append("clipPath").attr("id", "clip").append("rect").attr("x", "0").attr("y", "0").attr("width", d).attr("height", h);
        const S = b.append("rect").attr("width", .5).attr("height", h - p.bottom).attr("x", 0).attr("y", 0).attr("stroke-width", .5).attr("stroke", "url(#areaGradient2)").attr("fill", "none").style("opacity", 0).attr("pointer-events", "none")
          , A = S.clone();
        let C, T = !1, L = !1;
        const M = b.append("g").style("opacity", 0)
          , O = e=>{
            const a = i.a.mouse(e)[0];
            if (2 == l && a > 729)
                return;
            const {xCoord: c, yCoord: u, date: h, value: f, priorValue: d} = Object(o.a)(a, m, v, t);
            if (S.attr("x", c),
            0 == S.style("opacity") && S.transition().style("opacity", 1),
            T) {
                L = !0,
                E.attr("width", Math.abs(c - m(C.date))),
                c - m(C.date) >= 0 ? E.attr("x", m(C.date)) : E.attr("x", m(C.date) - E.attr("width"));
                const t = i.a.area().defined((t=>!isNaN(t.value))).x((t=>m(t.date))).y1((t=>{
                    if (C.date < h) {
                        if (t.date < C.date)
                            return g;
                        if (t.date > h)
                            return g
                    }
                    if (C.date > h) {
                        if (t.date > C.date)
                            return g;
                        if (t.date < h)
                            return g
                    }
                    return v(t.value)
                }
                )).y0(g);
                w.attr("d", t).attr("clip-path", "url(#clip)"),
                h < C.date ? M.call(r.c, {
                    timeFrame: n,
                    value: C.value,
                    valueStart: f,
                    date: C.date,
                    dateStart: h
                }, s) : M.call(r.c, {
                    timeFrame: n,
                    value: f,
                    valueStart: C.value,
                    date: h,
                    dateStart: C.date
                }, s)
            } else
                M.call(r.c, {
                    timeFrame: n,
                    value: f,
                    date: h
                }, s)
        }
        ;
        return b.on("touchmove mousemove", (function() {
            O(this)
        }
        )).on("touchend mouseleave", (()=>{
            T || (S.transition().style("opacity", 0),
            A.transition().style("opacity", 0),
            M.call(r.c, null, s))
        }
        )).on("touchstart mousedown", (function() {
            const e = i.a.mouse(this)[0];
            if (2 == l && e > 729)
                return;
            const {xCoord: n, yCoord: r, date: s, value: a, priorValue: c} = Object(o.a)(e, m, v, t);
            T = !0,
            A.attr("x", n).transition().style("opacity", 1),
            C = {
                date: s,
                value: a
            }
        }
        )).on("touchend mouseup", (function() {
            E.attr("x", 0),
            E.attr("width", d),
            L && (L = !1,
            w.attr("d", _)),
            T = !1,
            A.transition().duration(10).style("opacity", 0),
            O(this)
        }
        )),
        b
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return r
    }
    )),
    n.d(e, "b", (function() {
        return o
    }
    )),
    n.d(e, "c", (function() {
        return a
    }
    ));
    var i = n(4);
    const r = ["debug", "info", "warn", "error", "log", "assert", "trace"];
    function o(t) {
        if (!("console"in i.a))
            return t();
        const e = i.a.console
          , n = {};
        r.forEach((t=>{
            const i = e[t] && e[t].__sentry_original__;
            t in e && i && (n[t] = e[t],
            e[t] = i)
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
        return "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? r.forEach((n=>{
            e[n] = (...e)=>{
                t && o((()=>{
                    i.a.console[n](`Sentry Logger [${n}]:`, ...e)
                }
                ))
            }
        }
        )) : r.forEach((t=>{
            e[t] = ()=>{}
        }
        )),
        e
    }
    let a;
    a = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? Object(i.c)("logger", s) : s()
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return L
    }
    ));
    var i = t=>{
        if ("function" == typeof t)
            return t;
        return function() {
            return t
        }
    }
      , r = "undefined" != typeof self ? self : null
      , o = "undefined" != typeof window ? window : null
      , s = r || o || s
      , a = 0
      , c = 1
      , u = 2
      , l = 3
      , h = "closed"
      , f = "errored"
      , d = "joined"
      , p = "joining"
      , g = "leaving"
      , m = "phx_close"
      , v = "phx_error"
      , _ = "phx_join"
      , y = "phx_reply"
      , b = "phx_leave"
      , x = "longpoll"
      , w = "websocket"
      , k = 4
      , E = class {
        constructor(t, e, n, i) {
            this.channel = t,
            this.event = e,
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
        resend(t) {
            this.timeout = t,
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
        receive(t, e) {
            return this.hasReceived(t) && e(this.receivedResp.response),
            this.recHooks.push({
                status: t,
                callback: e
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
        matchReceive({status: t, response: e, _ref: n}) {
            this.recHooks.filter((e=>e.status === t)).forEach((t=>t.callback(e)))
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
            this.channel.on(this.refEvent, (t=>{
                this.cancelRefEvent(),
                this.cancelTimeout(),
                this.receivedResp = t,
                this.matchReceive(t)
            }
            )),
            this.timeoutTimer = setTimeout((()=>{
                this.trigger("timeout", {})
            }
            ), this.timeout)
        }
        hasReceived(t) {
            return this.receivedResp && this.receivedResp.status === t
        }
        trigger(t, e) {
            this.channel.trigger(this.refEvent, {
                status: t,
                response: e
            })
        }
    }
      , S = class {
        constructor(t, e) {
            this.callback = t,
            this.timerCalc = e,
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
        static request(t, e, n, i, r, o, a) {
            if (s.XDomainRequest) {
                let n = new s.XDomainRequest;
                return this.xdomainRequest(n, t, e, i, r, o, a)
            }
            {
                let c = new s.XMLHttpRequest;
                return this.xhrRequest(c, t, e, n, i, r, o, a)
            }
        }
        static xdomainRequest(t, e, n, i, r, o, s) {
            return t.timeout = r,
            t.open(e, n),
            t.onload = ()=>{
                let e = this.parseJSON(t.responseText);
                s && s(e)
            }
            ,
            o && (t.ontimeout = o),
            t.onprogress = ()=>{}
            ,
            t.send(i),
            t
        }
        static xhrRequest(t, e, n, i, r, o, s, a) {
            return t.open(e, n, !0),
            t.timeout = o,
            t.setRequestHeader("Content-Type", i),
            t.onerror = ()=>a && a(null),
            t.onreadystatechange = ()=>{
                if (t.readyState === k && a) {
                    let e = this.parseJSON(t.responseText);
                    a(e)
                }
            }
            ,
            s && (t.ontimeout = s),
            t.send(r),
            t
        }
        static parseJSON(t) {
            if (!t || "" === t)
                return null;
            try {
                return JSON.parse(t)
            } catch (e) {
                return console && console.log("failed to parse JSON response", t),
                null
            }
        }
        static serialize(t, e) {
            let n = [];
            for (var i in t) {
                if (!Object.prototype.hasOwnProperty.call(t, i))
                    continue;
                let r = e ? `${e}[${i}]` : i
                  , o = t[i];
                "object" == typeof o ? n.push(this.serialize(o, r)) : n.push(encodeURIComponent(r) + "=" + encodeURIComponent(o))
            }
            return n.join("&")
        }
        static appendParams(t, e) {
            if (0 === Object.keys(e).length)
                return t;
            let n = t.match(/\?/) ? "&" : "?";
            return `${t}${n}${this.serialize(e)}`
        }
    }
      , C = class {
        constructor(t) {
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
            this.pollEndpoint = this.normalizeEndpoint(t),
            this.readyState = a,
            this.poll()
        }
        normalizeEndpoint(t) {
            return t.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + w), "$1/" + x)
        }
        endpointURL() {
            return A.appendParams(this.pollEndpoint, {
                token: this.token
            })
        }
        closeAndRetry(t, e, n) {
            this.close(t, e, n),
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
            this.ajax("GET", "application/json", null, (()=>this.ontimeout()), (t=>{
                if (t) {
                    var {status: e, token: n, messages: i} = t;
                    this.token = n
                } else
                    e = 0;
                switch (e) {
                case 200:
                    i.forEach((t=>{
                        setTimeout((()=>this.onmessage({
                            data: t
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
                    throw new Error(`unhandled poll status ${e}`)
                }
            }
            ))
        }
        send(t) {
            this.currentBatch ? this.currentBatch.push(t) : this.awaitingBatchAck ? this.batchBuffer.push(t) : (this.currentBatch = [t],
            this.currentBatchTimer = setTimeout((()=>{
                this.batchSend(this.currentBatch),
                this.currentBatch = null
            }
            ), 0))
        }
        batchSend(t) {
            this.awaitingBatchAck = !0,
            this.ajax("POST", "application/x-ndjson", t.join("\n"), (()=>this.onerror("timeout")), (t=>{
                this.awaitingBatchAck = !1,
                t && 200 === t.status ? this.batchBuffer.length > 0 && (this.batchSend(this.batchBuffer),
                this.batchBuffer = []) : (this.onerror(t && t.status),
                this.closeAndRetry(1011, "internal server error", !1))
            }
            ))
        }
        close(t, e, n) {
            for (let t of this.reqs)
                t.abort();
            this.readyState = l;
            let i = Object.assign({
                code: 1e3,
                reason: void 0,
                wasClean: !0
            }, {
                code: t,
                reason: e,
                wasClean: n
            });
            this.batchBuffer = [],
            clearTimeout(this.currentBatchTimer),
            this.currentBatchTimer = null,
            "undefined" != typeof CloseEvent ? this.onclose(new CloseEvent("close",i)) : this.onclose(i)
        }
        ajax(t, e, n, i, r) {
            let o;
            o = A.request(t, this.endpointURL(), e, n, this.timeout, (()=>{
                this.reqs.delete(o),
                i()
            }
            ), (t=>{
                this.reqs.delete(o),
                this.isActive() && r(t)
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
        encode(t, e) {
            if (t.payload.constructor === ArrayBuffer)
                return e(this.binaryEncode(t));
            {
                let n = [t.join_ref, t.ref, t.topic, t.event, t.payload];
                return e(JSON.stringify(n))
            }
        },
        decode(t, e) {
            if (t.constructor === ArrayBuffer)
                return e(this.binaryDecode(t));
            {
                let[n,i,r,o,s] = JSON.parse(t);
                return e({
                    join_ref: n,
                    ref: i,
                    topic: r,
                    event: o,
                    payload: s
                })
            }
        },
        binaryEncode(t) {
            let {join_ref: e, ref: n, event: i, topic: r, payload: o} = t
              , s = this.META_LENGTH + e.length + n.length + r.length + i.length
              , a = new ArrayBuffer(this.HEADER_LENGTH + s)
              , c = new DataView(a)
              , u = 0;
            c.setUint8(u++, this.KINDS.push),
            c.setUint8(u++, e.length),
            c.setUint8(u++, n.length),
            c.setUint8(u++, r.length),
            c.setUint8(u++, i.length),
            Array.from(e, (t=>c.setUint8(u++, t.charCodeAt(0)))),
            Array.from(n, (t=>c.setUint8(u++, t.charCodeAt(0)))),
            Array.from(r, (t=>c.setUint8(u++, t.charCodeAt(0)))),
            Array.from(i, (t=>c.setUint8(u++, t.charCodeAt(0))));
            var l = new Uint8Array(a.byteLength + o.byteLength);
            return l.set(new Uint8Array(a), 0),
            l.set(new Uint8Array(o), a.byteLength),
            l.buffer
        },
        binaryDecode(t) {
            let e = new DataView(t)
              , n = e.getUint8(0)
              , i = new TextDecoder;
            switch (n) {
            case this.KINDS.push:
                return this.decodePush(t, e, i);
            case this.KINDS.reply:
                return this.decodeReply(t, e, i);
            case this.KINDS.broadcast:
                return this.decodeBroadcast(t, e, i)
            }
        },
        decodePush(t, e, n) {
            let i = e.getUint8(1)
              , r = e.getUint8(2)
              , o = e.getUint8(3)
              , s = this.HEADER_LENGTH + this.META_LENGTH - 1
              , a = n.decode(t.slice(s, s + i));
            s += i;
            let c = n.decode(t.slice(s, s + r));
            s += r;
            let u = n.decode(t.slice(s, s + o));
            return s += o,
            {
                join_ref: a,
                ref: null,
                topic: c,
                event: u,
                payload: t.slice(s, t.byteLength)
            }
        },
        decodeReply(t, e, n) {
            let i = e.getUint8(1)
              , r = e.getUint8(2)
              , o = e.getUint8(3)
              , s = e.getUint8(4)
              , a = this.HEADER_LENGTH + this.META_LENGTH
              , c = n.decode(t.slice(a, a + i));
            a += i;
            let u = n.decode(t.slice(a, a + r));
            a += r;
            let l = n.decode(t.slice(a, a + o));
            a += o;
            let h = n.decode(t.slice(a, a + s));
            a += s;
            let f = t.slice(a, t.byteLength);
            return {
                join_ref: c,
                ref: u,
                topic: l,
                event: y,
                payload: {
                    status: h,
                    response: f
                }
            }
        },
        decodeBroadcast(t, e, n) {
            let i = e.getUint8(1)
              , r = e.getUint8(2)
              , o = this.HEADER_LENGTH + 2
              , s = n.decode(t.slice(o, o + i));
            o += i;
            let a = n.decode(t.slice(o, o + r));
            return o += r,
            {
                join_ref: null,
                ref: null,
                topic: s,
                event: a,
                payload: t.slice(o, t.byteLength)
            }
        }
    }
      , L = class {
        constructor(t, e={}) {
            this.stateChangeCallbacks = {
                open: [],
                close: [],
                error: [],
                message: []
            },
            this.channels = [],
            this.sendBuffer = [],
            this.ref = 0,
            this.timeout = e.timeout || 1e4,
            this.transport = e.transport || s.WebSocket || C,
            this.establishedConnections = 0,
            this.defaultEncoder = T.encode.bind(T),
            this.defaultDecoder = T.decode.bind(T),
            this.closeWasClean = !1,
            this.binaryType = e.binaryType || "arraybuffer",
            this.connectClock = 1,
            this.transport !== C ? (this.encode = e.encode || this.defaultEncoder,
            this.decode = e.decode || this.defaultDecoder) : (this.encode = this.defaultEncoder,
            this.decode = this.defaultDecoder);
            let n = null;
            o && o.addEventListener && (o.addEventListener("pagehide", (t=>{
                this.conn && (this.disconnect(),
                n = this.connectClock)
            }
            )),
            o.addEventListener("pageshow", (t=>{
                n === this.connectClock && (n = null,
                this.connect())
            }
            ))),
            this.heartbeatIntervalMs = e.heartbeatIntervalMs || 3e4,
            this.rejoinAfterMs = t=>e.rejoinAfterMs ? e.rejoinAfterMs(t) : [1e3, 2e3, 5e3][t - 1] || 1e4,
            this.reconnectAfterMs = t=>e.reconnectAfterMs ? e.reconnectAfterMs(t) : [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][t - 1] || 5e3,
            this.logger = e.logger || null,
            this.longpollerTimeout = e.longpollerTimeout || 2e4,
            this.params = i(e.params || {}),
            this.endPoint = `${t}/${w}`,
            this.vsn = e.vsn || "2.0.0",
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
        replaceTransport(t) {
            this.connectClock++,
            this.closeWasClean = !0,
            this.reconnectTimer.reset(),
            this.sendBuffer = [],
            this.conn && (this.conn.close(),
            this.conn = null),
            this.transport = t
        }
        protocol() {
            return location.protocol.match(/^https/) ? "wss" : "ws"
        }
        endPointURL() {
            let t = A.appendParams(A.appendParams(this.endPoint, this.params()), {
                vsn: this.vsn
            });
            return "/" !== t.charAt(0) ? t : "/" === t.charAt(1) ? `${this.protocol()}:${t}` : `${this.protocol()}://${location.host}${t}`
        }
        disconnect(t, e, n) {
            this.connectClock++,
            this.closeWasClean = !0,
            this.reconnectTimer.reset(),
            this.teardown(t, e, n)
        }
        connect(t) {
            t && (console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),
            this.params = i(t)),
            this.conn || (this.connectClock++,
            this.closeWasClean = !1,
            this.conn = new this.transport(this.endPointURL()),
            this.conn.binaryType = this.binaryType,
            this.conn.timeout = this.longpollerTimeout,
            this.conn.onopen = ()=>this.onConnOpen(),
            this.conn.onerror = t=>this.onConnError(t),
            this.conn.onmessage = t=>this.onConnMessage(t),
            this.conn.onclose = t=>this.onConnClose(t))
        }
        log(t, e, n) {
            this.logger(t, e, n)
        }
        hasLogger() {
            return null !== this.logger
        }
        onOpen(t) {
            let e = this.makeRef();
            return this.stateChangeCallbacks.open.push([e, t]),
            e
        }
        onClose(t) {
            let e = this.makeRef();
            return this.stateChangeCallbacks.close.push([e, t]),
            e
        }
        onError(t) {
            let e = this.makeRef();
            return this.stateChangeCallbacks.error.push([e, t]),
            e
        }
        onMessage(t) {
            let e = this.makeRef();
            return this.stateChangeCallbacks.message.push([e, t]),
            e
        }
        ping(t) {
            if (!this.isConnected())
                return !1;
            let e = this.makeRef()
              , n = Date.now();
            this.push({
                topic: "phoenix",
                event: "heartbeat",
                payload: {},
                ref: e
            });
            let i = this.onMessage((r=>{
                r.ref === e && (this.off([i]),
                t(Date.now() - n))
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
            this.stateChangeCallbacks.open.forEach((([,t])=>t()))
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
        teardown(t, e, n) {
            if (!this.conn)
                return t && t();
            this.waitForBufferDone((()=>{
                this.conn && (e ? this.conn.close(e, n || "") : this.conn.close()),
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
                    t && t()
                }
                ))
            }
            ))
        }
        waitForBufferDone(t, e=1) {
            5 !== e && this.conn && this.conn.bufferedAmount ? setTimeout((()=>{
                this.waitForBufferDone(t, e + 1)
            }
            ), 150 * e) : t()
        }
        waitForSocketClosed(t, e=1) {
            5 !== e && this.conn && this.conn.readyState !== l ? setTimeout((()=>{
                this.waitForSocketClosed(t, e + 1)
            }
            ), 150 * e) : t()
        }
        onConnClose(t) {
            let e = t && t.code;
            this.hasLogger() && this.log("transport", "close", t),
            this.triggerChanError(),
            this.clearHeartbeats(),
            this.closeWasClean || 1e3 === e || this.reconnectTimer.scheduleTimeout(),
            this.stateChangeCallbacks.close.forEach((([,e])=>e(t)))
        }
        onConnError(t) {
            this.hasLogger() && this.log("transport", t);
            let e = this.transport
              , n = this.establishedConnections;
            this.stateChangeCallbacks.error.forEach((([,i])=>{
                i(t, e, n)
            }
            )),
            (e === this.transport || n > 0) && this.triggerChanError()
        }
        triggerChanError() {
            this.channels.forEach((t=>{
                t.isErrored() || t.isLeaving() || t.isClosed() || t.trigger(v)
            }
            ))
        }
        connectionState() {
            switch (this.conn && this.conn.readyState) {
            case a:
                return "connecting";
            case c:
                return "open";
            case u:
                return "closing";
            default:
                return "closed"
            }
        }
        isConnected() {
            return "open" === this.connectionState()
        }
        remove(t) {
            this.off(t.stateChangeRefs),
            this.channels = this.channels.filter((e=>e.joinRef() !== t.joinRef()))
        }
        off(t) {
            for (let e in this.stateChangeCallbacks)
                this.stateChangeCallbacks[e] = this.stateChangeCallbacks[e].filter((([e])=>-1 === t.indexOf(e)))
        }
        channel(t, e={}) {
            let n = new class {
                constructor(t, e, n) {
                    this.state = h,
                    this.topic = t,
                    this.params = i(e || {}),
                    this.socket = n,
                    this.bindings = [],
                    this.bindingRef = 0,
                    this.timeout = this.socket.timeout,
                    this.joinedOnce = !1,
                    this.joinPush = new E(this,_,this.params,this.timeout),
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
                        this.state = d,
                        this.rejoinTimer.reset(),
                        this.pushBuffer.forEach((t=>t.send())),
                        this.pushBuffer = []
                    }
                    )),
                    this.joinPush.receive("error", (()=>{
                        this.state = f,
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
                    this.onError((t=>{
                        this.socket.hasLogger() && this.socket.log("channel", `error ${this.topic}`, t),
                        this.isJoining() && this.joinPush.reset(),
                        this.state = f,
                        this.socket.isConnected() && this.rejoinTimer.scheduleTimeout()
                    }
                    )),
                    this.joinPush.receive("timeout", (()=>{
                        this.socket.hasLogger() && this.socket.log("channel", `timeout ${this.topic} (${this.joinRef()})`, this.joinPush.timeout),
                        new E(this,b,i({}),this.timeout).send(),
                        this.state = f,
                        this.joinPush.reset(),
                        this.socket.isConnected() && this.rejoinTimer.scheduleTimeout()
                    }
                    )),
                    this.on(y, ((t,e)=>{
                        this.trigger(this.replyEventName(e), t)
                    }
                    ))
                }
                join(t=this.timeout) {
                    if (this.joinedOnce)
                        throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
                    return this.timeout = t,
                    this.joinedOnce = !0,
                    this.rejoin(),
                    this.joinPush
                }
                onClose(t) {
                    this.on(m, t)
                }
                onError(t) {
                    return this.on(v, (e=>t(e)))
                }
                on(t, e) {
                    let n = this.bindingRef++;
                    return this.bindings.push({
                        event: t,
                        ref: n,
                        callback: e
                    }),
                    n
                }
                off(t, e) {
                    this.bindings = this.bindings.filter((n=>!(n.event === t && (void 0 === e || e === n.ref))))
                }
                canPush() {
                    return this.socket.isConnected() && this.isJoined()
                }
                push(t, e, n=this.timeout) {
                    if (e = e || {},
                    !this.joinedOnce)
                        throw new Error(`tried to push '${t}' to '${this.topic}' before joining. Use channel.join() before pushing events`);
                    let i = new E(this,t,(function() {
                        return e
                    }
                    ),n);
                    return this.canPush() ? i.send() : (i.startTimeout(),
                    this.pushBuffer.push(i)),
                    i
                }
                leave(t=this.timeout) {
                    this.rejoinTimer.reset(),
                    this.joinPush.cancelTimeout(),
                    this.state = g;
                    let e = ()=>{
                        this.socket.hasLogger() && this.socket.log("channel", `leave ${this.topic}`),
                        this.trigger(m, "leave")
                    }
                      , n = new E(this,b,i({}),t);
                    return n.receive("ok", (()=>e())).receive("timeout", (()=>e())),
                    n.send(),
                    this.canPush() || n.trigger("ok", {}),
                    n
                }
                onMessage(t, e, n) {
                    return e
                }
                isMember(t, e, n, i) {
                    return !(this.topic !== t || i && i !== this.joinRef() && (this.socket.hasLogger() && this.socket.log("channel", "dropping outdated message", {
                        topic: t,
                        event: e,
                        payload: n,
                        joinRef: i
                    }),
                    1))
                }
                joinRef() {
                    return this.joinPush.ref
                }
                rejoin(t=this.timeout) {
                    this.isLeaving() || (this.socket.leaveOpenTopic(this.topic),
                    this.state = p,
                    this.joinPush.resend(t))
                }
                trigger(t, e, n, i) {
                    let r = this.onMessage(t, e, n, i);
                    if (e && !r)
                        throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");
                    let o = this.bindings.filter((e=>e.event === t));
                    for (let t = 0; t < o.length; t++)
                        o[t].callback(r, n, i || this.joinRef())
                }
                replyEventName(t) {
                    return `chan_reply_ ${t}`
                }
                isClosed() {
                    return this.state === h
                }
                isErrored() {
                    return this.state === f
                }
                isJoined() {
                    return this.state === d
                }
                isJoining() {
                    return this.state === p
                }
                isLeaving() {
                    return this.state === g
                }
            }
            (t,e,this);
            return this.channels.push(n),
            n
        }
        push(t) {
            if (this.hasLogger()) {
                let {topic: e, event: n, payload: i, ref: r, join_ref: o} = t;
                this.log("push", `${e} ${n} (${o}, ${r})`, i)
            }
            this.isConnected() ? this.encode(t, (t=>this.conn.send(t))) : this.sendBuffer.push((()=>this.encode(t, (t=>this.conn.send(t)))))
        }
        makeRef() {
            let t = this.ref + 1;
            return t === this.ref ? this.ref = 0 : this.ref = t,
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
            this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach((t=>t())),
            this.sendBuffer = [])
        }
        onConnMessage(t) {
            this.decode(t.data, (t=>{
                let {topic: e, event: n, payload: i, ref: r, join_ref: o} = t;
                r && r === this.pendingHeartbeatRef && (this.clearHeartbeats(),
                this.pendingHeartbeatRef = null,
                this.heartbeatTimer = setTimeout((()=>this.sendHeartbeat()), this.heartbeatIntervalMs)),
                this.hasLogger() && this.log("receive", `${i.status || ""} ${e} ${n} ${r && "(" + r + ")" || ""}`, i);
                for (let t = 0; t < this.channels.length; t++) {
                    const s = this.channels[t];
                    s.isMember(e, n, i, o) && s.trigger(n, i, r, o)
                }
                for (let e = 0; e < this.stateChangeCallbacks.message.length; e++) {
                    let[,n] = this.stateChangeCallbacks.message[e];
                    n(t)
                }
            }
            ))
        }
        leaveOpenTopic(t) {
            let e = this.channels.find((e=>e.topic === t && (e.isJoined() || e.isJoining())));
            e && (this.hasLogger() && this.log("transport", `leaving duplicate topic "${t}"`),
            e.leave())
        }
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return o
    }
    )),
    n.d(e, "b", (function() {
        return r
    }
    )),
    n.d(e, "c", (function() {
        return s
    }
    ));
    var i = n(5);
    function r(t, e) {
        return Object(i.a)().captureException(t, {
            captureContext: e
        })
    }
    function o(t, e) {
        return Object(i.a)().captureEvent(t, e)
    }
    function s(t) {
        Object(i.a)().withScope(t)
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
        var i = n(21)
          , r = n(4);
        const o = Object(r.b)()
          , s = {
            nowSeconds: ()=>Date.now() / 1e3
        };
        const a = Object(i.b)() ? function() {
            try {
                return Object(i.a)(t, "perf_hooks").performance
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
          , c = void 0 === a ? s : {
            nowSeconds: ()=>(a.timeOrigin + a.now()) / 1e3
        }
          , u = s.nowSeconds.bind(s)
          , l = c.nowSeconds.bind(c);
        let h;
        (()=>{
            const {performance: t} = o;
            if (!t || !t.now)
                return void (h = "none");
            const e = 36e5
              , n = t.now()
              , i = Date.now()
              , r = t.timeOrigin ? Math.abs(t.timeOrigin + n - i) : e
              , s = r < e
              , a = t.timing && t.timing.navigationStart
              , c = "number" == typeof a ? Math.abs(a + n - i) : e;
            s || c < e ? r <= c ? (h = "timeOrigin",
            t.timeOrigin) : h = "navigationStart" : h = "dateNow"
        }
        )()
    }
    ).call(this, n(30)(t))
}
, , function(t, e, n) {
    "use strict";
    var i, r;
    function o() {
        o = function() {
            return e
        }
        ;
        var t, e = {}, n = Object.prototype, i = n.hasOwnProperty, r = Object.defineProperty || function(t, e, n) {
            t[e] = n.value
        }
        , s = "function" == typeof Symbol ? Symbol : {}, a = s.iterator || "@@iterator", u = s.asyncIterator || "@@asyncIterator", l = s.toStringTag || "@@toStringTag";
        function h(t, e, n) {
            return Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }),
            t[e]
        }
        try {
            h({}, "")
        } catch (t) {
            h = function(t, e, n) {
                return t[e] = n
            }
        }
        function f(t, e, n, i) {
            var o = e && e.prototype instanceof _ ? e : _
              , s = Object.create(o.prototype)
              , a = new O(i || []);
            return r(s, "_invoke", {
                value: C(t, n, a)
            }),
            s
        }
        function d(t, e, n) {
            try {
                return {
                    type: "normal",
                    arg: t.call(e, n)
                }
            } catch (t) {
                return {
                    type: "throw",
                    arg: t
                }
            }
        }
        e.wrap = f;
        var p = "suspendedStart"
          , g = "executing"
          , m = "completed"
          , v = {};
        function _() {}
        function y() {}
        function b() {}
        var x = {};
        h(x, a, (function() {
            return this
        }
        ));
        var w = Object.getPrototypeOf
          , k = w && w(w(P([])));
        k && k !== n && i.call(k, a) && (x = k);
        var E = b.prototype = _.prototype = Object.create(x);
        function S(t) {
            ["next", "throw", "return"].forEach((function(e) {
                h(t, e, (function(t) {
                    return this._invoke(e, t)
                }
                ))
            }
            ))
        }
        function A(t, e) {
            function n(r, o, s, a) {
                var u = d(t[r], t, o);
                if ("throw" !== u.type) {
                    var l = u.arg
                      , h = l.value;
                    return h && "object" == c(h) && i.call(h, "__await") ? e.resolve(h.__await).then((function(t) {
                        n("next", t, s, a)
                    }
                    ), (function(t) {
                        n("throw", t, s, a)
                    }
                    )) : e.resolve(h).then((function(t) {
                        l.value = t,
                        s(l)
                    }
                    ), (function(t) {
                        return n("throw", t, s, a)
                    }
                    ))
                }
                a(u.arg)
            }
            var o;
            r(this, "_invoke", {
                value: function(t, i) {
                    function r() {
                        return new e((function(e, r) {
                            n(t, i, e, r)
                        }
                        ))
                    }
                    return o = o ? o.then(r, r) : r()
                }
            })
        }
        function C(e, n, i) {
            var r = p;
            return function(o, s) {
                if (r === g)
                    throw new Error("Generator is already running");
                if (r === m) {
                    if ("throw" === o)
                        throw s;
                    return {
                        value: t,
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
                            throw r = m,
                            i.arg;
                        i.dispatchException(i.arg)
                    } else
                        "return" === i.method && i.abrupt("return", i.arg);
                    r = g;
                    var u = d(e, n, i);
                    if ("normal" === u.type) {
                        if (r = i.done ? m : "suspendedYield",
                        u.arg === v)
                            continue;
                        return {
                            value: u.arg,
                            done: i.done
                        }
                    }
                    "throw" === u.type && (r = m,
                    i.method = "throw",
                    i.arg = u.arg)
                }
            }
        }
        function T(e, n) {
            var i = n.method
              , r = e.iterator[i];
            if (r === t)
                return n.delegate = null,
                "throw" === i && e.iterator.return && (n.method = "return",
                n.arg = t,
                T(e, n),
                "throw" === n.method) || "return" !== i && (n.method = "throw",
                n.arg = new TypeError("The iterator does not provide a '" + i + "' method")),
                v;
            var o = d(r, e.iterator, n.arg);
            if ("throw" === o.type)
                return n.method = "throw",
                n.arg = o.arg,
                n.delegate = null,
                v;
            var s = o.arg;
            return s ? s.done ? (n[e.resultName] = s.value,
            n.next = e.nextLoc,
            "return" !== n.method && (n.method = "next",
            n.arg = t),
            n.delegate = null,
            v) : s : (n.method = "throw",
            n.arg = new TypeError("iterator result is not an object"),
            n.delegate = null,
            v)
        }
        function L(t) {
            var e = {
                tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]),
            2 in t && (e.finallyLoc = t[2],
            e.afterLoc = t[3]),
            this.tryEntries.push(e)
        }
        function M(t) {
            var e = t.completion || {};
            e.type = "normal",
            delete e.arg,
            t.completion = e
        }
        function O(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            t.forEach(L, this),
            this.reset(!0)
        }
        function P(e) {
            if (e || "" === e) {
                var n = e[a];
                if (n)
                    return n.call(e);
                if ("function" == typeof e.next)
                    return e;
                if (!isNaN(e.length)) {
                    var r = -1
                      , o = function n() {
                        for (; ++r < e.length; )
                            if (i.call(e, r))
                                return n.value = e[r],
                                n.done = !1,
                                n;
                        return n.value = t,
                        n.done = !0,
                        n
                    };
                    return o.next = o
                }
            }
            throw new TypeError(c(e) + " is not iterable")
        }
        return y.prototype = b,
        r(E, "constructor", {
            value: b,
            configurable: !0
        }),
        r(b, "constructor", {
            value: y,
            configurable: !0
        }),
        y.displayName = h(b, l, "GeneratorFunction"),
        e.isGeneratorFunction = function(t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name))
        }
        ,
        e.mark = function(t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, b) : (t.__proto__ = b,
            h(t, l, "GeneratorFunction")),
            t.prototype = Object.create(E),
            t
        }
        ,
        e.awrap = function(t) {
            return {
                __await: t
            }
        }
        ,
        S(A.prototype),
        h(A.prototype, u, (function() {
            return this
        }
        )),
        e.AsyncIterator = A,
        e.async = function(t, n, i, r, o) {
            void 0 === o && (o = Promise);
            var s = new A(f(t, n, i, r),o);
            return e.isGeneratorFunction(n) ? s : s.next().then((function(t) {
                return t.done ? t.value : s.next()
            }
            ))
        }
        ,
        S(E),
        h(E, l, "Generator"),
        h(E, a, (function() {
            return this
        }
        )),
        h(E, "toString", (function() {
            return "[object Generator]"
        }
        )),
        e.keys = function(t) {
            var e = Object(t)
              , n = [];
            for (var i in e)
                n.push(i);
            return n.reverse(),
            function t() {
                for (; n.length; ) {
                    var i = n.pop();
                    if (i in e)
                        return t.value = i,
                        t.done = !1,
                        t
                }
                return t.done = !0,
                t
            }
        }
        ,
        e.values = P,
        O.prototype = {
            constructor: O,
            reset: function(e) {
                if (this.prev = 0,
                this.next = 0,
                this.sent = this._sent = t,
                this.done = !1,
                this.delegate = null,
                this.method = "next",
                this.arg = t,
                this.tryEntries.forEach(M),
                !e)
                    for (var n in this)
                        "t" === n.charAt(0) && i.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
            },
            stop: function() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type)
                    throw t.arg;
                return this.rval
            },
            dispatchException: function(e) {
                if (this.done)
                    throw e;
                var n = this;
                function r(i, r) {
                    return a.type = "throw",
                    a.arg = e,
                    n.next = i,
                    r && (n.method = "next",
                    n.arg = t),
                    !!r
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                    var s = this.tryEntries[o]
                      , a = s.completion;
                    if ("root" === s.tryLoc)
                        return r("end");
                    if (s.tryLoc <= this.prev) {
                        var c = i.call(s, "catchLoc")
                          , u = i.call(s, "finallyLoc");
                        if (c && u) {
                            if (this.prev < s.catchLoc)
                                return r(s.catchLoc, !0);
                            if (this.prev < s.finallyLoc)
                                return r(s.finallyLoc)
                        } else if (c) {
                            if (this.prev < s.catchLoc)
                                return r(s.catchLoc, !0)
                        } else {
                            if (!u)
                                throw new Error("try statement without catch or finally");
                            if (this.prev < s.finallyLoc)
                                return r(s.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(t, e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var r = this.tryEntries[n];
                    if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                        var o = r;
                        break
                    }
                }
                o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                var s = o ? o.completion : {};
                return s.type = t,
                s.arg = e,
                o ? (this.method = "next",
                this.next = o.finallyLoc,
                v) : this.complete(s)
            },
            complete: function(t, e) {
                if ("throw" === t.type)
                    throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                this.method = "return",
                this.next = "end") : "normal" === t.type && e && (this.next = e),
                v
            },
            finish: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.finallyLoc === t)
                        return this.complete(n.completion, n.afterLoc),
                        M(n),
                        v
                }
            },
            catch: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.tryLoc === t) {
                        var i = n.completion;
                        if ("throw" === i.type) {
                            var r = i.arg;
                            M(n)
                        }
                        return r
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(e, n, i) {
                return this.delegate = {
                    iterator: P(e),
                    resultName: n,
                    nextLoc: i
                },
                "next" === this.method && (this.arg = t),
                v
            }
        },
        e
    }
    function s(t, e, n, i, r, o, s) {
        try {
            var a = t[o](s)
              , c = a.value
        } catch (t) {
            return void n(t)
        }
        a.done ? e(c) : Promise.resolve(c).then(i, r)
    }
    function a(t) {
        return function() {
            var e = this
              , n = arguments;
            return new Promise((function(i, r) {
                var o = t.apply(e, n);
                function a(t) {
                    s(o, i, r, a, c, "next", t)
                }
                function c(t) {
                    s(o, i, r, a, c, "throw", t)
                }
                a(void 0)
            }
            ))
        }
    }
    function c(t) {
        return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        c(t)
    }
    function u(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }
            ))),
            n.push.apply(n, i)
        }
        return n
    }
    function l(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? u(Object(n), !0).forEach((function(e) {
                h(t, e, n[e])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }
            ))
        }
        return t
    }
    function h(t, e, n) {
        return (e = function(t) {
            var e = function(t, e) {
                if ("object" !== c(t) || null === t)
                    return t;
                var n = t[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var i = n.call(t, e || "default");
                    if ("object" !== c(i))
                        return i;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" === c(e) ? e : String(e)
        }(e))in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n,
        t
    }
    function f(t) {
        return function(t) {
            if (Array.isArray(t))
                return g(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                return Array.from(t)
        }(t) || p(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function d(t, e) {
        return function(t) {
            if (Array.isArray(t))
                return t
        }(t) || function(t, e) {
            var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null != n) {
                var i, r, o, s, a = [], c = !0, u = !1;
                try {
                    if (o = (n = n.call(t)).next,
                    0 === e) {
                        if (Object(n) !== n)
                            return;
                        c = !1
                    } else
                        for (; !(c = (i = o.call(n)).done) && (a.push(i.value),
                        a.length !== e); c = !0)
                            ;
                } catch (t) {
                    u = !0,
                    r = t
                } finally {
                    try {
                        if (!c && null != n.return && (s = n.return(),
                        Object(s) !== s))
                            return
                    } finally {
                        if (u)
                            throw r
                    }
                }
                return a
            }
        }(t, e) || p(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function p(t, e) {
        if (t) {
            if ("string" == typeof t)
                return g(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? g(t, e) : void 0
        }
    }
    function g(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = new Array(e); n < e; n++)
            i[n] = t[n];
        return i
    }
    n.d(e, "a", (function() {
        return Zn
    }
    ));
    var m, v, _, y, b = !1, x = !1, w = [];
    function k(t) {
        !function(t) {
            w.includes(t) || w.push(t);
            x || b || (b = !0,
            queueMicrotask(S))
        }(t)
    }
    function E(t) {
        var e = w.indexOf(t);
        -1 !== e && w.splice(e, 1)
    }
    function S() {
        b = !1,
        x = !0;
        for (var t = 0; t < w.length; t++)
            w[t]();
        w.length = 0,
        x = !1
    }
    var A = !0;
    function C(t) {
        v = t
    }
    var T = []
      , L = []
      , M = [];
    function O(t, e) {
        "function" == typeof e ? (t._x_cleanups || (t._x_cleanups = []),
        t._x_cleanups.push(e)) : (e = t,
        L.push(e))
    }
    function P(t, e) {
        t._x_attributeCleanups && Object.entries(t._x_attributeCleanups).forEach((function(n) {
            var i = d(n, 2)
              , r = i[0]
              , o = i[1];
            (void 0 === e || e.includes(r)) && (o.forEach((function(t) {
                return t()
            }
            )),
            delete t._x_attributeCleanups[r])
        }
        ))
    }
    var N = new MutationObserver(B)
      , j = !1;
    function D() {
        N.observe(document, {
            subtree: !0,
            childList: !0,
            attributes: !0,
            attributeOldValue: !0
        }),
        j = !0
    }
    function R() {
        ($ = $.concat(N.takeRecords())).length && !I && (I = !0,
        queueMicrotask((function() {
            B($),
            $.length = 0,
            I = !1
        }
        ))),
        N.disconnect(),
        j = !1
    }
    var $ = []
      , I = !1;
    function U(t) {
        if (!j)
            return t();
        R();
        var e = t();
        return D(),
        e
    }
    var F = !1
      , H = [];
    function B(t) {
        if (F)
            H = H.concat(t);
        else {
            for (var e = [], n = [], i = new Map, r = new Map, o = function() {
                if (t[s].target._x_ignoreMutationObserver)
                    return 1;
                if ("childList" === t[s].type && (t[s].addedNodes.forEach((function(t) {
                    return 1 === t.nodeType && e.push(t)
                }
                )),
                t[s].removedNodes.forEach((function(t) {
                    return 1 === t.nodeType && n.push(t)
                }
                ))),
                "attributes" === t[s].type) {
                    var o = t[s].target
                      , a = t[s].attributeName
                      , c = t[s].oldValue
                      , u = function() {
                        i.has(o) || i.set(o, []),
                        i.get(o).push({
                            name: a,
                            value: o.getAttribute(a)
                        })
                    }
                      , l = function() {
                        r.has(o) || r.set(o, []),
                        r.get(o).push(a)
                    };
                    o.hasAttribute(a) && null === c ? u() : o.hasAttribute(a) ? (l(),
                    u()) : l()
                }
            }, s = 0; s < t.length; s++)
                o();
            r.forEach((function(t, e) {
                P(e, t)
            }
            )),
            i.forEach((function(t, e) {
                T.forEach((function(n) {
                    return n(e, t)
                }
                ))
            }
            ));
            for (var a = function() {
                var t = u[c];
                if (e.includes(t))
                    return 1;
                if (L.forEach((function(e) {
                    return e(t)
                }
                )),
                t._x_cleanups)
                    for (; t._x_cleanups.length; )
                        t._x_cleanups.pop()()
            }, c = 0, u = n; c < u.length; c++)
                a();
            e.forEach((function(t) {
                t._x_ignoreSelf = !0,
                t._x_ignore = !0
            }
            ));
            for (var l = function() {
                var t = f[h];
                return n.includes(t) ? 0 : t.isConnected ? (delete t._x_ignoreSelf,
                delete t._x_ignore,
                M.forEach((function(e) {
                    return e(t)
                }
                )),
                t._x_ignore = !0,
                void (t._x_ignoreSelf = !0)) : 0
            }, h = 0, f = e; h < f.length; h++)
                l();
            e.forEach((function(t) {
                delete t._x_ignoreSelf,
                delete t._x_ignore
            }
            )),
            e = null,
            n = null,
            i = null,
            r = null
        }
    }
    function q(t) {
        return J(W(t))
    }
    function V(t, e, n) {
        return t._x_dataStack = [e].concat(f(W(n || t))),
        function() {
            t._x_dataStack = t._x_dataStack.filter((function(t) {
                return t !== e
            }
            ))
        }
    }
    function z(t, e) {
        var n = t._x_dataStack[0];
        Object.entries(e).forEach((function(t) {
            var e = d(t, 2)
              , i = e[0]
              , r = e[1];
            n[i] = r
        }
        ))
    }
    function W(t) {
        return t._x_dataStack ? t._x_dataStack : "function" == typeof ShadowRoot && t instanceof ShadowRoot ? W(t.host) : t.parentNode ? W(t.parentNode) : []
    }
    function J(t) {
        var e = new Proxy({},{
            ownKeys: function() {
                return Array.from(new Set(t.flatMap((function(t) {
                    return Object.keys(t)
                }
                ))))
            },
            has: function(e, n) {
                return t.some((function(t) {
                    return t.hasOwnProperty(n)
                }
                ))
            },
            get: function(n, i) {
                return (t.find((function(t) {
                    if (t.hasOwnProperty(i)) {
                        var n = Object.getOwnPropertyDescriptor(t, i);
                        if (n.get && n.get._x_alreadyBound || n.set && n.set._x_alreadyBound)
                            return !0;
                        if ((n.get || n.set) && n.enumerable) {
                            var r = n.get
                              , o = n.set
                              , s = n;
                            r = r && r.bind(e),
                            o = o && o.bind(e),
                            r && (r._x_alreadyBound = !0),
                            o && (o._x_alreadyBound = !0),
                            Object.defineProperty(t, i, l(l({}, s), {}, {
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
            set: function(e, n, i) {
                var r = t.find((function(t) {
                    return t.hasOwnProperty(n)
                }
                ));
                return r ? r[n] = i : t[t.length - 1][n] = i,
                !0
            }
        });
        return e
    }
    function Y(t) {
        var e = function(t) {
            return "object" === c(t) && !Array.isArray(t) && null !== t
        };
        return function n(i) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            Object.entries(Object.getOwnPropertyDescriptors(i)).forEach((function(o) {
                var s = d(o, 2)
                  , a = s[0]
                  , u = s[1]
                  , l = u.value;
                if (!1 !== u.enumerable && void 0 !== l) {
                    var h = "" === r ? a : "".concat(r, ".").concat(a);
                    "object" === c(l) && null !== l && l._x_interceptor ? i[a] = l.initialize(t, h, a) : !e(l) || l === i || l instanceof Element || n(l, h)
                }
            }
            ))
        }(t)
    }
    function G(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}
          , n = {
            initialValue: void 0,
            _x_interceptor: !0,
            initialize: function(e, n, i) {
                return t(this.initialValue, (function() {
                    return X(e, n)
                }
                ), (function(t) {
                    return Z(e, n, t)
                }
                ), n, i)
            }
        };
        return e(n),
        function(t) {
            if ("object" === c(t) && null !== t && t._x_interceptor) {
                var e = n.initialize.bind(n);
                n.initialize = function(i, r, o) {
                    var s = t.initialize(i, r, o);
                    return n.initialValue = s,
                    e(i, r, o)
                }
            } else
                n.initialValue = t;
            return n
        }
    }
    function X(t, e) {
        return e.split(".").reduce((function(t, e) {
            return t[e]
        }
        ), t)
    }
    function Z(t, e, n) {
        if ("string" == typeof e && (e = e.split(".")),
        1 !== e.length) {
            if (0 === e.length)
                throw error;
            return t[e[0]] || (t[e[0]] = {}),
            Z(t[e[0]], e.slice(1), n)
        }
        t[e[0]] = n
    }
    var K = {};
    function Q(t, e) {
        K[t] = e
    }
    function tt(t, e) {
        return Object.entries(K).forEach((function(n) {
            var i = d(n, 2)
              , r = i[0]
              , o = i[1];
            Object.defineProperty(t, "$".concat(r), {
                get: function() {
                    var t = d(yt(e), 2)
                      , n = t[0]
                      , i = t[1];
                    return n = l({
                        interceptor: G
                    }, n),
                    O(e, i),
                    o(e, n)
                },
                enumerable: !1
            })
        }
        )),
        t
    }
    function et(t, e, n) {
        try {
            for (var i = arguments.length, r = new Array(i > 3 ? i - 3 : 0), o = 3; o < i; o++)
                r[o - 3] = arguments[o];
            return n.apply(void 0, r)
        } catch (n) {
            nt(n, t, e)
        }
    }
    function nt(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
        Object.assign(t, {
            el: e,
            expression: n
        }),
        console.warn("Alpine Expression Error: ".concat(t.message, "\n\n").concat(n ? 'Expression: "' + n + '"\n\n' : ""), e),
        setTimeout((function() {
            throw t
        }
        ), 0)
    }
    var it = !0;
    function rt(t, e) {
        var n, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return ot(t, e)((function(t) {
            return n = t
        }
        ), i),
        n
    }
    function ot() {
        return st.apply(void 0, arguments)
    }
    var st = function(t, e) {
        var n = {};
        tt(n, t);
        var i = [n].concat(f(W(t)));
        if ("function" == typeof e)
            return at(i, e);
        var r = function(t, e, n) {
            var i = function(t, e) {
                if (ct[t])
                    return ct[t];
                var n = Object.getPrototypeOf(a(o().mark((function t() {
                    return o().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))).constructor
                  , i = /^[\n\s]*if.*\(.*\)/.test(t) || /^(let|const)\s/.test(t) ? "(() => { ".concat(t, " })()") : t
                  , r = function() {
                    try {
                        return new n(["__self", "scope"],"with (scope) { __self.result = ".concat(i, " }; __self.finished = true; return __self.result;"))
                    } catch (n) {
                        return nt(n, e, t),
                        Promise.resolve()
                    }
                }
                  , s = r();
                return ct[t] = s,
                s
            }(e, n);
            return function() {
                var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}
                  , o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , s = o.scope
                  , a = void 0 === s ? {} : s
                  , c = o.params
                  , u = void 0 === c ? [] : c;
                i.result = void 0,
                i.finished = !1;
                var l = J([a].concat(f(t)));
                if ("function" == typeof i) {
                    var h = i(i, l).catch((function(t) {
                        return nt(t, n, e)
                    }
                    ));
                    i.finished ? (ut(r, i.result, l, u, n),
                    i.result = void 0) : h.then((function(t) {
                        ut(r, t, l, u, n)
                    }
                    )).catch((function(t) {
                        return nt(t, n, e)
                    }
                    )).finally((function() {
                        return i.result = void 0
                    }
                    ))
                }
            }
        }(i, e, t);
        return et.bind(null, t, e, r)
    };
    function at(t, e) {
        return function() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}
              , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , r = i.scope
              , o = void 0 === r ? {} : r
              , s = i.params
              , a = void 0 === s ? [] : s
              , c = e.apply(J([o].concat(f(t))), a);
            ut(n, c)
        }
    }
    var ct = {};
    function ut(t, e, n, i, r) {
        if (it && "function" == typeof e) {
            var o = e.apply(n, i);
            o instanceof Promise ? o.then((function(e) {
                return ut(t, e, n, i)
            }
            )).catch((function(t) {
                return nt(t, r, e)
            }
            )) : t(o)
        } else
            t(e)
    }
    var lt = "x-";
    function ht() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return lt + t
    }
    var ft = {};
    function dt(t, e) {
        ft[t] = e
    }
    function pt(t, e, n) {
        var i = {}
          , r = Array.from(e).map(xt((function(t, e) {
            return i[t] = e
        }
        ))).filter(Et).map(function(t, e) {
            return function(n) {
                var i = n.name
                  , r = n.value
                  , o = i.match(St())
                  , s = i.match(/:([a-zA-Z0-9\-:]+)/)
                  , a = i.match(/\.[^.\]]+(?=[^\]]*$)/g) || []
                  , c = e || t[i] || i;
                return {
                    type: o ? o[1] : null,
                    value: s ? s[1] : null,
                    modifiers: a.map((function(t) {
                        return t.replace(".", "")
                    }
                    )),
                    expression: r,
                    original: c
                }
            }
        }(i, n)).sort(Tt);
        return r.map((function(e) {
            return function(t, e) {
                var n = function() {}
                  , i = ft[e.type] || n
                  , r = yt(t)
                  , o = d(r, 2)
                  , s = o[0]
                  , a = o[1];
                !function(t, e, n) {
                    t._x_attributeCleanups || (t._x_attributeCleanups = {}),
                    t._x_attributeCleanups[e] || (t._x_attributeCleanups[e] = []),
                    t._x_attributeCleanups[e].push(n)
                }(t, e.original, a);
                var c = function() {
                    t._x_ignore || t._x_ignoreSelf || (i.inline && i.inline(t, e, s),
                    i = i.bind(i, t, e, s),
                    gt ? mt.get(vt).push(i) : i())
                };
                return c.runCleanups = a,
                c
            }(t, e)
        }
        ))
    }
    var gt = !1
      , mt = new Map
      , vt = Symbol();
    function _t(t) {
        gt = !0;
        var e = Symbol();
        vt = e,
        mt.set(e, []);
        var n = function() {
            for (; mt.get(e).length; )
                mt.get(e).shift()();
            mt.delete(e)
        };
        t(n),
        gt = !1,
        n()
    }
    function yt(t) {
        var e = []
          , n = function(t) {
            var e = function() {};
            return [function(n) {
                var i = v(n);
                return t._x_effects || (t._x_effects = new Set,
                t._x_runEffects = function() {
                    t._x_effects.forEach((function(t) {
                        return t()
                    }
                    ))
                }
                ),
                t._x_effects.add(i),
                e = function() {
                    void 0 !== i && (t._x_effects.delete(i),
                    _(i))
                }
                ,
                i
            }
            , function() {
                e()
            }
            ]
        }(t)
          , i = d(n, 2)
          , r = i[0]
          , o = i[1];
        e.push(o);
        return [{
            Alpine: me,
            effect: r,
            cleanup: function(t) {
                return e.push(t)
            },
            evaluateLater: ot.bind(ot, t),
            evaluate: rt.bind(rt, t)
        }, function() {
            return e.forEach((function(t) {
                return t()
            }
            ))
        }
        ]
    }
    var bt = function(t, e) {
        return function(n) {
            var i = n.name
              , r = n.value;
            return i.startsWith(t) && (i = i.replace(t, e)),
            {
                name: i,
                value: r
            }
        }
    };
    function xt() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}
        ;
        return function(e) {
            var n = e.name
              , i = e.value
              , r = wt.reduce((function(t, e) {
                return e(t)
            }
            ), {
                name: n,
                value: i
            })
              , o = r.name
              , s = r.value;
            return o !== n && t(o, n),
            {
                name: o,
                value: s
            }
        }
    }
    var wt = [];
    function kt(t) {
        wt.push(t)
    }
    function Et(t) {
        var e = t.name;
        return St().test(e)
    }
    var St = function() {
        return new RegExp("^".concat(lt, "([^:^.]+)\\b"))
    };
    var At = "DEFAULT"
      , Ct = ["ignore", "ref", "data", "id", "bind", "init", "for", "mask", "model", "modelable", "transition", "show", "if", At, "teleport", "element"];
    function Tt(t, e) {
        var n = -1 === Ct.indexOf(t.type) ? At : t.type
          , i = -1 === Ct.indexOf(e.type) ? At : e.type;
        return Ct.indexOf(n) - Ct.indexOf(i)
    }
    function Lt(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        t.dispatchEvent(new CustomEvent(e,{
            detail: n,
            bubbles: !0,
            composed: !0,
            cancelable: !0
        }))
    }
    var Mt = []
      , Ot = !1;
    function Pt() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}
        ;
        return queueMicrotask((function() {
            Ot || setTimeout((function() {
                Nt()
            }
            ))
        }
        )),
        new Promise((function(e) {
            Mt.push((function() {
                t(),
                e()
            }
            ))
        }
        ))
    }
    function Nt() {
        for (Ot = !1; Mt.length; )
            Mt.shift()()
    }
    function jt(t, e) {
        if ("function" == typeof ShadowRoot && t instanceof ShadowRoot)
            Array.from(t.children).forEach((function(t) {
                return jt(t, e)
            }
            ));
        else {
            var n = !1;
            if (e(t, (function() {
                return n = !0
            }
            )),
            !n)
                for (var i = t.firstElementChild; i; )
                    jt(i, e),
                    i = i.nextElementSibling
        }
    }
    function Dt(t) {
        for (var e, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
            i[r - 1] = arguments[r];
        (e = console).warn.apply(e, ["Alpine Warning: ".concat(t)].concat(i))
    }
    var Rt = []
      , $t = [];
    function It() {
        return Rt.map((function(t) {
            return t()
        }
        ))
    }
    function Ut() {
        return Rt.concat($t).map((function(t) {
            return t()
        }
        ))
    }
    function Ft(t) {
        Rt.push(t)
    }
    function Ht(t) {
        $t.push(t)
    }
    function Bt(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return qt(t, (function(t) {
            if ((e ? Ut() : It()).some((function(e) {
                return t.matches(e)
            }
            )))
                return !0
        }
        ))
    }
    function qt(t, e) {
        if (t) {
            if (e(t))
                return t;
            if (t._x_teleportBack && (t = t._x_teleportBack),
            t.parentElement)
                return qt(t.parentElement, e)
        }
    }
    function Vt(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jt;
        _t((function() {
            e(t, (function(t, e) {
                pt(t, t.attributes).forEach((function(t) {
                    return t()
                }
                )),
                t._x_ignore && e()
            }
            ))
        }
        ))
    }
    function zt(t, e) {
        return Array.isArray(e) ? Wt(t, e.join(" ")) : "object" === c(e) && null !== e ? function(t, e) {
            var n = function(t) {
                return t.split(" ").filter(Boolean)
            }
              , i = Object.entries(e).flatMap((function(t) {
                var e = d(t, 2)
                  , i = e[0];
                return !!e[1] && n(i)
            }
            )).filter(Boolean)
              , r = Object.entries(e).flatMap((function(t) {
                var e = d(t, 2)
                  , i = e[0];
                return !e[1] && n(i)
            }
            )).filter(Boolean)
              , o = []
              , s = [];
            return r.forEach((function(e) {
                t.classList.contains(e) && (t.classList.remove(e),
                s.push(e))
            }
            )),
            i.forEach((function(e) {
                t.classList.contains(e) || (t.classList.add(e),
                o.push(e))
            }
            )),
            function() {
                s.forEach((function(e) {
                    return t.classList.add(e)
                }
                )),
                o.forEach((function(e) {
                    return t.classList.remove(e)
                }
                ))
            }
        }(t, e) : "function" == typeof e ? zt(t, e()) : Wt(t, e)
    }
    function Wt(t, e) {
        var n, i;
        return e = !0 === e ? e = "" : e || "",
        n = e.split(" ").filter((function(e) {
            return !t.classList.contains(e)
        }
        )).filter(Boolean),
        (i = t.classList).add.apply(i, f(n)),
        function() {
            var e;
            (e = t.classList).remove.apply(e, f(n))
        }
    }
    function Jt(t, e) {
        return "object" === c(e) && null !== e ? function(t, e) {
            var n = {};
            return Object.entries(e).forEach((function(e) {
                var i = d(e, 2)
                  , r = i[0]
                  , o = i[1];
                n[r] = t.style[r],
                r.startsWith("--") || (r = r.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()),
                t.style.setProperty(r, o)
            }
            )),
            setTimeout((function() {
                0 === t.style.length && t.removeAttribute("style")
            }
            )),
            function() {
                Jt(t, n)
            }
        }(t, e) : function(t, e) {
            var n = t.getAttribute("style", e);
            return t.setAttribute("style", e),
            function() {
                t.setAttribute("style", n || "")
            }
        }(t, e)
    }
    function Yt(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}
          , n = !1;
        return function() {
            n ? e.apply(this, arguments) : (n = !0,
            t.apply(this, arguments))
        }
    }
    function Gt(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        t._x_transition || (t._x_transition = {
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
                Zt(t, e, {
                    during: this.enter.during,
                    start: this.enter.start,
                    end: this.enter.end
                }, n, i)
            },
            out: function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}
                  , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}
                ;
                Zt(t, e, {
                    during: this.leave.during,
                    start: this.leave.start,
                    end: this.leave.end
                }, n, i)
            }
        })
    }
    function Xt(t) {
        var e = t.parentNode;
        if (e)
            return e._x_hidePromise ? e : Xt(e)
    }
    function Zt(t, e) {
        var n, i, r, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, s = o.during, a = o.start, c = o.end, u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {}
        , l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function() {}
        ;
        if (t._x_transitioning && t._x_transitioning.cancel(),
        0 === Object.keys(s).length && 0 === Object.keys(a).length && 0 === Object.keys(c).length)
            return u(),
            void l();
        Kt(t, {
            start: function() {
                n = e(t, a)
            },
            during: function() {
                i = e(t, s)
            },
            before: u,
            end: function() {
                n(),
                r = e(t, c)
            },
            after: l,
            cleanup: function() {
                i(),
                r()
            }
        })
    }
    function Kt(t, e) {
        var n, i, r, o = Yt((function() {
            U((function() {
                n = !0,
                i || e.before(),
                r || (e.end(),
                Nt()),
                e.after(),
                t.isConnected && e.cleanup(),
                delete t._x_transitioning
            }
            ))
        }
        ));
        t._x_transitioning = {
            beforeCancels: [],
            beforeCancel: function(t) {
                this.beforeCancels.push(t)
            },
            cancel: Yt((function() {
                for (; this.beforeCancels.length; )
                    this.beforeCancels.shift()();
                o()
            }
            )),
            finish: o
        },
        U((function() {
            e.start(),
            e.during()
        }
        )),
        Ot = !0,
        requestAnimationFrame((function() {
            if (!n) {
                var o = 1e3 * Number(getComputedStyle(t).transitionDuration.replace(/,.*/, "").replace("s", ""))
                  , s = 1e3 * Number(getComputedStyle(t).transitionDelay.replace(/,.*/, "").replace("s", ""));
                0 === o && (o = 1e3 * Number(getComputedStyle(t).animationDuration.replace("s", ""))),
                U((function() {
                    e.before()
                }
                )),
                i = !0,
                requestAnimationFrame((function() {
                    n || (U((function() {
                        e.end()
                    }
                    )),
                    Nt(),
                    setTimeout(t._x_transitioning.finish, o + s),
                    r = !0)
                }
                ))
            }
        }
        ))
    }
    function Qt(t, e, n) {
        if (-1 === t.indexOf(e))
            return n;
        var i = t[t.indexOf(e) + 1];
        if (!i)
            return n;
        if ("scale" === e && isNaN(i))
            return n;
        if ("duration" === e) {
            var r = i.match(/([0-9]+)ms/);
            if (r)
                return r[1]
        }
        return "origin" === e && ["top", "right", "left", "center", "bottom"].includes(t[t.indexOf(e) + 2]) ? [i, t[t.indexOf(e) + 2]].join(" ") : i
    }
    dt("transition", (function(t, e, n) {
        var i = e.value
          , r = e.modifiers
          , o = e.expression
          , s = n.evaluate;
        "function" == typeof o && (o = s(o)),
        o ? function(t, e, n) {
            Gt(t, zt, "");
            var i = {
                enter: function(e) {
                    t._x_transition.enter.during = e
                },
                "enter-start": function(e) {
                    t._x_transition.enter.start = e
                },
                "enter-end": function(e) {
                    t._x_transition.enter.end = e
                },
                leave: function(e) {
                    t._x_transition.leave.during = e
                },
                "leave-start": function(e) {
                    t._x_transition.leave.start = e
                },
                "leave-end": function(e) {
                    t._x_transition.leave.end = e
                }
            };
            i[n](e)
        }(t, o, i) : function(t, e, n) {
            Gt(t, Jt);
            var i = !e.includes("in") && !e.includes("out") && !n
              , r = i || e.includes("in") || ["enter"].includes(n)
              , o = i || e.includes("out") || ["leave"].includes(n);
            e.includes("in") && !i && (e = e.filter((function(t, n) {
                return n < e.indexOf("out")
            }
            )));
            e.includes("out") && !i && (e = e.filter((function(t, n) {
                return n > e.indexOf("out")
            }
            )));
            var s = !e.includes("opacity") && !e.includes("scale")
              , a = s || e.includes("opacity")
              , c = s || e.includes("scale")
              , u = a ? 0 : 1
              , l = c ? Qt(e, "scale", 95) / 100 : 1
              , h = Qt(e, "delay", 0)
              , f = Qt(e, "origin", "center")
              , d = "opacity, transform"
              , p = Qt(e, "duration", 150) / 1e3
              , g = Qt(e, "duration", 75) / 1e3
              , m = "cubic-bezier(0.4, 0.0, 0.2, 1)";
            r && (t._x_transition.enter.during = {
                transformOrigin: f,
                transitionDelay: h,
                transitionProperty: d,
                transitionDuration: "".concat(p, "s"),
                transitionTimingFunction: m
            },
            t._x_transition.enter.start = {
                opacity: u,
                transform: "scale(".concat(l, ")")
            },
            t._x_transition.enter.end = {
                opacity: 1,
                transform: "scale(1)"
            });
            o && (t._x_transition.leave.during = {
                transformOrigin: f,
                transitionDelay: h,
                transitionProperty: d,
                transitionDuration: "".concat(g, "s"),
                transitionTimingFunction: m
            },
            t._x_transition.leave.start = {
                opacity: 1,
                transform: "scale(1)"
            },
            t._x_transition.leave.end = {
                opacity: u,
                transform: "scale(".concat(l, ")")
            })
        }(t, r, i)
    }
    )),
    window.Element.prototype._x_toggleAndCascadeWithTransitions = function(t, e, n, i) {
        var r = function() {
            "visible" === document.visibilityState ? requestAnimationFrame(n) : setTimeout(n)
        };
        e ? t._x_transition && (t._x_transition.enter || t._x_transition.leave) ? t._x_transition.enter && (Object.entries(t._x_transition.enter.during).length || Object.entries(t._x_transition.enter.start).length || Object.entries(t._x_transition.enter.end).length) ? t._x_transition.in(n) : r() : t._x_transition ? t._x_transition.in(n) : r() : (t._x_hidePromise = t._x_transition ? new Promise((function(e, n) {
            t._x_transition.out((function() {}
            ), (function() {
                return e(i)
            }
            )),
            t._x_transitioning.beforeCancel((function() {
                return n({
                    isFromCancelledTransition: !0
                })
            }
            ))
        }
        )) : Promise.resolve(i),
        queueMicrotask((function() {
            var e = Xt(t);
            e ? (e._x_hideChildren || (e._x_hideChildren = []),
            e._x_hideChildren.push(t)) : queueMicrotask((function() {
                (function t(e) {
                    var n = Promise.all([e._x_hidePromise].concat(f((e._x_hideChildren || []).map(t)))).then((function(t) {
                        return (0,
                        d(t, 1)[0])()
                    }
                    ));
                    return delete e._x_hidePromise,
                    delete e._x_hideChildren,
                    n
                }
                )(t).catch((function(t) {
                    if (!t.isFromCancelledTransition)
                        throw t
                }
                ))
            }
            ))
        }
        )))
    }
    ;
    var te = !1;
    function ee(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}
        ;
        return function() {
            return te ? e.apply(void 0, arguments) : t.apply(void 0, arguments)
        }
    }
    function ne(t, e, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
        switch (t._x_bindings || (t._x_bindings = m({})),
        t._x_bindings[e] = n,
        e = i.includes("camel") ? ae(e) : e) {
        case "value":
            ie(t, n);
            break;
        case "style":
            oe(t, n);
            break;
        case "class":
            re(t, n);
            break;
        default:
            se(t, e, n)
        }
    }
    function ie(t, e) {
        if ("radio" === t.type)
            void 0 === t.attributes.value && (t.value = e),
            window.fromModel && (t.checked = ce(t.value, e));
        else if ("checkbox" === t.type)
            Number.isInteger(e) ? t.value = e : Number.isInteger(e) || Array.isArray(e) || "boolean" == typeof e || [null, void 0].includes(e) ? Array.isArray(e) ? t.checked = e.some((function(e) {
                return ce(e, t.value)
            }
            )) : t.checked = !!e : t.value = String(e);
        else if ("SELECT" === t.tagName)
            !function(t, e) {
                var n = [].concat(e).map((function(t) {
                    return t + ""
                }
                ));
                Array.from(t.options).forEach((function(t) {
                    t.selected = n.includes(t.value)
                }
                ))
            }(t, e);
        else {
            if (t.value === e)
                return;
            t.value = e
        }
    }
    function re(t, e) {
        t._x_undoAddedClasses && t._x_undoAddedClasses(),
        t._x_undoAddedClasses = zt(t, e)
    }
    function oe(t, e) {
        t._x_undoAddedStyles && t._x_undoAddedStyles(),
        t._x_undoAddedStyles = Jt(t, e)
    }
    function se(t, e, n) {
        [null, void 0, !1].includes(n) && function(t) {
            return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(t)
        }(e) ? t.removeAttribute(e) : (ue(e) && (n = e),
        function(t, e, n) {
            t.getAttribute(e) != n && t.setAttribute(e, n)
        }(t, e, n))
    }
    function ae(t) {
        return t.toLowerCase().replace(/-(\w)/g, (function(t, e) {
            return e.toUpperCase()
        }
        ))
    }
    function ce(t, e) {
        return t == e
    }
    function ue(t) {
        return ["disabled", "checked", "required", "readonly", "hidden", "open", "selected", "autofocus", "itemscope", "multiple", "novalidate", "allowfullscreen", "allowpaymentrequest", "formnovalidate", "autoplay", "controls", "loop", "muted", "playsinline", "default", "ismap", "reversed", "async", "defer", "nomodule"].includes(t)
    }
    function le(t, e) {
        var n;
        return function() {
            var i = this
              , r = arguments
              , o = function() {
                n = null,
                t.apply(i, r)
            };
            clearTimeout(n),
            n = setTimeout(o, e)
        }
    }
    function he(t, e) {
        var n;
        return function() {
            var i = this
              , r = arguments;
            n || (t.apply(i, r),
            n = !0,
            setTimeout((function() {
                return n = !1
            }
            ), e))
        }
    }
    var fe = {}
      , de = !1;
    var pe = {};
    var ge = {};
    var me = {
        get reactive() {
            return m
        },
        get release() {
            return _
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
            B(H),
            H = []
        },
        dontAutoEvaluateFunctions: function(t) {
            var e = it;
            it = !1,
            t(),
            it = e
        },
        disableEffectScheduling: function(t) {
            A = !1,
            t(),
            A = !0
        },
        setReactivityEngine: function(t) {
            m = t.reactive,
            _ = t.release,
            v = function(e) {
                return t.effect(e, {
                    scheduler: function(t) {
                        A ? k(t) : t()
                    }
                })
            }
            ,
            y = t.raw
        },
        closestDataStack: W,
        skipDuringClone: ee,
        addRootSelector: Ft,
        addInitSelector: Ht,
        addScopeToNode: V,
        deferMutations: function() {
            F = !0
        },
        mapAttributes: kt,
        evaluateLater: ot,
        setEvaluator: function(t) {
            st = t
        },
        mergeProxies: J,
        findClosest: qt,
        closestRoot: Bt,
        interceptor: G,
        transition: Zt,
        setStyles: Jt,
        mutateDom: U,
        directive: dt,
        throttle: he,
        debounce: le,
        evaluate: rt,
        initTree: Vt,
        nextTick: Pt,
        prefixed: ht,
        prefix: function(t) {
            lt = t
        },
        plugin: function(t) {
            t(me)
        },
        magic: Q,
        store: function(t, e) {
            if (de || (fe = m(fe),
            de = !0),
            void 0 === e)
                return fe[t];
            fe[t] = e,
            "object" === c(e) && null !== e && e.hasOwnProperty("init") && "function" == typeof e.init && fe[t].init(),
            Y(fe[t])
        },
        start: function() {
            var t;
            document.body || Dt("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),
            Lt(document, "alpine:init"),
            Lt(document, "alpine:initializing"),
            D(),
            t = function(t) {
                return Vt(t, jt)
            }
            ,
            M.push(t),
            O((function(t) {
                jt(t, (function(t) {
                    return P(t)
                }
                ))
            }
            )),
            function(t) {
                T.push(t)
            }((function(t, e) {
                pt(t, e).forEach((function(t) {
                    return t()
                }
                ))
            }
            )),
            Array.from(document.querySelectorAll(Ut())).filter((function(t) {
                return !Bt(t.parentElement, !0)
            }
            )).forEach((function(t) {
                Vt(t)
            }
            )),
            Lt(document, "alpine:initialized")
        },
        clone: function(t, e) {
            var n, i;
            e._x_dataStack || (e._x_dataStack = t._x_dataStack),
            te = !0,
            n = function() {
                var t;
                t = !1,
                Vt(e, (function(e, n) {
                    jt(e, (function(e, i) {
                        if (t && function(t) {
                            return It().some((function(e) {
                                return t.matches(e)
                            }
                            ))
                        }(e))
                            return i();
                        t = !0,
                        n(e, i)
                    }
                    ))
                }
                ))
            }
            ,
            i = v,
            C((function(t, e) {
                var n = i(t);
                return _(n),
                function() {}
            }
            )),
            n(),
            C(i),
            te = !1
        },
        bound: function(t, e, n) {
            if (t._x_bindings && void 0 !== t._x_bindings[e])
                return t._x_bindings[e];
            var i = t.getAttribute(e);
            return null === i ? "function" == typeof n ? n() : n : ue(e) ? !![e, "true"].includes(i) : "" === i || i
        },
        $data: q,
        data: function(t, e) {
            ge[t] = e
        },
        bind: function(t, e) {
            pe[t] = "function" != typeof e ? function() {
                return e
            }
            : e
        }
    };
    function ve(t, e) {
        for (var n = Object.create(null), i = t.split(","), r = 0; r < i.length; r++)
            n[i[r]] = !0;
        return e ? function(t) {
            return !!n[t.toLowerCase()]
        }
        : function(t) {
            return !!n[t]
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
    var _e, ye = Object.freeze({}), be = (Object.freeze([]),
    Object.assign), xe = Object.prototype.hasOwnProperty, we = function(t, e) {
        return xe.call(t, e)
    }, ke = Array.isArray, Ee = function(t) {
        return "[object Map]" === Te(t)
    }, Se = function(t) {
        return "symbol" === c(t)
    }, Ae = function(t) {
        return null !== t && "object" === c(t)
    }, Ce = Object.prototype.toString, Te = function(t) {
        return Ce.call(t)
    }, Le = function(t) {
        return Te(t).slice(8, -1)
    }, Me = function(t) {
        return "string" == typeof t && "NaN" !== t && "-" !== t[0] && "" + parseInt(t, 10) === t
    }, Oe = function(t) {
        var e = Object.create(null);
        return function(n) {
            return e[n] || (e[n] = t(n))
        }
    }, Pe = /-(\w)/g, Ne = (Oe((function(t) {
        return t.replace(Pe, (function(t, e) {
            return e ? e.toUpperCase() : ""
        }
        ))
    }
    )),
    /\B([A-Z])/g), je = (Oe((function(t) {
        return t.replace(Ne, "-$1").toLowerCase()
    }
    )),
    Oe((function(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    }
    ))), De = (Oe((function(t) {
        return t ? "on".concat(je(t)) : ""
    }
    )),
    function(t, e) {
        return t !== e && (t == t || e == e)
    }
    ), Re = new WeakMap, $e = [], Ie = Symbol("iterate"), Ue = Symbol("Map key iterate");
    function Fe(t) {
        return t && !0 === t._isEffect
    }
    var He = 0;
    function Be(t, e) {
        var n = function() {
            if (!n.active)
                return t();
            if (!$e.includes(n)) {
                qe(n);
                try {
                    return ze.push(Ve),
                    Ve = !0,
                    $e.push(n),
                    _e = n,
                    t()
                } finally {
                    $e.pop(),
                    Je(),
                    _e = $e[$e.length - 1]
                }
            }
        };
        return n.id = He++,
        n.allowRecurse = !!e.allowRecurse,
        n._isEffect = !0,
        n.active = !0,
        n.raw = t,
        n.deps = [],
        n.options = e,
        n
    }
    function qe(t) {
        var e = t.deps;
        if (e.length) {
            for (var n = 0; n < e.length; n++)
                e[n].delete(t);
            e.length = 0
        }
    }
    var Ve = !0
      , ze = [];
    function We() {
        ze.push(Ve),
        Ve = !1
    }
    function Je() {
        var t = ze.pop();
        Ve = void 0 === t || t
    }
    function Ye(t, e, n) {
        if (Ve && void 0 !== _e) {
            var i = Re.get(t);
            i || Re.set(t, i = new Map);
            var r = i.get(n);
            r || i.set(n, r = new Set),
            r.has(_e) || (r.add(_e),
            _e.deps.push(r),
            _e.options.onTrack && _e.options.onTrack({
                effect: _e,
                target: t,
                type: e,
                key: n
            }))
        }
    }
    function Ge(t, e, n, i, r, o) {
        var s = Re.get(t);
        if (s) {
            var a = new Set
              , c = function(t) {
                t && t.forEach((function(t) {
                    (t !== _e || t.allowRecurse) && a.add(t)
                }
                ))
            };
            if ("clear" === e)
                s.forEach(c);
            else if ("length" === n && ke(t))
                s.forEach((function(t, e) {
                    ("length" === e || e >= i) && c(t)
                }
                ));
            else
                switch (void 0 !== n && c(s.get(n)),
                e) {
                case "add":
                    ke(t) ? Me(n) && c(s.get("length")) : (c(s.get(Ie)),
                    Ee(t) && c(s.get(Ue)));
                    break;
                case "delete":
                    ke(t) || (c(s.get(Ie)),
                    Ee(t) && c(s.get(Ue)));
                    break;
                case "set":
                    Ee(t) && c(s.get(Ie))
                }
            a.forEach((function(s) {
                s.options.onTrigger && s.options.onTrigger({
                    effect: s,
                    target: t,
                    key: n,
                    type: e,
                    newValue: i,
                    oldValue: r,
                    oldTarget: o
                }),
                s.options.scheduler ? s.options.scheduler(s) : s()
            }
            ))
        }
    }
    var Xe = ve("__proto__,__v_isRef,__isVue")
      , Ze = new Set(Object.getOwnPropertyNames(Symbol).map((function(t) {
        return Symbol[t]
    }
    )).filter(Se))
      , Ke = rn()
      , Qe = rn(!1, !0)
      , tn = rn(!0)
      , en = rn(!0, !0)
      , nn = {};
    function rn() {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
          , e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return function(n, i, r) {
            if ("__v_isReactive" === i)
                return !t;
            if ("__v_isReadonly" === i)
                return t;
            if ("__v_raw" === i && r === (t ? e ? Nn : Pn : e ? On : Mn).get(n))
                return n;
            var o = ke(n);
            if (!t && o && we(nn, i))
                return Reflect.get(nn, i, r);
            var s = Reflect.get(n, i, r);
            return (Se(i) ? Ze.has(i) : Xe(i)) ? s : (t || Ye(n, "get", i),
            e ? s : In(s) ? !o || !Me(i) ? s.value : s : Ae(s) ? t ? Dn(s) : jn(s) : s)
        }
    }
    function on() {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return function(e, n, i, r) {
            var o = e[n];
            if (!t && (i = $n(i),
            o = $n(o),
            !ke(e) && In(o) && !In(i)))
                return o.value = i,
                !0;
            var s = ke(e) && Me(n) ? Number(n) < e.length : we(e, n)
              , a = Reflect.set(e, n, i, r);
            return e === $n(r) && (s ? De(i, o) && Ge(e, "set", n, i, o) : Ge(e, "add", n, i)),
            a
        }
    }
    ["includes", "indexOf", "lastIndexOf"].forEach((function(t) {
        var e = Array.prototype[t];
        nn[t] = function() {
            for (var t = $n(this), n = 0, i = this.length; n < i; n++)
                Ye(t, "get", n + "");
            for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
                o[s] = arguments[s];
            var a = e.apply(t, o);
            return -1 === a || !1 === a ? e.apply(t, o.map($n)) : a
        }
    }
    )),
    ["push", "pop", "shift", "unshift", "splice"].forEach((function(t) {
        var e = Array.prototype[t];
        nn[t] = function() {
            We();
            for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
                n[i] = arguments[i];
            var r = e.apply(this, n);
            return Je(),
            r
        }
    }
    ));
    var sn = {
        get: Ke,
        set: on(),
        deleteProperty: function(t, e) {
            var n = we(t, e)
              , i = t[e]
              , r = Reflect.deleteProperty(t, e);
            return r && n && Ge(t, "delete", e, void 0, i),
            r
        },
        has: function(t, e) {
            var n = Reflect.has(t, e);
            return Se(e) && Ze.has(e) || Ye(t, "has", e),
            n
        },
        ownKeys: function(t) {
            return Ye(t, "iterate", ke(t) ? "length" : Ie),
            Reflect.ownKeys(t)
        }
    }
      , an = {
        get: tn,
        set: function(t, e) {
            return console.warn('Set operation on key "'.concat(String(e), '" failed: target is readonly.'), t),
            !0
        },
        deleteProperty: function(t, e) {
            return console.warn('Delete operation on key "'.concat(String(e), '" failed: target is readonly.'), t),
            !0
        }
    }
      , cn = (be({}, sn, {
        get: Qe,
        set: on(!0)
    }),
    be({}, an, {
        get: en
    }),
    function(t) {
        return Ae(t) ? jn(t) : t
    }
    )
      , un = function(t) {
        return Ae(t) ? Dn(t) : t
    }
      , ln = function(t) {
        return t
    }
      , hn = function(t) {
        return Reflect.getPrototypeOf(t)
    };
    function fn(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          , i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
          , r = $n(t = t.__v_raw)
          , o = $n(e);
        e !== o && !n && Ye(r, "get", e),
        !n && Ye(r, "get", o);
        var s = hn(r)
          , a = s.has
          , c = i ? ln : n ? un : cn;
        return a.call(r, e) ? c(t.get(e)) : a.call(r, o) ? c(t.get(o)) : void (t !== r && t.get(e))
    }
    function dn(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          , n = this.__v_raw
          , i = $n(n)
          , r = $n(t);
        return t !== r && !e && Ye(i, "has", t),
        !e && Ye(i, "has", r),
        t === r ? n.has(t) : n.has(t) || n.has(r)
    }
    function pn(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return t = t.__v_raw,
        !e && Ye($n(t), "iterate", Ie),
        Reflect.get(t, "size", t)
    }
    function gn(t) {
        t = $n(t);
        var e = $n(this);
        return hn(e).has.call(e, t) || (e.add(t),
        Ge(e, "add", t, t)),
        this
    }
    function mn(t, e) {
        e = $n(e);
        var n = $n(this)
          , i = hn(n)
          , r = i.has
          , o = i.get
          , s = r.call(n, t);
        s ? Ln(n, r, t) : (t = $n(t),
        s = r.call(n, t));
        var a = o.call(n, t);
        return n.set(t, e),
        s ? De(e, a) && Ge(n, "set", t, e, a) : Ge(n, "add", t, e),
        this
    }
    function vn(t) {
        var e = $n(this)
          , n = hn(e)
          , i = n.has
          , r = n.get
          , o = i.call(e, t);
        o ? Ln(e, i, t) : (t = $n(t),
        o = i.call(e, t));
        var s = r ? r.call(e, t) : void 0
          , a = e.delete(t);
        return o && Ge(e, "delete", t, void 0, s),
        a
    }
    function _n() {
        var t = $n(this)
          , e = 0 !== t.size
          , n = Ee(t) ? new Map(t) : new Set(t)
          , i = t.clear();
        return e && Ge(t, "clear", void 0, void 0, n),
        i
    }
    function yn(t, e) {
        return function(n, i) {
            var r = this
              , o = r.__v_raw
              , s = $n(o)
              , a = e ? ln : t ? un : cn;
            return !t && Ye(s, "iterate", Ie),
            o.forEach((function(t, e) {
                return n.call(i, a(t), a(e), r)
            }
            ))
        }
    }
    function bn(t, e, n) {
        return function() {
            var i = this.__v_raw
              , r = $n(i)
              , o = Ee(r)
              , s = "entries" === t || t === Symbol.iterator && o
              , a = "keys" === t && o
              , c = i[t].apply(i, arguments)
              , u = n ? ln : e ? un : cn;
            return !e && Ye(r, "iterate", a ? Ue : Ie),
            h({
                next: function() {
                    var t = c.next()
                      , e = t.value
                      , n = t.done;
                    return n ? {
                        value: e,
                        done: n
                    } : {
                        value: s ? [u(e[0]), u(e[1])] : u(e),
                        done: n
                    }
                }
            }, Symbol.iterator, (function() {
                return this
            }
            ))
        }
    }
    function xn(t) {
        return function() {
            var e = (arguments.length <= 0 ? void 0 : arguments[0]) ? 'on key "'.concat(arguments.length <= 0 ? void 0 : arguments[0], '" ') : "";
            return console.warn("".concat(je(t), " operation ").concat(e, "failed: target is readonly."), $n(this)),
            "delete" !== t && this
        }
    }
    var wn = {
        get: function(t) {
            return fn(this, t)
        },
        get size() {
            return pn(this)
        },
        has: dn,
        add: gn,
        set: mn,
        delete: vn,
        clear: _n,
        forEach: yn(!1, !1)
    }
      , kn = {
        get: function(t) {
            return fn(this, t, !1, !0)
        },
        get size() {
            return pn(this)
        },
        has: dn,
        add: gn,
        set: mn,
        delete: vn,
        clear: _n,
        forEach: yn(!1, !0)
    }
      , En = {
        get: function(t) {
            return fn(this, t, !0)
        },
        get size() {
            return pn(this, !0)
        },
        has: function(t) {
            return dn.call(this, t, !0)
        },
        add: xn("add"),
        set: xn("set"),
        delete: xn("delete"),
        clear: xn("clear"),
        forEach: yn(!0, !1)
    }
      , Sn = {
        get: function(t) {
            return fn(this, t, !0, !0)
        },
        get size() {
            return pn(this, !0)
        },
        has: function(t) {
            return dn.call(this, t, !0)
        },
        add: xn("add"),
        set: xn("set"),
        delete: xn("delete"),
        clear: xn("clear"),
        forEach: yn(!0, !0)
    };
    function An(t, e) {
        var n = e ? t ? Sn : kn : t ? En : wn;
        return function(e, i, r) {
            return "__v_isReactive" === i ? !t : "__v_isReadonly" === i ? t : "__v_raw" === i ? e : Reflect.get(we(n, i) && i in e ? n : e, i, r)
        }
    }
    ["keys", "values", "entries", Symbol.iterator].forEach((function(t) {
        wn[t] = bn(t, !1, !1),
        En[t] = bn(t, !0, !1),
        kn[t] = bn(t, !1, !0),
        Sn[t] = bn(t, !0, !0)
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
    function Ln(t, e, n) {
        var i = $n(n);
        if (i !== n && e.call(t, i)) {
            var r = Le(t);
            console.warn("Reactive ".concat(r, " contains both the raw and reactive versions of the same object").concat("Map" === r ? " as keys" : "", ", which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible."))
        }
    }
    var Mn = new WeakMap
      , On = new WeakMap
      , Pn = new WeakMap
      , Nn = new WeakMap;
    function jn(t) {
        return t && t.__v_isReadonly ? t : Rn(t, !1, sn, Cn, Mn)
    }
    function Dn(t) {
        return Rn(t, !0, an, Tn, Pn)
    }
    function Rn(t, e, n, i, r) {
        if (!Ae(t))
            return console.warn("value cannot be made reactive: ".concat(String(t))),
            t;
        if (t.__v_raw && (!e || !t.__v_isReactive))
            return t;
        var o = r.get(t);
        if (o)
            return o;
        var s, a = (s = t).__v_skip || !Object.isExtensible(s) ? 0 : function(t) {
            switch (t) {
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
        }(Le(s));
        if (0 === a)
            return t;
        var c = new Proxy(t,2 === a ? i : n);
        return r.set(t, c),
        c
    }
    function $n(t) {
        return t && $n(t.__v_raw) || t
    }
    function In(t) {
        return Boolean(t && !0 === t.__v_isRef)
    }
    Q("nextTick", (function() {
        return Pt
    }
    )),
    Q("dispatch", (function(t) {
        return Lt.bind(Lt, t)
    }
    )),
    Q("watch", (function(t, e) {
        var n = e.evaluateLater
          , i = e.effect;
        return function(e, r) {
            var o, s = n(e), a = !0, c = i((function() {
                return s((function(t) {
                    JSON.stringify(t),
                    a ? o = t : queueMicrotask((function() {
                        r(t, o),
                        o = t
                    }
                    )),
                    a = !1
                }
                ))
            }
            ));
            t._x_effects.delete(c)
        }
    }
    )),
    Q("store", (function() {
        return fe
    }
    )),
    Q("data", (function(t) {
        return q(t)
    }
    )),
    Q("root", (function(t) {
        return Bt(t)
    }
    )),
    Q("refs", (function(t) {
        return t._x_refs_proxy || (t._x_refs_proxy = J(function(t) {
            var e = []
              , n = t;
            for (; n; )
                n._x_refs && e.push(n._x_refs),
                n = n.parentNode;
            return e
        }(t))),
        t._x_refs_proxy
    }
    ));
    var Un = {};
    function Fn(t) {
        return Un[t] || (Un[t] = 0),
        ++Un[t]
    }
    function Hn(t, e) {
        return qt(t, (function(t) {
            if (t._x_ids && t._x_ids[e])
                return !0
        }
        ))
    }
    function Bn(t, e, n) {
        Q(e, (function(e) {
            return Dt("You can't use [$".concat(directiveName, '] without first installing the "').concat(t, '" plugin here: https://alpinejs.dev/plugins/').concat(n), e)
        }
        ))
    }
    Q("id", (function(t) {
        return function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
              , i = Hn(t, e)
              , r = i ? i._x_ids[e] : Fn(e);
            return n ? "".concat(e, "-").concat(r, "-").concat(n) : "".concat(e, "-").concat(r)
        }
    }
    )),
    Q("el", (function(t) {
        return t
    }
    )),
    Bn("Focus", "focus", "focus"),
    Bn("Persist", "persist", "persist"),
    dt("modelable", (function(t, e, n) {
        var i = e.expression
          , r = n.effect
          , o = n.evaluateLater
          , s = o(i)
          , a = function() {
            var t;
            return s((function(e) {
                return t = e
            }
            )),
            t
        }
          , c = o("".concat(i, " = __placeholder"))
          , u = function(t) {
            return c((function() {}
            ), {
                scope: {
                    __placeholder: t
                }
            })
        }
          , l = a();
        u(l),
        queueMicrotask((function() {
            if (t._x_model) {
                t._x_removeModelListeners.default();
                var e = t._x_model.get
                  , n = t._x_model.set;
                r((function() {
                    return u(e())
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
    dt("teleport", (function(t, e, n) {
        var i = e.expression
          , r = n.cleanup;
        "template" !== t.tagName.toLowerCase() && Dt("x-teleport can only be used on a <template> tag", t);
        var o = document.querySelector(i);
        o || Dt('Cannot find x-teleport element for selector: "'.concat(i, '"'));
        var s = t.content.cloneNode(!0).firstElementChild;
        t._x_teleport = s,
        s._x_teleportBack = t,
        t._x_forwardEvents && t._x_forwardEvents.forEach((function(e) {
            s.addEventListener(e, (function(e) {
                e.stopPropagation(),
                t.dispatchEvent(new e.constructor(e.type,e))
            }
            ))
        }
        )),
        V(s, {}, t),
        U((function() {
            o.appendChild(s),
            Vt(s),
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
    function Vn(t, e, n, i) {
        var r = t
          , o = function(t) {
            return i(t)
        }
          , s = {}
          , a = function(t, e) {
            return function(n) {
                return e(t, n)
            }
        };
        if (n.includes("dot") && (e = e.replace(/-/g, ".")),
        n.includes("camel") && (e = function(t) {
            return t.toLowerCase().replace(/-(\w)/g, (function(t, e) {
                return e.toUpperCase()
            }
            ))
        }(e)),
        n.includes("passive") && (s.passive = !0),
        n.includes("capture") && (s.capture = !0),
        n.includes("window") && (r = window),
        n.includes("document") && (r = document),
        n.includes("prevent") && (o = a(o, (function(t, e) {
            e.preventDefault(),
            t(e)
        }
        ))),
        n.includes("stop") && (o = a(o, (function(t, e) {
            e.stopPropagation(),
            t(e)
        }
        ))),
        n.includes("self") && (o = a(o, (function(e, n) {
            n.target === t && e(n)
        }
        ))),
        (n.includes("away") || n.includes("outside")) && (r = document,
        o = a(o, (function(e, n) {
            t.contains(n.target) || !1 !== n.target.isConnected && (t.offsetWidth < 1 && t.offsetHeight < 1 || !1 !== t._x_isShown && e(n))
        }
        ))),
        n.includes("once") && (o = a(o, (function(t, n) {
            t(n),
            r.removeEventListener(e, o, s)
        }
        ))),
        o = a(o, (function(t, i) {
            (function(t) {
                return ["keydown", "keyup"].includes(t)
            }
            )(e) && function(t, e) {
                var n = e.filter((function(t) {
                    return !["window", "document", "prevent", "stop", "once"].includes(t)
                }
                ));
                if (n.includes("debounce")) {
                    var i = n.indexOf("debounce");
                    n.splice(i, zn((n[i + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
                }
                if (0 === n.length)
                    return !1;
                if (1 === n.length && Wn(t.key).includes(n[0]))
                    return !1;
                var r = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((function(t) {
                    return n.includes(t)
                }
                ));
                if (n = n.filter((function(t) {
                    return !r.includes(t)
                }
                )),
                r.length > 0) {
                    if (r.filter((function(e) {
                        return "cmd" !== e && "super" !== e || (e = "meta"),
                        t["".concat(e, "Key")]
                    }
                    )).length === r.length && Wn(t.key).includes(n[0]))
                        return !1
                }
                return !0
            }(i, n) || t(i)
        }
        )),
        n.includes("debounce")) {
            var c = n[n.indexOf("debounce") + 1] || "invalid-wait"
              , u = zn(c.split("ms")[0]) ? Number(c.split("ms")[0]) : 250;
            o = le(o, u)
        }
        if (n.includes("throttle")) {
            var l = n[n.indexOf("throttle") + 1] || "invalid-wait"
              , h = zn(l.split("ms")[0]) ? Number(l.split("ms")[0]) : 250;
            o = he(o, h)
        }
        return r.addEventListener(e, o, s),
        function() {
            r.removeEventListener(e, o, s)
        }
    }
    function zn(t) {
        return !Array.isArray(t) && !isNaN(t)
    }
    function Wn(t) {
        if (!t)
            return [];
        t = t.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
        var e = {
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
        return e[t] = t,
        Object.keys(e).map((function(n) {
            if (e[n] === t)
                return n
        }
        )).filter((function(t) {
            return t
        }
        ))
    }
    function Jn(t) {
        var e, n = t ? parseFloat(t) : null;
        return e = n,
        Array.isArray(e) || isNaN(e) ? t : n
    }
    function Yn(t, e, n, i) {
        var r = {};
        if (/^\[.*\]$/.test(t.item) && Array.isArray(e))
            t.item.replace("[", "").replace("]", "").split(",").map((function(t) {
                return t.trim()
            }
            )).forEach((function(t, n) {
                r[t] = e[n]
            }
            ));
        else if (/^\{.*\}$/.test(t.item) && !Array.isArray(e) && "object" === c(e)) {
            t.item.replace("{", "").replace("}", "").split(",").map((function(t) {
                return t.trim()
            }
            )).forEach((function(t) {
                r[t] = e[t]
            }
            ))
        } else
            r[t.item] = e;
        return t.index && (r[t.index] = n),
        t.collection && (r[t.collection] = i),
        r
    }
    function Gn() {}
    function Xn(t, e, n) {
        dt(e, (function(i) {
            return Dt("You can't use [x-".concat(e, '] without first installing the "').concat(t, '" plugin here: https://alpinejs.dev/plugins/').concat(n), i)
        }
        ))
    }
    qn.inline = function(t, e, n) {
        var i = e.modifiers
          , r = n.cleanup;
        i.includes("self") ? t._x_ignoreSelf = !0 : t._x_ignore = !0,
        r((function() {
            i.includes("self") ? delete t._x_ignoreSelf : delete t._x_ignore
        }
        ))
    }
    ,
    dt("ignore", qn),
    dt("effect", (function(t, e, n) {
        var i = e.expression;
        return (0,
        n.effect)(ot(t, i))
    }
    )),
    dt("model", (function(t, e, n) {
        var i = e.modifiers
          , r = e.expression
          , o = n.effect
          , s = n.cleanup
          , a = ot(t, r)
          , c = "".concat(r, " = rightSideOfExpression($event, ").concat(r, ")")
          , u = ot(t, c)
          , l = "select" === t.tagName.toLowerCase() || ["checkbox", "radio"].includes(t.type) || i.includes("lazy") ? "change" : "input"
          , h = function(t, e, n) {
            "radio" === t.type && U((function() {
                t.hasAttribute("name") || t.setAttribute("name", n)
            }
            ));
            return function(n, i) {
                return U((function() {
                    if (n instanceof CustomEvent && void 0 !== n.detail)
                        return n.detail || n.target.value;
                    if ("checkbox" === t.type) {
                        if (Array.isArray(i)) {
                            var r = e.includes("number") ? Jn(n.target.value) : n.target.value;
                            return n.target.checked ? i.concat([r]) : i.filter((function(t) {
                                return !(t == r)
                            }
                            ))
                        }
                        return n.target.checked
                    }
                    if ("select" === t.tagName.toLowerCase() && t.multiple)
                        return e.includes("number") ? Array.from(n.target.selectedOptions).map((function(t) {
                            return Jn(t.value || t.text)
                        }
                        )) : Array.from(n.target.selectedOptions).map((function(t) {
                            return t.value || t.text
                        }
                        ));
                    var o = n.target.value;
                    return e.includes("number") ? Jn(o) : e.includes("trim") ? o.trim() : o
                }
                ))
            }
        }(t, i, r)
          , f = Vn(t, l, i, (function(t) {
            u((function() {}
            ), {
                scope: {
                    $event: t,
                    rightSideOfExpression: h
                }
            })
        }
        ));
        t._x_removeModelListeners || (t._x_removeModelListeners = {}),
        t._x_removeModelListeners.default = f,
        s((function() {
            return t._x_removeModelListeners.default()
        }
        ));
        var d = ot(t, "".concat(r, " = __placeholder"));
        t._x_model = {
            get: function() {
                var t;
                return a((function(e) {
                    return t = e
                }
                )),
                t
            },
            set: function(t) {
                d((function() {}
                ), {
                    scope: {
                        __placeholder: t
                    }
                })
            }
        },
        t._x_forceModelUpdate = function() {
            a((function(e) {
                void 0 === e && r.match(/\./) && (e = ""),
                window.fromModel = !0,
                U((function() {
                    return ne(t, "value", e)
                }
                )),
                delete window.fromModel
            }
            ))
        }
        ,
        o((function() {
            i.includes("unintrusive") && document.activeElement.isSameNode(t) || t._x_forceModelUpdate()
        }
        ))
    }
    )),
    dt("cloak", (function(t) {
        return queueMicrotask((function() {
            return U((function() {
                return t.removeAttribute(ht("cloak"))
            }
            ))
        }
        ))
    }
    )),
    Ht((function() {
        return "[".concat(ht("init"), "]")
    }
    )),
    dt("init", ee((function(t, e, n) {
        var i = e.expression
          , r = n.evaluate;
        return "string" == typeof i ? !!i.trim() && r(i, {}, !1) : r(i, {}, !1)
    }
    ))),
    dt("text", (function(t, e, n) {
        var i = e.expression
          , r = n.effect
          , o = (0,
        n.evaluateLater)(i);
        r((function() {
            o((function(e) {
                U((function() {
                    t.textContent = e
                }
                ))
            }
            ))
        }
        ))
    }
    )),
    dt("html", (function(t, e, n) {
        var i = e.expression
          , r = n.effect
          , o = (0,
        n.evaluateLater)(i);
        r((function() {
            o((function(e) {
                U((function() {
                    t.innerHTML = e,
                    t._x_ignoreSelf = !0,
                    Vt(t),
                    delete t._x_ignoreSelf
                }
                ))
            }
            ))
        }
        ))
    }
    )),
    kt(bt(":", ht("bind:"))),
    dt("bind", (function(t, e, n) {
        var i = e.value
          , r = e.modifiers
          , o = e.expression
          , s = e.original
          , a = n.effect;
        if (!i)
            return function(t, e, n, i) {
                var r = {};
                o = r,
                Object.entries(pe).forEach((function(t) {
                    var e = d(t, 2)
                      , n = e[0]
                      , i = e[1];
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
                var s = ot(t, e)
                  , a = [];
                for (; a.length; )
                    a.pop()();
                s((function(e) {
                    var i = Object.entries(e).map((function(t) {
                        var e = d(t, 2);
                        return {
                            name: e[0],
                            value: e[1]
                        }
                    }
                    ))
                      , r = function(t) {
                        return Array.from(t).map(xt()).filter((function(t) {
                            return !Et(t)
                        }
                        ))
                    }(i);
                    i = i.map((function(t) {
                        return r.find((function(e) {
                            return e.name === t.name
                        }
                        )) ? {
                            name: "x-bind:".concat(t.name),
                            value: '"'.concat(t.value, '"')
                        } : t
                    }
                    )),
                    pt(t, i, n).map((function(t) {
                        a.push(t.runCleanups),
                        t()
                    }
                    ))
                }
                ), {
                    scope: r
                })
            }(t, o, s);
        if ("key" === i)
            return function(t, e) {
                t._x_keyExpression = e
            }(t, o);
        var c = ot(t, o);
        a((function() {
            return c((function(e) {
                void 0 === e && o.match(/\./) && (e = ""),
                U((function() {
                    return ne(t, i, e, r)
                }
                ))
            }
            ))
        }
        ))
    }
    )),
    Ft((function() {
        return "[".concat(ht("data"), "]")
    }
    )),
    dt("data", ee((function(t, e, n) {
        var i = e.expression
          , r = n.cleanup;
        i = "" === i ? "{}" : i;
        var o = {};
        tt(o, t);
        var s, a, c = {};
        s = c,
        a = o,
        Object.entries(ge).forEach((function(t) {
            var e = d(t, 2)
              , n = e[0]
              , i = e[1];
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
        var u = rt(t, i, {
            scope: c
        });
        void 0 === u && (u = {}),
        tt(u, t);
        var l = m(u);
        Y(l);
        var h = V(t, l);
        l.init && rt(t, l.init),
        r((function() {
            l.destroy && rt(t, l.destroy),
            h()
        }
        ))
    }
    ))),
    dt("show", (function(t, e, n) {
        var i = e.modifiers
          , r = e.expression
          , o = n.effect
          , s = ot(t, r);
        t._x_doHide || (t._x_doHide = function() {
            U((function() {
                return t.style.display = "none"
            }
            ))
        }
        ),
        t._x_doShow || (t._x_doShow = function() {
            U((function() {
                1 === t.style.length && "none" === t.style.display ? t.removeAttribute("style") : t.style.removeProperty("display")
            }
            ))
        }
        );
        var a, c = function() {
            t._x_doHide(),
            t._x_isShown = !1
        }, u = function() {
            t._x_doShow(),
            t._x_isShown = !0
        }, l = function() {
            return setTimeout(u)
        }, h = Yt((function(t) {
            return t ? u() : c()
        }
        ), (function(e) {
            "function" == typeof t._x_toggleAndCascadeWithTransitions ? t._x_toggleAndCascadeWithTransitions(t, e, u, c) : e ? l() : c()
        }
        )), f = !0;
        o((function() {
            return s((function(t) {
                (f || t !== a) && (i.includes("immediate") && (t ? l() : c()),
                h(t),
                a = t,
                f = !1)
            }
            ))
        }
        ))
    }
    )),
    dt("for", (function(t, e, n) {
        var i = e.expression
          , r = n.effect
          , o = n.cleanup
          , s = function(t) {
            var e = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/
              , n = /^\s*\(|\)\s*$/g
              , i = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/
              , r = t.match(i);
            if (!r)
                return;
            var o = {};
            o.items = r[2].trim();
            var s = r[1].replace(n, "").trim()
              , a = s.match(e);
            a ? (o.item = s.replace(e, "").trim(),
            o.index = a[1].trim(),
            a[2] && (o.collection = a[2].trim())) : o.item = s;
            return o
        }(i)
          , a = ot(t, s.items)
          , u = ot(t, t._x_keyExpression || "index");
        t._x_prevKeys = [],
        t._x_lookup = {},
        r((function() {
            return function(t, e, n, i) {
                var r = function(t) {
                    return "object" === c(t) && !Array.isArray(t)
                }
                  , o = t;
                n((function(n) {
                    var s;
                    s = n,
                    !Array.isArray(s) && !isNaN(s) && n >= 0 && (n = Array.from(Array(n).keys(), (function(t) {
                        return t + 1
                    }
                    ))),
                    void 0 === n && (n = []);
                    var a = t._x_lookup
                      , u = t._x_prevKeys
                      , h = []
                      , f = [];
                    if (r(n))
                        n = Object.entries(n).map((function(t) {
                            var r = d(t, 2)
                              , o = r[0]
                              , s = r[1]
                              , a = Yn(e, s, o, n);
                            i((function(t) {
                                return f.push(t)
                            }
                            ), {
                                scope: l({
                                    index: o
                                }, a)
                            }),
                            h.push(a)
                        }
                        ));
                    else
                        for (var p = 0; p < n.length; p++) {
                            var g = Yn(e, n[p], p, n);
                            i((function(t) {
                                return f.push(t)
                            }
                            ), {
                                scope: l({
                                    index: p
                                }, g)
                            }),
                            h.push(g)
                        }
                    for (var v = [], _ = [], y = [], b = [], x = 0; x < u.length; x++) {
                        var w = u[x];
                        -1 === f.indexOf(w) && y.push(w)
                    }
                    u = u.filter((function(t) {
                        return !y.includes(t)
                    }
                    ));
                    for (var k = "template", S = 0; S < f.length; S++) {
                        var A = f[S]
                          , C = u.indexOf(A);
                        if (-1 === C)
                            u.splice(S, 0, A),
                            v.push([k, S]);
                        else if (C !== S) {
                            var T = u.splice(S, 1)[0]
                              , L = u.splice(C - 1, 1)[0];
                            u.splice(S, 0, L),
                            u.splice(C, 0, T),
                            _.push([T, L])
                        } else
                            b.push(A);
                        k = A
                    }
                    for (var M = 0; M < y.length; M++) {
                        var O = y[M];
                        a[O]._x_effects && a[O]._x_effects.forEach(E),
                        a[O].remove(),
                        a[O] = null,
                        delete a[O]
                    }
                    for (var P = function() {
                        var t = d(_[N], 2)
                          , e = t[0]
                          , n = t[1]
                          , i = a[e]
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
                        z(r, h[f.indexOf(n)])
                    }, N = 0; N < _.length; N++)
                        P();
                    for (var j = function() {
                        var t = d(v[D], 2)
                          , e = t[0]
                          , n = t[1]
                          , i = "template" === e ? o : a[e];
                        i._x_currentIfEl && (i = i._x_currentIfEl);
                        var r = h[n]
                          , s = f[n]
                          , u = document.importNode(o.content, !0).firstElementChild;
                        V(u, m(r), o),
                        U((function() {
                            i.after(u),
                            Vt(u)
                        }
                        )),
                        "object" === c(s) && Dt("x-for key cannot be an object, it must be a string or an integer", o),
                        a[s] = u
                    }, D = 0; D < v.length; D++)
                        j();
                    for (var R = 0; R < b.length; R++)
                        z(a[b[R]], h[f.indexOf(b[R])]);
                    o._x_prevKeys = f
                }
                ))
            }(t, s, a, u)
        }
        )),
        o((function() {
            Object.values(t._x_lookup).forEach((function(t) {
                return t.remove()
            }
            )),
            delete t._x_prevKeys,
            delete t._x_lookup
        }
        ))
    }
    )),
    Gn.inline = function(t, e, n) {
        var i = e.expression
          , r = n.cleanup
          , o = Bt(t);
        o._x_refs || (o._x_refs = {}),
        o._x_refs[i] = t,
        r((function() {
            return delete o._x_refs[i]
        }
        ))
    }
    ,
    dt("ref", Gn),
    dt("if", (function(t, e, n) {
        var i = e.expression
          , r = n.effect
          , o = n.cleanup
          , s = ot(t, i);
        r((function() {
            return s((function(e) {
                e ? function() {
                    if (t._x_currentIfEl)
                        return t._x_currentIfEl;
                    var e = t.content.cloneNode(!0).firstElementChild;
                    V(e, {}, t),
                    U((function() {
                        t.after(e),
                        Vt(e)
                    }
                    )),
                    t._x_currentIfEl = e,
                    t._x_undoIf = function() {
                        jt(e, (function(t) {
                            t._x_effects && t._x_effects.forEach(E)
                        }
                        )),
                        e.remove(),
                        delete t._x_currentIfEl
                    }
                }() : t._x_undoIf && (t._x_undoIf(),
                delete t._x_undoIf)
            }
            ))
        }
        )),
        o((function() {
            return t._x_undoIf && t._x_undoIf()
        }
        ))
    }
    )),
    dt("id", (function(t, e, n) {
        var i = e.expression;
        (0,
        n.evaluate)(i).forEach((function(e) {
            return function(t, e) {
                t._x_ids || (t._x_ids = {}),
                t._x_ids[e] || (t._x_ids[e] = Fn(e))
            }(t, e)
        }
        ))
    }
    )),
    kt(bt("@", ht("on:"))),
    dt("on", ee((function(t, e, n) {
        var i = e.value
          , r = e.modifiers
          , o = e.expression
          , s = n.cleanup
          , a = o ? ot(t, o) : function() {}
        ;
        "template" === t.tagName.toLowerCase() && (t._x_forwardEvents || (t._x_forwardEvents = []),
        t._x_forwardEvents.includes(i) || t._x_forwardEvents.push(i));
        var c = Vn(t, i, r, (function(t) {
            a((function() {}
            ), {
                scope: {
                    $event: t
                },
                params: [t]
            })
        }
        ));
        s((function() {
            return c()
        }
        ))
    }
    ))),
    Xn("Collapse", "collapse", "collapse"),
    Xn("Intersect", "intersect", "intersect"),
    Xn("Focus", "trap", "focus"),
    Xn("Mask", "mask", "mask"),
    me.setEvaluator((function(t, e) {
        var n = {};
        tt(n, t);
        var i = [n].concat(f(W(t)));
        if ("function" == typeof e)
            return at(i, e);
        return et.bind(null, t, e, (function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , r = n.scope
              , o = void 0 === r ? {} : r
              , s = n.params
              , a = void 0 === s ? [] : s
              , c = J([o].concat(f(i)));
            void 0 !== c[e] && ut(t, c[e], c, a)
        }
        ))
    }
    )),
    me.setReactivityEngine({
        reactive: jn,
        effect: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ye;
            Fe(t) && (t = t.raw);
            var n = Be(t, e);
            return e.lazy || n(),
            n
        },
        release: function(t) {
            t.active && (qe(t),
            t.options.onStop && t.options.onStop(),
            t.active = !1)
        },
        raw: $n
    });
    var Zn = me
}
, function(t, e, n) {
    "use strict";
    (function(t, i) {
        n.d(e, "a", (function() {
            return s
        }
        )),
        n.d(e, "b", (function() {
            return o
        }
        ));
        var r = n(35);
        function o() {
            return !Object(r.a)() && "[object process]" === Object.prototype.toString.call(void 0 !== t ? t : 0)
        }
        function s(t, e) {
            return t.require(e)
        }
    }
    ).call(this, n(39), n(30)(t))
}
, , function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return h
    }
    ));
    var i = n(0)
      , r = n(1)
      , o = n.n(r)
      , s = n(3);
    function a(t, e, n, i, r) {
        return `\n    M ${t} ${e}\n    a ${r} ${r} 0 0 1 ${r} ${r}\n    v ${i}\n    a ${r} ${r} 0 0 1 -${r} ${r}\n    h -${n}\n    a ${r} ${r} 0 0 1 -${r} -${r}\n    v -${i}\n    a ${r} ${r} 0 0 1 ${r} -${r}\n    z\n  `
    }
    function c() {
        return Object(s.f)() ? 30 : 50
    }
    function u(t, e, n) {
        return t.append("path").attr("fill", "#eee").attr("opacity", 0).attr("d", function(t) {
            return Object(s.f)() ? a(t, -10, t, 0, 7) : a(t, -16, t, 0, 13)
        }(e))
    }
    function l(t, e, n, r) {
        const s = t.append("g").on("mouseenter", (function() {
            if (!r) {
                i.a.select(this).selectAll("text").transition().attr("fill", "white").attr("font-weight", o.a.fontWeightMedium)
            }
        }
        )).on("mouseleave", (function() {
            if (!r) {
                i.a.select(this).selectAll("text").transition().attr("fill", o.a.neutral300).attr("font-weight", o.a.fontWeightNormal)
            }
        }
        )).on("click", (function() {
            n()
        }
        ))
          , a = function(t, e, n) {
            return t.append("text").attr("fill", n ? o.a.primary500 : o.a.neutral300).attr("font-weight", n ? 700 : 500).text(e)
        }(s, e, r);
        return u(s, a.node().getBBox().width).lower().lower(),
        s
    }
    const h = ({element: t, config: e, buttons: n})=>{
        const {position: {x: i, y: r}, leftReference: s} = e
          , a = function(t, e, n) {
            return t.append("g").attr("font-size", "10px").attr("font-weight", 500).attr("fill", o.a.neutral300).attr("transform", `translate(${e}, ${n})`).style("cursor", "pointer").style("user-select", "none")
        }(t, i, r);
        return n.map(((t,e)=>{
            const n = l(a, t.label, t.onClick, t.active);
            e > 0 && s && n.attr("transform", `translate(${e * c()})`),
            e > 0 && !s && n.attr("transform", `translate(${-e * c()})`)
        }
        )),
        a
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return u
    }
    )),
    n.d(e, "b", (function() {
        return c
    }
    )),
    n.d(e, "c", (function() {
        return h
    }
    )),
    n.d(e, "d", (function() {
        return l
    }
    )),
    n.d(e, "e", (function() {
        return a
    }
    )),
    n.d(e, "f", (function() {
        return o
    }
    ));
    var i = n(10)
      , r = (n(12),
    n(4));
    function o() {
        const t = r.a
          , e = t.crypto || t.msCrypto;
        if (e && e.randomUUID)
            return e.randomUUID().replace(/-/g, "");
        const n = e && e.getRandomValues ? ()=>e.getRandomValues(new Uint8Array(1))[0] : ()=>16 * Math.random();
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (t=>(t ^ (15 & n()) >> t / 4).toString(16)))
    }
    function s(t) {
        return t.exception && t.exception.values ? t.exception.values[0] : void 0
    }
    function a(t) {
        const {message: e, event_id: n} = t;
        if (e)
            return e;
        const i = s(t);
        return i ? i.type && i.value ? `${i.type}: ${i.value}` : i.type || i.value || n || "<unknown>" : n || "<unknown>"
    }
    function c(t, e, n) {
        const i = t.exception = t.exception || {}
          , r = i.values = i.values || []
          , o = r[0] = r[0] || {};
        o.value || (o.value = e || ""),
        o.type || (o.type = n || "Error")
    }
    function u(t, e) {
        const n = s(t);
        if (!n)
            return;
        const i = n.mechanism;
        if (n.mechanism = {
            type: "generic",
            handled: !0,
            ...i,
            ...e
        },
        e && "data"in e) {
            const t = {
                ...i && i.data,
                ...e.data
            };
            n.mechanism.data = t
        }
    }
    function l(t) {
        if (t && t.__sentry_captured__)
            return !0;
        try {
            Object(i.a)(t, "__sentry_captured__", !0)
        } catch (t) {}
        return !1
    }
    function h(t) {
        return Array.isArray(t) ? t : [t]
    }
}
, , function(t, e, n) {
    "use strict";
    var i = n(8);
    const r = "plaid_link_token"
      , o = "plaid_request_origin_uri";
    let s;
    e.a = {
        hook: {
            mounted() {
                "true" == this.el.getAttribute("data-skip-hook") || this.el.addEventListener("click", l)
            },
            updated() {
                if (!("true" == this.el.getAttribute("data-skip-hook"))) {
                    this.el.removeEventListener("click", l);
                    "Plaid" == this.el.getAttribute("phx-hook") && this.el.addEventListener("click", l)
                }
            }
        },
        hookOAuth: {
            mounted() {
                try {
                    const t = sessionStorage.getItem(r);
                    t ? (a(this.el),
                    window.Plaid.create({
                        token: t,
                        receivedRedirectUri: window.location.href,
                        onSuccess: (t,e)=>{
                            c(t, e);
                            const n = sessionStorage.getItem(o);
                            setTimeout((()=>window.location.replace(n)), 3e3)
                        }
                        ,
                        onEvent: (t,e)=>u(t, e)
                    }).open()) : window.location.replace("/")
                } catch (t) {
                    console.error("Plaid OAuth hook failed", t)
                }
            },
            updated() {
                a(this.el)
            }
        },
        init: function(t) {
            const e = Object(i.a)("user_uid");
            if (!e)
                return console.error("Could not setup plaid, userUid not found.");
            s = t.channel(`plaid_link:${e}`),
            s.join(),
            s.on("plaid_complete", (t=>{
                document.querySelectorAll(".c-flash").forEach((t=>t.remove()))
            }
            ))
        }
    };
    const a = t=>{
        const e = sessionStorage.getItem(o);
        e ? t.setAttribute("href", e) : t.setAttribute("href", "/")
    }
      , c = (t,e,n=null)=>s.push("plaid_on_success", {
        publicToken: t,
        metadata: e,
        bank_account_uid: n
    })
      , u = (t,e,n=null)=>{
        switch (t) {
        case "ERROR":
            return s.push("connect_error", {
                metadata: e,
                bank_account_uid: n
            });
        case "EXIT":
            return s.push("connect_exit", {
                metadata: e,
                bank_account_uid: n
            })
        }
    }
      , l = function(t) {
        const e = t.target.getAttribute("data-bank-account-uid");
        s.push("get_connection_config", {
            bank_account_uid: e
        }).receive("ok", (({env: t, key: n, token: i})=>{
            sessionStorage.setItem(r, i),
            sessionStorage.setItem(o, window.location.href),
            window.Plaid.create({
                clientName: "River Financial",
                product: ["auth"],
                onSuccess: (t,n)=>c(t, n, e),
                onEvent: (t,n)=>u(t, n, e),
                env: t,
                key: n,
                token: i
            }).open()
        }
        ))
    }
}
, function(t, e, n) {
    var i, r;
    i = function() {
        var t, e, n = {
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
        function r(t, e, n) {
            return t < e ? e : t > n ? n : t
        }
        function o(t) {
            return 100 * (-1 + t)
        }
        function s(t, e, n) {
            var r;
            return (r = "translate3d" === i.positionUsing ? {
                transform: "translate3d(" + o(t) + "%,0,0)"
            } : "translate" === i.positionUsing ? {
                transform: "translate(" + o(t) + "%,0)"
            } : {
                "margin-left": o(t) + "%"
            }).transition = "all " + e + "ms " + n,
            r
        }
        n.configure = function(t) {
            var e, n;
            for (e in t)
                void 0 !== (n = t[e]) && t.hasOwnProperty(e) && (i[e] = n);
            return this
        }
        ,
        n.status = null,
        n.set = function(t) {
            var e = n.isStarted();
            t = r(t, i.minimum, 1),
            n.status = 1 === t ? null : t;
            var o = n.render(!e)
              , u = o.querySelector(i.barSelector)
              , l = i.speed
              , h = i.easing;
            return o.offsetWidth,
            a((function(e) {
                "" === i.positionUsing && (i.positionUsing = n.getPositioningCSS()),
                c(u, s(t, l, h)),
                1 === t ? (c(o, {
                    transition: "none",
                    opacity: 1
                }),
                o.offsetWidth,
                setTimeout((function() {
                    c(o, {
                        transition: "all " + l + "ms linear",
                        opacity: 0
                    }),
                    setTimeout((function() {
                        n.remove(),
                        e()
                    }
                    ), l)
                }
                ), l)) : setTimeout(e, l)
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
            var t = function() {
                setTimeout((function() {
                    n.status && (n.trickle(),
                    t())
                }
                ), i.trickleSpeed)
            };
            return i.trickle && t(),
            this
        }
        ,
        n.done = function(t) {
            return t || n.status ? n.inc(.3 + .5 * Math.random()).set(1) : this
        }
        ,
        n.inc = function(t) {
            var e = n.status;
            return e ? ("number" != typeof t && (t = (1 - e) * r(Math.random() * e, .1, .95)),
            e = r(e + t, 0, .994),
            n.set(e)) : n.start()
        }
        ,
        n.trickle = function() {
            return n.inc(Math.random() * i.trickleRate)
        }
        ,
        t = 0,
        e = 0,
        n.promise = function(i) {
            return i && "resolved" !== i.state() ? (0 === e && n.start(),
            t++,
            e++,
            i.always((function() {
                0 == --e ? (t = 0,
                n.done()) : n.set((t - e) / t)
            }
            )),
            this) : this
        }
        ,
        n.render = function(t) {
            if (n.isRendered())
                return document.getElementById("nprogress");
            l(document.documentElement, "nprogress-busy");
            var e = document.createElement("div");
            e.id = "nprogress",
            e.innerHTML = i.template;
            var r, s = e.querySelector(i.barSelector), a = t ? "-100" : o(n.status || 0), u = document.querySelector(i.parent);
            return c(s, {
                transition: "all 0 linear",
                transform: "translate3d(" + a + "%,0,0)"
            }),
            i.showSpinner || (r = e.querySelector(i.spinnerSelector)) && d(r),
            u != document.body && l(u, "nprogress-custom-parent"),
            u.appendChild(e),
            e
        }
        ,
        n.remove = function() {
            h(document.documentElement, "nprogress-busy"),
            h(document.querySelector(i.parent), "nprogress-custom-parent");
            var t = document.getElementById("nprogress");
            t && d(t)
        }
        ,
        n.isRendered = function() {
            return !!document.getElementById("nprogress")
        }
        ,
        n.getPositioningCSS = function() {
            var t = document.body.style
              , e = "WebkitTransform"in t ? "Webkit" : "MozTransform"in t ? "Moz" : "msTransform"in t ? "ms" : "OTransform"in t ? "O" : "";
            return e + "Perspective"in t ? "translate3d" : e + "Transform"in t ? "translate" : "margin"
        }
        ;
        var a = function() {
            var t = [];
            function e() {
                var n = t.shift();
                n && n(e)
            }
            return function(n) {
                t.push(n),
                1 == t.length && e()
            }
        }()
          , c = function() {
            var t = ["Webkit", "O", "Moz", "ms"]
              , e = {};
            function n(t) {
                return t.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, (function(t, e) {
                    return e.toUpperCase()
                }
                ))
            }
            function i(e) {
                var n = document.body.style;
                if (e in n)
                    return e;
                for (var i, r = t.length, o = e.charAt(0).toUpperCase() + e.slice(1); r--; )
                    if ((i = t[r] + o)in n)
                        return i;
                return e
            }
            function r(t) {
                return t = n(t),
                e[t] || (e[t] = i(t))
            }
            function o(t, e, n) {
                e = r(e),
                t.style[e] = n
            }
            return function(t, e) {
                var n, i, r = arguments;
                if (2 == r.length)
                    for (n in e)
                        void 0 !== (i = e[n]) && e.hasOwnProperty(n) && o(t, n, i);
                else
                    o(t, r[1], r[2])
            }
        }();
        function u(t, e) {
            return ("string" == typeof t ? t : f(t)).indexOf(" " + e + " ") >= 0
        }
        function l(t, e) {
            var n = f(t)
              , i = n + e;
            u(n, e) || (t.className = i.substring(1))
        }
        function h(t, e) {
            var n, i = f(t);
            u(t, e) && (n = i.replace(" " + e + " ", " "),
            t.className = n.substring(1, n.length - 1))
        }
        function f(t) {
            return (" " + (t.className || "") + " ").replace(/\s+/gi, " ")
        }
        function d(t) {
            t && t.parentNode && t.parentNode.removeChild(t)
        }
        return n
    }
    ,
    void 0 === (r = "function" == typeof i ? i.call(e, n, e, t) : i) || (t.exports = r)
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
    )),
    n.d(e, "c", (function() {
        return o
    }
    ));
    var i, r = n(2);
    function o(t) {
        return new a((e=>{
            e(t)
        }
        ))
    }
    function s(t) {
        return new a(((e,n)=>{
            n(t)
        }
        ))
    }
    !function(t) {
        t[t.PENDING = 0] = "PENDING";
        t[t.RESOLVED = 1] = "RESOLVED";
        t[t.REJECTED = 2] = "REJECTED"
    }(i || (i = {}));
    class a {
        __init() {
            this._state = i.PENDING
        }
        __init2() {
            this._handlers = []
        }
        constructor(t) {
            a.prototype.__init.call(this),
            a.prototype.__init2.call(this),
            a.prototype.__init3.call(this),
            a.prototype.__init4.call(this),
            a.prototype.__init5.call(this),
            a.prototype.__init6.call(this);
            try {
                t(this._resolve, this._reject)
            } catch (t) {
                this._reject(t)
            }
        }
        then(t, e) {
            return new a(((n,i)=>{
                this._handlers.push([!1, e=>{
                    if (t)
                        try {
                            n(t(e))
                        } catch (t) {
                            i(t)
                        }
                    else
                        n(e)
                }
                , t=>{
                    if (e)
                        try {
                            n(e(t))
                        } catch (t) {
                            i(t)
                        }
                    else
                        i(t)
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
            return new a(((e,n)=>{
                let i, r;
                return this.then((e=>{
                    r = !1,
                    i = e,
                    t && t()
                }
                ), (e=>{
                    r = !0,
                    i = e,
                    t && t()
                }
                )).then((()=>{
                    r ? n(i) : e(i)
                }
                ))
            }
            ))
        }
        __init3() {
            this._resolve = t=>{
                this._setResult(i.RESOLVED, t)
            }
        }
        __init4() {
            this._reject = t=>{
                this._setResult(i.REJECTED, t)
            }
        }
        __init5() {
            this._setResult = (t,e)=>{
                this._state === i.PENDING && (Object(r.n)(e) ? e.then(this._resolve, this._reject) : (this._state = t,
                this._value = e,
                this._executeHandlers()))
            }
        }
        __init6() {
            this._executeHandlers = ()=>{
                if (this._state === i.PENDING)
                    return;
                const t = this._handlers.slice();
                this._handlers = [],
                t.forEach((t=>{
                    t[0] || (this._state === i.RESOLVED && t[1](this._value),
                    this._state === i.REJECTED && t[2](this._value),
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
, function(t, e, n) {
    "use strict";
    function i(t, e) {
        t.addEventListener("click", (function() {
            const n = t.getAttribute("data-copy")
              , i = t.getAttribute("data-success-msg") || "Copied"
              , r = t.getAttribute("data-copied-event")
              , o = t.getAttribute("id");
            !function(t, e, n, i, r, o) {
                const s = document.createElement("textarea");
                if (s.value = t,
                document.body.append(s),
                s.select(),
                document.execCommand("copy"),
                s.remove(),
                !e)
                    return;
                const a = e.innerHTML;
                e.disabled = !0,
                e.innerHTML = i,
                r && o && o.pushEvent(r, {
                    id: n
                });
                setTimeout((function() {
                    e.innerHTML = a,
                    e.disabled = !1
                }
                ), 1e3)
            }(n, t, o, i, r, e)
        }
        ))
    }
    e.a = {
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
, function(t, e, n) {
    "use strict";
    function i(t) {
        t.addEventListener("click", (function() {
            !function({text: t, url: e, title: n}) {
                if (!navigator.share)
                    return void console.error("navigator.share API not supported.");
                navigator.share({
                    title: n,
                    text: t,
                    url: e
                }).then((()=>{}
                )).catch((t=>console.error("Error sharing", t)))
            }(t.getAttribute("data-share"))
        }
        ))
    }
    e.a = {
        hook: {
            mounted() {
                i(this.el)
            }
        },
        init: function() {
            navigator.share || function() {
                const t = ".js-share { display: none; }"
                  , e = document.createElement("style");
                e.type = "text/css",
                e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
                document.getElementsByTagName("head")[0].appendChild(e)
            }(),
            document.querySelectorAll(".js-share").forEach(i)
        }
    }
}
, function(t, e, n) {
    "use strict";
    const i = [0, 32];
    function r(t, e) {
        var n;
        document.addEventListener("click", (n = t,
        function(t) {
            n.contains(t.target) || c(n)
        }
        ));
        const r = function(t) {
            return t.querySelector(".js-dropdown__selected")
        }(t);
        r.addEventListener("click", o(t)),
        r.addEventListener("keydown", function(t) {
            return function(e) {
                (i.includes(e.keyCode) || 13 === e.keyCode) && a(t),
                27 === e.keyCode && c(t)
            }
        }(t)),
        l(t).addEventListener("click", o(t)),
        function(t) {
            return t.querySelectorAll(".js-dropdown__list-item")
        }(t).forEach((n=>{
            n.addEventListener("click", function(t, e) {
                return function(n) {
                    e || s(n.target, t),
                    c(t)
                }
            }(t, e)),
            e || n.addEventListener("keydown", function(t) {
                return function(e) {
                    (i.includes(e.keyCode) || 13 === e.keyCode) && (s(e.target, t),
                    c(t)),
                    27 === e.keyCode && c(t)
                }
            }(t))
        }
        ))
    }
    function o(t) {
        return function(e) {
            a(t)
        }
    }
    function s(t, e) {
        e.querySelector(".js-dropdown__selected-content").innerHTML = t.innerHTML;
        const n = function(t) {
            return t.querySelector(".js-dropdown__form")
        }(e);
        if (n) {
            const e = function(t, e) {
                return t.querySelector(`[value=${e}]`)
            }(n, t.dataset.value);
            e.selected = !0
        }
    }
    function a(t) {
        u(t).classList.toggle("hidden"),
        l(t).classList.toggle("expanded")
    }
    function c(t) {
        const e = u(t);
        e && e.classList.add("hidden"),
        l(t).classList.remove("expanded")
    }
    function u(t) {
        return t.querySelector(".js-dropdown__list")
    }
    function l(t) {
        return t.querySelector(".js-dropdown__arrow")
    }
    e.a = {
        hook: {
            mounted: function() {
                r(this.el, !0)
            }
        },
        init: function() {
            document.querySelectorAll(".js-dropdown").forEach((t=>r(t, !1)))
        }
    }
}
, function(t, e, n) {
    "use strict";
    function i() {
        return "undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && !!__SENTRY_BROWSER_BUNDLE__
    }
    n.d(e, "a", (function() {
        return i
    }
    ))
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return c
    }
    )),
    n.d(e, "b", (function() {
        return s
    }
    ));
    var i = n(2)
      , r = n(4);
    const o = Object(r.b)();
    function s(t, e) {
        try {
            let n = t;
            const i = 5
              , r = 80
              , o = [];
            let s = 0
              , c = 0;
            const u = " > "
              , l = u.length;
            let h;
            for (; n && s++ < i && (h = a(n, e),
            !("html" === h || s > 1 && c + o.length * l + h.length >= r)); )
                o.push(h),
                c += h.length,
                n = n.parentNode;
            return o.reverse().join(u)
        } catch (t) {
            return "<unknown>"
        }
    }
    function a(t, e) {
        const n = t
          , r = [];
        let o, s, a, c, u;
        if (!n || !n.tagName)
            return "";
        r.push(n.tagName.toLowerCase());
        const l = e && e.length ? e.filter((t=>n.getAttribute(t))).map((t=>[t, n.getAttribute(t)])) : null;
        if (l && l.length)
            l.forEach((t=>{
                r.push(`[${t[0]}="${t[1]}"]`)
            }
            ));
        else if (n.id && r.push(`#${n.id}`),
        o = n.className,
        o && Object(i.l)(o))
            for (s = o.split(/\s+/),
            u = 0; u < s.length; u++)
                r.push(`.${s[u]}`);
        const h = ["type", "name", "title", "alt"];
        for (u = 0; u < h.length; u++)
            a = h[u],
            c = n.getAttribute(a),
            c && r.push(`[${a}="${c}"]`);
        return r.join("")
    }
    function c() {
        try {
            return o.document.location.href
        } catch (t) {
            return ""
        }
    }
}
, , , function(t, e) {
    var n, i, r = t.exports = {};
    function o() {
        throw new Error("setTimeout has not been defined")
    }
    function s() {
        throw new Error("clearTimeout has not been defined")
    }
    function a(t) {
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
            i = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (t) {
            i = s
        }
    }();
    var c, u = [], l = !1, h = -1;
    function f() {
        l && c && (l = !1,
        c.length ? u = c.concat(u) : h = -1,
        u.length && d())
    }
    function d() {
        if (!l) {
            var t = a(f);
            l = !0;
            for (var e = u.length; e; ) {
                for (c = u,
                u = []; ++h < e; )
                    c && c[h].run();
                h = -1,
                e = u.length
            }
            c = null,
            l = !1,
            function(t) {
                if (i === clearTimeout)
                    return clearTimeout(t);
                if ((i === s || !i) && clearTimeout)
                    return i = clearTimeout,
                    clearTimeout(t);
                try {
                    i(t)
                } catch (e) {
                    try {
                        return i.call(null, t)
                    } catch (e) {
                        return i.call(this, t)
                    }
                }
            }(t)
        }
    }
    function p(t, e) {
        this.fun = t,
        this.array = e
    }
    function g() {}
    r.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
        u.push(new p(t,e)),
        1 !== u.length || l || a(d)
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
    r.on = g,
    r.addListener = g,
    r.once = g,
    r.off = g,
    r.removeListener = g,
    r.removeAllListeners = g,
    r.emit = g,
    r.prependListener = g,
    r.prependOnceListener = g,
    r.listeners = function(t) {
        return []
    }
    ,
    r.binding = function(t) {
        throw new Error("process.binding is not supported")
    }
    ,
    r.cwd = function() {
        return "/"
    }
    ,
    r.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }
    ,
    r.umask = function() {
        return 0
    }
}
, function(t, e, n) {
    "use strict";
    function i() {
        var t = document.querySelector(".c-nav-product");
        t.classList.contains("c-nav-product--show-responsive-menu") ? t.classList.remove("c-nav-product--show-responsive-menu") : t.classList.add("c-nav-product--show-responsive-menu")
    }
    function r({hitSelector: t, revealSelector: e}) {
        const n = document.querySelectorAll(t)
          , i = document.querySelectorAll(e);
        if (n.length !== i.length)
            throw new Error("incorrect dropdown setup, you must have an element to show for every reveal element");
        n.forEach(((t,e)=>{
            let n = !1;
            const r = i[e];
            function o(t) {
                r && r.classList.remove("is-visible"),
                n = !1
            }
            t && t.addEventListener("click", (function(t) {
                i.forEach((t=>{
                    t.classList.remove("is-visible")
                }
                )),
                n ? o() : function(t) {
                    t.stopPropagation(),
                    r && r.classList.add("is-visible"),
                    n = !0
                }(t)
            }
            )),
            r && document.addEventListener("click", o)
        }
        ))
    }
    n.d(e, "a", (function() {
        return r
    }
    )),
    e.b = {
        init: function() {
            const t = document.querySelector(".js-nav");
            t && (t.addEventListener("click", i),
            r({
                hitSelector: ".js-nav-product-dropdown",
                revealSelector: ".js-nav-product-menu"
            }))
        }
    }
}
, function(t, e, n) {
    "use strict";
    var i = "consecutive-reloads"
      , r = ["phx-click-loading", "phx-change-loading", "phx-submit-loading", "phx-keydown-loading", "phx-keyup-loading", "phx-blur-loading", "phx-focus-loading"]
      , o = "data-phx-component"
      , s = "data-phx-link"
      , a = "data-phx-ref"
      , c = "data-phx-ref-src"
      , u = "track-uploads"
      , l = "data-phx-upload-ref"
      , h = "data-phx-preflighted-refs"
      , f = "drop-target"
      , d = "data-phx-active-refs"
      , p = "phx:live-file:updated"
      , g = "data-phx-skip"
      , m = "data-phx-prune"
      , v = "page-loading"
      , _ = "phx-connected"
      , y = "phx-loading"
      , b = "phx-no-feedback"
      , x = "phx-error"
      , w = "data-phx-parent-id"
      , k = "data-phx-main"
      , E = "data-phx-root-id"
      , S = "feedback-for"
      , A = "phx-has-focused"
      , C = ["text", "textarea", "number", "email", "password", "search", "tel", "url", "date", "time", "datetime-local", "color", "range"]
      , T = ["checkbox", "radio"]
      , L = "phx-has-submitted"
      , M = "data-phx-session"
      , O = `[${M}]`
      , P = "data-phx-sticky"
      , N = "data-phx-static"
      , j = "data-phx-readonly"
      , D = "data-phx-disabled"
      , R = "disable-with"
      , $ = "data-phx-disable-with-restore"
      , I = "hook"
      , U = "update"
      , F = "phxPrivate"
      , H = "auto-recover"
      , B = "phx:live-socket:debug"
      , q = "phx:live-socket:profiling"
      , V = "phx:live-socket:latency-sim"
      , z = "mounted"
      , W = "debounce-trigger"
      , J = "throttled"
      , Y = "debounce-prev-key"
      , G = {
        debounce: 300,
        throttle: 300
    }
      , X = "d"
      , Z = "s"
      , K = "c"
      , Q = "e"
      , tt = "r"
      , et = "t"
      , nt = (t,e)=>console.error && console.error(t, e)
      , it = t=>{
        let e = typeof t;
        return "number" === e || "string" === e && /^(0|[1-9]\d*)$/.test(t)
    }
    ;
    var rt, ot = t=>"function" == typeof t ? t : function() {
        return t
    }
    , st = t=>JSON.parse(JSON.stringify(t)), at = (t,e,n)=>{
        do {
            if (t.matches(`[${e}]`) && !t.disabled)
                return t;
            t = t.parentElement || t.parentNode
        } while (null !== t && 1 === t.nodeType && !(n && n.isSameNode(t) || t.matches(O)));
        return null
    }
    , ct = t=>null !== t && "object" == typeof t && !(t instanceof Array), ut = t=>{
        for (let e in t)
            return !1;
        return !0
    }
    , lt = (t,e)=>t && e(t), ht = function(t, e, n, i) {
        t.forEach((t=>{
            let e = new class {
                constructor(t, e, n) {
                    this.liveSocket = n,
                    this.entry = t,
                    this.offset = 0,
                    this.chunkSize = e,
                    this.chunkTimer = null,
                    this.uploadChannel = n.channel(`lvu:${t.ref}`, {
                        token: t.metadata()
                    })
                }
                error(t) {
                    clearTimeout(this.chunkTimer),
                    this.uploadChannel.leave(),
                    this.entry.error(t)
                }
                upload() {
                    this.uploadChannel.onError((t=>this.error(t))),
                    this.uploadChannel.join().receive("ok", (t=>this.readNextChunk())).receive("error", (t=>this.error(t)))
                }
                isDone() {
                    return this.offset >= this.entry.file.size
                }
                readNextChunk() {
                    let t = new window.FileReader
                      , e = this.entry.file.slice(this.offset, this.chunkSize + this.offset);
                    t.onload = t=>{
                        if (null !== t.target.error)
                            return nt("Read error: " + t.target.error);
                        this.offset += t.target.result.byteLength,
                        this.pushChunk(t.target.result)
                    }
                    ,
                    t.readAsArrayBuffer(e)
                }
                pushChunk(t) {
                    this.uploadChannel.isJoined() && this.uploadChannel.push("chunk", t).receive("ok", (()=>{
                        this.entry.progress(this.offset / this.entry.file.size * 100),
                        this.isDone() || (this.chunkTimer = setTimeout((()=>this.readNextChunk()), this.liveSocket.getLatencySim() || 0))
                    }
                    ))
                }
            }
            (t,n.config.chunk_size,i);
            e.upload()
        }
        ))
    }, ft = {
        canPushState: ()=>void 0 !== history.pushState,
        dropLocal(t, e, n) {
            return t.removeItem(this.localKey(e, n))
        },
        updateLocal(t, e, n, i, r) {
            let o = this.getLocal(t, e, n)
              , s = this.localKey(e, n)
              , a = null === o ? i : r(o);
            return t.setItem(s, JSON.stringify(a)),
            a
        },
        getLocal(t, e, n) {
            return JSON.parse(t.getItem(this.localKey(e, n)))
        },
        updateCurrentState(t) {
            this.canPushState() && history.replaceState(t(history.state || {}), "", window.location.href)
        },
        pushState(t, e, n) {
            if (this.canPushState()) {
                if (n !== window.location.href) {
                    if ("redirect" == e.type && e.scroll) {
                        let t = history.state || {};
                        t.scroll = e.scroll,
                        history.replaceState(t, "", window.location.href)
                    }
                    delete e.scroll,
                    history[t + "State"](e, "", n || null);
                    let i = this.getHashTargetEl(window.location.hash);
                    i ? i.scrollIntoView() : "redirect" === e.type && window.scroll(0, 0)
                }
            } else
                this.redirect(n)
        },
        setCookie(t, e) {
            document.cookie = `${t}=${e}`
        },
        getCookie: t=>document.cookie.replace(new RegExp(`(?:(?:^|.*;s*)${t}s*=s*([^;]*).*$)|^.*$`), "$1"),
        redirect(t, e) {
            e && ft.setCookie("__phoenix_flash__", e + "; max-age=60000; path=/"),
            window.location = t
        },
        localKey: (t,e)=>`${t}-${e}`,
        getHashTargetEl(t) {
            let e = t.toString().substring(1);
            if ("" !== e)
                return document.getElementById(e) || document.querySelector(`a[name="${e}"]`)
        }
    }, dt = ft, pt = {
        byId: t=>document.getElementById(t) || nt(`no id found for ${t}`),
        removeClass(t, e) {
            t.classList.remove(e),
            0 === t.classList.length && t.removeAttribute("class")
        },
        all(t, e, n) {
            if (!t)
                return [];
            let i = Array.from(t.querySelectorAll(e));
            return n ? i.forEach(n) : i
        },
        childNodeLength(t) {
            let e = document.createElement("template");
            return e.innerHTML = t,
            e.content.childElementCount
        },
        isUploadInput: t=>"file" === t.type && null !== t.getAttribute(l),
        findUploadInputs(t) {
            return this.all(t, `input[type="file"][${l}]`)
        },
        findComponentNodeList(t, e) {
            return this.filterWithinSameLiveView(this.all(t, `[${o}="${e}"]`), t)
        },
        isPhxDestroyed: t=>!(!t.id || !pt.private(t, "destroyed")),
        isExternalClick: t=>t.ctrlKey || t.shiftKey || t.metaKey || t.button && 1 === t.button || "_blank" === t.target.getAttribute("target"),
        markPhxChildDestroyed(t) {
            this.isPhxChild(t) && t.setAttribute(M, ""),
            this.putPrivate(t, "destroyed", !0)
        },
        findPhxChildrenInFragment(t, e) {
            let n = document.createElement("template");
            return n.innerHTML = t,
            this.findPhxChildren(n.content, e)
        },
        isIgnored: (t,e)=>"ignore" === (t.getAttribute(e) || t.getAttribute("data-phx-update")),
        isPhxUpdate: (t,e,n)=>t.getAttribute && n.indexOf(t.getAttribute(e)) >= 0,
        findPhxSticky(t) {
            return this.all(t, `[${P}]`)
        },
        findPhxChildren(t, e) {
            return this.all(t, `${O}[${w}="${e}"]`)
        },
        findParentCIDs(t, e) {
            let n = new Set(e)
              , i = e.reduce(((e,n)=>{
                let i = `[${o}="${n}"] [${o}]`;
                return this.filterWithinSameLiveView(this.all(t, i), t).map((t=>parseInt(t.getAttribute(o)))).forEach((t=>e.delete(t))),
                e
            }
            ), n);
            return 0 === i.size ? new Set(e) : i
        },
        filterWithinSameLiveView(t, e) {
            return e.querySelector(O) ? t.filter((t=>this.withinSameLiveView(t, e))) : t
        },
        withinSameLiveView(t, e) {
            for (; t = t.parentNode; ) {
                if (t.isSameNode(e))
                    return !0;
                if (null !== t.getAttribute(M))
                    return !1
            }
        },
        private: (t,e)=>t[F] && t[F][e],
        deletePrivate(t, e) {
            t[F] && delete t[F][e]
        },
        putPrivate(t, e, n) {
            t[F] || (t[F] = {}),
            t[F][e] = n
        },
        updatePrivate(t, e, n, i) {
            let r = this.private(t, e);
            void 0 === r ? this.putPrivate(t, e, i(n)) : this.putPrivate(t, e, i(r))
        },
        copyPrivates(t, e) {
            e[F] && (t[F] = e[F])
        },
        putTitle(t) {
            let e = document.querySelector("title")
              , {prefix: n, suffix: i} = e.dataset;
            document.title = `${n || ""}${t}${i || ""}`
        },
        debounce(t, e, n, i, r, o, s, a) {
            let c = t.getAttribute(n)
              , u = t.getAttribute(r);
            "" === c && (c = i),
            "" === u && (u = o);
            let l = c || u;
            switch (l) {
            case null:
                return a();
            case "blur":
                return void (this.once(t, "debounce-blur") && t.addEventListener("blur", (()=>a())));
            default:
                let n = parseInt(l)
                  , i = ()=>u ? this.deletePrivate(t, J) : a()
                  , r = this.incCycle(t, W, i);
                if (isNaN(n))
                    return nt(`invalid throttle/debounce value: ${l}`);
                if (u) {
                    let i = !1;
                    if ("keydown" === e.type) {
                        let n = this.private(t, Y);
                        this.putPrivate(t, Y, e.key),
                        i = n !== e.key
                    }
                    if (!i && this.private(t, J))
                        return !1;
                    a(),
                    this.putPrivate(t, J, !0),
                    setTimeout((()=>{
                        s() && this.triggerCycle(t, W)
                    }
                    ), n)
                } else
                    setTimeout((()=>{
                        s() && this.triggerCycle(t, W, r)
                    }
                    ), n);
                let o = t.form;
                o && this.once(o, "bind-debounce") && o.addEventListener("submit", (()=>{
                    Array.from(new FormData(o).entries(), (([t])=>{
                        let e = o.querySelector(`[name="${t}"]`);
                        this.incCycle(e, W),
                        this.deletePrivate(e, J)
                    }
                    ))
                }
                )),
                this.once(t, "bind-debounce") && t.addEventListener("blur", (()=>this.triggerCycle(t, W)))
            }
        },
        triggerCycle(t, e, n) {
            let[i,r] = this.private(t, e);
            n || (n = i),
            n === i && (this.incCycle(t, e),
            r())
        },
        once(t, e) {
            return !0 !== this.private(t, e) && (this.putPrivate(t, e, !0),
            !0)
        },
        incCycle(t, e, n=function() {}
        ) {
            let[i] = this.private(t, e) || [0, n];
            return i++,
            this.putPrivate(t, e, [i, n]),
            i
        },
        discardError(t, e, n) {
            let i = e.getAttribute && e.getAttribute(n)
              , r = i && t.querySelector(`[id="${i}"], [name="${i}"], [name="${i}[]"]`);
            r && (this.private(r, A) || this.private(r, L) || e.classList.add(b))
        },
        showError(t, e) {
            (t.id || t.name) && this.all(t.form, `[${e}="${t.id}"], [${e}="${t.name}"]`, (t=>{
                this.removeClass(t, b)
            }
            ))
        },
        isPhxChild: t=>t.getAttribute && t.getAttribute(w),
        isPhxSticky: t=>t.getAttribute && null !== t.getAttribute(P),
        firstPhxChild(t) {
            return this.isPhxChild(t) ? t : this.all(t, `[${w}]`)[0]
        },
        dispatchEvent(t, e, n={}) {
            let i = {
                bubbles: void 0 === n.bubbles || !!n.bubbles,
                cancelable: !0,
                detail: n.detail || {}
            }
              , r = "click" === e ? new MouseEvent("click",i) : new CustomEvent(e,i);
            t.dispatchEvent(r)
        },
        cloneNode(t, e) {
            if (void 0 === e)
                return t.cloneNode(!0);
            {
                let n = t.cloneNode(!1);
                return n.innerHTML = e,
                n
            }
        },
        mergeAttrs(t, e, n={}) {
            let i = n.exclude || []
              , r = n.isIgnored
              , o = e.attributes;
            for (let n = o.length - 1; n >= 0; n--) {
                let r = o[n].name;
                i.indexOf(r) < 0 && t.setAttribute(r, e.getAttribute(r))
            }
            let s = t.attributes;
            for (let n = s.length - 1; n >= 0; n--) {
                let i = s[n].name;
                r ? i.startsWith("data-") && !e.hasAttribute(i) && t.removeAttribute(i) : e.hasAttribute(i) || t.removeAttribute(i)
            }
        },
        mergeFocusedInput(t, e) {
            t instanceof HTMLSelectElement || pt.mergeAttrs(t, e, {
                exclude: ["value"]
            }),
            e.readOnly ? t.setAttribute("readonly", !0) : t.removeAttribute("readonly")
        },
        hasSelectionRange: t=>t.setSelectionRange && ("text" === t.type || "textarea" === t.type),
        restoreFocus(t, e, n) {
            if (!pt.isTextualInput(t))
                return;
            let i = t.matches(":focus");
            t.readOnly && t.blur(),
            i || t.focus(),
            this.hasSelectionRange(t) && t.setSelectionRange(e, n)
        },
        isFormInput: t=>/^(?:input|select|textarea)$/i.test(t.tagName) && "button" !== t.type,
        syncAttrsToProps(t) {
            t instanceof HTMLInputElement && T.indexOf(t.type.toLocaleLowerCase()) >= 0 && (t.checked = null !== t.getAttribute("checked"))
        },
        isTextualInput: t=>C.indexOf(t.type) >= 0,
        isNowTriggerFormExternal: (t,e)=>t.getAttribute && null !== t.getAttribute(e),
        syncPendingRef(t, e, n) {
            let i = t.getAttribute(a);
            if (null === i)
                return !0;
            let o = t.getAttribute(c);
            return pt.isFormInput(t) || null !== t.getAttribute(n) ? (pt.isUploadInput(t) && pt.mergeAttrs(t, e, {
                isIgnored: !0
            }),
            pt.putPrivate(t, a, e),
            !1) : (r.forEach((n=>{
                t.classList.contains(n) && e.classList.add(n)
            }
            )),
            e.setAttribute(a, i),
            e.setAttribute(c, o),
            !0)
        },
        cleanChildNodes(t, e) {
            if (pt.isPhxUpdate(t, e, ["append", "prepend"])) {
                let e = [];
                t.childNodes.forEach((t=>{
                    if (!t.id) {
                        t.nodeType === Node.TEXT_NODE && "" === t.nodeValue.trim() || nt(`only HTML element tags with an id are allowed inside containers with phx-update.\n\nremoving illegal node: "${(t.outerHTML || t.nodeValue).trim()}"\n\n`),
                        e.push(t)
                    }
                }
                )),
                e.forEach((t=>t.remove()))
            }
        },
        replaceRootContainer(t, e, n) {
            let i = new Set(["id", M, N, k, E]);
            if (t.tagName.toLowerCase() === e.toLowerCase())
                return Array.from(t.attributes).filter((t=>!i.has(t.name.toLowerCase()))).forEach((e=>t.removeAttribute(e.name))),
                Object.keys(n).filter((t=>!i.has(t.toLowerCase()))).forEach((e=>t.setAttribute(e, n[e]))),
                t;
            {
                let r = document.createElement(e);
                return Object.keys(n).forEach((t=>r.setAttribute(t, n[t]))),
                i.forEach((e=>r.setAttribute(e, t.getAttribute(e)))),
                r.innerHTML = t.innerHTML,
                t.replaceWith(r),
                r
            }
        },
        getSticky(t, e, n) {
            let i = (pt.private(t, "sticky") || []).find((([t])=>e === t));
            if (i) {
                let[t,e,n] = i;
                return n
            }
            return "function" == typeof n ? n() : n
        },
        deleteSticky(t, e) {
            this.updatePrivate(t, "sticky", [], (t=>t.filter((([t,n])=>t !== e))))
        },
        putSticky(t, e, n) {
            let i = n(t);
            this.updatePrivate(t, "sticky", [], (t=>{
                let r = t.findIndex((([t])=>e === t));
                return r >= 0 ? t[r] = [e, n, i] : t.push([e, n, i]),
                t
            }
            ))
        },
        applyStickyOperations(t) {
            let e = pt.private(t, "sticky");
            e && e.forEach((([e,n,i])=>this.putSticky(t, e, n)))
        }
    }, gt = pt, mt = class {
        static isActive(t, e) {
            let n = void 0 === e._phxRef
              , i = t.getAttribute(d).split(",").indexOf(_t.genFileRef(e)) >= 0;
            return e.size > 0 && (n || i)
        }
        static isPreflighted(t, e) {
            return t.getAttribute(h).split(",").indexOf(_t.genFileRef(e)) >= 0 && this.isActive(t, e)
        }
        constructor(t, e, n) {
            this.ref = _t.genFileRef(e),
            this.fileEl = t,
            this.file = e,
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
        progress(t) {
            this._progress = Math.floor(t),
            this._progress > this._lastProgressSent && (this._progress >= 100 ? (this._progress = 100,
            this._lastProgressSent = 100,
            this._isDone = !0,
            this.view.pushFileProgress(this.fileEl, this.ref, 100, (()=>{
                _t.untrackFile(this.fileEl, this.file),
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
        error(t="failed") {
            this.fileEl.removeEventListener(p, this._onElUpdated),
            this.view.pushFileProgress(this.fileEl, this.ref, {
                error: t
            }),
            _t.clearFiles(this.fileEl)
        }
        onDone(t) {
            this._onDone = ()=>{
                this.fileEl.removeEventListener(p, this._onElUpdated),
                t()
            }
        }
        onElUpdated() {
            -1 === this.fileEl.getAttribute(d).split(",").indexOf(this.ref) && this.cancel()
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
        uploader(t) {
            if (this.meta.uploader) {
                let e = t[this.meta.uploader] || nt(`no uploader configured for ${this.meta.uploader}`);
                return {
                    name: this.meta.uploader,
                    callback: e
                }
            }
            return {
                name: "channel",
                callback: ht
            }
        }
        zipPostFlight(t) {
            this.meta = t.entries[this.ref],
            this.meta || nt(`no preflight upload response returned with ref ${this.ref}`, {
                input: this.fileEl,
                response: t
            })
        }
    }
    , vt = 0, _t = class {
        static genFileRef(t) {
            let e = t._phxRef;
            return void 0 !== e ? e : (t._phxRef = (vt++).toString(),
            t._phxRef)
        }
        static getEntryDataURL(t, e, n) {
            let i = this.activeFiles(t).find((t=>this.genFileRef(t) === e));
            n(URL.createObjectURL(i))
        }
        static hasUploadsInProgress(t) {
            let e = 0;
            return gt.findUploadInputs(t).forEach((t=>{
                t.getAttribute(h) !== t.getAttribute("data-phx-done-refs") && e++
            }
            )),
            e > 0
        }
        static serializeUploads(t) {
            let e = this.activeFiles(t)
              , n = {};
            return e.forEach((e=>{
                let i = {
                    path: t.name
                }
                  , r = t.getAttribute(l);
                n[r] = n[r] || [],
                i.ref = this.genFileRef(e),
                i.last_modified = e.lastModified,
                i.name = e.name || i.ref,
                i.relative_path = e.webkitRelativePath,
                i.type = e.type,
                i.size = e.size,
                n[r].push(i)
            }
            )),
            n
        }
        static clearFiles(t) {
            t.value = null,
            t.removeAttribute(l),
            gt.putPrivate(t, "files", [])
        }
        static untrackFile(t, e) {
            gt.putPrivate(t, "files", gt.private(t, "files").filter((t=>!Object.is(t, e))))
        }
        static trackFiles(t, e) {
            if (null !== t.getAttribute("multiple")) {
                let n = e.filter((e=>!this.activeFiles(t).find((t=>Object.is(t, e)))));
                gt.putPrivate(t, "files", this.activeFiles(t).concat(n)),
                t.value = null
            } else
                gt.putPrivate(t, "files", e)
        }
        static activeFileInputs(t) {
            let e = gt.findUploadInputs(t);
            return Array.from(e).filter((t=>t.files && this.activeFiles(t).length > 0))
        }
        static activeFiles(t) {
            return (gt.private(t, "files") || []).filter((e=>mt.isActive(t, e)))
        }
        static inputsAwaitingPreflight(t) {
            let e = gt.findUploadInputs(t);
            return Array.from(e).filter((t=>this.filesAwaitingPreflight(t).length > 0))
        }
        static filesAwaitingPreflight(t) {
            return this.activeFiles(t).filter((e=>!mt.isPreflighted(t, e)))
        }
        constructor(t, e, n) {
            this.view = e,
            this.onComplete = n,
            this._entries = Array.from(_t.filesAwaitingPreflight(t) || []).map((n=>new mt(t,n,e))),
            this.numEntriesInProgress = this._entries.length
        }
        entries() {
            return this._entries
        }
        initAdapterUpload(t, e, n) {
            this._entries = this._entries.map((e=>(e.zipPostFlight(t),
            e.onDone((()=>{
                this.numEntriesInProgress--,
                0 === this.numEntriesInProgress && this.onComplete()
            }
            )),
            e)));
            let i = this._entries.reduce(((t,e)=>{
                let {name: i, callback: r} = e.uploader(n.uploaders);
                return t[i] = t[i] || {
                    callback: r,
                    entries: []
                },
                t[i].entries.push(e),
                t
            }
            ), {});
            for (let r in i) {
                let {callback: o, entries: s} = i[r];
                o(s, e, t, n)
            }
        }
    }
    , yt = {
        focusMain() {
            let t = document.querySelector("main h1, main, h1");
            if (t) {
                let e = t.tabIndex;
                t.tabIndex = -1,
                t.focus(),
                t.tabIndex = e
            }
        },
        anyOf: (t,e)=>e.find((e=>t instanceof e)),
        isFocusable(t, e) {
            return t instanceof HTMLAnchorElement && "ignore" !== t.rel || t instanceof HTMLAreaElement && void 0 !== t.href || !t.disabled && this.anyOf(t, [HTMLInputElement, HTMLSelectElement, HTMLTextAreaElement, HTMLButtonElement]) || t instanceof HTMLIFrameElement || t.tabIndex > 0 || !e && 0 === t.tabIndex && null !== t.getAttribute("tabindex") && "true" !== t.getAttribute("aria-hidden")
        },
        attemptFocus(t, e) {
            if (this.isFocusable(t, e))
                try {
                    t.focus()
                } catch (t) {}
            return !!document.activeElement && document.activeElement.isSameNode(t)
        },
        focusFirstInteractive(t) {
            let e = t.firstElementChild;
            for (; e; ) {
                if (this.attemptFocus(e, !0) || this.focusFirstInteractive(e, !0))
                    return !0;
                e = e.nextElementSibling
            }
        },
        focusFirst(t) {
            let e = t.firstElementChild;
            for (; e; ) {
                if (this.attemptFocus(e) || this.focusFirst(e))
                    return !0;
                e = e.nextElementSibling
            }
        },
        focusLast(t) {
            let e = t.lastElementChild;
            for (; e; ) {
                if (this.attemptFocus(e) || this.focusLast(e))
                    return !0;
                e = e.previousElementSibling
            }
        }
    }, bt = {
        LiveFileUpload: {
            activeRefs() {
                return this.el.getAttribute(d)
            },
            preflightedRefs() {
                return this.el.getAttribute(h)
            },
            mounted() {
                this.preflightedWas = this.preflightedRefs()
            },
            updated() {
                let t = this.preflightedRefs();
                this.preflightedWas !== t && (this.preflightedWas = t,
                "" === t && this.__view.cancelSubmit(this.el.form)),
                "" === this.activeRefs() && (this.el.value = null),
                this.el.dispatchEvent(new CustomEvent(p))
            }
        },
        LiveImgPreview: {
            mounted() {
                this.ref = this.el.getAttribute("data-phx-entry-ref"),
                this.inputEl = document.getElementById(this.el.getAttribute(l)),
                _t.getEntryDataURL(this.inputEl, this.ref, (t=>{
                    this.url = t,
                    this.el.src = t
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
                this.focusStart.addEventListener("focus", (()=>yt.focusLast(this.el))),
                this.focusEnd.addEventListener("focus", (()=>yt.focusFirst(this.el))),
                this.el.addEventListener("phx:show-end", (()=>this.el.focus())),
                "none" !== window.getComputedStyle(this.el).display && yt.focusFirst(this.el)
            }
        }
    };
    var xt = "undefined" == typeof document ? void 0 : document
      , wt = !!xt && "content"in xt.createElement("template")
      , kt = !!xt && xt.createRange && "createContextualFragment"in xt.createRange();
    function Et(t) {
        return t = t.trim(),
        wt ? function(t) {
            var e = xt.createElement("template");
            return e.innerHTML = t,
            e.content.childNodes[0]
        }(t) : kt ? function(t) {
            return rt || (rt = xt.createRange()).selectNode(xt.body),
            rt.createContextualFragment(t).childNodes[0]
        }(t) : function(t) {
            var e = xt.createElement("body");
            return e.innerHTML = t,
            e.childNodes[0]
        }(t)
    }
    function St(t, e) {
        var n, i, r = t.nodeName, o = e.nodeName;
        return r === o || (n = r.charCodeAt(0),
        i = o.charCodeAt(0),
        n <= 90 && i >= 97 ? r === o.toUpperCase() : i <= 90 && n >= 97 && o === r.toUpperCase())
    }
    function At(t, e, n) {
        t[n] !== e[n] && (t[n] = e[n],
        t[n] ? t.setAttribute(n, "") : t.removeAttribute(n))
    }
    var Ct = {
        OPTION: function(t, e) {
            var n = t.parentNode;
            if (n) {
                var i = n.nodeName.toUpperCase();
                "OPTGROUP" === i && (i = (n = n.parentNode) && n.nodeName.toUpperCase()),
                "SELECT" !== i || n.hasAttribute("multiple") || (t.hasAttribute("selected") && !e.selected && (t.setAttribute("selected", "selected"),
                t.removeAttribute("selected")),
                n.selectedIndex = -1)
            }
            At(t, e, "selected")
        },
        INPUT: function(t, e) {
            At(t, e, "checked"),
            At(t, e, "disabled"),
            t.value !== e.value && (t.value = e.value),
            e.hasAttribute("value") || t.removeAttribute("value")
        },
        TEXTAREA: function(t, e) {
            var n = e.value;
            t.value !== n && (t.value = n);
            var i = t.firstChild;
            if (i) {
                var r = i.nodeValue;
                if (r == n || !n && r == t.placeholder)
                    return;
                i.nodeValue = n
            }
        },
        SELECT: function(t, e) {
            if (!e.hasAttribute("multiple")) {
                for (var n, i, r = -1, o = 0, s = t.firstChild; s; )
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
                t.selectedIndex = r
            }
        }
    };
    function Tt() {}
    function Lt(t) {
        if (t)
            return t.getAttribute && t.getAttribute("id") || t.id
    }
    var Mt, Ot = (Mt = function(t, e) {
        var n, i, r, o, s = e.attributes;
        if (11 !== e.nodeType && 11 !== t.nodeType) {
            for (var a = s.length - 1; a >= 0; a--)
                i = (n = s[a]).name,
                r = n.namespaceURI,
                o = n.value,
                r ? (i = n.localName || i,
                t.getAttributeNS(r, i) !== o && ("xmlns" === n.prefix && (i = n.name),
                t.setAttributeNS(r, i, o))) : t.getAttribute(i) !== o && t.setAttribute(i, o);
            for (var c = t.attributes, u = c.length - 1; u >= 0; u--)
                i = (n = c[u]).name,
                (r = n.namespaceURI) ? (i = n.localName || i,
                e.hasAttributeNS(r, i) || t.removeAttributeNS(r, i)) : e.hasAttribute(i) || t.removeAttribute(i)
        }
    }
    ,
    function(t, e, n) {
        if (n || (n = {}),
        "string" == typeof e)
            if ("#document" === t.nodeName || "HTML" === t.nodeName || "BODY" === t.nodeName) {
                var i = e;
                (e = xt.createElement("html")).innerHTML = i
            } else
                e = Et(e);
        var r = n.getNodeKey || Lt
          , o = n.onBeforeNodeAdded || Tt
          , s = n.onNodeAdded || Tt
          , a = n.onBeforeElUpdated || Tt
          , c = n.onElUpdated || Tt
          , u = n.onBeforeNodeDiscarded || Tt
          , l = n.onNodeDiscarded || Tt
          , h = n.onBeforeElChildrenUpdated || Tt
          , f = !0 === n.childrenOnly
          , d = Object.create(null)
          , p = [];
        function g(t) {
            p.push(t)
        }
        function m(t, e) {
            if (1 === t.nodeType)
                for (var n = t.firstChild; n; ) {
                    var i = void 0;
                    e && (i = r(n)) ? g(i) : (l(n),
                    n.firstChild && m(n, e)),
                    n = n.nextSibling
                }
        }
        function v(t, e, n) {
            !1 !== u(t) && (e && e.removeChild(t),
            l(t),
            m(t, n))
        }
        function _(t) {
            s(t);
            for (var e = t.firstChild; e; ) {
                var n = e.nextSibling
                  , i = r(e);
                if (i) {
                    var o = d[i];
                    o && St(e, o) ? (e.parentNode.replaceChild(o, e),
                    y(o, e)) : _(e)
                } else
                    _(e);
                e = n
            }
        }
        function y(t, e, n) {
            var i = r(e);
            if (i && delete d[i],
            !n) {
                if (!1 === a(t, e))
                    return;
                if (Mt(t, e),
                c(t),
                !1 === h(t, e))
                    return
            }
            "TEXTAREA" !== t.nodeName ? function(t, e) {
                var n, i, s, a, c, u = e.firstChild, l = t.firstChild;
                t: for (; u; ) {
                    for (a = u.nextSibling,
                    n = r(u); l; ) {
                        if (s = l.nextSibling,
                        u.isSameNode && u.isSameNode(l)) {
                            u = a,
                            l = s;
                            continue t
                        }
                        i = r(l);
                        var h = l.nodeType
                          , f = void 0;
                        if (h === u.nodeType && (1 === h ? (n ? n !== i && ((c = d[n]) ? s === c ? f = !1 : (t.insertBefore(c, l),
                        i ? g(i) : v(l, t, !0),
                        l = c) : f = !1) : i && (f = !1),
                        (f = !1 !== f && St(l, u)) && y(l, u)) : 3 !== h && 8 != h || (f = !0,
                        l.nodeValue !== u.nodeValue && (l.nodeValue = u.nodeValue))),
                        f) {
                            u = a,
                            l = s;
                            continue t
                        }
                        i ? g(i) : v(l, t, !0),
                        l = s
                    }
                    if (n && (c = d[n]) && St(c, u))
                        t.appendChild(c),
                        y(c, u);
                    else {
                        var p = o(u);
                        !1 !== p && (p && (u = p),
                        u.actualize && (u = u.actualize(t.ownerDocument || xt)),
                        t.appendChild(u),
                        _(u))
                    }
                    u = a,
                    l = s
                }
                !function(t, e, n) {
                    for (; e; ) {
                        var i = e.nextSibling;
                        (n = r(e)) ? g(n) : v(e, t, !0),
                        e = i
                    }
                }(t, l, i);
                var m = Ct[t.nodeName];
                m && m(t, e)
            }(t, e) : Ct.TEXTAREA(t, e)
        }
        !function t(e) {
            if (1 === e.nodeType || 11 === e.nodeType)
                for (var n = e.firstChild; n; ) {
                    var i = r(n);
                    i && (d[i] = n),
                    t(n),
                    n = n.nextSibling
                }
        }(t);
        var b, x, w = t, k = w.nodeType, E = e.nodeType;
        if (!f)
            if (1 === k)
                1 === E ? St(t, e) || (l(t),
                w = function(t, e) {
                    for (var n = t.firstChild; n; ) {
                        var i = n.nextSibling;
                        e.appendChild(n),
                        n = i
                    }
                    return e
                }(t, (b = e.nodeName,
                (x = e.namespaceURI) && "http://www.w3.org/1999/xhtml" !== x ? xt.createElementNS(x, b) : xt.createElement(b)))) : w = e;
            else if (3 === k || 8 === k) {
                if (E === k)
                    return w.nodeValue !== e.nodeValue && (w.nodeValue = e.nodeValue),
                    w;
                w = e
            }
        if (w === e)
            l(t);
        else {
            if (e.isSameNode && e.isSameNode(w))
                return;
            if (y(w, e, f),
            p)
                for (var S = 0, A = p.length; S < A; S++) {
                    var C = d[p[S]];
                    C && v(C, C.parentNode, !1)
                }
        }
        return !f && w !== t && t.parentNode && (w.actualize && (w = w.actualize(t.ownerDocument || xt)),
        t.parentNode.replaceChild(w, t)),
        w
    }
    ), Pt = class {
        static patchEl(t, e, n) {
            Ot(t, e, {
                childrenOnly: !1,
                onBeforeElUpdated: (t,e)=>{
                    if (n && n.isSameNode(t) && gt.isFormInput(t))
                        return gt.mergeFocusedInput(t, e),
                        !1
                }
            })
        }
        constructor(t, e, n, i, r) {
            this.view = t,
            this.liveSocket = t.liveSocket,
            this.container = e,
            this.id = n,
            this.rootID = t.root.id,
            this.html = i,
            this.targetCID = r,
            this.cidPatch = it(this.targetCID),
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
        before(t, e) {
            this.callbacks[`before ${t}`].push(e)
        }
        after(t, e) {
            this.callbacks[`after ${t}`].push(e)
        }
        trackBefore(t, ...e) {
            this.callbacks[`before ${t}`].forEach((t=>t(...e)))
        }
        trackAfter(t, ...e) {
            this.callbacks[`after ${t}`].forEach((t=>t(...e)))
        }
        markPrunableContentForRemoval() {
            gt.all(this.container, "[phx-update=append] > *, [phx-update=prepend] > *", (t=>{
                t.setAttribute(m, "")
            }
            ))
        }
        perform() {
            let {view: t, liveSocket: e, container: n, html: i} = this
              , r = this.isCIDPatch() ? this.targetCIDContainer(i) : n;
            if (this.isCIDPatch() && !r)
                return;
            let s = e.getActiveElement()
              , {selectionStart: a, selectionEnd: c} = s && gt.hasSelectionRange(s) ? s : {}
              , u = e.binding(U)
              , l = e.binding(S)
              , h = e.binding(R)
              , f = e.binding("trigger-action")
              , d = e.binding("remove")
              , p = []
              , g = []
              , v = []
              , _ = []
              , y = null
              , b = e.time("premorph container prep", (()=>this.buildDiffHTML(n, i, u, r)));
            return this.trackBefore("added", n),
            this.trackBefore("updated", n, n),
            e.time("morphdom", (()=>{
                Ot(r, b, {
                    childrenOnly: null === r.getAttribute(o),
                    getNodeKey: t=>gt.isPhxDestroyed(t) ? null : t.id,
                    onBeforeNodeAdded: t=>(this.trackBefore("added", t),
                    t),
                    onNodeAdded: e=>{
                        e instanceof HTMLImageElement && e.srcset ? e.srcset = e.srcset : e instanceof HTMLVideoElement && e.autoplay && e.play(),
                        gt.isNowTriggerFormExternal(e, f) && (y = e),
                        gt.discardError(r, e, l),
                        (gt.isPhxChild(e) && t.ownsElement(e) || gt.isPhxSticky(e) && t.ownsElement(e.parentNode)) && this.trackAfter("phxChildAdded", e),
                        p.push(e)
                    }
                    ,
                    onNodeDiscarded: t=>{
                        (gt.isPhxChild(t) || gt.isPhxSticky(t)) && e.destroyViewByEl(t),
                        this.trackAfter("discarded", t)
                    }
                    ,
                    onBeforeNodeDiscarded: t=>!(!t.getAttribute || null === t.getAttribute(m)) || (null === t.parentNode || !gt.isPhxUpdate(t.parentNode, u, ["append", "prepend"]) || !t.id) && (t.getAttribute && t.getAttribute(d) ? (_.push(t),
                    !1) : !this.skipCIDSibling(t)),
                    onElUpdated: t=>{
                        gt.isNowTriggerFormExternal(t, f) && (y = t),
                        g.push(t)
                    }
                    ,
                    onBeforeElUpdated: (t,e)=>{
                        if (gt.cleanChildNodes(e, u),
                        this.skipCIDSibling(e))
                            return !1;
                        if (gt.isPhxSticky(t))
                            return !1;
                        if (gt.isIgnored(t, u) || t.form && t.form.isSameNode(y))
                            return this.trackBefore("updated", t, e),
                            gt.mergeAttrs(t, e, {
                                isIgnored: !0
                            }),
                            g.push(t),
                            gt.applyStickyOperations(t),
                            !1;
                        if ("number" === t.type && t.validity && t.validity.badInput)
                            return !1;
                        if (!gt.syncPendingRef(t, e, h))
                            return gt.isUploadInput(t) && (this.trackBefore("updated", t, e),
                            g.push(t)),
                            gt.applyStickyOperations(t),
                            !1;
                        if (gt.isPhxChild(e)) {
                            let n = t.getAttribute(M);
                            return gt.mergeAttrs(t, e, {
                                exclude: [N]
                            }),
                            "" !== n && t.setAttribute(M, n),
                            t.setAttribute(E, this.rootID),
                            gt.applyStickyOperations(t),
                            !1
                        }
                        return gt.copyPrivates(e, t),
                        gt.discardError(r, e, l),
                        s && t.isSameNode(s) && gt.isFormInput(t) && "hidden" !== t.type ? (this.trackBefore("updated", t, e),
                        gt.mergeFocusedInput(t, e),
                        gt.syncAttrsToProps(t),
                        g.push(t),
                        gt.applyStickyOperations(t),
                        !1) : (gt.isPhxUpdate(e, u, ["append", "prepend"]) && v.push(new class {
                            constructor(t, e, n) {
                                let i = new Set
                                  , r = new Set([...e.children].map((t=>t.id)))
                                  , o = [];
                                Array.from(t.children).forEach((t=>{
                                    if (t.id && (i.add(t.id),
                                    r.has(t.id))) {
                                        let e = t.previousElementSibling && t.previousElementSibling.id;
                                        o.push({
                                            elementId: t.id,
                                            previousElementId: e
                                        })
                                    }
                                }
                                )),
                                this.containerId = e.id,
                                this.updateType = n,
                                this.elementsToModify = o,
                                this.elementIdsToAdd = [...r].filter((t=>!i.has(t)))
                            }
                            perform() {
                                let t = gt.byId(this.containerId);
                                this.elementsToModify.forEach((e=>{
                                    e.previousElementId ? lt(document.getElementById(e.previousElementId), (t=>{
                                        lt(document.getElementById(e.elementId), (e=>{
                                            e.previousElementSibling && e.previousElementSibling.id == t.id || t.insertAdjacentElement("afterend", e)
                                        }
                                        ))
                                    }
                                    )) : lt(document.getElementById(e.elementId), (e=>{
                                        null == e.previousElementSibling || t.insertAdjacentElement("afterbegin", e)
                                    }
                                    ))
                                }
                                )),
                                "prepend" == this.updateType && this.elementIdsToAdd.reverse().forEach((e=>{
                                    lt(document.getElementById(e), (e=>t.insertAdjacentElement("afterbegin", e)))
                                }
                                ))
                            }
                        }
                        (t,e,e.getAttribute(u))),
                        gt.syncAttrsToProps(e),
                        gt.applyStickyOperations(e),
                        this.trackBefore("updated", t, e),
                        !0)
                    }
                })
            }
            )),
            e.isDebugEnabled() && function() {
                let t = new Set
                  , e = document.querySelectorAll("*[id]");
                for (let n = 0, i = e.length; n < i; n++)
                    t.has(e[n].id) ? console.error(`Multiple IDs detected: ${e[n].id}. Ensure unique element ids.`) : t.add(e[n].id)
            }(),
            v.length > 0 && e.time("post-morph append/prepend restoration", (()=>{
                v.forEach((t=>t.perform()))
            }
            )),
            e.silenceEvents((()=>gt.restoreFocus(s, a, c))),
            gt.dispatchEvent(document, "phx:update"),
            p.forEach((t=>this.trackAfter("added", t))),
            g.forEach((t=>this.trackAfter("updated", t))),
            _.length > 0 && (e.transitionRemoves(_),
            e.requestDOMUpdate((()=>{
                _.forEach((t=>{
                    let n = gt.firstPhxChild(t);
                    n && e.destroyViewByEl(n),
                    t.remove()
                }
                )),
                this.trackAfter("transitionsDiscarded", _)
            }
            ))),
            y && (e.unload(),
            y.submit()),
            !0
        }
        isCIDPatch() {
            return this.cidPatch
        }
        skipCIDSibling(t) {
            return t.nodeType === Node.ELEMENT_NODE && null !== t.getAttribute(g)
        }
        targetCIDContainer(t) {
            if (!this.isCIDPatch())
                return;
            let[e,...n] = gt.findComponentNodeList(this.container, this.targetCID);
            return 0 === n.length && 1 === gt.childNodeLength(t) ? e : e && e.parentNode
        }
        buildDiffHTML(t, e, n, i) {
            let r = this.isCIDPatch()
              , s = r && i.getAttribute(o) === this.targetCID.toString();
            if (!r || s)
                return e;
            {
                let t = null
                  , n = document.createElement("template");
                t = gt.cloneNode(i);
                let[r,...s] = gt.findComponentNodeList(t, this.targetCID);
                return n.innerHTML = e,
                s.forEach((t=>t.remove())),
                Array.from(t.childNodes).forEach((t=>{
                    t.id && t.nodeType === Node.ELEMENT_NODE && t.getAttribute(o) !== this.targetCID.toString() && (t.setAttribute(g, ""),
                    t.innerHTML = "")
                }
                )),
                Array.from(n.content.childNodes).forEach((e=>t.insertBefore(e, r))),
                r.remove(),
                t.outerHTML
            }
        }
    }
    , Nt = class {
        static extract(t) {
            let {[tt]: e, [Q]: n, [et]: i} = t;
            return delete t[tt],
            delete t[Q],
            delete t[et],
            {
                diff: t,
                title: i,
                reply: e || null,
                events: n || []
            }
        }
        constructor(t, e) {
            this.viewId = t,
            this.rendered = {},
            this.mergeDiff(e)
        }
        parentViewId() {
            return this.viewId
        }
        toString(t) {
            return this.recursiveToString(this.rendered, this.rendered[K], t)
        }
        recursiveToString(t, e=t[K], n) {
            let i = {
                buffer: "",
                components: e,
                onlyCids: n = n ? new Set(n) : null
            };
            return this.toOutputBuffer(t, null, i),
            i.buffer
        }
        componentCIDs(t) {
            return Object.keys(t[K] || {}).map((t=>parseInt(t)))
        }
        isComponentOnlyDiff(t) {
            return !!t[K] && 1 === Object.keys(t).length
        }
        getComponent(t, e) {
            return t[K][e]
        }
        mergeDiff(t) {
            let e = t[K]
              , n = {};
            if (delete t[K],
            this.rendered = this.mutableMerge(this.rendered, t),
            this.rendered[K] = this.rendered[K] || {},
            e) {
                let i = this.rendered[K];
                for (let t in e)
                    e[t] = this.cachedFindComponent(t, e[t], i, e, n);
                for (let t in e)
                    i[t] = e[t];
                t[K] = e
            }
        }
        cachedFindComponent(t, e, n, i, r) {
            if (r[t])
                return r[t];
            {
                let o, s, a = e[Z];
                if (it(a)) {
                    let t;
                    t = a > 0 ? this.cachedFindComponent(a, i[a], n, i, r) : n[-a],
                    s = t[Z],
                    o = this.cloneMerge(t, e),
                    o[Z] = s
                } else
                    o = void 0 !== e[Z] ? e : this.cloneMerge(n[t] || {}, e);
                return r[t] = o,
                o
            }
        }
        mutableMerge(t, e) {
            return void 0 !== e[Z] ? e : (this.doMutableMerge(t, e),
            t)
        }
        doMutableMerge(t, e) {
            for (let n in e) {
                let i = e[n]
                  , r = t[n];
                ct(i) && void 0 === i[Z] && ct(r) ? this.doMutableMerge(r, i) : t[n] = i
            }
        }
        cloneMerge(t, e) {
            let n = {
                ...t,
                ...e
            };
            for (let i in n) {
                let r = e[i]
                  , o = t[i];
                ct(r) && void 0 === r[Z] && ct(o) && (n[i] = this.cloneMerge(o, r))
            }
            return n
        }
        componentToString(t) {
            return this.recursiveCIDToString(this.rendered[K], t)
        }
        pruneCIDs(t) {
            t.forEach((t=>delete this.rendered[K][t]))
        }
        get() {
            return this.rendered
        }
        isNewFingerprint(t={}) {
            return !!t[Z]
        }
        templateStatic(t, e) {
            return "number" == typeof t ? e[t] : t
        }
        toOutputBuffer(t, e, n) {
            if (t[X])
                return this.comprehensionToBuffer(t, e, n);
            let {[Z]: i} = t;
            i = this.templateStatic(i, e),
            n.buffer += i[0];
            for (let r = 1; r < i.length; r++)
                this.dynamicToBuffer(t[r - 1], e, n),
                n.buffer += i[r]
        }
        comprehensionToBuffer(t, e, n) {
            let {[X]: i, [Z]: r} = t;
            r = this.templateStatic(r, e);
            let o = e || t.p;
            for (let t = 0; t < i.length; t++) {
                let e = i[t];
                n.buffer += r[0];
                for (let t = 1; t < r.length; t++)
                    this.dynamicToBuffer(e[t - 1], o, n),
                    n.buffer += r[t]
            }
        }
        dynamicToBuffer(t, e, n) {
            "number" == typeof t ? n.buffer += this.recursiveCIDToString(n.components, t, n.onlyCids) : ct(t) ? this.toOutputBuffer(t, e, n) : n.buffer += t
        }
        recursiveCIDToString(t, e, n) {
            let i = t[e] || nt(`no component for CID ${e}`, t)
              , r = document.createElement("template");
            r.innerHTML = this.recursiveToString(i, t, n);
            let s = r.content
              , a = n && !n.has(e)
              , [c,u] = Array.from(s.childNodes).reduce((([t,n],i,s)=>i.nodeType === Node.ELEMENT_NODE ? i.getAttribute(o) ? [t, !0] : (i.setAttribute(o, e),
            i.id || (i.id = `${this.parentViewId()}-${e}-${s}`),
            a && (i.setAttribute(g, ""),
            i.innerHTML = ""),
            [!0, n]) : "" !== i.nodeValue.trim() ? (nt(`only HTML element tags are allowed at the root of components.\n\ngot: "${i.nodeValue.trim()}"\n\nwithin:\n`, r.innerHTML.trim()),
            i.replaceWith(this.createSpan(i.nodeValue, e)),
            [!0, n]) : (i.remove(),
            [t, n])), [!1, !1]);
            return c || u ? !c && u ? (nt("expected at least one HTML element tag directly inside a component, but only subcomponents were found. A component must render at least one HTML tag directly inside itself.", r.innerHTML.trim()),
            r.innerHTML) : r.innerHTML : (nt("expected at least one HTML element tag inside a component, but the component is empty:\n", r.innerHTML.trim()),
            this.createSpan("", e).outerHTML)
        }
        createSpan(t, e) {
            let n = document.createElement("span");
            return n.innerText = t,
            n.setAttribute(o, e),
            n
        }
    }
    , jt = 1, Dt = class {
        static makeID() {
            return jt++
        }
        static elementID(t) {
            return t.phxHookId
        }
        constructor(t, e, n) {
            this.__view = t,
            this.liveSocket = t.liveSocket,
            this.__callbacks = n,
            this.__listeners = new Set,
            this.__isDisconnected = !1,
            this.el = e,
            this.el.phxHookId = this.constructor.makeID();
            for (let t in this.__callbacks)
                this[t] = this.__callbacks[t]
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
        pushEvent(t, e={}, n=function() {}
        ) {
            return this.__view.pushHookEvent(null, t, e, n)
        }
        pushEventTo(t, e, n={}, i=function() {}
        ) {
            return this.__view.withinTargets(t, ((t,r)=>t.pushHookEvent(r, e, n, i)))
        }
        handleEvent(t, e) {
            let n = (n,i)=>i ? t : e(n.detail);
            return window.addEventListener(`phx:${t}`, n),
            this.__listeners.add(n),
            n
        }
        removeHandleEvent(t) {
            let e = t(null, !0);
            window.removeEventListener(`phx:${e}`, t),
            this.__listeners.delete(t)
        }
        upload(t, e) {
            return this.__view.dispatchUploads(t, e)
        }
        uploadTo(t, e, n) {
            return this.__view.withinTargets(t, (t=>t.dispatchUploads(e, n)))
        }
        __cleanup__() {
            this.__listeners.forEach((t=>this.removeHandleEvent(t)))
        }
    }
    , Rt = null, $t = {
        exec(t, e, n, i, r) {
            let[o,s] = r || [null, {}];
            ("[" === e.charAt(0) ? JSON.parse(e) : [[o, s]]).forEach((([r,a])=>{
                r === o && s.data && (a.data = Object.assign(a.data || {}, s.data)),
                this.filterToEls(i, a).forEach((o=>{
                    this[`exec_ ${r}`](t, e, n, i, o, a)
                }
                ))
            }
            ))
        },
        isVisible: t=>!!(t.offsetWidth || t.offsetHeight || t.getClientRects().length > 0),
        exec_dispatch(t, e, n, i, r, {to: o, event: s, detail: a, bubbles: c}) {
            (a = a || {}).dispatcher = i,
            gt.dispatchEvent(r, s, {
                detail: a,
                bubbles: c
            })
        },
        exec_push(t, e, n, i, r, o) {
            if (!n.isConnected())
                return;
            let {event: s, data: a, target: c, page_loading: u, loading: l, value: h, dispatcher: f} = o
              , d = {
                loading: l,
                value: h,
                target: c,
                page_loading: !!u
            }
              , p = "change" === t && f ? f : i
              , g = c || p.getAttribute(n.binding("target")) || p;
            n.withinTargets(g, ((n,r)=>{
                if ("change" === t) {
                    let {newCid: t, _target: a, callback: c} = o;
                    a = a || (gt.isFormInput(i) ? i.name : void 0),
                    a && (d._target = a),
                    n.pushInput(i, r, t, s || e, d, c)
                } else
                    "submit" === t ? n.submitForm(i, r, s || e, d) : n.pushEvent(t, i, r, s || e, a, d)
            }
            ))
        },
        exec_navigate(t, e, n, i, r, {href: o, replace: s}) {
            n.liveSocket.historyRedirect(o, s ? "replace" : "push")
        },
        exec_patch(t, e, n, i, r, {href: o, replace: s}) {
            n.liveSocket.pushHistoryPatch(o, s ? "replace" : "push", i)
        },
        exec_focus(t, e, n, i, r) {
            window.requestAnimationFrame((()=>yt.attemptFocus(r)))
        },
        exec_focus_first(t, e, n, i, r) {
            window.requestAnimationFrame((()=>yt.focusFirstInteractive(r) || yt.focusFirst(r)))
        },
        exec_push_focus(t, e, n, i, r) {
            window.requestAnimationFrame((()=>Rt = r || i))
        },
        exec_pop_focus(t, e, n, i, r) {
            window.requestAnimationFrame((()=>{
                Rt && Rt.focus(),
                Rt = null
            }
            ))
        },
        exec_add_class(t, e, n, i, r, {names: o, transition: s, time: a}) {
            this.addOrRemoveClasses(r, o, [], s, a, n)
        },
        exec_remove_class(t, e, n, i, r, {names: o, transition: s, time: a}) {
            this.addOrRemoveClasses(r, [], o, s, a, n)
        },
        exec_transition(t, e, n, i, r, {time: o, transition: s}) {
            let[a,c,u] = s;
            n.transition(o, (()=>this.addOrRemoveClasses(r, a.concat(c), [])), (()=>this.addOrRemoveClasses(r, u, a.concat(c))))
        },
        exec_toggle(t, e, n, i, r, {display: o, ins: s, outs: a, time: c}) {
            this.toggle(t, n, r, o, s, a, c)
        },
        exec_show(t, e, n, i, r, {display: o, transition: s, time: a}) {
            this.show(t, n, r, o, s, a)
        },
        exec_hide(t, e, n, i, r, {display: o, transition: s, time: a}) {
            this.hide(t, n, r, o, s, a)
        },
        exec_set_attr(t, e, n, i, r, {attr: [o,s]}) {
            this.setOrRemoveAttrs(r, [[o, s]], [])
        },
        exec_remove_attr(t, e, n, i, r, {attr: o}) {
            this.setOrRemoveAttrs(r, [], [o])
        },
        show(t, e, n, i, r, o) {
            this.isVisible(n) || this.toggle(t, e, n, i, r, null, o)
        },
        hide(t, e, n, i, r, o) {
            this.isVisible(n) && this.toggle(t, e, n, i, null, r, o)
        },
        toggle(t, e, n, i, r, o, s) {
            let[a,c,u] = r || [[], [], []]
              , [l,h,f] = o || [[], [], []];
            if (a.length > 0 || l.length > 0)
                if (this.isVisible(n)) {
                    let t = ()=>{
                        this.addOrRemoveClasses(n, h, a.concat(c).concat(u)),
                        window.requestAnimationFrame((()=>{
                            this.addOrRemoveClasses(n, l, []),
                            window.requestAnimationFrame((()=>this.addOrRemoveClasses(n, f, h)))
                        }
                        ))
                    }
                    ;
                    n.dispatchEvent(new Event("phx:hide-start")),
                    e.transition(s, t, (()=>{
                        this.addOrRemoveClasses(n, [], l.concat(f)),
                        gt.putSticky(n, "toggle", (t=>t.style.display = "none")),
                        n.dispatchEvent(new Event("phx:hide-end"))
                    }
                    ))
                } else {
                    if ("remove" === t)
                        return;
                    let r = ()=>{
                        this.addOrRemoveClasses(n, c, l.concat(h).concat(f)),
                        gt.putSticky(n, "toggle", (t=>t.style.display = i || "block")),
                        window.requestAnimationFrame((()=>{
                            this.addOrRemoveClasses(n, a, []),
                            window.requestAnimationFrame((()=>this.addOrRemoveClasses(n, u, c)))
                        }
                        ))
                    }
                    ;
                    n.dispatchEvent(new Event("phx:show-start")),
                    e.transition(s, r, (()=>{
                        this.addOrRemoveClasses(n, [], a.concat(u)),
                        n.dispatchEvent(new Event("phx:show-end"))
                    }
                    ))
                }
            else
                this.isVisible(n) ? window.requestAnimationFrame((()=>{
                    n.dispatchEvent(new Event("phx:hide-start")),
                    gt.putSticky(n, "toggle", (t=>t.style.display = "none")),
                    n.dispatchEvent(new Event("phx:hide-end"))
                }
                )) : window.requestAnimationFrame((()=>{
                    n.dispatchEvent(new Event("phx:show-start")),
                    gt.putSticky(n, "toggle", (t=>t.style.display = i || "block")),
                    n.dispatchEvent(new Event("phx:show-end"))
                }
                ))
        },
        addOrRemoveClasses(t, e, n, i, r, o) {
            let[s,a,c] = i || [[], [], []];
            if (s.length > 0) {
                let i = ()=>this.addOrRemoveClasses(t, a.concat(s), [])
                  , u = ()=>this.addOrRemoveClasses(t, e.concat(c), n.concat(s).concat(a));
                return o.transition(r, i, u)
            }
            window.requestAnimationFrame((()=>{
                let[i,r] = gt.getSticky(t, "classes", [[], []])
                  , o = e.filter((e=>i.indexOf(e) < 0 && !t.classList.contains(e)))
                  , s = n.filter((e=>r.indexOf(e) < 0 && t.classList.contains(e)))
                  , a = i.filter((t=>n.indexOf(t) < 0)).concat(o)
                  , c = r.filter((t=>e.indexOf(t) < 0)).concat(s);
                gt.putSticky(t, "classes", (t=>(t.classList.remove(...c),
                t.classList.add(...a),
                [a, c])))
            }
            ))
        },
        setOrRemoveAttrs(t, e, n) {
            let[i,r] = gt.getSticky(t, "attrs", [[], []])
              , o = e.map((([t,e])=>t)).concat(n)
              , s = i.filter((([t,e])=>!o.includes(t))).concat(e)
              , a = r.filter((t=>!o.includes(t))).concat(n);
            gt.putSticky(t, "attrs", (t=>(a.forEach((e=>t.removeAttribute(e))),
            s.forEach((([e,n])=>t.setAttribute(e, n))),
            [s, a])))
        },
        hasAllClasses: (t,e)=>e.every((e=>t.classList.contains(e))),
        isToggledOut(t, e) {
            return !this.isVisible(t) || this.hasAllClasses(t, e)
        },
        filterToEls: (t,{to: e})=>e ? gt.all(document, e) : [t]
    }, It = (t,e,n=[])=>{
        let i = new FormData(t)
          , r = [];
        i.forEach(((t,e,n)=>{
            t instanceof File && r.push(e)
        }
        )),
        r.forEach((t=>i.delete(t)));
        let o = new URLSearchParams;
        for (let[t,e] of i.entries())
            (0 === n.length || n.indexOf(t) >= 0) && o.append(t, e);
        for (let t in e)
            o.append(t, e[t]);
        return o.toString()
    }
    , Ut = class {
        constructor(t, e, n, i, r) {
            this.isDead = !1,
            this.liveSocket = e,
            this.flash = i,
            this.parent = n,
            this.root = n ? n.root : this,
            this.el = t,
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
            this.joinCallback = function(t) {
                t && t()
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
        setHref(t) {
            this.href = t
        }
        setRedirect(t) {
            this.redirect = !0,
            this.href = t
        }
        isMain() {
            return this.el.hasAttribute(k)
        }
        connectParams(t) {
            let e = this.liveSocket.params(this.el)
              , n = gt.all(document, `[${this.binding("track-static")}]`).map((t=>t.src || t.href)).filter((t=>"string" == typeof t));
            return n.length > 0 && (e._track_static = n),
            e._mounts = this.joinCount,
            e._live_referer = t,
            e
        }
        isConnected() {
            return this.channel.canPush()
        }
        getSession() {
            return this.el.getAttribute(M)
        }
        getStatic() {
            let t = this.el.getAttribute(N);
            return "" === t ? null : t
        }
        destroy(t=function() {}
        ) {
            this.destroyAllChildren(),
            this.destroyed = !0,
            delete this.root.children[this.id],
            this.parent && delete this.root.children[this.parent.id][this.id],
            clearTimeout(this.loaderTimer);
            let e = ()=>{
                t();
                for (let t in this.viewHooks)
                    this.destroyHook(this.viewHooks[t])
            }
            ;
            gt.markPhxChildDestroyed(this.el),
            this.log("destroyed", (()=>["the child has been removed from the parent"])),
            this.channel.leave().receive("ok", e).receive("error", e).receive("timeout", e)
        }
        setContainerClasses(...t) {
            this.el.classList.remove(_, y, x),
            this.el.classList.add(...t)
        }
        showLoader(t) {
            if (clearTimeout(this.loaderTimer),
            t)
                this.loaderTimer = setTimeout((()=>this.showLoader()), t);
            else {
                for (let t in this.viewHooks)
                    this.viewHooks[t].__disconnected();
                this.setContainerClasses(y)
            }
        }
        execAll(t) {
            gt.all(this.el, `[${t}]`, (e=>this.liveSocket.execJS(e, e.getAttribute(t))))
        }
        hideLoader() {
            clearTimeout(this.loaderTimer),
            this.setContainerClasses(_),
            this.execAll(this.binding("connected"))
        }
        triggerReconnected() {
            for (let t in this.viewHooks)
                this.viewHooks[t].__reconnected()
        }
        log(t, e) {
            this.liveSocket.log(this, t, e)
        }
        transition(t, e, n=function() {}
        ) {
            this.liveSocket.transition(t, e, n)
        }
        withinTargets(t, e) {
            if (t instanceof HTMLElement || t instanceof SVGElement)
                return this.liveSocket.owner(t, (n=>e(n, t)));
            if (it(t)) {
                0 === gt.findComponentNodeList(this.el, t).length ? nt(`no component found matching phx-target of ${t}`) : e(this, parseInt(t))
            } else {
                let n = Array.from(document.querySelectorAll(t));
                0 === n.length && nt(`nothing found matching the phx-target selector "${t}"`),
                n.forEach((t=>this.liveSocket.owner(t, (n=>e(n, t)))))
            }
        }
        applyDiff(t, e, n) {
            this.log(t, (()=>["", st(e)]));
            let {diff: i, reply: r, events: o, title: s} = Nt.extract(e);
            n({
                diff: i,
                reply: r,
                events: o
            }),
            s && window.requestAnimationFrame((()=>gt.putTitle(s)))
        }
        onJoin(t) {
            let {rendered: e, container: n} = t;
            if (n) {
                let[t,e] = n;
                this.el = gt.replaceRootContainer(this.el, t, e)
            }
            this.childJoins = 0,
            this.joinPending = !0,
            this.flash = null,
            dt.dropLocal(this.liveSocket.localStorage, window.location.pathname, i),
            this.applyDiff("mount", e, (({diff: e, events: n})=>{
                this.rendered = new Nt(this.id,e);
                let i = this.renderContainer(null, "join");
                this.dropPendingRefs();
                let r = this.formsForRecovery(i);
                this.joinCount++,
                r.length > 0 ? r.forEach((([t,e,o],s)=>{
                    this.pushFormRecovery(t, o, (t=>{
                        s === r.length - 1 && this.onJoinComplete(t, i, n)
                    }
                    ))
                }
                )) : this.onJoinComplete(t, i, n)
            }
            ))
        }
        dropPendingRefs() {
            gt.all(document, `[${c}="${this.id}"][${a}]`, (t=>{
                t.removeAttribute(a),
                t.removeAttribute(c)
            }
            ))
        }
        onJoinComplete({live_patch: t}, e, n) {
            if (this.joinCount > 1 || this.parent && !this.parent.isJoinPending())
                return this.applyJoinPatch(t, e, n);
            0 === gt.findPhxChildrenInFragment(e, this.id).filter((t=>{
                let e = t.id && this.el.querySelector(`[id="${t.id}"]`)
                  , n = e && e.getAttribute(N);
                return n && t.setAttribute(N, n),
                this.joinChild(t)
            }
            )).length ? this.parent ? (this.root.pendingJoinOps.push([this, ()=>this.applyJoinPatch(t, e, n)]),
            this.parent.ackJoin(this)) : (this.onAllChildJoinsComplete(),
            this.applyJoinPatch(t, e, n)) : this.root.pendingJoinOps.push([this, ()=>this.applyJoinPatch(t, e, n)])
        }
        attachTrueDocEl() {
            this.el = gt.byId(this.id),
            this.el.setAttribute(E, this.root.id)
        }
        execNewMounted() {
            gt.all(this.el, `[${this.binding(I)}], [data-phx-${I}]`, (t=>{
                this.maybeAddNewHook(t)
            }
            )),
            gt.all(this.el, `[${this.binding(z)}]`, (t=>this.maybeMounted(t)))
        }
        applyJoinPatch(t, e, n) {
            this.attachTrueDocEl();
            let i = new Pt(this,this.el,this.id,e,null);
            if (i.markPrunableContentForRemoval(),
            this.performPatch(i, !1),
            this.joinNewChildren(),
            this.execNewMounted(),
            this.joinPending = !1,
            this.liveSocket.dispatchEvents(n),
            this.applyPendingUpdates(),
            t) {
                let {kind: e, to: n} = t;
                this.liveSocket.historyPatch(n, e)
            }
            this.hideLoader(),
            this.joinCount > 1 && this.triggerReconnected(),
            this.stopCallback()
        }
        triggerBeforeUpdateHook(t, e) {
            this.liveSocket.triggerDOM("onBeforeElUpdated", [t, e]);
            let n = this.getHook(t)
              , i = n && gt.isIgnored(t, this.binding(U));
            if (n && !t.isEqualNode(e) && (!i || (r = t.dataset,
            o = e.dataset,
            JSON.stringify(r) !== JSON.stringify(o))))
                return n.__beforeUpdate(),
                n;
            var r, o
        }
        maybeMounted(t) {
            let e = t.getAttribute(this.binding(z))
              , n = e && gt.private(t, "mounted");
            e && !n && (this.liveSocket.execJS(t, e),
            gt.putPrivate(t, "mounted", !0))
        }
        maybeAddNewHook(t, e) {
            let n = this.addHook(t);
            n && n.__mounted()
        }
        performPatch(t, e) {
            let n = []
              , i = !1
              , r = new Set;
            return t.after("added", (t=>{
                this.liveSocket.triggerDOM("onNodeAdded", [t]),
                this.maybeAddNewHook(t),
                t.getAttribute && this.maybeMounted(t)
            }
            )),
            t.after("phxChildAdded", (t=>{
                gt.isPhxSticky(t) ? this.liveSocket.joinRootViews() : i = !0
            }
            )),
            t.before("updated", ((t,e)=>{
                this.triggerBeforeUpdateHook(t, e) && r.add(t.id)
            }
            )),
            t.after("updated", (t=>{
                r.has(t.id) && this.getHook(t).__updated()
            }
            )),
            t.after("discarded", (t=>{
                t.nodeType === Node.ELEMENT_NODE && n.push(t)
            }
            )),
            t.after("transitionsDiscarded", (t=>this.afterElementsRemoved(t, e))),
            t.perform(),
            this.afterElementsRemoved(n, e),
            i
        }
        afterElementsRemoved(t, e) {
            let n = [];
            t.forEach((t=>{
                let e = gt.all(t, `[${o}]`)
                  , i = gt.all(t, `[${this.binding(I)}]`);
                e.concat(t).forEach((t=>{
                    let e = this.componentID(t);
                    it(e) && -1 === n.indexOf(e) && n.push(e)
                }
                )),
                i.concat(t).forEach((t=>{
                    let e = this.getHook(t);
                    e && this.destroyHook(e)
                }
                ))
            }
            )),
            e && this.maybePushComponentsDestroyed(n)
        }
        joinNewChildren() {
            gt.findPhxChildren(this.el, this.id).forEach((t=>this.joinChild(t)))
        }
        getChildById(t) {
            return this.root.children[this.id][t]
        }
        getDescendentByEl(t) {
            return t.id === this.id ? this : this.children[t.getAttribute(w)][t.id]
        }
        destroyDescendent(t) {
            for (let e in this.root.children)
                for (let n in this.root.children[e])
                    if (n === t)
                        return this.root.children[e][n].destroy()
        }
        joinChild(t) {
            if (!this.getChildById(t.id)) {
                let e = new Ut(t,this.liveSocket,this);
                return this.root.children[this.id][e.id] = e,
                e.join(),
                this.childJoins++,
                !0
            }
        }
        isJoinPending() {
            return this.joinPending
        }
        ackJoin(t) {
            this.childJoins--,
            0 === this.childJoins && (this.parent ? this.parent.ackJoin(this) : this.onAllChildJoinsComplete())
        }
        onAllChildJoinsComplete() {
            this.joinCallback((()=>{
                this.pendingJoinOps.forEach((([t,e])=>{
                    t.isDestroyed() || e()
                }
                )),
                this.pendingJoinOps = []
            }
            ))
        }
        update(t, e) {
            if (this.isJoinPending() || this.liveSocket.hasPendingLink() && this.root.isMain())
                return this.pendingDiffs.push({
                    diff: t,
                    events: e
                });
            this.rendered.mergeDiff(t);
            let n = !1;
            this.rendered.isComponentOnlyDiff(t) ? this.liveSocket.time("component patch complete", (()=>{
                gt.findParentCIDs(this.el, this.rendered.componentCIDs(t)).forEach((e=>{
                    this.componentPatch(this.rendered.getComponent(t, e), e) && (n = !0)
                }
                ))
            }
            )) : ut(t) || this.liveSocket.time("full patch complete", (()=>{
                let e = this.renderContainer(t, "update")
                  , i = new Pt(this,this.el,this.id,e,null);
                n = this.performPatch(i, !0)
            }
            )),
            this.liveSocket.dispatchEvents(e),
            n && this.joinNewChildren()
        }
        renderContainer(t, e) {
            return this.liveSocket.time(`toString diff (${e})`, (()=>{
                let e = this.el.tagName
                  , n = t ? this.rendered.componentCIDs(t).concat(this.pruningCIDs) : null;
                return `<${e}>${this.rendered.toString(n)}</${e}>`
            }
            ))
        }
        componentPatch(t, e) {
            if (ut(t))
                return !1;
            let n = this.rendered.componentToString(e)
              , i = new Pt(this,this.el,this.id,n,e);
            return this.performPatch(i, !0)
        }
        getHook(t) {
            return this.viewHooks[Dt.elementID(t)]
        }
        addHook(t) {
            if (Dt.elementID(t) || !t.getAttribute)
                return;
            let e = t.getAttribute(`data-phx-${I}`) || t.getAttribute(this.binding(I));
            if (e && !this.ownsElement(t))
                return;
            let n = this.liveSocket.getHookCallbacks(e);
            if (n) {
                t.id || nt(`no DOM ID for hook "${e}". Hooks require a unique ID on each element.`, t);
                let i = new Dt(this,t,n);
                return this.viewHooks[Dt.elementID(i.el)] = i,
                i
            }
            null !== e && nt(`unknown hook found for "${e}"`, t)
        }
        destroyHook(t) {
            t.__destroyed(),
            t.__cleanup__(),
            delete this.viewHooks[Dt.elementID(t.el)]
        }
        applyPendingUpdates() {
            this.pendingDiffs.forEach((({diff: t, events: e})=>this.update(t, e))),
            this.pendingDiffs = [],
            this.eachChild((t=>t.applyPendingUpdates()))
        }
        eachChild(t) {
            let e = this.root.children[this.id] || {};
            for (let n in e)
                t(this.getChildById(n))
        }
        onChannel(t, e) {
            this.liveSocket.onChannel(this.channel, t, (t=>{
                this.isJoinPending() ? this.root.pendingJoinOps.push([this, ()=>e(t)]) : this.liveSocket.requestDOMUpdate((()=>e(t)))
            }
            ))
        }
        bindChannel() {
            this.liveSocket.onChannel(this.channel, "diff", (t=>{
                this.liveSocket.requestDOMUpdate((()=>{
                    this.applyDiff("update", t, (({diff: t, events: e})=>this.update(t, e)))
                }
                ))
            }
            )),
            this.onChannel("redirect", (({to: t, flash: e})=>this.onRedirect({
                to: t,
                flash: e
            }))),
            this.onChannel("live_patch", (t=>this.onLivePatch(t))),
            this.onChannel("live_redirect", (t=>this.onLiveRedirect(t))),
            this.channel.onError((t=>this.onError(t))),
            this.channel.onClose((t=>this.onClose(t)))
        }
        destroyAllChildren() {
            this.eachChild((t=>t.destroy()))
        }
        onLiveRedirect(t) {
            let {to: e, kind: n, flash: i} = t
              , r = this.expandURL(e);
            this.liveSocket.historyRedirect(r, n, i)
        }
        onLivePatch(t) {
            let {to: e, kind: n} = t;
            this.href = this.expandURL(e),
            this.liveSocket.historyPatch(e, n)
        }
        expandURL(t) {
            return t.startsWith("/") ? `${window.location.protocol}//${window.location.host}${t}` : t
        }
        onRedirect({to: t, flash: e}) {
            this.liveSocket.redirect(t, e)
        }
        isDestroyed() {
            return this.destroyed
        }
        joinDead() {
            this.isDead = !0
        }
        join(t) {
            this.showLoader(this.liveSocket.loaderTimeout),
            this.bindChannel(),
            this.isMain() && (this.stopCallback = this.liveSocket.withPageLoading({
                to: this.href,
                kind: "initial"
            })),
            this.joinCallback = e=>{
                e = e || function() {}
                ,
                t ? t(this.joinCount, e) : e()
            }
            ,
            this.liveSocket.wrapPush(this, {
                timeout: !1
            }, (()=>this.channel.join().receive("ok", (t=>{
                this.isDestroyed() || this.liveSocket.requestDOMUpdate((()=>this.onJoin(t)))
            }
            )).receive("error", (t=>!this.isDestroyed() && this.onJoinError(t))).receive("timeout", (()=>!this.isDestroyed() && this.onJoinError({
                reason: "timeout"
            })))))
        }
        onJoinError(t) {
            return "unauthorized" === t.reason || "stale" === t.reason ? (this.log("error", (()=>["unauthorized live_redirect. Falling back to page request", t])),
            this.onRedirect({
                to: this.href
            })) : ((t.redirect || t.live_redirect) && (this.joinPending = !1,
            this.channel.leave()),
            t.redirect ? this.onRedirect(t.redirect) : t.live_redirect ? this.onLiveRedirect(t.live_redirect) : (this.log("error", (()=>["unable to join", t])),
            void (this.liveSocket.isConnected() && this.liveSocket.reloadWithJitter(this))))
        }
        onClose(t) {
            if (!this.isDestroyed()) {
                if (this.liveSocket.hasPendingLink() && "leave" !== t)
                    return this.liveSocket.reloadWithJitter(this);
                this.destroyAllChildren(),
                this.liveSocket.dropActiveElement(this),
                document.activeElement && document.activeElement.blur(),
                this.liveSocket.isUnloaded() && this.showLoader(200)
            }
        }
        onError(t) {
            this.onClose(t),
            this.liveSocket.isConnected() && this.log("error", (()=>["view crashed", t])),
            this.liveSocket.isUnloaded() || this.displayError()
        }
        displayError() {
            this.isMain() && gt.dispatchEvent(window, "phx:page-loading-start", {
                detail: {
                    to: this.href,
                    kind: "error"
                }
            }),
            this.showLoader(),
            this.setContainerClasses(y, x),
            this.execAll(this.binding("disconnected"))
        }
        pushWithReply(t, e, n, i=function() {}
        ) {
            if (!this.isConnected())
                return;
            let[r,[o],s] = t ? t() : [null, [], {}]
              , a = function() {};
            return (s.page_loading || o && null !== o.getAttribute(this.binding(v))) && (a = this.liveSocket.withPageLoading({
                kind: "element",
                target: o
            })),
            "number" != typeof n.cid && delete n.cid,
            this.liveSocket.wrapPush(this, {
                timeout: !0
            }, (()=>this.channel.push(e, n, 3e4).receive("ok", (t=>{
                let e = e=>{
                    t.redirect && this.onRedirect(t.redirect),
                    t.live_patch && this.onLivePatch(t.live_patch),
                    t.live_redirect && this.onLiveRedirect(t.live_redirect),
                    null !== r && this.undoRefs(r),
                    a(),
                    i(t, e)
                }
                ;
                t.diff ? this.liveSocket.requestDOMUpdate((()=>{
                    this.applyDiff("update", t.diff, (({diff: t, reply: n, events: i})=>{
                        this.update(t, i),
                        e(n)
                    }
                    ))
                }
                )) : e(null)
            }
            ))))
        }
        undoRefs(t) {
            this.isConnected() && gt.all(document, `[${c}="${this.id}"][${a}="${t}"]`, (t=>{
                let e = t.getAttribute(D);
                t.removeAttribute(a),
                t.removeAttribute(c),
                null !== t.getAttribute(j) && (t.readOnly = !1,
                t.removeAttribute(j)),
                null !== e && (t.disabled = "true" === e,
                t.removeAttribute(D)),
                r.forEach((e=>gt.removeClass(t, e)));
                let n = t.getAttribute($);
                null !== n && (t.innerText = n,
                t.removeAttribute($));
                let i = gt.private(t, a);
                if (i) {
                    let e = this.triggerBeforeUpdateHook(t, i);
                    Pt.patchEl(t, i, this.liveSocket.getActiveElement()),
                    e && e.__updated(),
                    gt.deletePrivate(t, a)
                }
            }
            ))
        }
        putRef(t, e, n={}) {
            let i = this.ref++
              , r = this.binding(R);
            return n.loading && (t = t.concat(gt.all(document, n.loading))),
            t.forEach((t=>{
                t.classList.add(`phx-${e}-loading`),
                t.setAttribute(a, i),
                t.setAttribute(c, this.el.id);
                let n = t.getAttribute(r);
                null !== n && (t.getAttribute($) || t.setAttribute($, t.innerText),
                "" !== n && (t.innerText = n),
                t.setAttribute("disabled", ""))
            }
            )),
            [i, t, n]
        }
        componentID(t) {
            let e = t.getAttribute && t.getAttribute(o);
            return e ? parseInt(e) : null
        }
        targetComponentID(t, e, n={}) {
            if (it(e))
                return e;
            let i = t.getAttribute(this.binding("target"));
            return it(i) ? parseInt(i) : e && (null !== i || n.target) ? this.closestComponentID(e) : null
        }
        closestComponentID(t) {
            return it(t) ? t : t ? lt(t.closest(`[${o}]`), (t=>this.ownsElement(t) && this.componentID(t))) : null
        }
        pushHookEvent(t, e, n, i) {
            if (!this.isConnected())
                return this.log("hook", (()=>["unable to push hook event. LiveView not connected", e, n])),
                !1;
            let[r,o,s] = this.putRef([], "hook");
            return this.pushWithReply((()=>[r, o, s]), "event", {
                type: "hook",
                event: e,
                value: n,
                cid: this.closestComponentID(t)
            }, ((t,e)=>i(e, r))),
            r
        }
        extractMeta(t, e, n) {
            let i = this.binding("value-");
            for (let n = 0; n < t.attributes.length; n++) {
                e || (e = {});
                let r = t.attributes[n].name;
                r.startsWith(i) && (e[r.replace(i, "")] = t.getAttribute(r))
            }
            if (void 0 !== t.value && (e || (e = {}),
            e.value = t.value,
            "INPUT" === t.tagName && T.indexOf(t.type) >= 0 && !t.checked && delete e.value),
            n) {
                e || (e = {});
                for (let t in n)
                    e[t] = n[t]
            }
            return e
        }
        pushEvent(t, e, n, i, r, o={}) {
            this.pushWithReply((()=>this.putRef([e], t, o)), "event", {
                type: t,
                event: i,
                value: this.extractMeta(e, r, o.value),
                cid: this.targetComponentID(e, n, o)
            })
        }
        pushFileProgress(t, e, n, i=function() {}
        ) {
            this.liveSocket.withinOwners(t.form, ((r,o)=>{
                r.pushWithReply(null, "progress", {
                    event: t.getAttribute(r.binding("progress")),
                    ref: t.getAttribute(l),
                    entry_ref: e,
                    progress: n,
                    cid: r.targetComponentID(t.form, o)
                }, i)
            }
            ))
        }
        pushInput(t, e, n, i, r, o) {
            let s, a, c = it(n) ? n : this.targetComponentID(t.form, e), u = ()=>this.putRef([t, t.form], "change", r);
            a = t.getAttribute(this.binding("change")) ? It(t.form, {
                _target: r._target
            }, [t.name]) : It(t.form, {
                _target: r._target
            }),
            gt.isUploadInput(t) && t.files && t.files.length > 0 && _t.trackFiles(t, Array.from(t.files)),
            s = _t.serializeUploads(t);
            let l = {
                type: "form",
                event: i,
                value: a,
                uploads: s,
                cid: c
            };
            this.pushWithReply(u, "event", l, (n=>{
                if (gt.showError(t, this.liveSocket.binding(S)),
                gt.isUploadInput(t) && null !== t.getAttribute("data-phx-auto-upload")) {
                    if (_t.filesAwaitingPreflight(t).length > 0) {
                        let[i,r] = u();
                        this.uploadFiles(t.form, e, i, c, (e=>{
                            o && o(n),
                            this.triggerAwaitingSubmit(t.form)
                        }
                        ))
                    }
                } else
                    o && o(n)
            }
            ))
        }
        triggerAwaitingSubmit(t) {
            let e = this.getScheduledSubmit(t);
            if (e) {
                let[n,i,r,o] = e;
                this.cancelSubmit(t),
                o()
            }
        }
        getScheduledSubmit(t) {
            return this.formSubmits.find((([e,n,i,r])=>e.isSameNode(t)))
        }
        scheduleSubmit(t, e, n, i) {
            if (this.getScheduledSubmit(t))
                return !0;
            this.formSubmits.push([t, e, n, i])
        }
        cancelSubmit(t) {
            this.formSubmits = this.formSubmits.filter((([e,n,i])=>!e.isSameNode(t) || (this.undoRefs(n),
            !1)))
        }
        disableForm(t, e={}) {
            let n = t=>!(at(t, `${this.binding(U)}=ignore`, t.form) || at(t, "data-phx-update=ignore", t.form))
              , i = Array.from(t.elements)
              , r = i.filter((t=>t.hasAttribute(this.binding(R))))
              , o = i.filter((t=>"BUTTON" == t.tagName)).filter(n)
              , s = i.filter((t=>["INPUT", "TEXTAREA", "SELECT"].includes(t.tagName))).filter(n);
            return o.forEach((t=>{
                t.setAttribute(D, t.disabled),
                t.disabled = !0
            }
            )),
            s.forEach((t=>{
                t.setAttribute(j, t.readOnly),
                t.readOnly = !0,
                t.files && (t.setAttribute(D, t.disabled),
                t.disabled = !0)
            }
            )),
            t.setAttribute(this.binding(v), ""),
            this.putRef([t].concat(r).concat(o).concat(s), "submit", e)
        }
        pushFormSubmit(t, e, n, i, r) {
            let o = ()=>this.disableForm(t, i)
              , s = this.targetComponentID(t, e);
            if (_t.hasUploadsInProgress(t)) {
                let[s,a] = o()
                  , c = ()=>this.pushFormSubmit(t, e, n, i, r);
                return this.scheduleSubmit(t, s, i, c)
            }
            if (_t.inputsAwaitingPreflight(t).length > 0) {
                let[a,c] = o()
                  , u = ()=>[a, c, i];
                this.uploadFiles(t, e, a, s, (e=>{
                    let i = It(t, {});
                    this.pushWithReply(u, "event", {
                        type: "form",
                        event: n,
                        value: i,
                        cid: s
                    }, r)
                }
                ))
            } else {
                let e = It(t, {});
                this.pushWithReply(o, "event", {
                    type: "form",
                    event: n,
                    value: e,
                    cid: s
                }, r)
            }
        }
        uploadFiles(t, e, n, i, r) {
            let o = this.joinCount
              , s = _t.activeFileInputs(t)
              , a = s.length;
            s.forEach((t=>{
                let i = new _t(t,this,(()=>{
                    a--,
                    0 === a && r()
                }
                ));
                this.uploaders[t] = i;
                let s = i.entries().map((t=>t.toPreflightPayload()))
                  , c = {
                    ref: t.getAttribute(l),
                    entries: s,
                    cid: this.targetComponentID(t.form, e)
                };
                this.log("upload", (()=>["sending preflight request", c])),
                this.pushWithReply(null, "allow_upload", c, (t=>{
                    if (this.log("upload", (()=>["got preflight response", t])),
                    t.error) {
                        this.undoRefs(n);
                        let[e,i] = t.error;
                        this.log("upload", (()=>[`error for entry ${e}`, i]))
                    } else {
                        let e = t=>{
                            this.channel.onError((()=>{
                                this.joinCount === o && t()
                            }
                            ))
                        }
                        ;
                        i.initAdapterUpload(t, e, this.liveSocket)
                    }
                }
                ))
            }
            ))
        }
        dispatchUploads(t, e) {
            let n = gt.findUploadInputs(this.el).filter((e=>e.name === t));
            0 === n.length ? nt(`no live file inputs found matching the name "${t}"`) : n.length > 1 ? nt(`duplicate live file inputs found matching the name "${t}"`) : gt.dispatchEvent(n[0], u, {
                detail: {
                    files: e
                }
            })
        }
        pushFormRecovery(t, e, n) {
            this.liveSocket.withinOwners(t, ((i,r)=>{
                let o = t.elements[0]
                  , s = t.getAttribute(this.binding(H)) || t.getAttribute(this.binding("change"));
                $t.exec("change", s, i, o, ["push", {
                    _target: o.name,
                    newCid: e,
                    callback: n
                }])
            }
            ))
        }
        pushLinkPatch(t, e, n) {
            let i = this.liveSocket.setPendingLink(t)
              , r = e ? ()=>this.putRef([e], "click") : null
              , o = ()=>this.liveSocket.redirect(window.location.href)
              , s = this.pushWithReply(r, "live_patch", {
                url: t
            }, (e=>{
                this.liveSocket.requestDOMUpdate((()=>{
                    e.link_redirect ? this.liveSocket.replaceMain(t, null, n, i) : (this.liveSocket.commitPendingLink(i) && (this.href = t),
                    this.applyPendingUpdates(),
                    n && n(i))
                }
                ))
            }
            ));
            s ? s.receive("timeout", o) : o()
        }
        formsForRecovery(t) {
            if (0 === this.joinCount)
                return [];
            let e = this.binding("change")
              , n = document.createElement("template");
            return n.innerHTML = t,
            gt.all(this.el, `form[${e}]`).filter((t=>t.id && this.ownsElement(t))).filter((t=>t.elements.length > 0)).filter((t=>"ignore" !== t.getAttribute(this.binding(H)))).map((t=>{
                let i = n.content.querySelector(`form[id="${t.id}"][${e}="${t.getAttribute(e)}"]`);
                return i ? [t, i, this.targetComponentID(i)] : [t, null, null]
            }
            )).filter((([t,e,n])=>e))
        }
        maybePushComponentsDestroyed(t) {
            let e = t.filter((t=>0 === gt.findComponentNodeList(this.el, t).length));
            e.length > 0 && (this.pruningCIDs.push(...e),
            this.pushWithReply(null, "cids_will_destroy", {
                cids: e
            }, (()=>{
                this.pruningCIDs = this.pruningCIDs.filter((t=>-1 !== e.indexOf(t)));
                let t = e.filter((t=>0 === gt.findComponentNodeList(this.el, t).length));
                t.length > 0 && this.pushWithReply(null, "cids_destroyed", {
                    cids: t
                }, (t=>{
                    this.rendered.pruneCIDs(t.cids)
                }
                ))
            }
            )))
        }
        ownsElement(t) {
            let e = t.closest(O);
            return t.getAttribute(w) === this.id || e && e.id === this.id || !e && this.isDead
        }
        submitForm(t, e, n, i={}) {
            gt.putPrivate(t, L, !0);
            let r = this.liveSocket.binding(S)
              , o = Array.from(t.elements);
            o.forEach((t=>gt.putPrivate(t, L, !0))),
            this.liveSocket.blurActiveElement(this),
            this.pushFormSubmit(t, e, n, i, (()=>{
                o.forEach((t=>gt.showError(t, r))),
                this.liveSocket.restorePreviouslyActiveFocus()
            }
            ))
        }
        binding(t) {
            return this.liveSocket.binding(t)
        }
    }
    , Ft = class {
        constructor(t, e, n={}) {
            if (this.unloaded = !1,
            !e || "Object" === e.constructor.name)
                throw new Error('\n      a phoenix Socket must be provided as the second argument to the LiveSocket constructor. For example:\n\n          import {Socket} from "phoenix"\n          import {LiveSocket} from "phoenix_live_view"\n          let liveSocket = new LiveSocket("/live", Socket, {...})\n      ');
            this.socket = new e(t,n),
            this.bindingPrefix = n.bindingPrefix || "phx-",
            this.opts = n,
            this.params = ot(n.params || {}),
            this.viewLogger = n.viewLogger,
            this.metadataCallbacks = n.metadata || {},
            this.defaults = Object.assign(st(G), n.defaults || {}),
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
            this.currentLocation = st(window.location),
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
                onNodeAdded: ot(),
                onBeforeElUpdated: ot()
            }, n.dom || {}),
            this.transitions = new Ht,
            window.addEventListener("pagehide", (t=>{
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
            return "true" === this.sessionStorage.getItem(B)
        }
        isDebugDisabled() {
            return "false" === this.sessionStorage.getItem(B)
        }
        enableDebug() {
            this.sessionStorage.setItem(B, "true")
        }
        enableProfiling() {
            this.sessionStorage.setItem(q, "true")
        }
        disableDebug() {
            this.sessionStorage.setItem(B, "false")
        }
        disableProfiling() {
            this.sessionStorage.removeItem(q)
        }
        enableLatencySim(t) {
            this.enableDebug(),
            console.log("latency simulator enabled for the duration of this browser session. Call disableLatencySim() to disable"),
            this.sessionStorage.setItem(V, t)
        }
        disableLatencySim() {
            this.sessionStorage.removeItem(V)
        }
        getLatencySim() {
            let t = this.sessionStorage.getItem(V);
            return t ? parseInt(t) : null
        }
        getSocket() {
            return this.socket
        }
        connect() {
            "localhost" !== window.location.hostname || this.isDebugDisabled() || this.enableDebug();
            let t = ()=>{
                this.joinRootViews() ? (this.bindTopLevelEvents(),
                this.socket.connect()) : this.main ? this.socket.connect() : this.bindTopLevelEvents({
                    dead: !0
                }),
                this.joinDeadView()
            }
            ;
            ["complete", "loaded", "interactive"].indexOf(document.readyState) >= 0 ? t() : document.addEventListener("DOMContentLoaded", (()=>t()))
        }
        disconnect(t) {
            clearTimeout(this.reloadWithJitterTimer),
            this.socket.disconnect(t)
        }
        replaceTransport(t) {
            clearTimeout(this.reloadWithJitterTimer),
            this.socket.replaceTransport(t),
            this.connect()
        }
        execJS(t, e, n=null) {
            this.owner(t, (i=>$t.exec(n, e, i, t)))
        }
        unload() {
            this.unloaded || (this.main && this.isConnected() && this.log(this.main, "socket", (()=>["disconnect for page nav"])),
            this.unloaded = !0,
            this.destroyAllViews(),
            this.disconnect())
        }
        triggerDOM(t, e) {
            this.domCallbacks[t](...e)
        }
        time(t, e) {
            if (!this.isProfileEnabled() || !console.time)
                return e();
            console.time(t);
            let n = e();
            return console.timeEnd(t),
            n
        }
        log(t, e, n) {
            if (this.viewLogger) {
                let[i,r] = n();
                this.viewLogger(t, e, i, r)
            } else if (this.isDebugEnabled()) {
                let[i,r] = n();
                ((t,e,n,i)=>{
                    t.liveSocket.isDebugEnabled() && console.log(`${t.id} ${e}: ${n} - `, i)
                }
                )(t, e, i, r)
            }
        }
        requestDOMUpdate(t) {
            this.transitions.after(t)
        }
        transition(t, e, n=function() {}
        ) {
            this.transitions.addTransition(t, e, n)
        }
        onChannel(t, e, n) {
            t.on(e, (t=>{
                let e = this.getLatencySim();
                e ? setTimeout((()=>n(t)), e) : n(t)
            }
            ))
        }
        wrapPush(t, e, n) {
            let i = this.getLatencySim()
              , r = t.joinCount;
            if (!i)
                return this.isConnected() && e.timeout ? n().receive("timeout", (()=>{
                    t.joinCount !== r || t.isDestroyed() || this.reloadWithJitter(t, (()=>{
                        this.log(t, "timeout", (()=>["received timeout while communicating with server. Falling back to hard refresh for recovery"]))
                    }
                    ))
                }
                )) : n();
            let o = {
                receives: [],
                receive(t, e) {
                    this.receives.push([t, e])
                }
            };
            return setTimeout((()=>{
                t.isDestroyed() || o.receives.reduce(((t,[e,n])=>t.receive(e, n)), n())
            }
            ), i),
            o
        }
        reloadWithJitter(t, e) {
            clearTimeout(this.reloadWithJitterTimer),
            this.disconnect();
            let n = this.reloadJitterMin
              , r = this.reloadJitterMax
              , o = Math.floor(Math.random() * (r - n + 1)) + n
              , s = dt.updateLocal(this.localStorage, window.location.pathname, i, 0, (t=>t + 1));
            s > this.maxReloads && (o = this.failsafeJitter),
            this.reloadWithJitterTimer = setTimeout((()=>{
                t.isDestroyed() || t.isConnected() || (t.destroy(),
                e ? e() : this.log(t, "join", (()=>[`encountered ${s} consecutive reloads`])),
                s > this.maxReloads && this.log(t, "join", (()=>[`exceeded ${this.maxReloads} consecutive reloads. Entering failsafe mode`])),
                this.hasPendingLink() ? window.location = this.pendingLink : window.location.reload())
            }
            ), o)
        }
        getHookCallbacks(t) {
            return t && t.startsWith("Phoenix.") ? bt[t.split(".")[1]] : this.hooks[t]
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
        binding(t) {
            return `${this.getBindingPrefix()}${t}`
        }
        channel(t, e) {
            return this.socket.channel(t, e)
        }
        joinDeadView() {
            let t = document.body;
            if (t && !this.isPhxView(t) && !this.isPhxView(document.firstElementChild)) {
                let e = this.newRootView(t);
                e.setHref(this.getHref()),
                e.joinDead(),
                this.main || (this.main = e),
                window.requestAnimationFrame((()=>e.execNewMounted()))
            }
        }
        joinRootViews() {
            let t = !1;
            return gt.all(document, `${O}:not([${w}])`, (e=>{
                if (!this.getRootById(e.id)) {
                    let t = this.newRootView(e);
                    t.setHref(this.getHref()),
                    t.join(),
                    e.hasAttribute(k) && (this.main = t)
                }
                t = !0
            }
            )),
            t
        }
        redirect(t, e) {
            this.disconnect(),
            dt.redirect(t, e)
        }
        replaceMain(t, e, n=null, i=this.setPendingLink(t)) {
            let r = this.currentLocation.href;
            this.outgoingMainEl = this.outgoingMainEl || this.main.el;
            let o = gt.cloneNode(this.outgoingMainEl, "");
            this.main.showLoader(this.loaderTimeout),
            this.main.destroy(),
            this.main = this.newRootView(o, e, r),
            this.main.setRedirect(t),
            this.transitionRemoves(),
            this.main.join(((t,e)=>{
                1 === t && this.commitPendingLink(i) && this.requestDOMUpdate((()=>{
                    gt.findPhxSticky(document).forEach((t=>o.appendChild(t))),
                    this.outgoingMainEl.replaceWith(o),
                    this.outgoingMainEl = null,
                    n && requestAnimationFrame(n),
                    e()
                }
                ))
            }
            ))
        }
        transitionRemoves(t) {
            let e = this.binding("remove");
            (t = t || gt.all(document, `[${e}]`)).forEach((t=>{
                document.body.contains(t) && this.execJS(t, t.getAttribute(e), "remove")
            }
            ))
        }
        isPhxView(t) {
            return t.getAttribute && null !== t.getAttribute(M)
        }
        newRootView(t, e, n) {
            let i = new Ut(t,this,null,e,n);
            return this.roots[i.id] = i,
            i
        }
        owner(t, e) {
            let n = lt(t.closest(O), (t=>this.getViewByEl(t))) || this.main;
            n && e(n)
        }
        withinOwners(t, e) {
            this.owner(t, (n=>e(n, t)))
        }
        getViewByEl(t) {
            let e = t.getAttribute(E);
            return lt(this.getRootById(e), (e=>e.getDescendentByEl(t)))
        }
        getRootById(t) {
            return this.roots[t]
        }
        destroyAllViews() {
            for (let t in this.roots)
                this.roots[t].destroy(),
                delete this.roots[t];
            this.main = null
        }
        destroyViewByEl(t) {
            let e = this.getRootById(t.getAttribute(E));
            e && e.id === t.id ? (e.destroy(),
            delete this.roots[e.id]) : e && e.destroyDescendent(t.id)
        }
        setActiveElement(t) {
            if (this.activeElement === t)
                return;
            this.activeElement = t;
            let e = ()=>{
                t === this.activeElement && (this.activeElement = null),
                t.removeEventListener("mouseup", this),
                t.removeEventListener("touchend", this)
            }
            ;
            t.addEventListener("mouseup", e),
            t.addEventListener("touchend", e)
        }
        getActiveElement() {
            return document.activeElement === document.body ? this.activeElement || document.activeElement : document.activeElement || document.body
        }
        dropActiveElement(t) {
            this.prevActive && t.ownsElement(this.prevActive) && (this.prevActive = null)
        }
        restorePreviouslyActiveFocus() {
            this.prevActive && this.prevActive !== document.body && this.prevActive.focus()
        }
        blurActiveElement() {
            this.prevActive = this.getActiveElement(),
            this.prevActive !== document.body && this.prevActive.blur()
        }
        bindTopLevelEvents({dead: t}={}) {
            this.boundTopLevelEvents || (this.boundTopLevelEvents = !0,
            this.socket.onClose((t=>t && 1001 === t.code ? this.unload() : t && 1e3 === t.code && this.main ? this.reloadWithJitter(this.main) : void 0)),
            document.body.addEventListener("click", (function() {}
            )),
            window.addEventListener("pageshow", (t=>{
                t.persisted && (this.getSocket().disconnect(),
                this.withPageLoading({
                    to: window.location.href,
                    kind: "redirect"
                }),
                window.location.reload())
            }
            ), !0),
            t || this.bindNav(),
            this.bindClicks(),
            t || this.bindForms(),
            this.bind({
                keyup: "keyup",
                keydown: "keydown"
            }, ((t,e,n,i,r,o)=>{
                let s = i.getAttribute(this.binding("key"))
                  , a = t.key && t.key.toLowerCase();
                if (s && s.toLowerCase() !== a)
                    return;
                let c = {
                    key: t.key,
                    ...this.eventMeta(e, t, i)
                };
                $t.exec(e, r, n, i, ["push", {
                    data: c
                }])
            }
            )),
            this.bind({
                blur: "focusout",
                focus: "focusin"
            }, ((t,e,n,i,r,o)=>{
                if (!o) {
                    let o = {
                        key: t.key,
                        ...this.eventMeta(e, t, i)
                    };
                    $t.exec(e, r, n, i, ["push", {
                        data: o
                    }])
                }
            }
            )),
            this.bind({
                blur: "blur",
                focus: "focus"
            }, ((t,e,n,i,r,o,s)=>{
                if ("window" === s) {
                    let r = this.eventMeta(e, t, i);
                    $t.exec(e, o, n, i, ["push", {
                        data: r
                    }])
                }
            }
            )),
            window.addEventListener("dragover", (t=>t.preventDefault())),
            window.addEventListener("drop", (t=>{
                t.preventDefault();
                let e = lt(at(t.target, this.binding(f)), (t=>t.getAttribute(this.binding(f))))
                  , n = e && document.getElementById(e)
                  , i = Array.from(t.dataTransfer.files || []);
                n && !n.disabled && 0 !== i.length && n.files instanceof FileList && (_t.trackFiles(n, i),
                n.dispatchEvent(new Event("input",{
                    bubbles: !0
                })))
            }
            )),
            this.on(u, (t=>{
                let e = t.target;
                if (!gt.isUploadInput(e))
                    return;
                let n = Array.from(t.detail.files || []).filter((t=>t instanceof File || t instanceof Blob));
                _t.trackFiles(e, n),
                e.dispatchEvent(new Event("input",{
                    bubbles: !0
                }))
            }
            )))
        }
        eventMeta(t, e, n) {
            let i = this.metadataCallbacks[t];
            return i ? i(e, n) : {}
        }
        setPendingLink(t) {
            return this.linkRef++,
            this.pendingLink = t,
            this.linkRef
        }
        commitPendingLink(t) {
            return this.linkRef === t && (this.href = this.pendingLink,
            this.pendingLink = null,
            !0)
        }
        getHref() {
            return this.href
        }
        hasPendingLink() {
            return !!this.pendingLink
        }
        bind(t, e) {
            for (let n in t) {
                let i = t[n];
                this.on(i, (t=>{
                    let r = this.binding(n)
                      , o = this.binding(`window-${n}`)
                      , s = t.target.getAttribute && t.target.getAttribute(r);
                    s ? this.debounce(t.target, t, i, (()=>{
                        this.withinOwners(t.target, (i=>{
                            e(t, n, i, t.target, s, null)
                        }
                        ))
                    }
                    )) : gt.all(document, `[${o}]`, (r=>{
                        let s = r.getAttribute(o);
                        this.debounce(r, t, i, (()=>{
                            this.withinOwners(r, (i=>{
                                e(t, n, i, r, s, "window")
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
            window.addEventListener("click", (t=>this.clickStartedAtTarget = t.target)),
            this.bindClick("click", "click", !1),
            this.bindClick("mousedown", "capture-click", !0)
        }
        bindClick(t, e, n) {
            let i = this.binding(e);
            window.addEventListener(t, (t=>{
                let e = null;
                if (n)
                    e = t.target.matches(`[${i}]`) ? t.target : t.target.querySelector(`[${i}]`);
                else {
                    let n = this.clickStartedAtTarget || t.target;
                    e = at(n, i),
                    this.dispatchClickAway(t, n),
                    this.clickStartedAtTarget = null
                }
                let r = e && e.getAttribute(i);
                r ? ("#" === e.getAttribute("href") && t.preventDefault(),
                this.debounce(e, t, "click", (()=>{
                    this.withinOwners(e, (n=>{
                        $t.exec("click", r, n, e, ["push", {
                            data: this.eventMeta("click", t, e)
                        }])
                    }
                    ))
                }
                ))) : n || void 0 === t.target.href || gt.isExternalClick(t) || this.unload()
            }
            ), n)
        }
        dispatchClickAway(t, e) {
            let n = this.binding("click-away");
            gt.all(document, `[${n}]`, (i=>{
                i.isSameNode(e) || i.contains(e) || this.withinOwners(t.target, (e=>{
                    let r = i.getAttribute(n);
                    $t.isVisible(i) && $t.exec("click", r, e, i, ["push", {
                        data: this.eventMeta("click", t, t.target)
                    }])
                }
                ))
            }
            ))
        }
        bindNav() {
            if (!dt.canPushState())
                return;
            history.scrollRestoration && (history.scrollRestoration = "manual");
            let t = null;
            window.addEventListener("scroll", (e=>{
                clearTimeout(t),
                t = setTimeout((()=>{
                    dt.updateCurrentState((t=>Object.assign(t, {
                        scroll: window.scrollY
                    })))
                }
                ), 100)
            }
            )),
            window.addEventListener("popstate", (t=>{
                if (!this.registerNewLocation(window.location))
                    return;
                let {type: e, id: n, root: i, scroll: r} = t.state || {}
                  , o = window.location.href;
                this.requestDOMUpdate((()=>{
                    this.main.isConnected() && "patch" === e && n === this.main.id ? this.main.pushLinkPatch(o, null) : this.replaceMain(o, null, (()=>{
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
            window.addEventListener("click", (t=>{
                let e = at(t.target, s)
                  , n = e && e.getAttribute(s)
                  , i = t.metaKey || t.ctrlKey || 1 === t.button;
                if (!n || !this.isConnected() || !this.main || i)
                    return;
                let r = e.href
                  , o = e.getAttribute("data-phx-link-state");
                t.preventDefault(),
                t.stopImmediatePropagation(),
                this.pendingLink !== r && this.requestDOMUpdate((()=>{
                    if ("patch" === n)
                        this.pushHistoryPatch(r, o, e);
                    else {
                        if ("redirect" !== n)
                            throw new Error(`expected ${s} to be "patch" or "redirect", got: ${n}`);
                        this.historyRedirect(r, o)
                    }
                    let t = e.getAttribute(this.binding("click"));
                    t && this.requestDOMUpdate((()=>this.execJS(e, t, "click")))
                }
                ))
            }
            ), !1)
        }
        dispatchEvent(t, e={}) {
            gt.dispatchEvent(window, `phx:${t}`, {
                detail: e
            })
        }
        dispatchEvents(t) {
            t.forEach((([t,e])=>this.dispatchEvent(t, e)))
        }
        withPageLoading(t, e) {
            gt.dispatchEvent(window, "phx:page-loading-start", {
                detail: t
            });
            let n = ()=>gt.dispatchEvent(window, "phx:page-loading-stop", {
                detail: t
            });
            return e ? e(n) : n
        }
        pushHistoryPatch(t, e, n) {
            if (!this.isConnected())
                return dt.redirect(t);
            this.withPageLoading({
                to: t,
                kind: "patch"
            }, (i=>{
                this.main.pushLinkPatch(t, n, (n=>{
                    this.historyPatch(t, e, n),
                    i()
                }
                ))
            }
            ))
        }
        historyPatch(t, e, n=this.setPendingLink(t)) {
            this.commitPendingLink(n) && (dt.pushState(e, {
                type: "patch",
                id: this.main.id
            }, t),
            this.registerNewLocation(window.location))
        }
        historyRedirect(t, e, n) {
            if (!this.isConnected())
                return dt.redirect(t, n);
            if (/^\/$|^\/[^\/]+.*$/.test(t)) {
                let {protocol: e, host: n} = window.location;
                t = `${e}//${n}${t}`
            }
            let i = window.scrollY;
            this.withPageLoading({
                to: t,
                kind: "redirect"
            }, (r=>{
                this.replaceMain(t, n, (()=>{
                    dt.pushState(e, {
                        type: "redirect",
                        id: this.main.id,
                        scroll: i
                    }, t),
                    this.registerNewLocation(window.location),
                    r()
                }
                ))
            }
            ))
        }
        replaceRootHistory() {
            dt.pushState("replace", {
                root: !0,
                type: "patch",
                id: this.main.id
            })
        }
        registerNewLocation(t) {
            let {pathname: e, search: n} = this.currentLocation;
            return e + n !== t.pathname + t.search && (this.currentLocation = st(t),
            !0)
        }
        bindForms() {
            let t = 0
              , e = !1;
            this.on("submit", (t=>{
                let n = t.target.getAttribute(this.binding("submit"))
                  , i = t.target.getAttribute(this.binding("change"));
                e || !i || n || (e = !0,
                t.preventDefault(),
                this.unload(),
                this.withinOwners(t.target, (e=>{
                    e.disableForm(t.target),
                    window.requestAnimationFrame((()=>t.target.submit()))
                }
                )))
            }
            ), !0),
            this.on("submit", (t=>{
                let e = t.target.getAttribute(this.binding("submit"));
                if (!e)
                    return this.unload();
                t.preventDefault(),
                t.target.disabled = !0,
                this.withinOwners(t.target, (n=>{
                    $t.exec("submit", e, n, t.target, ["push", {}])
                }
                ))
            }
            ), !1);
            for (let e of ["change", "input"])
                this.on(e, (n=>{
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
                      , u = t;
                    t++;
                    let {at: l, type: h} = gt.private(r, "prev-iteration") || {};
                    l === u - 1 && e !== h || (gt.putPrivate(r, "prev-iteration", {
                        at: u,
                        type: e
                    }),
                    this.debounce(r, n, e, (()=>{
                        this.withinOwners(c, (t=>{
                            gt.putPrivate(r, A, !0),
                            gt.isTextualInput(r) || this.setActiveElement(r),
                            $t.exec("change", a, t, r, ["push", {
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
        debounce(t, e, n, i) {
            if ("blur" === n || "focusout" === n)
                return i();
            let r = this.binding("debounce")
              , o = this.binding("throttle")
              , s = this.defaults.debounce.toString()
              , a = this.defaults.throttle.toString();
            this.withinOwners(t, (n=>{
                gt.debounce(t, e, r, s, o, a, (()=>!n.isDestroyed() && document.body.contains(t)), (()=>{
                    i()
                }
                ))
            }
            ))
        }
        silenceEvents(t) {
            this.silenced = !0,
            t(),
            this.silenced = !1
        }
        on(t, e) {
            window.addEventListener(t, (t=>{
                this.silenced || e(t)
            }
            ))
        }
    }
    , Ht = class {
        constructor() {
            this.transitions = new Set,
            this.pendingOps = [],
            this.reset()
        }
        reset() {
            this.transitions.forEach((t=>{
                clearTimeout(t),
                this.transitions.delete(t)
            }
            )),
            this.flushPendingOps()
        }
        after(t) {
            0 === this.size() ? t() : this.pushPendingOp(t)
        }
        addTransition(t, e, n) {
            e();
            let i = setTimeout((()=>{
                this.transitions.delete(i),
                n(),
                0 === this.size() && this.flushPendingOps()
            }
            ), t);
            this.transitions.add(i)
        }
        pushPendingOp(t) {
            this.pendingOps.push(t)
        }
        size() {
            return this.transitions.size
        }
        flushPendingOps() {
            this.pendingOps.forEach((t=>t())),
            this.pendingOps = []
        }
    }
    , Bt = n(16), qt = n(27), Vt = n.n(qt), zt = n(17), Wt = n(8);
    let Jt;
    var Yt = {
        hook: {
            mounted() {
                Xt.call(this),
                Zt(this.el)
            },
            updated() {
                Zt(this.el)
            }
        }
    };
    function Gt(t) {
        t.preventDefault(),
        t.stopPropagation(),
        this.el.disabled = !0;
        const e = this.el.dataset
          , {clickDisableText: n, phxClick: i} = e;
        null !== n && (this.el.innerText = n);
        const r = {};
        for (const t in e) {
            const n = t.split("phxValue");
            if ("" == n[0] && 2 == n.length) {
                r[n[1].charAt(0).toLowerCase() + n[1].slice(1)] = e[t]
            }
        }
        this.pushEvent(i, r)
    }
    function Xt() {
        this.el.addEventListener("click", Gt.bind(this))
    }
    const Zt = t=>{
        const {disableAtText: e, disableAt: n} = t.dataset;
        if (null !== e && null !== n && null !== Jt) {
            clearTimeout(Jt);
            const i = Math.max(0, n - Date.now());
            i > 0 && (Jt = setTimeout((()=>{
                t.disabled = !0,
                t.innerText = e
            }
            ), i))
        }
    }
      , Kt = t=>{
        t.setAttribute("value", t.value)
    }
    ;
    function Qt(t, e) {
        return t.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, e)
    }
    function te(t, {prefix: e, suffix: n, separator: i, decimalPlaces: r, max: o, isAutoFixDecimalPlaces: s, isAutoFixDecimalPlacesIfPresent: a, dynamicColor: c, dynamicSize: u, skipEmptyValidation: l, setEmptyToZero: h, previousValue: f}, d) {
        let p = t.value;
        if ("" === p && l)
            return;
        let g = t.selectionStart;
        if (t.previousValue === e + "0" && (p.match(/\$[0-9]0\b/) || p.length > t.previousValue.length + 1)) {
            const t = p.lastIndexOf("0");
            p = p.slice(0, t) + p.slice(t + 1)
        } else if (t.previousValue === "0" + n && p.match(/\b(?<!0\.)[1-9]\d*0\sBTC\b/)) {
            const t = p.lastIndexOf("0");
            p = p.slice(0, t) + p.slice(t + 1)
        }
        const m = p.length;
        if (p.indexOf(".") >= 0) {
            const t = p.indexOf(".");
            let o = p.substring(0, t)
              , c = p.substring(t);
            o = Qt(o, i),
            o = o.replace(/^0/, ""),
            h && "" === o && (o = "0"),
            o = Qt(o, i),
            c = Qt(c, ""),
            "blur" === d && (s || a && ee(p)) && (c += "0".repeat(r)),
            c = c.substring(0, r),
            p = e + o + "." + c + n
        } else
            p = Qt(p, i),
            p = p.replace(/^0+/, ""),
            h && "" === p && (p = "0"),
            p = Qt(p, i),
            p = e + p + n,
            "blur" === d && (s ? p = p + "." + "0".repeat(r) : a && ee(p) && (p += "0".repeat(r)));
        if (t.value = function(t, e, n, i) {
            const r = t.replace(/[^\d^\.]/g, "");
            return parseFloat(r) > i ? t.slice(0, i.toString().length) : t
        }(p, 0, 0, o),
        "blur" !== d) {
            g = p.length - m + g,
            t.setSelectionRange(g, g)
        }
        c && ne(t),
        u && ie(t),
        t.previousValue = t.value
    }
    function ee(t) {
        return /\.\d{0,2}/.test(t)
    }
    function ne(t) {
        if (t.readOnly)
            t.classList.add("text-gray-60");
        else {
            0 == +t.value.replace(/[^\d^\.]/g, "") ? t.classList.add("text-gray-315") : t.classList.add("text-gold-500")
        }
    }
    function ie(t) {
        t.clientWidth > 0 ? re(t) : setTimeout((()=>{
            re(t)
        }
        ), 50)
    }
    function re(t) {
        t.style.fontSize = "64px";
        for (var e, n = parseInt(t.style.fontSize); n > 0 && t.clientWidth > 0 && function(t) {
            const e = document.createElement("div");
            e.style.position = "absolute",
            e.style.visibility = "hidden",
            e.style.whiteSpace = "nowrap",
            e.style.left = "-9999px",
            e.style.fontSize = t.style.fontSize,
            e.style.color = t.style.color,
            e.innerText = t.value,
            document.body.appendChild(e);
            const n = parseInt(window.getComputedStyle(e).width);
            return document.body.removeChild(e),
            n
        }(e = t) + e.getBoundingClientRect().width / 10 > t.clientWidth; )
            n -= 4,
            t.style.fontSize = n.toString() + "px"
    }
    var oe = ({prefix: t, suffix: e="", separator: n, decimalPlaces: i, max: r, isSyncValueAttribute: o=!1, isAutoFixDecimalPlaces: s=!0, isAutoFixDecimalPlacesIfPresent: a=!1, dynamicColor: c=!1, dynamicSize: u=!1, skipEmptyValidation: l=!0, setEmptyToZero: h=!1, previousValue: f=""})=>{
        const d = {
            prefix: t,
            suffix: e,
            separator: n,
            decimalPlaces: i,
            max: r,
            isAutoFixDecimalPlaces: s,
            isAutoFixDecimalPlacesIfPresent: a,
            dynamicColor: c,
            dynamicSize: u,
            skipEmptyValidation: l,
            setEmptyToZero: h,
            previousValue: f
        };
        return {
            mounted() {
                const t = this.el;
                this.el.previousValue = "$0",
                te(t, d, "blur"),
                t.addEventListener("input", (e=>{
                    224 !== e.keyCode && (te(t, d, null),
                    o && Kt(t))
                }
                )),
                t.addEventListener("blur", (()=>te(t, d, "blur"))),
                c && ne(t),
                u && ie(t)
            },
            updated() {
                (t && "" !== this.el.value && !this.el.value.startsWith(t) || e && "" !== this.el.value && !this.el.value.endsWith(e)) && te(this.el, d, "blur"),
                c && ne(this.el),
                u && ie(this.el)
            }
        }
    }
    ;
    var se = {
        hook: oe({
            prefix: "",
            separator: "",
            decimalPlaces: 8,
            max: 1e4
        })
    }
      , ae = {
        hook: oe({
            prefix: "",
            separator: "",
            decimalPlaces: 8,
            isSyncValueAttribute: !0,
            isAutoFixDecimalPlaces: !1
        })
    };
    var ce = {
        hook: oe({
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
      , ue = n(32)
      , le = {
        hook: {
            mounted() {
                he(this.el)
            }
        },
        init: function() {
            document.querySelectorAll(".js-delegate-click").forEach(he)
        }
    };
    function he(t) {
        t.addEventListener("click", (function() {
            const e = t.getAttribute("data-target");
            if (e) {
                e.split(",").forEach((t=>{
                    const e = document.querySelectorAll(t)
                      , n = Array.from(e).filter((t=>null !== t.offsetParent)).pop();
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
    const fe = "modal-is-visible";
    let de = !1;
    var pe = {
        hook: {
            mounted() {
                de || (document.addEventListener("keydown", me),
                de = !0),
                ge(this.el)
            },
            updated() {
                ge(this.el)
            },
            destroyed() {
                document.querySelector("body").classList.remove(fe)
            }
        }
    };
    function ge(t) {
        const e = document.querySelector("body");
        t.classList.contains("c-modal--visible") ? e.classList.add(fe) : e.classList.remove(fe)
    }
    const me = t=>{
        "Escape" === t.key && [...document.getElementsByClassName("c-modal__overlay")].forEach((t=>t.click()))
    }
    ;
    var ve = n(26)
      , _e = n(33);
    var ye = {
        hook: oe({
            prefix: "",
            separator: "",
            decimalPlaces: 2,
            max: 999999999
        })
    };
    var be = {
        hook: oe({
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
      , xe = {
        hook: oe({
            prefix: "",
            isAutoFixDecimalPlaces: !1,
            separator: "",
            decimalPlaces: 2,
            max: 100
        })
    }
      , we = n(34)
      , ke = function(t, e, n, i, r) {
        if (window.gtag)
            switch (window.gtag("event", e, {
                event_category: t,
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
      , Ee = {
        hook: {
            mounted: function() {
                const {trackingCategory: t, trackingAction: e, trackingName: n, trackingTxid: i, trackingValue: r} = this.el.dataset
                  , o = parseFloat(r);
                ke(t, e, n, i, o)
            },
            deadViewCompatible: !0
        }
    };
    let Se;
    var Ae = {
        hook: {
            mounted() {
                Ce(this.el, !1)
            },
            updated() {
                clearTimeout(Se),
                Ce(this.el, !0)
            }
        }
    };
    const Ce = (t,e)=>{
        const n = t.dataset.priceExpiresAt
          , [i] = t.getElementsByClassName(t.dataset.countClass)
          , [r] = t.getElementsByClassName(t.dataset.counterLeftClass)
          , [o] = t.getElementsByClassName(t.dataset.counterRightClass)
          , s = e ? 50 : 0
          , a = Math.max(0, n - Date.now())
          , c = Math.max(0, a - s);
        if (r.style.animationDuration = `${c}ms`,
        o.style.animationDuration = `${c}ms`,
        i.innerText = Math.ceil(a / 1e3),
        Te(i, a),
        a > 0) {
            const e = t.dataset.counterRunAnimationClass;
            t.classList.remove(e),
            Se = setTimeout((()=>{
                t.classList.add(e)
            }
            ), s)
        }
    }
      , Te = (t,e)=>{
        if (!(e <= 0)) {
            const n = Math.min(e, 1e3);
            Se = setTimeout((()=>{
                const i = e - n;
                t.innerText = Math.ceil(i / 1e3),
                Te(t, i)
            }
            ), n)
        }
    }
      , Le = {};
    var Me = {
        hook: {
            updated() {
                Oe(this.el, Le)
            },
            destroyed() {
                clearTimeout(Le[this.el.id])
            }
        }
    };
    const Oe = (t,e)=>{
        const {blinkColor: n, color: i} = t.dataset;
        t.style.color = n,
        e[t.id] = setTimeout((()=>{
            t.style.color = i
        }
        ), 500)
    }
      , Pe = t=>{
        const e = t.keyCode;
        return e >= 48 && e <= 57 || e >= 96 && e <= 105
    }
    ;
    var Ne = {
        hook: {
            mounted() {
                const t = this.el;
                let e = !0;
                const {"currentSsnLast-4": n} = t.dataset;
                n && (De(t, n),
                t.addEventListener("blur", (()=>{
                    e && De(t, n)
                }
                )),
                t.addEventListener("focus", (()=>{
                    e && (t.value = "")
                }
                )),
                t.addEventListener("change", (()=>{
                    e = !1
                }
                ))),
                t.addEventListener("keydown", (t=>{
                    (t.shiftKey || !Pe(t) && !je(t)) && t.preventDefault()
                }
                ))
            }
        }
    };
    const je = t=>[8, 46, 37, 39].includes(t.keyCode)
      , De = (t,e)=>{
        t.value = `*** - ** - ${e}`
    }
    ;
    var Re = {
        hook: {
            mounted() {
                const t = this.el;
                Ie(t),
                t.addEventListener("keydown", (t=>{
                    Pe(t) || $e(t) || 65 == t.keyCode || t.preventDefault()
                }
                )),
                t.addEventListener("keyup", (t=>{
                    $e(t) || Ie(t.target)
                }
                ))
            }
        }
    };
    const $e = t=>[8, 46, 37, 39, 224, 17, 16].includes(t.keyCode)
      , Ie = t=>{
        const e = t.value.replace(/\D/g, "")
          , n = e.substring(0, 3)
          , i = e.slice(3, 15)
          , r = e.length;
        t.value = r > 3 ? `(${n}) ${i}` : r > 0 ? `(${n}` : ""
    }
    ;
    var Ue = n(20)
      , Fe = {
        hook: {
            mounted() {
                this.el.addEventListener("click", (t=>{
                    window.scrollTo(0, 0)
                }
                ))
            }
        }
    };
    const He = {
        AutoDisableButton: Yt.hook,
        BtcInput: se.hook,
        BTCWithdrawalInput: ae.hook,
        BTCWithdrawalInputWithSuffix: ce.hook,
        CopyToClipboard: ue.a.hook,
        DelegateClick: le.hook,
        Modal: pe.hook,
        Plaid: ve.a.hook,
        PlaidOAuth: ve.a.hookOAuth,
        Share: _e.a.hook,
        UsdInput: ye.hook,
        UsdInputWithPrefix: be.hook,
        PercentageInput: xe.hook,
        Dropdown: we.a.hook,
        TrackingEvent: Ee.hook,
        AnimatedCounter: Ae.hook,
        BlinkTextOnChange: Me.hook,
        SsnInput: Ne.hook,
        PhoneNumberInput: Re.hook,
        ScrollToTop: Fe.hook
    };
    e.a = {
        init: function() {
            if (window.liveSocket)
                return window.liveSocket;
            const t = Object(Wt.a)("channel_token")
              , e = t ? function(t) {
                const e = new Ft("/live",Bt.a,{
                    dom: {
                        onBeforeElUpdated(t, e) {
                            t._x_dataStack && window.Alpine.clone(t, e)
                        }
                    },
                    hooks: He,
                    params: {
                        channel_token: t,
                        _csrf_token: Be()
                    }
                });
                return e
            }(t) : function() {
                const t = new Ft("/live",Bt.a,{
                    dom: {
                        onBeforeElUpdated(t, e) {
                            t._x_dataStack && window.Alpine.clone(t, e)
                        }
                    },
                    hooks: He,
                    params: {
                        _csrf_token: Be()
                    }
                });
                return t
            }();
            return Vt.a.configure({
                showSpinner: !1
            }),
            window.addEventListener("phx:page-loading-start", (t=>Vt.a.start())),
            window.addEventListener("phx:page-loading-stop", (t=>Vt.a.done())),
            e.socket.onError((function() {
                const t = document.querySelectorAll("meta[name='csrf-token'][csrf-param='_csrf_token']").length;
                zt.a({
                    message: "Failed to connect liveview websocket",
                    extra: {
                        csrfToken: Be(),
                        totalCsrfTokenTagCount: t
                    },
                    level: "debug"
                })
            }
            )),
            e.connect(),
            window.liveSocket = e,
            window.Alpine = Ue.a,
            e.boundTopLevelEvents || [...document.querySelectorAll("[phx-hook]")].map((t=>{
                let e = t.getAttribute("phx-hook")
                  , n = He[e];
                if (n.deadViewCompatible) {
                    n.mounted.bind(Object.assign(Object.assign({}, n), {
                        el: t
                    }))()
                }
            }
            )),
            e
        },
        get: ()=>window.liveSocket
    };
    const Be = ()=>document.querySelector("meta[name='csrf-token']").getAttribute("content")
}
, function(t, e, n) {
    "use strict";
    var i = n(0)
      , r = n(23)
      , o = n(3)
      , s = n(1)
      , a = n.n(s);
    var c = n(14);
    n.d(e, "a", (function() {
        return m
    }
    ));
    var u = function(t, e, n, i) {
        return new (n || (n = Promise))((function(r, o) {
            function s(t) {
                try {
                    c(i.next(t))
                } catch (t) {
                    o(t)
                }
            }
            function a(t) {
                try {
                    c(i.throw(t))
                } catch (t) {
                    o(t)
                }
            }
            function c(t) {
                var e;
                t.done ? r(t.value) : (e = t.value,
                e instanceof n ? e : new n((function(t) {
                    t(e)
                }
                ))).then(s, a)
            }
            c((i = i.apply(t, e || [])).next())
        }
        ))
    };
    const l = {
        day: "%-I %p",
        week: "%a %-d",
        year: "%b",
        month: "%-d"
    }
      , h = {
        week: i.a.timeDay.every(1),
        month: i.a.timeDay.every(1),
        year: i.a.timeMonth.every(1)
    };
    function f(t) {
        return h[t]
    }
    function d() {
        const t = Object(c.b)().getBoundingClientRect();
        return {
            height: t.height,
            width: t.width,
            margin: {
                top: 100,
                right: 0,
                bottom: 48,
                left: 0
            },
            areaHeight: t.height
        }
    }
    function p() {
        const t = d();
        return {
            x: t.width - t.margin.right - 34,
            y: t.margin.top / 2
        }
    }
    function g() {
        const t = d();
        return Object(o.f)() ? {
            x: t.margin.left,
            y: t.margin.top / .98,
            leftReference: !0
        } : {
            x: t.width - 16,
            y: t.margin.top / 2 + 28,
            leftReference: !1
        }
    }
    const m = ({data: t, buttons: e, timeFrame: n})=>u(void 0, void 0, void 0, (function*() {
        Object(c.a)();
        const {height: s, width: u, margin: h} = d()
          , m = i.a.scaleUtc().domain(i.a.extent(t.chart, (t=>t.date))).range([h.left, u - h.right])
          , v = (i.a.scaleLinear().domain([i.a.min(t.chart, (t=>t.value)), i.a.max(t.chart, (t=>t.value))]).nice().range([s - h.bottom, h.top]),
        i.a.axisBottom(m).ticks().tickFormat(function(t) {
            const e = l[t];
            return e ? i.a.timeFormat(e) : null
        }(n)).tickArguments([f(n)]).tickSizeOuter(0))
          , _ = Object(c.d)({
            data: t,
            layout: d(),
            timeFrame: n,
            tooltipConfig: {
                position: g(),
                fontSize: 12,
                unitsType: "USD"
            }
        });
        _.append("g").call((t=>{
            t.attr("transform", `translate(0,${s - h.bottom})`).style("color", "transparent").call(v),
            t.selectAll("text").attr("font-size", "1.2em").attr("font-weight", a.a.fontWeightNormal).style("color", a.a.neutral300).attr("dy", 16).attr("font-family", "Inter"),
            t.selectAll("line")
        }
        )),
        function({element: t, config: e, price: n, firstPrice: i}) {
            const {position: {x: r, y: s}} = e
              , c = t.append("g").attr("transform", `translate(${r},${s})`).attr("font-weight", a.a.fontWeightNormal).attr("letter-spacing", "0.5px")
              , u = t.append("g").attr("transform", `translate(${r},${s + 32})`).attr("font-weight", a.a.fontWeightNormal);
            c.append("text").attr("fill", a.a.neutral300).text("Bitcoin Price");
            const l = u.append("text").attr("fill", a.a.neutral50).text(Object(o.e)(n, "USD")).attr("font-size", "1.25em").node().getBBox().width;
            let h, f, d;
            const p = n - i;
            h = Object(o.e)(p, "USD");
            const g = Object(o.d)(p, i);
            p < 0 ? (h = `${h} (${g}%)`,
            f = a.a.redLight,
            d = o.a) : (h = `+${h} (${g}%)`,
            f = a.a.green,
            d = o.b);
            const m = u.append("text").attr("dx", l + 20).style("fill", f).text(h).attr("font-size", "0.8em").node().getBBox().width;
            u.append("svg").attr("x", m + l + 23).attr("y", -10).attr("viewBox", "0 0 4 6").attr("width", "10").attr("height", "10").append("path").attr("d", d).attr("fill", f)
        }({
            element: _,
            config: {
                position: {
                    x: 24,
                    y: d().margin.top / 3
                }
            },
            price: t.price,
            firstPrice: t.chart[0].value
        }),
        Object(r.a)({
            element: _,
            config: {
                position: p(),
                leftReference: !1
            },
            buttons: e
        })
    }
    ))
}
, , , , , , , , , , , , , function(t, e, n) {
    t.exports = n(70)
}
, function(t, e, n) {
    t.exports = {
        fontWeightNormal: "400",
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
, , , , , , , , , , , , , , function(t, e, n) {
    "use strict";
    n.r(e);
    n(56);
    var i = n(40)
      , r = function() {
        const t = o()
          , e = document.querySelector(".js-nav-wrapper")
          , n = document.querySelector(".js-nav");
        window.onscroll = function(t) {
            var n;
            (n = e) && (n.style["background-color"] = "rgba(20, 20, 21, 1)",
            n.style["box-shadow"] = "0px 0px 1px 0px rgba(255, 255, 255, 0)")
        }
        ,
        n && n.addEventListener("click", (function() {
            !function(t) {
                t || (t = o());
                t.classList.contains("c-nav-marketing--show-responsive-menu") ? t.classList.remove("c-nav-marketing--show-responsive-menu") : t.classList.add("c-nav-marketing--show-responsive-menu")
            }(t)
        }
        )),
        Object(i.a)({
            hitSelector: ".js-nav-marketing-dropdown",
            revealSelector: ".js-nav-marketing-menu"
        })
    };
    function o() {
        return document.querySelector(".c-nav-content")
    }
    var s = function() {
        if (!document.getElementsByClassName("c-about")[0])
            return;
        document.querySelectorAll(".c-about__card-read-more").forEach(l)
    };
    let a, c, u;
    function l(t) {
        t.addEventListener("click", (e=>{
            const n = t.parentElement.parentElement
              , i = n.nextElementSibling;
            if (h(),
            c === i)
                return c = null,
                void (a = null);
            t.classList.add("c-about__card-read-more--active"),
            n.classList.add("c-about__card--active"),
            i.classList.add("c-about__card-bio--is-visible"),
            c = i,
            a = n,
            u = i.getElementsByClassName("c-about__close-button")[0],
            u.addEventListener("click", (()=>{
                h(),
                c = null,
                a = null
            }
            ))
        }
        ))
    }
    function h() {
        if (c && a) {
            c.classList.remove("c-about__card-bio--is-visible"),
            a.classList.remove("c-about__card--active");
            a.getElementsByClassName("c-about__card-read-more")[0].classList.remove("c-about__card-read-more--active")
        }
    }
    var f = n(0)
      , d = n(1)
      , p = n.n(d);
    function g(t, e, n, i) {
        const r = t.append("g").on("mouseenter", (function() {
            if (!i) {
                f.a.select(this).selectAll("text").transition().attr("fill", "white").attr("font-weight", 700)
            }
        }
        )).on("mouseleave", (function() {
            if (!i) {
                f.a.select(this).selectAll("text").transition().attr("fill", p.a.blueLight).attr("font-weight", 500)
            }
        }
        )).on("click", (function() {
            n()
        }
        ))
          , o = function(t, e, n) {
            return t.append("text").attr("fill", n ? "white" : p.a.blueLight).attr("font-weight", 500).text(e)
        }(r, e, i)
          , s = function(t, e, n) {
            return t.append("path").attr("fill", "#202742").attr("opacity", n ? 1 : 0).attr("d", function(t, e, n, i, r) {
                return `\n    M ${t} ${-9}\n    a ${r} ${r} 0 0 1 ${r} ${r}\n    v ${i}\n    a ${r} ${r} 0 0 1 -${r} ${r}\n    h -${n}\n    a ${r} ${r} 0 0 1 -${r} -${r}\n    v -${i}\n    a ${r} ${r} 0 0 1 ${r} -${r}\n    z\n  `
            }(e, 0, e, 0, 7))
        }(r, o.node().getBBox().width, i).lower();
        return s.lower(),
        r
    }
    const m = ({element: t, config: e, buttons: n})=>{
        const {position: {x: i, y: r}} = e
          , o = function(t, e, n) {
            return t.append("g").attr("font-size", "6px").attr("font-weight", 500).attr("fill", p.a.blueLight).attr("transform", `translate(${e}, ${n})`).style("cursor", "pointer").style("user-select", "none")
        }(t, i, r);
        return n.map(((t,e)=>{
            const n = g(o, t.label, t.onClick, t.active);
            e > 0 && n.attr("transform", `translate(${30 * -e})`)
        }
        )),
        o
    }
    ;
    var v = n(11)
      , _ = n(14)
      , y = n(3)
      , b = function(t, e, n, i) {
        return new (n || (n = Promise))((function(r, o) {
            function s(t) {
                try {
                    c(i.next(t))
                } catch (t) {
                    o(t)
                }
            }
            function a(t) {
                try {
                    c(i.throw(t))
                } catch (t) {
                    o(t)
                }
            }
            function c(t) {
                var e;
                t.done ? r(t.value) : (e = t.value,
                e instanceof n ? e : new n((function(t) {
                    t(e)
                }
                ))).then(s, a)
            }
            c((i = i.apply(t, e || [])).next())
        }
        ))
    };
    const x = {
        height: 309,
        width: 300,
        margin: {
            top: 0,
            right: 0,
            bottom: 35,
            left: 0
        },
        areaHeight: 279
    }
      , w = {
        height: 369,
        width: 800,
        margin: {
            top: 100,
            right: 70,
            bottom: 35,
            left: 0
        },
        areaHeight: 339
    }
      , k = {
        day: "%-I %p",
        week: "%a %-d",
        year: "%b",
        month: "%-d"
    }
      , E = {
        week: f.a.timeDay.every(1),
        month: f.a.timeDay.every(2),
        year: f.a.timeMonth.every(1)
    };
    function S(t) {
        const e = k[t];
        return e ? f.a.timeFormat(e) : null
    }
    function A(t) {
        return E[t]
    }
    const C = ({data: t, buttons: e, timeFrame: n})=>b(void 0, void 0, void 0, (function*() {
        Object(_.a)();
        const {height: i, width: r, margin: o, areaHeight: s} = x
          , a = f.a.scaleUtc().domain(f.a.extent(t.chart, (t=>t.date))).range([o.left + 10, 290 - o.right])
          , c = f.a.axisBottom(a).ticks().tickFormat(S(n)).tickArguments([A(n)]);
        Object(_.d)({
            data: t,
            layout: x,
            timeFrame: n,
            tooltipConfig: {
                position: {
                    x: 13,
                    y: 20,
                    leftReference: !0
                },
                fontSize: 10,
                isMobile: !0,
                unitsType: "USD"
            },
            version: 2
        }).append("g").call((t=>{
            t.attr("transform", `translate(0,${s})`).style("color", "transparent").call(c),
            t.selectAll("text").attr("font-size", "6pt").attr("font-weight", 500).style("color", p.a.blueLight).attr("dy", 16),
            t.selectAll("line").attr("display", "none")
        }
        ));
        const u = f.a.select("#priceChartSelectButton");
        u.selectAll("option").data(e).enter().append("option").text((function(t) {
            return t.label
        }
        )).attr("value", (function(t) {
            return t.label
        }
        )).text((function(t) {
            return t.label
        }
        )).property("selected", (function(t) {
            return "1Y" === t.label
        }
        )),
        u.on("change", (function(t) {
            const n = f.a.select(this).property("value");
            e.forEach((function(t) {
                t.label == n && t.onClick()
            }
            ))
        }
        ))
    }
    ))
      , T = ({data: t, buttons: e, timeFrame: n})=>b(void 0, void 0, void 0, (function*() {
        Object(_.a)();
        const {height: i, width: r, margin: o, areaHeight: s} = w
          , a = Object(v.b)(t, w)
          , c = Object(v.c)(t, w)
          , u = f.a.axisBottom(a).ticks().tickFormat(S(n)).tickArguments([A(n)])
          , l = f.a.axisRight(c).ticks(5).tickFormat((t=>`$ ${Number(t.toFixed(1)).toLocaleString()}`))
          , h = Object(_.d)({
            data: t,
            layout: w,
            timeFrame: n,
            tooltipConfig: {
                position: (d = w,
                {
                    x: 660,
                    y: d.margin.top / 2 + 28,
                    leftReference: !1
                }),
                fontSize: 10,
                unitsType: "USD"
            },
            version: 2
        });
        var d;
        h.append("g").call((t=>{
            t.attr("transform", `translate(0,${s})`).style("color", "transparent").call(u),
            t.selectAll("text").attr("font-size", "6pt").attr("font-weight", 500).style("color", p.a.blueLight).attr("dy", 16),
            t.selectAll("line").attr("display", "none")
        }
        )),
        h.append("g").call((t=>{
            t.attr("transform", "translate(725, 5)").style("color", "transparent").call(l),
            t.selectAll("text").attr("font-size", "6pt").attr("font-weight", 500).style("color", p.a.blueLight).attr("dx", 16),
            t.selectAll("line")
        }
        )),
        function({element: t, config: e, price: n, firstPrice: i}) {
            const {position: {x: r, y: o}} = e
              , s = t.append("g").attr("transform", `translate(${r},${o})`).attr("letter-spacing", "0.5px")
              , a = t.append("g").attr("transform", `translate(${r},${o + 25})`).attr("font-weight", p.a.fontWeightMedium);
            s.append("text").attr("fill", p.a.blueLight).text("Bitcoin Price").attr("fill", "#4B5066").attr("font-size", ".7em");
            const c = a.append("text").attr("fill", "white").text(Object(y.e)(n, "USD")).attr("font-size", "1.2em").node().getBBox().width;
            let u, l, h;
            const f = n - i;
            u = Object(y.e)(f, "USD");
            const d = Object(y.d)(f, i);
            f < 0 ? (u = `${u} (${d}%)`,
            l = p.a.redLight,
            h = y.a) : (u = `+${u} (${d}%)`,
            l = p.a.green,
            h = y.b);
            const g = a.append("text").attr("dx", c + 5).style("fill", l).text(u).attr("font-size", "0.8em").node().getBBox().width;
            a.append("svg").attr("x", g + c + 8).attr("y", -10).attr("viewBox", "0 0 4 6").attr("width", "10").attr("height", "10").append("path").attr("d", h).attr("fill", l)
        }({
            element: h,
            config: {
                position: {
                    x: 140,
                    y: o.top / 2
                }
            },
            price: t.price,
            firstPrice: t.chart[0].value
        }),
        m({
            element: h,
            config: {
                position: {
                    x: 650,
                    y: o.top / 2
                }
            },
            buttons: e
        })
    }
    ));
    var L = n(42);
    var M = function() {
        null != document.querySelector(".c-time-series-chart-container") && O("YEAR")
    };
    function O(t) {
        Object(_.c)();
        const e = {
            query: `query {\n      chartPrices(timeFrame:${t}) {\n        datetime\n        rate\n      }\n      currentPrice {\n          mid\n        }\n    }`
        }
          , n = new XMLHttpRequest;
        n.responseType = "json",
        n.open("POST", "/api", !0),
        n.setRequestHeader("Content-Type", "application/json"),
        n.onload = function() {
            !function({data: t, errors: e}, n) {
                if (e)
                    return void e.forEach((function(t) {
                        console.error("Error rendering price chart:", t.message)
                    }
                    ));
                const i = t.currentPrice.mid
                  , r = new Intl.NumberFormat("en-US",{
                    style: "currency",
                    currency: "USD"
                }).format(i);
                [...document.getElementsByClassName("js-nav-price")].forEach((t=>{
                    "P" === t.tagName && (t.innerHTML = r)
                }
                )),
                function(t, e) {
                    const n = t.chartPrices.reverse();
                    e = e.toLowerCase(),
                    Object(_.e)();
                    const i = window.matchMedia("(min-width: 768px)")
                      , r = {
                        data: {
                            chart: P(n),
                            price: t.currentPrice.mid
                        },
                        timeFrame: e,
                        buttons: [{
                            label: "ALL",
                            active: "all" === e,
                            onClick: ()=>O("ALL")
                        }, {
                            label: "1Y",
                            active: "year" === e,
                            onClick: ()=>O("YEAR")
                        }, {
                            label: "1M",
                            active: "month" === e,
                            onClick: ()=>O("MONTH")
                        }, {
                            label: "1W",
                            active: "week" === e,
                            onClick: ()=>O("WEEK")
                        }, {
                            label: "24H",
                            active: "day" === e,
                            onClick: ()=>O("DAY")
                        }]
                    };
                    function o(t) {
                        t.matches ? T(r) : C(r)
                    }
                    document.querySelector(".js-chartv1") ? Object(L.a)(r) : (i.addEventListener("change", o),
                    o(i))
                }(t, n)
            }(n.response, t)
        }
        ,
        n.send(JSON.stringify(e))
    }
    function P(t) {
        return t.map((t=>({
            date: new Date(t.datetime),
            value: parseFloat(t.rate)
        })))
    }
    var N = n(41);
    document.addEventListener("DOMContentLoaded", (()=>{
        N.a.init(),
        r(),
        s(),
        M()
    }
    ))
}
]);
//# sourceMappingURL=./public.js-cc6d8765177f368d1e46bfebb8b1ad75.map
