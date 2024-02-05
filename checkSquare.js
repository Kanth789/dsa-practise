//check square in another array
//arr1=[1,2,3,4] arr2=[1,9,4,16]

function checkSquare(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return 'Both arrays must have the same length.';
    } else {
      for (let i = 0; i < arr1.length; i++) {
        let square = false;
        for (let j = 0; j < arr2.length; j++) {
          if (arr1[i] * arr1[i] === arr2[j]) {
            square = true;
            break; // Found a match, no need to continue the inner loop
          }
        }
        if (!square) {
          return 'false'; // No match found for the current element of arr1
        }
      }
    }
    return 'true'; // All elements in arr1 have a square match in arr2
  }
  
  const arr1 = [1, 2, 3, 4];
  const arr2 = [1, 9, 4, 17];
  const result = checkSquare(arr1, arr2);
  console.log(result);
  
