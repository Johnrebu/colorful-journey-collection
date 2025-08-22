// Portfolio knowledge base - dynamically imported for performance
export const portfolioData = {
  profile: {
    name: "Johnson",
    from: "Pudukkottai",
    base: "Chennai (Tambaram)",
    role: "Full-Stack Developer"
  },
  
  experience: {
    teaching: "9+ years teaching chemistry",
    transition: "2024 career transition to IT",
    course: "9-month Python full-stack program at Greens Technology",
    internship: "8-month internship at OOR Cabs (React + WordPress + AI tools)"
  },
  
  education: [
    "B.Sc (H.H. The Rajah's College, Pudukkottai)",
    "M.Sc (Bishop Heber College, Trichy)",
    "B.Ed (Mother Teresa College of Education, Illuppur)",
    "DCA, Tally, DTP, PGDCA"
  ],
  
  skills: {
    technical: ["React", "TypeScript", "Tailwind CSS", "Python", "Django", "SQL", "WordPress"],
    soft: ["Communication", "Problem-solving", "Adaptability", "Team collaboration"]
  },
  
  projects: [
    {
      name: "React Colorful Weather Widget",
      stack: ["React", "TypeScript", "Tailwind CSS", "OpenWeatherMap API"],
      description: "Dynamic weather widget with colorful UI",
      keywords: ["weather", "widget", "openweather"]
    },
    {
      name: "Employee Directory Application", 
      stack: ["React", "TypeScript", "Tailwind CSS", "useMemo"],
      description: "Optimized employee management system",
      keywords: ["employee", "directory", "management"]
    },
    {
      name: "E‑commerce Website",
      stack: ["React", "React Router", "Context API", "MongoDB"],
      description: "Full-featured online store",
      keywords: ["ecommerce", "e-commerce", "shop", "store", "mern"]
    }
  ],
  
  availability: {
    status: "Open to full-time and freelance opportunities",
    response_time: "24-48 hours",
    location_preference: "Chennai or remote"
  },
  
  interests: {
    hobbies: ["Cricket", "Reading"],
    goals: "Long-term research and innovation in computer science"
  }
};

export const routePrompts = {
  "/bio": [
    "How did you transition from teaching to IT?",
    "What's your education background?", 
    "Where are you based?",
    "What are your hobbies and goals?"
  ],
  "/projects": [
    "Show me your Weather Widget",
    "Tell me about the Employee Directory",
    "What stack did you use for E‑commerce?",
    "Share your project links"
  ],
  "/resume": [
    "Can I download your resume?",
    "What are your key skills?",
    "Summarize your experience",
    "Tell me about your internship"
  ],
  "/contact": [
    "Are you available for freelance?",
    "What's the best way to reach you?",
    "What are your rates?",
    "How quickly do you respond?"
  ],
  default: [
    "What are your skills?",
    "Tell me about your projects", 
    "How did you switch to IT?",
    "Where are you from?"
  ]
};

export const getSuggestedPrompts = (pathname: string): string[] => {
  return routePrompts[pathname as keyof typeof routePrompts] || routePrompts.default;
};