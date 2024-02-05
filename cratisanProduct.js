function cratisanProduct(arrone,arrtwo){
    let sort = []
for(let i =0;i<arrone.length;i++)
{
    for(let j = 0;j<arrtwo.length;j++)
    {
        sort.push([arrone[i],arrtwo[j]])
    }
}
return sort
}
const arrone = [1,2]
const arrtwo = [3,4]
console.log(cratisanProduct(arrone,arrtwo))

//o(mn)