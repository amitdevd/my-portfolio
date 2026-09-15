import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AdminPage from './pages/AdminPage';
import BlogPage from './pages/BlogPage';

const coreProficiencies = [
  { name: 'Angular (15, 16, 17) & Angular Material', level: 90 },
  { name: 'React.js & React Native (Expo)', level: 90 },
  { name: 'TypeScript & JavaScript (ES6+)', level: 90 },
  { name: 'HTML5, CSS3, SCSS, Tailwind CSS & MaterialUI', level: 95 },
  { name: 'REST APIs, API Consumption & Client-side Validation', level: 88 },
  { name: 'Gen AI Tools (ChatGPT, Copilot, Cursor AI)', level: 85 },
];

const skillCategories = [
  {
    category: 'Frameworks & Libraries',
    items: ['Angular', 'Angular Material', 'React.js', 'React Native', 'Expo'],
  },
  {
    category: 'Languages & Styling',
    items: ['TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SCSS', 'Tailwind CSS', 'MaterialUI'],
  },
  {
    category: 'Frontend & Mobile UI',
    items: ['Responsive UI', 'Mobile App UI', 'Material Design', 'Bootstrap 5', 'jQuery (legacy / augmentation)'],
  },
  {
    category: 'APIs & Integrations',
    items: ['REST APIs', 'API Consumption', 'Client-side Validation', 'Error Handling', 'Async State Management'],
  },
  {
    category: 'Developer Tools & Cloud',
    items: ['Git / GitLab', 'Browser DevTools', 'Microsoft Azure', 'Postman', 'VS Code', 'npm / Yarn'],
  },
  {
    category: 'Gen AI & Modern Tooling',
    items: ['Build AI Interfaces', 'ChatGPT OpenAI', 'GitHub Copilot', 'Cursor AI'],
  },
  {
    category: 'Focus Areas & Practices',
    items: ['Component-based Architecture', 'UX Implementation', 'Cross-platform Mobile UI', 'SEO', 'Performance Optimization', 'Accessibility (a11y)'],
  },
];

const focusAreas = [
  'Component-based Architecture',
  'UX / UI Implementation',
  'Cross-platform Mobile UI',
  'REST API Integration',
  'SEO & Web Vitals',
  'Performance Optimization',
  'Accessibility (a11y)',
  'Design Systems',
];

const keyAchievements = [
  {
    stat: '15+',
    title: 'Responsive Web Applications',
    description: 'Engineered high-performance, mobile-first responsive web apps across various industries and production environments.',
  },
  {
    stat: 'React & Angular',
    title: 'UI Development Mastery',
    description: 'Expertise in both major enterprise frontend ecosystems, building scalable single-page and cross-platform applications.',
  },
  {
    stat: 'REST APIs',
    title: 'API Integration & Handling',
    description: 'Seamless integration of backend REST APIs with client-side validation, error management, and responsive data flows.',
  },
  {
    stat: 'Modular',
    title: 'Reusable Component Architecture',
    description: 'Created consistent design systems, reusable UI component libraries, and clean maintainable codebases.',
  },
  {
    stat: 'Pixel-Perfect',
    title: 'Responsive & Accessible UI',
    description: 'Translated Figma/PSD designs with high fidelity, ensuring cross-browser compatibility and accessible interfaces.',
  },
];

