const display = document.querySelector("#display");
const digits = document.querySelectorAll(".digits");
const operatorBtn = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equals");
let storedNum = "";
let firstNum = "";
let pressedOperator = "";
let oldOperator = "";
let previousNum = "";
let result = "";
let firstNumHolder = "";

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
	// prevents display box errors if pressing equals button too early
	if ((storedNum && firstNum == "") || (storedNum == "" && firstNum == "")) {
		return;
	}

	// Trying to set display number to firstNum if pressedOperator and oldOperator are the same.
	if (pressedOperator == oldOperator) {
		console.log("operator hasn't changed!");
		console.log("oldOperator: " + oldOperator + " pressedOperator " + pressedOperator);
		firstNum = display.textContent;
    	storedNum = firstNumHolder;
		showResult();
    	return;
	}
  	// Set variable oldOperator to previous pressedOperator to check if operator has changed after clicking equals button
	if (pressedOperator) {
		oldOperator = pressedOperator;
		console.log("oldOperator "+ oldOperator + " has been stored");
	}
	// Allows user to press a number button, then an op button, then equals
	storedNum = display.textContent;
	// First number is kept while  storing the number on display
	console.log("Clicked equals, but before showResult(), storedNum is set to display.textContent " + display.textContent);
	console.log("Clicked equals and firstNum is " + firstNum);
	showResult();
});

function showResult() {
	let result = operate(parseFloat(firstNum), parseFloat(storedNum), pressedOperator)
	display.textContent = result;
	console.log("firstNum: " + firstNum + " storedNum: " + storedNum + " result on display is " + result);
    // allows firstNum to persist in a following evaluation
	firstNumHolder = storedNum;
  	console.log("firstNumHolder " + firstNumHolder);
	storedNum = result;
	console.log("result " + result + " is assigned to storedNum, which is now " + storedNum);
}