const majorityElement = function(nums) {

  // Create object to track appearances of element
  let numRes = {};

  // Populate object keys
  for (let el in nums) {
    numRes[nums[el]] = 0;
  }

  // Calculate element frequency
  for (let item in nums) {
    numRes[nums[item]]++;
  }

  // Initialize variable to track highest element frequency
  let highest = 0;

  // Establish highest frequency
  for (let item in numRes) {
    if (numRes[item] > highest) {
      highest = Number(numRes[item]);
    }
  }

  // Return element based on key value pair
  return Object.keys(numRes).find(key => numRes[key] === highest);
};