/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

// Main function
const containsDuplicate = function(nums) {

  // Create new Set
  const numSet = new Set();

  // Loop through elements of nums and check set for element. Return true if element is in the set else add the number to the set.
  for (const num of nums) {
      if (numSet.has(num)) {
          return true;
      }
      numSet.add(num);
  }

  // Return false if no duplicate found.
  return false;
};


// Test Cases
/*
nums1 = [1, 2, 3, 4];
nums2 = [1, 2, 3, 1];
console.log(containsDuplicate(nums1));
console.log(containsDuplicate(nums2));
*/