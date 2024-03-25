function InsertionSort(arr) {
for(let i=1;i<arr.length;i++)
{
    let numberToInsert = arr[i]
    let j = i - 1
    while(j>=0 && arr[j] > numberToInsert)
    {
        arr[j+1] = arr[j]
        j = j -1
    }
    arr[j+1] = numberToInsert
}
}

//o(n^2)

const arr = [8, 20, -2, 4, -6];
InsertionSort(arr);
console.log(arr);
