import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import HomePage from "./pages/Home";
import LabTechnicianPortal from "./pages/LabTechnicianPortal";
import AdminDashboard from "./pages/AdminPanel";
import LabTechnicianHome from "./pages/LabTechnicianHomePage";
import RegisterFarmer from "./pages/FarmerRegistration.jsx";
import CreateEvent from "./pages/EventRegistration.jsx";
import FarmerDashboard from "./pages/FarmerDashboard.jsx";
import SoilHealthCard from "./pages/SoilHealthCard.jsx";
import AddPlot from "./pages/PlotAdd.jsx";
import AddCropToPlot from "./pages/CropAdd.jsx";
import FarmerLogin from "./pages/FarmerLogin.jsx";
import ResultPage from "./pages/ResultPage.jsx";
import BookSoilTest from "./pages/BookingPage.jsx";
import GeneralCropsAdd from "./pages/generalCropsAdd.jsx";
import PlotMap from "./pages/PlotMap.jsx";
import "leaflet/dist/leaflet.css";
import AddSoilTest from "./pages/TestCreate.jsx";
import "./App.css";
import DownloadResult from "./pages/DownloadResult.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login/lab" element={<LabTechnicianHome />} />
        <Route path="/lab/register-farmer" element={<RegisterFarmer />} />
        <Route path="/lab/update-test" element={<LabTechnicianPortal />} />
        <Route path="/lab/crop-add" element={<GeneralCropsAdd />} />
        <Route path="/lab/add-event" element={<CreateEvent />} />
        <Route path="/lab/add-soiltest" element={<AddSoilTest />} />
        <Route path="/farmer/book-test" element={<BookSoilTest />} />
        <Route path="/farmer/result-page" element={<ResultPage />} />
        <Route path="/lab/plot-add" element={<AddPlot />} />
        <Route path="/lab/plot-map" element={<PlotMap />} />
        <Route path="/lab/plot-crop-add" element={<AddCropToPlot />} />
        <Route path="/lab/download-result" element={<DownloadResult />} />
        <Route path="/login/admin" element={<AdminDashboard />} />
        {/* <Route path="/farmer/dashboard" element={<FarmerDashboard/>} /> */}
        <Route path="/login/farmer" element={<FarmerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
