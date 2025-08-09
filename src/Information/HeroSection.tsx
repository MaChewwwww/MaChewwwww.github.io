import React, { useEffect, useState } from 'react';
import type { PersonalInfo } from './personalInfo';
import Aurora from '../Background/Aurora';
import Particles from '../Background/Particles';
import ProfileCard from './ProfileCard';

interface HeroSectionProps {
  personalInfo: PersonalInfo;
}

const HeroSection: React.FC<HeroSectionProps> = ({ personalInfo }) => {
  const { name, role, roles, profileImage = "/api/placeholder/200/200", miniAvatarImage, resumeUrl = "#", education, stats } = personalInfo;
  const [isVisible, setIsVisible] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  // Use roles from personalInfo, fallback to default if not provided
  const rolesList = roles || [role];

  // Get primary education info (first item in education array)
  const primaryEducation = education && education.length > 0 ? education[0] : null;

  useEffect(() => {
    setIsVisible(true);
    
    // Role rotation animation with slower typing and longer pause
    const roleInterval = setInterval(() => {
      setIsTyping(false); // Stop typing animation
      
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % rolesList.length);
        setIsTyping(true); // Start typing animation for new role
      }, 3000); // 3 second pause after typing completes
    }, 8000); // Total cycle time: 5s typing + 3s pause

    return () => clearInterval(roleInterval);
  }, [rolesList.length]);

  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 py-8 md:py-12">
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Particles Background */}
      <div className="absolute inset-0 z-1">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={400}
          particleSpread={15}
          speed={0.1}
          particleBaseSize={200}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* Additional overlay for better text readability */}
      <div className="absolute inset-0 z-2 bg-slate-900/20"></div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Mobile Layout - Stack vertically */}
        <div className="flex flex-col items-center text-center space-y-4 md:hidden">
          
          {/* Mobile Profile Card */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="w-64 h-96">
              <ProfileCard
                name="MaChew"
                handle="yourhandle"
                status="Available for work"
                avatarUrl={profileImage}
                miniAvatarUrl={miniAvatarImage}
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
              />
            </div>
          </div>

          {/* Mobile Name */}
          <div className={`transform transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-3xl sm:text-4xl font-black leading-none">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-100">
                {name}
              </span>
            </h1>
          </div>

          {/* Mobile Role */}
          <div className={`transform transition-all duration-700 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-lg sm:text-xl font-bold text-blue-300">
              <span className={`inline-block ${isTyping ? 'animate-typewriter-slow' : ''}`}>
                {rolesList[currentRoleIndex]}
              </span>
              <span className={`${isTyping ? 'animate-blink' : 'opacity-50'}`}>|</span>
            </h2>
          </div>

          {/* Mobile Education */}
          {primaryEducation && (
            <div className={`transform transition-all duration-700 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-center space-y-1">
                <p className="text-sm font-medium text-slate-300">{primaryEducation.degree}</p>
                <p className="text-sm text-slate-400">{primaryEducation.institution}</p>
              </div>
            </div>
          )}

          {/* Mobile Buttons with extra bottom padding */}
          <div className={`flex flex-col w-full max-w-sm space-y-3 pb-8 transform transition-all duration-700 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                <span>View My Work</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-6 py-3 border-2 border-slate-400 hover:border-blue-400 text-slate-200 hover:text-white font-semibold rounded-lg backdrop-blur-sm hover:bg-white/5 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                <span>Download Resume</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Desktop Layout - Side by side */}
        <div className="hidden md:grid md:grid-cols-12 gap-8 items-center">
          
          {/* Content Section - Enhanced */}
          <div className={`lg:col-span-7 space-y-6 transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            
            {/* Name and Role Section */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-black leading-none">
                <div className={`transform transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200 transition-all duration-500">
                    {name}
                  </span>
                </div>
              </h1>
              
              {/* Animated role with typewriter effect */}
              <div className="h-12 md:h-14 flex items-center">
                <h2 className={`text-xl md:text-2xl lg:text-3xl font-bold text-blue-300 transform transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                  <span className={`inline-block ${isTyping ? 'animate-typewriter-slow' : ''}`}>
                    {rolesList[currentRoleIndex]}
                  </span>
                  <span className={`${isTyping ? 'animate-blink' : 'opacity-50'}`}>|</span>
                </h2>
              </div>

              {/* Desktop Education with enhanced styling */}
              {primaryEducation && (
                <div className={`transform transition-all duration-700 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <p className="text-base md:text-lg font-medium text-slate-200">{primaryEducation.degree}</p>
                    <p className="text-sm md:text-base text-slate-400">{primaryEducation.institution}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Stats Section - Using data from personalInfo */}
            <div className={`grid grid-cols-3 gap-4 transform transition-all duration-700 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-center bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-sm rounded-lg p-3 border border-blue-500/20">
                <div className="text-2xl font-bold text-blue-400">{stats.yearsExperience}+</div>
                <div className="text-xs text-slate-400">Years Exp</div>
              </div>
              <div className="text-center bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-sm rounded-lg p-3 border border-purple-500/20">
                <div className="text-2xl font-bold text-purple-400">{stats.projectsCompleted}+</div>
                <div className="text-xs text-slate-400">Projects</div>
              </div>
              <div className="text-center bg-gradient-to-br from-teal-500/10 to-teal-600/10 backdrop-blur-sm rounded-lg p-3 border border-teal-500/20">
                <div className="text-2xl font-bold text-teal-400">{stats.certificatesEarned}+</div>
                <div className="text-xs text-slate-400">Certificates</div>
              </div>
            </div>

            {/* CTA Buttons - Enhanced */}
            <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-700 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <span className="text-lg">View My Work</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 border-2 border-slate-400 hover:border-blue-400 text-slate-200 hover:text-white font-semibold rounded-xl backdrop-blur-sm hover:bg-white/5 transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-3">
                  <span className="text-lg">Download Resume</span>
                  <svg className="w-5 h-5 group-hover:translate-y-[-2px] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Social Media Links - Brought back for desktop */}
            <div className={`flex gap-4 transform transition-all duration-700 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-blue-500/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
              <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-blue-600/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href={personalInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-purple-500/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                <svg className="w-5 h-5 text-slate-400 group-hover:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Desktop Profile Card Section */}
          <div className={`lg:col-span-5 flex justify-center lg:justify-end transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="w-80">
              <ProfileCard
                name="MaChew"
                handle="MaChewwwww"
                status="Available for work"
                avatarUrl={profileImage}
                miniAvatarUrl={miniAvatarImage}
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator - Fixed positioning for mobile */}
      <div className={`absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="group flex flex-col items-center gap-1 text-white/60 hover:text-white transition-all duration-300 p-2"
          aria-label="Scroll to About section"
        >
          <span className="text-xs font-medium tracking-wider uppercase hidden md:block">Scroll Down</span>
          <div className="relative">
            <svg className="w-5 h-5 animate-bounce group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
