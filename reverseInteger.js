//way 1
// var reverse = function(x) {
//     let isNegative = Math.sign(x)
//     let min = Math.pow(-2,31)
//     let max = Math.pow(2,31) - 1
//     if(isNegative === 1){
//         result = parseInt(x.toString().split("").reverse().join(""))
//         if(result > min && result < max){
//             return result
//         }else{
//             return 0
//         }
//     }else{
//         result = parseInt(x.toString().split("").slice(1).reverse().join(""))
//         if(result > min && result < max){
//             return isNegative * result
//         }else{
//             return 0
//         }
//     }
// };

// way 2
var reverse = function(x) {
    const min = Math.pow(-2,31), max = Math.pow(2,31)-1  
    let reverseNum = parseInt(x.toString().split("").reverse().join(""), 10)
    if(reverseNum < min || reverseNum > max) return 0
    return x > 0 ? reverseNum : -reverseNum
};

console.log(reverse(-123))
  