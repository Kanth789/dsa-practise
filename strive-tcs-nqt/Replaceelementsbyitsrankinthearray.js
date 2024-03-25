const Replaceelementsbyitsrankinthearray = (arr) => {
  const sorrted = [...arr].sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const rank = sorrted.indexOf(arr[i]) + 1;
    result.push(rank);
  }
  return result;
};

let arr = [20, 15, 26, 2, 98, 6];
const result = Replaceelementsbyitsrankinthearray(arr);
console.log(result);
