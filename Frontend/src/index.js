import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GlobalContextWrapper } from "./ParkingManagement/context";

ReactDOM.render(
  <GlobalContextWrapper>
    <App />
  </GlobalContextWrapper>,
  document.getElementById("root")
);
