import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

// --- TAMBAHKAN BARIS INI (PENTING!) ---
import UnderConstruction from '../pages/UnderConstruction'; 
// ---------------------------------------

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      
      {/* Route untuk Volunteer */}
      <Route path="/volunteer/staffAhliCompas" element={<UnderConstruction />} />
      <Route path="/volunteer/acaraFakul" element={<UnderConstruction />} />
      <Route path="/volunteer/moderatorFakul" element={<UnderConstruction />} />
      <Route path="/volunteer/scAcaraAllkomp" element={<UnderConstruction />} />
      <Route path="/volunteer/stubanITERA" element={<UnderConstruction />} />
      <Route path="/volunteer/scAcaraCompare" element={<UnderConstruction />} />
      <Route path="/volunteer/mipaPreneur" element={<UnderConstruction />} />
      <Route path="/volunteer/stubanElektro" element={<UnderConstruction />} />
      <Route path="/volunteer/wakoorAcara" element={<UnderConstruction />} />
      <Route path="/volunteer/aflaiesec" element={<UnderConstruction />} />
      <Route path="/volunteer/sponsorDecode" element={<UnderConstruction />} />
      <Route path="/volunteer/mcDay2" element={<UnderConstruction />} />
      <Route path="/volunteer/mcDay1" element={<UnderConstruction />} />
      <Route path="/volunteer/kabasta" element={<UnderConstruction />} />
      <Route path="/volunteer/mipaExpo" element={<UnderConstruction />} />
      <Route path="/volunteer/acaraCompare" element={<UnderConstruction />} />
      <Route path="/volunteer/sponsorUIUX" element={<UnderConstruction />} />
      <Route path="/volunteer/staffCompas" element={<UnderConstruction />} />
      <Route path="/volunteer/teacher" element={<UnderConstruction />} />



      {/* Route untuk Project Experience */}
      <Route path="/project/dtastyum" element={<UnderConstruction />} />
      <Route path="/project/greenbucks" element={<UnderConstruction />} />
      <Route path="/project/sportware" element={<UnderConstruction />} />
      <Route path="/project/eatzy" element={<UnderConstruction />} />
      <Route path="/project/simkes" element={<UnderConstruction />} />
      <Route path="/project/agrocoop" element={<UnderConstruction />} />
      <Route path="/project/sentimentAnalysis" element={<UnderConstruction />} />
      <Route path="/project/userRetention" element={<UnderConstruction />} />
      <Route path="/project/marketBasket" element={<UnderConstruction />} />
      <Route path="/project/predictionModel" element={<UnderConstruction />} />
      <Route path="/project/clusteringModel" element={<UnderConstruction />} />
      <Route path="/project/tokoku" element={<UnderConstruction />} />
      

      {/* Tangkap semua link error */}
      <Route path="*" element={<UnderConstruction />} />
    </Routes>
  );
};

export default AppRouter;