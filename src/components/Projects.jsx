// src/components/Projects.jsx
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const scrollRef = useRef(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile App' },
    { id: 'training', label: 'Training' },
    { id: 'systems', label: 'Systems' }
  ];

  const projects = [
    {
      id: 1,
      title: 'DevFollow 2026',
      image: '/images/devfollow.png',
      tags: ['JavaScript', 'HTML/CSS', 'Firebase'],
      extraTags: 4,
      category: 'web',
      year: '2026',
      link: 'https://devfellowmust.web.app'
    },
    {
      id: 2,
      title: 'CivicWatch 2026',
      image: '/images/civicwatch-app.png',
      tags: ['Java', 'Firebase', 'Google Maps API'],
      extraTags: 4,
      category: 'systems',
      year: '2026',
      link: 'https://github.com/MusumbaAbeljr055/civicwatch'
    },
    {
      id: 3,
      title: 'Python Bootcamp 2025',
      image: '/images/control.png',
      tags: ['Python', 'Web Development', 'Data Science'],
      extraTags: 5,
      category: 'training',
      year: '2025',
      link: '#'
    },
    {
      id: 4,
      title: 'Zalseef Estates 2026',
      image: '/images/zalseef.jpg',
      tags: ['HTML/CSS', 'JavaScript', 'Responsive Design'],
      extraTags: 3,
      category: 'web',
      year: '2026',
      link: 'https://zalseefestates.com'
    },
    {
      id: 5,
      title: 'Kabambaija Bright Heart School',
      image: '/images/loop.png',
      tags: ['HTML/CSS', 'JavaScript', 'UI/UX', 'School Management'],
      extraTags: 2,
      category: 'web',
      year: '2025',
      link: 'https://www.kabambaijabhs.com/'
    },
    {
      id: 6,
      title: 'E-Voting System 2026',
      image: '/images/mesa.jpg',
      tags: ['PHP', 'MySQL', 'Bootstrap'],
      extraTags: 4,
      category: 'systems',
      year: '2026',
      link: 'https://mak-school-of-education-elections.vercel.app/'
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -280, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 280, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-[#FAF9F4] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12" id="projects">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="max-w-md">
            <span className="text-[#EFA83C] font-semibold text-[0.7rem] sm:text-sm tracking-wider mb-3 sm:mb-4 block">
              Projects
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E1E1E] font-serif italic leading-tight mb-3 sm:mb-4">
              My Latest <span className="text-[#EFA83C]">Projects</span>
            </h2>
            <p className="text-gray-500 text-[0.7rem] sm:text-[0.82rem] leading-relaxed mb-2 sm:mb-3">
              A selected set of recent work across learning platforms, civic tools, community products, and business websites.
            </p>
            <span className="text-[#EFA83C] font-bold text-[0.65rem] sm:text-sm">Since 2025</span>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3 lg:pt-16">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full text-[0.65rem] sm:text-[0.75rem] md:text-[0.82rem] font-semibold border-2 transition ${
                  activeFilter === filter.id
                    ? 'bg-[#1F3B2C] text-white border-[#1F3B2C]'
                    : 'bg-transparent border-[#E5E3DA] text-gray-500 hover:border-[#1F3B2C] hover:text-[#1F3B2C]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects - Circular Design with Hover Website Icon */}
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex gap-6 sm:gap-8 md:gap-10 overflow-x-auto scrollbar-hide pb-4 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="flex flex-col items-center group shrink-0 w-[140px] sm:w-[160px] md:w-[180px]"
              >
                {/* Circular Image */}
                <div className="relative w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] rounded-full overflow-hidden bg-[#E8E8E3] shadow-md hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"%3E%3Crect fill="%23f0f0f0" width="200" height="200"/%3E%3Ctext x="100" y="100" font-family="Arial" font-size="14" fill="%23999" text-anchor="middle"%3ENo Image%3C/text%3E%3C/svg%3E';
                    }}
                  />
                  
                  {/* Hover Overlay - Hidden by default, shows on hover */}
                  <div className="absolute inset-0 bg-[#1F3B2C]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-full">
                    <div className="flex flex-col items-center gap-2">
                      {/* Website Icon Button */}
                      {project.link && project.link !== '#' ? (
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#EFA83C] text-white flex items-center justify-center hover:bg-[#d9952f] transition transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-lg"
                          aria-label={`Visit ${project.title} website`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <i className="fa-solid fa-globe text-lg sm:text-xl md:text-2xl"></i>
                        </a>
                      ) : (
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gray-400 text-white flex items-center justify-center">
                          <i className="fa-solid fa-globe text-lg sm:text-xl md:text-2xl"></i>
                        </div>
                      )}
                      <span className="text-white text-[0.5rem] sm:text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Visit Site
                      </span>
                    </div>
                  </div>

                  {/* Year badge - always visible */}
                  <span className="absolute top-2 right-2 bg-[#1F3B2C] text-white text-[0.5rem] sm:text-[0.55rem] font-bold px-2 py-0.5 rounded-full z-10">
                    {project.year}
                  </span>
                </div>

                {/* Project Title */}
                <Link 
                  to={`/projects/${project.id}`}
                  className="text-[#1F3B2C] font-bold text-xs sm:text-sm md:text-base text-center mt-3 mb-2 line-clamp-1 hover:text-[#EFA83C] transition"
                >
                  {project.title}
                </Link>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-1">
                  {project.tags.slice(0, 2).map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-0.5 bg-white text-gray-600 text-[0.45rem] sm:text-[0.5rem] md:text-[0.55rem] font-medium rounded-full border border-[#E5E3DA]"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 2 && (
                    <span className="px-2 py-0.5 bg-white text-gray-600 text-[0.45rem] sm:text-[0.5rem] md:text-[0.55rem] font-medium rounded-full border border-[#E5E3DA]">
                      +{project.extraTags}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-3 mt-6 sm:mt-8">
          <button 
            onClick={scrollLeft}
            className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-[#1F3B2C] text-white flex items-center justify-center hover:bg-[#16291D] transition"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>
            </svg>
          </button>
          <button 
            onClick={scrollRight}
            className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-[#EFA83C] text-white flex items-center justify-center hover:bg-[#d9952f] transition"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
