import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FarmerLogin() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Later: API call
    console.log("Farmer Login:", loginData);

    // Temporary navigation after login
    navigate("/farmer/dashboard");
  };

  return (
    <div className="min-h-screen bg-base-100 flex flex-col">

      {/* Header */}
      <div className="navbar bg-base-200 px-6 shadow-sm">
        <span className="text-lg font-semibold">
          Farmer Login
        </span>
      </div>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md">

          {/* Title */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-base-content">
              Welcome Farmer
            </h1>
            <p className="text-base-content/70 mt-2">
              Login to view soil test status and reports
            </p>
          </div>

          {/* Login Card */}
          <div className="card bg-base-100 border border-base-300 shadow-sm">
            <form onSubmit={handleSubmit} className="card-body space-y-5">

              {/* Phone */}
              <div>
                <label className="label">
                  <span className="label-text">
                    Mobile Number
                  </span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={loginData.phone}
                  onChange={handleChange}
                  placeholder="Enter registered mobile number"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="label">
                  <span className="label-text">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                Login
              </button>

              {/* Register Link */}
              <div className="text-center text-sm text-base-content/70">
                New farmer?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/farmer/register")}
                  className="link link-primary"
                >
                  Register here
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
