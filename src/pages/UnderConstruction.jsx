import React from 'react';
import { Link } from 'react-router-dom';

const UnderConstruction = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-50 px-4">
      
      <div className="max-w-md w-full text-center p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
        
        {/* Ikon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
           <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
           </svg>
        </div>

        {/* Teks Maaf */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Halaman Sedang Dibuat
        </h2>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          Mohon maaf, halaman ini masih dalam tahap pengembangan oleh <strong>Agastya Dava</strong>. Silakan kembali lagi nanti yagch beb!
        </p>

        {/* Tombol Back To Dashboard */}
        <Link 
          to="/" 
          className="inline-flex w-full items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
        >
          Kembali ke Dashboard
        </Link>

      </div>
      
      {/* Footer */}
      <p className="absolute bottom-8 text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Agastya Dava Nurrahman
      </p>
    </div>
  );
};

export default UnderConstruction;