import './App.css';
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









import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/adminlogin" exact element={<Login />} />
          <Route path="/don" exact element={<DonorReg />} />
          <Route path="/role" exact element={<Roleselection/>} />
          <Route path="/doctorrole" exact element={<Doctorrole/>} />
          <Route path="/DonorReg" exact element={<DonorReg/>} />
          <Route path="/donorrole" exact element={<Donorrole/>} />
          <Route path="/teacherrole" exact element={<Teacherrole/>} />
          <Route path="/AdminOrgReq" exact element={<AdminOrgReq/>} />
          <Route path="/AdminDonReq" exact element={<AdminDonReq/>} />
          <Route path="/Adminchangepass" exact element={<Adminchangepass/>} />
          <Route path="/OrgReg" exact element={<OrgReg/>} />
          <Route path="/teacherprobono" exact element={<Teacherprobono/>} />






        </Routes>
      </Router>
    </div>
  );
}

export default App;
