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

function formatRange(start, end) {
  return start === end ? `${start}` : `${start}->${end}`;
}
