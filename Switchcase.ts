import promptSync from "prompt-sync";

const prompt = promptSync();

let choice: number = Number(prompt("Enter your choice:\n1. Add\n2. Subtract\n3. Multiply\n4. Divide\n"));

let num1: number = Number(prompt("Enter first number: "));
let num2: number = Number(prompt("Enter second number: "));

switch (choice) {

    case 1:
        console.log("Addition =", num1 + num2);
        break;

    case 2:
        console.log("Subtraction =", num1 - num2);
        break;

    case 3:
        console.log("Multiplication =", num1 * num2);
        break;

    case 4:
        if (num2 !== 0) {
            console.log("Division =", num1 / num2);
        } else {
            console.log("Cannot divide by zero.");
        }
        break;

    default:
        console.log("Invalid choice.");
}