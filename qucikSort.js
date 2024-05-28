function QuickSort(arr) {
    debugger
  if (arr.length < 2) {
    return arr;
  }
  let povit = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < povit) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...QuickSort(left), povit, ...QuickSort(right)];
}

//O(n^2)

const array = [9, -2, 3, 6, 1, 8];

console.log(QuickSort(array));
