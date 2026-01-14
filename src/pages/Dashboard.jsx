import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectExperience from '../components/ProjectExperience';

const skillData = [
    { name: 'HTML', image: '/images/html.png' },
    { name: 'CSS', image: '/images/css.png' },
    { name: 'JavaScript', image: '/images/js.png' },
    { name: 'PHP', image: '/images/php.png' },
    { name: 'Python', image: '/images/python.png' },
    { name: 'Tailwind', image: '/images/tailwindcss.png' },
    { name: 'Kotlin', image: '/images/kotlin.png' },
    { name: 'MySQL', image: '/images/mysql.png' },
    { name: 'MongoDB', image: '/images/mongodb.png' },
    { name: 'VsCode', image: '/images/vscode.webp' },
    { name: 'Canva', image: '/images/canva.png' },
    { name: 'React Js', image: '/images/react.png' },
    { name: 'Bootstrap', image: '/images/bootstrap.png' },
    { name: 'Flutter', image: '/images/flutter.jpeg' },
    { name: 'Android Studio', image: '/images/androidstudio.png' },
    { name: 'Figma', image: '/images/figma.png' },
    { name: 'Vue Js', image: '/images/vuejs.png' },
    { name: 'Laravel', image: '/images/laravel.png' },
    { name: 'Next Js', image: '/images/nextjs.png' },
    { name: 'Dart', image: '/images/dart.png' },
];

const educationData = [
    { 
        institution: 'Universitas Negeri Jakarta', 
        degree: "Bachelor's degree, Computer Science", 
        imageSrc: '/images/unj.jpeg' 
    },
    { 
        institution: 'SMK Mitra Industri MM2100', 
        degree: 'Vocational High School Student, Industrial Electrical Engineering', 
        imageSrc: '/images/mitraindustri.jpeg' 
    },
];

const EducationCard = ({ institution, degree, imageSrc }) => (
    <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8 mb-20 w-full">
        <div className="flex-shrink-0 w-full md:w-64 h-36 rounded-lg overflow-hidden shadow-2xl">
            <img 
                className="w-full h-full object-cover opacity-90" 
                src={imageSrc} 
                alt={institution} 
                onError={(e) => {e.target.onerror = null; e.target.src="https://via.placeholder.com/400x150/1F2937/FFFFFF?text=No+Image"}}
            />
        </div>
        <div className="flex-grow text-white text-center md:text-left">
            <h3 className="text-2xl font-bold mb-1">{institution}</h3>
            <p className="text-gray-400">{degree}</p>
        </div>
    </div>
);

