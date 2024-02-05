function returnTheNumberisPlaindorme(num){
    const reverse = num.toString().split('').reverse().join('')
    if(num === parseInt(reverse))
    {
        
        return true
    }
    else{
        return false
    }
}

function checkIfNumberisPalindorme(num){
    if(num<0){
        return false
    }
    else {
       const originalNumber = num
       let reverse = 0

       while(num > 0){
        const lastDigit = num % 10
        reverse = reverse * 10 + lastDigit
        num = Math.floor(num/10)
       }

       return originalNumber === reverse
    }
}

const num = 121
const result = checkIfNumberisPalindorme(num)
console.log(result)


