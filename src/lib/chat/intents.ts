import { portfolioData } from "./knowledge";

interface Intent {
  id: string;
  keywords: string[];
  routeBoost?: string[];
}

interface ChatContext {
  previousIntent?: string | null;
}

interface ChatReply {
  intent: string;
  response: string;
}

const intents: Intent[] = [
  {
    id: "greeting",
    keywords: ["hello", "hi", "hey", "good morning", "good evening", "namaste"],
  },
  {
    id: "name_identity",
    keywords: ["your name", "who are you", "introduce yourself", "about you"],
  },
  {
    id: "location",
    keywords: ["where", "based", "from", "location", "city", "place", "live"],
  },
  {
    id: "experience_transition",
    keywords: ["experience", "background", "teaching", "transition", "changed", "switch", "career", "journey"],
    routeBoost: ["/bio", "/resume"],
  },
  {
    id: "education",
    keywords: ["education", "degree", "college", "b.sc", "m.sc", "b.ed", "pgdca", "dca", "tally", "dtp", "study"],
    routeBoost: ["/bio", "/resume"],
  },
  {
    id: "skills_stack",
    keywords: ["skills", "stack", "tech", "technologies", "tools", "programming", "languages"],
    routeBoost: ["/resume"],
  },
  {
    id: "projects_overview",
    keywords: ["projects", "work", "portfolio", "built", "developed", "created", "case study"],
    routeBoost: ["/projects"],
  },
  {
    id: "project_weather",
    keywords: ["weather", "openweather", "widget", "colorful"],
    routeBoost: ["/projects"],
  },
  {
    id: "project_employee",
    keywords: ["employee", "directory", "management", "usememo"],
    routeBoost: ["/projects"],
  },
  {
    id: "project_ecommerce",
    keywords: ["ecommerce", "e-commerce", "shop", "store", "mern", "mongodb"],
    routeBoost: ["/projects"],
  },
  {
    id: "internship",
    keywords: ["intern", "oor cabs", "wordpress", "react", "ai tools", "internship"],
    routeBoost: ["/bio", "/resume"],
  },
  {
    id: "availability_hiring",
    keywords: ["available", "hire", "rates", "freelance", "full-time", "job", "work", "opportunity"],
    routeBoost: ["/contact"],
  },
  {
    id: "resume_download",
    keywords: ["resume", "cv", "download", "pdf"],
    routeBoost: ["/resume"],
  },
  {
    id: "contact_methods",
    keywords: ["contact", "reach", "email", "message", "get in touch", "communicate"],
    routeBoost: ["/contact"],
  },
  {
    id: "hobbies_goals",
    keywords: ["hobbies", "interests", "goals", "future", "cricket", "reading", "research"],
    routeBoost: ["/bio"],
  },
  {
    id: "learning_plan",
    keywords: ["learn", "roadmap", "beginner", "start coding", "study plan", "how to learn"],
  },
  {
    id: "interview_prep",
    keywords: ["interview", "dsa", "system design", "frontend interview", "behavioral", "mock interview"],
  },
  {
    id: "career_advice",
    keywords: ["career", "growth", "switch", "promotion", "next step", "job search"],
  },
  {
    id: "productivity",
    keywords: ["focus", "productivity", "discipline", "consistency", "time management", "burnout"],
  },
  {
    id: "communication",
    keywords: ["communication", "explain", "present", "stakeholder", "feedback", "team conflict"],
  },
];

const followUpPhrases = [
  "tell me more",
  "more details",
  "expand",
  "explain more",
  "how exactly",
  "what next",
  "then what",
  "next step",
];

const highRiskTopics = {
  medical: ["diagnose", "medical", "medicine", "drug", "treatment", "symptom"],
  legal: ["legal", "law", "sue", "contract", "court", "illegal"],
  financial: ["invest", "stock pick", "crypto", "loan", "tax", "financial advice"],
};

const harmfulTopics = ["suicide", "kill", "harm someone", "make bomb", "hack account", "steal password"];

const normalize = (input: string): string =>
  input
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const containsAny = (text: string, keywords: string[]): boolean =>
  keywords.some((keyword) => text.includes(keyword));

const scoreIntent = (intent: Intent, normalizedMessage: string, pathname: string): number => {
  let score = 0;

  for (const keyword of intent.keywords) {
    if (normalizedMessage.includes(keyword)) {
      score += keyword.includes(" ") ? 2 : 1;
    }
  }

  if (intent.routeBoost?.includes(pathname)) {
    score += 0.5;
  }

  return score;
};

const isFollowUp = (normalizedMessage: string): boolean => containsAny(normalizedMessage, followUpPhrases);

const adviceForIntent = (intentId: string): string => {
  switch (intentId) {
    case "learning_plan":
      return "A simple plan: 1) Pick one track (frontend with React + TypeScript). 2) Learn fundamentals (HTML, CSS, JS) for 2-3 weeks. 3) Build 3 projects with increasing complexity. 4) Publish code + write short case studies. 5) Practice interviews weekly. I can also give you a 30-day roadmap if you share your current level.";
    case "interview_prep":
      return "Interview prep that works: 1) 60% role-specific problems (React, state, performance). 2) 20% fundamentals (JS, browser, networking basics). 3) 20% behavioral stories using STAR format. Record answers, tighten weak spots, then run timed mocks.";
    case "career_advice":
      return "Career growth framework: choose a target role, map skill gaps, build proof-of-work projects, and communicate impact clearly. If you tell me your current role and target role, I will suggest the highest-leverage next 3 actions.";
    case "productivity":
      return "For consistent output, use this loop: 1) Pick one high-value task per day. 2) Work in 50-minute deep-focus blocks. 3) End with a short review and tomorrow's first task. This reduces context switching and improves momentum.";
    case "communication":
      return "To communicate wisely in teams: lead with context, state the decision, then give tradeoffs and next steps. In conflict, align on shared goal first, then compare options using objective criteria.";
    default:
      return "Good question. I can help with portfolio topics and also practical advice for learning, interviews, career growth, and productivity. Ask me for a step-by-step plan and I will tailor it.";
  }
};

