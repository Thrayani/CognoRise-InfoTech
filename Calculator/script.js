let currentNumber = "";
let previousNumber = "";
let operation = "";

function appendNumber(number) {
  currentNumber += number;
  updateDisplay();
}

function appendOperation(op) {
  operation = op;
  previousNumber = currentNumber;
  currentNumber = "";
  updateDisplay();
}

function calculate() {
  if (previousNumber === "" || currentNumber === "") return;
  let result = eval(`${previousNumber} ${operation} ${currentNumber}`);
  currentNumber = result;
  previousNumber = "";
  operation = "";
  updateDisplay();
}

function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operation = "";
  updateDisplay();
}

function deleteNumber() {
  currentNumber = currentNumber.slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  const displayElement = document.querySelector(".display");
  displayElement.value = currentNumber;
}
