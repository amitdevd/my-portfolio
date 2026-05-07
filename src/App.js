import { useState } from 'react';
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

const youtubeChannel = {
  name: 'Amit Dwivedi YouTube',
  url: 'https://www.youtube.com/channel/UCSy1kmf9WTa7Bjo7HeAgOWQ',
  videosUrl: 'https://www.youtube.com/channel/UCSy1kmf9WTa7Bjo7HeAgOWQ/videos',
  shortsUrl: 'https://www.youtube.com/channel/UCSy1kmf9WTa7Bjo7HeAgOWQ/shorts',
  playlistsUrl: 'https://www.youtube.com/channel/UCSy1kmf9WTa7Bjo7HeAgOWQ/playlists',
  postsUrl: 'https://www.youtube.com/channel/UCSy1kmf9WTa7Bjo7HeAgOWQ/community',
};

const youtubeVideos = [
  {
    title: 'madhugangeshwar mandir (bhagulinaath mandir)',
    meta: '51 views - 2 weeks ago',
    duration: '0:24',
    videoId: 'zrqm6BXJitI',
    url: youtubeChannel.videosUrl,
  },
];

const youtubeShorts = [
  {
    title: 'सावधान हो जाओ टैटू बनवाने वालो',
    meta: '1 view',
    duration: 'Shorts',
    videoId: 'NZefD3gmbew',
  },
  {
    title: 'tention he ki jaati hi ni #funnyvideo #comedy #funny #viralreels',
    meta: '36 views',
    duration: 'Shorts',
    videoId: 'jxY-Nevw5uo',
  },
  {
    title: 'indian gas se #funnyvideo #comedy',
    meta: '200 views',
    duration: 'Shorts',
    videoId: 'qZRP9pV32MA',
  },
  {
    title: 'batao fir 1 million kidhr he #funnyvideo #comedy #viralreels #aajkasonekabhavbataen #viralvideo',
    meta: '431 views',
    duration: 'Shorts',
    videoId: 'A3qXY0ik_Oo',
  },
  {
    title: '#comedy #funnyvideo #viralreels #viralvideo #funny',
    meta: '99 views',
    duration: 'Shorts',
    videoId: 'Lg1wgyHL1yg',
  },
  {
    title: 'gyan jyada jaruri nahi he paisa jyada jaruri he #viralreels #viralvideo #funnyshorts',
    meta: '39 views',
    duration: 'Shorts',
    videoId: 'W8-eQbDWMSQ',
  },
  {
    title: '#viral #viralreels #viralvideo #viralshorts #funny #funnyvideo',
    meta: '41 views',
    duration: 'Shorts',
    videoId: '1oxM1HSZfjM',
  },
  {
    title: '#viralvideo #viralshorts #viralvideos #viralreels #funnyvideo',
    meta: '389 views',
    duration: 'Shorts',
    videoId: 'p6gzlbI7A64',
  },
  {
    title: '#viral #funny #funnyvideo #funnyshorts #chamaktasitara',
    meta: '150 views',
    duration: 'Shorts',
    videoId: 'GvTTSd9AS94',
  },
  {
    title: '#funnyvideo #manoranjan #khelakhelo',
    meta: '399 views',
    duration: 'Shorts',
    videoId: 'ZSvexxUguq4',
  },
  {
    title: '27 April 2026',
    meta: '245 views',
    duration: 'Shorts',
    videoId: 'pS-BriYwFhU',
  },
  {
    title: 'welcome to my blog',
    meta: '61 views',
    duration: 'Shorts',
    videoId: 'wZrXDJup9h8',
  },
  {
    title: 'भोजन करने से पूर्व किया जाने वाला मंत्रोच्चारण #sanatandharma #sanatangyan #achhibaate #children',
    meta: '31 views',
    duration: 'Shorts',
    videoId: 'XbUTx6ToVs4',
  },
  {
    title: 'ये हे हमारे घर की लक्ष्मी (कशिश, कृषा, बंटू) #entertainmentvideo #gharkikahani',
    meta: '416 views',
    duration: 'Shorts',
    videoId: 'dhpUtVaO5kU',
  },
  {
    title: 'trending done',
    meta: '441 views',
    duration: 'Shorts',
    videoId: 'CSt3b4YtD6Y',
  },
  {
    title: 'मेरी भांजी का अन्नप्राशन संस्कार हुआ अंततः वह भी अब गप्पे मार के खा जाएगी',
    meta: '354 views',
    duration: 'Shorts',
    videoId: 'Z-lh761hono',
  },
  {
    title: 'ise suno aap logo ke dukh dard dur honge jaldi',
    meta: '1 thousand views',
    duration: 'Shorts',
    videoId: 'S5MlBLMbTHU',
  },
  {
    title: 'Roman Abramovich’s Private Jet Was Unreal',
    meta: '534 views',
    duration: 'Shorts',
    videoId: '6I2bQqF4Ufo',
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

function YouTubeCard({ item, type }) {
  const watchUrl = item.videoId
    ? type === 'shorts'
      ? `https://www.youtube.com/shorts/${item.videoId}`
      : `https://www.youtube.com/watch?v=${item.videoId}`
    : item.url;
  const thumbnailUrl = item.videoId
    ? type === 'shorts'
      ? `https://i.ytimg.com/vi/${item.videoId}/frame0.jpg`
      : `https://i.ytimg.com/vi/${item.videoId}/hqdefault.jpg`
    : '';

  return (
    <a className={`youtube-card ${type === 'shorts' ? 'short-card' : ''}`} href={watchUrl} target="_blank" rel="noreferrer">
      <span className="youtube-thumb">
        {thumbnailUrl ? <img src={thumbnailUrl} alt={item.title} /> : <span className="youtube-thumb-fallback">YouTube</span>}
        {item.duration && <small>{item.duration}</small>}
      </span>
      <strong>{item.title}</strong>
      <span>{item.meta}</span>
    </a>
  );
}

function BlogPage() {
  const [activeYoutubeTab, setActiveYoutubeTab] = useState('videos');
  const latestVideo = youtubeVideos[0];
  const tabs = [
    { id: 'videos', label: 'Videos', url: youtubeChannel.videosUrl, items: youtubeVideos },
    { id: 'shorts', label: 'Shorts', url: youtubeChannel.shortsUrl, items: youtubeShorts },
    { id: 'playlists', label: 'Playlists', url: youtubeChannel.playlistsUrl, items: [] },
    { id: 'posts', label: 'Posts', url: youtubeChannel.postsUrl, items: [] },
  ];
  const activeTab = tabs.find((tab) => tab.id === activeYoutubeTab) || tabs[0];

  return (
    <div className="site-shell">
      <Header />
      <main>
        <section className="blog-hero">
          <div>
            <p className="eyebrow">Blog</p>
            <h1>YouTube Videos & Reels</h1>
            <p>
              My latest YouTube uploads, shorts, and reels are collected here from the channel.
            </p>
          </div>
        </section>

        <section className="section youtube-section">
          <div className="section-heading">
            <p className="eyebrow">Latest Uploads</p>
            <h2>{youtubeChannel.name}</h2>
          </div>
          <div className="youtube-panel">
            {latestVideo.videoId ? (
              <iframe
                title={latestVideo.title}
                src={`https://www.youtube.com/embed/${latestVideo.videoId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <a className="latest-video-link" href={youtubeChannel.videosUrl} target="_blank" rel="noreferrer">
                <span>Latest Video</span>
                <strong>{latestVideo.title}</strong>
              </a>
            )}
            <div className="youtube-copy">
              <h3>Videos, Shorts & Reels</h3>
              <p>
                Open the latest videos, shorts, playlists, and posts from my channel.
              </p>
              <a className="button primary" href={youtubeChannel.url} target="_blank" rel="noreferrer">
                Open YouTube Channel
              </a>
            </div>
          </div>

          <div className="youtube-tabs" aria-label="YouTube tabs">
            {tabs.map((tab) => (
              <button
                className={activeYoutubeTab === tab.id ? 'active' : ''}
                key={tab.id}
                type="button"
                onClick={() => setActiveYoutubeTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab.items.length > 0 ? (
            <div className={`youtube-grid ${activeTab.id === 'shorts' ? 'shorts-grid' : ''}`}>
              {activeTab.items.map((item) => (
                <YouTubeCard item={item} key={item.title} type={activeTab.id} />
              ))}
            </div>
          ) : (
            <a className="youtube-empty" href={activeTab.url} target="_blank" rel="noreferrer">
              Open {activeTab.label} on YouTube
            </a>
          )}
        </section>
      </main>
      <footer className="footer">
        <p>@All rights reserved</p>
      </footer>
    </div>
  );
}

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
          <ProjectCarousel />
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
            <p className="contact-copy">Fill the form and your email app will open with the message ready to send to contacttodwivedi@gmail.com.</p>
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

      <footer className="footer">
        <p>@All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;
