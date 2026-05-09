import mongoose from 'mongoose'

const tripSchema = mongoose.Schema({
  place: String,
  budget: String,
  days: String
})

const Trip = mongoose.model('Trip', tripSchema)

export default Trip