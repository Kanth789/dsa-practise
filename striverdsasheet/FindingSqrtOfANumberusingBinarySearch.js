
const FindingSqrtOfANumberusingBinarySearch = (n) => {
 let low = 1 , high = n
 while(low<= high){
    let mid = Math.floor((low + high) / 2)
    let ans = mid * mid
    if(ans <= n)
    {
        low = mid + 1
    }else{
        high = mid - 1
    }
 }
 return high
}

let n = 36
let ans = FindingSqrtOfANumberusingBinarySearch(n)
console.log(ans)