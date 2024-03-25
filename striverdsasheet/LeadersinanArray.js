

function LeadersinanArray  (arr) {
    let max = arr[arr.length - 1]
    let laderArray = []
    for(let i=arr.length - 1;i>=0;i--)
    {
        
        if(arr[i] >= max)
        {
            laderArray.unshift(arr[i])
            max = arr[i]
        }
    }
    return laderArray
  
}

let nums = [10, 22, 12, 3, 0, 6];
console.log(LeadersinanArray(nums));
