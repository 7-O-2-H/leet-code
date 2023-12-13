'''
Function description:
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
'''

def containsDuplicate(self, nums: List[int]) -> bool:
        for i in range(len(nums)):
            check_element = nums[i]
            for j in range(i + 1, len(nums)):
                if check_element == nums[j]:
                    return True
        return False