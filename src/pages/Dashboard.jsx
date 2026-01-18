import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// IMPORT Komponen Lain
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectExperience from '../components/ProjectExperience';
import Organization from '../components/Organization';

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
    { name: 'Looker Studio', image: '/images/looker-studio-logo.png' },
    { name: 'Laravel', image: '/images/laravel.png' },
    { name: 'Next Js', image: '/images/nextjs.png' },
    { name: 'Dart', image: '/images/dart.png' },
    { name: 'Colab', image: '/images/google-colab-icon.webp' },
    { name: 'Power Bi', image: '/images/power-bi.png' },
    // { name: 'Pandas', image: '/images/pandas-icon-logo.png' },
    // { name: 'Office', image: '/images/office.png' },
    { name: 'Jetpack Compose', image: '/images/jetpack compose icon_RGB.png' },
    { name: 'Notion', image: '/images/notion.png' },
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
    <div className="group flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8 mb-12 w-full p-6 rounded-2xl transition-all duration-500 hover:bg-white/5 border border-transparent hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]">
        <div className="flex-shrink-0 w-full md:w-64 h-36 rounded-lg overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img 
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100" 
                src={imageSrc} 
                alt={institution} 
                onError={(e) => {e.target.onerror = null; e.target.src="https://via.placeholder.com/400x150/1F2937/FFFFFF?text=No+Image"}}
            />
        </div>
        <div className="flex-grow text-white text-center md:text-left pt-2">
            <h3 className="text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-indigo-400">
                {institution}
            </h3>
            <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                {degree}
            </p>
        </div>
    </div>
);

const workingExperienceData = [
    {
        id: 1,
        company: 'PT. Yuju Indonesia',
        role: 'Assembly Engineer & Quality Control',
        period: 'Juli 2020 - Januari 2021',
        description: 'Interned at PT Yuju Indonesia, a plastic injection molding company in Cikarang, within the Assembly and Quality Control Department during 10th-11th grade of Vocational High School. Gained hands on experience in production processes, quality assurance, and operational efficiency.',
        imageSrc: '/images/ptyuju.jpg', 
        logoSrc: '/images/logo_ptyuju.png',
        path: '/work/ptyuju' 
    }
];

const WorkingExperienceCard = ({ exp }) => (
    <div className="group bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 w-full max-w-5xl mx-auto transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-indigo-300">
        <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 flex-shrink-0 overflow-hidden relative">
                <img 
                    src={exp.imageSrc} 
                    alt={exp.company} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {e.target.onerror = null; e.target.src="https://via.placeholder.com/600x400/F3F4F6/6B7280?text=Workplace+Image"}}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <div className="w-full lg:w-1/2 p-6 flex flex-col justify-between relative">
                <div>
                    <div className="flex items-center space-x-3 mb-2">
                        <img 
                            src={exp.logoSrc} 
                            alt={`${exp.company} Logo`} 
                            className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110"
                            onError={(e) => {e.target.style.display = 'none';}}
                        />
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-700 transition-colors">
                            {exp.company}
                        </h3>
                    </div>
                    
                    <p className="text-lg font-semibold text-gray-700 mb-1">{exp.role}</p>
                    <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {exp.description}
                    </p>
                </div>

                <Link 
                    to={exp.path}
                    className="mt-6 self-start inline-flex items-center justify-center bg-black text-white font-semibold py-2.5 px-8 rounded shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-indigo-600 hover:-translate-y-1"
                >
                    View Working Experience
                </Link>
            </div>
        </div>
    </div>
);

