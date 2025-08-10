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

  // Tech stack styling matching the table
  const getTechBadgeClass = (tech: string) => {
    const techLower = tech.toLowerCase();
    if (techLower.includes('react') || techLower.includes('vue') || techLower.includes('angular')) {
      return 'bg-blue-500/15 text-blue-400 border border-blue-400/30';
    } else if (techLower.includes('node') || techLower.includes('express') || techLower.includes('python') || techLower.includes('flask')) {
      return 'bg-green-500/15 text-green-400 border border-green-400/30';
    } else if (techLower.includes('typescript') || techLower.includes('javascript')) {
      return 'bg-yellow-500/15 text-yellow-400 border border-yellow-400/30';
    } else if (techLower.includes('mongodb') || techLower.includes('mysql') || techLower.includes('postgresql')) {
      return 'bg-purple-500/15 text-purple-400 border border-purple-400/30';
    } else if (techLower.includes('tailwind') || techLower.includes('css') || techLower.includes('sass')) {
      return 'bg-cyan-500/15 text-cyan-400 border border-cyan-400/30';
    } else if (techLower.includes('firebase') || techLower.includes('aws') || techLower.includes('cloud')) {
      return 'bg-orange-500/15 text-orange-400 border border-orange-400/30';
    } else {
      return 'bg-slate-500/15 text-slate-400 border border-slate-400/30';
    }
  };

  // Role badge styling
  const getRoleBadgeClass = (role: string) => {
    if (role.includes('Full Stack')) {
      return 'bg-primary/15 text-primary border border-primary/30';
    } else if (role.includes('Frontend') || role.includes('UI/UX') || role.includes('Designer')) {
      return 'bg-accent/15 text-accent border border-accent/30';
    } else if (role.includes('Mobile')) {
      return 'bg-green-500/15 text-green-400 border border-green-400/30';
    } else if (role.includes('AI/ML') || role.includes('Data')) {
      return 'bg-purple-500/15 text-purple-400 border border-purple-400/30';
    } else if (role.includes('Security')) {
      return 'bg-red-500/15 text-red-400 border border-red-400/30';
    } else {
      return 'bg-slate-500/15 text-slate-400 border border-slate-400/30';
    }
  };

  const renderTechStack = (technologies: string[]) => {
    return (
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className={`inline-flex items-center px-3 py-1.5 rounded-md text-sm font-semibold ${getTechBadgeClass(tech)}`}
          >
            {tech}
          </span>
        ))}
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
            className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold ${getRoleBadgeClass(role)}`}
          >
            {role}
          </span>
        ))}
      </div>
    );
  };

  const renderContributions = (challenges: string[]) => {
    return (
      <ul className="space-y-3">
        {challenges.map((challenge, index) => (
          <li key={index} className="flex items-start gap-3 text-slate-300">
            <span className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mt-2 flex-shrink-0"></span>
            <span className="leading-relaxed">{challenge}</span>
          </li>
        ))}
      </ul>
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
      
      {/* Modal Container - Larger Size with Carousel */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div 
          className="relative w-full max-w-5xl bg-slate-900/95 backdrop-blur-xl border border-slate-700/60 rounded-2xl shadow-2xl shadow-black/50 animate-fade-in-scale overflow-hidden"
          style={{
            animation: isOpen ? 'modalSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'modalSlideOut 0.3s ease-in forwards'
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 w-12 h-12 text-red-400 hover:text-red-300 transition-colors duration-200 group flex items-center justify-center"
            aria-label="Close modal"
          >
            <svg 
              width="28" 
              height="28" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="transition-transform duration-200 group-hover:scale-110"
            >
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>

          <div className="flex flex-col lg:flex-row max-h-[85vh]">
            {/* Left Side - Image Carousel */}
            <div className="lg:w-2/5 relative bg-gradient-to-br from-slate-800/50 to-slate-900/50">
              <div className="relative h-64 lg:h-full min-h-[300px] lg:min-h-[500px] overflow-hidden">
                {/* Main Image */}
                <div className="relative w-full h-full">
                  <img
                    src={displayImages[currentImageIndex]}
                    alt={`${project.name} screenshot ${currentImageIndex + 1}`}
                    className={`w-full h-full object-cover transition-all duration-300 ${
                      isAnimating ? 'scale-105 opacity-60' : 'scale-100 opacity-100'
                    }`}
                  />
                  
                  {/* Gradient Overlay for Better Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
                  
                  {/* Navigation Arrows */}
                  {displayImages.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-black/80 border border-slate-500/30 hover:border-slate-400/50 rounded-full flex items-center justify-center text-white hover:text-primary transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M15 18l-6-6 6-6"/>
                        </svg>
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-black/80 border border-slate-500/30 hover:border-slate-400/50 rounded-full flex items-center justify-center text-white hover:text-primary transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 18l6-6-6-6"/>
                        </svg>
                      </button>
                    </>
                  )}

                  {/* Image Counter */}
                  {displayImages.length > 1 && (
                    <div className="absolute top-3 right-3 bg-black/70 px-3 py-1.5 rounded-full text-sm text-white font-medium backdrop-blur-sm">
                      {currentImageIndex + 1} / {displayImages.length}
                    </div>
                  )}
                </div>

                {/* Thumbnail Navigation */}
                {displayImages.length > 1 && (
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    {displayImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                          index === currentImageIndex 
                            ? 'bg-primary border-primary shadow-lg shadow-primary/50 scale-110' 
                            : 'bg-slate-600/60 border-slate-500/60 hover:bg-slate-500 hover:border-slate-400 hover:scale-105'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Side - Project Details */}
            <div className="lg:w-3/5 p-6 lg:p-8 overflow-y-auto modal-scrollbar">
              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent leading-tight">
                    {project.name}
                  </h2>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <span className="w-1 h-5 bg-gradient-to-b from-primary to-accent rounded-full"></span>
                    Tech Stack
                  </h3>
                  {renderTechStack(project.technologies)}
                </div>

                {/* Description */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <span className="w-1 h-5 bg-gradient-to-b from-primary to-accent rounded-full"></span>
                    Description
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {project.longDescription || project.description}
                  </p>
                </div>

                {/* Key Features */}
                {project.features && (
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <span className="w-1 h-5 bg-gradient-to-b from-primary to-accent rounded-full"></span>
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-slate-300">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></span>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* My Role in this Project */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <span className="w-1 h-5 bg-gradient-to-b from-primary to-accent rounded-full"></span>
                    My Role in this Project
                  </h3>
                  {renderRoles(project.role)}
                </div>

                {/* My Contributions in This Project */}
                {project.challenges && (
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <span className="w-1 h-5 bg-gradient-to-b from-primary to-accent rounded-full"></span>
                      My Contributions in This Project
                    </h3>
                    {renderContributions(project.challenges)}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-slate-700/50">
                  {/* Live Demo Button - Always show */}
                  {project.showLiveDemo && project.liveDemo ? (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15,3 21,3 21,9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      Live Demo
                    </a>
                  ) : (
                    <div className="flex items-center justify-center gap-2 bg-slate-700/50 border border-slate-600/50 px-6 py-3 rounded-lg font-semibold text-slate-500 cursor-not-allowed opacity-60">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L5.636 5.636"/>
                        <path d="M9 9v10a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V9"/>
                      </svg>
                      Demo Unavailable
                    </div>
                  )}
                  
                  {/* GitHub Button - Always show */}
                  {project.showGithub && project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600/60 hover:border-slate-500/80 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                      </svg>
                      View Code
                    </a>
                  ) : (
                    <div className="flex items-center justify-center gap-2 bg-slate-700/50 border border-slate-600/50 px-6 py-3 rounded-lg font-semibold text-slate-500 cursor-not-allowed opacity-60">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L5.636 5.636"/>
                        <rect x="3" y="11" width="18" height="2" rx="1"/>
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
