const mongoose = require('mongoose')
const Schema = mongoose.Schema

const solarSchema = new Schema({
    planets : [{type: Schema.Types.ObjectId, ref: 'PlanetModel'}],
    starName : String

})

const Solar = mongoose.model("SolartModel", solarSchema)
module.exports = Solar