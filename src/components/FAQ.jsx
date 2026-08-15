// src/components/FAQ.jsx
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(1);

  const faqs = [
    {
      question: 'What industries have you worked in as a product designer?',
      answer: 'I have worked across various industries including technology, healthcare, finance, and e-commerce, bringing user-centered design solutions to each sector.'
    },
    {
      question: 'Can I download your resume/CV for information?',
      answer: 'Certainly! You can download my resume/CV directly from my website. It provides a comprehensive overview of my education, work experience, and design achievements.'
    },
    {
      question: 'Are you available for freelance design work?',
      answer: 'I am currently open to freelance opportunities and collaborations. Feel free to reach out through the contact form to discuss your project requirements and timeline.'
    },
    {
      question: 'What tools do you use for your design work?',
      answer: 'I primarily use Figma for UI/UX design, Adobe Creative Suite for graphics, and various prototyping tools to bring designs to life efficiently.'
    },
    {
      question: 'How do I navigate through your portfolio projects?',
      answer: 'You can browse through my projects by visiting the Projects section. Each project includes detailed case studies with process, outcomes, and key learnings.'
    }
  ];

  const services = [
    'App Design',
    'Website Design',
    'Dashboard',
    'Wireframe'
  ];

  return (
    <section className="w-full bg-[#1F3B2C]" id="faq">
      <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12">
        <div className="max-w-3xl mx-auto">

          <div className="text-center mb-8 sm:mb-12">
            <span className="text-[#EFA83C] font-semibold text-[0.7rem] sm:text-sm tracking-wider mb-3 sm:mb-4 block">
              FAQs
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-serif italic leading-tight">
              Questions? <span className="text-[#EFA83C]">Look here.</span>
            </h2>
          </div>

          <div className="space-y-2 sm:space-y-3">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`rounded-xl overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'bg-[#EFA83C]' : 'bg-[#2D4A3A]/60'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 text-left"
                >
                  <span className={`font-medium text-[0.8rem] sm:text-[0.9rem] ${
                    openIndex === index ? 'text-[#1F3B2C]' : 'text-white'
                  }`}>
                    {faq.question}
                  </span>
                  <span className={`text-base sm:text-lg ml-4 transition-transform duration-300 shrink-0 ${
                    openIndex === index ? 'text-[#1F3B2C]' : 'text-white'
                  }`}>
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-4 sm:px-5 pb-4 text-[#1F3B2C] text-[0.7rem] sm:text-[0.82rem] leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <div className="bg-[#EFA83C] py-3 sm:py-4 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-4 sm:gap-6 md:gap-16 flex-wrap">
          {services.map((service, index) => (
            <div key={index} className="flex items-center gap-4 sm:gap-6 md:gap-16">
              <span className="text-[#1F3B2C] font-bold text-[0.7rem] sm:text-sm whitespace-nowrap">{service}</span>
              {index < services.length - 1 && (
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#1F3B2C] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
