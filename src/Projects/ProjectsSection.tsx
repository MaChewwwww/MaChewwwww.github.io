import React, { useEffect, useState } from 'react';
import Hyperspeed from '../Background/Hyperspeed';
import ProjectModal from './ProjectModal';

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

const ProjectsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample projects data - you can move this to a separate data file later
  const projects: Project[] = [
    {
      id: '1',
      date: 'Dec 2024',
      name: 'E-Commerce Platform',
      role: ['Full Stack Developer', 'UI/UX Designer'],
      description: 'A complete e-commerce solution with user authentication, product management, and payment integration.',
      longDescription: 'A comprehensive e-commerce platform built from scratch with modern technologies. Features include user authentication, product catalog, shopping cart, order management, payment processing, and admin dashboard. The platform supports multiple payment methods and provides real-time inventory tracking.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      images: [
        'public/images/477776521_1112839684190798_8145947970471293594_n.jpg',
        '/images/ecommerce-product-page.png',
        '/images/ecommerce-checkout.png',
        '/images/ecommerce-admin-dashboard.png'
      ],
      features: [
        'User authentication and profile management',
        'Product catalog with search and filtering',
        'Shopping cart and checkout process',
        'Stripe payment integration',
        'Order tracking and history',
        'Admin dashboard for product management',
        'Responsive design for all devices'
      ],
      challenges: [
        'Implemented secure payment processing with Stripe API',
        'Optimized database queries for large product catalogs',
        'Built responsive design that works across all devices',
        'Created real-time inventory management system'
      ],
      liveDemo: 'https://demo.com',
      github: 'https://github.com/user/project1',
      showLiveDemo: false,
      showGithub: false
    },
    {
      id: '2',
      date: 'Nov 2024',
      name: 'Task Management App',
      role: 'Frontend Developer',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      longDescription: 'Modern task management application designed for team collaboration. Built with React and Firebase, featuring real-time updates, drag-and-drop functionality, team workspaces, and advanced filtering capabilities.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
      images: [
        '/images/taskapp-dashboard.png',
        '/images/taskapp-kanban.png',
        '/images/taskapp-calendar.png'
      ],
      features: [
        'Real-time collaborative task management',
        'Drag-and-drop task organization',
        'Team workspaces and permissions',
        'Due date tracking and notifications',
        'Advanced filtering and search',
        'File attachments and comments',
        'Activity timeline and reporting'
      ],
      challenges: [
        'Implemented real-time synchronization across multiple users',
        'Built complex drag-and-drop interface with smooth animations',
        'Designed scalable component architecture with TypeScript',
        'Optimized performance for large task datasets'
      ],
      liveDemo: 'https://demo.com',
      github: 'https://github.com/user/project2',
      showLiveDemo: false,
      showGithub: true
    },
    {
      id: '3',
      date: 'Oct 2024',
      name: 'Data Analytics Dashboard',
      role: ['Full Stack Developer', 'Data Analyst'],
      description: 'Interactive dashboard for data visualization and analytics with real-time charts and reports.',
      longDescription: 'Comprehensive analytics dashboard for business intelligence. Features interactive charts, real-time data processing, custom report generation, and advanced filtering. Built to handle large datasets with optimized performance.',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Chart.js'],
      images: [
        '/images/analytics-dashboard.png',
        '/images/analytics-charts.png',
        '/images/analytics-reports.png'
      ],
      features: [
        'Interactive data visualizations with Chart.js',
        'Real-time data processing and updates',
        'Custom report generation and export',
        'Advanced filtering and data slicing',
        'User role-based access control',
        'Automated data refresh and caching',
        'Responsive dashboard layouts'
      ],
      challenges: [
        'Optimized database queries for large datasets',
        'Implemented real-time data streaming with WebSockets',
        'Built complex data aggregation algorithms',
        'Created responsive charts that work on mobile devices'
      ],
      liveDemo: 'https://demo.com',
      github: 'https://github.com/user/project3',
      showLiveDemo: true,
      showGithub: false
    },
    {
      id: '4',
      date: 'Sep 2024',
      name: 'Mobile Banking App',
      role: ['Mobile Developer', 'Security Consultant'],
      description: 'Secure mobile banking application with biometric authentication and transaction management.',
      longDescription: 'High-security mobile banking application built with React Native. Implements multiple layers of security including biometric authentication, encryption, and fraud detection. Features comprehensive transaction management and account oversight.',
      technologies: ['React Native', 'Node.js', 'MySQL', 'JWT'],
      images: [
        '/images/banking-app-login.png',
        '/images/banking-app-dashboard.png',
        '/images/banking-app-transactions.png'
      ],
      features: [
        'Biometric authentication (fingerprint/face)',
        'Secure transaction processing',
        'Account balance and history tracking',
        'Bill payment and money transfer',
        'ATM and branch locator',
        'Push notifications for transactions',
        'Multi-factor authentication'
      ],
      challenges: [
        'Implemented bank-level security protocols',
        'Built secure biometric authentication system',
        'Optimized app performance for various devices',
        'Created offline functionality for critical features'
      ],
      github: 'https://github.com/user/project4',
      showLiveDemo: false,
      showGithub: true
    },
    {
      id: '5',
      date: 'Aug 2024',
      name: 'AI Chat Bot',
      role: 'AI/ML Engineer',
      description: 'Intelligent chatbot with natural language processing for customer support automation.',
      longDescription: 'Advanced AI chatbot powered by machine learning models for customer support automation. Features natural language understanding, context awareness, and integration with multiple platforms. Continuously learns from interactions to improve responses.',
      technologies: ['Python', 'TensorFlow', 'Flask', 'OpenAI'],
      images: [
        '/images/chatbot-interface.png',
        '/images/chatbot-admin.png',
        '/images/chatbot-analytics.png'
      ],
      features: [
        'Natural language processing and understanding',
        'Context-aware conversation handling',
        'Multi-platform integration (web, mobile, Slack)',
        'Sentiment analysis and emotion detection',
        'Automated ticket creation and routing',
        'Learning from conversation history',
        'Multilingual support'
      ],
      challenges: [
        'Trained custom NLP models for domain-specific knowledge',
        'Implemented context-aware conversation flow',
        'Built scalable architecture for high-volume interactions',
        'Created seamless handoff to human agents'
      ],
      liveDemo: 'https://demo.com',
      github: 'https://github.com/user/project5',
      showLiveDemo: false,
      showGithub: false
    }
  ];

  useEffect(() => {
    // Observer for triggering animations when 25% visible
    const triggerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          const projectsSection = document.getElementById('projects');
          if (projectsSection) {
            const animatedElements = projectsSection.querySelectorAll('.animate-on-scroll, .animate-on-scroll-scale');
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
          const projectsSection = document.getElementById('projects');
          if (projectsSection) {
            const animatedElements = projectsSection.querySelectorAll('.animate-on-scroll, .animate-on-scroll-scale');
            animatedElements.forEach((element) => {
              element.classList.remove('in-view');
            });
          }
        }
      },
      { threshold: 0 }
    );

    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      triggerObserver.observe(projectsSection);
      resetObserver.observe(projectsSection);
    }

    return () => {
      triggerObserver.disconnect();
      resetObserver.disconnect();
    };
  }, []);

  const handleViewProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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

  const renderTechStack = (technologies: string[]) => {
    // Show max 5 technologies in the table, with "+" indicator if more
    const displayTechs = technologies.slice(0, 5);
    const hasMore = technologies.length > 5;
    
    return (
      <div className="flex flex-wrap gap-1">
        {displayTechs.map((tech, index) => (
          <span 
            key={index}
            className={`inline-flex items-center px-2 lg:px-2.5 py-0.5 lg:py-1 rounded-md text-xs font-semibold ${getTechBadgeClass(tech)}`}
          >
            {tech}
          </span>
        ))}
        {hasMore && (
          <span className="inline-flex items-center px-2 lg:px-2.5 py-0.5 lg:py-1 rounded-md text-xs font-semibold bg-slate-600/15 text-slate-400 border border-slate-500/30">
            +{technologies.length - 5}
          </span>
        )}
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 px-8 bg-slate-900/50 relative overflow-hidden">
      {/* Top and Bottom Glow Lines - positioned above everything */}
      <div className="absolute top-0 left-0 right-0 h-0.5 glow-line-top z-30"></div>
      <div className="absolute bottom-0 left-0 right-0 h-0.5 glow-line-bottom z-30"></div>
      
      {/* Hyperspeed Background */}
      <div className="absolute inset-0 z-0">
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => { },
            onSlowDown: () => { },
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xFFFFFF,
              brokenLines: 0xFFFFFF,
              leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
              rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
              sticks: 0x03B3C3,
            }
          }}
        />
        {/* Overlay to ensure content readability */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.5px] z-5" />
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent animate-on-scroll-scale">
          My Projects
        </h2>
        
        <div className="animate-on-scroll">
          {/* Table Header */}
          <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/60 rounded-t-2xl overflow-hidden shadow-xl">
            <div className="grid gap-3 lg:gap-6 p-4 lg:p-6 border-b border-slate-700/50 grid-cols-[80px_1fr_1fr_40px] lg:grid-cols-[100px_1fr_1fr_2fr_50px]">
              <div className="text-xs lg:text-sm font-bold text-slate-200 uppercase tracking-widest">Date</div>
              <div className="text-xs lg:text-sm font-bold text-slate-200 uppercase tracking-widest">Name</div>
              <div className="text-xs lg:text-sm font-bold text-slate-200 uppercase tracking-widest">Tech Stack</div>
              <div className="hidden lg:block text-xs lg:text-sm font-bold text-slate-200 uppercase tracking-widest">Description</div>
              <div className="text-xs lg:text-sm font-bold text-slate-200 uppercase tracking-widest text-center">View</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="bg-slate-900/70 backdrop-blur-sm border-x border-b border-slate-700/60 rounded-b-2xl shadow-xl">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`grid gap-3 lg:gap-6 p-4 lg:p-6 hover:bg-slate-800/60 transition-all duration-300 group grid-cols-[80px_1fr_1fr_40px] lg:grid-cols-[100px_1fr_1fr_2fr_50px] ${
                  index !== projects.length - 1 ? 'border-b border-slate-700/40' : ''
                }`}
                style={{
                  animationDelay: `${0.1 + index * 0.1}s`,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.5s ease-out ${0.1 + index * 0.1}s`
                }}
              >
                {/* Date */}
                <div className="flex items-center text-slate-400 text-xs lg:text-sm font-semibold">
                  {project.date}
                </div>

                {/* Name */}
                <div className="flex items-center text-white font-bold text-sm lg:text-base group-hover:text-primary transition-colors">
                  {project.name}
                </div>

                {/* Tech Stack */}
                <div className="flex items-center">
                  {renderTechStack(project.technologies)}
                </div>

                {/* Description - Hidden on mobile */}
                <div className="hidden lg:flex lg:items-center text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </div>

                {/* View Button */}
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => handleViewProject(project)}
                    className="inline-flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 text-green-400 hover:text-white bg-green-500/10 hover:bg-green-500/20 border border-green-400/30 hover:border-green-400/50 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-400/25"
                    title="View project details"
                  >
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="lg:w-5 lg:h-5"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default ProjectsSection;
