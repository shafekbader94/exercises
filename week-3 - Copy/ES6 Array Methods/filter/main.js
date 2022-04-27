let vegetables = [
    { name: "Eggplant", color: "purple" },
    { name: "Carrot", color: "orange" },
    { name: "Squash", color: "orange" },
    { name: "Tomatoe", color: "red" },
    { name: "Onion", color: "white" },
    { name: "Sweet Potato", color: "orange" }]


    let orangeOnly = vegetables.filter(veg => veg.color==="orange")
    console.log(orangeOnly)
/********************************** */
const vegColor = function (veg) {
    return veg.color === "orange"
}

    let orangeOnly2 = vegetables.filter(vegColor)


    console.log(orangeOnly2)