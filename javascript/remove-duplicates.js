/*
Problem Description:

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
The relative order of the elements should be kept the same.
Then return the number of unique elements in nums.

*/

// Main function
const removeDuplicates = function(nums) {
    
  // Dec comparison value and new array to return beginning with initial array value
  let comparisonVal = nums[0];
  const newArr = [comparisonVal];

  // Loop through elements starting with element at index 1 and compare to previous value, add to newArr if unique and update comparison value
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== comparisonVal) {
      newArr.push(nums[i]);
      comparisonVal = nums[i];
    }
  }

  return newArr;

};

/* Test cases

const testCase = [1, 1, 2];
const testCase2 = [0, 0, 0, 1, 1, 2, 3, 3, 4, 4, 4];
console.log(removeDuplicates(testCase));
console.log(removeDuplicates(testCase2));

*/