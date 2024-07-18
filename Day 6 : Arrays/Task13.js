// Task 13: Access and log a specific element from the two dimentional array.



let twoDArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
 
  function accessElement(array, row, col) {
    // Check if the given row and column indices are within bounds
    if (row >= 0 && row < array.length && col >= 0 && col < array[row].length) {
      let element = array[row][col];
      console.log(`Element at position (${row}, ${col}): ${element}`);
    } else {
      console.log(`Invalid indices (${row}, ${col}) for the array.`);
    }
  }
  
  // Example usage:
  accessElement(twoDArray, 1, 2); 
  accessElement(twoDArray, 0, 0); 
  accessElement(twoDArray, 2, 1); 
  
  // Trying to access an invalid index:
  accessElement(twoDArray, 1, 5); 
  