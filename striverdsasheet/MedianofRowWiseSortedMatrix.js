function findMedian(arr, row, col) {
  let median = [];
  let index = 0;
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      median[index] = arr[i][j];
      index++;
    }
  }
  return median[Math.floor((row * col) / 2)];
}

let arr = [
  [1, 4, 7, 10, 12],
  [2, 3, 6, 15],
];
let row = 5;
let col = 4;

const result = findMedian(arr, row, col);
console.log(result);
