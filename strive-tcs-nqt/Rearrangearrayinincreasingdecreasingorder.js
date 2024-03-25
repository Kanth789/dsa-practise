
const Rearrangearrayinincreasingdecreasingorder = (arr) => {
    const sorr = arr.sort((a,b)=>a-b)
    let half = Math.floor(sorr.length / 2)
    let sorrted = sorr.slice(0,half) + ',' +sorr.slice(half,arr.length).reverse()
    
    return sorrted
  
}


const result = Rearrangearrayinincreasingdecreasingorder([4, 2, 8, 6, 15, 5, 9, 20])
console.log(result)