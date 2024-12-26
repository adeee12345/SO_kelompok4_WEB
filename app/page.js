"use client";

import React from 'react';
import Link from 'next/link';

const HomePage = () => {
    const handleScroll = () => {
        const nextSection = document.getElementById('next-section');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };



    return (
        <>
            <section className="min-h-screen bg-gray-100 flex flex-col">
                <div className="flex-1 flex items-center justify-center text-white bg-cover bg-center relative"
                    style={{ backgroundImage: "url('/images/bg-cina.jpeg')" }}>
                    <div className="bg-black bg-opacity-40 absolute inset-0"></div>
                    <div className="text-center p-8 z-10 relative">
                        <h2 className="text-4xl font-bold mb-4">SELAMAT DATANG DI WEB KELOMPOK 4</h2>
                        <p className="text-lg mb-6">scroll kebawah untuk lebih lanjut</p>
                    </div>

                    <div className="absolute top-44 center">
                        <img src="/images/unisba.png" alt="Logo" className="w-28 shadow-md"/>
                    </div>

                    {/* Tombol Panah untuk Scroll */}
                    <div className="absolute bottom-6 w-full text-center z-10">
                        <button
                            onClick={handleScroll}
                            className="bg-white text-blue-600 p-3 rounded-full shadow-md hover:bg-gray-200"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-6 h-6 mx-auto"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            <div id="next-section" className="h-screen bg-white w-full">
 
<section className="bg-gradient-to-t from-red-300 to-red-950 py-16">
  <div className="container mx-auto px-6 md:px-12">
    <div className="text-center mb-12">
      <h1 className="text-4xl font-extrabold text-white mb-4">
        Pengertian Algoritma Best Fit dan Worst Fit
      </h1>
      <p className="text-white">
        Pelajari dua algoritma populer dalam pengelolaan alokasi memori dengan metode bestfit dan worstfit.
      </p>
    </div>

    

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Berita 1 */}
      <div className="relative bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2">
        <h2 className="text-black text-2xl font-bold text-center mt-12 mb-4">Pengertian Best Fit</h2>
        <p className="text-gray-700 text-justify mb-12">
          Best Fit adalah algoritma alokasi memori yang memilih hole terkecil 
          untuk memenuhi permintaan memori suatu proses. 
          Tujuannya adalah meminimalkan pemborosan memori yang tidak terpakai. 
          Namun, algoritma ini dapat menyebabkan fragmentasi eksternal.
        </p>
        <div className="flex justify-center">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            <Link href="/BF">Implementasi Best Fit</Link>
          </button>
        </div>
      </div>

      {/* Berita 2 */}
      <div className="relative bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2">  
        <h2 className="text-black text-2xl font-bold text-center mt-12 mb-4">Pengertian Worst Fit</h2>
        <p className="text-gray-700 text-justify mb-12">
          Worst Fit adalah algoritma alokasi memori yang memilih hole terbesar 
          untuk memenuhi permintaan memori suatu proses. Hal ini bertujuan untuk 
          mengurangi fragmentasi eksternal, meskipun dapat menyebabkan pemborosan 
          memori yang lebih besar.
        </p>
        <div className="flex justify-center">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-indigo-600 transition-colors">
            <Link href="/WF">Implementasi Worst Fit</Link>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>



<footer className="bg-gradient-to-t from-red-600 to-red-300 py-16">
  <div className="container mx-auto text-center">
    <div className="flex justify-center space-x-8">
      {/* Gambar Profil 1 */}
      <div className="relative w-24 h-24 bg-white rounded-full overflow-hidden shadow-xl transform hover:scale-110 transition-all duration-300">
        <img src="/images/acel2.jpg" alt="Profile 1" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-25 transition-opacity duration-300"></div>
      </div>

      {/* Gambar Profil 2 */}
      <div className="relative w-24 h-24 bg-white rounded-full overflow-hidden shadow-xl transform hover:scale-110 transition-all duration-300">
        <img src="/images/liya.jpg" alt="Profile 2" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-25 transition-opacity duration-300"></div>
      </div>

      {/* Gambar Profil 3 */}
      <div className="relative w-24 h-24 bg-white rounded-full overflow-hidden shadow-xl transform hover:scale-110 transition-all duration-300">
        <img src="/images/rafa.jpg" alt="Profile 3" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-25 transition-opacity duration-300"></div>
      </div>

      {/* Gambar Profil 4 */}
      <div className="relative w-24 h-24 bg-white rounded-full overflow-hidden shadow-xl transform hover:scale-110 transition-all duration-300">
        <img src="/images/ardi.jpg" alt="Profile 4" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-25 transition-opacity duration-300"></div>
      </div>

      {/* Gambar Profil 5 */}
      <div className="relative w-24 h-24 bg-white rounded-full overflow-hidden shadow-xl transform hover:scale-110 transition-all duration-300">
        <img src="/images/ade.jpg" alt="Profile 5" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-25 transition-opacity duration-300"></div>
      </div>
    </div>
  </div>
</footer>


 
 </div>
 </>
)};

export default HomePage;