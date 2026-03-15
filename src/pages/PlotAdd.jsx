import { useState } from "react";
import { usePlotStore } from "../store/useplotStore.js";
import { MapPin, Phone, LocateFixed, Sprout } from "lucide-react";

export default function AddPlot() {
  const { farmer, searchFarmerByPhone, addPlot } = usePlotStore();

  const [phone, setPhone] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [place, setPlace] = useState("");
  const [acres, setAcres] = useState("");
  const [soilType, setSoilType] = useState("");

  const [toast, setToast] = useState(null);

  const showToast = (type, message) => {
    setToast({ type, message });

    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const handleSearch = async () => {
    if (!phone) {
      showToast("error", "Enter phone number");
      return;
    }

    const farmerData = await searchFarmerByPhone(phone);

    if (farmerData) {
      showToast("success", "Farmer found");
    } else {
      showToast("error", "Farmer not found");
    }
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;

      setLatitude(lat);
      setLongitude(lon);

      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`,
      );

      const data = await res.json();

      setPlace(data.display_name);

      showToast("success", "Location captured");
    });
  };

  const savePlot = async () => {
    if (!soilType) {
      showToast("error", "Select soil type");
      return;
    }

    const plotData = {
      UserId: farmer.id,
      latitude,
      longitude,
      location: place,
      size: acres,
      soilType,
    };

    const res = await addPlot(plotData);

    if (res) {
      showToast("success", "Plot created successfully");
    } else {
      showToast("error", "Failed to create plot");
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
            <Sprout className="text-green-500" /> Add Farmer Plot
          </h2>

          {/* Phone Search */}

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter farmer phone"
              className="input input-bordered w-full"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <button className="btn btn-primary" onClick={handleSearch}>
              <Phone size={18} />
              Search
            </button>
          </div>

          {farmer && (
            <div className="alert alert-success mt-3">
              Farmer: <b>{farmer.username}</b>
            </div>
          )}

          {farmer && (
            <>
              <div className="divider">Plot Details</div>

              <button className="btn btn-outline" onClick={getLocation}>
                <LocateFixed size={18} />
                Get GPS Location
              </button>

              <input
                className="input input-bordered mt-3"
                placeholder="Latitude"
                value={latitude}
                readOnly
              />

              <input
                className="input input-bordered mt-3"
                placeholder="Longitude"
                value={longitude}
                readOnly
              />

              <input
                className="input input-bordered mt-3"
                placeholder="Place"
                value={place}
                readOnly
              />

              <input
                type="number"
                className="input input-bordered mt-3"
                placeholder="Acres"
                value={acres}
                onChange={(e) => setAcres(e.target.value)}
              />

              {/* Soil Type */}

              <div className="mt-4">
                <label className="label">
                  <span className="label-text font-semibold">Soil Type</span>
                </label>

                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="soil"
                      className="radio radio-primary"
                      value="sandy"
                      onChange={(e) => setSoilType(e.target.value)}
                    />
                    Sandy
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="soil"
                      className="radio radio-primary"
                      value="clay"
                      onChange={(e) => setSoilType(e.target.value)}
                    />
                    Clay
                  </label>
                </div>
              </div>

              <button className="btn btn-success mt-5" onClick={savePlot}>
                <MapPin size={18} />
                Save Plot
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
