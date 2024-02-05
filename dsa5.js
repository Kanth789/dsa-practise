function isAnagram(string, stringTwo) {
  if (string.length === stringTwo.length) {
    const sortOne = string.split("").sort().join("");
    const sortTwo = stringTwo.split("").sort().join("");

    if (sortOne === sortTwo) {
      return true;
    } else {
      return false;
    }
  } else {
    return " false false";
  }
}

const string = "anagram";
const stringTwo = "naagrm";

const result = isAnagram(string, stringTwo);
console.log(result);
