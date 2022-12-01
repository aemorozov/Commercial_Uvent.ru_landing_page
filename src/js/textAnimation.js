const h1_1 = document.querySelector(".h1_1"); // забираем из HTML тег H1 с h1_1
const h1_2 = document.querySelector(".h1_2"); // забираем из HTML тег H1 с h1_1
const h1_3 = document.querySelector(".h1_3"); // забираем из HTML тег H1 с h1_1

const h1_1Arr = h1_1.textContent.split(""); // превращаем вложенный текст в массив по символам
const h1_2Arr = h1_2.textContent.split(""); // превращаем вложенный текст в массив по символам
const h1_3Arr = h1_3.textContent.split(""); // превращаем вложенный текст в массив по символам

let i = 0; // с 0-го значения начинается отсчёт массива для появления символов
let time = 25; // задаём время между появлением символов в мс
let interval = 2; // задаём интервал между строками

let timeToSecondString = h1_1Arr.length * time * interval; // задаём время до появления второй строки используя длину первой строки
let timeToThirdString = timeToSecondString + h1_2Arr.length * time * interval; // задаём время до появления второй строки используя длину первой строки

firstLine(); // запускаем первую функцию (строку) сразу
setTimeout(secondLine, timeToSecondString);
setTimeout(thirdLine, timeToThirdString);

h1_1.innerHTML = ""; // опустошаем вложенный текст в документе
h1_2.innerHTML = ""; // опустошаем вложенный текст в документе
h1_3.innerHTML = ""; // опустошаем вложенный текст в документе

function firstLine() {
  const intervalFirstLine = setInterval(() => {
    if (h1_1Arr[i] !== undefined) {
      h1_1.innerHTML += h1_1Arr[i]; // в тег H1 вкладываем символ из массива, сохраняя ранее вложенные данные
      i++; // увеличиваем номер индекса для следующей проверки
    } else {
      clearInterval(intervalFirstLine); // останавливаем выполнение функции
      i = 0; // присваиваем i снова 0
    }
  }, time); // задаем время для каждой итерации
}

function secondLine() {
  let intervalSecondLine = setInterval(() => {
    if (h1_2Arr[i] !== undefined) {
      h1_2.innerHTML += h1_2Arr[i];
      i++;
    } else {
      clearInterval(intervalSecondLine);
      i = 0;
    }
  }, time);
}

function thirdLine() {
  let intervalThirdLine = setInterval(() => {
    if (h1_3Arr[i] !== undefined) {
      h1_3.innerHTML += h1_3Arr[i];
      i++;
    } else {
      clearInterval(intervalThirdLine);
      i = 0;
    }
  }, time);
}
