const display = document.querySelector("#display");
const digits = document.querySelectorAll(".digits");
const operatorBtn = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");
let storedNum = "";
let firstNum = "";
let pressedOperator = "";
let oldOperator = "";
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

for (let i = 0; i < digits.length; i++) {
	let digit = digits[i];
	digit.addEventListener("click", () => {
		storedNum += digit.textContent;
		display.textContent = storedNum;
	});
};

operatorBtn.forEach((operator) => {
	operator.addEventListener("click", function() {
		if (firstNum && storedNum)  {
			showResult();
		}
		
	firstNum = storedNum;

	pressedOperator = operator.textContent;
	storedNum = "";
	});
});

equalsBtn.addEventListener("click", function() {
	if ((storedNum === "" && firstNum === "" && pressedOperator === "/") || (storedNum === "0" && pressedOperator === "/")) {
		alert("Don't divide by 0, silly!");
		storedNum = "";
  		firstNum = "";
  		firstNumHolder = "";
  		pressedOperator = "";
  		oldOperator = "";
  		result = "";
  		display.textContent = "0";
		return;
	}

	// prevents display box errors if pressing equals button too early
	if ((storedNum && firstNum === "") || (storedNum === "" && firstNum === "")) {
		return;
	}

	// Trying to set display number to firstNum if pressedOperator and oldOperator are the same.
	if (pressedOperator == oldOperator) {
		firstNum = display.textContent;
    	storedNum = firstNumHolder;
		showResult();
    	return;
	}

    // Trying to set variable oldOperator to previous pressedOperator to check if operator has changed after clicking equals button
	if (pressedOperator) {
		oldOperator = pressedOperator;
	}
	
	// Allows user to press a number button, then an op button, then equals
	storedNum = display.textContent;
	// First number is kept while  storing the number on display
	showResult();
});

clearBtn.addEventListener("click", function() {
  storedNum = "";
  firstNum = "";
  firstNumHolder = "";
  pressedOperator = "";
  oldOperator = "";
  result = "";
  display.textContent = "0";
});

function showResult() {
	let result = operate(parseFloat(firstNum), parseFloat(storedNum), pressedOperator)
	if (result.toString().length > 10) {
		const round = (number, decimalPlaces) => {
			const factorOfTen = Math.pow(10, decimalPlaces);
			return Math.round(number * factorOfTen) / factorOfTen;
		}

		let roundedResult = round(result, 10);
		display.textContent = roundedResult;
    	// allows firstNum to persist in a following evaluation
		firstNumHolder = storedNum;
		storedNum = roundedResult;
		return;
	}

	display.textContent = result;
    // allows firstNum to persist in a following evaluation
	firstNumHolder = storedNum;
	storedNum = result;
}