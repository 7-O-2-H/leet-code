/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

const containsDuplicate = function(nums) {
  const numSet = new Set();

  for (const num of nums) {
      if (numSet.has(num)) {
          return true;
      }
      numSet.add(num);
  }

  return false;
};


// Test Cases

nums1 = [1, 2, 3, 4];
nums2 = [1, 2, 3, 1];
console.log(containsDuplicate(nums1));
console.log(containsDuplicate(nums2));