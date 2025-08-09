import React, { useEffect, useState } from 'react';
import { personalInfo } from '../Information/personalInfo';

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 px-8 bg-slate-900/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Details */}
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-500">
              <h3 className="text-2xl font-semibold mb-4 text-blue-300">My Journey</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                I'm a passionate full-stack developer with a love for creating innovative web applications. 
                My journey in tech started with curiosity and has evolved into a deep expertise in modern web technologies.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                I believe in writing clean, efficient code and creating user experiences that make a difference. 
                Whether it's building responsive frontends or architecting scalable backends, I approach every project 
                with attention to detail and a commitment to excellence.
              </p>
              <p className="text-slate-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, 
                or sharing knowledge with the developer community.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-purple-500/30 transition-all duration-500">
              <h3 className="text-2xl font-semibold mb-4 text-purple-300">What Drives Me</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">🚀</span>
                  <span className="text-slate-300">Building scalable applications that solve real-world problems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">💡</span>
                  <span className="text-slate-300">Learning and implementing cutting-edge technologies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">🤝</span>
                  <span className="text-slate-300">Collaborating with teams to deliver exceptional results</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">📈</span>
                  <span className="text-slate-300">Continuous improvement and professional growth</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Tech Stack */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-gradient-to-r hover:border-blue-500/30 transition-all duration-500 sticky top-8">
              <h3 className="text-2xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Tech Stack
              </h3>
              
              <div className="space-y-6">
                {/* Backend */}
                <div className="space-y-3">
                  <h4 className="text-purple-300 text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Backend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {personalInfo.skillsByCategory.backend.map((tech, index) => (
                      <span 
                        key={tech}
                        className="group px-3 py-1.5 bg-purple-500/20 backdrop-blur-sm text-purple-200 text-sm font-medium rounded-full border border-purple-400/30 hover:border-purple-400 hover:bg-purple-500/30 hover:text-white transition-all duration-300 cursor-default hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                        style={{ 
                          animationDelay: `${index * 0.05}s`,
                          transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                          opacity: isVisible ? 1 : 0,
                          transition: `all 0.5s ease-out ${index * 0.05}s`
                        }}
                      >
                        <span className="group-hover:animate-pulse">{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Frontend */}
                <div className="space-y-3">
                  <h4 className="text-blue-300 text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    Frontend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {personalInfo.skillsByCategory.frontend.map((tech, index) => (
                      <span 
                        key={tech}
                        className="group px-3 py-1.5 bg-blue-500/20 backdrop-blur-sm text-blue-200 text-sm font-medium rounded-full border border-blue-400/30 hover:border-blue-400 hover:bg-blue-500/30 hover:text-white transition-all duration-300 cursor-default hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                        style={{ 
                          animationDelay: `${0.1 + index * 0.05}s`,
                          transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                          opacity: isVisible ? 1 : 0,
                          transition: `all 0.5s ease-out ${0.1 + index * 0.05}s`
                        }}
                      >
                        <span className="group-hover:animate-pulse">{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Database */}
                <div className="space-y-3">
                  <h4 className="text-green-300 text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Database
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {personalInfo.skillsByCategory.database.map((tech, index) => (
                      <span 
                        key={tech}
                        className="group px-3 py-1.5 bg-green-500/20 backdrop-blur-sm text-green-200 text-sm font-medium rounded-full border border-green-400/30 hover:border-green-400 hover:bg-green-500/30 hover:text-white transition-all duration-300 cursor-default hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
                        style={{ 
                          animationDelay: `${0.2 + index * 0.05}s`,
                          transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                          opacity: isVisible ? 1 : 0,
                          transition: `all 0.5s ease-out ${0.2 + index * 0.05}s`
                        }}
                      >
                        <span className="group-hover:animate-pulse">{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Framework */}
                <div className="space-y-3">
                  <h4 className="text-cyan-300 text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    Framework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {personalInfo.skillsByCategory.framework.map((tech, index) => (
                      <span 
                        key={tech}
                        className="group px-3 py-1.5 bg-cyan-500/20 backdrop-blur-sm text-cyan-200 text-sm font-medium rounded-full border border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-500/30 hover:text-white transition-all duration-300 cursor-default hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                        style={{ 
                          animationDelay: `${0.3 + index * 0.05}s`,
                          transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                          opacity: isVisible ? 1 : 0,
                          transition: `all 0.5s ease-out ${0.3 + index * 0.05}s`
                        }}
                      >
                        <span className="group-hover:animate-pulse">{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* DevOps */}
                <div className="space-y-3">
                  <h4 className="text-orange-300 text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                    DevOps & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {personalInfo.skillsByCategory.devops.map((tech, index) => (
                      <span 
                        key={tech}
                        className="group px-3 py-1.5 bg-orange-500/20 backdrop-blur-sm text-orange-200 text-sm font-medium rounded-full border border-orange-400/30 hover:border-orange-400 hover:bg-orange-500/30 hover:text-white transition-all duration-300 cursor-default hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
                        style={{ 
                          animationDelay: `${0.4 + index * 0.05}s`,
                          transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                          opacity: isVisible ? 1 : 0,
                          transition: `all 0.5s ease-out ${0.4 + index * 0.05}s`
                        }}
                      >
                        <span className="group-hover:animate-pulse">{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
