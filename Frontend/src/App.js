import EditBar from "./ParkingManagement/components/PArkingManagement/EditBar";
import Notification from "./ParkingManagement/components/PArkingManagement/Notification";
import ManageBar from "./ParkingManagement/components/PArkingManagement/ManageBar";
import StatusBar1 from "./ParkingManagement/components/PArkingManagement/StatusBar";
import StatusBar2 from "./Admin/components/StatusBar";
import { SideNavigation } from "./ParkingManagement/components/nav/MainNavigation";
import ParkingLot from "./ParkingManagement/components/PArkingManagement/ParkingLot";
import { MainNavigation } from "./ParkingManagement/components/nav/MainNavigation";
import Parkfee from "./Admin/parkingFee/ParkingFee";

import Login from "./Login/index";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <MainNavigation />
        <Routes>
          <Route
            path="/park"
            element={
              <div className="App">
                <Notification />
                <StatusBar1 />
                <EditBar />
                <ParkingLot />
                <ManageBar />
              </div>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
        </Routes>
      </div>

      <Routes>
        <Route
          path="/admin"
          element={
            <>
              <StatusBar2 />
              <Parkfee />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
