import React, { useEffect, useState } from 'react';

interface Project {
  id: string;
  date: string;
  name: string;
  role: string | string[];
  description: string;
  technologies: string[];
  liveDemo?: string;
  github?: string;
  images?: string[];
  longDescription?: string;
  features?: string[];
  challenges?: string[];
  showLiveDemo?: boolean;
  showGithub?: boolean;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const nextImage = () => {
    if (project?.images && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => 
          prev === project.images!.length - 1 ? 0 : prev + 1
        );
        setIsAnimating(false);
      }, 150);
    }
  };

  const prevImage = () => {
    if (project?.images && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => 
          prev === 0 ? project.images!.length - 1 : prev - 1
        );
        setIsAnimating(false);
      }, 150);
    }
  };

  const goToImage = (index: number) => {
    if (!isAnimating && project?.images) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentImageIndex(index);
        setIsAnimating(false);
      }, 150);
    }
  };

  // Categorize and color techs
  const techCategories = [
    {
      name: 'Backend',
      color: 'bg-purple-500/15 text-purple-200 border border-purple-400/20',
      match: [
    'node', 'express', 'python', 'flask', 'cobol', 'c++'
      ]
    },
    {
      name: 'Frontend',
      color: 'bg-blue-500/15 text-blue-200 border border-blue-400/20',
      match: [
    'react', 'vue', 'angular', 'tailwind', 'tailwind css', 'css', 'sass', 'html', 'tkinter', 'dart'
      ]
    },
    {
      name: 'Database',
      color: 'bg-green-500/15 text-green-200 border border-green-400/20',
      match: [
    'mongodb', 'mysql', 'postgresql', 'sqlite', 'typescript', 'stripe'
      ]
    },
    {
      name: 'Framework',
      color: 'bg-cyan-500/15 text-cyan-200 border border-cyan-400/20',
      match: [
    'next.js', 'vite', 'django', 'flask', 'fastapi', 'asp.net', 'flutter', 'flutterflow', 'laravel'
      ]
    },
    {
      name: 'DevOps & Tools',
      color: 'bg-orange-500/15 text-orange-200 border border-orange-400/20',
      match: [
    'firebase', 'aws', 'cloud', 'docker', 'github', 'git', 'azure', 'meilisearch', 'mellisearch'
      ]
    },
    {
      name: 'AI & Machine Learning',
      color: 'bg-yellow-500/15 text-yellow-200 border border-yellow-400/20',
      match: [
    'tensorflow', 'openai', 'opencv', 'ai', 'machine learning', 'ml', 'fuzzy algorithm'
      ]
    },
    {
      name: 'Security',
      color: 'bg-red-500/15 text-red-200 border border-red-400/20',
      match: [
        'jwt', 'security', 'auth', 'authentication', 'authorization'
      ]
    }
  ];

  const getTechCategory = (tech: string) => {
    const techLower = tech.toLowerCase();
    for (const cat of techCategories) {
      if (cat.match.some(m => techLower.includes(m))) {
        return cat;
      }
    }
    return {
      name: 'Other',
      color: 'bg-slate-500/15 text-slate-400 border border-slate-400/30',
      match: []
    };
  };

  const renderTechStack = (technologies: string[]) => {
    return (
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => {
          const { color } = getTechCategory(tech);
          return (
            <span
              key={index}
              className={`inline-flex items-center px-3 py-1.5 rounded-md text-sm font-semibold ${color}`}
            >
              {tech}
            </span>
          );
        })}
      </div>
    );
  };


  const renderRoles = (roles: string | string[]) => {
    const roleArray = Array.isArray(roles) ? roles : [roles];
    return (
      <div className="flex flex-wrap gap-2">
        {roleArray.map((role, index) => (
          <span
            key={index}
            className="px-3 py-1.5 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-md text-sm font-medium"
          >
            {role}
          </span>
        ))}
      </div>
    );
  };

  if (!isOpen || !project) return null;

  // Sample images for demo - replace with actual project images
  const sampleImages = [
    'https://via.placeholder.com/600x400/1e293b/64748b?text=Project+Screenshot+1',
    'https://via.placeholder.com/600x400/0f172a/475569?text=Project+Screenshot+2',
    'https://via.placeholder.com/600x400/334155/94a3b8?text=Project+Screenshot+3'
  ];

  const displayImages = project.images || sampleImages;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Responsive Modal Container */}
      <div className="flex min-h-full items-center justify-center p-2">
        {/* Desktop Layout */}
        <div className="hidden lg:block w-full max-w-5xl">
          <div className="relative bg-slate-900/95 backdrop-blur-xl border border-slate-700/60 rounded-2xl shadow-2xl shadow-black/50 animate-fade-in-scale overflow-hidden">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 text-red-400 hover:text-red-300 transition-colors duration-200 group flex items-center justify-center bg-black/20 rounded-lg backdrop-blur-sm"
              aria-label="Close modal"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="transition-transform duration-200 group-hover:scale-110"
              >
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
            <div className="flex flex-row max-h-[90vh]">
              {/* Left Side - Project Info + Carousel */}
              <div className="w-1/2 flex flex-col min-h-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
                {/* Top - Project Info */}
                <div className="p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 border-b border-slate-600/40 flex-shrink-0">
                  <div className="space-y-4 flex flex-col justify-center">
                    {/* Date */}
                    <div className="flex items-center text-sm text-slate-400">
                      <span className="border-l-2 border-primary pl-3 font-semibold text-slate-300">{project.date}</span>
                    </div>
                    {/* Project Name */}
                    <div className="space-y-3 mt-2">
                      <h2 className="text-xl lg:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent leading-tight">
                        {project.name}
                      </h2>
                    </div>
                    {/* Tech Stack */}
                    <div className="space-y-2 mt-3">
                      {renderTechStack(project.technologies)}
                    </div>
                    {/* Description */}
                    <div className="space-y-3 mt-4">
                      <h3 className="text-xs font-medium text-slate-400 uppercase tracking-wide">Description</h3>
                      <p className="text-slate-300 leading-relaxed text-xs">
                        {project.longDescription || project.description}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Bottom - Image Carousel */}
                <div className="flex-1 min-h-0 relative overflow-hidden">
                  <div className="relative w-full h-full">
                    <img
                      src={displayImages[currentImageIndex]}
                      alt={`${project.name} screenshot ${currentImageIndex + 1}`}
                      className={`w-full h-full object-cover transition-all duration-300 ${
                        isAnimating ? 'scale-105 opacity-60' : 'scale-100 opacity-100'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
                    {displayImages.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 border border-white/20 hover:border-primary/50 rounded-xl flex items-center justify-center text-white hover:text-primary transition-all duration-300 hover:scale-105 backdrop-blur-md"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 18l-6-6 6-6"/>
                          </svg>
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 border border-white/20 hover:border-primary/50 rounded-xl flex items-center justify-center text-white hover:text-primary transition-all duration-300 hover:scale-105 backdrop-blur-md"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 18l6-6-6-6"/>
                          </svg>
                        </button>
                      </>
                    )}
                  </div>
                  {displayImages.length > 1 && (
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 bg-black/40 px-4 py-2 rounded-full backdrop-blur-md">
                      {displayImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToImage(index)}
                          className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                            index === currentImageIndex 
                              ? 'bg-primary border-primary shadow-lg shadow-primary/50 scale-125' 
                              : 'bg-white/30 border-white/50 hover:bg-white/50 hover:border-white/70 hover:scale-110'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
              {/* Right Side - Project Details */}
              <div className="w-1/2 p-8 overflow-y-auto modal-scrollbar bg-gradient-to-br from-slate-900/40 to-slate-800/40">
                <div className="space-y-8">
                  {/* Key Features */}
                  {project.features && (
                    <div className="bg-slate-800/40 rounded-lg p-4 border border-slate-700/50">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-5 h-5 text-emerald-400">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 12l2 2 4-4"/>
                            <circle cx="12" cy="12" r="10"/>
                          </svg>
                        </div>
                        <h3 className="text-base font-semibold text-white">Key Features</h3>
                      </div>
                      <div className="space-y-2">
                        {project.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-2 text-sm text-slate-300">
                            <div className="w-1 h-1 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {/* My Role in this Project */}
                  <div className="bg-slate-800/40 rounded-lg p-4 border border-slate-700/50">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-5 h-5 text-indigo-400">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                          <circle cx="12" cy="7" r="4"/>
                        </svg>
                      </div>
                      <h3 className="text-base font-semibold text-white">My Role</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {renderRoles(project.role)}
                    </div>
                  </div>
                  {/* My Contributions in This Project */}
                  {project.challenges && (
                    <div className="bg-slate-800/40 rounded-lg p-4 border border-slate-700/50">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-5 h-5 text-amber-400">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M12 8v4"/>
                            <path d="M12 16h.01"/>
                          </svg>
                        </div>
                        <h3 className="text-base font-semibold text-white">My Contributions</h3>
                      </div>
                      <div className="space-y-2">
                        {project.challenges.map((challenge, index) => (
                          <div key={index} className="flex items-start gap-2 text-sm text-slate-300">
                            <div className="w-1 h-1 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{challenge}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    {project.showLiveDemo && project.liveDemo ? (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 px-6 py-2.5 rounded-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 border border-primary/20 text-sm"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15,3 21,3 21,9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        Live Demo
                      </a>
                    ) : (
                      <div className="flex items-center justify-center gap-2 bg-slate-700/50 border border-slate-600/50 px-6 py-2.5 rounded-lg font-medium text-slate-400 cursor-not-allowed opacity-60 text-sm">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <line x1="15" y1="9" x2="9" y2="15"/>
                          <line x1="9" y1="9" x2="15" y2="15"/>
                        </svg>
                        Demo Unavailable
                      </div>
                    )}
                    {project.showGithub && project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600/60 hover:border-slate-500/80 px-6 py-2.5 rounded-lg font-medium text-white transition-all duration-300 hover:scale-105 backdrop-blur-sm hover:shadow-lg text-sm"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                        </svg>
                        View Code
                      </a>
                    ) : (
                      <div className="flex items-center justify-center gap-2 bg-slate-700/50 border border-slate-600/50 px-6 py-2.5 rounded-lg font-medium text-slate-400 cursor-not-allowed opacity-60 text-sm">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                          <circle cx="12" cy="16" r="1"/>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                        </svg>
                        Code Private
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Layout */}
        <div className="block lg:hidden w-full max-w-md mx-auto">
          <div className="relative bg-slate-900/95 backdrop-blur-xl border border-slate-700/60 rounded-2xl shadow-2xl shadow-black/50 animate-fade-in-scale overflow-hidden">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-20 w-9 h-9 text-red-400 hover:text-red-300 transition-colors duration-200 group flex items-center justify-center bg-black/20 rounded-lg backdrop-blur-sm"
              aria-label="Close modal"
            >
              <svg 
                width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:scale-110">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
            {/* Single scrollable container for all content */}
            <div className="overflow-y-auto max-h-[90vh] flex flex-col custom-scrollbar">
              {/* Image Carousel */}
              <div className="w-full aspect-video relative overflow-hidden">
                <img
                  src={displayImages[currentImageIndex]}
                  alt={`${project.name} screenshot ${currentImageIndex + 1}`}
                  className={`w-full h-full object-cover transition-all duration-300 ${isAnimating ? 'scale-105 opacity-60' : 'scale-100 opacity-100'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
                {displayImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 border border-white/20 hover:border-primary/50 rounded-xl flex items-center justify-center text-white hover:text-primary transition-all duration-300 hover:scale-105 backdrop-blur-md"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 18l-6-6 6-6"/>
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 border border-white/20 hover:border-primary/50 rounded-xl flex items-center justify-center text-white hover:text-primary transition-all duration-300 hover:scale-105 backdrop-blur-md"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6"/>
                      </svg>
                    </button>
                  </>
                )}
                {displayImages.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 bg-black/40 px-2 py-1 rounded-full backdrop-blur-md">
                    {displayImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`w-2.5 h-2.5 rounded-full border transition-all duration-300 ${index === currentImageIndex ? 'bg-primary border-primary scale-110' : 'bg-white/30 border-white/50 hover:bg-white/50 hover:border-white/70 hover:scale-105'}`}
                      />
                    ))}
                  </div>
                )}
              </div>
              {/* Project Info */}
              <div className="p-4 bg-gradient-to-br from-slate-800/60 to-slate-900/60 border-b border-slate-600/40">
                <div className="space-y-2 flex flex-col justify-center">
                  <div className="flex items-center text-xs text-slate-400">
                    <span className="border-l-2 border-primary pl-2 font-semibold text-slate-300">{project.date}</span>
                  </div>
                  <div className="space-y-2 mt-1">
                    <h2 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent leading-tight">
                      {project.name}
                    </h2>
                  </div>
                  <div className="space-y-1 mt-2">
                    {renderTechStack(project.technologies)}
                  </div>
                  <div className="space-y-2 mt-2">
                    <h3 className="text-xs font-medium text-slate-400 uppercase tracking-wide">Description</h3>
                    <p className="text-slate-300 leading-relaxed text-xs">
                      {project.longDescription || project.description}
                    </p>
                  </div>
                </div>
              </div>
              {/* Details Section */}
              <div className="p-4 space-y-6 bg-gradient-to-br from-slate-900/40 to-slate-800/40">
                {project.features && (
                  <div className="bg-slate-800/40 rounded-lg p-3 border border-slate-700/50">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-4 h-4 text-emerald-400">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 12l2 2 4-4"/>
                          <circle cx="12" cy="12" r="10"/>
                        </svg>
                      </div>
                      <h3 className="text-sm font-semibold text-white">Key Features</h3>
                    </div>
                    <div className="space-y-1">
                      {project.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2 text-xs text-slate-300">
                          <div className="w-1 h-1 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div className="bg-slate-800/40 rounded-lg p-3 border border-slate-700/50">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-4 h-4 text-indigo-400">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                    </div>
                    <h3 className="text-sm font-semibold text-white">My Role</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {renderRoles(project.role)}
                  </div>
                </div>
                {project.challenges && (
                  <div className="bg-slate-800/40 rounded-lg p-3 border border-slate-700/50">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-4 h-4 text-amber-400">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <path d="M12 8v4"/>
                          <path d="M12 16h.01"/>
                        </svg>
                      </div>
                      <h3 className="text-sm font-semibold text-white">My Contributions</h3>
                    </div>
                    <div className="space-y-1">
                      {project.challenges.map((challenge, index) => (
                        <div key={index} className="flex items-start gap-2 text-xs text-slate-300">
                          <div className="w-1 h-1 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{challenge}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex flex-col gap-2 pt-2">
                  {project.showLiveDemo && project.liveDemo ? (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 px-4 py-2 rounded-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 border border-primary/20 text-xs"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15,3 21,3 21,9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      Live Demo
                    </a>
                  ) : (
                    <div className="flex items-center justify-center gap-2 bg-slate-700/50 border border-slate-600/50 px-4 py-2 rounded-lg font-medium text-slate-400 cursor-not-allowed opacity-60 text-xs">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="15" y1="9" x2="9" y2="15"/>
                        <line x1="9" y1="9" x2="15" y2="15"/>
                      </svg>
                      Demo Unavailable
                    </div>
                  )}
                  {project.showGithub && project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600/60 hover:border-slate-500/80 px-4 py-2 rounded-lg font-medium text-white transition-all duration-300 hover:scale-105 backdrop-blur-sm hover:shadow-lg text-xs"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                      </svg>
                      View Code
                    </a>
                  ) : (
                    <div className="flex items-center justify-center gap-2 bg-slate-700/50 border border-slate-600/50 px-4 py-2 rounded-lg font-medium text-slate-400 cursor-not-allowed opacity-60 text-xs">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <circle cx="12" cy="16" r="1"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                      Code Private
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
