const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    content: String,
    status: String,
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