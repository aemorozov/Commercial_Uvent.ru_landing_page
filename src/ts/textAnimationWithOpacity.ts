textAnimationWithOpacityTS();

function textAnimationWithOpacityTS(): void {
  type OnlyPrefixSymbol = "symbol-"
  type Only100 = 100
  
  const h1Array: NodeListOf<Element> = document.querySelectorAll(".tagline-h1");
  const prefixForID: OnlyPrefixSymbol = "symbol-";
  const speed: Only100 = 100;
  let symbolID: number = 0;

  addSpansWithOpacity0();
  addOpacity1();

  function addSpansWithOpacity0(): void {
    for (let rowNumber = 0; rowNumber < h1Array.length; rowNumber++) {
      const textContent: string | null = h1Array[rowNumber].textContent;
      
      if (!textContent || window.innerWidth < 1023) {
        return
      }
      
      const textContentAfterSplit: Array<String> = textContent.split("");
      const textContentLength: number = textContent.length;
      
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

  function addOpacity1(): void {
    const forCleanInterval: NodeJS.Timer = setInterval((): void => {
      let symbol: Element | null = document.querySelector(`#${prefixForID}${symbolID}`);
      if (symbol) {
        symbol.classList.add("opacity-1-styling");
        symbolID++;
      } else clearInterval(forCleanInterval);
    }, speed);
  }
}
