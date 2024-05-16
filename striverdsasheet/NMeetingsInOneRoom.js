function findTheMaxOut(arrone, arrTwo) {
  let sortedArray = [];
  let i = 0;
  let n = arrone.length;
  while (i < n) {
    
    if (
      arrone[i] > 0 &&
      arrTwo[i] > 0
    ) {
      if(i===0){
        sortedArray.push(arrone[i], arrTwo[i]);
      }else if(i>0 && arrone[i] > sortedArray[sortedArray.length - 1])
        {
            sortedArray.push(arrone[i], arrTwo[i]);
        }
    }
    i++;
  }
  return sortedArray;
}

let arrone = [10,20,12];
let arrTwo = [20,25,35];

const result = findTheMaxOut(arrone, arrTwo);
console.log(result.length / 2);
