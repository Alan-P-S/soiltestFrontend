import { useNavigate } from "react-router-dom";
import {
  UserPlus,
  CalendarPlus,
  FileEdit,
  TestTube,
  TreePalm, // NEW ICON
} from "lucide-react";

export default function LabTechnicianHome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-base-100 flex flex-col">
      {/* Header */}
      <div className="navbar bg-base-200 px-6 shadow-sm">
        <div className="flex-1">
          <span className="text-lg font-semibold">
            Lab Technician Dashboard
          </span>
        </div>
      </div>

      {/* Main */}
      <main className="flex-1 p-6 flex items-center justify-center">
        <div className="max-w-5xl w-full">
          {/* Welcome */}
          <div className="mb-10 text-center">
            <h1 className="text-2xl font-bold text-base-content">
              Welcome, Lab Technician
            </h1>
            <p className="text-base-content/70 mt-2">
              Select an action to continue your work
            </p>
          </div>

          {/* Action Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Register Farmer */}
            <div
              onClick={() => navigate("/lab/register-farmer")}
              className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md cursor-pointer transition"
            >
              <div className="card-body items-center text-center">
                <UserPlus size={40} className="opacity-80" />
                <h2 className="card-title">Register Farmer</h2>
                <p className="text-sm text-base-content/70">
                  Add a new farmer to the system
                </p>
                <button className="btn btn-primary btn-sm mt-4">Proceed</button>
              </div>
            </div>

            {/* Add New Event */}
            <div
              onClick={() => navigate("/lab/add-event")}
              className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md cursor-pointer transition"
            >
              <div className="card-body items-center text-center">
                <CalendarPlus size={40} className="opacity-80" />
                <h2 className="card-title">Add New Event</h2>
                <p className="text-sm text-base-content/70">
                  Create soil camps or awareness events
                </p>
                <button className="btn btn-primary btn-sm mt-4">Proceed</button>
              </div>
            </div>

            {/* Add Soil Test (NEW) */}
            <div
              onClick={() => navigate("/lab/add-soiltest")}
              className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md cursor-pointer transition"
            >
              <div className="card-body items-center text-center">
                <TestTube size={40} className="opacity-80" />
                <h2 className="card-title">Add Soil Test</h2>
                <p className="text-sm text-base-content/70">
                  Create a new soil test sample entry
                </p>
                <button className="btn btn-primary btn-sm mt-4">Proceed</button>
              </div>
            </div>

            {/* Update Test Result */}
            <div
              onClick={() => navigate("/lab/update-test")}
              className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md cursor-pointer transition"
            >
              <div className="card-body items-center text-center">
                <FileEdit size={40} className="opacity-80" />
                <h2 className="card-title">Update Test Result</h2>
                <p className="text-sm text-base-content/70">
                  Enter or modify soil test results
                </p>
                <button className="btn btn-primary btn-sm mt-4">Proceed</button>
              </div>
            </div>

            <div
              onClick={() => navigate("/lab/crop-add")}
              className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md cursor-pointer transition"
            >
              <div className="card-body items-center text-center">
                <TreePalm size={40} className="opacity-80" />
                <h2 className="card-title">Add New Crop</h2>
                <p className="text-sm text-base-content/70">Create new Crops</p>
                <button className="btn btn-primary btn-sm mt-4">Proceed</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-base-200 text-base-content/60 text-center py-3 text-sm">
        Authorized Laboratory Personnel Only
      </footer>
    </div>
  );
}
