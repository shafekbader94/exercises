const circleUtilities = require('../NodeJSModules/circleUtils');
console.log(circleUtilities);

/*console.log(pi)
console.log(title)                          ***error
console.log(calcCircleArea)*/
const r = 4
console.log(`The area of a circle with radius ${r} is ${circleUtilities.calcCircleArea(r)}`)
//^prints "The area of a circle with radius 4 is 50.26544"

////    console.log(module.exports)       //prints {}

//console.log(title)