// function generateSubsets(arr) {
//     let subsets = [];
    
//     function generate(index, subsetSum) {
//         console.log(index,subsetSum)
//         if (index === arr.length) {
//             subsets.push(subsetSum);
//             return;
//         }
        
//         // Include the current element
//         generate(index + 1, subsetSum + arr[index]);
        
//         // Exclude the current element
//         generate(index + 1, subsetSum);
//     }
    
//     generate(0, 0);
    
//     // Sort and return the subsets
//     return subsets.sort((a, b) => a - b);
// }

// // Example usage:
// const arr = [5, 2, 1];
// const subsets = generateSubsets(arr);
// console.log(subsets); // Output: [0, 1, 2, 3, 5, 6, 7, 8]

// function uniqueSubsets(array) {
//     // Helper function to generate subsets recursively
//     function generateSubsets(index, subset) {
//         // Base case: if index equals array length, we've reached the end
//         if (index === array.length) {
//             subsets.push([...subset]);
//             return;
//         }
        
//         // Include the current element
//         generateSubsets(index + 1, [...subset,arr[index]]);
        
//         // Exclude the current element
//         generateSubsets(index + 1, subset);
//     }

//     // Initialize an empty array to store subsets
//     const subsets = [];
    
//     // Start generating subsets from index 0 and an empty subset
//     generateSubsets(0, []);
    
//     return subsets;
// }

// // Example usage:
// const arr = [1,2,2];
// const result = uniqueSubsets(arr);
// console.log(result);



// function combinationSum(candidates, target) {
//     candidates.sort((a,b) => a-b)
//     const result = [];
    
//     function backtrack(startIndex, currentCombination, currentSum) {
//         if (currentSum === target) {
//             result.push([...currentCombination]);
//             return;
//         }
        
//         else if (currentSum > target) {
//             return;
//         }
        
//         for (let i = startIndex; i < candidates.length; i++) {
//             currentCombination.push(candidates[i]);
        
//             backtrack(i+1, currentCombination, currentSum + candidates[i]);
//             currentCombination.pop();

//         }
//     }
    
//     backtrack(0, [], 0);
//     return result;
// }

// // Example usage:
// const array = [10,1,2,7,6,1,5];
// const target = 8;
// console.log(combinationSum(array, target));


// function partitionPalindrome(s) {
//     const result = [];
    
//     function isPalindrome(str) {
//         return str === str.split('').reverse().join('');
//     }
    
//     function backtrack(start, path) {
//         if (start === s.length) {
//             result.push([...path]);
//             return;
//         }
//         for (let i = start; i < s.length; i++) {
//             const substring = s.substring(start, i + 1);
//             if (isPalindrome(substring)) {
//                 path.push(substring);
//                 backtrack(i + 1, path);
//                 path.pop();
//             }
//         }
//     }
    
//     backtrack(0, []);
//     return result;
// }

// // Example usage:
// const s = "aab";
// console.log(partitionPalindrome(s));


// function getPermutation(N, K) {
//     // Factorial function
//     function factorial(n) {
//         if (n === 0 || n === 1) return 1;
//         return n * factorial(n - 1);
//     }

//     // Array to store numbers from 1 to N
//     const nums = [];
//     for (let i = 1; i <= N; i++) {
//         nums.push(i);
//     }

//     // Recursive function to generate permutations
//     function generatePermutations(remaining, k) {
//         if (remaining.length === 1) {
//             return remaining[0].toString();
//         }
//         const fact = factorial(remaining.length - 1);
//         const idx = Math.floor((k - 1) / fact);
//         const num = remaining.splice(idx, 1);
//         return num + generatePermutations(remaining, k - idx * fact);
//     }
//     return generatePermutations(nums, K);
// }

// // Example usage
// console.log(getPermutation(3, 3)); // Output: "213"


function solve(arr) {
    function swap(i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    function generatePermutations(start, end) {
        if (start === end) {
            temp.push([...arr]); // Push a copy of the array
            return;
        }
        for (let i = start; i <= end; i++) {
            swap(start, i);
            generatePermutations(start + 1, end);
            swap(start, i); // Backtrack
        }
    }

    const temp = [];
    generatePermutations(0, arr.length - 1);
    return temp;
}

let arr = [1, 2, 3];
const result = solve(arr);
console.log(result);


