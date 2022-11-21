const collection = document.getElementsByClassName("text-for-circle-in-js"),
  correctionForSymbols = {
    А: 0.5,
    В: 0.5,
    Е: 1,
    Ж: -1.8,
    И: -0.5,
    Н: -0.5,
    О: -1,
    П: 1,
    У: 1,
    Ы: -1,
    Ь: 1,
    Я: -1,
  };
function makeCircleText(t) {
  for (let e = 0; e < t.length; e++) {
    var o = t[e].outerText.toUpperCase();
    const c = 360 / (o.length + 1);
    t[e].innerHTML = o
      .split("")
      .map(
        (e, t) =>
          `<span class="circle-text" style="--rot:${
            t * c + (correctionForSymbols[e] || 0)
          }deg">${e}</span>`
      )
      .join("");
  }
}
makeCircleText(collection);
