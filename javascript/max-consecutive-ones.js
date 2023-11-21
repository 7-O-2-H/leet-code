const findMaxConsecutiveOnes = function(nums) {
  let highestOnes = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 1) {
          count++;
          if (count > highestOnes) {
              highestOnes = count;
          }
      } else {
          count = 0;
      }
  }
  return highestOnes;
};