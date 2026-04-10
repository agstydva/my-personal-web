import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Dtastyum = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.overflowX = 'hidden';
        return () => { document.body.style.overflowX = 'auto'; };
    }, []);

    const projectData = {
        title: "Dtastyum - Food & Recipe Platform",
        period: "November 2025 - Desember 2025",
        description: "Dtastyum adalah platform web berbasis kuliner yang dirancang untuk memberikan pengalaman mengeksplorasi resep makanan secara interaktif. Proyek ini dibangun untuk mengasah kemampuan saya dalam mengintegrasikan frontend yang responsif dengan fungsionalitas pencarian data resep secara dinamis.",
        tools: [
            { name: "React.js", logo: "/images/react.png" }, 
            { name: "Tailwind CSS", logo: "/images/tailwind.png" },
            { name: "JavaScript", logo: "/images/js-logo.png" },
            { name: "Vite", logo: "/images/vite-logo.png" }
        ],
        links: {
            github: "https://github.com/AgastyaDava",
            liveDemo: "https://dtastyum.vercel.app" // Contoh link demo
        },
        content: [
            {
                image: "/images/dtastyum-hero.png",
                title: "User Interface & Experience Design",
                explanation: "Fokus utama pada tahap ini adalah menciptakan UI yang bersih dan menggugah selera. Menggunakan Tailwind CSS, saya membangun layout yang sepenuhnya responsif, memastikan pengguna mendapatkan pengalaman terbaik baik melalui perangkat desktop maupun mobile."
            },
            {
                image: "/images/dtastyum-features.png",
                title: "Dynamic Recipe Search & Filtering",
                explanation: "Saya mengimplementasikan fitur pencarian dinamis yang memungkinkan pengguna memfilter resep berdasarkan kategori atau bahan makanan. Komponen React digunakan untuk mengelola state pencarian secara efisien tanpa perlu memuat ulang halaman."
            },
            {
                image: "/images/dtastyum-detail.png",
                title: "Component-Based Architecture",
                explanation: "Website ini dibangun dengan arsitektur berbasis komponen untuk memudahkan pemeliharaan kode. Setiap elemen seperti Navbar, Card Resep, dan Footer dipisahkan menjadi modul yang dapat digunakan kembali (reusable components)."
            }
        ]
    };

    return (
        <div className="min-h-screen w-full bg-[#fcfcfc] flex flex-col font-sans selection:bg-orange-50">
            <Navbar />

            <main className="flex-grow w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 xl:px-8 pt-30 pb-24">
                
                {/* HEADER SECTION */}
                <header className="mb-20">
                    <div className="mb-12">
                        <span className="text-orange-600 font-semibold tracking-widest uppercase text-xs">Web Development Project</span>
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mt-4 tracking-tight leading-tight">
                            {projectData.title}
                        </h1>
                        <div className="flex items-center gap-3 text-slate-500 mt-6 font-bold group cursor-default">
                            <div className="p-2 bg-orange-50 rounded-lg group-hover:bg-orange-100 transition-colors duration-300">
                                <svg className="w-5 h-5 text-orange-600 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <span className="group-hover:text-orange-700 transition-colors duration-300 uppercase tracking-wider text-sm">
                                {projectData.period}
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-12 py-2 border-y border-slate-100">
                        <div className="flex flex-wrap gap-10">
                            {projectData.tools.map((tool, index) => (
                                <div key={index} className="flex flex-col items-center gap-3 group">
                                    <div className="w-12 h-12 flex items-center justify-center p-1 transition-all duration-300 group-hover:scale-110 shadow-sm rounded-xl bg-white border border-slate-50">
                                        <img 
                                            src={tool.logo} 
                                            alt={tool.name} 
                                            className="w-full h-full object-contain"
                                            onError={(e) => {e.target.src="https://via.placeholder.com/100?text=Code"}}
                                        />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-900 transition-colors">
                                        {tool.name}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-4 w-full md:w-auto">
                            <a href={projectData.links.github} target="_blank" rel="noreferrer" 
                               className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#0d1117] text-white px-8 py-3 rounded-xl font-bold hover:bg-orange-600 transition-all active:scale-95 text-sm shadow-md">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                                GitHub Repo
                            </a>
                            <a href={projectData.links.liveDemo} target="_blank" rel="noreferrer"
                               className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white text-slate-900 border border-slate-200 px-8 py-3 rounded-xl font-bold hover:border-orange-500 hover:text-orange-600 transition-all active:scale-95 text-sm">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                Live Demo
                            </a>
                        </div>
                    </div>
                </header>

                {/* TWO-COLUMN INTRO SECTION */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center mb-32">
                    <div className="lg:col-span-3 relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                        <img 
                            src="/images/dtastyum-main.png" 
                            alt="Dtastyum Web Preview" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            onError={(e) => {e.target.src="https://via.placeholder.com/800x500?text=Dtastyum+Web+Preview"}}
                        />
                        <div className="absolute inset-0 bg-orange-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3 italic uppercase tracking-widest">
                            <span className="w-1.5 h-6 bg-orange-500 rounded-full"></span>
                            Project Context
                        </h2>
                        <div className="relative">
                            <p className="text-slate-600 text-lg leading-relaxed text-justify border-l-4 border-orange-100 pl-6 py-2">
                                {projectData.description}
                            </p>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-50 rounded-full -z-10 opacity-50"></div>
                        </div>
                    </div>
                </div>

                {/* DEEP DIVE CONTENT LIST */}
                <div className="space-y-40">
                    <h2 className="text-3xl font-black text-slate-900 text-center mb-20 tracking-tighter">
                        Key Features & Development
                    </h2>
                    {projectData.content.map((item, index) => (
                        <article key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center group`}>
                            <div className="w-full lg:w-3/5 bg-white p-2 rounded-2xl shadow-xl border border-slate-50 overflow-hidden transition-all duration-700 hover:shadow-orange-500/10">
                                <img src={item.image} alt={item.title} className="w-full h-auto rounded-xl object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
                            </div>
                            
                            <div className="w-full lg:w-2/5 space-y-6">
                                <div className="flex items-center gap-4">
                                    <span className="text-orange-500 font-mono text-2xl font-black italic">0{index + 1}</span>
                                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight uppercase group-hover:text-orange-600 transition-colors">
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="text-slate-600 text-lg leading-relaxed text-justify pl-8 border-l-2 border-orange-100 group-hover:border-orange-500 transition-all duration-500">
                                    {item.explanation}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </main>

            <Footer />
            
        </div>
    );
};

export default Dtastyum;