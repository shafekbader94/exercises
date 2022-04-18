let users = []

const getData = function (callback) {
    setTimeout(function () {
        users = [{ name: "Rick" }, { name: "Morty" }]
        console.log("Got users")
        callback()
    }, 3000);
}

const displayData = function () {
    console.log("Going to display: " + users)
    for (user of users) {
        console.log(user.name)
    }
}

getData(displayData)

/**** anonymous function 
 
const doSomething = function(){
  console.log("something")
}

setTimeout(doSomething, 3000) //will invoke doSomething in 3 seconds


 */