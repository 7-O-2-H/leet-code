'''
Problem description:
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
'''

# Main function
def majorityElement(self, nums: List[int]) -> int:
    candidate = nums[0]
    count = 1
    
    # Loop through nums and use count to keep track of candidates
    for num in nums[1:]:
        if count == 0:
            candidate = num
            count = 1
        elif num == candidate:
            count += 1
        else:
            count -= 1
    
    # Return most frequent candidate
    return candidate