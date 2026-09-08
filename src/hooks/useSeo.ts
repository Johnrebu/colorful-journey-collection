import { useEffect, useMemo } from 'react';
import {
  updateMetaTags,
  updateStructuredData,
  removeStructuredData,
  getBreadcrumbSchema,
} from '@/lib/seo';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface UseSeoOptions {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  structuredData?: Record<string, unknown>;
  /** Trail shown in breadcrumb rich results, e.g. [{ name: 'Home', url: '/' }, ...] */
  breadcrumbs?: BreadcrumbItem[];
}

/**
 * Custom hook to manage SEO meta tags and structured data for a page
 * @example
 * useSeo({
 *   title: 'Projects - Johnson Portfolio',
 *   description: 'Explore my featured projects',
 *   breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Projects', url: '/projects' }],
 * })
 */
export const useSeo = ({
  title,
  description,
  keywords,
  ogImage,
  ogUrl,
  structuredData,
  breadcrumbs,
}: UseSeoOptions) => {
  const breadcrumbKey = breadcrumbs
    ? breadcrumbs.map((item) => `${item.name}|${item.url}`).join('>')
    : '';

  const breadcrumbTrail = useMemo(
    () => (breadcrumbKey ? breadcrumbs : undefined),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [breadcrumbKey]
  );

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

  useEffect(() => {
    if (!breadcrumbTrail || breadcrumbTrail.length === 0) {
      removeStructuredData('breadcrumb');
      return;
    }

    updateStructuredData(getBreadcrumbSchema(breadcrumbTrail), 'breadcrumb');

    return () => removeStructuredData('breadcrumb');
  }, [breadcrumbTrail]);
};

export default useSeo;
