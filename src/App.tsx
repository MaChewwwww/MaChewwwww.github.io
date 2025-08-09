import { HeroSection, personalInfo } from './Information';
import { AboutSection } from './About';
import SplashCursor from './Background/SplashCursor';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-white">
      {/* SplashCursor for the entire app */}
      <SplashCursor />
      
      <header className="bg-background/80 backdrop-blur-md py-4 sticky top-0 z-50 border-b border-mutedBorder">
        <nav className="container mx-auto px-4">
          <ul className="flex justify-center gap-8 list-none">
            <li>
              <a 
                href="#about" 
                className="text-white/80 font-medium hover:text-primary transition-colors duration-300 relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className="text-white/80 font-medium hover:text-primary transition-colors duration-300 relative group"
              >
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="text-white/80 font-medium hover:text-primary transition-colors duration-300 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-1">
        <HeroSection personalInfo={personalInfo} />

        <AboutSection />

        <section id="projects" className="py-20 px-8 bg-surface/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              My Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-surface border border-mutedBorder rounded-lg p-6 hover:shadow-glow hover:border-primary/30 hover:-translate-y-2 transition-all duration-300">
                <div className="h-2 bg-gradient-to-r from-primary to-accent rounded-full mb-6"></div>
                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-primary transition-colors">
                  Project One
                </h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  Description of your first project. What technologies did you use? What problems did it solve? 
                  What challenges did you overcome during development?
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-accent/10 border border-accent/20 text-accent rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm">Tailwind</span>
                </div>
                <div className="flex gap-3">
                  <button className="text-primary hover:text-primaryDark transition-colors font-medium">
                    Live Demo →
                  </button>
                  <button className="text-white/60 hover:text-white transition-colors font-medium">
                    GitHub →
                  </button>
                </div>
              </div>

              <div className="group bg-surface border border-mutedBorder rounded-lg p-6 hover:shadow-glow hover:border-primary/30 hover:-translate-y-2 transition-all duration-300">
                <div className="h-2 bg-gradient-to-r from-accent to-primary rounded-full mb-6"></div>
                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-primary transition-colors">
                  Project Two
                </h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  Description of your second project. Highlight the key features and your role in the development. 
                  What makes this project special or innovative?
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-3 py-1 bg-accent/10 border border-accent/20 text-accent rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-accent/10 border border-accent/20 text-accent rounded-full text-sm">MongoDB</span>
                </div>
                <div className="flex gap-3">
                  <button className="text-primary hover:text-primaryDark transition-colors font-medium">
                    Live Demo →
                  </button>
                  <button className="text-white/60 hover:text-white transition-colors font-medium">
                    GitHub →
                  </button>
                </div>
              </div>

              <div className="group bg-surface border border-mutedBorder rounded-lg p-6 hover:shadow-glow hover:border-primary/30 hover:-translate-y-2 transition-all duration-300">
                <div className="h-2 bg-gradient-to-r from-primary to-accent rounded-full mb-6"></div>
                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-primary transition-colors">
                  Project Three
                </h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  Description of your third project. What challenges did you overcome? What did you learn? 
                  How did this project help you grow as a developer?
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm">Vue.js</span>
                  <span className="px-3 py-1 bg-accent/10 border border-accent/20 text-accent rounded-full text-sm">Firebase</span>
                  <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm">Sass</span>
                </div>
                <div className="flex gap-3">
                  <button className="text-primary hover:text-primaryDark transition-colors font-medium">
                    Live Demo →
                  </button>
                  <button className="text-white/60 hover:text-white transition-colors font-medium">
                    GitHub →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-8 text-center border-t border-mutedBorder">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Get In Touch
            </h2>
            <p className="text-xl mb-12 text-white/70 max-w-2xl mx-auto">
              Let's connect and discuss opportunities! I'm always interested in hearing about new projects and collaborations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="mailto:your-email@example.com" 
                className="group bg-gradient-to-r from-primary to-accent hover:from-primaryDark hover:to-primary px-8 py-4 rounded-lg font-semibold shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  📧 Email Me
                </span>
              </a>
              <a 
                href="https://github.com/MaChewwwww" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-surface border border-mutedBorder hover:border-primary/50 px-8 py-4 rounded-lg font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2 text-white/80 group-hover:text-primary">
                  💻 GitHub
                </span>
              </a>
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-surface border border-mutedBorder hover:border-accent/50 px-8 py-4 rounded-lg font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2 text-white/80 group-hover:text-accent">
                  👔 LinkedIn
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-surface/50 border-t border-mutedBorder text-white/60 text-center py-8">
        <div className="container mx-auto px-4">
          <p className="mb-2">&copy; 2025 Your Name. All rights reserved.</p>
          <p className="text-sm text-white/40">
            Built with React, TypeScript, Tailwind CSS, and ❤️
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
