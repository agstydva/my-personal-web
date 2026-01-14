  // src/routes/appRouter.jsx

  // Ini adalah baris impor yang lengkap dari react-router-dom
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

  // Gunakan Path Alias yang sudah kita atur di vite.config.js
  import Dashboard from "@/pages/Dashboard.jsx"; 


  function AppRouter() {
    return (
      <Router>
        <Routes>
          {/* Sekarang Dashboard akan ditemukan menggunakan Path Alias */}
          <Route path="/" element={<Dashboard />} /> 
        </Routes>
      </Router>
    )
  }

  export default AppRouter; // Pastikan ini diekspor