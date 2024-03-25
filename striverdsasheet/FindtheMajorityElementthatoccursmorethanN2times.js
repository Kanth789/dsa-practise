

const FindtheMajorityElementthatoccursmorethanN2times = (arr,k) => {
    let elemetn;
    for(let i=0;i<arr.length;i++)
    {
        const filter = arr.map((eachItem)=>eachItem === arr[i])
        if(filter.length >= k)
        {
            elemetn = arr[i]
        }
    }
    return elemetn
  
}

let arr = [-53 ,75 ,56 ,56 ,56 ]
let k = Math.floor(arr.length / 2)
const result = FindtheMajorityElementthatoccursmorethanN2times(arr,k)
console.log(result)