"use client";

import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search, Clock, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const blogPosts = [
  {
    title: "Circular Economy Principles in Metal Recycling: Building Sustainable Operations",
    slug: "circular-economy-metal-recycling",
    excerpt: "Discover how circular economy principles transform metal recycling operations through waste reduction, resource optimization, and closed-loop manufacturing systems.",
    category: "Industry News",
    publishedAt: "2025-09-15",
    readTime: "12 min read",
    author: "ARZIR Sustainability Team",
    image: "/images/blog/Circular Economy Principles in Metal Recycling Building Sustainable Operations.png",
    featured: true
  },
  {
    title: "Smart Manufacturing Integration in Recycling Equipment: Industry 4.0 Revolution",
    slug: "smart-manufacturing-recycling-equipment",
    excerpt: "Explore how Industry 4.0 technologies including AI, automation, and real-time analytics are revolutionizing recycling equipment manufacturing and operations.",
    category: "Applications",
    publishedAt: "2025-09-10",
    readTime: "14 min read",
    author: "ARZIR Innovation Team",
    image: "/images/blog/Smart Manufacturing Integration in Recycling Equipment Industry 4.0 Revolution.png",
    featured: true
  },
  {
    title: "Advanced Sorting Technologies in Metal Recycling: AI and Optical Solutions",
    slug: "advanced-sorting-technologies",
    excerpt: "Explore cutting-edge sorting technologies including AI-powered optical sorting, eddy current separation, and sensor-based classification for maximum metal recovery.",
    category: "Applications",
    publishedAt: "2025-08-28",
    readTime: "11 min read",
    author: "ARZIR Engineering Team",
    image: "/images/blog/Advanced Sorting Technologies in Metal Recycling AI and Optical Solutions.png",
    featured: false
  },
  {
    title: "IoT Integration in Recycling Equipment: Smart Monitoring Solutions",
    slug: "iot-integration-recycling-equipment",
    excerpt: "Discover how IoT technology transforms recycling operations through real-time monitoring, predictive maintenance, and data-driven optimization for maximum efficiency.",
    category: "Industry News",
    publishedAt: "2025-08-25",
    readTime: "9 min read",
    author: "ARZIR Technology Team",
    image: "/images/blog/IoT Integration in Recycling Equipment Smart Monitoring Solutions.png",
    featured: true
  },
  {
    title: "How to Choose the Right Scrap Metal Baler for Your Yard",
    slug: "how-to-choose-scrap-metal-baler",
    excerpt: "Identify your material mix, throughput, and bale density targets. Compare hydraulic power, chamber size, and control systems for optimal selection.",
    category: "Product Guides",
    publishedAt: "2025-08-10",
    readTime: "7 min read",
    author: "ARZIR Engineering Team",
    image: "/images/blog/How to Choose the Right Scrap Metal Baler for Your Yard.png",
    featured: false
  },
  {
    title: "Maximizing ROI in Metal Recycling Operations",
    slug: "maximizing-roi-metal-recycling-operations", 
    excerpt: "Discover proven strategies to increase profitability through equipment optimization, process improvements, and smart material handling techniques.",
    category: "Buying Tips",
    publishedAt: "2025-08-05",
    readTime: "5 min read",
    author: "Sarah Chen",
    image: "/images/blog/Maximizing ROI in Metal Recycling Operations.png",
    featured: false
  },
  {
    title: "Preventive Maintenance Guide for Recycling Equipment",
    slug: "preventive-maintenance-guide-recycling-equipment",
    excerpt: "Essential maintenance schedules, common issues, and best practices to extend equipment life and minimize downtime in recycling operations.",
    category: "Maintenance & Service",
    publishedAt: "2025-07-28",
    readTime: "6 min read", 
    author: "Mike Rodriguez",
    image: "/images/blog/Preventive Maintenance Guide for Recycling Equipment.png",
    featured: true
  },
  {
    title: "How Briquetting Machines Reduce Metal Waste Storage Costs",
    slug: "briquetting-cost-savings",
    excerpt: "Discover how briquetting machines can reduce metal waste storage costs by up to 90%. Learn about space savings, transportation efficiency, and ROI calculations.",
    category: "Industry News",
    publishedAt: "2024-12-15",
    readTime: "8 min read",
    author: "ARZIR Engineering Team",
    image: "/images/blog/How Briquetting Machines Reduce Metal Waste Storage Costs.png",
    featured: false
  },
  {
    title: "Briquetting Machine vs Baling Machine: Which to Choose?",
    slug: "briquetting-vs-baling-machine",
    excerpt: "Complete comparison of briquetting machines vs baling machines for metal waste processing. Learn about applications, advantages, costs, and decision factors.",
    category: "Product Guides",
    publishedAt: "2024-12-18",
    readTime: "12 min read",
    author: "ARZIR Technical Team",
    image: "/images/blog/Briquetting Machine vs Baling Machine Which to Choose.png",
    featured: false
  },
  {
    title: "Steel Mill Scrap Processing: Best Practices and Equipment Selection",
    slug: "steel-mill-scrap-processing-best-practices",
    excerpt: "Comprehensive guide to handling mill scrap safely and efficiently with industrial-grade processing equipment.",
    category: "Applications",
    publishedAt: "2025-07-20",
    readTime: "8 min read",
    author: "ARZIR Engineering Team",
    image: "/images/blog/Steel Mill Scrap Processing Best Practices and Equipment Selection.png",
    featured: false
  },
  {
    title: "Understanding Bale Density: Impact on Transport and Value",
    slug: "understanding-bale-density-transport-value",
    excerpt: "Learn how bale density affects transportation costs, material value, and processing efficiency in metal recycling operations.",
    category: "Industry News",
    publishedAt: "2025-07-15",
    readTime: "4 min read",
    author: "Anna Thompson",
    image: "/images/blog/Understanding Bale Density Impact on Transport and Value.png",
    featured: false
  },
  {
    title: "Automotive Dismantling: Equipment Solutions for ELV Processing",
    slug: "automotive-dismantling-equipment-solutions",
    excerpt: "Specialized equipment and techniques for processing end-of-life vehicles efficiently while meeting environmental regulations.",
    category: "Applications",
    publishedAt: "2025-07-08",
    readTime: "6 min read",
    author: "David Kim",
    image: "/images/blog/Automotive Dismantling Equipment Solutions for ELV Processing.png",
    featured: false
  },
  {
    title: "Car Body Balers Transform Vehicle Recycling",
    slug: "car-body-balers-transform-recycling",
    excerpt: "Discover how car body balers are revolutionizing the automotive recycling industry with improved efficiency and cost savings.",
    category: "Industry News",
    publishedAt: "2024-11-20",
    readTime: "7 min read",
    author: "ARZIR Engineering Team",
    image: "/images/blog/How Car Body Balers Transform Vehicle Recycling.png",
    featured: false
  },
  {
    title: "Car Baler vs Car Shredder: Which to Choose?",
    slug: "car-baler-vs-car-shredder",
    excerpt: "Detailed comparison of car body balers and shredders with application scenarios to help you choose the right technology.",
    category: "Product Guides",
    publishedAt: "2024-11-15",
    readTime: "10 min read",
    author: "Technical Team",
    image: "/images/blog/Car Baler vs Car Shredder Which to Choose.png",
    featured: false
  },
  {
    title: "Automatic Horizontal Balers Reduce Costs",
    slug: "automatic-horizontal-balers-reduce-costs",
    excerpt: "Learn how automatic horizontal balers can significantly reduce operational costs while improving processing efficiency.",
    category: "Buying Tips",
    publishedAt: "2024-10-25",
    readTime: "6 min read",
    author: "Operations Team",
    image: "/images/blog/How Automatic Horizontal Balers Reduce Recycling Costs.png",
    featured: false
  },
  {
    title: "Container Shear vs Guillotine Shear: Complete Comparison",
    slug: "container-shear-vs-guillotine-shear",
    excerpt: "Compare container shears and guillotine shears to determine which cutting technology best suits your recycling operations.",
    category: "Product Guides",
    publishedAt: "2024-10-18",
    readTime: "8 min read",
    author: "ARZIR Engineering Team",
    image: "/images/blog/Container Shear vs Guillotine Shear Which is Better for Scrap Processing.png",
    featured: false
  },
  {
    title: "Container Shears Improve Recycling Efficiency",
    slug: "container-shears-improve-recycling-efficiency",
    excerpt: "Discover how container shears enhance recycling operations with powerful cutting capabilities and improved material handling.",
    category: "Industry News",
    publishedAt: "2024-10-10",
    readTime: "5 min read",
    author: "Technical Team",
    image: "/images/blog/How Container Shears Improve Scrap Metal Recycling Efficiency.png",
    featured: false
  },
  {
    title: "Vertical vs Horizontal Baler: Which is Right for You?",
    slug: "vertical-vs-horizontal-baler",
    excerpt: "Complete comparison guide between vertical and horizontal balers including capacity, space requirements, and cost considerations.",
    category: "Product Guides",
    publishedAt: "2024-09-30",
    readTime: "9 min read",
    author: "ARZIR Engineering Team",
    image: "/images/blog/Vertical vs Horizontal Baler Which One to Choose.png",
    featured: false
  },
  {
    title: "Small Business Vertical Balers: Cost-Effective Solutions",
    slug: "small-business-vertical-balers",
    excerpt: "Explore vertical baler options designed specifically for small businesses with budget-friendly features and compact designs.",
    category: "Buying Tips",
    publishedAt: "2024-09-20",
    readTime: "6 min read",
    author: "Sales Team",
    image: "/images/blog/How Small Businesses Benefit from Vertical Balers.png",
    featured: false
  },
  {
    title: "Gantry Shear vs Container Shear: Performance Analysis",
    slug: "gantry-shear-vs-container-shear",
    excerpt: "Detailed analysis comparing gantry shears and container shears for heavy-duty metal cutting applications.",
    category: "Product Guides",
    publishedAt: "2024-09-10",
    readTime: "11 min read",
    author: "ARZIR Engineering Team",
    image: "/images/blog/Gantry Shear vs Container Shear Which One to Choose for Heavy Scrap.png",
    featured: false
  },
  {
    title: "Gantry Shears Improve Recycling Efficiency",
    slug: "gantry-shears-improve-recycling-efficiency",
    excerpt: "Learn how gantry shears enhance large-scale recycling operations with superior cutting power and material handling capabilities.",
    category: "Industry News",
    publishedAt: "2024-08-25",
    readTime: "7 min read",
    author: "Technical Team",
    image: "/images/blog/How Gantry Shears Improve Scrap Metal Recycling Efficiency.png",
    featured: false
  },
  {
    title: "Alligator Shears Improve Small Scrap Efficiency",
    slug: "alligator-shears-improve-small-scrap-efficiency",
    excerpt: "Discover how alligator shears provide efficient cutting solutions for small to medium-scale scrap metal operations.",
    category: "Industry News",
    publishedAt: "2024-08-15",
    readTime: "5 min read",
    author: "Operations Team",
    image: "/images/blog/How Alligator Shears Improve Efficiency in Small Scrap Cutting.png",
    featured: false
  },
  {
    title: "Alligator Shear vs Other Scrap Shears: Comparison Guide",
    slug: "alligator-shear-vs-other-scrap-shears",
    excerpt: "Compare alligator shears with other cutting technologies to find the best solution for your scrap processing needs.",
    category: "Product Guides",
    publishedAt: "2024-08-05",
    readTime: "8 min read",
    author: "ARZIR Engineering Team",
    image: "/images/blog/Alligator Shear vs Other Scrap Shears Which to Choose.png",
    featured: false
  },
  {
    title: "Single Shaft vs Double Shaft Shredders: Which to Choose?",
    slug: "single-shaft-vs-double-shaft-shredders",
    excerpt: "Comprehensive comparison of single shaft and double shaft shredders for different waste processing applications.",
    category: "Product Guides",
    publishedAt: "2024-07-30",
    readTime: "10 min read",
    author: "Technical Team",
    image: "/images/blog/Single-Shaft vs Double-Shaft Shredders Which One to Choose.png",
    featured: false
  },
  {
    title: "Single Shaft Shredders Improve Recycling Efficiency",
    slug: "single-shaft-shredders-improve-recycling-efficiency",
    excerpt: "Learn how single shaft shredders enhance material processing efficiency with precise size reduction capabilities.",
    category: "Industry News",
    publishedAt: "2024-07-20",
    readTime: "6 min read",
    author: "Operations Team",
    image: "/images/blog/How Single-Shaft Shredders Improve Recycling Efficiency.png",
    featured: false
  },
  {
    title: "Double Shaft Shredders Enhance Recycling Efficiency",
    slug: "double-shaft-shredders-enhance-recycling-efficiency",
    excerpt: "Discover how double shaft shredders provide robust shredding solutions for heavy-duty recycling operations.",
    category: "Industry News",
    publishedAt: "2024-07-10",
    readTime: "7 min read",
    author: "Technical Team",
    image: "/images/blog/How Double-Shaft Shredders Enhance Recycling Efficiency.png",
    featured: false
  },
  {
    title: "Four Shaft vs Double Shaft Shredders: Advanced Comparison",
    slug: "four-shaft-vs-double-shaft-shredders",
    excerpt: "Detailed comparison between four shaft and double shaft shredders for high-volume industrial applications.",
    category: "Product Guides",
    publishedAt: "2024-06-25",
    readTime: "12 min read",
    author: "ARZIR Engineering Team",
    image: "/images/blog/Four-Shaft vs Double-Shaft Shredders Which One to Choose.png",
    featured: false
  },
  {
    title: "Four Shaft Shredders Improve E-Waste Recycling Efficiency",
    slug: "four-shaft-shredders-improve-ewaste-recycling-efficiency",
    excerpt: "Learn how four shaft shredders optimize electronic waste processing with advanced multi-stage shredding technology.",
    category: "Industry News",
    publishedAt: "2024-06-15",
    readTime: "8 min read",
    author: "E-Waste Team",
    image: "/images/blog/How Four-Shaft Shredders Improve Recycling Efficiency in E-Waste Processing.png",
    featured: false
  },

  {
    title: "Extrusion vs Die Casting Aluminum: Process Comparison",
    slug: "extrusion-vs-die-casting-aluminum",
    excerpt: "Compare aluminum extrusion and die casting processes to understand their applications, advantages, and limitations.",
    category: "Applications",
    publishedAt: "2024-05-15",
    readTime: "11 min read",
    author: "Aluminum Team",
    image: "/images/blog/Aluminium Extrusion Press vs Die Casting Which to Choose.png",
    featured: false
  },
  {
    title: "Aluminium Extrusion Process Guide: Complete Overview",
    slug: "aluminium-extrusion-process-guide",
    excerpt: "Comprehensive guide to the aluminum extrusion process, including equipment, techniques, and best practices for optimal results.",
    category: "Applications",
    publishedAt: "2024-05-05",
    readTime: "13 min read",
    author: "ARZIR Engineering Team",
    image: "/images/blog/How Aluminium Extrusion Presses Work A Complete Guide.png",
    featured: false
  }
];

