const bag = ["flashlight", "medicine"]
const moreItems = ["tent", "water bottle", "knife", "rope"]

if(bag.length < 3){
  const nextItem = moreItems[0]
  bag.push(nextItem)
}

console.log(bag)
//console.log("Added " + nextItem)


let height = 1.73

const grow = function(){
  height += 0.1
}

grow()
console.log(height)

const names = ["Allison", "Beatrice", "Charles"]

for(let n of names){
  let coolName = "cool " + n
  console.log(coolName)
}

console.log(coolName) // throws an error