function linearSearch(arr,target){
    for (let i =0;i<arr.length;i++)
    {
       if (arr[i] === target)
       {
        return i
       }
    }
    return -1
}

const array = [-5,2,10,4,6]
console.log(linearSearch(array,10))


// Time Complexity - o(n)