import { portfolioData } from './knowledge';

interface Intent {
  id: string;
  keywords: string[];
  routeBoost?: string[]; // Routes where this intent should be prioritized
}

const intents: Intent[] = [
  {
    id: 'greeting',
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good evening', 'namaste']
  },
  {
    id: 'name_identity',
    keywords: ['your name', 'who are you', 'introduce yourself', 'about you']
  },
  {
    id: 'location',
    keywords: ['where', 'based', 'from', 'location', 'city', 'place', 'live']
  },
  {
    id: 'experience_transition',
    keywords: ['experience', 'background', 'teaching', 'transition', 'changed', 'switch', 'career', 'journey'],
    routeBoost: ['/bio', '/resume']
  },
  {
    id: 'education',
    keywords: ['education', 'degree', 'college', 'b.sc', 'm.sc', 'b.ed', 'pgdca', 'dca', 'tally', 'dtp', 'study'],
    routeBoost: ['/bio', '/resume']
  },
  {
    id: 'skills_stack',
    keywords: ['skills', 'stack', 'tech', 'technologies', 'tools', 'programming', 'languages'],
    routeBoost: ['/resume']
  },
  {
    id: 'projects_overview',
    keywords: ['projects', 'work', 'portfolio', 'built', 'developed', 'created'],
    routeBoost: ['/projects']
  },
  {
    id: 'project_weather',
    keywords: ['weather', 'openweather', 'widget', 'colorful'],
    routeBoost: ['/projects']
  },
  {
    id: 'project_employee',
    keywords: ['employee', 'directory', 'management', 'usememo'],
    routeBoost: ['/projects']
  },
  {
    id: 'project_ecommerce',
    keywords: ['ecommerce', 'e-commerce', 'shop', 'store', 'mern', 'mongodb'],
    routeBoost: ['/projects']
  },
  {
    id: 'internship',
    keywords: ['intern', 'oor cabs', 'wordpress', 'react', 'ai tools', 'internship'],
    routeBoost: ['/bio', '/resume']
  },
  {
    id: 'availability_hiring',
    keywords: ['available', 'hire', 'rates', 'freelance', 'full-time', 'job', 'work', 'opportunity'],
    routeBoost: ['/contact']
  },
  {
    id: 'resume_download',
    keywords: ['resume', 'cv', 'download', 'pdf'],
    routeBoost: ['/resume']
  },
  {
    id: 'contact_methods',
    keywords: ['contact', 'reach', 'email', 'message', 'get in touch', 'communicate'],
    routeBoost: ['/contact']
  },
  {
    id: 'hobbies_goals',
    keywords: ['hobbies', 'interests', 'goals', 'future', 'cricket', 'reading', 'research'],
    routeBoost: ['/bio']
  }
];

export const matchIntent = (message: string, pathname: string): string | null => {
  const lowerMessage = message.toLowerCase();
  let bestIntent: string | null = null;
  let bestScore = 0;

  for (const intent of intents) {
    let score = 0;
    
    // Count keyword matches
    for (const keyword of intent.keywords) {
      if (lowerMessage.includes(keyword)) {
        score += 1;
      }
    }
    
    // Route boost for relevant intents
    if (intent.routeBoost && intent.routeBoost.includes(pathname)) {
      score += 0.5;
    }
    
    if (score > bestScore) {
      bestScore = score;
      bestIntent = intent.id;
    }
  }
  
  // Minimum threshold to avoid false positives
  return bestScore >= 1 ? bestIntent : null;
};

export const answerForIntent = (intentId: string, pathname: string): string => {
  const data = portfolioData;
  
  switch (intentId) {
    case 'greeting':
      return `Hello! I'm Johnson, a Chennai-based full‑stack developer. How can I help you learn more about my background and work?`;
    
    case 'name_identity':
      return `I'm Johnson, a Chennai-based full‑stack developer with a strong foundation from 9+ years of teaching chemistry.`;
    
    case 'location':
      return `I'm from ${data.profile.from} and currently based in ${data.profile.base}.`;
    
    case 'experience_transition':
      return `I taught chemistry for 9+ years. In 2024, I completed a ${data.experience.course} and interned for 8 months at OOR Cabs as a React/WordPress developer using AI tools.`;
    
    case 'education':
      return `My education: ${data.education.join(', ')}.`;
    
    case 'skills_stack':
      return `Core technical skills: ${data.skills.technical.join(', ')}. Soft skills: ${data.skills.soft.join(', ')}.`;
    
    case 'projects_overview':
      return `I've built ${data.projects.length} main projects: ${data.projects.map(p => p.name).join(', ')}. Want to know more about any specific project?`;
    
    case 'project_weather':
      const weatherProject = data.projects.find(p => p.keywords.includes('weather'));
      return `${weatherProject?.name}: ${weatherProject?.description} built with ${weatherProject?.stack.join(', ')}.`;
    
    case 'project_employee':
      const employeeProject = data.projects.find(p => p.keywords.includes('employee'));
      return `${employeeProject?.name}: ${employeeProject?.description} built with ${employeeProject?.stack.join(', ')}.`;
    
    case 'project_ecommerce':
      const ecomProject = data.projects.find(p => p.keywords.includes('ecommerce'));
      return `${ecomProject?.name}: ${ecomProject?.description} built with ${ecomProject?.stack.join(', ')}.`;
    
    case 'internship':
      return `I interned at OOR Cabs for 8 months focusing on React and WordPress development, and applied AI tools in workflows.`;
    
    case 'availability_hiring':
      return `${data.availability.status}. Timelines depend on project scope—feel free to share details on the contact page.`;
    
    case 'resume_download':
      return `You can view and download my resume on the Resume page with my complete experience and skills breakdown.`;
    
    case 'contact_methods':
      return `Best way: use the contact form. I typically respond within ${data.availability.response_time}.`;
    
    case 'hobbies_goals':
      return `I enjoy ${data.interests.hobbies.join(' and ')}. ${data.interests.goals}.`;
    
    default:
      return `I can help with my background, skills, projects, education, experience, availability, or how to contact me. Try asking: "How did you transition from teaching to IT?"`;
  }
};