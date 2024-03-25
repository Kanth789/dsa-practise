const FindtheelementsthatappearsmorethanN3timesinthearray = (arr) => {
    const newSet = [...new Set(arr)];
    const count = Math.ceil(arr.length / 3);
    let filter = [];
    for (let i = 0; i < newSet.length; i++) {
        let filterCount = arr.filter((eachItem) => eachItem === newSet[i]);
        if (filterCount.length >= count) {
            filter.push(newSet[i]); 
        }
    }
    return filter;
}

let arr = [11, 33, 33, 11, 33, 11];
const result = FindtheelementsthatappearsmorethanN3timesinthearray(arr);
console.log(result);
