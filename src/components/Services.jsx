// src/components/Services.jsx
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: '/images/web.jpg',
      title: 'Web Development',
      description: 'I build fast, responsive websites and web applications using modern technologies like React, JavaScript, and Tailwind CSS. From simple landing pages to complex web platforms, I deliver solutions that are both functional and mobile-friendly.',
      color: '#4D9DE0',
      bgColor: '#E3F0FA'
    },
    {
      icon: '/images/app.jpg',
      title: 'Mobile App Development',
      description: 'I create native Android applications using Java and Firebase. My apps are built with clean user interfaces, smooth performance, and practical features that solve real problems for users.',
      color: '#FF6B6B',
      bgColor: '#FFE8E8'
    },
    {
      icon: '/images/IT.jpg',
      title: 'IT Systems & Support',
      description: 'I design and implement practical IT systems, dashboards, and infrastructure that keep organizations running smoothly. From database planning to system architecture, I deliver reliable and scalable solutions.',
      color: '#FFB84D',
      bgColor: '#FFF3E0'
    },
    {
      icon: '/images/Control-Statements-in-Python.jpg',
      title: 'Training & Mentorship',
      description: 'I teach practical digital skills through clear, hands-on sessions in programming, web development, data, and everyday technology.',
      color: '#8B6FD8',
      bgColor: '#F0EBFF'
    }
  ];

  const packages = [
    {
      name: 'Website Development',
      price: 'From UGX Negotiable',
      description: 'A responsive, professional website built around your goals and audience.',
      features: ['Responsive design', 'Up to 5 pages', 'Contact form setup', 'Basic SEO and deployment'],
      accent: false
    },
    {
      name: 'Data Analysis Reports',
      price: 'From Negotiable',
      description: 'Clear analysis that turns your spreadsheet or dataset into useful insight.',
      features: ['Data cleaning', 'Charts and visual summaries', 'Key findings report', 'One revision included'],
      accent: true
    },
    {
      name: 'Virtual Assistant Support',
      price: 'From UGX 25,000 / hour',
      description: 'Reliable remote support for research, organization, documentation, and admin tasks.',
      features: ['Flexible support hours', 'Online research', 'Data entry and documents', 'Clear progress updates'],
      accent: false
    },
    {
      name: 'Training & Mentorship',
      price: 'From UGX 50,000 / session',
      description: 'Practical, beginner-friendly guidance for programming, web development, data, and digital tools.',
      features: ['One-on-one or group sessions', 'Practical exercises', 'Progress-focused learning', 'Beginner-friendly support'],
      accent: false
    }
  ];

  return (
    <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 sm:mb-10 md:mb-16">
          <div>
            <span className="text-[#EFA83C] font-semibold text-[0.7rem] sm:text-sm">Services</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E1E1E] mt-0.5 sm:mt-1">
              <span className="text-[#EFA83C] italic font-serif">Services</span> I Provide
            </h2>
          </div>

          <Link 
            to="/services" 
            className="inline-flex items-center bg-[#1F3B2C] text-white pl-2.5 sm:pl-4 md:pl-5 pr-0.5 sm:pr-1 py-1 rounded-full font-semibold text-[10px] sm:text-xs md:text-sm hover:bg-[#16291D] transition shrink-0"
          >
            <span className="mr-1 sm:mr-1.5 md:mr-2 whitespace-nowrap">View All Services</span>
            <span className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-[#EFA83C] flex items-center justify-center">
              <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div 
              className="motion-push bg-[#F8F9F4] p-6 sm:p-8 rounded-2xl hover:shadow-lg transition group" 
              key={index}
            >
              {/* Circular Icon Container - No Border */}
              <div 
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition mx-auto shadow-lg"
                style={{ backgroundColor: service.bgColor }}
              >
                <img 
                  src={service.icon} 
                  alt={service.title}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-cover rounded-full"
                />
              </div>

              <h4 className="text-base sm:text-lg font-semibold text-[#1E1E1E] mb-2 sm:mb-3 text-center">{service.title}</h4>

              <p className="text-[#9B9B92] text-[0.7rem] sm:text-sm leading-relaxed mb-4 sm:mb-6 text-center">{service.description}</p>

              <div className="text-center">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-[#1F3B2C] font-semibold text-[0.7rem] sm:text-sm hover:gap-3 transition"
                >
                  Learn more 
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#EFA83C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 sm:mt-20">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-[#EFA83C] font-semibold text-[0.7rem] sm:text-sm">Packages</span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E1E1E] mt-1">
              Simple ways to <span className="text-[#EFA83C] italic font-serif">work together</span>
            </h3>
            <p className="text-[#9B9B92] text-xs sm:text-sm leading-relaxed mt-3">Starting prices are estimates. Every package can be adjusted to match your project.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`motion-push rounded-2xl p-6 sm:p-7 border ${pkg.accent ? 'bg-[#1F3B2C] border-[#1F3B2C] text-white' : 'bg-[#FAF9F4] border-[#E5E3DA] text-[#1E1E1E]'}`}>
                {pkg.accent && <span className="inline-block bg-[#EFA83C] text-white text-[0.65rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Popular</span>}
                <h4 className={`text-lg font-bold ${pkg.accent ? 'text-white' : 'text-[#1F3B2C]'}`}>{pkg.name}</h4>
                <p className={`text-xl font-bold mt-3 ${pkg.accent ? 'text-[#EFA83C]' : 'text-[#1F3B2C]'}`}>{pkg.price}</p>
                <p className={`text-xs leading-relaxed mt-3 min-h-[3.5rem] ${pkg.accent ? 'text-white/70' : 'text-[#6B6B62]'}`}>{pkg.description}</p>
                <ul className="space-y-2.5 mt-5 mb-6">
                  {pkg.features.map((feature) => <li key={feature} className={`flex gap-2 text-xs ${pkg.accent ? 'text-white/80' : 'text-[#6B6B62]'}`}><span className="text-[#EFA83C]">✓</span>{feature}</li>)}
                </ul>
                <a href="#contact" className={`inline-flex items-center gap-2 font-semibold text-sm hover:gap-3 transition ${pkg.accent ? 'text-[#EFA83C]' : 'text-[#1F3B2C]'}`}>Request a quote <span>→</span></a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
