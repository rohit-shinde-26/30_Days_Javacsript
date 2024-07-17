// Task 10 : Write a higher order function that takes two functions and a value , applies the first function to the value, and then apply second function to the result. 



function applyFunctions(func1, func2, value) {
    // Apply func1 to the value
    let result1 = func1(value);
    
    // Apply func2 to the result of func1
    let result2 = func2(result1);
    
    // Return the final result
    return result2;
  }
  
  // Example functions to be applied
  function double(x) {
    return x * 2;
  }
  
  function addFive(x) {
    return x + 5;
  }
  
  // Example value
  let number = 10;
  
  // Applying double and addFive functions to the number
  let finalResult = applyFunctions(double, addFive, number);
  
  