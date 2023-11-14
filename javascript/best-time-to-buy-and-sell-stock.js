// Function to determine the max profit dependant on when you've bought and sold stock given an array of daily stock prices
// Primary function
const maxProfit = function(prices) {

  // Initialize minPrice and maxProfit variables
  let minPrice = Infinity;
  let maxProfit = 0;

  // Loop through prices to maintain minimum price and maxProfit via comparison
  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }

  // Return maxProfit
  return maxProfit;
};

/* Sample usage
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([2, 3, 5, 1, 7, 9]));
*/