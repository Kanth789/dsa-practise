function LongestConsecutiveSequenceinanArray(array) {
    [1,2,3,]
    let sortedArray = array.sort((a, b) => a - b);
    let longestSequence = [sortedArray[0]];
    let currentSequence = [sortedArray[0]];
    for (let i = 1; i < sortedArray.length; i++) {
        if (sortedArray[i] === sortedArray[i - 1] + 1) {
            currentSequence.push(sortedArray[i]);

        }
             
        else if (sortedArray[i] !== sortedArray[i - 1] ) {
            currentSequence = [sortedArray[i]];
        }

        if (currentSequence.length > longestSequence.length) {
            longestSequence = currentSequence;
        }
    }

    return longestSequence;
}

const array = [100, 200, 1, 3, 2,4, 3, 8, 5, 7, 6];
const result = LongestConsecutiveSequenceinanArray(array);
console.log(result);
