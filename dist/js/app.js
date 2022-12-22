!(function r(o, u, i) {
  function c(t, e) {
    if (!u[t]) {
      if (!o[t]) {
        var n = "function" == typeof require && require;
        if (!e && n) return n(t, !0);
        if (f) return f(t, !0);
        throw (
          (((e = new Error("Cannot find module '" + t + "'")).code =
            "MODULE_NOT_FOUND"),
          e)
        );
      }
      (n = u[t] = { exports: {} }),
        o[t][0].call(
          n.exports,
          function (e) {
            return c(o[t][1][e] || e);
          },
          n,
          n.exports,
          r,
          o,
          u,
          i
        );
    }
    return u[t].exports;
  }
  for (
    var f = "function" == typeof require && require, e = 0;
    e < i.length;
    e++
  )
    c(i[e]);
  return c;
})(
  {
    1: [
      function (e, t, n) {
        e("./mobileMenu");
      },
      { "./mobileMenu": 2 },
    ],
    2: [
      function (e, t, n) {
        {
          const r = document.querySelector(".mobile-menu"),
            o = document.querySelector(".burger-button"),
            u = document.querySelector(".close-button");
          r &&
            o &&
            u &&
            window.innerWidth < 745 &&
            (o.addEventListener("click", () => {
              r.style.left = "0";
            }),
            u.addEventListener("click", () => {
              r.style.left = "-100%";
            }));
        }
      },
      {},
    ],
  },
  {},
  [1]
);
//# sourceMappingURL=app.js.map
