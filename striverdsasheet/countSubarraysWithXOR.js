function countSubarraysWithXOR(arr, k) {
    let count = 0;
    let sorrtedArray = []
    for (let start = 0; start < arr.length; start++) {
        let xor = 0;
        for (let end = start; end < arr.length; end++) {
            xor ^= arr[end];
           
            if (xor === k) {
                count++;
                sorrtedArray.push(arr.slice(start,end+1))
            }
        }
    }
    return {count,sorrtedArray};
}

const A = [4, 2, 2, 6, 4];
const k = 6;
const result = countSubarraysWithXOR(A, k);
console.log("Result:", result);
