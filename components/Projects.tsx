import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-divider py-24 md:py-32"
    >
      <div className="max-w-shell mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-12 md:mb-14 reveal">
          <div>
            <div className="flex items-center gap-3 text-cyan text-[11px] font-semibold uppercase tracking-[0.14em]">
              <span className="w-7 h-px bg-cyan" />
              Selected work
            </div>
            <h2 className="font-display font-semibold text-[34px] md:text-[58px] leading-[1.08] tracking-[-0.04em] mt-5">
              Things I&apos;ve helped
              <br />
              <span className="gradient-text">bring to life.</span>
            </h2>
          </div>
          <p className="text-muted text-[14px] max-w-[220px]">
            Real products, real constraints, and a lot of care in the details.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {projects.map((project, i) => (
            <article
              key={project.name}
              className={`group bg-panel border border-line rounded-md overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2b6097] hover:shadow-[0_20px_45px_rgba(0,0,0,0.2)] reveal ${
                project.large ? "md:col-span-2" : ""
              } ${i % 2 === 1 ? "reveal-delay-1" : ""}`}
            >
              <div
                className={`relative overflow-hidden bg-panel-2 ${
                  project.large ? "h-[260px] md:h-[320px]" : "h-[210px] md:h-[230px]"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top saturate-[0.75] transition-all duration-500 group-hover:scale-105 group-hover:saturate-100"
                />
                <span
                  className={`absolute top-4 right-4 text-[10px] uppercase font-bold tracking-[0.08em] px-2.5 py-1.5 rounded ${
                    project.status === "live"
                      ? "bg-green text-[#07100a]"
                      : "bg-panel border border-line text-muted"
                  }`}
                >
                  {project.status === "live" ? "Live" : "Private"}
                </span>
              </div>

              <div className="flex justify-between gap-4 px-5 pt-5 pb-3">
                <div>
                  <span className="text-cyan text-[10px] uppercase tracking-[0.1em]">
                    {project.type}
                  </span>
                  <h3 className="font-display font-semibold text-[22px] mt-2 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-muted text-[13px] max-w-[410px]">
                    {project.description}
                  </p>
                </div>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener"
                    aria-label={`Visit ${project.name}`}
                    className="text-[26px] text-cyan hover:translate-x-1 hover:-translate-y-1 transition-transform duration-200"
                  >
                    ↗
                  </a>
                ) : (
                  <span className="text-[26px] text-muted/50">↗</span>
                )}
              </div>

              <div className="flex flex-wrap gap-1.5 px-5 pb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] text-muted border border-line px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mt-7 reveal">
          <span className="text-muted text-[13px]">
            More work across web, business tools and digital products
          </span>
          <a
            href="https://github.com/leduc"
            target="_blank"
            rel="noopener"
            className="text-[13px] text-text border-b border-line pb-1.5 hover:border-cyan hover:text-cyan transition-colors"
          >
            View GitHub <span className="text-cyan">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
