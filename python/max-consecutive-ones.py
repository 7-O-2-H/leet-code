'''
Problem Description
Given a binary array nums, return the maximum number of consecutive 1's in the array.
'''

# Solution
def find_max_consecutive_ones(nums):

  # set a counter and something to track most consectuive ones (highest_ones)
  highest_ones = 0
  count = 0

  # loop through nums and add 1 to count if i is 1, compare highest_ones to count and set highest ones to max
  for i in nums:

    if i == 1:
      count += 1
      highest_ones = max(highest_ones, count)

    else:
      count = 0

  return highest_ones

# Example usage

nums1 = [1, 1, 0, 1, 1, 1, 1, 2]
nums2 = [1, 0, 1, 1, 0, 1, 2]

print (find_max_consecutive_ones(nums1))
print (find_max_consecutive_ones(nums2))