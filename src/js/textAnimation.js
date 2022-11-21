const h1_1 = document.querySelector(".h1_1"); // забираем из HTML тег H1 с id = h1_1
const h1_2 = document.querySelector(".h1_2"); // забираем из HTML тег H1 с id = h1_2
const h1_3 = document.querySelector(".h1_3"); // забираем из HTML тег H1 с id = h1_3

const h1_1Arr = h1_1.textContent.split(""); // превращаем вложенный текст в массив по символам
// const h1_2Arr = h1_2.textContent.split('')
// const h1_3Arr = h1_3.textContent.split('')

let i = 0; // с 0-го значения начинается отсчёт массива для появления символов
let time = 90; // задаём время между появлением символов в мс
let interval = 1.2; // задаём интервал между строками

// let timeToSecondString = h1_1Arr.length * time * interval       // задаём время до появления второй строки используя длину первой строки
// let timeToThirdString = timeToSecondString + h1_2Arr.length * time * interval       // задаём время до появления третьей строки используя длину первой строки

firstLine(); // запускаем вторую строку через время, когда кончится первая
// setTimeout(secondLine, timeToSecondString + 500)          // запускаем вторую строку через время, когда кончится первая
// setTimeout(thirdLine, timeToThirdString + 500)          // запускаем вторую строку через время, когда кончится первая

h1_1.innerHTML = ""; // опустошаем вложенный текст в документе
// h1_2.innerHTML = ''
// h1_3.innerHTML = ''

function firstLine() {
  // создаём функцию для появления первой строки
  const intervalFirstLine = setInterval(() => {
    // создаём переменную, в которую вкладываем функцию с интервалом
    if (h1_1Arr[i] !== undefined) {
      // описываем условие, если в массиве под индексом i есть какие-то данные, то...
      h1_1.innerHTML += h1_1Arr[i]; // в тег H1 вкладываем символ из массива, сохраняя ранее вложенные данные
      i++; // увеличиваем номер индекса для следующей проверки
    } else {
      // а если значение под индексом не определено, то...
      clearInterval(intervalFirstLine); // останавливаем выполнение функции
      i = 0; // присваиваем i снова 0
    }
  }, time); // задаем время для каждой итерации
}

// function secondLine() {                             // делаем тоже самое для второй строки
//     let intervalSecondLine = setInterval(() => {
//         if (h1_2Arr[i] !== undefined) {
//             h1_2.innerHTML += h1_2Arr[i]
//             i++
//         } else {
//             clearInterval(intervalSecondLine)
//             i = 0                                   // присваиваем i снова 0
//             h1_2.style.border = '0px'
//         }
//     }, time)
// }

// function thirdLine() {                             // делаем тоже самое для третей строки
//     let intervalThirdLine = setInterval(() => {
//         if (h1_3Arr[i] !== undefined) {
//             h1_3.innerHTML += h1_3Arr[i]
//             i++
//         } else {
//             clearInterval(intervalThirdLine)
//             h1_3.style.border = '0px'
//         }
//     }, time)
// }
