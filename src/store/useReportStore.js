import { create } from "zustand";
import {axiosInstance} from "../lib/axios.js";

const useReportStore = create((set) => ({

  reports: [],
  loading: false,

  /* Fetch reports using phone */

  fetchReportsByPhone: async (phone) => {

    try {

      set({ loading: true });

      const res = await axiosInstance.post("/report/reports-by-phone", {
        phone,
      });

      set({
        reports: res.data,
        loading: false,
      });

    } catch (error) {

      console.error(error);

      set({
        loading: false,
        reports: [],
      });
    }
  },

  /* Download PDF */

  downloadReport: async (ReportId, PlotId) => {

    try {

     const res = await axiosInstance.post(
    "report/reports/pdf",
    { PlotId, ReportId },
    { responseType:"blob" }
  );

  const url = window.URL.createObjectURL(new Blob([res.data]));

  const link = document.createElement("a");
  link.href = url;
  link.download = "soil-report.pdf";

  document.body.appendChild(link);
  link.click();

    } catch (error) {
      console.error("Download failed", error);
    }
  },

}));

export default useReportStore;