export const projects = [
  {
    name: "FOROMAMED",
    type: "E-commerce · 2024",
    description:
      "Smart shopping for orthopedic equipment in Yaoundé, with FCFA pricing and intelligent product search.",
    image: "/assets/foromamed.png",
    link: "https://foromamed.com",
    tags: ["React", "TypeScript", "Supabase"],
    status: "live" as const,
    large: true,
  },
  {
    name: "YourChemLab",
    type: "Web platform · 2024",
    description:
      "A clear digital home for a chemical products lab and supplier — catalog, services, and client contact.",
    image: "/assets/yourchemlab.png",
    link: "https://yourchemlab.com",
    tags: ["React", "Vite"],
    status: "live" as const,
  },
  {
    name: "GeoCasa",
    type: "PWA · Ongoing",
    description:
      "Offline-first cadastral and real-estate management — files, phases, payments, all accessible without stable internet.",
    image: "/assets/54.png",
    link: null,
    tags: ["React", "IndexedDB", "Supabase"],
    status: "private" as const,
  },
  {
    name: "ORTHOMEDICAL",
    type: "E-commerce · 2025",
    description:
      "Product catalog and order management for a medical equipment business in Yaoundé.",
    image: "/assets/orthomedical.png",
    link: "https://orthomedical237.com",
    tags: ["Next.js", "PostgreSQL"],
    status: "live" as const,
  },
  {
    name: "Blend Hair",
    type: "E-commerce · 2025",
    description:
      "E-commerce platform for afro kinky hair — 100% human hair, with Stripe payment integration.",
    image: "/assets/blendair.png",
    link: null,
    tags: ["React", "TypeScript", "Stripe"],
    status: "live" as const,
  },
  {
    name: "Ingénuim Elect",
    type: "Showcase · 2024",
    description:
      "Showcase site for an electrical engineering company in France — services and past work.",
    image: "/assets/ingeniumelect.png",
    link: "https://ingenuimelect.fr",
    tags: ["React", "Tailwind"],
    status: "live" as const,
  },
];

export const timeline = [
  {
    date: "2021",
    title: "Started coding",
    description:
      "Discovered web development and built strong foundations in HTML, CSS and JavaScript.",
  },
  {
    date: "2022 — 2023",
    title: "Found my stack",
    description:
      "Moved into React and TypeScript, building more complex interfaces and learning how to structure products for growth.",
  },
  {
    date: "2024 — 2026",
    title: "Shipping for real people",
    description:
      "Delivered e-commerce, medical, chemical and internal business products for clients in Cameroon and France.",
  },
];

export const skills = [
  { label: "Frontend", number: "01", items: ["React", "TypeScript", "Next.js", "Vite", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 / CSS3"] },
  { label: "Backend & data", number: "02", items: ["Supabase", "PostgreSQL", "PHP", "Python", "REST APIs", "Stripe"] },
  { label: "Infrastructure", number: "03", items: ["Docker", "VPS", "Railway", "Cloudinary", "Netlify", "Git / GitHub"] },
  { label: "AI & workflow", number: "04", items: ["AI-assisted development", "Rapid prototyping", "PWA / Offline-first", "IndexedDB"] },
];

export const aboutNotes = [
  { index: "01", title: "Human-centered", text: "Technology that makes everyday work easier." },
  { index: "02", title: "Built to last", text: "Clean foundations, thoughtful details, steady growth." },
  { index: "03", title: "Always learning", text: "Curious about better tools and better ways to build." },
];

export const contactDetails = [
  { label: "WhatsApp", value: "+237 651 203 488", href: "https://wa.me/237651203488" },
  { label: "Email", value: "ducheldecarte@gmail.com", href: "mailto:ducheldecarte@gmail.com" },
  { label: "GitHub", value: "github.com/leduc", href: "https://github.com/leduc" },
  { label: "LinkedIn", value: "linkedin.com/in/duchel-decarte", href: "https://www.linkedin.com/in/duchel-decarte" },
  { label: "Location", value: "Yaoundé, Cameroon", href: null },
];
