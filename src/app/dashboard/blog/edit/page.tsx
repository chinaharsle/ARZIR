"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowLeft, 
  Save, 
  Eye, 
  Globe, 
  Calendar,
  Settings,
  FileText,
  Image,
  Hash,
  Clock,
  CheckCircle,
  AlertTriangle,
  BarChart3,
  Bold,
  Italic,
  Link,
  List,
  Quote,
  Code,
  Youtube,
  Upload
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { MediaSelector } from "@/components/dashboard/MediaSelector";

interface BlogPost {
  id?: number;
  title: string;
  slug: string;
  content: string;
  category: string;
  tags: string[];
  coverImage?: string;
  coverImageAlt?: string;
  status: "draft" | "review" | "scheduled" | "published" | "archived";
  publishedAt?: string;
  scheduledAt?: string;
  author: string;
  seoTitle?: string;
  seoDescription?: string;
  canonicalUrl?: string;
}

const categories = [
  "Industry News",
  "Product Guides", 
  "Technical Analysis",
  "Applications",
  "Maintenance & Service",
  "Sustainability",
  "Market Trends"
];

// Mock blog posts data for editing
const mockBlogPosts = [
  {
    id: 1,
    title: "Steel Mill Scrap Processing Best Practices",
    slug: "steel-mill-scrap-processing-best-practices",
    content: "# Steel Mill Scrap Processing Best Practices\n\nSteel mill scrap processing is a critical component of the recycling industry, requiring specialized equipment and proven methodologies to maximize efficiency and profitability.\n\n## Introduction\n\nThe steel industry generates significant amounts of scrap material that, when properly processed, can be valuable feedstock for new steel production. This guide covers the essential best practices for steel mill scrap processing.\n\n## Key Processing Techniques\n\n### 1. Material Sorting\nProper sorting of steel scrap by grade and quality is essential for maximizing value. Different steel grades require different processing approaches.\n\n### 2. Size Reduction\nUsing hydraulic shears and balers to achieve optimal size specifications for furnace feeding.\n\n### 3. Contamination Removal\nRemoving non-ferrous materials, coatings, and other contaminants that can affect steel quality.\n\n## Equipment Recommendations\n\n- **Hydraulic Shears**: For cutting large steel sections\n- **Baling Presses**: For compacting loose scrap\n- **Magnetic Separators**: For removing contamination\n\n## Conclusion\n\nImplementing these best practices will improve both the efficiency and profitability of your steel scrap processing operations.",
    category: "Industry News",
    tags: ["steel", "scrap", "processing", "recycling"],
    coverImage: "",
    coverImageAlt: "Steel Mill Scrap Processing Best Practices",
    status: "published" as const,
    author: "ARZIR Engineering",
    publishedAt: "2025-08-12",
    seoTitle: "Steel Mill Scrap Processing Best Practices | ARZIR",
    seoDescription: "Learn essential best practices for steel mill scrap processing to maximize efficiency and profitability in your recycling operations."
  },
  {
    id: 2,
    title: "Understanding Bale Density: Impact on Transport and Value",
    slug: "understanding-bale-density-impact-transport-value",
    content: "# Understanding Bale Density: Impact on Transport and Value\n\nBale density is a crucial factor that directly impacts both transportation costs and material value in the recycling industry.\n\n## What is Bale Density?\n\nBale density refers to the weight of compressed material per unit volume, typically measured in pounds per cubic foot or kilograms per cubic meter.\n\n## Impact on Transportation\n\n### Cost Efficiency\nHigher density bales reduce transportation costs by maximizing payload per truck load.\n\n### Handling Benefits\nDenser bales are easier to handle and stack, reducing labor costs and improving safety.\n\n## Impact on Material Value\n\n### Mill Requirements\nSteel mills prefer consistent, high-density bales for efficient furnace charging.\n\n### Price Premiums\nHigher density bales often command premium prices due to their superior handling characteristics.\n\n## Optimizing Bale Density\n\n- **Proper Equipment Selection**: Choose balers with adequate compaction force\n- **Material Preparation**: Pre-sort and prepare materials for optimal compression\n- **Regular Maintenance**: Keep equipment in optimal condition for consistent performance\n\n## Conclusion\n\nUnderstanding and optimizing bale density is essential for maximizing profitability in scrap metal operations.",
    category: "Technical Analysis",
    tags: ["baling", "density", "transport", "value"],
    coverImage: "",
    coverImageAlt: "Understanding Bale Density: Impact on Transport and Value",
    status: "published" as const,
    author: "Technical Team",
    publishedAt: "2025-08-08",
    seoTitle: "Understanding Bale Density: Impact on Transport and Value | ARZIR",
    seoDescription: "Learn how bale density affects transportation costs and material value in scrap metal recycling operations."
  },
  {
    id: 3,
    title: "Automotive Dismantling Equipment Solutions",
    slug: "automotive-dismantling-equipment-solutions",
    content: "# Automotive Dismantling Equipment Solutions\n\nModern automotive dismantling requires specialized equipment designed for efficiency, safety, and environmental compliance.\n\n## Industry Challenges\n\nThe automotive recycling industry faces unique challenges including:\n- Complex material compositions\n- Environmental regulations\n- Safety requirements\n- Economic efficiency demands\n\n## Essential Equipment\n\n### Car Dismantling Stations\nSpecialized workbenches and tools for efficient vehicle disassembly.\n\n### Fluid Recovery Systems\nEquipment for safe removal and storage of automotive fluids.\n\n### Material Separation Systems\nMagnetic and eddy current separators for material recovery.\n\n## ARZIR Solutions\n\nOur automotive dismantling equipment includes:\n- **Car Shears**: For cutting vehicle frames\n- **Baling Presses**: For compacting separated materials\n- **Conveyors**: For efficient material handling\n\n## Benefits\n\n- Increased processing efficiency\n- Improved safety standards\n- Better material recovery rates\n- Enhanced environmental compliance\n\n## Conclusion\n\nInvesting in proper automotive dismantling equipment is essential for modern recycling operations.",
    category: "Product Guides",
    tags: ["automotive", "dismantling", "recycling", "equipment"],
    coverImage: "",
    coverImageAlt: "Automotive Dismantling Equipment Solutions",
    status: "published" as const,
    author: "Product Specialists",
    publishedAt: "2025-08-05",
    seoTitle: "Automotive Dismantling Equipment Solutions | ARZIR",
    seoDescription: "Discover specialized automotive dismantling equipment solutions for efficient, safe, and compliant vehicle recycling operations."
  }
];

