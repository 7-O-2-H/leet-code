'''
Given an integer n, return true if it is a power of two. Otherwise, return false.
An integer n is a power of two, if there exists an integer x such that n == 2x.
'''

def is_power_of_two(n):

  if n == 1:
    return True
  
  divisor = n

  while divisor > 1:
    divisor = divisor / 2

    if divisor == 1:
      return True
    
  return False
