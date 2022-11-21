const h1_1 = document.querySelector(".h1_1"),
  h1_2 = document.querySelector(".h1_2"),
  h1_3 = document.querySelector(".h1_3"),
  h1_1Arr = h1_1.textContent.split("");
let i = 0,
  time = 90,
  interval = 1.2;
function firstLine() {
  const e = setInterval(() => {
    void 0 !== h1_1Arr[i]
      ? ((h1_1.innerHTML += h1_1Arr[i]), i++)
      : (clearInterval(e), (i = 0));
  }, time);
}
firstLine(), (h1_1.innerHTML = "");
