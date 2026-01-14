import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar'; // Pastikan path ini sesuai dengan struktur folder Anda
import Footer from '../../components/Footer'; // Pastikan path ini sesuai dengan struktur folder Anda

const ProjectUnderDevelopment = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans text-gray-800">
      {/* Navbar tetap ditampilkan agar konsisten */}
      <Navbar />

      <main className="flex-grow flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center transform transition-all hover:scale-105 duration-300">
          
          {/* Ikon Ilustrasi (Construction Icon) */}
          <div className="flex justify-center mb-6">
            <div className="bg-indigo-100 p-4 rounded-full">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-12 w-12 text-indigo-600" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" 
                />
              </svg>
            </div>
          </div>

          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
            Coming Soon!
          </h2>
          
          <p className="text-gray-600 mb-8 text-lg">
            Detail project ini masih tahap pengembangan.
          </p>

          <button
            onClick={() => navigate(-1)} // Navigasi kembali ke halaman sebelumnya
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300 shadow-md"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali
          </button>
        </div>
      </main>

      {/* Footer tetap ditampilkan */}
      <Footer />
    </div>
  );
};

export default ProjectUnderDevelopment;