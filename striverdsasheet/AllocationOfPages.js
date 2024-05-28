function countPages(arr, mid) {
    let students = 1; // Start with one student
    let pageStudents = 0;
    for (let i = 0; i < arr.length; i++) {
      if (pageStudents + arr[i] <= mid) {
        pageStudents += arr[i];
      } else {
        students++;
        pageStudents = arr[i];
      }
    }
    return students;
  }
  
  function findPages(arr, n, m) {
    if (m > n) {
      return -1;
    }
  
    let low = Math.max(...arr);
    let high = arr.reduce((acc, value) => acc + value, 0);
  
    let result = high;
  
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      let students = countPages(arr, mid);
      
      if (students > m) {
        low = mid + 1;
      } else {
        result = mid;
        high = mid - 1;
      }
    }
    return result;
  }
  
  let arr = [25, 46, 28, 49, 24];
  const n = 5;
  const m = 4;
  const ans = findPages(arr, n, m);
  console.log(ans);
  