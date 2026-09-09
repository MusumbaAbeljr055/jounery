// src/components/Hero.jsx
import { Link } from 'react-router-dom';
import abbeyImage from '../assets/images/abbey.jpg';

export default function Hero() {
  return (
    <section className="w-full bg-white pt-12 pb-0 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">

        {/* Left Side - Text Content */}
        <div className="order-2 md:order-1 pb-12">
          {/* Hello Badge */}
          <div className="inline-block relative mb-5">
            <span className="absolute -top-0.5 -left-0.5 w-1.5 h-1.5 border-t border-l border-[#1F3B2C]"></span>
            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 border-t border-r border-[#1F3B2C]"></span>
            <span className="absolute -bottom-0.5 -left-0.5 w-1.5 h-1.5 border-b border-l border-[#1F3B2C]"></span>
            <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 border-b border-r border-[#1F3B2C]"></span>
            <div className="border border-dashed border-[#1F3B2C] px-3 py-1 text-xs font-medium text-[#1F3B2C]">
              Hello There!
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-[2.8rem] font-bold text-[#1E1E1E] leading-[1.1] mb-5">
            <span className="font-normal">I'm </span>
            <span className="text-[#EFA83C] italic font-serif underline decoration-[#EFA83C] underline-offset-4 decoration-1">Abbey Ssenkubuge</span>,
            <br />
            Software Developer
            <br />
            Based in Uganda.
          </h1>

          {/* Description */}
          <p className="text-[#9B9B92] text-xs leading-relaxed mb-6 max-w-sm">
            I'm an experienced Software Developer with 1+ years in the field, collaborating 
            with various companies and startups.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <Link 
              to="/projects" 
              className="reference-button inline-flex items-center bg-[#1F3B2C] text-white pl-5 pr-1 py-1 rounded-full font-semibold text-xs hover:bg-[#16291D] transition"
            >
              <span className="mr-2">View My Portfolio</span>
              <span className="w-7 h-7 rounded-full bg-[#EFA83C] flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <Link 
              to="/contact" 
              className="reference-button reference-button--secondary inline-flex items-center border border-[#1E1E1E] text-[#1E1E1E] px-5 py-2 rounded-full font-medium text-xs hover:bg-[#1F3B2C] hover:text-white hover:border-[#1F3B2C] transition"
            >
              Hire Me
            </Link>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="order-1 md:order-2 flex justify-center relative h-[400px]">
          <div className="relative w-full h-full flex items-end justify-center">

            {/* Yellow Background Circle */}
            <div className="absolute w-[300px] h-[300px] rounded-full bg-[#F2A51A] left-[10%] bottom-[15%]" />

            {/* Person Image - NOT cropped */}
            <div className="relative z-10 h-[380px] w-auto">
              <img
                src={abbeyImage}
                alt="Ssenkubuge Abbey"
                className="h-full w-auto object-contain"
              />
            </div>

            {/* UI/UX Designer Tag */}
            <div className="absolute bottom-[20%] right-[5%] z-20">
              <span className="px-3 py-1 rounded-full bg-[#F2A51A] text-white text-[10px] font-semibold shadow-sm">
                UI/UX Designer
              </span>
            </div>

            {/* Product Designer Tag with arrow */}
            <div className="absolute bottom-[10%] left-[15%] z-20 flex items-center gap-0">
              <svg className="w-4 h-4 text-[#1F3B2C]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L10.59 3.41 16.17 9H2v2h14.17l-5.58 5.59L12 18l8-8z" transform="rotate(180 12 12)"/>
              </svg>
              <span className="px-3 py-1 rounded-full bg-[#1F3B2C] text-white text-[10px] font-semibold shadow-sm -ml-1">
                Product Designer
              </span>
            </div>

            {/* Rotating HIRE ME Badge */}
            <div className="absolute top-[5%] right-[10%] z-20 w-16 h-16">
              <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                <defs>
                  <path id="circlePath" d="M 50,50 m -32,0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0"/>
                </defs>
                <circle cx="50" cy="50" r="48" fill="#1F3B2C" stroke="#F2A51A" strokeWidth="1.5"/>
                <text fill="#F2A51A" fontSize="9" fontWeight="bold" letterSpacing="3">
                  <textPath href="#circlePath">
                    HIRE ME • HIRE ME • HIRE ME •
                  </textPath>
                </text>
                <circle cx="50" cy="50" r="12" fill="#F2A51A"/>
                <path d="M45 50h10M50 45l5 5-5 5" stroke="#1F3B2C" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