const socialLinks = [
  {
    name: 'GitHub',
    label: 'Gh',
    url: 'https://github.com/amitdevd',
  },
  {
    name: 'LinkedIn',
    label: 'Li',
    url: 'https://www.linkedin.com/in/amit-dwivedi-08b415b0/',
  },
  {
    name: 'Instagram',
    label: 'In',
    url: 'https://www.instagram.com/stories/dwivedi.amit154/',
  },
  {
    name: 'Facebook',
    label: 'Fb',
    url: 'https://www.facebook.com/amitdwivedi786786/',
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
    company: 'Avaal Technologies Pvt. Ltd.',
    period: 'Jun 2026 – Sep 2026',
    role: 'Frontend Developer',
    location: 'Gurugram, Haryana',
    summary:
      'Developed and maintained frontend features using React and React Native, leveraging a component-based architecture to build scalable, reusable, and consistent user interfaces. Collaborated with UX/UI developers to implement pixel-perfect, responsive designs while ensuring design consistency across multiple devices and screen sizes. Improved frontend rendering performance by 25% by reducing unnecessary DOM operations and optimizing component rendering.',
    points: [
      'Developed and maintained frontend features using React and React Native, leveraging a component-based architecture to build scalable, reusable, and consistent user interfaces.',
      'Collaborated with UX/UI developers to implement pixel-perfect, responsive designs while ensuring design consistency across multiple devices and screen sizes.',
      'Improved frontend rendering performance by 25% by reducing unnecessary DOM operations and optimizing component rendering.',
    ],
  },
  {
    company: 'Fluper Ltd.',
    period: 'Jun 2024 – Nov 2025',
    role: 'Frontend Developer',
    location: 'Noida, Uttar Pradesh',
    summary:
      'Developed and maintained Angular frontend features using component-based architecture to deliver consistent, scalable UI. Collaborated with UX/UI to implement pixel-perfect designs and ensure design fidelity across responsive breakpoints. Improved page performance by optimizing UI rendering, reducing unnecessary DOM work, and refining frontend behavior.',
    projects: fluperProjects,
    points: [
      'Developed and maintained Angular frontend features using component-based architecture to deliver consistent, scalable UI.',
      'Collaborated with UX/UI to implement pixel-perfect designs and ensure design fidelity across responsive breakpoints.',
      'Improved page performance by optimizing UI rendering, reducing unnecessary DOM work, and refining frontend behavior.',
      'Integrated REST APIs into Angular screens and enhanced usability with client-side validation and error handling.',
      'Followed frontend engineering best practices for code quality, naming conventions, and maintainability.',
      'Leveraged ChatGPT and GitHub Copilot to accelerate development, generate boilerplate code, debug UI issues, and improve overall development efficiency.',
    ],
  },
  {
    company: 'Superb Enterprises Pvt. Ltd.',
    period: 'Oct 2022 – May 2024',
    role: 'Web Designer',
    location: 'Delhi',
    summary:
      'Designed and built responsive ecommerce-facing UI using HTML5, CSS3/SCSS, Bootstrap 5, and jQuery for interactive behaviors. Converted design assets into working interfaces with a focus on clean markup, reusable UI patterns, and cross-browser compatibility. Enhanced user experience by improving layout, typography, and UI consistency across multiple web pages. Maintained code quality across concurrent projects by documenting changes and applying consistent frontend standards.',
    projectLinks: [
      ['Super Enterprise - Main Site', 'https://superenterprisesindia.com'],
      ['Delhi Attestation', 'https://superbattestation.com'],
      ['Attestation In Pune', 'https://attestationinpune.com'],
      ['Attestation In Mumbai', 'https://certificationattestationmumbai.com'],
      ['apostile Certificate', 'https://apostilecertificate.com'],
      ['Umrah Services', 'https://umrahservices.in'],
    ],
    points: [
      'Designed and built responsive ecommerce-facing UI using HTML5, CSS3/SCSS, Bootstrap 5, and jQuery for interactive behaviors.',
      'Converted design assets into working interfaces with a focus on clean markup, reusable UI patterns, and cross-browser compatibility.',
      'Enhanced user experience by improving layout, typography, and UI consistency across multiple web pages.',
      'Maintained code quality across concurrent projects by documenting changes and applying consistent frontend standards.',
    ],
  },
  {
    company: 'Brain Technosys Pvt. Ltd.',
    period: 'Mar 2021 – Sep 2022',
    role: 'Web Developer',
    location: 'Noida',
    summary:
      'Developed frontend components with HTML, CSS, and JavaScript, aligning UI with product requirements and UX guidelines. Worked closely with backend developers to integrate API endpoints and ensure smooth data flow into UI. Ensured responsive behavior and cross-browser functionality through testing and iterative UI fixes. Assisted with UI troubleshooting and defect resolution to improve release readiness.',
    points: [
      'Developed frontend components with HTML, CSS, and JavaScript, aligning UI with product requirements and UX guidelines.',
      'Worked closely with backend developers to integrate API endpoints and ensure smooth data flow into UI.',
      'Ensured responsive behavior and cross-browser functionality through testing and iterative UI fixes.',
      'Assisted with UI troubleshooting and defect resolution to improve release readiness.',
    ],
  },
];

