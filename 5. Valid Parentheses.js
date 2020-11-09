var isValid = function(s) {

    //initialize empty array
    let arr = []

    //initialize object that I will use.
    let brackets = {
        "(" : ")",
        "[" : "]",
        "{" : "}"
    }

    
    //iterate through parameter s
    //if string has object's key in obj, store object's value in empty array.
    //if it's not a the object's key, that case will be object's value.
    //pop the value in array and compare if the value is same as the element.
    
    for(let ch of s){
        if(ch in brackets){
            arr.push(brackets[ch])
        }else{
            if(arr.length === 0 || arr.pop() !== ch){
                return false
            }else{
                continue
            }
        }
    }

    return arr.length === 0


};

console.log(isValid("()}"))