/*! Fotorama 3.0.8 | http://fotoramajs.com/license/  */
(function (a, b, c, d) {
    function f(a) {
        var b = "bez_" + c.makeArray(arguments).join("_").replace(".", "p");
        if (typeof c.easing[b] != "function") {
            var d = function (a, b) {
                var c = [null, null],
                    d = [null, null],
                    e = [null, null],
                    f = function (f, g) {
                        return e[g] = 3 * a[g], d[g] = 3 * (b[g] - a[g]) - e[g], c[g] = 1 - e[g] - d[g], f * (e[g] + f * (d[g] + f * c[g]))
                    }, g = function (a) {
                        return e[0] + a * (2 * d[0] + 3 * c[0] * a)
                    }, h = function (a) {
                        var b = a,
                            c = 0,
                            d;
                        while (++c < 14) {
                            d = f(b, 0) - a;
                            if (Math.abs(d) < .001) break;
                            b -= d / g(b)
                        }
                        return b
                    };
                return function (a) {
                    return f(h(a), 1)
                }
            };
            c.easing[b] = function (b, c, e, f, g) {
                return f * d([a[0], a[1]], [a[2], a[3]])(c / g) + e
            }
        }
        return b
    }

    function G(a) {
        var b = {};
        for (var c = 0; c < F.length; c++) {
            var d = F[c][0],
                e = F[c][1];
            if (a) {
                var f = a.attr("data-" + d);
                f && (e == "n" ? (f = Number(f), isNaN(f) || (b[d] = f)) : e == "b" ? f == "true" ? b[d] = !0 : f == "false" && (b[d] = !1) : e == "s" ? b[d] = f : e == "bn" && (f == "true" ? b[d] = !0 : f == "false" ? b[d] = !1 : (f = Number(f), isNaN(f) || (b[d] = f))))
            } else b[d] = F[c][2]
        }
        return b
    }

    function I(a, c) {
        var d = b.createElementNS("http://www.w3.org/2000/svg", a);
        for (var e in c) d.setAttribute(e, c[e]);
        return d
    }

    function J(a, b) {
        var c = {};
        for (var d = 0; d < H.length; d++) c[H[d] + a] = b;
        return c
    }

    function K(a, b, c) {
        if (u && !c) return J("transform", b ? "translate(0," + a + "px)" : "translate(" + a + "px,0)");
        var d = {};
        return d[b ? "top" : "left"] = a, d
    }

    function L(a, b) {
        return a.match(/-?\d+/g)[b == "left" ? 4 : 5]
    }

    function M(a, b, c) {
        return !t || !u || !c ? a.position()[b] : L(a.css("-moz-transform"), b)
    }

    function N(a) {
        return J("transition-duration", a + "ms")
    }

    function O(a) {
        return a = Number(String(a).replace("px", "")), isNaN(a) ? !1 : a
    }

    function P(a, b, c) {
        return Math.max(b, Math[c !== !1 ? "min" : "max"](c, a))
    }

    function Q() {
        return !1
    }

    function R(a) {
        a.mousemove(function (a) {
            a.preventDefault()
        }).mousedown(function (a) {
            a.preventDefault()
        })
    }

    function S(c) {
        c.preventDefault();
        if (b.selection && b.selection.empty) b.selection.empty();
        else if (a.getSelection) {
            var d = a.getSelection();
            d.removeAllRanges()
        }
    }

    function T(a) {
        var b = c("iframe", a);
        b.size() && b.each(function () {
            var a = c(this).clone(),
                b = a.attr("src"),
                d = b.indexOf("?") > 0 ? "&" : "?";
            a.attr("src", b + d + "wmode=opaque").addClass("js-opaque"), c(this).after(a).remove()
        });
        var d = c("object", a);
        d.size() && d.each(function () {
            var a = c(this).clone();
            a.addClass("js-opaque"), c('<param name="wmode" value="opaque">').appendTo(a), c("embed", a).attr({
                wmode: "opaque"
            }), c(this).after(a).remove()
        })
    }

    function U(a, b) {
        a.is(":visible") ? b() : setTimeout(function () {
            U(a, b)
        }, 100)
    }

    function V(e) {
        function ce() {
            cc = !0, clearTimeout(cd), f().arrows && bY.css(N(0)), bR.removeClass("fotorama__wrap_mouseout"), setTimeout(function () {
                f().arrows && bY.css(N(f().transitionDuration)), setTimeout(function () {
                    bR.addClass("fotorama__wrap_mouseover")
                }, 1)
            }, 1)
        }

        function cf() {
            clearTimeout(cd), !bB && !cc && bR.removeClass("fotorama__wrap_mouseover").addClass("fotorama__wrap_mouseout")
        }

        function cB(a, b, d, e, g, h) {
            var i = c(a);
            e = bf.i.test(g) ? bg ? bg : 1 : e;
            var j = f().vertical ? Math.round(cm / e) : Math.round(cm * e);
            m ? (i.remove(), i = c('<canvas class="fotorama__thumb__img"></canvas>'), i.appendTo(cA.eq(h))) : i.addClass("fotorama__thumb__img");
            var k = {};
            k[bP] = j, k[bQ] = cm, i.attr(k).css(k).css({
                visibility: "visible"
            }), m && !bf.i.test(g) && i[0].getContext("2d").drawImage(a, 0, 0, f().vertical ? cm : j, f().vertical ? j : cm), k[bQ] = null, cA.eq(h).css(k).data(k), cS()
        }

        function cC(a) {
            !bH && !bE && !bC && !bs ? (a || (a = 0), cV(a, cA.eq(a), cB, "thumb"), setTimeout(function () {
                a + 1 < p && cC(a + 1)
            }, 50)) : setTimeout(function () {
                cC(a)
            }, 100)
        }

        function cF(a, b, d) {
            a && (bf.no.test(a) || bf.px.test(a) ? (L = P(O(a), Y, Z), W = L, be = !1, bd = !1) : bf["%"].test(a) ? (bb = Number(String(a).replace("%", "")) / 100, be = !f().flexible, L || (L = e.width() * (bq ? 1 : bb) - cz, L = P(L, Y, Z)), bd = !1) : bd = !0), b && (bf.no.test(b) || bf.px.test(b) ? (V = P(O(b), _, ba), X = V, bc = !1) : bc = !0);
            if (a == "auto" || !a || b == "auto" || !b) {
                var g = Number(d),
                    h = cl.filter(function () {
                        return c(this).data("state") != "error"
                    }).filter(":first").data("srcKey");
                if (isNaN(g) || !g) g = null, h && (g = t[h].imgRatio);
                if (g) {
                    bg = g, bh = g, bi = g;
                    if (h) {
                        if (a == "auto" || !a) L = P(O(t[h].imgWidth), Y, Z), W = L, bd = !0;
                        if (b == "auto" || !b) V = P(O(t[h].imgHeight), _, ba), X = V, bc = !0
                    }
                    bc && g && !bd && (V = P(Math.round(L / g), _, ba), X = V), !bc && g && bd && (L = P(Math.round(V * g), Y, Z), W = L)
                }
            }
        }

        function cG(a) {
            var b;
            if (f().fitToWindowHeight || bq) b = B.height();
            if (!bg || a) bg = L / V, bh = bg, bi = bg;
            f().thumbs && !cq && (cq = f().vertical ? cp.width() : cp.height()), bp ? bg = bi : bg = bh, e.css({
                overflow: be || bq ? "hidden" : ""
            }), be || bq ? (L = e.width() * (bq ? 1 : bb) - (f().vertical && cq && (!bq || !f().hideNavIfFullscreen) ? cq : 0), bq || (L = P(L, Y, Z))) : W && (L = W), bq ? (V = b - (!f().vertical && cq && !f().hideNavIfFullscreen ? cq : 0), bg = L / V) : bc ? (V = P(Math.round(L / bg), _, ba), bg = L / V) : (V = X, bg = L / V);
            if (f().fitToWindowHeight && !bq) {
                var c = b - f().fitToWindowHeightMargin - (!f().vertical && cq ? cq : 0);
                V > c && (V = P(c, _, ba), bg = L / V)
            }
        }

        function cI(a, b, d) {
            cG(a), b || (b = 0);
            var e = L != bk || V != bl || bg != bm,
                g = a || e;
            if (g) {
                f().vertical ? (H = V, J = L) : (H = L, J = V), bR.add(cl).animate({
                    width: L,
                    height: V
                }, b), f().thumbs && f().vertical && (f().thumbsOnRight ? cp.animate({
                    left: L
                }, b) : bR.animate({
                    left: !bq || !f().hideNavIfFullscreen ? cq : 0
                }, b));
                var i;
                f().touchStyle ? (bz = (H + f().margin) * p - f().margin, bA = J, i = {}, i[bP] = bz, i[bQ] = bA, bS.animate(i, b).data(i).data({
                    minPos: -(bz - H),
                    maxPos: 0
                })) : bS.animate({
                    width: L,
                    height: V
                }, b), f().thumbs && (f().vertical ? cp.animate({
                    height: V
                }, b) : cp.animate({
                    width: L
                }, b), f().thumbsPreview && e && cS(b, d), cp.css({
                    visibility: "visible"
                })), r && !f().vertical && (f().arrows && bY.animate({
                    top: V / 2
                }, b), i = {}, i[bM] = J / 2, bT.animate(i, b));
                if (h == "loading" || h == "error") i = {}, i[bL] = (f().touchStyle ? ch : 0) * (H + f().margin) + H / 2, bT.animate(i, b);
                if (cg && f().touchStyle) {
                    var j = -ch * (H + f().margin);
                    cO(bS, j, 0)
                }
                bn = !0;
                var k = 0;
                c(cH).each(function () {
                    clearTimeout(this)
                }), cH = [], cT(cg, ch, b), cl.each(function (a) {
                    if (a != ch) {
                        var b = c(this),
                            d = b.data("img");
                        d && b.data("img").css({
                            visibility: "hidden"
                        });
                        var e = setTimeout(function () {
                            cT(b, a)
                        }, k * 50 + 50);
                        cH.push(e), k++
                    }
                })
            }
            bk = L, bl = V, bm = bg
        }

        function cJ() {
            var a = cg.data("srcKey");
            a && t[a].imgWidth && t[a].imgHeight && t[a].imgRatio && (L = t[a].imgWidth, W = L, V = t[a].imgHeight, X = V, bg = t[a].imgRatio, bh = bg, cI(!1, f().transitionDuration))
        }

        function cK(a, b, c) {
            function d() {
                f().touchStyle || (b = 0), bT.css(bL, b * (H + f().margin) + H / 2), bU = setTimeout(function () {
                    bT.stop().fadeTo(r ? 0 : y, 1)
                }, 100)
            }
            clearTimeout(bU), a == "loading" ? (d(), e.addClass("fotorama_loading").removeClass("fotorama_error"), j.spin(bT[0])) : a == "error" ? (d(), e.addClass("fotorama_error").removeClass("fotorama_loading"), j.stop()) : a == "loaded" && (e.removeClass("fotorama_loading fotorama_error"), bT.stop().fadeTo(Math.min(r ? 0 : y), 0, function () {
                j.stop()
            })), h = a
        }

        function cL() {
            return {
                index: ch,
                src: t[ch],
                img: cg[0],
                thumb: f().thumbs ? cn[0] : null,
                caption: ci
            }
        }

        function cM(a) {
            clearInterval(a.data("backAnimate"))
        }

        function cN() {
            f().onTransitionStop && f().onTransitionStop.call(e[0], cL())
        }

        function cO(a, b, c, d) {
            var e = isNaN(b) ? 0 : Math.round(b);
            cM(a), d ? (e = d, u && f().cssTransitions && a.data({
                backAnimate: setInterval(function () {
                    var e = M(a, bL, f().cssTransitions);
                    Math.abs(e - d) < 1 && cO(a, b, Math.max(y, c / 2))
                }, 10)
            })) : setTimeout(function () {
                cN()
            }, c + 10), c && (clearTimeout(bt), bs = !0), u && f().cssTransitions ? (a.css(N(c)), a.css(K(e, f().vertical))) : a.stop().animate(K(e, f().vertical, !f().cssTransitions), c, x, function () {
                d && cO(a, b, Math.max(y, c / 2))
            }), bt = setTimeout(function () {
                bs = !1, f().flexible && a == bS && cJ()
            }, c)
        }

        function cP() {
            if (cs > H || !f().thumbsCentered) cr.data({
                minPos: cs > H ? -(cs - H) : f().thumbMargin
            }), bE || cr.data({
                maxPos: f().thumbMargin
            });
            else {
                var a = H / 2 - cs / 2;
                cr.data({
                    minPos: a
                }), bE || cr.data({
                    maxPos: a
                })
            }
        }

        function cQ(a, b, c) {
            a *= 1.1;
            if (cs) {
                if (!c || cs < H) bF = !1;
                var e = cn.position()[bL],
                    g = cn.data()[bP];
                cP();
                if (!g && cy) cx.hide(), cy = !1;
                else {
                    cy || (cx.show(), cy = !0);
                    if (cs > H) {
                        var h = e + g / 2,
                            i = H / 2,
                            j = cA.index(cn),
                            k = j - co;
                        ct == d && (ct = cr.position()[bL]);
                        if (bJ && b && b > Math.max(36, f().thumbMargin * 2) && b < H - Math.max(36, f().thumbMargin * 2) && (k > 0 && b > i * .75 || k < 0 && b < i * 1.25)) {
                            var l;
                            k > 0 ? l = j + 1 : l = j - 1, l < 0 ? l = 0 : l > p - 1 && (l = p - 1);
                            if (j != l) {
                                var m = cA.eq(l);
                                h = m.position()[bL] + m.data()[bP] / 2, i = b
                            }
                        }
                        var n = -(cs - H),
                            o = Math.round(-(h - i) + f().thumbMargin);
                        if (k > 0 && o > ct || k < 0 && o < ct) e + ct < f().thumbMargin ? o = -(e - f().thumbMargin) : e + ct + g > H ? o = -(e * 2 - H + g + f().thumbMargin) : o = ct;
                        o <= cr.data("minPos") ? o = cr.data("minPos") : o >= f().thumbMargin && (o = f().thumbMargin), cR(o), bE || cr.data({
                            maxPos: f().thumbMargin
                        })
                    } else o = cr.data("minPos");
                    !bF && !bE ? (cO(cr, o, a, !1), bG && (bF = !0), ct = o) : bG = !0;
                    var q = g - (v ? 0 : f().thumbBorderWidth * 2),
                        r = e;
                    a *= .9, u && f().cssTransitions ? (cx.css(N(a)), cx.css(K(r, f().vertical)).css(bP, q)) : f().vertical ? cx.stop().animate({
                        top: r,
                        height: q
                    }, a, x) : cx.stop().animate({
                        left: r,
                        width: q
                    }, a, x)
                }
            }
        }

        function cR(a) {
            f().shadows && (cs > H ? (cp.addClass("fotorama__thumbs_shadow"), a <= cr.data("minPos") ? cp.removeClass("fotorama__thumbs_shadow_no-left").addClass("fotorama__thumbs_shadow_no-right") : a >= f().thumbMargin ? cp.removeClass("fotorama__thumbs_shadow_no-right").addClass("fotorama__thumbs_shadow_no-left") : cp.removeClass("fotorama__thumbs_shadow_no-left fotorama__thumbs_shadow_no-right")) : cp.removeClass("fotorama__thumbs_shadow"))
        }

        function cS(a, b) {
            cs = cr[bP](), cP(), cQ(a ? a : 0, !1, !b)
        }

        function cT(a, b, c) {
            var d = a.data("img"),
                e = a.data("detached");
            c = c ? c : 0;
            if (d && !e) {
                var g = a.data("srcKey"),
                    h = t[g].imgWidth,
                    i = t[g].imgHeight,
                    j = t[g].imgRatio,
                    k = 0,
                    l = 0;
                f().touchStyle && a.css(bL, b * (H + f().margin));
                if (h != L || i != V || f().alwaysPadding || bq) {
                    var m = 0;
                    if (j / bg < .99 || j / bg > 1.01 || f().alwaysPadding || bq) m = f().minPadding * 2;
                    j >= bg ? !bq && !f().cropToFit || bq && !f().cropToFitIfFullscreen ? (h = Math.round(L - m) < h || f().zoomToFit || bq && t[b].imgRel ? Math.round(L - m) : h, i = Math.round(h / j), V - i < 4 && (i += V - i)) : (i = V, h = Math.round(i * j)) : !bq && !f().cropToFit || bq && !f().cropToFitIfFullscreen ? (i = Math.round(V - m) < i || f().zoomToFit || bq && t[b].imgRel ? Math.round(V - m) : i, h = Math.round(i * j), L - h < 4 && (h += L - h)) : (h = L, i = Math.round(h / j))
                }
                if (h && i) {
                    var n = {
                        width: h,
                        height: i
                    };
                    i != V && (k = Math.round((V - i) / 2)), h != L && (l = Math.round((L - h) / 2)), d.attr(n), n.top = k, n.left = l, d.animate(n, c)
                }
                d.css({
                    visibility: "visible"
                }), cW(a, b)
            } else d && e && a.data({
                needToResize: !0
            })
        }

        function cU(a, b) {
            return a === " " ? "ё" + b : a
        }

        function cV(a, b, d, e) {
            function o(c) {
                function k() {
                    h.css({
                        visibility: "hidden"
                    }), g.src = c;
                    if (j == 0) {
                        h.appendTo(b);
                        if (e == "thumb") {
                            var a = f().vertical ? Math.round(cm / (f().aspectRatio ? f().aspectRatio : bg ? bg : 1)) : Math.round(cm * (f().aspectRatio ? f().aspectRatio : bg ? bg : 1));
                            b.css(bP, a).data(bP, a), cS()
                        }
                    }
                }

                function l() {
                    bK++, bK == p && (bJ = !0)
                }

                function m() {
                    bf.i.test(c) || (G[c] = "loaded"), h.unbind("error load").error(function () {
                        h.unbind("error"), g.src = c, t[a].imgRel = !1, cT(cl.eq(a), a)
                    }), setTimeout(function () {
                        U(b, function () {
                            t[c] || (t[c] = [], t[c].imgWidth = h.width(), t[c].imgHeight = h.height(), t[c].imgWidth || (t[c].imgWidth = b.data("html") ? b.data("html").width() || z : z), t[c].imgHeight || (t[c].imgHeight = b.data("html") ? b.data("html").height() || A : A), t[c].imgRatio = t[c].imgWidth / t[c].imgHeight), b.trigger("fotoramaload").data({
                                state: "loaded"
                            }), d(g, t[c].imgWidth, t[c].imgHeight, t[c].imgRatio, c, a)
                        })
                    }, 100), e == "thumb" && l()
                }

                function n() {
                    m()
                }

                function q(a) {
                    G[c] = "error", h.unbind("error load"), j < i.length && a ? (j++, bf.i.test(i[j]) && q(!0), o(i[j])) : (b.trigger("fotoramaerror").data({
                        state: "error"
                    }), e == "thumb" && l())
                }
                if (!G[c]) bf.i.test(c) ? n() : (G[c] = "loading", h.unbind("error load").bind("error", function () {
                    q(!0)
                }).bind("load", n), k());
                else {
                    function r() {
                        G[c] == "error" ? q(!1) : G[c] == "loaded" ? n() : setTimeout(r, 100)
                    }
                    k(), r()
                }
            }
            var g = new Image,
                h = c(g),
                i = [],
                j = 0,
                k = cU(t[a].imgHref, a),
                l = cU(t[a].imgSrc, a),
                m = cU(t[a].thumbSrc, a),
                n = e == "img" ? "push" : "unshift";
            k && i[n](k), l && i[n](l), m && i[n](m), o(i[j])
        }

        function cW(a, b) {
            var c = a.data("img"),
                d = a.data("srcKey"),
                e = t[b].imgRel;
            if (c && e && e != d && !q) {
                var f = c.data("full"),
                    g = a.data("detached");
                (bq && !f || !bq && f) && !g && (c[0].src = bq ? e : d, c.data({
                        full: bq
                    }))
            }
        }

        function cX(a, b) {
            if (!a.data("wraped")) {
                bS.append(a.data({
                    state: "loading"
                })), b != ch && !f().touchStyle && a.stop().fadeTo(0, 0);

                function d(d, e, g, h, i) {
                    var j = c(d);
                    j.addClass("fotorama__img"), a.data({
                        img: j,
                        srcKey: i
                    });
                    var k = !1;
                    if ((!L || !V) && !bn || !bo && b == f().startImg) {
                        L = e, f().width = e;
                        if (bc) V = g, f().height = g;
                        else if (bd) {
                            var l = e / g;
                            L = Math.round(V * l), f().width = L
                        }
                        f().aspectRatio || (f().aspectRatio = L / V), k = !0, bo = b == f().startImg
                    }
                    k || f().flexible ? (cI(!0), f().flexible && cJ()) : cT(a, b), a.css({
                        visibility: "visible"
                    })
                }
                a.data({
                    wraped: !0,
                    detached: !1
                });
                if (l && k[b].html && k[b].html.length || f().html && f().html[b] && f().html[b].length) {
                    var e = k[b].html || f().html[b];
                    r && f().html && f().html[b] && f()._html && f()._html[b] && e.html(f()._html[b]);
                    var g = c(e);
                    a.append(e).data({
                        html: g,
                        htmlIsIframe: g.is("iframe")
                    }), T(a)
                }
                cV(b, a, d, "img")
            } else f().detachSiblings && a.data("detached") && (a.data({
                detached: !1
            }).appendTo(bS), a.data("needToResize") && (cT(a, b), a.data({
                needToResize: !1
            })))
        }

        function cY(a, b) {
            var d = 0,
                e = !1,
                g = [],
                h = [],
                j = bq ? Math.min(1, f().preload) : f().preload;
            for (i = 0; i < j * 2 + 1; i++) {
                var k = b - j + i;
                if (k >= 0 && k < p && !f().loop || f().loop) {
                    k < 0 && (k = p + k), k > p - 1 && (k = k - p);
                    if (!cl.eq(k).data("wraped") || cl.eq(k).data("detached")) d++, g.push(k);
                    h.push(k)
                } else e = !0
            }
            if (d >= j || e) c(g).each(function (a) {
                var b = a * 50;
                setTimeout(function () {
                    cX(cl.eq(g[a]), g[a])
                }, b)
            }), f().detachSiblings && cl.filter(function (a) {
                var d = c(this),
                    e = !1;
                for (var f = 0; f < h.length && !e; f++) h[f] == a && (e = !0);
                return d.data("state") != "loading" && !e && b != a
            }).data({
                detached: !0
            }).detach();
            if (cj.data("htmlIsIframe")) {
                var l = cj.html();
                cj.html("").html(l)
            }
        }

        function cZ() {
            (ch == 0 || p < 2) && !f().loop ? bZ.addClass("fotorama__arr_disabled").data("disabled", !0) : bZ.removeClass("fotorama__arr_disabled").data("disabled", !1), (ch == p - 1 || p < 2) && !f().loop ? b$.addClass("fotorama__arr_disabled").data("disabled", !0) : b$.removeClass("fotorama__arr_disabled").data("disabled", !1)
        }

        function c$() {
            location.replace(location.protocol + "//" + location.host + location.pathname + location.search + "#" + (ch + 1))
        }

        function c_(a) {
            a || (a = 0), clearTimeout(by), by = setTimeout(function () {
                cg.data("state") != "loading" ? bx && e.trigger("showimg", [ch + 1, !1, !0]) : cg.bind("fotoramaload fotoramaerror", function () {
                    c_(a)
                })
            }, Math.max(f().autoplay, a * 2))
        }

        function da(a, b, d, g, i, j, l, m) {
            function p() {
                f().caption && (ci = k[o].caption ? k[o].caption : k[o].title, ci ? cD.html(ci).show() : cD.html("").hide())
            }

            function r() {
                cj.removeClass("fotorama__frame_active"), a.addClass("fotorama__frame_active")
            }
            var n, o = cl.index(a);
            cl.each(function () {
                c(this).unbind("fotoramaload fotoramaerror")
            }), typeof i != "number" && (g ? i = 0 : i = f().transitionDuration), !g && b && b.altKey && (i = i * 10);
            var q = a.data("state");
            q == "loading" || !q ? (cK("loading", o, i), a.one("fotoramaload", function () {
                cK("loaded", o, i), p()
            }), a.one("fotoramaerror", function () {
                cK("error", o, i), p()
            })) : q == "error" ? cK("error", o, i) : q != h && cK("loaded", o, i), p(), cg ? (cj = cg, n = ch, f().thumbs && (ck = cn)) : (cj = cl.not(a), f().thumbs && (ck = cA.not(cA.eq(o)))), f().thumbs && (cn = cA.eq(o), n && (co = n), ck.removeClass("fotorama__thumb_selected").data("disabled", !1), cn.addClass("fotorama__thumb_selected").data("disabled", !0)), f().thumbs && f().thumbsPreview && (n != o || g) && cQ(i, d);
            if (f().touchStyle) {
                var s = -o * (H + f().margin);
                r(), cO(bS, s, i, j)
            } else if (f().transition == "crossFade") cl.not(cj.stop()).stop().fadeTo(0, 0), a.stop().fadeTo(i, 1), cj.not(a).stop().fadeTo(i, 0, function () {
                cN(), f().flexible && cJ()
            });
            else if (n != o || g) {
                var t = i,
                    u = 0;
                q != "loaded" && (t = 0, u = i), cl.not(cj.stop()).stop().fadeTo(0, 0), setTimeout(function () {
                    r(), a.stop().fadeTo(t, 1, function () {
                        cj.not(a).stop().fadeTo(u, 0, function () {
                            f().flexible && cJ()
                        }), cN()
                    })
                }, 10)
            }
            cg = a, ch = o, f().hash && typeof n != "undefined" && c$(), bx && !l && f().stopAutoplayOnAction && (bx = !1), c_(i);
            var v = cL();
            e.data(v), f().arrows && cZ();
            var w = a.data("wraped");
            clearTimeout(bw), bw = setTimeout(function () {
                !w && o != f().startImg && (cX(a, o), f().onShowImg && !m && f().onShowImg.call(e[0], v, l)), cY(a, o)
            }, (i ? Math.max(i / 2, y) : 0) * 1.1);
            if (w || o == f().startImg) cX(a, o), f().onShowImg && !m && f().onShowImg.call(e[0], v, l)
        }

        function db(a, b) {
            b.stopPropagation(), b.preventDefault();
            var c = ch + a;
            c < 0 && (c = f().loop ? p - 1 : 0), c > p - 1 && (c = f().loop ? 0 : p - 1), da(cl.eq(c), b)
        }

        function dd(a, b) {
            clearTimeout(dc), dc = setTimeout(function () {
                cI(b)
            }, 10)
        }

        function de() {
            br || (B.bind("resize", dd), n && a.addEventListener("orientationchange", dd, !1), br = !0)
        }

        function df(a) {
            a.stopPropagation();
            var b = c(this);
            if (!b.data("disabled")) {
                var d = cA.index(c(this)),
                    e = a[bN] - cp.offset()[bL];
                da(cl.eq(d), a, e)
            }
        }

        function dg(a, b, c, d) {
            function z(a, b) {
                return Math.round(a + (b - g) / 1.5)
            }

            function A(c) {
                if ((n || c.which < 2) && cg) {
                    function d() {
                        m = (new Date).getTime(), j = h, k = i, o = [
                            [m, h]
                        ], cM(a), u && f().cssTransitions ? a.css(N(0)) : a.stop(), g = M(a, bL, f().cssTransitions), a.css(K(g, f().vertical, !f().cssTransitions)), l = g, b(), y = !1
                    }
                    n ? n && c.targetTouches.length == 1 ? (h = c.targetTouches[0][bN], i = c.targetTouches[0][bO], d(), a[0].addEventListener("touchmove", B, !1), a[0].addEventListener("touchend", D, !1)) : n && c.targetTouches.length > 1 && c.preventDefault() : (h = c[bN], c.preventDefault(), d(), C.mousemove(B), C.mouseup(D))
                }
            }

            function B(b) {
                function d() {
                    b.preventDefault(), p = (new Date).getTime(), o.push([p, h]);
                    var d = j - h;
                    g = l - d, g > a.data("maxPos") ? (g = z(g, a.data("maxPos")), x = "left") : g < a.data("minPos") ? (g = z(g, a.data("minPos")), x = "right") : x = !1, f().touchStyle && a.css(K(g, f().vertical, !f().cssTransitions)), c(g, d, x), (h - e.offset().left > H || h - e.offset().left < 0) && C.trigger("mouseup")
                }
                n ? n && b.targetTouches.length == 1 && (h = b.targetTouches[0][bN], i = b.targetTouches[0][bO], v ? t === !0 && d() : Math.abs(h - j) - Math.abs(i - k) >= -5 ? (t = !0, v = !0) : Math.abs(i - k) - Math.abs(h - j) >= -5 && (t = "prevent", v = !0)) : (h = b[bN], d())
            }

            function D(b) {
                if ((!n || !b.targetTouches.length) && y === !1) {
                    n ? (a[0].removeEventListener("touchmove", B, !1), a[0].removeEventListener("touchend", D, !1)) : (C.unbind("mouseup"), C.unbind("mousemove")), r = (new Date).getTime();
                    var c = -g,
                        e = r - w,
                        f, i, j, k;
                    for (var l = 0; l < o.length; l++) f = Math.abs(e - o[l][0]), l == 0 && (i = f, j = r - o[l][0], k = o[l][1]), f <= i && (i = f, j = o[l][0], k = o[l][1]);
                    var m = k - h,
                        p = m >= 0,
                        u = r - j,
                        x = u <= w,
                        z = r - s,
                        A = p === q;
                    d(c, u, x, z, A, m, b, t), s = r, q = p, t = !1, v = !1, y = !0
                }
            }
            var g, h, i, j, k, l, m, o = [],
                p, q, r, s = 0,
                t = !1,
                v = !1,
                x = !1,
                y;
            n ? a[0].addEventListener("touchstart", A, !1) : a.mousedown(A), !n
        }
        var f = function () {
            return e.data("options")
        };
        f().backgroundColor && !f().background && (f().background = f().backgroundColor), f().thumbsBackgroundColor && !f().navBackground && (f().navBackground = f().thumbsBackgroundColor), f().thumbColor && !f().dotColor && (f().dotColor = f().thumbColor), f().click !== null && (f().pseudoClick = f().click);
        if (f().nav === !0 || f().nav == "true" || f().nav == "thumbs") f().thumbs = !0, f().thumbsPreview = !0;
        else if (f().nav == "dots") f().thumbs = !0, f().thumbsPreview = !1;
        else if (f().nav === !1 || f().nav == "false" || f().nav == "none") f().thumbs = !1;
        if (f().transition === "fade" || f().transition === "crossFade") f().touchStyle = !1;
        f().cropToFit && (f().cropToFitIfFullscreen = !0), f().thumbsPreview && f().background && !f().navBackground && (f().navBackground = f().background), f().caption && (f().caption === !0 || f().caption == "true" || f().caption == "simple" ? f().caption = !0 : f().caption != "overlay" && (f().caption = !1)), f().navPosition == "top" ? (f().thumbsOnTop = !0, f().thumbsOnRight = !1) : f().navPosition == "right" ? (f().thumbsOnTop = !1, f().thumbsOnRight = !0) : f().navPosition == "bottom" ? (f().thumbsOnTop = !1, f().thumbsOnRight = !1) : f().navPosition == "left" && (f().thumbsOnTop = !1, f().thumbsOnRight = !1);
        var h;
        f().hash && b.location.hash && (f().startImg = parseInt(b.location.hash.replace("#", "")) - 1);
        var j = new g({
            length: 8,
            radius: 6,
            width: 2,
            color: f().spinnerColor,
            rotate: 15
        }),
            k, l = f().data && (typeof f().data == "object" || typeof f().data == "string");
        l ? k = c(f().data).filter(function () {
            return this.img || this.img === " " || this.href || this.href === " "
        }) : k = e.children().filter(function () {
            var a = c(this),
                b = a.children("img"),
                d = (a.is("a") && b.length || a.is("img")) && (a.attr("href") || a.attr("href") === " " || a.attr("src") || a.attr("src") === " " || b.attr("src") || b.attr("src") === " "),
                e = a.is(":empty");
            return d || a.data({
                html: !0
            }), d || !e
        });
        var p = k.size();
        e.data({
            size: p
        }), f().preload = Math.min(f().preload, p);
        if (f().startImg > p - 1 || typeof f().startImg != "number") f().startImg = 0;
        var t = [];
        k.each(function (a) {
            if (!l) {
                var b = c(this);
                if (!b.data("html")) {
                    var d = b.children();
                    t[a] = {
                        imgHref: b.attr("href"),
                        imgSrc: b.attr("src"),
                        thumbSrc: d.attr("src"),
                        imgRel: b.attr("rel") ? b.attr("rel") : d.attr("rel")
                    }, this.caption = (b.attr("alt")) || d.attr("alt")
                } else t[a] = {
                    imgHref: b.attr("data-img") || " ",
                    thumbSrc: b.attr("data-thumb"),
                    imgRel: b.attr("data-full")
                }, this.caption = this.caption || b.attr("data-caption"), f().html || (f().html = {}), f().html[a] = b, r && (f()._html || (f()._html = {}), f()._html[a] = b.html())
            } else t[a] = {
                imgHref: this.img ? this.img : this.href ? this.href : this.length ? String(this) : null,
                thumbSrc: this.thumb,
                imgRel: this.full
            }
			
			if(typeof this.caption != 'undefined') {
				var splitCpt = this.caption.split('|');
				if(typeof splitCpt[1] != 'undefined') {
					this.caption = splitCpt[0]+'<span class="fotorama__caption_new_line">'+splitCpt[1]+'</span>';
				}
			}
			
        }), e.html("").addClass("fotorama " + (f().vertical ? "fotorama_vertical" : "fotorama_horizontal")), v && e.addClass("fotorama_quirks");
        if (s || q) var F = e.wrap('<div class="fotorama-outer"></div>').parent();
        f().arrows || (f().loop = !0);
        var G = [],
            H, J, L, V, W, X, Y = O(f().minWidth),
            Z = O(f().maxWidth),
            _ = O(f().minHeight),
            ba = O(f().maxHeight),
            bb = 1,
            bc = !0,
            bd = !0,
            be, bf = {
                no: /^[0-9.]+$/,
                px: /^[0-9.]+px$/,
                "%": /^[0-9.]+%$/,
                i: /^ё\d+$/
            }, bg, bh, bi, bj, bk, bl, bm, bn, bo, bp, bq, br, bs, bt, bu, bv, bw, bx, by;
        if (f().autoplay === !0 || f().autoplay == "true" || f().autoplay > 0) bx = !0;
        typeof f().autoplay != "number" && (f().autoplay = 5e3);
        if (f().touchStyle) var bz = 0,
        bA, bB = !1, bC = !1, bD;
        if (f().thumbs && f().thumbsPreview) var bE = !1,
        bF = !1, bG = !1, bH = !1, bI, bJ = !1, bK = 0;
        var bL, bM, bN, bO, bP, bQ;
        f().vertical ? (bL = "top", bM = "left", bN = "pageY", bO = "pageX", bP = "height", bQ = "width") : (bL = "left", bM = "top", bN = "pageX", bO = "pageY", bP = "width", bQ = "height");
        var bR = c('<div class="fotorama__wrap"></div>').appendTo(e),
            bS = c('<div class="fotorama__shaft"></div>').appendTo(bR);
        f().touchStyle || (R(bR), R(bS));
        var bT = c('<div class="fotorama__state"></div>').appendTo(bS);
        o && c(I("svg", {
            viewBox: "0 0 32 32"
        })).append(c(I("g", {
            fill: "none",
            stroke: f().spinnerColor,
            "stroke-width": 2
        })).append(I("circle", {
            cx: 16,
            cy: 16,
            r: 13
        })).append(I("line", {
            x1: 7,
            y1: 7,
            x2: 25,
            y2: 25
        }))).appendTo(bT), f().noise && c('<div class="fotorama__noise"></div>').prependTo(bR);
        var bU;
        if (f().fullscreenIcon && !f().fullscreen) var bV = c('<div class="fotorama__fsi"><i class="i1"><i class="i1"></i></i><i class="i2"><i class="i2"></i></i><i class="i3"><i class="i3"></i></i><i class="i4"><i class="i4"></i></i><i class="i0"></i></div>').appendTo(bR);
        n && e.addClass("fotorama_touch"), q && (f().shadows = !1), f().touchStyle ? bR.addClass("fotorama__wrap_style_touch") : bR.addClass("fotorama__wrap_style_fade"), f().shadows && e.addClass("fotorama_shadows"), u && f().cssTransitions && e.addClass("fotorama_csstransitions");
        if (f().arrows) {
            var bW, bX;
            f().vertical ? (bW = f().arrowPrev ? f().arrowPrev : "&#9650;", bX = f().arrowNext ? f().arrowNext : "&#9660;") : (bW = f().arrowPrev ? f().arrowPrev : "&#9664;", bX = f().arrowNext ? f().arrowNext : "&#9654;");
            var bY = c('<i class="fotorama__arr fotorama__arr_prev">' + bW + '</i><i class="fotorama__arr fotorama__arr_next">' + bX + "</i>").appendTo(bR),
                bZ = bY.eq(0),
                b$ = bY.eq(1);
            R(bY);
            var b_, ca;

            function cb() {
                clearTimeout(ca), ca = setTimeout(function () {
                    var a = b_ >= H / 2;
                    b$[a ? "addClass" : "removeClass"]("fotorama__arr_hover"), bZ[a ? "removeClass" : "addClass"]("fotorama__arr_hover"), f().touchStyle || bS.css({
                        cursor: a && b$.data("disabled") || !a && bZ.data("disabled") ? "default" : "pointer"
                    })
                }, 10)
            }
            n || f().pseudoClick && bR.mousemove(function (a) {
                b_ = a[bN] - bR.offset()[bL], cb()
            })
        } else !f().touchStyle && f().pseudoClick && p > 1 && bS.css({
            cursor: "pointer"
        });
        var cc = !1,
            cd;
        n || (bR.mouseenter(function () {
            ce()
        }), bR.mouseleave(function () {
            cc = !1, cf()
        }));
        var cg, ch, ci, cj, ck, cl = c();
        k.each(function (a) {
            var b = c('<div class="fotorama__frame" style="visibility: hidden;"></div>');
            cl = cl.add(b)
        });
        if (f().thumbs) {
            var cm = Number(f().thumbSize);
            if (isNaN(cm) || !cm) cm = f().vertical ? 64 : 48;
            var cn, co = 0,
                cp = c('<div class="fotorama__thumbs" style="visibility: hidden;"></div>')[f().thumbsOnTop ? "prependTo" : "appendTo"](e),
                cq, cr = c('<div class="fotorama__thumbs-shaft"></div>').appendTo(cp);
            f().touchStyle || R(cp);
            if (f().thumbsPreview) {
                cq = cm + f().thumbMargin * 2, cp.addClass("fotorama__thumbs_previews").css(bQ, cq);
                var cs = 0,
                    ct = d,
                    cu = cm - (v ? 0 : f().thumbBorderWidth * 2),
                    cv = f().thumbMargin,
                    cw = {};
                cw[bQ] = cu, cw[bM] = cv, cw.borderWidth = f().thumbBorderWidth;
                var cx = c('<i class="fotorama__thumb-border"></i>').css(cw).appendTo(cr),
                    cy
            }
            var cz = f().vertical && cp ? cp.width() : 0;
            e.css({
                minWidth: Y + cz
            }), k.each(function (a) {
                var b;
                if (f().thumbsPreview) {
                    b = c('<div class="fotorama__thumb"></div>');
                    var d = {};
                    d[bQ] = cm, d.margin = f().thumbMargin, b.css(d)
                } else b = c('<i class="fotorama__thumb"><i class="fotorama__thumb__dot"></i></i>');
                b.appendTo(cr)
            });
            var cA = c(".fotorama__thumb", e)
        }
        if (f().caption) {
            var cD = c('<span class="fotorama__caption"></span>');
            if (f().caption == "overlay") cD.appendTo(bR).addClass("fotorama__caption_overlay");
            else {
                cD.appendTo(e);
                var cE = cD.wrap('<div class="fotorama__caption-outer"></div>').parent()
            }
        }
        cF(f().width, f().height, f().aspectRatio);
        var cH = [];
        da(cl.eq(f().startImg), !1, !1, !0, !1, !1, !0), L && V && (bo = !0, cI()), f().thumbs && f().thumbsPreview && cC(0), f().thumbs && (f().dotColor && !f().thumbsPreview && cA.children().css({
            backgroundColor: f().dotColor
        }), f().navBackground && cp.css({
            background: f().navBackground
        }), f().thumbsPreview && f().thumbBorderColor && cx.css({
            borderColor: f().thumbBorderColor
        })), f().background && bR.add(f().touchStyle ? !1 : cl).css({
            background: f().background
        }), f().arrowsColor && f().arrows && bY.css({
            color: f().arrowsColor
        });
        var dc = !1;
        de(), e.bind("dblclick", S), e.bind("showimg", function (a, b, c, d) {
            typeof b != "number" && (b == "next" ? b = ch + 1 : b == "prev" ? b = ch - 1 : b == "first" ? b = 0 : b == "last" ? b = p - 1 : (b = ch, d = !0)), b > p - 1 && (b = 0), (!f().touchStyle || !bC) && da(cl.eq(b), a, !1, !1, c, !1, d)
        }), e.bind("play", function (a, b) {
            bx = !0, b = Number(b), isNaN(b) || (f().autoplay = b), c_(y)
        }), e.bind("pause", function () {
            bx = !1
        }), e.bind("rescale", function (a, b, c, d, e) {
            cF(b, c, d), bg = L / V, bi = bg, bp = !be, e = Number(e), isNaN(e) && (e = 0), cI(!1, e)
        }), e.bind("fullscreenopen", function () {
            bu = B.scrollTop(), bv = B.scrollLeft(), bq = !0, bV && bV.trigger("mouseleave", !0), B.scrollLeft(0).scrollTop(0), setTimeout(function () {
                D.add(E).addClass("fullscreen"), e.addClass("fotorama_fullscreen"), (s || q) && e.appendTo(E).addClass("fotorama_fullscreen_quirks"), f().caption && !f().caption != "overlay" && cD.appendTo(bR), f().thumbs && f().hideNavIfFullscreen && cp.hide(), de(), cg && da(cg, !1, !1, !0, 0, !1, !0, !0), cI(!1, !1, !0), f().onFullscreenOpen && f().onFullscreenOpen.call(e[0], cL())
            }, 0)
        }), e.bind("fullscreenclose", function () {
            bq = !1, bV && bV.trigger("mouseleave", !0), D.add(E).removeClass("fullscreen"), e.removeClass("fotorama_fullscreen"), (s || q) && e.appendTo(F).removeClass("fotorama_fullscreen_quirks"), f().caption && !f().caption != "overlay" && cD.appendTo(cE), be || (L = f().width, V = f().height), f().thumbs && f().hideNavIfFullscreen && cp.show(), cg && da(cg, !1, !1, !0, 0, !1, !0, !0), f().flexible ? cJ() : cI(!1, !1, !0), B.scrollLeft(bv).scrollTop(bu), f().onFullscreenClose && f().onFullscreenClose.call(e[0], cL())
        }), e.bind("reset", function () {
            dd({
                type: "resize"
            }, !0)
        }), C.bind("keydown", function (a) {
            bq && (a.keyCode == 27 && !f().fullscreen ? (a.preventDefault(), e.trigger("fullscreenclose")) : a.keyCode == 39 || a.keyCode == 40 ? e.trigger("showimg", ch + 1) : (a.keyCode == 37 || a.keyCode == 38) && e.trigger("showimg", ch - 1))
        }), f().thumbs && cA.bind("click", df), f().arrows && (bZ.bind("click", function (a) {
            c(this).data("disabled") || db(-1, a)
        }), b$.bind("click", function (a) {
            c(this).data("disabled") || db(1, a)
        })), !f().touchStyle && !n && f().pseudoClick && bR.bind("click", function (a) {
            if (f().html) {
                var b, d;
                b = c(a.target), d = b.filter("a"), d.length || (d = b.parents("a"))
            }
            if (!d || !d.length) {
                var g = a[bN] - bR.offset()[bL] >= H / 2;
                if (f().onClick) var h = f().onClick.call(e[0], cL());
                h !== !1 && (!a.shiftKey && g && f().arrows || a.shiftKey && !g && f().arrows || !f().arrows && !a.shiftKey ? db(1, a) : db(-1, a))
            }
        }), bV && bV.bind("click", function (a) {
            a.stopPropagation(), e.trigger(bq ? "fullscreenclose" : "fullscreenopen")
        }).bind("mouseenter mouseleave", function (a, b) {
            b && a.stopPropagation(), bV[a.type == "mouseenter" ? "addClass" : "removeClass"]("fotorama__fsi_hover")
        }), f().fullscreen && e.trigger("fullscreenopen");
        if (f().touchStyle || n) {
            var dh = !1;

            function di() {
                bC = !0
            }

            function dj(a, b, d) {
                clearTimeout(bD), bB || (f().shadows && bR.addClass("fotorama__wrap_shadow"), n || bS.addClass("fotorama__shaft_grabbing"), bB = !0), f().shadows && (d ? bR.addClass("fotorama__wrap_shadow_no-" + d).removeClass("fotorama__wrap_shadow_no-" + (d == "left" ? "right" : "left")) : f().shadows && bR.removeClass("fotorama__wrap_shadow_no-left fotorama__wrap_shadow_no-right")), Math.abs(b) >= 5 && !dh && (dh = !0, c("a", bR).bind("click", Q))
            }

            function dk(a, b, d, g, h, i, j, k) {
                bC = !1, bD = setTimeout(function () {
                    !n && f().arrows && cf(), dh = !1, c("a", bR).unbind("click", Q)
                }, w), n || bS.removeClass("fotorama__shaft_grabbing"), f().shadows && bR.removeClass("fotorama__wrap_shadow");
                var l = !1,
                    m = !1,
                    o, q;
                f().html && (o = c(j.target), q = o.filter("a"), q.length || (q = o.parents("a")));
                if (f().touchStyle)
                    if (bB) {
                        d && (i <= -10 ? l = !0 : i >= 10 && (m = !0));
                        var r = y,
                            s = Math.round(a / (H + f().margin));
                        if (l || m) {
                            i = -i;
                            var t = i / b,
                                u = Math.round(-a + t * 250),
                                v, x, z = .03;
                            l ? (s = Math.ceil(a / (H + f().margin)) - 1, v = -s * (H + f().margin), u > v && (x = Math.abs(u - v), r = Math.abs(r / (t * 250 / (Math.abs(t * 250) - x * (1 - z)))), x = v + x * z)) : m && (s = Math.floor(a / (H + f().margin)) + 1, v = -s * (H + f().margin), u < v && (x = Math.abs(u - v), r = Math.abs(r / (t * 250 / (Math.abs(t * 250) - x * (1 - z)))), x = v - x * z))
                        }
                        s < 0 && (s = 0, x = !1, r = y), s > p - 1 && (s = p - 1, x = !1, r = y), da(cl.eq(s), j, !1, !1, r, x)
                    } else {
                        if (f().html && q.length) return !1;
                        if (f().onClick && k != "prevent") var A = f().onClick.call(e[0], cL());
                        if (A !== !1 && f().pseudoClick && !n && b < w) {
                            var B = j[bN] - bR.offset()[bL] >= H / 2;
                            !j.shiftKey && B && f().arrows || j.shiftKey && !B && f().arrows || !f().arrows && !j.shiftKey ? db(1, j) : db(-1, j)
                        } else da(cg, j, !1, !1, !1, !1, !0)
                    } else {
                        if (i == 0 && f().html && q.length) return !1;
                        i >= 0 ? db(1, j) : i < 0 && db(-1, j)
                    }
                bB = !1
            }
            dg(bS, di, dj, dk);
            if (f().touchStyle && f().thumbs && f().thumbsPreview) {
                var dl = !1;

                function dm() {
                    bE = !0, bF = !0
                }

                function dn(a, b) {
                    !bH && Math.abs(b) >= 5 && (cA.unbind("click", df), dl = !0, clearTimeout(bI), bH = !0), cR(a)
                }

                function dp(a, b, c, d, e, f, g) {
                    bE = !1, bH = !1, bI = setTimeout(function () {
                        dl && (cA.bind("click", df), dl = !1)
                    }, w), a = -a;
                    var h = a,
                        i, j = y * 2;
                    bG && bH && (cQ(0, !1, !1), bG = !1);
                    if (a > cr.data("maxPos")) h = cr.data("maxPos"), j = j / 2;
                    else if (a < cr.data("minPos")) h = cr.data("minPos"), j = j / 2;
                    else if (c) {
                        f = -f;
                        var k = f / b;
                        h = Math.round(a + k * 250);
                        var l = .04;
                        h > cr.data("maxPos") ? (i = Math.abs(h - cr.data("maxPos")), j = Math.abs(j / (k * 250 / (Math.abs(k * 250) - i * (1 - l)))), h = cr.data("maxPos"), i = h + i * l) : h < cr.data("minPos") && (i = Math.abs(h - cr.data("minPos")), j = Math.abs(j / (k * 250 / (Math.abs(k * 250) - i * (1 - l)))), h = cr.data("minPos"), i = h - i * l)
                    }
                    g.altKey && (j = j * 10), ct = h, h != a && (cO(cr, h, j, i), cR(h))
                }
                dg(cr, dm, dn, dp)
            }
        }
    }
    var e = function (a, b, c) {
        function z(a) {
            i.cssText = a
        }

        function A(a, b) {
            return z(l.join(a + ";") + (b || ""))
        }

        function B(a, b) {
            return typeof a === b
        }

        function C(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function D(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!C(e, "-") && i[e] !== c) return b == "pfx" ? e : !0
            }
            return !1
        }

        function E(a, b, d) {
            for (var e in a) {
                var f = b[a[e]];
                if (f !== c) return d === !1 ? a[e] : B(f, "function") ? f.bind(d || b) : f
            }
            return !1
        }

        function F(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                e = (a + " " + n.join(d + " ") + d).split(" ");
            return B(b, "string") || B(b, "undefined") ? D(e, b) : (e = (a + " " + o.join(d + " ") + d).split(" "), E(e, b, c))
        }
        var d = "2.6.2",
            e = {}, f = b.documentElement,
            g = "modernizr",
            h = b.createElement(g),
            i = h.style,
            j, k = {}.toString,
            l = " -webkit- -moz- -o- -ms- ".split(" "),
            m = "Webkit Moz O ms",
            n = m.split(" "),
            o = m.toLowerCase().split(" "),
            p = {
                svg: "http://www.w3.org/2000/svg"
            }, q = {}, r = {}, s = {}, t = [],
            u = t.slice,
            v, w = function (a, c, d, e) {
                var h, i, j, k, l = b.createElement("div"),
                    m = b.body,
                    n = m || b.createElement("body");
                if (parseInt(d, 10))
                    while (d--) j = b.createElement("div"), j.id = e ? e[d] : g + (d + 1), l.appendChild(j);
                return h = ["&#173;", '<style id="s', g, '">', a, "</style>"].join(""), l.id = g, (m ? l : n).innerHTML += h, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = f.style.overflow, f.style.overflow = "hidden", f.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), f.style.overflow = k), !! i
            }, x = {}.hasOwnProperty,
            y;
        !B(x, "undefined") && !B(x.call, "undefined") ? y = function (a, b) {
            return x.call(a, b)
        } : y = function (a, b) {
            return b in a && B(a.constructor.prototype[b], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function (a) {
            var b = this;
            if (typeof b != "function") throw new TypeError;
            var c = u.call(arguments, 1),
                d = function () {
                    if (this instanceof d) {
                        var e = function () {};
                        e.prototype = b.prototype;
                        var f = new e,
                            g = b.apply(f, c.concat(u.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return b.apply(a, c.concat(u.call(arguments)))
                };
            return d
        }), q.canvas = function () {
            var a = b.createElement("canvas");
            return !!a.getContext && !! a.getContext("2d")
        }, q.touch = function () {
            var c;
            return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : w(["@media (", l.join("touch-enabled),("), g, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (a) {
                c = a.offsetTop === 9
            }), c
        }, q.csstransforms = function () {
            return !!F("transform")
        }, q.csstransitions = function () {
            return F("transition")
        }, q.svg = function () {
            return !!b.createElementNS && !! b.createElementNS(p.svg, "svg").createSVGRect
        };
        for (var G in q) y(q, G) && (v = G.toLowerCase(), e[v] = q[G](), t.push((e[v] ? "" : "no-") + v));
        return e.addTest = function (a, b) {
            if (typeof a == "object")
                for (var d in a) y(a, d) && e.addTest(d, a[d]);
            else {
                a = a.toLowerCase();
                if (e[a] !== c) return e;
                b = typeof b == "function" ? b() : b, typeof enableClasses != "undefined" && enableClasses && (f.className += " " + (b ? "" : "no-") + a), e[a] = b
            }
            return e
        }, z(""), h = j = null, e._version = d, e._prefixes = l, e._domPrefixes = o, e._cssomPrefixes = n, e.testProp = function (a) {
            return D([a])
        }, e.testAllProps = F, e.testStyles = w, e
    }(a, b),
        g;
    ! function (a, b, c) {
        function h(a, c) {
            var d = b.createElement(a || "div"),
                e;
            for (e in c) d[e] = c[e];
            return d
        }

        function i(a) {
            for (var b = 1, c = arguments.length; b < c; b++) a.appendChild(arguments[b]);
            return a
        }

        function k(a, b, c, d) {
            var g = ["opacity", b, ~~ (a * 100), c, d].join("-"),
                h = .01 + c / d * 100,
                i = Math.max(1 - (1 - a) / b * (100 - h), a),
                k = f.substring(0, f.indexOf("Animation")).toLowerCase(),
                l = k && "-" + k + "-" || "";
            return e[g] || (j.insertRule("@" + l + "keyframes " + g + "{" + "0%{opacity:" + i + "}" + h + "%{opacity:" + a + "}" + (h + .01) + "%{opacity:1}" + (h + b) % 100 + "%{opacity:" + a + "}" + "100%{opacity:" + i + "}" + "}", j.cssRules.length), e[g] = 1), g
        }

        function l(a, b) {
            var e = a.style,
                f, g;
            if (e[b] !== c) return b;
            b = b.charAt(0).toUpperCase() + b.slice(1);
            for (g = 0; g < d.length; g++) {
                f = d[g] + b;
                if (e[f] !== c) return f
            }
        }

        function m(a, b) {
            for (var c in b) a.style[l(a, c) || c] = b[c];
            return a
        }

        function n(a) {
            for (var b = 1; b < arguments.length; b++) {
                var d = arguments[b];
                for (var e in d) a[e] === c && (a[e] = d[e])
            }
            return a
        }

        function o(a) {
            var b = {
                x: a.offsetLeft,
                y: a.offsetTop
            };
            while (a = a.offsetParent) b.x += a.offsetLeft, b.y += a.offsetTop;
            return b
        }
        var d = ["webkit", "Moz", "ms", "O"],
            e = {}, f, j = function () {
                var a = h("style", {
                    type: "text/css"
                });
                return i(b.getElementsByTagName("head")[0], a), a.sheet || a.styleSheet
            }(),
            p = {
                lines: 12,
                length: 7,
                width: 5,
                radius: 10,
                rotate: 0,
                corners: 1,
                color: "#000",
                speed: 1,
                trail: 100,
                opacity: .25,
                fps: 20,
                zIndex: 2e9,
                className: "spinner",
                top: "auto",
                left: "auto"
            };
        g = function (a) {
            if (!this.spin) return new g(a);
            this.opts = n(a || {}, g.defaults, p)
        }, g.defaults = {}, n(g.prototype, {
            spin: function (a) {
                this.stop();
                var b = this,
                    c = b.opts,
                    d = b.el = m(h(0, {
                        className: c.className
                    }), {
                        position: "relative",
                        width: 0,
                        zIndex: c.zIndex
                    }),
                    e = c.radius + c.length + c.width,
                    g, i;
                a && (a.insertBefore(d, a.firstChild || null), i = o(a), g = o(d), m(d, {
                    left: (c.left == "auto" ? i.x - g.x + (a.offsetWidth >> 1) : parseInt(c.left, 10) + e) + "px",
                    top: (c.top == "auto" ? i.y - g.y + (a.offsetHeight >> 1) : parseInt(c.top, 10) + e) + "px"
                })), d.setAttribute("aria-role", "progressbar"), b.lines(d, b.opts);
                if (!f) {
                    var j = 0,
                        k = c.fps,
                        l = k / c.speed,
                        n = (1 - c.opacity) / (l * c.trail / 100),
                        p = l / c.lines;
                    (function q() {
                        j++;
                        for (var a = c.lines; a; a--) {
                            var e = Math.max(1 - (j + a * p) % l * n, c.opacity);
                            b.opacity(d, c.lines - a, e, c)
                        }
                        b.timeout = b.el && setTimeout(q, ~~ (1e3 / k))
                    })()
                }
                return b
            },
            stop: function () {
                var a = this.el;
                return a && (clearTimeout(this.timeout), a.parentNode && a.parentNode.removeChild(a), this.el = c), this
            },
            lines: function (a, b) {
                function e(a, d) {
                    return m(h(), {
                        position: "absolute",
                        width: b.length + b.width + "px",
                        height: b.width + "px",
                        background: a,
                        boxShadow: d,
                        transformOrigin: "left",
                        transform: "rotate(" + ~~(360 / b.lines * c + b.rotate) + "deg) translate(" + b.radius + "px" + ",0)",
                        borderRadius: (b.corners * b.width >> 1) + "px"
                    })
                }
                var c = 0,
                    d;
                for (; c < b.lines; c++) d = m(h(), {
                    position: "absolute",
                    top: 1 + ~(b.width / 2) + "px",
                    transform: b.hwaccel ? "translate3d(0,0,0)" : "",
                    opacity: b.opacity,
                    animation: f && k(b.opacity, b.trail, c, b.lines) + " " + 1 / b.speed + "s linear infinite"
                }), b.shadow && i(d, m(e("#000", "0 0 4px #000"), {
                    top: "2px"
                })), i(a, i(d, e(b.color, "0 0 1px rgba(0,0,0,.1)")));
                return a
            },
            opacity: function (a, b, c) {
                b < a.childNodes.length && (a.childNodes[b].style.opacity = c)
            }
        }),
        function () {
            function a(a, b) {
                return h("<" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', b)
            }
            var b = m(h("group"), {
                behavior: "url(#default#VML)"
            });
            !l(b, "transform") && b.adj ? (j.addRule(".spin-vml", "behavior:url(#default#VML)"), g.prototype.lines = function (b, c) {
                function f() {
                    return m(a("group", {
                        coordsize: e + " " + e,
                        coordorigin: -d + " " + -d
                    }), {
                        width: e,
                        height: e
                    })
                }

                function k(b, e, g) {
                    i(h, i(m(f(), {
                        rotation: 360 / c.lines * b + "deg",
                        left: ~~e
                    }), i(m(a("roundrect", {
                        arcsize: c.corners
                    }), {
                        width: d,
                        height: c.width,
                        left: c.radius,
                        top: -c.width >> 1,
                        filter: g
                    }), a("fill", {
                        color: c.color,
                        opacity: c.opacity
                    }), a("stroke", {
                        opacity: 0
                    }))))
                }
                var d = c.length + c.width,
                    e = 2 * d,
                    g = -(c.width + c.length) * 2 + "px",
                    h = m(f(), {
                        position: "absolute",
                        top: g,
                        left: g
                    }),
                    j;
                if (c.shadow)
                    for (j = 1; j <= c.lines; j++) k(j, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
                for (j = 1; j <= c.lines; j++) k(j);
                return i(b, h)
            }, g.prototype.opacity = function (a, b, c, d) {
                var e = a.firstChild;
                d = d.shadow && d.lines || 0, e && b + d < e.childNodes.length && (e = e.childNodes[b + d], e = e && e.firstChild, e = e && e.firstChild, e && (e.opacity = c))
            }) : f = l(b, "animation")
        }()
    }(a, b);
    var h, j, k = function (a) {
            a = a.toLowerCase();
            var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
            return {
                browser: b[1] || "",
                version: b[2] || "0"
            }
        };
    h = k(navigator.userAgent), j = {}, h.browser && (j[h.browser] = !0, j.version = h.version), j.chrome ? j.webkit = !0 : j.webkit && (j.safari = !0);
    var l = b.location.hash.replace("#", "") === "quirks",
        m = e.canvas,
        n = e.touch,
        o = e.svg,
        p = navigator.userAgent.toLowerCase(),
        q = p.match(/(phone|ipod|ipad|windows ce|netfront|playstation|midp|up\.browser|android|mobile|mini|tablet|symbian|nintendo|wii)/),
        r = j.msie,
        s = r && "6.0" === j.version,
        t = j.mozilla,
        u = e.csstransforms && e.csstransitions && !l,
        v = b.compatMode !== "CSS1Compat" && r,
        w = 300,
        x = f([.1, 0, .25, 1]),
        y = 333,
        z = 500,
        A = 333,
        B = c(a),
        C = c(b),
        D, E, F = [
            ["width", "s", null],
            ["minWidth", "s", null],
            ["maxWidth", "s", null],
            ["height", "s", null],
            ["minHeight", "s", null],
            ["maxHeight", "s", null],
            ["aspectRatio", "n", null],
            ["transition", "s", "slide"],
            ["touchStyle", "b", !0],
            ["click", "b", null],
            ["pseudoClick", "b", !0],
            ["loop", "b", !1],
            ["autoplay", "bn", !1],
            ["stopAutoplayOnAction", "b", !0],
            ["transitionDuration", "n", y],
            ["background", "s", null],
            ["backgroundColor", "s", null],
            ["margin", "n", 4],
            ["minPadding", "n", 8],
            ["alwaysPadding", "b", !1],
            ["zoomToFit", "b", !0],
            ["cropToFit", "b", !1],
            ["cropToFitIfFullscreen", "b", !1],
            ["flexible", "b", !1],
            ["fitToWindowHeight", "b", !1],
            ["fitToWindowHeightMargin", "n", 20],
            ["fullscreen", "b", !1],
            ["fullscreenIcon", "b", !1],
            ["vertical", "b", !1],
            ["arrows", "b", !0],
            ["arrowsColor", "s", null],
            ["arrowPrev", "s", null],
            ["arrowNext", "s", null],
            ["spinnerColor", "s", "#808080"],
            ["nav", "s", null],
            ["thumbs", "b", !0],
            ["navPosition", "s", null],
            ["thumbsOnTop", "b", !1],
            ["thumbsOnRight", "b", !1],
            ["navBackground", "s", null],
            ["thumbsBackgroundColor", "s", null],
            ["dotColor", "s", null],
            ["thumbColor", "s", null],
            ["thumbsPreview", "b", !0],
            ["thumbSize", "n", null],
            ["thumbMargin", "n", 4],
            ["thumbBorderWidth", "n", 2],
            ["thumbBorderColor", "s", null],
            ["thumbsCentered", "b", !0],
            ["hideNavIfFullscreen", "b", !1],
            ["caption", "s", !1],
            ["preload", "n", 3],
            ["shadows", "b", !0],
            ["noise", "b", !0],
            ["data", "a", null],
            ["html", "a", null],
            ["hash", "b", !1],
            ["startImg", "n", 0],
            ["onShowImg", "f", null],
            ["onFullscreenOpen", "f", null],
            ["onFullscreenClose", "f", null],
            ["onClick", "f", null],
            ["onTransitionStop", "f", null],
            ["detachSiblings", "b", !0],
            ["cssTransitions", "b", !0]
        ],
        H = ["-webkit-", "-moz-", "-o-", "-ms-", ""];
    c.fn.fotorama = function (a) {
        return typeof fotoramaDefaults == "undefined" && (fotoramaDefaults = {}), this.each(function (b) {
            var d = c(this),
                e = c.extend(G(), c.extend({}, fotoramaDefaults, c.extend(a, G(d))));
            d.data("ini") || (d.data({
                ini: !0,
                options: e
            }), U(d, function () {
                V(d)
            }))
        }), this
    }, c(function () {
        D = c("html"), E = c("body"), c(".fotorama").each(function () {
            var a = c(this);
            a.fotorama()
        })
    })
})(window, document, jQuery);