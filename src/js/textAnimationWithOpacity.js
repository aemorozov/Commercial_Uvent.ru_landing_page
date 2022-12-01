const h1_1 = document.querySelector(".h1_1");
const h1_2 = document.querySelector(".h1_2");
const h1_3 = document.querySelector(".h1_3");
const h1_1Arr = h1_1.textContent.split("");

let y = 0;
let addOpacity1 = 0;

h1_1.innerHTML = "";
h1_2.innerHTML = "";
h1_3.innerHTML = "";

addSpanToAllSymbols();
addOpacity1 = setInterval(addClassWithOpacity1, 20);

function addSpanToAllSymbols() {
  for (let i = 0; i < h1_1Arr.length; i++) {
    h1_1.innerHTML += `<span class="opacity-0-styling" id="symbol-${i}">${h1_1Arr[i]}</span>`;
  }
}

function addClassWithOpacity1() {
  if (y < h1_1Arr.length) {
    h1_1.querySelector(`#symbol-${y}`).classList.add("opacity-1-styling");
    y++;
  } else {
    clearInterval(addOpacity1);
  }
}
