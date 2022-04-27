class Vehicle {
  constructor(x, y, speed,fuel) {
    this.x = x;
    this.y = y;
    this._speed = speed;
    this._fuel=fuel
  }

  set fuel(amount) {
    if (amount < 0 || amount > 150) {
      return console.log("fuel cannot be less than 0, or greater than 150");
    }
    this._fuel = amount;
  }

  get fuel() {
    return this._fuel;
  }
}

const c = new Vehicle();
c.x = 3;
c.y = 1;
c.fuel = 50; // at this point, we'll get the console log saying speed needs to be positive
console.log(c.fuel); // prints undefined
