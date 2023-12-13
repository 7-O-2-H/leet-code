'''
Function description:
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
'''

# Main function
def containsDuplicate(nums):
        # Loop through nums
        for i in range(len(nums)):
            
            # Store num in check element and compare (loop again through nums) with future elements to see if there's a duplicate
            check_element = nums[i]
            for j in range(i + 1, len(nums)):
                if check_element == nums[j]:
                    return True
                
        return False

# Example usage:
'''
print(containsDuplicate([1,2,3,1]))
print(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
print(containsDuplicate([1,2,3,4]))
'''
