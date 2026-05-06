import './App.css';

const skills = [
  { name: 'ANGULAR 15, 16, 17', level: 40 },
  { name: 'REACT JS', level: 40 },
  { name: 'CSS (Bootstrap, Tailwind, Material UI, Angular material)', level: 80 },
  { name: 'JAVASCRIPT JQUERY', level: 60 },
  { name: 'HTML', level: 90 },
];

const socialLinks = [
  {
    name: 'Facebook',
    label: 'Fb',
    url: 'https://www.facebook.com/amitdwivedi786786/',
  },
  {
    name: 'Instagram',
    label: 'In',
    url: 'https://www.instagram.com/stories/dwivedi.amit154/',
  },
  {
    name: 'LinkedIn',
    label: 'Li',
    url: 'https://www.linkedin.com/in/amit-dwivedi-08b415b0/',
  },
  {
    name: 'GitHub',
    label: 'Gh',
    url: 'https://github.com/amitdevd',
  },
];

const fluperProjects = [
  {
    title: 'Aiwa',
    details: ['Role: UI Developer', 'Built responsive UI components and implemented clean HTML/CSS structure.'],
  },
  {
    title: 'Intlaq',
    details: ['Role: Web Developer', 'Designed pages and converted PSD/Figma layouts into responsive HTML.'],
  },
  {
    title: 'I-chrono',
    details: ['Link: https://i-chrono.com/home', 'Role: Frontend Developer', 'Improved user flows and developed mobile-friendly UI screens.'],
  },
  {
    title: 'Lanista Football App',
    details: ['Role: Designed interactive sections and optimized visual layout.'],
  },
  {
    title: 'Autobahn SP',
    details: ['Link: https://www.autobahnsp.com', 'Role: Frontend Developer', 'Worked on UI improvements, responsive structure, and bug fixes.'],
  },
  {
    title: 'Qurtas App',
    details: ['Link: https://www.qurtas.app/account/login', 'Role: Frontend/UI Engineer', 'Implemented login UI and reusable layout components.'],
  },
  {
    title: 'Nuzul',
    details: ['Link: http://nuzul.io/home', 'Role: Web Designer', 'Designed clean UI for service-oriented pages.'],
  },
  {
    title: 'Ritzy',
    details: ['Link: https://ritzy.co.in/', 'Role: UI Designer', 'Created modern theme elements and front-end components.'],
  },
];

const experience = [
  {
    company: 'Fluper',
    period: 'June 10 2024 to November 2025',
    role: 'Angular Designer',
    summary:
      'UI Developer with a focus on delivering impactful results, eager to tackle dynamic challenges and apply creativity to craft intuitive user experiences. Demonstrated proficiency in project management, user-centric problem-solving, and seamless collaboration across teams. Skilled in leveraging state-of-the-art tools and methodologies to streamline processes and elevate user satisfaction. To work in a creative and challenging environment where I can constantly learn and enhance my skills according to the latest trends and be part of a dynamic team that contributes to the growth of the organization.',
    projects: fluperProjects,
  },
  {
    company: 'Superb Enterprises Pvt. Ltd',
    period: 'Oct 2022 to April 2024',
    role: 'Sr. Web Designer',
    summary:
      'Website design in Photoshop, convert the Photoshop design to HTML, Fix UI bugs with developers, worked with .net developers to provide them UI/UX help. Website provides attestation visa and document attached/authorized from Government, It is authorized/certified by Indian Govt. As a Web Designer, I worked on creating modern and responsive website designs using Photoshop, HTML, CSS, Bootstrap, and jQuery. My responsibilities included designing UI layouts, converting PSD designs into pixel-perfect HTML pages, and coordinating with .NET developers to ensure smooth UI/UX implementation. I contributed to government-authorized attestation and visa service websites by maintaining clean design standards and fixing UI issues to improve user experience.',
    projectLinks: [
      ['Super Enterprise - Main Site', 'https://superenterprisesindia.com'],
      ['Delhi Attestation', 'https://superbattestation.com'],
      ['Attestation In Pune', 'https://attestationinpune.com'],
      ['Attestation In Mumbai', 'https://certificationattestationmumbai.com'],
      ['apostile Certificate', 'https://apostilecertificate.com'],
      ['Umrah Services', 'https://umrahservices.in'],
    ],
    points: [
      'Website provides attestation visa and document',
      'attached/authorized from Government, It is authorized/certified by Indian Govt.',
      'Create a color/font theme and follow on designs.',
      'PSD Design as per requirement of seniors',
      'Convert the design into HTML',
      'Worked with dot net Developer to implement the HTML',
    ],
  },
  {
    company: 'Brain Technosys Pvt. Ltd',
    period: 'Mar 2021 to Sep 2022',
    role: 'Web Designer',
    summary:
      'Converted PSD designs into responsive HTML/CSS using Bootstrap. Designed website layouts and page structures in Adobe Photoshop, enhancing user experience based on senior team requirements. Created and developed color palettes, typography themes, and UI style guidelines for consistent visual identity across services. Collaborated with .NET developers to integrate HTML templates, improving backend functionality alignment and frontend reliability. Fixed UI bugs, improved layout responsiveness, and enhanced usability across devices. Ensured all pages met UI/UX standards and delivered clean, optimized front-end code. Delivered websites for attestation, visa processing, and document authorization services with compliance to Indian Government standards.',
    points: [
      'Create a color/font theme and follow on designs.',
      'PSD Design as per requirement of seniors',
      'Convert the design into HTML',
      'Worked with dot net Developer to implement the HTML',
    ],
  },
];

