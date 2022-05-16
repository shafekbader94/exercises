var mongoose = require("mongoose");

const Solar = require('./schemas/SolarSystem')
const Planet = require('./schemas/Planet')
const Visitor = require('./schemas/Visitor')

mongoose.connect("mongodb://localhost/popul-exer", { useNewUrlParser: true });


const s1 = new Solar({
    planets: [],
    starName: 'green star'
})


const p1 = new Planet({
    name: "Earth",
    system: s1,
    visitors: []
})


const v1 = new Visitor({
    name: 'Myname',
    homePlanet: p1,
    visitedPlanets: [p1]
})

/*
 s1.planets.push(p1)
  p1.visitors.push(v1)

 s1.save()
 p1.save()
 v1.save()
 */
/******************************************************** */
/*
//1
 Visitor.find({}).populate("visitedPlanets")
 .exec(function (err, visitors) {
     console.log(visitors)
 })
*/

/*
//2
 Planet.find({}).populate("visitors")
 .exec(function (err, visitors) {
     console.log(visitors)
 })
 */


 //3
 Solar.findOne({})
    .populate({
        path: 'planets',
        populate: {
            path: 'visitors'
        }
    })
    .exec(function (err, visitors) {
        console.log(visitors)
    })
