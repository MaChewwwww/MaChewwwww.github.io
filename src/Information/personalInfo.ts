export interface PersonalInfo {
  name: string;
  role: string;
  roles: string[]; // Additional roles for rotation
  profileImage?: string;
  miniAvatarImage?: string; // Add mini avatar image
  resumeUrl?: string;
  email: string;
  phone?: string;
  location?: string;
  website?: string;
  social: {
    github?: string;
    linkedin?: string;
    facebook?: string;
    instagram?: string;
  };
  // Stats for hero section
  stats: {
    yearsExperience: number;
    projectsCompleted: number;
    certificatesEarned: number;
  };
  skills: string[];
  skillsByCategory: {
    backend: string[];
    frontend: string[];
    database: string[];
    framework: string[];
    devops: string[];
  };
  experience: {
    company: string;
    role: string;
    duration: string;
    description?: string;
  }[];
  education: {
    institution: string;
    degree: string;
    year: string;
    description?: string;
  }[];
}

import pfpImage from '../assets/pfp_no_bg.png';
import pfpSmallImage from '../assets/pfp_small.png';

// Default personal information - customize this with your real data
export const personalInfo: PersonalInfo = {
  name: "John Mathew Parocha",
  role: "Full Stack Developer",
  roles: [
    "Backend Engineer"
  ],
  profileImage: pfpImage, // Your actual profile photo
  miniAvatarImage: pfpSmallImage, // Small avatar for profile card
  resumeUrl: "/resume.pdf", // Add your resume file to public folder
  email: "your-email@example.com",
  phone: "+1 (555) 123-4567",
  location: "Your City, Country",
  website: "https://yourname.dev",
  
  social: {
    github: "https://github.com/MaChewwwww",
    linkedin: "https://www.linkedin.com/in/john-mathew-parocha-1b78b22b7/",
    facebook: "https://www.facebook.com/MaChewww/",
    instagram: "https://www.instagram.com/hello.machew/"
  },
  
  stats: {
    yearsExperience: 5,
    projectsCompleted: 50,
    certificatesEarned: 12
  },
  
  skills: [
    "React & TypeScript",
    "Node.js & APIs",
    "Modern CSS & Design",
    "Python & Django",
    "PostgreSQL & MongoDB",
    "AWS & Docker",
    "Git & CI/CD",
    "UI/UX Design"
  ],
  
  skillsByCategory: {
    backend: ["Node.js", "Python", "Django", "Express.js", "RESTful APIs", "GraphQL"],
    frontend: ["React", "TypeScript", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    database: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
    framework: ["Next.js", "Django", "Express.js", "FastAPI", "Vue.js", "Nuxt.js"],
    devops: ["AWS", "Docker", "Git", "CI/CD", "Vercel", "Linux"]
  },
  
  experience: [
    {
      company: "Tech Company",
      role: "Senior Full Stack Developer",
      duration: "2022 - Present",
      description: "Led development of web applications using React, Node.js, and cloud technologies. Mentored junior developers and improved team productivity by 30%."
    },
    {
      company: "Startup Inc",
      role: "Frontend Developer",
      duration: "2020 - 2022",
      description: "Built responsive web applications and implemented modern design systems. Collaborated with designers to create pixel-perfect user interfaces."
    },
    {
      company: "Freelance",
      role: "Web Developer",
      duration: "2019 - 2020",
      description: "Developed custom websites for small businesses using various technologies. Managed entire project lifecycle from conception to deployment."
    }
  ],
  
  education: [
    {
      institution: "Polytechnic University of the Philippines - Quezon City",
      degree: "Bachelor of Science in Information Technology",
      year: "2023 - 2027",
      description: "Focused on software engineering, data structures, and web development."
    },
    {
      institution: "Online Platform",
      degree: "Full Stack Web Development Certificate",
      year: "2019",
      description: "Intensive bootcamp covering modern web development technologies and best practices."
    }
  ]
};

export default personalInfo;
