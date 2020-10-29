//Cracking Coding Interview

//replace all spaces in a string with %20
function URLify(str, count){
    let realString = str.slice(0, count)
    return realString.replaceAll(" ","%20")
}


console.log(URLify("Mr John Smith    ", 13))