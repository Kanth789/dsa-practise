const Sortanarrayof0s1sand2s = (arr) => {
  let low = 0;
  let high = arr.length - 1;
  let i = 0;

  while (i <= high) {
    if (arr[i] === 0) {
     
      [arr[i], arr[low]] = [arr[low], arr[i]];
      low++;
      i++;
      

    } else if (arr[i] === 2) {
      [arr[i], arr[high]] = [arr[high], arr[i]];
      high--;
    } else {
      i++;
    }
  }
};

let arr = [2, 0, 1];
Sortanarrayof0s1sand2s(arr);
console.log(arr);
