import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const CreditCardAnalysis = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.overflowX = 'hidden';
        return () => { document.body.style.overflowX = 'auto'; };
    }, []);

    const projectData = {
        title: "Credit Card Customer Analysis Report",
        period: "Desember 2025 - Januari 2026",
        description: "Project ini berfokus pada analisis data transaksi kartu kredit untuk mendeteksi pola churn dan segmentasi profil risiko pelanggan menggunakan Python dan Looker Studio.",
        tools: [
            { name: "Python", logo: "/images/python.png" }, 
            { name: "Looker", logo: "/images/looker.png" },
            { name: "Pandas", logo: "/images/pandas.png" },
            { name: "SQL", logo: "/images/sql.png" }
        ],
        links: {
            github: "https://github.com/AgastyaDava",
            reportPdf: "/files/credit-card-report.pdf"
        },
        content: [
            {
                image: "/images/cc-eda.png",
                title: "Exploratory Data Analysis (EDA)",
                explanation: "Tahap awal melibatkan pembersihan data dan visualisasi distribusi fitur. Saya menemukan bahwa pelanggan dengan masa tenor rendah cenderung memiliki tingkat churn 15% lebih tinggi dibandingkan pelanggan loyal."
            },
            {
                image: "/images/cc-modeling.png",
                title: "Predictive Modeling with Random Forest",
                explanation: "Saya membangun model klasifikasi untuk memprediksi potensi churn. Model ini mencapai akurasi 88% dalam mengidentifikasi nasabah yang berisiko tinggi menutup kartu kredit mereka."
            },
            {
                image: "/images/cc-model.png",
                title: "Predictive Modeling with Random",
                explanation: "Saya membangun model klasifikasi untuk memprediksi potensi churn. Model ini mencapai akurasi 88% dalam mengidentifikasi nasabah yang berisiko tinggi menutup kartu kredit mereka."
            }
        ]
    };

    return (
        <div className="min-h-screen w-full bg-[#fcfcfc] flex flex-col font-sans selection:bg-emerald-50">
            <Navbar />

            <main className="flex-grow w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 xl:px-8 pt-30 pb-24">
                
                {/* HEADER SECTION */}
                <header className="mb-20">
                    <div className="mb-12">
                        <span className="text-emerald-600 font-semibold tracking-widest uppercase text-xs">Portfolio Data Analyst</span>
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mt-4 tracking-tight leading-tight">
                            {projectData.title}
                        </h1>
                        
                        <div className="flex items-center gap-3 text-slate-500 mt-6 font-bold group cursor-default">
                            <div className="p-2 bg-emerald-50 rounded-lg group-hover:bg-emerald-100 transition-colors duration-300">
                                <svg className="w-5 h-5 text-emerald-600 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <span className="group-hover:text-emerald-700 transition-colors duration-300 uppercase tracking-wider text-sm">
                                {projectData.period}
                            </span>
                        </div>
                    </div>

                    {/* BARIS TOOLS & BUTTONS */}
                    <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-12 py-2 border-y border-slate-100">
                        
                        <div className="flex flex-wrap gap-10">
                            {projectData.tools.map((tool, index) => (
                                <div key={index} className="flex flex-col items-center gap-3 group">
                                    <div className="w-12 h-12 flex items-center justify-center p-1 transition-all duration-300 group-hover:scale-110 shadow-sm rounded-xl bg-white border border-slate-50">
                                        <img 
                                            src={tool.logo} 
                                            alt={tool.name} 
                                            className="w-full h-full object-contain"
                                            onError={(e) => {e.target.src="https://via.placeholder.com/100?text=Logo"}}
                                        />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-900 transition-colors">
                                        {tool.name}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* ACTION BUTTONS */}
                        <div className="flex gap-4 w-full md:w-auto">
                            <a href={projectData.links.github} target="_blank" rel="noreferrer" 
                               className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#0d1117] text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-600 transition-all active:scale-95 text-sm shadow-md">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                                GitHub Repo
                            </a>
                            <a href={projectData.links.reportPdf} download 
                               className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white text-slate-900 border border-slate-200 px-8 py-3 rounded-xl font-bold hover:border-emerald-500 hover:text-emerald-600 transition-all active:scale-95 text-sm">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" /></svg>
                                Full Report
                            </a>
                        </div>
                    </div>
                </header>

                {/* CONTENT AREA */}
                <div className="space-y-32">
                    <section className="max-w-8xl">
                        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3 italic uppercase tracking-widest">
                            <span className="w-1.5 h-6 bg-emerald-500 rounded-full"></span>
                            Context & Methodology
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed text-justify border-l-4 border-emerald-50 pl-8 pr-8 bg-white py-6 rounded-r-3xl shadow-sm">
                            {projectData.description}
                        </p>
                    </section>

                    {/* IMAGE CONTENT LIST */}
                    {projectData.content.map((item, index) => (
                        <article key={index} className="space-y-10 group">
                            <div className="bg-white p-3 rounded-[2.5rem] shadow-2xl border border-slate-50 overflow-hidden transition-all duration-700 hover:shadow-emerald-500/10 hover:-translate-y-2">
                                <img src={item.image} alt={item.title} className="w-full h-auto rounded-[2rem] object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
                            </div>
                            
                            <div className="max-w-6xl">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-emerald-500 font-mono text-xl font-black italic">0{index + 1}</span>
                                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight uppercase group-hover:text-emerald-600 transition-colors">
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="text-slate-600 text-lg leading-relaxed text-justify pl-12 border-l-2 border-emerald-100 group-hover:border-emerald-500 transition-all duration-500">
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

export default CreditCardAnalysis;