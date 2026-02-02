import React from 'react';

const certificates = [
    { id: 1, img: "/images/data-science-dicoding.png", title: "Data Science Fundamental" },
    { id: 2, img: "/images/python-scientific.png", title: "Scientific Computing Python" },
    { id: 3, img: "/images/sql-dicoding.png", title: "Structured Query Language (SQL)" },
    { id: 4, img: "/images/data-analyst.png", title: "Data Analysis Fundamental" },
    { id: 5, img: "/images/uiuxdesign.png", title: "UI/UX Design" },
    { id: 6, img: "/images/responsive-web-design.png", title: "Responsive Web Design" },
    { id: 7, img: "/images/internship.png", title: "Internship Certificate" },
    { id: 8, img: "/images/sda.png", title: "Algorithms and Programming" },
    { id: 9, img: "/images/mandarin.png", title: "Introduction to Mandarin Language" },
];

const Sertifikat = () => {
    const scrollingList = [...certificates, ...certificates];

    return (
        <section className="py-16 pb-32 bg-[#fcfcfc] overflow-hidden">
            <style>
                {`
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-marquee {
                        display: flex;
                        width: max-content;
                        animation: scroll 35s linear infinite;
                    }
                    .animate-marquee:hover {
                        animation-play-state: paused;
                    }
                `}
            </style>

            {/* HEADER SECTION */}
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 xl:px-40 mb-12 text-center">
                <div className="flex flex-col items-center justify-center gap-3">
                    <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 text-center tracking-tight">
                        Certifications & Technical Training
                    </h2>
                    {/* <div className="w-16 h-1 bg-blue-600 rounded-full"></div> */}
                    <p className="text-slate-500 font-medium max-w-5xl mx-auto leading-relaxed text-sm sm:text-base">
                        A collection of professional certifications and completed courses focused on developing technical and analytical skills.
                    </p>
                </div>
            </div>

            {/* CAROUSEL CONTAINER */}
            <div className="relative w-full">
    
                <div className="animate-marquee gap-6 flex">
                    {scrollingList.map((cert, index) => (
                        <div 
                            key={index} 
                            className="flex-shrink-0 w-[260px] md:w-[380px] group mr-2"
                        >
                            <div className="bg-white p-3 rounded-[1.5rem] shadow-lg shadow-slate-200/50 border border-slate-100 transition-all duration-700 
                                            group-hover:shadow-blue-500/15 group-hover:border-blue-200 group-hover:-translate-y-2 relative overflow-hidden">
                                
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[1.5rem] opacity-0 group-hover:opacity-5 transition duration-700 blur"></div>

                                <div className="relative overflow-hidden rounded-xl aspect-[16/10] bg-slate-50 border border-slate-50">
                                    <img 
                                        src={cert.img} 
                                        alt={cert.title} 
                                        className="w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-110 group-hover:rotate-1"
                                        onError={(e) => {e.target.src="https://via.placeholder.com/500x300/1e293b/FFFFFF?text=Certification"}}
                                    />
                                    <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/5 transition-colors duration-700"></div>
                                </div>

                                <div className="mt-4 px-2 pb-2 text-center">
                                    <h3 className="text-xs md:text-sm font-bold text-slate-800 uppercase tracking-wider transition-colors duration-500 group-hover:text-blue-700 truncate">
                                        {cert.title}
                                    </h3>
                                    <div className="relative h-1 w-8 bg-blue-100 mt-3 mx-auto rounded-full overflow-hidden transition-all duration-500 group-hover:w-16">
                                        <div className="absolute inset-0 bg-blue-600 translate-x-[-100%] group-hover:translate-x-[0%] transition-transform duration-700"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Fade effect */}
                <div className="absolute inset-y-0 left-0 w-20 md:w-48 bg-gradient-to-r from-[#fcfcfc] via-[#fcfcfc]/80 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-20 md:w-48 bg-gradient-to-l from-[#fcfcfc] via-[#fcfcfc]/80 to-transparent z-10 pointer-events-none"></div>
            </div>
        </section>
    );
};

export default Sertifikat;