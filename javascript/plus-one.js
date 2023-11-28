/* Problem Description:

You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

*/

// Main Function:

const plusOne = function(digits) {

  const n = digits.length;

  for (let i = n - 1; i >= 0; i--) {
    digits[i]++

    if (digits[i] === 10) {
      digits[i] = 0;
    } else {
      break;
    }
  }

  if (digits[0] === 0) {
    digits.unshift(1)
  }

  return digits;

}

/* 

Example Usage
const digits1 = [1, 2, 3];
const digits2 = [4, 3, 2, 1];
const digits3 = [9, 9]; 

console.log(plusOne(digits1)); // Rerturns [1, 2, 4]
console.log(plusOne(digits2)); // Returns [4, 3, 2, 2]
console.log(plusOne(digits3)); // Returns [1, 0, 0]

*/