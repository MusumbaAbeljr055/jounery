// src/components/Header.jsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Education', path: '/education' },
    { name: 'Data Analysis', path: '/skills/data-analysis' },
    { name: 'Virtual Assistant', path: '/skills/virtual-assistant' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Testimonials', path: '/testimonials' },
  ];

  const handleContactClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <header className="main-header">
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full px-4 sm:px-6 py-2 sm:py-3">
        <Link to="/" className="flex items-center gap-1.5 sm:gap-2 text-white font-bold text-base sm:text-lg md:text-xl flex-shrink-0">
          <span className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-[#EFA83C] text-[#1F3B2C] flex items-center justify-center text-[9px] sm:text-[10px] md:text-sm font-bold">
            A
          </span>
          <span className="text-sm sm:text-base md:text-xl whitespace-nowrap">Abbey<span className="text-[#EFA83C]">.</span></span>
        </Link>

        <button 
          className="md:hidden p-1 sm:p-1.5 text-white focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </button>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`${location.pathname === link.path ? 'text-[#EFA83C]' : 'text-[#D9DFD7]'} hover:text-[#EFA83C] transition text-sm font-medium whitespace-nowrap`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <a 
          href="#contact" 
          className="hidden md:block bg-white text-[#1F3B2C] px-4 lg:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm hover:bg-[#EFA83C] hover:text-white transition whitespace-nowrap"
          onClick={handleContactClick}
        >
          Contact Me
        </a>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="mobile-nav md:hidden absolute top-full left-0 right-0 bg-[#1F3B2C] p-4 sm:p-5 shadow-lg z-50">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => {
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`${location.pathname === link.path ? 'text-[#EFA83C]' : 'text-[#D9DFD7]'} hover:text-[#EFA83C] transition block py-1.5 text-sm font-medium`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
            <li>
              <a 
                href="#contact" 
                className="text-[#D9DFD7] hover:text-[#EFA83C] transition block py-1.5 text-sm font-medium"
                onClick={handleContactClick}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
