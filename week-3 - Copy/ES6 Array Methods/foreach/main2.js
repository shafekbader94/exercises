let vegetables = [
  { name: "Eggplant", color: "purple" },
  { name: "Carrot", color: "orange" },
  { name: "Squash", color: "orange" },
  { name: "Tomatoe", color: "red" },
  { name: "Onion", color: "white" },
  { name: "Sweet Potato", color: "orange" }]


  let orangeVegetables = vegetables.filter(v => v.color === "orange")

  for (let vegetable of orangeVegetables) {
    console.log(vegetable.name) //expect to see Carrot, Squash, and Sweet Potato
}


/************* */
orangeVegetables.forEach(ov => console.log(ov.name))