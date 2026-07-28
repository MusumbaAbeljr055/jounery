// src/components/Home.jsx
import Services from './Services';
import Skills from './Skills';
import Projects from './Projects';
import EducationWork from './EducationWork';
import Contact from './Contact';
import FAQ from './FAQ';
import Testimonials from './Testimonials';
import abbeyImage from '../assets/images/abbey.jpg';

export default function Home() {
  const tickerItems = ['App Design', 'Website Design', 'Dashboard', 'Wireframe', 'UI/UX Design', 'Mobile App', 'Prototype'];

  return (
    <div className="home-page bg-white min-h-screen font-sans text-[#1E1E1E]">

      <section className="pt-12 sm:pt-16 pb-0 px-4 sm:px-6 md:px-16 overflow-hidden" id="home">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8 items-start">

          <div className="order-2 md:order-1 pt-4 sm:pt-8">
            <div className="inline-block relative mb-4 sm:mb-6">
              <span className="absolute -top-[3px] -left-[3px] w-2 h-2 border-t-2 border-l-2 border-[#1F3B2C]"></span>
              <span className="absolute -top-[3px] -right-[3px] w-2 h-2 border-t-2 border-r-2 border-[#1F3B2C]"></span>
              <span className="absolute -bottom-[3px] -left-[3px] w-2 h-2 border-b-2 border-l-2 border-[#1F3B2C]"></span>
              <span className="absolute -bottom-[3px] -right-[3px] w-2 h-2 border-b-2 border-r-2 border-[#1F3B2C]"></span>
              <div className="border border-dashed border-[#1F3B2C] px-3 py-1 text-[10px] sm:text-xs font-medium text-[#1F3B2C]">
                Hello There!
              </div>
            </div>

            <h1 className="mb-4 sm:mb-6">
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-[3.6rem] leading-[1.15]">
                <span className="font-bold text-[#1E1E1E]">I'm </span>
                <span 
                  className="text-[#EFA83C] italic underline decoration-[#EFA83C] underline-offset-4 decoration-1"
                  style={{ fontFamily: "'Playfair Display', 'Georgia', 'Times New Roman', serif" }}
                >
                  Abbey Ssenkubuge
                </span>,
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-[3.6rem] leading-[1.15] mt-1 sm:mt-2">
                <span className="font-bold text-[#1E1E1E]">Software </span>
                <span 
                  className="text-[#EFA83C] italic underline decoration-[#EFA83C] underline-offset-4 decoration-1"
                  style={{ fontFamily: "'Playfair Display', 'Georgia', 'Times New Roman', serif" }}
                >
                  Developer
                </span>
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-[3.6rem] leading-[1.15] mt-1 sm:mt-2 font-bold text-[#1E1E1E]">
                Based in Uganda.
              </span>
            </h1>

            <p className="text-[#9B9B92] text-xs sm:text-sm leading-relaxed mb-6 sm:mb-10 max-w-[380px]">
              I'm an experienced Software Developer with 1+ years in the field, collaborating 
              with various companies and startups.
            </p>

            {/* Fixed Buttons - Proper inline sizing */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4">
              <a 
                href="#projects" 
                className="inline-flex items-center bg-[#1F3B2C] text-white pl-3 sm:pl-4 md:pl-5 pr-0.5 sm:pr-1 py-1 rounded-full font-semibold text-[10px] sm:text-xs md:text-sm hover:bg-[#16291D] transition shrink-0"
              >
                <span className="mr-1.5 sm:mr-2 whitespace-nowrap">View My Portfolio</span>
                <span className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-[#EFA83C] flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </a>

              <a 
                href="#contact" 
                className="inline-flex items-center border border-[#1E1E1E] text-[#1E1E1E] px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full font-medium text-[10px] sm:text-xs md:text-sm hover:bg-[#1F3B2C] hover:text-white hover:border-[#1F3B2C] transition shrink-0"
              >
                Hire Me
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center relative h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
            <div className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] h-full flex items-end justify-center">

              <svg className="absolute left-[5%] top-[15%] w-[40px] sm:w-[60px] h-[40px] sm:h-[60px] z-0 opacity-40" viewBox="0 0 100 100" fill="none">
                <path d="M80 10 Q 40 40, 70 90" stroke="#1F3B2C" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3"/>
              </svg>

              <div className="absolute w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px] rounded-full bg-[#F2A51A] left-[10%] md:left-[15%] bottom-[20%] md:bottom-[15%]" />

              <div className="relative z-10 h-[260px] sm:h-[320px] md:h-[360px] lg:h-[400px] w-auto">
                <img
                  src={abbeyImage}
                  alt="Ssenkubuge Abbey"
                  className="h-full w-auto object-contain"
                />
              </div>

              <div className="absolute bottom-[50%] left-[45%] z-20">
                <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5" viewBox="0 0 12 12" fill="none">
                  <path d="M0 12L12 12L6 0L0 12Z" fill="#F2A51A"/>
                </svg>
              </div>

              <div className="absolute bottom-[25%] right-[0%] md:right-[-5%] z-20">
                <span className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-[#F2A51A] text-white text-[8px] sm:text-xs font-semibold shadow-sm">
                  UI/UX Designer
                </span>
              </div>

              <div className="absolute bottom-[15%] left-[5%] md:left-[10%] z-20 flex items-center gap-0">
                <svg className="w-2 h-2 sm:w-3 sm:h-3 text-[#1F3B2C] transform rotate-45" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L10.59 3.41 16.17 9H2v2h14.17l-5.58 5.59L12 18l8-8z"/>
                </svg>
                <span className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-[#1F3B2C] text-white text-[8px] sm:text-xs font-semibold shadow-sm -ml-1">
                  Product Designer
                </span>
              </div>

              <div className="absolute top-[20%] right-[15%] md:right-[10%] z-20 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px]">
                <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                  <defs>
                    <path id="circlePath" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"/>
                  </defs>
                  <circle cx="50" cy="50" r="48" fill="#1F3B2C" stroke="#F2A51A" strokeWidth="2"/>
                  <text fill="#F2A51A" fontSize="9" fontWeight="bold" letterSpacing="2">
                    <textPath href="#circlePath">
                      HIRE ME • HIRE ME •
                    </textPath>
                  </text>
                  <circle cx="50" cy="50" r="12" fill="#F2A51A"/>
                  <path d="M44 50h12M50 44l6 6-6 6" stroke="#1F3B2C" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

            </div>
          </div>

        </div>
      </section>

      <section className="relative w-full overflow-hidden mt-4 sm:mt-6">
        <div className="relative" style={{ backgroundColor: '#F2A51A' }}>
          <div className="absolute bottom-0 left-0 right-0 h-2" style={{ backgroundColor: '#1F3B2C' }}></div>
          <div className="absolute -top-3 sm:-top-4 left-0 right-0 h-6 sm:h-8" style={{ backgroundColor: '#F2A51A', borderRadius: '50% 50% 0 0 / 100% 100% 0 0' }}></div>

          <div className="flex animate-marquee whitespace-nowrap py-2 sm:py-3 pt-4 sm:pt-5 pb-3 sm:pb-4">
            {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
              <div key={i} className="flex items-center mx-3 sm:mx-4">
                <span className="text-[#1F3B2C] font-semibold text-[10px] sm:text-sm">{item}</span>
                <span className="ml-3 sm:ml-4 text-[#1F3B2C] text-sm sm:text-lg">✻</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Services />
      <Skills />
      <Projects />
      <EducationWork />
      <Testimonials />
      <Contact />
      <FAQ />
    </div>
  );
}
