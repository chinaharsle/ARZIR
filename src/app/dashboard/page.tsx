"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  MessageSquare, 
  FileText, 
  BarChart3, 
  Settings, 
  Mail,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Eye,
  Edit,
  Trash2,
  Plus,
  LogOut,
  Image
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import { InquiryDetailDialog } from "@/components/dashboard/InquiryDetailDialog";
import { BlogDetailDialog } from "@/components/dashboard/BlogDetailDialog";
import { UserManagementDialog } from "@/components/dashboard/UserManagementDialog";
import { UserManagementSection } from "@/components/dashboard/UserManagementSection";
import { DeleteConfirmDialog } from "@/components/dashboard/DeleteConfirmDialog";

// Updated realistic data for ARZIR dashboard
const dashboardStats = [
  {
    title: "Total Inquiries",
    value: "89",
    change: "+6.2%",
    trend: "up",
    icon: MessageSquare
  },
  {
    title: "Blog Posts",
    value: "6",
    change: "+1",
    trend: "up", 
    icon: FileText
  },
  {
    title: "Active Quotes",
    value: "12",
    change: "+3",
    trend: "up",
    icon: Users
  },
  {
    title: "Monthly Visits",
    value: "5.8K",
    change: "+9.1%",
    trend: "up",
    icon: TrendingUp
  }
];

const recentInquiries = [
  {
    id: 1,
    name: "Michael Zhang",
    company: "Shanghai Recycling Co.",
    email: "michael@shangrecycle.com",
    whatsapp: "+86 138 0013 8888",
    message: "Hello, we are a recycling company based in Shanghai. We are interested in purchasing recycling equipment for our new facility. Could you please provide detailed specifications, pricing information, and delivery timeline? Our current processing capacity is around 50 tons per day and we're looking to expand. We would also like to know about installation services and operator training programs. Thank you for your time.",
    status: "new",
    createdAt: "2025-08-16T14:20:00Z",
    priority: "high",
    source: "contact_page",
    sourceUrl: "https://www.arzir.com/contact",
    country: "China",
    ipAddress: "116.228.111.118"
  },
  {
    id: 2,
    name: "Sarah Kim", 
    company: "Pacific Steel Solutions",
    email: "sarah@pacificsteel.com",
    whatsapp: "+1 555 123 4567",
    message: "We are evaluating different metal processing equipment for our scrap operation. We process mainly steel bars and pipes and need efficient cutting solutions. Can you send us technical specifications, cutting force details, and power requirements? Also interested in maintenance schedules and spare parts availability. We would appreciate a consultation to discuss our specific needs.",
    status: "contacted",
    createdAt: "2025-08-16T10:15:00Z",
    priority: "medium",
    source: "website_form",
    sourceUrl: "https://www.arzir.com/products/scrap-metal-shear",
    country: "United States",
    ipAddress: "192.0.2.146"
  },
  {
    id: 3,
    name: "Ahmed Hassan",
    company: "Emirates Metal Trading",
    email: "ahmed@emiratesmetal.ae",
    whatsapp: "+971 50 123 4567",
    message: "Greetings from Dubai! We operate one of the largest car dismantling facilities in the UAE and are looking to improve our processing efficiency. Please provide: 1) Detailed equipment specifications and capabilities, 2) Power consumption details, 3) Complete pricing including shipping to Dubai, 4) Installation and commissioning timeline, 5) Training program for our operators. We plan to process approximately 200 units per month. Looking forward to your response.",
    status: "proposal_sent",
    createdAt: "2025-08-15T16:30:00Z",
    priority: "high",
    source: "contact_page",
    sourceUrl: "https://www.arzir.com/contact",
    country: "United Arab Emirates",
    ipAddress: "185.46.212.97"
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    company: "EcoMetal Solutions",
    email: "elena@ecometal.es", 
    whatsapp: "+34 666 789 012",
    message: "Buenos días! We are expanding our metal recycling operations in Spain and need robust equipment for mixed metal waste processing. Could you provide information about: throughput capacity, noise levels (we have residential neighbors), energy efficiency ratings, and maintenance requirements? We would also appreciate a virtual demonstration if possible. Thank you for your assistance.",
    status: "follow_up",
    createdAt: "2025-08-15T09:45:00Z",
    priority: "medium",
    source: "contact_page",
    sourceUrl: "https://www.arzir.com/contact",
    country: "Spain",
    ipAddress: "88.8.233.195"
  }
];

