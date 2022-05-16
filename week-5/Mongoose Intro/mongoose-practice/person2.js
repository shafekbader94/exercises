const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/peopleDB', { useNewUrlParser: true })

const Schema = mongoose.Schema

const personSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number
})

const Person = mongoose.model('person', personSchema)
//const Person = mongoose.model('person', personSchema, 'persons'); //<== persons will be the name of the collection
let p1 = new Person({ firstName: "David", lastName: "Smith", age: 25 }) //purposefully ignoring the `address` field
//console.log(p1)

//p1.save()
/*
let p2 = new Person({ firstName: "Shoo", lastName: "Bert", age: 50 })
let p3 = new Person({ firstName: "Shoob", lastName: "Ert", age: 34 })
let p4 = new Person({ firstName: "Sh", lastName: "Oobert", age: 10 })
let p5 = new Person({ firstName: "Shoober", lastName: "T", age: 44 })

let allTheShooberts = [p2, p3, p4, p5]
allTheShooberts.forEach(s => s.save())*/
/*
Person.find({}, function (err, people) {
  console.log(people)
})*/

/*//or
let peoplePromise = Person.find({})

peoplePromise.then(function (people) {
    console.log(people)
})*/

/*********************UPDATE******************************** */
/*
Person.findById("62821dcfd99b6b48ebb7be17", function (err, person) {
  person.age += 10 //how time flies
  person.save()
})*/

/*or
Person.findByIdAndUpdate("5c16c63bc5ad73471c3ca323", { age: 70 }, function (err, person) {
  console.log(person)
})
*/
/*
Person.findByIdAndUpdate("62821f6ad22d18294cc18a6b", { age: 70 }, { new: true }, function (err, person) {
  console.log(person)
})*/


/*********************DELETE******************************** */
/*
Person.findById("5c16c63bc5ad73471c3ca323", function (err, person) {
  person.remove(function (err) {
      console.log(err) //usually this will be `null`, unless something went wrong
  })
})

//or findByIdAndRemove
/*
/***************************************************************** */
/***************************************************************** */
/*
const personSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: String,
    age: Number
})
*/ 
/**************************************************************** */
/* 
const personSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
  address : {
    city : String,
    street: String,
    apartment : Number
  }
})

////////////////////////////////////  or

const personSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
  address : addressSchema
})
*/
/**************************************************************** */