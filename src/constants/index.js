
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  ai,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  docker,
  typescript,
  postgresql,
  python,
  nextjs,
  angular,
  firebase,
} from '../assets'

// Import companies
import tekisky from "../assets/company/tekisky.png";
import starbucks from "../assets/company/starbucks.png";
import tesla from "../assets/company/tesla.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
    number: "01",
  },
  {
    id: "experience",
    title: "Experience",
    number: "02",
  },
  {
    id: "work",
    title: "Work",
    number: "03",
  },
  {
    id: "contact",
    title: "Contact",
    number: "04",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "AI/Machine Learning",
    icon: ai,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "GSAP", icon: gsap },
  { name: "Framer Motion", icon: framer },
  { name: "Three JS", icon: threejs },
  { name: "Figma", icon: figma },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Material UI", icon: mui },
  { name: "Node JS", icon: nodejs },
  { name: "Express JS", icon: express },
  { name: "AWS", icon: aws },
  { name: "MongoDB", icon: mongodb },
  { name: "MySQL", icon: mysql },
  { name: "PostgreSQL", icon: postgresql },
  { name: "Git", icon: git },
  { name: "Docker", icon: docker },
  { name: "Python", icon: python },
  { name: "Next.js", icon: nextjs },
  { name: "Angular", icon: angular },
  { name: "Firebase", icon: firebase },
];

// About section tech stacks
const aboutTechStacks = {
  languages: ["JavaScript/TypeScript", "Python", "Java", "C++", "C#", "SQL"],
  frameworks: ["React.js & Next.js", "Angular", "Node.js & Express.js", "FastAPI & NestJS", "ASP.NET Core & Go", "Tailwind & Redux"],
  tools: ["AWS, GCP & Azure", "Docker & CI/CD", "LLM Integration & RAG", "Generative AI & Agents", "Jest & Pytest", "Agile & Git Flow"],
  databases: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "Supabase"],
};

