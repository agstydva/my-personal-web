import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import UnderConstruction from '../pages/UnderConstruction'; 

// Import halaman detail untuk Work Experience
import PtYujuDetail from '../pages/work/ptyuju';
import Bki from '../pages/work/bki';

// Import halaman detail untuk Volunteer Experience
import Aflaiesec from '../pages/volunteer/aflaiesec';
import StaffAhliCompas from '../pages/volunteer/staffAhliCompas';
import AcaraFakul from '../pages/volunteer/acaraFakul';
import ModeratorFakul from '../pages/volunteer/moderatorFakul';
import MipaExpo from '../pages/volunteer/mipaExpo';
import MipaPreneur from '../pages/volunteer/mipaPreneur';
import TeacherVolunteer from '../pages/volunteer/teacher';

// Import halaman detail untuk Project Experience
import CreditCardAnalysis from '../pages/project/creditCardAnalysis'; 
import MarketBasketAnalysis from '../pages/project/marketBasket';
import UserRetentionAnalysis from '../pages/project/userRetention';
import RetailSalesAnalysis from '../pages/project/retailSales';
import SupermarketSalesAnalysis from '../pages/project/supermarketSales';
import Dtastyum from '../pages/project/dtastyum';
import Eatzy from '../pages/project/eatzy';
import BreastCancerPrediction from '../pages/project/breastCancerPrediction';
import WorkWellDetail from '../pages/project/workwell';



const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      
      {/* Route untuk Work */}
      <Route path="/work/ptyuju" element={<PtYujuDetail />} />
      <Route path="/work/bki" element={<Bki />} />

      {/* Route untuk Volunteer */}
      <Route path="/volunteer/staffAhliCompas" element={<StaffAhliCompas />} />
      <Route path="/volunteer/acaraFakul" element={<AcaraFakul />} />
      <Route path="/volunteer/moderatorFakul" element={<ModeratorFakul />} />
      <Route path="/volunteer/scAcaraAllkomp" element={<UnderConstruction />} />
      <Route path="/volunteer/stubanITERA" element={<UnderConstruction />} />
      <Route path="/volunteer/scAcaraCompare" element={<UnderConstruction />} />
      <Route path="/volunteer/mipaPreneur" element={<MipaPreneur />} />
      <Route path="/volunteer/stubanElektro" element={<UnderConstruction />} />
      <Route path="/volunteer/wakoorAcara" element={<UnderConstruction />} />
      <Route path="/volunteer/aflaiesec" element={<Aflaiesec />} />
      <Route path="/volunteer/sponsorDecode" element={<UnderConstruction />} />
      <Route path="/volunteer/mcDay2" element={<UnderConstruction />} />
      <Route path="/volunteer/mcDay1" element={<UnderConstruction />} />
      <Route path="/volunteer/kabasta" element={<UnderConstruction />} />
      <Route path="/volunteer/mipaExpo" element={<MipaExpo />} />
      <Route path="/volunteer/acaraCompare" element={<UnderConstruction />} />
      <Route path="/volunteer/sponsorUIUX" element={<UnderConstruction />} />
      <Route path="/volunteer/staffCompas" element={<UnderConstruction />} />
      <Route path="/volunteer/teacher" element={<TeacherVolunteer />} />


      {/* Route untuk Project Experience */}
      <Route path="/project/creditCardAnalysis" element={<CreditCardAnalysis />} />
      <Route path="/project/retailSales" element={<RetailSalesAnalysis />} />
      <Route path="/project/marketBasket" element={<MarketBasketAnalysis />} />
      <Route path="/project/supermarketSales" element={<SupermarketSalesAnalysis />} />
      <Route path="/project/userRetention" element={<UserRetentionAnalysis />} />

      <Route path="/project/dtastyum" element={<Dtastyum />} />
      <Route path="/project/greenbucks" element={<UnderConstruction />} />
      <Route path="/project/sportware" element={<UnderConstruction />} />
      <Route path="/project/eatzy" element={<Eatzy />} />
      <Route path="/project/simkes" element={<UnderConstruction />} />
      <Route path="/project/agrocoop" element={<UnderConstruction />} />
      <Route path="/project/sentimentAnalysis" element={<UnderConstruction />} />
      <Route path="/project/predictionModel" element={<UnderConstruction />} />
      <Route path="/project/clusteringModel" element={<UnderConstruction />} />
      <Route path="/project/tokoku" element={<UnderConstruction />} />
      <Route path="/project/breastCancerPrediction" element={<BreastCancerPrediction />} />
      <Route path="/project/workwell" element={<WorkWellDetail />} />
      

      <Route path="/under-construction" element={<UnderConstruction />} />
      {/* Tangkap semua link error */}
      <Route path="*" element={<UnderConstruction />} />
    </Routes>
  );
};

export default AppRouter;