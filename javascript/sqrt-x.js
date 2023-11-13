// Function for calculating the square root of a number rounded down to the lowest integer without using any built=in functions
const mySqrt = function(x) {

  // Return 0 if less than 1
  if (x < 1) {
      return 0;
  }

  // Return 1 if less than or equal to 2.
  if (x <= 2) {
      return 1;
  }
 
  // Return the integer (i) whose square is less than x and where the square of (i + 1) is greater than x. 
  for (let i = 0; i < x; i++) {
      if (x >= i * i) {
          continue;
      }
      return i - 1;
  }
};