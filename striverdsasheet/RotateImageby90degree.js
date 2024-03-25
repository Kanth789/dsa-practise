

const RotateImageby90degree = (arr) => {
    let n = arr.length
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [arr[i][j],arr[j][i]] = [arr[j][i],arr[i][j]]
        }
    }
    console.log(arr)
    for(let i=0;i<n;i++)
    {
        for(let j=0;j<Math.floor(n/2);j++)
        {
            [arr[i][j],arr[i][n - 1 -j]] = [arr[i][n-1-j],arr[i][j]]
        }
    }
    return arr
}

let arr = [[1,2,3],[4,5,6],[7,8,9]]
const result = RotateImageby90degree(arr)
console.log(result)

