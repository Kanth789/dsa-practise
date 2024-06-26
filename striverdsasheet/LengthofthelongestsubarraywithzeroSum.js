const LengthofthelongestsubarraywithzeroSum = (arr)=>{
    let count = 0
    let sum = 0
    let sumIndeex = new Map()
    for(let i=0;i<arr.length;i++)
    {
        sum += arr[i]
        if(sum === 0){
            count = i + 1
        }else{
            if(sumIndeex.has(sum)){
                count = Math.max(count,i-sumIndeex.get(sum))
            }else{
                sumIndeex.set(sum,i)
            }
        }
    }
    return count
}

let arr = [1, 2, 7, -4, 3, 2, -10, 9, 1]
const result = LengthofthelongestsubarraywithzeroSum(arr)
console.log(result)