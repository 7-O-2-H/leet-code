const isPowerOfTwo = function(n) {
    
  if (n === 1) {
      return true;
  }

  let divisor = n;

  while (divisor > 1) {
      divisor /= 2;
      if (divisor === 1) {
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