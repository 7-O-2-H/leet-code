const removeDuplicates = function(nums) {
    
  let comparisonVal = nums[0];
  let newArr = [comparisonVal];
  for (let i = 1; i < nums.length; i++) {
      //console.log(nums[i]);
      if (nums[i] !== comparisonVal) {
          newArr.push(nums[i]);
          comparisonVal = nums[i];
      }
  }

  //console.log(newArr);
  return newArr;
};

/* Test cases

const testCase = [1, 1, 2];
const testCase2 = [0, 0, 0, 1, 1, 2, 3, 3, 4, 4, 4];
console.log(removeDuplicates(testCase));
console.log(removeDuplicates(testCase2));
*/