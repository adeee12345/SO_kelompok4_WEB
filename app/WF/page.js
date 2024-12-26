"use client";

import React, { useState } from "react";
import WorstFit from "../components/WorstFit";
import Link from 'next/link';

const App = () => {
  const [holes, setHoles] = useState([]); // State untuk menyimpan nilai hole
  const [inputHole, setInputHole] = useState(""); // State untuk input hole
  const [isHoleInputComplete, setIsHoleInputComplete] = useState(false); // State untuk menyelesaikan input hole
  const [processSize, setProcessSize] = useState(""); // State untuk ukuran memori yang akan dimasukkan

  // Tambahkan hole ke array
  const handleAddHole = () => {
    const hole = parseInt(inputHole, 10);
    if (!isNaN(hole) && hole > 0) {
      setHoles([...holes, hole]);
      setInputHole("");
    } else {
      alert("YANG BENER DONG !!.");
    }
  };

  // Selesaikan input hole
  const handleFinishHoleInput = () => {
    if (holes.length === 7) {
      setIsHoleInputComplete(true);
    } else {
      alert("KURANGGGG!!!!.");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/bg-cina.jpeg')", // Ganti dengan path gambar Anda
      }}
    >

      <div className="bg-black bg-opacity-40 absolute inset-0"></div>

      <div className="absolute top-6 left-6">
        <img src="/images/unisba.png" alt="Logo" className="w-28 shadow-md"/>
      </div>
      
      <button
        className="absolute top-4 right-4 text-2xl text-white bg-transparent border-none cursor-pointer"
        style={{ fontSize: "30px" }}
      >
        <Link href="/">&times;</Link>
      </button>

      <div className="text-center p-8 z-10 relative">
      <h1 className="text-4xl font-bold mb-8 text-center">ALGORITMA WORST FIT</h1>
      </div>



      {!isHoleInputComplete ? (
        // Form untuk memasukkan 7 hole
        <div className="flex flex-col items-center gap-4 p-12 rounded-lg bg-white/10 shadow-lg backdrop-blur-md">
          <h2 className="text-2xl font-semibold mb-4">Masukkan 7 Hole Memori</h2>
          <p>Hole saat ini: {holes.join(", ") || "-"}</p>
          <input
            type="number"
            placeholder="Masukkan ukuran hole (KB)"
            value={inputHole}
            onChange={(e) => setInputHole(e.target.value)}
            className="p-2 rounded border border-gray-300 text-black"
          />
          <button
            onClick={handleAddHole}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Tambahkan Hole
          </button>
          <button
            onClick={handleFinishHoleInput}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Selesai Memasukkan Hole
          </button>
        </div>
      ) : (
        // Setelah hole dimasukkan, masukkan jumlah memori
        <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-white/20 shadow-lg backdrop-blur-md">
          <div className="flex gap-4">
            <WorstFit holes={holes} processSize={processSize} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
