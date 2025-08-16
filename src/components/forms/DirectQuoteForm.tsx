"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SuccessNotification } from "@/components/ui/SuccessNotification";

interface DirectQuoteFormProps {
  source?: string;
  className?: string;
}

export function DirectQuoteForm({ source = "direct_form", className = "" }: DirectQuoteFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    whatsapp: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields (Name, Email, Message)");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Call the simplified contact API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source,
          type: "quote_request"
        }),
      });

      const result = await response.json();

      if (response.ok && result.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          whatsapp: "",
          message: ""
        });

        // Show beautiful success notification instead of alert
        setShowSuccessNotification(true);
      } else {
        throw new Error(result.error || "Failed to submit form");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      alert("Sorry, there was an error submitting your request. Please try again or contact us directly at info@arzir.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={`space-y-4 w-full max-w-none ${className}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name *"
              required
              className="w-full bg-white rounded-lg p-4 border border-arzir-gray-200 hover:border-arzir-primary/30 focus:border-arzir-primary focus:outline-none transition-colors min-h-[48px] text-sm placeholder:text-arzir-gray-500"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email *"
              required
              className="w-full bg-white rounded-lg p-4 border border-arzir-gray-200 hover:border-arzir-primary/30 focus:border-arzir-primary focus:outline-none transition-colors min-h-[48px] text-sm placeholder:text-arzir-gray-500"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Company"
              className="w-full bg-white rounded-lg p-4 border border-arzir-gray-200 hover:border-arzir-primary/30 focus:border-arzir-primary focus:outline-none transition-colors min-h-[48px] text-sm placeholder:text-arzir-gray-500"
            />
          </div>
          <div>
            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleInputChange}
              placeholder="WhatsApp"
              className="w-full bg-white rounded-lg p-4 border border-arzir-gray-200 hover:border-arzir-primary/30 focus:border-arzir-primary focus:outline-none transition-colors min-h-[48px] text-sm placeholder:text-arzir-gray-500"
            />
          </div>
        </div>
        
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message *"
            required
            rows={4}
            className="w-full bg-white rounded-lg p-4 border border-arzir-gray-200 hover:border-arzir-primary/30 focus:border-arzir-primary focus:outline-none transition-colors min-h-[96px] text-sm placeholder:text-arzir-gray-500 resize-none"
          />
        </div>
        
        <Button 
          type="submit"
          size="lg" 
          disabled={isSubmitting}
          className="w-full bg-arzir-primary hover:bg-primary-600 shadow-lg hover:shadow-xl transition-all duration-300 min-h-[48px] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Submit Inquiry"}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </form>

      {/* Success Notification */}
      <SuccessNotification
        isOpen={showSuccessNotification}
        onClose={() => setShowSuccessNotification(false)}
        title="Thank you!"
        message="Your quote request has been received. We'll get back to you within 24 hours."
      />
    </>
  );
}