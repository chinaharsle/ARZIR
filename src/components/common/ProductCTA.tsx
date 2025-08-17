"use client";

import { Section } from "@/components/common/Section";
import { DirectQuoteForm } from "@/components/forms/DirectQuoteForm";

interface ProductCTAProps {
  productName: string;
  formSource: string;
  title?: string;
  description?: string;
}

export function ProductCTA({ 
  productName, 
  formSource,
  title,
  description
}: ProductCTAProps) {
  const defaultTitle = `Ready to Work with ARZIR?`;
  const defaultDescription = `Join thousands of satisfied customers worldwide who trust ARZIR for their recycling and metal processing equipment needs.`;

  return (
    <Section background="white" size="xl">
      <div className="bg-gradient-to-r from-arzir-primary to-primary-600 rounded-3xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left Column - Content */}
          <div className="lg:col-span-1 p-8 lg:p-12 flex flex-col justify-center text-white relative overflow-hidden min-h-[600px]">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-24 translate-x-24"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
            
            <div className="relative z-10 space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
                  {title || defaultTitle}
                </h2>
                <p className="text-xl text-blue-100 leading-relaxed">
                  {description || defaultDescription}
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-blue-100">Expert engineering consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-blue-100">24/7 global technical support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-blue-100">Comprehensive training programs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-blue-100">Guaranteed spare parts availability</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="bg-white/10 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold mb-1">2,500+</div>
                  <div className="text-sm text-blue-200">Machines Delivered</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold mb-1">100+</div>
                  <div className="text-sm text-blue-200">Countries Served</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-1 bg-arzir-gray-50 p-8 lg:p-12 flex flex-col justify-center min-h-[600px]">
            <div className="w-full space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-heading font-bold text-black mb-2">
                  Get Your Quote
                </h3>
                <p className="text-sm text-arzir-gray-600">
                  Start your recycling equipment journey with ARZIR
                </p>
              </div>
              
              <DirectQuoteForm source={formSource} />
              
              <div className="space-y-3 pt-4">
                <div className="flex items-center justify-center gap-2 text-xs text-arzir-gray-500">
                  <div className="w-1 h-1 bg-arzir-gray-400 rounded-full"></div>
                  <span>Free consultation included</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-xs text-arzir-gray-500">
                  <div className="w-1 h-1 bg-arzir-gray-400 rounded-full"></div>
                  <span>Custom solution design</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-xs text-arzir-gray-500">
                  <div className="w-1 h-1 bg-arzir-gray-400 rounded-full"></div>
                  <span>24-hour response guarantee</span>
                </div>
              </div>
              
              <p className="text-xs text-arzir-gray-500 text-center pt-4">
                By submitting this form, you agree to our privacy policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}