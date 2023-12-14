'''
Function descrtiption:
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
'''

# Main function:
def twoSum(nums, target):
    num_indices = {}
    # Loop through elements of nums
    for i, num in enumerate(nums):
        complement = target - num

        if complement in num_indices:
            return [num_indices[complement], i]

        num_indices[num] = i
      
    # No solution found
    return None

# Example usage:
'''
nums = [2, 7, 11, 15]
target = 9
result = twoSum(nums, target)
print(f"Indices of the two numbers: {result}")
'''