function makeCircleText() {
  for (
    var a = document.getElementsByClassName("text-for-circle-in-js"),
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
      t = 0;
    t < a.length;
    t++
  )
    !(function (t) {
      var n = a[t].innerHTML.toUpperCase(),
        e = 360 / (n.length + 1);
      a[t].innerHTML = n
        .split("")
        .map(function (t, n) {
          return '<span class="circle-text" style="--rot:'
            .concat(n * e + (r[t] || 0), 'deg">')
            .concat(t, "</span>");
        })
        .join("");
    })(t);
}
makeCircleText();
var h1Array = document.querySelectorAll(".tagline-h1"),
  prefixForID = "symbol-",
  speed = 100,
  symbolID = 0;
function addSpansWithOpacity0() {
  for (var t = 0; t < h1Array.length; t++) {
    var n = h1Array[t].textContent;
    if (!n || window.innerWidth < 1023) return;
    var e = n.split(""),
      a = n.length;
    h1Array[t].innerHTML = "";
    for (var r = 0; r < a; r++)
      (h1Array[t].innerHTML += '<span class="opacity-0-styling" id="'
        .concat(prefixForID)
        .concat(symbolID, '">')
        .concat(e[r], "</span>")),
        symbolID++;
  }
  symbolID = 0;
}
function addOpacity1() {
  var n = setInterval(function () {
    var t = document.querySelector("#".concat(prefixForID).concat(symbolID));
    t ? (t.classList.add("opacity-1-styling"), symbolID++) : clearInterval(n);
  }, speed);
}
addSpansWithOpacity0(), addOpacity1();
//# sourceMappingURL=outputFromTS.js.map
