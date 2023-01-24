makeCircleText()

function makeCircleText() {
    const collection = document.getElementsByClassName("text-for-circle-in-js");

    const correctionForSymbols: Record<string, number> = {
    А: 0,
    В: 0.5,
    Д: -1,
    Е: 0,
    Ж: -1.8,
    И: -0.5,
    М: -1,
    Н: -0.5,
    О: -0.5,
    П: 0.5,
    Р: 1,
    У: 1,
    Ы: -1,
    Ь: 0,
    Ю: -0.5,
    Я: -1,
    };

  for (let i = 0; i < collection.length; i++) {

    const element = collection[i];
    
    if (!(element instanceof HTMLElement)) {
      return;
    }

    const collectionElementText = element.outerText.toUpperCase();
    const rotation = 360 / (collectionElementText.length + 1);

    collection[i].innerHTML = collectionElementText
      .split("")
      .map(
        (symbol, index) =>
          `<span class="circle-text" style="--rot:${
            index * rotation + (correctionForSymbols[symbol] || 0)
          }deg">${symbol}</span>`
      )
      .join("");
  }
}