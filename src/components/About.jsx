// src/components/About.jsx
import { useState } from 'react';
import abbeyImage from '../assets/images/abbey.jpg';
import './About.css';

const journeyParagraphs = [
  <>My journey at Mbarara University of Science and Technology (MUST) began on <strong>September 22, 2023</strong>, when I enrolled as a Bachelor of Information Technology (BIT) student in the Faculty of Computing and Informatics. Walking through the university gates for the first time, I carried with me great excitement, ambition, and hope for the future. Like many first-year students, I was stepping into a new environment filled with unfamiliar faces, new responsibilities, and endless opportunities to learn and grow. Little did I know that the next three years would become one of the most defining chapters of my life.</>,
  <>My transition into university life was both exciting and challenging. Coming from a different learning environment, I had to adapt to a faster academic pace, independent learning, and practical problem-solving. Every lecture, laboratory session, assignment, and project became an opportunity to expand my knowledge and sharpen my skills. With time, the university became more than just a place to attend classes—it became my second home, where I discovered my potential and built the confidence to pursue my dreams.</>,
  <>Being a student in the Faculty of Computing and Informatics exposed me to the ever-evolving world of technology. Throughout my studies, I developed a strong passion for software engineering, artificial intelligence, cybersecurity, web development, and mobile application development. I realized that technology is not only about writing code but also about designing solutions that improve people's lives. This understanding motivated me to go beyond classroom learning by building practical systems and continuously exploring new technologies.</>,
  <>One of the greatest blessings throughout my journey has been the guidance of dedicated lecturers and mentors who invested their time and knowledge in my growth. I am particularly grateful to <strong>Mr. Mwavu Rogers</strong>, who served as my supervisor and mentor. His guidance, encouragement, and constructive feedback challenged me to think critically, improve my technical abilities, and approach every project with professionalism.</>,
  <>Throughout my years at MUST, I worked on several practical software projects that strengthened my technical and analytical skills. These included <strong>JobDecode</strong>, <strong>ZimbaLife</strong>, an Internship Management System for SsenksTechUg, a Firebase-based Device Tracker, a Flutter Campus Locator, and <strong>DevFollow MUST</strong>. Each project challenged me to learn new technologies, overcome obstacles, and apply classroom knowledge to real-world problems.</>,
  <>Beyond academics, university life taught me lessons that cannot be found in textbooks. I built meaningful friendships with classmates who became study partners, teammates, and lifelong friends. Together, we celebrated successes, overcame challenges, collaborated on projects, and supported one another during difficult moments.</>,
  <>One of the passions that grew stronger during my time at MUST was my desire to mentor and inspire fellow students. I developed a vision of helping students—especially those in the Faculty of Computing and Informatics—gain confidence in programming through practical, project-based learning. I believe that many students struggle not because they lack ability, but because they lack guidance and opportunities to practice.</>,
  <>Like every meaningful journey, my university experience was not without challenges. There were moments when academic workloads became demanding, projects seemed overwhelming, and balancing different responsibilities tested my resilience. Through determination, discipline, continuous learning, and unwavering faith in God, I learned to persevere and keep moving forward.</>,
  <>As I reflect on my three years at MUST, I realize that the university has given me much more than academic knowledge. It has equipped me with practical technical skills, strengthened my leadership abilities, improved my communication and teamwork, and shaped my character. More importantly, it has prepared me to confidently enter the professional world as a software engineer committed to solving real-world problems through technology.</>,
  <>As I complete this important chapter of my life, I carry with me unforgettable memories, valuable experiences, lasting friendships, and lessons that will continue to guide me throughout my career. I remain deeply grateful to my lecturers, mentors, classmates, friends, and family whose encouragement and support made this journey possible. Above all, I thank God for His faithfulness, guidance, and strength throughout every stage of my university life.</>,
  <>Looking ahead, I aspire to become a highly skilled software engineer with expertise in artificial intelligence and cybersecurity. I am committed to lifelong learning, innovation, and using technology to create meaningful solutions that positively impact communities. My journey at Mbarara University of Science and Technology has laid a strong foundation for that dream, and I will always be proud to call MUST a place that transformed my life.</>
];

