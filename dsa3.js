function containDuplicate(array){
    const convertTheSet = new Set([array])

    if(array === convertTheSet)
    {
        return false
    }else{
        return true
    }
}

function containsDuplicate(array){
    const sortedArray = array.sort((a, b) => a - b);
    for(let i = 0;i<sortedArray.length;i++)
    {
        for(let j = i+1;j<sortedArray.length;j++)
        {
            if(sortedArray[i] === sortedArray[j])
            {
                return true
            }
            
        }
    }
    return false
}


const array = [1,2,3,4]
const result = containsDuplicate(array)
console.log(result)