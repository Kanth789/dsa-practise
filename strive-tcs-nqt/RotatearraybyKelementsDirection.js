
const RotatearraybyKelementsDirection = (arr,value,direction) => {
    if (direction === 'left') {
        const rotatedLeft = arr.slice(value + 1).concat(arr.slice(0, value));
        return rotatedLeft;
    } else if (direction === 'right') {
        const rotatedRight = arr.slice(-value).concat(arr.slice(0, -value));
        return rotatedRight;
    } 
}
let arr = [1,2,3,4,5,6,7];
const result = RotatearraybyKelementsDirection(arr,2 ,"right");
console.log(result);
