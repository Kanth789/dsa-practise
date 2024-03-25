
const ConvertBinarytoOctal = (arr) => {
    // let decimal = parseInt(arr, 2);

    // // Convert decimal to octal
    // let octal = decimal.toString(8);

    // return octal;
    return arr.toString(2)
  
}

let arr1 =15;

const result = ConvertBinarytoOctal(arr1);
console.log(result);