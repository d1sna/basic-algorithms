const isAnagram = (firstWord, secondWord) => {
  if (firstWord.length !== secondWord.length) return false;

  return (
    firstWord.toUpperCase().split("").sort().join("") ===
    secondWord.toUpperCase().split("").sort().join("")
  );
};

const result = isAnagram("abcasd", "cadasb");
console.log({ result });
