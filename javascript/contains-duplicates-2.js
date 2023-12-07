const containsNearbyDuplicate = function(nums, k) {
  const numIndices = new Map();

  for (let i = 0; i < nums.length; i++) {
      const num = nums[i];

      if (numIndices.has(num) && i - numIndices.get(num) <= k) {
          return true;
      }

      numIndices.set(num, i);
  }

  return false;
};

nums1 = [1,2,3,1];
k1 = 3;
nums2 = [1,0,1,1];
k2 = 1;
nums3 = [1,2,3,1,2,3];
k3 = 2;

console.log(containsNearbyDuplicate(nums1, k1));
console.log(containsNearbyDuplicate(nums2, k2));
console.log(containsNearbyDuplicate(nums3, k3));