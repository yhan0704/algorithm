function URLify(str, count){
    let realString = str.slice(0, count)
    return realString.replaceAll(" ","%20")
}


console.log(URLify("Mr John Smith    ", 13))