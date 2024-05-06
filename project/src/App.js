import "./App.css";
import Home from "./pages/Home";
import DonationRequests from "./pages/DonationRequests";
import ToysRequests from "./pages/ToysRequests";
import FoodRequests from "./pages/FoodRequests";
import MedicalSuppliesRequests from "./pages/MedicalSuppliesRequests";
import BloodRequests from "./pages/BloodRequests";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/donationRequests"
            element={<DonationRequests />}
          />
          <Route exact path="/toysRequests" element={<ToysRequests />} />
          <Route exact path="/foodRequests" element={<FoodRequests />} />
          <Route
            exact
            path="/medicalSuppliesRequests"
            element={<MedicalSuppliesRequests />}
          />
          <Route exact path="/bloodRequests" element={<BloodRequests />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
