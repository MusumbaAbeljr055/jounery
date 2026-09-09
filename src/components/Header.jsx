import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import Icon from './Icon';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Education', path: '/education' },
  { name: 'Skills', path: '/skills' },
  { name: 'Work', path: '/projects' },
  { name: 'Writing', path: '/blogs' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => window.localStorage.getItem('site-theme') === 'dark');
  useEffect(() => setIsMenuOpen(false), [location.pathname]);
  useEffect(() => { document.body.dataset.theme = isDark ? 'dark' : 'light'; window.localStorage.setItem('site-theme', isDark ? 'dark' : 'light'); }, [isDark]);
  const isActive = (path) => path === '/' ? location.pathname === '/' : path.startsWith('/#') ? location.pathname === '/' && location.hash === path.slice(1) : location.pathname.startsWith(path);
  const handleNavClick = (event, link) => {
    if (link.path !== '/#tools') return;
    event.preventDefault();
    navigate('/#tools');
  };
  const handleContactClick = (event) => {
    event.preventDefault();
    setIsMenuOpen(false);
    if (location.pathname === '/') document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    else window.location.href = '/#contact';
  };

  return <>
      <header className={`main-header ${isMenuOpen ? 'main-header--menu-open' : ''}`}>
      <Link to="/" className="site-mark" aria-label="Home"><span className="site-mark__monogram">A</span></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navLinks.map((link) => <Link key={link.path} to={link.path} className="desktop-nav__link" aria-current={isActive(link.path) ? 'page' : undefined} onClick={(event) => handleNavClick(event, link)}>{link.name}</Link>)}
      </nav>
      <div className="header-socials"><a href="https://github.com/Abbey055?tab=overview&from=2026-08-01&to=2026-08-31" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" size={18} /></a><a href="#contact" onClick={handleContactClick} aria-label="Contact Abbey"><Icon name="arrow-right" size={18} /></a></div>
      <button className="menu-toggle" type="button" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((open) => !open)}><Icon name={isMenuOpen ? 'close' : 'menu'} size={22} /></button>
    </header>
    <button className="theme-toggle" type="button" aria-label="Toggle theme" aria-pressed={isDark} onClick={() => setIsDark((value) => !value)}><svg className="theme-toggle__svg" width="38" height="38" viewBox="0 0 38 38" aria-hidden="true"><path className="theme-toggle__path" d="M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5" /><circle className="theme-toggle__circle" cx="19" cy="19" r="12" /><circle className="theme-toggle__mask" cx="25" cy="14" r="9" /></svg></button>
    <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu--open' : ''}`} aria-hidden={!isMenuOpen}><div className="mobile-menu__inner">{navLinks.map((link, index) => <Link key={link.path} to={link.path} className="mobile-menu__link" aria-current={isActive(link.path) ? 'page' : undefined} style={{ '--menu-delay': `${index * 55}ms` }} onClick={(event) => { handleNavClick(event, link); setIsMenuOpen(false); }}><span>0{index + 1}</span>{link.name}</Link>)}<div className="mobile-menu__socials"><a href="https://github.com/Abbey055" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" size={20} /></a><a href="https://youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube"><Icon name="youtube" size={20} /></a><a href="https://vercel.com/" target="_blank" rel="noreferrer" aria-label="Vercel"><Icon name="vercel" size={20} /></a><a href="https://supabase.com/" target="_blank" rel="noreferrer" aria-label="Supabase"><Icon name="supabase" size={20} /></a><a href="https://www.mysql.com/" target="_blank" rel="noreferrer" aria-label="MySQL"><Icon name="mysql" size={20} /></a></div></div></div>
  </>;
}
