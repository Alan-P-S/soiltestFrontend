import { useState } from "react";

export default function BookSoilTest() {
  const [bookingData, setBookingData] = useState({
    crop: "",
    landArea: "",
    location: "",
    preferredDate: "",
    notes: "",
  });

  const handleChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Later: send to backend API
    console.log("Soil Test Booking:", bookingData);

    alert("Soil test booked successfully");
  };

  return (
    <div className="min-h-screen bg-base-100 flex flex-col">

      {/* Header */}
      <div className="navbar bg-base-200 px-6 shadow-sm">
        <span className="text-lg font-semibold">
          Book Soil Test
        </span>
      </div>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-xl">

          {/* Title */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-base-content">
              Soil Test Booking Form
            </h1>
            <p className="text-base-content/70 mt-2">
              Submit a request for soil sample collection
            </p>
          </div>

          {/* Form Card */}
          <div className="card bg-base-100 border border-base-300 shadow-sm">
            <form onSubmit={handleSubmit} className="card-body space-y-5">

              {/* Crop */}
              <div>
                <label className="label">
                  <span className="label-text">Crop</span>
                </label>
                <select
                  name="crop"
                  value={bookingData.crop}
                  onChange={handleChange}
                  className="select select-bordered w-full"
                  required
                >
                  <option value="">Select crop</option>
                  <option>Rice</option>
                  <option>Wheat</option>
                  <option>Maize</option>
                  <option>Cotton</option>
                  <option>Sugarcane</option>
                </select>
              </div>

              {/* Land Area */}
              <div>
                <label className="label">
                  <span className="label-text">
                    Land Area (in Acres)
                  </span>
                </label>
                <input
                  type="number"
                  name="landArea"
                  value={bookingData.landArea}
                  onChange={handleChange}
                  placeholder="e.g. 2.5"
                  step="0.01"
                  min="0"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Location */}
              <div>
                <label className="label">
                  <span className="label-text">
                    Location / Village
                  </span>
                </label>
                <input
                  type="text"
                  name="location"
                  value={bookingData.location}
                  onChange={handleChange}
                  placeholder="Enter village or area name"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Preferred Date */}
              <div>
                <label className="label">
                  <span className="label-text">
                    Preferred Collection Date
                  </span>
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={bookingData.preferredDate}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Notes */}
              <div>
                <label className="label">
                  <span className="label-text">
                    Additional Notes (optional)
                  </span>
                </label>
                <textarea
                  name="notes"
                  value={bookingData.notes}
                  onChange={handleChange}
                  placeholder="Any specific instructions for sample collection"
                  className="textarea textarea-bordered w-full"
                  rows={3}
                />
              </div>

              {/* Submit */}
              <div className="pt-4 flex justify-end">
                <button type="submit" className="btn btn-primary">
                  Book Soil Test
                </button>
              </div>

            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-base-200 text-base-content/60 text-center py-3 text-sm">
        Farmer Access • Mobile Soil Testing Service
      </footer>
    </div>
  );
}
