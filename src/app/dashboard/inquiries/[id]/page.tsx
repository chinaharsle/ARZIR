"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Mail, 
  Phone, 
  Building, 
  MessageSquare, 
  Calendar, 
  User, 
  Globe, 
  ArrowLeft,
  Save,
  Edit3
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

// Mock data - in real app this would come from API
const mockInquiries = [
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

export default function InquiryDetailPage() {
  const router = useRouter();
  const params = useParams();
  const [inquiry, setInquiry] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/auth/login');
        return;
      }
      
      // Find inquiry by ID (in real app, fetch from API)
      const inquiryId = parseInt(params.id as string);
      const foundInquiry = mockInquiries.find(i => i.id === inquiryId);
      
      if (foundInquiry) {
        setInquiry(foundInquiry);
        setFormData(foundInquiry);
      }
      
      setLoading(false);
    };

    checkAuth();
  }, [params.id, router, supabase.auth]);

  const handleSave = () => {
    // In real app, save to API
    setInquiry(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(inquiry);
    setIsEditing(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-arzir-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-arzir-primary mx-auto mb-4"></div>
          <p className="text-arzir-gray-600">Loading inquiry...</p>
        </div>
      </div>
    );
  }

  if (!inquiry) {
    return (
      <div className="min-h-screen bg-arzir-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black mb-4">Inquiry Not Found</h1>
          <Button onClick={() => router.push('/dashboard')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-arzir-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-arzir-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={() => router.push('/dashboard')}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
              <h1 className="text-2xl font-heading font-bold text-black">
                Inquiry #{inquiry.id.toString().padStart(6, '0')}
              </h1>
            </div>
            <div className="flex items-center gap-3">
              {isEditing ? (
                <>
                  <Button variant="outline" size="sm" onClick={handleCancel}>
                    Cancel
                  </Button>
                  <Button size="sm" className="bg-arzir-primary" onClick={handleSave}>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </>
              ) : (
                <Button size="sm" onClick={() => setIsEditing(true)}>
                  <Edit3 className="h-4 w-4 mr-2" />
                  Edit Inquiry
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Status and Priority */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-heading font-semibold text-black">
                  Inquiry Overview
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Badge className={getStatusColor(inquiry.status)}>
                    {capitalizeStatus(inquiry.status)}
                  </Badge>
                  <Badge className={getPriorityColor(inquiry.priority)}>
                    {capitalizePriority(inquiry.priority)} Priority
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <div className="text-sm text-arzir-gray-600 mb-1">Received Date</div>
                  <div className="font-medium text-black">
                    {new Date(inquiry.createdAt).toLocaleDateString()} at {new Date(inquiry.createdAt).toLocaleTimeString()}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-arzir-gray-600 mb-1">Status</div>
                  {isEditing ? (
                    <Select value={formData.status} onValueChange={(value) => setFormData({...formData, status: value})}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="contacted">Contacted</SelectItem>
                        <SelectItem value="proposal_sent">Proposal Sent</SelectItem>
                        <SelectItem value="follow_up">Follow Up</SelectItem>
                        <SelectItem value="closed">Closed</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    <div className="font-medium text-black">{capitalizeStatus(inquiry.status)}</div>
                  )}
                </div>
                <div>
                  <div className="text-sm text-arzir-gray-600 mb-1">Priority</div>
                  {isEditing ? (
                    <Select value={formData.priority} onValueChange={(value) => setFormData({...formData, priority: value})}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    <div className="font-medium text-black">{capitalizePriority(inquiry.priority)}</div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-heading font-semibold text-black">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <User className="h-4 w-4 text-arzir-gray-400" />
                      <span className="text-sm text-arzir-gray-600">Full Name</span>
                    </div>
                    {isEditing ? (
                      <Input 
                        value={formData.name} 
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    ) : (
                      <div className="font-medium text-black">{inquiry.name}</div>
                    )}
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Building className="h-4 w-4 text-arzir-gray-400" />
                      <span className="text-sm text-arzir-gray-600">Company Name</span>
                    </div>
                    {isEditing ? (
                      <Input 
                        value={formData.company} 
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />
                    ) : (
                      <div className="font-medium text-black">{inquiry.company || "Not provided"}</div>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Mail className="h-4 w-4 text-arzir-gray-400" />
                      <span className="text-sm text-arzir-gray-600">Email Address</span>
                    </div>
                    {isEditing ? (
                      <Input 
                        type="email"
                        value={formData.email} 
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    ) : (
                      <a href={`mailto:${inquiry.email}`} className="font-medium text-arzir-primary hover:underline">
                        {inquiry.email}
                      </a>
                    )}
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare className="h-4 w-4 text-arzir-gray-400" />
                      <span className="text-sm text-arzir-gray-600">WhatsApp</span>
                    </div>
                    {isEditing ? (
                      <Input 
                        value={formData.whatsapp || ""} 
                        onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                      />
                    ) : (
                      inquiry.whatsapp ? (
                        <a 
                          href={`https://wa.me/${inquiry.whatsapp.replace(/[^0-9]/g, '')}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-medium text-arzir-primary hover:underline"
                        >
                          {inquiry.whatsapp}
                        </a>
                      ) : (
                        <div className="text-arzir-gray-500">Not provided</div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Source Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-heading font-semibold text-black">
                Source Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {inquiry.sourceUrl && (
                  <div>
                    <div className="text-sm text-arzir-gray-600 mb-2">Source URL</div>
                    <a 
                      href={inquiry.sourceUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-arzir-primary hover:underline break-all"
                    >
                      {inquiry.sourceUrl}
                    </a>
                  </div>
                )}
                
                {inquiry.country && (
                  <div>
                    <div className="text-sm text-arzir-gray-600 mb-2">Country</div>
                    <div className="font-medium text-black">{inquiry.country}</div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Customer Message */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-heading font-semibold text-black">
                Customer Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isEditing ? (
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={8}
                  className="w-full"
                />
              ) : (
                <div className="bg-arzir-gray-50 rounded-lg p-4 border-l-4 border-arzir-primary">
                  <p className="text-sm text-arzir-gray-700 leading-relaxed whitespace-pre-wrap">
                    {inquiry.message}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

        </div>
      </main>
    </div>
  );
}