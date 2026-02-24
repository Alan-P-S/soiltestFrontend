import { create } from "zustand";
import {axiosInstance} from "../lib/axios.js";

const useFarmerStore = create((set) => ({
  loading: false,
  error: null,

  registerFarmer: async (farmerData) => {
    try {
      set({ loading: true, error: null });

      const res = await axiosInstance.post("/auth/signup", farmerData);

      set({ loading: false });

      return res.data; // success response
    } catch (err) {
      set({
        loading: false,
        error:
          err.response?.data?.message ||
          "Failed to register farmer",
      });

      throw err;
    }
  },
}));

export default useFarmerStore;
