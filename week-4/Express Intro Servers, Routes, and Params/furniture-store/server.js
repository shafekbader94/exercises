const express = require('express')
const path = require('path')

const app = express()
const port = 3000

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]



app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/', function (request, response) {
  
    response.send("Server is up and running smoothly")
})


app.get('/priceCheck/:name', function (request, response) {
  let name = request.params.name
 let price 
for(let stre of store)
{
    if(stre.name === name)
    {
        price = stre.price
        break
    }
    else
    {
        price = null 
    }
}

response.send({price})

})




app.get('/buy/:name', function (request, response) {
    let name = request.params.name


    for(let stre of store)
    {
        if(stre.name === name)
        {
            stre.inventory = stre.inventory - 1
            response.send(stre)
        }
    }
  
  })



  app.get('/sale', function (request, response) {
    let parms = request.query

    
if(parms.admin === 'true')
{
    flag = true
    for(let stre of store)
    {
        if(stre.inventory > 10 )
        {

            stre.price = stre.price / 2
          
        }

}

}


response.send(store)

  
  })



app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})









 /* store.forEach(i =>{
    if(i.name === name)
    price = i.price
    else
    price = null
  }
    )
    response.send({price})*/