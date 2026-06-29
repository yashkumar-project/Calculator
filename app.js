const acBtn = document.querySelector("#all-clear");
const delBtn = document.querySelector("#delete");
const percentageBtn = document.querySelector(".percentage");
const divisionBtn = document.querySelector(".division");
const multiplicationBtn = document.querySelector(".multiplication");
const substractionBtn = document.querySelector(".substraction");
const additionBtn = document.querySelector(".addition");
const decimalBtn = document.querySelector(".decimal");
const equalBtn = document.querySelector(".equal");
const numberBtn = document.querySelectorAll(".number");
const resultBox = document.querySelector(".display");
const operator = document.querySelectorAll(".operator");

let lastOpr = false;

numberBtn.forEach((button) => {
  button.addEventListener("click", () => {
    if (resultBox.value === "") {
      resultBox.value = button.innerText;
      lastOpr = false;
    } else {
      resultBox.value += button.innerText;
      lastOpr = false;
    }
  });
});

decimalBtn.addEventListener("click", () => {
  if (resultBox.value === "") {
    resultBox.value += "0.";
    lastOpr = false;
  } else {
    if (resultBox.value.includes(".")) {
      return;
    } else {
      resultBox.value += ".";
      lastOpr = false;
    }
  }
});

acBtn.addEventListener("click", () => {
  resultBox.value = "";
  lastOpr = false;
});

delBtn.addEventListener("click", () => {
  resultBox.value = resultBox.value.slice(0, -1);
});

operator.forEach((opr) => {
  opr.addEventListener("click", () => {
    if (!lastOpr) {
      resultBox.value += opr.innerText;
      lastOpr = true;
    }
  });
});

equalBtn.addEventListener("click", () => {
  equalBtn.addEventListener("click", () => {
    try {
      const expression = resultBox.value;
      const answer = eval(expression);
      resultBox.value = answer;
      lastOpr = false;
    } catch {
      resultBox.value = "Error";
      lastOpr = false;
    }
  });
});
