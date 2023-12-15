def isPalindrome(x):
    
    # Convert the integer to a string
    str_x = str(x)
    
    return str_x == str_x[::-1]

# Example usage:
num = 121
result = isPalindrome(num)
print(f"Is {num} a palindrome? {result}")