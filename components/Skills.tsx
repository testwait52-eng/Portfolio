import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-divider py-24 md:py-32"
    >
      <div className="max-w-shell mx-auto px-5 md:px-8">
        <div className="grid grid-cols-[42px_1fr] md:grid-cols-[110px_1fr] gap-3 md:gap-6 mb-14 md:mb-16 reveal">
          <span className="font-display font-medium text-[13px] text-cyan pt-2.5">02</span>
          <div>
            <div className="flex items-center gap-3 text-cyan text-[11px] font-semibold uppercase tracking-[0.14em]">
              <span className="w-7 h-px bg-cyan" />
              My toolkit
            </div>
            <h2 className="font-display font-semibold text-[34px] md:text-[58px] leading-[1.08] tracking-[-0.04em] mt-5">
              Tools for turning
              <br />
              <span className="gradient-text">ideas into reality.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-12 md:gap-28 md:ml-[132px]">
          <div className="reveal">
            <p className="text-muted text-[15px] mb-10">
              My everyday stack is focused on building modern, fast and maintainable products from front to back.
            </p>
            <div className="space-y-0">
              {skills.map((group) => (
                <div
                  key={group.number}
                  className="flex justify-between items-center py-3.5 border-t border-line text-[12px] text-text"
                >
                  <span>{group.label}</span>
                  <span className="text-cyan">{group.number}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-1 flex flex-wrap gap-3 content-start">
            {skills.flatMap((g) => g.items).map((tech, i) => {
              const featured = ["React", "TypeScript", "Supabase", "PWA"].includes(tech);
              return (
                <span
                  key={i}
                  className={`font-display text-[13px] px-4 py-3 bg-panel border rounded-md transition-all duration-200 hover:-translate-y-1 ${
                    featured
                      ? "text-text border-[#2d6eb0] bg-blue/10"
                      : "text-muted border-line hover:text-text hover:border-cyan"
                  }`}
                >
                  {tech}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
