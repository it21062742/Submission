import React, { useState } from "react";

const Form = () => {
  const [bikeVal, setbikeFee] = useState("");
  const [carVal, setCarFee] = useState("");
  const [vanVal, setvanFee] = useState("");

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
                value={bikeVal}
                onChange={onChangeBike}
              />
            </p>
            <br></br>
            <p>
              car : &nbsp;
              <input
                type="number"
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
