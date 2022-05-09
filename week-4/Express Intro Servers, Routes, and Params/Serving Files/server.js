const express = require('express')
const path = require('path')

const app = express()

const port = 3000


app.use(express.static(path.join(__dirname, 'dist')))

app.get('/', function (request, response) {
    console.log("Someone has come into the server. Brace yourselves.")
    response.send("Ending the cycle, thanks for visiting")
})


app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})