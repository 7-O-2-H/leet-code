/* Problem Description:

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Otherwise the function should return false.

*/

// Main Function

const twoSum = function(nums, target) {

  // Nested loop to establish every sum of two unique elements
  for (let i = 0; i < nums.length; i++) {

    let j = i + 1;
    for (j; j < nums.length; j++) {

      // Compare sum against target and return indices if true
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  // Return false if no elements sum to target
  return false;
};

/* Example usage
const nums1 = [2, 7, 11, 15];
const target1 = 9;
const nums2 = [3, 3];
const target2 = 5;
console.log(twoSum(nums1, target1));
console.log(twoSum(nums2, target2));
*/