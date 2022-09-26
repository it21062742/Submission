const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ParkingFeeSchema = new Schema({
  username: {
    feeId: { type: String, required: true },
    CarVal: {type: String },
    VanVal: {type: String },
    BikeVal: {type: String},
    Date: { type: Date, default: Date() },
  },
}, {
  timestamps: true,
});

const parkingFee = mongoose.model("parkingFee", ParkingFeeSchema);
module.exports = parkingFee;