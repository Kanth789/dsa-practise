const  FindSecondSmallestandSecondLargestElementinanarray = (arr) =>{
const sorted = arr.sort((a,b)=>a-b)
const newArry = [...new Set(sorted)]
if(arr.length < 2)
{
    return [-1,-1]
}else{
    return [newArry[1],newArry[newArry.length - 2]]
}

}
let arr = [1]
const result = FindSecondSmallestandSecondLargestElementinanarray(arr)
console.log(result)