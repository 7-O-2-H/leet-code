/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

const containsDuplicate = function(nums) {
  for (let i = 0; i < nums.length; i++) {
      let checkElement = nums[i];
      for (let j = i + 1; j < nums.length; j++) {
          if (checkElement === nums[j]) {
              return true;
          }
      }
  }

  return false;
};

// Test Cases

nums1 = [1, 2, 3, 4];
nums2 = [1, 2, 3, 1];
console.log(containsDuplicate(nums1));
console.log(containsDuplicate(nums2));