const organizationData = [
    { 
        id: 1, 
        role: 'Expert Staff Departement Computer Academic & Science', 
        organization: 'BEMP Ilmu Komputer UNJ', 
        period: 'Oktober 2024 - Desember 2024',
        logo: '/images/bempilkom.png', 
        bgImage: '/images/bempilkom2025.jpeg' 
    },
    { 
        id: 7, 
        role: 'Event Division Staff PKKMB FMIPA UNJ 2025', 
        organization: 'PKKMB FMIPA UNJ 2025', 
        period: 'Oktober 2024 - Desember 2024', 
        logo: '/images/pkkmb-fmipa-logo.jpg', 
        bgImage: '/images/acarapkkmbfmipa.jpg' 
    },
    { 
        id: 8, 
        role: 'Moderator of PKKMB FMIPA 2025', 
        organization: 'PKKMB FMIPA UNJ 2025', 
        period: 'Oktober 2024 - Desember 2024', 
        logo: '/images/pkkmb-fmipa-logo.jpg', 
        bgImage: '/images/moderatorpkkmb.jpg' 
    },
    { 
        id: 7, 
        role: 'Steering Committee Event Division PKKMB Ilmu Komputer 2025', 
        organization: 'PKKMB FMIPA UNJ 2025', 
        period: 'Oktober 2024 - Desember 2024', 
        logo: '/images/unjlogo.png', 
        bgImage: '/images/scpkkmb.jpg' 
    },
    { 
        id: 12, 
        role: 'Benchmarking BEMP Ilmu Komputer UNJ x HIMA Informatika Itera', 
        organization: 'HIMA Informatika ITERA', 
        period: 'Oktober 2024 - Desember 2024', 
        logo: '/images/himainformatikaitera.png', 
        bgImage: '/images/stubanitera.JPG' 
    },
    { 
        id: 8, 
        role: 'Steering Committee Event Division Compare 2025', 
        organization: 'Workshop COMPARE 2025', 
        period: 'Oktober 2024 - Desember 2024', 
        logo: '/images/comparelogo.png', 
        bgImage: '/images/comparesc.png' 
    },
    { 
        id: 12, 
        role: 'MIPA Preneur 2025', 
        organization: 'BEM FMIPA UNJ', 
        period: 'Oktober 2024 - Desember 2024', 
        logo: '/images/bemffmipa.jpg', 
        bgImage: '/images/mipapreneur.jpg' 
    },
    { 
        id: 11, 
        role: 'Benchmarking BEMP Ilmu Komputer UNJ x BEM Teknik Elektro UNJ', 
        organization: 'BEM Teknik Elektro UNJ', 
        period: 'Oktober 2024 - Desember 2024', 
        logo: '/images/bempelektrounj.png', 
        bgImage: '/images/stubanelektro.jpg' 
    },
    { 
        id: 2, 
        role: 'Deputy Coordinator Event DIvision PKKMB Ilmu Komputer 2024', 
        organization: 'PKKMB Ilmu Komputer UNJ 2024', 
        period: 'Oktober 2024 - Desember 2024',
        logo: '/images/radiant.png',
        bgImage: '/images/wakoor.png'
    },
    { 
        id: 3, 
        role: 'Delegates of AIESEC Future Leaders 2024', 
        organization: 'AIESEC in UNJ', 
        period: 'Oktober 2024 - Desember 2024',
        logo: '/images/aiesec.jpg',
        bgImage: '/images/aflaiesec.jpg'
    },
    { 
        id: 9, 
        role: 'Sponsorship Division Staff Decode 2024', 
        organization: 'PKKMB FMIPA 2025', 
        period: 'Oktober 2024 - Desember 2024', 
        logo: '/images/unjlogo.png', 
        bgImage: '/images/decode.png' 
    },
    { 
        id: 5, 
        role: 'Master of Ceremonies PKKMB Ilmu Komputer 2024 Day 2', 
        organization: 'PKKMB Ilmu Komputer UNJ 2024', 
        period: 'Oktober 2024 - Desember 2024', 
        logo: '/images/unjlogo.png', 
        bgImage: '/images/mcpkkmb.jpg' 
    },
    { 
        id: 4, 
        role: 'Master of Ceremonies PKKMB Ilmu Komputer 2024 Day 1', 
        organization: 'PKKMB Ilmu Komputer UNJ 2024', 
        period: 'Oktober 2024 - Desember 2024', 
        logo: '/images/unjlogo.png', 
        bgImage: '/images/mcday1.jpg' 
    },
    { 
        id: 10, 
        role: 'Publication & Design Division Staff Kabasta x Kabar Ilkomp 2024', 
        organization: 'BEMP Ilmu Komputer', 
        period: 'Oktober 2024 - Desember 2024', 
        logo: '/images/logo-bempstat.png', 
        bgImage: '/images/kabasta.png' 
    },
    { 
        id: 10, 
        role: 'MIPA EXPO 2024', 
        organization: 'BEMP Ilmu Komputer', 
        period: 'Oktober 2024 - Desember 2024', 
        logo: '/images/bemffmipa.jpg', 
        bgImage: '/images/mipaexpo.jpg' 
    },
    { 
        id: 11, 
        role: 'Event Division Staff Compare 2024', 
        organization: 'PKKMB Ilmu Komputer 2025', 
        period: 'Oktober 2024 - Desember 2024', 
        logo: '/images/comparelogo.png', 
        bgImage: '/images/compare.png' 
    },
    { 
        id: 12, 
        role: 'Sponsorship Division Staff Decode', 
        organization: 'PKKMB FMIPA 2025', 
        period: 'Oktober 2024 - Desember 2024', 
        logo: '/images/uiuxlogo.png', 
        bgImage: '/images/uiux.png' 
    },
    { 
        id: 10, 
        role: 'Staff Departement Computer Academic & Science', 
        organization: 'BEMP Ilmu Komputer', 
        period: 'Oktober 2024 - Desember 2024', 
        logo: '/images/bempilkom.png', 
        bgImage: '/images/compasstaff.png' 
    },
    { 
        id: 10, 
        role: 'Vocational High School Teacher Volunteer', 
        organization: 'BEMP Ilmu Komputer', 
        period: 'Oktober 2024 - Desember 2024', 
        logo: '/images/logo-bempstat.png', 
        bgImage: '/images/teacher.jpeg' 
    },
    // { 
    //     id: 10, 
    //     role: 'Staff Departement Computer Academic & Science', 
    //     organization: 'BEMP Ilmu Komputer', 
    //     period: 'Oktober 2024 - Desember 2024', 
    //     logo: '/images/bempilkom.png', 
    //     bgImage: '/images/compasstaff.png' 
    // },

];

