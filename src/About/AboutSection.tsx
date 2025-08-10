import React, { useEffect, useState } from 'react';
import { personalInfo } from '../personalInfo';
import Orb from '../Background/Orb';

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Observer for triggering animations when 25% visible
    const triggerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            const animatedElements = aboutSection.querySelectorAll('.animate-on-scroll, .animate-on-scroll-scale');
            animatedElements.forEach((element) => {
              element.classList.add('in-view');
            });
          }
        }
      },
      { threshold: 0.25 }
    );

    // Observer for resetting animations when completely out of view
    const resetObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setIsVisible(false);
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            const animatedElements = aboutSection.querySelectorAll('.animate-on-scroll, .animate-on-scroll-scale');
            animatedElements.forEach((element) => {
              element.classList.remove('in-view');
            });
          }
        }
      },
      { threshold: 0 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      triggerObserver.observe(aboutSection);
      resetObserver.observe(aboutSection);
    }

    return () => {
      triggerObserver.disconnect();
      resetObserver.disconnect();
    };
  }, []);

  return (
    <section id="about" className="py-12 px-8 bg-slate-900/50 relative overflow-hidden">
      {/* Top Glow Line */}
      <div className="absolute top-0 left-0 w-full glow-line-top"></div>
      
      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 w-full glow-line-bottom"></div>
      
      {/* Orb Background */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <div className="w-[860px] h-[860px]">
          <Orb
            hue={220}
            hoverIntensity={0.3}
            rotateOnHover={true}
            forceHoverState={false}
          />
        </div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 animate-on-scroll-scale">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-stretch animate-on-scroll">
          {/* Left Column - About Details */}
          <div className="flex flex-col space-y-6 animate-stagger-1">
            <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-500 flex-1 flex flex-col animate-on-scroll">
              <h3 className="text-2xl font-semibold mb-4 text-blue-300">My Journey</h3>
              <div className="flex-1 flex flex-col justify-between space-y-4">
                <p className="text-slate-300 leading-relaxed">
                  From an early age, I have nurtured a strong passion for technology, 
                  which led me to pursue software development during Senior High School. 
                  This early start allowed me to explore the fundamentals of programming 
                  and problem-solving, laying the groundwork for my future career in the tech industry.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Throughout college, I dedicated myself to building robust, 
                  scalable, and well-structured systems, ensuring that each project, 
                  case study, and system I developed would serve as a solid foundation 
                  for my professional growth. With a particular interest in backend engineering, 
                  I focus on designing efficient architectures, optimizing performance, and ensuring 
                  reliability in every solution I create.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Beyond academics, I balanced my role as a consistent honor student with my enthusiasm for esports, 
                  where I also applied my development skills to support and pioneer initiatives within our 
                  campus community. This combination of technical expertise, leadership, and collaboration 
                  continues to shape my approach to solving real-world challenges.
                </p>
              </div>
            </div>

            <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-purple-500/30 transition-all duration-500 flex-1 flex flex-col animate-on-scroll animate-stagger-2">
              <h3 className="text-2xl font-semibold mb-4 text-purple-300">What Drives Me</h3>
              <ul className="space-y-3 flex-1 flex flex-col justify-center">
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
          <div className="flex animate-stagger-3">
            <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-gradient-to-r hover:border-blue-500/30 transition-all duration-500 flex-1 flex flex-col animate-on-scroll-scale">
              <h3 className="text-2xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Tech Stack
              </h3>
              
              <div className="space-y-4 flex-1 overflow-y-auto">
                {/* Backend */}
                <div className="space-y-2">
                  <h4 className="text-purple-300 text-xs font-semibold uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                    Backend
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {personalInfo.skillsByCategory.backend.map((tech, index) => (
                      <span 
                        key={tech}
                        className="group px-2 py-1 bg-purple-500/15 backdrop-blur-sm text-purple-200 text-xs font-medium rounded-md border border-purple-400/20 hover:border-purple-400/50 hover:bg-purple-500/25 hover:text-white transition-all duration-300 cursor-default hover:scale-105"
                        style={{ 
                          animationDelay: `${index * 0.03}s`,
                          transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                          opacity: isVisible ? 1 : 0,
                          transition: `all 0.4s ease-out ${index * 0.03}s`
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Frontend */}
                <div className="space-y-2">
                  <h4 className="text-blue-300 text-xs font-semibold uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    Frontend
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {personalInfo.skillsByCategory.frontend.map((tech, index) => (
                      <span 
                        key={tech}
                        className="group px-2 py-1 bg-blue-500/15 backdrop-blur-sm text-blue-200 text-xs font-medium rounded-md border border-blue-400/20 hover:border-blue-400/50 hover:bg-blue-500/25 hover:text-white transition-all duration-300 cursor-default hover:scale-105"
                        style={{ 
                          animationDelay: `${0.1 + index * 0.03}s`,
                          transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                          opacity: isVisible ? 1 : 0,
                          transition: `all 0.4s ease-out ${0.1 + index * 0.03}s`
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Database */}
                <div className="space-y-2">
                  <h4 className="text-green-300 text-xs font-semibold uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    Database
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {personalInfo.skillsByCategory.database.map((tech, index) => (
                      <span 
                        key={tech}
                        className="group px-2 py-1 bg-green-500/15 backdrop-blur-sm text-green-200 text-xs font-medium rounded-md border border-green-400/20 hover:border-green-400/50 hover:bg-green-500/25 hover:text-white transition-all duration-300 cursor-default hover:scale-105"
                        style={{ 
                          animationDelay: `${0.2 + index * 0.03}s`,
                          transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                          opacity: isVisible ? 1 : 0,
                          transition: `all 0.4s ease-out ${0.2 + index * 0.03}s`
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Framework */}
                <div className="space-y-2">
                  <h4 className="text-cyan-300 text-xs font-semibold uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                    Framework
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {personalInfo.skillsByCategory.framework.map((tech, index) => (
                      <span 
                        key={tech}
                        className="group px-2 py-1 bg-cyan-500/15 backdrop-blur-sm text-cyan-200 text-xs font-medium rounded-md border border-cyan-400/20 hover:border-cyan-400/50 hover:bg-cyan-500/25 hover:text-white transition-all duration-300 cursor-default hover:scale-105"
                        style={{ 
                          animationDelay: `${0.3 + index * 0.03}s`,
                          transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                          opacity: isVisible ? 1 : 0,
                          transition: `all 0.4s ease-out ${0.3 + index * 0.03}s`
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* DevOps */}
                <div className="space-y-2">
                  <h4 className="text-orange-300 text-xs font-semibold uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                    DevOps & Tools
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {personalInfo.skillsByCategory.devops.map((tech, index) => (
                      <span 
                        key={tech}
                        className="group px-2 py-1 bg-orange-500/15 backdrop-blur-sm text-orange-200 text-xs font-medium rounded-md border border-orange-400/20 hover:border-orange-400/50 hover:bg-orange-500/25 hover:text-white transition-all duration-300 cursor-default hover:scale-105"
                        style={{ 
                          animationDelay: `${0.4 + index * 0.03}s`,
                          transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                          opacity: isVisible ? 1 : 0,
                          transition: `all 0.4s ease-out ${0.4 + index * 0.03}s`
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* AI & Machine Learning */}
                <div className="space-y-2">
                  <h4 className="text-amber-300 text-xs font-semibold uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                    AI & Machine Learning
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {personalInfo.skillsByCategory.aiMachineLearning.map((tech, index) => (
                      <span 
                        key={tech}
                        className="group px-2 py-1 bg-amber-500/15 backdrop-blur-sm text-amber-200 text-xs font-medium rounded-md border border-amber-400/20 hover:border-amber-400/50 hover:bg-amber-500/25 hover:text-white transition-all duration-300 cursor-default hover:scale-105"
                        style={{ 
                          animationDelay: `${0.5 + index * 0.03}s`,
                          transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                          opacity: isVisible ? 1 : 0,
                          transition: `all 0.4s ease-out ${0.5 + index * 0.03}s`
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-slate-700/50 my-8"></div>

              {/* Other Skills Section */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
                  Other Skills
                </h3>
                
                <div className="space-y-3">
                  {personalInfo.otherSkills.map((skill, index) => (
                    <div 
                      key={skill.name}
                      className="group"
                      style={{ 
                        animationDelay: `${0.6 + index * 0.1}s`,
                        transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                        opacity: isVisible ? 1 : 0,
                        transition: `all 0.5s ease-out ${0.6 + index * 0.1}s`
                      }}
                    >
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-slate-200 text-sm font-medium">{skill.name}</span>
                        <span className="text-pink-300 text-xs font-semibold">{skill.rating}/5</span>
                      </div>
                      <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-pink-500/25"
                          style={{
                            width: isVisible ? `${(skill.rating / 5) * 100}%` : '0%',
                            transitionDelay: `${0.8 + index * 0.1}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
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
