// const PeakElementInArray = (arr) => {
//     const n = arr.length;
//     for (let i = 0; i < n; i++) {
//         if (i === 0 && arr[i] > arr[i + 1]) {
//             return i;
//         }
//         if (i === n - 1 && arr[i] > arr[i - 1]) {
//             return i;
//         }
//         if (arr[i - 1] < arr[i] && arr[i + 1] < arr[i]) {
//             return i;
//         }
//     }
// }

// let arr = [5, 4, 3, 2, 1];
// const result = PeakElementInArray(arr);
// console.log(result);


let n = arr.length; // Size of the array

    // Edge cases:
    if (n === 1) return 0;
    if (arr[0] > arr[1]) return 0;
    if (arr[n - 1] > arr[n - 2]) return n - 1;

    let low = 1, high = n - 2;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        // If arr[mid] is the peak:
        if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1])
            return mid;

        // If we are in the left:
        if (arr[mid] > arr[mid - 1]) low = mid + 1;

        // If we are in the right:
        // Or, arr[mid] is a common point:
        else high = mid - 1;
    }
    // Dummy return statement
    return -1;