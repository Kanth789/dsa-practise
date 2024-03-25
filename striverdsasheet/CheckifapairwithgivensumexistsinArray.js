
const CheckifapairwithgivensumexistsinArray = (arr,target) => {
    let sorted = []
    let isPassed  = false
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            if(i !== j)
            {
                if(arr[i] + arr[j] === target)
                {
                    sorted.push(i, j);
                    isPassed =  true
                }
            }
        }
    }
    return {sorted,isPassed}

  
}

let arr = [2,6,5,8,11]
let target = 15
const result = CheckifapairwithgivensumexistsinArray(arr,target)
console.log(result)