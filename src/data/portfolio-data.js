import { Github, Linkedin, Mail, Code2, Database, Wrench, Globe, Server, Smartphone, Briefcase } from "lucide-react";
import webxImg from "@/assets/webx.jpg";
import finimg from "@/assets/finance.png";

import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectTravel from "@/assets/travel.jpg";




export const aboutInfo = {
  heading: "About Me",
  description: [
    "I am an aspiring Full Stack Developer with a solid foundation in both front-end aesthetics and back-end architecture. My goal is to create web applications that are fast, accessible, and easy to maintain.",
    "I’m a firm believer that the best code is the code that’s easy for the next person to read. I'm currently looking for my first full-time role where I can contribute to meaningful projects and grow alongside experienced mentors.",
  ],
  stats: [
    { label: "Projects Completed", value: "10+" },
    { label: "Technologies", value: "10+" },
    { label: "Open Source Contributions", value: "5+" },
  ],
};

export const experience = [
  {
    id: 1,
    role: " Full Stack Developer (Intern)",
    company: "Infofact Solution",
    location: "Noida, India",
    dates: "January 2026 - Febuaray 2026",
    description: "Worked on building full-stack web applications using the MERN stack, developing responsive UIs, creating REST APIs, and integrating frontend with backend systems. Gained experience in authentication, state management, debugging, and deployment.",
    highlights: [
      "Collaborated with team members using Git and GitHub following version control best practices",
      "Gained hands-on experience in deploying full-stack applications on cloud platforms",
      "Implemented CI/CD workflows cutting deployment time by 40%",
    ],
  },
  {
    id: 2,
    role: "Frontend Developer (Intern)",
    company: "CodeIntern",
    location: "Remote",
    dates: "September 2025 - October 2025",
    description: "Developed responsive and user-friendly interfaces using React.js and Tailwind CSS, integrated APIs, and improved performance and user experience through optimized frontend development practices.",
    highlights: [
      "Built responsive and interactive user interfaces using React.js, Next.js, and Tailwind CSS",
      "Implemented state management using tools like Redux or Context API",
      "Collaborated with designers and backend developers to deliver seamless features",
    ],
  },

];

export const personalInfo = {
  name: "Neeraj kumar bhoi",
  title: "Full Stack Developer",
  tagline: "Code that works. Design that speaks.",
  email: "neerajkb555@gmail.com",
  cvUrl: "https://drive.google.com/file/d/1Ssm-yX81Btxm8Ci8kzdMLSjNIqDjVhk_/view?usp=sharing", // Replace with actual CV link
  socials: [
    { name: "GitHub", url: "https://github.com/Neeraj814", icon: Github },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/neeraj814/", icon: Linkedin },
    { name: "Email", url: "mailto:neerajkb555@gmail.com", icon: Mail },
  ],
};

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const education = [

  {
    id: 2,
    degree: "Bachelor of Technology in Computer Science and Engineering",
    school: "Gandhi Engineering College",
    location: "Khordha, Odisha",
    dates: "2021 - 2025",
    highlights: [
     "Graduated with a CGPA of 6.9, specializing in Full-Stack Web Development and Software Engineering.",
    "Mastered core Computer Science fundamentals including Data Structures, Algorithms, and Database Management Systems (DBMS).",
    "Developed industry-ready applications like 'Webx' and a 'Finance Dashboard' using the MERN stack and Vite.",
    "Specialized in interactive Frontend Engineering, integrating 3D graphics with Three.js and modern UI libraries like Shadcn/UI.",
    ],
  },
  {
    id: 3,
    degree: "Class 12",
    school: "Delhi Public School",
    location: "Odisha, India",
    dates: "2019 - 2021",
    highlights: [
      "Specialized in the Science stream with a focus on Physics, Chemistry, and Mathematics (PCM).",
      "Developed a strong analytical foundation and problem-solving skills through advanced Calculus and Logic.",
      "Recognized as a National Merit Scholar for academic achievement.",
      "Recipient of the AP Computer Science Award for excellence in programming fundamentals.",
    ],
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 80 },
      { name: "Vue.js", level: 70 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 60 },
      { name: "PostgreSQL", level: 85 },
      { name: "GraphQL", level: 80 },
      { name: "Redis", level: 75 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 55 },
      { name: "AWS", level: 80 },
      { name: "CI/CD", level: 85 },
      { name: "Kubernetes", level: 50 },
      { name: "Linux", level: 55 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Finance Dashboard",
    description: "A cinematic, high-fidelity finance dashboard built to prove that data can be beautiful. Leveraging Three.js for immersive 3D elements and Shadcn/UI for a premium dark-mode aesthetic, this React-powered interface delivers a seamless, high-tech experience for visualizing personal capital.",
    image: finimg,
    tags: ["React", "Tailwind CSS", "Threejs", "ShadcnUI"],
    liveUrl: "https://finance-dashboard-4g12.onrender.com",
    githubUrl: "https://github.com/Neeraj814/Finance-Dashboard",
  },

  {
    id: 3,
    title: "Travel tracker",
    description: "Every trip is a story. This platform helps modern travelers transform their passport stamps into a living, breathing digital map.",
    image: projectTravel,
    tags: ["React", "PostgresSQL", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Webx360",
    description: "Streamlining the hiring process with a clean, fast interface for both recruiters and job seekers.",
    image: webxImg,
    tags: ["React", "Node.js", "MongoDB", "OpenAI"],
    liveUrl: "https://webx360.vercel.app/",
    githubUrl: "https://github.com/Neeraj814/Webx360",
  },


];
