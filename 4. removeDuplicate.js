
let arr=[1,1]

function duplicated(arr){
  let obj={}
  let newarr=[]

  for(let i = 0; i < arr.length; i++){
    console.log(Object.values(obj).indexOf(arr[i]) > -1)
    if(Object.values(obj).indexOf(arr[i]) > -1){
      continue
    }
    obj[i] = arr[i]
    newarr.push(arr[i])
  }

  return newarr
}


console.log(duplicated(arr))


// function remove_duplicates(arr) {
//     var obj = {};
//     var ret_arr = [];
//     for (var i = 0; i < arr.length; i++) {
//         obj[arr[i]] = true;
//     }
//     for (var key in obj) {
//         ret_arr.push(key);
//     }
//     return ret_arr;
// }


//  return Array.from(new Set(arr));