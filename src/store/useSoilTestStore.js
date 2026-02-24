import { create } from "zustand";
import {axiosInstance} from "../lib/axios.js";

const useSoilTestStore = create((set) => ({
  farmer: null,
  loading: false,
  error: null,

  // 🔍 Search farmer by phone (POST body)
  searchFarmerByPhone: async (phone) => {
    try {
      set({ loading: true, error: null });

      const res = await axiosInstance.post("/auth/user/search", { phone });

      // backend returns full user object
      set({
        farmer: res.data,
        loading: false,
      });

      return res.data;
    } catch (err) {
      set({
        farmer: null,
        loading: false,
        error: "Farmer not found",
      });
      throw err;
    }
  },

  // 🧪 Add soil test
  addSoilTest: async (testData) => {
    try {
      set({ loading: true, error: null });

      const res = await axiosInstance.post("/test/add", testData);

      set({ loading: false });
      return res.data;
    } catch (err) {
      set({
        loading: false,
        error: "Failed to add soil test",
      });
      throw err;
    }
  },

  clearFarmer: () => set({ farmer: null }),
}));

export default useSoilTestStore;
