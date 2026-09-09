import { Link } from 'react-router-dom';

export default function Availability() {
  return (
    <section className="bg-white px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      <div className="motion-push max-w-6xl mx-auto bg-[#1F3B2C] rounded-3xl px-6 sm:px-10 py-8 sm:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-[#FBE8C6] text-xs font-semibold uppercase tracking-wider"><span className="w-2 h-2 rounded-full bg-[#58D68D] animate-pulse"></span> Available for new opportunities</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3">Let&apos;s build something useful.</h2>
          <p className="text-white/70 text-xs sm:text-sm mt-2 max-w-xl leading-relaxed">I&apos;m currently open to freelance projects, internships, collaborations, and remote support opportunities.</p>
        </div>
        <Link to="/contact" className="reference-button inline-flex items-center gap-2 bg-[#EFA83C] text-white px-5 py-3 rounded-full font-semibold text-sm hover:bg-[#d9952f] transition shrink-0">Start a conversation <span>→</span></Link>
      </div>
    </section>
  );
}
