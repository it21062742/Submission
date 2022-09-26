import React from "react";

function ParkingFee({ park, closeModal, car, setCar }) {
  const handleChange = (e, key) => {
    setCar((c) => ({ ...c, [key]: e.target.value }));
  };

  return (
    <form
      onSubmit={(e) => park(e)}
      className="fixed text-4xl  grid place-content-center text-black"
    >
      <div className="border-2 relative rounded-lg p-4 pt-8 flex flex-col gap-4 bg-blue-700">
        <h2>Update parking fee</h2>
        <p>Select type</p>
        <select
          name="cars"
          id="cars"
          onChange={(e) => handleChange(e, "size")}
          className="w-full text-center"
        >
          {["Bike", "Car", "Van"].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        <p>Amount :</p>
        <input
          className="outline-none px-4 py-2 text-2xl"
          value={car?.newValue || ""}
          onChange={(e) => handleChange(e, "newval")}
        />
       
        <button
          type="submit"
          disabled={!car?.plateNumber}
          className={`${
            !car?.plateNumber &&
            "opacity-50 hover:opacity-50 cursor-not-allowed"
          } px-2 py-1 rounded-md duration-200 text-white border-2 tracking-widest w-full`}
        >
          Update
        </button>
      </div>
    </form>
  );
}

export default ParkingFee;
