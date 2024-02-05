



function returnTheSameNumber(array,target){
    let result = []
    for(let i=0;i<=array.length;i++)
    {
        for(let j=i+1;j<array.length;j++)
        {
            if(array[i] + array[j] === target)
            {
                result.push([array[i],array[j]])
            }
    
        }
    }
    return  result
}
const array = [3,2,4,1,5]
const target = 9

const result = returnTheSameNumber(array,target)
console.log(result)