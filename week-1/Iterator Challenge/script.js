const myObject  = {
    
    myArray: Array.from({ length: 5 }, () => Math.floor(Math.random()*80)),
    i: 0,
    [Symbol.iterator]() {
      var that = this;
      return {
        next() {
          if ((that.myArray[that.i] %2 == 0 ) && ( that.i < that.myArray.length)) { 
            return {
               value: that.myArray[that.i++],
                done: false 
              }
          } 
         else if ((that.myArray[that.i] %2 != 0 )  && ( that.i < that.myArray.length)) { 
            return {
               value: [that.i++],
                done: false 
              }
          }
 
          else
           {
            return { 
              value: undefined,
               done: true
               }
          }
       // }
      }
    }
  }
}
  for (let x of myObject) {
    console.log(x)
}


console.log(Array.from({ length: 5 }, () => Math.floor(Math.random()*80)))
