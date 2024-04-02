//string reverse function

function reverseString(str) {
    // Split the string into an array of characters
    var strArray = str.split('');
    
    // Reverse the array
    var reversedArray = strArray.reverse();
    
    // Join the array back into a string
    var reversedStr = reversedArray.join('');
    
    return reversedStr;
  }

  //Counting characters function

  function countCharacters(str) {
    return str.length;
  }
  
  // Example usage
  var str = "Hello, world!";
  var characterCount = countCharacters(str);
  console.log("Number of characters:", characterCount);

  //Capitalize words 

  function capitalizeWords(sentence) {
    // Split the sentence into an array of words
    var words = sentence.split(" ");
  
    // Iterate over each word
    for (var i = 0; i < words.length; i++) {
      // Capitalize the first letter of each word
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  
    // Join the words back into a sentence
    var capitalizedSentence = words.join(" ");
  
    return capitalizedSentence;
  }

  /////////////////////////////////////////////////////////

  //Find Maximum and Minimum

  function findMaximum(numbers) {
    // Check if the array is empty
    if (numbers.length === 0) {
      return undefined; // If array is empty, return undefined
    }
  
    var max = numbers[0]; // Initialize max with the first element of the array
  
    // Iterate through the array to find the maximum value
    for (var i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
  
    return max;
  }
  
  function findMinimum(numbers) {
    // Check if the array is empty
    if (numbers.length === 0) {
      return undefined; // If array is empty, return undefined
    }
  
    var min = numbers[0]; // Initialize min with the first element of the array
  
    // Iterate through the array to find the minimum value
    for (var i = 1; i < numbers.length; i++) {
      if (numbers[i] < min) {
        min = numbers[i];
      }
    }
  
    return min;
  }

  //Sum of Array

  function sumArray(arr) {
    // Initialize sum variable to store the total sum
    var sum = 0;
  
    // Iterate through the array and add each element to the sum
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  
    return sum;
  }

  //Filter Array based on condition

  function filterArray(arr, condition) {
    // Use the Array.filter() method to create a new array containing only the elements that satisfy the condition
    return arr.filter(condition);
  }
  
  // Example usage
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  // Function to filter out even numbers
  function isEven(num) {
    return num % 2 === 0;
  }
  
  var evenNumbers = filterArray(numbers, isEven);
  console.log("Even numbers:", evenNumbers); // Output: [2, 4, 6, 8, 10]
  
  // Function to filter out numbers greater than 5
  function isGreaterThan5(num) {
    return num > 5;
  }

  /////////////////////////////////////////////////

  //Calculate factorial

  function factorialIterative(n) {
    // Initialize factorial as 1
    var factorial = 1;
    // Iterate from 1 to n and multiply each number with factorial
    for (var i = 1; i <= n; i++) {
      factorial *= i;
    }
    return factorial;
  }

  //Prime number 

  function isPrime(number) {
    // If number is less than 2, it's not prime
    if (number < 2) {
      return false;
    }
  
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        
        return false;
      }
    }
  
    // If the loop completes without finding any divisor, the number is prime
    return true;
  }

  //Fibonacci Sequence

  