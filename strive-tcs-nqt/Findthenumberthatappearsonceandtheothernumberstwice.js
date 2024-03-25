
const Findthenumberthatappearsonceandtheothernumberstwice = (arr) => {
    let count = 0
    for(let i=0;i<arr.length;i++)
    {
        const filter = arr.filter((eachItem)=>eachItem === arr[i])
        if(filter.length === 1)
        {
            count = filter[0]
        }
    }
    return count
}

let arr = [8, 8, 9, 9 ,10]
const result = Findthenumberthatappearsonceandtheothernumberstwice(arr)
console.log(result)

