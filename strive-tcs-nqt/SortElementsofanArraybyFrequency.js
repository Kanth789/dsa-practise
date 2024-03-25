const SortElementsofanArraybyFrequency = (arr) => {
    const frequencyMap = new Map();
    
    arr.forEach(item => {
        if (frequencyMap.has(item)) {
            frequencyMap.set(item, frequencyMap.get(item) + 1);
        } else {
            frequencyMap.set(item, 1);
        }
    });

    arr.sort((a, b) => {
        if (frequencyMap.get(a) === frequencyMap.get(b)) {
            return a - b;
        }
        return frequencyMap.get(b) - frequencyMap.get(a);
    });


    return arr;
};

let arr = [1, 2, 3, 2, 4, 3, 1, 2];
const result = SortElementsofanArraybyFrequency(arr);
console.log(result);
