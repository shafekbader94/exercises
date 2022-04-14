const coffeeShop = {
    beans: 40,
  
    drinkRequirements: {
      latte: 10,
      americano: 5,
      doubleShot: 15,
      frenchPress: 12
    },
  
    makeDrink: function (drinkType) {
  let count=0;

     if(drinkType === "latte")
     {
         this.beans = this.beans - this.drinkRequirements.latte
   
     } 
     else if(drinkType === "americano")
     {
         this.beans = this.beans - this.drinkRequirements.americano
 
     } 
     else if(drinkType === "doubleShot")
     {
         this.beans = this.beans - this.drinkRequirements.doubleShot

     }   

     else if(drinkType === "frenchPress")
     {
         this.beans = this.beans - this.drinkRequirements.frenchPress
  
     }  



    for(let x=0 ; x < Object.keys(this.drinkRequirements).length ; x++)
    {
          if(drinkType !== Object.keys(this.drinkRequirements)[x])
            {
                count++;
                if(count == Object.keys(this.drinkRequirements).length)
                alert("Sorry, we don’t make ")// console.log("Sorry, we don’t make ")
            }
          else
          {
         
           if(this.beans <= 0 )
           alert("Sorry, we're all out of beans ")// console.log("Sorry, we're all out of beans ")
             x=Object.keys(this.drinkRequirements).length+1
          }
              
      }
    
    }
  }
  
  coffeeShop.makeDrink("latte"); 
  coffeeShop.makeDrink("americano");
  coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
  coffeeShop.makeDrink("doubleShot");
  coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"