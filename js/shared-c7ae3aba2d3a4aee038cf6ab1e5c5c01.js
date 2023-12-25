/*! For license information please see shared.js.LICENSE.txt */
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
    n(n.s = 57)
}({
    0: function(t, e, n) {
        "use strict";
        var r = Math.PI
          , i = 2 * r
          , o = 1e-6
          , a = i - o;
        function s() {
            this._x0 = this._y0 = this._x1 = this._y1 = null,
            this._ = ""
        }
        function u() {
            return new s
        }
        s.prototype = u.prototype = {
            constructor: s,
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
            quadraticCurveTo: function(t, e, n, r) {
                this._ += "Q" + +t + "," + +e + "," + (this._x1 = +n) + "," + (this._y1 = +r)
            },
            bezierCurveTo: function(t, e, n, r, i, o) {
                this._ += "C" + +t + "," + +e + "," + +n + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +o)
            },
            arcTo: function(t, e, n, i, a) {
                t = +t,
                e = +e,
                n = +n,
                i = +i,
                a = +a;
                var s = this._x1
                  , u = this._y1
                  , c = n - t
                  , l = i - e
                  , f = s - t
                  , h = u - e
                  , d = f * f + h * h;
                if (a < 0)
                    throw new Error("negative radius: " + a);
                if (null === this._x1)
                    this._ += "M" + (this._x1 = t) + "," + (this._y1 = e);
                else if (d > o)
                    if (Math.abs(h * c - l * f) > o && a) {
                        var p = n - s
                          , _ = i - u
                          , v = c * c + l * l
                          , g = p * p + _ * _
                          , m = Math.sqrt(v)
                          , y = Math.sqrt(d)
                          , x = a * Math.tan((r - Math.acos((v + d - g) / (2 * m * y))) / 2)
                          , b = x / y
                          , w = x / m;
                        Math.abs(b - 1) > o && (this._ += "L" + (t + b * f) + "," + (e + b * h)),
                        this._ += "A" + a + "," + a + ",0,0," + +(h * p > f * _) + "," + (this._x1 = t + w * c) + "," + (this._y1 = e + w * l)
                    } else
                        this._ += "L" + (this._x1 = t) + "," + (this._y1 = e);
                else
                    ;
            },
            arc: function(t, e, n, s, u, c) {
                t = +t,
                e = +e,
                c = !!c;
                var l = (n = +n) * Math.cos(s)
                  , f = n * Math.sin(s)
                  , h = t + l
                  , d = e + f
                  , p = 1 ^ c
                  , _ = c ? s - u : u - s;
                if (n < 0)
                    throw new Error("negative radius: " + n);
                null === this._x1 ? this._ += "M" + h + "," + d : (Math.abs(this._x1 - h) > o || Math.abs(this._y1 - d) > o) && (this._ += "L" + h + "," + d),
                n && (_ < 0 && (_ = _ % i + i),
                _ > a ? this._ += "A" + n + "," + n + ",0,1," + p + "," + (t - l) + "," + (e - f) + "A" + n + "," + n + ",0,1," + p + "," + (this._x1 = h) + "," + (this._y1 = d) : _ > o && (this._ += "A" + n + "," + n + ",0," + +(_ >= r) + "," + p + "," + (this._x1 = t + n * Math.cos(u)) + "," + (this._y1 = e + n * Math.sin(u))))
            },
            rect: function(t, e, n, r) {
                this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e) + "h" + +n + "v" + +r + "h" + -n + "Z"
            },
            toString: function() {
                return this._
            }
        };
        var c = u
          , l = function(t) {
            return function() {
                return t
            }
        }
          , f = (Math.abs,
        Math.atan2,
        Math.cos,
        Math.max,
        Math.min,
        Math.sin,
        Math.sqrt,
        1e-12)
          , h = Math.PI
          , d = 2 * h;
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
        var _ = function(t) {
            return new p(t)
        };
        function v(t) {
            return t[0]
        }
        function g(t) {
            return t[1]
        }
        var m = function() {
            var t = v
              , e = g
              , n = l(!0)
              , r = null
              , i = _
              , o = null;
            function a(a) {
                var s, u, l, f = a.length, h = !1;
                for (null == r && (o = i(l = c())),
                s = 0; s <= f; ++s)
                    !(s < f && n(u = a[s], s, a)) === h && ((h = !h) ? o.lineStart() : o.lineEnd()),
                    h && o.point(+t(u, s, a), +e(u, s, a));
                if (l)
                    return o = null,
                    l + "" || null
            }
            return a.x = function(e) {
                return arguments.length ? (t = "function" == typeof e ? e : l(+e),
                a) : t
            }
            ,
            a.y = function(t) {
                return arguments.length ? (e = "function" == typeof t ? t : l(+t),
                a) : e
            }
            ,
            a.defined = function(t) {
                return arguments.length ? (n = "function" == typeof t ? t : l(!!t),
                a) : n
            }
            ,
            a.curve = function(t) {
                return arguments.length ? (i = t,
                null != r && (o = i(r)),
                a) : i
            }
            ,
            a.context = function(t) {
                return arguments.length ? (null == t ? r = o = null : o = i(r = t),
                a) : r
            }
            ,
            a
        }
          , y = function() {
            var t = v
              , e = null
              , n = l(0)
              , r = g
              , i = l(!0)
              , o = null
              , a = _
              , s = null;
            function u(u) {
                var l, f, h, d, p, _ = u.length, v = !1, g = new Array(_), m = new Array(_);
                for (null == o && (s = a(p = c())),
                l = 0; l <= _; ++l) {
                    if (!(l < _ && i(d = u[l], l, u)) === v)
                        if (v = !v)
                            f = l,
                            s.areaStart(),
                            s.lineStart();
                        else {
                            for (s.lineEnd(),
                            s.lineStart(),
                            h = l - 1; h >= f; --h)
                                s.point(g[h], m[h]);
                            s.lineEnd(),
                            s.areaEnd()
                        }
                    v && (g[l] = +t(d, l, u),
                    m[l] = +n(d, l, u),
                    s.point(e ? +e(d, l, u) : g[l], r ? +r(d, l, u) : m[l]))
                }
                if (p)
                    return s = null,
                    p + "" || null
            }
            function f() {
                return m().defined(i).curve(a).context(o)
            }
            return u.x = function(n) {
                return arguments.length ? (t = "function" == typeof n ? n : l(+n),
                e = null,
                u) : t
            }
            ,
            u.x0 = function(e) {
                return arguments.length ? (t = "function" == typeof e ? e : l(+e),
                u) : t
            }
            ,
            u.x1 = function(t) {
                return arguments.length ? (e = null == t ? null : "function" == typeof t ? t : l(+t),
                u) : e
            }
            ,
            u.y = function(t) {
                return arguments.length ? (n = "function" == typeof t ? t : l(+t),
                r = null,
                u) : n
            }
            ,
            u.y0 = function(t) {
                return arguments.length ? (n = "function" == typeof t ? t : l(+t),
                u) : n
            }
            ,
            u.y1 = function(t) {
                return arguments.length ? (r = null == t ? null : "function" == typeof t ? t : l(+t),
                u) : r
            }
            ,
            u.lineX0 = u.lineY0 = function() {
                return f().x(t).y(n)
            }
            ,
            u.lineY1 = function() {
                return f().x(t).y(r)
            }
            ,
            u.lineX1 = function() {
                return f().x(e).y(n)
            }
            ,
            u.defined = function(t) {
                return arguments.length ? (i = "function" == typeof t ? t : l(!!t),
                u) : i
            }
            ,
            u.curve = function(t) {
                return arguments.length ? (a = t,
                null != o && (s = a(o)),
                u) : a
            }
            ,
            u.context = function(t) {
                return arguments.length ? (null == t ? o = s = null : s = a(o = t),
                u) : o
            }
            ,
            u
        };
        b(_);
        function x(t) {
            this._curve = t
        }
        function b(t) {
            function e(e) {
                return new x(t(e))
            }
            return e._curve = t,
            e
        }
        x.prototype = {
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
        var w = Math.sin(h / 10) / Math.sin(7 * h / 10)
          , k = (Math.sin(d / 10),
        Math.cos(d / 10),
        Math.sqrt(3),
        Math.sqrt(3),
        Math.sqrt(12),
        function() {}
        );
        function T(t, e, n) {
            t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + e) / 6, (t._y0 + 4 * t._y1 + n) / 6)
        }
        function E(t) {
            this._context = t
        }
        E.prototype = {
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
                    T(this, this._x1, this._y1);
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
                    T(this, t, e)
                }
                this._x0 = this._x1,
                this._x1 = t,
                this._y0 = this._y1,
                this._y1 = e
            }
        };
        function M(t) {
            this._context = t
        }
        M.prototype = {
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
                    T(this, t, e)
                }
                this._x0 = this._x1,
                this._x1 = t,
                this._y0 = this._y1,
                this._y1 = e
            }
        };
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
                      , r = (this._y0 + 4 * this._y1 + e) / 6;
                    this._line ? this._context.lineTo(n, r) : this._context.moveTo(n, r);
                    break;
                case 3:
                    this._point = 4;
                default:
                    T(this, t, e)
                }
                this._x0 = this._x1,
                this._x1 = t,
                this._y0 = this._y1,
                this._y1 = e
            }
        };
        function C(t, e) {
            this._basis = new E(t),
            this._beta = e
        }
        C.prototype = {
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
                    for (var r, i = t[0], o = e[0], a = t[n] - i, s = e[n] - o, u = -1; ++u <= n; )
                        r = u / n,
                        this._basis.point(this._beta * t[u] + (1 - this._beta) * (i + r * a), this._beta * e[u] + (1 - this._beta) * (o + r * s));
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
                return 1 === e ? new E(t) : new C(t,e)
            }
            return n.beta = function(e) {
                return t(+e)
            }
            ,
            n
        }
        )(.85);
        function A(t, e, n) {
            t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - e), t._y2 + t._k * (t._y1 - n), t._x2, t._y2)
        }
        function N(t, e) {
            this._context = t,
            this._k = (1 - e) / 6
        }
        N.prototype = {
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
                    A(this, this._x1, this._y1)
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
                    A(this, t, e)
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
                return new N(t,e)
            }
            return n.tension = function(e) {
                return t(+e)
            }
            ,
            n
        }
        )(0);
        function j(t, e) {
            this._context = t,
            this._k = (1 - e) / 6
        }
        j.prototype = {
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
                    A(this, t, e)
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
                return new j(t,e)
            }
            return n.tension = function(e) {
                return t(+e)
            }
            ,
            n
        }
        )(0);
        function L(t, e) {
            this._context = t,
            this._k = (1 - e) / 6
        }
        L.prototype = {
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
                    A(this, t, e)
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
                return new L(t,e)
            }
            return n.tension = function(e) {
                return t(+e)
            }
            ,
            n
        }
        )(0);
        function O(t, e, n) {
            var r = t._x1
              , i = t._y1
              , o = t._x2
              , a = t._y2;
            if (t._l01_a > f) {
                var s = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a
                  , u = 3 * t._l01_a * (t._l01_a + t._l12_a);
                r = (r * s - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / u,
                i = (i * s - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / u
            }
            if (t._l23_a > f) {
                var c = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a
                  , l = 3 * t._l23_a * (t._l23_a + t._l12_a);
                o = (o * c + t._x1 * t._l23_2a - e * t._l12_2a) / l,
                a = (a * c + t._y1 * t._l23_2a - n * t._l12_2a) / l
            }
            t._context.bezierCurveTo(r, i, o, a, t._x2, t._y2)
        }
        function P(t, e) {
            this._context = t,
            this._alpha = e
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
                      , r = this._y2 - e;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + r * r, this._alpha))
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
                    O(this, t, e)
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
                return e ? new P(t,e) : new N(t,0)
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
                      , r = this._y2 - e;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + r * r, this._alpha))
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
                    O(this, t, e)
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
                return e ? new D(t,e) : new j(t,0)
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
                      , r = this._y2 - e;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + r * r, this._alpha))
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
                    O(this, t, e)
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
                return e ? new R(t,e) : new L(t,0)
            }
            return n.alpha = function(e) {
                return t(+e)
            }
            ,
            n
        }
        )(.5);
        function B(t) {
            this._context = t
        }
        B.prototype = {
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
        function $(t) {
            return t < 0 ? -1 : 1
        }
        function U(t, e, n) {
            var r = t._x1 - t._x0
              , i = e - t._x1
              , o = (t._y1 - t._y0) / (r || i < 0 && -0)
              , a = (n - t._y1) / (i || r < 0 && -0)
              , s = (o * i + a * r) / (r + i);
            return ($(o) + $(a)) * Math.min(Math.abs(o), Math.abs(a), .5 * Math.abs(s)) || 0
        }
        function H(t, e) {
            var n = t._x1 - t._x0;
            return n ? (3 * (t._y1 - t._y0) / n - e) / 2 : e
        }
        function F(t, e, n) {
            var r = t._x0
              , i = t._y0
              , o = t._x1
              , a = t._y1
              , s = (o - r) / 3;
            t._context.bezierCurveTo(r + s, i + s * e, o - s, a - s * n, o, a)
        }
        function I(t) {
            this._context = t
        }
        function z(t) {
            this._context = new q(t)
        }
        function q(t) {
            this._context = t
        }
        function Y(t) {
            this._context = t
        }
        function V(t) {
            var e, n, r = t.length - 1, i = new Array(r), o = new Array(r), a = new Array(r);
            for (i[0] = 0,
            o[0] = 2,
            a[0] = t[0] + 2 * t[1],
            e = 1; e < r - 1; ++e)
                i[e] = 1,
                o[e] = 4,
                a[e] = 4 * t[e] + 2 * t[e + 1];
            for (i[r - 1] = 2,
            o[r - 1] = 7,
            a[r - 1] = 8 * t[r - 1] + t[r],
            e = 1; e < r; ++e)
                n = i[e] / o[e - 1],
                o[e] -= n,
                a[e] -= n * a[e - 1];
            for (i[r - 1] = a[r - 1] / o[r - 1],
            e = r - 2; e >= 0; --e)
                i[e] = (a[e] - i[e + 1]) / o[e];
            for (o[r - 1] = (t[r] + i[r - 1]) / 2,
            e = 0; e < r - 1; ++e)
                o[e] = 2 * t[e + 1] - i[e + 1];
            return [i, o]
        }
        I.prototype = {
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
                    F(this, this._t0, H(this, this._t0))
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
                        F(this, H(this, n = U(this, t, e)), n);
                        break;
                    default:
                        F(this, this._t0, n = U(this, t, e))
                    }
                    this._x0 = this._x1,
                    this._x1 = t,
                    this._y0 = this._y1,
                    this._y1 = e,
                    this._t0 = n
                }
            }
        },
        (z.prototype = Object.create(I.prototype)).point = function(t, e) {
            I.prototype.point.call(this, e, t)
        }
        ,
        q.prototype = {
            moveTo: function(t, e) {
                this._context.moveTo(e, t)
            },
            closePath: function() {
                this._context.closePath()
            },
            lineTo: function(t, e) {
                this._context.lineTo(e, t)
            },
            bezierCurveTo: function(t, e, n, r, i, o) {
                this._context.bezierCurveTo(e, t, r, n, o, i)
            }
        },
        Y.prototype = {
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
                        for (var r = V(t), i = V(e), o = 0, a = 1; a < n; ++o,
                        ++a)
                            this._context.bezierCurveTo(r[0][o], i[0][o], r[1][o], i[1][o], t[a], e[a]);
                (this._line || 0 !== this._line && 1 === n) && this._context.closePath(),
                this._line = 1 - this._line,
                this._x = this._y = null
            },
            point: function(t, e) {
                this._x.push(+t),
                this._y.push(+e)
            }
        };
        function W(t, e) {
            this._context = t,
            this._t = e
        }
        W.prototype = {
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
        var G = Array.prototype.slice
          , X = function(t) {
            return t
        }
          , Z = 1e-6;
        function J(t) {
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
              , r = null
              , i = null
              , o = 6
              , a = 6
              , s = 3
              , u = 1 === t || 4 === t ? -1 : 1
              , c = 4 === t || 2 === t ? "x" : "y"
              , l = 1 === t || 3 === t ? J : K;
            function f(f) {
                var h = null == r ? e.ticks ? e.ticks.apply(e, n) : e.domain() : r
                  , d = null == i ? e.tickFormat ? e.tickFormat.apply(e, n) : X : i
                  , p = Math.max(o, 0) + s
                  , _ = e.range()
                  , v = +_[0] + .5
                  , g = +_[_.length - 1] + .5
                  , m = (e.bandwidth ? tt : Q)(e.copy())
                  , y = f.selection ? f.selection() : f
                  , x = y.selectAll(".domain").data([null])
                  , b = y.selectAll(".tick").data(h, e).order()
                  , w = b.exit()
                  , k = b.enter().append("g").attr("class", "tick")
                  , T = b.select("line")
                  , E = b.select("text");
                x = x.merge(x.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")),
                b = b.merge(k),
                T = T.merge(k.append("line").attr("stroke", "currentColor").attr(c + "2", u * o)),
                E = E.merge(k.append("text").attr("fill", "currentColor").attr(c, u * p).attr("dy", 1 === t ? "0em" : 3 === t ? "0.71em" : "0.32em")),
                f !== y && (x = x.transition(f),
                b = b.transition(f),
                T = T.transition(f),
                E = E.transition(f),
                w = w.transition(f).attr("opacity", Z).attr("transform", (function(t) {
                    return isFinite(t = m(t)) ? l(t) : this.getAttribute("transform")
                }
                )),
                k.attr("opacity", Z).attr("transform", (function(t) {
                    var e = this.parentNode.__axis;
                    return l(e && isFinite(e = e(t)) ? e : m(t))
                }
                ))),
                w.remove(),
                x.attr("d", 4 === t || 2 == t ? a ? "M" + u * a + "," + v + "H0.5V" + g + "H" + u * a : "M0.5," + v + "V" + g : a ? "M" + v + "," + u * a + "V0.5H" + g + "V" + u * a : "M" + v + ",0.5H" + g),
                b.attr("opacity", 1).attr("transform", (function(t) {
                    return l(m(t))
                }
                )),
                T.attr(c + "2", u * o),
                E.attr(c, u * p).text(d),
                y.filter(et).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", 2 === t ? "start" : 4 === t ? "end" : "middle"),
                y.each((function() {
                    this.__axis = m
                }
                ))
            }
            return f.scale = function(t) {
                return arguments.length ? (e = t,
                f) : e
            }
            ,
            f.ticks = function() {
                return n = G.call(arguments),
                f
            }
            ,
            f.tickArguments = function(t) {
                return arguments.length ? (n = null == t ? [] : G.call(t),
                f) : n.slice()
            }
            ,
            f.tickValues = function(t) {
                return arguments.length ? (r = null == t ? null : G.call(t),
                f) : r && r.slice()
            }
            ,
            f.tickFormat = function(t) {
                return arguments.length ? (i = t,
                f) : i
            }
            ,
            f.tickSize = function(t) {
                return arguments.length ? (o = a = +t,
                f) : o
            }
            ,
            f.tickSizeInner = function(t) {
                return arguments.length ? (o = +t,
                f) : o
            }
            ,
            f.tickSizeOuter = function(t) {
                return arguments.length ? (a = +t,
                f) : a
            }
            ,
            f.tickPadding = function(t) {
                return arguments.length ? (s = +t,
                f) : s
            }
            ,
            f
        }
        var rt = function(t, e) {
            return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
        }
          , it = function(t) {
            var e;
            return 1 === t.length && (e = t,
            t = function(t, n) {
                return rt(e(t), n)
            }
            ),
            {
                left: function(e, n, r, i) {
                    for (null == r && (r = 0),
                    null == i && (i = e.length); r < i; ) {
                        var o = r + i >>> 1;
                        t(e[o], n) < 0 ? r = o + 1 : i = o
                    }
                    return r
                },
                right: function(e, n, r, i) {
                    for (null == r && (r = 0),
                    null == i && (i = e.length); r < i; ) {
                        var o = r + i >>> 1;
                        t(e[o], n) > 0 ? i = o : r = o + 1
                    }
                    return r
                }
            }
        };
        var ot = it(rt)
          , at = ot.right
          , st = (ot.left,
        at);
        var ut = function(t, e) {
            let n, r;
            if (void 0 === e)
                for (const e of t)
                    null != e && (void 0 === n ? e >= e && (n = r = e) : (n > e && (n = e),
                    r < e && (r = e)));
            else {
                let i = -1;
                for (let o of t)
                    null != (o = e(o, ++i, t)) && (void 0 === n ? o >= o && (n = r = o) : (n > o && (n = o),
                    r < o && (r = o)))
            }
            return [n, r]
        };
        var ct = Array.prototype
          , lt = (ct.slice,
        ct.map,
        Math.sqrt(50))
          , ft = Math.sqrt(10)
          , ht = Math.sqrt(2)
          , dt = function(t, e, n) {
            var r, i, o, a, s = -1;
            if (n = +n,
            (t = +t) === (e = +e) && n > 0)
                return [t];
            if ((r = e < t) && (i = t,
            t = e,
            e = i),
            0 === (a = pt(t, e, n)) || !isFinite(a))
                return [];
            if (a > 0)
                for (t = Math.ceil(t / a),
                e = Math.floor(e / a),
                o = new Array(i = Math.ceil(e - t + 1)); ++s < i; )
                    o[s] = (t + s) * a;
            else
                for (t = Math.floor(t * a),
                e = Math.ceil(e * a),
                o = new Array(i = Math.ceil(t - e + 1)); ++s < i; )
                    o[s] = (t - s) / a;
            return r && o.reverse(),
            o
        };
        function pt(t, e, n) {
            var r = (e - t) / Math.max(0, n)
              , i = Math.floor(Math.log(r) / Math.LN10)
              , o = r / Math.pow(10, i);
            return i >= 0 ? (o >= lt ? 10 : o >= ft ? 5 : o >= ht ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (o >= lt ? 10 : o >= ft ? 5 : o >= ht ? 2 : 1)
        }
        function _t(t, e, n) {
            var r = Math.abs(e - t) / Math.max(0, n)
              , i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10))
              , o = r / i;
            return o >= lt ? i *= 10 : o >= ft ? i *= 5 : o >= ht && (i *= 2),
            e < t ? -i : i
        }
        function vt(t, e) {
            let n;
            if (void 0 === e)
                for (const e of t)
                    null != e && (n > e || void 0 === n && e >= e) && (n = e);
            else {
                let r = -1;
                for (let i of t)
                    null != (i = e(i, ++r, t)) && (n > i || void 0 === n && i >= i) && (n = i)
            }
            return n
        }
        function gt(t, e) {
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
        var mt = function(t, e, n) {
            t.prototype = e.prototype = n,
            n.constructor = t
        };
        function yt(t, e) {
            var n = Object.create(t.prototype);
            for (var r in e)
                n[r] = e[r];
            return n
        }
        function xt() {}
        var bt = .7
          , wt = 1 / bt
          , kt = "\\s*([+-]?\\d+)\\s*"
          , Tt = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*"
          , Et = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*"
          , Mt = /^#([0-9a-f]{3,8})$/
          , St = new RegExp("^rgb\\(" + [kt, kt, kt] + "\\)$")
          , Ct = new RegExp("^rgb\\(" + [Et, Et, Et] + "\\)$")
          , At = new RegExp("^rgba\\(" + [kt, kt, kt, Tt] + "\\)$")
          , Nt = new RegExp("^rgba\\(" + [Et, Et, Et, Tt] + "\\)$")
          , jt = new RegExp("^hsl\\(" + [Tt, Et, Et] + "\\)$")
          , Lt = new RegExp("^hsla\\(" + [Tt, Et, Et, Tt] + "\\)$")
          , Ot = {
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
        function Pt() {
            return this.rgb().formatHex()
        }
        function Dt() {
            return this.rgb().formatRgb()
        }
        function Rt(t) {
            var e, n;
            return t = (t + "").trim().toLowerCase(),
            (e = Mt.exec(t)) ? (n = e[1].length,
            e = parseInt(e[1], 16),
            6 === n ? Bt(e) : 3 === n ? new Ft(e >> 8 & 15 | e >> 4 & 240,e >> 4 & 15 | 240 & e,(15 & e) << 4 | 15 & e,1) : 8 === n ? $t(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (255 & e) / 255) : 4 === n ? $t(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, ((15 & e) << 4 | 15 & e) / 255) : null) : (e = St.exec(t)) ? new Ft(e[1],e[2],e[3],1) : (e = Ct.exec(t)) ? new Ft(255 * e[1] / 100,255 * e[2] / 100,255 * e[3] / 100,1) : (e = At.exec(t)) ? $t(e[1], e[2], e[3], e[4]) : (e = Nt.exec(t)) ? $t(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = jt.exec(t)) ? Yt(e[1], e[2] / 100, e[3] / 100, 1) : (e = Lt.exec(t)) ? Yt(e[1], e[2] / 100, e[3] / 100, e[4]) : Ot.hasOwnProperty(t) ? Bt(Ot[t]) : "transparent" === t ? new Ft(NaN,NaN,NaN,0) : null
        }
        function Bt(t) {
            return new Ft(t >> 16 & 255,t >> 8 & 255,255 & t,1)
        }
        function $t(t, e, n, r) {
            return r <= 0 && (t = e = n = NaN),
            new Ft(t,e,n,r)
        }
        function Ut(t) {
            return t instanceof xt || (t = Rt(t)),
            t ? new Ft((t = t.rgb()).r,t.g,t.b,t.opacity) : new Ft
        }
        function Ht(t, e, n, r) {
            return 1 === arguments.length ? Ut(t) : new Ft(t,e,n,null == r ? 1 : r)
        }
        function Ft(t, e, n, r) {
            this.r = +t,
            this.g = +e,
            this.b = +n,
            this.opacity = +r
        }
        function It() {
            return "#" + qt(this.r) + qt(this.g) + qt(this.b)
        }
        function zt() {
            var t = this.opacity;
            return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
        }
        function qt(t) {
            return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16)
        }
        function Yt(t, e, n, r) {
            return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN),
            new Wt(t,e,n,r)
        }
        function Vt(t) {
            if (t instanceof Wt)
                return new Wt(t.h,t.s,t.l,t.opacity);
            if (t instanceof xt || (t = Rt(t)),
            !t)
                return new Wt;
            if (t instanceof Wt)
                return t;
            var e = (t = t.rgb()).r / 255
              , n = t.g / 255
              , r = t.b / 255
              , i = Math.min(e, n, r)
              , o = Math.max(e, n, r)
              , a = NaN
              , s = o - i
              , u = (o + i) / 2;
            return s ? (a = e === o ? (n - r) / s + 6 * (n < r) : n === o ? (r - e) / s + 2 : (e - n) / s + 4,
            s /= u < .5 ? o + i : 2 - o - i,
            a *= 60) : s = u > 0 && u < 1 ? 0 : a,
            new Wt(a,s,u,t.opacity)
        }
        function Wt(t, e, n, r) {
            this.h = +t,
            this.s = +e,
            this.l = +n,
            this.opacity = +r
        }
        function Gt(t, e, n) {
            return 255 * (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e)
        }
        function Xt(t, e, n, r, i) {
            var o = t * t
              , a = o * t;
            return ((1 - 3 * t + 3 * o - a) * e + (4 - 6 * o + 3 * a) * n + (1 + 3 * t + 3 * o - 3 * a) * r + a * i) / 6
        }
        mt(xt, Rt, {
            copy: function(t) {
                return Object.assign(new this.constructor, this, t)
            },
            displayable: function() {
                return this.rgb().displayable()
            },
            hex: Pt,
            formatHex: Pt,
            formatHsl: function() {
                return Vt(this).formatHsl()
            },
            formatRgb: Dt,
            toString: Dt
        }),
        mt(Ft, Ht, yt(xt, {
            brighter: function(t) {
                return t = null == t ? wt : Math.pow(wt, t),
                new Ft(this.r * t,this.g * t,this.b * t,this.opacity)
            },
            darker: function(t) {
                return t = null == t ? bt : Math.pow(bt, t),
                new Ft(this.r * t,this.g * t,this.b * t,this.opacity)
            },
            rgb: function() {
                return this
            },
            displayable: function() {
                return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
            },
            hex: It,
            formatHex: It,
            formatRgb: zt,
            toString: zt
        })),
        mt(Wt, (function(t, e, n, r) {
            return 1 === arguments.length ? Vt(t) : new Wt(t,e,n,null == r ? 1 : r)
        }
        ), yt(xt, {
            brighter: function(t) {
                return t = null == t ? wt : Math.pow(wt, t),
                new Wt(this.h,this.s,this.l * t,this.opacity)
            },
            darker: function(t) {
                return t = null == t ? bt : Math.pow(bt, t),
                new Wt(this.h,this.s,this.l * t,this.opacity)
            },
            rgb: function() {
                var t = this.h % 360 + 360 * (this.h < 0)
                  , e = isNaN(t) || isNaN(this.s) ? 0 : this.s
                  , n = this.l
                  , r = n + (n < .5 ? n : 1 - n) * e
                  , i = 2 * n - r;
                return new Ft(Gt(t >= 240 ? t - 240 : t + 120, i, r),Gt(t, i, r),Gt(t < 120 ? t + 240 : t - 120, i, r),this.opacity)
            },
            displayable: function() {
                return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
            },
            formatHsl: function() {
                var t = this.opacity;
                return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "hsl(" : "hsla(") + (this.h || 0) + ", " + 100 * (this.s || 0) + "%, " + 100 * (this.l || 0) + "%" + (1 === t ? ")" : ", " + t + ")")
            }
        }));
        var Zt = function(t) {
            return function() {
                return t
            }
        };
        function Jt(t, e) {
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
                    function(r) {
                        return Math.pow(t + r * e, n)
                    }
                }(e, n, t) : Zt(isNaN(e) ? n : e)
            }
        }
        function Qt(t, e) {
            var n = e - t;
            return n ? Jt(t, n) : Zt(isNaN(t) ? e : t)
        }
        var te = function t(e) {
            var n = Kt(e);
            function r(t, e) {
                var r = n((t = Ht(t)).r, (e = Ht(e)).r)
                  , i = n(t.g, e.g)
                  , o = n(t.b, e.b)
                  , a = Qt(t.opacity, e.opacity);
                return function(e) {
                    return t.r = r(e),
                    t.g = i(e),
                    t.b = o(e),
                    t.opacity = a(e),
                    t + ""
                }
            }
            return r.gamma = t,
            r
        }(1);
        function ee(t) {
            return function(e) {
                var n, r, i = e.length, o = new Array(i), a = new Array(i), s = new Array(i);
                for (n = 0; n < i; ++n)
                    r = Ht(e[n]),
                    o[n] = r.r || 0,
                    a[n] = r.g || 0,
                    s[n] = r.b || 0;
                return o = t(o),
                a = t(a),
                s = t(s),
                r.opacity = 1,
                function(t) {
                    return r.r = o(t),
                    r.g = a(t),
                    r.b = s(t),
                    r + ""
                }
            }
        }
        ee((function(t) {
            var e = t.length - 1;
            return function(n) {
                var r = n <= 0 ? n = 0 : n >= 1 ? (n = 1,
                e - 1) : Math.floor(n * e)
                  , i = t[r]
                  , o = t[r + 1]
                  , a = r > 0 ? t[r - 1] : 2 * i - o
                  , s = r < e - 1 ? t[r + 2] : 2 * o - i;
                return Xt((n - r / e) * e, a, i, o, s)
            }
        }
        )),
        ee((function(t) {
            var e = t.length;
            return function(n) {
                var r = Math.floor(((n %= 1) < 0 ? ++n : n) * e)
                  , i = t[(r + e - 1) % e]
                  , o = t[r % e]
                  , a = t[(r + 1) % e]
                  , s = t[(r + 2) % e];
                return Xt((n - r / e) * e, i, o, a, s)
            }
        }
        ));
        var ne = function(t, e) {
            e || (e = []);
            var n, r = t ? Math.min(e.length, t.length) : 0, i = e.slice();
            return function(o) {
                for (n = 0; n < r; ++n)
                    i[n] = t[n] * (1 - o) + e[n] * o;
                return i
            }
        };
        function re(t) {
            return ArrayBuffer.isView(t) && !(t instanceof DataView)
        }
        function ie(t, e) {
            var n, r = e ? e.length : 0, i = t ? Math.min(r, t.length) : 0, o = new Array(i), a = new Array(r);
            for (n = 0; n < i; ++n)
                o[n] = fe(t[n], e[n]);
            for (; n < r; ++n)
                a[n] = e[n];
            return function(t) {
                for (n = 0; n < i; ++n)
                    a[n] = o[n](t);
                return a
            }
        }
        var oe = function(t, e) {
            var n = new Date;
            return t = +t,
            e = +e,
            function(r) {
                return n.setTime(t * (1 - r) + e * r),
                n
            }
        }
          , ae = function(t, e) {
            return t = +t,
            e = +e,
            function(n) {
                return t * (1 - n) + e * n
            }
        }
          , se = function(t, e) {
            var n, r = {}, i = {};
            for (n in null !== t && "object" == typeof t || (t = {}),
            null !== e && "object" == typeof e || (e = {}),
            e)
                n in t ? r[n] = fe(t[n], e[n]) : i[n] = e[n];
            return function(t) {
                for (n in r)
                    i[n] = r[n](t);
                return i
            }
        }
          , ue = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g
          , ce = new RegExp(ue.source,"g");
        var le = function(t, e) {
            var n, r, i, o = ue.lastIndex = ce.lastIndex = 0, a = -1, s = [], u = [];
            for (t += "",
            e += ""; (n = ue.exec(t)) && (r = ce.exec(e)); )
                (i = r.index) > o && (i = e.slice(o, i),
                s[a] ? s[a] += i : s[++a] = i),
                (n = n[0]) === (r = r[0]) ? s[a] ? s[a] += r : s[++a] = r : (s[++a] = null,
                u.push({
                    i: a,
                    x: ae(n, r)
                })),
                o = ce.lastIndex;
            return o < e.length && (i = e.slice(o),
            s[a] ? s[a] += i : s[++a] = i),
            s.length < 2 ? u[0] ? function(t) {
                return function(e) {
                    return t(e) + ""
                }
            }(u[0].x) : function(t) {
                return function() {
                    return t
                }
            }(e) : (e = u.length,
            function(t) {
                for (var n, r = 0; r < e; ++r)
                    s[(n = u[r]).i] = n.x(t);
                return s.join("")
            }
            )
        }
          , fe = function(t, e) {
            var n, r = typeof e;
            return null == e || "boolean" === r ? Zt(e) : ("number" === r ? ae : "string" === r ? (n = Rt(e)) ? (e = n,
            te) : le : e instanceof Rt ? te : e instanceof Date ? oe : re(e) ? ne : Array.isArray(e) ? ie : "function" != typeof e.valueOf && "function" != typeof e.toString || isNaN(e) ? se : ae)(t, e)
        }
          , he = function(t, e) {
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
        function _e(t) {
            return t
        }
        function ve(t, e) {
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
        function ge(t) {
            var e, n = t[0], r = t[t.length - 1];
            return n > r && (e = n,
            n = r,
            r = e),
            function(t) {
                return Math.max(n, Math.min(r, t))
            }
        }
        function me(t, e, n) {
            var r = t[0]
              , i = t[1]
              , o = e[0]
              , a = e[1];
            return i < r ? (r = ve(i, r),
            o = n(a, o)) : (r = ve(r, i),
            o = n(o, a)),
            function(t) {
                return o(r(t))
            }
        }
        function ye(t, e, n) {
            var r = Math.min(t.length, e.length) - 1
              , i = new Array(r)
              , o = new Array(r)
              , a = -1;
            for (t[r] < t[0] && (t = t.slice().reverse(),
            e = e.slice().reverse()); ++a < r; )
                i[a] = ve(t[a], t[a + 1]),
                o[a] = n(e[a], e[a + 1]);
            return function(e) {
                var n = st(t, e, 1, r) - 1;
                return o[n](i[n](e))
            }
        }
        function xe(t, e) {
            return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())
        }
        function be() {
            var t, e, n, r, i, o, a = pe, s = pe, u = fe, c = _e;
            function l() {
                return r = Math.min(a.length, s.length) > 2 ? ye : me,
                i = o = null,
                f
            }
            function f(e) {
                return isNaN(e = +e) ? n : (i || (i = r(a.map(t), s, u)))(t(c(e)))
            }
            return f.invert = function(n) {
                return c(e((o || (o = r(s, a.map(t), ae)))(n)))
            }
            ,
            f.domain = function(t) {
                return arguments.length ? (a = Array.from(t, de),
                c === _e || (c = ge(a)),
                l()) : a.slice()
            }
            ,
            f.range = function(t) {
                return arguments.length ? (s = Array.from(t),
                l()) : s.slice()
            }
            ,
            f.rangeRound = function(t) {
                return s = Array.from(t),
                u = he,
                l()
            }
            ,
            f.clamp = function(t) {
                return arguments.length ? (c = t ? ge(a) : _e,
                f) : c !== _e
            }
            ,
            f.interpolate = function(t) {
                return arguments.length ? (u = t,
                l()) : u
            }
            ,
            f.unknown = function(t) {
                return arguments.length ? (n = t,
                f) : n
            }
            ,
            function(n, r) {
                return t = n,
                e = r,
                l()
            }
        }
        function we(t, e) {
            return be()(t, e)
        }
        var ke = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
        function Te(t) {
            if (!(e = ke.exec(t)))
                throw new Error("invalid format: " + t);
            var e;
            return new Ee({
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
        function Ee(t) {
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
        Te.prototype = Ee.prototype,
        Ee.prototype.toString = function() {
            return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
        }
        ;
        function Me(t, e) {
            if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0)
                return null;
            var n, r = t.slice(0, n);
            return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(n + 1)]
        }
        var Se, Ce, Ae, Ne, je = function(t) {
            return (t = Me(Math.abs(t))) ? t[1] : NaN
        }, Le = function(t, e) {
            var n = Me(t, e);
            if (!n)
                return t + "";
            var r = n[0]
              , i = n[1];
            return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0")
        }, Oe = {
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
                return Le(100 * t, e)
            },
            r: Le,
            s: function(t, e) {
                var n = Me(t, e);
                if (!n)
                    return t + "";
                var r = n[0]
                  , i = n[1]
                  , o = i - (Se = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1
                  , a = r.length;
                return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + Me(t, Math.max(0, e + o - 1))[0]
            },
            X: function(t) {
                return Math.round(t).toString(16).toUpperCase()
            },
            x: function(t) {
                return Math.round(t).toString(16)
            }
        }, Pe = function(t) {
            return t
        }, De = Array.prototype.map, Re = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
        Ce = function(t) {
            var e, n, r = void 0 === t.grouping || void 0 === t.thousands ? Pe : (e = De.call(t.grouping, Number),
            n = t.thousands + "",
            function(t, r) {
                for (var i = t.length, o = [], a = 0, s = e[0], u = 0; i > 0 && s > 0 && (u + s + 1 > r && (s = Math.max(1, r - u)),
                o.push(t.substring(i -= s, i + s)),
                !((u += s + 1) > r)); )
                    s = e[a = (a + 1) % e.length];
                return o.reverse().join(n)
            }
            ), i = void 0 === t.currency ? "" : t.currency[0] + "", o = void 0 === t.currency ? "" : t.currency[1] + "", a = void 0 === t.decimal ? "." : t.decimal + "", s = void 0 === t.numerals ? Pe : function(t) {
                return function(e) {
                    return e.replace(/[0-9]/g, (function(e) {
                        return t[+e]
                    }
                    ))
                }
            }(De.call(t.numerals, String)), u = void 0 === t.percent ? "%" : t.percent + "", c = void 0 === t.minus ? "-" : t.minus + "", l = void 0 === t.nan ? "NaN" : t.nan + "";
            function f(t) {
                var e = (t = Te(t)).fill
                  , n = t.align
                  , f = t.sign
                  , h = t.symbol
                  , d = t.zero
                  , p = t.width
                  , _ = t.comma
                  , v = t.precision
                  , g = t.trim
                  , m = t.type;
                "n" === m ? (_ = !0,
                m = "g") : Oe[m] || (void 0 === v && (v = 12),
                g = !0,
                m = "g"),
                (d || "0" === e && "=" === n) && (d = !0,
                e = "0",
                n = "=");
                var y = "$" === h ? i : "#" === h && /[boxX]/.test(m) ? "0" + m.toLowerCase() : ""
                  , x = "$" === h ? o : /[%p]/.test(m) ? u : ""
                  , b = Oe[m]
                  , w = /[defgprs%]/.test(m);
                function k(t) {
                    var i, o, u, h = y, k = x;
                    if ("c" === m)
                        k = b(t) + k,
                        t = "";
                    else {
                        var T = (t = +t) < 0 || 1 / t < 0;
                        if (t = isNaN(t) ? l : b(Math.abs(t), v),
                        g && (t = function(t) {
                            t: for (var e, n = t.length, r = 1, i = -1; r < n; ++r)
                                switch (t[r]) {
                                case ".":
                                    i = e = r;
                                    break;
                                case "0":
                                    0 === i && (i = r),
                                    e = r;
                                    break;
                                default:
                                    if (!+t[r])
                                        break t;
                                    i > 0 && (i = 0)
                                }
                            return i > 0 ? t.slice(0, i) + t.slice(e + 1) : t
                        }(t)),
                        T && 0 == +t && "+" !== f && (T = !1),
                        h = (T ? "(" === f ? f : c : "-" === f || "(" === f ? "" : f) + h,
                        k = ("s" === m ? Re[8 + Se / 3] : "") + k + (T && "(" === f ? ")" : ""),
                        w)
                            for (i = -1,
                            o = t.length; ++i < o; )
                                if (48 > (u = t.charCodeAt(i)) || u > 57) {
                                    k = (46 === u ? a + t.slice(i + 1) : t.slice(i)) + k,
                                    t = t.slice(0, i);
                                    break
                                }
                    }
                    _ && !d && (t = r(t, 1 / 0));
                    var E = h.length + t.length + k.length
                      , M = E < p ? new Array(p - E + 1).join(e) : "";
                    switch (_ && d && (t = r(M + t, M.length ? p - k.length : 1 / 0),
                    M = ""),
                    n) {
                    case "<":
                        t = h + t + k + M;
                        break;
                    case "=":
                        t = h + M + t + k;
                        break;
                    case "^":
                        t = M.slice(0, E = M.length >> 1) + h + t + k + M.slice(E);
                        break;
                    default:
                        t = M + h + t + k
                    }
                    return s(t)
                }
                return v = void 0 === v ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, v)) : Math.max(0, Math.min(20, v)),
                k.toString = function() {
                    return t + ""
                }
                ,
                k
            }
            return {
                format: f,
                formatPrefix: function(t, e) {
                    var n = f(((t = Te(t)).type = "f",
                    t))
                      , r = 3 * Math.max(-8, Math.min(8, Math.floor(je(e) / 3)))
                      , i = Math.pow(10, -r)
                      , o = Re[8 + r / 3];
                    return function(t) {
                        return n(i * t) + o
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
        Ae = Ce.format,
        Ne = Ce.formatPrefix;
        var Be = function(t, e, n, r) {
            var i, o = _t(t, e, n);
            switch ((r = Te(null == r ? ",f" : r)).type) {
            case "s":
                var a = Math.max(Math.abs(t), Math.abs(e));
                return null != r.precision || isNaN(i = function(t, e) {
                    return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(je(e) / 3))) - je(Math.abs(t)))
                }(o, a)) || (r.precision = i),
                Ne(r, a);
            case "":
            case "e":
            case "g":
            case "p":
            case "r":
                null != r.precision || isNaN(i = function(t, e) {
                    return t = Math.abs(t),
                    e = Math.abs(e) - t,
                    Math.max(0, je(e) - je(t)) + 1
                }(o, Math.max(Math.abs(t), Math.abs(e)))) || (r.precision = i - ("e" === r.type));
                break;
            case "f":
            case "%":
                null != r.precision || isNaN(i = function(t) {
                    return Math.max(0, -je(Math.abs(t)))
                }(o)) || (r.precision = i - 2 * ("%" === r.type))
            }
            return Ae(r)
        };
        function $e(t) {
            var e = t.domain;
            return t.ticks = function(t) {
                var n = e();
                return dt(n[0], n[n.length - 1], null == t ? 10 : t)
            }
            ,
            t.tickFormat = function(t, n) {
                var r = e();
                return Be(r[0], r[r.length - 1], null == t ? 10 : t, n)
            }
            ,
            t.nice = function(n) {
                null == n && (n = 10);
                var r, i = e(), o = 0, a = i.length - 1, s = i[o], u = i[a];
                return u < s && (r = s,
                s = u,
                u = r,
                r = o,
                o = a,
                a = r),
                (r = pt(s, u, n)) > 0 ? r = pt(s = Math.floor(s / r) * r, u = Math.ceil(u / r) * r, n) : r < 0 && (r = pt(s = Math.ceil(s * r) / r, u = Math.floor(u * r) / r, n)),
                r > 0 ? (i[o] = Math.floor(s / r) * r,
                i[a] = Math.ceil(u / r) * r,
                e(i)) : r < 0 && (i[o] = Math.ceil(s * r) / r,
                i[a] = Math.floor(u * r) / r,
                e(i)),
                t
            }
            ,
            t
        }
        var Ue = function(t, e) {
            var n, r = 0, i = (t = t.slice()).length - 1, o = t[r], a = t[i];
            return a < o && (n = r,
            r = i,
            i = n,
            n = o,
            o = a,
            a = n),
            t[r] = e.floor(o),
            t[i] = e.ceil(a),
            t
        };
        var He = new Date
          , Fe = new Date;
        function Ie(t, e, n, r) {
            function i(e) {
                return t(e = new Date(+e)),
                e
            }
            return i.floor = i,
            i.ceil = function(n) {
                return t(n = new Date(n - 1)),
                e(n, 1),
                t(n),
                n
            }
            ,
            i.round = function(t) {
                var e = i(t)
                  , n = i.ceil(t);
                return t - e < n - t ? e : n
            }
            ,
            i.offset = function(t, n) {
                return e(t = new Date(+t), null == n ? 1 : Math.floor(n)),
                t
            }
            ,
            i.range = function(n, r, o) {
                var a, s = [];
                if (n = i.ceil(n),
                o = null == o ? 1 : Math.floor(o),
                !(n < r && o > 0))
                    return s;
                do {
                    s.push(a = new Date(+n)),
                    e(n, o),
                    t(n)
                } while (a < n && n < r);
                return s
            }
            ,
            i.filter = function(n) {
                return Ie((function(e) {
                    if (e >= e)
                        for (; t(e),
                        !n(e); )
                            e.setTime(e - 1)
                }
                ), (function(t, r) {
                    if (t >= t)
                        if (r < 0)
                            for (; ++r <= 0; )
                                for (; e(t, -1),
                                !n(t); )
                                    ;
                        else
                            for (; --r >= 0; )
                                for (; e(t, 1),
                                !n(t); )
                                    ;
                }
                ))
            }
            ,
            n && (i.count = function(e, r) {
                return He.setTime(+e),
                Fe.setTime(+r),
                t(He),
                t(Fe),
                Math.floor(n(He, Fe))
            }
            ,
            i.every = function(t) {
                return t = Math.floor(t),
                isFinite(t) && t > 0 ? t > 1 ? i.filter(r ? function(e) {
                    return r(e) % t == 0
                }
                : function(e) {
                    return i.count(0, e) % t == 0
                }
                ) : i : null
            }
            ),
            i
        }
        var ze = Ie((function() {}
        ), (function(t, e) {
            t.setTime(+t + e)
        }
        ), (function(t, e) {
            return e - t
        }
        ));
        ze.every = function(t) {
            return t = Math.floor(t),
            isFinite(t) && t > 0 ? t > 1 ? Ie((function(e) {
                e.setTime(Math.floor(e / t) * t)
            }
            ), (function(e, n) {
                e.setTime(+e + n * t)
            }
            ), (function(e, n) {
                return (n - e) / t
            }
            )) : ze : null
        }
        ;
        var qe = ze
          , Ye = (ze.range,
        1e3)
          , Ve = 6e4
          , We = 36e5
          , Ge = 864e5
          , Xe = 6048e5
          , Ze = Ie((function(t) {
            t.setTime(t - t.getMilliseconds())
        }
        ), (function(t, e) {
            t.setTime(+t + e * Ye)
        }
        ), (function(t, e) {
            return (e - t) / Ye
        }
        ), (function(t) {
            return t.getUTCSeconds()
        }
        ))
          , Je = Ze
          , Ke = (Ze.range,
        Ie((function(t) {
            t.setTime(t - t.getMilliseconds() - t.getSeconds() * Ye)
        }
        ), (function(t, e) {
            t.setTime(+t + e * Ve)
        }
        ), (function(t, e) {
            return (e - t) / Ve
        }
        ), (function(t) {
            return t.getMinutes()
        }
        )))
          , Qe = (Ke.range,
        Ie((function(t) {
            t.setTime(t - t.getMilliseconds() - t.getSeconds() * Ye - t.getMinutes() * Ve)
        }
        ), (function(t, e) {
            t.setTime(+t + e * We)
        }
        ), (function(t, e) {
            return (e - t) / We
        }
        ), (function(t) {
            return t.getHours()
        }
        )))
          , tn = (Qe.range,
        Ie((function(t) {
            t.setHours(0, 0, 0, 0)
        }
        ), (function(t, e) {
            t.setDate(t.getDate() + e)
        }
        ), (function(t, e) {
            return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * Ve) / Ge
        }
        ), (function(t) {
            return t.getDate() - 1
        }
        )))
          , en = tn;
        tn.range;
        function nn(t) {
            return Ie((function(e) {
                e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7),
                e.setHours(0, 0, 0, 0)
            }
            ), (function(t, e) {
                t.setDate(t.getDate() + 7 * e)
            }
            ), (function(t, e) {
                return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * Ve) / Xe
            }
            ))
        }
        var rn = nn(0)
          , on = nn(1)
          , an = nn(2)
          , sn = nn(3)
          , un = nn(4)
          , cn = nn(5)
          , ln = nn(6)
          , fn = (rn.range,
        on.range,
        an.range,
        sn.range,
        un.range,
        cn.range,
        ln.range,
        Ie((function(t) {
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
          , hn = fn
          , dn = (fn.range,
        Ie((function(t) {
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
            return isFinite(t = Math.floor(t)) && t > 0 ? Ie((function(e) {
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
          , _n = (dn.range,
        Ie((function(t) {
            t.setUTCSeconds(0, 0)
        }
        ), (function(t, e) {
            t.setTime(+t + e * Ve)
        }
        ), (function(t, e) {
            return (e - t) / Ve
        }
        ), (function(t) {
            return t.getUTCMinutes()
        }
        )))
          , vn = _n
          , gn = (_n.range,
        Ie((function(t) {
            t.setUTCMinutes(0, 0, 0)
        }
        ), (function(t, e) {
            t.setTime(+t + e * We)
        }
        ), (function(t, e) {
            return (e - t) / We
        }
        ), (function(t) {
            return t.getUTCHours()
        }
        )))
          , mn = gn
          , yn = (gn.range,
        Ie((function(t) {
            t.setUTCHours(0, 0, 0, 0)
        }
        ), (function(t, e) {
            t.setUTCDate(t.getUTCDate() + e)
        }
        ), (function(t, e) {
            return (e - t) / Ge
        }
        ), (function(t) {
            return t.getUTCDate() - 1
        }
        )))
          , xn = yn;
        yn.range;
        function bn(t) {
            return Ie((function(e) {
                e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7),
                e.setUTCHours(0, 0, 0, 0)
            }
            ), (function(t, e) {
                t.setUTCDate(t.getUTCDate() + 7 * e)
            }
            ), (function(t, e) {
                return (e - t) / Xe
            }
            ))
        }
        var wn = bn(0)
          , kn = bn(1)
          , Tn = bn(2)
          , En = bn(3)
          , Mn = bn(4)
          , Sn = bn(5)
          , Cn = bn(6)
          , An = (wn.range,
        kn.range,
        Tn.range,
        En.range,
        Mn.range,
        Sn.range,
        Cn.range,
        Ie((function(t) {
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
          , Nn = An
          , jn = (An.range,
        Ie((function(t) {
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
        jn.every = function(t) {
            return isFinite(t = Math.floor(t)) && t > 0 ? Ie((function(e) {
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
        var Ln = jn;
        jn.range;
        function On(t) {
            if (0 <= t.y && t.y < 100) {
                var e = new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);
                return e.setFullYear(t.y),
                e
            }
            return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)
        }
        function Pn(t) {
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
        var Rn, Bn, $n, Un, Hn = {
            "-": "",
            _: " ",
            0: "0"
        }, Fn = /^\s*\d+/, In = /^%/, zn = /[\\^$*+?|[\]().{}]/g;
        function qn(t, e, n) {
            var r = t < 0 ? "-" : ""
              , i = (r ? -t : t) + ""
              , o = i.length;
            return r + (o < n ? new Array(n - o + 1).join(e) + i : i)
        }
        function Yn(t) {
            return t.replace(zn, "\\$&")
        }
        function Vn(t) {
            return new RegExp("^(?:" + t.map(Yn).join("|") + ")","i")
        }
        function Wn(t) {
            for (var e = {}, n = -1, r = t.length; ++n < r; )
                e[t[n].toLowerCase()] = n;
            return e
        }
        function Gn(t, e, n) {
            var r = Fn.exec(e.slice(n, n + 1));
            return r ? (t.w = +r[0],
            n + r[0].length) : -1
        }
        function Xn(t, e, n) {
            var r = Fn.exec(e.slice(n, n + 1));
            return r ? (t.u = +r[0],
            n + r[0].length) : -1
        }
        function Zn(t, e, n) {
            var r = Fn.exec(e.slice(n, n + 2));
            return r ? (t.U = +r[0],
            n + r[0].length) : -1
        }
        function Jn(t, e, n) {
            var r = Fn.exec(e.slice(n, n + 2));
            return r ? (t.V = +r[0],
            n + r[0].length) : -1
        }
        function Kn(t, e, n) {
            var r = Fn.exec(e.slice(n, n + 2));
            return r ? (t.W = +r[0],
            n + r[0].length) : -1
        }
        function Qn(t, e, n) {
            var r = Fn.exec(e.slice(n, n + 4));
            return r ? (t.y = +r[0],
            n + r[0].length) : -1
        }
        function tr(t, e, n) {
            var r = Fn.exec(e.slice(n, n + 2));
            return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3),
            n + r[0].length) : -1
        }
        function er(t, e, n) {
            var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
            return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")),
            n + r[0].length) : -1
        }
        function nr(t, e, n) {
            var r = Fn.exec(e.slice(n, n + 2));
            return r ? (t.m = r[0] - 1,
            n + r[0].length) : -1
        }
        function rr(t, e, n) {
            var r = Fn.exec(e.slice(n, n + 2));
            return r ? (t.d = +r[0],
            n + r[0].length) : -1
        }
        function ir(t, e, n) {
            var r = Fn.exec(e.slice(n, n + 3));
            return r ? (t.m = 0,
            t.d = +r[0],
            n + r[0].length) : -1
        }
        function or(t, e, n) {
            var r = Fn.exec(e.slice(n, n + 2));
            return r ? (t.H = +r[0],
            n + r[0].length) : -1
        }
        function ar(t, e, n) {
            var r = Fn.exec(e.slice(n, n + 2));
            return r ? (t.M = +r[0],
            n + r[0].length) : -1
        }
        function sr(t, e, n) {
            var r = Fn.exec(e.slice(n, n + 2));
            return r ? (t.S = +r[0],
            n + r[0].length) : -1
        }
        function ur(t, e, n) {
            var r = Fn.exec(e.slice(n, n + 3));
            return r ? (t.L = +r[0],
            n + r[0].length) : -1
        }
        function cr(t, e, n) {
            var r = Fn.exec(e.slice(n, n + 6));
            return r ? (t.L = Math.floor(r[0] / 1e3),
            n + r[0].length) : -1
        }
        function lr(t, e, n) {
            var r = In.exec(e.slice(n, n + 1));
            return r ? n + r[0].length : -1
        }
        function fr(t, e, n) {
            var r = Fn.exec(e.slice(n));
            return r ? (t.Q = +r[0],
            n + r[0].length) : -1
        }
        function hr(t, e, n) {
            var r = Fn.exec(e.slice(n));
            return r ? (t.Q = 1e3 * +r[0],
            n + r[0].length) : -1
        }
        function dr(t, e) {
            return qn(t.getDate(), e, 2)
        }
        function pr(t, e) {
            return qn(t.getHours(), e, 2)
        }
        function _r(t, e) {
            return qn(t.getHours() % 12 || 12, e, 2)
        }
        function vr(t, e) {
            return qn(1 + en.count(pn(t), t), e, 3)
        }
        function gr(t, e) {
            return qn(t.getMilliseconds(), e, 3)
        }
        function mr(t, e) {
            return gr(t, e) + "000"
        }
        function yr(t, e) {
            return qn(t.getMonth() + 1, e, 2)
        }
        function xr(t, e) {
            return qn(t.getMinutes(), e, 2)
        }
        function br(t, e) {
            return qn(t.getSeconds(), e, 2)
        }
        function wr(t) {
            var e = t.getDay();
            return 0 === e ? 7 : e
        }
        function kr(t, e) {
            return qn(rn.count(pn(t), t), e, 2)
        }
        function Tr(t, e) {
            var n = t.getDay();
            return t = n >= 4 || 0 === n ? un(t) : un.ceil(t),
            qn(un.count(pn(t), t) + (4 === pn(t).getDay()), e, 2)
        }
        function Er(t) {
            return t.getDay()
        }
        function Mr(t, e) {
            return qn(on.count(pn(t), t), e, 2)
        }
        function Sr(t, e) {
            return qn(t.getFullYear() % 100, e, 2)
        }
        function Cr(t, e) {
            return qn(t.getFullYear() % 1e4, e, 4)
        }
        function Ar(t) {
            var e = t.getTimezoneOffset();
            return (e > 0 ? "-" : (e *= -1,
            "+")) + qn(e / 60 | 0, "0", 2) + qn(e % 60, "0", 2)
        }
        function Nr(t, e) {
            return qn(t.getUTCDate(), e, 2)
        }
        function jr(t, e) {
            return qn(t.getUTCHours(), e, 2)
        }
        function Lr(t, e) {
            return qn(t.getUTCHours() % 12 || 12, e, 2)
        }
        function Or(t, e) {
            return qn(1 + xn.count(Ln(t), t), e, 3)
        }
        function Pr(t, e) {
            return qn(t.getUTCMilliseconds(), e, 3)
        }
        function Dr(t, e) {
            return Pr(t, e) + "000"
        }
        function Rr(t, e) {
            return qn(t.getUTCMonth() + 1, e, 2)
        }
        function Br(t, e) {
            return qn(t.getUTCMinutes(), e, 2)
        }
        function $r(t, e) {
            return qn(t.getUTCSeconds(), e, 2)
        }
        function Ur(t) {
            var e = t.getUTCDay();
            return 0 === e ? 7 : e
        }
        function Hr(t, e) {
            return qn(wn.count(Ln(t), t), e, 2)
        }
        function Fr(t, e) {
            var n = t.getUTCDay();
            return t = n >= 4 || 0 === n ? Mn(t) : Mn.ceil(t),
            qn(Mn.count(Ln(t), t) + (4 === Ln(t).getUTCDay()), e, 2)
        }
        function Ir(t) {
            return t.getUTCDay()
        }
        function zr(t, e) {
            return qn(kn.count(Ln(t), t), e, 2)
        }
        function qr(t, e) {
            return qn(t.getUTCFullYear() % 100, e, 2)
        }
        function Yr(t, e) {
            return qn(t.getUTCFullYear() % 1e4, e, 4)
        }
        function Vr() {
            return "+0000"
        }
        function Wr() {
            return "%"
        }
        function Gr(t) {
            return +t
        }
        function Xr(t) {
            return Math.floor(+t / 1e3)
        }
        !function(t) {
            Rn = function(t) {
                var e = t.dateTime
                  , n = t.date
                  , r = t.time
                  , i = t.periods
                  , o = t.days
                  , a = t.shortDays
                  , s = t.months
                  , u = t.shortMonths
                  , c = Vn(i)
                  , l = Wn(i)
                  , f = Vn(o)
                  , h = Wn(o)
                  , d = Vn(a)
                  , p = Wn(a)
                  , _ = Vn(s)
                  , v = Wn(s)
                  , g = Vn(u)
                  , m = Wn(u)
                  , y = {
                    a: function(t) {
                        return a[t.getDay()]
                    },
                    A: function(t) {
                        return o[t.getDay()]
                    },
                    b: function(t) {
                        return u[t.getMonth()]
                    },
                    B: function(t) {
                        return s[t.getMonth()]
                    },
                    c: null,
                    d: dr,
                    e: dr,
                    f: mr,
                    H: pr,
                    I: _r,
                    j: vr,
                    L: gr,
                    m: yr,
                    M: xr,
                    p: function(t) {
                        return i[+(t.getHours() >= 12)]
                    },
                    Q: Gr,
                    s: Xr,
                    S: br,
                    u: wr,
                    U: kr,
                    V: Tr,
                    w: Er,
                    W: Mr,
                    x: null,
                    X: null,
                    y: Sr,
                    Y: Cr,
                    Z: Ar,
                    "%": Wr
                }
                  , x = {
                    a: function(t) {
                        return a[t.getUTCDay()]
                    },
                    A: function(t) {
                        return o[t.getUTCDay()]
                    },
                    b: function(t) {
                        return u[t.getUTCMonth()]
                    },
                    B: function(t) {
                        return s[t.getUTCMonth()]
                    },
                    c: null,
                    d: Nr,
                    e: Nr,
                    f: Dr,
                    H: jr,
                    I: Lr,
                    j: Or,
                    L: Pr,
                    m: Rr,
                    M: Br,
                    p: function(t) {
                        return i[+(t.getUTCHours() >= 12)]
                    },
                    Q: Gr,
                    s: Xr,
                    S: $r,
                    u: Ur,
                    U: Hr,
                    V: Fr,
                    w: Ir,
                    W: zr,
                    x: null,
                    X: null,
                    y: qr,
                    Y: Yr,
                    Z: Vr,
                    "%": Wr
                }
                  , b = {
                    a: function(t, e, n) {
                        var r = d.exec(e.slice(n));
                        return r ? (t.w = p[r[0].toLowerCase()],
                        n + r[0].length) : -1
                    },
                    A: function(t, e, n) {
                        var r = f.exec(e.slice(n));
                        return r ? (t.w = h[r[0].toLowerCase()],
                        n + r[0].length) : -1
                    },
                    b: function(t, e, n) {
                        var r = g.exec(e.slice(n));
                        return r ? (t.m = m[r[0].toLowerCase()],
                        n + r[0].length) : -1
                    },
                    B: function(t, e, n) {
                        var r = _.exec(e.slice(n));
                        return r ? (t.m = v[r[0].toLowerCase()],
                        n + r[0].length) : -1
                    },
                    c: function(t, n, r) {
                        return T(t, e, n, r)
                    },
                    d: rr,
                    e: rr,
                    f: cr,
                    H: or,
                    I: or,
                    j: ir,
                    L: ur,
                    m: nr,
                    M: ar,
                    p: function(t, e, n) {
                        var r = c.exec(e.slice(n));
                        return r ? (t.p = l[r[0].toLowerCase()],
                        n + r[0].length) : -1
                    },
                    Q: fr,
                    s: hr,
                    S: sr,
                    u: Xn,
                    U: Zn,
                    V: Jn,
                    w: Gn,
                    W: Kn,
                    x: function(t, e, r) {
                        return T(t, n, e, r)
                    },
                    X: function(t, e, n) {
                        return T(t, r, e, n)
                    },
                    y: tr,
                    Y: Qn,
                    Z: er,
                    "%": lr
                };
                function w(t, e) {
                    return function(n) {
                        var r, i, o, a = [], s = -1, u = 0, c = t.length;
                        for (n instanceof Date || (n = new Date(+n)); ++s < c; )
                            37 === t.charCodeAt(s) && (a.push(t.slice(u, s)),
                            null != (i = Hn[r = t.charAt(++s)]) ? r = t.charAt(++s) : i = "e" === r ? " " : "0",
                            (o = e[r]) && (r = o(n, i)),
                            a.push(r),
                            u = s + 1);
                        return a.push(t.slice(u, s)),
                        a.join("")
                    }
                }
                function k(t, e) {
                    return function(n) {
                        var r, i, o = Dn(1900);
                        if (T(o, t, n += "", 0) != n.length)
                            return null;
                        if ("Q"in o)
                            return new Date(o.Q);
                        if ("p"in o && (o.H = o.H % 12 + 12 * o.p),
                        "V"in o) {
                            if (o.V < 1 || o.V > 53)
                                return null;
                            "w"in o || (o.w = 1),
                            "Z"in o ? (i = (r = Pn(Dn(o.y))).getUTCDay(),
                            r = i > 4 || 0 === i ? kn.ceil(r) : kn(r),
                            r = xn.offset(r, 7 * (o.V - 1)),
                            o.y = r.getUTCFullYear(),
                            o.m = r.getUTCMonth(),
                            o.d = r.getUTCDate() + (o.w + 6) % 7) : (i = (r = e(Dn(o.y))).getDay(),
                            r = i > 4 || 0 === i ? on.ceil(r) : on(r),
                            r = en.offset(r, 7 * (o.V - 1)),
                            o.y = r.getFullYear(),
                            o.m = r.getMonth(),
                            o.d = r.getDate() + (o.w + 6) % 7)
                        } else
                            ("W"in o || "U"in o) && ("w"in o || (o.w = "u"in o ? o.u % 7 : "W"in o ? 1 : 0),
                            i = "Z"in o ? Pn(Dn(o.y)).getUTCDay() : e(Dn(o.y)).getDay(),
                            o.m = 0,
                            o.d = "W"in o ? (o.w + 6) % 7 + 7 * o.W - (i + 5) % 7 : o.w + 7 * o.U - (i + 6) % 7);
                        return "Z"in o ? (o.H += o.Z / 100 | 0,
                        o.M += o.Z % 100,
                        Pn(o)) : e(o)
                    }
                }
                function T(t, e, n, r) {
                    for (var i, o, a = 0, s = e.length, u = n.length; a < s; ) {
                        if (r >= u)
                            return -1;
                        if (37 === (i = e.charCodeAt(a++))) {
                            if (i = e.charAt(a++),
                            !(o = b[i in Hn ? e.charAt(a++) : i]) || (r = o(t, n, r)) < 0)
                                return -1
                        } else if (i != n.charCodeAt(r++))
                            return -1
                    }
                    return r
                }
                return y.x = w(n, y),
                y.X = w(r, y),
                y.c = w(e, y),
                x.x = w(n, x),
                x.X = w(r, x),
                x.c = w(e, x),
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
                        var e = k(t += "", On);
                        return e.toString = function() {
                            return t
                        }
                        ,
                        e
                    },
                    utcFormat: function(t) {
                        var e = w(t += "", x);
                        return e.toString = function() {
                            return t
                        }
                        ,
                        e
                    },
                    utcParse: function(t) {
                        var e = k(t, Pn);
                        return e.toString = function() {
                            return t
                        }
                        ,
                        e
                    }
                }
            }(t),
            Bn = Rn.format,
            Rn.parse,
            $n = Rn.utcFormat,
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
        var Zr = "%Y-%m-%dT%H:%M:%S.%LZ";
        Date.prototype.toISOString || $n(Zr);
        +new Date("2000-01-01T00:00:00.000Z") || Un(Zr);
        var Jr = 1e3
          , Kr = 6e4
          , Qr = 36e5
          , ti = 864e5
          , ei = 2592e6
          , ni = 31536e6;
        function ri(t) {
            return new Date(t)
        }
        function ii(t) {
            return t instanceof Date ? +t : +new Date(+t)
        }
        function oi(t, e, n, r, i, o, a, s, u) {
            var c = we(_e, _e)
              , l = c.invert
              , f = c.domain
              , h = u(".%L")
              , d = u(":%S")
              , p = u("%I:%M")
              , _ = u("%I %p")
              , v = u("%a %d")
              , g = u("%b %d")
              , m = u("%B")
              , y = u("%Y")
              , x = [[a, 1, Jr], [a, 5, 5e3], [a, 15, 15e3], [a, 30, 3e4], [o, 1, Kr], [o, 5, 3e5], [o, 15, 9e5], [o, 30, 18e5], [i, 1, Qr], [i, 3, 108e5], [i, 6, 216e5], [i, 12, 432e5], [r, 1, ti], [r, 2, 1728e5], [n, 1, 6048e5], [e, 1, ei], [e, 3, 7776e6], [t, 1, ni]];
            function b(s) {
                return (a(s) < s ? h : o(s) < s ? d : i(s) < s ? p : r(s) < s ? _ : e(s) < s ? n(s) < s ? v : g : t(s) < s ? m : y)(s)
            }
            function w(e, n, r, i) {
                if (null == e && (e = 10),
                "number" == typeof e) {
                    var o = Math.abs(r - n) / e
                      , a = it((function(t) {
                        return t[2]
                    }
                    )).right(x, o);
                    a === x.length ? (i = _t(n / ni, r / ni, e),
                    e = t) : a ? (i = (a = x[o / x[a - 1][2] < x[a][2] / o ? a - 1 : a])[1],
                    e = a[0]) : (i = Math.max(_t(n, r, e), 1),
                    e = s)
                }
                return null == i ? e : e.every(i)
            }
            return c.invert = function(t) {
                return new Date(l(t))
            }
            ,
            c.domain = function(t) {
                return arguments.length ? f(Array.from(t, ii)) : f().map(ri)
            }
            ,
            c.ticks = function(t, e) {
                var n, r = f(), i = r[0], o = r[r.length - 1], a = o < i;
                return a && (n = i,
                i = o,
                o = n),
                n = (n = w(t, i, o, e)) ? n.range(i, o + 1) : [],
                a ? n.reverse() : n
            }
            ,
            c.tickFormat = function(t, e) {
                return null == e ? b : u(e)
            }
            ,
            c.nice = function(t, e) {
                var n = f();
                return (t = w(t, n[0], n[n.length - 1], e)) ? f(Ue(n, t)) : c
            }
            ,
            c.copy = function() {
                return xe(c, oi(t, e, n, r, i, o, a, s, u))
            }
            ,
            c
        }
        var ai = "http://www.w3.org/1999/xhtml"
          , si = {
            svg: "http://www.w3.org/2000/svg",
            xhtml: ai,
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/"
        }
          , ui = function(t) {
            var e = t += ""
              , n = e.indexOf(":");
            return n >= 0 && "xmlns" !== (e = t.slice(0, n)) && (t = t.slice(n + 1)),
            si.hasOwnProperty(e) ? {
                space: si[e],
                local: t
            } : t
        };
        function ci(t) {
            return function() {
                var e = this.ownerDocument
                  , n = this.namespaceURI;
                return n === ai && e.documentElement.namespaceURI === ai ? e.createElement(t) : e.createElementNS(n, t)
            }
        }
        function li(t) {
            return function() {
                return this.ownerDocument.createElementNS(t.space, t.local)
            }
        }
        var fi = function(t) {
            var e = ui(t);
            return (e.local ? li : ci)(e)
        };
        function hi() {}
        var di = function(t) {
            return null == t ? hi : function() {
                return this.querySelector(t)
            }
        };
        function pi() {
            return []
        }
        var _i = function(t) {
            return null == t ? pi : function() {
                return this.querySelectorAll(t)
            }
        }
          , vi = function(t) {
            return function() {
                return this.matches(t)
            }
        }
          , gi = function(t) {
            return new Array(t.length)
        };
        function mi(t, e) {
            this.ownerDocument = t.ownerDocument,
            this.namespaceURI = t.namespaceURI,
            this._next = null,
            this._parent = t,
            this.__data__ = e
        }
        mi.prototype = {
            constructor: mi,
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
        function yi(t, e, n, r, i, o) {
            for (var a, s = 0, u = e.length, c = o.length; s < c; ++s)
                (a = e[s]) ? (a.__data__ = o[s],
                r[s] = a) : n[s] = new mi(t,o[s]);
            for (; s < u; ++s)
                (a = e[s]) && (i[s] = a)
        }
        function xi(t, e, n, r, i, o, a) {
            var s, u, c, l = {}, f = e.length, h = o.length, d = new Array(f);
            for (s = 0; s < f; ++s)
                (u = e[s]) && (d[s] = c = "$" + a.call(u, u.__data__, s, e),
                c in l ? i[s] = u : l[c] = u);
            for (s = 0; s < h; ++s)
                (u = l[c = "$" + a.call(t, o[s], s, o)]) ? (r[s] = u,
                u.__data__ = o[s],
                l[c] = null) : n[s] = new mi(t,o[s]);
            for (s = 0; s < f; ++s)
                (u = e[s]) && l[d[s]] === u && (i[s] = u)
        }
        function bi(t, e) {
            return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
        }
        function wi(t) {
            return function() {
                this.removeAttribute(t)
            }
        }
        function ki(t) {
            return function() {
                this.removeAttributeNS(t.space, t.local)
            }
        }
        function Ti(t, e) {
            return function() {
                this.setAttribute(t, e)
            }
        }
        function Ei(t, e) {
            return function() {
                this.setAttributeNS(t.space, t.local, e)
            }
        }
        function Mi(t, e) {
            return function() {
                var n = e.apply(this, arguments);
                null == n ? this.removeAttribute(t) : this.setAttribute(t, n)
            }
        }
        function Si(t, e) {
            return function() {
                var n = e.apply(this, arguments);
                null == n ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n)
            }
        }
        var Ci = function(t) {
            return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
        };
        function Ai(t) {
            return function() {
                this.style.removeProperty(t)
            }
        }
        function Ni(t, e, n) {
            return function() {
                this.style.setProperty(t, e, n)
            }
        }
        function ji(t, e, n) {
            return function() {
                var r = e.apply(this, arguments);
                null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, n)
            }
        }
        function Li(t, e) {
            return t.style.getPropertyValue(e) || Ci(t).getComputedStyle(t, null).getPropertyValue(e)
        }
        function Oi(t) {
            return function() {
                delete this[t]
            }
        }
        function Pi(t, e) {
            return function() {
                this[t] = e
            }
        }
        function Di(t, e) {
            return function() {
                var n = e.apply(this, arguments);
                null == n ? delete this[t] : this[t] = n
            }
        }
        function Ri(t) {
            return t.trim().split(/^|\s+/)
        }
        function Bi(t) {
            return t.classList || new $i(t)
        }
        function $i(t) {
            this._node = t,
            this._names = Ri(t.getAttribute("class") || "")
        }
        function Ui(t, e) {
            for (var n = Bi(t), r = -1, i = e.length; ++r < i; )
                n.add(e[r])
        }
        function Hi(t, e) {
            for (var n = Bi(t), r = -1, i = e.length; ++r < i; )
                n.remove(e[r])
        }
        function Fi(t) {
            return function() {
                Ui(this, t)
            }
        }
        function Ii(t) {
            return function() {
                Hi(this, t)
            }
        }
        function zi(t, e) {
            return function() {
                (e.apply(this, arguments) ? Ui : Hi)(this, t)
            }
        }
        $i.prototype = {
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
        function qi() {
            this.textContent = ""
        }
        function Yi(t) {
            return function() {
                this.textContent = t
            }
        }
        function Vi(t) {
            return function() {
                var e = t.apply(this, arguments);
                this.textContent = null == e ? "" : e
            }
        }
        function Wi() {
            this.innerHTML = ""
        }
        function Gi(t) {
            return function() {
                this.innerHTML = t
            }
        }
        function Xi(t) {
            return function() {
                var e = t.apply(this, arguments);
                this.innerHTML = null == e ? "" : e
            }
        }
        function Zi() {
            this.nextSibling && this.parentNode.appendChild(this)
        }
        function Ji() {
            this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
        }
        function Ki() {
            return null
        }
        function Qi() {
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
          , ro = null;
        "undefined" != typeof document && ("onmouseenter"in document.documentElement || (no = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }));
        function io(t, e, n) {
            return t = oo(t, e, n),
            function(e) {
                var n = e.relatedTarget;
                n && (n === this || 8 & n.compareDocumentPosition(this)) || t.call(this, e)
            }
        }
        function oo(t, e, n) {
            return function(r) {
                var i = ro;
                ro = r;
                try {
                    t.call(this, this.__data__, e, n)
                } finally {
                    ro = i
                }
            }
        }
        function ao(t) {
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
        function so(t) {
            return function() {
                var e = this.__on;
                if (e) {
                    for (var n, r = 0, i = -1, o = e.length; r < o; ++r)
                        n = e[r],
                        t.type && n.type !== t.type || n.name !== t.name ? e[++i] = n : this.removeEventListener(n.type, n.listener, n.capture);
                    ++i ? e.length = i : delete this.__on
                }
            }
        }
        function uo(t, e, n) {
            var r = no.hasOwnProperty(t.type) ? io : oo;
            return function(i, o, a) {
                var s, u = this.__on, c = r(e, o, a);
                if (u)
                    for (var l = 0, f = u.length; l < f; ++l)
                        if ((s = u[l]).type === t.type && s.name === t.name)
                            return this.removeEventListener(s.type, s.listener, s.capture),
                            this.addEventListener(s.type, s.listener = c, s.capture = n),
                            void (s.value = e);
                this.addEventListener(t.type, c, n),
                s = {
                    type: t.type,
                    name: t.name,
                    value: e,
                    listener: c,
                    capture: n
                },
                u ? u.push(s) : this.__on = [s]
            }
        }
        function co(t, e, n) {
            var r = Ci(t)
              , i = r.CustomEvent;
            "function" == typeof i ? i = new i(e,n) : (i = r.document.createEvent("Event"),
            n ? (i.initEvent(e, n.bubbles, n.cancelable),
            i.detail = n.detail) : i.initEvent(e, !1, !1)),
            t.dispatchEvent(i)
        }
        function lo(t, e) {
            return function() {
                return co(this, t, e)
            }
        }
        function fo(t, e) {
            return function() {
                return co(this, t, e.apply(this, arguments))
            }
        }
        var ho = [null];
        function po(t, e) {
            this._groups = t,
            this._parents = e
        }
        function _o() {
            return new po([[document.documentElement]],ho)
        }
        po.prototype = _o.prototype = {
            constructor: po,
            select: function(t) {
                "function" != typeof t && (t = di(t));
                for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
                    for (var o, a, s = e[i], u = s.length, c = r[i] = new Array(u), l = 0; l < u; ++l)
                        (o = s[l]) && (a = t.call(o, o.__data__, l, s)) && ("__data__"in o && (a.__data__ = o.__data__),
                        c[l] = a);
                return new po(r,this._parents)
            },
            selectAll: function(t) {
                "function" != typeof t && (t = _i(t));
                for (var e = this._groups, n = e.length, r = [], i = [], o = 0; o < n; ++o)
                    for (var a, s = e[o], u = s.length, c = 0; c < u; ++c)
                        (a = s[c]) && (r.push(t.call(a, a.__data__, c, s)),
                        i.push(a));
                return new po(r,i)
            },
            filter: function(t) {
                "function" != typeof t && (t = vi(t));
                for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
                    for (var o, a = e[i], s = a.length, u = r[i] = [], c = 0; c < s; ++c)
                        (o = a[c]) && t.call(o, o.__data__, c, a) && u.push(o);
                return new po(r,this._parents)
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
                var n, r = e ? xi : yi, i = this._parents, o = this._groups;
                "function" != typeof t && (n = t,
                t = function() {
                    return n
                }
                );
                for (var a = o.length, s = new Array(a), u = new Array(a), c = new Array(a), l = 0; l < a; ++l) {
                    var f = i[l]
                      , h = o[l]
                      , d = h.length
                      , p = t.call(f, f && f.__data__, l, i)
                      , _ = p.length
                      , v = u[l] = new Array(_)
                      , g = s[l] = new Array(_);
                    r(f, h, v, g, c[l] = new Array(d), p, e);
                    for (var m, y, x = 0, b = 0; x < _; ++x)
                        if (m = v[x]) {
                            for (x >= b && (b = x + 1); !(y = g[b]) && ++b < _; )
                                ;
                            m._next = y || null
                        }
                }
                return (s = new po(s,i))._enter = u,
                s._exit = c,
                s
            },
            enter: function() {
                return new po(this._enter || this._groups.map(gi),this._parents)
            },
            exit: function() {
                return new po(this._exit || this._groups.map(gi),this._parents)
            },
            join: function(t, e, n) {
                var r = this.enter()
                  , i = this
                  , o = this.exit();
                return r = "function" == typeof t ? t(r) : r.append(t + ""),
                null != e && (i = e(i)),
                null == n ? o.remove() : n(o),
                r && i ? r.merge(i).order() : i
            },
            merge: function(t) {
                for (var e = this._groups, n = t._groups, r = e.length, i = n.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
                    for (var u, c = e[s], l = n[s], f = c.length, h = a[s] = new Array(f), d = 0; d < f; ++d)
                        (u = c[d] || l[d]) && (h[d] = u);
                for (; s < r; ++s)
                    a[s] = e[s];
                return new po(a,this._parents)
            },
            order: function() {
                for (var t = this._groups, e = -1, n = t.length; ++e < n; )
                    for (var r, i = t[e], o = i.length - 1, a = i[o]; --o >= 0; )
                        (r = i[o]) && (a && 4 ^ r.compareDocumentPosition(a) && a.parentNode.insertBefore(r, a),
                        a = r);
                return this
            },
            sort: function(t) {
                function e(e, n) {
                    return e && n ? t(e.__data__, n.__data__) : !e - !n
                }
                t || (t = bi);
                for (var n = this._groups, r = n.length, i = new Array(r), o = 0; o < r; ++o) {
                    for (var a, s = n[o], u = s.length, c = i[o] = new Array(u), l = 0; l < u; ++l)
                        (a = s[l]) && (c[l] = a);
                    c.sort(e)
                }
                return new po(i,this._parents).order()
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
                    for (var r = t[e], i = 0, o = r.length; i < o; ++i) {
                        var a = r[i];
                        if (a)
                            return a
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
                for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
                    for (var i, o = e[n], a = 0, s = o.length; a < s; ++a)
                        (i = o[a]) && t.call(i, i.__data__, a, o);
                return this
            },
            attr: function(t, e) {
                var n = ui(t);
                if (arguments.length < 2) {
                    var r = this.node();
                    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n)
                }
                return this.each((null == e ? n.local ? ki : wi : "function" == typeof e ? n.local ? Si : Mi : n.local ? Ei : Ti)(n, e))
            },
            style: function(t, e, n) {
                return arguments.length > 1 ? this.each((null == e ? Ai : "function" == typeof e ? ji : Ni)(t, e, null == n ? "" : n)) : Li(this.node(), t)
            },
            property: function(t, e) {
                return arguments.length > 1 ? this.each((null == e ? Oi : "function" == typeof e ? Di : Pi)(t, e)) : this.node()[t]
            },
            classed: function(t, e) {
                var n = Ri(t + "");
                if (arguments.length < 2) {
                    for (var r = Bi(this.node()), i = -1, o = n.length; ++i < o; )
                        if (!r.contains(n[i]))
                            return !1;
                    return !0
                }
                return this.each(("function" == typeof e ? zi : e ? Fi : Ii)(n, e))
            },
            text: function(t) {
                return arguments.length ? this.each(null == t ? qi : ("function" == typeof t ? Vi : Yi)(t)) : this.node().textContent
            },
            html: function(t) {
                return arguments.length ? this.each(null == t ? Wi : ("function" == typeof t ? Xi : Gi)(t)) : this.node().innerHTML
            },
            raise: function() {
                return this.each(Zi)
            },
            lower: function() {
                return this.each(Ji)
            },
            append: function(t) {
                var e = "function" == typeof t ? t : fi(t);
                return this.select((function() {
                    return this.appendChild(e.apply(this, arguments))
                }
                ))
            },
            insert: function(t, e) {
                var n = "function" == typeof t ? t : fi(t)
                  , r = null == e ? Ki : "function" == typeof e ? e : di(e);
                return this.select((function() {
                    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null)
                }
                ))
            },
            remove: function() {
                return this.each(Qi)
            },
            clone: function(t) {
                return this.select(t ? eo : to)
            },
            datum: function(t) {
                return arguments.length ? this.property("__data__", t) : this.node().__data__
            },
            on: function(t, e, n) {
                var r, i, o = ao(t + ""), a = o.length;
                if (!(arguments.length < 2)) {
                    for (s = e ? uo : so,
                    null == n && (n = !1),
                    r = 0; r < a; ++r)
                        this.each(s(o[r], e, n));
                    return this
                }
                var s = this.node().__on;
                if (s)
                    for (var u, c = 0, l = s.length; c < l; ++c)
                        for (r = 0,
                        u = s[c]; r < a; ++r)
                            if ((i = o[r]).type === u.type && i.name === u.name)
                                return u.value
            },
            dispatch: function(t, e) {
                return this.each(("function" == typeof e ? fo : lo)(t, e))
            }
        };
        var vo = _o
          , go = function(t) {
            return "string" == typeof t ? new po([[document.querySelector(t)]],[document.documentElement]) : new po([[t]],ho)
        }
          , mo = 0;
        function yo() {
            this._ = "@" + (++mo).toString(36)
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
        var xo = function() {
            for (var t, e = ro; t = e.sourceEvent; )
                e = t;
            return e
        }
          , bo = function(t, e) {
            var n = t.ownerSVGElement || t;
            if (n.createSVGPoint) {
                var r = n.createSVGPoint();
                return r.x = e.clientX,
                r.y = e.clientY,
                [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y]
            }
            var i = t.getBoundingClientRect();
            return [e.clientX - i.left - t.clientLeft, e.clientY - i.top - t.clientTop]
        }
          , wo = {
            value: function() {}
        };
        function ko() {
            for (var t, e = 0, n = arguments.length, r = {}; e < n; ++e) {
                if (!(t = arguments[e] + "") || t in r || /[\s.]/.test(t))
                    throw new Error("illegal type: " + t);
                r[t] = []
            }
            return new To(r)
        }
        function To(t) {
            this._ = t
        }
        function Eo(t, e) {
            return t.trim().split(/^|\s+/).map((function(t) {
                var n = ""
                  , r = t.indexOf(".");
                if (r >= 0 && (n = t.slice(r + 1),
                t = t.slice(0, r)),
                t && !e.hasOwnProperty(t))
                    throw new Error("unknown type: " + t);
                return {
                    type: t,
                    name: n
                }
            }
            ))
        }
        function Mo(t, e) {
            for (var n, r = 0, i = t.length; r < i; ++r)
                if ((n = t[r]).name === e)
                    return n.value
        }
        function So(t, e, n) {
            for (var r = 0, i = t.length; r < i; ++r)
                if (t[r].name === e) {
                    t[r] = wo,
                    t = t.slice(0, r).concat(t.slice(r + 1));
                    break
                }
            return null != n && t.push({
                name: e,
                value: n
            }),
            t
        }
        To.prototype = ko.prototype = {
            constructor: To,
            on: function(t, e) {
                var n, r = this._, i = Eo(t + "", r), o = -1, a = i.length;
                if (!(arguments.length < 2)) {
                    if (null != e && "function" != typeof e)
                        throw new Error("invalid callback: " + e);
                    for (; ++o < a; )
                        if (n = (t = i[o]).type)
                            r[n] = So(r[n], t.name, e);
                        else if (null == e)
                            for (n in r)
                                r[n] = So(r[n], t.name, null);
                    return this
                }
                for (; ++o < a; )
                    if ((n = (t = i[o]).type) && (n = Mo(r[n], t.name)))
                        return n
            },
            copy: function() {
                var t = {}
                  , e = this._;
                for (var n in e)
                    t[n] = e[n].slice();
                return new To(t)
            },
            call: function(t, e) {
                if ((n = arguments.length - 2) > 0)
                    for (var n, r, i = new Array(n), o = 0; o < n; ++o)
                        i[o] = arguments[o + 2];
                if (!this._.hasOwnProperty(t))
                    throw new Error("unknown type: " + t);
                for (o = 0,
                n = (r = this._[t]).length; o < n; ++o)
                    r[o].value.apply(e, i)
            },
            apply: function(t, e, n) {
                if (!this._.hasOwnProperty(t))
                    throw new Error("unknown type: " + t);
                for (var r = this._[t], i = 0, o = r.length; i < o; ++i)
                    r[i].value.apply(e, n)
            }
        };
        var Co, Ao, No = ko, jo = 0, Lo = 0, Oo = 0, Po = 0, Do = 0, Ro = 0, Bo = "object" == typeof performance && performance.now ? performance : Date, $o = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
            setTimeout(t, 17)
        }
        ;
        function Uo() {
            return Do || ($o(Ho),
            Do = Bo.now() + Ro)
        }
        function Ho() {
            Do = 0
        }
        function Fo() {
            this._call = this._time = this._next = null
        }
        function Io(t, e, n) {
            var r = new Fo;
            return r.restart(t, e, n),
            r
        }
        function zo() {
            Do = (Po = Bo.now()) + Ro,
            jo = Lo = 0;
            try {
                !function() {
                    Uo(),
                    ++jo;
                    for (var t, e = Co; e; )
                        (t = Do - e._time) >= 0 && e._call.call(null, t),
                        e = e._next;
                    --jo
                }()
            } finally {
                jo = 0,
                function() {
                    var t, e, n = Co, r = 1 / 0;
                    for (; n; )
                        n._call ? (r > n._time && (r = n._time),
                        t = n,
                        n = n._next) : (e = n._next,
                        n._next = null,
                        n = t ? t._next = e : Co = e);
                    Ao = t,
                    Yo(r)
                }(),
                Do = 0
            }
        }
        function qo() {
            var t = Bo.now()
              , e = t - Po;
            e > 1e3 && (Ro -= e,
            Po = t)
        }
        function Yo(t) {
            jo || (Lo && (Lo = clearTimeout(Lo)),
            t - Do > 24 ? (t < 1 / 0 && (Lo = setTimeout(zo, t - Bo.now() - Ro)),
            Oo && (Oo = clearInterval(Oo))) : (Oo || (Po = Bo.now(),
            Oo = setInterval(qo, 1e3)),
            jo = 1,
            $o(zo)))
        }
        Fo.prototype = Io.prototype = {
            constructor: Fo,
            restart: function(t, e, n) {
                if ("function" != typeof t)
                    throw new TypeError("callback is not a function");
                n = (null == n ? Uo() : +n) + (null == e ? 0 : +e),
                this._next || Ao === this || (Ao ? Ao._next = this : Co = this,
                Ao = this),
                this._call = t,
                this._time = n,
                Yo()
            },
            stop: function() {
                this._call && (this._call = null,
                this._time = 1 / 0,
                Yo())
            }
        };
        var Vo = function(t, e, n) {
            var r = new Fo;
            return e = null == e ? 0 : +e,
            r.restart((function(n) {
                r.stop(),
                t(n + e)
            }
            ), e, n),
            r
        }
          , Wo = No("start", "end", "cancel", "interrupt")
          , Go = []
          , Xo = function(t, e, n, r, i, o) {
            var a = t.__transition;
            if (a) {
                if (n in a)
                    return
            } else
                t.__transition = {};
            !function(t, e, n) {
                var r, i = t.__transition;
                function o(t) {
                    n.state = 1,
                    n.timer.restart(a, n.delay, n.time),
                    n.delay <= t && a(t - n.delay)
                }
                function a(o) {
                    var c, l, f, h;
                    if (1 !== n.state)
                        return u();
                    for (c in i)
                        if ((h = i[c]).name === n.name) {
                            if (3 === h.state)
                                return Vo(a);
                            4 === h.state ? (h.state = 6,
                            h.timer.stop(),
                            h.on.call("interrupt", t, t.__data__, h.index, h.group),
                            delete i[c]) : +c < e && (h.state = 6,
                            h.timer.stop(),
                            h.on.call("cancel", t, t.__data__, h.index, h.group),
                            delete i[c])
                        }
                    if (Vo((function() {
                        3 === n.state && (n.state = 4,
                        n.timer.restart(s, n.delay, n.time),
                        s(o))
                    }
                    )),
                    n.state = 2,
                    n.on.call("start", t, t.__data__, n.index, n.group),
                    2 === n.state) {
                        for (n.state = 3,
                        r = new Array(f = n.tween.length),
                        c = 0,
                        l = -1; c < f; ++c)
                            (h = n.tween[c].value.call(t, t.__data__, n.index, n.group)) && (r[++l] = h);
                        r.length = l + 1
                    }
                }
                function s(e) {
                    for (var i = e < n.duration ? n.ease.call(null, e / n.duration) : (n.timer.restart(u),
                    n.state = 5,
                    1), o = -1, a = r.length; ++o < a; )
                        r[o].call(t, i);
                    5 === n.state && (n.on.call("end", t, t.__data__, n.index, n.group),
                    u())
                }
                function u() {
                    for (var r in n.state = 6,
                    n.timer.stop(),
                    delete i[e],
                    i)
                        return;
                    delete t.__transition
                }
                i[e] = n,
                n.timer = Io(o, 0, n.time)
            }(t, n, {
                name: e,
                index: r,
                group: i,
                on: Wo,
                tween: Go,
                time: o.time,
                delay: o.delay,
                duration: o.duration,
                ease: o.ease,
                timer: null,
                state: 0
            })
        };
        function Zo(t, e) {
            var n = Ko(t, e);
            if (n.state > 0)
                throw new Error("too late; already scheduled");
            return n
        }
        function Jo(t, e) {
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
        var Qo, ta, ea, na, ra = 180 / Math.PI, ia = {
            translateX: 0,
            translateY: 0,
            rotate: 0,
            skewX: 0,
            scaleX: 1,
            scaleY: 1
        }, oa = function(t, e, n, r, i, o) {
            var a, s, u;
            return (a = Math.sqrt(t * t + e * e)) && (t /= a,
            e /= a),
            (u = t * n + e * r) && (n -= t * u,
            r -= e * u),
            (s = Math.sqrt(n * n + r * r)) && (n /= s,
            r /= s,
            u /= s),
            t * r < e * n && (t = -t,
            e = -e,
            u = -u,
            a = -a),
            {
                translateX: i,
                translateY: o,
                rotate: Math.atan2(e, t) * ra,
                skewX: Math.atan(u) * ra,
                scaleX: a,
                scaleY: s
            }
        };
        function aa(t, e, n, r) {
            function i(t) {
                return t.length ? t.pop() + " " : ""
            }
            return function(o, a) {
                var s = []
                  , u = [];
                return o = t(o),
                a = t(a),
                function(t, r, i, o, a, s) {
                    if (t !== i || r !== o) {
                        var u = a.push("translate(", null, e, null, n);
                        s.push({
                            i: u - 4,
                            x: ae(t, i)
                        }, {
                            i: u - 2,
                            x: ae(r, o)
                        })
                    } else
                        (i || o) && a.push("translate(" + i + e + o + n)
                }(o.translateX, o.translateY, a.translateX, a.translateY, s, u),
                function(t, e, n, o) {
                    t !== e ? (t - e > 180 ? e += 360 : e - t > 180 && (t += 360),
                    o.push({
                        i: n.push(i(n) + "rotate(", null, r) - 2,
                        x: ae(t, e)
                    })) : e && n.push(i(n) + "rotate(" + e + r)
                }(o.rotate, a.rotate, s, u),
                function(t, e, n, o) {
                    t !== e ? o.push({
                        i: n.push(i(n) + "skewX(", null, r) - 2,
                        x: ae(t, e)
                    }) : e && n.push(i(n) + "skewX(" + e + r)
                }(o.skewX, a.skewX, s, u),
                function(t, e, n, r, o, a) {
                    if (t !== n || e !== r) {
                        var s = o.push(i(o) + "scale(", null, ",", null, ")");
                        a.push({
                            i: s - 4,
                            x: ae(t, n)
                        }, {
                            i: s - 2,
                            x: ae(e, r)
                        })
                    } else
                        1 === n && 1 === r || o.push(i(o) + "scale(" + n + "," + r + ")")
                }(o.scaleX, o.scaleY, a.scaleX, a.scaleY, s, u),
                o = a = null,
                function(t) {
                    for (var e, n = -1, r = u.length; ++n < r; )
                        s[(e = u[n]).i] = e.x(t);
                    return s.join("")
                }
            }
        }
        var sa = aa((function(t) {
            return "none" === t ? ia : (Qo || (Qo = document.createElement("DIV"),
            ta = document.documentElement,
            ea = document.defaultView),
            Qo.style.transform = t,
            t = ea.getComputedStyle(ta.appendChild(Qo), null).getPropertyValue("transform"),
            ta.removeChild(Qo),
            t = t.slice(7, -1).split(","),
            oa(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
        }
        ), "px, ", "px)", "deg)")
          , ua = aa((function(t) {
            return null == t ? ia : (na || (na = document.createElementNS("http://www.w3.org/2000/svg", "g")),
            na.setAttribute("transform", t),
            (t = na.transform.baseVal.consolidate()) ? (t = t.matrix,
            oa(t.a, t.b, t.c, t.d, t.e, t.f)) : ia)
        }
        ), ", ", ")", ")");
        function ca(t, e) {
            var n, r;
            return function() {
                var i = Jo(this, t)
                  , o = i.tween;
                if (o !== n)
                    for (var a = 0, s = (r = n = o).length; a < s; ++a)
                        if (r[a].name === e) {
                            (r = r.slice()).splice(a, 1);
                            break
                        }
                i.tween = r
            }
        }
        function la(t, e, n) {
            var r, i;
            if ("function" != typeof n)
                throw new Error;
            return function() {
                var o = Jo(this, t)
                  , a = o.tween;
                if (a !== r) {
                    i = (r = a).slice();
                    for (var s = {
                        name: e,
                        value: n
                    }, u = 0, c = i.length; u < c; ++u)
                        if (i[u].name === e) {
                            i[u] = s;
                            break
                        }
                    u === c && i.push(s)
                }
                o.tween = i
            }
        }
        function fa(t, e, n) {
            var r = t._id;
            return t.each((function() {
                var t = Jo(this, r);
                (t.value || (t.value = {}))[e] = n.apply(this, arguments)
            }
            )),
            function(t) {
                return Ko(t, r).value[e]
            }
        }
        var ha = function(t, e) {
            var n;
            return ("number" == typeof e ? ae : e instanceof Rt ? te : (n = Rt(e)) ? (e = n,
            te) : le)(t, e)
        };
        function da(t) {
            return function() {
                this.removeAttribute(t)
            }
        }
        function pa(t) {
            return function() {
                this.removeAttributeNS(t.space, t.local)
            }
        }
        function _a(t, e, n) {
            var r, i, o = n + "";
            return function() {
                var a = this.getAttribute(t);
                return a === o ? null : a === r ? i : i = e(r = a, n)
            }
        }
        function va(t, e, n) {
            var r, i, o = n + "";
            return function() {
                var a = this.getAttributeNS(t.space, t.local);
                return a === o ? null : a === r ? i : i = e(r = a, n)
            }
        }
        function ga(t, e, n) {
            var r, i, o;
            return function() {
                var a, s, u = n(this);
                if (null != u)
                    return (a = this.getAttribute(t)) === (s = u + "") ? null : a === r && s === i ? o : (i = s,
                    o = e(r = a, u));
                this.removeAttribute(t)
            }
        }
        function ma(t, e, n) {
            var r, i, o;
            return function() {
                var a, s, u = n(this);
                if (null != u)
                    return (a = this.getAttributeNS(t.space, t.local)) === (s = u + "") ? null : a === r && s === i ? o : (i = s,
                    o = e(r = a, u));
                this.removeAttributeNS(t.space, t.local)
            }
        }
        function ya(t, e) {
            return function(n) {
                this.setAttribute(t, e(n))
            }
        }
        function xa(t, e) {
            return function(n) {
                this.setAttributeNS(t.space, t.local, e(n))
            }
        }
        function ba(t, e) {
            var n, r;
            function i() {
                var i = e.apply(this, arguments);
                return i !== r && (n = (r = i) && xa(t, i)),
                n
            }
            return i._value = e,
            i
        }
        function wa(t, e) {
            var n, r;
            function i() {
                var i = e.apply(this, arguments);
                return i !== r && (n = (r = i) && ya(t, i)),
                n
            }
            return i._value = e,
            i
        }
        function ka(t, e) {
            return function() {
                Zo(this, t).delay = +e.apply(this, arguments)
            }
        }
        function Ta(t, e) {
            return e = +e,
            function() {
                Zo(this, t).delay = e
            }
        }
        function Ea(t, e) {
            return function() {
                Jo(this, t).duration = +e.apply(this, arguments)
            }
        }
        function Ma(t, e) {
            return e = +e,
            function() {
                Jo(this, t).duration = e
            }
        }
        function Sa(t, e) {
            if ("function" != typeof e)
                throw new Error;
            return function() {
                Jo(this, t).ease = e
            }
        }
        function Ca(t, e, n) {
            var r, i, o = function(t) {
                return (t + "").trim().split(/^|\s+/).every((function(t) {
                    var e = t.indexOf(".");
                    return e >= 0 && (t = t.slice(0, e)),
                    !t || "start" === t
                }
                ))
            }(e) ? Zo : Jo;
            return function() {
                var a = o(this, t)
                  , s = a.on;
                s !== r && (i = (r = s).copy()).on(e, n),
                a.on = i
            }
        }
        var Aa = vo.prototype.constructor;
        function Na(t) {
            return function() {
                this.style.removeProperty(t)
            }
        }
        function ja(t, e, n) {
            return function(r) {
                this.style.setProperty(t, e(r), n)
            }
        }
        function La(t, e, n) {
            var r, i;
            function o() {
                var o = e.apply(this, arguments);
                return o !== i && (r = (i = o) && ja(t, o, n)),
                r
            }
            return o._value = e,
            o
        }
        var Oa = 0;
        function Pa(t, e, n, r) {
            this._groups = t,
            this._parents = e,
            this._name = n,
            this._id = r
        }
        function Da(t) {
            return vo().transition(t)
        }
        function Ra() {
            return ++Oa
        }
        var Ba = vo.prototype;
        Pa.prototype = Da.prototype = {
            constructor: Pa,
            select: function(t) {
                var e = this._name
                  , n = this._id;
                "function" != typeof t && (t = di(t));
                for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
                    for (var s, u, c = r[a], l = c.length, f = o[a] = new Array(l), h = 0; h < l; ++h)
                        (s = c[h]) && (u = t.call(s, s.__data__, h, c)) && ("__data__"in s && (u.__data__ = s.__data__),
                        f[h] = u,
                        Xo(f[h], e, n, h, f, Ko(s, n)));
                return new Pa(o,this._parents,e,n)
            },
            selectAll: function(t) {
                var e = this._name
                  , n = this._id;
                "function" != typeof t && (t = _i(t));
                for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
                    for (var u, c = r[s], l = c.length, f = 0; f < l; ++f)
                        if (u = c[f]) {
                            for (var h, d = t.call(u, u.__data__, f, c), p = Ko(u, n), _ = 0, v = d.length; _ < v; ++_)
                                (h = d[_]) && Xo(h, e, n, _, d, p);
                            o.push(d),
                            a.push(u)
                        }
                return new Pa(o,a,e,n)
            },
            filter: function(t) {
                "function" != typeof t && (t = vi(t));
                for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
                    for (var o, a = e[i], s = a.length, u = r[i] = [], c = 0; c < s; ++c)
                        (o = a[c]) && t.call(o, o.__data__, c, a) && u.push(o);
                return new Pa(r,this._parents,this._name,this._id)
            },
            merge: function(t) {
                if (t._id !== this._id)
                    throw new Error;
                for (var e = this._groups, n = t._groups, r = e.length, i = n.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
                    for (var u, c = e[s], l = n[s], f = c.length, h = a[s] = new Array(f), d = 0; d < f; ++d)
                        (u = c[d] || l[d]) && (h[d] = u);
                for (; s < r; ++s)
                    a[s] = e[s];
                return new Pa(a,this._parents,this._name,this._id)
            },
            selection: function() {
                return new Aa(this._groups,this._parents)
            },
            transition: function() {
                for (var t = this._name, e = this._id, n = Ra(), r = this._groups, i = r.length, o = 0; o < i; ++o)
                    for (var a, s = r[o], u = s.length, c = 0; c < u; ++c)
                        if (a = s[c]) {
                            var l = Ko(a, e);
                            Xo(a, t, n, c, s, {
                                time: l.time + l.delay + l.duration,
                                delay: 0,
                                duration: l.duration,
                                ease: l.ease
                            })
                        }
                return new Pa(r,this._parents,t,n)
            },
            call: Ba.call,
            nodes: Ba.nodes,
            node: Ba.node,
            size: Ba.size,
            empty: Ba.empty,
            each: Ba.each,
            on: function(t, e) {
                var n = this._id;
                return arguments.length < 2 ? Ko(this.node(), n).on.on(t) : this.each(Ca(n, t, e))
            },
            attr: function(t, e) {
                var n = ui(t)
                  , r = "transform" === n ? ua : ha;
                return this.attrTween(t, "function" == typeof e ? (n.local ? ma : ga)(n, r, fa(this, "attr." + t, e)) : null == e ? (n.local ? pa : da)(n) : (n.local ? va : _a)(n, r, e))
            },
            attrTween: function(t, e) {
                var n = "attr." + t;
                if (arguments.length < 2)
                    return (n = this.tween(n)) && n._value;
                if (null == e)
                    return this.tween(n, null);
                if ("function" != typeof e)
                    throw new Error;
                var r = ui(t);
                return this.tween(n, (r.local ? ba : wa)(r, e))
            },
            style: function(t, e, n) {
                var r = "transform" == (t += "") ? sa : ha;
                return null == e ? this.styleTween(t, function(t, e) {
                    var n, r, i;
                    return function() {
                        var o = Li(this, t)
                          , a = (this.style.removeProperty(t),
                        Li(this, t));
                        return o === a ? null : o === n && a === r ? i : i = e(n = o, r = a)
                    }
                }(t, r)).on("end.style." + t, Na(t)) : "function" == typeof e ? this.styleTween(t, function(t, e, n) {
                    var r, i, o;
                    return function() {
                        var a = Li(this, t)
                          , s = n(this)
                          , u = s + "";
                        return null == s && (this.style.removeProperty(t),
                        u = s = Li(this, t)),
                        a === u ? null : a === r && u === i ? o : (i = u,
                        o = e(r = a, s))
                    }
                }(t, r, fa(this, "style." + t, e))).each(function(t, e) {
                    var n, r, i, o, a = "style." + e, s = "end." + a;
                    return function() {
                        var u = Jo(this, t)
                          , c = u.on
                          , l = null == u.value[a] ? o || (o = Na(e)) : void 0;
                        c === n && i === l || (r = (n = c).copy()).on(s, i = l),
                        u.on = r
                    }
                }(this._id, t)) : this.styleTween(t, function(t, e, n) {
                    var r, i, o = n + "";
                    return function() {
                        var a = Li(this, t);
                        return a === o ? null : a === r ? i : i = e(r = a, n)
                    }
                }(t, r, e), n).on("end.style." + t, null)
            },
            styleTween: function(t, e, n) {
                var r = "style." + (t += "");
                if (arguments.length < 2)
                    return (r = this.tween(r)) && r._value;
                if (null == e)
                    return this.tween(r, null);
                if ("function" != typeof e)
                    throw new Error;
                return this.tween(r, La(t, e, null == n ? "" : n))
            },
            text: function(t) {
                return this.tween("text", "function" == typeof t ? function(t) {
                    return function() {
                        var e = t(this);
                        this.textContent = null == e ? "" : e
                    }
                }(fa(this, "text", t)) : function(t) {
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
                    for (var r, i = Ko(this.node(), n).tween, o = 0, a = i.length; o < a; ++o)
                        if ((r = i[o]).name === t)
                            return r.value;
                    return null
                }
                return this.each((null == e ? ca : la)(n, t, e))
            },
            delay: function(t) {
                var e = this._id;
                return arguments.length ? this.each(("function" == typeof t ? ka : Ta)(e, t)) : Ko(this.node(), e).delay
            },
            duration: function(t) {
                var e = this._id;
                return arguments.length ? this.each(("function" == typeof t ? Ea : Ma)(e, t)) : Ko(this.node(), e).duration
            },
            ease: function(t) {
                var e = this._id;
                return arguments.length ? this.each(Sa(e, t)) : Ko(this.node(), e).ease
            },
            end: function() {
                var t, e, n = this, r = n._id, i = n.size();
                return new Promise((function(o, a) {
                    var s = {
                        value: a
                    }
                      , u = {
                        value: function() {
                            0 == --i && o()
                        }
                    };
                    n.each((function() {
                        var n = Jo(this, r)
                          , i = n.on;
                        i !== t && ((e = (t = i).copy())._.cancel.push(s),
                        e._.interrupt.push(s),
                        e._.end.push(u)),
                        n.on = e
                    }
                    ))
                }
                ))
            }
        };
        var $a = {
            time: null,
            delay: 0,
            duration: 250,
            ease: function(t) {
                return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
            }
        };
        function Ua(t, e) {
            for (var n; !(n = t.__transition) || !(n = n[e]); )
                if (!(t = t.parentNode))
                    return $a.time = Uo(),
                    $a;
            return n
        }
        vo.prototype.interrupt = function(t) {
            return this.each((function() {
                !function(t, e) {
                    var n, r, i, o = t.__transition, a = !0;
                    if (o) {
                        for (i in e = null == e ? null : e + "",
                        o)
                            (n = o[i]).name === e ? (r = n.state > 2 && n.state < 5,
                            n.state = 6,
                            n.timer.stop(),
                            n.on.call(r ? "interrupt" : "cancel", t, t.__data__, n.index, n.group),
                            delete o[i]) : a = !1;
                        a && delete t.__transition
                    }
                }(this, t)
            }
            ))
        }
        ,
        vo.prototype.transition = function(t) {
            var e, n;
            t instanceof Pa ? (e = t._id,
            t = t._name) : (e = Ra(),
            (n = $a).time = Uo(),
            t = null == t ? null : t + "");
            for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
                for (var a, s = r[o], u = s.length, c = 0; c < u; ++c)
                    (a = s[c]) && Xo(a, t, e, c, s, n || Ua(a, e));
            return new Pa(r,this._parents,t,e)
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
            bisector: it,
            extent: ut,
            line: m,
            max: function(t, e) {
                let n;
                if (void 0 === e)
                    for (const e of t)
                        null != e && (n < e || void 0 === n && e >= e) && (n = e);
                else {
                    let r = -1;
                    for (let i of t)
                        null != (i = e(i, ++r, t)) && (n < i || void 0 === n && i >= i) && (n = i)
                }
                return n
            },
            min: vt,
            mouse: function(t) {
                var e = xo();
                return e.changedTouches && (e = e.changedTouches[0]),
                bo(t, e)
            },
            scaleLinear: function t() {
                var e = we(_e, _e);
                return e.copy = function() {
                    return xe(e, t())
                }
                ,
                gt.apply(e, arguments),
                $e(e)
            },
            scaleUtc: function() {
                return gt.apply(oi(Ln, Nn, wn, xn, mn, vn, Je, qe, $n).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
            },
            select: go,
            transition: Da,
            timeDay: en,
            timeFormat: Bn,
            timeMonth: hn
        }
    },
    1: function(t, e, n) {
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
    },
    11: function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return i
        }
        )),
        n.d(e, "c", (function() {
            return o
        }
        )),
        n.d(e, "a", (function() {
            return a
        }
        ));
        var r = n(0);
        const i = (t,e)=>r.a.scaleUtc().domain(r.a.extent(t.chart, (t=>t.date))).range([e.margin.left, e.width - e.margin.right])
          , o = (t,e,n=1,i=1)=>r.a.scaleLinear().domain([r.a.min(t.chart, (t=>t.value * n)), r.a.max(t.chart, (t=>t.value * i))]).nice().range([e.height - e.margin.bottom, e.margin.top])
          , a = (t,e,n,i)=>{
            const o = e.invert(t)
              , a = r.a.bisector((t=>t.date)).left(i.chart, o, 1)
              , s = i.chart[a - 1]
              , u = i.chart[a]
              , c = null != s && null != u && o - s.date > u.date - o ? u : s
              , l = null != s && null != u && o - s.date > u.date - o ? s : u;
            return {
                xCoord: e(c.date),
                yCoord: n(c.value),
                date: c.date,
                value: c.value,
                priorValue: null != l ? l.value : i.chart.at(-2).value
            }
        }
    },
    16: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return A
        }
        ));
        var r = t=>{
            if ("function" == typeof t)
                return t;
            return function() {
                return t
            }
        }
          , i = "undefined" != typeof self ? self : null
          , o = "undefined" != typeof window ? window : null
          , a = i || o || a
          , s = 0
          , u = 1
          , c = 2
          , l = 3
          , f = "closed"
          , h = "errored"
          , d = "joined"
          , p = "joining"
          , _ = "leaving"
          , v = "phx_close"
          , g = "phx_error"
          , m = "phx_join"
          , y = "phx_reply"
          , x = "phx_leave"
          , b = "longpoll"
          , w = "websocket"
          , k = 4
          , T = class {
            constructor(t, e, n, r) {
                this.channel = t,
                this.event = e,
                this.payload = n || function() {
                    return {}
                }
                ,
                this.receivedResp = null,
                this.timeout = r,
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
          , E = class {
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
          , M = class {
            static request(t, e, n, r, i, o, s) {
                if (a.XDomainRequest) {
                    let n = new a.XDomainRequest;
                    return this.xdomainRequest(n, t, e, r, i, o, s)
                }
                {
                    let u = new a.XMLHttpRequest;
                    return this.xhrRequest(u, t, e, n, r, i, o, s)
                }
            }
            static xdomainRequest(t, e, n, r, i, o, a) {
                return t.timeout = i,
                t.open(e, n),
                t.onload = ()=>{
                    let e = this.parseJSON(t.responseText);
                    a && a(e)
                }
                ,
                o && (t.ontimeout = o),
                t.onprogress = ()=>{}
                ,
                t.send(r),
                t
            }
            static xhrRequest(t, e, n, r, i, o, a, s) {
                return t.open(e, n, !0),
                t.timeout = o,
                t.setRequestHeader("Content-Type", r),
                t.onerror = ()=>s && s(null),
                t.onreadystatechange = ()=>{
                    if (t.readyState === k && s) {
                        let e = this.parseJSON(t.responseText);
                        s(e)
                    }
                }
                ,
                a && (t.ontimeout = a),
                t.send(i),
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
                for (var r in t) {
                    if (!Object.prototype.hasOwnProperty.call(t, r))
                        continue;
                    let i = e ? `${e}[${r}]` : r
                      , o = t[r];
                    "object" == typeof o ? n.push(this.serialize(o, i)) : n.push(encodeURIComponent(i) + "=" + encodeURIComponent(o))
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
          , S = class {
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
                this.readyState = s,
                this.poll()
            }
            normalizeEndpoint(t) {
                return t.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + w), "$1/" + b)
            }
            endpointURL() {
                return M.appendParams(this.pollEndpoint, {
                    token: this.token
                })
            }
            closeAndRetry(t, e, n) {
                this.close(t, e, n),
                this.readyState = s
            }
            ontimeout() {
                this.onerror("timeout"),
                this.closeAndRetry(1005, "timeout", !1)
            }
            isActive() {
                return this.readyState === u || this.readyState === s
            }
            poll() {
                this.ajax("GET", "application/json", null, (()=>this.ontimeout()), (t=>{
                    if (t) {
                        var {status: e, token: n, messages: r} = t;
                        this.token = n
                    } else
                        e = 0;
                    switch (e) {
                    case 200:
                        r.forEach((t=>{
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
                        this.readyState = u,
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
                let r = Object.assign({
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
                "undefined" != typeof CloseEvent ? this.onclose(new CloseEvent("close",r)) : this.onclose(r)
            }
            ajax(t, e, n, r, i) {
                let o;
                o = M.request(t, this.endpointURL(), e, n, this.timeout, (()=>{
                    this.reqs.delete(o),
                    r()
                }
                ), (t=>{
                    this.reqs.delete(o),
                    this.isActive() && i(t)
                }
                )),
                this.reqs.add(o)
            }
        }
          , C = {
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
                    let[n,r,i,o,a] = JSON.parse(t);
                    return e({
                        join_ref: n,
                        ref: r,
                        topic: i,
                        event: o,
                        payload: a
                    })
                }
            },
            binaryEncode(t) {
                let {join_ref: e, ref: n, event: r, topic: i, payload: o} = t
                  , a = this.META_LENGTH + e.length + n.length + i.length + r.length
                  , s = new ArrayBuffer(this.HEADER_LENGTH + a)
                  , u = new DataView(s)
                  , c = 0;
                u.setUint8(c++, this.KINDS.push),
                u.setUint8(c++, e.length),
                u.setUint8(c++, n.length),
                u.setUint8(c++, i.length),
                u.setUint8(c++, r.length),
                Array.from(e, (t=>u.setUint8(c++, t.charCodeAt(0)))),
                Array.from(n, (t=>u.setUint8(c++, t.charCodeAt(0)))),
                Array.from(i, (t=>u.setUint8(c++, t.charCodeAt(0)))),
                Array.from(r, (t=>u.setUint8(c++, t.charCodeAt(0))));
                var l = new Uint8Array(s.byteLength + o.byteLength);
                return l.set(new Uint8Array(s), 0),
                l.set(new Uint8Array(o), s.byteLength),
                l.buffer
            },
            binaryDecode(t) {
                let e = new DataView(t)
                  , n = e.getUint8(0)
                  , r = new TextDecoder;
                switch (n) {
                case this.KINDS.push:
                    return this.decodePush(t, e, r);
                case this.KINDS.reply:
                    return this.decodeReply(t, e, r);
                case this.KINDS.broadcast:
                    return this.decodeBroadcast(t, e, r)
                }
            },
            decodePush(t, e, n) {
                let r = e.getUint8(1)
                  , i = e.getUint8(2)
                  , o = e.getUint8(3)
                  , a = this.HEADER_LENGTH + this.META_LENGTH - 1
                  , s = n.decode(t.slice(a, a + r));
                a += r;
                let u = n.decode(t.slice(a, a + i));
                a += i;
                let c = n.decode(t.slice(a, a + o));
                return a += o,
                {
                    join_ref: s,
                    ref: null,
                    topic: u,
                    event: c,
                    payload: t.slice(a, t.byteLength)
                }
            },
            decodeReply(t, e, n) {
                let r = e.getUint8(1)
                  , i = e.getUint8(2)
                  , o = e.getUint8(3)
                  , a = e.getUint8(4)
                  , s = this.HEADER_LENGTH + this.META_LENGTH
                  , u = n.decode(t.slice(s, s + r));
                s += r;
                let c = n.decode(t.slice(s, s + i));
                s += i;
                let l = n.decode(t.slice(s, s + o));
                s += o;
                let f = n.decode(t.slice(s, s + a));
                s += a;
                let h = t.slice(s, t.byteLength);
                return {
                    join_ref: u,
                    ref: c,
                    topic: l,
                    event: y,
                    payload: {
                        status: f,
                        response: h
                    }
                }
            },
            decodeBroadcast(t, e, n) {
                let r = e.getUint8(1)
                  , i = e.getUint8(2)
                  , o = this.HEADER_LENGTH + 2
                  , a = n.decode(t.slice(o, o + r));
                o += r;
                let s = n.decode(t.slice(o, o + i));
                return o += i,
                {
                    join_ref: null,
                    ref: null,
                    topic: a,
                    event: s,
                    payload: t.slice(o, t.byteLength)
                }
            }
        }
          , A = class {
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
                this.transport = e.transport || a.WebSocket || S,
                this.establishedConnections = 0,
                this.defaultEncoder = C.encode.bind(C),
                this.defaultDecoder = C.decode.bind(C),
                this.closeWasClean = !1,
                this.binaryType = e.binaryType || "arraybuffer",
                this.connectClock = 1,
                this.transport !== S ? (this.encode = e.encode || this.defaultEncoder,
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
                this.params = r(e.params || {}),
                this.endPoint = `${t}/${w}`,
                this.vsn = e.vsn || "2.0.0",
                this.heartbeatTimeoutTimer = null,
                this.heartbeatTimer = null,
                this.pendingHeartbeatRef = null,
                this.reconnectTimer = new E((()=>{
                    this.teardown((()=>this.connect()))
                }
                ),this.reconnectAfterMs)
            }
            getLongPollTransport() {
                return S
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
                let t = M.appendParams(M.appendParams(this.endPoint, this.params()), {
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
                this.params = r(t)),
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
                let r = this.onMessage((i=>{
                    i.ref === e && (this.off([r]),
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
                this.stateChangeCallbacks.error.forEach((([,r])=>{
                    r(t, e, n)
                }
                )),
                (e === this.transport || n > 0) && this.triggerChanError()
            }
            triggerChanError() {
                this.channels.forEach((t=>{
                    t.isErrored() || t.isLeaving() || t.isClosed() || t.trigger(g)
                }
                ))
            }
            connectionState() {
                switch (this.conn && this.conn.readyState) {
                case s:
                    return "connecting";
                case u:
                    return "open";
                case c:
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
                        this.state = f,
                        this.topic = t,
                        this.params = r(e || {}),
                        this.socket = n,
                        this.bindings = [],
                        this.bindingRef = 0,
                        this.timeout = this.socket.timeout,
                        this.joinedOnce = !1,
                        this.joinPush = new T(this,m,this.params,this.timeout),
                        this.pushBuffer = [],
                        this.stateChangeRefs = [],
                        this.rejoinTimer = new E((()=>{
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
                            this.state = h,
                            this.socket.isConnected() && this.rejoinTimer.scheduleTimeout()
                        }
                        )),
                        this.onClose((()=>{
                            this.rejoinTimer.reset(),
                            this.socket.hasLogger() && this.socket.log("channel", `close ${this.topic} ${this.joinRef()}`),
                            this.state = f,
                            this.socket.remove(this)
                        }
                        )),
                        this.onError((t=>{
                            this.socket.hasLogger() && this.socket.log("channel", `error ${this.topic}`, t),
                            this.isJoining() && this.joinPush.reset(),
                            this.state = h,
                            this.socket.isConnected() && this.rejoinTimer.scheduleTimeout()
                        }
                        )),
                        this.joinPush.receive("timeout", (()=>{
                            this.socket.hasLogger() && this.socket.log("channel", `timeout ${this.topic} (${this.joinRef()})`, this.joinPush.timeout),
                            new T(this,x,r({}),this.timeout).send(),
                            this.state = h,
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
                        this.on(v, t)
                    }
                    onError(t) {
                        return this.on(g, (e=>t(e)))
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
                        let r = new T(this,t,(function() {
                            return e
                        }
                        ),n);
                        return this.canPush() ? r.send() : (r.startTimeout(),
                        this.pushBuffer.push(r)),
                        r
                    }
                    leave(t=this.timeout) {
                        this.rejoinTimer.reset(),
                        this.joinPush.cancelTimeout(),
                        this.state = _;
                        let e = ()=>{
                            this.socket.hasLogger() && this.socket.log("channel", `leave ${this.topic}`),
                            this.trigger(v, "leave")
                        }
                          , n = new T(this,x,r({}),t);
                        return n.receive("ok", (()=>e())).receive("timeout", (()=>e())),
                        n.send(),
                        this.canPush() || n.trigger("ok", {}),
                        n
                    }
                    onMessage(t, e, n) {
                        return e
                    }
                    isMember(t, e, n, r) {
                        return !(this.topic !== t || r && r !== this.joinRef() && (this.socket.hasLogger() && this.socket.log("channel", "dropping outdated message", {
                            topic: t,
                            event: e,
                            payload: n,
                            joinRef: r
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
                    trigger(t, e, n, r) {
                        let i = this.onMessage(t, e, n, r);
                        if (e && !i)
                            throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");
                        let o = this.bindings.filter((e=>e.event === t));
                        for (let t = 0; t < o.length; t++)
                            o[t].callback(i, n, r || this.joinRef())
                    }
                    replyEventName(t) {
                        return `chan_reply_ ${t}`
                    }
                    isClosed() {
                        return this.state === f
                    }
                    isErrored() {
                        return this.state === h
                    }
                    isJoined() {
                        return this.state === d
                    }
                    isJoining() {
                        return this.state === p
                    }
                    isLeaving() {
                        return this.state === _
                    }
                }
                (t,e,this);
                return this.channels.push(n),
                n
            }
            push(t) {
                if (this.hasLogger()) {
                    let {topic: e, event: n, payload: r, ref: i, join_ref: o} = t;
                    this.log("push", `${e} ${n} (${o}, ${i})`, r)
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
                    let {topic: e, event: n, payload: r, ref: i, join_ref: o} = t;
                    i && i === this.pendingHeartbeatRef && (this.clearHeartbeats(),
                    this.pendingHeartbeatRef = null,
                    this.heartbeatTimer = setTimeout((()=>this.sendHeartbeat()), this.heartbeatIntervalMs)),
                    this.hasLogger() && this.log("receive", `${r.status || ""} ${e} ${n} ${i && "(" + i + ")" || ""}`, r);
                    for (let t = 0; t < this.channels.length; t++) {
                        const a = this.channels[t];
                        a.isMember(e, n, r, o) && a.trigger(n, r, i, o)
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
    },
    20: function(t, e, n) {
        "use strict";
        var r, i;
        function o() {
            o = function() {
                return e
            }
            ;
            var t, e = {}, n = Object.prototype, r = n.hasOwnProperty, i = Object.defineProperty || function(t, e, n) {
                t[e] = n.value
            }
            , a = "function" == typeof Symbol ? Symbol : {}, s = a.iterator || "@@iterator", c = a.asyncIterator || "@@asyncIterator", l = a.toStringTag || "@@toStringTag";
            function f(t, e, n) {
                return Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                t[e]
            }
            try {
                f({}, "")
            } catch (t) {
                f = function(t, e, n) {
                    return t[e] = n
                }
            }
            function h(t, e, n, r) {
                var o = e && e.prototype instanceof m ? e : m
                  , a = Object.create(o.prototype)
                  , s = new j(r || []);
                return i(a, "_invoke", {
                    value: S(t, n, s)
                }),
                a
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
            e.wrap = h;
            var p = "suspendedStart"
              , _ = "executing"
              , v = "completed"
              , g = {};
            function m() {}
            function y() {}
            function x() {}
            var b = {};
            f(b, s, (function() {
                return this
            }
            ));
            var w = Object.getPrototypeOf
              , k = w && w(w(L([])));
            k && k !== n && r.call(k, s) && (b = k);
            var T = x.prototype = m.prototype = Object.create(b);
            function E(t) {
                ["next", "throw", "return"].forEach((function(e) {
                    f(t, e, (function(t) {
                        return this._invoke(e, t)
                    }
                    ))
                }
                ))
            }
            function M(t, e) {
                function n(i, o, a, s) {
                    var c = d(t[i], t, o);
                    if ("throw" !== c.type) {
                        var l = c.arg
                          , f = l.value;
                        return f && "object" == u(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                            n("next", t, a, s)
                        }
                        ), (function(t) {
                            n("throw", t, a, s)
                        }
                        )) : e.resolve(f).then((function(t) {
                            l.value = t,
                            a(l)
                        }
                        ), (function(t) {
                            return n("throw", t, a, s)
                        }
                        ))
                    }
                    s(c.arg)
                }
                var o;
                i(this, "_invoke", {
                    value: function(t, r) {
                        function i() {
                            return new e((function(e, i) {
                                n(t, r, e, i)
                            }
                            ))
                        }
                        return o = o ? o.then(i, i) : i()
                    }
                })
            }
            function S(e, n, r) {
                var i = p;
                return function(o, a) {
                    if (i === _)
                        throw new Error("Generator is already running");
                    if (i === v) {
                        if ("throw" === o)
                            throw a;
                        return {
                            value: t,
                            done: !0
                        }
                    }
                    for (r.method = o,
                    r.arg = a; ; ) {
                        var s = r.delegate;
                        if (s) {
                            var u = C(s, r);
                            if (u) {
                                if (u === g)
                                    continue;
                                return u
                            }
                        }
                        if ("next" === r.method)
                            r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if (i === p)
                                throw i = v,
                                r.arg;
                            r.dispatchException(r.arg)
                        } else
                            "return" === r.method && r.abrupt("return", r.arg);
                        i = _;
                        var c = d(e, n, r);
                        if ("normal" === c.type) {
                            if (i = r.done ? v : "suspendedYield",
                            c.arg === g)
                                continue;
                            return {
                                value: c.arg,
                                done: r.done
                            }
                        }
                        "throw" === c.type && (i = v,
                        r.method = "throw",
                        r.arg = c.arg)
                    }
                }
            }
            function C(e, n) {
                var r = n.method
                  , i = e.iterator[r];
                if (i === t)
                    return n.delegate = null,
                    "throw" === r && e.iterator.return && (n.method = "return",
                    n.arg = t,
                    C(e, n),
                    "throw" === n.method) || "return" !== r && (n.method = "throw",
                    n.arg = new TypeError("The iterator does not provide a '" + r + "' method")),
                    g;
                var o = d(i, e.iterator, n.arg);
                if ("throw" === o.type)
                    return n.method = "throw",
                    n.arg = o.arg,
                    n.delegate = null,
                    g;
                var a = o.arg;
                return a ? a.done ? (n[e.resultName] = a.value,
                n.next = e.nextLoc,
                "return" !== n.method && (n.method = "next",
                n.arg = t),
                n.delegate = null,
                g) : a : (n.method = "throw",
                n.arg = new TypeError("iterator result is not an object"),
                n.delegate = null,
                g)
            }
            function A(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                e.afterLoc = t[3]),
                this.tryEntries.push(e)
            }
            function N(t) {
                var e = t.completion || {};
                e.type = "normal",
                delete e.arg,
                t.completion = e
            }
            function j(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(A, this),
                this.reset(!0)
            }
            function L(e) {
                if (e || "" === e) {
                    var n = e[s];
                    if (n)
                        return n.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length)) {
                        var i = -1
                          , o = function n() {
                            for (; ++i < e.length; )
                                if (r.call(e, i))
                                    return n.value = e[i],
                                    n.done = !1,
                                    n;
                            return n.value = t,
                            n.done = !0,
                            n
                        };
                        return o.next = o
                    }
                }
                throw new TypeError(u(e) + " is not iterable")
            }
            return y.prototype = x,
            i(T, "constructor", {
                value: x,
                configurable: !0
            }),
            i(x, "constructor", {
                value: y,
                configurable: !0
            }),
            y.displayName = f(x, l, "GeneratorFunction"),
            e.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name))
            }
            ,
            e.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, x) : (t.__proto__ = x,
                f(t, l, "GeneratorFunction")),
                t.prototype = Object.create(T),
                t
            }
            ,
            e.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            E(M.prototype),
            f(M.prototype, c, (function() {
                return this
            }
            )),
            e.AsyncIterator = M,
            e.async = function(t, n, r, i, o) {
                void 0 === o && (o = Promise);
                var a = new M(h(t, n, r, i),o);
                return e.isGeneratorFunction(n) ? a : a.next().then((function(t) {
                    return t.done ? t.value : a.next()
                }
                ))
            }
            ,
            E(T),
            f(T, l, "Generator"),
            f(T, s, (function() {
                return this
            }
            )),
            f(T, "toString", (function() {
                return "[object Generator]"
            }
            )),
            e.keys = function(t) {
                var e = Object(t)
                  , n = [];
                for (var r in e)
                    n.push(r);
                return n.reverse(),
                function t() {
                    for (; n.length; ) {
                        var r = n.pop();
                        if (r in e)
                            return t.value = r,
                            t.done = !1,
                            t
                    }
                    return t.done = !0,
                    t
                }
            }
            ,
            e.values = L,
            j.prototype = {
                constructor: j,
                reset: function(e) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = t,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = t,
                    this.tryEntries.forEach(N),
                    !e)
                        for (var n in this)
                            "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
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
                    function i(r, i) {
                        return s.type = "throw",
                        s.arg = e,
                        n.next = r,
                        i && (n.method = "next",
                        n.arg = t),
                        !!i
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var a = this.tryEntries[o]
                          , s = a.completion;
                        if ("root" === a.tryLoc)
                            return i("end");
                        if (a.tryLoc <= this.prev) {
                            var u = r.call(a, "catchLoc")
                              , c = r.call(a, "finallyLoc");
                            if (u && c) {
                                if (this.prev < a.catchLoc)
                                    return i(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc)
                                    return i(a.finallyLoc)
                            } else if (u) {
                                if (this.prev < a.catchLoc)
                                    return i(a.catchLoc, !0)
                            } else {
                                if (!c)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc)
                                    return i(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var i = this.tryEntries[n];
                        if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                            var o = i;
                            break
                        }
                    }
                    o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                    var a = o ? o.completion : {};
                    return a.type = t,
                    a.arg = e,
                    o ? (this.method = "next",
                    this.next = o.finallyLoc,
                    g) : this.complete(a)
                },
                complete: function(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                    g
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t)
                            return this.complete(n.completion, n.afterLoc),
                            N(n),
                            g
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var i = r.arg;
                                N(n)
                            }
                            return i
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, n, r) {
                    return this.delegate = {
                        iterator: L(e),
                        resultName: n,
                        nextLoc: r
                    },
                    "next" === this.method && (this.arg = t),
                    g
                }
            },
            e
        }
        function a(t, e, n, r, i, o, a) {
            try {
                var s = t[o](a)
                  , u = s.value
            } catch (t) {
                return void n(t)
            }
            s.done ? e(u) : Promise.resolve(u).then(r, i)
        }
        function s(t) {
            return function() {
                var e = this
                  , n = arguments;
                return new Promise((function(r, i) {
                    var o = t.apply(e, n);
                    function s(t) {
                        a(o, r, i, s, u, "next", t)
                    }
                    function u(t) {
                        a(o, r, i, s, u, "throw", t)
                    }
                    s(void 0)
                }
                ))
            }
        }
        function u(t) {
            return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            u(t)
        }
        function c(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function l(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? c(Object(n), !0).forEach((function(e) {
                    f(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        function f(t, e, n) {
            return (e = function(t) {
                var e = function(t, e) {
                    if ("object" !== u(t) || null === t)
                        return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" !== u(r))
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" === u(e) ? e : String(e)
            }(e))in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
        function h(t) {
            return function(t) {
                if (Array.isArray(t))
                    return _(t)
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
                    var r, i, o, a, s = [], u = !0, c = !1;
                    try {
                        if (o = (n = n.call(t)).next,
                        0 === e) {
                            if (Object(n) !== n)
                                return;
                            u = !1
                        } else
                            for (; !(u = (r = o.call(n)).done) && (s.push(r.value),
                            s.length !== e); u = !0)
                                ;
                    } catch (t) {
                        c = !0,
                        i = t
                    } finally {
                        try {
                            if (!u && null != n.return && (a = n.return(),
                            Object(a) !== a))
                                return
                        } finally {
                            if (c)
                                throw i
                        }
                    }
                    return s
                }
            }(t, e) || p(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function p(t, e) {
            if (t) {
                if ("string" == typeof t)
                    return _(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _(t, e) : void 0
            }
        }
        function _(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++)
                r[n] = t[n];
            return r
        }
        n.d(e, "a", (function() {
            return Jn
        }
        ));
        var v, g, m, y, x = !1, b = !1, w = [];
        function k(t) {
            !function(t) {
                w.includes(t) || w.push(t);
                b || x || (x = !0,
                queueMicrotask(E))
            }(t)
        }
        function T(t) {
            var e = w.indexOf(t);
            -1 !== e && w.splice(e, 1)
        }
        function E() {
            x = !1,
            b = !0;
            for (var t = 0; t < w.length; t++)
                w[t]();
            w.length = 0,
            b = !1
        }
        var M = !0;
        function S(t) {
            g = t
        }
        var C = []
          , A = []
          , N = [];
        function j(t, e) {
            "function" == typeof e ? (t._x_cleanups || (t._x_cleanups = []),
            t._x_cleanups.push(e)) : (e = t,
            A.push(e))
        }
        function L(t, e) {
            t._x_attributeCleanups && Object.entries(t._x_attributeCleanups).forEach((function(n) {
                var r = d(n, 2)
                  , i = r[0]
                  , o = r[1];
                (void 0 === e || e.includes(i)) && (o.forEach((function(t) {
                    return t()
                }
                )),
                delete t._x_attributeCleanups[i])
            }
            ))
        }
        var O = new MutationObserver(I)
          , P = !1;
        function D() {
            O.observe(document, {
                subtree: !0,
                childList: !0,
                attributes: !0,
                attributeOldValue: !0
            }),
            P = !0
        }
        function R() {
            (B = B.concat(O.takeRecords())).length && !$ && ($ = !0,
            queueMicrotask((function() {
                I(B),
                B.length = 0,
                $ = !1
            }
            ))),
            O.disconnect(),
            P = !1
        }
        var B = []
          , $ = !1;
        function U(t) {
            if (!P)
                return t();
            R();
            var e = t();
            return D(),
            e
        }
        var H = !1
          , F = [];
        function I(t) {
            if (H)
                F = F.concat(t);
            else {
                for (var e = [], n = [], r = new Map, i = new Map, o = function() {
                    if (t[a].target._x_ignoreMutationObserver)
                        return 1;
                    if ("childList" === t[a].type && (t[a].addedNodes.forEach((function(t) {
                        return 1 === t.nodeType && e.push(t)
                    }
                    )),
                    t[a].removedNodes.forEach((function(t) {
                        return 1 === t.nodeType && n.push(t)
                    }
                    ))),
                    "attributes" === t[a].type) {
                        var o = t[a].target
                          , s = t[a].attributeName
                          , u = t[a].oldValue
                          , c = function() {
                            r.has(o) || r.set(o, []),
                            r.get(o).push({
                                name: s,
                                value: o.getAttribute(s)
                            })
                        }
                          , l = function() {
                            i.has(o) || i.set(o, []),
                            i.get(o).push(s)
                        };
                        o.hasAttribute(s) && null === u ? c() : o.hasAttribute(s) ? (l(),
                        c()) : l()
                    }
                }, a = 0; a < t.length; a++)
                    o();
                i.forEach((function(t, e) {
                    L(e, t)
                }
                )),
                r.forEach((function(t, e) {
                    C.forEach((function(n) {
                        return n(e, t)
                    }
                    ))
                }
                ));
                for (var s = function() {
                    var t = c[u];
                    if (e.includes(t))
                        return 1;
                    if (A.forEach((function(e) {
                        return e(t)
                    }
                    )),
                    t._x_cleanups)
                        for (; t._x_cleanups.length; )
                            t._x_cleanups.pop()()
                }, u = 0, c = n; u < c.length; u++)
                    s();
                e.forEach((function(t) {
                    t._x_ignoreSelf = !0,
                    t._x_ignore = !0
                }
                ));
                for (var l = function() {
                    var t = h[f];
                    return n.includes(t) ? 0 : t.isConnected ? (delete t._x_ignoreSelf,
                    delete t._x_ignore,
                    N.forEach((function(e) {
                        return e(t)
                    }
                    )),
                    t._x_ignore = !0,
                    void (t._x_ignoreSelf = !0)) : 0
                }, f = 0, h = e; f < h.length; f++)
                    l();
                e.forEach((function(t) {
                    delete t._x_ignoreSelf,
                    delete t._x_ignore
                }
                )),
                e = null,
                n = null,
                r = null,
                i = null
            }
        }
        function z(t) {
            return W(V(t))
        }
        function q(t, e, n) {
            return t._x_dataStack = [e].concat(h(V(n || t))),
            function() {
                t._x_dataStack = t._x_dataStack.filter((function(t) {
                    return t !== e
                }
                ))
            }
        }
        function Y(t, e) {
            var n = t._x_dataStack[0];
            Object.entries(e).forEach((function(t) {
                var e = d(t, 2)
                  , r = e[0]
                  , i = e[1];
                n[r] = i
            }
            ))
        }
        function V(t) {
            return t._x_dataStack ? t._x_dataStack : "function" == typeof ShadowRoot && t instanceof ShadowRoot ? V(t.host) : t.parentNode ? V(t.parentNode) : []
        }
        function W(t) {
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
                get: function(n, r) {
                    return (t.find((function(t) {
                        if (t.hasOwnProperty(r)) {
                            var n = Object.getOwnPropertyDescriptor(t, r);
                            if (n.get && n.get._x_alreadyBound || n.set && n.set._x_alreadyBound)
                                return !0;
                            if ((n.get || n.set) && n.enumerable) {
                                var i = n.get
                                  , o = n.set
                                  , a = n;
                                i = i && i.bind(e),
                                o = o && o.bind(e),
                                i && (i._x_alreadyBound = !0),
                                o && (o._x_alreadyBound = !0),
                                Object.defineProperty(t, r, l(l({}, a), {}, {
                                    get: i,
                                    set: o
                                }))
                            }
                            return !0
                        }
                        return !1
                    }
                    )) || {})[r]
                },
                set: function(e, n, r) {
                    var i = t.find((function(t) {
                        return t.hasOwnProperty(n)
                    }
                    ));
                    return i ? i[n] = r : t[t.length - 1][n] = r,
                    !0
                }
            });
            return e
        }
        function G(t) {
            var e = function(t) {
                return "object" === u(t) && !Array.isArray(t) && null !== t
            };
            return function n(r) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                Object.entries(Object.getOwnPropertyDescriptors(r)).forEach((function(o) {
                    var a = d(o, 2)
                      , s = a[0]
                      , c = a[1]
                      , l = c.value;
                    if (!1 !== c.enumerable && void 0 !== l) {
                        var f = "" === i ? s : "".concat(i, ".").concat(s);
                        "object" === u(l) && null !== l && l._x_interceptor ? r[s] = l.initialize(t, f, s) : !e(l) || l === r || l instanceof Element || n(l, f)
                    }
                }
                ))
            }(t)
        }
        function X(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}
              , n = {
                initialValue: void 0,
                _x_interceptor: !0,
                initialize: function(e, n, r) {
                    return t(this.initialValue, (function() {
                        return Z(e, n)
                    }
                    ), (function(t) {
                        return J(e, n, t)
                    }
                    ), n, r)
                }
            };
            return e(n),
            function(t) {
                if ("object" === u(t) && null !== t && t._x_interceptor) {
                    var e = n.initialize.bind(n);
                    n.initialize = function(r, i, o) {
                        var a = t.initialize(r, i, o);
                        return n.initialValue = a,
                        e(r, i, o)
                    }
                } else
                    n.initialValue = t;
                return n
            }
        }
        function Z(t, e) {
            return e.split(".").reduce((function(t, e) {
                return t[e]
            }
            ), t)
        }
        function J(t, e, n) {
            if ("string" == typeof e && (e = e.split(".")),
            1 !== e.length) {
                if (0 === e.length)
                    throw error;
                return t[e[0]] || (t[e[0]] = {}),
                J(t[e[0]], e.slice(1), n)
            }
            t[e[0]] = n
        }
        var K = {};
        function Q(t, e) {
            K[t] = e
        }
        function tt(t, e) {
            return Object.entries(K).forEach((function(n) {
                var r = d(n, 2)
                  , i = r[0]
                  , o = r[1];
                Object.defineProperty(t, "$".concat(i), {
                    get: function() {
                        var t = d(yt(e), 2)
                          , n = t[0]
                          , r = t[1];
                        return n = l({
                            interceptor: X
                        }, n),
                        j(e, r),
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
                for (var r = arguments.length, i = new Array(r > 3 ? r - 3 : 0), o = 3; o < r; o++)
                    i[o - 3] = arguments[o];
                return n.apply(void 0, i)
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
        var rt = !0;
        function it(t, e) {
            var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return ot(t, e)((function(t) {
                return n = t
            }
            ), r),
            n
        }
        function ot() {
            return at.apply(void 0, arguments)
        }
        var at = function(t, e) {
            var n = {};
            tt(n, t);
            var r = [n].concat(h(V(t)));
            if ("function" == typeof e)
                return st(r, e);
            var i = function(t, e, n) {
                var r = function(t, e) {
                    if (ut[t])
                        return ut[t];
                    var n = Object.getPrototypeOf(s(o().mark((function t() {
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
                      , r = /^[\n\s]*if.*\(.*\)/.test(t) || /^(let|const)\s/.test(t) ? "(() => { ".concat(t, " })()") : t
                      , i = function() {
                        try {
                            return new n(["__self", "scope"],"with (scope) { __self.result = ".concat(r, " }; __self.finished = true; return __self.result;"))
                        } catch (n) {
                            return nt(n, e, t),
                            Promise.resolve()
                        }
                    }
                      , a = i();
                    return ut[t] = a,
                    a
                }(e, n);
                return function() {
                    var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}
                      , o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , a = o.scope
                      , s = void 0 === a ? {} : a
                      , u = o.params
                      , c = void 0 === u ? [] : u;
                    r.result = void 0,
                    r.finished = !1;
                    var l = W([s].concat(h(t)));
                    if ("function" == typeof r) {
                        var f = r(r, l).catch((function(t) {
                            return nt(t, n, e)
                        }
                        ));
                        r.finished ? (ct(i, r.result, l, c, n),
                        r.result = void 0) : f.then((function(t) {
                            ct(i, t, l, c, n)
                        }
                        )).catch((function(t) {
                            return nt(t, n, e)
                        }
                        )).finally((function() {
                            return r.result = void 0
                        }
                        ))
                    }
                }
            }(r, e, t);
            return et.bind(null, t, e, i)
        };
        function st(t, e) {
            return function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}
                  , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , i = r.scope
                  , o = void 0 === i ? {} : i
                  , a = r.params
                  , s = void 0 === a ? [] : a
                  , u = e.apply(W([o].concat(h(t))), s);
                ct(n, u)
            }
        }
        var ut = {};
        function ct(t, e, n, r, i) {
            if (rt && "function" == typeof e) {
                var o = e.apply(n, r);
                o instanceof Promise ? o.then((function(e) {
                    return ct(t, e, n, r)
                }
                )).catch((function(t) {
                    return nt(t, i, e)
                }
                )) : t(o)
            } else
                t(e)
        }
        var lt = "x-";
        function ft() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return lt + t
        }
        var ht = {};
        function dt(t, e) {
            ht[t] = e
        }
        function pt(t, e, n) {
            var r = {}
              , i = Array.from(e).map(bt((function(t, e) {
                return r[t] = e
            }
            ))).filter(Tt).map(function(t, e) {
                return function(n) {
                    var r = n.name
                      , i = n.value
                      , o = r.match(Et())
                      , a = r.match(/:([a-zA-Z0-9\-:]+)/)
                      , s = r.match(/\.[^.\]]+(?=[^\]]*$)/g) || []
                      , u = e || t[r] || r;
                    return {
                        type: o ? o[1] : null,
                        value: a ? a[1] : null,
                        modifiers: s.map((function(t) {
                            return t.replace(".", "")
                        }
                        )),
                        expression: i,
                        original: u
                    }
                }
            }(r, n)).sort(Ct);
            return i.map((function(e) {
                return function(t, e) {
                    var n = function() {}
                      , r = ht[e.type] || n
                      , i = yt(t)
                      , o = d(i, 2)
                      , a = o[0]
                      , s = o[1];
                    !function(t, e, n) {
                        t._x_attributeCleanups || (t._x_attributeCleanups = {}),
                        t._x_attributeCleanups[e] || (t._x_attributeCleanups[e] = []),
                        t._x_attributeCleanups[e].push(n)
                    }(t, e.original, s);
                    var u = function() {
                        t._x_ignore || t._x_ignoreSelf || (r.inline && r.inline(t, e, a),
                        r = r.bind(r, t, e, a),
                        _t ? vt.get(gt).push(r) : r())
                    };
                    return u.runCleanups = s,
                    u
                }(t, e)
            }
            ))
        }
        var _t = !1
          , vt = new Map
          , gt = Symbol();
        function mt(t) {
            _t = !0;
            var e = Symbol();
            gt = e,
            vt.set(e, []);
            var n = function() {
                for (; vt.get(e).length; )
                    vt.get(e).shift()();
                vt.delete(e)
            };
            t(n),
            _t = !1,
            n()
        }
        function yt(t) {
            var e = []
              , n = function(t) {
                var e = function() {};
                return [function(n) {
                    var r = g(n);
                    return t._x_effects || (t._x_effects = new Set,
                    t._x_runEffects = function() {
                        t._x_effects.forEach((function(t) {
                            return t()
                        }
                        ))
                    }
                    ),
                    t._x_effects.add(r),
                    e = function() {
                        void 0 !== r && (t._x_effects.delete(r),
                        m(r))
                    }
                    ,
                    r
                }
                , function() {
                    e()
                }
                ]
            }(t)
              , r = d(n, 2)
              , i = r[0]
              , o = r[1];
            e.push(o);
            return [{
                Alpine: ve,
                effect: i,
                cleanup: function(t) {
                    return e.push(t)
                },
                evaluateLater: ot.bind(ot, t),
                evaluate: it.bind(it, t)
            }, function() {
                return e.forEach((function(t) {
                    return t()
                }
                ))
            }
            ]
        }
        var xt = function(t, e) {
            return function(n) {
                var r = n.name
                  , i = n.value;
                return r.startsWith(t) && (r = r.replace(t, e)),
                {
                    name: r,
                    value: i
                }
            }
        };
        function bt() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}
            ;
            return function(e) {
                var n = e.name
                  , r = e.value
                  , i = wt.reduce((function(t, e) {
                    return e(t)
                }
                ), {
                    name: n,
                    value: r
                })
                  , o = i.name
                  , a = i.value;
                return o !== n && t(o, n),
                {
                    name: o,
                    value: a
                }
            }
        }
        var wt = [];
        function kt(t) {
            wt.push(t)
        }
        function Tt(t) {
            var e = t.name;
            return Et().test(e)
        }
        var Et = function() {
            return new RegExp("^".concat(lt, "([^:^.]+)\\b"))
        };
        var Mt = "DEFAULT"
          , St = ["ignore", "ref", "data", "id", "bind", "init", "for", "mask", "model", "modelable", "transition", "show", "if", Mt, "teleport", "element"];
        function Ct(t, e) {
            var n = -1 === St.indexOf(t.type) ? Mt : t.type
              , r = -1 === St.indexOf(e.type) ? Mt : e.type;
            return St.indexOf(n) - St.indexOf(r)
        }
        function At(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            t.dispatchEvent(new CustomEvent(e,{
                detail: n,
                bubbles: !0,
                composed: !0,
                cancelable: !0
            }))
        }
        var Nt = []
          , jt = !1;
        function Lt() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}
            ;
            return queueMicrotask((function() {
                jt || setTimeout((function() {
                    Ot()
                }
                ))
            }
            )),
            new Promise((function(e) {
                Nt.push((function() {
                    t(),
                    e()
                }
                ))
            }
            ))
        }
        function Ot() {
            for (jt = !1; Nt.length; )
                Nt.shift()()
        }
        function Pt(t, e) {
            if ("function" == typeof ShadowRoot && t instanceof ShadowRoot)
                Array.from(t.children).forEach((function(t) {
                    return Pt(t, e)
                }
                ));
            else {
                var n = !1;
                if (e(t, (function() {
                    return n = !0
                }
                )),
                !n)
                    for (var r = t.firstElementChild; r; )
                        Pt(r, e),
                        r = r.nextElementSibling
            }
        }
        function Dt(t) {
            for (var e, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
                r[i - 1] = arguments[i];
            (e = console).warn.apply(e, ["Alpine Warning: ".concat(t)].concat(r))
        }
        var Rt = []
          , Bt = [];
        function $t() {
            return Rt.map((function(t) {
                return t()
            }
            ))
        }
        function Ut() {
            return Rt.concat(Bt).map((function(t) {
                return t()
            }
            ))
        }
        function Ht(t) {
            Rt.push(t)
        }
        function Ft(t) {
            Bt.push(t)
        }
        function It(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return zt(t, (function(t) {
                if ((e ? Ut() : $t()).some((function(e) {
                    return t.matches(e)
                }
                )))
                    return !0
            }
            ))
        }
        function zt(t, e) {
            if (t) {
                if (e(t))
                    return t;
                if (t._x_teleportBack && (t = t._x_teleportBack),
                t.parentElement)
                    return zt(t.parentElement, e)
            }
        }
        function qt(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Pt;
            mt((function() {
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
        function Yt(t, e) {
            return Array.isArray(e) ? Vt(t, e.join(" ")) : "object" === u(e) && null !== e ? function(t, e) {
                var n = function(t) {
                    return t.split(" ").filter(Boolean)
                }
                  , r = Object.entries(e).flatMap((function(t) {
                    var e = d(t, 2)
                      , r = e[0];
                    return !!e[1] && n(r)
                }
                )).filter(Boolean)
                  , i = Object.entries(e).flatMap((function(t) {
                    var e = d(t, 2)
                      , r = e[0];
                    return !e[1] && n(r)
                }
                )).filter(Boolean)
                  , o = []
                  , a = [];
                return i.forEach((function(e) {
                    t.classList.contains(e) && (t.classList.remove(e),
                    a.push(e))
                }
                )),
                r.forEach((function(e) {
                    t.classList.contains(e) || (t.classList.add(e),
                    o.push(e))
                }
                )),
                function() {
                    a.forEach((function(e) {
                        return t.classList.add(e)
                    }
                    )),
                    o.forEach((function(e) {
                        return t.classList.remove(e)
                    }
                    ))
                }
            }(t, e) : "function" == typeof e ? Yt(t, e()) : Vt(t, e)
        }
        function Vt(t, e) {
            var n, r;
            return e = !0 === e ? e = "" : e || "",
            n = e.split(" ").filter((function(e) {
                return !t.classList.contains(e)
            }
            )).filter(Boolean),
            (r = t.classList).add.apply(r, h(n)),
            function() {
                var e;
                (e = t.classList).remove.apply(e, h(n))
            }
        }
        function Wt(t, e) {
            return "object" === u(e) && null !== e ? function(t, e) {
                var n = {};
                return Object.entries(e).forEach((function(e) {
                    var r = d(e, 2)
                      , i = r[0]
                      , o = r[1];
                    n[i] = t.style[i],
                    i.startsWith("--") || (i = i.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()),
                    t.style.setProperty(i, o)
                }
                )),
                setTimeout((function() {
                    0 === t.style.length && t.removeAttribute("style")
                }
                )),
                function() {
                    Wt(t, n)
                }
            }(t, e) : function(t, e) {
                var n = t.getAttribute("style", e);
                return t.setAttribute("style", e),
                function() {
                    t.setAttribute("style", n || "")
                }
            }(t, e)
        }
        function Gt(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}
              , n = !1;
            return function() {
                n ? e.apply(this, arguments) : (n = !0,
                t.apply(this, arguments))
            }
        }
        function Xt(t, e) {
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
                      , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}
                    ;
                    Jt(t, e, {
                        during: this.enter.during,
                        start: this.enter.start,
                        end: this.enter.end
                    }, n, r)
                },
                out: function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}
                      , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}
                    ;
                    Jt(t, e, {
                        during: this.leave.during,
                        start: this.leave.start,
                        end: this.leave.end
                    }, n, r)
                }
            })
        }
        function Zt(t) {
            var e = t.parentNode;
            if (e)
                return e._x_hidePromise ? e : Zt(e)
        }
        function Jt(t, e) {
            var n, r, i, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, a = o.during, s = o.start, u = o.end, c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {}
            , l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function() {}
            ;
            if (t._x_transitioning && t._x_transitioning.cancel(),
            0 === Object.keys(a).length && 0 === Object.keys(s).length && 0 === Object.keys(u).length)
                return c(),
                void l();
            Kt(t, {
                start: function() {
                    n = e(t, s)
                },
                during: function() {
                    r = e(t, a)
                },
                before: c,
                end: function() {
                    n(),
                    i = e(t, u)
                },
                after: l,
                cleanup: function() {
                    r(),
                    i()
                }
            })
        }
        function Kt(t, e) {
            var n, r, i, o = Gt((function() {
                U((function() {
                    n = !0,
                    r || e.before(),
                    i || (e.end(),
                    Ot()),
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
                cancel: Gt((function() {
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
            jt = !0,
            requestAnimationFrame((function() {
                if (!n) {
                    var o = 1e3 * Number(getComputedStyle(t).transitionDuration.replace(/,.*/, "").replace("s", ""))
                      , a = 1e3 * Number(getComputedStyle(t).transitionDelay.replace(/,.*/, "").replace("s", ""));
                    0 === o && (o = 1e3 * Number(getComputedStyle(t).animationDuration.replace("s", ""))),
                    U((function() {
                        e.before()
                    }
                    )),
                    r = !0,
                    requestAnimationFrame((function() {
                        n || (U((function() {
                            e.end()
                        }
                        )),
                        Ot(),
                        setTimeout(t._x_transitioning.finish, o + a),
                        i = !0)
                    }
                    ))
                }
            }
            ))
        }
        function Qt(t, e, n) {
            if (-1 === t.indexOf(e))
                return n;
            var r = t[t.indexOf(e) + 1];
            if (!r)
                return n;
            if ("scale" === e && isNaN(r))
                return n;
            if ("duration" === e) {
                var i = r.match(/([0-9]+)ms/);
                if (i)
                    return i[1]
            }
            return "origin" === e && ["top", "right", "left", "center", "bottom"].includes(t[t.indexOf(e) + 2]) ? [r, t[t.indexOf(e) + 2]].join(" ") : r
        }
        dt("transition", (function(t, e, n) {
            var r = e.value
              , i = e.modifiers
              , o = e.expression
              , a = n.evaluate;
            "function" == typeof o && (o = a(o)),
            o ? function(t, e, n) {
                Xt(t, Yt, "");
                var r = {
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
                r[n](e)
            }(t, o, r) : function(t, e, n) {
                Xt(t, Wt);
                var r = !e.includes("in") && !e.includes("out") && !n
                  , i = r || e.includes("in") || ["enter"].includes(n)
                  , o = r || e.includes("out") || ["leave"].includes(n);
                e.includes("in") && !r && (e = e.filter((function(t, n) {
                    return n < e.indexOf("out")
                }
                )));
                e.includes("out") && !r && (e = e.filter((function(t, n) {
                    return n > e.indexOf("out")
                }
                )));
                var a = !e.includes("opacity") && !e.includes("scale")
                  , s = a || e.includes("opacity")
                  , u = a || e.includes("scale")
                  , c = s ? 0 : 1
                  , l = u ? Qt(e, "scale", 95) / 100 : 1
                  , f = Qt(e, "delay", 0)
                  , h = Qt(e, "origin", "center")
                  , d = "opacity, transform"
                  , p = Qt(e, "duration", 150) / 1e3
                  , _ = Qt(e, "duration", 75) / 1e3
                  , v = "cubic-bezier(0.4, 0.0, 0.2, 1)";
                i && (t._x_transition.enter.during = {
                    transformOrigin: h,
                    transitionDelay: f,
                    transitionProperty: d,
                    transitionDuration: "".concat(p, "s"),
                    transitionTimingFunction: v
                },
                t._x_transition.enter.start = {
                    opacity: c,
                    transform: "scale(".concat(l, ")")
                },
                t._x_transition.enter.end = {
                    opacity: 1,
                    transform: "scale(1)"
                });
                o && (t._x_transition.leave.during = {
                    transformOrigin: h,
                    transitionDelay: f,
                    transitionProperty: d,
                    transitionDuration: "".concat(_, "s"),
                    transitionTimingFunction: v
                },
                t._x_transition.leave.start = {
                    opacity: 1,
                    transform: "scale(1)"
                },
                t._x_transition.leave.end = {
                    opacity: c,
                    transform: "scale(".concat(l, ")")
                })
            }(t, i, r)
        }
        )),
        window.Element.prototype._x_toggleAndCascadeWithTransitions = function(t, e, n, r) {
            var i = function() {
                "visible" === document.visibilityState ? requestAnimationFrame(n) : setTimeout(n)
            };
            e ? t._x_transition && (t._x_transition.enter || t._x_transition.leave) ? t._x_transition.enter && (Object.entries(t._x_transition.enter.during).length || Object.entries(t._x_transition.enter.start).length || Object.entries(t._x_transition.enter.end).length) ? t._x_transition.in(n) : i() : t._x_transition ? t._x_transition.in(n) : i() : (t._x_hidePromise = t._x_transition ? new Promise((function(e, n) {
                t._x_transition.out((function() {}
                ), (function() {
                    return e(r)
                }
                )),
                t._x_transitioning.beforeCancel((function() {
                    return n({
                        isFromCancelledTransition: !0
                    })
                }
                ))
            }
            )) : Promise.resolve(r),
            queueMicrotask((function() {
                var e = Zt(t);
                e ? (e._x_hideChildren || (e._x_hideChildren = []),
                e._x_hideChildren.push(t)) : queueMicrotask((function() {
                    (function t(e) {
                        var n = Promise.all([e._x_hidePromise].concat(h((e._x_hideChildren || []).map(t)))).then((function(t) {
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
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
            switch (t._x_bindings || (t._x_bindings = v({})),
            t._x_bindings[e] = n,
            e = r.includes("camel") ? se(e) : e) {
            case "value":
                re(t, n);
                break;
            case "style":
                oe(t, n);
                break;
            case "class":
                ie(t, n);
                break;
            default:
                ae(t, e, n)
            }
        }
        function re(t, e) {
            if ("radio" === t.type)
                void 0 === t.attributes.value && (t.value = e),
                window.fromModel && (t.checked = ue(t.value, e));
            else if ("checkbox" === t.type)
                Number.isInteger(e) ? t.value = e : Number.isInteger(e) || Array.isArray(e) || "boolean" == typeof e || [null, void 0].includes(e) ? Array.isArray(e) ? t.checked = e.some((function(e) {
                    return ue(e, t.value)
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
        function ie(t, e) {
            t._x_undoAddedClasses && t._x_undoAddedClasses(),
            t._x_undoAddedClasses = Yt(t, e)
        }
        function oe(t, e) {
            t._x_undoAddedStyles && t._x_undoAddedStyles(),
            t._x_undoAddedStyles = Wt(t, e)
        }
        function ae(t, e, n) {
            [null, void 0, !1].includes(n) && function(t) {
                return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(t)
            }(e) ? t.removeAttribute(e) : (ce(e) && (n = e),
            function(t, e, n) {
                t.getAttribute(e) != n && t.setAttribute(e, n)
            }(t, e, n))
        }
        function se(t) {
            return t.toLowerCase().replace(/-(\w)/g, (function(t, e) {
                return e.toUpperCase()
            }
            ))
        }
        function ue(t, e) {
            return t == e
        }
        function ce(t) {
            return ["disabled", "checked", "required", "readonly", "hidden", "open", "selected", "autofocus", "itemscope", "multiple", "novalidate", "allowfullscreen", "allowpaymentrequest", "formnovalidate", "autoplay", "controls", "loop", "muted", "playsinline", "default", "ismap", "reversed", "async", "defer", "nomodule"].includes(t)
        }
        function le(t, e) {
            var n;
            return function() {
                var r = this
                  , i = arguments
                  , o = function() {
                    n = null,
                    t.apply(r, i)
                };
                clearTimeout(n),
                n = setTimeout(o, e)
            }
        }
        function fe(t, e) {
            var n;
            return function() {
                var r = this
                  , i = arguments;
                n || (t.apply(r, i),
                n = !0,
                setTimeout((function() {
                    return n = !1
                }
                ), e))
            }
        }
        var he = {}
          , de = !1;
        var pe = {};
        var _e = {};
        var ve = {
            get reactive() {
                return v
            },
            get release() {
                return m
            },
            get effect() {
                return g
            },
            get raw() {
                return y
            },
            version: "3.10.2",
            flushAndStopDeferringMutations: function() {
                H = !1,
                I(F),
                F = []
            },
            dontAutoEvaluateFunctions: function(t) {
                var e = rt;
                rt = !1,
                t(),
                rt = e
            },
            disableEffectScheduling: function(t) {
                M = !1,
                t(),
                M = !0
            },
            setReactivityEngine: function(t) {
                v = t.reactive,
                m = t.release,
                g = function(e) {
                    return t.effect(e, {
                        scheduler: function(t) {
                            M ? k(t) : t()
                        }
                    })
                }
                ,
                y = t.raw
            },
            closestDataStack: V,
            skipDuringClone: ee,
            addRootSelector: Ht,
            addInitSelector: Ft,
            addScopeToNode: q,
            deferMutations: function() {
                H = !0
            },
            mapAttributes: kt,
            evaluateLater: ot,
            setEvaluator: function(t) {
                at = t
            },
            mergeProxies: W,
            findClosest: zt,
            closestRoot: It,
            interceptor: X,
            transition: Jt,
            setStyles: Wt,
            mutateDom: U,
            directive: dt,
            throttle: fe,
            debounce: le,
            evaluate: it,
            initTree: qt,
            nextTick: Lt,
            prefixed: ft,
            prefix: function(t) {
                lt = t
            },
            plugin: function(t) {
                t(ve)
            },
            magic: Q,
            store: function(t, e) {
                if (de || (he = v(he),
                de = !0),
                void 0 === e)
                    return he[t];
                he[t] = e,
                "object" === u(e) && null !== e && e.hasOwnProperty("init") && "function" == typeof e.init && he[t].init(),
                G(he[t])
            },
            start: function() {
                var t;
                document.body || Dt("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),
                At(document, "alpine:init"),
                At(document, "alpine:initializing"),
                D(),
                t = function(t) {
                    return qt(t, Pt)
                }
                ,
                N.push(t),
                j((function(t) {
                    Pt(t, (function(t) {
                        return L(t)
                    }
                    ))
                }
                )),
                function(t) {
                    C.push(t)
                }((function(t, e) {
                    pt(t, e).forEach((function(t) {
                        return t()
                    }
                    ))
                }
                )),
                Array.from(document.querySelectorAll(Ut())).filter((function(t) {
                    return !It(t.parentElement, !0)
                }
                )).forEach((function(t) {
                    qt(t)
                }
                )),
                At(document, "alpine:initialized")
            },
            clone: function(t, e) {
                var n, r;
                e._x_dataStack || (e._x_dataStack = t._x_dataStack),
                te = !0,
                n = function() {
                    var t;
                    t = !1,
                    qt(e, (function(e, n) {
                        Pt(e, (function(e, r) {
                            if (t && function(t) {
                                return $t().some((function(e) {
                                    return t.matches(e)
                                }
                                ))
                            }(e))
                                return r();
                            t = !0,
                            n(e, r)
                        }
                        ))
                    }
                    ))
                }
                ,
                r = g,
                S((function(t, e) {
                    var n = r(t);
                    return m(n),
                    function() {}
                }
                )),
                n(),
                S(r),
                te = !1
            },
            bound: function(t, e, n) {
                if (t._x_bindings && void 0 !== t._x_bindings[e])
                    return t._x_bindings[e];
                var r = t.getAttribute(e);
                return null === r ? "function" == typeof n ? n() : n : ce(e) ? !![e, "true"].includes(r) : "" === r || r
            },
            $data: z,
            data: function(t, e) {
                _e[t] = e
            },
            bind: function(t, e) {
                pe[t] = "function" != typeof e ? function() {
                    return e
                }
                : e
            }
        };
        function ge(t, e) {
            for (var n = Object.create(null), r = t.split(","), i = 0; i < r.length; i++)
                n[r[i]] = !0;
            return e ? function(t) {
                return !!n[t.toLowerCase()]
            }
            : function(t) {
                return !!n[t]
            }
        }
        f(r = {}, 1, "TEXT"),
        f(r, 2, "CLASS"),
        f(r, 4, "STYLE"),
        f(r, 8, "PROPS"),
        f(r, 16, "FULL_PROPS"),
        f(r, 32, "HYDRATE_EVENTS"),
        f(r, 64, "STABLE_FRAGMENT"),
        f(r, 128, "KEYED_FRAGMENT"),
        f(r, 256, "UNKEYED_FRAGMENT"),
        f(r, 512, "NEED_PATCH"),
        f(r, 1024, "DYNAMIC_SLOTS"),
        f(r, 2048, "DEV_ROOT_FRAGMENT"),
        f(r, -1, "HOISTED"),
        f(r, -2, "BAIL"),
        f(i = {}, 1, "STABLE"),
        f(i, 2, "DYNAMIC"),
        f(i, 3, "FORWARDED");
        var me, ye = Object.freeze({}), xe = (Object.freeze([]),
        Object.assign), be = Object.prototype.hasOwnProperty, we = function(t, e) {
            return be.call(t, e)
        }, ke = Array.isArray, Te = function(t) {
            return "[object Map]" === Ce(t)
        }, Ee = function(t) {
            return "symbol" === u(t)
        }, Me = function(t) {
            return null !== t && "object" === u(t)
        }, Se = Object.prototype.toString, Ce = function(t) {
            return Se.call(t)
        }, Ae = function(t) {
            return Ce(t).slice(8, -1)
        }, Ne = function(t) {
            return "string" == typeof t && "NaN" !== t && "-" !== t[0] && "" + parseInt(t, 10) === t
        }, je = function(t) {
            var e = Object.create(null);
            return function(n) {
                return e[n] || (e[n] = t(n))
            }
        }, Le = /-(\w)/g, Oe = (je((function(t) {
            return t.replace(Le, (function(t, e) {
                return e ? e.toUpperCase() : ""
            }
            ))
        }
        )),
        /\B([A-Z])/g), Pe = (je((function(t) {
            return t.replace(Oe, "-$1").toLowerCase()
        }
        )),
        je((function(t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        }
        ))), De = (je((function(t) {
            return t ? "on".concat(Pe(t)) : ""
        }
        )),
        function(t, e) {
            return t !== e && (t == t || e == e)
        }
        ), Re = new WeakMap, Be = [], $e = Symbol("iterate"), Ue = Symbol("Map key iterate");
        function He(t) {
            return t && !0 === t._isEffect
        }
        var Fe = 0;
        function Ie(t, e) {
            var n = function() {
                if (!n.active)
                    return t();
                if (!Be.includes(n)) {
                    ze(n);
                    try {
                        return Ye.push(qe),
                        qe = !0,
                        Be.push(n),
                        me = n,
                        t()
                    } finally {
                        Be.pop(),
                        We(),
                        me = Be[Be.length - 1]
                    }
                }
            };
            return n.id = Fe++,
            n.allowRecurse = !!e.allowRecurse,
            n._isEffect = !0,
            n.active = !0,
            n.raw = t,
            n.deps = [],
            n.options = e,
            n
        }
        function ze(t) {
            var e = t.deps;
            if (e.length) {
                for (var n = 0; n < e.length; n++)
                    e[n].delete(t);
                e.length = 0
            }
        }
        var qe = !0
          , Ye = [];
        function Ve() {
            Ye.push(qe),
            qe = !1
        }
        function We() {
            var t = Ye.pop();
            qe = void 0 === t || t
        }
        function Ge(t, e, n) {
            if (qe && void 0 !== me) {
                var r = Re.get(t);
                r || Re.set(t, r = new Map);
                var i = r.get(n);
                i || r.set(n, i = new Set),
                i.has(me) || (i.add(me),
                me.deps.push(i),
                me.options.onTrack && me.options.onTrack({
                    effect: me,
                    target: t,
                    type: e,
                    key: n
                }))
            }
        }
        function Xe(t, e, n, r, i, o) {
            var a = Re.get(t);
            if (a) {
                var s = new Set
                  , u = function(t) {
                    t && t.forEach((function(t) {
                        (t !== me || t.allowRecurse) && s.add(t)
                    }
                    ))
                };
                if ("clear" === e)
                    a.forEach(u);
                else if ("length" === n && ke(t))
                    a.forEach((function(t, e) {
                        ("length" === e || e >= r) && u(t)
                    }
                    ));
                else
                    switch (void 0 !== n && u(a.get(n)),
                    e) {
                    case "add":
                        ke(t) ? Ne(n) && u(a.get("length")) : (u(a.get($e)),
                        Te(t) && u(a.get(Ue)));
                        break;
                    case "delete":
                        ke(t) || (u(a.get($e)),
                        Te(t) && u(a.get(Ue)));
                        break;
                    case "set":
                        Te(t) && u(a.get($e))
                    }
                s.forEach((function(a) {
                    a.options.onTrigger && a.options.onTrigger({
                        effect: a,
                        target: t,
                        key: n,
                        type: e,
                        newValue: r,
                        oldValue: i,
                        oldTarget: o
                    }),
                    a.options.scheduler ? a.options.scheduler(a) : a()
                }
                ))
            }
        }
        var Ze = ge("__proto__,__v_isRef,__isVue")
          , Je = new Set(Object.getOwnPropertyNames(Symbol).map((function(t) {
            return Symbol[t]
        }
        )).filter(Ee))
          , Ke = rn()
          , Qe = rn(!1, !0)
          , tn = rn(!0)
          , en = rn(!0, !0)
          , nn = {};
        function rn() {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              , e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return function(n, r, i) {
                if ("__v_isReactive" === r)
                    return !t;
                if ("__v_isReadonly" === r)
                    return t;
                if ("__v_raw" === r && i === (t ? e ? On : Ln : e ? jn : Nn).get(n))
                    return n;
                var o = ke(n);
                if (!t && o && we(nn, r))
                    return Reflect.get(nn, r, i);
                var a = Reflect.get(n, r, i);
                return (Ee(r) ? Je.has(r) : Ze(r)) ? a : (t || Ge(n, "get", r),
                e ? a : $n(a) ? !o || !Ne(r) ? a.value : a : Me(a) ? t ? Dn(a) : Pn(a) : a)
            }
        }
        function on() {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return function(e, n, r, i) {
                var o = e[n];
                if (!t && (r = Bn(r),
                o = Bn(o),
                !ke(e) && $n(o) && !$n(r)))
                    return o.value = r,
                    !0;
                var a = ke(e) && Ne(n) ? Number(n) < e.length : we(e, n)
                  , s = Reflect.set(e, n, r, i);
                return e === Bn(i) && (a ? De(r, o) && Xe(e, "set", n, r, o) : Xe(e, "add", n, r)),
                s
            }
        }
        ["includes", "indexOf", "lastIndexOf"].forEach((function(t) {
            var e = Array.prototype[t];
            nn[t] = function() {
                for (var t = Bn(this), n = 0, r = this.length; n < r; n++)
                    Ge(t, "get", n + "");
                for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++)
                    o[a] = arguments[a];
                var s = e.apply(t, o);
                return -1 === s || !1 === s ? e.apply(t, o.map(Bn)) : s
            }
        }
        )),
        ["push", "pop", "shift", "unshift", "splice"].forEach((function(t) {
            var e = Array.prototype[t];
            nn[t] = function() {
                Ve();
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                    n[r] = arguments[r];
                var i = e.apply(this, n);
                return We(),
                i
            }
        }
        ));
        var an = {
            get: Ke,
            set: on(),
            deleteProperty: function(t, e) {
                var n = we(t, e)
                  , r = t[e]
                  , i = Reflect.deleteProperty(t, e);
                return i && n && Xe(t, "delete", e, void 0, r),
                i
            },
            has: function(t, e) {
                var n = Reflect.has(t, e);
                return Ee(e) && Je.has(e) || Ge(t, "has", e),
                n
            },
            ownKeys: function(t) {
                return Ge(t, "iterate", ke(t) ? "length" : $e),
                Reflect.ownKeys(t)
            }
        }
          , sn = {
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
          , un = (xe({}, an, {
            get: Qe,
            set: on(!0)
        }),
        xe({}, sn, {
            get: en
        }),
        function(t) {
            return Me(t) ? Pn(t) : t
        }
        )
          , cn = function(t) {
            return Me(t) ? Dn(t) : t
        }
          , ln = function(t) {
            return t
        }
          , fn = function(t) {
            return Reflect.getPrototypeOf(t)
        };
        function hn(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
              , r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
              , i = Bn(t = t.__v_raw)
              , o = Bn(e);
            e !== o && !n && Ge(i, "get", e),
            !n && Ge(i, "get", o);
            var a = fn(i)
              , s = a.has
              , u = r ? ln : n ? cn : un;
            return s.call(i, e) ? u(t.get(e)) : s.call(i, o) ? u(t.get(o)) : void (t !== i && t.get(e))
        }
        function dn(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , n = this.__v_raw
              , r = Bn(n)
              , i = Bn(t);
            return t !== i && !e && Ge(r, "has", t),
            !e && Ge(r, "has", i),
            t === i ? n.has(t) : n.has(t) || n.has(i)
        }
        function pn(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return t = t.__v_raw,
            !e && Ge(Bn(t), "iterate", $e),
            Reflect.get(t, "size", t)
        }
        function _n(t) {
            t = Bn(t);
            var e = Bn(this);
            return fn(e).has.call(e, t) || (e.add(t),
            Xe(e, "add", t, t)),
            this
        }
        function vn(t, e) {
            e = Bn(e);
            var n = Bn(this)
              , r = fn(n)
              , i = r.has
              , o = r.get
              , a = i.call(n, t);
            a ? An(n, i, t) : (t = Bn(t),
            a = i.call(n, t));
            var s = o.call(n, t);
            return n.set(t, e),
            a ? De(e, s) && Xe(n, "set", t, e, s) : Xe(n, "add", t, e),
            this
        }
        function gn(t) {
            var e = Bn(this)
              , n = fn(e)
              , r = n.has
              , i = n.get
              , o = r.call(e, t);
            o ? An(e, r, t) : (t = Bn(t),
            o = r.call(e, t));
            var a = i ? i.call(e, t) : void 0
              , s = e.delete(t);
            return o && Xe(e, "delete", t, void 0, a),
            s
        }
        function mn() {
            var t = Bn(this)
              , e = 0 !== t.size
              , n = Te(t) ? new Map(t) : new Set(t)
              , r = t.clear();
            return e && Xe(t, "clear", void 0, void 0, n),
            r
        }
        function yn(t, e) {
            return function(n, r) {
                var i = this
                  , o = i.__v_raw
                  , a = Bn(o)
                  , s = e ? ln : t ? cn : un;
                return !t && Ge(a, "iterate", $e),
                o.forEach((function(t, e) {
                    return n.call(r, s(t), s(e), i)
                }
                ))
            }
        }
        function xn(t, e, n) {
            return function() {
                var r = this.__v_raw
                  , i = Bn(r)
                  , o = Te(i)
                  , a = "entries" === t || t === Symbol.iterator && o
                  , s = "keys" === t && o
                  , u = r[t].apply(r, arguments)
                  , c = n ? ln : e ? cn : un;
                return !e && Ge(i, "iterate", s ? Ue : $e),
                f({
                    next: function() {
                        var t = u.next()
                          , e = t.value
                          , n = t.done;
                        return n ? {
                            value: e,
                            done: n
                        } : {
                            value: a ? [c(e[0]), c(e[1])] : c(e),
                            done: n
                        }
                    }
                }, Symbol.iterator, (function() {
                    return this
                }
                ))
            }
        }
        function bn(t) {
            return function() {
                var e = (arguments.length <= 0 ? void 0 : arguments[0]) ? 'on key "'.concat(arguments.length <= 0 ? void 0 : arguments[0], '" ') : "";
                return console.warn("".concat(Pe(t), " operation ").concat(e, "failed: target is readonly."), Bn(this)),
                "delete" !== t && this
            }
        }
        var wn = {
            get: function(t) {
                return hn(this, t)
            },
            get size() {
                return pn(this)
            },
            has: dn,
            add: _n,
            set: vn,
            delete: gn,
            clear: mn,
            forEach: yn(!1, !1)
        }
          , kn = {
            get: function(t) {
                return hn(this, t, !1, !0)
            },
            get size() {
                return pn(this)
            },
            has: dn,
            add: _n,
            set: vn,
            delete: gn,
            clear: mn,
            forEach: yn(!1, !0)
        }
          , Tn = {
            get: function(t) {
                return hn(this, t, !0)
            },
            get size() {
                return pn(this, !0)
            },
            has: function(t) {
                return dn.call(this, t, !0)
            },
            add: bn("add"),
            set: bn("set"),
            delete: bn("delete"),
            clear: bn("clear"),
            forEach: yn(!0, !1)
        }
          , En = {
            get: function(t) {
                return hn(this, t, !0, !0)
            },
            get size() {
                return pn(this, !0)
            },
            has: function(t) {
                return dn.call(this, t, !0)
            },
            add: bn("add"),
            set: bn("set"),
            delete: bn("delete"),
            clear: bn("clear"),
            forEach: yn(!0, !0)
        };
        function Mn(t, e) {
            var n = e ? t ? En : kn : t ? Tn : wn;
            return function(e, r, i) {
                return "__v_isReactive" === r ? !t : "__v_isReadonly" === r ? t : "__v_raw" === r ? e : Reflect.get(we(n, r) && r in e ? n : e, r, i)
            }
        }
        ["keys", "values", "entries", Symbol.iterator].forEach((function(t) {
            wn[t] = xn(t, !1, !1),
            Tn[t] = xn(t, !0, !1),
            kn[t] = xn(t, !1, !0),
            En[t] = xn(t, !0, !0)
        }
        ));
        var Sn = {
            get: Mn(!1, !1)
        }
          , Cn = (Mn(!1, !0),
        {
            get: Mn(!0, !1)
        });
        Mn(!0, !0);
        function An(t, e, n) {
            var r = Bn(n);
            if (r !== n && e.call(t, r)) {
                var i = Ae(t);
                console.warn("Reactive ".concat(i, " contains both the raw and reactive versions of the same object").concat("Map" === i ? " as keys" : "", ", which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible."))
            }
        }
        var Nn = new WeakMap
          , jn = new WeakMap
          , Ln = new WeakMap
          , On = new WeakMap;
        function Pn(t) {
            return t && t.__v_isReadonly ? t : Rn(t, !1, an, Sn, Nn)
        }
        function Dn(t) {
            return Rn(t, !0, sn, Cn, Ln)
        }
        function Rn(t, e, n, r, i) {
            if (!Me(t))
                return console.warn("value cannot be made reactive: ".concat(String(t))),
                t;
            if (t.__v_raw && (!e || !t.__v_isReactive))
                return t;
            var o = i.get(t);
            if (o)
                return o;
            var a, s = (a = t).__v_skip || !Object.isExtensible(a) ? 0 : function(t) {
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
            }(Ae(a));
            if (0 === s)
                return t;
            var u = new Proxy(t,2 === s ? r : n);
            return i.set(t, u),
            u
        }
        function Bn(t) {
            return t && Bn(t.__v_raw) || t
        }
        function $n(t) {
            return Boolean(t && !0 === t.__v_isRef)
        }
        Q("nextTick", (function() {
            return Lt
        }
        )),
        Q("dispatch", (function(t) {
            return At.bind(At, t)
        }
        )),
        Q("watch", (function(t, e) {
            var n = e.evaluateLater
              , r = e.effect;
            return function(e, i) {
                var o, a = n(e), s = !0, u = r((function() {
                    return a((function(t) {
                        JSON.stringify(t),
                        s ? o = t : queueMicrotask((function() {
                            i(t, o),
                            o = t
                        }
                        )),
                        s = !1
                    }
                    ))
                }
                ));
                t._x_effects.delete(u)
            }
        }
        )),
        Q("store", (function() {
            return he
        }
        )),
        Q("data", (function(t) {
            return z(t)
        }
        )),
        Q("root", (function(t) {
            return It(t)
        }
        )),
        Q("refs", (function(t) {
            return t._x_refs_proxy || (t._x_refs_proxy = W(function(t) {
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
        function Hn(t) {
            return Un[t] || (Un[t] = 0),
            ++Un[t]
        }
        function Fn(t, e) {
            return zt(t, (function(t) {
                if (t._x_ids && t._x_ids[e])
                    return !0
            }
            ))
        }
        function In(t, e, n) {
            Q(e, (function(e) {
                return Dt("You can't use [$".concat(directiveName, '] without first installing the "').concat(t, '" plugin here: https://alpinejs.dev/plugins/').concat(n), e)
            }
            ))
        }
        Q("id", (function(t) {
            return function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                  , r = Fn(t, e)
                  , i = r ? r._x_ids[e] : Hn(e);
                return n ? "".concat(e, "-").concat(i, "-").concat(n) : "".concat(e, "-").concat(i)
            }
        }
        )),
        Q("el", (function(t) {
            return t
        }
        )),
        In("Focus", "focus", "focus"),
        In("Persist", "persist", "persist"),
        dt("modelable", (function(t, e, n) {
            var r = e.expression
              , i = n.effect
              , o = n.evaluateLater
              , a = o(r)
              , s = function() {
                var t;
                return a((function(e) {
                    return t = e
                }
                )),
                t
            }
              , u = o("".concat(r, " = __placeholder"))
              , c = function(t) {
                return u((function() {}
                ), {
                    scope: {
                        __placeholder: t
                    }
                })
            }
              , l = s();
            c(l),
            queueMicrotask((function() {
                if (t._x_model) {
                    t._x_removeModelListeners.default();
                    var e = t._x_model.get
                      , n = t._x_model.set;
                    i((function() {
                        return c(e())
                    }
                    )),
                    i((function() {
                        return n(s())
                    }
                    ))
                }
            }
            ))
        }
        )),
        dt("teleport", (function(t, e, n) {
            var r = e.expression
              , i = n.cleanup;
            "template" !== t.tagName.toLowerCase() && Dt("x-teleport can only be used on a <template> tag", t);
            var o = document.querySelector(r);
            o || Dt('Cannot find x-teleport element for selector: "'.concat(r, '"'));
            var a = t.content.cloneNode(!0).firstElementChild;
            t._x_teleport = a,
            a._x_teleportBack = t,
            t._x_forwardEvents && t._x_forwardEvents.forEach((function(e) {
                a.addEventListener(e, (function(e) {
                    e.stopPropagation(),
                    t.dispatchEvent(new e.constructor(e.type,e))
                }
                ))
            }
            )),
            q(a, {}, t),
            U((function() {
                o.appendChild(a),
                qt(a),
                a._x_ignore = !0
            }
            )),
            i((function() {
                return a.remove()
            }
            ))
        }
        ));
        var zn = function() {};
        function qn(t, e, n, r) {
            var i = t
              , o = function(t) {
                return r(t)
            }
              , a = {}
              , s = function(t, e) {
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
            n.includes("passive") && (a.passive = !0),
            n.includes("capture") && (a.capture = !0),
            n.includes("window") && (i = window),
            n.includes("document") && (i = document),
            n.includes("prevent") && (o = s(o, (function(t, e) {
                e.preventDefault(),
                t(e)
            }
            ))),
            n.includes("stop") && (o = s(o, (function(t, e) {
                e.stopPropagation(),
                t(e)
            }
            ))),
            n.includes("self") && (o = s(o, (function(e, n) {
                n.target === t && e(n)
            }
            ))),
            (n.includes("away") || n.includes("outside")) && (i = document,
            o = s(o, (function(e, n) {
                t.contains(n.target) || !1 !== n.target.isConnected && (t.offsetWidth < 1 && t.offsetHeight < 1 || !1 !== t._x_isShown && e(n))
            }
            ))),
            n.includes("once") && (o = s(o, (function(t, n) {
                t(n),
                i.removeEventListener(e, o, a)
            }
            ))),
            o = s(o, (function(t, r) {
                (function(t) {
                    return ["keydown", "keyup"].includes(t)
                }
                )(e) && function(t, e) {
                    var n = e.filter((function(t) {
                        return !["window", "document", "prevent", "stop", "once"].includes(t)
                    }
                    ));
                    if (n.includes("debounce")) {
                        var r = n.indexOf("debounce");
                        n.splice(r, Yn((n[r + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
                    }
                    if (0 === n.length)
                        return !1;
                    if (1 === n.length && Vn(t.key).includes(n[0]))
                        return !1;
                    var i = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((function(t) {
                        return n.includes(t)
                    }
                    ));
                    if (n = n.filter((function(t) {
                        return !i.includes(t)
                    }
                    )),
                    i.length > 0) {
                        if (i.filter((function(e) {
                            return "cmd" !== e && "super" !== e || (e = "meta"),
                            t["".concat(e, "Key")]
                        }
                        )).length === i.length && Vn(t.key).includes(n[0]))
                            return !1
                    }
                    return !0
                }(r, n) || t(r)
            }
            )),
            n.includes("debounce")) {
                var u = n[n.indexOf("debounce") + 1] || "invalid-wait"
                  , c = Yn(u.split("ms")[0]) ? Number(u.split("ms")[0]) : 250;
                o = le(o, c)
            }
            if (n.includes("throttle")) {
                var l = n[n.indexOf("throttle") + 1] || "invalid-wait"
                  , f = Yn(l.split("ms")[0]) ? Number(l.split("ms")[0]) : 250;
                o = fe(o, f)
            }
            return i.addEventListener(e, o, a),
            function() {
                i.removeEventListener(e, o, a)
            }
        }
        function Yn(t) {
            return !Array.isArray(t) && !isNaN(t)
        }
        function Vn(t) {
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
        function Wn(t) {
            var e, n = t ? parseFloat(t) : null;
            return e = n,
            Array.isArray(e) || isNaN(e) ? t : n
        }
        function Gn(t, e, n, r) {
            var i = {};
            if (/^\[.*\]$/.test(t.item) && Array.isArray(e))
                t.item.replace("[", "").replace("]", "").split(",").map((function(t) {
                    return t.trim()
                }
                )).forEach((function(t, n) {
                    i[t] = e[n]
                }
                ));
            else if (/^\{.*\}$/.test(t.item) && !Array.isArray(e) && "object" === u(e)) {
                t.item.replace("{", "").replace("}", "").split(",").map((function(t) {
                    return t.trim()
                }
                )).forEach((function(t) {
                    i[t] = e[t]
                }
                ))
            } else
                i[t.item] = e;
            return t.index && (i[t.index] = n),
            t.collection && (i[t.collection] = r),
            i
        }
        function Xn() {}
        function Zn(t, e, n) {
            dt(e, (function(r) {
                return Dt("You can't use [x-".concat(e, '] without first installing the "').concat(t, '" plugin here: https://alpinejs.dev/plugins/').concat(n), r)
            }
            ))
        }
        zn.inline = function(t, e, n) {
            var r = e.modifiers
              , i = n.cleanup;
            r.includes("self") ? t._x_ignoreSelf = !0 : t._x_ignore = !0,
            i((function() {
                r.includes("self") ? delete t._x_ignoreSelf : delete t._x_ignore
            }
            ))
        }
        ,
        dt("ignore", zn),
        dt("effect", (function(t, e, n) {
            var r = e.expression;
            return (0,
            n.effect)(ot(t, r))
        }
        )),
        dt("model", (function(t, e, n) {
            var r = e.modifiers
              , i = e.expression
              , o = n.effect
              , a = n.cleanup
              , s = ot(t, i)
              , u = "".concat(i, " = rightSideOfExpression($event, ").concat(i, ")")
              , c = ot(t, u)
              , l = "select" === t.tagName.toLowerCase() || ["checkbox", "radio"].includes(t.type) || r.includes("lazy") ? "change" : "input"
              , f = function(t, e, n) {
                "radio" === t.type && U((function() {
                    t.hasAttribute("name") || t.setAttribute("name", n)
                }
                ));
                return function(n, r) {
                    return U((function() {
                        if (n instanceof CustomEvent && void 0 !== n.detail)
                            return n.detail || n.target.value;
                        if ("checkbox" === t.type) {
                            if (Array.isArray(r)) {
                                var i = e.includes("number") ? Wn(n.target.value) : n.target.value;
                                return n.target.checked ? r.concat([i]) : r.filter((function(t) {
                                    return !(t == i)
                                }
                                ))
                            }
                            return n.target.checked
                        }
                        if ("select" === t.tagName.toLowerCase() && t.multiple)
                            return e.includes("number") ? Array.from(n.target.selectedOptions).map((function(t) {
                                return Wn(t.value || t.text)
                            }
                            )) : Array.from(n.target.selectedOptions).map((function(t) {
                                return t.value || t.text
                            }
                            ));
                        var o = n.target.value;
                        return e.includes("number") ? Wn(o) : e.includes("trim") ? o.trim() : o
                    }
                    ))
                }
            }(t, r, i)
              , h = qn(t, l, r, (function(t) {
                c((function() {}
                ), {
                    scope: {
                        $event: t,
                        rightSideOfExpression: f
                    }
                })
            }
            ));
            t._x_removeModelListeners || (t._x_removeModelListeners = {}),
            t._x_removeModelListeners.default = h,
            a((function() {
                return t._x_removeModelListeners.default()
            }
            ));
            var d = ot(t, "".concat(i, " = __placeholder"));
            t._x_model = {
                get: function() {
                    var t;
                    return s((function(e) {
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
                s((function(e) {
                    void 0 === e && i.match(/\./) && (e = ""),
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
                r.includes("unintrusive") && document.activeElement.isSameNode(t) || t._x_forceModelUpdate()
            }
            ))
        }
        )),
        dt("cloak", (function(t) {
            return queueMicrotask((function() {
                return U((function() {
                    return t.removeAttribute(ft("cloak"))
                }
                ))
            }
            ))
        }
        )),
        Ft((function() {
            return "[".concat(ft("init"), "]")
        }
        )),
        dt("init", ee((function(t, e, n) {
            var r = e.expression
              , i = n.evaluate;
            return "string" == typeof r ? !!r.trim() && i(r, {}, !1) : i(r, {}, !1)
        }
        ))),
        dt("text", (function(t, e, n) {
            var r = e.expression
              , i = n.effect
              , o = (0,
            n.evaluateLater)(r);
            i((function() {
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
            var r = e.expression
              , i = n.effect
              , o = (0,
            n.evaluateLater)(r);
            i((function() {
                o((function(e) {
                    U((function() {
                        t.innerHTML = e,
                        t._x_ignoreSelf = !0,
                        qt(t),
                        delete t._x_ignoreSelf
                    }
                    ))
                }
                ))
            }
            ))
        }
        )),
        kt(xt(":", ft("bind:"))),
        dt("bind", (function(t, e, n) {
            var r = e.value
              , i = e.modifiers
              , o = e.expression
              , a = e.original
              , s = n.effect;
            if (!r)
                return function(t, e, n, r) {
                    var i = {};
                    o = i,
                    Object.entries(pe).forEach((function(t) {
                        var e = d(t, 2)
                          , n = e[0]
                          , r = e[1];
                        Object.defineProperty(o, n, {
                            get: function() {
                                return function() {
                                    return r.apply(void 0, arguments)
                                }
                            }
                        })
                    }
                    ));
                    var o;
                    var a = ot(t, e)
                      , s = [];
                    for (; s.length; )
                        s.pop()();
                    a((function(e) {
                        var r = Object.entries(e).map((function(t) {
                            var e = d(t, 2);
                            return {
                                name: e[0],
                                value: e[1]
                            }
                        }
                        ))
                          , i = function(t) {
                            return Array.from(t).map(bt()).filter((function(t) {
                                return !Tt(t)
                            }
                            ))
                        }(r);
                        r = r.map((function(t) {
                            return i.find((function(e) {
                                return e.name === t.name
                            }
                            )) ? {
                                name: "x-bind:".concat(t.name),
                                value: '"'.concat(t.value, '"')
                            } : t
                        }
                        )),
                        pt(t, r, n).map((function(t) {
                            s.push(t.runCleanups),
                            t()
                        }
                        ))
                    }
                    ), {
                        scope: i
                    })
                }(t, o, a);
            if ("key" === r)
                return function(t, e) {
                    t._x_keyExpression = e
                }(t, o);
            var u = ot(t, o);
            s((function() {
                return u((function(e) {
                    void 0 === e && o.match(/\./) && (e = ""),
                    U((function() {
                        return ne(t, r, e, i)
                    }
                    ))
                }
                ))
            }
            ))
        }
        )),
        Ht((function() {
            return "[".concat(ft("data"), "]")
        }
        )),
        dt("data", ee((function(t, e, n) {
            var r = e.expression
              , i = n.cleanup;
            r = "" === r ? "{}" : r;
            var o = {};
            tt(o, t);
            var a, s, u = {};
            a = u,
            s = o,
            Object.entries(_e).forEach((function(t) {
                var e = d(t, 2)
                  , n = e[0]
                  , r = e[1];
                Object.defineProperty(a, n, {
                    get: function() {
                        return function() {
                            return r.bind(s).apply(void 0, arguments)
                        }
                    },
                    enumerable: !1
                })
            }
            ));
            var c = it(t, r, {
                scope: u
            });
            void 0 === c && (c = {}),
            tt(c, t);
            var l = v(c);
            G(l);
            var f = q(t, l);
            l.init && it(t, l.init),
            i((function() {
                l.destroy && it(t, l.destroy),
                f()
            }
            ))
        }
        ))),
        dt("show", (function(t, e, n) {
            var r = e.modifiers
              , i = e.expression
              , o = n.effect
              , a = ot(t, i);
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
            var s, u = function() {
                t._x_doHide(),
                t._x_isShown = !1
            }, c = function() {
                t._x_doShow(),
                t._x_isShown = !0
            }, l = function() {
                return setTimeout(c)
            }, f = Gt((function(t) {
                return t ? c() : u()
            }
            ), (function(e) {
                "function" == typeof t._x_toggleAndCascadeWithTransitions ? t._x_toggleAndCascadeWithTransitions(t, e, c, u) : e ? l() : u()
            }
            )), h = !0;
            o((function() {
                return a((function(t) {
                    (h || t !== s) && (r.includes("immediate") && (t ? l() : u()),
                    f(t),
                    s = t,
                    h = !1)
                }
                ))
            }
            ))
        }
        )),
        dt("for", (function(t, e, n) {
            var r = e.expression
              , i = n.effect
              , o = n.cleanup
              , a = function(t) {
                var e = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/
                  , n = /^\s*\(|\)\s*$/g
                  , r = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/
                  , i = t.match(r);
                if (!i)
                    return;
                var o = {};
                o.items = i[2].trim();
                var a = i[1].replace(n, "").trim()
                  , s = a.match(e);
                s ? (o.item = a.replace(e, "").trim(),
                o.index = s[1].trim(),
                s[2] && (o.collection = s[2].trim())) : o.item = a;
                return o
            }(r)
              , s = ot(t, a.items)
              , c = ot(t, t._x_keyExpression || "index");
            t._x_prevKeys = [],
            t._x_lookup = {},
            i((function() {
                return function(t, e, n, r) {
                    var i = function(t) {
                        return "object" === u(t) && !Array.isArray(t)
                    }
                      , o = t;
                    n((function(n) {
                        var a;
                        a = n,
                        !Array.isArray(a) && !isNaN(a) && n >= 0 && (n = Array.from(Array(n).keys(), (function(t) {
                            return t + 1
                        }
                        ))),
                        void 0 === n && (n = []);
                        var s = t._x_lookup
                          , c = t._x_prevKeys
                          , f = []
                          , h = [];
                        if (i(n))
                            n = Object.entries(n).map((function(t) {
                                var i = d(t, 2)
                                  , o = i[0]
                                  , a = i[1]
                                  , s = Gn(e, a, o, n);
                                r((function(t) {
                                    return h.push(t)
                                }
                                ), {
                                    scope: l({
                                        index: o
                                    }, s)
                                }),
                                f.push(s)
                            }
                            ));
                        else
                            for (var p = 0; p < n.length; p++) {
                                var _ = Gn(e, n[p], p, n);
                                r((function(t) {
                                    return h.push(t)
                                }
                                ), {
                                    scope: l({
                                        index: p
                                    }, _)
                                }),
                                f.push(_)
                            }
                        for (var g = [], m = [], y = [], x = [], b = 0; b < c.length; b++) {
                            var w = c[b];
                            -1 === h.indexOf(w) && y.push(w)
                        }
                        c = c.filter((function(t) {
                            return !y.includes(t)
                        }
                        ));
                        for (var k = "template", E = 0; E < h.length; E++) {
                            var M = h[E]
                              , S = c.indexOf(M);
                            if (-1 === S)
                                c.splice(E, 0, M),
                                g.push([k, E]);
                            else if (S !== E) {
                                var C = c.splice(E, 1)[0]
                                  , A = c.splice(S - 1, 1)[0];
                                c.splice(E, 0, A),
                                c.splice(S, 0, C),
                                m.push([C, A])
                            } else
                                x.push(M);
                            k = M
                        }
                        for (var N = 0; N < y.length; N++) {
                            var j = y[N];
                            s[j]._x_effects && s[j]._x_effects.forEach(T),
                            s[j].remove(),
                            s[j] = null,
                            delete s[j]
                        }
                        for (var L = function() {
                            var t = d(m[O], 2)
                              , e = t[0]
                              , n = t[1]
                              , r = s[e]
                              , i = s[n]
                              , o = document.createElement("div");
                            U((function() {
                                i.after(o),
                                r.after(i),
                                i._x_currentIfEl && i.after(i._x_currentIfEl),
                                o.before(r),
                                r._x_currentIfEl && r.after(r._x_currentIfEl),
                                o.remove()
                            }
                            )),
                            Y(i, f[h.indexOf(n)])
                        }, O = 0; O < m.length; O++)
                            L();
                        for (var P = function() {
                            var t = d(g[D], 2)
                              , e = t[0]
                              , n = t[1]
                              , r = "template" === e ? o : s[e];
                            r._x_currentIfEl && (r = r._x_currentIfEl);
                            var i = f[n]
                              , a = h[n]
                              , c = document.importNode(o.content, !0).firstElementChild;
                            q(c, v(i), o),
                            U((function() {
                                r.after(c),
                                qt(c)
                            }
                            )),
                            "object" === u(a) && Dt("x-for key cannot be an object, it must be a string or an integer", o),
                            s[a] = c
                        }, D = 0; D < g.length; D++)
                            P();
                        for (var R = 0; R < x.length; R++)
                            Y(s[x[R]], f[h.indexOf(x[R])]);
                        o._x_prevKeys = h
                    }
                    ))
                }(t, a, s, c)
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
        Xn.inline = function(t, e, n) {
            var r = e.expression
              , i = n.cleanup
              , o = It(t);
            o._x_refs || (o._x_refs = {}),
            o._x_refs[r] = t,
            i((function() {
                return delete o._x_refs[r]
            }
            ))
        }
        ,
        dt("ref", Xn),
        dt("if", (function(t, e, n) {
            var r = e.expression
              , i = n.effect
              , o = n.cleanup
              , a = ot(t, r);
            i((function() {
                return a((function(e) {
                    e ? function() {
                        if (t._x_currentIfEl)
                            return t._x_currentIfEl;
                        var e = t.content.cloneNode(!0).firstElementChild;
                        q(e, {}, t),
                        U((function() {
                            t.after(e),
                            qt(e)
                        }
                        )),
                        t._x_currentIfEl = e,
                        t._x_undoIf = function() {
                            Pt(e, (function(t) {
                                t._x_effects && t._x_effects.forEach(T)
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
            var r = e.expression;
            (0,
            n.evaluate)(r).forEach((function(e) {
                return function(t, e) {
                    t._x_ids || (t._x_ids = {}),
                    t._x_ids[e] || (t._x_ids[e] = Hn(e))
                }(t, e)
            }
            ))
        }
        )),
        kt(xt("@", ft("on:"))),
        dt("on", ee((function(t, e, n) {
            var r = e.value
              , i = e.modifiers
              , o = e.expression
              , a = n.cleanup
              , s = o ? ot(t, o) : function() {}
            ;
            "template" === t.tagName.toLowerCase() && (t._x_forwardEvents || (t._x_forwardEvents = []),
            t._x_forwardEvents.includes(r) || t._x_forwardEvents.push(r));
            var u = qn(t, r, i, (function(t) {
                s((function() {}
                ), {
                    scope: {
                        $event: t
                    },
                    params: [t]
                })
            }
            ));
            a((function() {
                return u()
            }
            ))
        }
        ))),
        Zn("Collapse", "collapse", "collapse"),
        Zn("Intersect", "intersect", "intersect"),
        Zn("Focus", "trap", "focus"),
        Zn("Mask", "mask", "mask"),
        ve.setEvaluator((function(t, e) {
            var n = {};
            tt(n, t);
            var r = [n].concat(h(V(t)));
            if ("function" == typeof e)
                return st(r, e);
            return et.bind(null, t, e, (function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , i = n.scope
                  , o = void 0 === i ? {} : i
                  , a = n.params
                  , s = void 0 === a ? [] : a
                  , u = W([o].concat(h(r)));
                void 0 !== u[e] && ct(t, u[e], u, s)
            }
            ))
        }
        )),
        ve.setReactivityEngine({
            reactive: Pn,
            effect: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ye;
                He(t) && (t = t.raw);
                var n = Ie(t, e);
                return e.lazy || n(),
                n
            },
            release: function(t) {
                t.active && (ze(t),
                t.options.onStop && t.options.onStop(),
                t.active = !1)
            },
            raw: Bn
        });
        var Jn = ve
    },
    23: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return f
        }
        ));
        var r = n(0)
          , i = n(1)
          , o = n.n(i)
          , a = n(3);
        function s(t, e, n, r, i) {
            return `\n    M ${t} ${e}\n    a ${i} ${i} 0 0 1 ${i} ${i}\n    v ${r}\n    a ${i} ${i} 0 0 1 -${i} ${i}\n    h -${n}\n    a ${i} ${i} 0 0 1 -${i} -${i}\n    v -${r}\n    a ${i} ${i} 0 0 1 ${i} -${i}\n    z\n  `
        }
        function u() {
            return Object(a.f)() ? 30 : 50
        }
        function c(t, e, n) {
            return t.append("path").attr("fill", "#eee").attr("opacity", 0).attr("d", function(t) {
                return Object(a.f)() ? s(t, -10, t, 0, 7) : s(t, -16, t, 0, 13)
            }(e))
        }
        function l(t, e, n, i) {
            const a = t.append("g").on("mouseenter", (function() {
                if (!i) {
                    r.a.select(this).selectAll("text").transition().attr("fill", "white").attr("font-weight", o.a.fontWeightMedium)
                }
            }
            )).on("mouseleave", (function() {
                if (!i) {
                    r.a.select(this).selectAll("text").transition().attr("fill", o.a.neutral300).attr("font-weight", o.a.fontWeightNormal)
                }
            }
            )).on("click", (function() {
                n()
            }
            ))
              , s = function(t, e, n) {
                return t.append("text").attr("fill", n ? o.a.primary500 : o.a.neutral300).attr("font-weight", n ? 700 : 500).text(e)
            }(a, e, i);
            return c(a, s.node().getBBox().width).lower().lower(),
            a
        }
        const f = ({element: t, config: e, buttons: n})=>{
            const {position: {x: r, y: i}, leftReference: a} = e
              , s = function(t, e, n) {
                return t.append("g").attr("font-size", "10px").attr("font-weight", 500).attr("fill", o.a.neutral300).attr("transform", `translate(${e}, ${n})`).style("cursor", "pointer").style("user-select", "none")
            }(t, r, i);
            return n.map(((t,e)=>{
                const n = l(s, t.label, t.onClick, t.active);
                e > 0 && a && n.attr("transform", `translate(${e * u()})`),
                e > 0 && !a && n.attr("transform", `translate(${-e * u()})`)
            }
            )),
            s
        }
    },
    25: function(t, e, n) {
        "use strict";
        var r = n(16)
          , i = n(8);
        e.a = {
            init: function() {
                if (window.channelSocket)
                    return window.channelSocket;
                var t = Object(i.a)("channel_token")
                  , e = t ? function(t) {
                    var e = new r.a("/user_socket",{
                        params: {
                            channel_token: t
                        }
                    });
                    return e.isGuest = !1,
                    e
                }(t) : function() {
                    var t = new r.a("/guest_socket",{
                        params: {}
                    });
                    return t.isGuest = !0,
                    t
                }();
                return e.onError(o),
                e.onOpen(a),
                e.connect(),
                window.channelSocket = e,
                window.consecutiveReconnectAttempts = 0,
                e
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
          , a = function() {
            window.consecutiveReconnectAttempts = 0
        }
    },
    3: function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return r
        }
        )),
        n.d(e, "a", (function() {
            return i
        }
        )),
        n.d(e, "e", (function() {
            return s
        }
        )),
        n.d(e, "d", (function() {
            return u
        }
        )),
        n.d(e, "c", (function() {
            return c
        }
        )),
        n.d(e, "f", (function() {
            return f
        }
        ));
        const r = "M1 6H3L3 2.5H4L2 0L0 2.5H1L1 4.5V6Z"
          , i = "M3 0L1 0L1 3.5L0 3.5L2 6L4 3.5H3L3 1.5L3 0Z"
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
          , a = "TH/s";
        function s(t, e) {
            switch (e) {
            case "USD":
                return `${t < 0 ? "-" : ""}${"$"}${l(t, 2)}`;
            case "BTC":
                {
                    const e = "BTC";
                    return `${t < 0 ? "-" : ""}${l(t, 8)} ${e}`
                }
            case a:
                {
                    const e = a;
                    return `${l(t, 3)} ${e}`
                }
            default:
                return `error: unknown unitsType: ${e}`
            }
        }
        function u(t, e) {
            return l(100 * t / e, 2)
        }
        function c(t, e, n=!1) {
            if (e) {
                let r = o[e];
                return n && (r.timeZone = "UTC"),
                t.toLocaleString(void 0, r)
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
        function f() {
            return document.body.clientWidth < 512
        }
    },
    32: function(t, e, n) {
        "use strict";
        function r(t, e) {
            t.addEventListener("click", (function() {
                const n = t.getAttribute("data-copy")
                  , r = t.getAttribute("data-success-msg") || "Copied"
                  , i = t.getAttribute("data-copied-event")
                  , o = t.getAttribute("id");
                !function(t, e, n, r, i, o) {
                    const a = document.createElement("textarea");
                    if (a.value = t,
                    document.body.append(a),
                    a.select(),
                    document.execCommand("copy"),
                    a.remove(),
                    !e)
                        return;
                    const s = e.innerHTML;
                    e.disabled = !0,
                    e.innerHTML = r,
                    i && o && o.pushEvent(i, {
                        id: n
                    });
                    setTimeout((function() {
                        e.innerHTML = s,
                        e.disabled = !1
                    }
                    ), 1e3)
                }(n, t, o, r, i, e)
            }
            ))
        }
        e.a = {
            hook: {
                mounted() {
                    r(this.el, this)
                }
            },
            init: function() {
                document.querySelectorAll(".js-copy-to-clipboard").forEach(r)
            }
        }
    },
    33: function(t, e, n) {
        "use strict";
        function r(t) {
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
                    r(this.el)
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
                document.querySelectorAll(".js-share").forEach(r)
            }
        }
    },
    34: function(t, e, n) {
        "use strict";
        const r = [0, 32];
        function i(t, e) {
            var n;
            document.addEventListener("click", (n = t,
            function(t) {
                n.contains(t.target) || u(n)
            }
            ));
            const i = function(t) {
                return t.querySelector(".js-dropdown__selected")
            }(t);
            i.addEventListener("click", o(t)),
            i.addEventListener("keydown", function(t) {
                return function(e) {
                    (r.includes(e.keyCode) || 13 === e.keyCode) && s(t),
                    27 === e.keyCode && u(t)
                }
            }(t)),
            l(t).addEventListener("click", o(t)),
            function(t) {
                return t.querySelectorAll(".js-dropdown__list-item")
            }(t).forEach((n=>{
                n.addEventListener("click", function(t, e) {
                    return function(n) {
                        e || a(n.target, t),
                        u(t)
                    }
                }(t, e)),
                e || n.addEventListener("keydown", function(t) {
                    return function(e) {
                        (r.includes(e.keyCode) || 13 === e.keyCode) && (a(e.target, t),
                        u(t)),
                        27 === e.keyCode && u(t)
                    }
                }(t))
            }
            ))
        }
        function o(t) {
            return function(e) {
                s(t)
            }
        }
        function a(t, e) {
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
        function s(t) {
            c(t).classList.toggle("hidden"),
            l(t).classList.toggle("expanded")
        }
        function u(t) {
            const e = c(t);
            e && e.classList.add("hidden"),
            l(t).classList.remove("expanded")
        }
        function c(t) {
            return t.querySelector(".js-dropdown__list")
        }
        function l(t) {
            return t.querySelector(".js-dropdown__arrow")
        }
        e.a = {
            hook: {
                mounted: function() {
                    i(this.el, !0)
                }
            },
            init: function() {
                document.querySelectorAll(".js-dropdown").forEach((t=>i(t, !1)))
            }
        }
    },
    57: function(t, e, n) {
        t.exports = n(68)
    },
    68: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(32)
          , i = function() {
            document.querySelectorAll(".js-flash-dismiss").forEach(a)
        };
        function o() {
            this.parentNode.remove()
        }
        function a(t) {
            t.addEventListener("click", o)
        }
        var s = n(33)
          , u = function() {
            document.querySelectorAll(".js-toggle-visibility").forEach(c)
        };
        function c(t) {
            t.addEventListener("click", (function() {
                const e = t.getAttribute("data-target");
                if (e) {
                    e.split(",").forEach((t=>{
                        const e = document.querySelector(t);
                        "none" == e.style.display ? e.style.display = "block" : e.style.display = "none"
                    }
                    ))
                }
            }
            ))
        }
        var l = function() {
            document.querySelectorAll(".js-spinner-on-submit").forEach(f)
        };
        function f(t) {
            t.addEventListener("submit", (function() {
                const e = t.getAttribute("data-spinner-on-submit-target-selector")
                  , n = document.querySelector(e);
                n.classList.add("c-spinner");
                const r = t.getAttribute("data-spinner-on-submit-text");
                if (r) {
                    const t = document.createElement("div")
                      , e = document.createTextNode(r);
                    t.appendChild(e),
                    t.classList.add("c-spinner__text"),
                    n.appendChild(t)
                }
            }
            ), !1)
        }
        var h = n(34)
          , d = function() {
            document.querySelectorAll(".js-print-page").forEach(p)
        };
        function p(t) {
            t.addEventListener("click", (function() {
                window.print()
            }
            ))
        }
        var _ = n(20)
          , v = n(25)
          , g = n(8)
          , m = n(0)
          , y = n(23)
          , x = n(1)
          , b = n.n(x);
        const w = {
            all: ": All Time",
            year: ": This Year",
            month: ": This Month",
            week: ": This Week",
            none: ""
        };
        function k({element: t, config: e, avgHashRate: n, timeFrame: r}) {
            const {position: {x: i, y: o}} = e
              , a = t.append("g").attr("transform", `translate(${i},${o})`).attr("font-weight", b.a.fontWeightNormal).attr("letter-spacing", "0.5px")
              , s = t.append("g").attr("id", "subtitleGroup").attr("transform", `translate(${i},${o + 32})`).attr("font-weight", b.a.fontWeightNormal)
              , u = n > 0 ? parseFloat(n).toFixed(3) : "-";
            a.append("text").attr("fill", b.a.neutral300).attr("id", "hashRateMainTitle").text("Average Hash Rate" + w[r]);
            const c = s.append("text").attr("fill", b.a.neutral50).attr("id", "amountMined").text(u).attr("font-size", "1.25em").node().getBBox().width;
            return s.append("text").text("TH/s").style("fill", b.a.grayLighter).attr("id", "amountMinedBTC").attr("dx", c + 5).attr("font-size", "1em").attr("font-weight", "100"),
            s
        }
        var T = n(7)
          , E = n(11);
        const M = b.a.gold
          , S = b.a.goldDarker
          , C = "c-time-series-chart-container"
          , A = "c-time-series-chart-container--loading";
        function N() {
            return m.a.select(`.${C}`)
        }
        function j() {
            return document.getElementsByClassName(C)[0]
        }
        function L() {
            N().selectAll("*").remove()
        }
        const O = ({data: t, layout: e, timeFrame: n, tooltipConfig: r, version: i=1})=>{
            const {height: o, width: a, margin: s, areaHeight: u} = e
              , c = Object(E.b)(t, e)
              , l = Object(E.c)(t, e, 0, 1.25)
              , f = m.a.area().defined((t=>!isNaN(t.value))).x((t=>c(t.date))).y1((t=>l(t.value))).y0(u)
              , h = m.a.line().defined((t=>!isNaN(t.value))).x((t=>c(t.date))).y((t=>l(t.value)))
              , d = N().append("svg").attr("viewBox", [0, 0, a, o]).style("-webkit-tap-highlight-color", "transparent").style("overflow", "visible")
              , p = d.append("linearGradient").attr("id", "areaGradient").attr("x1", "0%").attr("x2", "0%").attr("y1", "0%").attr("y2", "120%");
            p.append("stop").attr("offset", "0").attr("stop-color", S).attr("stop-opacity", 1),
            p.append("stop").attr("offset", "1").attr("stop-color", "transparent").attr("stop-opacity", 1);
            d.append("path").datum(t.chart).attr("fill", "url(#areaGradient)").attr("d", f);
            d.append("path").datum(t.chart).attr("fill", "none").attr("stroke", M).attr("stroke-width", 1.5).attr("stroke-linejoin", "round").attr("stroke-linecap", "round").attr("d", h),
            d.selectAll("text").style("user-select", "none");
            const _ = d.append("linearGradient").attr("id", "areaGradient2").attr("x1", "0%").attr("x2", "0%").attr("y1", "0%").attr("y2", "100%");
            _.append("stop").attr("offset", "0").attr("stop-color", b.a.neutral300).attr("stop-opacity", "0"),
            _.append("stop").attr("offset", "100%").attr("stop-color", "white").attr("stop-opacity", "0.8");
            d.append("clipPath").attr("id", "clip").append("rect").attr("x", "0").attr("y", "0").attr("width", a).attr("height", o);
            const v = d.append("rect").attr("width", .5).attr("height", o - s.bottom).attr("x", 0).attr("y", 0).attr("stroke-width", .5).attr("stroke", "url(#areaGradient2)").attr("fill", "none").style("opacity", 0).attr("pointer-events", "none")
              , g = v.clone()
              , y = d.append("g").style("opacity", 0);
            return d.on("touchmove mousemove", (function() {
                (e=>{
                    const o = m.a.mouse(e)[0];
                    if (2 == i && o > 729)
                        return;
                    const {xCoord: a, yCoord: s, date: u, value: f, priorValue: h} = Object(E.a)(o, c, l, t);
                    v.attr("x", a),
                    0 == v.style("opacity") && v.transition().style("opacity", 1),
                    y.call(T.c, {
                        timeFrame: n,
                        value: f,
                        date: u
                    }, r)
                }
                )(this)
            }
            )).on("touchend mouseleave", (()=>{
                v.transition().style("opacity", 0),
                g.transition().style("opacity", 0),
                y.call(T.c, null, r)
            }
            )),
            d
        }
        ;
        var P = n(3);
        const D = {
            day: "%-I %p",
            week: "%a %-d",
            year: "%b",
            month: "%-d",
            all: "%b"
        }
          , R = {
            week: m.a.timeDay.every(1),
            month: m.a.timeDay.every(2),
            year: m.a.timeMonth.every(1),
            all: m.a.timeMonth.every(1)
        };
        function B(t) {
            return R[t]
        }
        function $() {
            const t = j().getBoundingClientRect();
            return {
                height: t.height,
                width: t.width,
                margin: {
                    top: 100,
                    right: 5,
                    bottom: 30,
                    left: 5
                },
                areaHeight: t.height
            }
        }
        function U() {
            const t = $();
            return {
                x: t.margin.left,
                y: t.margin.top / 2
            }
        }
        function H() {
            const t = $();
            return {
                x: t.margin.left,
                y: t.margin.top / .95
            }
        }
        function F() {
            const t = $();
            if (Object(P.f)())
                return {
                    x: t.margin.left,
                    y: t.margin.top / .78,
                    leftReference: !0
                };
            {
                const e = Object(T.b)();
                return {
                    x: t.width,
                    y: e,
                    leftReference: !1
                }
            }
        }
        const I = ({data: t, buttons: e, timeFrame: n})=>{
            L();
            const {height: r, width: i, margin: o} = $();
            if (null == t.chart || t.chart.length <= 2) {
                const o = N().append("svg").attr("viewBox", [0, 0, i, r]);
                return o.append("text").attr("fill", b.a.neutral50).attr("x", i / 2).attr("y", r / 2).attr("text-anchor", "middle").text("Performance chart coming soon").attr("font-weight", b.a.fontWeightMedium).attr("font-size", "18px").attr("letter-spacing", "0.5px"),
                k({
                    element: o,
                    config: {
                        position: U()
                    },
                    avgHashRate: t.avgHashRate,
                    timeFrame: n
                }),
                void Object(y.a)({
                    element: o,
                    config: {
                        position: H(),
                        leftReference: !0
                    },
                    buttons: e
                })
            }
            const a = m.a.scaleUtc().domain(m.a.extent(t.chart, (t=>t.date))).range([o.left, i - o.right])
              , s = m.a.axisBottom(a).ticks().tickFormat(function(t) {
                const e = D[t];
                return e ? m.a.timeFormat(e) : null
            }(n)).tickArguments([B(n)]).tickSizeOuter(0)
              , u = O({
                data: t,
                layout: $(),
                timeFrame: n,
                tooltipConfig: {
                    position: F(),
                    fontSize: 12,
                    unitsType: "TH/s",
                    utc: !0
                }
            });
            u.append("g").call((t=>{
                t.attr("transform", `translate(0,${r - o.bottom})`).style("color", "transparent").call(s),
                t.selectAll("text").attr("font-size", "8pt").attr("font-weight", 500).style("color", b.a.neutral300).attr("dy", 16).attr("font-family", "Inter"),
                t.selectAll("line")
            }
            )),
            k({
                element: u,
                config: {
                    position: U()
                },
                avgHashRate: t.avgHashRate,
                timeFrame: n
            }),
            Object(y.a)({
                element: u,
                config: {
                    position: H(),
                    leftReference: !0
                },
                buttons: e
            })
        }
          , z = "all";
        let q;
        function Y({data: t, error: e}, n) {
            e ? console.error("Error rendering hash rate chart:", e.message) : function(t, e) {
                var n;
                j().classList.remove(A),
                null === (n = document.getElementById("time-frame-input")) || void 0 === n || n.setAttribute("value", e);
                const r = function(t) {
                    return t.map((t=>({
                        date: new Date(t.hashrate_at),
                        value: t.gigahashrate / 1e3
                    })))
                }(t);
                I({
                    data: {
                        chart: r,
                        avgHashRate: W(r)
                    },
                    timeFrame: e,
                    buttons: [{
                        label: "1W",
                        active: "week" === e,
                        onClick: ()=>V("week")
                    }, {
                        label: "1M",
                        active: "month" === e,
                        onClick: ()=>V("month")
                    }, {
                        label: "1Y",
                        active: "year" === e,
                        onClick: ()=>V("year")
                    }, {
                        label: "ALL",
                        active: "all" === e,
                        onClick: ()=>V("all")
                    }]
                })
            }(t, n)
        }
        function V(t) {
            var e, n;
            L(),
            j().classList.add(A);
            const r = null !== (n = null === (e = document.URL.split("mining_contracts/")) || void 0 === e ? void 0 : e[1]) && void 0 !== n ? n : "";
            q.push("get_chart_data", {
                time_frame: t,
                contract_uid: r
            }).receive("ok", (e=>Y(e, t)))
        }
        function W(t) {
            return t.reduce(((t,{value: e})=>t + e), 0) / t.length
        }
        const G = {
            all: ": All Time",
            year: ": This Year",
            month: ": This Month",
            week: ": This Week",
            none: ""
        };
        function X({element: t, config: e, amountMined: n, firstAmountMined: r, lastAmountMined: i, timeFrame: o}) {
            const {position: {x: a, y: s}} = e
              , u = t.append("g").attr("transform", `translate(${a},${s})`).attr("font-weight", b.a.fontWeightNormal).attr("letter-spacing", "0.5px")
              , c = t.append("g").attr("id", "subtitleGroup").attr("transform", `translate(${a},${s + 32})`).attr("font-weight", b.a.fontWeightNormal)
              , l = parseFloat((n - r).toFixed(8))
              , f = l > 0 ? l.toString() : "-"
              , h = parseFloat(i.toFixed(8))
              , d = h > 0 ? h.toString() : "-";
            u.append("text").attr("fill", b.a.neutral300).attr("id", "bitcoinMinedMainTitle").text("Bitcoin Mined" + G[o]);
            const p = c.append("text").attr("fill", b.a.neutral50).attr("id", "amountMined").text(f).attr("font-size", "1.25em").node().getBBox().width;
            c.append("text").text("BTC").style("fill", b.a.neutral50).attr("id", "amountMinedBTC").attr("dx", p + 5).attr("font-size", "1em").attr("font-weight", "100");
            return c.append("text").attr("dy", 25).attr("id", "minedPerDay").style("fill", b.a.neutral50).text(d + " BTC").attr("font-size", "1em").attr("font-weight", "100").append("tspan").text("/day").attr("dx", 5).style("fill", b.a.neutral50),
            Object(T.a)(c, "Previous day's bitcoin mining payout.", c.node().getBBox().width + 10, s),
            c
        }
        const Z = b.a.gold
          , J = b.a.goldDarker
          , K = "c-time-series-chart-container"
          , Q = "c-time-series-chart-container--loading"
          , tt = {
            all: ": All Time",
            year: ": This Year",
            month: ": This Month",
            week: ": This Week",
            none: ""
        };
        function et() {
            return m.a.select(`.${K}`)
        }
        function nt() {
            return document.getElementsByClassName(K)[0]
        }
        function rt() {
            et().selectAll("*").remove()
        }
        const it = ({data: t, layout: e, timeFrame: n, tooltipConfig: r, version: i=1})=>{
            const {height: o, width: a, margin: s, areaHeight: u} = e
              , c = Object(E.b)(t, e)
              , l = Object(E.c)(t, e)
              , f = m.a.area().defined((t=>!isNaN(t.value))).x((t=>c(t.date))).y1((t=>l(t.value))).y0(u)
              , h = m.a.line().defined((t=>!isNaN(t.value))).x((t=>c(t.date))).y((t=>l(t.value)))
              , d = et().append("svg").attr("viewBox", [0, 0, a, o]).style("-webkit-tap-highlight-color", "transparent").style("overflow", "visible")
              , p = d.append("linearGradient").attr("id", "areaGradient").attr("x1", "0%").attr("x2", "0%").attr("y1", "0%").attr("y2", "120%");
            p.append("stop").attr("offset", "0").attr("stop-color", J).attr("stop-opacity", 1),
            p.append("stop").attr("offset", "1").attr("stop-color", "transparent").attr("stop-opacity", 1);
            const _ = d.append("path").datum(t.chart).attr("fill", "url(#areaGradient)").attr("d", f);
            d.append("path").datum(t.chart).attr("fill", "none").attr("stroke", Z).attr("stroke-width", 1.5).attr("stroke-linejoin", "round").attr("stroke-linecap", "round").attr("d", h),
            d.selectAll("text").style("user-select", "none");
            const v = d.append("linearGradient").attr("id", "areaGradient2").attr("x1", "0%").attr("x2", "0%").attr("y1", "0%").attr("y2", "100%");
            v.append("stop").attr("offset", "0").attr("stop-color", b.a.neutral300).attr("stop-opacity", "0"),
            v.append("stop").attr("offset", "100%").attr("stop-color", "white").attr("stop-opacity", "0.8");
            const g = d.append("clipPath").attr("id", "clip").append("rect").attr("x", "0").attr("y", "0").attr("width", a).attr("height", o)
              , y = d.append("rect").attr("width", .5).attr("height", o - s.bottom).attr("x", 0).attr("y", 0).attr("stroke-width", .5).attr("stroke", "url(#areaGradient2)").attr("fill", "none").style("opacity", 0).attr("pointer-events", "none")
              , x = y.clone();
            let w, k = !1, M = !1;
            const S = d.append("g").style("opacity", 0)
              , C = e=>{
                const o = m.a.mouse(e)[0];
                if (2 == i && o > 729)
                    return;
                const {xCoord: a, yCoord: s, date: f, value: h, priorValue: d} = Object(E.a)(o, c, l, t);
                if (y.attr("x", a),
                0 == y.style("opacity") && y.transition().style("opacity", 1),
                k) {
                    M = !0,
                    g.attr("width", Math.abs(a - c(w.date))),
                    a - c(w.date) >= 0 ? g.attr("x", c(w.date)) : g.attr("x", c(w.date) - g.attr("width"));
                    const t = m.a.area().defined((t=>!isNaN(t.value))).x((t=>c(t.date))).y1((t=>{
                        if (w.date < f) {
                            if (t.date < w.date)
                                return u;
                            if (t.date > f)
                                return u
                        }
                        if (w.date > f) {
                            if (t.date > w.date)
                                return u;
                            if (t.date < f)
                                return u
                        }
                        return l(t.value)
                    }
                    )).y0(u);
                    _.attr("d", t).attr("clip-path", "url(#clip)"),
                    f < w.date ? S.call(T.c, {
                        timeFrame: n,
                        value: w.value,
                        valueStart: h,
                        date: w.date,
                        dateStart: f
                    }, r) : S.call(T.c, {
                        timeFrame: n,
                        value: h,
                        valueStart: w.value,
                        date: f,
                        dateStart: w.date
                    }, r)
                } else {
                    S.call(T.c, {
                        timeFrame: n,
                        value: h,
                        date: f
                    }, r);
                    const t = f.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    });
                    m.a.select("#bitcoinMinedMainTitle").text("Bitcoin Mined as of " + t);
                    const e = Number(Math.abs(h - d).toFixed(8)).toString();
                    m.a.select("#minedPerDay").text(e + " BTC").append("tspan").text("/day").attr("dx", 5).style("fill", b.a.neutral50),
                    m.a.select("#amountMined").text(h);
                    const i = m.a.select("#amountMined");
                    m.a.select("#amountMinedBTC").remove();
                    const o = i.node().getBBox().width;
                    m.a.select("#subtitleGroup").append("text").text("BTC").style("fill", b.a.grayLighter).attr("id", "amountMinedBTC").attr("dx", o + 5).attr("font-size", "1em").attr("font-weight", "100"),
                    m.a.select(".tooltip-icon").remove(),
                    m.a.select(".tooltip-popup").remove(),
                    Object(T.a)(m.a.select("#subtitleGroup"), "Previous day's bitcoin mining payout.", m.a.select("#minedPerDay").node().getBBox().width + 10, 50)
                }
            }
            ;
            return d.on("touchmove mousemove", (function() {
                C(this)
            }
            )).on("touchend mouseleave", (()=>{
                if (!k) {
                    y.transition().style("opacity", 0),
                    x.transition().style("opacity", 0),
                    S.call(T.c, null, r);
                    const e = t.chart[t.chart.length - 1].value;
                    m.a.select("#bitcoinMinedMainTitle").text("Bitcoin Mined" + tt[n]);
                    const i = m.a.select("#amountMined");
                    i.text(e),
                    m.a.select("#amountMinedBTC").remove();
                    const o = i.node().getBBox().width;
                    m.a.select("#subtitleGroup").append("text").text("BTC").style("fill", b.a.grayLighter).attr("id", "amountMinedBTC").attr("dx", o + 5).attr("font-size", "1em").attr("font-weight", "100");
                    const a = parseFloat((t.chart.at(-1).value - t.chart.at(-2).value).toFixed(8));
                    m.a.select("#minedPerDay").text(a > 0 ? a.toString() + " BTC" : "- BTC").append("tspan").text("/day").attr("dx", 5).style("fill", b.a.neutral50);
                    const s = m.a.select("#subtitleGroup");
                    m.a.select(".tooltip-icon").remove(),
                    m.a.select(".tooltip-popup").remove(),
                    Object(T.a)(s, "Previous day's bitcoin mining payout.", m.a.select("#minedPerDay").node().getBBox().width + 10, 50)
                }
            }
            )).on("touchstart mousedown", (function() {
                const e = m.a.mouse(this)[0];
                if (2 == i && e > 729)
                    return;
                const {xCoord: n, date: r, value: o, priorValue: a} = Object(E.a)(e, c, l, t);
                k = !0,
                x.attr("x", n).transition().style("opacity", 1),
                w = {
                    date: r,
                    value: o
                }
            }
            )).on("touchend mouseup", (function() {
                g.attr("x", 0),
                g.attr("width", a),
                M && (M = !1,
                _.attr("d", f)),
                k = !1,
                x.transition().duration(10).style("opacity", 0),
                C(this)
            }
            )),
            d
        }
          , ot = {
            day: "%-I %p",
            week: "%a %-d",
            year: "%b",
            month: "%-d",
            all: "%b"
        }
          , at = {
            week: m.a.timeDay.every(1),
            month: m.a.timeDay.every(2),
            year: m.a.timeMonth.every(1),
            all: m.a.timeMonth.every(1)
        };
        function st(t) {
            return at[t]
        }
        function ut() {
            const t = nt().getBoundingClientRect();
            return {
                height: t.height,
                width: t.width,
                margin: {
                    top: 100,
                    right: 5,
                    bottom: 30,
                    left: 5
                },
                areaHeight: t.height
            }
        }
        function ct() {
            const t = ut();
            return {
                x: t.margin.left,
                y: t.margin.top / 2
            }
        }
        function lt() {
            const t = ut();
            return {
                x: t.margin.left,
                y: t.margin.top / .78
            }
        }
        function ft() {
            const t = ut();
            if (Object(P.f)())
                return {
                    x: t.margin.left,
                    y: t.margin.top / .66,
                    leftReference: !0
                };
            {
                const e = Object(T.b)();
                return {
                    x: t.width,
                    y: e,
                    leftReference: !1
                }
            }
        }
        const ht = ({data: t, buttons: e, timeFrame: n})=>{
            var r, i;
            rt();
            const {height: o, width: a, margin: s} = ut();
            if (null == t.chart || t.chart.length <= 2) {
                const e = et().append("svg").attr("viewBox", [0, 0, a, o]);
                return e.append("text").attr("fill", b.a.neutral50).attr("x", a / 2).attr("y", o / 2).attr("text-anchor", "middle").text("Performance chart coming soon").attr("font-weight", b.a.fontWeightMedium).attr("font-size", "18px").attr("letter-spacing", "0.5px"),
                void X({
                    element: e,
                    config: {
                        position: ct()
                    },
                    amountMined: 0,
                    firstAmountMined: 0,
                    lastAmountMined: t.chart.length > 1 ? t.chart.at(-1).value - t.chart.at(-2).value : 0,
                    timeFrame: "none"
                })
            }
            const u = m.a.scaleUtc().domain(m.a.extent(t.chart, (t=>t.date))).range([s.left, a - s.right])
              , c = m.a.axisBottom(u).ticks().tickFormat(function(t) {
                const e = ot[t];
                return e ? m.a.timeFormat(e) : null
            }(n)).tickArguments([st(n)]).tickSizeOuter(0)
              , l = it({
                data: t,
                layout: ut(),
                timeFrame: n,
                tooltipConfig: {
                    position: ft(),
                    fontSize: 12,
                    unitsType: "BTC"
                }
            });
            l.append("g").call((t=>{
                t.attr("transform", `translate(0,${o - s.bottom})`).style("color", "transparent").call(c),
                t.selectAll("text").attr("font-size", "1.2em").attr("font-weight", b.a.fontWeightNormal).style("color", b.a.neutral300).attr("dy", 16).attr("font-family", "Inter"),
                t.selectAll("line")
            }
            )),
            X({
                element: l,
                config: {
                    position: ct()
                },
                amountMined: t.amountMined,
                firstAmountMined: null !== (r = t.chart[0].value) && void 0 !== r ? r : 0,
                lastAmountMined: null !== (i = t.chart.at(-1).value - t.chart.at(-2).value) && void 0 !== i ? i : 0,
                timeFrame: n
            }),
            Object(y.a)({
                element: l,
                config: {
                    position: lt(),
                    leftReference: !0
                },
                buttons: e
            })
        }
          , dt = "all";
        let pt;
        function _t({data: t, error: e}, n) {
            e ? console.error("Error rendering bitcoin mined chart:", e.message) : function(t, e) {
                var n;
                nt().classList.remove(Q),
                null === (n = document.getElementById("time-frame-input")) || void 0 === n || n.setAttribute("value", e),
                ht({
                    data: {
                        chart: gt(t.chart),
                        amountMined: t.amountMined
                    },
                    timeFrame: e,
                    buttons: [{
                        label: "1W",
                        active: "week" === e,
                        onClick: ()=>vt("week")
                    }, {
                        label: "1M",
                        active: "month" === e,
                        onClick: ()=>vt("month")
                    }, {
                        label: "1Y",
                        active: "year" === e,
                        onClick: ()=>vt("year")
                    }, {
                        label: "ALL",
                        active: "all" === e,
                        onClick: ()=>vt("all")
                    }]
                })
            }(t, n)
        }
        function vt(t) {
            var e, n;
            rt(),
            nt().classList.add(Q);
            const r = null !== (n = null === (e = document.URL.split("mining_contracts/")) || void 0 === e ? void 0 : e[1]) && void 0 !== n ? n : "";
            pt.push("get_chart_data", {
                time_frame: t,
                contract_uid: r
            }).receive("ok", (e=>_t(e, t)))
        }
        function gt(t) {
            return t.map((t=>({
                date: new Date(t.date),
                value: t.value
            })))
        }
        var mt = function() {
            _.a.data("carousel", (()=>({
                embla: null,
                next: !1,
                prev: !1,
                sel: 0,
                num: 1,
                init() {
                    const t = window.Autoplay({
                        delay: 4e3,
                        stopOnMouseEnter: !0,
                        stopOnInteraction: !0
                    }, (t=>t.parentElement));
                    this.embla = window.EmblaCarousel(this.$refs.viewport, {
                        slidesToScroll: 1,
                        loop: !1,
                        align: "start"
                    }, [t]),
                    this.embla.on("select", (()=>{
                        this.sel = this.embla.selectedScrollSnap(),
                        this.num = this.sel + 1,
                        this.next = this.embla.canScrollNext(),
                        this.prev = this.embla.canScrollPrev()
                    }
                    )),
                    this.embla.on("init", (()=>{
                        this.next = this.embla.canScrollNext(),
                        this.prev = this.embla.canScrollPrev()
                    }
                    ))
                },
                scrollPrev() {
                    this.embla.scrollPrev()
                },
                scrollNext() {
                    this.embla.scrollNext()
                },
                scrollTo() {
                    this.embla.scrollTo(parseInt(this.$el.dataset.index))
                },
                styleSelected: {
                    ":class"() {
                        return this.$el.dataset.index == this.sel && "is-selected"
                    }
                },
                disabledPrev: {
                    ":disabled"() {
                        return !this.prev
                    }
                },
                disabledNext: {
                    ":disabled"() {
                        return !this.next
                    }
                }
            }))),
            _.a.data("product-feature-carousel", (()=>({
                embla: null,
                next: !1,
                prev: !1,
                sel: 0,
                num: 1,
                init() {
                    this.embla = window.EmblaCarousel(this.$refs.viewport, {
                        slidesToScroll: 1,
                        loop: !1
                    }),
                    this.embla.on("select", (()=>{
                        this.sel = this.embla.selectedScrollSnap(),
                        this.num = this.sel + 1,
                        this.next = this.embla.canScrollNext(),
                        this.prev = this.embla.canScrollPrev()
                    }
                    )),
                    this.embla.on("init", (()=>{
                        this.next = this.embla.canScrollNext(),
                        this.prev = this.embla.canScrollPrev()
                    }
                    ))
                },
                scrollPrev() {
                    this.embla.scrollPrev()
                },
                scrollNext() {
                    this.embla.scrollNext()
                },
                scrollTo() {
                    this.embla.scrollTo(parseInt(this.$el.dataset.index))
                },
                styleSelected: {
                    ":class"() {
                        return this.$el.dataset.index == this.sel && "is-selected"
                    }
                },
                disabledPrev: {
                    ":disabled"() {
                        return !this.prev
                    }
                },
                disabledNext: {
                    ":disabled"() {
                        return !this.next
                    }
                }
            }))),
            _.a.data("active-menu", (()=>({
                init() {
                    for (let t of this.$el.getElementsByTagName("*"))
                        if (t.classList.contains("active")) {
                            this.$el.classList.add("active");
                            const t = this.$el.getElementsByTagName("span");
                            t.length > 0 && t[0].classList.add("active")
                        }
                }
            }))),
            _.a.data("alpine_hash_rate", (()=>({
                init() {
                    var t;
                    !function(t=z) {
                        var e, n;
                        const r = v.a.get()
                          , i = Object(g.a)("user_uid");
                        if (!i)
                            return console.error("Could not setup hash rate channel for user, userUid not found.");
                        r && (window.addEventListener("phx:page-loading-stop", (t=>V(z))),
                        window.addEventListener("orientationChange", (t=>V(z))),
                        q = r.channel(`hash_rate_chart:${i}`, {
                            time_frame: t,
                            contract_uid: null !== (n = null === (e = document.URL.split("mining_contracts/")) || void 0 === e ? void 0 : e[1]) && void 0 !== n ? n : ""
                        }),
                        q.join().receive("ok", (e=>Y(e, t))).receive("error", (t=>{
                            console.log("Unable to join", t)
                        }
                        )))
                    }((null === (t = document.getElementById("time-frame-input")) || void 0 === t ? void 0 : t.getAttribute("value")) || this.$el.dataset.time)
                }
            }))),
            _.a.data("alpine_bitcoin_mined", (()=>({
                init() {
                    var t;
                    !function(t=dt) {
                        var e, n;
                        const r = v.a.get()
                          , i = Object(g.a)("user_uid");
                        if (!i)
                            return console.error("Could not setup bitcoin mined channel for user, userUid not found.");
                        r && (window.addEventListener("phx:page-loading-stop", (t=>vt(dt))),
                        window.addEventListener("orientationChange", (t=>vt(dt))),
                        pt = r.channel(`bitcoin_mined_chart:${i}`, {
                            time_frame: t,
                            contract_uid: null !== (n = null === (e = document.URL.split("mining_contracts/")) || void 0 === e ? void 0 : e[1]) && void 0 !== n ? n : ""
                        }),
                        pt.join().receive("ok", (e=>{
                            _t(e, t)
                        }
                        )).receive("error", (t=>{
                            console.log("Unable to join", t)
                        }
                        )))
                    }((null === (t = document.getElementById("time-frame-input")) || void 0 === t ? void 0 : t.getAttribute("value")) || this.$el.dataset.time)
                }
            }))),
            _.a.data("{input: 'password'}", (()=>({
                input: "password",
                togglePasswordVisibility() {
                    this.input = "password" === this.input ? "text" : "password",
                    this.$el.classList.toggle("show_password_svg"),
                    this.$el.classList.toggle("hide_password_svg")
                }
            }))),
            _.a.start()
        };
        function yt(t, e) {
            var n = {
                start: function() {
                    return 0
                },
                center: function(t) {
                    return r(t) / 2
                },
                end: r
            };
            function r(t) {
                return e - t
            }
            return {
                measure: function(r) {
                    return "number" == typeof t ? e * Number(t) : n[t](r)
                }
            }
        }
        function xt(t) {
            return Math.abs(t)
        }
        function bt(t) {
            return t ? t / xt(t) : 0
        }
        function wt(t, e) {
            return xt(t - e)
        }
        function kt(t, e) {
            for (var n = [], r = 0; r < t.length; r += e)
                n.push(t.slice(r, r + e));
            return n
        }
        function Tt(t) {
            return Object.keys(t).map(Number)
        }
        function Et(t) {
            return t[Mt(t)]
        }
        function Mt(t) {
            return Math.max(0, t.length - 1)
        }
        function St(t, e) {
            var n = xt(t - e);
            function r(e) {
                return e < t
            }
            function i(t) {
                return t > e
            }
            function o(t) {
                return r(t) || i(t)
            }
            return {
                length: n,
                max: e,
                min: t,
                constrain: function(n) {
                    return o(n) ? r(n) ? t : e : n
                },
                reachedAny: o,
                reachedMax: i,
                reachedMin: r,
                removeOffset: function(t) {
                    return n ? t - n * Math.ceil((t - e) / n) : t
                }
            }
        }
        function Ct(t, e, n) {
            var r = St(0, t)
              , i = r.min
              , o = r.constrain
              , a = t + 1
              , s = u(e);
            function u(t) {
                return n ? xt((a + t) % a) : o(t)
            }
            function c() {
                return s
            }
            function l(t) {
                return s = u(t),
                f
            }
            var f = {
                add: function(t) {
                    return l(c() + t)
                },
                clone: function() {
                    return Ct(t, c(), n)
                },
                get: c,
                set: l,
                min: i,
                max: t
            };
            return f
        }
        function At() {
            var t = [];
            var e = {
                add: function(n, r, i, o) {
                    return void 0 === o && (o = !1),
                    n.addEventListener(r, i, o),
                    t.push((function() {
                        return n.removeEventListener(r, i, o)
                    }
                    )),
                    e
                },
                removeAll: function() {
                    return t = t.filter((function(t) {
                        return t()
                    }
                    )),
                    e
                }
            };
            return e
        }
        function Nt(t) {
            var e = t;
            function n(t) {
                return e /= t,
                i
            }
            function r(t) {
                return "number" == typeof t ? t : t.get()
            }
            var i = {
                add: function(t) {
                    return e += r(t),
                    i
                },
                divide: n,
                get: function() {
                    return e
                },
                multiply: function(t) {
                    return e *= t,
                    i
                },
                normalize: function() {
                    return 0 !== e && n(e),
                    i
                },
                set: function(t) {
                    return e = r(t),
                    i
                },
                subtract: function(t) {
                    return e -= r(t),
                    i
                }
            };
            return i
        }
        function jt(t, e, n, r, i, o, a, s, u, c, l, f, h, d, p) {
            var _ = t.cross
              , v = ["INPUT", "SELECT", "TEXTAREA"]
              , g = Nt(0)
              , m = At()
              , y = At()
              , x = {
                mouse: 300,
                touch: 400
            }
              , b = {
                mouse: 500,
                touch: 600
            }
              , w = i ? 5 : 16
              , k = 0
              , T = 0
              , E = !1
              , M = !1
              , S = !1
              , C = !1;
            function A(t) {
                if (!(C = "mousedown" === t.type) || 0 === t.button) {
                    var e, i, s = wt(r.get(), a.get()) >= 2, u = C || !s, l = (e = t.target,
                    i = e.nodeName || "",
                    !(v.indexOf(i) > -1)), f = s || C && l;
                    E = !0,
                    o.pointerDown(t),
                    g.set(r),
                    r.set(a),
                    c.useBaseMass().useSpeed(80),
                    function() {
                        var t = C ? document : n;
                        y.add(t, "touchmove", N).add(t, "touchend", j).add(t, "mousemove", N).add(t, "mouseup", j)
                    }(),
                    k = o.readPoint(t),
                    T = o.readPoint(t, _),
                    h.emit("pointerDown"),
                    u && (S = !1),
                    f && t.preventDefault()
                }
            }
            function N(t) {
                if (!M && !C) {
                    if (!t.cancelable)
                        return j(t);
                    var n = o.readPoint(t)
                      , i = o.readPoint(t, _)
                      , a = wt(n, k)
                      , u = wt(i, T);
                    if (!(M = a > u) && !S)
                        return j(t)
                }
                var c = o.pointerMove(t);
                !S && c && (S = !0),
                s.start(),
                r.add(e.apply(c)),
                t.preventDefault()
            }
            function j(t) {
                var n = l.byDistance(0, !1).index !== f.get()
                  , a = o.pointerUp(t) * (i ? b : x)[C ? "mouse" : "touch"]
                  , s = function(t, e) {
                    var n = f.clone().add(-1 * bt(t))
                      , r = n.get() === f.min || n.get() === f.max
                      , o = l.byDistance(t, !i).distance;
                    return i || xt(t) < 20 ? o : !d && r ? .4 * o : p && e ? .5 * o : l.byIndex(n.get(), 0).distance
                }(e.apply(a), n)
                  , _ = function(t, e) {
                    if (0 === t || 0 === e)
                        return 0;
                    if (xt(t) <= xt(e))
                        return 0;
                    var n = wt(xt(t), xt(e));
                    return xt(n / t)
                }(a, s)
                  , v = wt(r.get(), g.get()) >= .5
                  , m = n && _ > .75
                  , k = xt(a) < 20
                  , T = m ? 10 : w
                  , A = m ? 1 + 2.5 * _ : 1;
                v && !C && (S = !0),
                M = !1,
                E = !1,
                y.removeAll(),
                c.useSpeed(k ? 9 : T).useMass(A),
                u.distance(s, !i),
                C = !1,
                h.emit("pointerUp")
            }
            function L(t) {
                S && t.preventDefault()
            }
            return {
                addActivationEvents: function() {
                    var t = n;
                    m.add(t, "touchmove", (function() {}
                    )).add(t, "touchend", (function() {}
                    )).add(t, "touchstart", A).add(t, "mousedown", A).add(t, "touchcancel", j).add(t, "contextmenu", j).add(t, "click", L)
                },
                clickAllowed: function() {
                    return !S
                },
                pointerDown: function() {
                    return E
                },
                removeAllEvents: function() {
                    m.removeAll(),
                    y.removeAll()
                }
            }
        }
        function Lt(t, e, n) {
            var r, i, o = (r = 2,
            i = Math.pow(10, r),
            function(t) {
                return Math.round(t * i) / i
            }
            ), a = Nt(0), s = Nt(0), u = Nt(0), c = 0, l = e, f = n;
            function h(t) {
                return l = t,
                p
            }
            function d(t) {
                return f = t,
                p
            }
            var p = {
                direction: function() {
                    return c
                },
                seek: function(e) {
                    u.set(e).subtract(t);
                    var n, r, i, o, h = (n = u.get(),
                    (i = 0) + (n - (r = 0)) / (100 - r) * (l - i));
                    return c = bt(u.get()),
                    u.normalize().multiply(h).subtract(a),
                    (o = u).divide(f),
                    s.add(o),
                    p
                },
                settle: function(e) {
                    var n = e.get() - t.get()
                      , r = !o(n);
                    return r && t.set(e),
                    r
                },
                update: function() {
                    a.add(s),
                    t.add(a),
                    s.multiply(0)
                },
                useBaseMass: function() {
                    return d(n)
                },
                useBaseSpeed: function() {
                    return h(e)
                },
                useMass: d,
                useSpeed: h
            };
            return p
        }
        function Ot(t, e, n, r) {
            var i = !1;
            return {
                constrain: function(o) {
                    if (!i && t.reachedAny(n.get()) && t.reachedAny(e.get())) {
                        var a = t.reachedMin(e.get()) ? "min" : "max"
                          , s = xt(t[a] - e.get())
                          , u = n.get() - e.get()
                          , c = Math.min(s / 50, .85);
                        n.subtract(u * c),
                        !o && xt(u) < 10 && (n.set(t.constrain(n.get())),
                        r.useSpeed(10).useMass(3))
                    }
                },
                toggleActive: function(t) {
                    i = !t
                }
            }
        }
        function Pt(t, e, n, r, i) {
            var o = St(-e + t, n[0])
              , a = r.map(o.constrain);
            return {
                snapsContained: function() {
                    if (e <= t)
                        return [o.max];
                    if ("keepSnaps" === i)
                        return a;
                    var n = function() {
                        var t = a[0]
                          , e = Et(a)
                          , n = a.lastIndexOf(t)
                          , r = a.indexOf(e) + 1;
                        return St(n, r)
                    }()
                      , r = n.min
                      , s = n.max;
                    return a.slice(r, s)
                }()
            }
        }
        function Dt(t, e, n, r, i) {
            var o = St(n.min + e.measure(.1), n.max + e.measure(.1))
              , a = o.reachedMin
              , s = o.reachedMax;
            return {
                loop: function(e) {
                    if (function(t) {
                        return 1 === t ? s(r.get()) : -1 === t && a(r.get())
                    }(e)) {
                        var n = t * (-1 * e);
                        i.forEach((function(t) {
                            return t.add(n)
                        }
                        ))
                    }
                }
            }
        }
        function Rt(t) {
            var e = t.max
              , n = t.length;
            return {
                get: function(t) {
                    return (t - e) / -n
                }
            }
        }
        function Bt(t, e, n, r, i, o) {
            var a, s, u = t.startEdge, c = t.endEdge, l = i.map((function(t) {
                return r[u] - t[u]
            }
            )).map(n.measure).map((function(t) {
                return -xt(t)
            }
            )), f = (a = kt(l, o).map((function(t) {
                return t[0]
            }
            )),
            s = kt(i, o).map((function(t) {
                return Et(t)[c] - t[0][u]
            }
            )).map(n.measure).map(xt).map(e.measure),
            a.map((function(t, e) {
                return t + s[e]
            }
            )));
            return {
                snaps: l,
                snapsAligned: f
            }
        }
        function $t(t, e, n, r, i) {
            var o = r.reachedAny
              , a = r.removeOffset
              , s = r.constrain;
            function u(t, e) {
                return xt(t) < xt(e) ? t : e
            }
            function c(e, r) {
                var i = e
                  , o = e + n
                  , a = e - n;
                return t ? r ? xt(u(i, 1 === r ? o : a)) * r : u(u(i, o), a) : i
            }
            return {
                byDistance: function(n, r) {
                    var u = i.get() + n
                      , l = function(n) {
                        var r = t ? a(n) : s(n);
                        return {
                            index: e.map((function(t) {
                                return t - r
                            }
                            )).map((function(t) {
                                return c(t, 0)
                            }
                            )).map((function(t, e) {
                                return {
                                    diff: t,
                                    index: e
                                }
                            }
                            )).sort((function(t, e) {
                                return xt(t.diff) - xt(e.diff)
                            }
                            ))[0].index,
                            distance: r
                        }
                    }(u)
                      , f = l.index
                      , h = l.distance
                      , d = !t && o(u);
                    return !r || d ? {
                        index: f,
                        distance: n
                    } : {
                        index: f,
                        distance: n + c(e[f] - h, 0)
                    }
                },
                byIndex: function(t, n) {
                    return {
                        index: t,
                        distance: c(e[t] - i.get(), n)
                    }
                },
                shortcut: c
            }
        }
        function Ut(t, e, n, r, i, o, a, s) {
            var u, c = Tt(r), l = Tt(r).reverse(), f = (u = i[0] - 1,
            p(d(l, u), "end")).concat(function() {
                var t = e - i[0] - 1
                  , n = d(c, t);
                return p(n, "start")
            }());
            function h(t, e) {
                return t.reduce((function(t, e) {
                    return t - r[e]
                }
                ), e)
            }
            function d(t, e) {
                return t.reduce((function(t, n) {
                    return h(t, e) > 0 ? t.concat([n]) : t
                }
                ), [])
            }
            function p(t, e) {
                var r = "start" === e
                  , i = r ? -n : n
                  , s = o.findSlideBounds([i]);
                return t.map((function(t) {
                    var e = r ? 0 : -n
                      , i = r ? n : 0
                      , o = s.filter((function(e) {
                        return e.index === t
                    }
                    ))[0][r ? "end" : "start"];
                    return {
                        point: o,
                        getTarget: function() {
                            return a.get() > o ? e : i
                        },
                        index: t,
                        location: -1
                    }
                }
                ))
            }
            return {
                canLoop: function() {
                    return f.every((function(t) {
                        var n = t.index;
                        return h(c.filter((function(t) {
                            return t !== n
                        }
                        )), e) <= 0
                    }
                    ))
                },
                clear: function() {
                    f.forEach((function(e) {
                        var n = e.index;
                        s[n].style[t.startEdge] = ""
                    }
                    ))
                },
                loop: function() {
                    f.forEach((function(e) {
                        var n = e.getTarget
                          , r = e.location
                          , i = e.index
                          , o = n();
                        o !== r && (s[i].style[t.startEdge] = o + "%",
                        e.location = o)
                    }
                    ))
                },
                loopPoints: f
            }
        }
        function Ht(t, e, n) {
            var r = "x" === t.scroll ? function(t) {
                return "translate3d(" + t + "%,0px,0px)"
            }
            : function(t) {
                return "translate3d(0px," + t + "%,0px)"
            }
              , i = n.style
              , o = !1;
            return {
                clear: function() {
                    i.transform = ""
                },
                to: function(t) {
                    o || (i.transform = r(e.apply(t.get())))
                },
                toggleActive: function(t) {
                    o = !t
                }
            }
        }
        function Ft(t, e, n, r, i) {
            var o, a = r.align, s = r.axis, u = r.direction, c = r.startIndex, l = r.inViewThreshold, f = r.loop, h = r.speed, d = r.dragFree, p = r.slidesToScroll, _ = r.skipSnaps, v = r.containScroll, g = e.getBoundingClientRect(), m = n.map((function(t) {
                return t.getBoundingClientRect()
            }
            )), y = function(t) {
                var e = "rtl" === t ? -1 : 1;
                return {
                    apply: function(t) {
                        return t * e
                    }
                }
            }(u), x = function(t, e) {
                var n = "y" === t ? "y" : "x";
                return {
                    scroll: n,
                    cross: "y" === t ? "x" : "y",
                    startEdge: "y" === n ? "top" : "rtl" === e ? "right" : "left",
                    endEdge: "y" === n ? "bottom" : "rtl" === e ? "left" : "right",
                    measureSize: function(t) {
                        var e = t.width
                          , r = t.height;
                        return "x" === n ? e : r
                    }
                }
            }(s, u), b = (o = x.measureSize(g),
            {
                measure: function(t) {
                    return 0 === o ? 0 : t / o * 100
                },
                totalPercent: 100
            }), w = b.totalPercent, k = yt(a, w), T = function(t, e, n, r, i) {
                var o = t.measureSize
                  , a = t.startEdge
                  , s = t.endEdge
                  , u = r.map(o);
                return {
                    slideSizes: u.map(e.measure),
                    slideSizesWithGaps: r.map((function(t, e, r) {
                        var o = e === Mt(r)
                          , c = window.getComputedStyle(Et(n))
                          , l = parseFloat(c.getPropertyValue("margin-" + s));
                        return o ? u[e] + (i ? l : 0) : r[e + 1][a] - t[a]
                    }
                    )).map(e.measure).map(xt)
                }
            }(x, b, n, m, f), E = T.slideSizes, M = T.slideSizesWithGaps, S = Bt(x, k, b, g, m, p), C = S.snaps, A = S.snapsAligned, N = -Et(C) + Et(M), j = Pt(w, N, C, A, v).snapsContained, L = !f && "" !== v ? j : A, O = function(t, e, n) {
                var r, i;
                return {
                    limit: (r = e[0],
                    i = Et(e),
                    St(n ? r - t : i, r))
                }
            }(N, L, f).limit, P = Ct(Mt(L), c, f), D = P.clone(), R = Tt(n), B = function(t) {
                var e = 0;
                function n(t, n) {
                    return function() {
                        t === !!e && n()
                    }
                }
                function r() {
                    e = window.requestAnimationFrame(t)
                }
                return {
                    proceed: n(!0, r),
                    start: n(!1, r),
                    stop: n(!0, (function() {
                        window.cancelAnimationFrame(e),
                        e = 0
                    }
                    ))
                }
            }((function() {
                f || V.scrollBounds.constrain(V.dragHandler.pointerDown()),
                V.scrollBody.seek(H).update();
                var t = V.scrollBody.settle(H);
                t && !V.dragHandler.pointerDown() && (V.animation.stop(),
                i.emit("settle")),
                t || i.emit("scroll"),
                f && (V.scrollLooper.loop(V.scrollBody.direction()),
                V.slideLooper.loop()),
                V.translate.to(U),
                V.animation.proceed()
            }
            )), $ = L[P.get()], U = Nt($), H = Nt($), F = Lt(U, h, 1), I = $t(f, L, N, O, H), z = function(t, e, n, r, i, o) {
                function a(r) {
                    var a = r.distance
                      , s = r.index !== e.get();
                    a && (t.start(),
                    i.add(a)),
                    s && (n.set(e.get()),
                    e.set(r.index),
                    o.emit("select"))
                }
                return {
                    distance: function(t, e) {
                        a(r.byDistance(t, e))
                    },
                    index: function(t, n) {
                        var i = e.clone().set(t);
                        a(r.byIndex(i.get(), n))
                    }
                }
            }(B, P, D, I, H, i), q = function(t, e, n, r, i, o, a) {
                var s = i.removeOffset
                  , u = i.constrain
                  , c = Math.min(Math.max(a, .01), .99)
                  , l = o ? [0, e, -e] : [0]
                  , f = h(l, c);
                function h(e, i) {
                    var o = e || l
                      , a = i || 0
                      , s = n.map((function(t) {
                        return t * a
                    }
                    ));
                    return o.reduce((function(e, i) {
                        var o = r.map((function(e, r) {
                            return {
                                start: e - n[r] + s[r] + i,
                                end: e + t - s[r] + i,
                                index: r
                            }
                        }
                        ));
                        return e.concat(o)
                    }
                    ), [])
                }
                return {
                    check: function(t, e) {
                        var n = o ? s(t) : u(t);
                        return (e || f).reduce((function(t, e) {
                            var r = e.index
                              , i = e.start
                              , o = e.end;
                            return -1 === t.indexOf(r) && i < n && o > n ? t.concat([r]) : t
                        }
                        ), [])
                    },
                    findSlideBounds: h
                }
            }(w, N, E, C, O, f, l), Y = jt(x, y, t, H, d, function(t, e) {
                var n, r;
                function i(t) {
                    return "undefined" != typeof TouchEvent && t instanceof TouchEvent
                }
                function o(t) {
                    return t.timeStamp
                }
                function a(e, n) {
                    var r = "client" + ("x" === (n || t.scroll) ? "X" : "Y");
                    return (i(e) ? e.touches[0] : e)[r]
                }
                return {
                    isTouchEvent: i,
                    pointerDown: function(t) {
                        return n = t,
                        r = t,
                        e.measure(a(t))
                    },
                    pointerMove: function(t) {
                        var i = a(t) - a(r)
                          , s = o(t) - o(n) > 170;
                        return r = t,
                        s && (n = t),
                        e.measure(i)
                    },
                    pointerUp: function(t) {
                        if (!n || !r)
                            return 0;
                        var i = a(r) - a(n)
                          , s = o(t) - o(n)
                          , u = o(t) - o(r) > 170
                          , c = i / s;
                        return s && !u && xt(c) > .1 ? e.measure(c) : 0
                    },
                    readPoint: a
                }
            }(x, b), U, B, z, F, I, P, i, f, _), V = {
                containerRect: g,
                slideRects: m,
                animation: B,
                axis: x,
                direction: y,
                dragHandler: Y,
                eventStore: At(),
                pxToPercent: b,
                index: P,
                indexPrevious: D,
                limit: O,
                location: U,
                options: r,
                scrollBody: F,
                scrollBounds: Ot(O, U, H, F),
                scrollLooper: Dt(N, b, O, U, [U, H]),
                scrollProgress: Rt(O),
                scrollSnaps: L,
                scrollTarget: I,
                scrollTo: z,
                slideLooper: Ut(x, w, N, M, L, q, U, n),
                slidesInView: q,
                slideIndexes: R,
                target: H,
                translate: Ht(x, y, e)
            };
            return V
        }
        var It = {
            align: "center",
            axis: "x",
            containScroll: "",
            direction: "ltr",
            dragFree: !1,
            draggable: !0,
            inViewThreshold: 0,
            loop: !1,
            skipSnaps: !1,
            slidesToScroll: 1,
            speed: 10,
            startIndex: 0
        };
        function zt(t, e, n) {
            var r, i, o, a, s, u, c, l, f, h = function() {
                var t = {};
                function e(e) {
                    return t[e] || []
                }
                var n = {
                    emit: function(t) {
                        return e(t).forEach((function(e) {
                            return e(t)
                        }
                        )),
                        n
                    },
                    off: function(r, i) {
                        return t[r] = e(r).filter((function(t) {
                            return t !== i
                        }
                        )),
                        n
                    },
                    on: function(r, i) {
                        return t[r] = e(r).concat([i]),
                        n
                    }
                };
                return n
            }(), d = (r = function() {
                if (g) {
                    var t = a.axis.measureSize(c.getBoundingClientRect());
                    x !== t && k(),
                    h.emit("resize")
                }
            }
            ,
            i = 500,
            o = 0,
            function() {
                window.clearTimeout(o),
                o = window.setTimeout(r, i) || 0
            }
            ), p = k, _ = h.on, v = h.off, g = !1, m = Object.assign({}, It, zt.globalOptions), y = Object.assign({}, m), x = 0;
            function b() {
                var e, n = "container"in t && t.container, r = "slides"in t && t.slides;
                c = "root"in t ? t.root : t,
                l = n || c.children[0],
                f = r || [].slice.call(l.children),
                e = getComputedStyle(c, ":before").content,
                s = {
                    get: function() {
                        try {
                            return JSON.parse(e.slice(1, -1).replace(/\\/g, ""))
                        } catch (t) {}
                        return {}
                    }
                }
            }
            function w(t, e) {
                if (b(),
                m = Object.assign({}, m, t),
                y = Object.assign({}, m, s.get()),
                u = Object.assign([], e),
                (a = Ft(c, l, f, y, h)).eventStore.add(window, "resize", d),
                a.translate.to(a.location),
                x = a.axis.measureSize(c.getBoundingClientRect()),
                u.forEach((function(t) {
                    return t.init(C)
                }
                )),
                y.loop) {
                    if (!a.slideLooper.canLoop())
                        return T(),
                        w({
                            loop: !1
                        }, e);
                    a.slideLooper.loop()
                }
                y.draggable && l.offsetParent && f.length && a.dragHandler.addActivationEvents(),
                g || (setTimeout((function() {
                    return h.emit("init")
                }
                ), 0),
                g = !0)
            }
            function k(t, e) {
                if (g) {
                    var n = S()
                      , r = Object.assign({
                        startIndex: n
                    }, t);
                    T(),
                    w(r, e || u),
                    h.emit("reInit")
                }
            }
            function T() {
                a.dragHandler.removeAllEvents(),
                a.animation.stop(),
                a.eventStore.removeAll(),
                a.translate.clear(),
                a.slideLooper.clear(),
                u.forEach((function(t) {
                    return t.destroy()
                }
                ))
            }
            function E(t) {
                var e = a[t ? "target" : "location"].get()
                  , n = y.loop ? "removeOffset" : "constrain";
                return a.slidesInView.check(a.limit[n](e))
            }
            function M(t, e, n) {
                a.scrollBody.useBaseMass().useSpeed(e ? 100 : y.speed),
                g && a.scrollTo.index(t, n || 0)
            }
            function S() {
                return a.index.get()
            }
            var C = {
                canScrollNext: function() {
                    return a.index.clone().add(1).get() !== S()
                },
                canScrollPrev: function() {
                    return a.index.clone().add(-1).get() !== S()
                },
                clickAllowed: function() {
                    return a.dragHandler.clickAllowed()
                },
                containerNode: function() {
                    return l
                },
                internalEngine: function() {
                    return a
                },
                destroy: function() {
                    g && (T(),
                    g = !1,
                    h.emit("destroy"))
                },
                off: v,
                on: _,
                previousScrollSnap: function() {
                    return a.indexPrevious.get()
                },
                reInit: p,
                rootNode: function() {
                    return c
                },
                scrollNext: function(t) {
                    M(a.index.clone().add(1).get(), !0 === t, -1)
                },
                scrollPrev: function(t) {
                    M(a.index.clone().add(-1).get(), !0 === t, 1)
                },
                scrollProgress: function() {
                    return a.scrollProgress.get(a.location.get())
                },
                scrollSnapList: function() {
                    return a.scrollSnaps.map(a.scrollProgress.get)
                },
                scrollTo: M,
                selectedScrollSnap: S,
                slideNodes: function() {
                    return f
                },
                slidesInView: E,
                slidesNotInView: function(t) {
                    var e = E(t);
                    return a.slideIndexes.filter((function(t) {
                        return -1 === e.indexOf(t)
                    }
                    ))
                }
            };
            return w(e, n),
            C
        }
        zt.globalOptions = void 0;
        var qt = zt
          , Yt = {
            delay: 4e3,
            playOnInit: !0,
            stopOnInteraction: !0,
            stopOnMouseEnter: !1,
            stopOnLastSnap: !1
        };
        function Vt(t, e) {
            var n, r = Object.assign({}, Yt, Vt.globalOptions, t), i = r.playOnInit, o = r.stopOnInteraction, a = r.stopOnMouseEnter, s = r.stopOnLastSnap, u = r.delay, c = o ? f : d, l = 0;
            function f() {
                n.off("pointerDown", c),
                o || n.off("pointerUp", p),
                d(),
                l = 0
            }
            function h() {
                d(),
                l = window.setTimeout(_, u)
            }
            function d() {
                l && window.clearTimeout(l)
            }
            function p() {
                l && (d(),
                h())
            }
            function _() {
                var t = n.internalEngine().index;
                if (s && t.get() === t.max)
                    return f();
                n.canScrollNext() ? n.scrollNext() : n.scrollTo(0),
                h()
            }
            var v = {
                name: "Autoplay",
                options: r,
                init: function(t) {
                    var r = (n = t).internalEngine().eventStore
                      , s = n.rootNode()
                      , u = e && e(s) || s;
                    n.on("pointerDown", c),
                    o || n.on("pointerUp", p),
                    a && (r.add(u, "mouseenter", c),
                    o || r.add(u, "mouseleave", p)),
                    r.add(document, "visibilitychange", (function() {
                        if ("hidden" === document.visibilityState)
                            return d();
                        p()
                    }
                    )),
                    r.add(window, "pagehide", (function(t) {
                        t.persisted && d()
                    }
                    )),
                    i && h()
                },
                destroy: f,
                play: h,
                stop: d,
                reset: p
            };
            return v
        }
        Vt.globalOptions = void 0;
        var Wt = Vt
          , Gt = function() {
            window.EmblaCarousel = qt,
            window.Autoplay = Wt
        };
        document.addEventListener("DOMContentLoaded", (()=>{
            r.a.init(),
            i(),
            s.a.init(),
            u(),
            l(),
            h.a.init(),
            d(),
            Gt(),
            mt()
        }
        ))
    },
    7: function(t, e, n) {
        "use strict";
        n.d(e, "c", (function() {
            return a
        }
        )),
        n.d(e, "a", (function() {
            return s
        }
        )),
        n.d(e, "b", (function() {
            return u
        }
        ));
        var r = n(3)
          , i = n(1)
          , o = n.n(i);
        const a = (t,e,n)=>{
            const {position: i, fontSize: a, unitsType: s, utc: u=!1} = n;
            if (!e)
                return t.transition().style("opacity", 0);
            const {timeFrame: c, value: l, date: f} = e;
            t.style("pointer-events", "none").style("user-select", "none").style("font-size", `${a}px`),
            0 == t.style("opacity") && t.transition().style("opacity", 1),
            t.selectAll("text").remove();
            const h = t.append("text")
              , d = h.append("tspan").text(Object(r.e)(l, s)).attr("x", i.x).attr("y", i.y).style("fill", "white")
              , p = h.append("tspan").text(`${Object(r.c)(f, c, u)}`).attr("dx", 5).style("fill", o.a.neutral300);
            if (e.dateStart) {
                let t, n;
                const i = l - e.valueStart;
                t = Object(r.e)(i, s);
                const a = Object(r.d)(i, e.valueStart);
                i < 0 ? (t = `${t} (${a}%)`,
                n = o.a.redLight) : (t = `+${t} (${a}%)`,
                n = o.a.green),
                d.style("fill", n).text(t),
                p.text(`${Object(r.c)(e.dateStart, c, u)} - ${Object(r.c)(f, c, u)}`)
            }
            if (!i.leftReference) {
                const {width: t} = h.node().getBBox();
                h.attr("transform", `translate(${-t}, 0)`)
            }
        }
        ;
        function s(t, e, n, r) {
            const i = t.append("g").style("visibility", "hidden").attr("class", "tooltip-popup")
              , a = function(t) {
                i.style("visibility", "visible")
            };
            t.append("g").attr("class", "tooltip-icon").attr("transform", `translate(${n},${r - 38})`).attr("font-weight", o.a.fontWeightMedium).on("touchstart", a).on("mouseover", a).on("mouseleave", (function(t) {
                i.style("visibility", "hidden")
            }
            )).append("path").attr("d", "M6.5 0C2.88889 0 0 2.88889 0 6.5C0 10.1111 2.88889 13 6.5 13C10.1111 13 13 10.1111 13 6.5C13 2.88889 10.1111 0 6.5 0ZM6.50006 10.1111C6.50006 10.1111 6.21117 10.3278 5.9945 10.3278H5.85006H5.77783C5.41672 10.2556 5.20006 9.89444 5.3445 9.53333L5.85006 7.51111L6.06672 6.57222C6.18839 6.08554 5.96844 6.191 5.71381 6.3131C5.515 6.40842 5.29505 6.51388 5.20006 6.35555C5.06358 6.0826 5.76527 5.61623 6.39136 5.2001L6.50006 5.12778C6.50006 5.12778 6.78895 4.91111 7.00561 4.91111H7.15006H7.22228C7.58339 4.98333 7.80006 5.34444 7.72784 5.70555L7.22228 7.72778L7.00561 8.66667C6.88837 9.13562 7.08833 9.03363 7.33086 8.90992C7.53654 8.80501 7.77285 8.68448 7.87228 8.88333C7.87228 9.17222 7.07784 9.75 6.50006 10.1111ZM6.57252 4.47778C7.07807 4.62222 7.58363 4.33333 7.72808 3.82778C7.87252 3.32222 7.58363 2.81667 7.00585 2.67222C6.5003 2.52778 5.99474 2.81667 5.8503 3.32222C5.77808 3.82778 6.06696 4.33333 6.57252 4.47778Z").attr("fill", o.a.neutral300).attr("fill-rule", "evenodd");
            const s = i.append("rect").attr("x", n - 20).attr("y", -44).attr("height", 50).attr("rx", 6).attr("ry", 6).attr("fill", "#555")
              , u = i.append("text").text(e).attr("fill", "white").attr("font-weight", 100).attr("font-size", "14px").attr("dy", -12).attr("dx", 45)
              , c = u.node().getBBox().width;
            s.attr("width", c + 90).attr("x", n - c / 2 - 45 + 10),
            i.append("g").attr("transform", `translate(${n + 7}, -3)`).append("rect").attr("width", 10).attr("height", 10).attr("fill", "#555").attr("style", "transform: rotate(45deg)"),
            u.attr("x", n - c / 2 - 45 + 10)
        }
        function u() {
            const t = document.getElementsByName("charts-component")[0].clientWidth;
            let e = 80;
            return t >= 1216 && t < 1500 && (e = 91),
            t >= 1116 && t < 1216 && (e = 95),
            t >= 949 && t < 1116 && (e = 100),
            e
        }
    },
    8: function(t, e, n) {
        "use strict";
        function r(t, e="name", n="content") {
            const r = document.querySelector(`[${e}~=${t}]`);
            return r ? r[n] : null
        }
        n.d(e, "a", (function() {
            return r
        }
        ))
    }
});
//# sourceMappingURL=./shared.js-5965b32e820aa57ca62f63821f79937e.map