const education = [
  {
    year: '2009 – 2012',
    degree: "Bachelor's Degree",
    title: 'Bachelor of Commerce (B.Com)',
    school: 'MMH College, India (C.C.S. University Meerut)',
    text: 'Gained a strong foundation in commerce and business principles, enhancing analytical, economic, and quantitative problem-solving skills.',
  },
  {
    year: '2012',
    degree: 'Master Degree',
    title: 'Master of Commerce (M.Com)',
    school: 'C.C.S. University Meerut',
    text: 'Developed advanced expertise in commerce subjects such as accounting, finance, and business management with a focus on analytical problem-solving.',
  },
];

const featuredProjects = [
  {
    eyebrow: 'Landing Page',
    title: 'EstatePulse AI',
    text: 'EstatePulse AI is a property-focused landing page with a clean product story, prominent call to action, and modern real-estate technology positioning.',
    image: '/img/estatepulse-ai.png',
    url: 'https://estatepulse-ai.vercel.app/',
  },
  {
    eyebrow: 'Web App',
    title: 'EstatePulse AI App',
    text: 'The EstatePulse AI app page opens the interactive product experience for property insights, search, and AI-powered real-estate workflows.',
    image: '/img/estatepulse-app.png',
    url: 'https://estatepulse-ai.vercel.app/app',
  },
];

