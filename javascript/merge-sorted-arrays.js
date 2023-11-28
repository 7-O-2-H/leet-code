/*

Problem Definition:

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

*/

// Main Function:
const merge = function(nums1, m, nums2, n) {
  const newArray1 = nums1.slice(0, m);
  // console.log(newArray1);
  const newArray2 = nums2.slice(0, n);
  const newArray = newArray1.concat(newArray2);
  
  return res = newArray.sort(function(a, b) {
      return a - b;
  })
  

  
};

console.log(merge([1,2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
