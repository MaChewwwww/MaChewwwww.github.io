import { HeroSection, personalInfo } from './Information';
import { AboutSection } from './About';
import { ProjectsSection } from './Projects';
import { CredentialsSection } from './Credentials';
import SplashCursor from './Background/SplashCursor';
import { useState } from 'react';

function App() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  // Helper to detect mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

  return (
    <div className="min-h-screen flex flex-col bg-background text-white">
      {/* SplashCursor for desktop only */}
      {!isMobile && <SplashCursor />}

      <header className="bg-background/80 backdrop-blur-md py-4 sticky top-0 z-50 border-b border-mutedBorder">
        <nav className="container mx-auto px-4">
          {/* Mobile Nav Toggle */}
          <div className="lg:hidden flex justify-between items-center">
            <span className="font-bold text-lg">Portfolio</span>
            <button
              className="text-white/80 p-2 rounded focus:outline-none"
              onClick={() => setNavOpen(!navOpen)}
              aria-label="Toggle navigation"
            >
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <ul className={`list-none lg:flex justify-center gap-8 ${navOpen ? 'flex flex-col items-center mt-4 bg-slate-900/95 rounded-xl shadow-lg py-4' : 'hidden lg:flex'}`}>
            <li>
              <a 
                href="#" 
                className="text-white/80 font-medium hover:text-primary transition-colors duration-300 relative group px-2 py-2"
                onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setNavOpen(false); }}
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="text-white/80 font-medium hover:text-primary transition-colors duration-300 relative group px-2 py-2"
                onClick={() => setNavOpen(false)}
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className="text-white/80 font-medium hover:text-primary transition-colors duration-300 relative group px-2 py-2"
                onClick={() => setNavOpen(false)}
              >
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                href="#credentials" 
                className="text-white/80 font-medium hover:text-primary transition-colors duration-300 relative group px-2 py-2"
                onClick={() => setNavOpen(false)}
              >
                Credentials
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="text-white/80 font-medium hover:text-primary transition-colors duration-300 relative group px-2 py-2"
                onClick={() => setNavOpen(false)}
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
        <section id="contact" className="bg-slate-900/80 border-t border-slate-700/50 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center space-y-6">
              {/* Contact Links */}
              <div className="flex gap-4 flex-wrap justify-center">
                <button
                  onClick={() => setIsEmailModalOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800/60 hover:bg-primary/20 border border-slate-700/50 hover:border-primary/40 rounded-lg text-slate-300 hover:text-primary transition-all duration-200 text-sm"
                >
                  <span>📧</span>
                  <span>Email</span>
                </button>
                <a 
                  href={personalInfo.social.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700/50 hover:border-slate-500/50 rounded-lg text-slate-300 hover:text-white transition-all duration-200 text-sm"
                >
                  <span>💻</span>
                  <span>GitHub</span>
                </a>
                <a 
                  href={personalInfo.social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800/60 hover:bg-accent/20 border border-slate-700/50 hover:border-accent/40 rounded-lg text-slate-300 hover:text-accent transition-all duration-200 text-sm"
                >
                  <span>👔</span>
                  <span>LinkedIn</span>
                </a>
                <a 
                  href={personalInfo.social.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800/60 hover:bg-blue-500/20 border border-slate-700/50 hover:border-blue-500/40 rounded-lg text-slate-300 hover:text-blue-400 transition-all duration-200 text-sm"
                >
                  <span>📘</span>
                  <span>Facebook</span>
                </a>
                <a 
                  href={personalInfo.social.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800/60 hover:bg-pink-500/20 border border-slate-700/50 hover:border-pink-500/40 rounded-lg text-slate-300 hover:text-pink-400 transition-all duration-200 text-sm"
                >
                  <span>📷</span>
                  <span>Instagram</span>
                </a>
              </div>

              {/* Status & Copyright */}
              <div className="flex flex-col items-center gap-2 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  <span>Available for new projects</span>
                </div>
                <p>&copy; John Mathew C. Parocha</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Email Modal */}
      {isEmailModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 max-w-md w-full mx-4 relative">
            <button
              onClick={() => setIsEmailModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-3xl">
                📧
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Get In Touch</h3>
              <p className="text-slate-300 mb-6">Feel free to reach out to me via email :</p>
              
              <div className="bg-slate-700/50 rounded-lg p-4 mb-6 flex items-center justify-center gap-3">
                <p className="text-primary font-mono text-lg select-all">
                  parocha.johnmathew23@gmail.com
                </p>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('parocha.johnmathew23@gmail.com');
                  }}
                  className="text-slate-400 hover:text-primary transition-colors p-1 rounded"
                  title="Copy email"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
