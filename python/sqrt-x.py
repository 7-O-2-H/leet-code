class Solution:
    def mySqrt(self, x: int) -> int:
        if x == 0 or x == 1:
            return x
            
        i = 1

        while x >= i * i:
            i = 1 + i
            continue
        
        return i - 1