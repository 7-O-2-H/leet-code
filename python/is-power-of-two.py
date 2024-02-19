'''
Given an integer n, return true if it is a power of two. Otherwise, return false.
An integer n is a power of two, if there exists an integer x such that n == 2x.
'''

# Solution
def is_power_of_two(n):

  # check if n is 1
  if n == 1:
    return True
  
  divisor = n

  # divide n by 2 until it reaches 0 (return true) or if it is less than 0 (return false)
  while divisor > 1:
    divisor = divisor / 2

    if divisor == 1:
      return True
    
  return False

# Example usage
n = 16
m = 6
print (is_power_of_two(n))
print (is_power_of_two(m))