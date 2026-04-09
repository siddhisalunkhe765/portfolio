import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Siddhi Salunkhe — Software Developer",
  author: "Siddhi Salunkhe",
  description:
    "Motivated BCA/BSc CS student seeking a software developer internship to apply full-stack skills across Java, Python, and JavaScript. Experienced in building AI-assisted web tools, RESTful APIs, and open-source contributions.",
  lang: "en",
  siteLogo: "/siddhi-avatar.jpg",
  navLinks: [
    { text: "Skills", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Email", href: "mailto:siddhisalunkhe765@gmail.com" },
    { text: "LinkedIn", href: "https://linkedin.com/in/siddhisalunkhe765" },
    { text: "Github", href: "https://github.com/siddhisalunkhe765" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://siddhisalunkhe.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Siddhi Salunkhe",
    specialty: "Software Developer",
    summary:
      "BCA/BSc CS student (graduating 2027) with full-stack skills in Java, Python, and JavaScript. Experienced in building AI-assisted web tools, RESTful APIs, and open-source contributions. Strong foundation in DSA and database design.",
    email: "siddhisalunkhe765@gmail.com",
  },
  experience: [
    {
      company: "Technical Skills",
      position: "Languages & Frameworks",
      startDate: "2024",
      endDate: "Present",
      summary: [
        "Languages: Java, Python, JavaScript (ES6+), SQL, HTML5, CSS3",
        "Frameworks: Flask, Astro, Bootstrap, Jupyter Notebook",
        "Tools & Databases: Git & GitHub, MySQL, VS Code, Postman, REST APIs",
        "Concepts: Data Structures & Algorithms, OOP, DBMS, MVC Architecture, Prompt Engineering",
      ],
    },
    {
      company: "Education",
      position: "BCA / BSc Computer Science",
      startDate: "2024",
      endDate: "2027",
      summary: [
        "Pune University, Pune, Maharashtra",
        "Academic topper / merit scholarship recipient",
        "Active member of college tech/coding club",
      ],
    },
    {
      company: "Certifications",
      position: "Professional Development",
      startDate: "2024",
      endDate: "Present",
      summary: [
        "The Complete Python Bootcamp — Jose Portilla, Udemy",
        "Java Programming Masterclass — Tim Buchalka, Udemy",
        "Web Developer Bootcamp — Colt Steele, Udemy",
        "SQL — MySQL for Data Analytics — 365 Data Science, Udemy",
        "Currently pursuing — DSA in Java",
      ],
    },
  ],
  projects: [
    {
      name: "KrishiMitra",
      summary: "AI-powered agricultural assistant providing crop recommendations, disease detection insights, and weather-based advisory using Python and ML models. Implemented NLP-based query handling and integrated open datasets for soil and climate analysis.",
      linkPreview: "/",
      linkSource: "https://github.com/siddhisalunkhe765/KrishiMitra",
      image: "/krishimitra.jpg",
    },
    {
      name: "Student Result Management System",
      summary: "CRUD-based desktop application in Java with MySQL backend for managing student records, grades, and report generation. Applied JDBC for database connectivity with role-based access (admin/student).",
      linkPreview: "/",
      linkSource: "https://github.com/siddhisalunkhe765",
      image: "/student-result.jpg",
    },
    {
      name: "Expense Tracker API",
      summary: "RESTful backend API for personal expense tracking with endpoints for adding, categorizing, and summarizing transactions. Built with Flask and SQLite, featuring input validation and JSON responses.",
      linkPreview: "/",
      linkSource: "https://github.com/siddhisalunkhe765",
      image: "/expense-tracker.jpg",
    },
  ],
  about: {
    description: `
      Hi, I'm Siddhi Salunkhe, a motivated BCA/BSc CS student from Pune, Maharashtra, graduating in 2027. I'm passionate about building impactful software solutions using Java, Python, and JavaScript.

      I've contributed to open-source projects like KrishiMitra and participated in college hackathons where I built working prototypes under 24 hours. With 52+ GitHub stars across my projects and a strong foundation in DSA and database design, I'm always eager to learn and create innovative solutions. I'm actively seeking software developer internship opportunities to apply and expand my skills.
    `,
    image: "/siddhi-profile.jpg",
  },
};