const workingExperienceData = [
    {
        id: 1,
        company: 'PT. Yuju Indonesia',
        role: 'Assembly Engineer & Quality Control',
        period: 'Juli 2020 - Januari 2021',
        description: 'Ditastylum is a food e-commerce platform developed as the final project (UAS) for the Web Programming course. This website offers a seamless shopping experience with features such as product categorization, favorites, cart management, order tracking, and direct communication between users and admins.',
        imageSrc: '/images/ptyuju.jpg', // Gambar besar horizontal
        logoSrc: '/images/logo_ptyuju.png' // Logo perusahaan
    }
    // Tambahkan pengalaman kerja lainnya di sini jika ada
];

// KOMPONEN ORGANIZACION CARD (SUDAH DIPERBAIKI TATA LETAK DAN PENGGUNAAN IMAGE LOKAL)
const OrganizationCard = ({ org }) => (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 transform hover:shadow-2xl transition duration-300">
        <div className="h-40 w-full relative">
            <img 
                className="w-full h-full object-cover opacity-80" 
                src={org.bgImage} 
                alt={org.organization} 
                onError={(e) => {e.target.onerror = null; e.target.src="https://via.placeholder.com/400x200/1F2937/FFFFFF?text=BG"}}
            />
        </div>

        <div className="p-4">
            {/* Judul Role (Di atas) */}
            <h3 className="text-lg font-bold text-gray-900 mb-4">{org.role}</h3> 

            {/* KONTENER FLEX: Logo (Kiri) | Teks 2 Tingkat (Kanan) */}
            <div className="flex items-start mb-4 space-x-3">
                
                {/* 1. Logo Organisasi (Kiri) */}
                <div className="flex-shrink-0">
                    <img 
                        src={org.logo} 
                        alt={`${org.organization} Logo`} 
                        className="w-10 h-10 object-contain"
                        onError={(e) => {e.target.style.display = 'none';}}
                    />
                </div>
                
                {/* 2. Detail Organisasi (Kanan) - Kontainer Teks Vertikal */}
                <div className="flex-grow">
                    {/* Tingkat 1: Nama Organisasi */}
                    <p className="text-sm font-semibold text-gray-700 leading-tight">
                        {org.organization}
                    </p>
                    {/* Tingkat 2: Periode */}
                    <p className="text-xs text-gray-500">
                        {org.period}
                    </p>
                </div>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">
                Ditastylum is a food e-commerce platform developed as the final project (UAS) for the Web Programming course. This website offers a seamless shopping experience...
            </p>

            <button className="w-full bg-indigo-600 text-white font-semibold py-2 rounded hover:bg-indigo-700 transition duration-300 text-sm">
                View Activities
            </button>
        </div>
    </div>
);