export default function About() {
  const [showConfirm, setShowConfirm] = useState(false);

  const tags = [
    { text: 'UX/UI Design', bg: 'bg-[#F2A51A]', rotation: '-rotate-6' },
    { text: 'Mobile App Design', bg: 'bg-[#1D3B2B]', rotation: 'rotate-3' },
    { text: 'Website Design', bg: 'bg-[#F2A51A]', rotation: 'rotate-6' },
    { text: 'Design System', bg: 'bg-[#F2A51A]', rotation: '-rotate-3' },
    { text: 'Prototype', bg: 'bg-[#1D3B2B]', rotation: 'rotate-2' },
    { text: 'Dashboard', bg: 'bg-[#1D3B2B]', rotation: '-rotate-2' },
    { text: 'Wireframe Design', bg: 'bg-[#F2A51A]', rotation: 'rotate-4' }
  ];

  const handleDownloadClick = () => {
    setShowConfirm(true);
  };

  const handleConfirm = async () => {
    setShowConfirm(false);
    
    try {
      // Fetch the CV HTML file
      const response = await fetch('/Ssenkubuge-Abbey-CV.html');
      let html = await response.text();
      
      // Fetch the image and convert to Base64
      const imgResponse = await fetch('/images/abbey.jpg');
      const blob = await imgResponse.blob();
      const base64 = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(blob);
      });
      
      // Replace the image src with Base64
      html = html.replace('src="images/abbey.jpg"', `src="${base64}"`);
      
      // Create and download the updated HTML
      const blob2 = new Blob([html], { type: 'text/html' });
      const url = URL.createObjectURL(blob2);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Ssenkubuge-Abbey-CV.html';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
    } catch (error) {
      console.error('Error downloading CV:', error);
      alert('There was an error downloading the CV. Please try again.');
    }
  };

  const handleCancel = () => {
    setShowConfirm(false);
  };

  return (
    <>
    <section className="w-full bg-[#1D3B2B] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 relative" id="about">

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-sm w-full mx-4 shadow-2xl animate-fade-in">
            <div className="text-center mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#EFA83C]/20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EFA83C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1F3B2C] mb-2">Download CV?</h3>
              <p className="text-gray-500 text-xs sm:text-sm">Are you sure you want to download my CV?</p>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={handleCancel}
                className="flex-1 px-4 py-2.5 sm:py-3 rounded-xl border-2 border-[#E5E3DA] text-gray-600 font-semibold text-xs sm:text-sm hover:border-[#1F3B2C] hover:text-[#1F3B2C] transition"
              >
                No, Cancel
              </button>
              <button 
                onClick={handleConfirm}
                className="flex-1 px-4 py-2.5 sm:py-3 rounded-xl bg-[#1F3B2C] text-white font-semibold text-xs sm:text-sm hover:bg-[#16291D] transition"
              >
                Yes, Download
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">

        {/* Left Side - Image with Yellow Circle and Floating Tags */}
        <div className="flex justify-center">
          <div className="relative w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] flex items-center justify-center">

            {/* Yellow Background Circle */}
            <div className="absolute w-[240px] sm:w-[280px] md:w-[330px] lg:w-[360px] h-[240px] sm:h-[280px] md:h-[330px] lg:h-[360px] rounded-full bg-[#F2A51A]" />

            {/* Person Image */}
            <div className="absolute w-[240px] sm:w-[280px] md:w-[330px] lg:w-[360px] h-[240px] sm:h-[280px] md:h-[330px] lg:h-[360px] rounded-full overflow-hidden z-10">
              <img
                src={abbeyImage}
                alt="Ssenkubuge Abbey"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating Tags - CLUSTERED AT BOTTOM */}
            <div className="absolute bottom-[2%] sm:bottom-[3%] md:bottom-[5%] z-20 flex flex-wrap justify-center gap-x-1 gap-y-0.5 sm:gap-x-1.5 sm:gap-y-1 max-w-[200px] sm:max-w-[260px] md:max-w-[320px] px-2 sm:px-4">
              {tags.map((tag, index) => (
                <span 
                  key={index}
                  className={`px-1.5 sm:px-2.5 md:px-3.5 py-0.5 sm:py-1 md:py-1.5 rounded-full text-[7px] sm:text-[9px] md:text-[11px] font-semibold tracking-wide border border-white/20 shadow-md whitespace-nowrap ${tag.bg} text-white ${tag.rotation}`}
                >
                  {tag.text}
                </span>
              ))}
            </div>

          </div>
        </div>

        {/* Right Side - Content */}
        <div className="text-white text-center md:text-left">
          <span className="text-[#F2A51A] font-medium text-xs sm:text-sm tracking-wider">− About Me</span>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-4 sm:mb-6">
            Who is <span className="text-[#F2A51A] italic font-serif">Abbey Ssenkubuge</span>?
          </h3>

          <p className="text-[#A8B5AD] leading-relaxed text-sm sm:text-base mb-6 sm:mb-10">
            A software developer and IT specialist based in Mbarara, Uganda, focused on building
            useful web platforms, Android apps, and digital systems that solve real problems for
            real people.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 md:gap-8 lg:gap-14 mb-6 sm:mb-10">
            <div>
              <strong className="text-2xl sm:text-3xl md:text-4xl text-[#F2A51A] block font-bold">1+</strong>
              <span className="text-xs sm:text-sm text-[#A8B5AD]">Years Experience</span>
            </div>
            <div>
              <strong className="text-2xl sm:text-3xl md:text-4xl text-[#F2A51A] block font-bold">10+</strong>
              <span className="text-xs sm:text-sm text-[#A8B5AD]">Projects Completed</span>
            </div>
            <div>
              <strong className="text-2xl sm:text-3xl md:text-4xl text-[#F2A51A] block font-bold">5+</strong>
              <span className="text-xs sm:text-sm text-[#A8B5AD]">Industries Covered</span>
            </div>
          </div>

          {/* Button + Signature Row */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-5">
            <button 
              onClick={handleDownloadClick}
              className="inline-flex items-center rounded-full overflow-hidden bg-[#2A4A3A] border border-[#F2A51A]/40 hover:border-[#F2A51A]/70 transition cursor-pointer"
            >
              <span className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 text-white/90 text-xs sm:text-sm font-medium">
                Download CV
              </span>
              <span className="bg-[#F2A51A] px-2 py-2 flex items-center justify-center">
                <span className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-white flex items-center justify-center">
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#1D3B2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </span>
            </button>

            {/* Signature */}
            <span className="text-[#F2A51A] text-base sm:text-lg md:text-xl tracking-wide" style={{ fontFamily: "'Dancing Script', 'Great Vibes', 'Brush Script MT', cursive" }}>
              Abbey Ssenkubuge
            </span>
          </div>
        </div>

      </div>
    </section>

    <section className="must-journey" aria-labelledby="must-journey-title">
      <div className="notebook-page">
        <div className="notebook-holes" aria-hidden="true">
          {Array.from({ length: 8 }, (_, index) => <span key={index} />)}
        </div>
        <div className="notebook-content">
          <div className="notebook-heading">
            <span className="quote-mark" aria-hidden="true">“</span>
            <h2 id="must-journey-title">My Three(3) Years Journey at Mbarara University of Science and Technology (MUST)</h2>
          </div>
          <div className="journey-copy">
            {journeyParagraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </div>
          <div className="journey-ending">
            <p>“Knowledge, Innovation, and Excellence.”</p>
            <p>“For God and My Country.”</p>
            <div className="journey-signature">
              <div>
                <strong>Abbey Ssenkubuge</strong>
                <span>Bachelor of Information Technology</span>
              </div>
              <div className="signature-photo"><img src={abbeyImage} alt="Abbey Ssenkubuge" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
