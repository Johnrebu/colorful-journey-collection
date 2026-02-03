import { useEffect, useRef, useState } from 'react';

interface UseLazyLoadOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Custom hook for lazy loading elements with Intersection Observer API
 * Helps reduce initial render load and improves performance
 */
export const useLazyLoad = (
  callback: () => void,
  options: UseLazyLoadOptions = {}
) => {
  const ref = useRef<HTMLDivElement>(null);
  const hasLoaded = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasLoaded.current) {
        hasLoaded.current = true;
        callback();
        observer.unobserve(entry.target);
      }
    }, {
      threshold: options.threshold ?? 0.1,
      rootMargin: options.rootMargin ?? '50px',
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [callback, options]);

  return ref;
};

/**
 * Hook to detect if device prefers reduced motion
 * Helps with performance and accessibility
 */
export const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

/**
 * Hook to detect if device is mobile
 */
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return isMobile;
};

/**
 * Hook to measure performance metrics
 */
export const usePerformanceMetrics = () => {
  useEffect(() => {
    // Report Web Vitals
    if ('web-vital' in window) {
      const vitals = (window as any)['web-vital'];
      console.log('Performance Metrics:', vitals);
    }

    // Check FCP (First Contentful Paint)
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            console.log(`${entry.name}: ${entry.startTime}ms`);
          });
        });
        observer.observe({ entryTypes: ['paint', 'navigation'] });

        return () => observer.disconnect();
      } catch (e) {
        // PerformanceObserver not supported
      }
    }
  }, []);
};
