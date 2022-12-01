const h1Array = document.querySelectorAll(".tagline-h1");
let arrayLength = 0;
let textSplit = "";
let numberOfSymbol = 0;
let arrayTextSplit = [];

addOpacity0();
addOpacity1();

function addOpacity0() {
  for (let x = 0; x < h1Array.length; x++) {
    // запускаем цикл, который берёт каждую строчку и добавляем прозрачности каждому символу
    textSplit = h1Array[x].textContent.split(""); // делаем сплит по символам и заносим в переменную
    arrayLength = h1Array[x].textContent.length; // сохраняем значение длины строки
    h1Array[x].innerHTML = ""; // опустошаем строку

    for (let i = 0; i < arrayLength; i++) {
      // запускаем цикл для каждого символа в строке
      h1Array[x].innerHTML +=
        // вкладываем вместо каждой буквы тег SPAN с уникальным ID, opacity = 0 и тем символом, что мы забрали
        `<span class="opacity-0-styling" id="symbol-${numberOfSymbol}">${textSplit[i]}</span>`;
      numberOfSymbol++; // увеличиваем ID на 1 и повторяем цикл для следующего символа
    }
  } // завершаем работу со строкой и переходим к следующей строке

  numberOfSymbol = 0; // обнуляем переменную для следующего цикла
}

function addOpacity1() {
  setInterval(() => {
    // задаём интервал для добавления класса с opacity = 1 каждому символу по ID
    document
      .querySelector(`#symbol-${numberOfSymbol}`) // забираем каждый символ по порядку по ID
      .classList.add("opacity-1-styling"); // добавляем класс
    numberOfSymbol++; // добавляем +1 для запуска цикла со следующим символом
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
