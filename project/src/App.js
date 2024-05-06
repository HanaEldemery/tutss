/*import logo from "./logo.svg";*/
import "./App.css";
import Login from "./pages/Login";
import DonorReg from "./pages/DonorReg";
import Roleselection from "./pages/roleselection";
import Doctorrole from "./pages/doctorrole";
import Donorrole from "./pages/donorrole";
import Teacherrole from "./pages/teacherrole";
import AdminOrgReq from "./pages/AdminOrgReq";
import AdminDonReq from "./pages/AdminDonReq";
import Adminchangepass from "./pages/Adminchangepass";
import OrgReg from "./pages/OrgReg";
import Teacherprobono from "./pages/teacherprobono";
import Home from "./pages/Home";
import DonationRequestss from "./pages/DonationRequestss";
import DonationRequests from "./pages/DonationRequests";
import DonationRequest from "./pages/DonationRequest";
import ToysRequests from "./pages/ToysRequests";
import FoodRequests from "./pages/FoodRequests";
import MedicalSuppliesRequests from "./pages/MedicalSuppliesRequests";
import BloodRequests from "./pages/BloodRequests";
import TeachingPosts from './pages/TeachingPosts'
import MedicalCases from './pages/MedicalCases';
import TransportationSelection from './pages/TransportationSelection';
import DonationSuccessful from './pages/DonationSuccessful';
import DropoffSelection from './pages/DropoffSelection';
import TeacherPage from './pages/TeacherPage';
import ClothingRequests from "./pages/ClothingRequests";
import SchoolSuppliesDonations from "./pages/SchoolSuppliesDonations";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/donationRequestss"
            element={<DonationRequestss />}
          />
                    <Route exact path="/DonationRequests"  element={<DonationRequests/>} />
          <Route exact path="/DonationRequest"  element={<DonationRequest/>} />
             <Route exact path="/ClothingRequests"  element={<ClothingRequests />} />
          <Route exact path="/SchoolSuppliesDonations"  element={<SchoolSuppliesDonations />} />
          <Route exact path="/toysRequests" element={<ToysRequests />} />
          <Route exact path="/foodRequests" element={<FoodRequests />} />
          <Route
            exact
            path="/medicalSuppliesRequests"
            element={<MedicalSuppliesRequests />}
          />
          <Route exact path="/bloodRequests" element={<BloodRequests />} />

          <Route path="/adminlogin" exact element={<Login />} />
          <Route path="/don" exact element={<DonorReg />} />
          <Route path="/role" exact element={<Roleselection />} />
          <Route path="/doctorrole" exact element={<Doctorrole />} />
          <Route path="/DonorReg" exact element={<DonorReg />} />
          <Route path="/donorrole" exact element={<Donorrole />} />
          <Route path="/teacherrole" exact element={<Teacherrole />} />
          <Route path="/AdminOrgReq" exact element={<AdminOrgReq />} />
          <Route path="/AdminDonReq" exact element={<AdminDonReq />} />
          <Route path="/Adminchangepass" exact element={<Adminchangepass />} />
          <Route path="/OrgReg" exact element={<OrgReg />} />
          <Route path="/teacherprobono" exact element={<Teacherprobono />} />

         <Route path="/TeachingPosts" element={<TeachingPosts />} />
          <Route path="/MedicalCases" element={<MedicalCases />} />
          <Route path="/TransportationSelection" element={<TransportationSelection />} />
          <Route path="/DropoffSelection" element={<DropoffSelection />} />
          <Route path="/DonationSuccessful" element={<DonationSuccessful/>} />
          <Route path="/TeacherPage" element={<TeacherPage/>} />
          <Route exact path="/DonationRequests"  element={<DonationRequests/>} />
          <Route exact path="/DonationRequest"  element={<DonationRequest/>} />
          </Routes>
      </Router>
    </div>
  );
}


export default App;


