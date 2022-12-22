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
      e = 0;
    e < o.length;
    e++
  ) {
    var t = (function (e) {
      var t = o[e];
      if (!(t instanceof HTMLElement)) return { value: void 0 };
      var t = t.outerText.toUpperCase(),
        n = 360 / (t.length + 1);
      o[e].innerHTML = t
        .split("")
        .map(function (e, t) {
          return '<span class="circle-text" style="--rot:'
            .concat(t * n + (r[e] || 0), 'deg">')
            .concat(e, "</span>");
        })
        .join("");
    })(e);
    if ("object" == typeof t) return t.value;
  }
}
function mobileMenu() {
  var e = document.querySelector(".mobile-menu"),
    t = document.querySelector(".burger-button"),
    n = document.querySelector(".close-button");
  e &&
    t &&
    n &&
    window.innerWidth < 745 &&
    (t.addEventListener("click", function () {
      e.style.left = "0";
    }),
    n.addEventListener("click", function () {
      e.style.left = "-100%";
    }));
}
makeCircleText(),
  mobileMenu(),
  define(
    "phoneNumber",
    ["require", "exports", "vanilla-text-mask"],
    function (e, t, n) {
      "use strict";
      t.__esModule = !0;
      t = document.querySelector("#phone");
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
var h1Array = document.querySelectorAll(".tagline-h1"),
  prefixForID = "symbol-",
  speed = 100,
  symbolID = 0;
function addSpansWithOpacity0() {
  for (var e = 0; e < h1Array.length; e++) {
    var t = h1Array[e].textContent;
    if (!t || window.innerWidth < 1023) return;
    var n = t.split(""),
      o = t.length;
    h1Array[e].innerHTML = "";
    for (var r = 0; r < o; r++)
      (h1Array[e].innerHTML += '<span class="opacity-0-styling" id="'
        .concat(prefixForID)
        .concat(symbolID, '">')
        .concat(n[r], "</span>")),
        symbolID++;
  }
  symbolID = 0;
}
function addOpacity1() {
  var t = setInterval(function () {
    var e = document.querySelector("#".concat(prefixForID).concat(symbolID));
    e ? (e.classList.add("opacity-1-styling"), symbolID++) : clearInterval(t);
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
