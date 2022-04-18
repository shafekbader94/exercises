const createPerson = function(name, age){
    const person = {
        personName: name, 
        personAge: age
    }

    return person
}

const person = createPerson("Elon", 42)
console.log(person)

/******************************************** */

const mathOperations = function(){
    const add = function(x, y){
        return x + y
    }
    return add
}

const math = mathOperations()
console.log(math(1,2))

/******************************************* */

const foo = function () {
    const x = 1
  
    const bar = function () {
      console.log(x) //notice this inner function using the outer function's variable
    }
  
    return bar
  }
  
  const baz = foo() //out here, x doesn't exist
  baz() //but when we invoke baz, we're printing x!

  /************************************************* */

  const setCounter = function (num) {
    let counter = 0
  
    const count = function () {
      counter += num;
      console.log(counter)
    }
  
    return count
  }
  
  const increment = setCounter(2)
  increment()

  