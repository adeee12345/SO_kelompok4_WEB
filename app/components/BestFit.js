"use client";
import React, { useState } from "react";

const BestFit = ({ holes }) => {
  const [bestFitHoles, setBestFitHoles] = useState([...holes]);
  const [processSize, setProcessSize] = useState("");
  const [result, setResult] = useState("");

  const handleBestFit = () => {
    const size = parseInt(processSize, 10);
    if (isNaN(size) || size <= 0) {
      alert("Masukkan ukuran proses yang valid!");
      return;
    }

    let bestIndex = -1;
    let minSize = Number.MAX_SAFE_INTEGER;

    // Cari hole terkecil yang cukup untuk proses
    bestFitHoles.forEach((hole, index) => {
      if (hole >= size && hole < minSize) {
        minSize = hole;
        bestIndex = index;
      }
    });

    if (bestIndex !== -1) {
      const updatedHoles = [...bestFitHoles];
      updatedHoles[bestIndex] -= size; // Kurangi ukuran hole
      setBestFitHoles(updatedHoles);
      setResult(`Best Fit memilih hole sebesar ${minSize} KB.`);
    } else {
      setResult("Tidak ada hole yang cukup besar untuk proses ini.");
    }
  };

  return (
    <div style={{ border: "1px solid black", padding: "20px", margin: "10px" }}>
      <p>Hole memori: {bestFitHoles.join(" KB, ")} KB</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <input
          type="number"
          placeholder="Ukuran proses (KB)"
          value={processSize}
          onChange={(e) => setProcessSize(e.target.value)}
          style={{
            color: "black",
            padding: "5px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            outline: "none",
            marginBottom: "20px",
            marginTop: "50px",
            width: "200px",
            textAlign: "center",
          }}
        />
        <button
          onClick={handleBestFit}
          style={{
            padding: "5px 10px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            width: "200px",
            marginBottom: "20px",
          }}
        >
          Jalankan Best Fit
        </button>
      </div>
      <p style={{ textAlign: "center" }}>{result}</p>
    </div>
  );
  
  
};

export default BestFit;
