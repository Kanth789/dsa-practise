function CheckSquareElement(array, num) {
    let middle = Math.floor(array.length / 2);
    let first = 0;
    let last = array.length;
  
    if (num < array[middle]) {
      for (let i = first; i < middle; i++) {
        if (num === array[i]) {
          return "index " + i;
        }
      }
    } else if (num === array[middle]) {
      return "index " + middle;
    } else {
      for (let i = middle + 1; i < last; i++) {
        if (num === array[i]) {
          return "index " + i;
        }
      }
    }
    return "Element not found.";
  }
  
  const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  console.log(CheckSquareElement(result, 10));
  