const findDay= (arr,max)=>{
    let days = 1
    let load = 0
    for(let i=0;i<arr.length;i++)
    {
        if(load + arr[i] > max )
        {
            days += 1
            load = arr[i]
        }else{
            load += arr[i]
        }
    }
}

const main = (weight,days) =>{
    let max = Math.max(...weight)
    let sum = weight.reduce((eachItem,item)=> eachItem + item ,0)
    for(let i=max;i<= sum;i++)
    {
        if(findDay(weight,i)<=days)
        {
            return i
        }
    }
    return -1
}

let weight = [5, 4, 5, 2, 3, 4, 5, 6]
let days = 5
let ans = main(weight, days);
console.log("The minimum capacity should be: " + ans);