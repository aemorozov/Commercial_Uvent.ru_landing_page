!(function n(o, i, a) {
  function u(r, e) {
    if (!i[r]) {
      if (!o[r]) {
        var t = "function" == typeof require && require;
        if (!e && t) return t(r, !0);
        if (l) return l(r, !0);
        throw (
          (((e = new Error("Cannot find module '" + r + "'")).code =
            "MODULE_NOT_FOUND"),
          e)
        );
      }
      (t = i[r] = { exports: {} }),
        o[r][0].call(
          t.exports,
          function (e) {
            return u(o[r][1][e] || e);
          },
          t,
          t.exports,
          n,
          o,
          i,
          a
        );
    }
    return i[r].exports;
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
      function (e, r, t) {
        var n, o;
        (n = this),
          (o = function () {
            return (
              (n = [
                function (e, r, t) {
                  "use strict";
                  function n(e) {
                    return e && e.__esModule ? e : { default: e };
                  }
                  function o(e) {
                    function r(e) {
                      return (e = e.target.value), n.update(e);
                    }
                    var t = e.inputElement,
                      n = (0, a.default)(e);
                    return (
                      t.addEventListener("input", r),
                      n.update(t.value),
                      {
                        textMaskInputElement: n,
                        destroy: function () {
                          t.removeEventListener("input", r);
                        },
                      }
                    );
                  }
                  Object.defineProperty(r, "__esModule", { value: !0 }),
                    (r.conformToMask = void 0),
                    (r.maskInput = o);
                  var i = t(2),
                    t =
                      (Object.defineProperty(r, "conformToMask", {
                        enumerable: !0,
                        get: function () {
                          return n(i).default;
                        },
                      }),
                      t(5)),
                    a = n(t);
                  r.default = o;
                },
                function (e, r) {
                  "use strict";
                  Object.defineProperty(r, "__esModule", { value: !0 }),
                    (r.placeholderChar = "_"),
                    (r.strFunction = "function");
                },
                function (e, r, t) {
                  "use strict";
                  Object.defineProperty(r, "__esModule", { value: !0 });
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
                    L =
                      ((r.default = function () {
                        var e =
                            0 < arguments.length && void 0 !== arguments[0]
                              ? arguments[0]
                              : F,
                          r =
                            1 < arguments.length && void 0 !== arguments[1]
                              ? arguments[1]
                              : q,
                          t =
                            2 < arguments.length && void 0 !== arguments[2]
                              ? arguments[2]
                              : {};
                        if (!(0, L.isArray)(r)) {
                          if (
                            (void 0 === r ? "undefined" : A(r)) !==
                            I.strFunction
                          )
                            throw new Error(
                              "Text-mask:conformToMask; The mask property must be an array."
                            );
                          (r = r(e, t)),
                            (r = (0, L.processCaretTraps)(
                              r
                            ).maskWithoutCaretTraps);
                        }
                        var n = void 0 === (u = t.guide) || u,
                          o = void 0 === (u = t.previousConformedValue) ? F : u,
                          i =
                            void 0 === (u = t.placeholderChar)
                              ? I.placeholderChar
                              : u,
                          a =
                            void 0 === (u = t.placeholder)
                              ? (0, L.convertMaskToPlaceholder)(r, i)
                              : u,
                          u = t.currentCaretPosition,
                          l = t.keepCharPositions,
                          s = !1 === n && void 0 !== o,
                          t = e.length,
                          c = o.length,
                          f = a.length,
                          d = r.length,
                          p = t - c,
                          v = 0 < p,
                          h = u + (v ? -p : 0),
                          m = h + Math.abs(p);
                        if (!0 === l && !v) {
                          for (var y = F, g = h; g < m; g++)
                            a[g] === i && (y += i);
                          e = e.slice(0, h) + y + e.slice(h, t);
                        }
                        for (
                          var b = e.split(F).map(function (e, r) {
                              return { char: e, isNew: h <= r && r < m };
                            }),
                            C = t - 1;
                          0 <= C;
                          C--
                        ) {
                          var x = b[C].char;
                          x !== i &&
                            x === a[h <= C && c === d ? C - p : C] &&
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
                                if (r[P].test(S)) {
                                  if (
                                    !0 === l &&
                                    !1 !== O &&
                                    o !== F &&
                                    !1 !== n &&
                                    v
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
                        if (s && !1 == v) {
                          for (var V = null, N = 0; N < T.length; N++)
                            a[N] === i && (V = N);
                          T = null !== V ? T.substr(0, V + 1) : F;
                        }
                        return {
                          conformedValue: T,
                          meta: { someCharsRejected: k },
                        };
                      }),
                      t(3)),
                    I = t(1),
                    q = [],
                    F = "";
                },
                function (e, r, t) {
                  "use strict";
                  function n(e) {
                    return (
                      (Array.isArray && Array.isArray(e)) || e instanceof Array
                    );
                  }
                  Object.defineProperty(r, "__esModule", { value: !0 }),
                    (r.convertMaskToPlaceholder = function () {
                      var e =
                          0 < arguments.length && void 0 !== arguments[0]
                            ? arguments[0]
                            : i,
                        r =
                          1 < arguments.length && void 0 !== arguments[1]
                            ? arguments[1]
                            : o.placeholderChar;
                      if (!n(e))
                        throw new Error(
                          "Text-mask:convertMaskToPlaceholder; The mask property must be an array."
                        );
                      if (-1 !== e.indexOf(r))
                        throw new Error(
                          "Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\nThe placeholder character that was received is: " +
                            JSON.stringify(r) +
                            "\n\nThe mask that was received is: " +
                            JSON.stringify(e)
                        );
                      return e
                        .map(function (e) {
                          return e instanceof RegExp ? r : e;
                        })
                        .join("");
                    }),
                    (r.isArray = n),
                    (r.isString = function (e) {
                      return "string" == typeof e || e instanceof String;
                    }),
                    (r.isNumber = function (e) {
                      return (
                        "number" == typeof e && void 0 === e.length && !isNaN(e)
                      );
                    }),
                    (r.processCaretTraps = function (e) {
                      for (var r, t = []; -1 !== (r = e.indexOf(a)); )
                        t.push(r), e.splice(r, 1);
                      return { maskWithoutCaretTraps: e, indexes: t };
                    });
                  var o = t(1),
                    i = [],
                    a = "[]";
                },
                function (e, r) {
                  "use strict";
                  Object.defineProperty(r, "__esModule", { value: !0 }),
                    (r.default = function (e) {
                      var r = void 0 === (r = e.previousConformedValue) ? O : r,
                        t = void 0 === (t = e.previousPlaceholder) ? O : t,
                        n = void 0 === (n = e.currentCaretPosition) ? 0 : n,
                        o = e.conformedValue,
                        i = e.rawValue,
                        a = e.placeholderChar,
                        u = e.placeholder,
                        l = void 0 === (l = e.indexesOfPipedChars) ? M : l,
                        s = void 0 === (e = e.caretTrapIndexes) ? M : e;
                      if (0 === n || !i.length) return 0;
                      var e = i.length,
                        c = r.length,
                        f = u.length,
                        d = o.length,
                        p = 0 < (e = e - c);
                      if (1 < e && !p && !(0 === c)) return n;
                      var v = 0,
                        c = void 0,
                        h = void 0;
                      if (p && (r === o || o === u)) v = n - e;
                      else {
                        var m = o.toLowerCase(),
                          r = i
                            .toLowerCase()
                            .substr(0, n)
                            .split(O)
                            .filter(function (e) {
                              return -1 !== m.indexOf(e);
                            }),
                          h = r[r.length - 1],
                          e = t
                            .substr(0, r.length)
                            .split(O)
                            .filter(function (e) {
                              return e !== a;
                            }).length,
                          y = u
                            .substr(0, r.length)
                            .split(O)
                            .filter(function (e) {
                              return e !== a;
                            }).length,
                          t =
                            void 0 !== t[r.length - 1] &&
                            void 0 !== u[r.length - 2] &&
                            t[r.length - 1] !== a &&
                            t[r.length - 1] !== u[r.length - 1] &&
                            t[r.length - 1] === u[r.length - 2];
                        !p &&
                          (y !== e || t) &&
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
                            t = r.filter(function (e) {
                              return e === h;
                            }).length,
                            g =
                              u
                                .substr(0, u.indexOf(a))
                                .split(O)
                                .filter(function (e, r) {
                                  return e === h && i[r] !== e;
                                }).length +
                              t +
                              y +
                              (c ? 1 : 0),
                            b = 0,
                            C = 0;
                          C < d;
                          C++
                        ) {
                          v = C + 1;
                          if ((m[C] === h && b++, g <= b)) break;
                        }
                      }
                      if (p) {
                        for (var x = v, T = v; T <= f; T++)
                          if (
                            (u[T] === a && (x = T),
                            u[T] === a || -1 !== s.indexOf(T) || T === f)
                          )
                            return x;
                      } else if (c) {
                        for (var k = v - 1; 0 <= k; k--)
                          if (o[k] === h || -1 !== s.indexOf(k) || 0 === k)
                            return k;
                      } else
                        for (var P = v; 0 <= P; P--)
                          if (u[P - 1] === a || -1 !== s.indexOf(P) || 0 === P)
                            return P;
                    });
                  var M = [],
                    O = "";
                },
                function (e, r, t) {
                  "use strict";
                  function n(e) {
                    return e && e.__esModule ? e : { default: e };
                  }
                  Object.defineProperty(r, "__esModule", { value: !0 });
                  var b =
                      Object.assign ||
                      function (e) {
                        for (var r = 1; r < arguments.length; r++) {
                          var t,
                            n = arguments[r];
                          for (t in n)
                            Object.prototype.hasOwnProperty.call(n, t) &&
                              (e[t] = n[t]);
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
                  r.default = function (y) {
                    var g = {
                      previousConformedValue: void 0,
                      previousPlaceholder: void 0,
                    };
                    return {
                      state: g,
                      update: function (e) {
                        var r,
                          t,
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
                              p = g.previousConformedValue,
                              v = g.previousPlaceholder,
                              h = void 0;
                            if (
                              (void 0 === i ? "undefined" : C(i)) ===
                              P.strFunction
                            ) {
                              if (
                                !1 ===
                                (f = i(e, {
                                  currentCaretPosition: d,
                                  previousConformedValue: p,
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
                              previousConformedValue: p,
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
                                    ? (s = { value: p, rejected: !0 })
                                    : (0, k.isString)(s) && (s = { value: s })),
                                a ? s.value : i)),
                              (u = (0, x.default)({
                                previousConformedValue: p,
                                previousPlaceholder: v,
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
                                (r = o),
                                (t = u),
                                document.activeElement === r) &&
                                (w
                                  ? _(function () {
                                      return r.setSelectionRange(t, t, O);
                                    }, 0)
                                  : r.setSelectionRange(t, t, O));
                          }
                        }
                      },
                    };
                  };
                  var x = n(t(4)),
                    T = n(t(2)),
                    k = t(3),
                    P = t(1),
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
              (t.m = n),
              (t.c = o),
              (t.p = ""),
              t(0)
            );
            function t(e) {
              var r;
              return (
                o[e] ||
                ((r = o[e] = { exports: {}, id: e, loaded: !1 }),
                n[e].call(r.exports, r, r.exports, t),
                (r.loaded = !0),
                r)
              ).exports;
            }
            var n, o;
          }),
          "object" == typeof t && "object" == typeof r
            ? (r.exports = o())
            : "function" == typeof define && define.amd
            ? define([], o)
            : "object" == typeof t
            ? (t.vanillaTextMask = o())
            : (n.vanillaTextMask = o());
      },
      {},
    ],
    2: [
      function (e, r, t) {
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
              (e, r) =>
                `<span class="circle-text" style="--rot:${
                  r * u + (o[e] || 0)
                }deg">${e}</span>`
            )
            .join("");
        }
      },
      {},
    ],
    3: [
      function (e, r, t) {
        e("./circleText"), e("./textAnimation"), e("./phoneNumber");
      },
      { "./circleText": 2, "./phoneNumber": 4, "./textAnimation": 5 },
    ],
    4: [
      function (e, r, t) {
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
      function (e, r, t) {
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
  },
  {},
  [3]
);
//# sourceMappingURL=app.js.map
