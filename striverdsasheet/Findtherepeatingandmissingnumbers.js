const findRepeatingAndMissingNumbers = (arr) => {
    arr.sort((a,b)=>a-b)
    let missingNumber = 0
    let repeatingNuber = 0
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i] !== i+1)
        {
            missingNumber = i+1
        }
        if(arr[i] === arr[i + 1 ])
        {
            repeatingNuber=arr[i]
        }
    }
   
    return { missingNumber,repeatingNuber}
}

let arr = [3,1,2,5,4,6,7,5];
const result = findRepeatingAndMissingNumbers(arr);
console.log(result);
