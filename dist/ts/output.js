function textAnimationWithOpacityTS() {
  var n,
    i = document.querySelectorAll(".tagline-h1"),
    o = "symbol-",
    r = 0;
  !(function () {
    for (var t = 0; t < i.length; t++) {
      var n = i[t].textContent;
      if (!n) return;
      var a = n.split(""),
        c = n.length;
      i[t].innerHTML = "";
      for (var e = 0; e < c; e++)
        (i[t].innerHTML += '<span class="opacity-0-styling" id="'
          .concat(o)
          .concat(r, '">')
          .concat(a[e], "</span>")),
          r++;
    }
    r = 0;
  })(),
    (n = setInterval(function () {
      var t = document.querySelector("#".concat(o).concat(r));
      t ? (t.classList.add("opacity-1-styling"), r++) : clearInterval(n);
    }, 100));
}
textAnimationWithOpacityTS();
