
function uniqueChar(word){

    for (let i = 0; i < word.length; i++) {
        for (let j = i + 1; j < word.length; j++) {
            if(word[i] === word[j])
                return false
            }
    }
    return true
}


let thisWord = "abc"
console.log(uniqueChar(thisWord)) 