"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Building, MessageSquare, User, Globe } from "lucide-react";

interface Inquiry {
  id: number;
  name: string;
  company: string;
  email: string;
  whatsapp?: string;
  message: string;
  status: string;
  createdAt: string;
  priority: string;
  source: string;
  sourceUrl?: string;
  country?: string;
  ipAddress?: string;
}

interface InquiryDetailDialogProps {
  inquiry: Inquiry | null;
  isOpen: boolean;
  onClose: () => void;
}

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

export function InquiryDetailDialog({ inquiry, isOpen, onClose }: InquiryDetailDialogProps) {
  if (!inquiry) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-heading font-bold text-black">
            Inquiry Details
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Header Info */}
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-black">{inquiry.name}</h3>
              <div className="flex items-center gap-4">
                <Badge className={getStatusColor(inquiry.status)}>
                  {inquiry.status.replace('_', ' ')}
                </Badge>
                <Badge className={getPriorityColor(inquiry.priority)}>
                  {inquiry.priority} priority
                </Badge>
              </div>
            </div>
            <div className="text-sm text-arzir-gray-500">
              {new Date(inquiry.createdAt).toLocaleDateString()}
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <User className="h-4 w-4 text-arzir-gray-400" />
                <span className="text-sm text-arzir-gray-600">Full Name</span>
              </div>
              <div className="pl-7">
                <div className="font-medium text-black">{inquiry.name}</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Building className="h-4 w-4 text-arzir-gray-400" />
                <span className="text-sm text-arzir-gray-600">Company Name</span>
              </div>
              <div className="pl-7">
                <div className="font-medium text-black">{inquiry.company || "Not provided"}</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-arzir-gray-400" />
                <span className="text-sm text-arzir-gray-600">Email Address</span>
              </div>
              <div className="pl-7">
                <a href={`mailto:${inquiry.email}`} className="font-medium text-arzir-primary hover:underline">
                  {inquiry.email}
                </a>
              </div>
            </div>
            
            {inquiry.whatsapp && (
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-4 w-4 text-arzir-gray-400" />
                  <span className="text-sm text-arzir-gray-600">WhatsApp</span>
                </div>
                <div className="pl-7">
                  <a 
                    href={`https://wa.me/${inquiry.whatsapp.replace(/[^0-9]/g, '')}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium text-arzir-primary hover:underline"
                  >
                    {inquiry.whatsapp}
                  </a>
                </div>
              </div>
            )}

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Globe className="h-4 w-4 text-arzir-gray-400" />
                <span className="text-sm text-arzir-gray-600">Inquiry Source</span>
              </div>
              <div className="pl-7 space-y-2">
                <div>
                  <Badge variant="outline" className="text-xs">
                    {inquiry.source.replace('_', ' ')}
                  </Badge>
                </div>
                {inquiry.sourceUrl && (
                  <div>
                    <div className="text-xs text-arzir-gray-500 mb-1">Source URL</div>
                    <a 
                      href={inquiry.sourceUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-arzir-primary hover:underline break-all"
                    >
                      {inquiry.sourceUrl}
                    </a>
                  </div>
                )}
                {inquiry.country && (
                  <div>
                    <div className="text-xs text-arzir-gray-500 mb-1">Country</div>
                    <div className="text-sm font-medium text-black">{inquiry.country}</div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Customer Message */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <MessageSquare className="h-4 w-4 text-arzir-gray-400" />
              <span className="text-sm text-arzir-gray-600">Customer Message</span>
            </div>
            <div className="bg-arzir-gray-50 rounded-lg p-4 border-l-4 border-arzir-primary">
              <p className="text-sm text-arzir-gray-700 leading-relaxed whitespace-pre-wrap">
                {inquiry.message}
              </p>
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-3 gap-4 p-4 bg-arzir-gray-50 rounded-lg">
            <div>
              <div className="text-sm text-arzir-gray-600">Inquiry ID</div>
              <div className="font-medium text-black">#{inquiry.id.toString().padStart(6, '0')}</div>
            </div>
            <div>
              <div className="text-sm text-arzir-gray-600">Received</div>
              <div className="font-medium text-black">{new Date(inquiry.createdAt).toLocaleDateString()} {new Date(inquiry.createdAt).toLocaleTimeString()}</div>
            </div>
            <div>
              <div className="text-sm text-arzir-gray-600">Response Time</div>
              <div className="font-medium text-black">
                {inquiry.status === 'new' ? 'Pending' : 
                 inquiry.status === 'contacted' ? '< 24 hours' : 
                 inquiry.status === 'proposal_sent' ? '2 days' : 'Ongoing'}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            <Button className="bg-arzir-primary hover:bg-primary-600">
              <Mail className="h-4 w-4 mr-2" />
              Reply
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}