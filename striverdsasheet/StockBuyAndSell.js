

const StockBuyAndSell = (arr) => {
    let max = 0
    let min = Number.MAX_VALUE
    for(let i=0;i<arr.length;i++)
    {
     
        min = Math.min(min,arr[i])
        max = Math.max(max,arr[i] - min)
       
       
    }
    return max
 
}

let arr = [7,1,5,3,6,4]
const result = StockBuyAndSell(arr)
console.log(result)
