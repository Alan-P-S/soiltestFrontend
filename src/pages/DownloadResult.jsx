import { useState } from "react";
import useReportStore from "../store/useReportStore.js";

export default function DownloadResult() {
  const { reports, loading, fetchReportsByPhone, downloadReport } =
    useReportStore();

  const [phone, setPhone] = useState("");

  const handleSearch = () => {
    if (!phone) return;

    fetchReportsByPhone(phone);
  };

  return (
    <div className="min-h-screen bg-base-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Soil Test Reports</h1>

        {/* Search */}

        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Enter farmer phone"
            className="input input-bordered w-full"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <button className="btn btn-primary" onClick={handleSearch}>
            Search
          </button>
        </div>

        {/* Table */}

        <div className="card border border-base-300">
          <div className="card-body">
            {loading ? (
              <p>Loading reports...</p>
            ) : reports.length === 0 ? (
              <p className="opacity-70">No reports found</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Report ID</th>
                      <th>Plot</th>
                      <th>Date</th>
                      <th>Download</th>
                    </tr>
                  </thead>

                  <tbody>
                    {reports.map((r) => (
                      <tr key={r.id}>
                        <td>{r.id}</td>

                        <td>{r.PlotId}</td>

                        <td>{new Date(r.createdAt).toLocaleDateString()}</td>

                        <td>
                          <button
                            className="btn btn-sm btn-success"
                            onClick={() => downloadReport(r.id, r.PlotId)}
                          >
                            Download
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
