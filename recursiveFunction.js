// sorting using recursive function
let arrr = [2, 3, 1, 4];
let newArr = []
let i = 0;
let j = 1;

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

function sortArray(array) {
  if (sort(array)) {
    newArr = array
    return ;
  }
  else if (array[i] < array[j]) {
    i++;
    j++;
    sortArray(array);
  } else {
    [array[i], array[j]] = [array[j], array[i]];
    i = 0;
    j = 1;
    sortArray(array);
  }
}

sortArray(arrr)
console.log(newArr)