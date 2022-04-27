class LuxuryFeeder {
  getFood(animalType) {
    if (animalType == "lion") {
      return "chia seeds";
    }
    if (animalType == "elephant") {
      return "peanuts";
    }

    return "scraps";
  }
}

class CheapFeeder {
  getFood(animalType) {
    return "scraps";
  }
}

class Animal {
  constructor(name, type, feeder) {
    this.name = name;
    this.type = type;
    this.feeder = feeder; //dependency injection!
  }

  _consume(food) {
    console.log("Just consumed " + food + ". Feels good.");
  }

  eat() {
    const food = this.feeder.getFood(this.type);
    this._consume(food);
  }
}


let weArePoor = true;
let relevantFeeder;

const luxuryFeeder = new LuxuryFeeder();
const cheapFeeder = new CheapFeeder();

if (weArePoor) {
  relevantFeeder = cheapFeeder;
} else {
  relevantFeeder = luxuryFeeder;
}

const bumdo = new Animal("Bumdo", "elephant", relevantFeeder);
bumdo.eat();
