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
        description: "This project was developed as a comprehensive portfolio initiative to sharpen my technical proficiency in data visualization and financial storytelling. By analyzing a dataset of over 5,000 customers with a $22.3M transaction volume[cite: 8, 10], I successfully derived critical insights into customer segmentation and credit utilization. Through this analysis, I identified the 'Businessman' segment as the key revenue driver [cite: 96, 113] and flagged a 27.5% utilization ratio[cite: 14], serving as a proof of concept for how I can leverage interactive dashboards to optimize revenue streams and mitigate credit risks effectively.",
        tools: [
            { name: "Spreadsheet", logo: "/images/sheets-logo.png" }, 
            { name: "Looker Studio", logo: "/images/looker-icon.png" },
            { name: "Kaggle", logo: "/images/kaggle-logo.png" }
        ],
        links: {
            github: "https://github.com/AgastyaDava",
            reportPdf: "/files/credit-card-report.pdf"
        },
        content: [
            {
                image: "/images/analyst1.png",
                title: "Costumer Analysis by State Overview",
                explanation: "Dashboard utama ini menyajikan KPI kritis perusahaan, mencakup total 5.054 nasabah dengan volume transaksi akumulatif sebesar $22,31M[cite: 8, 10]. Analisis ini memberikan gambaran instan mengenai kesehatan finansial, di mana rata-rata pendapatan bunga (Interest Earned) mencapai $3,89M [cite: 12] dan rasio utilisasi kredit berada di angka sehat 27,5%[cite: 14]."
            },
            {
                image: "/images/analyst2.png",
                title: "Revenue Generator by Segment",
                explanation: "Analisis performa berdasarkan profesi menunjukkan bahwa segmen 'Businessman' merupakan kontributor utama terhadap volume transaksi[cite: 96, 113]. Meskipun segmen 'Self-employed' memiliki biaya akuisisi (Cost Acquisition) yang kompetitif [cite: 46], segmen 'Businessman' secara konsisten menunjukkan aktivitas transaksi tertinggi[cite: 28, 96]."
            },
            {
                image: "/images/analyst3.png",
                title: "Customer Risk & Delinquency Profile",
                explanation: "Melalui pemetaan profil risiko, ditemukan 317 akun dalam status delinquent (tunggakan)[cite: 13]. Visualisasi heatmap per negara bagian [cite: 162] membantu mengidentifikasi wilayah geografis dengan tingkat gagal bayar tertinggi, memungkinkan intervensi yang lebih tertarget[cite: 161, 163]."
            },
            {
                image: "/images/analyst4.png",
                title: "Demographic & Behavioral Analysis",
                explanation: "Berdasarkan status perkawinan, kelompok 'Married' mendominasi basis nasabah[cite: 5, 80]. Analisis perilaku belanja menunjukkan bahwa kategori 'Bills', 'Entertainment', dan 'Fuel' adalah tiga pengeluaran terbesar pelanggan[cite: 86, 88], memberikan wawasan berharga untuk perancangan program loyalitas."
            },
            {
                image: "/images/analyst5.png",
                title: "Customer Risk & Delinquency Profile",
                explanation: "Melalui pemetaan profil risiko, ditemukan 317 akun dalam status delinquent (tunggakan)[cite: 13]. Visualisasi heatmap per negara bagian [cite: 162] membantu mengidentifikasi wilayah geografis dengan tingkat gagal bayar tertinggi, memungkinkan intervensi yang lebih tertarget[cite: 161, 163]."
            },
            {
                image: "/images/analyst6.png",
                title: "Demographic & Behavioral Analysis",
                explanation: "Berdasarkan status perkawinan, kelompok 'Married' mendominasi basis nasabah[cite: 5, 80]. Analisis perilaku belanja menunjukkan bahwa kategori 'Bills', 'Entertainment', dan 'Fuel' adalah tiga pengeluaran terbesar pelanggan[cite: 86, 88], memberikan wawasan berharga untuk perancangan program loyalitas."
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

                {/* TWO-COLUMN INTRO SECTION */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center mb-32">
                    {/* LEFT: Image Preview (Take 3/5 of space) */}
                    <div className="lg:col-span-3 relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white group">
                        <img 
                            src="/images/creditcardreport.png" 
                            alt="Full Credit Card Analysis Dashboard" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-emerald-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* RIGHT: Context & Methodology (Take 2/5 of space) */}
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3 italic uppercase tracking-widest">
                            <span className="w-1.5 h-6 bg-emerald-500 rounded-full"></span>
                            Context & Methodology
                        </h2>
                        <div className="relative">
                            <p className="text-slate-600 text-lg leading-relaxed text-justify border-l-4 border-emerald-100 pl-6 py-2">
                                {projectData.description}
                            </p>
                            {/* Subtle background element */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-50 rounded-full -z-10 opacity-50"></div>
                        </div>
                    </div>
                </div>

                {/* DEEP DIVE CONTENT LIST */}
                <div className="space-y-40">
                    <h2 className="text-3xl font-black text-slate-900 text-center mb-20 tracking-tighter">
                        Detailed Analysis Breakdowns
                    </h2>
                    {projectData.content.map((item, index) => (
                        <article key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center group`}>
                            {/* Image Part */}
                            <div className="w-full lg:w-3/5 bg-white p-2 rounded-[2.5rem] shadow-xl border border-slate-50 overflow-hidden transition-all duration-700 hover:shadow-emerald-500/10">
                                <img src={item.image} alt={item.title} className="w-full h-auto rounded-[2rem] object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
                            </div>
                            
                            {/* Text Part */}
                            <div className="w-full lg:w-2/5 space-y-6">
                                <div className="flex items-center gap-4">
                                    <span className="text-emerald-500 font-mono text-2xl font-black italic">0{index + 1}</span>
                                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight uppercase group-hover:text-emerald-600 transition-colors">
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="text-slate-600 text-lg leading-relaxed text-justify pl-8 border-l-2 border-emerald-100 group-hover:border-emerald-500 transition-all duration-500">
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