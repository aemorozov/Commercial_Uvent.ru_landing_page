const h1_1 = document.querySelector(".h1_1");
const h1_1Arr = h1_1.textContent.split("");

let time = 1;
let i = 0;
let y = 0;
// let symbol = ''

h1_1.innerHTML = "";

addSpanToAllSymbols();
setTimeout(addClassWithOpacity1, 3000);

function addSpanToAllSymbols() {
  const intervalFirstLine = setInterval(() => {
    if (h1_1Arr[i] !== undefined) {
      h1_1.innerHTML += `<span class="opacity-0-styling" id="symbol-${i}">${h1_1Arr[i]}</span>`;
      i++;
    } else {
      clearInterval(intervalFirstLine);
      i = 0;
    }
  }, time);
}

function addClassWithOpacity1() {
  for (y = 0; y < h1_1Arr.length; y++) {
    console.log(h1_1.querySelector(`#symbol-${y}`));
    setTimeout(() => {
      h1_1.querySelector(`#symbol-${y}`).classList.add("opacity-1-styling");
    }, 300);
  }

  // symbol = document.getElementById(`${i}`)
  // symbol.classList.add('opacity-1-styling')
}
