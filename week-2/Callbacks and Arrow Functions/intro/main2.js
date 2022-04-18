const getData = function ()
 {
    setTimeout(function ()
     {
        users = [{ name: "Rick" }, { name: "Morty" }]
        console.log("Got users")
    }, 3000)
}

getData()