const blogPosts = [
  {
    id: 1,
    title: "Steel Mill Scrap Processing Best Practices",
    status: "published",
    author: "ARZIR Engineering",
    publishedAt: "2025-08-12",
    views: 1456
  },
  {
    id: 2,
    title: "Understanding Bale Density: Impact on Transport and Value",
    status: "published", 
    author: "Technical Team",
    publishedAt: "2025-08-08",
    views: 987
  },
  {
    id: 3,
    title: "Automotive Dismantling Equipment Solutions",
    status: "published",
    author: "Product Specialists",
    publishedAt: "2025-08-05",
    views: 834
  },
  {
    id: 4,
    title: "Aluminum Extrusion Press Technology Guide",
    status: "published",
    author: "Engineering Team",
    publishedAt: "2025-08-01",
    views: 692
  },
  {
    id: 5,
    title: "Briquetting Machine Applications",
    status: "published",
    author: "Applications Team",
    publishedAt: "2025-07-28",
    views: 543
  },
  {
    id: 6,
    title: "Recycling Industry Trends 2025",
    status: "published",
    author: "Market Analysis",
    publishedAt: "2025-07-25",
    views: 1203
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "new": return "bg-blue-100 text-blue-800";
    case "contacted": return "bg-yellow-100 text-yellow-800";
    case "proposal_sent": return "bg-purple-100 text-purple-800";
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
  const [selectedInquiry, setSelectedInquiry] = useState<any>(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState<any>(null);
  const [showInquiryDetail, setShowInquiryDetail] = useState(false);
  const [showBlogDetail, setShowBlogDetail] = useState(false);
  const [showCreateBlog, setShowCreateBlog] = useState(false);
  const [showUserManagement, setShowUserManagement] = useState(false);
  
  // Delete confirmation states
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteItem, setDeleteItem] = useState<any>(null);
  const [deleteType, setDeleteType] = useState<'inquiry' | 'blog'>('inquiry');
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Local data states for real deletion - now fetch from Supabase
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [blogs, setBlogs] = useState<any[]>([]);
  const [dataLoading, setDataLoading] = useState(true);
  
  // Ref to track if initial data has been loaded to prevent unnecessary re-fetches
  const initialDataLoaded = useRef(false);
  
  const router = useRouter();
  const supabase = createClient();

  // Fetch data from Supabase
  const fetchData = async () => {
    try {
      setDataLoading(true);
      
      // Fetch inquiries from leads table - start with basic query
      const { data: leadsData, error: leadsError } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (leadsError) {
        console.error('Error fetching leads:', leadsError);
      } else {
        // Filter out deleted items in JavaScript - only check name prefix
        const filteredLeads = leadsData.filter(lead => 
          !lead.name?.startsWith('[DELETED]')
        );
        
        // Map database fields to component expected format
        const mappedInquiries = filteredLeads.map(lead => ({
          id: lead.id,
          name: lead.name,
          company: lead.company,
          email: lead.email,
          whatsapp: lead.whatsapp || lead.phone,
          message: lead.message,
          status: lead.status,
          createdAt: lead.created_at,
          priority: lead.priority,
          source: lead.source,
          sourceUrl: lead.utm_source,
          country: lead.country,
          ipAddress: lead.ip
        }));
        setInquiries(mappedInquiries);
        console.log('Fetched inquiries from database:', mappedInquiries.length);
      }

      // Fetch blog posts from posts table
      const { data: postsData, error: postsError } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (postsError) {
        console.error('Error fetching posts:', postsError);
      } else {
        // Map database fields to component expected format
        const mappedBlogs = postsData.map(post => ({
          id: post.id,
          title: post.title,
          status: post.status,
          author: post.author_name || 'ARZIR Editorial Team',
          publishedAt: post.published_at,
          views: post.view_count || 0
        }));
        setBlogs(mappedBlogs);
        console.log('Fetched blog posts from database:', mappedBlogs.length);
      }
      
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setDataLoading(false);
    }
  };

  // Manual refresh function for when we need to re-fetch data
  const refreshData = async () => {
    console.log('Manually refreshing data...');
    await fetchData();
  };

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/auth/login');
        return;
      }
      setUser(user);
      setLoading(false);
      
      // Only fetch data if it hasn't been loaded before
      if (!initialDataLoaded.current) {
        await fetchData();
        initialDataLoaded.current = true;
      }
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_OUT' || !session) {
          router.push('/auth/login');
          initialDataLoaded.current = false; // Reset when signed out
        } else if (session?.user && !user) {
          // Only fetch data if user was not already set and data hasn't been loaded
          setUser(session.user);
          setLoading(false);
          if (!initialDataLoaded.current) {
            fetchData();
            initialDataLoaded.current = true;
          }
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [router, supabase.auth]);

  const handleViewInquiry = (inquiry: any) => {
    // Navigate directly to inquiry detail page instead of showing dialog
    router.push(`/dashboard/inquiries/${inquiry.id}`);
  };

  const handleEditInquiry = (inquiry: any) => {
    // For now, we'll navigate to a dedicated inquiry detail page
    router.push(`/dashboard/inquiries/${inquiry.id}`);
  };

  const handleDeleteInquiry = (inquiry: any) => {
    setDeleteItem(inquiry);
    setDeleteType('inquiry');
    setShowDeleteConfirm(true);
  };

  const handleDeleteBlog = (post: any) => {
    setDeleteItem(post);
    setDeleteType('blog');
    setShowDeleteConfirm(true);
  };

  const confirmDelete = async () => {
    if (!deleteItem) return;
    
    setIsDeleting(true);
    
    try {
      if (deleteType === 'inquiry') {
        console.log('Frontend: Attempting to delete inquiry with ID:', deleteItem.id);
        
        // Use API route for server-side deletion
        const response = await fetch(`/api/leads/${deleteItem.id}`, {
          method: 'DELETE',
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          console.error('Frontend: API error deleting inquiry:', errorData);
          throw new Error(errorData.error || 'Failed to delete inquiry');
        }
        
        const result = await response.json();
        console.log('Frontend: Successfully deleted inquiry via API:', result);
        
        // Remove from local state immediately (works for both hard and soft delete)
        setInquiries(prev => {
          const filtered = prev.filter(item => item.id !== deleteItem.id);
          console.log('Frontend: Updated local inquiries state, remaining count:', filtered.length);
          return filtered;
        });
        
      } else if (deleteType === 'blog') {
        console.log('Frontend: Attempting to delete blog post with ID:', deleteItem.id);
        
        // Use API route for server-side deletion
        const response = await fetch(`/api/posts/${deleteItem.id}`, {
          method: 'DELETE',
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          console.error('Frontend: API error deleting blog post:', errorData);
          throw new Error(errorData.error || 'Failed to delete blog post');
        }
        
        const result = await response.json();
        console.log('Frontend: Successfully deleted blog post via API:', result);
        
        // Remove from local state immediately
        setBlogs(prev => {
          const filtered = prev.filter(item => item.id !== deleteItem.id);
          console.log('Frontend: Updated local blogs state, remaining count:', filtered.length);
          return filtered;
        });
      }
      
      // Reset deleting state - the success dialog will handle closing
      setIsDeleting(false);
      
      console.log('Frontend: Deletion process completed successfully');
      
    } catch (error) {
      console.error('Frontend: Error during deletion process:', error);
      setIsDeleting(false);
      
      // Show detailed error message
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      alert(`Error deleting item: ${errorMessage}. Please try again.`);
    }
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(false);
    setDeleteItem(null);
    setIsDeleting(false);
  };

  const handleViewBlogPost = (post: any) => {
    setSelectedBlogPost(post);
    setShowBlogDetail(true);
  };

  const handleCreateBlog = () => {
    router.push('/dashboard/blog/edit?mode=create');
  };

  const handleEditBlog = (post: any) => {
    router.push(`/dashboard/blog/edit?id=${post.id}`);
  };

  const handleOpenSettings = () => {
    setActiveTab("users");
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/auth/login');
  };

  if (loading || dataLoading) {
    return (
      <div className="min-h-screen bg-arzir-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-arzir-primary mx-auto mb-4"></div>
          <p className="text-arzir-gray-600">
            {loading ? 'Loading dashboard...' : 'Loading data...'}
          </p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-arzir-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-arzir-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-heading font-bold text-black">ARZIR Dashboard</h1>
              <div className="text-sm text-arzir-gray-600">
                Welcome back, {user.email}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" onClick={handleOpenSettings}>
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button size="sm" className="bg-arzir-primary" onClick={handleCreateBlog}>
                <Plus className="h-4 w-4 mr-2" />
                New Post
              </Button>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-arzir-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: "overview", label: "Overview", icon: BarChart3 },
              { id: "inquiries", label: "Inquiries", icon: MessageSquare },
              { id: "blog", label: "Blog", icon: FileText },
              { id: "media", label: "Media", icon: Image },
              { id: "users", label: "Users", icon: Users }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  if (tab.id === 'media') {
                    router.push('/dashboard/media');
                  } else {
                    setActiveTab(tab.id);
                  }
                }}
                className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? "border-arzir-primary text-arzir-primary"
                    : "border-transparent text-arzir-gray-500 hover:text-arzir-gray-700 hover:border-arzir-gray-300"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dashboardStats.map((stat, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-arzir-gray-600">
                      {stat.title}
                    </CardTitle>
                    <stat.icon className="h-4 w-4 text-arzir-gray-400" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-black">{stat.value}</div>
                    <p className={`text-xs ${stat.trend === 'up' ? 'text-green-600' : 'text-arzir-gray-500'}`}>
                      {stat.change} from last month
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Inquiries */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-heading font-semibold text-black">
                    Recent Inquiries
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {inquiries.slice(0, 3).map((inquiry) => (
                      <div key={inquiry.id} className="flex items-center justify-between py-3 border-b border-arzir-gray-100 last:border-0">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-medium text-black text-sm">{inquiry.name}</p>
                            <Badge className={`text-xs ${getPriorityColor(inquiry.priority)}`}>
                              {capitalizePriority(inquiry.priority)}
                            </Badge>
                          </div>
                          <p className="text-xs text-arzir-gray-500">{inquiry.company || "Individual"}</p>
                          <p className="text-xs text-arzir-gray-600 line-clamp-1">{inquiry.message}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={getStatusColor(inquiry.status)}>
                            {capitalizeStatus(inquiry.status)}
                          </Badge>
                          <Button variant="ghost" size="sm" onClick={() => handleViewInquiry(inquiry)}>
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Blog Performance */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-heading font-semibold text-black">
                    Blog Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {blogs.map((post) => (
                      <div key={post.id} className="flex items-center justify-between py-3 border-b border-arzir-gray-100 last:border-0">
                        <div className="flex-1">
                          <p 
                            className="font-medium text-black text-sm line-clamp-1 cursor-pointer hover:text-arzir-primary transition-colors" 
                            onClick={() => handleViewBlogPost(post)}
                          >
                            {post.title}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <p className="text-xs text-arzir-gray-500">{post.author}</p>
                            <Badge className={post.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                              {capitalizeBlogStatus(post.status)}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right cursor-pointer hover:bg-arzir-gray-50 p-2 rounded transition-colors" onClick={() => handleViewBlogPost(post)}>
                          <p className="text-sm font-medium text-black">{post.views} views</p>
                          <p className="text-xs text-arzir-gray-500">
                            {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Draft'}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "inquiries" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-heading font-bold text-black">Inquiries Management</h2>
              <Button className="bg-arzir-primary">
                <Mail className="h-4 w-4 mr-2" />
                Send Email
              </Button>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-arzir-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-medium text-arzir-gray-500 uppercase tracking-wider">
                          Contact
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-arzir-gray-500 uppercase tracking-wider">
                          Message Preview
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-arzir-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-arzir-gray-500 uppercase tracking-wider">
                          Priority
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-arzir-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-arzir-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-arzir-gray-200">
                    {inquiries.map((inquiry) => (
                        <tr key={inquiry.id} className="hover:bg-arzir-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-black">{inquiry.name}</div>
                              <div className="text-sm text-arzir-gray-500">{inquiry.company || "Individual"}</div>
                              <div className="text-xs text-arzir-gray-400">{inquiry.email}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-arzir-gray-700 max-w-xs">
                              <p className="line-clamp-2">{inquiry.message}</p>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Badge className={getStatusColor(inquiry.status)}>
                              {capitalizeStatus(inquiry.status)}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Badge className={getPriorityColor(inquiry.priority)}>
                              {capitalizePriority(inquiry.priority)}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-arzir-gray-500">
                            {new Date(inquiry.createdAt).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="sm" onClick={() => handleViewInquiry(inquiry)}>
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" onClick={() => handleEditInquiry(inquiry)}>
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700" onClick={() => handleDeleteInquiry(inquiry)}>
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
          </div>
        )}

        {activeTab === "blog" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-heading font-bold text-black">Blog Management</h2>
              <Button className="bg-arzir-primary" onClick={handleCreateBlog}>
                <Plus className="h-4 w-4 mr-2" />
                New Post
              </Button>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-arzir-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-medium text-arzir-gray-500 uppercase tracking-wider">
                          Title
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-arzir-gray-500 uppercase tracking-wider">
                          Author
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-arzir-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-arzir-gray-500 uppercase tracking-wider">
                          Views
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-arzir-gray-500 uppercase tracking-wider">
                          Published
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-arzir-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-arzir-gray-200">
                      {blogs.map((post) => (
                        <tr key={post.id} className="hover:bg-arzir-gray-50">
                          <td className="px-6 py-4">
                            <div className="text-sm font-medium text-black line-clamp-2">
                              {post.title}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-arzir-gray-700">
                            {post.author}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Badge className={post.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                              {capitalizeBlogStatus(post.status)}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-arzir-gray-700">
                            {post.views.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-arzir-gray-500">
                            {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Not published'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="sm" onClick={() => handleViewBlogPost(post)}>
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" onClick={() => handleEditBlog(post)}>
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700" onClick={() => handleDeleteBlog(post)}>
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
          </div>
        )}

        {activeTab === "users" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-heading font-bold text-black">User Management</h2>
            </div>

            <UserManagementSection />
          </div>
        )}
      </main>

      {/* Dialog Components */}
      <InquiryDetailDialog 
        inquiry={selectedInquiry}
        isOpen={showInquiryDetail}
        onClose={() => setShowInquiryDetail(false)}
      />
      
      <BlogDetailDialog 
        post={selectedBlogPost}
        isOpen={showBlogDetail}
        onClose={() => setShowBlogDetail(false)}
      />
      
      <BlogDetailDialog 
        isOpen={showCreateBlog}
        onClose={() => setShowCreateBlog(false)}
        isCreating={true}
      />
      
      <UserManagementDialog 
        isOpen={showUserManagement}
        onClose={() => setShowUserManagement(false)}
      />

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmDialog
        isOpen={showDeleteConfirm}
        onClose={cancelDelete}
        onConfirm={confirmDelete}
        title={deleteType === 'inquiry' ? 'Delete Inquiry' : 'Delete Blog Post'}
        description={
          deleteType === 'inquiry' 
            ? 'Are you sure you want to delete this inquiry? This action cannot be undone.'
            : 'Are you sure you want to delete this blog post? This action cannot be undone.'
        }
        itemName={
          deleteType === 'inquiry' 
            ? `Inquiry from ${deleteItem?.name} (${deleteItem?.company || 'Individual'})`
            : `"${deleteItem?.title}"`
        }
        isDeleting={isDeleting}
        deleteType={deleteType}
      />
    </div>
  );
}