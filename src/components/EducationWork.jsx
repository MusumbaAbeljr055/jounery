// src/components/EducationWork.jsx
import React from 'react';

export default function EducationWork() {
  const education = [
    {
      year: '2023 - 2026',
      school: 'Mbarara University of Science and Technology (MUST)',
      degree: 'Bachelor of Information Technology',
      description: 'Focused on software development, database systems, networking, and IT project management.'
    },
    {
      year: '2020 - 2022',
      school: 'SLAB',
      degree: 'Uganda Advanced Certificate of Education (UACE)',
      description: 'Completed A-level studies.'
    },
    {
      year: '2016 - 2019',
      school: 'SLAB',
      degree: 'Uganda Certificate of Education (UCE)',
      description: 'Completed O-level studies.'
    }
  ];

  const workExperience = [
    {
      year: '2024 - Present',
      company: 'Freelance Software Developer',
      role: 'Full Stack Developer',
      description: 'Building web platforms, Android apps, and digital systems for various clients including Kabambaija Bright Heart School and Zalseef Estates.'
    },
    {
      year: '2023 - 2024',
      company: 'MUST Innovation Hub',
      role: 'Student Developer',
      description: 'Worked on community projects, developed the DevFollow platform for MUST students, and collaborated on various tech initiatives.'
    },
    {
      year: '2022 - 2023',
      company: 'Self-Employed / Freelance',
      role: 'IT Consultant & Developer',
      description: 'Provided IT solutions, website development, and technical support to small businesses and startups.'
    }
  ];

  return (
    <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#FAF9F4] min-h-screen" id="education">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[#EFA83C] font-semibold text-[0.7rem] sm:text-sm tracking-wider mb-3 sm:mb-4 block">
            Education & Work
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E1E1E] font-serif italic leading-tight">
            My <span className="text-[#EFA83C]">Academic</span> and<br />
            <span className="text-[#EFA83C]">Professional</span> Journey
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-6">

          <div className="bg-[#F0EFEA] rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-[#EFA83C] text-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1F3B2C]">Education</h3>
            </div>

            <div className="space-y-5 sm:space-y-6">
              {education.map((item, index) => (
                <div key={index} className="border-l-2 border-[#D5D5D0] pl-4 sm:pl-5 relative">
                  <span className="text-gray-400 text-[0.6rem] sm:text-xs font-medium">{item.year}</span>
                  <h4 className="text-[#1F3B2C] font-bold text-[0.8rem] sm:text-[0.9rem] md:text-[0.95rem] mt-1">{item.school}</h4>
                  <p className="text-gray-500 text-[0.7rem] sm:text-[0.75rem] md:text-[0.82rem] mt-0.5">{item.degree}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#F0EFEA] rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-[#EFA83C] text-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1F3B2C]">Work Experience</h3>
            </div>

            <div className="space-y-5 sm:space-y-6">
              {workExperience.map((item, index) => (
                <div key={index} className="border-l-2 border-[#D5D5D0] pl-4 sm:pl-5 relative">
                  <span className="text-gray-400 text-[0.6rem] sm:text-xs font-medium">{item.year}</span>
                  <h4 className="text-[#1F3B2C] font-bold text-[0.8rem] sm:text-[0.9rem] md:text-[0.95rem] mt-1">{item.company}</h4>
                  <p className="text-gray-500 text-[0.7rem] sm:text-[0.75rem] md:text-[0.82rem] mt-0.5">{item.role}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
