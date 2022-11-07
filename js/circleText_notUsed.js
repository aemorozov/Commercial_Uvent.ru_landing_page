// забираем все элементы с классом text-for-circle-in-js в одну коллекцию
const collection = document.getElementsByClassName("text-for-circle-in-js");

// создаём объект, где лежат коррекции для каждого символа
const correctionForSymbols = {
  А: 0.5,
  Б: 0,
  В: 0.5,
  Г: 0,
  Д: 0,
  Е: 1,
  Ё: 0,
  Ж: -1.8,
  З: 0,
  И: -0.5,
  Й: 0,
  К: 0,
  Л: 0,
  М: 0,
  Н: -0.5,
  О: -1,
  П: 1,
  Р: 0,
  С: 0,
  Т: 0,
  У: 1,
  Ф: 0,
  Х: 0,
  Ц: 0,
  Ч: 0,
  Ш: 0,
  Щ: 0,
  Ъ: 0,
  Ы: -1,
  Ь: 1,
  Э: 0,
  Ю: 0,
  Я: -1,
};

// передаём всю коллекцию в функцию для поочерёдной обработки
makeCircleText(collection);

function makeCircleText(collection) {
  // берём по очереди каждый элемент (строку из HTML) коллекции text
  for (let i = 0; i < collection.length; i++) {
    // создаём переменную для элемента коллекции
    const collectionElement = collection[i];
    // забираем весь текст из элемента и переводим его в верхний регистр
    const collectionElementText = collectionElement.outerText.toUpperCase();
    // высчитываем равные координаты для установки каждого символа в строке
    const rotation = 360 / (collectionElementText.length + 1);

    // пересобираем текст и добавляем каждому символу координату вдоль окружности плюс коррекцию
    collectionElement.innerHTML = collectionElementText
      .split("")
      .map(
        (symbol, index) =>
          `<span class="circle-text" style="--rot:${
            index * rotation + correctionForSymbols[symbol]
          }deg">${symbol}</span>`
      )
      .join("");
  }
}

// const makeCircleText = (blockClass, text) => {
//   const rotation = 360 / text.length;

//   document.querySelector(blockClass).innerHTML = text
//     .split("")
//     .map(
//       (symbol, index) =>
//         `<span class="circle-text" style="--rot:${index * rotation
//         }deg">${symbol}</span>`
//     )
//     .join("");
// };

// makeCircleText(
//   ".block4-2-circle1-text",
//   "С В А Д Ь Б Ы    С В А Д Ь Б Ы    С В А Д Ь Б Ы    С В А Д Ь Б Ы    С В А Д Ь Б Ы   "
// );

// makeCircleText(
//   ".block4-2-circle2-text",
//   "В Ы П У С К Н Ы Е   В Ы П У С К Н Ы Е   В Ы П У С К Н Ы Е   В Ы П У С К Н Ы Е   "
// );

// makeCircleText(
//   ".block4-2-circle3-text",
//   "Д Н И  Р О Ж Д Е Н И Я  Д Н И  Р О Ж Д Е Н И Я  Д Н И  Р О Ж Д Е Н И Я   "
// );

// document.querySelector(".block4-2-circle1-text").innerHTML =
//   "С В А Д Ь Б Ы    С В А Д Ь Б Ы    С В А Д Ь Б Ы    С В А Д Ь Б Ы    С В А Д Ь Б Ы"
//     .split("")
//     .map(
//       (e, i) =>
//         `<span class="circle-text" style="--rot:${i * 4.2}deg">${e}</span>`
//     )
//     .join("");

// document.querySelector(".block4-2-circle2-text").innerHTML =
//   "В Ы П У С К Н Ы Е   В Ы П У С К Н Ы Е   В Ы П У С К Н Ы Е   В Ы П У С К Н Ы Е"
//     .split("")
//     .map(
//       (e, i) =>
//         `<span class="circle-text" style="--rot:${i * 4.5}deg">${e}</span>`
//     )
//     .join("");

// document.querySelector(".block4-2-circle3-text").innerHTML =
//   "ДНИ  РОЖДЕНИЯ  ДНИ  РОЖДЕНИЯ  ДНИ  РОЖДЕНИЯ"
//     .split("")
//     .map(
//       (e, i) =>
//         `<span class="circle-text" style="--rot:${i * 8}deg">${e}</span>`
//     )
//     .join("");
