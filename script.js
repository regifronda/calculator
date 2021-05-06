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

const digits = document.querySelectorAll(".digits");

digits.forEach(function showDigit(digit){
	digit.addEventListener("click", function() {
		console.log("click!");
	});
});
/*only get console log for 1 digit button 
const digits = document.querySelector(".digits");

digit.addEventListener("click", () => {
	console.log("click!")
});*/