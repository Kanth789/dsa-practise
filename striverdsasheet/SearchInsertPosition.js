function searchInsert(arr, x) {
    let n = arr.length; // size of the array
    let low = 0, high = n - 1;
    let ans = n;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        // maybe an answer
        console.log(low,high,mid)
        if (arr[mid] >= x) {
            ans = mid;
            
            high = mid - 1;
        }
        else {
            low = mid + 1; // look on the right
        }
    }
    return {ans,arr};
}

let arr = [1, 2, 4, 7];
let x = 2;
let ind = searchInsert(arr, x);
console.log("The index is:", ind);