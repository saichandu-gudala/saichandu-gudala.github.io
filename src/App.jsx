import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Linkedin,
  Mail,
  Menu,
  Server,
  Workflow,
  X,
} from "lucide-react";
import { useState } from "react";
import profilePhoto from "../assets/profile-photo.png";

const navItems = ["Experience", "Projects", "Skills", "About", "Contact"];

const projects = [
  {
    title: "KYC Match Engine",
    description:
      "Applicant validation microservice integrating multiple data sources and reducing onboarding processing time by 25%.",
    stack: ["Java", "Spring Boot", "AWS", "REST APIs"],
    icon: Server,
  },
  {
    title: "Workflow Automation Engine",
    description:
      "Activiti BPMN-based workflow orchestration for KYC and document verification across distributed services.",
    stack: ["Activiti BPMN", "Spring Boot", "Microservices"],
    icon: Workflow,
  },
  {
    title: "Online Code Compiler",
    description:
      "Docker-based secure code execution platform enabling containerized compilation and execution of user code.",
    stack: ["Docker", "Python", "Linux"],
    icon: Code2,
  },
  {
    title: "Banking System in Python",
    description:
      "CLI-based banking system simulator supporting transactions, balance tracking, and account operations.",
    stack: ["Python", "CLI", "Account Operations"],
    icon: Database,
  },
];

const skills = [
  "Java",
  "Spring Boot",
  "Spring Data JPA",
  "Spring Security",
  "Activiti BPMN",
  "AWS EC2",
  "AWS Lambda",
  "AWS SQS",
  "AWS SNS",
  "CloudFormation",
  "CodePipeline",
  "PostgreSQL",
  "DynamoDB",
  "Redis",
  "Python",
  "Git",
  "Docker",
  "Linux",
  "RESTful APIs",
  "Microservices",
  "Asynchronous Processing",
];

const experience = [
  {
    company: "Credit Saison India Pvt Ltd",
    role: "Lead Software Engineer",
    location: "Bangalore",
    period: "June 2021 to Present",
    points: [
      "Designed and maintained scalable Spring Boot microservices deployed through AWS CloudFormation and CodePipeline.",
      "Implemented event-driven architecture using AWS SQS and Lambda, processing 1M+ events per month.",
      "Mentored 3 junior engineers, led architecture reviews, and improved code quality through structured reviews.",
    ],
  },
  {
    company: "Tata Consultancy Services Pvt Ltd",
    role: "Application Developer",
    location: "Hyderabad",
    period: "June 2019 to June 2021",
    points: [
      "Built RESTful microservices using Spring Boot and integrated them with enterprise systems and relational databases.",
      "Deployed Docker-based applications and managed Linux environments for application hosting.",
      "Automated log analysis and monitoring scripts to reduce debugging and incident resolution time.",
    ],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-mist text-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a
            href="#home"
            className="block h-11 w-11 overflow-hidden rounded-lg border border-white/70 bg-white shadow-soft transition hover:-translate-y-0.5"
            aria-label="Gudala Saichandu home"
          >
            <img
              src={profilePhoto}
              alt="Gudala Saichandu"
              className="h-full w-full object-cover"
            />
          </a>

          <nav className="hidden items-center gap-7 text-sm font-bold text-graphite md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-teal">
                {item}
              </a>
            ))}
          </nav>

          <a
            href="mailto:saichandugudala1@gmail.com"
            className="hidden items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-teal md:inline-flex"
          >
            <Mail size={17} />
            Contact
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
                Senior Backend Engineer | 7+ Years
              </p>
              <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-normal text-ink sm:text-6xl lg:text-7xl">
                Gudala Saichandu builds scalable backend systems.
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-graphite sm:text-xl">
                Java, Spring Boot, and AWS engineer experienced in microservices, event-driven
                architecture, workflow automation, and mission-critical backend platforms.
              </p>
              <div className="mt-9 flex">
                <a
                  href="#experience"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-teal"
                >
                  View Experience
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-line bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-line px-5 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-8">
            {[
              ["Experience", "7+ years"],
              ["Scale", "1M+ events/month"],
              ["Impact", "25% faster onboarding"],
            ].map(([label, value]) => (
              <div key={label} className="py-7 md:px-8 first:md:pl-0 last:md:pr-0">
                <p className="text-xs font-black uppercase text-coral">{label}</p>
                <p className="mt-2 text-xl font-black text-ink">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="section-kicker">Experience</p>
            <h2 className="section-title">Backend systems built for reliability and scale.</h2>
          </div>

          <div className="mt-10 grid gap-5">
            {experience.map((job) => (
              <article key={job.company} className="rounded-lg border border-line bg-white p-6 shadow-sm">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                  <div>
                    <h3 className="text-2xl font-black text-ink">{job.company}</h3>
                    <p className="mt-1 font-bold text-teal">{job.role}</p>
                  </div>
                  <div className="text-left text-sm font-bold text-graphite md:text-right">
                    <p>{job.location}</p>
                    <p>{job.period}</p>
                  </div>
                </div>
                <ul className="mt-6 grid gap-3 text-sm font-medium leading-7 text-graphite">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-coral" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="section-kicker">Projects</p>
            <h2 className="section-title">Projects and systems from the resume.</h2>
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
              <h2 className="section-title text-white">Java backend, cloud, and distributed systems.</h2>
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
            <h2 className="section-title">Lead engineer with hands-on delivery experience.</h2>
          </div>
          <div className="space-y-5 text-lg font-medium leading-8 text-graphite">
            <p>
              I specialize in architecting high-performance backend services using Java, Spring Boot,
              AWS, PostgreSQL, DynamoDB, Redis, and resilient REST API patterns.
            </p>
            <p>
              My experience includes KYC systems, document verification workflows, event-driven
              processing, Docker-based deployments, Linux environments, and mentoring backend teams.
            </p>
            <p>
              Education: B.Tech in Computer Science Engineering from JNTUH College of Engineering
              Jagitial, 2019.
            </p>
          </div>
        </section>

        <section id="contact" className="border-t border-line bg-white px-5 py-20 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="section-kicker">Contact</p>
              <h2 className="section-title">Open to senior backend engineering opportunities.</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a className="contact-link bg-ink text-white" href="mailto:saichandugudala1@gmail.com">
                <Mail size={19} />
                Email
              </a>
              <a
                className="contact-link"
                href="https://www.linkedin.com/in/saichandugudala"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={19} />
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink px-5 py-7 text-sm font-semibold text-white/70 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 sm:flex-row">
          <p>Gudala Saichandu - Senior Backend Engineer</p>
          <p>Java | Spring Boot | AWS | Microservices</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
