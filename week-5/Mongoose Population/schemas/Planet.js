const mongoose = require('mongoose')
const Schema = mongoose.Schema

const planetSchema = new Schema({
    name: String,
    system: {type: Schema.Types.ObjectId, ref: 'SolartModel'},
    visitors : [{type: Schema.Types.ObjectId, ref: 'VisitortModel'}]

})

const Planet = mongoose.model("PlanetModel", planetSchema)
module.exports = Planet