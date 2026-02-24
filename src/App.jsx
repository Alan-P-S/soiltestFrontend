import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import LabTechnicianPortal from "./pages/LabTechnicianPortal";
import AdminDashboard from "./pages/AdminPanel";
import LabTechnicianHome from "./pages/LabTechnicianHomePage";
import RegisterFarmer from "./pages/FarmerRegistration.jsx";
import CreateEvent from "./pages/EventRegistration.jsx";
import FarmerDashboard from "./pages/FarmerDashboard.jsx";
import SoilHealthCard from "./pages/SoilHealthCard.jsx";
import FarmerLogin from "./pages/FarmerLogin.jsx";
import BookSoilTest from "./pages/BookingPage.jsx";
import AddSoilTest from "./pages/TestCreate.jsx";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/login/lab" element={<LabTechnicianHome/>} />
        <Route path="/lab/register-farmer" element={<RegisterFarmer/>} />
        <Route path="/lab/update-test" element={<LabTechnicianPortal/>} />
        <Route path="/lab/add-event" element={<CreateEvent/>} />
        <Route path="/lab/add-soiltest" element={<AddSoilTest/>} />
        <Route path="/farmer/book-test" element={<BookSoilTest/>} />
        <Route path="/login/admin" element={<AdminDashboard/>} />
        {/* <Route path="/farmer/dashboard" element={<FarmerDashboard/>} /> */}
        <Route path="/login/farmer" element={<FarmerDashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}
