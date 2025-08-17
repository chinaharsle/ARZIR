import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ApplicationCTA } from "@/components/common/ApplicationCTA";
import { ArrowRight, CheckCircle, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automotive Dismantling Applications & Solutions | ARZIR", 
  description: "Faster ELV processing with robust baling & shearing equipment built for heavy-duty automotive dismantling applications.",
};

export default function AutomotiveDismantlingPage() {
  return (
    <>
      {/* Page Hero */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Automotive Dismantling Solutions
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Faster ELV processing with robust baling & shearing equipment built for heavy-duty applications.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                45% faster processing
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                120 vehicles/day
              </div>
            </div>
            <QuoteDialog source="automotive_dismantling_hero">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
          </div>
          <div className="relative">
            <div className="aspect-[16/9] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/applications/automotive-dismantling-full.jpg"
                alt="Automotive Dismantling Facility"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Industry Overview */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
            Industry Overview
          </h2>
          <p className="text-lg text-arzir-gray-600 leading-relaxed max-w-4xl">
            End-of-Life Vehicle (ELV) processing requires specialized equipment capable of handling various automotive materials 
            safely and efficiently. Modern dismantling operations must meet strict environmental regulations while maximizing 
            material recovery value from steel bodies, aluminum components, and other valuable metals. Efficient processing 
            systems reduce handling time and labor costs while ensuring compliance with recycling quotas.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">50-200</div>
              <div className="text-sm text-arzir-gray-600">Vehicles/day</div>
            </div>
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">80%</div>
              <div className="text-sm text-arzir-gray-600">Material recovery</div>
            </div>
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">45%</div>
              <div className="text-sm text-arzir-gray-600">Faster processing</div>
            </div>
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">18</div>
              <div className="text-sm text-arzir-gray-600">Month ROI</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Process Workflow */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            ELV Processing Workflow
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {[
              {
                step: "Depollution & Dismantling",
                description: "Remove fluids, batteries, and valuable components before processing"
              },
              {
                step: "Body Preparation",
                description: "Strip remaining components and prepare car bodies for compaction"
              },
              {
                step: "Baling & Compaction",
                description: "Compress car bodies into dense bales for efficient transport"
              },
              {
                step: "Quality & Dispatch",
                description: "Grade materials and coordinate with steel mills and recyclers"
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-black">
                    {step.step}
                  </h3>
                  <p className="text-sm text-arzir-gray-600">
                    {step.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-arzir-primary -ml-3" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Equipment */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Recommended Equipment
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                title: "Car Body Baler",
                description: "Designed specifically for ELV processing with robust compression chambers and faster cycle times for automotive industry demands",
                href: "/products/car-body-baler",
                image: "🚗"
              },
              {
                title: "Container Shear",
                description: "Heavy-duty shearing for oversized vehicle components and structural elements with precision cutting capability",
                href: "/products/container-shear",
                image: "✂️"
              }
            ].map((item, index) => (
              <div key={index} className="bg-arzir-gray-50 p-6 rounded-xl group hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{item.image}</div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-heading font-semibold text-black group-hover:text-arzir-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-arzir-gray-600 text-sm">
                      {item.description}
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={item.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Case Study */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Case Study
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-sm max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-semibold text-black">
                Automotive Dismantling Facility - USA
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <strong className="text-black">Challenge:</strong>
                    <p className="text-arzir-gray-600">Processing 100+ vehicles daily with limited space and high labor costs</p>
                  </div>
                  <div>
                    <strong className="text-black">Solution:</strong>
                    <p className="text-arzir-gray-600">Car Body Baler + Container Shear installation with automated feeding</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <strong className="text-black">Results:</strong>
                    <p className="text-success font-medium">+60% processing speed, ROI in 18 months</p>
                  </div>
                  <div>
                    <strong className="text-black">Capacity:</strong>
                    <p className="text-arzir-gray-600">120 vehicles/day processing capability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQs */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                question: "What's the typical processing capacity for automotive dismantling equipment?",
                answer: "ARZIR car body balers can process 50-200 vehicles per day depending on the model and facility setup. Cycle times range from 60-120 seconds per vehicle."
              },
              {
                question: "How does automotive dismantling equipment handle different vehicle sizes?",
                answer: "Our balers feature adjustable chamber sizes and pressure settings to accommodate everything from compact cars to SUVs and light trucks efficiently."
              },
              {
                question: "What safety features are included for automotive dismantling operations?",
                answer: "Comprehensive safety systems including emergency stops, safety barriers, automatic door interlocks, and operator protection zones meet all automotive industry safety standards."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-arzir-gray-200 pb-6">
                <h3 className="text-lg font-heading font-semibold text-black mb-3">
                  {faq.question}
                </h3>
                <p className="text-arzir-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Bottom CTA */}
      <ApplicationCTA 
        applicationName="automotive dismantling"
        formSource="automotive-dismantling_bottom" 
      />
    </>
  );
}
