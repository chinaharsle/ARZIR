"use client";

import { useEffect } from 'react';

// Performance optimization hooks and utilities
export function PerformanceOptimized({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Optimize page rendering
    if (typeof window !== 'undefined') {
      // Preload next page resources when user hovers over links
      const links = document.querySelectorAll('a[href^="/"]');
      
      const preloadPage = (href: string) => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = href;
        document.head.appendChild(link);
      };
      
      links.forEach(link => {
        link.addEventListener('mouseenter', () => {
          const href = link.getAttribute('href');
          if (href && !document.querySelector(`link[href="${href}"]`)) {
            preloadPage(href);
          }
        });
      });
      
      // Optimize images loading
      if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => {
          (img as HTMLImageElement).src = img.getAttribute('data-src')!;
        });
      }
      
      // Request idle callback for non-critical operations
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => {
          // Preload fonts
          const fontPreloads = [
            '/fonts/inter-var.woff2',
          ];
          
          fontPreloads.forEach(font => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = font;
            link.as = 'font';
            link.type = 'font/woff2';
            link.crossOrigin = 'anonymous';
            document.head.appendChild(link);
          });
        });
      }
    }
  }, []);

  return <>{children}</>;
}

// Critical CSS injector for above-the-fold content
export function CriticalCSS() {
  return (
    <style jsx>{`
      /* Critical styles for preventing layout shift */
      .hero-section {
        min-height: 50vh;
        contain: layout style paint;
      }
      
      .hero-image {
        content-visibility: auto;
        contain-intrinsic-size: 800px 600px;
      }
      
      /* Loading skeleton */
      .skeleton {
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: loading 1.5s infinite;
      }
      
      @keyframes loading {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
      
      /* Optimized animations */
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `}</style>
  );
}

// Resource preloader component
export function ResourcePreloader() {
  useEffect(() => {
    // Preload critical resources
    const criticalResources = [
      { href: '/images/hero/home-hero.webp', as: 'image' },
      { href: '/images/about/about-home.webp', as: 'image' },
      { href: '/products', as: 'document' },
      { href: '/applications', as: 'document' },
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.as === 'image') {
        link.fetchPriority = 'high';
      }
      document.head.appendChild(link);
    });
  }, []);

  return null;
}
