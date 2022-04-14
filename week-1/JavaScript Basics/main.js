console.log("Hello, world!")

let country = "Djibouti"

let mysteriousCountry //not initialized, only defined

const firstString = "car"
const secondString = "pet"
const bothStrings = firstString + secondString
console.log(bothStrings)

console.log(1 == "1")// prints true
console.log(1 === "1")// prints false 

let num
console.log(3 + num) //nan   because num is undefined


let startPosition
let newPosition = (startPosition || 0) + 10

console.log(newPosition) //prints 10


/*
function isItMorning(time){
    if(time > 6 && time < 12){
            return true
    }
    return false
}*/


/*
if (x > 100){
    console.log("big")
  } else if (x < 10) {
    console.log("small")
  } else {
    console.log("x between 10 and 100")
  }*/

  let username = prompt("What is your username?")

  let companies = ["Tesla", "Amazon", "Google", "Microsoft"]  //.length

  const firstCompany = companies[0]
  console.log(firstCompany) // prints "Tesla"

  companies.push("Blizzard Entertainment");

  /*employees.push(...candidates)
employees.push(candidates[0], candidates[1], candidates[2])*/ //spread syntax

companies.splice(1, 1)