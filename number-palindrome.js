const isPalindrome = function(x) {

  // Returns false if number is negative
  if (x < 0) {
      return false;
  }

  // Reduce input to absolute value
  const input = Math.abs(x);

  // Simple function to digits f number to array
  const converter = num => Number(num); 
  const intArr = Array.from(String(input), converter); 
  
  // Create two strings for comparison and establishment of plaindrome
  let startStr = '';
  let endStr = '';

  // Check even case
  if (intArr.length % 2 === 0) {
    // For loops to create palindrome sections for comparison. E.g. if first === second, input is palindrome
      for (let i = 0; i < intArr.length / 2; i++) {
          startStr += intArr[i].toString();
      }
      for (let j = intArr.length - 1; j >= intArr.length / 2; j--) {
          endStr += intArr[j].toString();
      }
  // Odd case
  } else {
      for (let i = 0; i < (Math.floor(intArr.length / 2)); i++) {
          startStr += intArr[i].toString();
      }
      for (let j = intArr.length - 1; j >= intArr.length / 2; j--) {
          endStr += intArr[j].toString();
      }
  }

  // Return true if strins match
  if (startStr === endStr) {
      return true;
  }
  return false;
};