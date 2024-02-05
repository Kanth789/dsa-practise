function longestConsecutive(array)
{
    let sortedArray = array.sort((a, b) => a - b);
    let longestSequence = [sortedArray[0]];
    let currentSequence = [sortedArray[0]];

    for (let i = 1; i < sortedArray.length; i++) {
        if (sortedArray[i] === sortedArray[i - 1] + 1) {
            currentSequence.push(sortedArray[i]);
        } else {
            currentSequence = [sortedArray[i]];
        }

        if (currentSequence.length > longestSequence.length) {
            longestSequence = currentSequence;
        }
    }

    return longestSequence.length;

    
}

const array = [100,90,1,22,44,2,3,4]
const result = longestConsecutive(array)
console.log(result)