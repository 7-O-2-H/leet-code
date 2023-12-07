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