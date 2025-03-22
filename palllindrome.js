// Function to check if a string or number is a palindrome
function isPalindrome(input) {
    // Convert the input to a string (in case it's a number) and compare it with its reverse
    let str = input.toString();
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  
  // Test cases for "141" and "dad"
  const testStrings = [ "madam", 141, "sanday", "mom", "listen", "dad"];

    // Loop through the test strings and check if they are palindromes




  
  testStrings.forEach(input => {
    if (isPalindrome(input)) {
      console.log(`Given string "${input}" is a palindrome`);
    } else {
      console.log(`Given string "${input}" is not a palindrome`);
    }
  });
  