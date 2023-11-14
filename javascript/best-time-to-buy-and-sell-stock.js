const maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
      minPrice = Math.min(minPrice, prices[i]);
      maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }

  return maxProfit;
};

console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([2, 3, 5, 1, 7, 9]));