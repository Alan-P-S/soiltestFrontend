import { create } from "zustand";
import {axiosInstance} from "../lib/axios.js";

export const usePlotStore = create((set) => ({
  farmer: null,
  loading: false,
   plots: [],
  error: null,

  // 🔎 Search farmer by phone (phone sent in body)
  searchFarmerByPhone: async (phone) => {
    try {
      set({ loading: true, error: null });

      const res = await axiosInstance.post("auth/user/search", {
        phone: phone,
      });

      const farmer = res.data;

      set({
        farmer: farmer,
        loading: false,
      });

      return farmer; // return so component can show toast
    } catch (err) {
      set({
        farmer: null,
        loading: false,
        error: "Farmer not found",
      });

      return null;
    }
  },

  // 🌱 Save plot
  addPlot: async (plotData) => {
    try {
      set({ loading: true });

      const res = await axiosInstance.post("/plot/addplot", plotData);

      set({ loading: false });

      return res.data;
    } catch (err) {
      set({
        loading: false,
        error: "Plot creation failed",
      });

      return null;
    }
  },
   loadPlotsByPhone: async (phone) => {
    try {

      set({ loading: true });

      const res = await axiosInstance.post("/plot/by-phone", {
        phone: phone
      });

      set({
        plots: res.data,
        loading: false
      });

      return res.data;

    } catch (err) {

      set({
        plots: [],
        loading: false
      });

      return null;
    }
  }
}));