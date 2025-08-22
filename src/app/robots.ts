import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard/', '/auth/', '/api/', '/protected/'],
    },
    sitemap: 'https://www.arzir.com/sitemap.xml',
  }
}

