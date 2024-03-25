const CheckifthegivenStringisPalindromeornot = (str) =>{
    str = str.toLowerCase()
    let start = 0
    let end = str.length - 1
    while(start < end)
    {
        if(str[start] !==str[end])
        {
            return false
        }
        start++;
        end--;
    }
    return true
}

const str = 'TAKE U FORWARD'
const result = CheckifthegivenStringisPalindromeornot(str)
console.log(result)