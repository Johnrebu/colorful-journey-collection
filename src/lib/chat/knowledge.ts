// Portfolio knowledge base - dynamically imported for performance
export const portfolioData = {
  profile: {
    name: "Johnson",
    from: "Pudukkottai",
    base: "Chennai (Tambaram)",
    role: "Full-Stack Developer",
  },

  experience: {
    teaching: "9+ years teaching chemistry",
    transition: "2024 career transition to IT",
    course: "9-month Python full-stack program at Greens Technology",
    internship: "8-month internship at OOR Cabs (React + WordPress + AI tools)",
  },

  education: [
    "B.Sc (H.H. The Rajah's College, Pudukkottai)",
    "M.Sc (Bishop Heber College, Trichy)",
    "B.Ed (Mother Teresa College of Education, Illuppur)",
    "DCA, Tally, DTP, PGDCA",
  ],

  skills: {
    technical: ["React", "TypeScript", "Tailwind CSS", "Python", "Django", "SQL", "WordPress", "AI-assisted workflows"],
    soft: ["Communication", "Problem-solving", "Adaptability", "Team collaboration"],
  },

  projects: [
    {
      name: "Money Pechu Events",
      stack: ["React", "TypeScript", "Tailwind CSS"],
      description: "Live event management and ticketing web platform",
      url: "https://moneypechuevents.netlify.app/",
      github: "https://github.com/Johnrebu/event-companion",
      keywords: ["moneypechu", "events", "ticketing", "live"],
    },
    {
      name: "Rebekha Caterers",
      stack: ["Full-Stack", "React", "Custom UI"],
      description: "Full catering business website with menu showcases and booking workflows",
      url: "https://rebekhacaterers.online/",
      github: "https://github.com/Johnrebu/rebekha-catering-website",
      keywords: ["rebekha", "caterers", "catering", "live"],
    },
    {
      name: "Tiffin Coffee Range CRM",
      stack: ["Full-Stack", "Python", "React"],
      description: "Enterprise CRM & management portal for Tiffin Coffee Range",
      url: "https://crm.tiffincoffeerange.com/",
      github: "https://github.com/Johnrebu/lead-hub",
      keywords: ["crm", "tiffin coffee", "enterprise", "dashboard"],
    },
    {
      name: "Dalphina Academy",
      stack: ["React", "TypeScript", "Tailwind CSS"],
      description: "Educational academy portal presenting curriculums and student enrollment pathways",
      url: "https://dalphinaacademy.netlify.app/",
      github: "https://github.com/Johnrebu/iragu-foundation-support",
      keywords: ["dalphina", "academy", "education", "courses"],
    },
    {
      name: "Tiffin Coffee Range Main Site",
      stack: ["Full-Stack", "Commercial Web"],
      description: "Official commercial website for Tiffin Coffee Range brand showcasing outlets and menus",
      url: "https://tiffincoffeerange.com/",
      github: "https://github.com/Johnrebu/TiffinCoffeeRange",
      keywords: ["tiffin coffee", "commercial", "brand"],
    },
    {
      name: "React Colorful Weather Widget",
      stack: ["React", "TypeScript", "Tailwind CSS", "OpenWeatherMap API"],
      description: "Dynamic weather widget with colorful UI",
      keywords: ["weather", "widget", "openweather"],
    },
    {
      name: "Employee Directory Application",
      stack: ["React", "TypeScript", "Tailwind CSS", "useMemo"],
      description: "Optimized employee management system",
      keywords: ["employee", "directory", "management"],
    },
    {
      name: "E-commerce Website",
      stack: ["React", "React Router", "Context API", "MongoDB"],
      description: "Full-featured online store",
      keywords: ["ecommerce", "e-commerce", "shop", "store", "mern"],
    },
  ],

  availability: {
    status: "Open to full-time and freelance opportunities",
    response_time: "24-48 hours",
    location_preference: "Chennai or remote",
  },

  interests: {
    hobbies: ["Cricket", "Reading"],
    goals: "Long-term research and innovation in computer science",
  },
};

export const routePrompts = {
  "/bio": [
    "How did you transition from teaching to IT?",
    "What's your education background?",
    "Where are you based?",
    "What are your hobbies and goals?",
    "Give me career advice for switching domains",
  ],
  "/projects": [
    "Show me your Weather Widget",
    "Tell me about the Employee Directory",
    "What stack did you use for E-commerce?",
    "Share your project links",
    "How should I present projects in interviews?",
  ],
  "/resume": [
    "Can I download your resume?",
    "What are your key skills?",
    "Summarize your experience",
    "Tell me about your internship",
    "How do I prepare for frontend interviews?",
  ],
  "/contact": [
    "Are you available for freelance?",
    "What's the best way to reach you?",
    "What are your rates?",
    "How quickly do you respond?",
    "How should I write a good outreach message?",
  ],
  default: [
    "What are your skills?",
    "Tell me about your projects",
    "How did you switch to IT?",
    "Where are you from?",
    "Create a 30-day learning roadmap",
    "How do I stay consistent while learning?",
  ],
};

export const getSuggestedPrompts = (pathname: string): string[] => {
  return routePrompts[pathname as keyof typeof routePrompts] || routePrompts.default;
};
