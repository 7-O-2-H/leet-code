function isValid(s) {
  const stack = [];
  const brackets = { '(': ')', '{': '}', '[': ']' };

  for (let char of s) {
    if (brackets[char]) {
    // If the character is an open bracket, push it onto the stack
      stack.push(char);
    } else {
      // If the character is a close bracket
      if (stack.length === 0) {
        return false; // No matching open bracket on the stack
      }

      const openBracket = stack.pop();
      if (brackets[openBracket] !== char) {
        return false; // Mismatched brackets
      }
    }
  }

  // If the stack is empty at the end, all brackets were matched and in the correct order
  return stack.length === 0;
}

// Example usage:
const inputString = "({[]})";
const result = isValid(inputString);
console.log(result); // Output: true