function textAnimationWithOpacityTS() {
  var n,
    e = document.querySelectorAll(".tagline-h1"),
    o = "symbol-",
    r = 0;
  !(function () {
    for (var t = 0; t < e.length; t++) {
      var n = e[t].textContent;
      if (!n || window.innerWidth < 1023) return;
      var a = n.split(""),
        i = n.length;
      e[t].innerHTML = "";
      for (var c = 0; c < i; c++)
        (e[t].innerHTML += '<span class="opacity-0-styling" id="'
          .concat(o)
          .concat(r, '">')
          .concat(a[c], "</span>")),
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
