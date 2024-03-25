const RearrangeArrayElementsbySign = (arr, n) => {
    let negative = [];
    let positive = [];
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            positive.push(arr[i]);
        } else {
            negative.push(arr[i]);
        }
    }
    const minLen = Math.min(positive.length, negative.length);
    for (let i = 0; i < minLen; i++) {
        arr[2 * i] = positive[i];
        arr[2 * i + 1] = negative[i];
    }
    return arr;
};

let arr = [1, 2, -3, -1, -2, 3];
let n = arr.length;
const result = RearrangeArrayElementsbySign(arr, n);
console.log(result);
