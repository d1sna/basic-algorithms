const isPalindrome = (word) =>
  word.toUpperCase() === word.toUpperCase().split("").reverse().join("");
