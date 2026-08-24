/**
 * SEO Meta Tags Manager
 * Dynamically updates document head for better SEO
 */

interface MetaConfig {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonical?: string;
}

const DEFAULT_OG_IMAGE = 'https://colorful-journey-collection.lovable.app/profile-logo.png';
const PUBLISHED_SITE_URL = 'https://colorful-journey-collection.lovable.app';
const SITE_URL = typeof window !== 'undefined' ? window.location.origin : PUBLISHED_SITE_URL;
const CURRENT_URL = typeof window !== 'undefined' ? window.location.href : SITE_URL;
const TWITTER_HANDLE = '@JohnsonJoh31080';

export const updateMetaTags = (config: MetaConfig) => {
  // Update title
  document.title = config.title;

  // Update or create meta tags
  const updateOrCreateMeta = (name: string, value: string, isProperty = false) => {
    const attr = isProperty ? 'property' : 'name';
    let element = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;

    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attr, name);
      document.head.appendChild(element);
    }

    element.content = value;
  };

  // Basic meta tags
  updateOrCreateMeta('description', config.description);
  if (config.keywords) {
    updateOrCreateMeta('keywords', config.keywords);
  }

  // Open Graph tags
  updateOrCreateMeta('og:title', config.ogTitle || config.title, true);
  updateOrCreateMeta('og:description', config.ogDescription || config.description, true);
  updateOrCreateMeta('og:image', config.ogImage || DEFAULT_OG_IMAGE, true);
  updateOrCreateMeta('og:url', config.ogUrl || CURRENT_URL, true);
  updateOrCreateMeta('og:type', 'website', true);

  // Twitter Card tags
  updateOrCreateMeta('twitter:card', 'summary_large_image');
  updateOrCreateMeta('twitter:title', config.twitterTitle || config.title);
  updateOrCreateMeta('twitter:description', config.twitterDescription || config.description);
  updateOrCreateMeta('twitter:image', config.twitterImage || DEFAULT_OG_IMAGE);
  if (TWITTER_HANDLE) {
    updateOrCreateMeta('twitter:creator', TWITTER_HANDLE);
  }

  // Canonical URL
  let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.href = config.canonical || config.ogUrl || CURRENT_URL;
};

/**
 * Update structured data (JSON-LD) for rich snippets.
 * `key` allows multiple independent JSON-LD blocks (e.g. page schema + breadcrumbs).
 */
export const updateStructuredData = (data: Record<string, unknown>, key = 'true') => {
  let script = document.querySelector(`script[type="application/ld+json"][data-seo="${key}"]`) as HTMLScriptElement;

  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo', key);
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
};

/**
 * Remove a previously injected JSON-LD block
 */
export const removeStructuredData = (key: string) => {
  document.querySelector(`script[type="application/ld+json"][data-seo="${key}"]`)?.remove();
};


/**
 * Schema.org Organization Schema for the portfolio brand
 */
export const getOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Johnson T Portfolio',
    alternateName: 'Johnson Portfolio',
    url: SITE_URL,
    logo: `${SITE_URL}/profile-logo.png`,
    image: `${SITE_URL}/profile-logo.png`,
    description: 'Portfolio and services of Johnson T, a Full-Stack Software Engineer based in Chennai, India.',
    sameAs: [
      'https://www.linkedin.com/in/johnsonelon/',
      'https://github.com/Johnrebu',
      'https://x.com/JohnsonJoh31080',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-875-477-4022',
      contactType: 'sales',
      areaServed: 'IN',
      availableLanguage: ['English', 'Tamil'],
    },
  };
};

/**
 * Schema.org Person Schema for your profile
 */
export const getPersonSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Johnson T',
    givenName: 'Johnson',
    jobTitle: 'Full-Stack Software Engineer',
    url: SITE_URL,
    image: `${SITE_URL}/profile-logo.png`,
    sameAs: [
      'https://x.com/JohnsonJoh31080',
      'https://www.linkedin.com/in/johnsonelon/',
      'https://github.com/Johnrebu',
      'https://www.instagram.com/aionionoffl',
    ],
    description: 'Full-Stack Software Engineer with a science-education background, building high-performance web applications, scalable APIs, and AI-powered digital solutions.',
    knowsAbout: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Python',
      'Django',
      'SQL',
      'WordPress',
      'AI Video Production',
      'Graphic Design',
      'System Automation',
      'Live Event AV Operations',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Aionion Capital',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tambaram, Chennai',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN',
    },
  };
};

