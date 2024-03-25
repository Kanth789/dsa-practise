function groupAnagram(array){
    const groupedAnagrams = {};

    for (let i = 0; i < array.length; i++) {
        let word = array[i];
        let sortedWord = word.split("").sort().join("");
        if (groupedAnagrams[sortedWord]) {
            groupedAnagrams[sortedWord].push(word);
        } else {
            groupedAnagrams[sortedWord] = [word];
        }
    }

    const result = Object.values(groupedAnagrams);
    return result;
}

const arrayOfString = ["eat","tea","tan","ate","nat","bat"]

const result = groupAnagram(arrayOfString)
console.log(result)