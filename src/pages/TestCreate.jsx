import { useState } from "react";
import toast from "react-hot-toast";
import useSoilTestStore from "../store/useSoilTestStore.js";

export default function AddSoilTest() {
  const {
    farmer,
    loading,
    searchFarmerByPhone,
    addSoilTest,
    clearFarmer,
  } = useSoilTestStore();

  const [phone, setPhone] = useState("");

  const [formData, setFormData] = useState({
    date: "",
    status: "Pending",
    plotId: "",
  });

  const handleSearch = async () => {
    if (!phone) {
      toast.error("Enter phone number");
      return;
    }

    try {
      await searchFarmerByPhone(phone);
      toast.success("Farmer found");
    } catch {
      toast.error("Farmer not found");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!farmer) {
      toast.error("Search farmer first");
      return;
    }

    const payload = {
      phone,
      UserId: farmer.id,
      farmerName: farmer.username,
      PlotId: formData.plotId,
      date: formData.date,
      status: formData.status,
    };

    try {
        console.log(payload)
      await addSoilTest(payload);
      toast.success("Soil test added successfully");

      setPhone("");
      clearFarmer();
      setFormData({
        date: "",
        status: "Pending",
        plotId: "",
      });
    } catch {
      toast.error("Failed to add soil test");
    }
  };

  return (
    <div className="min-h-screen bg-base-100 flex flex-col">

      {/* Header */}
      <div className="navbar bg-base-200 px-6 shadow-sm">
        <span className="text-lg font-semibold">
          Add Soil Test
        </span>
      </div>

      <main className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-xl">
          <div className="card bg-base-100 border border-base-300 shadow-sm">
            <form onSubmit={handleSubmit} className="card-body space-y-4">

              {/* Phone */}
              <div>
                <label className="label">
                  <span className="label-text">Farmer Phone</span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="tel"
                    className="input input-bordered w-full"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    disabled={!!farmer}
                  />
                  <button
                    type="button"
                    className={`btn btn-outline ${loading ? "loading" : ""}`}
                    onClick={handleSearch}
                    disabled={loading || !!farmer}
                  >
                    Search
                  </button>
                </div>
              </div>

              {/* Farmer details */}
              {farmer && (
                <>
                  <input
                    className="input input-bordered w-full"
                    value={`ID: ${farmer.id}`}
                    disabled
                  />

                  <input
                    className="input input-bordered w-full"
                    value={farmer.username}
                    disabled
                  />

                  {/* Plot dropdown */}
                  <select
                    className="select select-bordered w-full"
                    value={formData.plotId}
                    onChange={(e) =>
                      setFormData({ ...formData, plotId: e.target.value })
                    }
                    required
                  >
                    <option value="">Select Plot</option>
                    {farmer.Plots.map((plot) => (
                      <option key={plot.id} value={plot.id}>
                        {plot.location} – {plot.size} acres ({plot.soilType})
                      </option>
                    ))}
                  </select>

                  <input
                    type="date"
                    className="input input-bordered w-full"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    required
                  />

                  <select
                    className="select select-bordered w-full"
                    value={formData.status}
                    onChange={(e) =>
                      setFormData({ ...formData, status: e.target.value })
                    }
                  >
                    <option>Pending</option>
                    <option>Collected</option>
                    <option>Testing</option>
                  </select>

                  <button
                    type="submit"
                    className={`btn btn-primary ${loading ? "loading" : ""}`}
                    disabled={loading}
                  >
                    Add Soil Test
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </main>

      <footer className="bg-base-200 text-base-content/60 text-center py-3 text-sm">
        Authorized Laboratory Personnel Only
      </footer>
    </div>
  );
}
