'''
Function description:
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
'''

def containsDuplicate(nums):
        for i in range(len(nums)):
            check_element = nums[i]
            for j in range(i + 1, len(nums)):
                if check_element == nums[j]:
                    return True
        return False

# Example usage:
print(containsDuplicate([1,2,3,1]))
print(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
print(containsDuplicate([1,2,3,4]))
