const index = (a,b,target) =>{
    let isFound = false
    for(let i=0;i<a;i++)
    {
        for(let j=0;j<b;j++)
        {
            if(arr[i][j] === target && arr[i][j-1] < arr[i][j])
            {
                isFound = true
            }
        }
    }
    return isFound
}   

let a = 3
let b = 4
let target = 8
let arr =  [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
const result = index(a,b,target)
console.log(result)