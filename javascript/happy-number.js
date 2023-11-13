const isHappy = function(n) {
  const getNextNumber = function(num) {
    let sum = 0;
    while (num > 0) {
      const digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
    return sum;
  };

  let tortoise = n;
  let hare = n;

  do {
    tortoise = getNextNumber(tortoise);
    hare = getNextNumber(getNextNumber(hare));
  } while (tortoise !== hare);

  return tortoise === 1;
};