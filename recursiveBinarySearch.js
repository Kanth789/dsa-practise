function recursiveBinarSearch(arr,target){
    return BinarySearch(arr,target,0,arr.length - 1)

}

function BinarySearch(arr,target,leftIndex,rightIndex)
{
    if(leftIndex <= rightIndex){
        return -1
    }
    let middleIndex = Math.floor((leftIndex+rightIndex)/2)
    if(target === arr[middleIndex])
    {
        return middleIndex
    }
    if(target < arr[middleIndex])
    {
       return  BinarySearch(arr,target,leftIndex,middleIndex - 1)
    }
    else{
       return  BinarySearch(arr,target,middleIndex + 1, rightIndex)
    }

}

console.log(recursiveBinarSearch( [-5,2,4,6,10]),10)
console.log(recursiveBinarSearch( [-5,2,4,6,10]),-5)
console.log(recursiveBinarSearch( [-5,2,4,6,10]),1)