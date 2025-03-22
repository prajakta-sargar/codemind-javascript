// Function to check if a string or number is a palindrome
function isPalindrome(input) {
    // Convert the input to a string and remove any non-alphanumeric characters and convert to lowercase
    let str = input.toString().replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    // Reverse the string and compare with the original string
    let reversedStr = str.split('').reverse().join('');
    
    // Check if the original string matches the reversed string
    return str === reversedStr;
  }
  
  // Test cases
  const testStrings = ["madam", 141, "sanday", "mom", "listen", "dad"];
  
  testStrings.forEach(input => {
    if (isPalindrome(input)) {
      console.log(`Given string  "${input}" is a palindrome`);
    } else {
      console.log(`Given string ${input} is not a palindrome`);
    }
  });
  