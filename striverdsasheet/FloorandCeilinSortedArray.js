const FloorandCeilinSortedArray = (arr,target,n) =>{
    let low = 0
    let high = n - 1
    let floor = 0
    let ceil = 0
    while(low <= high)
    {
        let mid = Math.floor((low+high)/2)
        if(arr[mid] >= target)
        {
            if(arr[mid] === target){
            floor = arr[mid ]
            ceil = arr[mid]
            }else{
                floor = arr[mid -1]
            ceil = arr[mid]
            }
            high = mid - 1
        }else{
            low = mid + 1
        }
    }
    return {floor,ceil}
}

let arr = [3, 4, 4, 7, 8, 10]
let target = 5 , n = 6
const result = FloorandCeilinSortedArray(arr,target,n)
console.log(result)