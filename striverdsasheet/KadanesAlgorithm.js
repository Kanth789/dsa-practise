

const KadanesAlgorithm = (arr) => {
    let max = Number.MIN_SAFE_INTEGER
    let sum = 0
    let startIndex = 0
    let endIndex = 0
    let start = 0
    for(let i=0;i<arr.length;i++)
    {
        if(sum === 0)
        {
            start = i
        }
        sum += arr[i]

        if(sum > max)
        {
            max = sum
            startIndex = start
            endIndex = i
        }

        if(sum < 0)
        {
            sum = 0
        }

    }
    let sortedResult = arr.slice(startIndex,endIndex + 1)
    return [max,sortedResult]
  
}

let arr = [-2,1,-3,4,-1,2,1,-5,4] 
const result = KadanesAlgorithm(arr)
console.log(result)
