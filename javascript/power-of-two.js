const isPowerOfTwo = function(n) {
  
  // Check for edge case - 2 to the power of 0
  if (n === 1) {
      return true;
  }

  // Create multiple buffer
  let multiple = n;

  // Loop to divide multiple 2 until it yields 1 and return true or returns false
  while (multiple > 1) {
      multiple /= 2;
      if (multiple === 1) {
          return true;
      }
  }

  return false;
};

// Sample usage:
console.log(isPowerOfTwo(156));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(128));
console.log(isPowerOfTwo(65536));