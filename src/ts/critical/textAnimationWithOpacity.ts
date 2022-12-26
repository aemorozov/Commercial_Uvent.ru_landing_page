const h1Array = document.querySelectorAll(".tagline-h1");
const prefixForID = "symbol-";
const speed = 100;
let symbolID = 0;

addSpansWithOpacity0();

setTimeout(addOpacity1, 1000)


function addSpansWithOpacity0() {
  for (let rowNumber = 0; rowNumber < h1Array.length; rowNumber++) {
    const textContent = h1Array[rowNumber].textContent;
    
    if (!textContent) {
      return
    }
    
    const textContentAfterSplit = textContent.split("");
    const textContentLength = textContent.length;
    
    h1Array[rowNumber].innerHTML = "";

    for (let i = 0; i < textContentLength; i++) {
      h1Array[
        rowNumber
      ].innerHTML += `<span class="opacity-0-styling" id="${prefixForID}${symbolID}">${textContentAfterSplit[i]}</span>`;
      symbolID++;
    }
  }
  symbolID = 0;
}

function addOpacity1() {
  const forCleanInterval = setInterval(() => {
    let symbol = document.querySelector(`#${prefixForID}${symbolID}`);
    if (symbol) {
      symbol.classList.add("opacity-1-styling");
      symbolID++;
    } else clearInterval(forCleanInterval);
  }, speed);
}
