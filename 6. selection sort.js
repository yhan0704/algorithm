function selectionSort (array) {
    let arr = [...array]
    let temp = 0;
    let index = 0;
  
    for(let i = 0; i < arr.length; i++){
      index = i
      for(let j = i+1; j < arr.length; j++){
        if(arr[index] > arr[j]){
          index = j
        }
      }
      if(index !== i){
        temp = arr[index]
        arr[index] = arr[i]
        arr[i] = temp
      }
    }
    return arr
  }
  console.log(selectionSort([5, 4, 3, 2, 1]));
  
  //choose min value and switch first element