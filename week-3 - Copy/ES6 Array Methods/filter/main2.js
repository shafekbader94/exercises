let ages = [12, 41, 11, 10, 32, 27, 18, 19, 19, 14, 58, 41, 9]

let olderThan16 = []
for(let age of ages){
  if(age > 16){
    olderThan16.push(age)
  }
}

/**************************************** */


let olderThan16 = ages.filter(a => a > 16)
console.log(olderThan16) // prints [41, 32, 27, 18, 19, 19, 58, 41]

/**************************************** */


const isGreaterThan16 = function (age) {
    return age > 16
}

let olderThan16 = ages.filter(isGreaterThan16) //notice that passing in the function will implicitly pass it the `a` parameter that the function expects

/**************************************** */

const isGreaterThan16 = (a) => a > 16
let olderThan16 = ages.filter(isGreaterThan16)