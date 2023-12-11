'''
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
'''

# Main function
def mySqrt(x) -> int:
    if x == 0 or x == 1:
        return x
            
    i = 1

    while x >= i * i:
        i = 1 + i
        continue
        
    return i - 1

# Test cases
'''
print(mySqrt(7))
print(mySqrt(180))
'''