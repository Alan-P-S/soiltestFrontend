import React, { useState } from "react";
import useStore from "../store/cropStore.js";
import toast from "react-hot-toast";
import { Leaf, Sprout, FlaskConical, Atom } from "lucide-react";

const GeneralCropsAdd = () => {
  const { addCrop } = useStore();

  const [crop, setCrop] = useState({
    name: "",
    Nvalue: "",
    Pvalue: "",
    Kvalue: "",
  });

  function handlechange(e) {
    const { name, value } = e.target;
    setCrop({ ...crop, [name]: value });
  }

  async function onSubmit(e) {
    e.preventDefault();

    try {
      await addCrop(crop);
      toast.success("Crop Created Successfully 🌱");

      setCrop({
        name: "",
        Nvalue: "",
        Pvalue: "",
        Kvalue: "",
      });
    } catch (err) {
      toast.error("Failed to Create Crop");
    }
  }

  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl border border-base-300">
        {/* Header */}
        <div className="card-body space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <Leaf className="text-primary" size={28} />
            <h2 className="card-title text-xl">Add General Crop</h2>
          </div>

          <p className="text-sm text-base-content/70">
            Enter recommended nutrient values for the crop.
          </p>

          {/* Form */}
          <form onSubmit={onSubmit} className="space-y-4">
            {/* Crop Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center gap-2">
                  <Sprout size={16} /> Crop Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                value={crop.name}
                onChange={handlechange}
                className="input input-bordered w-full"
                placeholder="Enter crop name"
                required
              />
            </div>

            {/* Nitrogen */}
            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center gap-2">
                  <FlaskConical size={16} /> Nitrogen (N)
                </span>
              </label>
              <input
                type="number"
                name="Nvalue"
                value={crop.Nvalue}
                onChange={handlechange}
                className="input input-bordered w-full"
                placeholder="Enter Nitrogen value"
                required
              />
            </div>

            {/* Phosphorus */}
            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center gap-2">
                  <Atom size={16} /> Phosphorus (P)
                </span>
              </label>
              <input
                type="number"
                name="Pvalue"
                value={crop.Pvalue}
                onChange={handlechange}
                className="input input-bordered w-full"
                placeholder="Enter Phosphorus value"
                required
              />
            </div>

            {/* Potassium */}
            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center gap-2">
                  <Atom size={16} /> Potassium (K)
                </span>
              </label>
              <input
                type="number"
                name="Kvalue"
                value={crop.Kvalue}
                onChange={handlechange}
                className="input input-bordered w-full"
                placeholder="Enter Potassium value"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button type="submit" className="btn btn-primary w-full gap-2">
                <Leaf size={18} />
                Add Crop
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GeneralCropsAdd;
