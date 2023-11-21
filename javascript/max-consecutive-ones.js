// Main function which will determine the highest number of consecutive ones in a given array
const findMaxConsecutiveOnes = function(nums) {

  // Initialize variable to keep track of number of highest consecutive ones
  let highestOnes = 0;
  // Initialize variable to keep track of current number of consecutive ones
  let count = 0;

  // Loop through array
  for (let i = 0; i < nums.length; i++) {

    // Increase count if number is equal to one, if count is higher than current count of ones, assign it to highestOnes var
    if (nums[i] === 1) {
      count++;
      highestOnes = Math.max(highestOnes, count);
          
    // Reset count if number is not equal to one
    } else {
      count = 0;
    }
  }

  // Return highestOnes
  return highestOnes;
};

// Example usage
/*
const testArr1 = [1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1];
const testArr2 = [1, 2, 1, 1, 0, 3];
console.log(findMaxConsecutiveOnes(testArr1));
console.log(findMaxConsecutiveOnes(testArr2));
*/