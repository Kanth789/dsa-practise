
const RemoveallvowelsfromtheString = (arr) => {
    const str = arr.toLowerCase()
    const vowles = ['a','e','i','o','u']
    let output = ''
    for(let i=0;i<str.length;i++)
    {
        if(!vowles.includes(str[i]))
        {
            output = output.concat(str[i])
        }
    } 
    return output
 
}

let arr = "I am very happy today";
const result = RemoveallvowelsfromtheString(arr);
console.log(result);

