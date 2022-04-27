let ages = [31, 28, 23, 27, 25, 16, 24]
ages.every(a => a > 18) //returns false


let menu = [
  { name: "Beef stew", vegetarian: false },
  { name: "Beef sandwhich", vegetarian: false },
  { name: "Carrot on a stick", vegetarian: true },
  { name: "Beef eggroll", vegetarian: false },
]

menu.some(m => m.vegetarian) //returns true

