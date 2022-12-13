makeCircleText();

function makeCircleText() {
    // забираем все элементы с классом text-for-circle-in-js в одну коллекцию
    const collection = document.getElementsByClassName("text-for-circle-in-js");

    // создаём объект, где лежат коррекции для каждого символа
    const correctionForSymbols: any = {
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


  // берём по очереди каждый DOM элемент коллекции text
  for (let i = 0; i < collection.length; i++) {
    // забираем весь текст из DOM элемента коллекции и переводим его в верхний регистр
    const collectionElementText = collection[i].innerHTML.toUpperCase();
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