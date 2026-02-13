import React, { useState, useEffect, useRef } from 'react';
import { academicData } from './academicData';
import { certificateData } from './certificateData';
import { esportsData } from './esportsData';

const CredentialsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('academic');
  const [isVisible, setIsVisible] = useState(false);
  const [expandedEsports, setExpandedEsports] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 } // Lowered from 0.1 for faster triggering on mobile
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
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
              <span className="text-xl">🎓</span>
            </div>
            Academic
          </h3>
          <div className="space-y-6">
            {academicData.map((record, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-bl-2xl rounded-tr-2xl opacity-50"></div>

                <div className="relative flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors">
                      {record.institution}
                    </h4>
                    <p className="text-blue-400 font-medium">{record.period}</p>
                  </div>
                </div>

                {/* Academic Details */}
                <div className="relative space-y-4">
                  <div>
                    <h5 className="text-sm font-semibold text-blue-200 mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                      Academic Performance
                    </h5>
                    <ul className="space-y-1">
                      {record.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-sm text-slate-300 flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {record.positions && (
                    <div>
                      <h5 className="text-sm font-semibold text-blue-200 mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                        Leadership Positions
                      </h5>
                      <ul className="space-y-1">
                        {record.positions.map((position, positionIndex) => (
                          <li key={positionIndex} className="text-sm text-slate-300 flex items-start gap-2">
                            <span className="text-blue-400 mt-1">•</span>
                            <span>{position}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {record.achievements && (
                    <div>
                      <h5 className="text-sm font-semibold text-blue-200 mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                        Achievements
                      </h5>
                      <ul className="space-y-1">
                        {record.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-sm text-slate-300 flex items-start gap-2">
                            <span className="text-blue-400 mt-1">•</span>
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
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg">
              <span className="text-xl">📜</span>
            </div>
            Certificates
          </h3>
          <div className="space-y-6">
            {certificateData.map((provider, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-emerald-500/10 via-green-500/5 to-transparent rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
                {/* Decorative side accent */}
                <div className="absolute left-0 top-4 bottom-4 w-1 bg-gradient-to-b from-emerald-400 to-green-600 rounded-r-full opacity-60"></div>

                <div className="relative flex items-start justify-between gap-4 mb-4 pl-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                      {provider.provider}
                    </h4>
                  </div>
                  <div className="flex-shrink-0">
                    <span className={`inline-flex px-4 py-2 rounded-full text-xs font-semibold border-2 ${provider.type === 'certification'
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-lg shadow-emerald-500/20'
                        : provider.type === 'seminar'
                          ? 'bg-green-500/20 text-green-300 border-green-500/40 shadow-lg shadow-green-500/20'
                          : 'bg-teal-500/20 text-teal-300 border-teal-500/40 shadow-lg shadow-teal-500/20'
                      }`}>
                      {provider.type.charAt(0).toUpperCase() + provider.type.slice(1)}
                    </span>
                  </div>
                </div>

                <div className="relative space-y-2 pl-4">
                  <h5 className="text-sm font-semibold text-emerald-200 mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    {provider.type === 'certification' ? 'Completed Courses' : 'Attended Sessions'}
                  </h5>
                  <ul className="space-y-1">
                    {provider.certificates.map((certificate, certIndex) => (
                      <li key={certIndex} className="text-sm text-slate-300 flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">•</span>
                        <span>{certificate}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'esports',
      label: 'Esports',
      icon: '🎮',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg">
              <span className="text-xl">🎮</span>
            </div>
            Esports
          </h3>
          <div className="space-y-4">
            {esportsData.map((record, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 overflow-hidden">
                {/* Gaming-inspired corner decoration */}
                <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-purple-500/30 to-pink-600/30 transform rotate-45 -translate-x-4 -translate-y-4"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-gradient-to-tl from-pink-500/30 to-purple-600/30 transform rotate-45 translate-x-3 translate-y-3"></div>

                <div className="relative p-4">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-2">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors">
                        {record.organization}
                      </h4>
                      <p className="text-purple-400 font-medium mb-1">{record.role}</p>
                      <p className="text-slate-400 text-sm flex items-center gap-2">
                        <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                        {record.period}
                      </p>
                    </div>
                    <button
                      onClick={() => setExpandedEsports(expandedEsports === index ? null : index)}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/30 to-pink-600/30 hover:from-purple-600/50 hover:to-pink-600/50 border border-purple-500/40 rounded-xl text-purple-200 hover:text-white transition-all duration-200 text-sm shadow-lg hover:shadow-purple-500/20 lg:ml-4"
                    >
                      <span>{expandedEsports === index ? 'Less' : 'More'}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${expandedEsports === index ? 'rotate-180' : ''
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Expanded Details */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedEsports === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                  <div className="relative px-4 pb-4 border-t border-purple-500/20">
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
                    <div className="relative pt-3">
                      <ul className="space-y-2">
                        {record.description.map((desc, descIndex) => (
                          <li key={descIndex} className="text-sm text-slate-300 flex items-start gap-2">
                            <span className="text-purple-400 mt-1 font-bold">•</span>
                            <span className="leading-relaxed">{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-6">
            Other Credentials
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Academic achievements, professional certifications, and competitive gaming accomplishments
          </p>
        </div>

        {/* Tab Navigation - Mobile Only */}
        <div className={`flex justify-center mb-8 lg:hidden transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <div className="inline-flex bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-2">
            {credentialSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === section.id
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
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          {/* Desktop - 3 Column Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            {credentialSections.map((section, index) => (
              <div
                key={section.id}
                className={`bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
