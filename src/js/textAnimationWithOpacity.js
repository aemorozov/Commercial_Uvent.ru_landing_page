const h1Array = document.querySelectorAll(".tagline-h1");
let symbolNumber = 0;

let h1ArrayLength;
let textAfterSplit;
let arrayTextSplit;
let varForInterval;
let symbol;

addOpacity0();
addOpacity1();

function addOpacity0() {
  for (let rowNumber = 0; rowNumber < h1Array.length; rowNumber++) {
    // запускаем цикл, который берёт каждую строчку и добавляем прозрачности каждому символу
    textAfterSplit = h1Array[rowNumber].textContent.split(""); // делаем сплит по символам и заносим в переменную
    h1ArrayLength = h1Array[rowNumber].textContent.length; // сохраняем значение длины строки
    h1Array[rowNumber].innerHTML = ""; // опустошаем строку

    for (let i = 0; i < h1ArrayLength; i++) {
      // запускаем цикл для каждого символа в строке
      h1Array[rowNumber].innerHTML +=
        // вкладываем вместо каждой буквы тег SPAN с уникальным ID, opacity = 0 и тем символом, что мы забрали
        `<span class="opacity-0-styling" id="symbol-${symbolNumber}">${textAfterSplit[i]}</span>`;
      symbolNumber++; // увеличиваем ID на 1 и повторяем цикл для следующего символа
    }
  } // завершаем работу со строкой и переходим к следующей строке

  symbolNumber = 0; // обнуляем переменную для следующей функции
}

function addOpacity1() {
  varForInterval = setInterval(() => {
    symbol = document.querySelector(`#symbol-${symbolNumber}`); // забираем этот символ по ID
    if (symbol) {
      // если такой символ с таким ID существует, то...
      symbol.classList.add("opacity-1-styling"); // добавляем класс
      symbolNumber++; // добавляем к ID +1 для запуска цикла со следующим символом
    }
  }, 20); // можно менять время задержки появления букв в мс
}

// =================================================
// if (y < h1_1Arr.length) {
//     h1_1.querySelector(`#symbol-${y}`).classList.add("opacity-1-styling");
//     y++;
// } else {
//     clearInterval(addOpacity1);
// }

// console.log(h1Array)

// const h1_1 = document.querySelector(".h1_1");
// const h1_2 = document.querySelector(".h1_2");
// const h1_3 = document.querySelector(".h1_3");
// const h1_1Arr = h1_1.textContent.split("");
// const h1_2Arr = h1_1.textContent.split("");
// const h1_3Arr = h1_1.textContent.split("");

// let y = 0;
// let addOpacity1 = 0;

// h1_1.innerHTML = "";
// h1_2.innerHTML = "";
// h1_3.innerHTML = "";

// addSpanToAllSymbols();
// addOpacity1 = setInterval(addClassWithOpacity1, 20);

// function addSpanToAllSymbols() {
//     for (let i = 0; i < h1_1Arr.length; i++) {
//         h1_1.innerHTML += `<span class="opacity-0-styling" id="symbol-${i}">${h1_1Arr[i]}</span>`;
//     }
// }

// function addClassWithOpacity1() {
//     if (y < h1_1Arr.length) {
//         h1_1.querySelector(`#symbol-${y}`).classList.add("opacity-1-styling");
//         y++;
//     } else {
//         clearInterval(addOpacity1);
//     }
// }
