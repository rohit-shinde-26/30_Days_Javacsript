// Task 9 : Write higher order functions that takes function and a number and calls the functions at many times.


function callMultipleTimes(func, numTimes) {
    for (let i = 0; i < numTimes; i++) {
      func();
    }
  }
  
  // Example function to be called multiple times
  function Hello() {
    console.log("Hello, world!");
  }
  
  // Calling callMultipleTimes 
  callMultipleTimes(Hello, 5);
  