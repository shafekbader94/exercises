const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/computerDB', { useNewUrlParser: true })

const Schema = mongoose.Schema

const computerSchema = new Schema({
  maker: String,
  price: Number
})

const Computer = mongoose.model('computer', computerSchema)
let c1 = new Computer({ maker: "HP", price: 2000 }) 
let c2 = new Computer({ maker: "ASUS", price: 3500 }) 
let c3 = new Computer({ maker: "APPLE", price: 4500 }) 
let c4 = new Computer({ maker: "LENNOVO", price: 2500 }) 



c1.save()
c2.save()
c3.save()
c4.save()

/*
c1.save().then( () => c2.save ).then(() => {
	mongoose.connection.close()
})
*/