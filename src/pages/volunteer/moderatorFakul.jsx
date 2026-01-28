import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ModeratorFakul = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.overflowX = 'hidden';
        return () => {
            document.body.style.overflowX = 'auto';
        };
    }, []);

    const orgData = {
        title: "PKKMB FMIPA UNJ 2025",
        logo: "/images/pkkmb-fmipa-logo.jpg", 
        period: "Agustus 2025",
        activityTitle: "Moderator & Event Hosting",
        description: "Speakers on Day 2 of PKKMB FMIPA UNJ delivered a motivational session focused on fostering the spirit of achievement among new students. Representatives from Mawapres (Outstanding Student Award) shared their academic journeys, accomplishments, and personal experiences to inspire freshmen to actively pursue excellence in both academic and non-academic fields. This session aimed to motivate new students to build confidence, set clear goals, and take advantage of opportunities throughout their university life at FMIPA UNJ.",
        jobdesk: [
            "Facilitated sessions as Moderator for 1000+ new students, managing speaker transitions including a keynote by Outstanding Student on “Semangat Meraih Prestasi”, and ensuring professional communication with active participant engagement.",
            "Coordinated agendas, managed speaker transitions, and maintained program flow, ensuring a smooth and memorable experience for participants.",
            "Promoted enthusiasm and active participation by delivering announcements, interactive sessions, and facilitating Q&A effectively."
        ],
        gallery: [
            { src: "/images/moderator1.png", caption: "Main Stage Discussion" },
            { src: "/images/moderator2.png", caption: "Interactive Q&A Session" },
        ]
    };

    return (
        <div className="min-h-screen w-full bg-[#fcfcfc] flex flex-col overflow-x-hidden font-sans">
            <Navbar />

            <main className="flex-grow w-full max-w-7xl mx-auto px-6 pt-32 pb-20">
                
                {/* HEADER SECTION */}
                <header className="mb-14">
                    <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
                        <div className="w-24 h-24 md:w-36 md:h-36 rounded-3xl p-4 flex items-center justify-center border border-slate-100 transition-transform hover:rotate-3">
                            <img src={orgData.logo} alt="Logo" className="w-full h-full object-contain" />
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className="text-lg md:text-2xl font-extrabold text-slate-900 mb-2 tracking-tight hover:text-purple-600 transition-colors duration-500 uppercase leading-tight">
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
                    <div className="max-w-4xl">
                        <h2 className="text-lg md:text-xl tracking-[0.2em] text-purple-600 font-black mb-6 flex items-center gap-3">
                            <span className="w-2 h-8 bg-purple-600 rounded-full"></span>
                            About PKKMB FMIPA Day 2 Speakers
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-lg text-justify border-l-4 border-purple-500 pl-8 pr-8 py-8 bg-white rounded-r-[2.5rem] shadow-sm">
                            "{orgData.description}"
                        </p>
                    </div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* GALLERY */}
                    <div className="lg:col-span-7">
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 tracking-[0.1em]">Documentation</h2>
                            <span className="flex-grow h-[1px] bg-slate-200"></span>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-6 md:gap-10">
                            {orgData.gallery.slice(0, 2).map((img, index) => (
                                <div key={index} className="group relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border-4 border-white transition-all duration-700 hover:shadow-purple-500/30 hover:-translate-y-3">
                                <img 
                                    src={img.src} 
                                    alt="..." 
                                    className="w-full h-full object-cover object-top transition-transform ..." 
                                />
                
                                {/* Overlay Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <p className="text-white text-sm font-black uppercase tracking-[0.2em] leading-tight">
                                            {img.caption}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>

                    {/* RESPONSIBILITIES */}
                    <aside className="lg:col-span-5 lg:sticky lg:top-40 pt-12">
                        <section className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-purple-500/20 hover:shadow-2xl border-t-4 border-purple-600">
                            
                            <h2 className="text-2xl font-bold mb-8 relative z-10 transition-colors group-hover:text-purple-400 uppercase tracking-tight italic">
                                Key Responsibilities
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

                        <div className="mt-8 p-6 bg-white rounded-[2rem] border-2 border-dashed border-purple-100 text-center group hover:border-purple-500 hover:bg-purple-50/50 transition-all duration-500 shadow-sm cursor-default">
                            <p className="text-purple-400 group-hover:text-purple-600 font-black uppercase text-sm tracking-[0.3em] transition-all duration-500 group-hover:scale-105">
                                #Faculty_Event_2025
                            </p>
                        </div>
                    </aside>
                </div>

            </main>

            <Footer />

        </div>
    );
};

export default ModeratorFakul;