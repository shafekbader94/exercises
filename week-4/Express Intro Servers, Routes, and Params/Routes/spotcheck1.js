const express = require('express')

const app = express()

const port = 3000


app.get('/life', function (request, response) {
    response.send("42")
})


app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})