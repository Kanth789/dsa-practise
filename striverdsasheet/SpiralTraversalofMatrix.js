const SpiralTraversalofMatrix = (arr) => {
  let top = 0;
  let left = 0;
  let right = arr.length - 1;
  let bottom = arr.length - 1;
  let sorrtedArray = [];

  while (top <= bottom && left <= right) {
    for (let j = left; j <= right; j++) {
      sorrtedArray.push(arr[top][j]);
    }
    top = top + 1;
    for (let j = top; j <= bottom; j++) {
      sorrtedArray.push(arr[j][right]);
    }
    right = right - 1;
    if (top <= bottom) {
      for (let j = right; j >= left; j--) {
        sorrtedArray.push(arr[bottom][j]);
      }
      bottom = bottom - 1;
    }
    if (left <= right) {
      for (let j = bottom; j >= top; j--) {
        sorrtedArray.push(arr[j][left]);
      }
      left = left + 1;
    }
  }
  return sorrtedArray;
};

let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
const result = SpiralTraversalofMatrix(arr);
console.log(result);
