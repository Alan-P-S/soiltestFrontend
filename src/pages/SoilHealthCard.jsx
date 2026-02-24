export default function SoilHealthCard() {
  // Later this will come from backend
  const soilReport = {
    ph: 6.8,
    tss: 420,
    nitrogen: 78,
    phosphorus: 42,
    potassium: 65,
    status: "Good",
  };

  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md card bg-base-100 border border-base-300 shadow-sm">

        {/* Header */}
        <div className="card-body pb-4">
          <h2 className="card-title text-center justify-center">
            Soil Health Card
          </h2>
          <p className="text-center text-sm text-base-content/70">
            Your soil test result summary
          </p>
        </div>

        <div className="divider m-0"></div>

        {/* Soil Values */}
        <div className="card-body space-y-4">

          {/* pH */}
          <div className="flex justify-between">
            <span className="font-medium">pH Value</span>
            <span>{soilReport.ph}</span>
          </div>

          {/* TSS */}
          <div className="flex justify-between">
            <span className="font-medium">TSS</span>
            <span>{soilReport.tss} mg/kg</span>
          </div>

          <div className="divider"></div>

          {/* NPK */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-base-200 rounded-lg p-3">
              <p className="text-sm font-semibold">Nitrogen (N)</p>
              <p className="text-lg font-bold">
                {soilReport.nitrogen}
              </p>
            </div>

            <div className="bg-base-200 rounded-lg p-3">
              <p className="text-sm font-semibold">Phosphorus (P)</p>
              <p className="text-lg font-bold">
                {soilReport.phosphorus}
              </p>
            </div>

            <div className="bg-base-200 rounded-lg p-3">
              <p className="text-sm font-semibold">Potassium (K)</p>
              <p className="text-lg font-bold">
                {soilReport.potassium}
              </p>
            </div>
          </div>

          <div className="divider"></div>

          {/* Soil Status */}
          <div className="text-center">
            <p className="text-sm text-base-content/70">
              Soil Health Status
            </p>
            <span className="badge badge-outline badge-lg mt-2">
              {soilReport.status}
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
