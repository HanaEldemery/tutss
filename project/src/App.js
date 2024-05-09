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
import ViewEditAccount from "./pages/ViewEditAccount";

import Halla from "./Search2";
import Hana from "./pages/BloodRequest";
import ViewAllOrganisations from "./pages/ViewAllOrganisations";
import ViewAllDonors from "./pages/ViewAllDonors";
import ViewAllOrganisationsForDonor from "./pages/ViewAllOrganisationsForDonor";

import OrganisationHospital from "./pages/organisationHospital";
import OrganisationOrphanage from "./pages/organisationOrphanage";
import OrganisationVet from "./pages/organisationVet";

import DropoffSelectionHospital from "./pages/DropoffSelectionHospital";
import DropoffSelectionOrphanage from "./pages/DropOffSelectionOrphanage";
import DropoffSelectionVet from "./pages/DropOffSelectionVet";

import ViewAllOrganisationsForDoctor from "./pages/ViewAllOrganisationsForDoctor";
import ViewAllOrganisationsForTeacher from "./pages/ViewAllOrganisationsForTeacher";

import DonationRequestssDoctor from "./pages/DonationRequestssDoctor";
import DonationRequestssTeacher from "./pages/DonationRequestssTeacher";

import SchoolSuppliesDonationsDoctor from "./pages/SchoolSuppliesDonationsDoctor";
import SchoolSuppliesDonationsTeacher from "./pages/SchoolSuppliesDonationsTeacher";

import ClothingRequestsDoctor from "./pages/ClothingRequestsDoctor";
import ClothingRequestsTeacher from "./pages/ClothingRequestsTeacher";

import ToysRequestsDoctor from "./pages/toysRequestsDoctor";
import ToysRequestsTeacher from "./pages/toysRequestsTeacher";
import FoodRequestsDoctor from "./pages/foodRequestsDoctor";
import FoodRequestsTeacher from "./pages/foodRequestsTeacher";
import MedicalSuppliesRequestsDoctor from "./pages/medicalSuppliesRequestsDoctor";
import MedicalSuppliesRequestsTeacher from "./pages/medicalSuppliesRequestsTeacher";
import BloodRequestsDoctor from "./pages/bloodRequestsDoctor";
import BloodRequestsTeacher from "./pages/bloodRequestsTeacher";

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
          <Route
            path="DropoffSelectionHospital"
            exact
            element={<DropoffSelectionHospital />}
          />
          <Route
            path="DropoffSelectionOrphanage"
            exact
            element={<DropoffSelectionOrphanage />}
          />
          <Route
            path="DropoffSelectionVet"
            exect
            element={<DropoffSelectionVet />}
          />
          <Route
            path="/CommonPageteacher"
            exact
            element={<CommonPageteacher />}
          />
          <Route
            path="/CommonPagegeneral"
            exact
            element={<CommonPagegeneral />}
          />
          <Route
            path="/CommonPageDoctor"
            exact
            element={<CommonPageDoctor />}
          />
          <Route path="/ViewAllDonors" exact element={<ViewAllDonors />} />
          <Route path="/teacherrole" exact element={<Teacherrole />} />
          <Route path="/AdminOrgReq" exact element={<AdminOrgReq />} />
          <Route path="/AdminDonReq" exact element={<AdminDonReq />} />
          <Route path="/Adminchangepass" exact element={<Adminchangepass />} />
          <Route path="/OrgReg" exact element={<OrgReg />} />
          <Route path="/teacherprobono" exact element={<Teacherprobono />} />
          <Route path="/ViewEditAccount" exact element={<ViewEditAccount />} />
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
          <Route
            path="/organisationHospital"
            exact
            element={<OrganisationHospital />}
          />
          <Route
            path="/organisationOrphanage"
            exact
            element={<OrganisationOrphanage />}
          />
          <Route path="/organisationVet" exact element={<OrganisationVet />} />
          <Route
            path="/ViewAllOrganisations"
            exact
            element={<ViewAllOrganisations />}
          />

          <Route path="/AdminHomePage" exact element={<AdminHomePage />} />

          <Route
            path="/ViewAllOrganisationsForDonor"
            exact
            element={<ViewAllOrganisationsForDonor />}
          />

          <Route path="/halla" exact element={<Halla />} />

          <Route path="/hana" exact element={<Hana />} />

          <Route
            path="/ViewAllOrganisationsForDoctor"
            exact
            element={<ViewAllOrganisationsForDoctor />}
          />
          <Route
            path="/ViewAllOrganisationsForTeacher"
            exact
            element={<ViewAllOrganisationsForTeacher />}
          />
          <Route
            path="/DonationRequestssDoctor"
            exact
            element={<DonationRequestssDoctor />}
          />
          <Route
            path="/DonationRequestssTeacher"
            exact
            element={<DonationRequestssTeacher />}
          />
          <Route
            path="/SchoolSuppliesDonationsDoctor"
            exact
            element={<SchoolSuppliesDonationsDoctor />}
          />
          <Route
            path="/SchoolSuppliesDonationsTeacher"
            exact
            element={<SchoolSuppliesDonationsTeacher />}
          />
          <Route
            exact
            path="/ClothingRequestsDoctor"
            element={<ClothingRequestsDoctor />}
          />
          <Route
            exact
            path="/ClothingRequestsTeacher"
            element={<ClothingRequestsTeacher />}
          />
          <Route
            exact
            path="/toysRequestsDoctor"
            element={<ToysRequestsDoctor />}
          />
          <Route
            exact
            path="/toysRequestsTeacher"
            element={<ToysRequestsTeacher />}
          />
          <Route
            exact
            path="/foodRequestsDoctor"
            element={<FoodRequestsDoctor />}
          />
          <Route
            exact
            path="/foodRequestsTeacher"
            element={<FoodRequestsTeacher />}
          />
          <Route
            exact
            path="/medicalSuppliesRequestsDoctor"
            element={<MedicalSuppliesRequestsDoctor />}
          />
          <Route
            exact
            path="/medicalSuppliesRequestsTeacher"
            element={<MedicalSuppliesRequestsTeacher />}
          />
          <Route
            exact
            path="/bloodRequestsDoctor"
            element={<BloodRequestsDoctor />}
          />
          <Route
            exact
            path="/bloodRequestsTeacher"
            element={<BloodRequestsTeacher />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
