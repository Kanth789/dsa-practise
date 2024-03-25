

const MergeOverlappingSubintervals = (arr) => {
    let sorrtedArray = []
    for(let i=0;i<arr.length;i++)
    {
       
       for(let j=i+1;j<arr.length;j++)
       {
          let emelemt = arr[i]
          let second = arr[j]
        
          if(second[0,0] <= emelemt[0,1])
          {
            sorrtedArray.push([emelemt[0,0],second[0,1]])
          }else{
            sorrtedArray.push(second)
          }
       }
    }
    return [...new Set(sorrtedArray)] 
}

let arr = [[1,3],[2,6],[8,10],[15,18]]
const result = MergeOverlappingSubintervals(arr)
console.log(result)
