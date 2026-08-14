import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

const projectCategories = [
  'All',
  'Web Development',
  'Data Science & Analyst',
  'Project Manager',
  'UI/UX Design',
  'Mobile App',
  'Machine Learning',
  'Robotics'
];

const projectsData = [
  {
    id: 1,
    title: 'Dtastyum',
    roles: 'Project Lead & Fullstack Web Developer',
    date: 'Oktober 2024 - Desember 2024',
    category: ['Web Development', 'All', 'Project Manager'],
    techStack: ['PHP', 'JavaScript', 'Bootstrap', 'MySQL'],
    image: '/images/dtastyum.png',
    path: '/project/dtastyum',
    description: 'A culinary web platform integrating a responsive frontend with interactive and dynamic food recipe search functionality.'
  },
  {
    id: 2,
    title: 'Credit Card Analysis Report',
    roles: 'Data Analyst',
    date: 'November 2025 - Desember 2025',
    category: ['Data Science & Analyst', 'All'],
    techStack: ['Excel', 'Data Visualization', 'Looker Studio'],
    image: '/images/data-analyst2.png',
    path: '/project/creditCardAnalysis',
    description: 'A credit card transaction data analysis report and customer segmentation identifying spending patterns and credit utilization ratios.'
  },
  {
    id: 3,
    title: 'GreenBucks',
    roles: 'Project Lead & Flutter Developer',
    date: 'November 2024 - Desember 2024',
    category: ['Mobile App', 'All', 'Project Manager'],
    techStack: ['Flutter', 'Dart', 'Android Studio'],
    image: '/images/GreenBucks.png',
    path: '/project/greenbucks',
    description: 'A mobile app for personal finance management and eco-friendly habit tracking, helping users log transactions and adopt a sustainable lifestyle.'
  },
  {
    id: 4,
    title: 'Market Basket Analysis',
    roles: 'Data Analyst',
    date: 'Desember 2025 - Januari 2026',
    category: ['Data Science & Analyst', 'All'],
    techStack: ['Python', 'Apriori Algorithm', 'Looker Studio'],
    image: '/images/market-basket-analysis.png',
    path: '/project/marketBasket',
    description: 'An association rule analysis of retail transactions using the Apriori algorithm to discover product combination patterns and cross-selling strategies.'
  },
  {
    id: 5,
    title: 'SIMKES',
    roles: 'Project Lead & Web Developer',
    date: 'Oktober 2025 - Desember 2025',
    category: ['Web Development', 'All', 'Project Manager'],
    techStack: ['React Js', 'MongoDB', 'Tailwind', 'Node Js'],
    image: '/images/simkes.png',
    path: '/project/simkes',
    description: 'A web-based Health Management Information System built to streamline electronic medical records, service scheduling, and patient data management.'
  },
  {
    id: 6,
    title: 'User Retention Analysis',
    roles: 'Data Analyst',
    date: 'November 2025 - Desember 2025',
    category: ['Data Science & Analyst', 'All'],
    techStack: ['Python', 'Excel'],
    image: '/images/user-retention-analysis.png',
    path: '/project/userRetention',
    description: 'A cohort and user retention analysis measuring monthly/daily active user engagement (MAU/DAU) and identifying key churn drivers.'
  },
  {
    id: 7,
    title: 'Retail Sales Transaction Analysis Dashboard',
    roles: 'Data Analyst',
    date: 'Oktober 2025 - November 2025',
    category: ['Data Science & Analyst', 'All'],
    techStack: ['Looker Studio', 'Data Visualization', 'Excel'],
    image: '/images/data-analyst1.png',
    path: '/project/retailSales',
    description: 'An interactive data visualization dashboard tracking retail sales performance, revenue trends, product contributions, and key business regions.'
  },
  {
    id: 8,
    title: 'NobaRek',
    roles: 'Project Lead & Mobile App',
    date: 'Desember 2025 - Januari 2026',
    category: ['Mobile App', 'All', 'Project Manager'],
    techStack: ['Kotlin', 'Android Studio', 'Jetpack Compose'],
    image: '/images/NobaRek2.png',
    path: '/project/NobaRek',
    description: 'A modern Android mobile app for movie recommendations and interactive watch party features built using Kotlin and Jetpack Compose.'
  },
  {
    id: 9,
    title: 'Cheaper',
    roles: 'UI/UX Design',
    date: 'November 2023',
    category: ['UI/UX Design', 'All'],
    techStack: ['Figma', 'Wireframing', 'Prototyping', 'App Design'],
    image: '/images/cheaper.png',
    path: '/project/cheaper',
    description: 'A price comparison UI/UX design and app prototype crafted to help users discover the best budget deals across shopping platforms.'
  },
  {
    id: 10,
    title: 'Supermarket Sales Analysis Dashboard',
    roles: 'Data Analyst',
    date: 'Juli 2025 - Agustus 2025',
    category: ['Data Science & Analyst', 'All'],
    techStack: ['Excel', 'Power Bi', 'Data Visualization'],
    image: '/images/data-analyst3.png',
    path: '/project/supermarketSales',
    description: 'A business analytics dashboard evaluating supermarket product line performance, customer payment methods, and satisfaction ratings.'
  },
  {
    id: 11,
    title: 'Eatzy',
    roles: 'Project Lead & Entrepreneur',
    date: 'September 2025 - Februari 2026',
    category: ['All', 'Project Manager', 'Web Development'],
    techStack: ['Next Js', 'Tailwind', 'JavaScript'],
    image: '/images/eatzy.png',
    path: '/project/eatzy',
    description: 'A culinary business web platform and marketing initiative designed to support food business operations and growth.'
  },
  {
    id: 12,
    title: 'Panen Fresh',
    roles: 'UI/UX Design',
    date: 'Oktober 2024 - November 2024',
    category: ['UI/UX Design', 'All'],
    techStack: ['Figma', 'Design System', 'UI/UX'],
    image: '/images/panenfresh.png',
    path: '/project/panenfresh',
    description: 'A fresh grocery e-commerce UI/UX design and design system featuring intuitive checkout flows and consistent visual design.'
  },
  {
    id: 13,
    title: 'Sportware',
    roles: 'Project Lead & Fullstack Web Developer',
    date: 'April 2025 - Juli 2025',
    category: ['Web Development', 'All', 'Project Manager'],
    techStack: ['PHP', 'JavaScript', 'Bootstrap', 'MySQL'],
    image: '/images/sportware.png',
    path: '/project/sportware',
    description: 'A modern sports equipment e-commerce web platform featuring dynamic product catalogs, shopping cart management, and online transactions.'
  },
  {
    id: 14,
    title: 'Covid 19 Indonesia Analysis Dashboard',
    roles: 'Data Analyst',
    date: 'Oktober 2024 - November 2024',
    category: ['All', 'Data Science & Analyst'],
    techStack: ['Excel', 'Data Visualization'],
    image: '/images/covid19drp.png',
    path: '/project/covid19Indonesia',
    description: 'A data visualization dashboard tracking Covid-19 case trends across regions in Indonesia, recovery curves, and risk metrics.'
  },
  {
    id: 15,
    title: 'User Segmentation Analysis',
    roles: 'Data Analyst',
    date: 'Januari 2026 - Februari 2026',
    category: ['All', 'Data Science & Analyst'],
    techStack: ['Python', 'K-Means', 'Scikit-Learn'],
    image: '/images/user-segmentation.png',
    path: '/project/userSegmentation',
    description: 'A customer segmentation analysis utilizing K-Means clustering to group user profiles based on demographic and behavioral data.'
  },
  {
    id: 16,
    title: 'Breast Cancer Recurrence Prediction',
    roles: 'Project Lead & Machine Learning',
    date: 'Juni 2026 - Juli 2026',
    category: ['All', 'Data Science & Analyst', 'Machine Learning', 'Project Manager'],
    techStack: ['Python', 'Scikit-Learn', 'Streamlit'],
    image: '/images/breast-cancer-prediction.png',
    path: '/project/breastCancerPrediction',
    description: 'An end-to-end machine learning pipeline predicting breast cancer recurrence risk based on clinical patient features and model evaluation.'
  },
  {
    id: 17,
    title: 'WorkWell - Digital Wellbeing & Productivity',
    roles: 'Project Lead & Fullstack Web Developer',
    date: 'Mei 2026 - Juli 2026',
    category: ['All', 'Web Development', 'Project Manager'],
    techStack: ['React Js', 'Next Js', 'Tailwind', 'Node.js'],
    image: '/images/workwell.png',
    path: '/project/workwell',
    description: 'A digital wellbeing and productivity web app featuring habit tracking, break reminders, and workload monitoring for employee wellness.'
  },
  {
    id: 18,
    title: 'STEM SDGs 3 & 4 Project Documentation Website',
    roles: 'Web Developer',
    date: 'April 2026 - Juli 2026',
    category: ['Web Development', 'All'],
    techStack: ['React Js', 'Next Js', 'Tailwind', 'Node.js'],
    image: '/images/stem-sdgs.png',
    path: '/project/stem-sdgs',
    description: 'An interactive documentation website for STEM projects supporting UN SDGs Goal 3 (Good Health) and Goal 4 (Quality Education).'
  },
  {
    id: 19,
    title: 'LaporWarga',
    roles: 'Fullstack Web Developer',
    date: 'Mei 2026 - Juni 2026',
    category: ['Web Development', 'All'],
    techStack: ['Laravel', 'Blade', 'Tailwind', 'MySQL'],
    image: '/images/laporwarga.png',
    path: '/project/laporwarga',
    description: 'A digital citizen reporting web platform enabling residents to submit complaints and feedback regarding public infrastructure and community issues.'
  },
  {
    id: 20,
    title: 'Cineverse - Movie Web',
    roles: 'Fullstack Web Developer',
    date: 'Juli 2026 - Agustus 2026',
    category: ['Web Development', 'All'],
    techStack: ['Laravel', 'Blade', 'Tailwind', 'MySQL'],
    image: '/images/cineverse.png',
    path: '/project/cineverse',
    description: 'An interactive movie discovery and recommendation web platform displaying detailed movie information, user reviews, and ratings.'
  },
];