const experiences = [
  {
    title: "AI Engineer",
    company_name: "Zevenz",
    company_url: "https://faizan-bor.github.io/ZEVENZ",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Oct 2025 - Mar 2026",
    points: [
      "Designed and deployed 3 production <b>LLM-integrated AI agent</b> workflows using <b>Python</b> and <b>FastAPI</b>, reducing manual processing time by 60%.",
      "Engineered prompt pipelines for <b>GPT-4</b> and <b>Gemini APIs</b> using <b>chain-of-thought</b>, <b>few-shot</b>, and <b>ReAct</b> techniques, improving structured output accuracy by 35%.",
      "Architected a <b>RAG</b> pattern using <b>vector embeddings</b> and <b>semantic search</b> to ground LLM responses in domain-specific knowledge.",
      "Orchestrated multi-step AI workflows with <b>n8n</b>, saving 8+ hrs/week; took full ownership of backend API design and deployment within a 3-person startup.",
    ],
  },
  {
    title: "Full Stack Engineer",
    company_name: "App Minds Software House",
    company_url: "",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Jun 2025 - Aug 2025",
    points: [
      "Architected and shipped 5+ full-stack features in <b>React.js</b> and <b>Node.js</b>, reducing frontend load time by 30% via code splitting, lazy loading, and bundle optimization.",
      "Implemented reusable <b>TypeScript</b> component library cutting UI dev time by 20%.",
      "Designed <b>RESTful APIs</b> consumed by 3 client-facing web apps, improving data retrieval latency by 25% via response caching and query optimization.",
      "Collaborated in a 6-person <b>Agile</b> team using <b>Git Flow</b>, <b>PR reviews</b>, and <b>sprint planning</b>; maintained 95%+ sprint velocity across all milestones.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Nexium Software House",
    company_url: "",
    icon: tesla,
    iconBg: "#383E56",
    date: "Jun 2025 - Aug 2025",
    points: [
      "Developed and maintained 10+ <b>RESTful API</b> endpoints in <b>Node.js</b> and <b>Express.js</b> supporting high-availability workflows for multiple production clients.",
      "Optimized <b>PostgreSQL</b> queries via composite indexing, query restructuring, and connection pooling, reducing execution time by 40% and enabling 3× higher concurrent load.",
      "Implemented <b>JWT authentication</b> middleware and <b>RBAC</b>, hardening API security.",
      "Authored <b>Jest</b> unit and integration tests achieving 80%+ coverage; integrated into <b>CI/CD</b> via <b>Jenkins</b>.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ahtesham proved me wrong.",
    name: "Usman Pluto",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ahtesham does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "JustBuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Ahtesham optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const featuredProjects = [
  {
    name: "Stratify – AI Powered Trading SaaS",
    overline: "Featured Project",
    description: "Built full MEAN-stack SaaS from scratch; integrated Gemini Flash API with custom prompt pipelines parsing natural language into structured JSON trading logic at 90%+ accuracy. Deployed backtesting engine on 2+ years of historical market data. Implemented JWT auth, RBAC, and rate limiting; deployed on GCP.",
    tags: ["Next.js", "Node.js", "Express.js", "MongoDB", "Python", "Gemini API"],
    image: project2,
    github: "https://github.com/Ahtesham-Shah999/Stratify-Ultimate-AI-Powered-Saas.git",
    live: null,
    category: "AI & Machine Learning",
  },
  {
    name: "Zevenz Builders Marketplace",
    overline: "Featured Project",
    description: "Built end-to-end MERN marketplace with project bidding, proposal management, and contractor verification. Implemented Socket.io real-time messaging at sub-200ms latency and automated 100+ daily transactional emails via Nodemailer.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    image: gearXpert,
    github: "https://github.com/Ahtesham-Shah999/Zevens_Builders",
    live: null,
    youtube: "https://www.youtube.com/watch?v=O0vF6-EPRqQ",
    category: "Full-Stack & Web",
  },
];

const otherProjects = [
  {
    name: "Smart Traffic Management System",
    description: "A comprehensive system for modeling, optimizing, and visualizing traffic flow. Features real-world city street networks, dynamic traffic-light timing optimization, and 2D/3D visualizations built with FastAPI, React, and Three.js.",
    tags: ["React", "FastAPI", "Three.js", "Python"],
    github: "https://github.com/Ahtesham-Shah999/Smart-Traffic_System.git",
    live: null,
    category: "AI & Machine Learning",
  },
  {
    name: "TeleCRM Platform",
    description: "A comprehensive TeleCRM application designed to manage customer relationships, track telecalling performance metrics, and streamline sales and support workflows efficiently.",
    tags: ["Full-Stack", "Web Development", "CRM"],
    github: "https://github.com/Ahtesham-Shah999/telecrm.git",
    live: null,
    category: "Full-Stack & Web",
  },
  {
    name: "Lumina WebGL: Interactive 3D Topology",
    description: "A highly customized, interactive 3D WebGL experience featuring topographical data rendering and precision typography built with Three.js and Vite.",
    tags: ["WebGL", "Three.js", "JavaScript", "CSS3"],
    github: "https://github.com/Ahtesham-Shah999/Topology.git",
    live: null,
    category: "Full-Stack & Web",
  },
  {
    name: "Generative AI Voice Cloning Pipeline",
    description: "Deployed generative AI pipeline as versioned FastAPI REST endpoint for zero-shot voice synthesis. Built end-to-end with OpenVoice V2. Orchestrated with n8n reducing manual steps by 70%. Docker-based horizontal scalability for concurrent requests.",
    tags: ["OpenVoice V2", "FastAPI", "Python", "n8n"],
    github: "https://github.com/Ahtesham-Shah999/Automating-the-whole-procedure-Text-to-speech-to-cloned-speech-using-N8N-automation-tool.-.git",
    live: null,
    category: "AI & Machine Learning",
  },
  {
    name: "Automating Paper Annotation Using LLMs",
    description: "Built a comprehensive system to automate paper annotation using Large Language Models to extract data effectively and rapidly.",
    tags: ["Python", "Jupyter", "LLMs", "Machine Learning"],
    github: "https://github.com/Ahtesham-Shah999/Automating-Paper-Annotation-Using-Large-Language-Models",
    live: null,
    category: "AI & Machine Learning",
  },
  {
    name: "AI-Powered Audiobook Studio",
    description: "An AI-powered studio to automatically synthesize human-like speech from text to generate complete audiobooks seamlessly.",
    tags: ["Python", "TTS", "Machine Learning"],
    github: "https://github.com/Ahtesham-Shah999/AI-Powered-Audiobook-Studio",
    live: null,
    category: "AI & Machine Learning",
  },
  {
    name: "Blockchain Attendance Management System",
    description: "Built full-stack blockchain storing 500+ records immutably via custom SHA-256 hashing and Proof-of-Work (no third-party libs); O(n) chain validation with tamper-proof integrity; REST API with RBAC for record queries.",
    tags: ["Custom Blockchain", "SHA-256", "Proof-of-Work", "REST API"],
    github: "https://github.com/Ahtesham-Shah999/Blockchain_AMS",
    live: null,
    youtube: "https://www.youtube.com/watch?v=iFlqo0wJeJk",
    category: "Full-Stack & Web",
  },
  {
    name: "NexusHost",
    description: "A complete responsive web application for web hosting services built with HTML, CSS, and modern web techniques.",
    tags: ["HTML", "CSS", "Web Design"],
    github: "https://github.com/Ahtesham-Shah999/NexusHost",
    live: null,
    category: "Full-Stack & Web",
  },
  {
    name: "FLUX-CD GitOps Pipeline",
    description: "A complete GitOps project automating continuous deployment workflows using Flux CD and Kubernetes clusters.",
    tags: ["Flux CD", "GitOps", "Kubernetes", "DevOps"],
    github: "https://github.com/Ahtesham-Shah999/FLUX-CD-Devops",
    live: null,
    category: "DevOps & QA",
  },
  {
    name: "AWS Infrastructure Automation",
    description: "Automated provisioning of scalable AWS infrastructure including VPCs, EC2 instances, and security groups using Terraform.",
    tags: ["Terraform", "AWS", "Infrastructure as Code"],
    github: "https://github.com/Ahtesham-Shah999/aws-infra-automation-terraform",
    live: null,
    category: "DevOps & QA",
  },
  {
    name: "Docker Kubernetes Deployments",
    description: "Containerized modern applications using Docker and deployed them efficiently to scalable Kubernetes clusters.",
    tags: ["Docker", "Kubernetes", "Containerization"],
    github: "https://github.com/Ahtesham-Shah999/Docker_Kubernets",
    live: null,
    category: "DevOps & QA",
  },
  {
    name: "Arabic Text Editor",
    description: "Built Java desktop app using three-layered architecture with Abstract Factory and DAO patterns; 85%+ JUnit coverage across all service and repository layer.",
    tags: ["Java", "Spring Boot", "JUnit", "Abstract Factory"],
    github: "https://github.com/Ahtesham-Shah999",
    live: null,
    category: "Full-Stack & Web",
  },
  {
    name: "Smart BizTrack",
    description: "A comprehensive grocery management platform built for a leading retail company, featuring a modern user interface, robust admin dashboard, and advanced analytics.",
    tags: ["React", "Node.js", "MongoDB"],
    github: null,
    live: null,
    youtube: "https://www.youtube.com/watch?v=sJDBQm9qDvE",
    category: "Full-Stack & Web",
  },
  {
    name: "DevOverflow",
    description: "A comprehensive development platform similar to GitHub, enabling developers to share code, collaborate on projects, manage version control, and explore networking.",
    tags: ["Next.js", "MongoDB", "Tailwind"],
    github: null,
    live: null,
    youtube: "https://www.youtube.com/watch?v=GfW-Pi1COQE",
    category: "Full-Stack & Web",
  },
  {
    name: "Le Château AI Chatbot",
    description: "An intelligent AI-powered chatbot designed to enhance the customer dining experience with seamless communication, instant bookings, and personalized recommendations.",
    tags: ["RAG", "Python", "LangChain"],
    github: null,
    live: null,
    youtube: "https://www.youtube.com/watch?v=crajkEpGJrw",
    category: "AI & Machine Learning",
  }
];

// Project categories for filter tabs
const projectCategories = ["All", "Full-Stack & Web", "AI & Machine Learning", "DevOps & QA"];

export {
  services,
  technologies,
  aboutTechStacks,
  experiences,
  testimonials,
  featuredProjects,
  otherProjects,
  projectCategories,
};
