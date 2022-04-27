class Vehicle {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this._speed = speed;
  }

  set speed(speed) {
    if (speed < 0) {
      return console.log("Speed must be positive");
    }
    this._speed = speed;
  }

  get speed() {
    return this._speed;
  }
}

const c = new Vehicle();
c.x = 3;
c.y = 1;
c.speed = -2; // at this point, we'll get the console log saying speed needs to be positive
console.log(c.speed); // prints undefined
