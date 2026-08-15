// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import { useState } from 'react';

const GOOGLE_SHEETS_URL = process.env.REACT_APP_GOOGLE_SHEETS_URL;

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (event) => {
    event.preventDefault();
    const email = subscriberEmail.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setSubscriptionStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    setIsSubscribing(true);
    setSubscriptionStatus(null);

    try {
      if (!GOOGLE_SHEETS_URL) {
        throw new Error('Newsletter endpoint is not configured');
      }

      await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ email })
      });

      try {
        const subscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');
        if (!subscribers.some((subscriber) => subscriber.email === email)) {
          subscribers.push({ email, date: new Date().toISOString() });
          localStorage.setItem('subscribers', JSON.stringify(subscribers));
        }
      } catch (storageError) {
        console.warn('Could not save subscriber locally', storageError);
      }

      setSubscriberEmail('');
      setSubscriptionStatus({ type: 'success', message: 'Thanks for subscribing!' });
    } catch (error) {
      setSubscriptionStatus({
        type: 'error',
        message: error.message === 'Newsletter endpoint is not configured'
          ? 'Newsletter signup is not configured yet.'
          : 'Something went wrong. Please try again.'
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="bg-white py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top Section - Let's Connect */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-10 md:mb-14 gap-4 sm:gap-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-[#1E1E1E] font-serif italic leading-tight">
            Let's <span className="text-[#EFA83C]">Connect</span> there
          </h2>

          <Link 
            to="/blogs" 
            className="inline-flex items-center bg-[#1F3B2C] text-white pl-3 sm:pl-4 md:pl-5 pr-0.5 sm:pr-1 py-1 rounded-full font-semibold text-[0.65rem] sm:text-[0.75rem] md:text-[0.82rem] hover:bg-[#16291D] transition shrink-0"
          >
            <span className="mr-1 sm:mr-1.5 md:mr-2 whitespace-nowrap">View All Blogs</span>
            <span className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-[#EFA83C] flex items-center justify-center">
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-10 md:mb-12">
          
          {/* Brand Column */}
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-[#EFA83C] text-[#1F3B2C] flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
                </svg>
              </div>
              <span className="text-[#1F3B2C] font-bold text-base sm:text-lg">Abbey<span className="text-[#EFA83C]">.</span></span>
            </div>

            <p className="text-gray-500 text-[0.65rem] sm:text-[0.7rem] md:text-[0.82rem] leading-relaxed mb-4 sm:mb-6 max-w-xs mx-auto sm:mx-0">
              IT Specialist &amp; Software Developer building useful digital solutions 
              that solve real problems for real people.
            </p>

            <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
              <a href="https://github.com/musumbasa" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#EFA83C] text-white flex items-center justify-center hover:bg-[#d9952f] transition">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://musumba.hashnode.dev/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#EFA83C] text-white flex items-center justify-center hover:bg-[#d9952f] transition">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </a>
              <a href="mailto:ssenkubugeabbey055@gmail.com" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#EFA83C] text-white flex items-center justify-center hover:bg-[#d9952f] transition">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="text-center sm:text-left">
            <h4 className="text-[#EFA83C] font-semibold text-xs sm:text-sm mb-3 sm:mb-5">Navigation</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link to="/" className="text-gray-500 text-[0.65rem] sm:text-[0.7rem] md:text-[0.82rem] hover:text-[#1F3B2C] transition">Home</Link></li>
              <li><Link to="/services" className="text-gray-500 text-[0.65rem] sm:text-[0.7rem] md:text-[0.82rem] hover:text-[#1F3B2C] transition">Services</Link></li>
              <li><Link to="/about" className="text-gray-500 text-[0.65rem] sm:text-[0.7rem] md:text-[0.82rem] hover:text-[#1F3B2C] transition">About</Link></li>
              <li><Link to="/projects" className="text-gray-500 text-[0.65rem] sm:text-[0.7rem] md:text-[0.82rem] hover:text-[#1F3B2C] transition">Projects</Link></li>
              <li><Link to="/blogs" className="text-gray-500 text-[0.65rem] sm:text-[0.7rem] md:text-[0.82rem] hover:text-[#1F3B2C] transition">Blogs</Link></li>
              <li><Link to="/faq" className="text-gray-500 text-[0.65rem] sm:text-[0.7rem] md:text-[0.82rem] hover:text-[#1F3B2C] transition">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="text-center sm:text-left">
            <h4 className="text-[#EFA83C] font-semibold text-xs sm:text-sm mb-3 sm:mb-5">Contact</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="text-gray-500 text-[0.65rem] sm:text-[0.7rem] md:text-[0.82rem] break-all">+256 705 149 399</li>
              <li className="text-gray-500 text-[0.65rem] sm:text-[0.7rem] md:text-[0.82rem] break-all">ssenkubugeabbey055@gmail.com</li>
              <li className="text-gray-500 text-[0.65rem] sm:text-[0.7rem] md:text-[0.82rem] break-all">musumba.hashnode.dev</li>
              <li className="text-gray-500 text-[0.65rem] sm:text-[0.7rem] md:text-[0.82rem]">Mbarara, Uganda</li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="text-center sm:text-left">
            <h4 className="text-[#EFA83C] font-semibold text-xs sm:text-sm mb-3 sm:mb-5">Get the latest Information</h4>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-2">
              <input 
                type="email" 
                name="subscriberEmail"
                placeholder="Email address" 
                aria-label="Email address for newsletter subscription"
                value={subscriberEmail}
                onChange={(event) => setSubscriberEmail(event.target.value)}
                disabled={isSubscribing}
                className="w-full sm:flex-1 px-3 sm:px-4 py-2.5 sm:py-3 bg-[#F5F5F0] border border-transparent rounded-xl text-[0.65rem] sm:text-[0.7rem] md:text-[0.82rem] text-[#1F3B2C] placeholder-gray-400 focus:border-[#EFA83C] focus:outline-none focus:ring-1 focus:ring-[#EFA83C] transition"
              />
              <button type="submit" disabled={isSubscribing} className="w-full sm:w-auto px-4 sm:px-5 py-2.5 sm:py-3 bg-[#1F3B2C] text-white rounded-xl flex items-center justify-center gap-2 hover:bg-[#16291D] transition shrink-0 text-[0.65rem] sm:text-[0.7rem] md:text-[0.82rem] font-semibold disabled:opacity-60 disabled:cursor-not-allowed">
                {isSubscribing ? 'Sending...' : 'Subscribe'}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </form>
            {subscriptionStatus && (
              <p aria-live="polite" className={`mt-2 text-[0.65rem] ${subscriptionStatus.type === 'success' ? 'text-[#2E8B57]' : 'text-red-500'}`}>
                {subscriptionStatus.message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar - Balanced and Centered */}
      <div className="bg-[#1F3B2C] py-4 sm:py-5 px-4 sm:px-6 mt-4 sm:mt-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          {/* Copyright - Left */}
          <p className="text-gray-400 text-[0.6rem] sm:text-[0.65rem] md:text-[0.75rem] text-center md:text-left order-2 md:order-1">
            Copyright &copy; {currentYear} <span className="text-[#EFA83C]">Ssenkubuge Abbey</span>. All Rights Reserved.
          </p>
          
          {/* Legal Links - Right */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 order-1 md:order-2">
            <a href="#" className="text-gray-400 text-[0.6rem] sm:text-[0.65rem] md:text-[0.75rem] hover:text-[#EFA83C] transition">User Terms &amp; Conditions</a>
            <span className="text-gray-600 text-[0.5rem] sm:text-xs">|</span>
            <a href="#" className="text-gray-400 text-[0.6rem] sm:text-[0.65rem] md:text-[0.75rem] hover:text-[#EFA83C] transition">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
