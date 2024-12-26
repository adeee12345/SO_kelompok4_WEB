"use client";
import React, { useState } from "react";

const WorstFit = ({ holes }) => {
  const [worstFitHoles, setWorstFitHoles] = useState([...holes]);
  const [processSize, setProcessSize] = useState("");
  const [result, setResult] = useState("");

  const handleWorstFit = () => {
    const size = parseInt(processSize, 10);
    if (isNaN(size) || size <= 0) {
      alert("Masukkan ukuran proses yang valid!");
      return;
    }

    let worstIndex = -1;
    let maxSize = Number.MIN_SAFE_INTEGER;

    // Cari hole terbesar yang cukup untuk proses
    worstFitHoles.forEach((hole, index) => {
      if (hole >= size && hole > maxSize) {
        maxSize = hole;
        worstIndex = index;
      }
    });

    if (worstIndex !== -1) {
      const updatedHoles = [...worstFitHoles];
      updatedHoles[worstIndex] -= size; // Kurangi ukuran hole
      setWorstFitHoles(updatedHoles);
      setResult(`Worst Fit memilih hole sebesar ${maxSize} KB.`);
    } else {
      setResult("Tidak ada hole yang cukup besar untuk proses ini.");
    }
  };

  return (
    <div style={{ border: "1px solid black", padding: "20px", margin: "10px" }}>
      <p>Hole memori: {worstFitHoles.join(" KB, ")} KB</p>
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
            width: "200px", // Menentukan lebar input
            textAlign: "center", // Menengahkan teks dalam input
          }}
        />
        <button
          onClick={handleWorstFit}
          style={{
            padding: "5px 10px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            width: "200px", // Menentukan lebar tombol
            marginBottom: "20px",
          }}
        >
          Jalankan Worst Fit
        </button>
      </div>
      <p style={{ textAlign: "center" }}>{result}</p>
    </div>
  );
  
};

export default WorstFit;
