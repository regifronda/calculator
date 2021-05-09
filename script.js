const display = document.querySelector("#display");
const digits = document.querySelectorAll(".digits");
const operatorBtn = document.querySelectorAll(".operator");
function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	return num1 / num2;
}

let operate = (num1, num2, operator) => {
	if (operator == "add") {
		add(num1, num2);
	} else if (operator == "subtract") {
		subtract(num1, num2);	
	} else if (operator == "multiply") {
		multiply(num1, num2);
	}
	else if (operator == "divide") {
		divide(num1, num2);
	}
}

console.log(add(5, 2));
console.log(subtract(5, 2));
console.log(multiply(5, 2));
console.log(divide(10, 2));

let storedNum = "";
let firstNum = "";
let pressedOperator = "";
let previousNum = "";

for (let i = 0; i < digits.length; i++) {
	let digit = digits[i];
	digit.addEventListener("click", () => {
		storedNum += digit.textContent;
		display.textContent = storedNum;
		console.log("storedNum "+ storedNum + " is on display!");
	});
};

operatorBtn.forEach((operator) => {
	operator.addEventListener("click", function() {
	firstNum = storedNum;
	console.log("storedNum " + storedNum + " is assigned to firstNum, which is now " + firstNum);

	pressedOperator = operator.textContent;
	console.log("pressedOperator is " + pressedOperator);
	storedNum = "";

	});
});