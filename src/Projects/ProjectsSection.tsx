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
  badges?: string[];
}

const ProjectsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample projects data - you can move this to a separate data file later
  const projects: Project[] = [
    {
      id: 'payroll-retail-system',
      date: 'January 2026',
      name: 'Payroll Management System – Multi-Branch Retail Client',
      role: ['Full-Stack Developer'],
      description: 'A modular, Python-based desktop application featuring a sophisticated multi-branch payroll engine, real-time attendance tracking, and hybrid cloud/local authentication for a retail client.',
      longDescription: 'This comprehensive payroll solution was architected to handle the complex compensation structures of a multi-branch retail environment. Built using an MVC architecture with a Repository Pattern, the system manages a 13-table relational database schema through SQLAlchemy ORM. It features an automated payroll engine that supports individual overrides for earnings and deductions, integrated savings tracking with a full audit trail, and a real-time attendance module that calculates shift durations against flexible employee schedules. The application employs a hybrid authentication strategy, utilizing Supabase Auth for cloud-based synchronization and Bcrypt-hashed local sessions for offline stability, all wrapped in a professional, responsive CustomTkinter interface.',
      technologies: [
        'Python',
        'CustomTkinter',
        'PostgreSQL',
        'SQLAlchemy ORM',
        'Alembic',
        'Supabase Auth',
        'Bcrypt',
        'PyJWT',
        'Repository Pattern',
        'MVC Architecture',
        'Docker'
      ],
      badges: ['Freelance', 'Local'],
      images: [
        'images/Payroll_System/1.jfif',
        'images/Payroll_System/2.jfif',
        'images/Payroll_System/3.jfif',
        'images/Payroll_System/4.jfif',
        'images/Payroll_System/5.jfif',
        'images/Payroll_System/6.jfif',
        'images/Payroll_System/7.jfif',
        'images/Payroll_System/8.jfif',
        'images/Payroll_System/9.jfif',
        'images/Payroll_System/10.jfif'
      ],
      features: [
        "Automated Multi-Branch Payroll Engine: Formula-based logic with individual overrides for earnings and deductions.",
        "Comprehensive Workforce Management: Real-time timekeeping with duration calculation and flexible weekly scheduling.",
        "Hybrid Authentication System: Integrated local Bcrypt hashing and Supabase Cloud Auth with JWT token management.",
        "Detailed Audit Logging: JSON-structured snapshots capturing CREATE, UPDATE, and DELETE actions for history reconstruction.",
        "Role-Based Access Control (RBAC): Multi-tier access levels (SuperAdmin and Admin) with specific resource permissions.",
        "Financial Audit Trails: Complete history tracking for employee savings balances, including previous/new balance delta logging.",
        "High-Performance Database Layer: Optimized PostgreSQL schema with relational indexing for fast multi-criteria filtering.",
        "Responsive Desktop UI: Professional beige-themed interface that auto-scales based on screen resolution.",
        "Automated Deployment & Migrations: Portable SQLite support for local distribution and Alembic-driven migrations for production PostgreSQL.",
        "Payslip Generation: Automated calculation of gross-to-net salary with component-level breakdown for every pay period."
      ],
      challenges: [
        "Complex Relational Architecting: Designed and implemented a 13-table relational schema ensuring strict referential integrity between branches, employees, schedules, and payroll components.",
        "Implementing Structured Audit Trails: Engineered a logging service that captures before-and-after snapshots in JSON format to ensure any financial or data change is fully reconstructible.",
        "Hybrid Session Management: Developed a session lifecycle that validates JWT tokens every 5 minutes and handles auto-refresh via Supabase while maintaining local SHA256 session stability.",
        "Building a Modern Responsive Desktop UI: Utilized CustomTkinter to create a professional-grade interface that overcomes traditional desktop layout limitations through dynamic scaling logic.",
        "Database Strategy Diversification: Configured the system to support both local 'portable' SQLite databases for easy folder-copy distribution and high-performance cloud PostgreSQL for production use.",
        "Secure Payroll Logic: Implemented precise numeric (10,2) precision for all monetary values and high-frequency validation checks to prevent concurrency errors during payslip generation."
      ],
      liveDemo: 'https://demo-payroll.exe',
      showLiveDemo: false,
      showGithub: false
    },
    {
      id: 'trusted-ai-marketplace',
      date: 'January 2026',
      name: 'TrustMart : An Online Marketplace with AI-Powered Fraud Detection and Real-Time Seller Verification System',
      role: ['Full-Stack Developer'],
      description: 'A sophisticated e-commerce ecosystem designed to secure digital transactions and verify user identities in real-time using advanced biometrics and behavioral analysis.',
      longDescription: 'This platform provides a comprehensive solution for high-trust digital trade, integrating multiple security layers to prevent fraud at every stage of the user journey. The architecture utilizes a hybrid AI approach, combining local statistical models for instantaneous anomaly detection with cloud-based computer vision for identity verification. By implementing a "Master Key" identity baseline during registration, the system can perform biometric matching against government-issued IDs and live selfies to authenticate sellers. The backend is engineered to handle high-concurrency order processing while a "Fraud Firewall" monitors transaction velocity and behavioral signals to block suspicious activity before it impacts the marketplace.',
      technologies: [
        'Next.js',
        'FastAPI',
        'PostgreSQL',
        'TensorFlow.js',
        'Redis',
        'Google Cloud Vision',
        'Prisma ORM',
        'Tailwind CSS',
        'JWT',
        'Docker',
        'Auth.js',
        'Nginx'
      ],
      badges: ['Freelance', 'Deployed'],
      images: [
        'images/TrustMart/1.png',
        'images/TrustMart/2.png',
        'images/TrustMart/3.png',
        'images/TrustMart/4.png',
        'images/TrustMart/5.png',
        'images/TrustMart/6.png',
        'images/TrustMart/7.png',
        'images/TrustMart/8.png',
        'images/TrustMart/9.png',
        'images/TrustMart/10.png',
        'images/TrustMart/11.png',
        'images/TrustMart/12.png',
        'images/TrustMart/13.png'
      ],
      features: [
        "Biometric Identity Verification: Multi-layered liveness detection (blur, texture, and reflection analysis) to ensure users are physically present.",
        "Real-Time Fraud Firewall: Automated monitoring of order velocity and self-dealing detection to block fraudulent checkouts instantly.",
        "AI-Powered ID Analysis: Integration with computer vision models to extract data from government IDs and verify them against live user biometrics.",
        "Continuous Reputation Scoring: Dynamic trust metrics for sellers based on sales volume, ratings, and historical fraud alerts.",
        "Anomaly Detection Engine: Real-time detection of price-switching scams and refund abuse patterns using statistical threshold analysis.",
        "Secure Seller Onboarding: A hybrid verification pipeline requiring >85% biometric match score for seller status approval.",
        "Zero-Cost Routing Integration: Visualization of delivery logistics and travel time estimation using open-source mapping services.",
        "Executive Intelligence Hub: Automated synthesis of sales data into plain-English summaries and actionable business insights.",
        "Role-Based Access Control (RBAC): Strict administrative layers for managing fraud alerts, user flags, and platform-wide configurations.",
        "Containerized Infrastructure: Fully dockerized deployment ensuring consistency across development and high-availability production environments."
      ],
      challenges: [
        "Real-Time Data Orchestration: Designed an efficient event-driven architecture to analyze transaction signals and behavioral anomalies without introducing latency to the checkout experience.",
        "Balancing Security and Friction: Optimized the liveness detection and identity verification workflows to be fast and non-intrusive while maintaining high accuracy thresholds.",
        "Secure Identity Management: Engineered a 'Master Key' system that stores verified identity baselines, preventing account takeovers and ensuring long-term biometric integrity.",
        "Predictive Logic Implementation: Developed custom statistical models for local forecasting and anomaly detection to reduce reliance on external APIs and minimize operational costs.",
        "Complex Relational Schema: Architected a robust database structure to track the relationships between thousands of products, inventory logs, and dynamic trust scores.",
        "Production-Grade Security: Implemented HTTP-only cookie management and multi-factor authentication (MFA) to safeguard sensitive financial data and user profiles."
      ],
      liveDemo: 'http://143.198.84.128:8083',
      showLiveDemo: true,
      showGithub: false
    },
    {
      id: 'cyperus',
      date: 'January 2026',
      name: 'Cyperus: An AI-Powered Food Ordering & Delivery Platform with Predictive Demand Forecasting',
      role: ['Full-Stack Developer'],
      description: 'A production-ready, AI-driven food delivery and marketplace platform optimized for Cash on Delivery (COD) and local logistics, featuring predictive demand forecasting and zero-cost geospatial routing.',
      longDescription: 'Cyperus is a high-performance marketplace engineered to solve local logistics challenges through a "Defense in Depth" AI strategy. I developed a two-stage forecasting pipeline: a custom, local statistical engine (EMA + Linear Regression) for instantaneous, zero-cost predictions, and a high-fidelity Gemini 1.5 Flash integration for complex nightly demand reasoning. The system features a unique geospatial architecture that bypasses paid mapping APIs by integrating Leaflet, OpenStreetMap, and OSRM for real-time route visualization, distance calculation, and delivery duration estimation. Built with Next.js 16 and PostgreSQL, the platform includes a touch-optimized POS for vendors, real-time inventory management, and a robust fraud-prevention layer via Auth.js and seller verification protocols.',
      technologies: [
        'Next.js',
        'React',
        'TypeScript',
        'PostgreSQL',
        'Prisma',
        'Gemini 2.5 Flash',
        'Tailwind CSS',
        'Leaflet.js',
        'OSRM API',
        'Docker & Nginx',
        'Auth.js (NextAuth)',
        'Nominatim Geocoding'
      ],
      badges: ['Freelance', "Deployed"],
      images: [
        'images/Cyperus/1.png',
        'images/Cyperus/2.png',
        'images/Cyperus/3.png',
        'images/Cyperus/4.png',
        'images/Cyperus/5.png',
        'images/Cyperus/6.png'
      ],
      features: [
        "AI Demand Forecasting: Dual-stage pipeline using local EMA/Regression and Gemini 1.5 Flash for hyper-accurate stock predictions.",
        "Zero-Cost Geospatial Routing: Interactive Leaflet maps with OSRM-powered route calculation and distance estimation.",
        "Seller Verification System: Real-time verification flows with role-based access control (RBAC) and Auth.js security.",
        "Predictive Fraud Detection: AI-driven anomaly detection in order patterns and seller behavior to ensure marketplace integrity.",
        "Local Logistics Engine: Optimized for Cash on Delivery (COD) workflows with real-time order status tracking.",
        "Intelligence Dashboard: Executive summaries generated by AI to provide actionable business insights for vendors.",
        "Touch-Optimized POS: Mobile-first storefront and admin interface designed for rapid order processing.",
        "Advanced Inventory Engine: Real-time stock tracking with automated reorder suggestions based on AI forecasts.",
        "Geocoding Fallback: Nominatim API integration for converting text addresses to high-precision coordinates.",
        "Production-Ready DevOps: Fully containerized with Docker, featuring Nginx reverse proxy and automated Prisma migration scripts."
      ],
      challenges: [
        "Overcoming Native Dependency Issues: Replaced Brain.js with a custom JavaScript-based statistical engine (EMA + Regression) to ensure cross-platform compatibility without sacrificing local forecasting speed.",
        "Implementing High-Fidelity AI on a Budget: Architected a nightly cron job that aggregates 30-day historical data for Gemini 1.5 Flash to minimize API costs while maximizing reasoning quality.",
        "Mapping without Google APIs: Engineered a complex routing layer using Leaflet and OSRM, implementing polyline visualization and travel-time estimation with zero recurring costs.",
        "Database Scalability: Designed a normalized PostgreSQL schema with Prisma 7 to manage complex Order-to-Inventory relationships, ensuring transactional integrity during peak sales.",
        "Production Environment Consistency: Authored a multi-stage Docker build and deployment script to ensure the local development environment perfectly mirrored the Digital Ocean production server.",
        "Secure Auth Implementation: Integrated NextAuth v4 with custom credentials providers and middleware to protect sensitive admin and financial routes."
      ],
      liveDemo: 'http://143.198.84.128:8082',
      showLiveDemo: true,
      showGithub: false
    },
    {
      id: 'smartstore-iq',
      date: 'December 2025',
      name: 'SmartStoreIQ: AI-Powered Web-Based Inventory and POS System with AI-Driven Demand Forecasting and Smart Sales Tracking & Analytics',
      role: ['Full-Stack Developer'],
      description: 'A cutting-edge POS and inventory ecosystem for SMEs that integrates predictive analytics and LLM-based reasoning to transform raw sales data into actionable business strategies.',
      longDescription: 'SmartStoreIQ is a modern, web-based solution designed to solve the "Bundle Problem" and inventory waste for small businesses. Unlike traditional POS systems, I engineered a high-performance "Recipe Engine" that automatically deducts raw ingredient stocks (e.g., flour, patties) when a composite product (e.g., a burger) is sold. The system’s standout feature is the "Intelligence Hub," which utilizes a hybrid AI approach: local Holt-Winters algorithms for 7-day sales forecasting and anomaly detection (z-score analysis), combined with Google Gemini for generating plain-English executive summaries. The platform includes a touch-optimized checkout UI, real-time inventory alerts, and automated reorder suggestions based on predicted demand, all secured by a robust OTP-verified authentication layer.',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'MariaDB', 'Gemini AI API', 'Tailwind CSS', 'Holt-Winters Algorithm', 'Docker', 'Zod', 'Lucide React', 'ARIMA (Optional)'],
      badges: ['Freelance', 'Deployed'],
      images: [
        'images/InventoryPOS/1.png',
        'images/InventoryPOS/2.png'
      ],
      features: [
        "Intelligence Hub: AI-powered daily briefings with KPI cards, growth metrics, and plain-English performance summaries.",
        "Predictive Demand Forecasting: Uses the Holt-Winters algorithm to forecast 7-day sales per product with confidence intervals.",
        "Ingredient-Level Inventory: Advanced recipe engine that calculates available stock based on raw material availability.",
        "Anomaly Detection: Automated z-score analysis to flag unusual sales spikes or drops (e.g., -40% dips) in real-time.",
        "Weather & Holiday Enrichment: Correlates sales performance with local weather data and national holidays via Open-Meteo.",
        "Smart Reorder Alerts: AI-driven 'Stock Risk Detection' that suggests reorder quantities before stockouts occur.",
        "Touch-Friendly POS: Responsive checkout interface with add-on selection, digital receipts, and real-time stock deduction.",
        "Robust Security: Multi-layered AuthGuard with OTP email verification and JWT-secured API routes.",
        "Data Persistence & Scalability: Containerized architecture using Docker Compose with a MariaDB/Prisma backend.",
        "Actionable Insights: Prioritized 'Suggested Actions' list capped at 25 items for quick business decision-making."
      ],
      challenges: [
        "Architecting the Recipe Engine: Developed a complex Product-to-Ingredient relational schema in Prisma that handles recursive stock math, ensuring accurate inventory levels for bundled items.",
        "Hybrid AI Implementation: Balanced the speed of local time-series algorithms (Holt-Winters) for raw numbers with the reasoning capabilities of Gemini for human-readable summarization.",
        "Performance Optimization: Implemented an in-memory caching layer for AI summaries, weather data, and holiday schedules to minimize external API costs and reduce page load times.",
        "UI/UX for Data Density: Designed a 'Condensed Pagination' and responsive grid system to manage large inventory lists and sales histories without overwhelming the user.",
        "Data Integrity & Safety: Built 'Danger Zone' protocols for product deletion that preserve transaction history while safely purging operational data.",
        "Forecasting Accuracy: Implemented a 'Walk-Forward Validation' backtesting script to evaluate MAE/RMSE metrics, ensuring the accuracy of sales predictions before deploying to production."
      ],
      liveDemo: 'http://143.198.84.128:8080',
      showLiveDemo: true,
      showGithub: false
    },
    {
      id: 'smart-workout-tracker',
      date: 'November 2025',
      name: 'Web-Based Smart Workout & Nutrition Tracker with Personalized Health Insights',
      role: ['Full-Stack Developer'],
      description: 'A Laravel-based health and fitness ecosystem that leverages Google Gemini AI and vector embeddings to generate hyper-personalized workout and nutrition plans based on semantic user requests.',
      longDescription: 'Developed as a comprehensive solo project for a private client, this platform utilizes a robust Laravel backend to manage complex user fitness data, including body metrics, exercise logs, and nutritional intake. The core innovation lies in the "AI Templates" engine, which integrates Google Gemini for plan generation and a custom Vector Embedding system. By computing 768-dimensional vectors for a catalog of hundreds of exercises, the system performs semantic matching via cosine similarity to ensure AI-generated plans only include verified, available equipment and movements. The frontend is built with a modern stack of Blade, Tailwind CSS, and Alpine.js, providing a reactive and mobile-optimized experience for tracking sessions in real-time.',
      technologies: ['Laravel', 'MySQL', 'Google Gemini AI', 'Vector Embeddings', 'Tailwind CSS', 'Alpine.js', 'Vite', 'Composer', 'Artisan CLI', 'Cosine Similarity', 'JWT'],
      badges: ['Freelance', 'Deployed'],
      images: [
        'images/HealthForge/1.png',
        'images/HealthForge/2.png',
        'images/HealthForge/3.png',
        'images/HealthForge/4.png',
        'images/HealthForge/5.png',
        'images/HealthForge/6.png'
      ],
      features: [
        "AI-Backed Template UI: Dynamic plan generation using Google Gemini with specialized prompts for weekly schedules.",
        "Semantic Exercise Matching: Custom EmbeddingService computing vectors (text-embedding-004) for intelligent exercise discovery.",
        "Automated Catalog Optimization: Synthesizes compact exercise catalogs for AI prompts to minimize token costs and improve accuracy.",
        "Comprehensive Nutrition Tracking: Recipe management system with estimated nutrition per serving and meal scheduling.",
        "Robust Workout Logging: Real-time session tracking with Rate of Perceived Exertion (RPE) and set-by-set performance metrics.",
        "Batch Embedding Engine: Custom Artisan command for high-speed batch processing of exercise vectorizations.",
        "Advanced Relational Schema: Sophisticated database design linking workout plans, food recipes, and historical body records.",
        "AI Prompt Versioning: Tuned behavioral prompts ensuring the AI returns valid JSON catalog codes for seamless plan hydration.",
        "Dynamic Media Handling: ExerciseImageService for managing multi-directory asset resolution across local and cloud storage.",
        "Scalable Infrastructure: Dockerized environment optimized for Laravel with Vite-driven asset bundling."
      ],
      challenges: [
        "AI Prompt Engineering & Cost Optimization: Designed a catalog-reduction logic that finds the most relevant exercises via semantic search before sending them to the LLM, keeping prompts small and accurate.",
        "Implementing Vector Search in PHP: Developed a native EmbeddingService to handle HTTP communication with Google's embedding models and implemented cosine similarity algorithms within the Laravel service layer.",
        "Data Migration & Seeding: Engineered a high-performance ExercisesSeeder capable of upserting hundreds of JSON-based exercise records with complex instructions and primary/secondary muscle mappings.",
        "Solo Project Management: Acted as the sole architect and developer, managing the complete lifecycle from ERD design and database migrations to the implementation of complex AI services and frontend reactive components.",
        "Biometric Tracking Logic: Established a historical 'users_body_record' system to track changes in weight, height, and body type over time, providing users with actionable health insights.",
        "Security & API Integration: Secured sensitive Gemini API interactions using advanced environment configuration and custom headers to protect client secrets."
      ],
      liveDemo: 'http://143.198.84.128:8081',
      showLiveDemo: true,
      showGithub: false
    },
    {
      id: 'attendify-2.0',
      date: 'September 2025',
      name: 'Attendify: A Face Recognition Attendance System Using The Delone And Mclean Information System Success Model',
      role: ['Lead Full-Stack Developer'],
      description: 'Attendify is a high-performance, biometric attendance management system built with Next.js 15 and FastAPI. It leverages multi-layered facial recognition and 6-stage anti-spoofing liveness detection to provide a secure, mobile-first solution for tracking student and faculty attendance in real-time.',
      longDescription: 'Attendify is a sophisticated "Defense in Depth" attendance solution designed to eliminate "buddy punching" through advanced computer vision. The system features a unique 3-layer JWT validation architecture (Client-side decode, In-memory cache, and Backend API) that improves authentication speed by up to 200x. On the frontend, I implemented a robust liveness detection pipeline that performs six concurrent tests—Blur, Texture, Reflection, Color Spectrum, Depth Estimation, and Eye Detection (using BlazeFace)—before validating identities via Google Cloud Vision. The backend utilizes FastAPI to orchestrate biometric processing and PostgreSQL for storing complex data relationships, including face embeddings and class records, while Redis handles session caching and OTP storage.',
      technologies: ['Next.js', 'Tensorflow.js', 'Face-api.js', 'Sharp', 'ShadCN', 'FastAPI', 'Python', 'InsightFace.ai', 'Redis', 'PostgreSQL', 'JWT', 'TailwindCSS', 'Google Cloud Storage', 'Digital Ocean', 'Brevo SMTP', 'Docker', 'Webhook'],
      badges: ['Academic', 'Research', 'Deployed'],
      images: [
        'images/Attendify_Research/1.png'
      ],
      features: [
        "High-performance biometric attendance management system built with Next.js 15 and FastAPI",
        "6-stage anti-spoofing liveness detection (Blur, Texture, Reflection, Color Spectrum, Depth Estimation, Eye Detection)",
        "3-layer JWT validation architecture improving authentication speed by 200x",
        "Google Cloud Vision integration for robust identity validation",
        "Secure role-based authentication with HTTP-only cookies and 2-step OTP",
        "Real-time attendance tracking optimized for high concurrency",
        "PostgreSQL for complex data relationships and vector storage of face embeddings",
        "Redis for high-speed session caching and OTP storage",
        "Automated security alerts and notifications via Brevo SMTP",
        "Dockerized deployment on Google Cloud Run and Digital Ocean with CI/CD"
      ],
      challenges: [
        "System Architecture & Integration: Served as the primary architect, designing the Container Diagram and ERD to ensure seamless communication between the Next.js frontend, multiple FastAPI microservices, and Google Cloud infrastructure.",
        "Core Security Implementation: Engineered the entire authentication flow, including HTTP-only cookie management, 2-step OTP verification, and the optimized 3-layer JWT validation system to ensure production-grade security.",
        "Biometric Pipeline Development: Developed the full anti-spoofing logic from scratch, switching from MediaPipe to BlazeFace to ensure the eye-detection module was fully compatible with server-side Node.js environments.",
        "API Orchestration: Authored the backend logic for face-matching algorithms and integrated Brevo SMTP for automated security alerts and OTP delivery.",
        "UI Collaboration & Frontend Logic: While I collaborated with a frontend developer who specialized in the shadcn/ui component implementation, I remained responsible for all functional frontend logic, including camera integration, state management via React Context, and custom hooks for authentication.",
        "Database & DevOps: I managed the deployment configuration using Docker, Google Cloud Run, Digital Ocean, and optimized database performance for handling high-concurrency attendance sessions."
      ],
      liveDemo: 'https://attendify.world',
      showLiveDemo: true,
      showGithub: false
    },
    {
      id: '1',
      date: 'August 2025',
      name: 'Patient Record Management System',
      role: ['Backend-Developer'],
      description: 'A Laravel-MySQL based Patient Record Management System developed by the Research & Development Team of the Commonwealth Information Technology Society (PUPQC) as a proper developmental research project, designed for actual deployment in the campus clinic to manage patient records, inventory, prescriptions, and analytics with secure, role-based access.',
      longDescription: 'The Patient Record Management System is a Laravel and MySQL-powered web application developed by the Research & Development Team of the Commonwealth Information Technology Society (PUPQC) as part of a proper developmental research initiative. Designed for actual deployment in the PUPQC campus clinic, the system modernizes and integrates the clinic’s core operations, including patient registration, queue management, consultation handling, prescription issuance, and secure medical history storage. It features robust inventory management for medicines, supplies, and equipment, with automated stock deduction linked to prescriptions and usage. The platform supports document issuance, report generation, and trend analytics to assist in health monitoring and decision-making. Secure role-based authentication with audit logging ensures data privacy and compliance, while notification features keep staff informed of critical updates. A centralized dashboard provides real-time insights on patient flow, inventory status, and clinic activities. Docker containerization ensures consistent, scalable deployment, making the system reliable for long-term campus use.',
      technologies: ['Laravel', 'MySQL', 'MeiliSearch', 'Fuzzy Algorithm'],
      images: [
        'images/PRMS/Pic1.jpg'
      ],
      features: [
        "Developed as a proper developmental research project by the R&D Team of the Commonwealth Information Technology Society (PUPQC) for deployment in the campus clinic",
        "Secure role-based authentication and access control for doctors, nurses, and admins",
        "Patient registration, categorization (student, faculty, staff, visitor, dependent), and record management",
        "Queue management with emergency case prioritization",
        "Consultation module with diagnosis, treatment plan, and prescription recording",
        "Prescription management integrated with automated inventory deduction",
        "Inventory management for medicines, supplies, and equipment with expiry and damage tracking",
        "Medical history tracking with easy retrieval by patient category",
        "Document issuance and printing for patient needs",
        "Report generation with filtering by date, diagnosis, and category",
        "Health trends and patient activity analytics",
        "Notification system for staff updates",
        "Audit logs for user activity and record changes",
        "Dashboard with real-time statistics on patient flow and resource usage",
        "Docker containerization for consistent deployment and scalability"
      ],
      challenges: [
        "Served as backend developer for the R&D Team of the Commonwealth Information Technology Society (PUPQC)",
        "Developed backend modules for inventory tracking and automated deductions",
        "Implemented prescription creation and integration with inventory management",
        "Integrated notification system for staff alerts",
        "Created dashboard analytics for patient trends and inventory usage",
        "Optimized MySQL queries for reporting and filtering",
        "Configured and deployed application using Docker containerization",
        "Ensured data integrity and security through validation and encryption"
      ],
      liveDemo: 'https://demo.com',
      github: 'https://github.com/user/project1',
      showLiveDemo: false,
      showGithub: false,
      badges: ['Academic', 'Local']
    },
    {
      id: '2',
      date: 'June 2025',
      name: 'Attendify - Smart Attendance Tracking System with Facial Recognition',
      role: ['Lead Developer', 'Full Stack Developer', 'System Architect'],
      description: 'Attendify is a face recognition-based attendance system that ensures accurate, secure, and efficient tracking with real-time analytics for students and administrators. It simplifies daily attendance processes while reducing errors and enhancing accountability.',
      longDescription: 'Attendify is an integrated Face Recognition Attendance System developed to enhance accuracy, accountability, and ease in daily attendance tracking across educational institutions. It uses facial recognition for authentication and attendance recording, backed by a centralized API and database management system. Designed with simplicity and security in mind, Attendify provides dedicated interfaces for both students and administrators, along with real-time, personalized analytics.',
      technologies: ['FastAPI', 'ASP.NET', 'Python', 'OpenCV', 'Tkinter', 'Tailwind CSS', 'JWT'],
      images: [
        'images/Attendify/logo_white.jfif',
        'images/Attendify/Pic1.jpg',
        'images/Attendify/Pic2.png',
        'images/Attendify/Pic3.png',
      ],
      features: [
        "Multi-step authentication and user management",
        "Role-based access control for all user types",
        "Password reset and account recovery flows",
        "Full-featured user management system",
        "Face recognition attendance system",
        "Heat index-based suspension logic",
        "Student, faculty, and admin portals",
        "Dynamic program, course, section, and schedule management",
        "Custom dashboards for students, faculty, and admins",
        "Comprehensive reporting with CSV exports",
        "API access secured with private API key",
        "JWT authentication with password hashing",
        "Input validation with soft delete and data integrity",
        "Two-factor authentication via PUP Webmail"
      ],
      challenges: [
        "Developed full-featured ASP.NET MVC web application with Tailwind CSS and JavaScript",
        "Built cross-platform desktop app using Python, Tkinter, and OpenCV with integrated dependencies",
        "Implemented face recognition attendance system using OpenCV and face_recognition library",
        "Created RESTful Web API with FastAPI, Python, and SQLite backend",
        "Designed and maintained centralized SQLite database",
        "Integrated data analytics using Chart.js for web and Matplotlib for desktop",
        "Engineered token-based API authentication and ASP.NET session management",
        "Implemented heat index suspension logic for safety compliance",
        "Designed role-based access control and multi-step authentication",
        "Built student, faculty, and admin portals with custom dashboards",
        "Developed reporting system with CSV export capabilities",
        "Ensured data integrity with input validation and soft delete functionality",
        "Secured API endpoints with private API keys and JWT authentication",
        "Integrated two-factor authentication via PUP Webmail"
      ],
      liveDemo: 'https://demo.com',
      github: 'https://github.com/user/project1',
      showLiveDemo: false,
      showGithub: false,
      badges: ['Academic', 'Local']
    },
    {
      id: '3',
      date: 'January 2025',
      name: 'IskoBytes - The Best of Bites and Bytes of PUPQC',
      role: 'Full-stack Developer',
      description: 'IskoBytes is a mobile platform for PUPQC entrepreneurs, offering shop creation, POS, analytics, and secure authentication to empower campus businesses.',
      longDescription: 'IskoBytes is a FlutterFlow-powered mobile app that bridges tradition and innovation for PUPQC’s student entrepreneurs. It offers a digital marketplace with shop creation, product management, order processing, and role-based access for students, faculty, and admins. Key features include multi-step authentication, two-factor security via PUP Webmail, real-time notifications, POS, reviews, CSV reports, and analytics. Beyond commerce, it adds a face recognition attendance system and heat index suspension logic. A static, responsive website built with Tailwind CSS and Animate.css showcases the app’s capabilities.',
      technologies: ['Flutterflow', 'Firebase', 'Dart'],
      images: [
        'images/IskoBytes/Pic1.png',
        'images/IskoBytes/Pic2.png',
        'images/IskoBytes/Pic3.png',
        'images/IskoBytes/Pic4.png',
        'images/IskoBytes/Pic5.png',
        'images/IskoBytes/Pic6.png',
        'images/IskoBytes/Pic7.png'

      ],
      features: [
        "Multi-step authentication and user management",
        "Role-based access control for all user types",
        "Password reset and account recovery",
        "Two-factor authentication via PUP Webmail",
        "Student, faculty, and admin portals",
        "Custom dashboards for each user type",
        "Shop creation and management",
        "Product creation with images, pricing, and descriptions",
        "Marketplace with category and price filtering",
        "Built-in product review and rating system",
        "Point of Sale (POS) for in-person transactions",
        "Admin product approval workflow",
        "Data analytics with sales and top-product insights",
        "CSV export for reports",
        "Heat index-based suspension logic",
        "Real-time notifications for orders and updates",
        "Face recognition attendance system",
        "Secure API access via API key and JWT"
      ],
      challenges: [
        "Designed and developed the FlutterFlow mobile app from scratch",
        "Built complete authentication flows with JWT, password hashing, and PUP Webmail 2FA",
        "Implemented role-based access control for students, faculty, and admins",
        "Created dynamic shop, product, course, and schedule management modules",
        "Developed face recognition attendance system with OpenCV and Python backend",
        "Integrated heat index suspension automation logic",
        "Engineered analytics dashboards using Chart.js (web) and Matplotlib (desktop)",
        "Implemented CSV export for reporting",
        "Built a secure Web API using FastAPI, Python, and SQLite",
        "Designed centralized SQLite database schema",
        "Added input validation, soft delete, and data integrity safeguards",
        "Secured API endpoints with private API keys and token-based auth",
        "Created a responsive static website using Tailwind CSS and Animate.css to showcase the app"
      ],
      liveDemo: 'https://demo.com',
      github: 'https://github.com/user/project2',
      showLiveDemo: false,
      showGithub: false,
      badges: ['Academic', 'Local']
    },
    {
      id: '4',
      date: 'January 2025',
      name: 'COBOL Case Study',
      role: 'Lead Developer',
      description: 'This project delivers three COBOL programs that calculate student grades, analyze regional sales, and generate payroll reports using standard COBOL features for input, calculations, logic, and formatted output.',
      longDescription: 'The project "COBOL CASE 2024-2025" is a collection of three distinct COBOL programs developed as final requirements for a structured programming course. The first program calculates a student\'s quiz average and determines the grade equivalent using a provided transmutation table. The second program processes sales data for three salesmen across five regions, calculating regional averages and identifying the highest and lowest average sales. The third program is a payroll system that computes basic pay, overtime pay, deductions, and net pay for employees based on input file data and specific conditions.',
      technologies: ['COBOL', 'Git'],
      images: [
        'images/COBOL/Pic1.jpg'
      ],
      features: [
        "Quiz Grade Calculator: Computes a weighted average of five quizzes and determines a grade equivalent using a specific transmutation table.",
        "Sales Report Generator: Processes regional sales data, calculates average sales per region, and identifies the highest and lowest average sales.",
        "Payroll System: Calculates basic pay, overtime pay, total deductions, and net pay for employees based on specified conditions and input data.",
        "Data Import/Export: Ability to read and load data from external sources and export processed results to new files.",
        "Data Analytics: Performs small-scale data analysis to provide additional insights beyond the basic requirements.",
        "Search and Filter: Includes functions to search for specific records and filter data based on certain criteria.",
        "Formatted Output: Produces clean, readable reports for each case study with specific layouts as requested."
      ],
      challenges: [
        "I was the lead developer and full-stack developer for this project.",
        "Architectural Design: I was responsible for designing the overall structure of each COBOL program, including the IDENTIFICATION, ENVIRONMENT, DATA, and PROCEDURE divisions.",
        "Advanced Functionality: I implemented the logic for data loading, exporting, data analytics, searching, and filtering, significantly expanding the scope of the project beyond the basic requirements.",
        "Logic Implementation: I wrote all the core COBOL code for each case study, implementing the mathematical formulas for the quiz average, sales averages, and payroll calculations (basic pay, overtime, and net pay).",
        "User Interface (UI) Development: I designed and implemented the ACCEPT and DISPLAY logic for Case Study #2 to handle data entry and display the outputs according to the specified layouts.",
        "Debugging and Testing: I conducted comprehensive testing and debugging to ensure that each program functioned correctly and produced the accurate outputs as required by the case study conditions.",
        "Documentation: I was responsible for documenting the program logic and ensuring the final output matched the requested layouts for all three case studies."
      ],
      github: 'https://github.com/user/project4',
      showLiveDemo: false,
      showGithub: false,
      badges: ['Academic', 'Local']
    },
    {
      id: '5',
      date: 'January 2025',
      name: 'Data Structures & Algorithm Case Study',
      role: 'Lead Developer',
      description: 'This project is a Python command-line tool that simulates a web browser\'s history using an N-nary tree data structure. It allows users to visit, go back, and go forward through pages. The program also performs analytics, exports the data to a JSON file, and generates an HTML website to visualize the navigation history and its insights.',
      longDescription: 'The "Navigation History" project is a final case study for a Data Structures and Algorithms course at the Polytechnic University of the Philippines. The application utilizes an N-nary tree data structure to model a user\'s Browse journey, with each node representing a visited URL. Users can interact with this history through a command-line interface (CLI) using commands like visit, back, and forward. To extend the project\'s functionality beyond the basic requirements, I implemented the ability to export the navigation history and data analytics to JSON files. This data is then consumed by a single-page HTML website that I developed, which visualizes the navigation tree and displays insights such as the most frequently visited URLs through pie and bar charts.',
      technologies: ['Python', 'HTML5', 'Tailwind CSS', 'Git'],
      images: [
        'images/DSA/Pic1.jpg'
      ],
      features: [
        "N-nary Tree Data Structure: Models navigation history with nodes for each URL, parent pointers for 'back' functionality, and child nodes for 'forward' functionality.",
        "Command-Line Interface (CLI): Allows users to interact with the history via 'visit', 'back', 'forward', and 'clear' commands.",
        "Data Serialization: Exports the complete navigation history tree to a JSON file, making the data portable and persistent.",
        "Web Visualization: Automatically opens a single-page HTML website that reads the exported JSON file to visualize the navigation history as a tree.",
        "Data Analytics: Performs analysis to identify and count the top 10 most visited URLs, saving this information to a JSON file.",
        "Pie Chart Visualization: Generates data for a pie chart, saving it as a JSON file, to represent the top 5 most visited URLs and an 'others' category.",
        "Efficient Algorithms: Uses linear time complexity for tree traversal and counting, with logarithmic overhead for sorting operations.",
        "Styled Interface: Employs colored ASCII art for a visually engaging CLI and uses Tailwind CSS for a modern, responsive web interface."
      ],
      challenges: [
        "I was the lead developer and full-stack developer for this project.",
        "Core Logic: I designed and implemented the 'Node' and 'NavigationHistory' classes, which form the core N-nary tree data structure.",
        "Advanced Features: I developed the logic for exporting the entire tree structure to a JSON file and for generating the top 10 URL and pie chart data analytics.",
        "Visualization: I created the single-page HTML website that reads the generated JSON files and uses a visualization library to display the navigation history tree and analytics.",
        "Algorithm Optimization: I ensured the implementation of efficient algorithms for tree traversal (O(m)) and URL counting (O(m)), and utilized a Counter for sorting, resulting in a time complexity of O(k log k) for getting the top URLs.",
        "Debugging and Testing: I was responsible for testing the entire system, ensuring that the CLI, data export, and web visualization components all worked together seamlessly and accurately."
      ],
      liveDemo: 'https://demo.com',
      github: 'https://github.com/user/project5',
      showLiveDemo: false,
      showGithub: false,
      badges: ['Academic', 'Local']
    },
    {
      id: '6',
      date: 'June 2024',
      name: 'C++ Case Study',
      role: 'Full-Stack Developer',
      description: 'This C program is a menu-driven banking system where users can register, log in, and manage their accounts by depositing, withdrawing, and checking their balance. It also includes an admin menu to approve new users and view all transactions and accounts. The project was a final requirement for a Programming 2 course.',
      longDescription: 'Developed as a final requirement for a Programming 2 course, this project is a comprehensive C-based, menu-driven program that simulates a bank account management system. The program is structured with distinct user roles: a standard user and an administrator. New users can register by providing their account details, which are stored in a pending_users.dat file. The administrator has a separate login to access an admin menu, where they can approve or deny pending users, moving them to users.dat or denied_users.dat, respectively. Once a user is approved, they can log in to a transaction menu to perform balance inquiries, deposits, and withdrawals. A key feature is the robust authentication system, which includes PIN verification with a three-try limit, after which the user is locked out. To elevate the project beyond the basic case study, I implemented additional features such as colored text for a better user experience and integrated proper authentication, filtering, and searching capabilities.',
      technologies: ['C++'],
      images: [
        'images/C++/Pic1.jpg'
      ],
      features: [
        "File Handling: The program reads and writes data to three separate files: `pending_users.dat`, `users.dat`, and `denied_users.dat`.",
        "Menu-Driven Interface: The program is completely menu-driven with options for different functionalities, enhanced with colored text for a better user experience.",
        "Proper Authentication: Implements a secure login system with account number, password, and a 6-digit PIN verification with a 3-try limit. After three failed attempts, the account is locked out.",
        "Admin Panel: A separate menu for administrators to manage user registrations (approve/deny) and view all registered users and transactions.",
        "Transaction Processing: Supports Balance Inquiry, Deposit, and Withdrawal transactions, with checks for insufficient funds during withdrawals.",
        "Data Management: Includes advanced functions for searching and filtering data, providing a more robust system.",
        "Error Handling: Provides clear error messages for invalid PIN, incorrect password, and insufficient funds.",
        "Input Validation: Validates user input, such as ensuring a 10-digit account number and a 6-digit PIN."
      ],
      challenges: [
        "As the sole developer, I was responsible for the entire project.",
        "Architectural Design: I designed the entire system architecture, including the file structures (`struct PendingUser`, `struct RegisteredUser`, etc.) and the program flow.",
        "Core Logic Implementation: I wrote the main logic for user registration, login, and transaction processing, including the PIN verification with a 3-try limit and insufficient funds checks.",
        "Advanced Features: I went beyond the basic requirements by adding features such as colored text for the interface and implementing functions for filtering and searching data.",
        "Admin System Development: I was responsible for creating the admin panel, including the secure login, and the functions to approve, deny, and list users and transactions.",
        "File Handling: I implemented the file handling functions to read from and write to the `.dat` files, ensuring data persistence and integrity.",
        "Debugging and Testing: I conducted extensive debugging and testing to ensure all functionalities, from user registration to transactions, worked flawlessly and handled various edge cases."
      ],
      liveDemo: 'https://demo.com',
      github: 'https://github.com/user/project5',
      showLiveDemo: false,
      showGithub: false,
      badges: ['Academic', 'Local']
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

  // Categorize and color techs like AboutSection
  const techCategories = [
    {
      name: 'Backend',
      color: 'bg-purple-500/15 text-purple-200 border border-purple-400/20',
      match: [
        'node', 'express', 'python', 'flask', 'fastapi', 'asp.net', 'tkinter', 'cobol', 'c++', 'sharp', 'webhook', 'smtp', 'brevo', 'php', 'laravel', 'composer', 'artisan', 'cosine similarity', 'sqlalchemy', 'alembic', 'bcrypt', 'pyjwt', 'mvc', 'repository pattern'
      ]
    },
    {
      name: 'Frontend',
      color: 'bg-blue-500/15 text-blue-200 border border-blue-400/20',
      match: [
        'react', 'vue', 'angular', 'tailwind', 'tailwind css', 'css', 'sass', 'html', 'dart', 'shadcn', 'alpine.js', 'vite', 'leaflet', 'customtkinter'
      ]
    },
    {
      name: 'Database',
      color: 'bg-green-500/15 text-green-200 border border-green-400/20',
      match: [
        'mongodb', 'mysql', 'postgresql', 'sqlite', 'typescript', 'stripe', 'redis', 'prisma', 'mariadb'
      ]
    },
    {
      name: 'Framework',
      color: 'bg-cyan-500/15 text-cyan-200 border border-cyan-400/20',
      match: [
        'next.js', 'vite', 'django', 'flask', 'fastapi', 'asp.net', 'flutter', 'flutterflow', 'laravel', 'react 19', 'next.js 16'
      ]
    },
    {
      name: 'DevOps & Tools',
      color: 'bg-orange-500/15 text-orange-200 border border-orange-400/20',
      match: [
        'firebase', 'aws', 'cloud', 'docker', 'github', 'git', 'azure', 'meilisearch', 'mellisearch', 'digital ocean', 'nginx', 'osrm', 'nominatim', 'geospatial', 'routing'
      ]
    },
    {
      name: 'AI & Machine Learning',
      color: 'bg-yellow-500/15 text-yellow-200 border border-yellow-400/20',
      match: [
        'tensorflow', 'openai', 'opencv', 'ai', 'machine learning', 'ml', 'fuzzy algorithm', 'fuzzy', 'insightface', 'face-api', 'gemini', 'vector embeddings', 'embeddings', 'holt-winters', 'arima', 'regression', 'ema'
      ]
    },
    {
      name: 'Security',
      color: 'bg-red-500/15 text-red-200 border border-red-400/20',
      match: [
        'jwt', 'security', 'auth', 'authentication', 'authorization', 'zod', 'auth.js', 'nextauth', 'supabase auth'
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

  // Categorize techs for display
  const categorizeTechs = (technologies: string[]) => {
    const categorized: { [key: string]: string[] } = {};
    technologies.forEach(tech => {
      const cat = getTechCategory(tech).name;
      if (!categorized[cat]) categorized[cat] = [];
      categorized[cat].push(tech);
    });
    return categorized;
  };

  // Render tech stack with categories and colors
  const renderTechStack = (technologies: string[]) => {
    const categorized = categorizeTechs(technologies);
    return (
      <div className="flex flex-wrap gap-1">
        {Object.entries(categorized).flatMap(([, techs]) => (
          techs.map((tech) => {
            const { color } = getTechCategory(tech);
            return (
              <span
                key={tech}
                className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-semibold ${color}`}
              >
                {tech}
              </span>
            );
          })
        ))}
      </div>
    );
  };

  const getBadgeColor = (badge: string) => {
    switch (badge.toLowerCase()) {
      case 'academic':
        return 'bg-indigo-500/15 text-indigo-200 border border-indigo-400/20';
      case 'freelance':
        return 'bg-emerald-500/15 text-emerald-200 border border-emerald-400/20';
      case 'contract':
        return 'bg-amber-500/15 text-amber-200 border border-amber-400/20';
      case 'personal project':
        return 'bg-pink-500/15 text-pink-200 border border-pink-400/20';
      case 'deployed':
        return 'bg-teal-500/15 text-teal-200 border border-teal-400/20';
      case 'local':
        return 'bg-sky-500/15 text-sky-200 border border-sky-400/20';
      case 'research':
        return 'bg-violet-500/15 text-violet-200 border border-violet-400/20';
      case 'solo project':
        return 'bg-rose-500/15 text-rose-200 border border-rose-400/20';
      case 'client-work':
        return 'bg-emerald-500/15 text-emerald-200 border border-emerald-400/20';
      case 'ai-integrated':
        return 'bg-amber-500/15 text-amber-200 border border-amber-400/20';
      case 'full-stack':
        return 'bg-blue-500/15 text-blue-200 border border-blue-400/20';
      case 'ai/predictive':
      case 'ai-predictive':
        return 'bg-indigo-500/15 text-indigo-200 border border-indigo-400/20';
      case 'saas':
        return 'bg-cyan-500/15 text-cyan-200 border border-cyan-400/20';
      case 'logistics':
        return 'bg-orange-500/15 text-orange-200 border border-orange-400/20';
      case 'ai-security':
        return 'bg-red-500/15 text-red-200 border border-red-400/20';
      case 'marketplace':
        return 'bg-fuchsia-500/15 text-fuchsia-200 border border-fuchsia-400/20';
      case 'production-ready':
        return 'bg-emerald-500/15 text-emerald-200 border border-emerald-400/20';
      case 'desktop-app':
        return 'bg-sky-500/15 text-sky-200 border border-sky-400/20';
      case 'financial-systems':
        return 'bg-green-500/15 text-green-200 border border-green-400/20';
      default:
        return 'bg-slate-500/15 text-slate-200 border border-slate-400/20';
    }
  };

  const renderBadges = (badges?: string[]) => {
    if (!badges || badges.length === 0) return null;
    return (
      <div className="flex flex-wrap gap-2 mb-2">
        {badges.map((badge, index) => (
          <span
            key={index}
            className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-medium ${getBadgeColor(badge)}`}
          >
            {badge}
          </span>
        ))}
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 px-8 bg-slate-900/50 relative overflow-hidden">
      {/* Top and Bottom Glow Lines - positioned above everything */}
      <div className="absolute top-0 left-0 right-0 h-0.5 glow-line-top z-30"></div>
      <div className="absolute bottom-0 left-0 right-0 h-0.5 glow-line-bottom z-30"></div>

      {/* Hyperspeed Background - Only show on desktop */}
      <div className="absolute inset-0 z-0 hidden md:block">
        {isVisible && (
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
        )}
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
            <div className="grid gap-3 lg:gap-6 p-4 lg:p-6 border-b border-slate-700/50 grid-cols-[1fr_1fr_40px] lg:grid-cols-[100px_1fr_1fr_2fr_50px]">
              {/* Date - Only on desktop */}
              <div className="hidden lg:block text-xs lg:text-sm font-bold text-slate-200 uppercase tracking-widest">Date</div>
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
                className={`grid gap-3 lg:gap-6 p-4 lg:p-6 hover:bg-slate-800/60 transition-all duration-300 group grid-cols-[1fr_1fr_40px] lg:grid-cols-[100px_1fr_1fr_2fr_50px] ${index !== projects.length - 1 ? 'border-b border-slate-700/40' : ''
                  }`}
                style={{
                  animationDelay: `${0.1 + index * 0.1}s`,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.5s ease-out ${0.1 + index * 0.1}s`
                }}
              >
                {/* Date - Only on desktop */}
                <div className="hidden lg:flex items-center text-slate-400 text-xs lg:text-sm font-semibold">
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
                <div className="hidden lg:flex flex-col justify-center text-slate-300 text-sm leading-relaxed">
                  {renderBadges(project.badges)}
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
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
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
