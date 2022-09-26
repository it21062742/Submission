const router = require('express').Router();
let parkFee = require('../models/ParkingFee.model');

//http://localhost:8080/parkFee/read/id
//Read data from the database
//Display recoords of one parkFee 
router.route("/read/:id").get(async (req, res) => {

  let parkFeeId = req.params.id;

  const parkFee = await parkFee.findById(parkFeeId)
  .then((parkFee) => {
      res.status(200).send({status: "parkFee Details Fetched", parkFee});
  }).catch((err) => {
      console.log(err.message);
      res.status(500).send({status: "Error with fetching parkFee details", error: err.message});
  })
})

//http://localhost:8080/parkFee/update/id
//Update one record
router.route("/update/:id").put(async (req, res) => {
    
  let parkFeeId = req.params.id;
  const {parkFeeID, username, password, name} = req.body;

  const updateparkFee = {
      parkFeeID,
      username,
      password,
      name,
  }

  const update = await parkFee.findByIdAndUpdate(feeId, updateparkFee)
  .then(() => {
      res.status(200).send({status: "parkFee Details Updated"});
  }).catch((err) => {
      console.log(err);
      res.status(500).send({status: "Error with updating parkFee details", error: err.message});
  }) 
})


module.exports = router;