/*
const elem = $("#id")
const elems = $(".class-name")
*/

const header = $("h1")
console.log(header)
/***************************** */
const myQuery = function (selector) {
    if (selector[0] == "#") {
        const elementId = selector.split("#")[1] //will return everything after the # in selector 
        return document.getElementById(elementId)
        }
    }

    console.log(myQuery("#yourElementID"))


/**************************** */

const sayHi = function(){
    console.log("Hi!")
  }
  
  const $ = sayHi
  
  $() //prints "Hi!"

  /************************* */