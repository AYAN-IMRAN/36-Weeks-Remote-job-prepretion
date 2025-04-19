/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }
  add(num) {
    this.result += num;
  }
  subtract(num) {
    this.result -= num;
  }
  multiply(num) {
    this.result *= num;
  }
  divide(num) {
    if (num === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= num;
  }
  clear() {
    this.result = 0;
  }
  getResult() {
    return this.result;
  }
  calculate(expression) {
    const cleanExpression = expression.replace(/\s+/g, "");
    const regex = new RegExp("[^0-9+\\-*/().]");
    if (regex.test(cleanExpression)) {
      throw new Error("Invalid input");
    }
    const result = new Function("return " + cleanExpression)();
    this.result = result;
    return this.result;
  }
}

const calc = new Calculator();
calc.add(10); // result: 10
calc.subtract(2); // result: 8
calc.multiply(3); // result: 24
calc.divide(2); // result: 12
console.log(calc.getResult()); // Output: 12

calc.clear();
console.log(calc.getResult()); //  Output: 0
calc.calculate("5 + abc"); //  Error: Invalid input
// calc.calculate("10 / 0");  //  Error: Cannot divide by zero

module.exports = Calculator;
