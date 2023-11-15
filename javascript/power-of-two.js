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