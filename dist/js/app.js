!(function o(r, i, c) {
  function u(t, e) {
    if (!i[t]) {
      if (!r[t]) {
        var n = "function" == typeof require && require;
        if (!e && n) return n(t, !0);
        if (l) return l(t, !0);
        throw (
          (((e = new Error("Cannot find module '" + t + "'")).code =
            "MODULE_NOT_FOUND"),
          e)
        );
      }
      (n = i[t] = { exports: {} }),
        r[t][0].call(
          n.exports,
          function (e) {
            return u(r[t][1][e] || e);
          },
          n,
          n.exports,
          o,
          r,
          i,
          c
        );
    }
    return i[t].exports;
  }
  for (
    var l = "function" == typeof require && require, e = 0;
    e < c.length;
    e++
  )
    u(c[e]);
  return u;
})(
  {
    1: [
      function (e, t, n) {
        (function () {
          for (
            var o = document.getElementsByClassName("text-for-circle-in-js"),
              r = {
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
              },
              e = 0;
            e < o.length;
            e++
          ) {
            var t = (function (e) {
              var n,
                t = o[e];
              return t instanceof HTMLElement
                ? ((n = 360 / ((t = t.outerText.toUpperCase()).length + 1)),
                  void (o[e].innerHTML = t
                    .split("")
                    .map(function (e, t) {
                      return '<span class="circle-text" style="--rot:'
                        .concat(t * n + (r[e] || 0), 'deg">')
                        .concat(e, "</span>");
                    })
                    .join("")))
                : { value: void 0 };
            })(e);
            if ("object" == typeof t) return t.value;
          }
        })(),
          (o = document.querySelector(".mobile-menu")),
          (a = document.querySelector(".burger-button")),
          (r = document.querySelector(".close-button")),
          o &&
            a &&
            r &&
            window.innerWidth < 745 &&
            (a.addEventListener("click", function () {
              o.style.left = "0";
            }),
            r.addEventListener("click", function () {
              o.style.left = "-100%";
            })),
          define(
            "phoneNumber",
            ["require", "exports", "vanilla-text-mask"],
            function (e, t, n) {
              "use strict";
              (t.__esModule = !0),
                (t = document.querySelector("#phone")),
                n.default.maskInput({
                  inputElement: t,
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
            }
          );
        var o,
          r,
          i,
          c = document.querySelectorAll(".tagline-h1"),
          u = "symbol-",
          l = 0;
        (function () {
          for (var e = 0; e < c.length; e++) {
            var t = c[e].textContent;
            if (!t || window.innerWidth < 1023) return;
            var n = t.split(""),
              o = t.length;
            c[e].innerHTML = "";
            for (var r = 0; r < o; r++)
              (c[e].innerHTML += '<span class="opacity-0-styling" id="'
                .concat(u)
                .concat(l, '">')
                .concat(n[r], "</span>")),
                l++;
          }
          l = 0;
        })(),
          (i = setInterval(function () {
            var e = document.querySelector("#".concat(u).concat(l));
            e ? (e.classList.add("opacity-1-styling"), l++) : clearInterval(i);
          }, 100));
        var a = document.querySelector(".text-on-video-div"),
          d = document.querySelector(".text-on-video-p"),
          s = document.querySelector(".play-button"),
          f = document.querySelector(".video"),
          p = !1;
        if (!(a && d && s && f))
          throw Error(
            "Can`t fined elements with classes (.text-on-video-div || .text-on-video-p || .play-button || .video)"
          );
        a.addEventListener("click", function () {
          p
            ? ((p = !1),
              f.pause(),
              (d.style.opacity = "0.99"),
              (s.style.opacity = "0.5"))
            : ((p = !0),
              f.play(),
              (d.style.opacity = "0"),
              (s.style.opacity = "0"));
        });
      },
      {},
    ],
  },
  {},
  [1]
);
//# sourceMappingURL=app.js.map