/**
 * Schema.org Website Schema for homepage
 */
export const getWebsiteSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: SITE_URL,
    name: 'Johnson T Portfolio',
    description: 'Johnson T portfolio: full-stack developer building high-performance web applications.',
    publisher: {
      '@type': 'Organization',
      name: 'Johnson T Portfolio',
      url: SITE_URL,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/projects?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
};

/**
 * Schema.org BreadcrumbList for navigation
 */
export const getBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => {
  const toAbsolute = (url: string) =>
    url.startsWith('http') ? url : `${SITE_URL}${url.startsWith('/') ? '' : '/'}${url}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: toAbsolute(item.url),
    })),
  };
};


/**
 * Schema.org Project/Portfolio Item
 */
export const getProjectSchema = (project: {
  name: string;
  description: string;
  image?: string;
  url?: string;
  datePublished?: string;
  skills?: string[];
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.description,
    image: project.image,
    url: project.url,
    datePublished: project.datePublished,
    keywords: project.skills?.join(', '),
  };
};

/**
 * Schema.org CollectionPage / ItemList for the projects portfolio
 */
export const getProjectsSchema = (projects: Array<{
  name: string;
  description: string;
  image?: string;
  url?: string;
  datePublished?: string;
  skills?: string[];
}>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Projects & Portfolio - Johnson T',
    description: 'Featured web applications, commercial client platforms, enterprise CRMs, and open-source GitHub builds by Johnson T.',
    url: `${SITE_URL}/projects`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: projects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: getProjectSchema(project),
      })),
    },
  };
};

/**
 * Schema.org ProfilePage for the resume
 */
export const getResumeSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: 'Johnson T',
      jobTitle: 'Full-Stack Software Engineer',
      url: SITE_URL,
      image: `${SITE_URL}/profile-logo.png`,
      sameAs: [
        'https://www.linkedin.com/in/johnsonelon/',
        'https://github.com/Johnrebu',
        'https://x.com/JohnsonJoh31080',
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'Aionion Capital',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tambaram, Chennai',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'IN',
      },
    },
  };
};

/**
 * Schema.org ContactPage for the contact page
 */
export const getContactPageSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Johnson T',
    description: 'Contact Johnson T for project inquiries, collaboration opportunities, and freelance or full-time engagements.',
    url: `${SITE_URL}/contact`,
    mainEntity: {
      '@type': 'Person',
      name: 'Johnson T',
      jobTitle: 'Full-Stack Software Engineer',
      url: SITE_URL,
      email: 'mailto:johnchemist91@gmail.com',
      telephone: '+91-875-477-4022',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tambaram, Chennai',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'IN',
      },
    },
  };
};

/**
 * Schema.org Service Schema for freelance development packages
 */
export const getServicesSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Web & Mobile Application Development',
    provider: {
      '@type': 'Person',
      name: 'Johnson T',
      url: SITE_URL,
      image: `${SITE_URL}/profile-logo.png`,
    },
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Development Services & Pricing Packages',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Website Packages',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Basic Landing Site' }, priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'INR', minPrice: 12000, maxPrice: 25000 } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business + CMS / Blog' }, priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'INR', minPrice: 25000, maxPrice: 60000 } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-Commerce Website' }, priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'INR', minPrice: 60000, maxPrice: 200000 } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Web App / Portal' }, priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'INR', minPrice: 80000, maxPrice: 500000 } },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Mobile App Packages',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Basic Application' }, priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'INR', minPrice: 50000, maxPrice: 120000 } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Standard Application' }, priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'INR', minPrice: 150000, maxPrice: 400000 } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Complex Enterprise App' }, priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'INR', minPrice: 400000, maxPrice: 1000000 } },
          ],
        },
      ],
    },
  };
};
