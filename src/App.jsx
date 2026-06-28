import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Github,
  Linkedin,
  Mail,
  Menu,
  Rocket,
  Server,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

const navItems = ["Projects", "Skills", "About", "Contact"];

const projects = [
  {
    title: "Task Management App",
    description:
      "A focused dashboard for tracking tasks, filtering status, and keeping project work organized.",
    stack: ["React", "Local Storage", "Tailwind"],
    icon: Rocket,
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather interface with location search, forecast cards, and clear condition states.",
    stack: ["JavaScript", "API", "CSS"],
    icon: Sparkles,
  },
  {
    title: "Portfolio Website",
    description:
      "This React + Vite portfolio, built for fast loading and free GitHub Pages deployment.",
    stack: ["React", "Vite", "GitHub Pages"],
    icon: Code2,
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Vite",
  "Tailwind CSS",
  "Node.js",
  "Git",
  "REST APIs",
  "Responsive UI",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-mist text-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a
            href="#home"
            className="grid h-11 w-11 place-items-center rounded-lg bg-ink text-sm font-black text-white shadow-soft"
            aria-label="Sai Chandu home"
          >
            SC
          </a>

          <nav className="hidden items-center gap-7 text-sm font-bold text-graphite md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-teal">
                {item}
              </a>
            ))}
          </nav>

          <a
            href="mailto:hello@example.com"
            className="hidden items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-teal md:inline-flex"
          >
            <Mail size={17} />
            Hire Me
          </a>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-lg border border-line bg-white text-ink md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-line bg-white px-5 py-4 md:hidden" aria-label="Mobile navigation">
            <div className="mx-auto grid max-w-7xl gap-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="rounded-lg px-3 py-3 text-sm font-bold text-graphite hover:bg-mist"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main id="home">
        <section className="relative isolate overflow-hidden pt-24">
          <img
            src="./assets/hero-workspace.png"
            alt=""
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(244,247,248,0.98)_0%,rgba(244,247,248,0.9)_42%,rgba(244,247,248,0.35)_100%)]" />

          <div className="mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl content-center px-5 py-16 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex items-center gap-2 rounded-lg border border-teal/20 bg-white/75 px-3 py-2 text-xs font-black uppercase text-teal shadow-sm">
                <BriefcaseBusiness size={16} />
                React + Vite portfolio ready for GitHub Pages
              </p>
              <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-normal text-ink sm:text-6xl lg:text-7xl">
                Hi, I am Sai Chandu. I build modern web apps.
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-graphite sm:text-xl">
                A software developer focused on clean UI, practical projects, and fast websites that
                are simple to maintain and free to host.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-teal"
                >
                  View Projects
                  <ArrowUpRight size={18} />
                </a>
                <a
                  href="mailto:hello@example.com"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-white/80 px-5 py-3.5 text-sm font-black text-ink transition hover:-translate-y-0.5 hover:border-teal"
                >
                  Contact Me
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-line bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-line px-5 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-8">
            {[
              ["Stack", "React + Vite + Tailwind"],
              ["Hosting", "GitHub Pages"],
              ["Domain", "yourname.github.io"],
            ].map(([label, value]) => (
              <div key={label} className="py-7 md:px-8 first:md:pl-0 last:md:pr-0">
                <p className="text-xs font-black uppercase text-coral">{label}</p>
                <p className="mt-2 text-xl font-black text-ink">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="section-kicker">Projects</p>
            <h2 className="section-title">Work that shows how I think and build.</h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article
                  key={project.title}
                  className="rounded-lg border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-lg bg-teal/10 text-teal">
                      <Icon size={24} />
                    </span>
                    <a href="#" aria-label={`Open ${project.title}`} className="text-graphite hover:text-teal">
                      <ArrowUpRight size={21} />
                    </a>
                  </div>
                  <h3 className="text-2xl font-black text-ink">{project.title}</h3>
                  <p className="mt-4 text-sm font-medium leading-7 text-graphite">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-lg border border-line px-3 py-1.5 text-xs font-black">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="skills" className="bg-ink px-5 py-20 text-white lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1fr]">
            <div>
              <p className="section-kicker text-amber">Skills</p>
              <h2 className="section-title text-white">The tools behind the work.</h2>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {skills.map((skill) => (
                <div key={skill} className="rounded-lg border border-white/15 bg-white/8 px-4 py-4 font-bold">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.8fr_1fr] lg:px-8 lg:py-28">
          <div>
            <p className="section-kicker">About</p>
            <h2 className="section-title">A developer who likes useful, polished things.</h2>
          </div>
          <div className="space-y-5 text-lg font-medium leading-8 text-graphite">
            <p>
              I am building my portfolio around projects that demonstrate frontend engineering,
              responsive design, and problem solving with real user flows.
            </p>
            <p>
              Replace this section with your actual education, certifications, internships,
              achievements, and the kind of developer role you want.
            </p>
          </div>
        </section>

        <section id="contact" className="border-t border-line bg-white px-5 py-20 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="section-kicker">Contact</p>
              <h2 className="section-title">Let us build your next opportunity page.</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a className="contact-link bg-ink text-white" href="mailto:hello@example.com">
                <Mail size={19} />
                Email
              </a>
              <a className="contact-link" href="https://github.com/" target="_blank" rel="noreferrer">
                <Github size={19} />
                GitHub
              </a>
              <a className="contact-link" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                <Linkedin size={19} />
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink px-5 py-7 text-sm font-semibold text-white/70 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 sm:flex-row">
          <p>Built with React, Vite, Tailwind CSS, and Lucide Icons.</p>
          <p>Free domain: yourname.github.io</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
