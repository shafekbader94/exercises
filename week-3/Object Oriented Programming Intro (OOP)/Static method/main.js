class Vehicle {
    constructor(x, y, speed) {
        this.x = x
        this.y = y
        this.speed = speed
        Vehicle.carsSold++;
    }

    static getInfo() {
        console.log("We've sold " + Vehicle.carsSold + " vehicles.");
    }


}
Vehicle.carsSold = 0;
const c1 = new Vehicle(1, 2, 200)
const c2 = new Vehicle(1, 2, 200)
Vehicle.getInfo()
