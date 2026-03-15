import { create } from "zustand";
import {axiosInstance} from "../lib/axios.js";

const useLabPortalStore = create((set) => ({
  tests: [],
  crops: [],
  loading: false,

  /* ---------------- FETCH PENDING TESTS ---------------- */

  fetchPendingTests: async () => {
    try {
      set({ loading: true });

      const res = await axiosInstance.get("/test/alltests");
      console.log(res);
      set({
        tests: res.data,
        loading: false,
      });
    } catch (err) {
      console.error(err);
      set({ loading: false });
    }
  },

  /* ---------------- FETCH CROPS BY PLOT ---------------- */

  fetchCropsByPlot: async (PlotId) => {
    
    try {
      const res = await axiosInstance.get(`/plot/plot-crop/${PlotId}`);
      console.log(res);
      set({
        crops: res.data,
      });

      return res.data;
    } catch (err) {
      console.log(err);
      console.error(err);
      set({ crops: [] });
      return [];
    }
  },

  /* ---------------- SUBMIT REPORT ---------------- */

  submitSoilReport: async (payload) => {
    console.log(payload);
    try {
      const res = await axiosInstance.post("/report/add", payload);
      return res.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  /* ---------------- UPDATE TEST STATUS ---------------- */

  updateTestStatus: async (testId) => {
    console.log("Updating status");
    try {
      await axiosInstance.patch(`/test/update-test-status/${testId}`,{});
    } catch (err) {
      console.log(err);
    }
  },
}));

export default useLabPortalStore;