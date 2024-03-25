
const RemoveDuplicatesinplacefromSortedArray = (arr) => {
    arr.sort((a,b)=>a-b)
    return [...new Set(arr)]
  
}

const result = RemoveDuplicatesinplacefromSortedArray([1, 1, 2, 2, 2, 3, 3])
console.log(result)