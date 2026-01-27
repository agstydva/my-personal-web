import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Experience', href: '/#working-experience' },
    { name: 'Education', href: '/#education' },
    { name: 'Organization', href: '/#organization' },
  ];

  return (
    <footer className="w-full bg-[#0a0a0a] text-white pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[30%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          
          <div className="md:col-span-5">
            <h2 className="text-2xl font-black tracking-tighter mb-6">
              Agastya Dava
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
              Computer Science student at Universitas Negeri Jakarta. Passionate about Web Development, 
              Data Analysis, Project Management, and creating meaningful digital experiences.
            </p>
            
            <div className="flex gap-4">
               <a 
                href="mailto:agastyadava01@gmail.com"
                className="group relative inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:bg-indigo-600 hover:text-white shadow-lg active:scale-95"
               >
                <span className="relative z-10 text-xs uppercase tracking-wider">Get In Touch</span>
                <svg 
                  className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
               </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-8">
              Navigation
            </h3>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300 flex items-center group"
                  >
                    <span className="h-[1px] w-0 bg-indigo-500 group-hover:w-4 mr-0 group-hover:mr-3 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-8">
              Connect With Me
            </h3>
            <div className="space-y-6">
              <a 
                href="mailto:agastyadava01@gmail.com" 
                className="flex items-center gap-4 text-gray-400 hover:text-white transition-all group"
              >
                <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-indigo-600 transition-all duration-300">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm">agastyadava01@gmail.com</span>
              </a>

              <a 
                href="https://wa.me/6287774436125" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-400 hover:text-white transition-all group"
              >
                <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-green-500 transition-all duration-300">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.555 4.197 1.608 6.022L0 24l6.126-1.608a11.77 11.77 0 005.924 1.608h.005c6.635 0 12.05-5.414 12.05-12.05 0-3.212-1.25-6.232-3.52-8.502z"/>
                  </svg>
                </div>
                <span className="text-sm">+62 877 7443 6125</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center border-t border-white/5 pt-8 text-center">
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em]">
            &copy; {currentYear} Agastya Dava Nurrahman
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;