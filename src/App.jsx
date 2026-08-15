// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#FAF9F4]">
        <Header />
        <main className="flex-grow">
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
