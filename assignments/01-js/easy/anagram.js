/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

 
  let sorted1 = str1.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
  let sorted2 = str2.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');

  
  return sorted1 === sorted2;
}

// Test the function
console.log(isAnagram('Debit Card', 'Bad Creadit')); // Expected output: true



module.exports = isAnagram;
