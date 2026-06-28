import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
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

const navItems = ["Experience", "Achievements", "Projects", "Skills", "About", "Contact"];

const coreStrengths = [
  "Spring Boot",
  "AWS",
  "Microservices",
  "Event-Driven Systems",
  "KYC Platforms",
];

const achievements = [
  {
    metric: "1M+",
    label: "events processed monthly",
    detail: "Built asynchronous AWS SQS and Lambda pipelines for high-volume backend workflows.",
  },
  {
    metric: "25%",
    label: "faster onboarding",
    detail: "Improved applicant validation and KYC processing through service automation.",
  },
  {
    metric: "3",
    label: "engineers mentored",
    detail: "Led architecture reviews, code quality practices, and delivery guidance for junior engineers.",
  },
  {
    metric: "7+",
    label: "years backend experience",
    detail: "Delivered Java, Spring Boot, AWS, REST API, and distributed systems across fintech platforms.",
  },
];

const projects = [
  {
    title: "KYC Match Engine",
    problem: "Applicant checks were slowed by fragmented validation sources and manual review steps.",
    built: "Designed a Spring Boot validation microservice integrating multiple KYC data sources.",
    impact: "Reduced onboarding processing time by 25% while improving consistency across checks.",
    stack: ["Java", "Spring Boot", "AWS", "REST APIs"],
    icon: Server,
  },
  {
    title: "Workflow Automation Engine",
    problem: "KYC and document verification needed clearer orchestration across distributed services.",
    built: "Implemented Activiti BPMN workflows with Spring Boot microservices for review automation.",
    impact: "Standardized verification paths and made backend workflows easier to operate and extend.",
    stack: ["Activiti BPMN", "Spring Boot", "Microservices"],
    icon: Workflow,
  },
  {
    title: "Secure Containerized Code Execution Platform",
    problem: "User-submitted code required isolated execution without risking the host environment.",
    built: "Created a Docker-based compilation and execution platform with Linux process isolation.",
    impact: "Enabled safer, repeatable code execution through containerized runtime boundaries.",
    stack: ["Docker", "Python", "Linux"],
    icon: Code2,
  },
  {
    title: "CLI Banking Transaction Simulator",
    problem: "Core banking flows needed a focused way to model account behavior and transaction logic.",
    built: "Built a Python CLI simulator for account operations, transaction handling, and balances.",
    impact: "Demonstrated clean domain modeling for financial workflows and command-line tooling.",
    stack: ["Python", "CLI", "Account Operations"],
    icon: Database,
  },
];

const skills = [
  "System Design",
  "Distributed Systems",
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
  "API Design",
  "Microservices",
  "Message Queues",
  "Observability",
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
      "Owned backend systems for lending, KYC, document verification, and workflow automation domains.",
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

          <div className="mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.8fr] lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex items-center gap-2 rounded-lg border border-teal/20 bg-white/75 px-3 py-2 text-xs font-black uppercase text-teal shadow-sm">
                <BriefcaseBusiness size={16} />
                Lead Software Engineer | Backend Systems | Java, Spring Boot, AWS
              </p>
              <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-normal text-ink sm:text-6xl lg:text-7xl">
                Gudala Saichandu builds scalable backend systems.
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-graphite sm:text-xl">
                Backend engineer with 7+ years building scalable lending, KYC, and workflow
                platforms using Java, Spring Boot, AWS, and event-driven architecture.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {coreStrengths.map((strength) => (
                  <span
                    key={strength}
                    className="rounded-lg border border-teal/20 bg-white/80 px-3 py-2 text-xs font-black text-ink shadow-sm"
                  >
                    {strength}
                  </span>
                ))}
              </div>
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
            <div className="justify-self-center lg:justify-self-end">
              <div className="relative h-[360px] w-[min(100%,320px)] overflow-hidden rounded-lg border border-white/70 bg-white shadow-soft sm:h-[440px] sm:w-[380px] lg:h-[520px] lg:w-[420px]">
                <img
                  src={profilePhoto}
                  alt="Gudala Saichandu"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-line bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-line px-5 md:grid-cols-4 md:divide-x md:divide-y-0 lg:px-8">
            {[
              ["Experience", "7+ years"],
              ["Scale", "1M+ events/month"],
              ["Impact", "25% faster onboarding"],
              ["Leadership", "3 engineers mentored"],
            ].map(([label, value]) => (
              <div key={label} className="py-7 md:px-8 first:md:pl-0 last:md:pr-0">
                <p className="text-xs font-black uppercase text-coral">{label}</p>
                <p className="mt-2 text-xl font-black text-ink">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-mist px-5 py-14 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.45fr_1fr] lg:items-center">
            <div>
              <p className="section-kicker">Currently</p>
              <h2 className="text-3xl font-black leading-tight text-ink">
                Leading backend engineering for lending and KYC systems.
              </h2>
            </div>
            <p className="text-lg font-medium leading-8 text-graphite">
              At Credit Saison India, I work on production backend platforms across applicant
              validation, document verification, workflow automation, event-driven integrations,
              and cloud deployment pipelines.
            </p>
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

        <section id="achievements" className="border-y border-line bg-white px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="section-kicker">Selected Achievements</p>
              <h2 className="section-title">Measurable delivery across backend systems and teams.</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {achievements.map((achievement) => (
                <article key={achievement.label} className="rounded-lg border border-line bg-mist p-6">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-coral/10 text-coral">
                    <Award size={24} />
                  </div>
                  <p className="text-5xl font-black leading-none text-ink">{achievement.metric}</p>
                  <h3 className="mt-3 text-lg font-black text-ink">{achievement.label}</h3>
                  <p className="mt-4 text-sm font-medium leading-7 text-graphite">{achievement.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="section-kicker">Projects</p>
            <h2 className="section-title">Production systems, automation platforms, and backend tools I have built.</h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
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
                  <div className="mt-5 grid gap-4 text-sm font-medium leading-7 text-graphite">
                    {[
                      ["Problem", project.problem],
                      ["Built", project.built],
                      ["Impact", project.impact],
                    ].map(([label, value]) => (
                      <div key={label} className="flex gap-3">
                        <CheckCircle2 className="mt-1 shrink-0 text-teal" size={18} />
                        <p>
                          <span className="font-black text-ink">{label}: </span>
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
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
              <h2 className="section-title text-white">
                Java backend, cloud, distributed systems, and API delivery.
              </h2>
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
            <h2 className="section-title">Lead engineer with hands-on system design and delivery experience.</h2>
          </div>
          <div className="space-y-5 text-lg font-medium leading-8 text-graphite">
            <p>
              I specialize in architecting high-performance backend services using Java, Spring Boot,
              AWS, PostgreSQL, DynamoDB, Redis, message queues, and resilient REST API patterns.
            </p>
            <p>
              My experience includes KYC systems, document verification workflows, event-driven
              processing, Docker-based deployments, Linux environments, cloud infrastructure,
              observability practices, and mentoring backend teams.
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
              <h2 className="section-title">Let's build reliable backend systems.</h2>
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
