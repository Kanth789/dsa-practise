// string anagram
//'hello' -> 'llheo'

 
function Anagram(string1,string2){
    const lengthOne = string1.length
    const lengthTwo = string2.length
    if(lengthOne!=lengthTwo){
       return "length is not same for both strings" 
    }
    let str1 = string1.split('').sort().join('')
    let str2 = string2.split('').sort().join('')
    if(str1 === str2)
    {
        console.log('true')
    }
    else{
        console.log("false")
    }
}

Anagram('hello','lloeh')