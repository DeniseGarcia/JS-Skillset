function total(a,b)
	{
		result = a + b;
		return result;
	}

function difference(a,b)
	{
		result = a - b;
		return result;
	}

function product(a,b)
	{
		result = a * b;
		return result;
	}

function quotient(a,b)
	{
		result = a / b;
		return result;
	}

var num1 = parseInt(prompt("Enter a number"));
var num2 = parseInt(prompt("Enter another number"));

document.write("The answer to " + num1 + " plus " + num2 + " is " + total(num1,num2) + "<br>");
document.write("The answer to " + num1 + " minus " + num2 + " is " + difference(num1,num2) + "<br>");
document.write("The answer to " + num1 + " times " + num2 + " is " + product(num1,num2) + "<br>");
document.write("The answer to " + num1 + " divided by " + num2 + " is " + quotient(num1,num2) + "<br>");