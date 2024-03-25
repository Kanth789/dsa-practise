
const Countfrequencyofeachelementinthearray = (arr) => {
    const commonElement = [...new Set(arr)]
    let result = []
    for(let j=0;j<commonElement.length;j++)
    {
        const filter = arr.filter((eachItem)=>eachItem === commonElement[j])
        result.push({key:commonElement[j],value:filter.length})
    }
    return result
}

const result = Countfrequencyofeachelementinthearray([2,2,3,3,3,1])
console.log(result)


