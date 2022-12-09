var h1Array = document.querySelectorAll(".tagline-h1"),
  prefixForID = "symbol-",
  speed = 100,
  symbolID = 0;
function addSpansWithOpacity0() {
  for (var a = 0; a < h1Array.length; a++) {
    var r = h1Array[a].textContent;
    if (!r || window.innerWidth < 1023) return;
    var t = r.split(""),
      n = r.length;
    h1Array[a].innerHTML = "";
    for (var e = 0; e < n; e++)
      (h1Array[a].innerHTML += '<span class="opacity-0-styling" id="'
        .concat(prefixForID)
        .concat(symbolID, '">')
        .concat(t[e], "</span>")),
        symbolID++;
  }
  symbolID = 0;
}
function addOpacity1() {
  var r = setInterval(function () {
    var a = document.querySelector("#".concat(prefixForID).concat(symbolID));
    a ? (a.classList.add("opacity-1-styling"), symbolID++) : clearInterval(r);
  }, speed);
}
addSpansWithOpacity0(), addOpacity1();
