/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let bigNUm = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > bigNUm) {
            bigNUm = numbers[i]

        }
    }
    return bigNUm
}

let result = findLargestElement([2, 54, 56, 9, 5]);
console.log("Largest number is:", result);


module.exports = findLargestElement;