/* Explanation of function:
You are given a string s representing an attendance record for a student where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:

'A': Absent.
'L': Late.
'P': Present.
The student is eligible for an attendance award if they meet both of the following criteria:

The student was absent ('A') for strictly fewer than 2 days total.
The student was never late ('L') for 3 or more consecutive days.
Return true if the student is eligible for an attendance award, or false otherwise.
*/

const maxConsecutiveLs = function(nums) {

  let maxLs = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {

    if (nums[i] === 'L') {
      count++;
      maxLs = Math.max(maxLs, count);
          
    } else {
      count = 0;
    }
  }

  return maxLs;
};

const checkRecord = function(s) {
    const sArray = s.split('');
    const maxLs = maxConsecutiveLs(sArray)
    console.log(maxLs);
    let aCount = 0;
    for (let i = 0; i < sArray.length; i++) {
        if(sArray[i] === 'A') {
            aCount++;
        }
    }
    if (aCount < 2 && maxLs < 3) {
        return true;
    }

    return false;
};