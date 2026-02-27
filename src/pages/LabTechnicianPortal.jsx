import { useEffect, useMemo, useState } from "react";
import useLabPortalStore from "../store/useLabPortalStore.js";
import toast from "react-hot-toast";

const CROPS = [
  { id: 1, name: "Rice" },
  { id: 2, name: "Wheat" },
  { id: 3, name: "Maize" },
  { id: 4, name: "Cotton" },
  { id: 5, name: "Sugarcane" },
  { id: 6, name: "Groundnut" },
  { id: 7, name: "Millet" },
];

const PAGE_SIZE = 4;

export default function LabTechnicianPortal() {
  const {
    farmers,
    loading,
    fetchPendingFarmers,
    submitSoilReport,
  } = useLabPortalStore();

  const [selectedFarmer, setSelectedFarmer] = useState(null);
  const [selectedCrops, setSelectedCrops] = useState([]);

  const [farmerSearch, setFarmerSearch] = useState("");
  const [cropSearch, setCropSearch] = useState("");

  const [farmerPage, setFarmerPage] = useState(1);
  const [cropPage, setCropPage] = useState(1);

  const [soilData, setSoilData] = useState({
    ph: "",
    tss: "",
    organicCarbon: "",
    soilType: "",
    potassium: "",
    phosphorus: "",
  });

  /* ---------------- FETCH DATA ---------------- */

  useEffect(() => {
    fetchPendingFarmers();
  }, []);

  /* ---------------- FILTERING ---------------- */

  const filteredFarmers = useMemo(
    () =>
      farmers.filter(
        (f) =>
          f.name.toLowerCase().includes(farmerSearch.toLowerCase()) ||
          f.village.toLowerCase().includes(farmerSearch.toLowerCase()),
      ),
    [farmers, farmerSearch],
  );

  const filteredCrops = useMemo(
    () =>
      CROPS.filter((c) =>
        c.name.toLowerCase().includes(cropSearch.toLowerCase()),
      ),
    [cropSearch],
  );

  /* ---------------- PAGINATION ---------------- */

  const farmerPages = Math.ceil(filteredFarmers.length / PAGE_SIZE);
  const cropPages = Math.ceil(filteredCrops.length / PAGE_SIZE);

  const paginatedFarmers = filteredFarmers.slice(
    (farmerPage - 1) * PAGE_SIZE,
    farmerPage * PAGE_SIZE,
  );

  const paginatedCrops = filteredCrops.slice(
    (cropPage - 1) * PAGE_SIZE,
    cropPage * PAGE_SIZE,
  );

  /* ---------------- HANDLERS ---------------- */

  const toggleCrop = (crop) => {
    setSelectedCrops((prev) =>
      prev.some((c) => c.id === crop.id)
        ? prev.filter((c) => c.id !== crop.id)
        : [...prev, crop],
    );
  };

  const handleChange = (e) => {
    setSoilData({ ...soilData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFarmer) return;

    try {
      const payload = {
        UserId: selectedFarmer.testId,
        crops: selectedCrops.map((c) => c.name),
        ...soilData,
      };

      await submitSoilReport(payload);

      toast.success("Soil test submitted");

      // Optional UI reset
      setSelectedFarmer(null);
      setSelectedCrops([]);
      setSoilData({
        ph: "",
        tss: "",
        organicCarbon: "",
        soilType: "",
        potassium: "",
        phosphorus: "",
      });

      fetchPendingFarmers(); // refresh list

    } catch (err) {
      console.error("Submission failed:", err);
    }
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="min-h-screen bg-base-100 flex flex-col">
      <div className="navbar bg-base-200 px-6 shadow-sm">
        <span className="text-lg font-semibold">
          Lab Technician Portal
        </span>
      </div>

      <main className="flex-1 p-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* FARMERS */}
          <div className="lg:col-span-3 card border border-base-300">
            <div className="card-body p-4 space-y-3">
              <h2 className="font-semibold">Pending Farmers</h2>

              <input
                className="input input-bordered input-sm"
                placeholder="Search name / village"
                value={farmerSearch}
                onChange={(e) => {
                  setFarmerSearch(e.target.value);
                  setFarmerPage(1);
                }}
              />

              {loading ? (
                <p className="text-sm opacity-70">Loading...</p>
              ) : (
                <table className="table table-sm">
                  <tbody>
                    {paginatedFarmers.map((f) => (
                      <tr
                        key={f.testId}
                        onClick={() => setSelectedFarmer(f)}
                        className={`cursor-pointer transition ${
                          selectedFarmer?.id === f.testId
                            ? "bg-base-200 font-semibold border-l-4 border-primary"
                            : "hover:bg-base-200/50"
                        }`}
                      >
                        <td>
                          {f.name}
                          <div className="text-xs opacity-70">
                            {f.village}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              <div className="flex justify-between text-sm">
                <button
                  className="btn btn-xs"
                  disabled={farmerPage === 1}
                  onClick={() => setFarmerPage((p) => p - 1)}
                >
                  Prev
                </button>
                <span>
                  {farmerPage} / {farmerPages || 1}
                </span>
                <button
                  className="btn btn-xs"
                  disabled={farmerPage === farmerPages}
                  onClick={() => setFarmerPage((p) => p + 1)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>

           {/* FORM */}
          <div className="lg:col-span-6 card border border-base-300">
            <form onSubmit={handleSubmit} className="card-body space-y-4">
              <div className="bg-base-200 p-3 rounded-lg text-sm">
                <p>
                  <b>Farmer:</b>{" "}
                  {selectedFarmer ? selectedFarmer.name : "Not selected"}
                </p>
                <p>
                  <b>Crops:</b>{" "}
                  {selectedCrops.length
                    ? selectedCrops.map((c) => c.name).join(", ")
                    : "None selected"}
                </p>
              </div>

              <h2 className="font-semibold">Soil Test Values</h2>

              <div className="grid md:grid-cols-2 gap-4">
                <input name="ph" type="number" step="0.01" required placeholder="pH value" className="input input-bordered" value={soilData.ph} onChange={handleChange}/>
                <input name="tss" type="number" required placeholder="TSS (mg/kg)" className="input input-bordered" value={soilData.tss} onChange={handleChange}/>
                <input name="organicCarbon" type="number" step="0.01" required placeholder="Organic Carbon (%)" className="input input-bordered" value={soilData.organicCarbon} onChange={handleChange}/>
                <select name="soilType" required className="select select-bordered" value={soilData.soilType} onChange={handleChange}>
                  <option value="">Select Soil Type</option>
                  <option>Sandy</option>
                  <option>Clay</option>
                  <option>Loamy</option>
                  <option>Silty</option>
                </select>
                <input name="potassium" type="number" required placeholder="Potassium (K)" className="input input-bordered" value={soilData.potassium} onChange={handleChange}/>
                <input name="phosphorus" type="number" required placeholder="Phosphorus (P)" className="input input-bordered" value={soilData.phosphorus} onChange={handleChange}/>
              </div>

              <div className="flex justify-end">
                <button className="btn btn-primary" disabled={!selectedFarmer || selectedCrops.length === 0}>
                  Submit Soil Report
                </button>
              </div>
            </form>
          </div>

          {/* CROPS */}
          <div className="lg:col-span-3 card border border-base-300">
            <div className="card-body p-4 space-y-3">
              <h2 className="font-semibold">Crops</h2>

              <input
                className="input input-bordered input-sm"
                placeholder="Search crop"
                value={cropSearch}
                onChange={(e) => {
                  setCropSearch(e.target.value);
                  setCropPage(1);
                }}
              />

              <table className="table table-sm">
                <tbody>
                  {CROPS.map((c) => {
                    const selected = selectedCrops.some((x) => x.id === c.id);
                    return (
                      <tr
                        key={c.id}
                        onClick={() => toggleCrop(c)}
                        className={`cursor-pointer transition ${
                          selected
                            ? "bg-base-200 font-semibold border-l-4 border-primary"
                            : "hover:bg-base-200/50"
                        }`}
                      >
                        <td className="flex items-center gap-2">
                          <input type="checkbox" checked={selected} readOnly className="checkbox checkbox-xs"/>
                          {c.name}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>

      <footer className="bg-base-200 text-base-content/60 text-center py-3 text-sm">
        Authorized Laboratory Access Only
      </footer>
    </div>
  );
}
