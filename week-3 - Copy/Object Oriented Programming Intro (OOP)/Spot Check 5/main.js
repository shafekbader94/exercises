class Vehicle {
    constructor(x, y, speed) {
        this.x = x
        this.y = y
        this.speed = speed
    }

    getInfo (){
        console.log("Cars are great")
    }

    static calculateMoney(){
        console.log("Made " + 30000 * Vehicle.carsSold + " dollars");
    }
}

Vehicle.calculateMoney()
