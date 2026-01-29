import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const MipaPreneur = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.overflowX = 'hidden';
        return () => {
            document.body.style.overflowX = 'auto';
        };
    }, []);

    const orgData = {
        title: "MIPA PRENEUR FMIPA UNJ",
        logo: "/images/bemffmipa.jpg", 
        period: "September 2025",
        activityTitle: "Entrepreneurship Development",
        description: "MIPA Preneur is a student entrepreneurship platform within FMIPA UNJ that aims to cultivate an entrepreneurial mindset among students by supporting the development of business ideas into market-ready products. The initiative provides a space for students to showcase their startups through exhibitions, strengthen their understanding of product positioning, and gain hands-on experience in real business environments. Through this program, student products are introduced directly to potential customers, encouraging practical learning in marketing, sales communication, teamwork, and customer engagement while fostering innovation and creativity within the academic community.",
        jobdesk: [
            "Promoted and marketed student-made products to visitors and potential customers, effectively communicating product value and features.",
            "Actively engaged in direct sales activities, assisting buyers throughout the purchasing process to support sales performance.",
            "Collaborated with team members to coordinate sales efforts, manage product availability, and ensure smooth exhibition operations."
        ],
        products: [
            { src: "/images/eatzy1.jpeg", caption: "Pizza Eatzy" },
            { src: "/images/eatzy2.jpeg", caption: "Pizza & Mac n Cheese" },
            { src: "/images/eatzy3.jpeg", caption: "Mac n Cheese" },
            { src: "/images/eatzy4.jpeg", caption: "Mac n Cheese" },
            { src: "/images/eatzy5.jpeg", caption: "Bolen" },
        ],
        docs: [
            { src: "/images/mipapreneur.jpg", caption: "Main Exhibition Area" },
            { src: "/images/mipapreneur2.jpeg", caption: "Eatzy Group" },
        ]
    };

    return (
        <div className="min-h-screen w-full bg-[#fcfcfc] flex flex-col overflow-x-hidden font-sans">
            <Navbar />

            <main className="flex-grow w-full max-w-7xl mx-auto px-6 pt-32 pb-20">
                
                {/* HEADER SECTION */}
                <header className="mb-14">
                    <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl p-4 flex items-center justify-center border border-slate-100 transition-transform hover:rotate-3">
                            <img src={orgData.logo} alt="Logo" className="w-full h-full object-contain" />
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className="text-base md:text-xl font-extrabold text-slate-900 mb-1 tracking-tight hover:text-purple-600 transition-colors duration-500 uppercase leading-tight">
                                {orgData.title}
                            </h1>
                            <p className="text-purple-600 font-bold text-xl uppercase tracking-widest">{orgData.activityTitle}</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-3 text-slate-500 font-bold justify-center md:justify-start group/period cursor-default w-fit">
                        <div className="p-2 bg-purple-50 rounded-lg group-hover/period:bg-purple-100 transition-colors duration-300">
                            <svg className="w-5 h-5 text-purple-600 transition-transform duration-300 group-hover/period:scale-110 group-hover/period:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <span className="group-hover/period:text-purple-700 transition-colors duration-300">
                            {orgData.period}
                        </span>
                    </div>
                </header>

                {/* OVERVIEW SECTION */}
                <section className="mb-16">
                    <div className="max-w-5xl">
                        <h2 className="text-lg md:text-xl tracking-[0.2em] text-purple-600 font-black mb-6 flex items-center gap-3">
                            <span className="w-2 h-8 bg-purple-600 rounded-full"></span>
                            Abaout MIPA Preneur UNJ
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-lg text-justify border-l-4 border-purple-500 pl-8 pr-8 py-8 bg-white rounded-r-[2.5rem] shadow-sm">
                            "{orgData.description}"
                        </p>
                    </div>
                </section>

                    <div className="mb-20">
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Product Catalog Eatzy</h2>
                            <span className="flex-grow h-[1px] bg-slate-200"></span>
                        </div>
    
    <div className="max-w-5xl mx-auto md:mx-0">
        <div className="grid grid-cols-5 gap-4 p-1">
            {orgData.products.map((prod, index) => (
                <div key={index} className="group relative aspect-square rounded-2xl overflow-hidden border-2 border-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-purple-300/30">
                    <img 
                        src={prod.src} 
                        alt={prod.caption} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-purple-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2">
                        <p className="text-[8px] text-white font-bold uppercase text-center tracking-tighter">
                            {prod.caption}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
</div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    <div className="lg:col-span-7">
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">Gallery Activity</h2>
                            <span className="flex-grow h-[1px] bg-slate-200"></span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {orgData.docs.map((doc, index) => (
                                <div key={index} className="group relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg border-4 border-white transition-all duration-700 hover:shadow-purple-500/20 hover:-translate-y-2">
                                    <img 
                                        src={doc.src} 
                                        alt={doc.caption} 
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                        onError={(e) => {e.target.src="https://via.placeholder.com/600x450/F5F3FF/7C3AED?text=Preneur+Doc"}}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex items-end">
                                        <p className="text-white text-[10px] font-bold uppercase tracking-widest">{doc.caption}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <aside className="lg:col-span-5 lg:sticky lg:top-40 pt-20">
                        <section className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-purple-500/20 hover:shadow-2xl border-t-4 border-purple-600">
                            <h2 className="text-2xl font-bold mb-8 relative z-10 transition-colors group-hover:text-purple-400">
                                Activities
                            </h2>
                            
                            <ul className="space-y-6 relative z-10">
                                {orgData.jobdesk.map((task, index) => (
                                    <li key={index} className="flex items-start gap-4 group/item">
                                        <div className="mt-1.5 w-6 h-6 bg-purple-600 rounded-full flex-shrink-0 flex items-center justify-center shadow-lg transition-all duration-300 group-hover/item:bg-white group-hover/item:scale-110 group-hover/item:shadow-purple-500/50">
                                            <svg className="w-3.5 h-3.5 text-white transition-colors duration-300 group-hover/item:text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

                        <div className="mt-8 p-6 bg-white rounded-[2rem] border-2 border-dashed border-purple-100 text-center group hover:border-purple-600 hover:bg-purple-50/50 transition-all duration-500 shadow-sm cursor-default">
                            <p className="text-purple-400 group-hover:text-purple-600 font-black uppercase text-sm tracking-[0.3em] transition-all duration-500 group-hover:scale-105">
                                #MIPA_PRENEUR_2025
                            </p>
                        </div>
                    </aside>
                </div>

            </main>

            <Footer />
            
        </div>
    );
};

export default MipaPreneur;