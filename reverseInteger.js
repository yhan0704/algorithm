var reverse = function(x) {
    const min = Math.pow(-2,31), max = Math.pow(2,31)-1  
    let reverseNum = parseInt(x.toString().split("").reverse().join(""), 10)
    if(reverseNum < min || reverseNum > max) return 0
    return x > 0 ? reverseNum : -reverseNum
};

console.log(reverse(-123))
  