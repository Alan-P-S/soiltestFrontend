import { useNavigate } from "react-router-dom";
import { FlaskConical, ShieldCheck, Sprout } from "lucide-react";
import { motion } from "motion/react";
export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      {/* Navbar */}
      <div className="navbar bg-base-200 px-6 shadow-sm">
        <div className="flex-1">
          <span className="text-lg font-semibold text-base-content">
            Mobile Soil Testing Lab
          </span>
        </div>
      </div>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-5xl w-full">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-base-content">
              Access Portal
            </h1>
            <p className="mt-2 text-base-content/70 max-w-xl mx-auto">
              Select your role to continue using the soil testing services
            </p>
          </div>

          {/* Role Cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Lab Technician */}
            <div
              onClick={() => navigate("/login/lab")}
              className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md cursor-pointer transition"
            >
              <div className="card-body items-center text-center">
                <FlaskConical size={42} className="opacity-80" />
                <h2 className="card-title">Lab Technician</h2>
                <p className="text-sm text-base-content/70">
                  Upload soil sample results and manage laboratory operations
                </p>
                <div className="card-actions mt-4">
                  <button className="btn btn-primary btn-sm">Login</button>
                </div>
              </div>
            </div>

            {/* Admin */}
            <div
              onClick={() => navigate("/login/admin")}
              className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md cursor-pointer transition"
            >
              <div className="card-body items-center text-center">
                <ShieldCheck size={42} className="opacity-80" />
                <h2 className="card-title">Admin</h2>
                <p className="text-sm text-base-content/70">
                  Manage users, laboratories, reports and system settings
                </p>
                <div className="card-actions mt-4">
                  <button className="btn btn-primary btn-sm">Login</button>
                </div>
              </div>
            </div>

            {/* Farmer */}
            <div
              onClick={() => navigate("/login/farmer")}
              className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md cursor-pointer transition"
            >
              <div className="card-body items-center text-center">
                <Sprout size={42} className="opacity-80" />
                <h2 className="card-title">Farmer</h2>
                <p className="text-sm text-base-content/70">
                  View soil health reports and crop recommendations
                </p>
                <div className="card-actions mt-4">
                  <button className="btn btn-primary btn-sm">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-base-200 text-base-content/60 text-center py-3 text-sm">
        © {new Date().getFullYear()} Mobile Soil Testing Service
      </footer>
    </div>
  );
}
