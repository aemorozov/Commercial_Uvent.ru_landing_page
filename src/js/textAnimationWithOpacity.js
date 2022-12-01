const h1Array = document.querySelectorAll(".tagline-h1");
let arrayLength = 0;
let textSplit = "";
let y = 0;
let numberOfSymbol = 0;
let arrayTextSplit = [];

for (let x = 0; x < h1Array.length; x++) {
  textSplit = h1Array[x].textContent.split("");
  arrayLength = h1Array[x].textContent.length;
  h1Array[x].innerHTML = "";
  for (let i = 0; i < arrayLength; i++) {
    h1Array[
      x
    ].innerHTML += `<span class="opacity-0-styling" id="symbol-${y}">${textSplit[i]}</span>`;
    y++;
  }
}

setInterval(() => {
  document
    .querySelector(`#symbol-${numberOfSymbol}`)
    .classList.add("opacity-1-styling");
  numberOfSymbol++;
}, 20);

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
