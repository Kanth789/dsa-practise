
const NthRootOfANumberUsingBinarySearch = (n) => {
    let low = 1,high = n
    while(low<= high)
    {
        let mid = Math.floor((low + high) / 2)
        if(n % mid === 0)
        {
            low = mid + 1
        }else{
            high  = mid - 1
        }
    }
    return high
}


let n = 36
let ans = NthRootOfANumberUsingBinarySearch(n)
console.log(ans)