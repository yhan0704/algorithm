
let arr=[1,2,3,4,5,6,7,8,4,2,3,1,0]

function duplicated(arr){
  let obj={}
  let newarr=[]

  for(let i = 0; i < arr.length; i++){
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