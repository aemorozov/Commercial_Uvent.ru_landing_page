function makeCircleText() {
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
      t = 0;
    t < o.length;
    t++
  ) {
    var e = (function (t) {
      var e = o[t];
      if (!(e instanceof HTMLElement)) return { value: void 0 };
      var e = e.outerText.toUpperCase(),
        n = 360 / (e.length + 1);
      o[t].innerHTML = e
        .split("")
        .map(function (t, e) {
          return '<span class="circle-text" style="--rot:'
            .concat(e * n + (r[t] || 0), 'deg">')
            .concat(t, "</span>");
        })
        .join("");
    })(t);
    if ("object" == typeof e) return e.value;
  }
}
function mobileMenu() {
  var t = document.querySelector(".mobile-menu"),
    e = document.querySelector(".burger-button"),
    n = document.querySelector(".close-button");
  t &&
    e &&
    n &&
    window.innerWidth < 745 &&
    (e.addEventListener("click", function () {
      t.style.left = "0";
    }),
    n.addEventListener("click", function () {
      t.style.left = "-100%";
    }));
}
makeCircleText(), mobileMenu();
var h1Array = document.querySelectorAll(".tagline-h1"),
  prefixForID = "symbol-",
  speed = 100,
  symbolID = 0;
function addSpansWithOpacity0() {
  for (var t = 0; t < h1Array.length; t++) {
    var e = h1Array[t].textContent;
    if (!e || window.innerWidth < 1023) return;
    var n = e.split(""),
      o = e.length;
    h1Array[t].innerHTML = "";
    for (var r = 0; r < o; r++)
      (h1Array[t].innerHTML += '<span class="opacity-0-styling" id="'
        .concat(prefixForID)
        .concat(symbolID, '">')
        .concat(n[r], "</span>")),
        symbolID++;
  }
  symbolID = 0;
}
function addOpacity1() {
  var e = setInterval(function () {
    var t = document.querySelector("#".concat(prefixForID).concat(symbolID));
    t ? (t.classList.add("opacity-1-styling"), symbolID++) : clearInterval(e);
  }, speed);
}
addSpansWithOpacity0(), addOpacity1();
var textBlock = document.querySelector(".text-on-video-div"),
  text = document.querySelector(".text-on-video-p"),
  playButton = document.querySelector(".play-button"),
  video = document.querySelector(".video"),
  play = !1;
if (!(textBlock && text && playButton && video))
  throw Error(
    "Can`t fined elements with classes (.text-on-video-div || .text-on-video-p || .play-button || .video)"
  );
textBlock.addEventListener("click", function () {
  play
    ? ((play = !1),
      video.pause(),
      (text.style.opacity = "0.99"),
      (playButton.style.opacity = "0.5"))
    : ((play = !0),
      video.play(),
      (text.style.opacity = "0"),
      (playButton.style.opacity = "0"));
});
//# sourceMappingURL=app.js.map
