function topFrequency(array,target){
    const groupElement = {}
    for(let i =0;i<array.length;i++)
    {
        let one = array[i]
        let count = 1
        if(groupElement[one])
        {
            groupElement[one]++;
        }
        else{
            groupElement[one] = count
        }
    }
    const result = Object.entries(groupElement)
    const resultSort = result.sort((a,b)=>b-a)
    const resultFinal =  resultSort.splice(0,target)
    return resultFinal.map(([num])=>Number(num))
}

const array = [1,1,1,1,2,2,2,2,3,3,3]
const target = 3
const result = topFrequency(array,target)
console.log(result)