import React, { useState } from "react";
import axios from "axios";
import AllPark from "./getAllParkingFee";

const Form = () => {
  const [bikeVal, setbikeFee] = useState("");
  const [carVal, setCarFee] = useState("");
  const [vanVal, setvanFee] = useState("");

  // feeId: { type: String, required: true },
  // CarVal: {type: String },
  // VanVal: {type: String },
  // BikeVal: {type: String},

  const [parkingFee, setparkingFee] = useState({
    feeId: "1",
    CarVal: 0,
    BikeVal: 0,
    VanVal: 0,
  });

  var AllInfo = AllPark();

  let j = AllInfo.length;
  j--;

  if (j >= 0) {
    let reqId = parseInt(AllInfo[j].feeId);
    reqId++;
    console.log(reqId);
    //console.log(j);
    // console.log(j);

    parkingFee.feeId = reqId;
  }
  // function onChangeCar(e) {
  //   setCarFee(e.target.value);
  // }

  // function onChangeVan(e) {
  //   setvanFee(e.target.value);
  // }

  // function onChangeBike(e) {
  //   setbikeFee(e.target.value);
  // // }

  function onSubmit(e) {
    e.preventDefault();
    window.location.reload(false);

    // localStorage.setItem("carVal", carVal);
    // localStorage.setItem("vanVal", vanVal);
    // localStorage.setItem("bikeVal", bikeVal);

    axios
      .post("http://localhost:8080/park/parkFee", parkingFee)
      .then(() => {
        alert("Request Added Successfully");
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  }

  return (
    <form
      onSubmit={onSubmit}
      className="fixed text-1x2  grid place-content-center text-black"
    >
      <div className="border-2 relative rounded-lg p-2 pt-5 flex flex-col gap-5">
        <h1>Update Parking fee</h1>

        <div>
          <div>
            <label>Vehicle type </label>
            <p>
              bike : &nbsp;
              <input
                type="number"
                placeholder="enter new value"
                onChange={(e) => {
                  setparkingFee({
                    ...parkingFee,
                    BikeVal: e.target.value,
                  });
                }}
              />
            </p>
            <br></br>
            <p>
              car : &nbsp;
              <input
                type="number"
                placeholder="enter new value"
                onChange={(e) => {
                  setparkingFee({
                    ...parkingFee,
                    CarVal: e.target.value,
                  });
                }}
              />
            </p>
            <br></br>
            <p>
              van : &nbsp;
              <input
                type="number"
                placeholder="enter new value"
                onChange={(e) => {
                  setparkingFee({
                    ...parkingFee,
                    VanVal: e.target.value,
                  });
                }}
              />
            </p>
            <br></br>
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-full"
            type="submit"
          >
            Submit
          </button>
          <br></br>
        </div>
      </div>
    </form>
  );
};

export default Form;
