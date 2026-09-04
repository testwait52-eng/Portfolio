import { aboutNotes } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="section-divider py-24 md:py-32"
    >
      <div className="max-w-shell mx-auto px-5 md:px-8">
        <div className="grid grid-cols-[42px_1fr] md:grid-cols-[110px_1fr] gap-3 md:gap-6 mb-14 md:mb-16 reveal">
          <span className="font-display font-medium text-[13px] text-cyan pt-2.5">01</span>
          <div>
            <div className="flex items-center gap-3 text-cyan text-[11px] font-semibold uppercase tracking-[0.14em]">
              <span className="w-7 h-px bg-cyan" />
              A little about me
            </div>
            <h2 className="font-display font-semibold text-[34px] md:text-[58px] leading-[1.08] tracking-[-0.04em] mt-5">
              Curious by nature.
              <br />
              <span className="gradient-text">Precise by choice.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24 md:ml-[132px]">
          <div className="reveal max-w-[475px]">
            <p className="text-text font-display font-medium text-[20px] md:text-[23px] leading-snug mb-5">
              I believe good software should feel simple, even when the problems behind it are complex.
            </p>
            <p className="text-muted text-base md:text-[17px] mb-5">
              From e-commerce platforms to offline-first business tools, I enjoy turning real-world needs into clear,
              useful products. I&apos;m building my career with intention: learning constantly, collaborating openly,
              and shipping work I&apos;m proud of.
            </p>
            <a
              href="mailto:ducheldecarte@gmail.com"
              className="inline-block text-[13px] text-text border-b border-line pb-1.5 hover:border-cyan hover:text-cyan transition-colors"
            >
              Get to know me <span className="text-cyan">→</span>
            </a>
          </div>

          <div className="reveal reveal-delay-1 grid gap-3">
            {aboutNotes.map((note) => (
              <div
                key={note.index}
                className="flex gap-5 p-5 md:p-[22px] bg-panel border border-line rounded-md hover:translate-x-1 hover:border-[#2a5b94] transition-all duration-250"
              >
                <span className="font-display text-[12px] text-cyan">{note.index}</span>
                <div>
                  <strong className="font-display font-medium text-[16px]">{note.title}</strong>
                  <p className="text-[13px] text-muted mt-1">{note.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
