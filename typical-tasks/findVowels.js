const findVowels = (word) => {
  const vowels = ["a", "e", "u", "i"];

  return word
    .split("")
    .map((letter) => vowels.includes(letter))
    .filter((e) => !!e).length;
};

console.log(findVowels("test"));
