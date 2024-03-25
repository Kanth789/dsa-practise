
 const FindtheLargestelementinanarray = (arr) => {
//    let max = arr[0]
//    for(let i=1;i<arr.length;i++){
//         if(arr[i] > max)
//         {
//             max = arr[i]
//         }
//    }
//    return max    

/* another method */
    // const sortedArray = arr.sort((a,b)=>a-b)
    // return sortedArray[sortedArray.length - 1]
/* another method */

    const sortedArray = arr.sort()
    return sortedArray[arr.length - 1]

}

const result = FindtheLargestelementinanarray([2,4,5,6,0,1])
console.log(result)
