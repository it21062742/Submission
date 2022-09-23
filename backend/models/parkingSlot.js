const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// AttendComplaint (complaintID, empID, status, action, resolved_date)
const ParkingSlotSchema = new Schema({
  Id: { type: String, required: true },
  Entry: { type: Date, default: Date() },
  status: { type: String, required: true},
  returner: { type: Boolean, default: "false", require: true },
  Entry: { type: Date, default: Date() },
});

const ParkingSlot = mongoose.model(
  "AttendComplaint",
  ParkingSlotSchema
);
module.exports = ParkingSlotSchema;
