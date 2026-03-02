import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function AdvancedSoilReport() {
  const reportRef = useRef();
  const [report, setReport] = useState(null);

  /* ---------------- AUTO FETCH FROM BACKEND ---------------- */
  useEffect(() => {
    const fetchReport = async () => {
      const res = await axios.get("http://localhost:5000/api/test/result");
      setReport(res.data);
    };

    fetchReport();
  }, []);

  if (!report) return <div className="p-10">Loading...</div>;

  /* ---------------- PDF GENERATION ---------------- */
  const downloadPDF = async () => {
    const canvas = await html2canvas(reportRef.current, {
      backgroundColor: "#ffffff",
      ignoreElements: (element) => element.classList.contains("no-print"),
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const width = 210;
    const height = (canvas.height * width) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save("Soil_Test_Report.pdf");
  };

  /* ---------------- CLASSIFICATION LOGIC ---------------- */

  const classifyPH = (ph) => {
    if (ph < 5.5) return "Acidic";
    if (ph <= 7.5) return "Normal";
    return "Alkaline";
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 flex flex-col items-center">
      <button onClick={downloadPDF} className="btn btn-primary mb-4">
        Download PDF
      </button>
      <button
        className="btn btn-primary"
        onClick={() =>
          window.open(
            "http://localhost:5000/api/report/generate/1/pdf",
            "_blank",
          )
        }
      >
        Download Official PDF
      </button>

      <div
        ref={reportRef}
        className="bg-white w-[210mm] min-h-[297mm] p-8 text-black text-sm shadow-lg"
      >
        {/* ---------------- HEADER ---------------- */}
        <div className="text-center mb-6 border-b pb-4">
          <img
            src="/kerala-gov-logo.png"
            alt="Kerala Government"
            className="w-16 mx-auto mb-2"
          />
          <h2 className="font-bold text-lg">കേരള സർക്കാർ</h2>
          <h3 className="font-semibold">മണ്ണ് പരിശോധന റിപ്പോർട്ട്</h3>
        </div>

        {/* ---------------- FARMER INFO ---------------- */}
        <div className="grid grid-cols-2 gap-4 border p-3 mb-6">
          <div>
            <p>
              <strong>കർഷകന്റെ പേര്:</strong> {report.farmerName}
            </p>
            <p>
              <strong>ഗ്രാമം:</strong> {report.village}
            </p>
          </div>
          <div>
            <p>
              <strong>സാമ്പിൾ നമ്പർ:</strong> {report.sampleNo}
            </p>
            <p>
              <strong>തീയതി:</strong> {report.date}
            </p>
          </div>
        </div>

        {/* ---------------- FULL NUTRIENT GRID ---------------- */}
        <h4 className="font-semibold mb-2">പോഷക ഘടകങ്ങളുടെ വിവരങ്ങൾ</h4>

        <table className="w-full border border-collapse border-black text-xs mb-6">
          <thead>
            <tr>
              <th className="border p-2">pH</th>
              <th className="border p-2">OC %</th>
              <th className="border p-2">N (Kg/ha)</th>
              <th className="border p-2">P (Kg/ha)</th>
              <th className="border p-2">K (Kg/ha)</th>
              <th className="border p-2">TSS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">{report.ph}</td>
              <td className="border p-2">{report.organicCarbon}</td>
              <td className="border p-2">{report.nitrogen}</td>
              <td className="border p-2">{report.phosphorus}</td>
              <td className="border p-2">{report.potassium}</td>
              <td className="border p-2">{report.tss}</td>
            </tr>
          </tbody>
        </table>

        {/* ---------------- SOIL CLASSIFICATION TABLE ---------------- */}
        <h4 className="font-semibold mb-2">മണ്ണിന്റെ വർഗ്ഗീകരണം</h4>

        <table className="w-full border border-collapse border-black text-xs mb-6">
          <thead>
            <tr>
              <th className="border p-2">Parameter</th>
              <th className="border p-2">Value</th>
              <th className="border p-2">Classification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">pH</td>
              <td className="border p-2">{report.ph}</td>
              <td className="border p-2">{classifyPH(report.ph)}</td>
            </tr>
          </tbody>
        </table>

        {/* ---------------- RECOMMENDATION MATRIX ---------------- */}
        <h4 className="font-semibold mb-2">വളപ്രയോഗ ശുപാർശ</h4>

        <table className="w-full border border-collapse border-black text-xs">
          <thead>
            <tr>
              <th className="border p-2">വിള</th>
              <th className="border p-2">N</th>
              <th className="border p-2">P₂O₅</th>
              <th className="border p-2">K₂O</th>
            </tr>
          </thead>
          <tbody>
            {report.recommendations.map((crop, i) => (
              <tr key={i}>
                <td className="border p-2">{crop.name}</td>
                <td className="border p-2">{crop.N}</td>
                <td className="border p-2">{crop.P}</td>
                <td className="border p-2">{crop.K}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ---------------- FOOTER ---------------- */}
        <div className="mt-12 flex justify-between">
          <div>
            <p>കൃഷി ഓഫീസർ</p>
            <div className="border-t w-40 mt-6"></div>
          </div>
          <div>
            <p>അംഗീകൃത ലാബ്</p>
            <div className="border-t w-40 mt-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
