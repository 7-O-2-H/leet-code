def majorityElement(self, nums: List[int]) -> int:
    candidate = nums[0]
    count = 1
    
    for num in nums[1:]:
        if count == 0:
            candidate = num
            count = 1
        elif num == candidate:
            count += 1
        else:
            count -= 1
    
    return candidate