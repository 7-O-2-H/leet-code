'''
Given a binary array nums, return the maximum number of consecutive 1's in the array.
'''

# Solution
def find_max_consecutive_ones(nums):

  highest_ones = 0
  count = 0

  for i in nums:

    if i == 1:
      count += 1
      highest_ones = max(highest_ones, count)

    else:
      count = 0

  return highest_ones