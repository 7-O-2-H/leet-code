function romanToInt(s) {
  // Establish roman numerals as int values
  const romanNumerals = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
  };

  // Count buffer
  let result = 0;

  // Check roman numeral against next value
  for (let i = 0; i < s.length; i++) {
      const currentSymbol = s[i];
      const nextSymbol = s[i + 1];

      if (romanNumerals[currentSymbol] < romanNumerals[nextSymbol]) {
          // If the current symbol is smaller than the next symbol, subtract it.
          result -= romanNumerals[currentSymbol];
      } else {
          result += romanNumerals[currentSymbol];
      }
  }

  return result;
}