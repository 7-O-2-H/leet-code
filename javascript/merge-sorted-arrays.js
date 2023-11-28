/*

Problem Definition:

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

*/

// Main Function:
const merge = function(nums1, m, nums2, n) {

  // Create altered first array using nums1 and m
  const newArray1 = nums1.slice(0, m);

  // Create second altered array using nums2 and n
  const newArray2 = nums2.slice(0, n);

  // Concantenate arrays into one buffer array
  const newArray = newArray1.concat(newArray2);
  
  // Return the sorted, sliced, concantenated array
  return res = newArray.sort(function(a, b) {
      return a - b;
  })
  
};

/* Example Usage:
*/
const arr1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const arr2 = [2, 5, 6];
const n = 3;
console.log(merge(arr1, m, arr2, n));
