# Daniel Rodrigues - Portfolio

A modern, responsive portfolio website built with React and Vite, showcasing my skills, projects, and experience as a Full Stack Developer.

![Portfolio Preview](https://via.placeholder.com/800x400/1B4F72/F4D03F?text=Daniel+Rodrigues+Portfolio)

## 🌟 Features

- **Modern Design**: Clean, professional UI with blue gradient backgrounds and yellow accent colors
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Smooth Animations**: CSS animations and hover effects for enhanced user experience
- **Interactive Contact Form**: Functional contact form for inquiries and collaboration
- **Project Showcase**: Dynamic project cards with technology tags and status indicators
- **Fast Performance**: Built with Vite for lightning-fast development and build times

## 🚀 Live Demo

Visit the live portfolio: **[https://danielrdg.github.io/daniel-portfolio](https://danielrdg.github.io/daniel-portfolio)**

> Note: It may take a few minutes for GitHub Pages to update after deployment.

## 🛠️ Built With

- **Frontend Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Styling**: CSS3 with CSS Modules
- **Deployment**: GitHub Pages
- **Version Control**: Git & GitHub

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation component
│   └── Navbar.css          # Navigation styles
├── pages/
│   ├── Home.jsx            # Landing page with hero section
│   ├── Home.css
│   ├── About.jsx           # About me, skills, and values
│   ├── About.css
│   ├── Projects.jsx        # Project showcase
│   ├── Projects.css
│   ├── Contact.jsx         # Contact form and information
│   └── Contact.css
├── styles/                 # Global styles directory
├── assets/                 # Images and static assets
├── App.jsx                 # Main application component
├── App.css                 # Global application styles
├── main.jsx               # Application entry point
└── index.css              # Base styles
```

## 🎨 Design System

### Color Palette

- **Primary Blue**: `#1B4F72` (Dark blue for backgrounds)
- **Accent Yellow**: `#F4D03F` (Yellow for highlights and CTAs)
- **Light Blue**: `#85C1E9` (Secondary text and accents)
- **Text Light**: `#BDC3C7` (Body text)
- **White**: `#FFFFFF` (Headers and important text)

### Typography

- Clean, modern fonts with proper hierarchy
- Responsive font sizing
- Excellent readability across all devices

## 🚦 Getting Started

### Prerequisites

- **Node.js**: Version 20.19+ or 22.12+ (recommended: 22.20.0 LTS)
- **npm**: Version 10.9.3+ (comes with Node.js)
- **Git**: For version control

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/danielrdg/daniel-portfolio.git
   cd daniel-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173/` to view the portfolio

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🔧 Node.js Version Management

This project requires Node.js 20.19+ or 22.12+. If you have an older version:

### Using NVM (Node Version Manager)

1. **Install NVM** (if not already installed)

   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   ```

2. **Install and use the latest LTS Node.js**

   ```bash
   nvm install --lts
   nvm use --lts
   nvm alias default node
   ```

3. **Verify installation**
   ```bash
   node --version  # Should show v22.20.0 or later
   npm --version   # Should show v10.9.3 or later
   ```

## 📱 Sections

### 🏠 Home

- Hero section with introduction
- Call-to-action buttons
- Skills preview with technology highlights
- Smooth animations and responsive design

### 👨‍💻 About

- Personal introduction and background
- Core values and what drives me
- Technical skills organized by category (Frontend, Backend, Tools)
- Professional approach and collaboration focus

### 🚀 Projects

- Dynamic project showcase with placeholder projects
- Technology tags for each project
- Status indicators (Current Project, In Development, Planning, Coming Soon)
- Project descriptions and planned features
- Links to GitHub and live demos (when available)

### 📞 Contact

- Interactive contact form with validation
- Personal message and collaboration invitation
- Social media links (LinkedIn, Email)
- Professional contact information

## 🌐 Deployment

### GitHub Pages

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

### Manual Deployment

The `dist/` folder contains the production build and can be deployed to any static hosting service.

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📧 Contact

**Daniel Rodrigues**

- GitHub: [@danielrdg](https://github.com/danielrdg)
- LinkedIn: [Your LinkedIn Profile]
- Email: your.email@example.com

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- React community for excellent documentation and resources
- Vite team for the amazing build tool
- GitHub for hosting and version control

---

**Note**: This portfolio is a work in progress. Projects section contains placeholder projects that will be replaced with real projects as they are developed. The contact form currently logs to console - backend integration will be added in future updates.
