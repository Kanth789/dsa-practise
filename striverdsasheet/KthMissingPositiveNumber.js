const main = (Arr,K)=>{
    let low = 0, high = Arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        let missing = Arr[mid] - (mid + 1);
        if (missing < K) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return K + high + 1;
}
let Arr = [4,7,9,10]
let k = 4
let result = main(Arr,k)
console.log(result)