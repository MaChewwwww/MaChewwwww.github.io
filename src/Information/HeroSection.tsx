import React, { useEffect, useState, useRef } from 'react';
import { useIsMobile } from '../hooks/useIsMobile';
import type { PersonalInfo } from '../personalInfo';
import Aurora from '../Background/Aurora';
import Particles from '../Background/Particles';
import ProfileCard from './ProfileCard';

interface HeroSectionProps {
  personalInfo: PersonalInfo;
}

const HeroSection: React.FC<HeroSectionProps> = ({ personalInfo }) => {
  const { name, role, roles, profileImage = "/api/placeholder/200/200", miniAvatarImage, resumeUrl = "#", education, stats } = personalInfo;
  const [isVisible, setIsVisible] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  // Use roles from personalInfo, fallback to default if not provided
  const rolesList = roles || [role];

  // Get primary education info (first item in education array)
  const primaryEducation = education && education.length > 0 ? education[0] : null;

  useEffect(() => {
    setIsVisible(true);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      {
        threshold: 0.01, // Lowered from 0.1 to trigger as soon as it enters
        rootMargin: '100px 0px' // Expanded margin to trigger animations slightly before entering
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Role rotation animation with slower typing and longer pause
    const roleInterval = setInterval(() => {
      setIsTyping(false); // Stop typing animation

      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % rolesList.length);
        setIsTyping(true); // Start typing animation for new role
      }, 3000); // 3 second pause after typing completes
    }, 8000); // Total cycle time: 5s typing + 3s pause

    return () => {
      clearInterval(roleInterval);
      observer.disconnect();
    };
  }, [rolesList.length]);

  return (

    <section
      ref={sectionRef}
      className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden py-8 md:py-12"
      style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #6d28d9 60%, #a78bfa 100%)',
        backgroundImage: 'repeating-radial-gradient(circle at 20% 40%, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 2px, transparent 3px, transparent 40px)',
      }}
    >

      {/* Only show animated backgrounds on desktop when in view */}
      {!isMobile && (
        <div className="hidden md:block">
          <div className="absolute inset-0 z-0">
            {isInView && (
              <Aurora
                colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                blend={0.5}
                amplitude={1.0}
                speed={0.5}
              />
            )}
          </div>
          <div className="absolute inset-0 z-1">
            {isInView && (
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
            )}
          </div>
          <div className="absolute inset-0 z-2 bg-slate-900/20"></div>
        </div>
      )}

      <div className={`relative z-10 container mx-auto px-4 md:px-6 max-w-6xl transition-all duration-1000 ${isInView ? 'animate-on-scroll in-view' : 'animate-on-scroll'
        }`}>
        {/* Mobile Layout - Stack vertically */}
        <div className="flex flex-col items-center text-center space-y-4 md:hidden" style={{
          background: 'linear-gradient(135deg, #1e293b 0%, #6d28d9 60%, #a78bfa 100%)',
          backgroundImage: 'repeating-radial-gradient(circle at 20% 40%, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 2px, transparent 3px, transparent 40px)',
          borderRadius: '1.5rem',
          padding: '1rem 0',
          width: '100%',
          maxWidth: '24rem',
          margin: '0 auto',
        }}>

          {/* Mobile Profile Card */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="w-full max-w-xs mx-auto">
              <ProfileCard
                name="MaChew"
                handle="yourhandle"
                status="Available for work"
                avatarUrl={profileImage}
                miniAvatarUrl={miniAvatarImage}
                showUserInfo={true}
                enableTilt={false}
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
              <div className="group relative bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/25 overflow-hidden">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Education icon and content */}
                <div className="flex items-center gap-3 relative z-10">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>

                  <div className="flex-grow text-center">
                    <p className="text-base font-bold text-white mb-1 group-hover:text-blue-300 transition-colors duration-300">
                      {primaryEducation.degree}
                    </p>
                    <p className="text-sm text-slate-300 font-medium">
                      {primaryEducation.institution}
                    </p>
                  </div>
                </div>

                {/* Subtle animated border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
              </div>
            </div>
          )}

          {/* Mobile Buttons with extra bottom padding */}
          <div className={`flex flex-col w-full max-w-sm space-y-3 pb-8 transform transition-all duration-700 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative w-full px-6 py-3 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 hover:from-blue-400 hover:via-blue-500 hover:to-purple-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-1 hover:scale-105 transition-all duration-500 overflow-hidden"
            >
              {/* Animated background layers */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

              {/* Button content */}
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span className="font-bold tracking-wide">View My Work</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>

              {/* Shine effect */}
              <div className="absolute top-0 -left-4 w-4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 group-hover:animate-pulse"></div>
            </button>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full px-6 py-3 border-2 border-slate-400/50 hover:border-blue-400/80 text-slate-200 hover:text-white font-bold rounded-2xl backdrop-blur-md bg-white/5 hover:bg-white/10 shadow-lg hover:shadow-xl hover:shadow-blue-400/10 transform hover:-translate-y-1 hover:scale-105 transition-all duration-500 overflow-hidden"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              {/* Button content */}
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg className="w-4 h-4 group-hover:-rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="font-bold tracking-wide">Download Resume</span>
                <svg className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>

              {/* Border glow effect */}
              <div className="absolute inset-0 rounded-2xl border border-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
          </div>
        </div>

        {/* Desktop Layout - Side by side */}
        <div className="hidden md:grid md:grid-cols-12 gap-8 items-center">

          {/* Content Section - Enhanced */}
          <div className={`lg:col-span-7 space-y-6 transition-all duration-1000 ease-out ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>

            {/* Name and Role Section */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-black leading-none">
                <div className={`transform transition-all duration-700 delay-300 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200 transition-all duration-500">
                    {name}
                  </span>
                </div>
              </h1>

              {/* Animated role with typewriter effect */}
              <div className="h-12 md:h-14 flex items-center">
                <h2 className={`text-xl md:text-2xl lg:text-3xl font-bold text-blue-300 transform transition-all duration-500 delay-500 ${isInView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                  }`}>
                  <span className={`inline-block ${isTyping ? 'animate-typewriter-slow' : ''}`}>
                    {rolesList[currentRoleIndex]}
                  </span>
                  <span className={`${isTyping ? 'animate-blink' : 'opacity-50'}`}>|</span>
                </h2>
              </div>

              {/* Desktop Education with enhanced styling */}
              {primaryEducation && (
                <div className={`transform transition-all duration-700 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                  <div className="group relative bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/25 overflow-hidden">
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Education icon */}
                    <div className="flex items-start gap-4 relative z-10">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                      </div>

                      <div className="flex-grow">
                        <p className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors duration-300">
                          {primaryEducation.degree}
                        </p>
                        <p className="text-sm md:text-base text-slate-300 font-medium">
                          {primaryEducation.institution}
                        </p>
                      </div>
                    </div>

                    {/* Subtle animated border */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Stats Section - Using data from personalInfo */}
            <div className={`grid grid-cols-3 gap-4 transform transition-all duration-700 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="group relative text-center bg-gradient-to-br from-blue-500/15 via-blue-600/10 to-indigo-500/15 backdrop-blur-md rounded-2xl p-4 border border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                {/* Icon */}
                <div className="relative z-10 w-8 h-8 mx-auto mb-2 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>

                <div className="relative z-10">
                  <div className="text-2xl lg:text-3xl font-bold text-blue-300 group-hover:text-blue-200 transition-colors duration-300 mb-1">
                    {stats.yearsExperience}+
                  </div>
                  <div className="text-xs lg:text-sm text-slate-400 font-medium tracking-wide">
                    Years Exp
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              </div>

              <div className="group relative text-center bg-gradient-to-br from-emerald-500/15 via-emerald-600/10 to-green-500/15 backdrop-blur-md rounded-2xl p-4 border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/20 hover:-translate-y-1 overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                {/* Icon */}
                <div className="relative z-10 w-8 h-8 mx-auto mb-2 bg-emerald-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>

                <div className="relative z-10">
                  <div className="text-2xl lg:text-3xl font-bold text-emerald-300 group-hover:text-emerald-200 transition-colors duration-300 mb-1">
                    {stats.projectsCompleted}+
                  </div>
                  <div className="text-xs lg:text-sm text-slate-400 font-medium tracking-wide">
                    Projects
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-emerald-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              </div>

              <div className="group relative text-center bg-gradient-to-br from-amber-600/15 via-orange-700/10 to-red-600/15 backdrop-blur-md rounded-2xl p-4 border border-amber-600/30 hover:border-amber-500/60 transition-all duration-500 hover:shadow-xl hover:shadow-amber-600/20 hover:-translate-y-1 overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                {/* Icon */}
                <div className="relative z-10 w-8 h-8 mx-auto mb-2 bg-amber-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>

                <div className="relative z-10">
                  <div className="text-2xl lg:text-3xl font-bold text-amber-300 group-hover:text-amber-200 transition-colors duration-300 mb-1">
                    {stats.certificatesEarned}+
                  </div>
                  <div className="text-xs lg:text-sm text-slate-400 font-medium tracking-wide">
                    Certificates
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              </div>
            </div>

            {/* CTA Buttons - Enhanced */}
            <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-700 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 hover:from-blue-400 hover:via-blue-500 hover:to-purple-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 overflow-hidden"
              >
                {/* Animated background layers */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

                {/* Button content */}
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span className="text-lg font-bold tracking-wide">View My Work</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>

                {/* Shine effect */}
                <div className="absolute top-0 -left-4 w-4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 group-hover:animate-pulse"></div>
              </button>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 border-2 border-slate-400/50 hover:border-blue-400/80 text-slate-200 hover:text-white font-bold rounded-2xl backdrop-blur-md bg-white/5 hover:bg-white/10 shadow-lg hover:shadow-xl hover:shadow-blue-400/10 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 overflow-hidden"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                {/* Button content */}
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <svg className="w-5 h-5 group-hover:-rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-lg font-bold tracking-wide">Download Resume</span>
                  <svg className="w-5 h-5 group-hover:translate-y-[-4px] transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>

                {/* Border glow effect */}
                <div className="absolute inset-0 rounded-2xl border border-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
            </div>

            {/* Social Media Links - Brought back for desktop */}
            <div className={`flex gap-4 transform transition-all duration-700 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 bg-gradient-to-br from-slate-700/80 to-slate-800/80 hover:from-blue-500/20 hover:to-blue-600/20 backdrop-blur-md rounded-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/20 border border-white/10 hover:border-blue-400/30 overflow-hidden"
              >
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                {/* Icon with enhanced styling */}
                <svg className="relative z-10 w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-all duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>

                {/* Platform name tooltip */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-800/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  GitHub
                </div>
              </a>

              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 bg-gradient-to-br from-slate-700/80 to-slate-800/80 hover:from-blue-600/20 hover:to-blue-700/20 backdrop-blur-md rounded-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/20 border border-white/10 hover:border-blue-500/30 overflow-hidden"
              >
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                {/* Icon with enhanced styling */}
                <svg className="relative z-10 w-6 h-6 text-slate-400 group-hover:text-blue-500 transition-all duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>

                {/* Platform name tooltip */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-800/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  LinkedIn
                </div>
              </a>

              <a
                href={personalInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 bg-gradient-to-br from-slate-700/80 to-slate-800/80 hover:from-blue-600/20 hover:to-blue-700/20 backdrop-blur-md rounded-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/20 border border-white/10 hover:border-blue-500/30 overflow-hidden"
              >
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                {/* Icon with enhanced styling */}
                <svg className="relative z-10 w-6 h-6 text-slate-400 group-hover:text-blue-500 transition-all duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>

                {/* Platform name tooltip */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-800/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  Facebook
                </div>
              </a>

              <a
                href={personalInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 bg-gradient-to-br from-slate-700/80 to-slate-800/80 hover:from-pink-500/20 hover:to-purple-600/20 backdrop-blur-md rounded-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/20 border border-white/10 hover:border-pink-400/30 overflow-hidden"
              >
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                {/* Icon with enhanced styling */}
                <svg className="relative z-10 w-6 h-6 text-slate-400 group-hover:text-pink-400 transition-all duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>

                {/* Platform name tooltip */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-800/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  Instagram
                </div>
              </a>
            </div>
          </div>

          {/* Desktop Profile Card Section */}
          <div className={`lg:col-span-5 flex justify-center lg:justify-end transform transition-all duration-1000 delay-700 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
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
