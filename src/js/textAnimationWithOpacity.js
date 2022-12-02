// Мы исходим из того, что у нас 3 строки разной длины с классом tagline-h1
// и нам нужно отрисовать каждый символ поочерёдно в той же строке, где он находится

const h1Array = document.querySelectorAll(".tagline-h1");
const prefixForID = "symbol-";
let symbolNumber = 0;

addSpansWithOpacity0();
addOpacity1();

function addSpansWithOpacity0() {
  for (let rowNumber = 0; rowNumber < h1Array.length; rowNumber++) {
    let textContent = h1Array[rowNumber].textContent;
    let textAfterSplit = textContent.split("");
    let h1ArrayLength = textContent.length;
    h1Array[rowNumber].innerHTML = "";

    for (let i = 0; i < h1ArrayLength; i++) {
      h1Array[
        rowNumber
      ].innerHTML += `<span class="opacity-0-styling" id="${prefixForID}${symbolNumber}">${textAfterSplit[i]}</span>`;
      symbolNumber++;
    }
  }
  symbolNumber = 0;
}

function addOpacity1() {
  const forCleanInterval = setInterval(() => {
    let symbol = document.querySelector(`#${prefixForID}${symbolNumber}`);
    if (symbol) {
      symbol.classList.add("opacity-1-styling");
      symbolNumber++;
    } else clearInterval(forCleanInterval);
  }, 100);
}
