const person = {
    username: "Felicia",
    introduce: function(){
      console.log("Hi, I'm Felicia")
    }
  }
  
  person.introduce() //prints "Hi, I'm Felicia"

  /*************************************************** */

  const counter = {
    count: 0,
  
    updateCounter: function () {
      this.count += 1;
    }
  };
  
  counter.updateCounter();
  counter.updateCounter();
  counter.updateCounter();
  
  alert(counter.count);

  /*********************************** */
  const cat = {
    makeNoise: function () {
      alert(this.noise);
    },
    noise: "Meow!"
  };
  
  const dog = {
    makeNoise: cat.makeNoise,
    noise: "Woof!"
  };
  
  cat.makeNoise();
  dog.makeNoise();
  /*************************************** */
  const makeNoiseFunction = function () {
    alert(this.noise);
  }
  
  const cat3 = {
    makeNoise: makeNoiseFunction,
    noise: "Meow!"
  };
  
  const dog3 = {
    makeNoise: makeNoiseFunction,
    noise: "Woof!"
  };
  
  cat3.makeNoise();
  dog3.makeNoise();