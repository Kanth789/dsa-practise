const users = [
    {
        username:"kkkk",
        email:'kkkk@gmail.com'
    },
    {
        username:"lllll",
        email:'lllll@gmail.com'
    },
    {
        username:"mmmm",
        email:'mmmm@gmail.com'
    },
    {
        username:"nnnn",
        email:'nnnn@gmail.com'
    }
]


function isUserExit(array,val){
    for(let item of array){
        if(item['username'] === val){
            return item['email'];
        }
    }
    return false
}
const result = isUserExit(users,'lllll')
console.log(result)