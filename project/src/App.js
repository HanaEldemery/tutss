/*import logo from "./logo.svg";*/
import "./styles/App.css";
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
import TeachingPosts from "./pages/TeachingPosts";
import MedicalCases from "./pages/MedicalCases";
import TransportationSelection from "./pages/TransportationSelection";
import DonationSuccessful from "./pages/DonationSuccessful";
import DropoffSelection from "./pages/DropoffSelection";
import TeacherPage from "./pages/TeacherPage";
import ClothingRequests from "./pages/ClothingRequests";
import SchoolSuppliesDonations from "./pages/SchoolSuppliesDonations";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import DonationTypes from "./pages/DonationTypes";
import Footer from "./components/Footer";
//import Donation from "./assets/donation.jpg";
import SignUpIn from "./pages/SignUpIn";
import Map from "./pages/Map";
import Donor from "./pages/Donor";
import Admin from "./pages/Admin";
import Testing from "./pages/SearchShalloudy";
import Organisation from "./pages/Organisation";
import CommonPageteacher from "./pages/CommonPageteacher";
import CommonPagegeneral from "./pages/CommonPagegeneral";
import CommonPageDoctor from "./pages/CommonPageDoctor";
import AdminHomePage from "./pages/AdminHomePage";


import Halla from "./Search2";
import Hana from "./pages/BloodRequest";
import ViewAllOrganisations from  "./pages/ViewAllOrganisations";
import ViewAllDonors from  "./pages/ViewAllDonors";

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
          <Route
            exact
            path="/DonationRequests"
            element={<DonationRequests />}
          />
          <Route exact path="/DonationRequest" element={<DonationRequest />} />
          <Route
            exact
            path="/ClothingRequests"
            element={<ClothingRequests />}
          />
          <Route
            exact
            path="/SchoolSuppliesDonations"
            element={<SchoolSuppliesDonations />}
          />
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
          <Route path="/CommonPageteacher" exact element={<CommonPageteacher />} />
          <Route path="/CommonPagegeneral" exact element={<CommonPagegeneral />} />
          <Route path="/CommonPageDoctor" exact element={<CommonPageDoctor />} />
          <Route path="/teacherrole" exact element={<Teacherrole />} />
          <Route path="/AdminOrgReq" exact element={<AdminOrgReq />} />
          <Route path="/AdminDonReq" exact element={<AdminDonReq />} />
          <Route path="/Adminchangepass" exact element={<Adminchangepass />} />
          <Route path="/OrgReg" exact element={<OrgReg />} />
          <Route path="/teacherprobono" exact element={<Teacherprobono />} />

          <Route path="/TeachingPosts" element={<TeachingPosts />} />
          <Route path="/MedicalCases" element={<MedicalCases />} />
          <Route
            path="/TransportationSelection"
            element={<TransportationSelection />}
          />
          <Route path="/DropoffSelection" element={<DropoffSelection />} />
          <Route path="/DonationSuccessful" element={<DonationSuccessful />} />
          <Route path="/TeacherPage" element={<TeacherPage />} />
          <Route
            exact
            path="/DonationRequests"
            element={<DonationRequests />}
          />
          <Route exact path="/DonationRequest" element={<DonationRequest />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/donation" exact element={<DonationTypes />} />
          <Route path="/account" exact element={<SignUpIn />} />
          <Route path="/map" exact element={<Map />} />
          <Route path="/donor" exact element={<Donor />} />
          <Route path="/admin" exact element={<Admin />} />
          <Route path="/testing" exact element={<Testing />} />
          <Route path="/organisation" exact element={<Organisation />} />
          <Route path="/ViewAllOrganisations" exact element={<ViewAllOrganisations />} />
          <Route path="/AdminHomePage" exact element={<AdminHomePage />} />

          <Route path="/ViewAllDonors" exact element={<ViewAllDonors />} />

          <Route path="/halla" exact element={<Halla />} />

          <Route path="/hana" exact element={<Hana />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
