"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Edit, Calendar, User } from "lucide-react";
import { useState } from "react";
import { BlogEditor } from "./BlogEditor";

interface BlogPost {
  id: number;
  title: string;
  status: string;
  author: string;
  publishedAt: string | null;
  views: number;
}

interface BlogDialogProps {
  post?: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
  isCreating?: boolean;
}

export function BlogDetailDialog({ post, isOpen, onClose, isCreating = false }: BlogDialogProps) {
  const [showEditor, setShowEditor] = useState(isCreating);

  const handleEdit = () => {
    setShowEditor(true);
  };

  // If we're in editor mode, show the full editor
  if (showEditor) {
    const editorPost = post ? {
      id: post.id,
      title: post.title,
      slug: post.title.toLowerCase().replace(/\s+/g, '-'),
      content: "# Sample Content\n\nThis is sample blog content for the editor.",
      excerpt: "",
      category: "Industry News",
      tags: [],
      status: post.status as "draft" | "published" | "archived",
      author: post.author,
      locale: "en"
    } : undefined;

    return (
      <BlogEditor
        post={editorPost}
        isOpen={isOpen}
        onClose={() => {
          setShowEditor(false);
          if (isCreating) onClose();
        }}
        isCreating={isCreating}
      />
    );
  }

  if (isCreating) {
    return (
      <BlogEditor
        isOpen={isOpen}
        onClose={onClose}
        isCreating={true}
      />
    );
  }

  if (!post) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-heading font-bold text-black">
            Blog Post Details
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Header Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black leading-tight">{post.title}</h3>
            <div className="flex items-center gap-4 flex-wrap">
              <Badge className={post.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                {post.status}
              </Badge>
              <div className="flex items-center gap-2 text-sm text-arzir-gray-500">
                <User className="h-4 w-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2 text-sm text-arzir-gray-500">
                <Calendar className="h-4 w-4" />
                {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Not published'}
              </div>
              <div className="flex items-center gap-2 text-sm text-arzir-gray-500">
                <Eye className="h-4 w-4" />
                {post.views.toLocaleString()} views
              </div>
            </div>
          </div>

          {/* Content Preview */}
          <div className="space-y-4">
            <h4 className="font-semibold text-black">Content Preview</h4>
            <div className="bg-arzir-gray-50 rounded-lg p-6">
              <div className="prose prose-sm max-w-none">
                <p className="text-arzir-gray-700 leading-relaxed">
                  This is a comprehensive guide covering the latest developments in recycling machinery technology. 
                  The article explores advanced features, implementation strategies, and best practices for 
                  maximizing efficiency in industrial recycling operations.
                </p>
                <p className="text-arzir-gray-700 leading-relaxed">
                  Key topics include equipment selection criteria, operational optimization, maintenance 
                  schedules, and cost-benefit analysis for different facility sizes and throughput requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Metadata */}
          <div className="grid grid-cols-2 gap-4 p-4 bg-arzir-gray-50 rounded-lg">
            <div>
              <div className="text-sm text-arzir-gray-600">Reading Time</div>
              <div className="font-medium text-black">~5 minutes</div>
            </div>
            <div>
              <div className="text-sm text-arzir-gray-600">Category</div>
              <div className="font-medium text-black">Technical Analysis</div>
            </div>
            <div>
              <div className="text-sm text-arzir-gray-600">Last Modified</div>
              <div className="font-medium text-black">{new Date().toLocaleDateString()}</div>
            </div>
            <div>
              <div className="text-sm text-arzir-gray-600">SEO Score</div>
              <div className="font-medium text-green-600">Good</div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            <Button className="bg-arzir-primary hover:bg-primary-600" onClick={handleEdit}>
              <Edit className="h-4 w-4 mr-2" />
              Edit Post
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}