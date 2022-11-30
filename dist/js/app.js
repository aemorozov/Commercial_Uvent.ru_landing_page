!(function n(o, i, a) {
  function u(t, e) {
    if (!i[t]) {
      if (!o[t]) {
        var r = "function" == typeof require && require;
        if (!e && r) return r(t, !0);
        if (l) return l(t, !0);
        throw (
          (((e = new Error("Cannot find module '" + t + "'")).code =
            "MODULE_NOT_FOUND"),
          e)
        );
      }
      (r = i[t] = { exports: {} }),
        o[t][0].call(
          r.exports,
          function (e) {
            return u(o[t][1][e] || e);
          },
          r,
          r.exports,
          n,
          o,
          i,
          a
        );
    }
    return i[t].exports;
  }
  for (
    var l = "function" == typeof require && require, e = 0;
    e < a.length;
    e++
  )
    u(a[e]);
  return u;
})(
  {
    1: [
      function (e, t, r) {
        var n, o;
        (n = this),
          (o = function () {
            return (
              (n = [
                function (e, t, r) {
                  "use strict";
                  function n(e) {
                    return e && e.__esModule ? e : { default: e };
                  }
                  function o(e) {
                    function t(e) {
                      return (e = e.target.value), n.update(e);
                    }
                    var r = e.inputElement,
                      n = (0, a.default)(e);
                    return (
                      r.addEventListener("input", t),
                      n.update(r.value),
                      {
                        textMaskInputElement: n,
                        destroy: function () {
                          r.removeEventListener("input", t);
                        },
                      }
                    );
                  }
                  Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.conformToMask = void 0),
                    (t.maskInput = o);
                  var i = r(2),
                    r =
                      (Object.defineProperty(t, "conformToMask", {
                        enumerable: !0,
                        get: function () {
                          return n(i).default;
                        },
                      }),
                      r(5)),
                    a = n(r);
                  t.default = o;
                },
                function (e, t) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.placeholderChar = "_"),
                    (t.strFunction = "function");
                },
                function (e, t, r) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", { value: !0 });
                  var A =
                      "function" == typeof Symbol &&
                      "symbol" == typeof Symbol.iterator
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              "function" == typeof Symbol &&
                              e.constructor === Symbol &&
                              e !== Symbol.prototype
                              ? "symbol"
                              : typeof e;
                          },
                    q =
                      ((t.default = function () {
                        var e =
                            0 < arguments.length && void 0 !== arguments[0]
                              ? arguments[0]
                              : F,
                          t =
                            1 < arguments.length && void 0 !== arguments[1]
                              ? arguments[1]
                              : I,
                          r =
                            2 < arguments.length && void 0 !== arguments[2]
                              ? arguments[2]
                              : {};
                        if (!(0, q.isArray)(t)) {
                          if (
                            (void 0 === t ? "undefined" : A(t)) !==
                            L.strFunction
                          )
                            throw new Error(
                              "Text-mask:conformToMask; The mask property must be an array."
                            );
                          (t = t(e, r)),
                            (t = (0, q.processCaretTraps)(
                              t
                            ).maskWithoutCaretTraps);
                        }
                        var n = void 0 === (u = r.guide) || u,
                          o = void 0 === (u = r.previousConformedValue) ? F : u,
                          i =
                            void 0 === (u = r.placeholderChar)
                              ? L.placeholderChar
                              : u,
                          a =
                            void 0 === (u = r.placeholder)
                              ? (0, q.convertMaskToPlaceholder)(t, i)
                              : u,
                          u = r.currentCaretPosition,
                          l = r.keepCharPositions,
                          s = !1 === n && void 0 !== o,
                          r = e.length,
                          c = o.length,
                          f = a.length,
                          d = t.length,
                          v = r - c,
                          p = 0 < v,
                          h = u + (p ? -v : 0),
                          m = h + Math.abs(v);
                        if (!0 === l && !p) {
                          for (var y = F, g = h; g < m; g++)
                            a[g] === i && (y += i);
                          e = e.slice(0, h) + y + e.slice(h, r);
                        }
                        for (
                          var b = e.split(F).map(function (e, t) {
                              return { char: e, isNew: h <= t && t < m };
                            }),
                            C = r - 1;
                          0 <= C;
                          C--
                        ) {
                          var x = b[C].char;
                          x !== i &&
                            x === a[h <= C && c === d ? C - v : C] &&
                            b.splice(C, 1);
                        }
                        var T = F,
                          k = !1;
                        e: for (var P = 0; P < f; P++) {
                          var M = a[P];
                          if (M === i) {
                            if (0 < b.length)
                              for (; 0 < b.length; ) {
                                var O = b.shift(),
                                  S = O.char,
                                  O = O.isNew;
                                if (S === i && !0 != s) {
                                  T += i;
                                  continue e;
                                }
                                if (t[P].test(S)) {
                                  if (
                                    !0 === l &&
                                    !1 !== O &&
                                    o !== F &&
                                    !1 !== n &&
                                    p
                                  ) {
                                    for (
                                      var w = b.length, _ = null, j = 0;
                                      j < w;
                                      j++
                                    ) {
                                      var E = b[j];
                                      if (E.char !== i && !1 === E.isNew) break;
                                      if (E.char === i) {
                                        _ = j;
                                        break;
                                      }
                                    }
                                    null !== _
                                      ? ((T += S), b.splice(_, 1))
                                      : P--;
                                  } else T += S;
                                  continue e;
                                }
                                k = !0;
                              }
                            !1 == s && (T += a.substr(P, f));
                            break;
                          }
                          T += M;
                        }
                        if (s && !1 == p) {
                          for (var V = null, N = 0; N < T.length; N++)
                            a[N] === i && (V = N);
                          T = null !== V ? T.substr(0, V + 1) : F;
                        }
                        return {
                          conformedValue: T,
                          meta: { someCharsRejected: k },
                        };
                      }),
                      r(3)),
                    L = r(1),
                    I = [],
                    F = "";
                },
                function (e, t, r) {
                  "use strict";
                  function n(e) {
                    return (
                      (Array.isArray && Array.isArray(e)) || e instanceof Array
                    );
                  }
                  Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.convertMaskToPlaceholder = function () {
                      var e =
                          0 < arguments.length && void 0 !== arguments[0]
                            ? arguments[0]
                            : i,
                        t =
                          1 < arguments.length && void 0 !== arguments[1]
                            ? arguments[1]
                            : o.placeholderChar;
                      if (!n(e))
                        throw new Error(
                          "Text-mask:convertMaskToPlaceholder; The mask property must be an array."
                        );
                      if (-1 !== e.indexOf(t))
                        throw new Error(
                          "Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\nThe placeholder character that was received is: " +
                            JSON.stringify(t) +
                            "\n\nThe mask that was received is: " +
                            JSON.stringify(e)
                        );
                      return e
                        .map(function (e) {
                          return e instanceof RegExp ? t : e;
                        })
                        .join("");
                    }),
                    (t.isArray = n),
                    (t.isString = function (e) {
                      return "string" == typeof e || e instanceof String;
                    }),
                    (t.isNumber = function (e) {
                      return (
                        "number" == typeof e && void 0 === e.length && !isNaN(e)
                      );
                    }),
                    (t.processCaretTraps = function (e) {
                      for (var t, r = []; -1 !== (t = e.indexOf(a)); )
                        r.push(t), e.splice(t, 1);
                      return { maskWithoutCaretTraps: e, indexes: r };
                    });
                  var o = r(1),
                    i = [],
                    a = "[]";
                },
                function (e, t) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.default = function (e) {
                      var t = void 0 === (t = e.previousConformedValue) ? O : t,
                        r = void 0 === (r = e.previousPlaceholder) ? O : r,
                        n = void 0 === (n = e.currentCaretPosition) ? 0 : n,
                        o = e.conformedValue,
                        i = e.rawValue,
                        a = e.placeholderChar,
                        u = e.placeholder,
                        l = void 0 === (l = e.indexesOfPipedChars) ? M : l,
                        s = void 0 === (e = e.caretTrapIndexes) ? M : e;
                      if (0 === n || !i.length) return 0;
                      var e = i.length,
                        c = t.length,
                        f = u.length,
                        d = o.length,
                        v = 0 < (e = e - c);
                      if (1 < e && !v && !(0 === c)) return n;
                      var p = 0,
                        c = void 0,
                        h = void 0;
                      if (v && (t === o || o === u)) p = n - e;
                      else {
                        var m = o.toLowerCase(),
                          t = i
                            .toLowerCase()
                            .substr(0, n)
                            .split(O)
                            .filter(function (e) {
                              return -1 !== m.indexOf(e);
                            }),
                          h = t[t.length - 1],
                          e = r
                            .substr(0, t.length)
                            .split(O)
                            .filter(function (e) {
                              return e !== a;
                            }).length,
                          y = u
                            .substr(0, t.length)
                            .split(O)
                            .filter(function (e) {
                              return e !== a;
                            }).length,
                          r =
                            void 0 !== r[t.length - 1] &&
                            void 0 !== u[t.length - 2] &&
                            r[t.length - 1] !== a &&
                            r[t.length - 1] !== u[t.length - 1] &&
                            r[t.length - 1] === u[t.length - 2];
                        !v &&
                          (y !== e || r) &&
                          0 < e &&
                          -1 < u.indexOf(h) &&
                          void 0 !== i[n] &&
                          ((c = !0), (h = i[n]));
                        for (
                          var y = l
                              .map(function (e) {
                                return m[e];
                              })
                              .filter(function (e) {
                                return e === h;
                              }).length,
                            r = t.filter(function (e) {
                              return e === h;
                            }).length,
                            g =
                              u
                                .substr(0, u.indexOf(a))
                                .split(O)
                                .filter(function (e, t) {
                                  return e === h && i[t] !== e;
                                }).length +
                              r +
                              y +
                              (c ? 1 : 0),
                            b = 0,
                            C = 0;
                          C < d;
                          C++
                        ) {
                          p = C + 1;
                          if ((m[C] === h && b++, g <= b)) break;
                        }
                      }
                      if (v) {
                        for (var x = p, T = p; T <= f; T++)
                          if (
                            (u[T] === a && (x = T),
                            u[T] === a || -1 !== s.indexOf(T) || T === f)
                          )
                            return x;
                      } else if (c) {
                        for (var k = p - 1; 0 <= k; k--)
                          if (o[k] === h || -1 !== s.indexOf(k) || 0 === k)
                            return k;
                      } else
                        for (var P = p; 0 <= P; P--)
                          if (u[P - 1] === a || -1 !== s.indexOf(P) || 0 === P)
                            return P;
                    });
                  var M = [],
                    O = "";
                },
                function (e, t, r) {
                  "use strict";
                  function n(e) {
                    return e && e.__esModule ? e : { default: e };
                  }
                  Object.defineProperty(t, "__esModule", { value: !0 });
                  var b =
                      Object.assign ||
                      function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var r,
                            n = arguments[t];
                          for (r in n)
                            Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r]);
                        }
                        return e;
                      },
                    C =
                      "function" == typeof Symbol &&
                      "symbol" == typeof Symbol.iterator
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              "function" == typeof Symbol &&
                              e.constructor === Symbol &&
                              e !== Symbol.prototype
                              ? "symbol"
                              : typeof e;
                          };
                  t.default = function (y) {
                    var g = {
                      previousConformedValue: void 0,
                      previousPlaceholder: void 0,
                    };
                    return {
                      state: g,
                      update: function (e) {
                        var t,
                          r,
                          n =
                            1 < arguments.length && void 0 !== arguments[1]
                              ? arguments[1]
                              : y,
                          o = n.inputElement,
                          i = n.mask,
                          a = n.guide,
                          u = n.pipe,
                          l = n.placeholderChar,
                          l = void 0 === l ? P.placeholderChar : l,
                          s = n.keepCharPositions,
                          s = void 0 !== s && s,
                          n = n.showMask,
                          n = void 0 !== n && n;
                        if (
                          (e = void 0 === e ? o.value : e) !==
                          g.previousConformedValue
                        ) {
                          (void 0 === i ? "undefined" : C(i)) === S &&
                            void 0 !== i.pipe &&
                            void 0 !== i.mask &&
                            ((u = i.pipe), (i = i.mask));
                          var c = void 0,
                            f = void 0;
                          if (
                            (i instanceof Array &&
                              (c = (0, k.convertMaskToPlaceholder)(i, l)),
                            !1 !== i)
                          ) {
                            var e = (function (e) {
                                if ((0, k.isString)(e)) return e;
                                if ((0, k.isNumber)(e)) return String(e);
                                if (null == e) return M;
                                throw new Error(
                                  "The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n " +
                                    JSON.stringify(e)
                                );
                              })(e),
                              d = o.selectionEnd,
                              v = g.previousConformedValue,
                              p = g.previousPlaceholder,
                              h = void 0;
                            if (
                              (void 0 === i ? "undefined" : C(i)) ===
                              P.strFunction
                            ) {
                              if (
                                !1 ===
                                (f = i(e, {
                                  currentCaretPosition: d,
                                  previousConformedValue: v,
                                  placeholderChar: l,
                                }))
                              )
                                return;
                              var m = (0, k.processCaretTraps)(f),
                                f = m.maskWithoutCaretTraps,
                                h = m.indexes,
                                c = (0, k.convertMaskToPlaceholder)(f, l);
                            } else f = i;
                            (m = {
                              previousConformedValue: v,
                              guide: a,
                              placeholderChar: l,
                              pipe: u,
                              placeholder: c,
                              currentCaretPosition: d,
                              keepCharPositions: s,
                            }),
                              (i = (0, T.default)(e, f, m).conformedValue),
                              (a =
                                (void 0 === u ? "undefined" : C(u)) ===
                                P.strFunction),
                              (s = {}),
                              (f =
                                (a &&
                                  (!1 === (s = u(i, b({ rawValue: e }, m)))
                                    ? (s = { value: v, rejected: !0 })
                                    : (0, k.isString)(s) && (s = { value: s })),
                                a ? s.value : i)),
                              (u = (0, x.default)({
                                previousConformedValue: v,
                                previousPlaceholder: p,
                                conformedValue: f,
                                placeholder: c,
                                rawValue: e,
                                currentCaretPosition: d,
                                placeholderChar: l,
                                indexesOfPipedChars: s.indexesOfPipedChars,
                                caretTrapIndexes: h,
                              })),
                              (m = f === c && 0 === u ? (n ? c : M) : f);
                            (g.previousConformedValue = m),
                              (g.previousPlaceholder = c),
                              o.value !== m &&
                                ((o.value = m),
                                (t = o),
                                (r = u),
                                document.activeElement === t) &&
                                (w
                                  ? _(function () {
                                      return t.setSelectionRange(r, r, O);
                                    }, 0)
                                  : t.setSelectionRange(r, r, O));
                          }
                        }
                      },
                    };
                  };
                  var x = n(r(4)),
                    T = n(r(2)),
                    k = r(3),
                    P = r(1),
                    M = "",
                    O = "none",
                    S = "object",
                    w =
                      "undefined" != typeof navigator &&
                      /Android/i.test(navigator.userAgent),
                    _ =
                      "undefined" != typeof requestAnimationFrame
                        ? requestAnimationFrame
                        : setTimeout;
                },
              ]),
              (o = {}),
              (r.m = n),
              (r.c = o),
              (r.p = ""),
              r(0)
            );
            function r(e) {
              var t;
              return (
                o[e] ||
                ((t = o[e] = { exports: {}, id: e, loaded: !1 }),
                n[e].call(t.exports, t, t.exports, r),
                (t.loaded = !0),
                t)
              ).exports;
            }
            var n, o;
          }),
          "object" == typeof r && "object" == typeof t
            ? (t.exports = o())
            : "function" == typeof define && define.amd
            ? define([], o)
            : "object" == typeof r
            ? (r.vanillaTextMask = o())
            : (n.vanillaTextMask = o());
      },
      {},
    ],
    2: [
      function (e, t, r) {
        var n = document.getElementsByClassName("text-for-circle-in-js");
        const o = {
          А: 0.5,
          В: 0.5,
          Е: 1,
          Ж: -1.8,
          И: -0.5,
          Н: -0.5,
          О: -1,
          П: 1,
          У: 1,
          Ы: -1,
          Ь: 1,
          Я: -1,
        };
        var i = n;
        for (let e = 0; e < i.length; e++) {
          var a = i[e].outerText.toUpperCase();
          const u = 360 / (a.length + 1);
          i[e].innerHTML = a
            .split("")
            .map(
              (e, t) =>
                `<span class="circle-text" style="--rot:${
                  t * u + (o[e] || 0)
                }deg">${e}</span>`
            )
            .join("");
        }
      },
      {},
    ],
    3: [
      function (e, t, r) {
        e("./circleText"),
          e("./textAnimation"),
          e("./phoneNumber"),
          e("./videoControl");
      },
      {
        "./circleText": 2,
        "./phoneNumber": 4,
        "./textAnimation": 5,
        "./videoControl": 6,
      },
    ],
    4: [
      function (e, t, r) {
        var e = e("vanilla-text-mask"),
          n = document.querySelector("#phone");
        e.maskInput({
          inputElement: n,
          mask: [
            "+",
            "7",
            " ",
            "(",
            /[1-9]/,
            /\d/,
            /\d/,
            ")",
            " ",
            /\d/,
            /\d/,
            /\d/,
            "-",
            /\d/,
            /\d/,
            /\d/,
            /\d/,
          ],
        });
      },
      { "vanilla-text-mask": 1 },
    ],
    5: [
      function (e, t, r) {
        const n = document.querySelector(".h1_1"),
          o = document.querySelector(".h1_2"),
          i = document.querySelector(".h1_3"),
          a = n.textContent.split(""),
          u = o.textContent.split(""),
          l = i.textContent.split("");
        let s = 0;
        var c = 25 * a.length * 2,
          f = c + 25 * u.length * 2;
        {
          const d = setInterval(() => {
            void 0 !== a[s]
              ? ((n.innerHTML += a[s]), s++)
              : (clearInterval(d), (s = 0));
          }, 25);
        }
        setTimeout(function () {
          let e = setInterval(() => {
            void 0 !== u[s]
              ? ((o.innerHTML += u[s]), s++)
              : (clearInterval(e), (s = 0));
          }, 25);
        }, c),
          setTimeout(function () {
            let e = setInterval(() => {
              void 0 !== l[s]
                ? ((i.innerHTML += l[s]), s++)
                : (clearInterval(e), (s = 0));
            }, 25);
          }, f),
          (n.innerHTML = ""),
          (o.innerHTML = ""),
          (i.innerHTML = "");
      },
      {},
    ],
    6: [
      function (e, t, r) {
        var n = document.querySelector(".text-on-video-div");
        const o = document.querySelector(".text-on-video-p"),
          i = document.querySelector(".video");
        let a = !1;
        n.addEventListener("click", () => {
          a
            ? ((a = !1), i.pause(), (o.style.opacity = "1"))
            : ((a = !0), i.play(), (o.style.opacity = "0"));
        });
      },
      {},
    ],
  },
  {},
  [3]
);
//# sourceMappingURL=app.js.map
