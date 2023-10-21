function calculate(num1, num2, operator) {
    switch (operator) {
        case "+":
        return num1 + num2;
        case "-":
        return num1 - num2;
        case "*":
        return num1 * num2;
        case "/":
        if (num2 === 0) {
            return "Division by zero is not allowed";
        } 
        return num1 / num2;
        default:
            return "Invalid operator";  
    }
}
let num1 = +prompt("Enter a number");
let num2 = +prompt("Enter a second number");
let operator = prompt("Enter a operator");
let result = calculate(num1, num2, operator)
console.log(result);