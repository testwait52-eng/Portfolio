export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-shell mx-auto px-5 md:px-8 py-7 md:py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-muted text-[11px]">
        <a href="#home" className="flex items-center gap-3 group">
          <span className="w-8 h-8 rounded-lg border border-blue/50 overflow-hidden bg-[#02050a] grid place-items-center transition-transform group-hover:scale-105">
            <img
              src="/images/WhatsApp_Image_2026-09-04_at_17.15.38.jpeg"
              alt=""
              className="w-full h-full object-cover"
            />
          </span>
          <span className="font-display font-bold text-[14px] tracking-[0.17em]">
            DUCHEL<span className="text-cyan">.</span>
          </span>
        </a>
        <p>© 2026 Duchel Decarte. Built with curiosity and care.</p>
        <div className="flex gap-5">
          <a
            href="https://github.com/leduc"
            target="_blank"
            rel="noopener"
            className="hover:text-cyan transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/duchel-decarte"
            target="_blank"
            rel="noopener"
            className="hover:text-cyan transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href="tel:+237651203488"
            className="hover:text-cyan transition-colors"
          >
            Phone ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
