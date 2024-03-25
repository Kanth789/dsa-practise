const CountReversePairs = (arr) => {
  let index = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (i < j) {
        if (arr[i] > 2 * arr[j]) {
          index.push([arr[i], arr[j]]);
        }
      }
    }
  }
  return index;
};

let arr = [3,2,1,4];
const result = CountReversePairs(arr);
console.log(result);