function ProjectCarousel() {
  const [activeProject, setActiveProject] = useState(0);
  const project = featuredProjects[activeProject];

  const changeProject = (direction) => {
    setActiveProject((current) => (current + direction + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <div className="project-carousel-wrap">
      <div className="carousel-controls" aria-label="Project carousel controls">
        <button type="button" onClick={() => changeProject(-1)} aria-label="Previous project">
          <span aria-hidden="true">‹</span>
        </button>
        <button type="button" onClick={() => changeProject(1)} aria-label="Next project">
          <span aria-hidden="true">›</span>
        </button>
      </div>
      <div className="project-carousel">
        <article className="project-showcase" key={project.title}>
          <a
            className="project-preview"
            href={project.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title}`}
          >
            <img src={project.image} alt={`${project.title} screenshot`} />
          </a>
          <div className="project-content">
            <p className="eyebrow">{project.eyebrow}</p>
            <h3>{project.title}</h3>
            <p>{project.text}</p>
            <a className="button primary" href={project.url} target="_blank" rel="noreferrer">
              Open Website
            </a>
          </div>
        </article>
      </div>
      <div className="carousel-dots" aria-label="Project carousel pagination">
        {featuredProjects.map((item, index) => (
          <button
            className={index === activeProject ? 'active' : ''}
            type="button"
            key={item.title}
            onClick={() => setActiveProject(index)}
            aria-label={`Show ${item.title}`}
          />
        ))}
      </div>
    </div>
  );
}

function ContactForm() {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject') || 'Portfolio enquiry';
    const message = formData.get('message');
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      message,
    ].join('\n');

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=contacttodwivedi@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormStatus('Your message is ready. Gmail opened in a new tab so you can send it.');
    window.open(gmailLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Name
          <input type="text" name="name" placeholder="Your name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="your@email.com" required />
        </label>
      </div>
      <label>
        Subject
        <input type="text" name="subject" placeholder="Project enquiry" />
      </label>
      <label>
        Message
        <textarea name="message" rows="5" placeholder="Tell me about your project" required />
      </label>
      <button className="button primary" type="submit">Send Message</button>
      {formStatus && <p className="form-status">{formStatus}</p>}
      <a className="email-fallback" href="mailto:contacttodwivedi@gmail.com">
        contacttodwivedi@gmail.com
      </a>
    </form>
  );
}

function App() {
  const pathname = window.location.pathname.replace(/\/$/, '') || '/';

  if (pathname === '/admin' || pathname.endsWith('/admin')) {
    return <AdminPage />;
  }

  if (pathname === '/blog' || pathname.endsWith('/blog')) {
    return <BlogPage />;
  }

  return (
    <div className="site-shell">
      <Header />

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Frontend UI Developer</p>
            <h1>Amit Dwivedi</h1>
            <p className="hero-tagline">
              Angular | React | TypeScript | UI/UX | Design Systems
            </p>
            <p className="hero-text">
              Frontend UI Developer with 5+ years of experience building responsive, accessible and production-ready web applications using React, Angular and TypeScript. Experienced in translating Figma designs into reusable UI components, integrating REST APIs, implementing responsive interfaces and collaborating with UX/UI teams.
            </p>
            <div className="hero-pills">
              <span className="pill-item">📍 Ghaziabad, UP, India</span>
              <a className="pill-item pill-link" href="tel:+917827841274">📞 +91 7827841274</a>
              <a className="pill-item pill-link" href="mailto:contacttodwivedi@gmail.com">✉️ contacttodwivedi@gmail.com</a>
              <span className="pill-item">⚡ 5+ Years Experience</span>
            </div>
            <div className="hero-actions">
              <a className="button primary" href="#contact">Hire Me</a>
              <a className="button secondary" href="/img/amit_resume.pdf" target="_blank" rel="noreferrer">Download CV</a>
              <a className="button whatsapp-btn" href="https://wa.me/917827841274" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
            </div>
          </div>
          <div className="hero-card" aria-label="Amit Dwivedi profile">
            <img src="/img/mine.jpg" alt="Amit Dwivedi" />
            <div>
              <span className="availability">Available for Frontend work</span>
              <strong>Frontend UI Developer</strong>
            </div>
          </div>
        </section>

        <section className="social-strip" aria-label="Social links">
          {socialLinks.map((link) => (
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
          <div className="about-details">
            <p>
              Frontend UI Developer with 5+ years of experience building responsive, accessible and production-ready web applications using React, Angular and TypeScript. Experienced in translating Figma designs into reusable UI components, integrating REST APIs, implementing responsive interfaces and collaborating with UX/UI teams.
            </p>
            <div className="focus-areas-block">
              <h3>Core Focus Areas</h3>
              <div className="tag-cloud">
                {focusAreas.map((area) => (
                  <span className="tag-badge" key={area}>{area}</span>
                ))}
              </div>
            </div>
          </div>
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
                    <p>
                      {item.role}
                      {item.location && <span className="location-tag"> • {item.location}</span>}
                    </p>
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
          <ProjectCarousel />
        </section>

        <section className="section skills" id="skills">
          <div className="section-heading">
            <p className="eyebrow">Technical Skills</p>
            <h2>Proficiency & Tech Stack</h2>
          </div>
          
          <div className="skill-list">
            {coreProficiencies.map((skill) => (
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

          <div className="categories-wrapper">
            <h3 className="categories-heading">Comprehensive Skill Breakdown (Resume Aligned)</h3>
            <div className="categories-grid">
              {skillCategories.map((group) => (
                <div className="category-card" key={group.category}>
                  <h4>{group.category}</h4>
                  <div className="category-tags">
                    {group.items.map((item) => (
                      <span className="skill-chip" key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section achievements-section" id="achievements">
          <div className="section-heading">
            <p className="eyebrow">Milestones</p>
            <h2>Key Achievements</h2>
          </div>
          <div className="achievements-grid">
            {keyAchievements.map((item) => (
              <article className="achievement-card" key={item.title}>
                <div className="achievement-badge">{item.stat}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
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
            <p className="contact-copy">Fill the form and your email app will open with the message ready to send to contacttodwivedi@gmail.com, or reach out directly below.</p>
            
            <div className="direct-contact-cards">
              <div className="direct-contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Location</strong>
                  <p>Ghaziabad, Uttar Pradesh, India</p>
                </div>
              </div>
              <div className="direct-contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <p>
                    <a href="tel:+917827841274">+91 7827841274</a>
                    {' • '}
                    <a href="https://wa.me/917827841274" target="_blank" rel="noreferrer">WhatsApp</a>
                  </p>
                </div>
              </div>
              <div className="direct-contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <p><a href="mailto:contacttodwivedi@gmail.com">contacttodwivedi@gmail.com</a></p>
                </div>
              </div>
              <div className="direct-contact-item">
                <span className="contact-icon">🌐</span>
                <div>
                  <strong>Portfolio & GitHub</strong>
                  <p>
                    <a href="https://github.com/amitdevd" target="_blank" rel="noreferrer">github.com/amitdevd</a>
                    {' • '}
                    <a href="https://amitdwivediportfolio.netlify.app/" target="_blank" rel="noreferrer">Netlify Live</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-panel">
            <ContactForm />
            <div className="contact-links">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.url} target="_blank" rel="noreferrer">
                  <span>{link.label}</span>
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;

