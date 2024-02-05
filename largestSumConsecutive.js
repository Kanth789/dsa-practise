//[1,2,3,4,3,5,4,6,7,8] = 10

function consecutive(array,num){
if(num>array.length)
{
    return "number have to be less than array length"
}
else{
    let max = 0
    for(let i = 0;i<array.length - num + 1;i++)
    {
        let temp = 0;
        for(let j = 0;j<num;j++)
        {
            temp += array[i + j]
        }
        if(temp > max)
        {
            max = temp
        }
    }
    return max
}
}
const result  = consecutive([1,2,3,4,3,5,4,6,7,8],4)
console.log(result)