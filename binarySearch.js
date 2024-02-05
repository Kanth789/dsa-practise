function BinarySearch(arr,target){
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while(leftIndex <= rightIndex)
    {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

        if(target === arr[middleIndex])
        {
            return middleIndex
        }
        if(target<middleIndex)
        {
            rightIndex = middleIndex - 1
        }
        else{
            leftIndex = middleIndex + 1
        }
    }
    return -1
}
// Input size reduced by half = o(logn)


const array = [-5,2,4,6,10]
console.log(BinarySearch(array,10))
console.log(BinarySearch(array,-5))
console.log(BinarySearch(array,7))