import { contactDetails } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-28 pb-20 md:pb-24">
      <div className="max-w-shell mx-auto px-5 md:px-8">
        <div className="relative grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-20 p-10 md:p-[70px] bg-gradient-to-br from-[#0c1a2d] to-[#08101d] border border-[#23415f] rounded-lg overflow-hidden reveal">
          {/* Glow */}
          <div className="absolute w-[400px] h-[400px] rounded-full bg-blue blur-[110px] opacity-15 right-[-180px] bottom-[-200px] pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 text-cyan text-[11px] font-semibold uppercase tracking-[0.14em]">
              <span className="w-7 h-px bg-cyan" />
              Have a project in mind?
            </div>
            <h2 className="font-display font-semibold text-[38px] md:text-[64px] leading-[1.08] tracking-[-0.04em] mt-5">
              Let&apos;s make something
              <br />
              <span className="gradient-text">useful together.</span>
            </h2>
            <p className="text-muted text-[15px] mt-5 max-w-[400px]">
              Whether you have a clear brief or just an early idea, I&apos;d be happy to hear about it.
            </p>
          </div>

          <div className="relative z-10 flex flex-col items-start justify-center gap-6">
            <a
              href="mailto:ducheldecarte@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-3.5 text-[13px] font-semibold rounded-md bg-blue text-white shadow-[0_12px_30px_rgba(29,117,255,0.2)] hover:bg-blue-light hover:-translate-y-0.5 transition-all duration-250"
            >
              Start a conversation <span className="text-cyan">↗</span>
            </a>
            {contactDetails.map((detail) => {
              const content = (
                <div className="flex flex-col gap-1">
                  <span className="text-[12px] text-muted">{detail.label}</span>
                  <span className="text-[14px] text-text">{detail.value}</span>
                </div>
              );
              return detail.href ? (
                <a
                  key={detail.label}
                  href={detail.href}
                  target={detail.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener"
                  className="hover:opacity-80 transition-opacity"
                >
                  {content}
                </a>
              ) : (
                <div key={detail.label}>{content}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
