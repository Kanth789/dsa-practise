function slove(arr, arrOne, m, n, k) {
    if (m > n) {
        return slove(arrOne, arr, n, m, k);
    }

    let low = Math.max(0, k - n);
    let high = Math.min(k, m);

    while (low <= high) {
        let cutOne = Math.floor((low + high) / 2);
        let cutTwo = k - cutOne;

        let l1 = cutOne === 0 ? Number.MIN_VALUE : arr[cutOne - 1];
        let l2 = cutTwo === 0 ? Number.MIN_VALUE : arrOne[cutTwo - 1];

        let r1 = cutOne === m ? Number.MAX_VALUE : arr[cutOne];
        let r2 = cutTwo === n ? Number.MAX_VALUE : arrOne[cutTwo];

        if (l1 <= r2 && l2 <= r1) {
            return Math.max(l1, l2);
        } else if (l1 > r2) {
            high = cutOne - 1;
        } else {
            low = cutOne + 1;
        }
    }
    return -1;
}

let arr = [2, 3, 6, 7, 9];
let arrOne = [1, 4, 8, 10];

let m = arr.length;
let n = arrOne.length;

let k = 5;
const result = slove(arr, arrOne, m, n, k);
console.log(result);
