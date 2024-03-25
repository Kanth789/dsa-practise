
const FindTripletsthatadduptoazero = (arr) => {
    let sorted = []
    for(let i=0;i<arr.length;i++)
    {
        arr.sort((a,b)=>a-b)
        if(i>0 && arr[i] == arr[i-1]){
            continue
        }
        let j = i + 1
        let k = arr.length - 1
        while(j<k){
            let sum = arr[i] + arr[j] +arr[k]
            if(sum < 0)
            {
                j++
            }else if(sum>0)
            {
                k--
            }else{
                sorted.push([arr[i],arr[j],arr[k]])
                j++;
                k--
                while(j < k && arr[j] == arr[j - 1]){
                    j++;
                }
                while(j < k && arr[k] == arr[k+1]){
                    k--
                }
            
            }
        }
    }
    return sorted
}

let arr = [-1,0,1,0]
const result = FindTripletsthatadduptoazero(arr)
console.log(result)

