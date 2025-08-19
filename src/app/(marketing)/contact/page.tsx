"use client";

import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Mail, Phone, MessageSquare, Youtube, Facebook, Instagram, Clock, CheckCircle, Globe, Users, Headphones, Award } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { siteConfig } from "@/config/site";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  whatsapp: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    company: "",
    email: "",
    whatsapp: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);

      // Submit to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...validatedData,
          source: 'contact_page',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Show success message
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        whatsapp: "",
        message: "",
      });

      // Trigger confetti animation
      if (typeof window !== 'undefined' && (window as Window & { confetti?: (options: { particleCount: number; spread: number; origin: { y: number } }) => void }).confetti) {
        (window as Window & { confetti: (options: { particleCount: number; spread: number; origin: { y: number } }) => void }).confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });

        // Hide success message after 3 seconds
        setTimeout(() => setShowSuccess(false), 3000);
      }

    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        const fieldErrors: Partial<ContactForm> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactForm] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        console.error('Error submitting form:', error);
        // You could show a generic error message here
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Page Hero */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white">
        <div className="text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black">
            Contact ARZIR
          </h1>
          <p className="text-xl lg:text-2xl text-arzir-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tell us about your project. Our engineers will respond within 24 hours.
          </p>
        </div>
      </Section>

      {/* Contact Form and Info */}
      <Section background="white" size="md" className="!pt-4 md:!pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-heading font-bold text-black">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Your full name"
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    placeholder="Company name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="name@company.com"
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp</Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                    placeholder="+86 18112987553 (with country code)"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about your project requirements..."
                    rows={5}
                    className={errors.message ? "border-red-500" : ""}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-arzir-primary hover:bg-primary-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </Button>

                {showSuccess && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-green-800">Thank you!</h3>
                        <p className="text-sm text-green-700">Your message has been sent. We will contact you soon!</p>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-heading font-bold text-black">
                Global Contacts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-arzir-gray-600 leading-relaxed">
                Sales & technical support for recycling and metal processing projects. 
                We reply within 24 hours.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-arzir-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-arzir-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Address</h3>
                    <p className="text-arzir-gray-600 text-sm">
                      Lishui Industrial Park, Nanjing, Jiangsu, China
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-arzir-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-arzir-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Email</h3>
                    <a 
                      href="mailto:info@arzir.com" 
                      className="text-arzir-primary hover:underline text-sm"
                    >
                      info@arzir.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-arzir-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-arzir-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Phone</h3>
                    <a 
                      href="tel:+862556200956" 
                      className="text-arzir-primary hover:underline text-sm"
                    >
                      +86-25-56200956
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-arzir-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-5 w-5 text-arzir-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">WhatsApp</h3>
                    <a 
                      href="https://wa.me/8618112987553" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-arzir-primary hover:underline text-sm"
                    >
                      +86 18112987553
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-6 border-t border-arzir-gray-200">
                <h3 className="font-semibold text-black mb-4">Follow Us</h3>
                <div className="flex items-center gap-4">
                  <a 
                    href={siteConfig.links.youtube} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-arzir-gray-100 hover:bg-arzir-primary hover:text-white rounded-full flex items-center justify-center transition-colors duration-200"
                    aria-label="YouTube"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                  <a 
                    href={siteConfig.links.facebook} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-arzir-gray-100 hover:bg-arzir-primary hover:text-white rounded-full flex items-center justify-center transition-colors duration-200"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a 
                    href={siteConfig.links.instagram} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-arzir-gray-100 hover:bg-arzir-primary hover:text-white rounded-full flex items-center justify-center transition-colors duration-200"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a 
                    href={siteConfig.links.tiktok} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-arzir-gray-100 hover:bg-arzir-primary hover:text-white rounded-full flex items-center justify-center transition-colors duration-200"
                    aria-label="TikTok"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Response Timeline */}
      <Section background="gray" size="lg">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Our Response Process
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-2xl mx-auto">
              From initial contact to project completion, here&apos;s what you can expect when working with ARZIR.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="w-16 h-16 bg-arzir-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Initial Contact</h3>
              <p className="text-sm text-arzir-gray-600">
                We acknowledge your inquiry within 2 hours and assign a dedicated specialist.
              </p>
              <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-arzir-gray-300"></div>
            </div>

            <div className="relative">
              <div className="w-16 h-16 bg-arzir-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Consultation</h3>
              <p className="text-sm text-arzir-gray-600">
                Technical consultation within 24 hours to understand your specific requirements.
              </p>
              <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-arzir-gray-300"></div>
            </div>

            <div className="relative">
              <div className="w-16 h-16 bg-arzir-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Proposal</h3>
              <p className="text-sm text-arzir-gray-600">
                Detailed technical and commercial proposal delivered within 3-5 business days.
              </p>
              <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-arzir-gray-300"></div>
            </div>

            <div>
              <div className="w-16 h-16 bg-arzir-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Partnership</h3>
              <p className="text-sm text-arzir-gray-600">
                Project execution with dedicated support and regular progress updates.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Service Guarantees */}
      <Section background="white" size="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Our Service Commitments
            </h2>
            <p className="text-xl text-arzir-gray-600">
              Quality assurance and support you can count on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-arzir-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-arzir-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">24-Hour Response</h3>
                  <p className="text-arzir-gray-600 text-sm">
                    All inquiries receive initial response within 24 hours, with detailed follow-up within 48 hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-arzir-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-arzir-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Quality Guarantee</h3>
                  <p className="text-arzir-gray-600 text-sm">
                    ISO 9001 certified manufacturing with comprehensive warranty and parts support.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-arzir-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-arzir-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Expert Team</h3>
                  <p className="text-arzir-gray-600 text-sm">
                    Dedicated project managers and technical engineers assigned to every project.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-arzir-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Headphones className="h-6 w-6 text-arzir-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Ongoing Support</h3>
                  <p className="text-arzir-gray-600 text-sm">
                    Lifetime technical support with remote diagnostics and on-site service available.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-arzir-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="h-6 w-6 text-arzir-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Global Reach</h3>
                  <p className="text-arzir-gray-600 text-sm">
                    Worldwide installation and service network with local language support.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-arzir-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-arzir-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Project Success</h3>
                  <p className="text-arzir-gray-600 text-sm">
                    Performance guarantees and commissioning support to ensure project success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="gray" size="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-arzir-gray-600">
              Quick answers to common questions about working with ARZIR.
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-black mb-3">
                  What information do you need for a quote?
                </h3>
                <p className="text-arzir-gray-600">
                  We need details about your material types, processing volumes, site constraints, and specific requirements. 
                  Our technical team will guide you through a detailed questionnaire to ensure accurate sizing and pricing.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-black mb-3">
                  Do you provide installation and training?
                </h3>
                <p className="text-arzir-gray-600">
                  Yes, we provide complete turnkey solutions including site preparation guidance, equipment installation, 
                  commissioning, operator training, and ongoing technical support.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-black mb-3">
                  What are your typical delivery times?
                </h3>
                <p className="text-arzir-gray-600">
                  Standard equipment typically ships within 12-16 weeks. Customized solutions may require 16-24 weeks. 
                  We provide detailed project timelines during the proposal stage.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-black mb-3">
                  Do you offer financing or leasing options?
                </h3>
                <p className="text-arzir-gray-600">
                  We work with various financing partners to provide flexible payment options including equipment financing, 
                  leasing programs, and performance-based contracts. Contact us to discuss available options.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Add confetti script */}
      <script
        src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"
        async
      />
    </>
  );
}