'''
Problem Description:
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.
'''

# Solution:
class Solution:
  def searchInsert(nums, target):
    low = 0
    high = len(nums) - 1

    while low <= high:
      mid = (low + high) // 2
      if nums[mid] == target:
        return mid
      elif nums[mid] < target:
        low = mid + 1
      else:
        high = mid - 1

    return low