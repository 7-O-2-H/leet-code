/*
Problem:
Alice has n candies, where the ith candy is of type candyType[i]. 
Alice noticed that she started to gain weight, so she visited a doctor.

The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). A
lice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice.

Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.
*/

const distributeCandies = function(candyType) {
    
  let typesOfCandy = 1;
  const doctorsAllowance = candyType.length / 2;

  for (let i = 1; i < candyType.length; i++) {
      let j = 0;
      for (j = 0; j < candyType.length; j++) {
          if (candyType[i] === candyType[j]) {
              break;
          }
      }

      if (i === j) {
          typesOfCandy++;
      }
  }

  return Math.min(typesOfCandy, doctorsAllowance);
};