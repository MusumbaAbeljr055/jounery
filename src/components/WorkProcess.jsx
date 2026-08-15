export default function WorkProcess() {
  const steps = [
    ['01', 'Discover', 'We discuss your goals, audience, needs, and expected outcome.'],
    ['02', 'Plan', 'I define the scope, timeline, tools, and deliverables for the work.'],
    ['03', 'Build', 'I create the website, report, system, or workflow with regular updates.'],
    ['04', 'Test', 'I review the work carefully, fix issues, and refine the experience.'],
    ['05', 'Deliver', 'You receive the finished work, files, guidance, and next steps.']
  ];

  return (
    <section className="bg-[#FAF9F4] px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-8 sm:mb-12">
          <span className="text-[#EFA83C] font-semibold text-[0.7rem] sm:text-sm">My Process</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E1E1E] mt-1">From idea to <span className="text-[#EFA83C] italic font-serif">delivery</span></h2>
          <p className="text-[#9B9B92] text-xs sm:text-sm leading-relaxed mt-3">A clear, collaborative process keeps the work organized and makes progress easy to follow.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map(([number, title, description]) => (
            <div key={number} className="motion-push bg-white rounded-2xl p-5 border border-[#E5E3DA]">
              <span className="text-[#EFA83C] font-bold text-sm">{number}</span>
              <h3 className="text-lg font-bold text-[#1F3B2C] mt-4 mb-2">{title}</h3>
              <p className="text-[#6B6B62] text-xs leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
