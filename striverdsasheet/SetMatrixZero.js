// const setMatrixZero = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] == 0) {
//         markRow(i);
//         markColumn(j); 
//       }
//     }
//   }
//   for(let i=0;i<arr.length;i++)
//   {
//     for(let j=0;j<arr[i].length;j++)
//     {
//       if(arr[i][j] == -1)
//       {
//         arr[i][j] = 0
//       }
//     }
//   }
//   return arr;
// };

// const  markRow = (i) =>{
//   for(let j=0;j<arr.length;j++)
//   {
//     if(arr[i][j] != 0)
//     {
//       arr[i][j] = -1
//     }
//   }
// }

// const markColumn = (j) =>{
//   for(let i=0;i<arr.length;i++)
//   {
//     if(arr[i][j] != 0)
//     {
//       arr[i][j] = -1
//     }
//   }
// }

// let arr = [
//   [0, 1, 2, 0],
//   [3, 4, 5, 2],
//   [1, 3, 1, 5]
// ];
// const result = setMatrixZero(arr);
// console.log(result);




const setMatrixZero = (arr) =>{
  let row = []
  let column = []
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++)
    {
      if(arr[i][j] == 0)
      {
        row[i] = 1
        column[j] = 1
      }
    }
  }

  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++)
    {
      if(row[i] || column[j]){
        arr[i][j] = 0
      }
    }
  }
  return arr 
}


let arr = [[1,1,1],[1,0,1],[1,1,1]]
const result = setMatrixZero(arr);
console.log(result);