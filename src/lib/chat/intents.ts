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
    keywords: ["your name", "who are you", "introduce yourself", "about you", "tell me about yourself", "about johnson", "who is johnson", "introduction", "self introduction", "describe yourself", "tell about you", "know about you", "brief about you", "about him", "who is he", "tell me about johnson"],
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
    routeBoost: ["/contact", "/services"],
  },
  {
    id: "services_overview",
    keywords: ["services", "service", "packages", "pricing", "pricing list", "cost", "investment", "rates", "offerings", "how much", "tier"],
    routeBoost: ["/services"],
  },
  {
    id: "web_packages",
    keywords: ["website cost", "web package", "landing site", "landing page", "business website", "cms", "blog", "e-commerce", "ecommerce", "web app", "portal", "website price"],
    routeBoost: ["/services"],
  },
  {
    id: "mobile_packages",
    keywords: ["mobile app", "app development", "android app", "ios app", "mobile package", "app cost", "application cost", "mobile pricing"],
    routeBoost: ["/services"],
  },
  {
    id: "hourly_custom_rates",
    keywords: ["hourly rate", "hourly consulting", "daily sprint", "day rate", "per hour", "consulting rate", "sprint cost"],
    routeBoost: ["/services"],
  },
  {
    id: "fixed_inclusions",
    keywords: ["included", "inclusions", "revisions", "bug support", "source code", "guarantee", "what is included", "free support"],
    routeBoost: ["/services"],
  },
  {
    id: "scope_exclusions",
    keywords: ["exclusions", "hosting fee", "domain registration", "extra charges", "hidden costs", "api credits", "3rd party cost"],
    routeBoost: ["/services"],
  },
  {
    id: "custom_quote_whatsapp",
    keywords: ["custom quote", "get quote", "whatsapp", "discuss project", "book call", "quote"],
    routeBoost: ["/services", "/contact"],
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
      return `\u{1F44B} Meet Johnson T \u2014 Full-Stack Developer & AI Specialist based in Chennai!

\u{1F3E0} Originally from Pudukkottai, Tamil Nadu, Johnson is currently based in Chennai (Tambaram).

\u{1F393} Education:
\u2022 B.Sc. (Chemistry) \u2014 H.H. The Rajah\u2019s College, Pudukkottai (2009\u20132012)
\u2022 M.Sc. (Chemistry) \u2014 Bishop Heber College, Trichy (2012\u20132014)
\u2022 B.Ed. \u2014 Mother Teresa College of Education, Illuppur (2014\u20132015)
\u2022 Additional: DCA, Tally, DTP, PGDCA

\u{1F468}\u200D\u{1F3EB} Teaching Career (9+ Years):
Johnson taught Chemistry & Science across classes VI to XII at Infant Jesus Mat. Hr. Sec. School, Good Shepherd Mat. Hr. Sec. School, and Mount Zion Mat. Hr. Sec. School in Chennai & Pudukkottai. He earned \u201CTeacher of the Year\u201D honors in 2019 and organized successful science fairs.

\u{1F4A1} Career Transition:
During the COVID-19 lockdown, while conducting online classes, Johnson became curious about how software and websites worked. This sparked a journey \u2014 he completed DCA, Tally, DTP, and PGDCA certifications, then in 2024, resigned from teaching and enrolled in a 9-month Python Full-Stack Developer course at Greens Technology. He then worked as an intern at OOR Cabs for 8 months, gaining hands-on experience with React, WordPress, and AI tools.

\u{1F3E2} Current Role \u2014 Aionion Capital (2026 \u2013 Present):
Johnson serves as a Full Stack Developer & AI/Digital Ops Specialist operating across 4 key pillars:

\u26A1 Pillar 1: Full-Stack Engineering & System Automation
\u2022 Sub-300ms API response times | \u2265 99.5% system uptime
\u2022 100% CRM sync accuracy | \u2265 80% test coverage

\u{1F3A5} Pillar 2: AI Video Creation & Digital Content Strategy
\u2022 4+ AI educational videos/month | \u2265 40% watch time
\u2022 +10% MoM subscriber growth across YouTube channels

\u{1F3A8} Pillar 3: Graphic Design & Creative Branding
\u2022 100% on-time campaign delivery (5 days ahead)
\u2022 Reusable brand templates & promotional assets

\u{1F4E1} Pillar 4: Event Coordination & Digital Operations
\u2022 \u2265 99% AV & live-streaming uptime
\u2022 2-hour pre-event dry-runs | \u2265 95% escalation-free delivery

\u{1F6E0}\uFE0F Technical Skills: React, TypeScript, Tailwind CSS, Python, Django, SQL, JavaScript, HTML, CSS, WordPress, AI Video Production, Graphic Design, Event AV Ops, System Automation

\u{1F680} Live Projects:
\u2022 Money Pechu Events \u2014 Live event management & ticketing platform
\u2022 Rebekha Caterers \u2014 Full catering business website
\u2022 Tiffin Coffee Range CRM \u2014 Enterprise CRM & management portal
\u2022 Dalphina Academy \u2014 Educational academy portal
\u2022 Tiffin Coffee Range Main Site \u2014 Official commercial website
\u2022 React Colorful Weather Widget, Employee Directory App, E-commerce Website (MERN)

\u{1F4DC} Certifications: Full Stack Developer, Python Using AI Workshop, AI Tools & ChatGPT Workshop, React E-Commerce Masterclass

\u{1F3AC} YouTube Channels: @aionionofficial, @jenishajeni-l9i, @johnElonSon

\u{1F3CF} Hobbies: Cricket, Reading, AI Content Creation
\u{1F3AF} Goal: Long-term research & innovation in computer science, system automation, and AI media

\u{1F4E7} Contact: johnchemist91@gmail.com
\u{1F4F1} WhatsApp: https://wa.me/918754774022
\u{1F517} GitHub: github.com/Johnrebu | LinkedIn: linkedin.com/in/johnsonelon

Feel free to ask me anything specific about Johnson\u2019s projects, skills, services, or experience!`;
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
    case "services_overview":
      return `Johnson offers transparent development packages & consulting rates:
      
1. Web Development (₹12k - ₹5L+)
2. Mobile App Development (₹50k - ₹10L+)
3. Hourly Consulting (₹800 - ₹2,000/hr) & Daily Sprints (₹3,500 - ₹8,000/day)

All fixed projects include responsive UI, 2 revision rounds, 1 month bug support & full source code handover.
You can get a custom quote directly on WhatsApp: https://wa.me/918754774022`;

    case "web_packages":
      return `Website Development Tiers:
• Basic Landing Site: ₹12,000 – ₹25,000 (1-2 Weeks) | 5 Pages, Responsive UI, Contact Form, Basic SEO.
• Business + CMS / Blog: ₹25,000 – ₹60,000 (2-4 Weeks) | 10 Pages, Blog Engine, Admin CMS, On-Page SEO.
• E-Commerce Website: ₹60,000 – ₹2,00,000+ (4-6 Weeks) | Product Catalog, Cart/Checkout, Payment Gateway, Dashboard.
• Custom Web App / Portal: ₹80,000 – ₹5,00,000+ (6-12 Weeks) | Auth, Role Dashboards, Custom Workflows, APIs.

Get a custom estimate on WhatsApp: https://wa.me/918754774022`;

    case "mobile_packages":
      return `Mobile App Packages:
• Basic Application: ₹50,000 – ₹1,20,000 (3-4 Weeks) | 4-5 Screens, Clean UI, Form Inputs.
• Standard Application: ₹1,50,000 – ₹4,00,000 (6-8 Weeks) | User Auth, Payment Gateway, Admin Panel, Custom APIs.
• Complex Enterprise App: ₹4,00,000 – ₹10,00,000+ (10-16 Weeks) | Real-time Features, Booking System, Full E-Commerce, Custom Backend.

Discuss your app idea on WhatsApp: https://wa.me/918754774022`;

    case "hourly_custom_rates":
      return `Hourly & Sprint Engagement Models:
• Hourly Technical Consulting: ₹800 – ₹2,000 / hr (Ideal for bug fixes, code reviews, small features & architecture consultation).
• Dedicated Daily Sprint: ₹3,500 – ₹8,000 / day - 8 Hours (Ideal for rapid prototyping, high-intensity feature delivery & refactoring).

Book a session on WhatsApp: https://wa.me/918754774022`;

    case "fixed_inclusions":
      return `Standard Inclusions in all fixed projects:
✅ Fully Responsive Design across all devices
✅ 2 Rounds of Revisions
✅ 1 Month Free Post-Launch Bug Support
✅ Full Source Code & IP Handover

Need a custom scope? Connect on WhatsApp: https://wa.me/918754774022`;

    case "scope_exclusions":
      return `Project Exclusions & Third-Party Costs:
⚠️ Hosting & Domain Registration fees (paid direct to host provider)
⚠️ Paid 3rd-Party API credits (e.g. OpenAI, Twilio, Google Maps)

All project deliverables inside scope are 100% transparent with no hidden charges!`;

    case "custom_quote_whatsapp":
      return `For a custom quote or scope discussion, connect directly with Johnson:
📱 WhatsApp: https://wa.me/918754774022
📞 Phone: +91 875-477-4022
📧 Email: johnchemist91@gmail.com`;

    case "availability_hiring":
      return `${data.availability.status}. Preferred location: ${data.availability.location_preference}. Typical response window: ${data.availability.response_time}. You can also review services & packages on the Services page!`;
    case "resume_download":
      return "You can view and download the latest resume on the Resume page.";
    case "contact_methods":
      return `Best way to reach Johnson is via the Contact page form or direct on WhatsApp (https://wa.me/918754774022). Typical response time is ${data.availability.response_time}.`;
    case "hobbies_goals":
      return `Outside work, Johnson enjoys ${data.interests.hobbies.join(" and ")}. Long-term goal: ${data.interests.goals}.`;
    case "learning_plan":
    case "interview_prep":
    case "career_advice":
    case "productivity":
    case "communication":
      return adviceForIntent(effectiveIntent);
    default:
      if (pathname === "/services") {
        return "I can answer any questions about Johnson's Web Development, Mobile App, or Hourly Consulting packages, pricing, deliverables, and timelines. What would you like to know?";
      }
      if (pathname === "/projects") {
        return "I can break down Johnson's projects by problem, tech stack, and outcome. Ask about Weather Widget, Employee Directory, or Ecommerce.";
      }
      if (pathname === "/resume") {
        return "I can summarize Johnson's resume quickly: skills, transition story, internship, and strengths. Tell me which section you want.";
      }
      if (pathname === "/contact") {
        return `If you want to work with Johnson, use the contact form or WhatsApp (https://wa.me/918754774022). He is ${data.availability.status.toLowerCase()} and usually replies within ${data.availability.response_time}.`;
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
