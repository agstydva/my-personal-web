import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // 1. Wajib import ini
import './index.css'

// Pastikan import ini mengarah ke file routing kamu.
// Jika di dalam App.jsx isinya memanggil AppRouter, maka biarkan import App ini.
// TAPI jika kamu ingin langsung memanggil AppRouter, ganti baris ini.
// Asumsi: App.jsx kamu sudah memanggil AppRouter di dalamnya.
import App from './App.jsx' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. Bungkus App dengan BrowserRouter */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)