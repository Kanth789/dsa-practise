const Checkifarrayissubsetofanotherarray = (arr1,arr2) => {
    for(let i=0;i<arr1.length;i++)
    {
        if(arr2.includes(arr1[i]))
        {
            return `arr1[] is a subset of arr2[]`
        }else{
            return `arr1[] is a not  subset of arr2[]`
        }
    }

};

let arr1 =[1,3,4,5,2];
let arr2 = [2,4,3,1,7,5,15];

const result = Checkifarrayissubsetofanotherarray(arr1, arr2);
console.log(result);
