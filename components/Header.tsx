"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#050912]/90 backdrop-blur-xl border-b border-line"
            : "border-b border-transparent"
        }`}
      >
        <div className="max-w-shell mx-auto px-5 md:px-8 h-[72px] flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <span className="w-9 h-9 rounded-lg border border-blue/50 overflow-hidden bg-[#02050a] grid place-items-center transition-transform group-hover:scale-105">
              <img
                src="/images/WhatsApp_Image_2026-09-04_at_17.15.38.jpeg"
                alt=""
                className="w-full h-full object-cover"
              />
            </span>
            <span className="font-display font-bold text-[15px] tracking-[0.17em]">
              DUCHEL<span className="text-cyan">.</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 ml-12">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-[13px] relative transition-colors duration-200 ${
                  activeSection === item.href.slice(1)
                    ? "text-text"
                    : "text-muted hover:text-text"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-2 left-0 h-px bg-cyan transition-all duration-300 ${
                    activeSection === item.href.slice(1) ? "w-full" : "w-0"
                  }`}
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center text-[13px] border border-line px-4 py-2.5 rounded-md hover:border-blue hover:bg-blue/10 transition-colors duration-200"
            >
              Let&apos;s talk <span className="text-cyan ml-2">↗</span>
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className={`w-5 h-px bg-text transition-all ${menuOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
              <span className={`w-5 h-px bg-text transition-all ${menuOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed top-[72px] left-3 right-3 z-40 md:hidden transition-all duration-300 ${
          menuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <nav className="bg-[#0a1220]/97 border border-line rounded-xl p-2 backdrop-blur-xl">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={`block px-4 py-3.5 text-[15px] border-b border-line/50 last:border-0 transition-colors ${
                activeSection === item.href.slice(1) ? "text-cyan" : "text-muted"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="block px-4 py-3.5 text-[15px] text-blue font-medium"
          >
            Let&apos;s talk ↗
          </a>
        </nav>
      </div>
    </>
  );
}
