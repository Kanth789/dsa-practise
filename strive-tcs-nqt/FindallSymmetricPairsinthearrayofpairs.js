
const FindallSymmetricPairsinthearrayofpairs = (arr) => {
    let output = []
    for(let i = 0;i < arr.length;i++)
    {
        for(let j = i + 1;j<arr.length;j++)
        {
            if(arr[j][0] === arr[i][1] && arr[j][1] === arr[i][0])
            {
                output.push((arr[i],arr[j]))
            }
        }
    }
    return output

}

let arr = [[1, 2], [2, 1], [3, 4], [4, 5], [5, 4]  ]
const result = FindallSymmetricPairsinthearrayofpairs(arr)
console.log(result)