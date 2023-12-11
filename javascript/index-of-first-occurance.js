// Function definition
/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
*/

// Main function
const strStr = function(haystack, needle) {

  // Return 0 if needle is empty string
  if (needle === '') {
      return 0; // Empty needle is always present at the beginning
  }

  // Loop through haystack and compare indexes of needle and haystack
  for (let i = 0; i <= haystack.length - needle.length; i++) {
      let match = true;

      for (let j = 0; j < needle.length; j++) {
          if (haystack[i + j] !== needle[j]) {
              match = false;
              break;
          }
      }

      // Return i (index of first element of needle) if match is true
      if (match) {
          return i;
      }
  }

  return -1; // Needle not found in haystack
};

// Test cases
/*
const haystack1 = "sadbutsad";
const needle1 = "sad";
const haystack2 = "leetcode";
const needle2 = "leeto";

console.log(strStr(haystack1, needle1));
console.log(strStr(haystack2, needle2));
*/