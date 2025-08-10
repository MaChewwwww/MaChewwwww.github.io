import { HeroSection, personalInfo } from './Information';
import { AboutSection } from './About';
import { ProjectsSection } from './Projects';
import { CredentialsSection } from './Credentials';
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
                href="#credentials" 
                className="text-white/80 font-medium hover:text-primary transition-colors duration-300 relative group"
              >
                Credentials
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

        <ProjectsSection />

        <CredentialsSection />

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
