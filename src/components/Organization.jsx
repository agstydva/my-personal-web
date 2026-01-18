import React from 'react';
import { Link } from 'react-router-dom';

const organizationData = [
    { 
        id: 1, 
        role: 'Expert Staff Departement Computer Academic & Science', 
        organization: 'BEMP Ilmu Komputer UNJ', 
        period: 'Maret 2025 - Maret 2026',
        logo: '/images/bempilkom.png', 
        bgImage: '/images/bempilkom2025.jpeg',
        path: '/volunteer/staffAhliCompas' 
    },
    { 
        id: 2, 
        role: 'Event Division Staff PKKMB FMIPA UNJ 2025', 
        organization: 'PKKMB FMIPA UNJ 2025', 
        period: 'Juni 2025 - September 2025', 
        logo: '/images/pkkmb-fmipa-logo.jpg', 
        bgImage: '/images/acarapkkmbfmipa.jpg',
        path: '/volunteer/acaraFakul'
    },
    { 
        id: 3, 
        role: 'Moderator of PKKMB FMIPA 2025', 
        organization: 'PKKMB FMIPA UNJ 2025', 
        period: 'Agustus 2025', 
        logo: '/images/pkkmb-fmipa-logo.jpg', 
        bgImage: '/images/moderatorpkkmb.jpg',
        path: '/volunteer/moderatorFakul'
    },
    { 
        id: 4, 
        role: 'Steering Committee Event Division PKKMB Ilmu Komputer 2025', 
        organization: 'PKKMB Ilmu Komputer UNJ 2025', 
        period: 'Juni 2025 - September 2025', 
        logo: '/images/unjlogo.png', 
        bgImage: '/images/scpkkmb.jpg',
        path: '/volunteer/scAcaraAllkomp'
    },
    { 
        id: 5, 
        role: 'Benchmarking BEMP Ilmu Komputer UNJ x HIMA Informatika Itera', 
        organization: 'HIMA Informatika ITERA', 
        period: 'Oktober 2025', 
        logo: '/images/himainformatikaitera.png', 
        bgImage: '/images/stubanitera.JPG',
        path: '/volunteer/stubanITERA'
    },
    { 
        id: 6, 
        role: 'Steering Committee Event Division Compare 2025', 
        organization: 'Workshop COMPARE 2025', 
        period: 'Mei 2025 - Juni 2025', 
        logo: '/images/comparelogo.png', 
        bgImage: '/images/comparesc.png',
        path: '/volunteer/scAcaraCompare'
    },
    { 
        id: 7, 
        role: 'MIPA Preneur 2025', 
        organization: 'BEM FMIPA UNJ', 
        period: 'September 2025', 
        logo: '/images/bemffmipa.jpg', 
        bgImage: '/images/mipapreneur.jpg',
        path: '/volunteer/mipaPreneur'
    },
    { 
        id: 8, 
        role: 'Benchmarking BEMP Ilmu Komputer UNJ x BEM Teknik Elektro UNJ', 
        organization: 'BEM Teknik Elektro UNJ', 
        period: 'Juli 2025', 
        logo: '/images/bempelektrounj.png', 
        bgImage: '/images/stubanelektro.jpg',
        path: '/volunteer/stubanElektro'
    },
    { 
        id: 9, 
        role: 'Vice Coordinator Event DIvision PKKMB Ilmu Komputer 2024', 
        organization: 'PKKMB Ilmu Komputer UNJ 2024', 
        period: 'Juni 2024 - September 2024',
        logo: '/images/radiant.png',
        bgImage: '/images/wakoor.png',
        path: '/volunteer/wakoorAcara'
    },
    { 
        id: 10, 
        role: 'Delegates of AIESEC Future Leaders 2024', 
        organization: 'AIESEC in UNJ', 
        period: 'April 2024 - Agustus 2024',
        logo: '/images/aiesec.jpg',
        bgImage: '/images/aflaiesec.jpg',
        path: '/volunteer/aflaiesec'
    },
    { 
        id: 11, 
        role: 'Sponsorship Division Staff Decode 2024', 
        organization: 'Universitas Negeri Jakarta', 
        period: 'Agustus 2024 - September 2024', 
        logo: '/images/unjlogo.png', 
        bgImage: '/images/decode.png',
        path: '/volunteer/sponsorDecode'
    },
    { 
        id: 12, 
        role: 'Master of Ceremonies PKKMB Ilmu Komputer 2024 Day 2', 
        organization: 'PKKMB Ilmu Komputer UNJ 2024', 
        period: 'Agustus 2024', 
        logo: '/images/unjlogo.png', 
        bgImage: '/images/mcpkkmb.jpg',
        path: '/volunteer/mcDay2'
    },
    { 
        id: 13, 
        role: 'Master of Ceremonies PKKMB Ilmu Komputer 2024 Day 1', 
        organization: 'PKKMB Ilmu Komputer UNJ 2024', 
        period: 'Agustus 2024', 
        logo: '/images/unjlogo.png', 
        bgImage: '/images/mcday1.jpg',
        path: '/volunteer/mcDay1'
    },
    { 
        id: 14, 
        role: 'Publication & Design Division Staff Kabasta x Kabar Ilkomp 2024', 
        organization: 'BEMP Statistika UNJ', 
        period: 'September 2024 - Oktober 2024', 
        logo: '/images/logo-bempstat.png', 
        bgImage: '/images/kabasta.png',
        path: '/volunteer/kabasta'
    },
    { 
        id: 15, 
        role: 'MIPA EXPO 2024', 
        organization: 'BEMP FMIPA UNJ', 
        period: 'Juli 2024', 
        logo: '/images/bemffmipa.jpg', 
        bgImage: '/images/mipaexpo.jpg',
        path: '/volunteer/mipaExpo'
    },
    { 
        id: 16, 
        role: 'Event Division Staff Compare 2024', 
        organization: 'PKKMB Ilmu Komputer 2025', 
        period: 'Mei 2024 - Juni 2024', 
        logo: '/images/comparelogo.png', 
        bgImage: '/images/compare.png',
        path: '/volunteer/acaraCompare'
    },
    { 
        id: 17, 
        role: 'Sponsorship Division Staff Decode (UI/UX)', 
        organization: 'PKKMB FMIPA 2025', 
        period: 'Juni 2024 - Juli 2024', 
        logo: '/images/uiuxlogo.png', 
        bgImage: '/images/uiux.png',
        path: '/volunteer/sponsorUIUX'
    },
    { 
        id: 18, 
        role: 'Staff Departement Computer Academic & Science', 
        organization: 'BEMP Ilmu Komputer', 
        period: 'Maret 2024 - Maret 2025', 
        logo: '/images/bempilkom.png', 
        bgImage: '/images/compasstaff.png',
        path: '/volunteer/staffCompas'
    },
    { 
        id: 19, 
        role: 'Vocational High School Teacher', 
        organization: 'SMKN 44 JAKARTA', 
        period: 'Oktober 2024', 
        logo: '/images/smk44jakarta.png', 
        bgImage: '/images/teacher.jpeg',
        path: '/volunteer/teacher'
    },
];

