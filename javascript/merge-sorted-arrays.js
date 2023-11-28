var merge = function(nums1, m, nums2, n) {
  const newArray1 = nums1.slice(0, m);
  // console.log(newArray1);
  const newArray2 = nums2.slice(0, n);
  const newArray = newArray1.concat(newArray2);
  
  return res = newArray.sort(function(a, b) {
      return a - b;
  })
  

  
};

console.log(merge([1,2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
