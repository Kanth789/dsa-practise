function UnquieNumber(array){
    const newArray = []
    for(let i = 0;i<array.length;i++)
    {
        if(!newArray.includes(array[i]))
        {
            newArray.push(array[i])
        }
    }
    return [newArray.length,newArray]
}

var arr = '111001101111';
const arra = [...arr];
const result = UnquieNumber(arra);
console.log(result);

// function longestRepeatingNumber(array) {
//     const newArray = [];
//     const setNewArray = [...new Set(array)].join("");
//     for (let i = 0; i < setNewArray.length; i++) {
//         const filter = array.filter((eachItem) => eachItem === setNewArray[i]);
//         newArray.push(filter.join(""));
//     }
//     return newArray;  
// }

// var arr = '111001101111';
// const arra = [...arr];
// const result = longestRepeatingNumber(arra);
// console.log(result);

// function longestRepeatingNumber(array) {
//     const setNewArray = [...new Set(array)].join("");
//     const newArray = [];
//     let  sort = []

//     for (let i = 0; i < setNewArray.length; i++) {
//         const filter = array.join('').split(setNewArray[i]);
//         const longestRepeating = filter.reduce((acc, item) => (item.length > acc.length ? item : acc), '');
//         if (longestRepeating.length > 1) {
//             newArray.push(longestRepeating);
//             sort = newArray.sort((a,b)=>b-a)
//         }
//     }

//     return sort[0].length;
// }

// var arr = '111001101111';
// const arra = [...arr];
// const result = longestRepeatingNumber(arra);
// console.log(result);

