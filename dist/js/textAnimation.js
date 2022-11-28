const h1_1 = document.querySelector(".h1_1"),
  h1_2 = document.querySelector(".h1_2"),
  h1_3 = document.querySelector(".h1_3"),
  h1_1Arr = h1_1.textContent.split(""),
  h1_2Arr = h1_2.textContent.split(""),
  h1_3Arr = h1_3.textContent.split("");
let i = 0,
  time = 25,
  interval = 2,
  timeToSecondString = h1_1Arr.length * time * interval,
  timeToThirdString = timeToSecondString + h1_2Arr.length * time * interval;
function firstLine() {
  const e = setInterval(() => {
    void 0 !== h1_1Arr[i]
      ? ((h1_1.innerHTML += h1_1Arr[i]), i++)
      : (clearInterval(e), (i = 0));
  }, time);
}
function secondLine() {
  let e = setInterval(() => {
    void 0 !== h1_2Arr[i]
      ? ((h1_2.innerHTML += h1_2Arr[i]), i++)
      : (clearInterval(e), (i = 0));
  }, time);
}
function thirdLine() {
  let e = setInterval(() => {
    void 0 !== h1_3Arr[i]
      ? ((h1_3.innerHTML += h1_3Arr[i]), i++)
      : (clearInterval(e), (i = 0));
  }, time);
}
firstLine(),
  setTimeout(secondLine, timeToSecondString),
  setTimeout(thirdLine, timeToThirdString),
  (h1_1.innerHTML = ""),
  (h1_2.innerHTML = ""),
  (h1_3.innerHTML = "");
