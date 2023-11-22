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

// Main function
const checkRecord = function(s) {

  // Convert string to array
  const sArray = s.split('');

  // Var  to track highest number of consecutive Ls
  let maxLs = 0;

  // Dec var to ccount number of absences 'A';
  let aCount = 0;

  // Var to track current count of Ls
  let lCount = 0;

  // Loop through array and increase aCount if element is 'A', increase lCount if element is 'L', assign lCount to maxLs if it is greater than maxLs, else reset lCount
  for (let i = 0; i < sArray.length; i++) {
    if (sArray[i] === 'A') {
      aCount++;
    }
    if (sArray[i] === 'L') {
      lCount++;
      maxLs = Math.max(maxLs, lCount);
    } else {
      lCount = 0;
    }
  }

  // Return true if student has been absent less than twice and not late 3 consective times. Otherwise function returns false
  if (aCount < 2 && maxLs < 3) {
    return true;
  }

  return false;
};

// Example usage
/*
const studentRecord1 = 'PPALLP';
const studentRecord2 = 'PPALLL';

console.log(checkRecord(studentRecord1));
console.log(checkRecord(studentRecord2));
*/