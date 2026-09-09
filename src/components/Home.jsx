// src/components/Home.jsx
import Services from './Services';
import Skills from './Skills';
import Projects from './Projects';
import EducationWork from './EducationWork';
import Contact from './Contact';
import FAQ from './FAQ';
import Testimonials from './Testimonials';
import WorkProcess from './WorkProcess';
import Availability from './Availability';
import Videos from './Videos';
import abbeyImage from '../assets/images/abbey.jpg';

export default function Home() {
  const tickerItems = ['App Design', 'Website Design', 'Dashboard', 'Wireframe', 'UI/UX Design', 'Mobile App', 'Prototype'];

  return (
    <div className="home-page bg-white min-h-screen font-sans text-[#1E1E1E]">

      <section className="hero-background relative flex min-h-[600px] items-center justify-center overflow-hidden bg-white px-4 py-16 text-[#1E1E1E] sm:min-h-[680px] sm:px-6 md:min-h-[740px] md:px-12" id="home">
        <div className="relative z-30 mx-auto w-full max-w-7xl text-center">

          <div className="relative z-30 motion-slide-left mx-auto flex max-w-5xl flex-col items-center px-1 py-5 text-center sm:px-4">
            <div className="inline-flex items-center gap-2 mb-5 sm:mb-7">
              <span className="w-2 h-2 rounded-full bg-[#58D68D] animate-pulse"></span>
              <span className="text-[#1F3B2C] text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em]">Available for new opportunities</span>
            </div>

            <h1 className="mb-4 max-w-5xl sm:mb-6">
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-[3.6rem] leading-[1.08]">
                <span className="font-bold text-[#1E1E1E]">I build </span>
                <span 
                  className="text-[#EFA83C] italic underline decoration-[#EFA83C] underline-offset-4 decoration-1"
                  style={{ fontFamily: "'Playfair Display', 'Georgia', 'Times New Roman', serif" }}
                >
                  digital solutions
                </span>
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-[3.6rem] leading-[1.08] mt-1 sm:mt-2">
                <span className="font-bold text-[#1E1E1E]">for people and </span>
                <span 
                  className="text-[#EFA83C] italic underline decoration-[#EFA83C] underline-offset-4 decoration-1"
                  style={{ fontFamily: "'Playfair Display', 'Georgia', 'Times New Roman', serif" }}
                >
                  organizations
                </span>
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-[3.6rem] leading-[1.08] mt-1 sm:mt-2 font-bold text-[#1E1E1E]">
                from Uganda.
              </span>
            </h1>

            <p className="mb-5 max-w-[470px] text-xs leading-relaxed text-[#6B6B62] sm:mb-7 sm:text-sm">
              I&apos;m Abbey Ssenkubuge, an IT specialist and software developer helping businesses and teams turn ideas, data, and daily tasks into useful digital experiences.
            </p>

            <div className="mb-6 flex flex-wrap justify-center gap-2 sm:mb-8">
              {['Web Development', 'Data Analysis', 'Virtual Assistant Support'].map((service) => (
                <span key={service} className="px-3 py-1.5 rounded-full bg-[#F8F9F4] border border-[#E5E3DA] text-[#1F3B2C] text-[9px] sm:text-[10px] font-semibold">{service}</span>
              ))}
            </div>

            {/* Fixed Buttons - Proper inline sizing */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4">
              <a 
                href="#projects" 
                className="reference-button inline-flex items-center bg-[#1F3B2C] text-white pl-3 sm:pl-4 md:pl-5 pr-0.5 sm:pr-1 py-1 rounded-full font-semibold text-[10px] sm:text-xs md:text-sm hover:bg-[#16291D] transition shrink-0"
              >
                <span className="mr-1.5 sm:mr-2 whitespace-nowrap">Explore My Work</span>
                <span className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-[#EFA83C] flex items-center justify-center">
                  <svg className="button-icon-shift w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </a>

              <a 
                href="#contact" 
                className="reference-button reference-button--secondary inline-flex items-center border border-[#1E1E1E] text-[#1E1E1E] px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full font-medium text-[10px] sm:text-xs md:text-sm hover:bg-[#1F3B2C] hover:text-white hover:border-[#1F3B2C] transition shrink-0"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>

          <div className="pointer-events-none absolute left-[-6%] top-1/2 z-10 flex h-[612px] w-[48%] -translate-y-1/2 justify-start opacity-[0.14] sm:left-[-4%] sm:opacity-100 md:left-[-2%]">
            <div className="relative flex h-full w-full max-w-none items-end justify-start">

              <svg className="hidden" viewBox="0 0 100 100" fill="none">
                <path d="M80 10 Q 40 40, 70 90" stroke="#1F3B2C" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3"/>
              </svg>

              <div className="relative z-10 h-full w-auto">
                <img
                  src={abbeyImage}
                  alt="Ssenkubuge Abbey"
                  className="h-full w-auto object-contain"
                />
              </div>

              <div className="hidden">
                <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5" viewBox="0 0 12 12" fill="none">
                  <path d="M0 12L12 12L6 0L0 12Z" fill="#F2A51A"/>
                </svg>
              </div>

              <div className="hidden">
                <span className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-[#F2A51A] text-white text-[8px] sm:text-xs font-semibold shadow-sm">
                  Software Developer
                </span>
              </div>

              <div className="hidden">
                <svg className="w-2 h-2 sm:w-3 sm:h-3 text-[#1F3B2C] transform rotate-45" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L10.59 3.41 16.17 9H2v2h14.17l-5.58 5.59L12 18l8-8z"/>
                </svg>
                <span className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-[#1F3B2C] text-white text-[8px] sm:text-xs font-semibold shadow-sm -ml-1">
                  Data &amp; Digital Support
                </span>
              </div>

              <div className="hidden">
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
      <WorkProcess />
      <Skills />
      <Projects />
      <Videos />
      <EducationWork />
      <Testimonials />
      <Availability />
      <Contact />
      <FAQ />
    </div>
  );
}
