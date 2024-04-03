const MinimuminRotatedSortedArray = (arr) => {
    let low = 0
    let n = arr.length 
    let high = n - 1
    let ans = Infinity;
    while(low <= high)
    {
        let mid = Math.floor((low + high) / 2 )
        if(arr[low] <= arr[high]){
            ans = Math.min(ans,arr[low])
            break
        }
        if(arr[low]<= arr[mid])
        {
            ans = Math.min(ans,arr[low])
            low = mid +1
        }else{
            ans = Math.min(ans,arr[mid])
            high = high - 1
        }
    }
    return ans
}

let arr = [4,5,6,7,0,1,2,3]
const result = MinimuminRotatedSortedArray(arr)
console.log(result)