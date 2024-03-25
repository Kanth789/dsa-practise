
const CalucateTheSumOfArray = (arr) => {

    // let result = arr.reduce((value,index)=> value + index , 0)
    // return result

    let count = 0
    for(let i =0;i<arr.length;i++)
    {
        count = count + arr[i]
    }
    return count
    
}

const result = CalucateTheSumOfArray([1,2,1,1,5,1])
console.log(result)