const ProjectCard = ({ project }) => (
  <div className="group bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 transform hover:-translate-y-2 hover:shadow-2xl hover:ring-1 hover:ring-indigo-500/20 transition-all duration-300 flex flex-col h-full">
    {/* Gambar Proyek */}
    <div className="h-56 w-full bg-gray-200 flex items-center justify-center relative overflow-hidden">
      <img
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        src={project.image}
        alt={project.title}
        onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/400x300?text=No+Image" }}
      />
      {/* Overlay Title */}
      <div className='absolute top-2 left-2 text-white font-bold text-xs bg-black/60 px-2 py-1 rounded backdrop-blur-sm'>
        {project.title}
      </div>
    </div>

    <div className="p-5 flex flex-col flex-grow">
      {/* Judul */}
      <h3 className="text-xl font-bold text-gray-900 mb-1 line-clamp-1 group-hover:text-indigo-600 transition-colors duration-300">{project.title}</h3>
      <p className="text-sm font-semibold text-indigo-600 mb-1 line-clamp-1">{project.roles}</p>
      <p className="text-xs text-gray-500 mb-3">{project.date}</p>

      {/* Tech Stack Badges */}
      {project.techStack && project.techStack.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="text-[11px] font-medium bg-slate-100 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 border border-slate-200/80 px-2 py-0.5 rounded-md transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
        {project.description}
      </p>

      <Link
        to="/under-construction"
        /* hover button */
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

        <ScrollReveal animation="fade-up" duration={800}>
          <div className="flex flex-col items-center justify-center gap-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
              Project Experience
            </h2>
            <p className="text-slate-500 font-medium max-w-6xl mx-auto mb-10 leading-relaxed text-sm sm:text-base text-center">
              An overview of academic and personal projects focused on applying concepts, solving problems, and delivering practical outcomes.
            </p>
          </div>
        </ScrollReveal>


        <ScrollReveal animation="fade-up" duration={850} delay={150}>
          <div className="flex justify-center mb-12">
            <div className="inline-flex overflow-x-auto gap-1.5 sm:gap-2 p-1.5 sm:p-2 bg-zinc-900/95 backdrop-blur-md rounded-full border border-gray-800 shadow-2xl max-w-full no-scrollbar ring-1 ring-white/5">
              {projectCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`
                        px-3 sm:px-4 py-1.5 rounded-full font-medium text-[11px] sm:text-xs transition-all duration-300 whitespace-nowrap
                        ${activeCategory === category
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
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} animation="fade-up" delay={(index % 4) * 150} duration={1000}>
              <ProjectCard project={project} />
            </ScrollReveal>
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