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
  Building, 
  MessageSquare, 
  User, 
  ArrowLeft,
  Save,
  Edit3
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";



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
  const [inquiry, setInquiry] = useState<Record<string, unknown> | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Record<string, unknown>>({});
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/auth/login');
        return;
      }
      
      // Fetch inquiry from database
      try {
        const { data: inquiryData, error } = await supabase
          .from('leads')
          .select('*')
          .eq('id', params.id)
          .single();
        
        if (error) {
          console.error('Error fetching inquiry:', error);
        } else if (inquiryData) {
          const formattedInquiry = {
            id: inquiryData.id,
            name: inquiryData.name,
            email: inquiryData.email,
            company: inquiryData.company,
            message: inquiryData.message,
            status: inquiryData.status || 'new',
            priority: inquiryData.priority || 'medium',
            createdAt: inquiryData.created_at,
            source: inquiryData.source,
            whatsapp: inquiryData.whatsapp || inquiryData.phone,
            country: inquiryData.country
          };
          setInquiry(formattedInquiry);
          setFormData(formattedInquiry);
        }
      } catch (error) {
        console.error('Error fetching inquiry:', error);
      }
      
      setLoading(false);
    };

    checkAuth();
  }, [params.id, router, supabase]);

  const handleSave = async () => {
    try {
      const { error } = await supabase
        .from('leads')
        .update({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          status: formData.status,
          priority: formData.priority,
          whatsapp: formData.whatsapp,
          country: formData.country
        })
        .eq('id', params.id);
      
      if (error) {
        console.error('Error updating inquiry:', error);
        alert('Failed to save changes. Please try again.');
      } else {
        setInquiry(formData);
        setIsEditing(false);
        alert('Changes saved successfully!');
      }
    } catch (error) {
      console.error('Error saving inquiry:', error);
      alert('Failed to save changes. Please try again.');
    }
  };

  const handleCancel = () => {
    if (inquiry) {
      setFormData(inquiry);
    }
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
                Inquiry #{String(inquiry.id).padStart(6, '0')}
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
                  <Badge className={getStatusColor(String(inquiry.status))}>
                    {capitalizeStatus(String(inquiry.status))}
                  </Badge>
                  <Badge className={getPriorityColor(String(inquiry.priority))}>
                    {capitalizePriority(String(inquiry.priority))} Priority
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <div className="text-sm text-arzir-gray-600 mb-1">Received Date</div>
                  <div className="font-medium text-black">
                    {new Date(String(inquiry.createdAt)).toLocaleDateString()} at {new Date(String(inquiry.createdAt)).toLocaleTimeString()}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-arzir-gray-600 mb-1">Status</div>
                  {isEditing ? (
                    <Select value={String(formData.status)} onValueChange={(value) => setFormData({...formData, status: value})}>
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
                    <div className="font-medium text-black">{capitalizeStatus(String(inquiry.status))}</div>
                  )}
                </div>
                <div>
                  <div className="text-sm text-arzir-gray-600 mb-1">Priority</div>
                  {isEditing ? (
                    <Select value={String(formData.priority)} onValueChange={(value) => setFormData({...formData, priority: value})}>
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
                    <div className="font-medium text-black">{capitalizePriority(String(inquiry.priority))}</div>
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
                        value={String(formData.name)} 
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    ) : (
                      <div className="font-medium text-black">{String(inquiry.name)}</div>
                    )}
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Building className="h-4 w-4 text-arzir-gray-400" />
                      <span className="text-sm text-arzir-gray-600">Company Name</span>
                    </div>
                    {isEditing ? (
                      <Input 
                        value={String(formData.company)} 
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />
                    ) : (
                      <div className="font-medium text-black">{String(inquiry.company) || "Not provided"}</div>
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
                        value={String(formData.email)} 
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    ) : (
                      <a href={`mailto:${String(inquiry.email)}`} className="font-medium text-arzir-primary hover:underline">
                        {String(inquiry.email)}
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
                        value={String(formData.whatsapp || "")} 
                        onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                      />
                    ) : (
                      String(inquiry.whatsapp) ? (
                        <a 
                          href={`https://wa.me/${String(inquiry.whatsapp).replace(/[^0-9]/g, '')}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-medium text-arzir-primary hover:underline"
                        >
                          {String(inquiry.whatsapp)}
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
                {String(inquiry.sourceUrl) && (
                  <div>
                    <div className="text-sm text-arzir-gray-600 mb-2">Source URL</div>
                    <a 
                      href={String(inquiry.sourceUrl)} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-arzir-primary hover:underline break-all"
                    >
                      {String(inquiry.sourceUrl)}
                    </a>
                  </div>
                )}
                
                {String(inquiry.country) && (
                  <div>
                    <div className="text-sm text-arzir-gray-600 mb-2">Country</div>
                    <div className="font-medium text-black">{String(inquiry.country)}</div>
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
                  value={String(formData.message)}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={8}
                  className="w-full"
                />
              ) : (
                <div className="bg-arzir-gray-50 rounded-lg p-4 border-l-4 border-arzir-primary">
                  <p className="text-sm text-arzir-gray-700 leading-relaxed whitespace-pre-wrap">
                    {String(inquiry.message)}
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