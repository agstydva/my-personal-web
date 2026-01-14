    import React, { useState } from 'react';

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
        category: ['Web Development', 'All'],
        image: '/images/website1.jpg' 
    },
        { 
        id: 2, 
        title: 'GreenBucks', 
        roles: 'Project Lead & Flutter Developer', 
        date: 'November 2024 - Desember 2024', 
        category: ['Mobile App', 'All'],
        image: '/images/website2.jpg' 
    },
        { 
        id: 3, 
        title: 'Sportware', 
        roles: 'Project Lead & Fullstack Web Developer', 
        date: 'April 2025 - Juli 2025', 
        category: ['Web Development', 'All'],
        image: '/images/website3.jpg' 
    },
    { 
        id: 4, 
        title: 'Eatzy', 
        roles: 'Project Lead & Entrepreneur', 
        date: 'September 2025 - Desember 2025', 
        category: ['Web Development', 'All', 'Project Manager'],
        image: '/images/website4.jpg'
    },
    { 
        id: 5, 
        title: 'Simkes', 
        roles: 'Project Lead & Fullstack Web Developer', 
        date: 'Oktober 2025 - Desember 2025', 
        category: ['Web Development', 'All'],
        image: '/images/website5.jpg'
    },
        { 
        id: 6, 
        title: 'AgroCoop', 
        roles: 'Project Lead & UI/UX Design', 
        date: 'Oktober 2025 - Desember 2025', 
        category: ['UI/UX Design', 'All', 'Project Manager'],
        image: '/images/website6.jpg'
    },
    { 
        id: 7, 
        title: 'Sentiment Analysis', 
        roles: 'Project Lead & Entrepreneur', 
        date: 'September 2025 - Desember 2025', 
        category: ['Data Analyst', 'All'],
        image: '/images/website7.jpg'
    },
        { 
        id: 8, 
        title: 'User Retention Analysis', 
        roles: 'Project Lead & Fullstack Web Developer', 
        date: 'Oktober 2025 - Desember 2025', 
        category: ['Data Analyst', 'All'],
        image: '/images/website8.jpg'
    },
 { 
        id: 9, 
        title: 'Market Basket Analysis ', 
        roles: 'Project Lead & UI/UX Design', 
        date: 'Oktober 2025 - Desember 2025', 
        category: ['Data Analyst', 'All'],
        image: '/images/website9.jpg'
    },
    { 
        id: 10, 
        title: 'Prediction Model', 
        roles: 'Project Lead & Entrepreneur', 
        date: 'September 2025 - Desember 2025', 
        category: ['Data Analyst', 'All'],
        image: '/images/website10.jpg'
    },
    { 
        id: 11, 
        title: 'Clustering Model', 
        roles: 'Project Lead & Fullstack Web Developer', 
        date: 'Oktober 2025 - Desember 2025', 
        category: ['Data Analyst', 'All'],
        image: '/images/website11.jpg'
    },
    { 
        id: 12, 
        title: 'Tokoku', 
        roles: 'Project Lead & UI/UX Design', 
        date: 'Oktober 2025 - Desember 2025', 
        category: ['Data Analyst', 'All'],
        image: '/images/website13.jpg'
    },
    ];


    const ProjectCard = ({ project }) => (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 transform hover:shadow-xl transition duration-300">
            {/* Gambar Proyek */}
            <div className="h-48 w-full bg-gray-200 flex items-center justify-center relative">
                 <img 
                    className="w-full h-full object-cover" 
                    src={project.image} 
                    alt={project.title} 
                />
                {/* Teks judul gambar */}
                <div className='absolute top-2 left-2 text-white font-bold text-xs bg-black bg-opacity-40 p-1 rounded'>{project.title}</div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
                <p className="text-sm font-semibold text-gray-700 mb-1">{project.roles}</p>
                <p className="text-xs text-gray-500 mb-4">{project.date}</p>
                
                <p className="text-sm text-gray-600 mb-4">
                    {project.title} is a final project developed as a full-commerce platform with features such as product categorization, favorites, cart management, and seamless communication.
                </p>

                <button className="w-full bg-indigo-600 text-white font-semibold py-2 rounded hover:bg-indigo-700 transition duration-300 text-sm">
                    View Project
                </button>
            </div>
        </div>
    );


    const ProjectExperience = () => {
      const [activeCategory, setActiveCategory] = useState('All');
      
      const filteredProjects = activeCategory === 'All' 
        ? projectsData 
        : projectsData.filter(p => p.category.includes(activeCategory));

      return (
        <section id="project-experience" className="py-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Project Experience</h2>


          {/* Mini-Navbar Filter */}
          <div className="flex flex-wrap justify-center gap-2 p-2 bg-black rounded-xl shadow-inner max-w-6xl mx-auto mb-12 border border-gray-200">
            {projectCategories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-4 py-2 my-1 rounded-lg font-semibold transition-colors duration-300 text-sm whitespace-nowrap
                  ${
                    activeCategory === category
                      ? 'bg-black text-white shadow-md' 
                      : 'text-white hover:bg-gray-200'
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>


          {/* Daftar Proyek (Grid 3 Kolom) */}
          <div className="px-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
            
            {/* Tambahkan pesan jika tidak ada proyek */}
            {filteredProjects.length === 0 && (
                <p className="text-center text-gray-500 col-span-full">Tidak ada proyek"{activeCategory}" wkwk.</p>
            )}
          </div>
        </section>
      );
    };

    export default ProjectExperience;