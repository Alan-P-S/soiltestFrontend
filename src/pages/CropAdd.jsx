import { useEffect, useState } from "react";
import { useCropStore } from "../store/usecropStore.js";
import { Phone, Leaf, MapPin } from "lucide-react";

export default function AddCropToPlot() {
  const { plots, crops, fetchPlotsByPhone, fetchCrops, addCropToPlot } =
    useCropStore();

  const [phone, setPhone] = useState("");
  const [selectedPlot, setSelectedPlot] = useState("");
  const [selectedCrop, setSelectedCrop] = useState("");

  const [toast, setToast] = useState(null);

  const showToast = (type, message) => {
    setToast({ type, message });

    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  // Load crops on page start
  useEffect(() => {
    fetchCrops();
  }, []);

  const loadPlots = async () => {
    if (!phone) {
      showToast("error", "Enter phone number");
      return;
    }

    const data = await fetchPlotsByPhone(phone);

    if (!data || data.length === 0) {
      showToast("error", "No plots found for this farmer");
    } else {
      showToast("success", "Plots loaded");
    }
  };

  const saveCrop = async () => {
    if (!selectedPlot || !selectedCrop) {
      showToast("error", "Select plot and crop");
      return;
    }

    const res = await addCropToPlot(selectedPlot, selectedCrop);

    if (res) {
      showToast("success", "Crop added to plot");
    } else {
      showToast("error", "Failed to add crop");
    }
  };

  return (
    <div className="flex justify-center p-10">
      {toast && (
        <div className="toast toast-top toast-end">
          <div
            className={`alert ${toast.type === "success" ? "alert-success" : "alert-error"}`}
          >
            <span>{toast.message}</span>
          </div>
        </div>
      )}

      <div className="card w-full max-w-xl bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl">
            <Leaf className="text-green-500" /> Add Crop To Plot
          </h2>

          {/* Phone Search */}

          <div className="flex gap-2">
            <input
              className="input input-bordered w-full"
              placeholder="Enter farmer phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <button className="btn btn-primary" onClick={loadPlots}>
              <Phone size={18} />
              Load Plots
            </button>
          </div>

          

          {/* Plot Selector */}

          {plots.length > 0 && (
            <>
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Select Plot</span>
                </label>

                <select
                  className="select select-bordered"
                  value={selectedPlot}
                  onChange={(e) => setSelectedPlot(e.target.value)}
                >
                  <option value="">Choose Plot</option>

                  {plots.map((plot) => (
                    <option key={plot.id} value={plot.id}>
                      {plot.location} ({plot.size} acres)
                    </option>
                  ))}
                </select>
              </div>

              {/* Crop Selector */}

              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Select Crop</span>
                </label>

                <select
                  className="select select-bordered"
                  value={selectedCrop}
                  onChange={(e) => setSelectedCrop(e.target.value)}
                >
                  <option value="">Choose Crop</option>

                  {crops.map((crop) => (
                    <option key={crop.id} value={crop.id}>
                      {crop.name}
                    </option>
                  ))}
                </select>
              </div>

              <button className="btn btn-success mt-6" onClick={saveCrop}>
                <MapPin size={18} />
                Save Crop
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
