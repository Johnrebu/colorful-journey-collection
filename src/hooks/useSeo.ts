import { useEffect } from 'react';
import { updateMetaTags, updateStructuredData } from '@/lib/seo';

interface UseSeoOptions {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  structuredData?: Record<string, unknown>;
}

/**
 * Custom hook to manage SEO meta tags and structured data for a page
 * @example
 * useSeo({
 *   title: 'Projects - Johnson Portfolio',
 *   description: 'Explore my featured projects',
 *   keywords: 'portfolio, projects, react, typescript',
 *   structuredData: getProjectSchema(...)
 * })
 */
export const useSeo = ({
  title,
  description,
  keywords,
  ogImage,
  ogUrl,
  structuredData,
}: UseSeoOptions) => {
  useEffect(() => {
    updateMetaTags({
      title,
      description,
      keywords,
      ogImage,
      ogUrl,
    });

    if (structuredData) {
      updateStructuredData(structuredData);
    }
  }, [title, description, keywords, ogImage, ogUrl, structuredData]);
};

export default useSeo;
