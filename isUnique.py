def isUnique(str):
    if len(str) > 128:
        return False   
    strObj = {}
    for x in range(len(str)):
        if str[x] in strObj:
            return False
        else:
            strObj[str[x]] = x
    return True

print(isUnique("hhu"))
