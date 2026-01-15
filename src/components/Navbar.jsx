import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efek scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md shadow-lg border-b border-white/10'
          : 'bg-transparent py-4' // Sedikit padding ekstra saat belum di-scroll agar elegan
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* --- LOGO --- */}
          <div className="flex-shrink-0 cursor-pointer z-50"> 
            <a href="#home" className="text-2xl font-bold text-white tracking-wide">
              Agastya <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Dava</span>
            </a>
          </div>

          {/* --- DESKTOP MENU (Hidden di HP, Muncul di Layar Medium ke atas) --- */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* --- MOBILE TOGGLE BUTTON (Muncul di HP, Hidden di Desktop) --- */}
          <div className="md:hidden flex items-center z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none transition-transform duration-300"
            >
              {/* SVG dengan animasi transisi sederhana */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      {/* Menggunakan absolute dan translate agar animasinya smooth dari atas */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all duration-300 ease-in-out origin-top ${
          isOpen 
            ? 'opacity-100 scale-y-100 translate-y-0 visible' 
            : 'opacity-0 scale-y-95 -translate-y-2 invisible'
        }`}
      >
        <div className="px-4 py-6 space-y-4 flex flex-col items-center">
          {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)} // Menu menutup otomatis setelah diklik
              className="block w-full text-center px-3 py-3 rounded-lg text-lg font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all active:scale-95"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;