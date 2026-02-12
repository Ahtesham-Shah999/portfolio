
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
  smart_biztrack,
  thekadar,
  devoverflow,
  restaurant_chatbot,
  crypto_wallet,
  zevenz_builder,
  restaurant_support,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact Me",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "AI Engineer",
    icon: ai,
  },
  {
    title: "Java Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Tekisky",
    icon: tekisky,
    iconBg: "#383E56",
    date: "August 2024 - Present",
    points: [
      "Developing and maintaining web applications using MERN technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "AI Engineer",
    company_name: "Zevenz",
    icon: ai,
    iconBg: "#E6DEDD",
    date: "June 2025 - Present",
    points: [
      "Specializing in RAG (Retrieval-Augmented Generation) to build context-aware AI systems.",
      "Developing intelligent AI Chatbots for automated customer support and interaction.",
      "Implementing custom LLM solutions to solve complex business problems.",
      "Integrating generative AI technologies into existing web platforms.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Zevenz transformed our operations. The interface is intuitive, and the real-time tracking has cut our manual work in half. Exceptional quality and support!",
    name: "Sussan",
    designation: "General Manager (Fiverr Client)",
    company: "Al-Madina Supermarket",
    image: firstTestimonial,
  },
  {
    testimonial:
      "Thekadar helped our team stay organized and on track. It simplified wage calculations and made project tracking super easy.",
    name: "Alex_worki",
    designation: "Founder (Fiverr Client)",
    company: "Builder Base Pvt Ltd",
    image: secondTestimonial,
  },
  {
    testimonial:
      "DevOverflow has become our go-to platform for managing projects and finding talent. It's everything a modern development team needs in one place.",
    name: "Sarah Martinez",
    designation: "CTO (Fiverr Client)",
    company: "TechVentures Inc.",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Smart BizTrack",
    description:
      "A comprehensive grocery management platform built for a leading retail company, featuring a modern user interface, robust admin dashboard, and advanced analytics.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: smart_biztrack,
    source_code_link: "https://www.youtube.com/watch?v=sJDBQm9qDvE",
  },
  {
    name: "Restaurant Chatbot Support",
    description:
      "n intelligent customer support chatbot designed for restaurants, utilizing Retrieval-Augmented Generation (RAG) to provide accurate answers about menus, ingredients, reservations, and timings.",
    tags: [
      {
        name: "Next-JS",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "N8N",
        color: "pink-text-gradient",
      },
    ],
    image: smart_biztrack,
    source_code_link: "https://www.youtube.com/watch?v=sJDBQm9qDvE",
  },
  {
    name: "Zevenz Builders",
    description:
      "A builder matchmaking platform where clients can easily find and connect with verified Thekedars (contractors) to build their homes. It simplifies project management.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Construction",
        color: "pink-text-gradient",
      },
    ],
    image: thekadar,
    source_code_link: "https://www.youtube.com/watch?v=O0vF6-EPRqQ",
  },
  {
    name: "DevOverflow",
    description:
      "A comprehensive development platform similar to GitHub, enabling developers to share code, collaborate on projects, manage version control, and explore networking.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: devoverflow,
    source_code_link: "https://www.youtube.com/watch?v=GfW-Pi1COQE",
  },
  {
    name: "Le Château AI Chatbot",
    description:
      "An intelligent AI-powered chatbot designed to enhance the customer dining experience with seamless communication, instant bookings, and personalized recommendations.",
    tags: [
      {
        name: "RAG",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "LangChain",
        color: "pink-text-gradient",
      },
    ],
    image: restaurant_chatbot,
    source_code_link: "https://www.youtube.com/watch?v=crajkEpGJrw",
  },
  {
    name: "Decentralized Wallet",
    description:
      "A fully functional decentralized cryptocurrency wallet featuring a custom blockchain, PoW mining, Zakat deduction system, and UTXO-based transactions.",
    tags: [
      {
        name: "Rust",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Blockchain",
        color: "pink-text-gradient",
      },
    ],
    image: crypto_wallet,
    source_code_link: "https://www.youtube.com/watch?v=iFlqo0wJeJk",
  },
  {
    name: "Restaurant Chatbot Support",
    description:
      "An intelligent customer support chatbot designed for restaurants, utilizing Retrieval-Augmented Generation (RAG) to provide accurate answers about menus, ingredients, reservations, and timings.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "N8N",
        color: "pink-text-gradient",
      },
    ],
    image: restaurant_support,
    source_code_link: "https://www.youtube.com/watch?v=sJDBQm9qDvE",
  },
  {
    name: "Zevenz Builders",
    description:
      "A builder matchmaking platform where clients can easily find and connect with verified Thekedars (contractors) to build their homes. It simplifies project management.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: zevenz_builder,
    source_code_link: "https://www.youtube.com/watch?v=O0vF6-EPRqQ",
  },
];

export { services, technologies, experiences, testimonials, projects };