const OrganizationCard = ({ org }) => (
    <div className="group bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-gray-300 flex flex-col h-full">
        
        {/* IMAGE CONTAINER */}
        <div className="h-40 w-full relative overflow-hidden">
            {/* GAMBAR BACKGROUND */}
            <img 
                className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-100" 
                src={org.bgImage} 
                alt={org.organization} 
                onError={(e) => {e.target.onerror = null; e.target.src="https://via.placeholder.com/400x200/1F2937/FFFFFF?text=BG"}}
            />
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2 min-h-[3.5rem] group-hover:text-black transition-colors">
                {org.role}
            </h3> 

            <div className="flex items-start mb-4 space-x-3">
                <div className="flex-shrink-0">
                    <img 
                        src={org.logo} 
                        alt={`${org.organization} Logo`} 
                        className="w-10 h-10 object-contain"
                        onError={(e) => {e.target.style.display = 'none';}}
                    />
                </div>
                
                <div className="flex-grow">
                    <p className="text-sm font-semibold text-gray-700 leading-tight">
                        {org.organization}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                        {org.period}
                    </p>
                </div>
            </div>
            
            <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                Click the button below to see the full details of my contribution and activities in this role.
            </p>

            {/* --- TOMBOL DENGAN HOVER KEREN --- */}
            {/* Base: Hitam. Hover: Abu-abu gelap, Scale up, Shadow menonjol */}
            <Link 
                to={org.path} 
                className="w-full mt-auto bg-black text-white font-semibold py-2 rounded shadow-md transition-all duration-300 hover:bg-gray-800 hover:shadow-xl hover:scale-105 hover:-translate-y-0.5 text-sm block text-center"
            >
                View Activities
            </Link>
        </div>
    </div>
);

const Organization = () => {
  return (
    <section id="organization" className="px-6 sm:px-12 lg:px-24 xl:px-40 py-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Organization, Committee, & Volunteer Experience
        </h2>
        
        {/* PERBAIKAN GRID:
            - grid-cols-1: 1 kolom di HP.
            - sm:grid-cols-2: 2 kolom di Tablet/iPad agar tidak terlalu sempit.
            - lg:grid-cols-3: 3 kolom di Laptop.
            - xl:grid-cols-4: 4 kolom di layar besar (sesuai kode awal Anda).
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {organizationData.map(org => (
                <OrganizationCard key={org.id} org={org} />
            ))}
        </div>
    </section>
  );
};

export default Organization;