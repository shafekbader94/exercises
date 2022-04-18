/*const suspenseBuilder = {
  name: "El Mysterio",
  displayName: function () {

      console.log("You are going to see the name in 3 seconds...")

      setTimeout(function () { //normal function
          console.log("The name is: " + this.name)
      }, 3000)

  }
}

suspenseBuilder.displayName()
*/  /*doest work */


/*************** */

const suspenseBuilder = {
  name: "El Mysterio",
  displayName: function () {

      console.log("You are going to see the name in 3 seconds...")

      setTimeout(() => { //this is the change
          console.log("The name is: " + this.name)
      }, 3000)

  }
}

suspenseBuilder.displayName()