function charsToLength(word) {
  let counArr = [];
  let charArr = []
  let counter = 1

  let charsArry = []

  for (let j = 0; j < word.length; j++) {
    if (word[j] == word[j + 1]) {
      counter++;
    } else {
      counArr.push(counter);
      charArr.push(word[j])
      counter = 1;
    }
  }

let j=0,k=0
  for (let i = 0; i < counArr.length*2; i+=2) {
    charsArry[i]=charArr[j]
    charsArry[i+1] = counArr[j]
    j++
    
  }

console.log(charsArry)
}

charsToLength("aaabbcb");
