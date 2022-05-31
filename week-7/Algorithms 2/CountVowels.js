let vowels = ["a", "e", "i", "o", "u"];

/*function countVowels(word){
    const arraySet = new Set(word)
    let counter = 0
    for(let char of vowels){
        if(arraySet.has(char))
        {
            //console.log(char)
            counter++
        }
    }

    return counter
}*/
function countVowels(word) {
   let counter = 0
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        if(word[i] === vowels[j])
             counter++
    }
  }
  return counter
}

console.log(countVowels("aabcde"));
