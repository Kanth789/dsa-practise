
const ConvertOctalToBinaray = (arr) => {
    let decimal = parseInt(arr, 8); // Convert octal to decimal
    let binary = decimal.toString(2); // Convert decimal to binary
    return binary.padStart(3 * arr.length, '0'); 
  
}

let arr1 =345;

const result = ConvertOctalToBinaray(arr1);
console.log(result);