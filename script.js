const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const operators = ["%", "/", "*", "+", "-", "="];
const liKeys = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "Backspace",
  "Enter",
];
let output = "";

const calculate = (btnValue) => {
  if (btnValue === "Enter") {
    btnValue = "=";
  }
  if (btnValue === "=" && output !== "") {
    output = eval(output.replace("%", "/100")).toString();
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL" || btnValue === "Backspace") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && operators.includes(btnValue)) return;
    if (operators.includes(output.at(-1)) && operators.includes(btnValue))
      return;
    output += btnValue;
  }
  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.innerText));
});
document.addEventListener("keydown", (e) => {
  if (liKeys.includes(e.key) || operators.includes(e.key)) {
    calculate(e.key);
  }
});
