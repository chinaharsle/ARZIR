import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.arzir.com'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/calculator`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/applications`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
  ]

  // Product category pages
  const productCategories = [
    'recycling-baler',
    'scrap-metal-shear', 
    'shredder',
    'aluminium-extrusion-press',
    'briquetting-machine'
  ].map(category => ({
    url: `${baseUrl}/products/${category}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Individual product pages
  const products = [
    // Balers
    'scrap-metal-baler',
    'car-body-baler',
    'vertical-baler',
    'horizontal-baler',
    // Shears
    'container-shear',
    'gantry-shear',
    'alligator-shear',
    // Shredders
    'single-shaft-shredder',
    'double-shaft-shredder',
    'four-shaft-shredder',
    // Other equipment
    'aluminium-extrusion-press',
    'briquetting-machine'
  ].map(product => ({
    url: `${baseUrl}/products/${product}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Blog posts
  const blogPosts = [
    'circular-economy-metal-recycling',
    'smart-manufacturing-recycling-equipment',
    'how-to-choose-scrap-metal-baler',
    'maximizing-roi-metal-recycling-operations',
    'preventive-maintenance-guide-recycling-equipment',
    'steel-mill-scrap-processing-best-practices',
    'understanding-bale-density-transport-value',
    'automotive-dismantling-equipment-solutions',
    'alligator-shear-vs-other-scrap-shears',
    'alligator-shears-improve-small-scrap-efficiency',
    'aluminium-extrusion-process-guide',
    'automatic-horizontal-balers-reduce-costs',
    'car-baler-vs-car-shredder',
    'car-body-balers-transform-recycling',
    'container-shear-vs-guillotine-shear',
    'container-shears-improve-recycling-efficiency',
    'double-shaft-shredders-enhance-recycling-efficiency',
    'extrusion-vs-die-casting-aluminum',
    'four-shaft-shredders-improve-ewaste-recycling-efficiency',
    'four-shaft-vs-double-shaft-shredders',
    'gantry-shear-vs-container-shear',
    'gantry-shears-improve-recycling-efficiency',
    'single-shaft-shredders-improve-recycling-efficiency',
    'single-shaft-vs-double-shaft-shredders',
    'small-business-vertical-balers',
    'vertical-vs-horizontal-baler'
  ].map(post => ({
    url: `${baseUrl}/blog/${post}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Application pages
  const applications = [
    'scrap-recycling',
    'metal-fabrication',
    'automotive-dismantling',
    'aluminum-processing',
    'steel-mills',
    'shipbreaking',
    'construction-demolition-recycling',
    'railway-scrapping',
    'ewaste-recycling',
    'non-ferrous-recycling',
    'cable-recycling',
    'aerospace-recycling',
    'aerospace-aluminum',
    'automotive-aluminum',
    'construction-aluminum',
    'export-trading',
    'hospitality-waste',
    'industrial-aluminum',
    'metal-recycling',
    'retail-waste',
    'textile-recycling',
    'warehouse-logistics'
  ].map(application => ({
    url: `${baseUrl}/applications/${application}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    ...staticPages,
    ...productCategories,
    ...products,
    ...blogPosts,
    ...applications,
  ]
}

