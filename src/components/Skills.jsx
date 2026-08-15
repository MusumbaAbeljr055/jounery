// src/components/Skills.jsx
import { Link } from 'react-router-dom';

const additionalSkills = [
  { title: 'Data Analysis', path: '/skills/data-analysis', image: '/images/data-analysis.jpg', icon: 'fa-solid fa-chart-line', description: 'Turning raw information into clear insights, reports, and practical decisions.' },
  { title: 'Virtual Assistant', path: '/skills/virtual-assistant', image: '/images/virtual-assistant.jpg', icon: 'fa-solid fa-headset', description: 'Helping people and teams stay organized, responsive, and focused on what matters.' }
];

export default function Skills() {
  const favoriteTools = [
    { name: 'React', icon: 'fa-brands fa-react', color: '#61DAFB' },
    { name: 'Java', icon: 'fa-brands fa-java', color: '#f89820' },
    { name: 'Python', icon: 'fa-brands fa-python', color: '#3776AB' },
    { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#F7DF1E' },
    { name: 'Figma', icon: 'fa-brands fa-figma', color: '#A259FF' },
    { name: 'Git', icon: 'fa-brands fa-git-alt', color: '#F05032' },
  ];

  return (
    <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#FAF9F4]" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="text-[#EFA83C] font-semibold text-[0.7rem] sm:text-sm">My Favorite Tools</span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E1E1E] font-serif italic mt-1 sm:mt-2">
            <span className="text-[#EFA83C]">Exploring the Tools</span><br />Behind My Builds
          </h3>
        </div>

        <div className="flex justify-center gap-6 sm:gap-8 flex-wrap">
          {favoriteTools.map((tool, index) => (
            <div key={index} className="flex flex-col items-center gap-2 sm:gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#F4F3EE] rounded-full flex items-center justify-center shadow-sm hover:bg-[#FBE8C6] hover:scale-110 transition" style={{ color: tool.color }}>
                <i className={`${tool.icon} text-2xl sm:text-4xl`}></i>
              </div>
              <span className="font-semibold text-[#1E1E1E] text-sm sm:text-base">{tool.name}</span>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-7 mt-12 sm:mt-16 max-w-5xl mx-auto">
          {additionalSkills.map((skill) => (
            <Link key={skill.path} to={skill.path} className="group flex flex-col sm:flex-row gap-5 items-center sm:items-stretch bg-white border border-[#E5E3DA] rounded-2xl p-5 sm:p-6 hover:-translate-y-1 hover:shadow-lg transition">
              <div className="w-full sm:w-36 h-36 rounded-xl overflow-hidden bg-[#F4F3EE] flex-shrink-0 relative">
                <img src={skill.image} alt="" className="w-full h-full object-cover" onError={(event) => { event.currentTarget.style.display = 'none'; }} />
                <div className="absolute inset-0 flex items-center justify-center text-[#EFA83C]" aria-hidden="true"><i className={`${skill.icon} text-4xl`}></i></div>
              </div>
              <div className="text-center sm:text-left flex flex-col justify-center">
                <span className="text-[#EFA83C] text-xs font-semibold uppercase tracking-wider">Skill</span>
                <h4 className="text-xl font-bold text-[#1F3B2C] mt-1 mb-2 group-hover:text-[#EFA83C] transition">{skill.title}</h4>
                <p className="text-[#6B6B62] text-sm leading-relaxed">{skill.description}</p>
                <span className="inline-flex items-center justify-center sm:justify-start gap-2 text-[#1F3B2C] font-semibold text-sm mt-4">Explore skill <span className="text-[#EFA83C]">→</span></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