const Dashboard = () => {
    const greetings = [
        "Hi There!", 
        "Halo!",          
        "こんにちは!",     
        "Bonjour!",
        "Привет",       
        "Hola!",          
        "Annyeong 안녕!",       
        "你好!",          
        "Guten Morgen!"   
    ];
    const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const socialLinks = [
        { 
            name: 'LinkedIn', 
            url: 'https://www.linkedin.com/in/agastya-dava-nurrahman?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BKtJa0Sj3R4ajMT9cXdkFBA%3D%3D', 
            image: '/images/linkedin3.png', 
            bgColor: 'bg-white', 
            altText: 'LinkedIn Logo' 
        },
        { 
            name: 'email', 
            url: 'mailto:agastyadava01@gmail.com', 
            image: '/images/gmail.webp', 
            bgColor: 'bg-white', 
            altText: 'Email Logo' 
        },
        { 
            name: 'Instagram', 
            url: 'https://www.instagram.com/agstydva/', 
            image: '/images/instagram.webp', 
            bgColor: 'bg-white', 
            altText: 'Instagram Logo' 
        },
        { 
            name: 'GitHub', 
            url: 'https://github.com/agstydva', 
            image: '/images/github.webp', 
            bgColor: 'bg-white', 
            altText: 'GitHub Logo' 
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
            <style>{`
                @keyframes popBlur {
                    0% { opacity: 0; transform: translateY(20px) scale(0.9); filter: blur(10px); }
                    50% { opacity: 1; filter: blur(0px); }
                    100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0px); }
                }
                .animate-pop-text { animation: popBlur 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }

                @keyframes breathe {
                    0%, 100% { transform: scale(1); opacity: 0.7; }
                    50% { transform: scale(1.1); opacity: 0.9; }
                }
                .animate-breathe { animation: breathe 6s ease-in-out infinite; }
                .animate-breathe-delayed { animation: breathe 6s ease-in-out 3s infinite; }

                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes spin-slower-reverse {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                }
                .animate-orbit-cw { animation: spin-slow 15s linear infinite; }
                .animate-orbit-ccw { animation: spin-slower-reverse 20s linear infinite; }

                /* ANIMASI MENGETIK BARU */
                /* Update bagian ini di dalam tag <style> Anda */

                @keyframes typing {
                0% { width: 0 }
                70% { width: 100% } /* Selesai mengetik di 70% durasi */
                100% { width: 100% } /* Diam (tetap full) dari 70% sampai 100% */
                }

                @keyframes blink-caret {
                from, to { border-color: transparent }
                50% { border-color: #4f46e5; }
                }

                .animate-typing {
                display: inline-block;
                overflow: hidden;
                white-space: nowrap;
                border-right: 3px solid #4f46e5;
                /* Durasi saya naikkan ke 4s agar jedanya terasa lebih pas */
                animation: 
                    typing 4s steps(25, end) infinite alternate,
                    blink-caret .75s step-end infinite;
                }
            `}</style>

            <Navbar />

            <main className="mx-auto px-4 py-15 sm:px-6 lg:px-8">

                {/* HERO SECTION */}
                <section id="home" className="flex flex-col items-center justify-between px-47 py-16 md:flex-row">
                    <div className="md:w-3/5">
                                    <h1 className="mb-4 font-extrabold text-gray-900 leading-tight"> {/* Hapus text-5xl di sini */}
                        <div className="h-15 flex items-center mb-2 overflow-visible"> 
                            <span 
                                key={currentGreetingIndex} 
                                className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 animate-pop-text block text-6xl pb-4"
                            >
                                {greetings[currentGreetingIndex]}
                            </span>
                        </div>
                        {/*  text-4xl */}
                        <span className="block text-gray-900 mt-4 text-5xl">I'm Dava,</span>
                        
                        {/* ANIMASI MENGETIK */}
                        <div className="inline-block">
                            {/* text-4xl */}
                            <span className="block text-indigo-600 mt-4 animate-typing text-4xl">
                                Computer Science Student 
                            </span>
                        </div>
                    </h1>
                        
                        <p className="mb-6 text-lg leading-relaxed text-gray-600 mt-6">
                            A Computer Science student at <b>Universitas Negeri Jakarta</b> with strong interests in Data Analysis, Web Development, and Project Management, driven by a high motivation for continuous learning and self improvement, and passionate about applying technical, analytical, and collaborative problem solving skills to deliver impactful real world solutions.
                        </p>
                        
                        {/* --- DOWNLOAD RESUME & PORTFOLIO BUTTONS --- */}
                        <div className="mt-10 flex flex-wrap gap-4">
                            <a 
                                href="/CV_For_Web_Agastya_Dava_Nurrahman.pdf" 
                                download="CV_For_Web_Agastya_Dava_Nurrahman.pdf"
                                className="flex items-center gap-2 bg-white text-gray-900 border border-gray-200 px-6 py-3 rounded-xl font-bold text-sm shadow-md hover:border-indigo-500 hover:text-indigo-600 hover:-translate-y-1 transition-all duration-300"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Download Resume
                            </a>

                            <a 
                                href="/Portfolio_Agastya_Dava.pdf" 
                                download="Portfolio_Agastya_Dava.pdf"
                                className="flex items-center gap-2 bg-white text-gray-900 border border-gray-200 px-6 py-3 rounded-xl font-bold text-sm shadow-md hover:border-indigo-500 hover:text-indigo-600 hover:-translate-y-1 transition-all duration-300"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                Download Portfolio
                            </a>
                        </div>

                        {/* SOCIAL MEDIA LINKS */}
                        <div className="mt-8 flex space-x-5">
                            {socialLinks.map((link, index) => (
                                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="group flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-110 hover:shadow-indigo-500/30 hover:border-indigo-100">
                                    <img src={link.image} alt={link.altText} className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* FOTO PROFIL SECTION */}
                    <div className="relative mt-10 flex justify-center md:mt-0 md:w-2/5">
                        <div className="relative group cursor-pointer z-10">
                            <div className="absolute right-0 top-5 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-indigo-200/80 animate-breathe transition-transform duration-500 group-hover:translate-x-3 group-hover:-translate-y-3"></div>
                            <div className="absolute bottom-5 left-0 h-24 w-24 -translate-x-1/2 translate-y-1/2 rounded-full bg-purple-200/80 animate-breathe-delayed transition-transform duration-500 group-hover:-translate-x-3 group-hover:translate-y-3"></div>
                            
                            <img 
                                src="/images/me.jpeg" 
                                alt="Profile" 
                                className="relative z-20 h-85 w-85 rounded-full border-4 border-white object-cover shadow-2xl transition-all duration-500 ease-out 
                                           group-hover:scale-105 group-hover:rotate-2 group-hover:shadow-[0_20px_50px_rgba(79,70,229,0.4)] group-hover:border-indigo-50" 
                            />
                        </div>

                        <div className="absolute inset-0 z-0 animate-orbit-cw flex items-center justify-center pointer-events-none">
                            <div className="h-4 w-4 bg-indigo-500 rounded-full blur-[1px] shadow-lg shadow-indigo-500/50 absolute -top-16"></div>
                        </div>
                        <div className="absolute inset-0 z-0 animate-orbit-ccw flex items-center justify-center pointer-events-none">
                             <div className="h-3 w-3 bg-purple-500 rounded-full blur-[1px] shadow-lg shadow-purple-500/50 absolute -bottom-12 right-12"></div>
                        </div>
                    </div>
                </section>

                <hr className="my-10 border-gray-200" />

                {/* SKILLS SECTION */}
                {/* SKILLS SECTION */}
                <section id="skills" className="py-10 px-4 md:px-10 lg:px-20 xl:px-40">
                    <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">Skills</h2>
                    
                    <div className="flex justify-center">
                        {/* Gunakan grid-cols yang dinamis:
                        - 2 ikon di HP (grid-cols-2)
                        - 4 ikon di Tablet (sm:grid-cols-4)
                        - 6 ikon di Laptop (lg:grid-cols-6)
                        - 10 ikon di Layar Besar (xl:grid-cols-10)
                        */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-10 gap-x-4 gap-y-8 justify-items-center w-full max-w-7xl">
                            {skillData.map((skill, index) => {
                                // Menghitung apakah item ini berada di baris terakhir
                                const totalItems = skillData.length;
                                const itemsPerRow = 10; // Untuk layar xl
                                const lastRowItems = totalItems % itemsPerRow;
                                const isLastRow = index >= totalItems - lastRowItems;

                                return (
                                    <div 
                                        key={index} 
                                        className="group flex flex-col items-center cursor-pointer transition-all duration-300"
                                        /* Style ini hanya aktif di layar XL untuk membuat baris terakhir (6 item) berada di tengah */
                                        style={isLastRow && window.innerWidth >= 1280 ? { 
                                            gridColumnStart: index === totalItems - lastRowItems ? (itemsPerRow - lastRowItems) / 2 + 1 : 'auto' 
                                        } : {}}
                                    >
                                        <div className="mb-3 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-white border border-transparent shadow-md transition-all duration-300 ease-out 
                                                        group-hover:-translate-y-2 group-hover:shadow-[0_8px_30px_rgb(79,70,229,0.2)] group-hover:border-indigo-200 group-hover:bg-indigo-50/30">
                                            <img 
                                                src={skill.image} 
                                                alt={skill.name} 
                                                className="h-8 w-8 sm:h-10 sm:w-10 object-contain transition-transform duration-300 group-hover:scale-110" 
                                                onError={(e) => {e.target.style.display='none'}} 
                                            />
                                        </div>
                                        <span className="text-xs sm:text-sm font-medium text-gray-600 transition-colors duration-300 group-hover:text-indigo-600 group-hover:font-semibold text-center px-1">
                                            {skill.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <hr className="my-10 border-gray-200" />

                {/* WORKING EXPERIENCE */}
                <section id="working-experience" className="py-10">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Working Experience</h2>
                    {workingExperienceData.map(exp => (
                        <WorkingExperienceCard key={exp.id} exp={exp} />
                    ))}
                </section>

                <hr className="my-10 border-gray-200" />

                {/* PROJECT EXPERIENCE */}
                <ProjectExperience />

            </main>

            {/* EDUCATION */}
            <section id="education" className="px-60 py-10 relative overflow-hidden">
                <div className="px-40 bg-black absolute inset-0 rounded-xl shadow-2xl">
                    <div className="absolute w-16 h-16 bg-white/10 rounded-full top-30 left-30"></div>
                    <div className="absolute w-20 h-20 bg-white/10 rounded-full bottom-20 right-30"></div>
                    <div className="absolute w-8 h-8 bg-white/10 rounded-full bottom-40 right-55"></div>
                </div>
                <div className="relative z-10 p-12">
                    <h2 className="text-4xl font-bold text-white mb-18 text-center">Education</h2>
                    <div className='flex flex-col items-center'>
                        {educationData.map((edu, index) => (
                            <EducationCard key={index} institution={edu.institution} degree={edu.degree} imageSrc={edu.imageSrc} />
                        ))}
                    </div>
                </div>
            </section>

            <hr className="my-10 border-gray-200" />

            {/* ORGANIZATION */}
            <Organization />

            <hr className="my-10 border-gray-200" />
            <Footer />
        </div>
    );
};

export default Dashboard;