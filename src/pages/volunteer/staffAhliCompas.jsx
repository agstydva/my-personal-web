import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const StaffAhliCompas = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.overflowX = 'hidden';
        return () => {
            document.body.style.overflowX = 'auto';
        };
    }, []);

    const orgData = {
        title: "BEMP Ilmu Komputer UNJ",
        logo: "/images/bempilkom.png", 
        period: "Maret 2025 - Present",
        activityTitle: "Expert Staff Departement Computer Academic & Science",
        description: "BEMP Ilmu Komputer UNJ (Badan Eksekutif Mahasiswa Program Studi Ilmu Komputer, Universitas Negeri Jakarta) is the official student executive organization that represents and coordinates student activities within the Computer Science program. It serves as a platform for developing leadership, organizational, and communication skills through academic, professional, and social initiatives, while also acting as a bridge between students, faculty, and the institution to support student development and a collaborative academic environment.",
        jobdesk: [
            "Guided and mentored junior staff in executing departmental programs, ensuring they understood their responsibilities and contributedeffectively to initiativessuch as GEMASTIK, COMPARE, and DECODE.",
            "Conducted research and created academic resources, including detailed timelines, competition information, and educational content, which supported student participation and engagement in academic development.",
            "Collaborated with peers and external partners to manage workshops and events, engaging 60+ participants and strengthening departmental outreach through partnerships with 12+ media organizations."
        ],
        gallery: [
            { src: "/images/bempilkom2025.jpeg", size: "large", caption: "BEMP Ilmu Komputer UNJ" },
            { src: "/images/bempilkomp2025_4.jpeg", size: "portrait", caption: "BEMP Ilmu Komputer UNJ" }, 
            { src: "/images/bempilkomp2025_2.jpeg", size: "standard", caption: "BEMP Ilmu Komputer UNJ" },
            { src: "/images/bempilkomp2025_3.jpeg", size: "standard", caption: "FIKSASI BEMP ILKOMP 2025" },
        ]
    };

    return (
        <div className="min-h-screen w-full bg-[#fcfcfc] flex flex-col overflow-x-hidden font-sans">
            <Navbar />

            <main className="flex-grow w-full max-w-7xl mx-auto px-6 pt-32 pb-20">
                
                {/* BACK NAVIGATION */}
                {/* <div className="mb-10">
                    <button 
                        onClick={() => navigate(-1)}
                        className="group bg-slate-900 text-white px-7 py-3.5 rounded-2xl font-bold 
                                   hover:bg-emerald-700 hover:-translate-y-1.5
                                   hover:shadow-[0_20px_50px_rgba(5,150,105,0.4)] 
                                   transition-all duration-300 active:scale-95 flex items-center gap-2 shadow-lg"
                    >
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Portfolio
                    </button>
                </div> */}

                {/* HEADER SECTION */}
                <header className="mb-14">
                    <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl p-4 flex items-center justify-center border border-slate-100 transition-transform hover:rotate-3">
                            <img src={orgData.logo} alt="Logo" className="w-full h-full object-contain" />
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className="text-xl md:text-l font-black text-slate-900 mb-2 tracking-tighter hover:text-emerald-700 transition-colors duration-500 uppercase">
                                {orgData.title}
                            </h1>
                            <p className="text-emerald-600 font-bold text-xl uppercase tracking-widest">{orgData.activityTitle}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 text-slate-500 font-bold justify-center md:justify-start">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                        <span>{orgData.period}</span>
                    </div>
                </header>

                {/* OVERVIEW SECTION */}
                <section className="mb-16">
                    <div className="max-w-4xl">
                        <h2 className="text-lg md:text-xl tracking-[0.2em] text-emerald-600 font-black mb-6 flex items-center gap-3">
                            <span className="w-2 h-8 bg-emerald-600 rounded-full"></span>
                            About BEMP Ilmu Komputer UNJ
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-lg text-justify border-l-4 border-emerald-500 pl-8 pr-8 py-8 bg-white rounded-r-[2.5rem] shadow-sm">
                            "{orgData.description}"
                        </p>
                    </div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* GALLERY */}
                    <div className="lg:col-span-7">
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">Organization Gallery</h2>
                            <span className="flex-grow h-[1px] bg-slate-200"></span>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 auto-rows-[200px]">
                            {orgData.gallery.map((img, index) => {
                                const gridClasses = 
                                    img.size === "large" ? "col-span-2 row-span-2" :
                                    img.size === "portrait" ? "col-span-1 row-span-2" :
                                    "col-span-1 row-span-1";

                                return (
                                    <div key={index} className={`${gridClasses} group relative rounded-[2.5rem] overflow-hidden shadow-lg border-4 border-white transition-all duration-700 hover:shadow-emerald-500/20 hover:-translate-y-2`}>
                                        <img 
                                            src={img.src} 
                                            alt="Gallery" 
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                            onError={(e) => {e.target.src="https://via.placeholder.com/800x600/ECFDF5/059669?text=Compas+Moment"}}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex items-end">
                                            <p className="text-white text-xs font-bold uppercase tracking-widest">{img.caption}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* RESPONSIBILITIES */}
                    <aside className="lg:col-span-5 lg:sticky lg:top-40 pt-12">
                        <section className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-emerald-500/20 hover:shadow-2xl border-t-4">

                            <h2 className="text-2xl font-bold mb-8 relative z-10 transition-colors group-hover:text-emerald-400">
                                Key Responsibilities
                            </h2>
                            
                            <ul className="space-y-6 relative z-10">
                                {orgData.jobdesk.map((task, index) => (
                                    <li key={index} className="flex items-start gap-4 group/item">
                                        <div className="mt-1.5 w-6 h-6 bg-emerald-600 rounded-full flex-shrink-0 flex items-center justify-center shadow-lg transition-all duration-300 group-hover/item:bg-white group-hover/item:scale-110 group-hover/item:shadow-emerald-500/50">
                                            <svg className="w-3.5 h-3.5 text-white transition-colors duration-300 group-hover/item:text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-slate-300 font-medium leading-relaxed group-hover/item:text-white transition-colors duration-300 text-justify">
                                            {task}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <div className="mt-8 p-6 bg-white rounded-[2rem] border-2 border-dashed border-emerald-100 text-center group hover:border-emerald-600 hover:bg-emerald-50/50 transition-all duration-500 shadow-sm cursor-default">
                            <p className="text-emerald-400 group-hover:text-emerald-600 font-black uppercase text-sm tracking-[0.3em] transition-all duration-500 group-hover:scale-105">
                                #BEMP_ILMU_KOMPUTER_2025
                            </p>
                        </div>
                    </aside>
                </div>
            </main>

            <Footer />

        </div>
    );
};

export default StaffAhliCompas;