makeCircleText()

function makeCircleText() {
    // забираем все элементы с классом text-for-circle-in-js в одну коллекцию
    const collection = document.getElementsByClassName("text-for-circle-in-js");

    // создаём объект, где лежат коррекции для каждого символа
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
    Р: 0.5,
    У: 1,
    Ы: -1,
    Ь: 0,
    Ю: -0.5,
    Я: -1,
    };

  // берём по очереди каждый DOM элемент коллекции text
  for (let i = 0; i < collection.length; i++) {

    const element = collection[i];
    
    if (!(element instanceof HTMLElement)) {
      return;
    }

    // забираем весь текст из DOM элемента коллекции и переводим его в верхний регистр
    // const collectionElementText = collection[i].outerText.toUpperCase();
    const collectionElementText = element.outerText.toUpperCase();
    // делим полную окружность на количество элементов в строке + 1 пробел
    const rotation = 360 / (collectionElementText.length + 1);

    // пересобираем текст и добавляем каждому символу координату вдоль окружности плюс коррекцию
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