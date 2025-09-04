import profileImg from "../assets/profile.jpeg";

export const Home = () => (
  <section id="home" className="section home-section">
    <div className="home-container">
      <div className="profile-image">
        <img src={profileImg} alt="My Profile" />
      </div>
      <div className="intro-text">
        <h2>K.Chaitra</h2>
        <h4>Software Developer</h4>
        <p>Full Stack Developer focused on <strong>Python</strong> and <strong>React.js</strong></p>
        <div className="info-row">
          <div className="info-box"><h4>📞 +91 98765 43210</h4></div>
          <div className="info-box"><h4>💼  2 Years</h4></div>
        </div>
      </div>
    </div>
  </section>
);

export const About = () => (
  <section id="about" className="section">
    <h2>About Me</h2>
    <p>
      I am a passionate Full-Stack Developer with 2 years of experience designing,
      developing, and optimizing scalable web applications. I specialize in
      <strong> React.js, JavaScript, Python (Flask, FastAPI)</strong> and databases like
      <strong> PostgreSQL</strong>. I also integrate monitoring tools like
      <strong> Sentry, Segment, Mixpanel</strong>. My focus is on performance,
      usability, and scalability with clean, maintainable code.
    </p>
  </section>
);

export const Experience = () => (
  <section id="experience" className="section">
    <h2>Experience</h2>
    <ul>
      <li>
        <strong>Software Engineer</strong> - Euphoric Thought Technologies (Jul 2024 – Present)<br />
        <em>Phyllo (Full Stack Developer)</em><br />
        Built reusable ReactJS components, FastAPI APIs, Segment & Mixpanel integrations, optimized frontend performance.
      </li>
      <li>
        <strong>Backend Developer</strong> - Euphoric Thought Technologies (Sept 2023 – Jun 2024)<br />
        <em>Chatbot Project</em><br />
        Real-time chatbot backend with Flask, PostgreSQL, WebSockets, AWS S3, Dockerized services.
      </li>
    </ul>
  </section>
);

export const Skills = () => (
  <section id="skills" className="section">
    <h2>Skills</h2>
    <ul>
      <li><strong>Frontend:</strong> ReactJS, HTML, CSS, JavaScript</li>
      <li><strong>Backend:</strong> Python, Flask, FastAPI, REST APIs</li>
      <li><strong>Database:</strong> PostgreSQL, MySQL</li>
      <li><strong>Other:</strong> Git, Docker, Sentry, Segment, Mixpanel, AWS S3</li>
    </ul>
  </section>
);

export const Awards = () => (
  <section id="awards" className="section">
    <h2>Awards</h2>
    <ul>
      <li><i className="ri-award-line"></i> <strong>Spot Award</strong> — Outstanding performance and impactful delivery.</li>
    </ul>
  </section>
);

export const Contact = () => (
  <section id="contact" className="section contact-section">
    <h2>Get in Touch</h2>
    <div className="contact-grid">
      <a href="mailto:k.chaitra@euphoricthought.com" className="contact-card" title="Email">
        <div className="contact-label"><i className="ri-mail-line"></i><span>Email</span></div>
        <p>k.chaitra@euphoricthought.com</p>
      </a>
      <a href="tel:+919876543210" className="contact-card" title="Phone">
        <div className="contact-label"><i className="ri-phone-line"></i><span>Phone</span></div>
        <p>+91 98765 43210</p>
      </a>
      <a href="https://www.linkedin.com/in/kchaitra" target="_blank" rel="noreferrer" className="contact-card" title="LinkedIn">
        <div className="contact-label"><i className="ri-linkedin-line"></i><span>LinkedIn</span></div>
        <p>Connect on LinkedIn</p>
      </a>
      <a href="https://github.com/kchaitra" target="_blank" rel="noreferrer" className="contact-card" title="GitHub">
        <div className="contact-label"><i className="ri-github-line"></i><span>GitHub</span></div>
        <p>Connect on GitHub</p>
      </a>
    </div>
  </section>
);
