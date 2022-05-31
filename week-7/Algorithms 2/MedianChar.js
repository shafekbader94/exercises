
let lettersObj = {};



function medianChar(word){

    let arr = []
    let count = 1 ,thisChar

    for (let i = 0; i < word.length; i++) {
        arr[i] = 0;
      }

    for (let i = "a".charCodeAt(); i <= "z".charCodeAt(); i++) {
        lettersObj[i] = count++;
      }


    for (let i = 0; i < word.length; i++) {
        thisChar = word[i].charCodeAt();
        console.log(word[i])
        arr[parseInt(lettersObj[thisChar]) - 1] = word[i];
      }

   let arrIndex = arr.filter(val => val !== 0);

    console.log(arrIndex)
return arrIndex[arrIndex.length/2 -1]
 

}

console.log(medianChar("question"))