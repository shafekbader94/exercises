
const express = require('express')
const router = express.Router()

const Person = require('../models/Person')

router.get('/people', function (req, res) {
    Person.find({}, function (err, people) {
        res.send(people)
    })
})



router.post('/person', function (req, res) {
  /* const firstName = req.body.firstName
   const lastName = req.body.lastName
   const age = req.body.age
let p = new Person({ firstName: firstName, lastName: lastName, age: age })*/
const p = new Person(req.body)
 p.save()
 res.end()
})

router.put('/person/:id', function (req, res) {
    const age = req.params.id
    Person.findById(age, function (err, person) {
        person.age = 80 
        person.save()
      })
   
    res.send("updated")
})

router.delete('/apocalypse', function (req, res) {
    Person.deleteMany(function (err, person) {
            console.log(err) //usually this will be `null`, unless something went wrong
        })
    //Person.deleteMany((q, p) => { console.log(p) })
    res.send("Deleted")
})



module.exports = router