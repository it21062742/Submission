
import EditBar from "./ParkingManagement/components/PArkingManagement/EditBar";
import Notification from "./ParkingManagement/components/PArkingManagement/Notification";
import ManageBar from "./ParkingManagement/components/PArkingManagement/ManageBar";
import StatusBar from "./ParkingManagement/components/PArkingManagement/StatusBar";
import ParkingLot from "./ParkingManagement/components/PArkingManagement/ParkingLot";
import { MainNavigation } from "./ParkingManagement/components/nav/MainNavigation";


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
                    <StatusBar />
                    <EditBar />
                    <ParkingLot />
                    <ManageBar />
                  </div>
                }
              />
            </Routes>

            <Routes>
              <Route
                path="/Login"
                element={
                  <>
                    <Login />
                    
                  </>
                }
              />
            </Routes>
          </div>
        </Router>

  );
}

export default App;