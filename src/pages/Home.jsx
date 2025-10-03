import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Daniel Rodrigues</span>
            </h1>
            <h2 className="hero-subtitle">Full Stack Developer</h2>
            <p className="hero-description">
              I'm passionate about creating innovative web applications and
              solving complex problems through code. Welcome to my portfolio
              where you can explore my journey and projects.
            </p>
            <div className="hero-buttons">
              <Link to="/about" className="btn btn-primary">
                About Me
              </Link>
              <Link to="/projects" className="btn btn-secondary">
                View Projects
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-placeholder">
              <span>👨‍💻</span>
            </div>
          </div>
        </div>

        <div className="skills-preview">
          <h3>Technologies I Work With</h3>
          <div className="skills-grid">
            <div className="skill-item">Angular</div>
            <div className="skill-item">React</div>
            <div className="skill-item">JavaScript</div>
            <div className="skill-item">TypeScript</div>
            <div className="skill-item">Node.js</div>
            <div className="skill-item">Java</div>
            <div className="skill-item">CSS</div>
            <div className="skill-item">Git</div>
            <div className="skill-item">SQL</div>
            <div className="skill-item">NoSQL</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
