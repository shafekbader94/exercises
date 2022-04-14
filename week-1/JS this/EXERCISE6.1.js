const coffeeShop = {
  beans: 40,
  money: 25,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12,
  },

  beansCost: 5,

  makeDrink: function (drinkType) {
    let count = 0;

    if (drinkType === "latte") {
      this.beans = this.beans - this.drinkRequirements.latte;
    } else if (drinkType === "americano") {
      this.beans = this.beans - this.drinkRequirements.americano;
    } else if (drinkType === "doubleShot") {
      this.beans = this.beans - this.drinkRequirements.doubleShot;
    } else if (drinkType === "frenchPress") {
      this.beans = this.beans - this.drinkRequirements.frenchPress;
    }

    for (let x = 0; x < Object.keys(this.drinkRequirements).length; x++) {
      if (drinkType !== Object.keys(this.drinkRequirements)[x]) {
        count++;
        if (count == Object.keys(this.drinkRequirements).length)
          console.log("Sorry, we don’t make ");
      } else {
        if (this.beans <= 0) console.log("Sorry, we're all out of beans ");
        x = Object.keys(this.drinkRequirements).length + 1;
      }
    }
  },

  buyBeans: function (numBeans) {
    /*  // let drinks = 
         switch(drinks){
             case latte:
                 this.money = this.money - this.beansCost.latte*numBeans
                 break;

             case americano:
                 this.money = this.money - this.beansCost.americano*numBeans
                 break;

             case doubleShot:
                 this.money = this.money - this.beansCost.doubleShot*numBeans
                break;

              case frenchPress:
                  this.money = this.money - this.beansCost.frenchPress*numBeans
                  break;
         }
*/
    if (this.money < 0 || this.money - numBeans * this.beansCost < 0)
      console.log("cant buy");
    else {
      this.money = this.money - numBeans * this.beansCost;
      //this.beans = this.beans + numBeans
      console.log(this.money);
    }
  },
};

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
coffeeShop.buyBeans(2);
