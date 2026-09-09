// src/App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './components/Home';
import ProjectDetail from './components/ProjectDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Services from './components/Services';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import EducationWork from './components/EducationWork';
import Blogs from './components/Blogs';
import About from './components/About';
import FAQ from './components/FAQ';
import WhatsAppButton from './components/WhatsAppButton';
import SkillDetail from './components/SkillDetail';

function ScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return undefined;
    const targetId = decodeURIComponent(location.hash.slice(1));
    let frame;
    let attempts = 0;
    const scrollToTarget = () => {
      const target = document.getElementById(targetId);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      else if (attempts < 120) { attempts += 1; frame = window.requestAnimationFrame(scrollToTarget); }
    };
    frame = window.requestAnimationFrame(scrollToTarget);
    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const sections = document.querySelectorAll('main section, main > div, main article');
    const main = document.querySelector('main');

    if (main) {
      main.classList.remove('route-transition');
      void main.offsetWidth;
      main.classList.add('route-transition');
    }

    if (!('IntersectionObserver' in window)) {
      sections.forEach((section) => section.classList.add('is-visible'));
      return undefined;
    }

    sections.forEach((section, index) => {
      section.classList.add('scroll-reveal');
      section.style.setProperty('--reveal-delay', `${Math.min(index * 0.04, 0.24)}s`);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      main?.classList.remove('route-transition');
    };
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollReveal />
      <div className="site-shell">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<EducationWork />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/skills/data-analysis" element={<SkillDetail type="data-analysis" />} />
            <Route path="/skills/virtual-assistant" element={<SkillDetail type="virtual-assistant" />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
