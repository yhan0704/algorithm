function isUnique(str) {
    if (str.length > 128) return false;
    let strObj = {};
    let arr = str.split("");
    for (let i = 0; i < str.length; i++) {
      if (arr[i] in strObj) {
        return false;
      }
      strObj[arr[i]] = i;
    }
    return true;
  }
  
  console.log(isUnique("awefaweaa"));
  