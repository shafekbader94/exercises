function reverseOnlyNumbers(array) {
  let numArrays = [];
  let numArraysRev = [];
  let numArraysRev2 = [];

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == "number") numArrays.push(array[i]);
  }

  for (let i = 0; i < numArrays.length; i++) {
    numArraysRev[i] = numArrays[numArrays.length - i - 1];
  }
  let j = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == "number") {
      numArraysRev2[i] = numArraysRev[j];
      j++;
    } else numArraysRev2[i] = array[i];
  }

  return numArraysRev2;
}

console.log(reverseOnlyNumbers([1, "w", "e", 2, "r", 7, 8]));
