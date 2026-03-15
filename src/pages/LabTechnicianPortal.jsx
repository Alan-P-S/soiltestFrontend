import { useEffect, useState } from "react";
import useLabPortalStore from "../store/useLabPortalStore.js";
import toast from "react-hot-toast";

export default function LabTechnicianPortal() {
  const {
    tests,
    crops,
    loading,
    fetchPendingTests,
    fetchCropsByPlot,
    submitSoilReport,
    updateTestStatus,
  } = useLabPortalStore();

  const [selectedTest, setSelectedTest] = useState(null);

  const [soilData, setSoilData] = useState({
    ph: "",
    tss: "",
    organicCarbon: "",
    potassium: "",
    phosphorus: "",
  });

  /* ---------------- LOAD TESTS ---------------- */

  useEffect(() => {
    fetchPendingTests();
  }, []);

  /* ---------------- SELECT TEST ---------------- */

  const selectTest = async (test) => {
    setSelectedTest(test);

    await fetchCropsByPlot(test.PlotId);
  };

  /* ---------------- INPUT HANDLER ---------------- */

  const handleChange = (e) => {
    setSoilData({
      ...soilData,
      [e.target.name]: e.target.value,
    });
  };

  /* ---------------- SUBMIT ---------------- */

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("updating test status");
    if (!selectedTest) return;
    try {
      const payload = {
        UserId: selectedTest.User.id,
        PlotId: selectedTest.PlotId,
        TestId: selectedTest.id,
        soilType: selectedTest.Plot.soilType,
        ...soilData,
      };

      const result = await submitSoilReport(payload);
      console.log("Result", result);
      await updateTestStatus(selectedTest.id);

      toast.success("Soil report submitted");

      setSelectedTest(null);

      setSoilData({
        ph: "",
        tss: "",
        organicCarbon: "",
        potassium: "",
        phosphorus: "",
      });

      fetchPendingTests();
    } catch (err) {
      console.log(err.response?.data || err.message);
      toast.error("Submission failed");
    }
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="min-h-screen bg-base-100 flex flex-col">
      <div className="navbar bg-base-200 shadow-sm px-6">
        <span className="text-lg font-semibold">Lab Technician Portal</span>
      </div>

      <main className="flex-1 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT PANEL — PENDING TESTS */}

          <div className="lg:col-span-3 card border border-base-300">
            <div className="card-body p-4">
              <h2 className="font-semibold mb-2">Pending Tests</h2>

              {loading ? (
                <p>Loading...</p>
              ) : (
                <table className="table table-sm">
                  <tbody>
                    {tests.map((t) => (
                      <tr
                        key={t.id}
                        onClick={() => selectTest(t)}
                        className={`cursor-pointer hover:bg-base-200 ${
                          selectedTest?.id === t.id
                            ? "bg-base-200 font-semibold border-l-4 border-primary"
                            : ""
                        }`}
                      >
                        <td>
                          {t.User.username}

                          <div className="text-xs opacity-70">
                            {t.User.place}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>

          {/* CENTER — SOIL REPORT FORM */}

          <div className="lg:col-span-6 card border border-base-300">
            <form onSubmit={handleSubmit} className="card-body space-y-4">
              <div className="bg-base-200 p-3 rounded-lg text-sm">
                <p>
                  <b>Farmer:</b>{" "}
                  {selectedTest ? selectedTest.User.username : "Not selected"}
                </p>

                <p>
                  <b>Plot ID:</b> {selectedTest ? selectedTest.PlotId : "-"}
                </p>
              </div>

              <h2 className="font-semibold">Soil Test Values</h2>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="ph"
                  type="number"
                  step="0.01"
                  required
                  placeholder="pH value"
                  className="input input-bordered"
                  value={soilData.ph}
                  onChange={handleChange}
                />

                <input
                  name="tss"
                  type="number"
                  required
                  placeholder="TSS"
                  className="input input-bordered"
                  value={soilData.tss}
                  onChange={handleChange}
                />

                <input
                  name="organicCarbon"
                  type="number"
                  step="0.01"
                  required
                  placeholder="Organic Carbon"
                  className="input input-bordered"
                  value={soilData.organicCarbon}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  disabled
                  className="input input-bordered"
                  value={
                    selectedTest ? selectedTest.Plot.soilType : "Not selected"
                  }
                ></input>

                <input
                  name="potassium"
                  type="number"
                  required
                  placeholder="Potassium"
                  className="input input-bordered"
                  value={soilData.potassium}
                  onChange={handleChange}
                />

                <input
                  name="phosphorus"
                  type="number"
                  required
                  placeholder="Phosphorus"
                  className="input input-bordered"
                  value={soilData.phosphorus}
                  onChange={handleChange}
                />
              </div>

              <div className="flex justify-end">
                <button className="btn btn-primary" disabled={!selectedTest}>
                  Submit Soil Report
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT PANEL — CROPS */}

          <div className="lg:col-span-3 card border border-base-300">
            <div className="card-body p-4">
              <h2 className="font-semibold mb-2">Crops in Plot</h2>

              {crops.length === 0 ? (
                <p className="text-sm opacity-70">No crops available</p>
              ) : (
                <table className="table table-sm">
                  <tbody>
                    {crops.map((c) => (
                      <tr key={c.id}>
                        <td>{c.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-base-200 text-center py-3 text-sm opacity-70">
        Authorized Laboratory Access Only
      </footer>
    </div>
  );
}
