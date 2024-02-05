function maxAreaRectangle(array){

    let count = 0
    for(let i =0;i<array.length;i++)
    {
        let value = array[i]
        for(let j=0;j<array.length;j++)
        {
            if(value<array[j])
            {
                count++
            }
        }
    }
    return count

}

const array = [2,1,5,6,2,4]
const result = maxAreaRectangle(array)
console.log(result)