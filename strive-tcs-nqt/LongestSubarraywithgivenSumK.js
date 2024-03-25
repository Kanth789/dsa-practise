
const LongestSubarraywithgivenSumK = (arr,k) => {
    let sum = 0;
    let maxLength = 0
    let sumIndiecs = new Map()
    for(let i=0;i<arr.length;i++)
    {
        sum += arr[i]

        if(sum === k)
        {
            maxLength = i + 1
        }

        if(sumIndiecs.has(sum - k))
        {
            maxLength = Math.max(maxLength,i - sumIndiecs.get(sum - k))

        }
        if(!sumIndiecs.has(sum))
        {
            sumIndiecs.set(sum,i)
        }
        return maxLength

        
    }
}

let arr = [-1, 1, 1]
let k = 1
const result = LongestSubarraywithgivenSumK(arr,k)
console.log(result)