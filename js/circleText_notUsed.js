const text = document.getElementsByClassName("text-for-circle-in-js");
// забираем все элементы с классом text-for-circle-in-js в одну коллекцию

const correctionCollection = {
  // создаём объект, где лежат коррекции для каждого символа
  А: 0.5,
  Б: 0.5,
  В: 0,
  Г: 0,
  Д: 1,
  Е: 1.5,
  Ё: 0,
  Ж: -1.8,
  З: 0,
  И: -0.5,
  Й: 0,
  К: 0,
  Л: 0,
  М: 0,
  Н: 0,
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
  Ы: 0,
  Ь: 2,
  Э: 0,
  Ю: 0,
  Я: -1,
};

makeCircleText(text);
// передаём всю коллекцию в функцию для поочерёдной обработки

function makeCircleText(text) {
  let rotation;
  // создаём пустую переменную для местоположения каждого символа
  let textToUpperCase;
  // создаём переменную для перевода текста в uppercase

  for (let i = 0; i < text.length; i++) {
    // берём по очереди каждый элемент (строку из HTML) коллекции text
    rotation = 360 / (text[i].outerText.length + 1);
    // высчитываем равные координаты для установки каждого символа в строке

    textToUpperCase = text[i].outerText.toUpperCase();
    // переводим весь текст в uppercase

    text[i].innerHTML = textToUpperCase
      // пересобираем текст и добавляем каждому символу координату вдоль окружности плюс коррекцию
      .split("")
      .map(
        (symbol, index) =>
          `<span class="circle-text" style="--rot:${
            index * rotation + correctionCollection[symbol]
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
