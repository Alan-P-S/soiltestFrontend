import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function AdminDashboard() {
  // Later these will come from API
  const stats = {
    totalSamples: 128,
    pendingResults: 34,
    completedResults: 94,
  };

  // Dummy place-wise data (later from backend)
  const placeData = {
    labels: ["Palakkad", "Erode", "Madurai", "Salem"],
    datasets: [
      {
        label: "Samples by Place",
        data: [40, 30, 32, 26],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-base-100 flex flex-col">

      {/* Header */}
      <div className="navbar bg-base-200 px-6 shadow-sm">
        <div className="flex-1">
          <span className="text-lg font-semibold">
            Admin Dashboard
          </span>
        </div>
      </div>

      {/* Main */}
      <main className="flex-1 p-6">

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-base-content">
            System Overview
          </h1>
          <p className="text-base-content/70">
            Real-time status of soil testing operations
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="card bg-base-100 border border-base-300 shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-sm text-base-content/70">
                Samples Collected
              </h2>
              <p className="text-4xl font-bold">
                {stats.totalSamples}
              </p>
              <p className="text-sm text-base-content/60">
                Total soil samples received
              </p>
            </div>
          </div>

          <div className="card bg-base-100 border border-base-300 shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-sm text-base-content/70">
                Pending Test Results
              </h2>
              <p className="text-4xl font-bold">
                {stats.pendingResults}
              </p>
              <p className="text-sm text-base-content/60">
                Samples awaiting analysis
              </p>
            </div>
          </div>

          <div className="card bg-base-100 border border-base-300 shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-sm text-base-content/70">
                Completed Test Results
              </h2>
              <p className="text-4xl font-bold">
                {stats.completedResults}
              </p>
              <p className="text-sm text-base-content/60">
                Reports successfully generated
              </p>
            </div>
          </div>

        </div>

        {/* Admin Notes */}
        <div className="mt-10 card bg-base-100 border border-base-300">
          <div className="card-body">
            <h2 className="font-semibold mb-2">
              Admin Notes
            </h2>
            <p className="text-sm text-base-content/70">
              Monitor pending samples regularly to ensure timely soil report delivery.
              Detailed analytics and lab-wise reports can be added here.
            </p>
          </div>
        </div>

        {/* 🔹 NEW SECTION: Pie Chart by Place */}
        <div className="mt-10 card bg-base-100 border border-base-300 shadow-sm">
          <div className="card-body">
            <h2 className="font-semibold mb-4">
              Sample Distribution by Place
            </h2>

            <div className="max-w-md mx-auto">
              <Pie data={placeData} />
            </div>

            <p className="text-sm text-base-content/70 mt-4 text-center">
              This chart represents the distribution of soil samples
              collected from different locations.
            </p>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-base-200 text-base-content/60 text-center py-3 text-sm">
        Administrator Access • Mobile Soil Testing System
      </footer>
    </div>
  );
}
