import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Aflaiesec = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.overflowX = 'hidden';
        return () => {
            document.body.style.overflowX = 'auto';
        };
    }, []);

    const orgData = {
        title: "AIESEC in Universitas Negeri Jakarta",
        logo: "/images/logo-aiesec.png",
        period: "2024 - Present",
        activityTitle: "International Youth Exchange & Leadership Development",
        description: "AIESEC merupakan organisasi pemuda internasional yang berfokus pada pengembangan potensi kepemimpinan pemuda melalui pengalaman praktis di lingkungan yang menantang. Di UNJ, saya berkontribusi dalam memfasilitasi program pertukaran pelajar dan inisiatif sosial yang berdampak luas.",
        jobdesk: [
            "Mengelola koordinasi antar departemen untuk memastikan kelancaran program pertukaran.",
            "Membangun kemitraan strategis dengan organisasi eksternal dan stakeholder.",
            "Menyusun strategi pemasaran untuk meningkatkan brand awareness program di lingkungan kampus.",
            "Memimpin sesi evaluasi rutin untuk meningkatkan kualitas output setiap project."
        ],
        gallery: [
            { src: "/images/aiesec-1.jpg", size: "large", caption: "Global Leadership Summit" },
            { src: "/images/aiesec-2.jpg", size: "standard", caption: "Strategy Planning" },
            { src: "/images/aiesec-3.jpg", size: "standard", caption: "Cross-Cultural Session" },
            { src: "/images/aiesec-4.jpg", size: "wide", caption: "National Conference" },
        ]
    };

    return (
        <div className="min-h-screen w-full bg-[#f8fafc] flex flex-col overflow-x-hidden font-sans">
            <Navbar />

            <main className="flex-grow w-full max-w-7xl mx-auto px-6 pt-32 pb-20">
                
                {/* BACK NAVIGATION
                <div className="mb-10">
                    <button 
                        onClick={() => navigate(-1)}
                        className="group bg-slate-900 text-white px-7 py-3.5 rounded-2xl font-bold 
                                   hover:bg-blue-600 hover:-translate-y-1.5
                                   hover:shadow-[0_20px_50px_rgba(37,99,235,0.5)] 
                                   transition-all duration-300 active:scale-95 flex items-center gap-2 shadow-lg"
                    >
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Dashboard
                    </button>
                </div> */}

                {/* HEADER SECTION */}
                <header className="mb-12">
                    <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl p-3 flex items-center justify-center border border-slate-100 transition-transform hover:rotate-3">
                            <img 
                                src={orgData.logo} 
                                alt="Organization Logo" 
                                className="w-full h-full object-contain"
                                onError={(e) => {e.target.src="/images/aiesec.jpg"}}
                            />
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-2 tracking-tighter hover:text-blue-600 transition-colors duration-500">
                                {orgData.title}
                            </h1>
                            <p className="text-blue-600 font-bold text-xl uppercase tracking-widest">{orgData.activityTitle}</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-y-2 gap-x-8 text-slate-500 font-semibold justify-center md:justify-start">
                        <div className="flex items-center gap-2 group cursor-default">
                            <svg className="w-5 h-5 text-blue-500 transition-transform group-hover:bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="group-hover:text-slate-800 transition-colors">{orgData.period}</span>
                        </div>
                    </div>
                </header>

                {/* OVERVIEW SECTION */}
                <section className="mb-16">
                    <div className="max-w-4xl">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">Deskripsi Aktivitas</h2>
                        <p className="text-slate-600 leading-relaxed text-lg text-justify border-l-4 border-blue-100 pl-6 italic">
                            "{orgData.description}"
                        </p>
                    </div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* GALLERY */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
                            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Workplace Gallery</h2>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {orgData.gallery.map((img, index) => {
                                const gridClasses = img.size === "large" ? "col-span-2 aspect-video" : "col-span-1 aspect-video";
                                return (
                                    <div key={index} className={`${gridClasses} group relative rounded-[2rem] overflow-hidden shadow-lg border-4 border-white transition-all duration-700 hover:shadow-blue-500/20 hover:-translate-y-2`}>
                                        <img 
                                            src={img.src} 
                                            alt="Gallery" 
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                            onError={(e) => {e.target.src="https://via.placeholder.com/800x450/EEF2FF/2563EB?text=AIESEC+Documentation"}}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                                            <p className="text-white text-sm font-black uppercase tracking-[0.2em]">{img.caption}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* RESPONSIBILITIES */}
                    <aside className="lg:col-span-5 lg:sticky lg:top-32">
                        <section className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-500/20 hover:shadow-2xl">
                            
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 blur-2xl transition-all duration-700 group-hover:bg-blue-500/30 group-hover:scale-150"></div>
                            
                            <h2 className="text-2xl font-bold mb-8 relative z-10 transition-colors group-hover:text-blue-400">
                                Tanggung Jawab Utama
                            </h2>
                            
                            <ul className="space-y-6 relative z-10">
                                {orgData.jobdesk.map((task, index) => (
                                    <li key={index} className="flex items-start gap-4 group/item">
                                        <div className="mt-1.5 w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 flex items-center justify-center shadow-lg transition-all duration-300 group-hover/item:bg-white group-hover/item:scale-110 group-hover/item:shadow-blue-500/50">
                                            <svg className="w-3.5 h-3.5 text-white transition-colors duration-300 group-hover/item:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

                        <div className="mt-8 p-6 bg-white rounded-[2rem] border-2 border-dashed border-slate-200 text-center group hover:border-blue-300 transition-colors shadow-sm">
                            <p className="text-slate-400 group-hover:text-blue-500 font-bold italic uppercase text-sm tracking-widest transition-colors">
                                #LeadershipDevelopment
                            </p>
                        </div>
                    </aside>
                </div>

            </main>

            <Footer />
        </div>
    );
};

export default Aflaiesec;