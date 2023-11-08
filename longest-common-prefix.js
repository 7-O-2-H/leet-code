
const longestCommonPrefix = function(strs) {

  if (strs.length === 0) {
    return '';
  }

  if (strs.length === 1) {
    return strs[0];
  }

  const minLen = Math.min(...strs.map(s => s.length));

  let commonPrefix = "";

  for (let i = 0; i < minLen; i++) {
    const char = strs[0][i]; // Get the character from the first string
    for (const string of strs) {
      if (string[i] !== char) {
        return commonPrefix;
      }
    }
    commonPrefix += char;
  }

  return commonPrefix;

};