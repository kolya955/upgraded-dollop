// Helper function to generate a random number between a given range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Helper function to check if a number is even
  function isEven(number) {
    return number % 2 === 0;
  }
  
  // Helper function to check if a number is odd
  function isOdd(number) {
    return !isEven(number);
  }
  
  // Helper function to calculate the factorial of a number
  function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  }
  
  // Usage example:
  console.log(getRandomNumber(1, 10)); // Generates a random number between 1 and 10
  console.log(isEven(5)); // Checks if 5 is even
  console.log(isOdd(5)); // Checks if 5 is odd
  console.log(factorial(5)); // Calculates the factorial of 5
  