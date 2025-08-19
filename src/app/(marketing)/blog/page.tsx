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
    title: "How to Choose the Right Scrap Metal Baler for Your Yard",
    slug: "how-to-choose-scrap-metal-baler",
    excerpt: "Identify your material mix, throughput, and bale density targets. Compare hydraulic power, chamber size, and control systems for optimal selection.",
    category: "Product Guides",
    publishedAt: "2025-08-10",
    readTime: "7 min read",
    author: "ARZIR Engineering Team",
    image: "/images/blog/How to Choose the Right Scrap Metal Baler for Your Yard.png",
    featured: true
  },
  {
    title: "Maximizing ROI in Metal Recycling Operations",
    slug: "maximizing-roi-metal-recycling-operations", 
    excerpt: "Discover proven strategies to increase profitability through equipment optimization, process improvements, and smart material handling techniques.",
    category: "Buying Tips",
    publishedAt: "2025-08-05",
    readTime: "5 min read",
    author: "Sarah Chen",
    image: "/images/blog/Maximizing ROI in Metal Recycling Operations.jpg",
    featured: true
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
    title: "Steel Mill Scrap Processing: Best Practices and Equipment Selection",
    slug: "steel-mill-scrap-processing-best-practices",
    excerpt: "Comprehensive guide to handling mill scrap safely and efficiently with industrial-grade processing equipment.",
    category: "Applications",
    publishedAt: "2025-07-20",
    readTime: "8 min read",
    author: "ARZIR Engineering Team",
    image: "/images/blog/Steel Mill Scrap Processing Best Practices and Equipment Selection.jpg",
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
    image: "/images/blog/Understanding Bale Density Impact on Transport and Value.jpg",
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
    image: "/images/blog/Automotive Dismantling Equipment Solutions for ELV Processing.jpg",
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

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              {blogPosts.filter(post => post.featured).map((post) => (
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