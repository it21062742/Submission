// -->Fee
// CarVal
// bikeVal
// vanVal

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ParkingFeeSchema = new Schema({
    feeId: { type: String, required: true },
    CarVal: {type: String },
    VanVal: {type: String },
    BikeVal: {type: String},
  });

const parkingFee = mongoose.model("parkingFee", ParkingFeeSchema);
module.exports = parkingFee;