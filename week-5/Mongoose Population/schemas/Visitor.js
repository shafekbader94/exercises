const mongoose = require('mongoose')
const Schema = mongoose.Schema

const visitorSchema = new Schema({
    name : String,
    homePlanet: {type: Schema.Types.ObjectId, ref: 'PlanetModel'},
    visitedPlanets:[{type: Schema.Types.ObjectId, ref: 'PlanetModel'}]
 

})

const Visitor = mongoose.model("VisitortModel", visitorSchema)
module.exports = Visitor