const convertToTitle = function(columnNumber) {


  let result = "";
  
  while (columnNumber > 0) {
    columnNumber--; // Adjust to be 0-based
    const remainder = columnNumber % 26;
    result = String.fromCharCode(65 + remainder) + result;
    columnNumber = Math.floor(columnNumber / 26);
  }
  
  return result;

};