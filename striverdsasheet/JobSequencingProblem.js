class Job {
    constructor(x, y, z) {
      this.id = x;
      this.deadline = y;
      this.profit = z;
    }
  }
  
  function solve(arr) {
    arr.sort((a, b) => b.profit - a.profit);
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].deadline > max) {
        max = arr[i].deadline;
      }
    }
    let result = [];
    for (let i = 0; i <= max; i++) {
      result[i] = -1;
    }
    let count = 0,
      jobProfit = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = arr[i].deadline; j > 0; j--) {
        if (result[j] === -1) {
          result[j] = i;
          count++;
          jobProfit += arr[i].profit;
          break;
        }
      }
    }
    return jobProfit;
  }
  
  let arr = [];
  arr.push(new Job(1, 4, 20));
  arr.push(new Job(2, 1, 10));
  arr.push(new Job(3, 2, 40));
  arr.push(new Job(4, 2, 30));
  
  const result = solve(arr);
  console.log(result);
  