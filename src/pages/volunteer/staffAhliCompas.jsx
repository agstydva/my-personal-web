import React from 'react';
import { Link } from 'react-router-dom';

const UnderConstruction = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center relative overflow-hidden">
      
      {/* Background Decoration (Blur Blobs) */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 bg-white/80 backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-2xl border border-white/20 max-w-2xl w-full mx-4 transform hover:scale-[1.02] transition-transform duration-300">
        
        {/* Icon Coding / Construction */}
        <div className="flex justify-center mb-6">
            <div className="bg-indigo-100 p-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-indigo-600 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Oops! Masih <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Coding...</span>
        </h1>

        {/* PESAN KHUSUS PERMINTAAN USER */}
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium mb-8">
          Halaman masih dalam pengembangan oleh <br className="hidden md:block"/>
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 text-2xl">
            Agastya Dava
          </span>
          <br />
          mahasiswa ganteng UNJ 😎✨
        </p>

        <div className="space-y-4">
            <p className="text-sm text-gray-500">
                Fitur ini akan segera hadir dengan tampilan yang luar biasa. <br/> 
                Tunggu tanggal mainnya ya!
            </p>

            {/* Tombol Kembali */}
            <Link 
                to="/" 
                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
            >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                Kembali ke Dashboard
            </Link>
        </div>
      </div>
      
      <div className="absolute bottom-5 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Agastya Dava Nurrahman
      </div>
    </div>
  );
};

export default UnderConstruction;