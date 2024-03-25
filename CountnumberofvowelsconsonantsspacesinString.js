const CountnumberofvowelsconsonantsspacesinString = (str) =>{
    str = str.toLowerCase()
    const vowels = ['a','e','i','o','u']
    let vowelCount = 0
    let whiteSpace = 0
    let constant = 0
    let asiValue = []
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        asiValue.push({char:char.charCodeAt()})
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (char === ' ') {
            whiteSpace++;
        } else if (!vowels.includes(char)) {
            constant++;
        }
    }
    return {
        vowelCount,whiteSpace,constant,asiValue
    }
}

const str = 'Take u forward is Awesome'
const result = CountnumberofvowelsconsonantsspacesinString(str)
console.log(result)