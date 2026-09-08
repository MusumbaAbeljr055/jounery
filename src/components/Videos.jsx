const videos = [
  {
    id: 'NfPX2ePttqk',
    title: 'I Built an Event Tracking System with Laravel & Supabase 🚀 | Full Project Demo',
    description: 'A practical walkthrough of building an event tracking system with Laravel.',
    meta: '34 views • 8 days ago',
    url: 'https://www.youtube.com/watch?v=NfPX2ePttqk'
  },
  {
    id: 'UYt_4l9emO4',
    title: 'JobAnalyser – AI-Powered Job Intelligence Engine',
    description: 'A look at building an AI-powered tool for smarter job analysis.',
    meta: '10 views • 1 month ago',
    url: 'https://www.youtube.com/watch?v=UYt_4l9emO4'
  }
];

export default function Videos() {
  return (
    <section id="videos" className="w-full bg-[#11110F] px-4 py-14 text-white sm:px-6 sm:py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="mb-3 block text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#EFA83C] sm:text-xs">
              Tutorials &amp; Builds
            </span>
            <h2 className="font-serif text-3xl font-bold italic leading-tight text-white sm:text-4xl md:text-5xl">
              Latest <span className="text-[#EFA83C]">Videos</span>
            </h2>
            <p className="mt-3 max-w-lg text-xs leading-relaxed text-[#B6B6AF] sm:text-sm">
              Follow along as I build useful digital products, explain technical decisions, and share what I learn.
            </p>
          </div>

          <a
            href="https://www.youtube.com/channel/UC0Lpz_wUqQGWEAC7FkgTwbQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[#EFA83C] px-4 py-2 text-xs font-bold text-[#1F3B2C] hover:bg-[#f7bd5e] sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Visit my YouTube channel
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {videos.map((video) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="video-card group overflow-hidden rounded-2xl border border-white/10 bg-[#1B1A20] shadow-lg hover:-translate-y-1 hover:border-[#EFA83C]/60 hover:shadow-2xl focus-visible:-translate-y-1 focus-visible:border-[#EFA83C]/60 focus-visible:shadow-2xl"
            >
              <div className="relative aspect-video overflow-hidden bg-[#24232A]">
                <img
                  src={`https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={`${video.title} YouTube thumbnail`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.src = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
                  }}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" aria-hidden="true" />
                <span className="video-card__play absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#EFA83C] text-[#1F3B2C] shadow-xl transition duration-300 group-hover:scale-110 sm:h-14 sm:w-14" aria-hidden="true">
                  <svg className="ml-1 h-5 w-5 fill-current sm:h-6 sm:w-6" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-base font-bold leading-snug text-white transition group-hover:text-[#EFA83C] sm:text-lg">
                  {video.title}
                </h3>
                <p className="mt-2 text-[0.7rem] text-[#8F8F89] sm:text-xs">{video.meta}</p>
                <p className="mt-2 text-xs leading-relaxed text-[#A9A9A2] sm:text-sm">{video.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#EFA83C] sm:text-sm">
                  Watch tutorial <span aria-hidden="true">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
