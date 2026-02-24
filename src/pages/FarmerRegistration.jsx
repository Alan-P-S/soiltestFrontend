import { useState } from "react";
import toast from "react-hot-toast";
import useFarmerStore from "../store/useFarmerStore.js";

export default function RegisterFarmer() {
  const { registerFarmer, loading } = useFarmerStore();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    place: "",
    landArea: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerFarmer(formData);

      toast.success("Farmer registered successfully ✅");

      setFormData({
        username: "",
        email: "",
        phone: "",
        place: "",
        landArea: "",
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Registration failed ❌"
      );
    }
  };

  return (
    <div className="min-h-screen bg-base-100 flex flex-col">

      {/* Header */}
      <div className="navbar bg-base-200 px-6 shadow-sm">
        <span className="text-lg font-semibold">
          Register Farmer
        </span>
      </div>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-xl">

          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold">
              Farmer Registration Form
            </h1>
            <p className="text-base-content/70 mt-2">
              Enter farmer details for soil testing services
            </p>
          </div>

          <div className="card bg-base-100 border border-base-300 shadow-sm">
            <form
              onSubmit={handleSubmit}
              className="card-body space-y-5"
            >
              <input
                type="text"
                name="username"
                placeholder="Farmer Name"
                className="input input-bordered w-full"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="input input-bordered w-full"
                value={formData.email}
                onChange={handleChange}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="input input-bordered w-full"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="place"
                placeholder="Place / Village"
                className="input input-bordered w-full"
                value={formData.place}
                onChange={handleChange}
                required
              />
             
              <input
                type="number"
                name="landArea"
                placeholder="Land Area (acres)"
                className="input input-bordered w-full"
                value={formData.landArea}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className={`btn btn-primary w-full ${
                  loading ? "loading" : ""
                }`}
                disabled={loading}
              >
                Register Farmer
              </button>
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
