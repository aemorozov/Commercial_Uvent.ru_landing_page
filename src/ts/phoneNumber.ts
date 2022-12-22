import vanillaTextMask from "vanilla-text-mask";

const phoneMask = [
  "+",
  "7",
  " ",
  "(",
  /[1-9]/,
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

const phoneInput = document.querySelector("#phone");

vanillaTextMask.maskInput({
  inputElement: phoneInput,
  mask: phoneMask,
});
