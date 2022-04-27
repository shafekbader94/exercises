class Human {
    constructor(name, age, isFriendly) {
        this.name = name
        this.age = age
        this.isFriendly = isFriendly
    }
}

const human = new Human("human", 20, true)
console.log("name: "+human.name + " age: "+human.age + " friendly?:"+human.isFriendly) 