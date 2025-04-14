
// INSTRUCTIONS

// Practice pair programming! 

// Reminder of driver/navigator format:
// Person A drives (types), Person B navigates (directs the problem-solving).

// Ideally you should switch roles at some point so both people 
// get to experience both roles - this is easiest in a remote setting if
// you use an online tool like Replit.com where you can invite others to 
// edit the same file but it still formats it as code and can be run in 
// a console (which you can't do in a Google doc!)

// Ultimately you will write and test two functions:
//     1. Create a helper function that accepts a string and returns 
//     the string in reverse.
//     2. Your primary function should accept an array of strings. 
//     For each word in the array, you should print something like, 
//     "The word 'tacocat' is a palindrome!" 
//        or 
//     "The word 'dated' is NOT a palindrome."
//     Make use of your first function. 
    
//     You can choose to use for loops, for/of loops, or even .forEach() 
//     in your second function!

// Pseudocode your logic first, then write actual code.

// You should test the first function with single strings before moving 
// on to the second.

// Here is some sample data for testing:
// ["moon", "mom", "tacocat", "adobo", "agog", "kayak", "bikini", "banana", "level", "garage", "deified", "angora", "radar", "rotator", "dated", "solos", "tenet"]

//-----PALINDROME TEST------
// 1. set up a function reverseName(${name}) that take a string and returns the string in reverse.
// 2. set up a function that take name and goes though a if/else statement to check 
// 3. if its a true palindrome return statement should be "The word ${name} is a palindrome!"
// 4. else return the statement "The word ${name} is NOT a palindrome."

function reverseName(name){
    if (name.length <= 1) {
      return name;
          }  return name.slice(-1) + reverseName(name.slice(0,-1));
      }
  
  function checkPalindrome(name){
      if (reverseName(name) === name){
          return (`The word ${name} is a palindrome!`)
      } else {
          return (`The word ${name} is NOT a palindrome.`)
      }
  }
  
  console.log(checkPalindrome("moon"));
  console.log(checkPalindrome("mom"));
  console.log(checkPalindrome("tacocat"));
  console.log(checkPalindrome("adobo"));
  console.log(checkPalindrome("agog"));
  console.log(checkPalindrome("kayak"));
  console.log(checkPalindrome("bikini"));
  console.log(checkPalindrome("banana"));
  console.log(checkPalindrome("level"));
  console.log(checkPalindrome("garage"));
  console.log(checkPalindrome("deified"));
  console.log(checkPalindrome("angora"));
  console.log(checkPalindrome("radar"));
  console.log(checkPalindrome("rotator"));
  console.log(checkPalindrome("dated"));
  console.log(checkPalindrome("solos"));
  console.log(checkPalindrome("tenet"));