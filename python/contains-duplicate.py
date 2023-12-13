def containsDuplicate(self, nums: List[int]) -> bool:
        for i in range(len(nums)):
            check_element = nums[i]
            for j in range(i + 1, len(nums)):
                if check_element == nums[j]:
                    return True
        return False