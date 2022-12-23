!(function o(r, c, i) {
  function l(t, e) {
    if (!c[t]) {
      if (!r[t]) {
        var n = "function" == typeof require && require;
        if (!e && n) return n(t, !0);
        if (u) return u(t, !0);
        throw (
          (((e = new Error("Cannot find module '" + t + "'")).code =
            "MODULE_NOT_FOUND"),
          e)
        );
      }
      (n = c[t] = { exports: {} }),
        r[t][0].call(
          n.exports,
          function (e) {
            return l(r[t][1][e] || e);
          },
          n,
          n.exports,
          o,
          r,
          c,
          i
        );
    }
    return c[t].exports;
  }
  for (
    var u = "function" == typeof require && require, e = 0;
    e < i.length;
    e++
  )
    l(i[e]);
  return l;
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
            }));
        var o,
          r,
          c,
          i = document.querySelectorAll(".tagline-h1"),
          l = "symbol-",
          u = 0;
        (function () {
          for (var e = 0; e < i.length; e++) {
            var t = i[e].textContent;
            if (!t || window.innerWidth < 1023) return;
            var n = t.split(""),
              o = t.length;
            i[e].innerHTML = "";
            for (var r = 0; r < o; r++)
              (i[e].innerHTML += '<span class="opacity-0-styling" id="'
                .concat(l)
                .concat(u, '">')
                .concat(n[r], "</span>")),
                u++;
          }
          u = 0;
        })(),
          (c = setInterval(function () {
            var e = document.querySelector("#".concat(l).concat(u));
            e ? (e.classList.add("opacity-1-styling"), u++) : clearInterval(c);
          }, 100));
        var a = document.querySelector(".text-on-video-div"),
          s = document.querySelector(".text-on-video-p"),
          d = document.querySelector(".play-button"),
          f = document.querySelector(".video"),
          y = !1;
        if (!(a && s && d && f))
          throw Error(
            "Can`t fined elements with classes (.text-on-video-div || .text-on-video-p || .play-button || .video)"
          );
        a.addEventListener("click", function () {
          y
            ? ((y = !1),
              f.pause(),
              (s.style.opacity = "0.99"),
              (d.style.opacity = "0.5"))
            : ((y = !0),
              f.play(),
              (s.style.opacity = "0"),
              (d.style.opacity = "0"));
        });
      },
      {},
    ],
  },
  {},
  [1]
);
//# sourceMappingURL=app.js.map
