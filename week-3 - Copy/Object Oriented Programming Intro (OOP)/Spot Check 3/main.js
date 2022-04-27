class Animal {
    constructor(name, numLegs) {
        this.name = name
        this.numLegs = numLegs
        this.children =[]
    }

    giveBirth(name){
        this.children.push(name)
    }
}


const cat = new Animal("Puss", 4)
cat.giveBirth("Dolly") // prints "Boom. Birthed Dolly"

console.log(cat.children)
//console.log(cat.name + " has " + cat.numLegs + " legs") //prints "Puss has 4 legs"