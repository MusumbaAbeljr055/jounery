import { Link } from 'react-router-dom';

const skillContent = {
  'data-analysis': {
    label: 'Data Analysis', title: 'Making data easier to understand and use.',
    description: 'I organize, clean, explore, and present data so that useful patterns become clear and decisions become more confident.',
    image: '/images/data-analysis.jpg', icon: 'fa-solid fa-chart-line',
    services: ['Data cleaning and organization', 'Reports and dashboards', 'Spreadsheet analysis', 'Charts and visual summaries'], tools: ['Excel', 'Google Sheets', 'Python', 'SQL', 'Power BI']
  },
  'virtual-assistant': {
    label: 'Virtual Assistant', title: 'Reliable support for your everyday work.',
    description: 'I help individuals and teams manage the details behind their work through organized communication, research, documentation, and digital support.',
    image: '/images/virtual-assistant.jpg', icon: 'fa-solid fa-headset',
    services: ['Online research and information gathering', 'Email and calendar organization', 'Data entry and documentation', 'Task and project coordination'], tools: ['Google Workspace', 'Microsoft Office', 'Notion', 'Trello', 'Slack']
  }
};

export default function SkillDetail({ type }) {
  const skill = skillContent[type] || skillContent['data-analysis'];
  return (
    <section className="bg-[#FAF9F4] px-4 sm:px-6 py-12 sm:py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <Link to="/skills" className="inline-flex items-center gap-2 text-[#1F3B2C] text-sm font-semibold hover:text-[#EFA83C] transition mb-8"><span>←</span> All skills</Link>
        <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-10 lg:gap-16 items-center">
          <div>
            <span className="text-[#EFA83C] font-semibold text-xs sm:text-sm uppercase tracking-wider">{skill.label}</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E1E1E] font-serif italic leading-tight mt-3 mb-5">{skill.title}</h1>
            <p className="text-[#6B6B62] text-sm sm:text-base leading-relaxed max-w-xl">{skill.description}</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#1F3B2C] text-white px-5 py-3 rounded-full font-semibold text-sm mt-7 hover:bg-[#16291D] transition">Let&apos;s work together <span className="text-[#EFA83C]">→</span></Link>
          </div>
          <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden bg-[#E8E8E3] shadow-lg">
            <img src={skill.image} alt={skill.label} className="relative z-10 w-full h-full object-cover" onError={(event) => { event.currentTarget.style.display = 'none'; }} />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-[#1F3B2C]" aria-hidden="true"><i className={`${skill.icon} text-6xl text-[#EFA83C] mb-3`}></i><span className="text-xs font-semibold uppercase tracking-wider">Add your image here</span></div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-14 sm:mt-20">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E3DA]"><h2 className="text-xl font-bold text-[#1F3B2C] mb-5">What I can help with</h2><ul className="space-y-3">{skill.services.map((item) => <li key={item} className="flex gap-3 text-sm text-[#6B6B62]"><span className="text-[#EFA83C]">✓</span>{item}</li>)}</ul></div>
          <div className="bg-[#1F3B2C] rounded-2xl p-6 sm:p-8 text-white"><h2 className="text-xl font-bold mb-5">Tools I use</h2><div className="flex flex-wrap gap-2">{skill.tools.map((tool) => <span key={tool} className="px-3 py-2 rounded-full bg-white/10 text-sm text-[#FBE8C6]">{tool}</span>)}</div></div>
        </div>
      </div>
    </section>
  );
}
