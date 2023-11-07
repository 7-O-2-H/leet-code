const isPalindrome = function(x) {

  // Returns false if number is negative
  if (x < 0) {
      return false;
  }

  const input = Math.abs(x);
  const converter = num => Number(num); 
    
  const intArr = Array.from(String(input), converter); 
  
  console.log(intArr);
  let startStr = '';
  let endStr = '';

  if (intArr.length % 2 === 0) {
      for (let i = 0; i < intArr.length / 2; i++) {
          startStr += intArr[i].toString();
      }
      for (let j = intArr.length - 1; j >= intArr.length / 2; j--) {
          endStr += intArr[j].toString();
      }
  } else {
      for (let i = 0; i < (Math.floor(intArr.length / 2)); i++) {
          startStr += intArr[i].toString();
      }
      for (let j = intArr.length - 1; j >= intArr.length / 2; j--) {
          endStr += intArr[j].toString();
      }
  }
  if (startStr === endStr) {
      return true;
  }
  return false;
};