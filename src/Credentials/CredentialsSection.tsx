import React, { useState, useEffect, useRef } from 'react';
import { academicData } from './academicData';

const CredentialsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('academic');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const credentialSections = [
    { 
      id: 'academic', 
      label: 'Academic', 
      icon: '🎓',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <span className="text-2xl">🎓</span>
            Academic
          </h3>
          <div className="space-y-6">
            {academicData.map((record, index) => (
              <div key={index} className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/50">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {record.institution}
                    </h4>
                    <p className="text-primary font-medium">{record.period}</p>
                  </div>
                </div>
                
                {/* Academic Details */}
                <div className="space-y-4">
                  <div>
                    <h5 className="text-sm font-semibold text-slate-300 mb-2">Academic Performance</h5>
                    <ul className="space-y-1">
                      {record.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-sm text-slate-400 flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {record.positions && (
                    <div>
                      <h5 className="text-sm font-semibold text-slate-300 mb-2">Leadership Positions</h5>
                      <ul className="space-y-1">
                        {record.positions.map((position, positionIndex) => (
                          <li key={positionIndex} className="text-sm text-slate-400 flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span>{position}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {record.achievements && (
                    <div>
                      <h5 className="text-sm font-semibold text-slate-300 mb-2">Achievements</h5>
                      <ul className="space-y-1">
                        {record.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-sm text-slate-400 flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    { 
      id: 'certificates', 
      label: 'Certificates', 
      icon: '📜',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <span className="text-2xl">📜</span>
            Certificates
          </h3>
          <p className="text-slate-400 text-sm">Professional certifications and courses will be displayed here.</p>
        </div>
      )
    },
    { 
      id: 'esports', 
      label: 'Esports', 
      icon: '🎮',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <span className="text-2xl">🎮</span>
            Esports
          </h3>
          <p className="text-slate-400 text-sm">Gaming and esports accomplishments will be displayed here.</p>
        </div>
      )
    }
  ];

  const renderTabContent = () => {
    const activeSection = credentialSections.find(section => section.id === activeTab);
    return activeSection ? activeSection.content : null;
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20"
      id="credentials"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-6">
            Other Credentials
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Academic achievements, professional certifications, and competitive gaming accomplishments
          </p>
        </div>

        {/* Tab Navigation - Mobile Only */}
        <div className={`flex justify-center mb-8 lg:hidden transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-2">
            {credentialSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === section.id
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg transform scale-105'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <span className="text-xl">{section.icon}</span>
                <span className="text-sm">{section.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className={`transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Desktop - 3 Column Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            {credentialSections.map((section, index) => (
              <div 
                key={section.id}
                className={`bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${600 + index * 200}ms` }}
              >
                {section.content}
              </div>
            ))}
          </div>

          {/* Mobile - Tab Content */}
          <div className="lg:hidden bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
