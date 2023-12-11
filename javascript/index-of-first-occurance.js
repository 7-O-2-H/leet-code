const strStr = function(haystack, needle) {
  if (needle === '') {
      return 0; // Empty needle is always present at the beginning
  }

  for (let i = 0; i <= haystack.length - needle.length; i++) {
      let match = true;

      for (let j = 0; j < needle.length; j++) {
          if (haystack[i + j] !== needle[j]) {
              match = false;
              break;
          }
      }

      if (match) {
          return i;
      }
  }

  return -1; // Needle not found in haystack
};