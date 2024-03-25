const mergeTwoSortedArrays = (arr1, arr2) => {
    let sortedArray = [...arr1, ...arr2];
    sortedArray.sort((a, b) => a - b);
    let firstArray = sortedArray.slice(0, arr1.length);
    let secondArray = sortedArray.slice(arr1.length);
    return { firstArray, secondArray };
}

let arr = [1, 3,5,7];
let arrtwo = [0,2,6,8,9];

const result = mergeTwoSortedArrays(arr, arrtwo);
console.log(result);
