function canItSafe(arr,mid,cows){
    let n = arr.length;
    let countCows = 1
    let allocated = arr[0]
    for(let i = 1; i < n; i++){
        if(arr[i] - allocated >= mid)
            {
                countCows++
                allocated= arr[i]
            }
        if(countCows >= cows)
            {
                return true
            }
       
    }
    return false
}

function slove(arr, cows) {
  arr.sort((a,b)=>a-b)
  let low = 1 ,high = arr[arr.length - 1] - arr[0]
  while(low <= high){
    let mid = Math.floor((low + high) / 2)
    if(canItSafe(arr,mid,cows) === true)
        {
            low = mid + 1
        }else{
            high = mid - 1
        }
        
  }
  return high
}
let arr = [0, 3, 4, 7, 10, 9];
let cows = 4;
const result = slove(arr, cows);
console.log(result);
