import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { usePlotStore } from "../store/useplotStore.js";

export default function PlotMap() {
  const [phone, setPhone] = useState("");

  const { plots, loadPlotsByPhone } = usePlotStore();

  const searchPlots = async () => {
    if (!phone) {
      alert("Enter phone number");
      return;
    }

    await loadPlotsByPhone(phone);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Farmer Plot Map</h1>

      <div className="flex gap-2 mb-4">
        <input
          className="input input-bordered"
          placeholder="Enter farmer phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button className="btn btn-primary" onClick={searchPlots}>
          Load Plots
        </button>
      </div>

      <div className="h-[500px] w-full rounded-lg overflow-hidden">
        <MapContainer
          center={[10.5276, 76.2144]}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution="OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {plots.map((plot) => (
            <Marker key={plot.id} position={[plot.latitude, plot.longitude]}>
              <Popup>
                <div>
                  <b>Place:</b> {plot.location} <br />
                  <b>Acres:</b> {plot.size} <br />
                  <b>Soil:</b> {plot.soilType}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
