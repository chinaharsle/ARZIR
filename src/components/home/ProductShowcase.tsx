"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Shield, Wrench, Globe } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: "recycling-baler",
    title: "Recycling Baler",
    href: "/products/recycling-baler",
    image: "📦",
    description: "High-density balers engineered for ferrous and non-ferrous scrap with reliable compaction and superior throughput. Our balers deliver consistent bale quality while maximizing material recovery and operational efficiency.",
    features: ["High-density compaction", "Robust steel frame", "PLC control system", "Low maintenance design"],
    tagline: "Efficient Metal Compaction"
  },
  {
    id: "scrap-metal-shear",
    title: "Scrap Metal Shear", 
    href: "/products/scrap-metal-shear",
    image: "✂️",
    description: "Heavy-duty shearing solutions for scrap yards, demolition sites, and recycling facilities. Built to handle the toughest materials with precision cutting and maximum uptime for continuous operations.",
    features: ["High cutting force", "Versatile feed options", "Quick blade replacement", "Heavy-duty construction"],
    tagline: "Precision Cutting Power"
  },
  {
    id: "shredder",
    title: "Shredder",
    href: "/products/shredder",
    image: "🔧",
    description: "Powerful shredders designed to handle various scrap materials with precision size reduction. From single-shaft to four-shaft configurations, delivering consistent particle size and high throughput.",
    features: ["Variable speed control", "Hardened steel blades", "Overload protection", "Easy maintenance access"],
    tagline: "Advanced Size Reduction"
  },
  {
    id: "aluminium-extrusion-press",
    title: "Aluminium Extrusion Press",
    href: "/products/aluminium-extrusion-press",
    image: "🏭",
    description: "Precision extrusion presses for high-quality aluminium profiles with exceptional dimensional accuracy. Advanced hydraulic systems ensure consistent pressure and superior surface finish.",
    features: ["Precision pressure control", "Advanced heating system", "Profile die technology", "Quality monitoring"],
    tagline: "Precision Profile Manufacturing"
  },
  {
    id: "briquetting-machine",
    title: "Briquetting Machine",
    href: "/products/briquetting-machine", 
    image: "🧱",
    description: "Efficient briquetting systems for compacting metal chips, turnings, and waste into dense, transportable briquettes. Maximize material value while reducing storage and transportation costs.",
    features: ["High compression ratio", "Oil recovery system", "Automatic operation", "Compact briquette output"],
    tagline: "Smart Waste Compacting"
  }
];

export function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const mobileDetailRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleProductClick = (product: typeof products[0]) => {
    setSelectedProduct(product);
    
    // Scroll to the mobile detail on mobile devices
    setTimeout(() => {
      const ref = mobileDetailRefs.current[product.id];
      if (ref && window.innerWidth < 1024) { // lg breakpoint
        ref.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
      }
    }, 100); // Small delay to ensure DOM is updated
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Left Column - Product Categories */}
      <div className="space-y-3">
        <h3 className="text-xl font-heading font-semibold text-black mb-6">Product Categories</h3>
        <div className="space-y-3">
          {products.map((product) => (
            <div key={product.id}>
              <button
                onClick={() => handleProductClick(product)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                  selectedProduct.id === product.id 
                    ? "bg-arzir-primary text-white shadow-lg" 
                    : "bg-white hover:bg-arzir-gray-50 border border-arzir-gray-200"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-2xl">{product.image}</div>
                  <div>
                    <h4 className={`font-heading font-semibold ${
                      selectedProduct.id === product.id ? "text-white" : "text-black"
                    }`}>
                      {product.title}
                    </h4>
                    <p className={`text-sm mt-1 ${
                      selectedProduct.id === product.id ? "text-blue-100" : "text-arzir-gray-600"
                    }`}>
                      {product.tagline}
                    </p>
                  </div>
                </div>
              </button>
              
              {/* Mobile Product Details - Show directly below clicked item */}
              {selectedProduct.id === product.id && (
                <div 
                  ref={(el) => { mobileDetailRefs.current[product.id] = el; }}
                  className="lg:hidden mt-4 bg-white rounded-2xl p-6 shadow-card border border-arzir-gray-200"
                >
                  <div className="space-y-4">
                    {/* Product Image */}
                    <div className="aspect-[16/9] bg-arzir-gray-200 rounded-xl overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center text-6xl">
                        {selectedProduct.image}
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-heading font-bold text-black">
                        {selectedProduct.title}
                      </h3>
                      
                      <p className="text-arzir-gray-600 leading-relaxed text-sm">
                        {selectedProduct.description}
                      </p>

                      {/* Key Features */}
                      <div>
                        <h4 className="font-semibold text-black mb-3">Key Features:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {selectedProduct.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-arzir-primary rounded-full flex-shrink-0"></div>
                              <span className="text-sm text-arzir-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-2">
                        <Button variant="outline" asChild className="w-full justify-center">
                          <Link href={selectedProduct.href}>
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Quality Assurance Footer */}
        <div className="mt-8 pt-6 border-t border-arzir-gray-200">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-arzir-primary/10 rounded-lg flex items-center justify-center">
                <Award className="h-5 w-5 text-arzir-primary" />
              </div>
              <div>
                <div className="text-sm font-medium text-black">ISO Certified</div>
                <div className="text-xs text-arzir-gray-600">Quality Systems</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-arzir-primary/10 rounded-lg flex items-center justify-center">
                <Shield className="h-5 w-5 text-arzir-primary" />
              </div>
              <div>
                <div className="text-sm font-medium text-black">CE Compliant</div>
                <div className="text-xs text-arzir-gray-600">Safety Standards</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-arzir-primary/10 rounded-lg flex items-center justify-center">
                <Wrench className="h-5 w-5 text-arzir-primary" />
              </div>
              <div>
                <div className="text-sm font-medium text-black">24/7 Support</div>
                <div className="text-xs text-arzir-gray-600">Technical Service</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-arzir-primary/10 rounded-lg flex items-center justify-center">
                <Globe className="h-5 w-5 text-arzir-primary" />
              </div>
              <div>
                <div className="text-sm font-medium text-black">Global Delivery</div>
                <div className="text-xs text-arzir-gray-600">Worldwide Shipping</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right Column - Product Showcase (Desktop Only) */}
      <div className="hidden lg:block bg-white rounded-2xl p-8 shadow-card">
        <div className="space-y-6">
          {/* Product Image */}
          <div className="aspect-[16/9] bg-arzir-gray-200 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-200">
            <div className="w-full h-full flex items-center justify-center text-8xl">
              {selectedProduct.image}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold text-black">
              {selectedProduct.title}
            </h3>
            
            <p className="text-arzir-gray-600 leading-relaxed">
              {selectedProduct.description}
            </p>

            {/* Key Features */}
            <div>
              <h4 className="font-semibold text-black mb-3">Key Features:</h4>
              <div className="grid grid-cols-2 gap-2">
                {selectedProduct.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-arzir-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-arzir-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button variant="outline" asChild className="w-full justify-center">
                <Link href={selectedProduct.href}>
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}