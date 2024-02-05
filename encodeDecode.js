function enCode(array)
{
    let result = []
    for(let item in array)
    {   
        result.push(array[item] + ':;')
    }
    return result.toString()

}
//linit:;,string:;,cap:;,love:;

function deCode(string)
{
    let result = []
    let array = string.split(',')
    for(let item in array)
    {
        result.push(array[item].slice(0,-2))
    }
    return result
}



const array = ["linit","string","cap","love"]
const result = enCode(array)
const resultDecode = deCode(result)
console.log("encode : ",result)
console.log("decode : " , resultDecode)
