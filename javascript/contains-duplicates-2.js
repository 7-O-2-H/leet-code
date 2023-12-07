/*
Function Description:
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
*/

// Main function
const containsNearbyDuplicate = function(nums, k) {

  // Create new map
  const numIndices = new Map();

  // Loop through elements of nums. If map has element of nums and i - j (numIndices.get(num)) <= k, return true.
  for (let i = 0; i < nums.length; i++) {

    const num = nums[i];

    if (numIndices.has(num) && i - numIndices.get(num) <= k) {
      return true;
    }

    numIndices.set(num, i);
  }

  // Default return false
  return false;
};

/*
// Test Cases
nums1 = [1,2,3,1];
k1 = 3;
nums2 = [1,0,1,1];
k2 = 1;
nums3 = [1,2,3,1,2,3];
k3 = 2;

console.log(containsNearbyDuplicate(nums1, k1));
console.log(containsNearbyDuplicate(nums2, k2));
console.log(containsNearbyDuplicate(nums3, k3));
*/