export default function BlogEditPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = createClient();
  
  const isCreating = searchParams.get('mode') === 'create';
  const postId = searchParams.get('id');
  
  const [user, setUser] = useState<any>(null);
  const [formData, setFormData] = useState<BlogPost>({
    title: "",
    slug: "",
    content: "",
    category: "Industry News",
    tags: [],
    status: "draft",
    author: ""
  });
  
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [newTag, setNewTag] = useState("");
  const [seoScore, setSeoScore] = useState(0);
  const [showMediaSelector, setShowMediaSelector] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<any>(null);

  // Get current user
  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
        setFormData(prev => ({ 
          ...prev, 
          author: user.email?.split('@')[0] || "ARZIR Editorial Team"
        }));
      }
    };
    getUser();
  }, [supabase]);

  // Load blog post data when editing
  useEffect(() => {
    if (postId && !isCreating) {
      const blogPost = mockBlogPosts.find(post => post.id === parseInt(postId));
      if (blogPost) {
        setFormData({
          ...blogPost,
          coverImageAlt: blogPost.coverImageAlt || blogPost.title
        });
        
        // If there's a cover image, try to find it in the media library
        if (blogPost.coverImage) {
          // In a real implementation, you would fetch the media file details from the API
          // For now, we'll create a mock media object
          const mockMedia = {
            id: "mock-" + blogPost.id,
            original_filename: `${blogPost.title.replace(/\s+/g, '-').toLowerCase()}.jpg`,
            file_path: blogPost.coverImage,
            alt_text: blogPost.coverImageAlt,
            width: 1920,
            height: 1080
          };
          setSelectedMedia(mockMedia);
        }
      }
    }
  }, [postId, isCreating]);

  // Auto-generate slug from title
  useEffect(() => {
    if (formData.title && (!formData.slug || isCreating)) {
      const slug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      setFormData(prev => ({ ...prev, slug }));
    }
  }, [formData.title, isCreating]);

  // Auto-generate SEO title and description
  useEffect(() => {
    if (formData.title) {
      const seoTitle = `${formData.title} | ARZIR`;
      setFormData(prev => ({ ...prev, seoTitle }));
    }
  }, [formData.title]);

  // Auto-generate alt text from title
  useEffect(() => {
    if (formData.title && (!formData.coverImageAlt || isCreating)) {
      setFormData(prev => ({ ...prev, coverImageAlt: formData.title }));
    }
  }, [formData.title, isCreating]);

  useEffect(() => {
    if (formData.content && formData.content.length > 100) {
      const description = formData.content
        .replace(/[#*\[\]]/g, '')
        .substring(0, 160)
        .trim();
      setFormData(prev => ({ ...prev, seoDescription: description }));
    }
  }, [formData.content]);

  // Calculate SEO score
  useEffect(() => {
    let score = 0;
    
    if (formData.title.length >= 5 && formData.title.length <= 60) score += 20;
    if (formData.seoDescription && formData.seoDescription.length >= 120 && formData.seoDescription.length <= 160) score += 20;
    
    const wordCount = formData.content.split(/\s+/).length;
    if (wordCount >= 800) score += 25;
    else if (wordCount >= 300) score += 15;
    
    if (formData.coverImage) score += 15;
    if (formData.tags.length >= 1 && formData.tags.length <= 6) score += 10;
    if (formData.category) score += 5;
    
    const hasHeadings = /#{2,3}\s/.test(formData.content);
    if (hasHeadings) score += 5;
    
    setSeoScore(score);
  }, [formData]);

  const handleInputChange = (field: keyof BlogPost, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAddTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim()) && formData.tags.length < 6) {
      setFormData(prev => ({ 
        ...prev, 
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLastSaved(new Date());
    setIsSaving(false);
  };

  const handlePublish = async () => {
    setFormData(prev => ({ 
      ...prev, 
      status: "published",
      publishedAt: new Date().toISOString()
    }));
    await handleSave();
  };

  const handlePreview = () => {
    const previewUrl = `/blog/preview/${formData.slug}?token=preview-token`;
    window.open(previewUrl, '_blank');
  };

  const getSeoScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getSeoScoreIcon = (score: number) => {
    if (score >= 80) return CheckCircle;
    if (score >= 60) return AlertTriangle;
    return AlertTriangle;
  };

  const insertAtCursor = (text: string) => {
    const textarea = document.getElementById('content') as HTMLTextAreaElement;
    if (!textarea) return;
    
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const currentContent = formData.content;
    
    const newContent = currentContent.substring(0, start) + text + currentContent.substring(end);
    setFormData(prev => ({ ...prev, content: newContent }));
    
    // Reset cursor position
    setTimeout(() => {
      textarea.selectionStart = textarea.selectionEnd = start + text.length;
      textarea.focus();
    }, 0);
  };

  const handleMediaSelect = (media: any) => {
    setSelectedMedia(media);
    setFormData(prev => ({ 
      ...prev, 
      coverImage: media.file_path,
      coverImageAlt: media.alt_text || prev.title
    }));
    setShowMediaSelector(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Admin</span>
            <span>/</span>
            <span>Blog</span>
            <span>/</span>
            <span className="text-black font-medium">
              {isCreating ? "Create" : "Edit"}
            </span>
          </div>

          {/* Status & Actions */}
          <div className="flex items-center gap-4">
            <Badge 
              className={
                formData.status === "published" ? "bg-green-100 text-green-800" :
                formData.status === "scheduled" ? "bg-blue-100 text-blue-800" :
                formData.status === "review" ? "bg-yellow-100 text-yellow-800" :
                "bg-gray-100 text-gray-800"
              }
            >
              {formData.status}
            </Badge>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={handlePreview}>
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Button>
              
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleSave}
                disabled={isSaving}
              >
                <Save className="h-4 w-4 mr-2" />
                {isSaving ? "Saving..." : "Save"}
              </Button>

              {formData.status !== "published" && (
                <Button size="sm" onClick={handlePublish} className="bg-green-600 hover:bg-green-700">
                  <Globe className="h-4 w-4 mr-2" />
                  Publish
                </Button>
              )}

              <Button variant="ghost" size="sm" onClick={() => router.back()}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </div>
          </div>
        </div>

        {lastSaved && (
          <div className="max-w-7xl mx-auto text-xs text-gray-500 mt-2">
            Last saved: {lastSaved.toLocaleTimeString()}
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content - Left Side (3 columns) */}
          <div className="lg:col-span-3 space-y-6">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Basic Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    placeholder="Enter blog post title (max 60 characters)"
                    maxLength={60}
                    className="text-lg font-medium"
                  />
                  <div className="text-xs text-gray-500">
                    {formData.title.length}/60 characters
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="slug">URL Slug</Label>
                  <Input
                    id="slug"
                    value={formData.slug}
                    onChange={(e) => handleInputChange("slug", e.target.value)}
                    placeholder="url-friendly-slug"
                  />
                  <div className="text-xs text-gray-500">
                    URL: /blog/{formData.slug}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map(cat => (
                          <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="publishedAt">Published Date</Label>
                    <Input
                      id="publishedAt"
                      type="date"
                      value={formData.publishedAt ? new Date(formData.publishedAt).toISOString().split('T')[0] : ""}
                      onChange={(e) => handleInputChange("publishedAt", e.target.value ? new Date(e.target.value).toISOString() : "")}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Tags (max 6)</Label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {formData.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary" 
                        className="cursor-pointer hover:bg-red-100"
                        onClick={() => handleRemoveTag(tag)}
                      >
                        <Hash className="h-3 w-3 mr-1" />
                        {tag}
                        <span className="ml-1 text-xs">×</span>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      placeholder="Add tag..."
                      onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
                    />
                    <Button type="button" variant="outline" onClick={handleAddTag}>
                      Add
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cover Image */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Image className="h-5 w-5" />
                  Cover Image
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {formData.coverImage ? (
                  <div className="space-y-3">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-16 bg-gradient-to-br from-arzir-primary/20 to-arzir-primary/10 rounded flex items-center justify-center">
                          <Image className="h-8 w-8 text-arzir-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-black">{selectedMedia?.original_filename || "Selected Image"}</p>
                          <p className="text-sm text-gray-500">{selectedMedia ? `${selectedMedia.width}×${selectedMedia.height} pixels` : ""}</p>
                        </div>
                        <Button variant="outline" size="sm" onClick={() => setShowMediaSelector(true)}>
                          Change
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="coverImageAlt">Alt Text</Label>
                      <Input
                        id="coverImageAlt"
                        value={formData.coverImageAlt || ""}
                        onChange={(e) => handleInputChange("coverImageAlt", e.target.value)}
                        placeholder="Describe the image for accessibility"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                    <Image className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Select cover image from media library (16:9 ratio recommended)</p>
                    <Button variant="outline" size="sm" onClick={() => setShowMediaSelector(true)}>
                      <Upload className="h-4 w-4 mr-2" />
                      Select from Library
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Rich Text Editor */}
            <Card>
              <CardHeader>
                <CardTitle>Content Editor</CardTitle>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" onClick={() => insertAtCursor("## ")}>
                    <span className="font-bold">H2</span>
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => insertAtCursor("### ")}>
                    <span className="font-bold">H3</span>
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => insertAtCursor("**bold text**")}>
                    <Bold className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => insertAtCursor("*italic text*")}>
                    <Italic className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => insertAtCursor("- ")}>
                    <List className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => insertAtCursor("> ")}>
                    <Quote className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => insertAtCursor("[link text](url)")}>
                    <Link className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => insertAtCursor("```\ncode\n```")}>
                    <Code className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => insertAtCursor("![alt text](image-url)")}>
                    <Image className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => insertAtCursor("{% youtube id=\"VIDEO_ID\" %}")}>
                    <Youtube className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => handleInputChange("content", e.target.value)}
                    placeholder="Write your blog post content here... Use the toolbar above for formatting options."
                    rows={25}
                    className="text-sm resize-none border-arzir-gray-300 focus:border-arzir-primary focus:ring-arzir-primary/20"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{formData.content.split(/\s+/).length} words</span>
                    <span>{formData.content.length} characters</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar (1 column) */}
          <div className="lg:col-span-1 space-y-6">
            {/* SEO Score */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <BarChart3 className="h-4 w-4" />
                  SEO Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`text-3xl font-bold ${getSeoScoreColor(seoScore)}`}>
                    {seoScore}%
                  </div>
                  {React.createElement(getSeoScoreIcon(seoScore), { 
                    className: `h-6 w-6 ${getSeoScoreColor(seoScore)}` 
                  })}
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Title length</span>
                    <span className={formData.title.length >= 5 && formData.title.length <= 60 ? "text-green-600" : "text-red-600"}>
                      {formData.title.length >= 5 && formData.title.length <= 60 ? "✓" : "✗"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Content length</span>
                    <span className={formData.content.split(/\s+/).length >= 300 ? "text-green-600" : "text-red-600"}>
                      {formData.content.split(/\s+/).length >= 300 ? "✓" : "✗"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Has cover image</span>
                    <span className={formData.coverImage ? "text-green-600" : "text-red-600"}>
                      {formData.coverImage ? "✓" : "✗"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Has tags</span>
                    <span className={formData.tags.length >= 1 ? "text-green-600" : "text-red-600"}>
                      {formData.tags.length >= 1 ? "✓" : "✗"}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* SEO Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Settings className="h-4 w-4" />
                  SEO Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="seoTitle">SEO Title</Label>
                  <Input
                    id="seoTitle"
                    value={formData.seoTitle || ""}
                    onChange={(e) => handleInputChange("seoTitle", e.target.value)}
                    placeholder="Auto-generated from title"
                    maxLength={60}
                  />
                  <div className="text-xs text-gray-500">
                    {(formData.seoTitle || "").length}/60 characters
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="seoDescription">Meta Description</Label>
                  <Textarea
                    id="seoDescription"
                    value={formData.seoDescription || ""}
                    onChange={(e) => handleInputChange("seoDescription", e.target.value)}
                    placeholder="Auto-generated from content"
                    rows={3}
                    maxLength={160}
                  />
                  <div className="text-xs text-gray-500">
                    {(formData.seoDescription || "").length}/160 characters
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Publishing Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Calendar className="h-4 w-4" />
                  Publishing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select value={formData.status} onValueChange={(value: any) => handleInputChange("status", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="review">Ready for Review</SelectItem>
                      <SelectItem value="scheduled">Scheduled</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="author">Author</Label>
                  <Input
                    id="author"
                    value={formData.author}
                    onChange={(e) => handleInputChange("author", e.target.value)}
                    placeholder="Author name"
                  />
                </div>

                {formData.status === "scheduled" && (
                  <div className="space-y-2">
                    <Label htmlFor="scheduledAt">Schedule Date</Label>
                    <Input
                      id="scheduledAt"
                      type="datetime-local"
                      value={formData.scheduledAt || ""}
                      onChange={(e) => handleInputChange("scheduledAt", e.target.value)}
                    />
                  </div>
                )}

                {formData.publishedAt && (
                  <div className="text-sm text-gray-600 p-3 bg-gray-50 rounded">
                    <Clock className="h-4 w-4 inline mr-1" />
                    Published: {new Date(formData.publishedAt).toLocaleDateString()}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Media Selector Dialog */}
      <MediaSelector
        isOpen={showMediaSelector}
        onClose={() => setShowMediaSelector(false)}
        onSelect={handleMediaSelect}
        selectedFile={selectedMedia}
      />
    </div>
  );
}