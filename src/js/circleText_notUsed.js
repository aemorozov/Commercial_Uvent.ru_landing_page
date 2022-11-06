const text = document.getElementsByClassName("text"); // забираем все элементы с классом text в коллекцию

makeCircleText(text); // всю коллекцию отдаём в функцию

function makeCircleText(text) {
  let rotation = 0; // создаём переменную для местоположения каждого символа

  for (i = 0; i < text.length; i++) {
    rotation = 360 / (text[i].outerText.length + 1); // в каждом элементе коллекции забираем текст

    text[i].innerHTML = text[i].innerHTML // и меняем его на круговой
      .split("")
      .map(
        (symbol, index) =>
          `<span class="circle-text" style="--rot:${
            index * rotation
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
