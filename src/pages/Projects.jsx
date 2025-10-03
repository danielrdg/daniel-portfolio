import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with React and Node.js, featuring user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      status: "Coming Soon",
      image: "🛒",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative project management tool with real-time updates, team collaboration features, and deadline tracking.",
      technologies: ["React", "Express", "Socket.io", "PostgreSQL"],
      status: "In Development",
      image: "📋",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather application that provides detailed forecasts, interactive maps, and location-based recommendations.",
      technologies: ["JavaScript", "CSS3", "Weather API", "Chart.js"],
      status: "Planning",
      image: "🌤️",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "This very portfolio website showcasing my skills, projects, and experience as a full-stack developer.",
      technologies: ["React", "Vite", "CSS3", "GitHub Pages"],
      status: "Current Project",
      image: "👨‍💻",
    },
  ];

  return (
    <div className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h1>My Projects</h1>
          <p className="projects-subtitle">
            Here are some projects I'm working on or planning to build. Check
            back soon for updates!
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <span className="project-icon">{project.image}</span>
                <div className="project-status">
                  <span
                    className={`status-badge ${project.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <button
                    className="btn btn-primary"
                    disabled={project.status !== "Current Project"}
                  >
                    {project.status === "Current Project"
                      ? "View Live"
                      : "Coming Soon"}
                  </button>
                  <button className="btn btn-secondary" disabled>
                    View Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <h3>More Projects Coming Soon!</h3>
          <p>
            I'm constantly working on new projects and learning new
            technologies. Follow my journey and get in touch if you'd like to
            collaborate!
          </p>
          <div className="cta-buttons">
            <a
              href="https://github.com/danielrdg"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              GitHub Profile
            </a>
            <Link to="/contact" className="btn btn-secondary">
              Let's Collaborate
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
