const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const operators = ["%", "/", "*", "+", "-", "="];
let output = "";

const calculate = (btnValue) => {
  if (btnValue === "Enter") {
    btnValue = "=";
  }
  if (btnValue === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL" || btnValue === "Backspace") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && operators.includes(btnValue)) return;
    if (operators.includes(btnValue) && operators.includes(output.at(-1)))
      return;
    output += btnValue;
  }
  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.innerText));
});
document.addEventListener("keypress", (e) => {
  calculate(e.key);
});
document.addEventListener("keydown", (e) => {
  return e.key == "Backspace" && calculate(e.key);
});
