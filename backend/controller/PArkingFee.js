const AttendComplaint = require("../models/ParkingFee.model");

//To get All Attended Complaints
const getRequests = async (req, res) => {
  try {
    const allComps = await AttendComplaint.find(); //now this will find all students and save it in allStudents

    res.status(200).json(allComps);
  } catch (error) {
    // console.log(error);
    res.status(500).json({ message: error.message });
  }
};


//Update an existing fee based
const updateRequest = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    await AttendComplaint.findByIdAndUpdate(id, body);
    res.status(200).send("Successfully Updated");
  } catch {
    (err) => {
      res.status(500).send(err.message);
    };
  }
};


module.exports.getRequests = getRequests;
module.exports.updateRequest = updateRequest;

