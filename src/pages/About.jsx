import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-header">
          <h1>About Me</h1>
          <p className="about-subtitle">Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="intro-section">
              <h2>Hello! I'm Daniel Rodrigues</h2>
              <p>
                I'm a passionate Full Stack Developer with a love for creating
                innovative web applications and solving complex problems through
                code. My journey in programming started with curiosity and has
                evolved into a career dedicated to continuous learning and
                growth.
              </p>
              <p>
                I enjoy working on both frontend and backend technologies,
                always striving to deliver clean, efficient, and user-friendly
                solutions. When I'm not coding, you can find me exploring new
                technologies.
              </p>
            </div>

            <div className="values-section">
              <h3>What Drives Me</h3>
              <div className="values-grid">
                <div className="value-item">
                  <span className="value-icon">💡</span>
                  <h4>Innovation</h4>
                  <p>
                    Always looking for creative solutions to complex problems
                  </p>
                </div>
                <div className="value-item">
                  <span className="value-icon">🚀</span>
                  <h4>Growth</h4>
                  <p>Committed to continuous learning and skill development</p>
                </div>
                <div className="value-item">
                  <span className="value-icon">🤝</span>
                  <h4>Collaboration</h4>
                  <p>Believe in the power of teamwork and knowledge sharing</p>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-section">
            <h3>Technical Skills</h3>
            <div className="skills-categories">
              <div className="skill-category">
                <h4>Frontend</h4>
                <div className="skill-tags">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">TypeScript</span>
                  <span className="skill-tag">HTML5</span>
                  <span className="skill-tag">CSS3</span>
                  <span className="skill-tag">Sass</span>
                </div>
              </div>

              <div className="skill-category">
                <h4>Backend</h4>
                <div className="skill-tags">
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">Express</span>
                  <span className="skill-tag">Django</span>
                  <span className="skill-tag">PostgreSQL</span>
                  <span className="skill-tag">MongoDB</span>
                </div>
              </div>

              <div className="skill-category">
                <h4>Tools & Others</h4>
                <div className="skill-tags">
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">Docker</span>
                  <span className="skill-tag">AWS</span>
                  <span className="skill-tag">Figma</span>
                  <span className="skill-tag">VS Code</span>
                  <span className="skill-tag">Linux</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-cta">
          <h3>Let's Work Together</h3>
          <p>
            I'm always open to discussing new opportunities and interesting
            projects.
          </p>
          <a href="#contact" className="btn btn-primary">
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
