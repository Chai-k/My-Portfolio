import profileImg from "../assets/profile.jpeg";

// 🔹 Reusable components

const Section = ({ id, title, children, className = "section" }) => (
  <section id={id} className={className}>
    <h2>{title}</h2>
    {children}
  </section>
);

const InfoBox = ({ icon, text }) => (
  <div className="info-box">
    <h4>
      <i className={icon}></i>
      <span>{text}</span>
    </h4>
  </div>
);

const ContactCard = ({ href, icon, label, text, newTab = false }) => (
  <a
    href={href}
    className="contact-card"
    title={label}
    target={newTab ? "_blank" : "_self"}
    rel={newTab ? "noreferrer" : undefined}
  >
    <div className="contact-label">
      <i className={icon}></i>
      <span>{label}</span>
    </div>
    <p>{text}</p>
  </a>
);

// 🔹 Sections

export const Home = () => (
  <section id="home" className="home-section">
    <div className="home-container">
      <div className="profile-image">
        <img src={profileImg} alt="My Profile" />
      </div>
      <div className="intro-text">
        <h2>K.Chaitra</h2>
        <h3>Software Developer</h3>
        <p>
          Full Stack Developer focused on <strong>Python</strong> and{" "}
          <strong>React.js</strong>
        </p>
        <div className="info-row">
          <InfoBox icon="ri-map-pin-line" text="Bengaluru, Karnataka" />
          <InfoBox icon="ri-briefcase-line" text="2 Years Experience" />
        </div>
      </div>
    </div>
  </section>
);

export const About = () => (
  <Section id="about" title="About Me">
    <ul>
      <li>
        I am a passionate <span className="highlight-role">Full Stack Developer</span> with 2 years of experience
        designing, developing, and optimizing scalable web applications.
      </li>
      <li>
        I specialize in <strong>React.js, JavaScript, Python (Flask, FastAPI)</strong> and databases like{" "}
        <strong>PostgreSQL</strong>.
      </li>
      <li>
        I also integrate monitoring tools like <strong>Sentry, Segment, Mixpanel</strong>. My focus is on performance,
        usability, and scalability with clean, maintainable code.
      </li>
    </ul>
  </Section>
);

export const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Euphoric Thought Technologies",
      period: "Sept 2023 – Present",
      highlights: [
        "Built and deployed end-to-end solutions using ReactJS, FastAPI, and PostgreSQL.",
        "Crafted modular, reusable UI components to improve frontend scalability.",
        "Engineered backend REST APIs with secure authentication and validation.",
        "Integrated Sentry for logging and real-time issue tracking.",
        "Collaborated with QA and DevOps to improve test coverage.",
        "Participated in sprint planning and cross-team collaboration for timely feature delivery.",
        "Refactored legacy logic to reduce tech debt and improve API efficiency.",
        "Monitored and resolved production issues by configuring Sentry for real-time error logging."
      ]
    },
  ];

  return (
    <Section id="experience" title="Work Experience">
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <h3 className="role-name">{exp.role} </h3>
              <h4 className="company-name">{exp.company}</h4>
              <p className="period">{exp.period}</p>
            </div>
            <div className="experience-highlights">
              {exp.highlights.map((point, i) => (
                <div key={i} className="experience-highlight">{point}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};


export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Scripting",
      icon: "ri-code-line",
      skills: [
        "JavaScript", "TypeScript", "Python", "SQL"
      ]
    },
    {
      title: "Frontend",
      icon: "ri-layout-line",
      skills: [
        "React", "Vite",
        "Tailwind CSS", "HTML5"
      ]
    },
    {
      title: "Backend",
      icon: "ri-layout-line",
      skills: [
        "FastAPI", "Flask", "REST APIs", "OpenAI"
      ]
    },
    {
      title: "Database",
      icon: "ri-database-line",
      skills: [
        "PostgreSQL", "MySQL"
      ]
    },
    {
      title: "Tools",
      icon: "ri-tools-line",
      skills: [
        "Git", "GitHub", "Docker", "Sentry", "Mixpanel"
      ]
    }
  ];

  return (
    <Section id="skills" title="Technical Skills">
      <div className="skills-grid">
        {skillCategories.map((cat, index) => (
          <div key={index} className="skill-card">
            <h3>
              <i className={cat.icon}></i> {cat.title}
            </h3>
            <div className="skill-tags">
              {cat.skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};


export const Awards = () => (
  <Section id="awards" title="Awards">
    <ul>
      <li>
        <i className="ri-award-line"></i> <strong>Spot Award</strong> — Outstanding performance and impactful delivery.
      </li>
    </ul>
  </Section>
);

export const Contact = () => (
  <Section id="contact" title="Get in Touch" className="section contact-section">
    <div className="contact-grid">
      <ContactCard
        href="mailto:k.chaitra@euphoricthought.com"
        icon="ri-mail-line"
        label="Email"
        text="k.chaitra@euphoricthought.com"
      />
      <ContactCard
        href="tel:+919876543210"
        icon="ri-phone-line"
        label="Phone"
        text="+91 98765 43210"
      />
      <ContactCard
        href="https://www.linkedin.com/in/kchaitra"
        icon="ri-linkedin-line"
        label="LinkedIn"
        text="Connect on LinkedIn"
        newTab
      />
      <ContactCard
        href="https://github.com/kchaitra"
        icon="ri-github-line"
        label="GitHub"
        text="Connect on GitHub"
        newTab
      />
    </div>
  </Section>
);
