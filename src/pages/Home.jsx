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
            <div className="visual-container">
              {/* Floating Code Elements */}
              <div className="floating-elements">
                <div className="code-snippet snippet-1">
                  <span>&lt;React /&gt;</span>
                </div>
                <div className="code-snippet snippet-2">
                  <span>const dev = () =&gt; 🚀</span>
                </div>
                <div className="code-snippet snippet-3">
                  <span>{`{ "creativity": true }`}</span>
                </div>
                <div className="code-snippet snippet-4">
                  <span>npm run build</span>
                </div>
                <div className="code-snippet snippet-5">
                  <span>git commit -m "✨"</span>
                </div>
              </div>
              
              {/* Animated Geometric Shapes */}
              <div className="geometric-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
                <div className="shape shape-4"></div>
                <div className="shape shape-5"></div>
              </div>
              
              {/* Central Avatar with Glow Effect */}
              <div className="profile-avatar">
                <div className="avatar-glow"></div>
                <div className="avatar-content">
                  <span className="avatar-emoji">👨‍💻</span>
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
              
              {/* Particle System */}
              <div className="particles">
                <div className="particle particle-1"></div>
                <div className="particle particle-2"></div>
                <div className="particle particle-3"></div>
                <div className="particle particle-4"></div>
                <div className="particle particle-5"></div>
                <div className="particle particle-6"></div>
                <div className="particle particle-7"></div>
                <div className="particle particle-8"></div>
              </div>
              
              {/* Tech Stack Icons Orbiting */}
              <div className="tech-orbit">
                <div className="orbit-item orbit-1">
                  <span>⚛️</span>
                </div>
                <div className="orbit-item orbit-2">
                  <span>📱</span>
                </div>
                <div className="orbit-item orbit-3">
                  <span>💾</span>
                </div>
                <div className="orbit-item orbit-4">
                  <span>🌐</span>
                </div>
              </div>
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
