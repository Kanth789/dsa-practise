function solve(values, weights, n, w) {
  values.sort((a, b) => a - b);
  weights.sort((a, b) => a - b);
  let result = 0;
  let count = w
  for (let i = 0; i < n; i++) {
    if(weights[i] <= count)
        {
            result += values[i]
            count -= weights[i]
        }else{
            result += (values[i]/weights[i]) * count
            break
        }
  }
  return result;
}

let values = [100, 60, 120];
let weights = [20, 10, 30];

let n = 3,
  w = 50;

const result = solve(values, weights, n, w);
console.log(result);
