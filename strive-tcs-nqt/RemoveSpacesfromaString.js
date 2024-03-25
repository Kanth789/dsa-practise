
const RemoveSpacesfromaString = (arr) => {
    let str = ''
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i] !== ' '){
       str =  str.concat(arr[i])
        }
    }
    return str

}

let arr = "Take you forward";
const result = RemoveSpacesfromaString(arr);
console.log(result);