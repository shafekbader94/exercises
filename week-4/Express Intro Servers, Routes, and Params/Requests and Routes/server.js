const express = require('express')
const path = require('path')

const app = express()

const port = 3000


const data = {
    8112: {
        title: "Name of the Wind",
        author: "Patrick Rothfuss"
    },
    9121: {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger"
    },
    1081: {
        title: "The Giver",
        author: "Lois Lowry"
    }
}



app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/books/:booksID', function (request, response) {
    let bookId = request.params.booksID
    response.send(data[bookId])
})


app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})