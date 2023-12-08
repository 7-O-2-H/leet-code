/*
Problem Description:
You are given a sorted unique integer array nums.

A range [a,b] is the set of all integers from a to b (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b
*/

// Main function
const summaryRanges = function(nums) {
  if (nums.length === 0) {
    return [];
  }

  const result = [];
  let start = nums[0];
  let end = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === end + 1) {
      // Extend the current range
      end = nums[i];
    } else {
      // End of current range, add to result
      result.push(formatRange(start, end));
      // Start a new range
      start = end = nums[i];
    }
  }

  // Add the last range to the result
  result.push(formatRange(start, end));

  return result;
};

// This function formats the ranges into the format 'start -> end'
const formatRange = function(start, end) {
  return start === end ? `${start}` : `${start}->${end}`;
};

// Test cases

/*
nums1 = [0,1,2,4,5,7];
nums2 = [0,2,3,4,6,8,9];
console.log(summaryRanges(nums1));
console.log(summaryRanges(nums2));
*/