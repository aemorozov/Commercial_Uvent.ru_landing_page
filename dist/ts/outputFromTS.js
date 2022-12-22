makeCircleText();
function makeCircleText() {
  // забираем все элементы с классом text-for-circle-in-js в одну коллекцию
  var collection = document.getElementsByClassName("text-for-circle-in-js");
  // создаём объект, где лежат коррекции для каждого символа
  var correctionForSymbols = {
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
  var _loop_1 = function (i) {
    var element = collection[i];
    if (!(element instanceof HTMLElement)) {
      return { value: void 0 };
    }
    // забираем весь текст из DOM элемента коллекции и переводим его в верхний регистр
    // const collectionElementText = collection[i].outerText.toUpperCase();
    var collectionElementText = element.outerText.toUpperCase();
    // делим полную окружность на количество элементов в строке + 1 пробел
    var rotation = 360 / (collectionElementText.length + 1);
    // пересобираем текст и добавляем каждому символу координату вдоль окружности плюс коррекцию
    collection[i].innerHTML = collectionElementText
      .split("")
      .map(function (symbol, index) {
        return '<span class="circle-text" style="--rot:'
          .concat(
            index * rotation + (correctionForSymbols[symbol] || 0),
            'deg">'
          )
          .concat(symbol, "</span>");
      })
      .join("");
  };
  // берём по очереди каждый DOM элемент коллекции text
  for (var i = 0; i < collection.length; i++) {
    var state_1 = _loop_1(i);
    if (typeof state_1 === "object") return state_1.value;
  }
}
mobileMenu();
function mobileMenu() {
  var mobileMenu = document.querySelector(".mobile-menu");
  var burger = document.querySelector(".burger-button");
  var closeButton = document.querySelector(".close-button");
  if (mobileMenu && burger && closeButton && window.innerWidth < 745) {
    burger.addEventListener("click", function () {
      mobileMenu.style.left = "0";
    });
    closeButton.addEventListener("click", function () {
      mobileMenu.style.left = "-100%";
    });
  }
}
var h1Array = document.querySelectorAll(".tagline-h1");
var prefixForID = "symbol-";
var speed = 100;
var symbolID = 0;
addSpansWithOpacity0();
addOpacity1();
function addSpansWithOpacity0() {
  for (var rowNumber = 0; rowNumber < h1Array.length; rowNumber++) {
    var textContent = h1Array[rowNumber].textContent;
    if (!textContent || window.innerWidth < 1023) {
      return;
    }
    var textContentAfterSplit = textContent.split("");
    var textContentLength = textContent.length;
    h1Array[rowNumber].innerHTML = "";
    for (var i = 0; i < textContentLength; i++) {
      h1Array[rowNumber].innerHTML += '<span class="opacity-0-styling" id="'
        .concat(prefixForID)
        .concat(symbolID, '">')
        .concat(textContentAfterSplit[i], "</span>");
      symbolID++;
    }
  }
  symbolID = 0;
}
function addOpacity1() {
  var forCleanInterval = setInterval(function () {
    var symbol = document.querySelector(
      "#".concat(prefixForID).concat(symbolID)
    );
    if (symbol) {
      symbol.classList.add("opacity-1-styling");
      symbolID++;
    } else clearInterval(forCleanInterval);
  }, speed);
}
var textBlock = document.querySelector(".text-on-video-div");
var text = document.querySelector(".text-on-video-p");
var playButton = document.querySelector(".play-button");
var video = document.querySelector(".video");
var play = false;
if (textBlock && text && playButton && video) {
  textBlock.addEventListener("click", function () {
    if (play) {
      play = false;
      video.pause();
      text.style.opacity = "0.99";
      playButton.style.opacity = "0.5";
    } else {
      play = true;
      video.play();
      text.style.opacity = "0";
      playButton.style.opacity = "0";
    }
  });
} else {
  throw Error(
    "Can`t fined elements with classes (.text-on-video-div || .text-on-video-p || .play-button || .video)"
  );
}

//# sourceMappingURL=outputFromTS.js.map
