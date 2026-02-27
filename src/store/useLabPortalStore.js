import { create } from "zustand";
import {axiosInstance} from "../lib/axios.js";

const useLabPortalStore = create((set) => ({
  farmers: [],
  loading: false,
  error: null,

  fetchPendingFarmers: async () => {
  try {
    set({ loading: true });

    const res = await axiosInstance.get("test/alltests");

    const mapped = res.data.data.map((test) => ({
      testId: test.id,          // unique test
      userId: test.User.id,     // farmer id
      name: test.User.username,
      village: test.User.place,
      phone: test.User.phone,
      status: test.status,
    }));

    set({ farmers: mapped, loading: false });
  } catch (err) {
    set({ loading: false });
  }
},

  submitSoilReport: async (payload) => {
    await axiosInstance.post("/testresult/add", payload);
  },
}));

export default useLabPortalStore;
