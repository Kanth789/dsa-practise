function solve(arr, v) {
    let count = [];
    let res = v;
    let result = 0;
    for (let i = arr.length - 1; i >= 0; i--) { // Start from the largest denomination
      while (res >= arr[i]) { // Keep subtracting the largest denomination while it is greater than or equal to the remaining value
        res -= arr[i];
        count.push(arr[i]);
        result++;
      }
      if (res === 0) break; // Break the loop if the remaining value becomes zero
    }
    return [result,count];
  }
  
  let v = 70;
  let arr = [1, 2, 5, 10, 20, 50, 100, 500, 1000];
  const result = solve(arr, v);
  console.log(result[0],result[1]);
  