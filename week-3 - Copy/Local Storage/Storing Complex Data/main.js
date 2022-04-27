localStorage.personalData = {
  averageTimeOnSite: { unit: "hr", amt: 9 },
  probabilityOfFriends: 0.02,
  commonKeywords: ["salsa for one", "1 vs. none Chess"],
};

/********** */
localStorage.personalData = JSON.stringify({
  averageTimeOnSite: { unit: "hr", amt: 9 },
  probabilityOfFriends: 0.02,
  commonKeywords: ["salsa for one", "1 vs. none Chess"],
});
/************ */
let x = { name: "Shoobert" };
x = JSON.stringify(x);
console.log(x); //prints a string-version of the object

/*********** */
let userStuff = localStorage.personalData //the object we stored earlier

console.log(userStuff.probabilityOfFriends) //prints undefined

/** */

let userStuff = JSON.parse(localStorage.personalData)

console.log(userStuff.probabilityOfFriends) //prints 0.02