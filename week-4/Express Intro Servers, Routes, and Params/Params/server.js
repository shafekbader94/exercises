const express = require('express')

const app = express()

const port = 3000


app.get('/landing/:username', function (request, response) {
    response.send(`Hi there, ${request.params.username}`)
})



app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})