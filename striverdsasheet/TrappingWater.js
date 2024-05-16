// function findTrappingWater(arr) {
//     let left = 0,
//       right = arr.length - 1,
//       maxLeft = 0,
//       maxRight = 0,
//       result = 0;

//     while (left <= right) {
//       if (arr[left] <= arr[right]) {
//         if (arr[left] >= maxLeft) {
//           maxLeft = arr[left];
//         } else {
//           result += maxLeft - arr[left];
//         }
//         left++;
//       } else {
//         if (arr[right] >= maxRight) {
//           maxRight = arr[right];
//         } else {
//           result += maxRight - arr[right];
//         }
//         right--;
//       }
//     }
//     return result;
//   }

//   let arr = [4, 2, 0, 3, 2, 5];
//   const result = findTrappingWater(arr);
//   console.log(result);

// let arr = [1, 1, 2, 2, 2, 3, 3];
// let result = [];

// const uniqueElements = [...new Set(arr)];
// const duplicatesCount = arr.length - uniqueElements.length;
// for (let i = duplicatesCount; i < arr.length; i++) {
//   uniqueElements.push("-");
// }
// console

let arr = [1, 0, 1, 1, 0, 1];
let maxConsecutiveOnes = 0;
let consecutiveOnes = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
        consecutiveOnes++;
        maxConsecutiveOnes = Math.max(maxConsecutiveOnes, consecutiveOnes);
    } else {
        consecutiveOnes = 0;
    }
}

console.log(maxConsecutiveOnes);
