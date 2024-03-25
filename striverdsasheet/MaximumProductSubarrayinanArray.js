const MaximumProductSubarrayinanArray = (arr) =>{
    let maxEndingHere = 1;
    let minEndingHere = 1;
    let maxSoFar = 1;

    for(let i=0;i<arr.length;i++)
    {
        if (arr[i] > 0) {
            maxEndingHere = maxEndingHere * arr[i]; // 2
            minEndingHere = Math.min(minEndingHere * arr[i], 1); // 1
        } else if (arr[i] === 0) {
            maxEndingHere = 1;
            minEndingHere = 1;
        } else {
            let temp = maxEndingHere; // 2 
            maxEndingHere = Math.max(minEndingHere * arr[i], 1); // 1
            minEndingHere = temp * arr[i]; 
        }

        if (maxSoFar < maxEndingHere) {
            maxSoFar = maxEndingHere;
        }
    }
    return maxSoFar;
}





let arr = [1,2,-3,0,-4,-5]
const result = MaximumProductSubarrayinanArray(arr)
console.log(result)