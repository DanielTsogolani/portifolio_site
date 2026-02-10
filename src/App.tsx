import './App.css'

const developerProjects = [
  {
    title: 'Atlas Studio',
    role: 'Full-stack build',
    description:
      'A content studio site with a headless CMS, fast search, and a publishing workflow that cut updates from days to minutes.',
    tags: ['React', 'Node', 'Postgres'],
  },
  {
    title: 'Pulse Retail',
    role: 'UX + Frontend',
    description:
      'Reimagined a product catalog with a motion-first UI, increasing add-to-cart conversion and reducing support tickets.',
    tags: ['TypeScript', 'Motion', 'A/B tests'],
  },
  {
    title: 'Lumen Labs',
    role: 'Design systems',
    description:
      'A shared design system and component library that unified six product teams and eliminated visual drift.',
    tags: ['Design System', 'Storybook', 'Tokens'],
  },
]

const assistantProjects = [
  {
    title: 'Inbox Triage',
    role: 'Virtual assistant',
    description:
      'Built a repeatable workflow to triage 250+ weekly emails, surface priority leads, and draft responses.',
    tags: ['Gmail', 'Notion', 'Templates'],
    links: [
      { label: 'Google Sheet', href: 'https://docs.google.com/spreadsheets' },
      { label: 'Docs SOP', href: 'https://docs.google.com/document' },
    ],
  },
  {
    title: 'Calendar Ops',
    role: 'Virtual assistant',
    description:
      'Automated scheduling, travel coordination, and meeting notes for a distributed leadership team.',
    tags: ['Calendar', 'Docs', 'Automation'],
    links: [
      { label: 'Schedule Sheet', href: 'https://docs.google.com/spreadsheets' },
      { label: 'Notes Doc', href: 'https://docs.google.com/document' },
    ],
  },
  {
    title: 'Client Onboarding',
    role: 'Virtual assistant',
    description:
      'Standardized intake forms, contracts, and checklists to cut onboarding time by 40 percent.',
    tags: ['CRM', 'Forms', 'Checklists'],
    links: [
      { label: 'Intake Form', href: 'https://docs.google.com/forms' },
      { label: 'Checklist Doc', href: 'https://docs.google.com/document' },
    ],
  },
]

const contentSkills = [
  'Content calendars and planning',
  'CMS updates and publishing',
  'SEO basics and metadata',
  'Editorial QA and formatting',
  'Asset organization',
  'Analytics reporting',
]

const testimonials = [
  {
    quote:
      'Daniel brings structure fast. Our backlog went from chaos to clear weekly priorities in two sprints.',
    name: 'Martha N.',
    role: 'Operations Lead',
  },
  {
    quote:
      'A calm partner who documents everything. Our handoffs and client comms are finally consistent.',
    name: 'Brian T.',
    role: 'Agency Director',
  },
  {
    quote:
      'He ships clean interfaces and keeps stakeholders aligned. The team trusted his process immediately.',
    name: 'Sasha P.',
    role: 'Product Manager',
  },
]

export default function App() {
  return (
    <div className="page">
      <header className="nav">
        <div className="brand">
          <div className="logo">DT</div>
          <span>Daniel Tsogolani</span>
        </div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#developer">Developer Projects</a>
          <a href="#assistant">Virtual Assistant</a>
          <a href="#content">Content Skills</a>
          <a href="#contact" className="button ghost">
            Hire Me
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="about">
          <div className="hero-content">
            <p className="eyebrow">Software Engineer · Data Analyst</p>
            <h1>
              I design and build digital products that feel clean, fast, and
              reliable.
            </h1>
            <p className="lead">
              Hi, I am Daniel. I craft web applications, support teams as a
              virtual assistant, and keep content pipelines organized and
              consistent.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                Work with me
              </a>
              <a className="button ghost" href="#developer">
                See my work
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/daniel.jpg" alt="Daniel Tsogolani" />
          </div>
        </section>

        <section className="section" id="developer">
          <div className="section-header">
            <h2>Developer projects</h2>
            <p>
              Full-stack builds and front-end experiences that solve real
              business problems.
            </p>
          </div>
          <div className="card-grid">
            {developerProjects.map((project) => (
              <article className="project-card" key={project.title}>
                <div>
                  <h3>{project.title}</h3>
                  <p className="role">{project.role}</p>
                  <p>{project.description}</p>
                </div>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="assistant">
          <div className="section-header">
            <h2>Virtual assistant projects</h2>
            <p>
              Operational support, client communication, and workflows that
              keep teams focused.
            </p>
          </div>
          <div className="card-grid">
            {assistantProjects.map((project) => (
              <article className="project-card" key={project.title}>
                <div>
                  <h3>{project.title}</h3>
                  <p className="role">{project.role}</p>
                  <p>{project.description}</p>
                </div>
                <div className="link-grid">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      className="link-chip"
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="content">
          <div className="section-header">
            <h2>Content management skills</h2>
            <p>
              Structured publishing workflows, editorial QA, and clean content
              operations.
            </p>
          </div>
          <div className="skill-grid">
            {contentSkills.map((skill) => (
              <div className="skill-card" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="testimonials">
          <div className="section-header">
            <h2>Testimonials</h2>
            <p>
              Notes from teams and founders I have supported across engineering
              and operations work.
            </p>
          </div>
          <div className="card-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.name}>
                <p className="quote">"{testimonial.quote}"</p>
                <p className="role">{testimonial.name}</p>
                <p className="testimonial-role">{testimonial.role}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="section-header">
            <h2>Let us build something together</h2>
            <p>
              Share a few details and I will reply with next steps and
              availability.
            </p>
          </div>
          <form className="contact-form">
            <label>
              Name
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" placeholder="you@email.com" />
            </label>
            <label>
              Project details
              <textarea rows={4} placeholder="What are we building?" />
            </label>
            <button className="button primary" type="submit">
              Send message
            </button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Daniel Tsogolani. Crafted with care.</p>
      </footer>
    </div>
  )
}
