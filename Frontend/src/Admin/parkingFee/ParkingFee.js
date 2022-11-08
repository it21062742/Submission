import React, { useState } from "react";

const Form = () => {
  const [bikeVal, setbikeFee] = useState("");
  const [carVal, setCarFee] = useState("");
  const [vanVal, setvanFee] = useState("");

<<<<<<< HEAD
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

    parkingFee.feeId = reqId;
  }

  function onSubmit(e) {
    e.preventDefault();
    window.location.reload(false);

    axios
      .post("http://localhost:8080/park/parkFee", parkingFee)
      .then(() => {
        alert("Request Added Successfully");
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
=======
  function onChangeCar(e) {
    setCarFee(e.target.value);
  }

  function onChangeVan(e) {
    setvanFee(e.target.value);
  }

  function onChangeBike(e) {
    setbikeFee(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    localStorage.setItem("carVal", carVal);
    localStorage.setItem("vanVal", vanVal);
    localStorage.setItem("bikeVal", bikeVal);
>>>>>>> parent of 3ebdddea (DB connect)
  }

  /*
    -->Fee
    CarVal
    bikeVal
    vanVal

   --> parkling 
    numberplateID 
    Hrs 
    type
    Date
    PayableAmount

    --> porking location
    id
    x
    y


    */

  return (
    <form
      onSubmit={onSubmit}
      className="fixed text-1x2  grid place-content-center text-black"
    >
      <div className="border-2 relative rounded-lg p-5 pt-10 flex flex-col gap-3">
        <h1>Update Parking fee</h1>

        <div>
          <div>
            <label>Vehicle type </label>
            <p>
              bike : &nbsp;
              <input
                type="number"
                required
                placeholder="enter new value"
                value={bikeVal}
                onChange={onChangeBike}
              />
            </p>
            <br></br>
            <p>
              car : &nbsp;
              <input
                type="number"
                required
                placeholder="enter new value"
                value={carVal}
                onChange={onChangeCar}
              />
            </p>
            <br></br>
            <p>
              van : &nbsp;
              <input
                type="number"
                required
                placeholder="enter new value"
                value={vanVal}
                onChange={onChangeVan}
              />
            </p>
            <br></br>
          </div>

          <button
            onClick={getData}
            onSubmit={onSubmit}
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
