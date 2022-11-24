const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    content: String,
    rating: { type: Number, min: 1, max: 5, default: 5 },
  },
  {
    timestamps: true,
  }
);


const gasSchema = new Schema({
  
  stationName: String,
  city: String,
  streetNumber: Number,
  streetName: String,
  postalCode: String,
  gasPrice: String,
  reviews: [reviewSchema]
});





module.exports = mongoose.model('Gas', gasSchema);