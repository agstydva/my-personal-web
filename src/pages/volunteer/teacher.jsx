import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const TeacherVolunteer = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.overflowX = 'hidden';
        return () => {
            document.body.style.overflowX = 'auto';
        };
    }, []);

    const orgData = {
        title: "Teacher Volunteer",
        logo: "/images/smk44jakarta.png", 
        period: "November 2023",
        activityTitle: "Education & Social Impact",
        description: "This activity was conducted as part of the Olympism course, where university students were assigned to teach Olympism related material to high school students at SMK 44 Jakarta. The session involved delivering interactive lessons to a class of more than 40 students, facilitating discussions on the values of Olympism, and addressing students’ questions not only about the subject matter but also about higher education, public universities, and academic life at Universitas Negeri Jakarta (UNJ). To increase engagement, the activity also included game-based learning and experience sharing, helping students gain both academic insight and motivation for their future education.",
        jobdesk: [
            "Instructed a class of 40+ high school students on the principles of Olympism, delivering clear and engaging explanations.",
            "Facilitated interactive discussions, addressing student questions not only about the course material but also about university admissions and academic life.",
            "Organized a game based learning session, rewarding correct answers to encourage active participation and enthusiasm.",
            "Shared personal experiences as a Computer Science student, addressing questions from accounting students curious about the program and its challenges."
        ],
        gallery: [
            { src: "/images/teacher.jpeg", caption: "Interactive Classroom Session" },
            { src: "/images/teacher2.jpeg", caption: "Students Mentoring" },
            { src: "/images/teacher3.jpg", caption: "Documentation Activity" },
        ]
    };

    return (
        <div className="min-h-screen w-full bg-[#f8fafc] flex flex-col overflow-x-hidden font-sans">
            <Navbar />

            <main className="flex-grow w-full max-w-7xl mx-auto px-6 pt-32 pb-20">
                
                {/* HEADER SECTION */}
                <header className="mb-14">
                    <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl p-4 flex items-center justify-center border border-blue-100 transition-transform hover:rotate-3">
                            <img src={orgData.logo} alt="Logo" className="w-full h-full object-contain" />
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className="text-lg md:text-2xl font-extrabold text-slate-900 mb-1 tracking-tight hover:text-blue-600 transition-colors duration-500 uppercase leading-tight">
                                {orgData.title}
                            </h1>
                            <p className="text-blue-600 font-bold text-xl uppercase tracking-widest">{orgData.activityTitle}</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-3 text-slate-500 font-bold justify-center md:justify-start group/period cursor-default w-fit">
                        <div className="p-2 bg-blue-50 rounded-lg group-hover/period:bg-blue-100 transition-colors duration-300">
                            <svg className="w-5 h-5 text-blue-600 transition-transform duration-300 group-hover/period:scale-110 group-hover/period:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <span className="group-hover/period:text-blue-700 transition-colors duration-300">
                            {orgData.period}
                        </span>
                    </div>
                </header>

                {/* OVERVIEW SECTION */}
                <section className="mb-16">
                    <div className="max-w-4xl">
                        <h2 className="text-lg md:text-xl tracking-[0.2em] text-blue-600 font-black mb-6 flex items-center gap-3">
                            <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                            About Activities
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-lg text-justify border-l-4 border-blue-500 pl-8 pr-8 py-8 bg-white rounded-r-[2.5rem] shadow-sm italic">
                            "{orgData.description}"
                        </p>
                    </div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                
                    <div className="lg:col-span-7">
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-tight italic">Teaching Documentation</h2>
                            <span className="flex-grow h-[1px] bg-blue-100"></span>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-6">
                           
                            <div className="col-span-2 group relative aspect-video rounded-[2.5rem] overflow-hidden shadow-lg border-4 border-white transition-all duration-700 hover:shadow-blue-500/20 hover:-translate-y-2">
                                <img 
                                    src={orgData.gallery[0].src} 
                                    alt="Main highlight" 
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    onError={(e) => {e.target.src="https://via.placeholder.com/800x450/EFF6FF/2563EB?text=Teaching+Highlight"}}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex items-end">
                                    <p className="text-white text-xs font-bold uppercase tracking-widest">{orgData.gallery[0].caption}</p>
                                </div>
                    </div>

    
        {orgData.gallery.slice(1, 3).map((img, index) => (
            <div key={index} className="group relative aspect-video rounded-[2rem] overflow-hidden shadow-lg border-4 border-white transition-all duration-700 hover:shadow-blue-500/20 hover:-translate-y-2">
                <img 
                    src={img.src} 
                    alt="Teaching activity" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    onError={(e) => {e.target.src="https://via.placeholder.com/600x400/EFF6FF/2563EB?text=Teaching+Activity"}}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex items-end">
                    <p className="text-white text-[10px] font-bold uppercase tracking-widest leading-tight">{img.caption}</p>
                </div>
            </div>
        ))}
    </div>
</div>

                    {/* RESPONSIBILITIES */}
                    <aside className="lg:col-span-5 lg:sticky lg:top-40 pt-20">
                        <section className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-500/20 border-t-4 border-blue-600">
                            <h2 className="text-2xl font-bold mb-8 relative z-10 transition-colors group-hover:text-blue-400 tracking-tight italic">
                                Activities
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

                        <div className="mt-8 p-6 bg-white rounded-[2rem] border-2 border-dashed border-blue-100 text-center group hover:border-blue-600 hover:bg-blue-50/50 transition-all duration-500 shadow-sm cursor-default">
                            <p className="text-blue-400 group-hover:text-blue-600 font-black uppercase text-sm tracking-[0.3em] transition-all duration-500 group-hover:scale-105">
                                #Education_Volunteer_2023
                            </p>
                        </div>
                    </aside>
                </div>

            </main>

            <Footer />

        </div>
    );
};

export default TeacherVolunteer;