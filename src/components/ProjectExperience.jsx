import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const projectCategories = [
  'All',
  'Web Development',
  'Data Science & Analyst',
  'Project Manager', 
  'UI/UX Design',
  'Mobile App',
  'Machine Learning'
];

const projectsData = [
    { 
        id: 1, 
        title: 'Dtastyum', 
        roles: 'Project Lead & Fullstack Web Developer', 
        date: 'Oktober 2024 - Desember 2024', 
        category: ['Web Development', 'All', 'Project Manager'],
        image: '/images/dtastyum.png',
        path: '/project/dtastyum'
    },
    { 
        id: 2, 
        title: 'GreenBucks', 
        roles: 'Project Lead & Flutter Developer', 
        date: 'November 2024 - Desember 2024', 
        category: ['Mobile App', 'All', 'Project Manager'],
        image: '/images/GreenBucks.png',
        path: '/project/greenbucks'
    },
    { 
        id: 3, 
        title: 'Sportware', 
        roles: 'Project Lead & Fullstack Web Developer', 
        date: 'April 2025 - Juli 2025', 
        category: ['Web Development', 'All', 'Project Manager'],
        image: '/images/sportware.png',
        path: '/project/sportware'
    },
    { 
        id: 4, 
        title: 'Eatzy', 
        roles: 'Project Lead & Entrepreneur', 
        date: 'September 2025 - Desember 2025', 
        category: ['Web Development', 'All', 'Project Manager'],
        image: '/images/eatzy.png',
        path: '/project/eatzy'
    },
    { 
        id: 5, 
        title: 'Simkes', 
        roles: 'Project Lead & Web Developer', 
        date: 'Oktober 2025 - Desember 2025', 
        category: ['Web Development', 'All'],
        image: '/images/simkes.png',
        path: '/project/simkes'
    },
    { 
        id: 7, 
        title: 'Credit Card Analysis Report', 
        roles: 'Data Analyst', 
        date: 'September 2025 - Desember 2025', 
        category: ['Data Science & Analyst', 'All'],
        image: '/images/data-analyst2.png',
        path: '/project/creditCardAnalysis'
    },
    { 
        id: 8, 
        title: 'Retail Sales Transaction Analysis Dashboard', 
        roles: 'Data Analyst', 
        date: 'Oktober 2025 - Desember 2025', 
        category: ['Data Science & Analyst', 'All'],
        image: '/images/data-analyst1.png',
        path: '/project/userRetention'
    },
    { 
        id: 9, 
        title: 'NobaRek', 
        roles: 'Mobile App', 
        date: 'Oktober 2025 - Desember 2025', 
        category: ['Mobile App', 'All', 'Project Manager'],
        image: '/images/NobaRek.png',
        path: '/project/NobaRek'
    },
];

const ProjectCard = ({ project }) => (
    /* Menambahkan hover:-translate-y-2 dan hover:ring untuk efek angkat */
    <div className="group bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 transform hover:-translate-y-2 hover:shadow-2xl hover:ring-1 hover:ring-indigo-500/20 transition-all duration-300 flex flex-col h-full">
        {/* Gambar Proyek */}
        <div className="h-56 w-full bg-gray-200 flex items-center justify-center relative overflow-hidden">
            <img 
                /* Zoom halus pada gambar saat card di-hover */
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                src={project.image} 
                alt={project.title} 
                onError={(e) => {e.target.onerror = null; e.target.src="https://via.placeholder.com/400x300?text=No+Image"}}
            />
            {/* Overlay Title - Tetap di posisi asli kamu */}
            <div className='absolute top-2 left-2 text-white font-bold text-xs bg-black/60 px-2 py-1 rounded backdrop-blur-sm'>
                {project.title}
            </div>
        </div>

        <div className="p-5 flex flex-col flex-grow">
            {/* Judul akan berubah warna saat di-hover */}
            <h3 className="text-xl font-bold text-gray-900 mb-1 line-clamp-1 group-hover:text-indigo-600 transition-colors duration-300">{project.title}</h3>
            <p className="text-sm font-semibold text-indigo-600 mb-1 line-clamp-1">{project.roles}</p>
            <p className="text-xs text-gray-500 mb-3">{project.date}</p>
            
            <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
                {project.title} was developed to fulfill university course requirements and continuously upgrade technical skills, demonstrating practical expertise in its specific domain.
            </p>

            <Link 
                to={project.path}
                /* Button dengan efek hover warna dan sedikit terangkat */
                className="w-full mt-auto bg-black text-white font-semibold py-2.5 rounded shadow-md hover:bg-indigo-800 hover:shadow-indigo-200 hover:-translate-y-1 transition-all duration-300 text-sm block text-center"
            >
                View Project
            </Link>
        </div>
    </div>
);

const ProjectExperience = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category.includes(activeCategory));

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-[88%] mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Project Experience
          </h2>

          <div className="flex justify-center mb-12">
            <div className="inline-flex overflow-x-auto gap-2 p-2 bg-zinc-900/95 backdrop-blur-md rounded-full border border-gray-800 shadow-2xl max-w-full no-scrollbar ring-1 ring-white/5">
                {projectCategories.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`
                      px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 whitespace-nowrap
                      ${
                        activeCategory === category
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30 transform scale-105' 
                          : 'text-gray-400 hover:text-white hover:bg-white/10' 
                      }
                    `}
                  >
                    {category}
                  </button>
                ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
            
            {filteredProjects.length === 0 && (
                <div className="col-span-full flex flex-col items-center justify-center py-12 text-gray-500">
                    <svg className="w-16 h-16 mb-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-lg font-medium">Belum ada proyek di kategori "{activeCategory}"</p>
                </div>
            )}
          </div>
      </div>
    </section>
  );
};

export default ProjectExperience;