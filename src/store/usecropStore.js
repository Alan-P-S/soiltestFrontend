import { create } from "zustand";
import {axiosInstance} from "../lib/axios.js";

export const useCropStore = create((set) => ({
  plots: [],
  crops: [],
  loading: false,
  error: null,

  // Fetch plots using farmer phone
  fetchPlotsByPhone: async (phone) => {
    try {
      set({ loading: true });

      const res = await axiosInstance.post("/plot/by-phone", {
        phone,
      });

      set({
        plots: res.data,
        loading: false,
      });

      return res.data;

    } catch (err) {
      set({
        loading: false,
        error: "Failed to load plots",
        plots: [],
      });

      return null;
    }
  },

  // Fetch all crops
  fetchCrops: async () => {
    try {
      const res = await axiosInstance.get("/crop/all-crops");

      set({
        crops: res.data,
      });
      return res.data;

    } catch (err) {
      set({ error: "Failed to load crops" });
    }
  },

  // Save crop to plot (junction table)
  addCropToPlot: async (plotId, cropId) => {
    try {
        console.log(plotId,cropId);
      const res = await axiosInstance.post("/plot/plot-crop", {
        PlotId:plotId,
        GeneralCropId:cropId
      });

      return res.data;

    } catch (err) {
      return null;
    }
  },
}));