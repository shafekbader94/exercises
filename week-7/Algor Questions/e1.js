// abc => 1+2+3 = 6
// aaa => 1+1+1 = 3
//=> aaa
let lettersObj = {};

function highScoreWord(words) {
  let newWords = words.toLowerCase();
  let arrayOfStrings = newWords.split(" ");
  let max = -Infinity;  //" 0 "
let maxScores =""
  let arr = [];
  let count = 1,
    zeros = 0;

  function zeroArray() {
    for (let i = 0; i < arrayOfStrings.length; i++) {
      arr[i] = 0;
    }
  }

  for (let i = "a".charCodeAt(); i <= "z".charCodeAt(); i++) {
    lettersObj[i] = count++;
  }

  let thisChar = arrayOfStrings[1].charAt(0).charCodeAt();

  zeroArray();
  for (let i = 0; i < arrayOfStrings.length; i++) {
    for (let j = 0; j < arrayOfStrings[i].toString().length; j++) {
      thisChar = arrayOfStrings[i].charAt(j).charCodeAt();
      arr[i] = arr[i] + parseInt(lettersObj[thisChar]);
    }
    console.log(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max){
        max = arr[i];
        maxScores = arrayOfStrings[i]
   }
  }
  return maxScores;
}

console.log(highScoreWord("How are you doing today today"));
