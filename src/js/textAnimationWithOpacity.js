const h1Array = document.querySelectorAll(".tagline-h1");
let symbolNumber = 0;

let h1ArrayLength;
let textAfterSplit;
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
  setInterval(() => {
    symbol = document.querySelector(`#symbol-${symbolNumber}`); // забираем этот символ по ID
    if (symbol) {
      console.log("test" + symbolNumber);
      // если такой символ с таким ID существует, то...
      symbol.classList.add("opacity-1-styling"); // добавляем класс
      symbolNumber++; // добавляем к ID +1 для запуска цикла со следующим символом
    }
  }, 20); // можно менять время задержки появления букв в мс
}
