const h1_1 = document.querySelector(".h1_1"),
  h1_1Arr = h1_1.textContent.split("");
let i = 0,
  time = 70;
function firstLine() {
  const t = setInterval(() => {
    void 0 !== h1_1Arr[i]
      ? ((h1_1.innerHTML += h1_1Arr[i]), i++)
      : (clearInterval(t), (i = 0));
  }, time);
}
firstLine(), (h1_1.innerHTML = "");
