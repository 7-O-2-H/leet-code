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

// Function to determine maximum number of consecutive Ls in an array
const maxConsecutiveLs = function(nums) {

  // Var  to track highest number of consecutive Ls
  let maxLs = 0;
  // Var to track current count of Ls
  let count = 0;

  // Loop through array
  for (let i = 0; i < nums.length; i++) {

    // Increase count if element is 'L'; assign count to maxLs if it's higher than current maxLs; else reset count
    if (nums[i] === 'L') {
      count++;
      maxLs = Math.max(maxLs, count);
          
    } else {
      count = 0;
    }
  }

  return maxLs;
};

// Main function
const checkRecord = function(s) {

    // Convert string to array
    const sArray = s.split('');

    // Call maxConsecutiveLs on newly created array and store in maxLs var
    const maxLs = maxConsecutiveLs(sArray)

    // Dec var to ccount number of absences 'A';
    let aCount = 0;

    // Loop through array and increase aCount if element is 'A'
    for (let i = 0; i < sArray.length; i++) {
        if(sArray[i] === 'A') {
            aCount++;
        }
    }

    // Return true if student has been absent less than twice and not late 3 consective times. Otherwise function returns false
    if (aCount < 2 && maxLs < 3) {
        return true;
    }

    return false;
};