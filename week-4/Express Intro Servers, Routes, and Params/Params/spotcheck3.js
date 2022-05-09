const express = require('express')

const app = express()

const port = 3000


app.get('/details', (request, response) => {
    let params = request.query
    console.log(params.city)
    response.send(params)
})

app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})