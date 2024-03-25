
const MaximumProductSubarrayinanArray = (arr) => {
    let result = 0
    for(let i=0;i<arr.length;i++)
    {
        for(let j= i +1;j<arr.length;j++)
        {
            let prod = 1;
            for (let k = i; k <= j; k++) {
                prod *= arr[k];
            }
            result = Math.max(result, prod);
        }
    }
    return result
}


let arr = [1,2,3,4,5,0]
const result = MaximumProductSubarrayinanArray(arr)
console.log(result)