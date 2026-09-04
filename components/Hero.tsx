export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[760px] flex items-center pt-32 pb-20 md:pb-28"
    >
      <div className="max-w-shell mx-auto px-5 md:px-8 grid md:grid-cols-[1.08fr_0.92fr] gap-12 md:gap-16 items-center w-full">
        {/* Copy */}
        <div className="reveal">
          <div className="flex items-center gap-3 text-cyan text-[11px] font-semibold uppercase tracking-[0.14em]">
            <span className="w-7 h-px bg-cyan" />
            Available for opportunities
          </div>

          <h1 className="font-display font-semibold text-[44px] sm:text-[64px] md:text-[80px] leading-[1.05] tracking-[-0.045em] mt-7">
            Building digital
            <br />
            <span className="gradient-text">products with purpose.</span>
          </h1>

          <p className="text-muted text-base md:text-[17px] mt-6 max-w-[480px]">
            I&apos;m <strong className="text-text font-medium">Duchel Decarte</strong>, a Junior Software Engineer
            focused on creating reliable, thoughtful experiences for the web.
          </p>

          <div className="flex flex-wrap items-center gap-6 mt-9">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3.5 text-[13px] font-semibold rounded-md bg-blue text-white shadow-[0_12px_30px_rgba(29,117,255,0.2)] hover:bg-blue-light hover:-translate-y-0.5 transition-all duration-250"
            >
              View my projects <span className="text-cyan">↗</span>
            </a>
            <a
              href="#contact"
              className="text-[13px] text-text border-b border-line pb-1.5 hover:border-cyan hover:text-cyan transition-colors"
            >
              Let&apos;s work together <span className="text-cyan">→</span>
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 md:gap-9 mt-16">
            {[
              { n: "3+", l: "Years of experience" },
              { n: "23", l: "Projects delivered" },
              { n: "Yaoundé", l: "Based in Cameroon" },
            ].map((s, i) => (
              <div
                key={i}
                className={`pr-8 md:pr-9 ${
                  i < 2 ? "border-r border-line" : ""
                }`}
              >
                <div className="font-display font-semibold text-[22px] md:text-[24px]">
                  {s.n}
                </div>
                <div className="text-[10px] uppercase tracking-[0.08em] text-muted leading-tight mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="relative h-[440px] md:h-[490px] grid place-items-center reveal reveal-delay-1">
          {/* Orbit rings */}
          <div className="absolute w-[440px] h-[180px] border border-blue/25 rounded-full -rotate-[24deg] orbit-spin" />
          <div className="absolute w-[370px] h-[520px] border border-cyan/10 rounded-full rotate-[35deg] orbit-spin-reverse" />

          {/* Main card */}
          <div className="relative w-[min(365px,80%)] aspect-[1/1.18] bg-gradient-to-br from-[#101e31] to-[#060b14] border border-[#29405f] rounded-[9px] shadow-[24px_25px_70px_rgba(0,0,0,0.45)] overflow-hidden">
            <div className="absolute inset-0 after:content-[''] after:absolute after:w-[280px] after:h-[280px] after:rounded-full after:right-[-150px] after:bottom-[-145px] after:bg-blue after:blur-[75px] after:opacity-30" />

            <div className="absolute top-5 left-5 right-5 flex items-center gap-2 text-muted text-[10px] uppercase tracking-[0.1em]">
              <span className="w-1.5 h-1.5 rounded-full bg-green pulse-dot" />
              <span>Currently building</span>
              <span className="ml-auto text-[#4b6481]">01 / 04</span>
            </div>

            <div className="absolute top-[57px] bottom-[56px] left-[34px] right-[34px] grid place-items-center">
              <img
                src="/images/WhatsApp_Image_2026-09-04_at_17.15.38.jpeg"
                alt="Duchel Decarte logo"
                className="w-full h-full object-cover rounded opacity-90"
                style={{ mixBlendMode: "screen" }}
              />
            </div>

            <div className="absolute bottom-5 left-6 right-6 flex justify-between text-muted text-[10px] uppercase tracking-[0.16em]">
              <span>Developer</span>
              <span>Designer</span>
              <span>Solver</span>
            </div>
          </div>

          {/* Floating tags */}
          <div className="absolute top-[72px] right-0 bg-[#0a1220]/90 backdrop-blur-md border border-line px-3.5 py-2.5 rounded-md text-[11px] shadow-lg animate-float">
            React <span className="text-cyan ml-2">✦</span>
          </div>
          <div className="absolute bottom-[68px] left-0 bg-[#0a1220]/90 backdrop-blur-md border border-line px-3.5 py-2.5 rounded-md text-[11px] shadow-lg animate-float-slow">
            Offline-first <span className="text-cyan ml-2">↗</span>
          </div>
        </div>
      </div>
    </section>
  );
}
