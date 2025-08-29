"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  MessageSquare, 
  FileText, 
  Settings,
  Eye,
  Edit,
  Trash2,
  Plus,
  LogOut,
  Image
} from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { BlogDetailDialog } from "@/components/dashboard/BlogDetailDialog";
import type { User } from "@supabase/supabase-js";

interface BlogPost {
  id: number;
  title: string;
  status: string;
  author: string;
  publishedAt: string | null;
  views: number;
}

// Dashboard stats configuration
const getStatsConfig = (stats: { totalInquiries: number; unreadInquiries: number; totalBlogs: number }) => [
  {
    title: "Total Inquiries",
    value: stats.totalInquiries.toString(),
    icon: MessageSquare
  },
  {
    title: "Unread Inquiries",
    value: stats.unreadInquiries.toString(),
    icon: Users
  },
  {
    title: "Blog Posts",
    value: stats.totalBlogs.toString(),
    icon: FileText
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "new": return "bg-blue-100 text-blue-800";
    case "in_progress": return "bg-yellow-100 text-yellow-800";
    case "contacted": return "bg-purple-100 text-purple-800";
    case "follow_up": return "bg-orange-100 text-orange-800";
    case "closed": return "bg-green-100 text-green-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high": return "bg-red-100 text-red-800";
    case "medium": return "bg-yellow-100 text-yellow-800";
    case "low": return "bg-green-100 text-green-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

const capitalizeStatus = (status: string) => {
  return status.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

const capitalizePriority = (priority: string) => {
  return priority.charAt(0).toUpperCase() + priority.slice(1);
};

const capitalizeBlogStatus = (status: string) => {
  return status.charAt(0).toUpperCase() + status.slice(1);
};

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedBlogPost, setSelectedBlogPost] = useState<Record<string, unknown> | null>(null);
  const [showBlogDetail, setShowBlogDetail] = useState(false);
  
  // Delete confirmation states
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteItem, setDeleteItem] = useState<Record<string, unknown> | null>(null);
  const [deleteType, setDeleteType] = useState<'inquiry' | 'blog'>('inquiry');
  
  // Data from Supabase
  const [inquiries, setInquiries] = useState<Record<string, unknown>[]>([]);
  const [blogs, setBlogs] = useState<Record<string, unknown>[]>([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [dashboardStats, setDashboardStats] = useState({
    totalInquiries: 0,
    unreadInquiries: 0,
    totalBlogs: 0
  });
  
  const router = useRouter();
  const supabase = createClient();
  const initialDataLoaded = useRef(false);

  const fetchData = useCallback(async () => {
    try {
      console.log('Starting data fetch...');
      setDataLoading(true);
      
      // Fetch leads (inquiries) - using correct table name
      console.log('Fetching leads...');
      const { data: inquiriesData, error: leadsError } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });
      
      console.log('Leads fetch result:', { inquiriesData, leadsError });
      
      // Fetch blog posts
      console.log('Fetching blog posts...');
      const { data: blogsData, error: blogsError } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });
      
      console.log('Blogs fetch result:', { blogsData, blogsError });
      
      if (inquiriesData) {
        const formattedInquiries = inquiriesData.map(inquiry => ({
          id: inquiry.id,
          name: inquiry.name,
          email: inquiry.email,
          company: inquiry.company,
          message: inquiry.message,
          status: inquiry.status,
          priority: inquiry.priority,
          createdAt: inquiry.created_at,
          source: inquiry.source,
          whatsapp: inquiry.whatsapp || inquiry.phone,
          country: inquiry.country,
          sourceUrl: inquiry.utm_source || inquiry.referrer || 'Unknown'
        }));
        setInquiries(formattedInquiries);
        
        // Calculate stats
        const totalInquiries = inquiriesData.length;
        const unreadInquiries = inquiriesData.filter(inquiry => 
          inquiry.status === 'new' || inquiry.status === 'contacted'
        ).length;
        
        console.log('Stats calculated:', { totalInquiries, unreadInquiries });
        
        setDashboardStats(prev => ({
          ...prev,
          totalInquiries,
          unreadInquiries
        }));
      }
      
      if (blogsData) {
        setBlogs(blogsData);
        setDashboardStats(prev => ({
          ...prev,
          totalBlogs: blogsData.length
        }));
      }
      
      console.log('Data fetch completed successfully');
      
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setDataLoading(false);
    }
  }, [supabase]);

  // Manual refresh function for when we need to re-fetch data
  // const refreshData = async () => {
  //   console.log('Manually refreshing data...');
  //   await fetchData();
  // };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        console.log('Checking authentication...');
        const { data: { user }, error } = await supabase.auth.getUser();
        console.log('Auth check result:', { user, error });
        
        if (!user) {
          console.log('No user found, redirecting to login...');
          router.push('/auth/login');
          return;
        }
        
        console.log('User authenticated:', user.email);
        setUser(user);
        setLoading(false);
      } catch (error) {
        console.error('Authentication error:', error);
        setLoading(false);
      }
    };

    // Add timeout to prevent infinite loading
    const loadingTimeout = setTimeout(() => {
      console.log('Loading timeout reached, forcing stop...');
      setLoading(false);
    }, 10000); // 10 seconds timeout

    checkAuth();
    
    // Clear timeout if auth completes early
    return () => clearTimeout(loadingTimeout);
  }, [router, supabase.auth]);

  // Separate useEffect for subscription setup after auth
  useEffect(() => {
    if (!user) return; // Only set up subscription if user is authenticated

    console.log('Setting up real-time subscription...');
    
    // Set up real-time subscription for leads and blog posts
    const subscription = supabase
      .channel('dashboard-changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'leads' },
        () => {
          console.log('Lead change detected, refreshing data...');
          fetchData();
        }
      )
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'posts' },
        () => {
          console.log('Blog post change detected, refreshing data...');
          fetchData();
        }
      )
      .subscribe(async (status) => {
        console.log('Subscription status:', status);
        if (status === 'SUBSCRIBED') {
          // Only fetch data once when subscription is ready
          if (!initialDataLoaded.current) {
            console.log('Initial data load starting...');
            await fetchData();
            initialDataLoaded.current = true;
          }
        }
      }
    );

    return () => {
      console.log('Cleaning up subscription...');
      subscription.unsubscribe();
    };
  }, [user, fetchData, supabase]);

  const handleViewInquiry = (inquiry: Record<string, unknown>) => {
    // Navigate directly to inquiry detail page instead of showing dialog
    router.push(`/dashboard/inquiries/${inquiry.id}`);
  };

  const handleEditInquiry = (inquiry: Record<string, unknown>) => {
    // For now, we'll navigate to a dedicated inquiry detail page
    router.push(`/dashboard/inquiries/${inquiry.id}`);
  };

  const handleDeleteInquiry = (inquiry: Record<string, unknown>) => {
    setDeleteItem(inquiry);
    setDeleteType('inquiry');
    setShowDeleteConfirm(true);
  };

  const handleDeleteBlog = (post: Record<string, unknown>) => {
    setDeleteItem(post);
    setDeleteType('blog');
    setShowDeleteConfirm(true);
  };

  const confirmDelete = async () => {
    if (!deleteItem) return;

    try {
      if (deleteType === 'inquiry') {
        await supabase
          .from('leads')
          .delete()
          .eq('id', deleteItem.id);
      } else {
        await supabase
          .from('posts')
          .delete()
          .eq('id', deleteItem.id);
      }
      
      // Refresh data after successful deletion
      await fetchData();
      
    } catch (error) {
      console.error(`Error deleting ${deleteType}:`, error);
    } finally {
      setShowDeleteConfirm(false);
      setDeleteItem(null);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/auth/sign-in');
  };

  const handleCreateBlog = () => {
    router.push('/dashboard/blog/edit');
  };

  const handleViewBlogPost = (post: Record<string, unknown>) => {
    setSelectedBlogPost(post);
    setShowBlogDetail(true);
  };

  const handleEditBlog = (post: Record<string, unknown>) => {
    router.push(`/dashboard/blog/edit?id=${post.id}`);
  };

  const handleViewMedia = () => {
    router.push('/dashboard/media');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-arzir-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-arzir-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-arzir-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-arzir-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-arzir-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-heading font-bold text-black">Dashboard</h1>
              <p className="text-arzir-gray-600">Welcome back, {user?.email}</p>
            </div>
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleViewMedia}
                className="flex items-center gap-2"
              >
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <Image className="h-4 w-4" />
                Media Library
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleSignOut}
                className="flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-arzir-gray-200">
        <div className="px-6">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab("overview")}
              className={`py-4 border-b-2 font-medium text-sm ${
                activeTab === "overview"
                  ? "border-arzir-primary text-arzir-primary"
                  : "border-transparent text-arzir-gray-600 hover:text-arzir-gray-900"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("inquiries")}
              className={`py-4 border-b-2 font-medium text-sm ${
                activeTab === "inquiries"
                  ? "border-arzir-primary text-arzir-primary"
                  : "border-transparent text-arzir-gray-600 hover:text-arzir-gray-900"
              }`}
            >
              Inquiries
            </button>
            <button
              onClick={() => setActiveTab("content")}
              className={`py-4 border-b-2 font-medium text-sm ${
                activeTab === "content"
                  ? "border-arzir-primary text-arzir-primary"
                  : "border-transparent text-arzir-gray-600 hover:text-arzir-gray-900"
              }`}
            >
              Content
            </button>
            <button
              onClick={() => setActiveTab("settings")}
              className={`py-4 border-b-2 font-medium text-sm ${
                activeTab === "settings"
                  ? "border-arzir-primary text-arzir-primary"
                  : "border-transparent text-arzir-gray-600 hover:text-arzir-gray-900"
              }`}
            >
              Settings
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getStatsConfig(dashboardStats).map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-arzir-gray-600">{stat.title}</p>
                        <div className="text-2xl font-bold text-black">
                          {dataLoading ? (
                            <div className="w-8 h-8 border-2 border-arzir-primary border-t-transparent rounded-full animate-spin"></div>
                          ) : (
                            stat.value
                          )}
                        </div>
                      </div>
                      <stat.icon className="h-8 w-8 text-arzir-primary" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Inquiries */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Recent Inquiries
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setActiveTab("inquiries")}
                    >
                      View All
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {dataLoading ? (
                    <div className="text-center py-8">
                      <div className="w-6 h-6 border-2 border-arzir-primary border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                      <p className="text-sm text-arzir-gray-600">Loading inquiries...</p>
                    </div>
                  ) : inquiries.length === 0 ? (
                    <div className="text-center py-8">
                      <MessageSquare className="h-12 w-12 text-arzir-gray-400 mx-auto mb-4" />
                      <p className="text-arzir-gray-600">No inquiries yet</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {inquiries.slice(0, 5).map((inquiry) => (
                        <div 
                          key={String(inquiry.id)} 
                          className="p-4 border border-arzir-gray-200 rounded-lg hover:bg-arzir-gray-50 cursor-pointer"
                          onClick={() => handleViewInquiry(inquiry)}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-medium text-black">{inquiry.name as string}</h4>
                              <p className="text-xs text-arzir-gray-500">{(inquiry.company as string) || "Individual"}</p>
                              <p className="text-sm text-arzir-gray-600 mt-1 line-clamp-2">
                                {(inquiry.message as string)?.substring(0, 100)}...
                              </p>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                              <Badge className={getStatusColor(inquiry.status as string)}>
                                {capitalizeStatus(inquiry.status as string)}
                              </Badge>
                              <Badge className={getPriorityColor(inquiry.priority as string)}>
                                {capitalizePriority(inquiry.priority as string)}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Recent Blog Posts */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Blog Posts
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setActiveTab("content")}
                    >
                      View All
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {dataLoading ? (
                    <div className="text-center py-8">
                      <div className="w-6 h-6 border-2 border-arzir-primary border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                      <p className="text-sm text-arzir-gray-600">Loading blog posts...</p>
                    </div>
                  ) : blogs.length === 0 ? (
                    <div className="text-center py-8">
                      <FileText className="h-12 w-12 text-arzir-gray-400 mx-auto mb-4" />
                      <p className="text-arzir-gray-600">No blog posts yet</p>
                      <Button 
                        className="mt-4" 
                        size="sm"
                        onClick={handleCreateBlog}
                      >
                        Create First Post
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {blogs.slice(0, 5).map((post) => (
                        <div 
                          key={String(post.id)} 
                          className="p-4 border border-arzir-gray-200 rounded-lg hover:bg-arzir-gray-50 cursor-pointer"
                          onClick={() => handleViewBlogPost(post)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <h4 className="font-medium text-black">{post.title as string}</h4>
                              <div className="flex items-center gap-4 mt-1">
                                <div className="text-sm text-arzir-gray-500">{(post.company as string) || "Individual"}</div>
                                <Badge className={getStatusColor(post.status as string)}>
                                  {capitalizeStatus(post.status as string)}
                                </Badge>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleEditBlog(post);
                                }}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDeleteBlog(post);
                                }}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "inquiries" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-heading font-semibold text-black">Customer Inquiries</h2>
            </div>

            {dataLoading ? (
              <div className="text-center py-12">
                <div className="w-8 h-8 border-4 border-arzir-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-arzir-gray-600">Loading inquiries...</p>
              </div>
            ) : inquiries.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <MessageSquare className="h-16 w-16 text-arzir-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-black mb-2">No inquiries yet</h3>
                  <p className="text-arzir-gray-600">Customer inquiries will appear here when submitted through your website.</p>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-arzir-gray-50 border-b border-arzir-gray-200">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-arzir-gray-500 uppercase tracking-wider">
                            Customer
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-arzir-gray-500 uppercase tracking-wider">
                            Message
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-arzir-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-arzir-gray-500 uppercase tracking-wider">
                            Priority
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-arzir-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-arzir-gray-200">
                        {inquiries.map((inquiry) => (
                          <tr key={String(inquiry.id)} className="hover:bg-arzir-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div>
                                <div className="text-sm font-medium text-black">{inquiry.name as string}</div>
                                <div className="text-sm text-arzir-gray-500">{(inquiry.company as string) || "Individual"}</div>
                                <div className="text-sm text-arzir-gray-500">{inquiry.email as string}</div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="text-sm text-arzir-gray-900 max-w-xs">
                                {(inquiry.message as string)?.substring(0, 100)}...
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <Badge className={getStatusColor(inquiry.status as string)}>
                                {capitalizeStatus(inquiry.status as string)}
                              </Badge>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <Badge className={getPriorityColor(inquiry.priority as string)}>
                                {capitalizePriority(inquiry.priority as string)}
                              </Badge>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <div className="flex items-center gap-2">
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => handleViewInquiry(inquiry)}
                                >
                                  <Eye className="h-4 w-4" />
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => handleEditInquiry(inquiry)}
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => handleDeleteInquiry(inquiry)}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {activeTab === "content" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-heading font-semibold text-black">Content Management</h2>
              <Button onClick={handleCreateBlog} className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                New Blog Post
              </Button>
            </div>

            {dataLoading ? (
              <div className="text-center py-12">
                <div className="w-8 h-8 border-4 border-arzir-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-arzir-gray-600">Loading content...</p>
              </div>
            ) : blogs.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <FileText className="h-16 w-16 text-arzir-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-black mb-2">No blog posts yet</h3>
                  <p className="text-arzir-gray-600 mb-4">Start creating content to engage with your audience.</p>
                  <Button onClick={handleCreateBlog}>
                    Create Your First Post
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((post) => (
                  <Card key={String(post.id)} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-medium text-black">{post.title as string}</h3>
                          <p className="text-sm text-arzir-gray-600 mt-1">
                            {(post.excerpt as string) || "No excerpt available"}
                          </p>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <Badge className={getStatusColor(post.status as string)}>
                            {capitalizeBlogStatus(post.status as string)}
                          </Badge>
                          <div className="flex items-center gap-2">
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => handleViewBlogPost(post)}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => handleEditBlog(post)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => handleDeleteBlog(post)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "settings" && (
          <div className="space-y-6">
            <h2 className="text-xl font-heading font-semibold text-black">Settings</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    User Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-arzir-gray-600 mb-4">Manage user accounts and permissions.</p>
                  <Button 
                    variant="outline"
                    onClick={() => console.log('User management coming soon')}
                  >
                    Manage Users
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Site Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-arzir-gray-600 mb-4">Configure site settings and preferences.</p>
                  <Button variant="outline">
                    Site Settings
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>

      {/* Blog Detail Dialog */}
      <BlogDetailDialog
        post={selectedBlogPost as unknown as BlogPost}
        isOpen={showBlogDetail}
        onClose={() => {
          setShowBlogDetail(false);
          setSelectedBlogPost(null);
        }}
      />

      {/* Delete Confirmation Dialog */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-medium text-black mb-2">Confirm Deletion</h3>
            <p className="text-arzir-gray-600 mb-4">
              Are you sure you want to delete this {deleteType}? This action cannot be undone.
              {deleteItem && (
                <span className="block mt-2 font-medium">
                  {deleteType === 'inquiry' 
                    ? `Inquiry from ${deleteItem?.name} (${(deleteItem?.company as string) || 'Individual'})`
                    : `Blog post: ${deleteItem?.title}`
                  }
                </span>
              )}
            </p>
            <div className="flex justify-end gap-3">
              <Button 
                variant="outline" 
                onClick={() => {
                  setShowDeleteConfirm(false);
                  setDeleteItem(null);
                }}
              >
                Cancel
              </Button>
              <Button 
                variant="destructive" 
                onClick={confirmDelete}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}