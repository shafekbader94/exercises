const express = require('express')

const app = express()

const port = 3000

const users = {
    tilda: "You've done a wonderful job",
    riva: "You need to improve your form, but good perseverance",
    jeremy: "You're incredible"
}

app.get('/users/:userID', function (request, response) {
    response.send(`Hi there, ${users[request.params.userID]}`)
})



app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})