def twoSum(nums, target):
        num_indices = {}

        for i, num in enumerate(nums):
            complement = target - num

            if complement in num_indices:
                return [num_indices[complement], i]

            num_indices[num] = i

        # No solution found
        return None

# Example usage:

nums = [2, 7, 11, 15]
target = 9
result = twoSum(nums, target)
print(f"Indices of the two numbers: {result}")