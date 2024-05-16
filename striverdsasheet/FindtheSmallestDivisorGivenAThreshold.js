const sumOfArray= (arr,div) =>{
    let sum = 0 
    for(let i=0;i<arr.length;i++)
    {
        sum += Math.ceil(arr[i]/div)
    }
    return sum
}
const FindtheSmallestDivisorGivenAThreshold = (arr, limit) => {
  let n = arr.length
  let low = 0
  let high =  Math.max(...arr)
  if(n > limit) return -1;
  while(low<=high)
  {
    let mid = Math.floor((low + high) / 2)
    if(sumOfArray(arr,mid) <= limit)
    {
        high = mid - 1
    }else{
        low = mid + 1
    }
  }
  return low
};



let arr = [1, 2, 3, 4, 5];
let limit = 8;

const result = FindtheSmallestDivisorGivenAThreshold(arr, limit);
console.log(result);