export const matchIntent = (message: string, pathname: string): string | null => {
  const normalizedMessage = normalize(message);
  let bestIntent: string | null = null;
  let bestScore = 0;

  for (const intent of intents) {
    const score = scoreIntent(intent, normalizedMessage, pathname);
    if (score > bestScore) {
      bestScore = score;
      bestIntent = intent.id;
    }
  }

  return bestScore >= 1 ? bestIntent : null;
};

export const answerForIntent = (
  intentId: string,
  pathname: string,
  originalMessage?: string,
  context?: ChatContext
): string => {
  const data = portfolioData;
  const normalizedMessage = normalize(originalMessage || "");
  const previousIntent = context?.previousIntent || null;

  if (containsAny(normalizedMessage, harmfulTopics)) {
    return "I can't help with harmful or unsafe requests. If this is about safety or wellbeing, please reach out to trusted local support immediately.";
  }

  if (
    containsAny(normalizedMessage, highRiskTopics.medical) ||
    containsAny(normalizedMessage, highRiskTopics.legal) ||
    containsAny(normalizedMessage, highRiskTopics.financial)
  ) {
    return "I can share general guidance, but for medical, legal, or financial decisions you should consult a qualified professional. If you want, I can help you structure the right questions to ask them.";
  }

  const effectiveIntent = intentId === "default" && isFollowUp(normalizedMessage) ? previousIntent || "default" : intentId;

  switch (effectiveIntent) {
    case "greeting":
      return "Hello! I am Johnson's assistant. Ask me about his projects, skills, background, availability, or even career/interview guidance.";
    case "name_identity":
      return "I'm Johnson's portfolio assistant. Johnson is a Chennai-based full-stack developer with a strong background in teaching and clear technical communication.";
    case "location":
      return `Johnson is from ${data.profile.from} and currently based in ${data.profile.base}.`;
    case "experience_transition":
      return `Johnson taught chemistry for 9+ years, then transitioned to IT in 2024 through ${data.experience.course}, followed by an 8-month internship at OOR Cabs.`;
    case "education":
      return `Education summary: ${data.education.join(", ")}.`;
    case "skills_stack":
      return `Core technical skills: ${data.skills.technical.join(", ")}. Soft skills: ${data.skills.soft.join(", ")}.`;
    case "projects_overview":
      return `Main projects include ${data.projects.map((project) => project.name).join(", ")}. If you pick one, I can explain the architecture, stack, and outcomes.`;
    case "project_weather": {
      const project = data.projects.find((item) => item.keywords.includes("weather"));
      return project
        ? `${project.name}: ${project.description}. Stack: ${project.stack.join(", ")}.`
        : "I can share details about the weather project from the Projects page.";
    }
    case "project_employee": {
      const project = data.projects.find((item) => item.keywords.includes("employee"));
      return project
        ? `${project.name}: ${project.description}. Stack: ${project.stack.join(", ")}.`
        : "I can share details about the employee directory project from the Projects page.";
    }
    case "project_ecommerce": {
      const project = data.projects.find((item) => item.keywords.includes("ecommerce"));
      return project
        ? `${project.name}: ${project.description}. Stack: ${project.stack.join(", ")}.`
        : "I can share details about the ecommerce project from the Projects page.";
    }
    case "internship":
      return "Johnson interned at OOR Cabs for 8 months, working on React and WordPress and using AI tools to improve delivery workflows.";
    case "availability_hiring":
      return `${data.availability.status}. Preferred location: ${data.availability.location_preference}. Typical response window: ${data.availability.response_time}.`;
    case "resume_download":
      return "You can view and download the latest resume on the Resume page.";
    case "contact_methods":
      return `Best way to reach Johnson is via the Contact page form. Typical response time is ${data.availability.response_time}.`;
    case "hobbies_goals":
      return `Outside work, Johnson enjoys ${data.interests.hobbies.join(" and ")}. Long-term goal: ${data.interests.goals}.`;
    case "learning_plan":
    case "interview_prep":
    case "career_advice":
    case "productivity":
    case "communication":
      return adviceForIntent(effectiveIntent);
    default:
      if (pathname === "/projects") {
        return "I can break down Johnson's projects by problem, tech stack, and outcome. Ask about Weather Widget, Employee Directory, or Ecommerce.";
      }
      if (pathname === "/resume") {
        return "I can summarize Johnson's resume quickly: skills, transition story, internship, and strengths. Tell me which section you want.";
      }
      if (pathname === "/contact") {
        return `If you want to work with Johnson, use the contact form. He is ${data.availability.status.toLowerCase()} and usually replies within ${data.availability.response_time}.`;
      }
      return adviceForIntent("default");
  }
};

export const generateChatReply = (
  message: string,
  pathname: string,
  context?: ChatContext
): ChatReply => {
  const intent = matchIntent(message, pathname) || "default";
  const response = answerForIntent(intent, pathname, message, context);
  return { intent, response };
};
