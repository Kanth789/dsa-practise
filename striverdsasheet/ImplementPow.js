const index = (a, b) => {
    let result = a;
    for (let i = 1; i < b; i++) {
        result *= a;
    }
    return result;
}

let a = 2.10000;
let b = 3;
const result = index(a, b);
console.log(result);
