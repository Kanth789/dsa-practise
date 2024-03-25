const CountSubarraysumEqualsK = (arr, k) => {
    let count = 0;
    let sorrtedArray = []
    for (let start = 0; start < arr.length; start++) {
        let sum = 0;
        for (let end = start; end < arr.length; end++) {
            sum += arr[end];
            if (sum === k) {
                count++;
                sorrtedArray.push(arr.slice(start,end +1))
            } else if (sum > k) {
                break; // no need to continue, as further elements will only increase the sum
            }
        }
    }

    return {count,sorrtedArray};
};

let arr = [3, 1, 2, 4];
let k = 6;
const result = CountSubarraysumEqualsK(arr, k);
console.log(result); // Output: 2