// --- Komponen Kartu Working Experience BARU ---
const WorkingExperienceCard = ({ exp }) => (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 w-full max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row">
            {/* Bagian Kiri (Gambar Kerja) */}
            <div className="w-full lg:w-1/2 flex-shrink-0">
                <img 
                    src={exp.imageSrc} 
                    alt={exp.company} 
                    className="w-full h-full object-cover"
                    onError={(e) => {e.target.onerror = null; e.target.src="https://via.placeholder.com/600x400/F3F4F6/6B7280?text=Workplace+Image"}}
                />
            </div>
            
            {/* Bagian Kanan (Detail Teks) */}
            <div className="w-full lg:w-1/2 p-6 flex flex-col justify-between">
                <div>
                    <div className="flex items-center space-x-3 mb-2">
                        <img 
                            src={exp.logoSrc} 
                            alt={`${exp.company} Logo`} 
                            className="w-8 h-8 object-contain"
                            onError={(e) => {e.target.style.display = 'none';}}
                        />
                        <h3 className="text-xl font-bold text-gray-900">{exp.company}</h3>
                    </div>
                    
                    <p className="text-lg font-semibold text-gray-700 mb-1">{exp.role}</p>
                    <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {exp.description}
                    </p>
                </div>

                <button className="mt-6 self-start bg-orange-500 text-white font-semibold py-2 px-6 rounded hover:bg-orange-600 transition duration-300 text-sm shadow-md">
                    View Working Experience
                </button>
            </div>
        </div>
    </div>
);
// ----------------------------------------




