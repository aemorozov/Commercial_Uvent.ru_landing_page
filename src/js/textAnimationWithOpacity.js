// At first we have 3 rows with tagline-h1 class
// We need to paint all symbols in this rows one by one
// 1. We take all rows at DOM with class tagline-h1
// 2. We add new tag span with the unique id and opacity-0 class to the everyone symbols
// 3. We add opacity-1 class to the everyone id one by one

textAnimationWithOpacity();

function textAnimationWithOpacity() {
  const h1Array = document.querySelectorAll(".tagline-h1");
  const prefixForID = "symbol-";
  const speed = 100;
  let symbolID = 0;

  addSpansWithOpacity0();
  addOpacity1();

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
      const symbol = document.querySelector(`#${prefixForID}${symbolID}`);
      if (symbol) {
        symbol.classList.add("opacity-1-styling");
        symbolID++;
      } else clearInterval(forCleanInterval);
    }, speed);
  }
}
