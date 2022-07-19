function isPalindrome(word) {
  // Write your algorithm here
  const reversed = word.split("").reverse().join("");
 return reversed === word
 
}


/* declare a new variable. Variable = take word, take string and convert to an array, reverse the array, 
then reconnect to return to string.

if that variable equals word, then truthy. If it doesn't, it is falsey. 

/*
  Add written explanation of your solution here
  If a word is reversed and still is the same as the orginal 
  word, it is a palindrome. So when we receive a word, we reverse it,
  but create a new variable to compare the original to. If the original word is the 
  same as the new word, it would have to be a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
