"use client";

import React, { useState, useEffect } from "react";
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
  BarChart3
} from "lucide-react";

interface BlogPost {
  id?: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  category: string;
  tags: string[];
  coverImage?: string;
  coverImageAlt?: string;
  status: "draft" | "review" | "scheduled" | "published" | "archived";
  publishedAt?: string;
  scheduledAt?: string;
  author: string;
  locale: string;
  seoTitle?: string;
  seoDescription?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

interface BlogEditorProps {
  post?: BlogPost;
  isOpen: boolean;
  onClose: () => void;
  isCreating?: boolean;
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

const defaultPost: BlogPost = {
  title: "",
  slug: "",
  content: "",
  excerpt: "",
  category: "Industry News",
  tags: [],
  status: "draft",
  author: "ARZIR Editorial Team",
  locale: "en"
};

export function BlogEditor({ post, isOpen, onClose, isCreating = false }: BlogEditorProps) {
  const [formData, setFormData] = useState<BlogPost>(post || defaultPost);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [newTag, setNewTag] = useState("");
  const [seoScore, setSeoScore] = useState(0);

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
  }, [formData.title, formData.slug, isCreating]);

  // Calculate SEO score
  useEffect(() => {
    let score = 0;
    
    // Title length (5-60 chars)
    if (formData.title.length >= 5 && formData.title.length <= 60) score += 15;
    
    // Meta description length (120-160 chars)
    if (formData.seoDescription && formData.seoDescription.length >= 120 && formData.seoDescription.length <= 160) score += 15;
    
    // Content length (800+ words)
    const wordCount = formData.content.split(/\s+/).length;
    if (wordCount >= 800) score += 20;
    
    // Has excerpt
    if (formData.excerpt.length >= 50) score += 10;
    
    // Has cover image
    if (formData.coverImage) score += 10;
    
    // Has tags (1-6)
    if (formData.tags.length >= 1 && formData.tags.length <= 6) score += 10;
    
    // Has category
    if (formData.category) score += 5;
    
    // H2/H3 structure (simplified check)
    const hasHeadings = /#{2,3}\s/.test(formData.content);
    if (hasHeadings) score += 15;
    
    setSeoScore(score);
  }, [formData]);

  const handleInputChange = (field: keyof BlogPost, value: string | string[]) => {
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
    // Generate preview URL
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      {/* Top Navigation Bar */}
      <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 z-10">
        <div className="flex items-center justify-between">
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

              <Button variant="ghost" size="sm" onClick={onClose}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </div>
          </div>
        </div>

        {lastSaved && (
          <div className="text-xs text-gray-500 mt-2">
            Last saved: {lastSaved.toLocaleTimeString()}
          </div>
        )}
      </div>

      <div className="flex">
        {/* Main Content Area */}
        <div className="flex-1 p-6 max-w-4xl">
          <div className="space-y-6">
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

                <div className="grid grid-cols-2 gap-4">
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
                    <Label htmlFor="locale">Language</Label>
                    <Select value={formData.locale} onValueChange={(value) => handleInputChange("locale", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Español</SelectItem>
                        <SelectItem value="pt-BR">Português (BR)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Tags (max 6)</Label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {formData.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary" 
                        className="cursor-pointer"
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
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Image className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Upload cover image (16:9 ratio recommended)</p>
                  <Button variant="outline" size="sm">
                    Choose File
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="coverImageAlt">Alt Text *</Label>
                    <Input
                      id="coverImageAlt"
                      value={formData.coverImageAlt || ""}
                      onChange={(e) => handleInputChange("coverImageAlt", e.target.value)}
                      placeholder="Describe the image for accessibility"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="excerpt">Excerpt</Label>
                    <Textarea
                      id="excerpt"
                      value={formData.excerpt}
                      onChange={(e) => handleInputChange("excerpt", e.target.value)}
                      placeholder="Brief description (50+ characters recommended)"
                      rows={3}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Content Editor */}
            <Card>
              <CardHeader>
                <CardTitle>Content Editor (MDX)</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={formData.content}
                  onChange={(e) => handleInputChange("content", e.target.value)}
                  placeholder="Write your blog post content here... Use ## for H2 headings, ### for H3 headings..."
                  rows={20}
                  className="font-mono text-sm"
                />
                <div className="text-xs text-gray-500 mt-2">
                  {formData.content.split(/\s+/).length} words
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 border-l border-gray-200 p-6 space-y-6">
          {/* SEO Score */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                SEO Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3 mb-4">
                <div className={`text-2xl font-bold ${getSeoScoreColor(seoScore)}`}>
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
                  <span className={formData.content.split(/\s+/).length >= 800 ? "text-green-600" : "text-red-600"}>
                    {formData.content.split(/\s+/).length >= 800 ? "✓" : "✗"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Has excerpt</span>
                  <span className={formData.excerpt.length >= 50 ? "text-green-600" : "text-red-600"}>
                    {formData.excerpt.length >= 50 ? "✓" : "✗"}
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
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                SEO Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="seoTitle">SEO Title</Label>
                <Input
                  id="seoTitle"
                  value={formData.seoTitle || formData.title}
                  onChange={(e) => handleInputChange("seoTitle", e.target.value)}
                  placeholder="SEO optimized title"
                  maxLength={60}
                />
                <div className="text-xs text-gray-500">
                  {(formData.seoTitle || formData.title).length}/60 characters
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="seoDescription">Meta Description</Label>
                <Textarea
                  id="seoDescription"
                  value={formData.seoDescription || ""}
                  onChange={(e) => handleInputChange("seoDescription", e.target.value)}
                  placeholder="SEO meta description (120-160 characters)"
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
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Publishing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select value={formData.status} onValueChange={(value: BlogPost['status']) => handleInputChange("status", value)}>
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
                />
              </div>

              {formData.status === "scheduled" && (
                <div className="space-y-2">
                  <Label htmlFor="scheduledAt">Publish Date</Label>
                  <Input
                    id="scheduledAt"
                    type="datetime-local"
                    value={formData.scheduledAt || ""}
                    onChange={(e) => handleInputChange("scheduledAt", e.target.value)}
                  />
                </div>
              )}

              {formData.publishedAt && (
                <div className="text-sm text-gray-600">
                  <Clock className="h-4 w-4 inline mr-1" />
                  Published: {new Date(formData.publishedAt).toLocaleDateString()}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}