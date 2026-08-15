// src/components/Testimonials.jsx - Without Avatar Images
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Zalseef Estates Team',
      role: 'Real Estate Company',
      content: 'The Zalseef Estates website has transformed our business operations. Properties now get more visibility, and the inquiry system makes it easy for potential buyers to reach us. The platform is professional, responsive, and has significantly increased our land sales inquiries.',
      rating: 5,
      project: 'Zalseef Estates',
      projectLink: 'https://zalseefestates.com'
    },
    {
      id: 2,
      name: 'School Administration',
      role: 'Kabambaija Bright Heart School',
      content: 'The web platform built for our school has transformed how we connect with parents and the community. Our enrollment inquiries have increased significantly, and parents appreciate the transparency in school activities, fee management, and the ability to stay connected with teachers.',
      rating: 5,
      project: 'Kabambaija Bright Heart School',
      projectLink: 'https://www.kabambaijabhs.com/'
    },
    {
      id: 3,
      name: 'Election Commission',
      role: 'Makerere Education Students Association (MESA)',
      content: 'The MESA Voting Portal provided a secure and transparent platform for the 2026 student elections. The system handled the voting process efficiently with real-time monitoring and results management. Students could cast their votes easily and trust the transparency of the process.',
      rating: 5,
      project: 'MESA E-Voting System',
      projectLink: 'https://mak-school-of-education-elections.vercel.app/'
    }
  ];

  const trustedOrganizations = ['Zalseef Estates', 'Kabambaija Bright Heart School', 'MESA', 'Community Projects'];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      cards.push(testimonials[index]);
    }
    return cards;
  };

  const StarIcon = ({ filled }) => (
    <svg 
      className={`w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 ${filled ? 'text-[#EFA83C]' : 'text-gray-200'}`} 
      fill="currentColor" 
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-[#FAF9F4] py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[#EFA83C] font-semibold text-[0.7rem] sm:text-sm tracking-wider mb-3 sm:mb-4 block">
            Clients Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E1E1E] font-serif italic leading-tight">
            The Impact of My Work:<br />
            <span className="text-[#EFA83C]">Client Testimonials</span>
          </h2>
        </div>

        <div className="mb-8 sm:mb-12">
          <p className="text-center text-[#9B9B92] text-[0.65rem] sm:text-xs uppercase tracking-wider font-semibold mb-4">Trusted through projects and collaborations with</p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {trustedOrganizations.map((organization) => (
              <span key={organization} className="px-3 sm:px-4 py-2 bg-white border border-[#E5E3DA] rounded-full text-[#1F3B2C] text-[0.65rem] sm:text-xs font-semibold">{organization}</span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {getVisibleCards().map((testimonial, idx) => (
              <div 
                key={`${testimonial.id}-${idx}`} 
                className="bg-white rounded-2xl p-5 sm:p-6 md:p-7 shadow-sm"
              >
                {/* Rating - Only stars, no avatar */}
                <div className="flex items-center gap-1 mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} filled={i < testimonial.rating} />
                  ))}
                  <span className="ml-1.5 text-[0.7rem] sm:text-sm font-semibold text-[#1F3B2C]">{testimonial.rating}.0</span>
                </div>

                <p className="text-gray-500 text-[0.7rem] sm:text-[0.75rem] md:text-[0.82rem] leading-relaxed mb-4 sm:mb-6 line-clamp-4">
                  "{testimonial.content}"
                </p>

                {/* Author - Name and Role only, NO avatar */}
                <div className="mb-3">
                  <p className="font-semibold text-[#1F3B2C] text-[0.7rem] sm:text-sm">{testimonial.name}</p>
                  <p className="text-gray-400 text-[0.6rem] sm:text-xs">{testimonial.role}</p>
                </div>

                {/* Project Name with link */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[#1F3B2C] text-[0.6rem] sm:text-xs font-medium">
                    {testimonial.project}
                  </span>
                  <a 
                    href={testimonial.projectLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#EFA83C] hover:text-[#d9952f] transition text-xs sm:text-sm"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 mt-8 sm:mt-10">
            <button 
              onClick={prevSlide}
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-[#1F3B2C] text-white flex items-center justify-center hover:bg-[#16291D] transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-[#EFA83C] text-white flex items-center justify-center hover:bg-[#d9952f] transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
