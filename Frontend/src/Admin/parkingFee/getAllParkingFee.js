import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetAllParkingFee() {
  const [ParkingFee, setParkingFee] = useState([]);

  useEffect(() => {
    //useEffect is a react hook that calls itself when the page loads/reloads
    axios
      .get("http://localhost:8080/park/parkFee")
      .then((allInfo) => {
        setParkingFee(allInfo.data);
        console.log("Data retreived Successfully");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []); //The square empty brackets is the syntax of react hook
  return ParkingFee;
}
