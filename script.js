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
	if (operator == "+") {
		return add(num1, num2);
	} else if (operator == "-") {
		return subtract(num1, num2);	
	} else if (operator == "*") {
		return multiply(num1, num2);
	}
	else if (operator == "/") {
		return divide(num1, num2);
	}
}

console.log(add(5, 2));
console.log(subtract(5, 2));
console.log(multiply(5, 2));
console.log(divide(10, 2));

const display = document.querySelector("#display");
const digits = document.querySelectorAll(".digits");
const operatorBtn = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equals");
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
		if (firstNum && storedNum)  {
			console.log("firstNum and storedNum already have numbers in them so showResult()!")
			showResult();
		}
		
	firstNum = storedNum;
	console.log("storedNum " + storedNum + " is assigned to firstNum, which is now " + firstNum);

	pressedOperator = operator.textContent;
	console.log("pressedOperator is " + pressedOperator);
	storedNum = "";
	});
});

equalsBtn.addEventListener("click", function() {
	// Allows user to press a number button and then the equals button
	storedNum = display.textContent;
	// First number is kept while  storing the number on display
	console.log("Clicked equals, but before showResult(), storedNum is set to display.textContent " + display.textContent);
	console.log("Clicked equals and firstNum is " + firstNum);
	showResult();
});

function showResult() {
	let result = operate(parseFloat(firstNum), parseFloat(storedNum), pressedOperator)
	display.textContent = result;
	console.log("result on display is " + result);
	storedNum = result;
	console.log("result " + result + " is assigned to storedNum, which is now " + storedNum);
}