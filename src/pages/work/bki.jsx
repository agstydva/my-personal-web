import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Bki = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.overflowX = 'hidden';
        return () => {
            document.body.style.overflowX = 'auto';
        };
    }, []);

    const workData = {
        company: "Biro Klasifikasi Indonesia (BKI)",
        location: "Tanjung Priok, Jakarta Utara, Indonesia",
        role: "Data Management & Governance Intern",
        period: "April 2026 – Present",
        description: "PT Biro Klasifikasi Indonesia (Persero) is the only national classification society in Indonesia. In this internship, I am part of the Data Management team, focusing on establishing and maintaining high-quality data standards. My work involves studying and implementing Data Governance frameworks, ensuring data integrity, and supporting the organization's digital transformation through structured data management practices.",
        jobdesk: [
            "Studying and analyzing Data Governance and Data Management frameworks based on industry best practices to improve data quality and consistency.",
            "Supporting the implementation of data policies and standards to ensure data security, privacy, and compliance across the organization.",
            "Assisting in data profiling and cleansing activities to maintain the accuracy and reliability of the company's internal databases.",
            "Collaborating with the IT and data teams to document data workflows and metadata for better traceability and operational efficiency.",
            "Participating in regular data management audits to identify areas for improvement in the current data architecture and governance processes."
        ]
    };

    return (
        <div className="min-h-screen w-full bg-[#f8fafc] flex flex-col overflow-x-hidden">

            <Navbar />

            <main className="flex-grow w-full max-w-7xl mx-auto px-6 pt-32 pb-20">
                
                {/* HEADER SECTION */}
                <header className="mb-12">
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-4 tracking-tighter hover:text-indigo-600 transition-colors duration-500">
                        {workData.company}
                    </h1>
                    <p className="text-indigo-600 font-bold text-xl uppercase tracking-widest mb-6">{workData.role}</p>
                    
                    <div className="flex flex-wrap items-center gap-y-2 gap-x-8 text-slate-500 font-semibold">
                        <div className="flex items-center gap-2 group cursor-default">
                            <svg className="w-5 h-5 text-indigo-500 transition-transform group-hover:bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="group-hover:text-slate-800 transition-colors">{workData.location}</span>
                        </div>
                        <div className="flex items-center gap-2 group cursor-default">
                            <svg className="w-5 h-5 text-indigo-500 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="group-hover:text-slate-800 transition-colors">{workData.period}</span>
                        </div>
                    </div>
                </header>

                {/* WORKPLACE GALLERY */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                        <div className="w-2 h-8 bg-indigo-600 rounded-full"></div>
                        Workplace Gallery
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="group relative aspect-video rounded-3xl overflow-hidden shadow-md bg-gray-200 border-4 border-white transition-all duration-500 hover:shadow-2xl hover:scale-[1.03]">
                                <img 
                                    src={`/images/bki-${item}.jpg`} 
                                    alt="Workplace at BKI" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    onError={(e) => {e.target.src="https://via.placeholder.com/600x400/EEF2FF/4F46E5?text=BKI+Office+Image"}}
                                />
                                <div className="absolute inset-0 bg-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* DESCRIPTION */}
                    <section className="p-2">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">Experience Description</h2>
                        <p className="text-slate-600 leading-relaxed text-lg text-justify border-l-4 border-indigo-100 pl-6 italic hover:border-indigo-500 transition-colors duration-500">
                            {workData.description}
                        </p>
                    </section>

                    {/* RESPONSIBILITY CARD */}
                    <section className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-indigo-500/20 hover:shadow-2xl">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full -mr-16 -mt-16 blur-2xl transition-all duration-700 group-hover:bg-indigo-500/30 group-hover:scale-150"></div>
                        <h2 className="text-2xl font-bold mb-8 relative z-10 transition-colors group-hover:text-indigo-400">Key Responsibilities</h2>
                        <ul className="space-y-6 relative z-10">
                            {workData.jobdesk.map((task, index) => (
                                <li key={index} className="flex items-start gap-4 group/item">
                                    <div className="mt-1.5 w-6 h-6 bg-indigo-500 rounded-full flex-shrink-0 flex items-center justify-center shadow-lg transition-all duration-300 group-hover/item:bg-white group-hover/item:scale-110 group-hover/item:shadow-indigo-500/50">
                                        <svg className="w-3.5 h-3.5 text-white transition-colors duration-300 group-hover/item:text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-slate-300 font-medium leading-relaxed group-hover/item:text-white transition-colors duration-300">
                                        {task}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </main>

            <Footer />

        </div>
    );
};

export default Bki;