const education = [
  {
    year: '2012',
    degree: 'Master Degree',
    title: 'Master of Commerce(Private)',
    school: 'C.C.S. University Meerut',
    text: 'Developed expertise in commerce subjects such as accounting, finance, and business management with a focus on analytical and problem-solving skills.',
  },
  {
    year: '2009',
    degree: "Bachelor's Degree",
    title: 'Bachelor of Commerce(Regular)',
    school: 'C.C.S. University Meerut',
    text: 'Gained a strong foundation in commerce and business principles, enhancing knowledge of economics, finance, and accounting practices.',
  },
];

function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="/">Amit Dwivedi</a>
      <nav className="nav-links" aria-label="Primary navigation">
        <a href="/#about">About</a>
        <a href="/#experience">Experience</a>
        <a href="/#projects">Projects</a>
        <a href="/#skills">Skills</a>
        <a href="/#education">Education</a>
        <a href="/blog">Blog</a>
        <a href="/#contact">Contact</a>
      </nav>
    </header>
  );
}

function BlogPage() {
  const posts = [
    {
      title: 'Daily UI Notes',
      date: 'Coming soon',
      text: 'New frontend design notes, learnings, and project updates will be added here.',
    },
  ];

  return (
    <div className="site-shell">
      <Header />
      <main>
        <section className="blog-hero">
          <div>
            <p className="eyebrow">Blog</p>
            <h1>Featured Project Notes</h1>
            <p>
              A closer look at live web experiences, UI decisions, and frontend implementation details.
            </p>
          </div>
        </section>

        <section className="section blog-list">
          <div className="post-grid">
            {posts.map((post) => (
              <article className="post-card" key={post.title}>
                <span>{post.date}</span>
                <h2>{post.title}</h2>
                <p>{post.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>@All rights reserved</p>
      </footer>
    </div>
  );
}

function App() {
  if (window.location.pathname === '/blog') {
    return <BlogPage />;
  }

  return (
    <div className="site-shell">
      <Header />

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Frontend Developer</p>
            <h1>Amit Dwivedi</h1>
            <p className="hero-text">
              Creative and results-driven UI Developer crafting visually stunning and user-friendly web interfaces with HTML, CSS, JavaScript, Angular, and React.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">Hire Me</a>
              <a className="button secondary" href="/img/amit_resume.pdf" target="_blank" rel="noreferrer">Download CV</a>
            </div>
          </div>
          <div className="hero-card" aria-label="Amit Dwivedi profile">
            <img src="/img/mine.jpg" alt="Amit Dwivedi" />
            <div>
              <span className="availability">Available for UI work</span>
              <strong>Angular Designer</strong>
            </div>
          </div>
        </section>

        <section className="social-strip" aria-label="Social links">
          {socialLinks.slice(0, 3).map((link) => (
            <a key={link.name} href={link.url} target="_blank" rel="noreferrer" aria-label={link.name}>
              <span>{link.label}</span>
              {link.name}
            </a>
          ))}
        </section>

        <section className="section about" id="about">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>About Me</h2>
          </div>
          <p>
            Creative and results-driven UI Developer with a passion for crafting visually stunning and user-friendly web interfaces. With a strong foundation in front-end technologies and a keen eye for design, I specialize in transforming concepts into engaging digital experiences. My expertise lies in HTML, CSS, JavaScript, and modern frameworks like Angular and React, allowing me to create responsive and intuitive user interfaces. I thrive in collaborative environments, working closely with cross-functional teams to deliver seamless and impactful solutions that enhance user satisfaction and drive business success.
          </p>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <p className="eyebrow">Career</p>
            <h2>Work Experience</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="experience-card" key={item.company}>
                <div className="timeline-dot" />
                <div className="experience-header">
                  <div>
                    <h3>{item.company}</h3>
                    <p>{item.role}</p>
                  </div>
                  <span>{item.period}</span>
                </div>
                <p>{item.summary}</p>

                {item.projects && (
                  <div className="mini-grid">
                    {item.projects.map((project) => (
                      <div className="mini-card" key={project.title}>
                        <h4>{project.title}</h4>
                        {project.details.map((detail) => (
                          <p key={detail}>{detail}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                )}

                {item.projectLinks && (
                  <div className="link-cloud">
                    {item.projectLinks.map(([label, url]) => (
                      <a key={label} href={url} target="_blank" rel="noreferrer">{label}</a>
                    ))}
                  </div>
                )}

                {item.points && (
                  <ul className="points">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="section projects" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Featured Work</h2>
          </div>
          <article className="project-showcase">
            <a
              className="project-preview"
              href="https://estatepulse-ai.vercel.app/"
              target="_blank"
              rel="noreferrer"
              aria-label="Open EstatePulse AI"
            >
              <img src="/img/estatepulse-ai.png" alt="EstatePulse AI landing page screenshot" />
            </a>
            <div className="project-content">
              <p className="eyebrow">Landing Page</p>
              <h3>EstatePulse AI</h3>
              <p>
                EstatePulse AI is a property-focused landing page with a clean product story, prominent call to action, and modern real-estate technology positioning.
              </p>
              <a className="button primary" href="https://estatepulse-ai.vercel.app/" target="_blank" rel="noreferrer">
                Open Website
              </a>
            </div>
          </article>
        </section>

        <section className="section skills" id="skills">
          <div className="section-heading">
            <p className="eyebrow">Technical Skills</p>
            <h2>Frameworks / Libraries</h2>
          </div>
          <div className="skill-list">
            {skills.map((skill) => (
              <div className="skill-item" key={skill.name}>
                <div className="skill-meta">
                  <span>{skill.name}</span>
                  <strong>{skill.level}%</strong>
                </div>
                <div className="skill-track">
                  <span style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <div className="section-heading">
            <p className="eyebrow">Education</p>
            <h2>Education</h2>
          </div>
          <div className="education-list">
            {education.map((item) => (
              <article className="education-card" key={item.year}>
                <div className="year-block">
                  <span>{item.year}</span>
                  <strong>{item.degree}</strong>
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <h4>{item.school}</h4>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <div>
            <p className="eyebrow">Hire me</p>
            <h2>I design and develop modern, responsive and user-friendly web interfaces using Angular, React and clean UI/UX practices.</h2>
          </div>
          <div className="contact-links">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.url} target="_blank" rel="noreferrer">
                <span>{link.label}</span>
                {link.name}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>@All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;
