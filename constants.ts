
import { ExperienceItem, ProjectItem, SkillCategory, EducationItem, ServiceItem } from './types';

export const SOCIAL_LINKS = {
  email: "dhanushag30@gmail.com",
  phone: "9482364263",
  location: "Bangalore, India",
  linkedin: "#", 
  github: "https://github.com/dhanushag17" 
};

export const SUMMARY = "I am a passionate WordPress Developer with 3+ years of experience crafting high-performance websites. I specialize in building pixel-perfect, SEO-optimized digital experiences that merge technical precision with creative design to help businesses stand out online.";

export const SERVICES: ServiceItem[] = [
  {
    title: "Custom WP Development",
    description: "Tailor-made WordPress themes and plugins built from scratch to match your unique brand identity and business goals.",
    icon: "Layout"
  },
  {
    title: "E-Commerce Solutions",
    description: "Robust WooCommerce stores with secure payment gateways, inventory management, and optimized checkout flows.",
    icon: "ShoppingCart"
  },
  {
    title: "Speed Optimization",
    description: "Boosting website performance to achieve 90+ Google PageSpeed scores, ensuring fast loading times and better SEO rankings.",
    icon: "Zap"
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing security updates, backups, and troubleshooting to keep your digital presence secure and running smoothly.",
    icon: "ShieldCheck"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Core Development",
    skills: ["WordPress", "Framer", "PHP", "HTML5", "CSS3", "JavaScript", "Python", "Dart", "FlutterFlow"]
  },
  {
    category: "Tools & Optimization",
    skills: ["Elementor Pro", "WooCommerce", "Yoast SEO", "Google Analytics", "Android Studio"]
  },
  {
    category: "Professional Skills",
    skills: ["Agile Methodology", "Client Communication", "Technical Troubleshooting", "Project Management", "UI/UX Principles"]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Strategixhub",
    role: "Web Developer",
    period: "Feb 2024 - Present",
    location: "Bangalore",
    tags: ["WordPress", "Elementor Pro", "SEO", "UI/UX", "Performance"],
    points: [
      "Developed pixel-perfect custom WordPress websites for diverse clients, ensuring strict adherence to modern design specifications.",
      "Engineered high-performance sites achieving 90+ Google PageSpeed scores via advanced caching, image optimization, and code minification.",
      "Boosted user engagement and reduced bounce rates by implementing responsive, mobile-first UI/UX architectures.",
      "Collaborated closely with stakeholders to translate business requirements into tailored technical solutions, securing high client satisfaction."
    ]
  },
  {
    company: "Manipal Hospitals",
    role: "Application Support Engineer",
    period: "June 2021 - August 2022",
    location: "Bangalore, India",
    tags: ["Healthcare IT", "SQL", "UAT Testing", "Incident Management", "Agile"],
    points: [
      "Delivered L2 support for 'Doxper', a critical digital pen & paper solution, ensuring seamless clinical operations across the hospital network.",
      "Diagnosed and resolved complex SQL-based data incidents, reducing ticket resolution time by approximately 40%.",
      "Executed comprehensive User Acceptance Testing (UAT) for new application releases, preventing critical bugs from reaching production.",
      "Coordinated cross-functional workflows between developers and product managers to ensure system stability and data integrity."
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Corporate & Portfolio Websites",
    description: "A collection of high-converting websites developed for diverse freelance clients, focusing on brand storytelling and lead generation.",
    tags: ["WordPress", "Custom Theme", "SEO", "Responsive"],
    features: [
      "Custom Elementor Widgets",
      "SEO-friendly Schema Markup",
      "Mobile-First Responsive Design",
      "Contact Form Integrations"
    ],
    links: [
      "https://shrishiradisaioldagehome.org/",
      "https://coachsabu.com/",
      "https://lanailbeaute.com/",
      "https://thedesignzones.com/",
      "https://avyaanmontessori.in/",
      "https://smsfss.com/"
    ]
  },
  {
    title: "Cross-Platform Mobile App",
    description: "An innovative mobile application built using FlutterFlow and Dart, designed to bridge the gap between complex functionality and intuitive user interface.",
    tags: ["FlutterFlow", "Dart", "Android Studio", "UX Design"],
    features: [
      "Real-time Data Synchronization",
      "Custom Dart Actions",
      "Push Notifications",
      "Adaptive Layouts"
    ],
    links: []
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelors in Information Science",
    institution: "Srinivas Institute of Technology (VTU)",
    period: "2016 - 2020",
    coursework: [] 
  }
];