const Dashboard = () => {
    const [activeCategory, setActiveCategory] = useState('Active Development');

    // URL Sosial Media
    const socialLinks = [
        { 
            name: 'LinkedIn', 
            url: 'https://www.linkedin.com/in/agastya-dava-nurrahmann/', 
            image: '/images/linkedin3.png', 
            bgColor: 'bg-white', 
            altText: 'LinkedIn Logo' 
        },
        { 
            name: 'email', 
            url: 'mailto:dava@example.com', 
            image: '/images/gmail.webp', 
            bgColor: 'bg-white', 
            altText: 'Email Logo' 
        },
        { 
            name: 'Instagram', 
            url: 'https://www.instagram.com/dava.stwn/', 
            image: '/images/instagram.webp', 
            bgColor: 'bg-white', 
            altText: 'Instagram Logo' 
        },
        { 
            name: 'GitHub', 
            url: 'https://github.com/dava', 
            image: '/images/github.webp', 
            bgColor: 'bg-white', 
            altText: 'GitHub Logo' 
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
            <Navbar />

            <main className="mx-auto px-4 py-10 sm:px-6 lg:px-8">

                {/* ================= HEADER / HERO SECTION ================= */}
                <section
                    id="home"
                    className="flex flex-col items-center justify-between px-50 py-16 md:flex-row"
                >
                    {/* Left Content */}
                    <div className="md:w-3/5">
                        <h1 className="mb-4 text-5xl font-extrabold text-gray-900">
                            <span className="text-indigo-600">Hi There!</span>
                            <br />
                            I'm Dava,
                            <br />
                            <span className="text-indigo-600">
                                Computer Science Student
                            </span>
                        </h1>

                        <p className="mb-6 text-lg leading-relaxed text-gray-600">
                            A fifth-semester Computer Science student at Universitas Negeri
                            Jakarta with a strong interest in Data Analysis, Web Development,
                            Data Science, and Machine Learning. Dedicated to expanding
                            technical expertise and soft skills, and volunteer activities that
                            enhance leadership and collaboration skills.
                        </p>

                        {/* Social Links DENGAN GAMBAR LOKAL (Filter Invert Dihapus) */}
                        <div className="mt-6 flex space-x-4">
                            {socialLinks.map((link, index) => (
                                <a 
                                    key={index}
                                    href={link.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className={`flex h-15 w-15 cursor-pointer items-center justify-center rounded-full ${link.bgColor} text-xl text-white transition hover:opacity-80 p-2`} 
                                >
                                    <img 
                                        src={link.image} 
                                        alt={link.altText} 
                                        className="w-full h-full object-contain" // 'filter invert' dihapus di sini
                                        onError={(e) => {e.target.onerror = null; e.target.parentElement.innerHTML = link.name.substring(0, 2);}} 
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Avatar Section */}
                    <div className="relative mt-10 flex justify-center md:mt-0 md:w-2/5">
                        <div className="relative">
                            {/* Decorative Circles */}
                            <div className="absolute right-0 top-5 h-25 w-25 -translate-y-1/2 translate-x-1/2 rounded-full bg-indigo-200"></div>
                            <div className="absolute bottom-5 left-0 h-10 w-10 -translate-x-1/2 translate-y-1/2 rounded-full bg-indigo-200"></div>

                            <img
                                src="/images/me.jpeg"
                                alt="Profile Avatar"
                                className="relative z-10 h-85 w-85 rounded-full border-4 border-white object-cover shadow-2xl"
                            />
                        </div>
                    </div>
                </section>

                <hr className="my-10 border-gray-200" />



                {/* ================= SKILLS SECTION (UPDATED) ================= */}
                <section id="skills" className="py-10 px-40">
                    <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
                        Skills
                    </h2>

                    {/* Grid 10 Kolom (xl) dan ukuran ikon lebih kecil */}
                    <div className="grid grid-cols-3 justify-items-center gap-4 px-4 sm:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10">
                        {skillData.map((skill, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center p-2 transition-transform duration-300 hover:scale-105"
                            >
                                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-lg bg-white shadow-md p-3">
                                    <img 
                                        src={skill.image} 
                                        alt={skill.name}
                                        className="h-full w-full object-contain"
                                        onError={(e) => {e.target.style.display='none'; e.target.parentElement.style.backgroundColor='#e5e7eb'}} 
                                    />
                                </div>
                                
                                <span className="text-sm font-medium text-gray-700 text-center">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                <hr className="my-10 border-gray-200" />


                {/* ================= 6. WORKING EXPERIENCE (BARU) ================= */}
                <section id="working-experience" className="py-10">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Working Experience</h2>
                    
                    {workingExperienceData.map(exp => (
                        <WorkingExperienceCard key={exp.id} exp={exp} />
                    ))}
                </section>


                <hr className="my-10 border-gray-200" />



                {/* ================= PROJECT EXPERIENCE ================= */}
                <ProjectExperience />


                





            </main>




            {/* ================= 3. EDUCATION SECTION ================= */}
            <section id="education" className="px-60 py-10 relative overflow-hidden">
                {/* Background container hitam dengan lingkaran dekoratif, sesuai screenshot */}
                <div className="px-40 bg-black absolute inset-0 rounded-xl shadow-2xl">
                    {/* Lingkaran Dekoratif Kiri Atas */}
                    <div className="absolute w-16 h-16 bg-white/10 rounded-full top-30 left-30"></div>
                    {/* Lingkaran Dekoratif Kanan Bawah */}
                    <div className="absolute w-20 h-20 bg-white/10 rounded-full bottom-20 right-30"></div>
                    {/* Lingkaran Dekoratif Kanan Kecil */}
                    <div className="absolute w-8 h-8 bg-white/10 rounded-full bottom-40 right-55"></div>
                </div>

                <div className="relative z-10 p-12">
                    <h2 className="text-4xl font-bold text-white mb-18 text-center">Education</h2>
                    
                    <div className='flex flex-col items-center'>
                        {educationData.map((edu, index) => (
                            <EducationCard 
                                key={index}
                                institution={edu.institution} 
                                degree={edu.degree} 
                                imageSrc={edu.imageSrc}
                            />
                        ))}
                    </div>
                </div>
            </section>




            <hr className="my-10 border-gray-200" />

            {/* ================= 4. ORGANIZATION, COMMITTEE, & VOLUNTEER EXPERIENCE ================= */}
            <section id="organization" className="px-40 py-10">
                <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Organization, Committee, & Volunteer Experience</h2>
                
                {/* Grid 4 kolom di layar besar (lg) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {organizationData.map(org => (
                        <OrganizationCard key={org.id} org={org} />
                    ))}
                </div>
            </section>

            <hr className="my-10 border-gray-200" />

            
            
            <Footer />
        </div>
    );
};

export default Dashboard;