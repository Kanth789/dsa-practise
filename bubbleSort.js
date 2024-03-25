const  BubbleSort = (arr) =>{
let swapped ;
  do {
    swapped = false
    for(let i=0;i<arr.length - 1;i++)
    {
      if(arr[i] > arr[i+1])
      {
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
        swapped = true
      }
    }
  }
  while(swapped)
    

}
const array = [13,46,24,52,20,9];
    BubbleSort(array);
    console.log(array);