const categories = [
  "All",
  "Industry News", 
  "Product Guides",
  "Buying Tips",
  "Applications",
  "Maintenance & Service"
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts
    .filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  return (
    <>
      {/* Page Hero */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white">
        <div className="text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black">
            ARZIR Blog
          </h1>
          <p className="text-xl lg:text-2xl text-arzir-gray-600 max-w-4xl mx-auto leading-relaxed">
            Insights, guides, and updates on recycling and metal processing machinery.
          </p>
        </div>
      </Section>

      {/* Search and Filter */}
      <Section background="white" size="md">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-arzir-gray-400" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-arzir-primary" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </Section>

      {/* Featured Posts */}
      {selectedCategory === "All" && !searchTerm && (
        <Section background="gray" size="lg">
          <div className="space-y-8">
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-black text-center">
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {blogPosts
                .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
                .slice(0, 3)
                .map((post) => (
                <div key={post.slug} className="group">
                  <Link href={`/blog/${post.slug}`}>
                    <article className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-arzir-gray-100 overflow-hidden h-full">
                      {/* Featured Image */}
                      <div className="aspect-[16/9] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 group-hover:scale-105 transition-transform duration-300 overflow-hidden relative">
                        <Image 
                          src={post.image} 
                          alt={post.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          priority={post.featured}
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6 space-y-4">
                        {/* Meta */}
                        <div className="flex items-center gap-4 text-sm text-arzir-gray-500">
                          <span className="px-2 py-1 bg-arzir-primary/10 text-arzir-primary rounded-md font-medium">
                            {post.category}
                          </span>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h2 className="text-xl font-heading font-bold text-black group-hover:text-arzir-primary transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-arzir-gray-600 leading-relaxed text-sm line-clamp-3">
                          {post.excerpt}
                        </p>

                        {/* Author and Date */}
                        <div className="flex items-center justify-between pt-2 text-sm text-arzir-gray-500">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                          <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                        </div>

                        {/* Read More */}
                        <div className="flex items-center text-arzir-primary font-medium group-hover:gap-3 gap-2 transition-all duration-300 pt-2">
                          <span>Read More</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </article>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* All Articles */}
      <Section background={selectedCategory === "All" && !searchTerm ? "white" : "gray"} size="xl">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-black">
              {searchTerm ? `Search Results (${filteredPosts.length})` : 
               selectedCategory === "All" ? "Latest Articles" : selectedCategory}
            </h2>
            {filteredPosts.length > 0 && (
              <p className="text-arzir-gray-600">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
              </p>
            )}
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div key={post.slug} className="group">
                  <Link href={`/blog/${post.slug}`}>
                    <article className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-arzir-gray-100 overflow-hidden h-full">
                      {/* Image */}
                      <div className="aspect-[16/9] bg-gradient-to-br from-arzir-gray-50 to-arzir-gray-100 group-hover:scale-105 transition-transform duration-300 overflow-hidden relative">
                        <Image 
                          src={post.image} 
                          alt={post.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6 space-y-4">
                        {/* Meta */}
                        <div className="flex items-center gap-4 text-sm text-arzir-gray-500">
                          <span className="px-2 py-1 bg-arzir-gray-100 text-arzir-gray-600 rounded-md">
                            {post.category}
                          </span>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-heading font-semibold text-black group-hover:text-arzir-primary transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-arzir-gray-600 leading-relaxed text-sm line-clamp-2">
                          {post.excerpt}
                        </p>

                        {/* Author and Date */}
                        <div className="flex items-center justify-between pt-2 text-xs text-arzir-gray-500">
                          <span>{post.author}</span>
                          <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                        </div>

                        {/* Read More */}
                        <div className="flex items-center text-arzir-primary font-medium group-hover:gap-3 gap-2 transition-all duration-300 pt-2">
                          <span className="text-sm">Read More</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </article>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4 opacity-50">📰</div>
              <h3 className="text-xl font-semibold text-arzir-gray-700 mb-2">No articles found</h3>
              <p className="text-arzir-gray-500 mb-4">
                {searchTerm ? `No articles match "${searchTerm}"` : `No articles in "${selectedCategory}"`}
              </p>
              <Button onClick={() => {setSearchTerm(""); setSelectedCategory("All");}} variant="outline">
                View All Articles
              </Button>
            </div>
          )}
        </div>
      </Section>
    </>
  );
}