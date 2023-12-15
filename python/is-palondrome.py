def isPalindrome(self, x: int) -> bool:
    
        # Convert the integer to a string
        str_x = str(x)
    
        return str_x == str_x[::-1]