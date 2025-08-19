"use client";

import { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals';

function sendToAnalytics(metric: Metric) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vitals] ${metric.name}:`, {
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
      url: window.location.href,
      userAgent: navigator.userAgent,
    });
  }

  // Send to analytics service in production
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
    // Send to Vercel Analytics
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof (window as any).va !== 'undefined') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).va('event', {
        name: `Web Vital: ${metric.name}`,
        data: {
          value: metric.value,
          rating: metric.rating,
          delta: metric.delta,
        }
      });
    }
    
    // Performance monitoring for critical metrics
    if (metric.name === 'LCP' && metric.rating === 'poor') {
      console.warn('Poor LCP detected:', metric.value);
    }
    
    if (metric.name === 'CLS' && metric.rating === 'poor') {
      console.warn('Poor CLS detected:', metric.value);
    }
    
    if (metric.name === 'INP' && metric.rating === 'poor') {
      console.warn('Poor INP detected:', metric.value);
    }
  }
}

export function WebVitals() {
  useEffect(() => {
    // Track Core Web Vitals
    onCLS(sendToAnalytics);
    onINP(sendToAnalytics);
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
  }, []);

  return null;
}