// business logic
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

// user interface logic
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

window.alert("The sum of " + number1 + " and " + number2 + " is " + add(number1,number2) + ".\n" +
"The difference between " + number1 + " and " + number2 + " is " + subtract(number1,number2) + ".\n" +
"The product of " + number1 + " and " + number2 + " is " + multiply(number1,number2) + ".\n" +
"The quotient of " + number1 + " and " + number2 + " is " + divide(number1,number2) + ".");