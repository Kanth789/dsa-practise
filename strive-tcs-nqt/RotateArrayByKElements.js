
const RotateArrayByKElements = (arr,k) => {
    let kElements = arr.slice(0,k)
    let remaningElement = arr.slice(k)
    return remaningElement + ',' + kElements

}

const result = RotateArrayByKElements([1,2,3,4,5,6,7],3)
console.log(result)