import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { DirectQuoteForm } from "@/components/forms/DirectQuoteForm";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Recycling Equipment - Balers, Shears, Shredders & More",
  description: "Browse ARZIR's complete range of recycling balers, scrap metal shears, shredders, aluminum extrusion presses, and briquetting machines for industrial applications.",
};

const productCategories = [
  {
    title: "Recycling Baler",
    description: "High-density balers engineered for ferrous and non-ferrous metals.",
    href: "/products/recycling-baler",
    products: [
      {
        title: "Scrap Metal Baler",
        description: "Heavy-duty baler for mixed ferrous and non-ferrous scrap with high bale density.",
        href: "/products/scrap-metal-baler",
        image: "/images/products/single/scrap metal baler.png"
      },
      {
        title: "Car Body Baler", 
        description: "Designed for ELV processing with robust compression chambers and faster cycles.",
        href: "/products/car-body-baler",
        image: "/images/products/single/Car Body Baler.png"
      },
      {
        title: "Vertical Baler",
        description: "Space-saving vertical baler for low-to-medium throughput operations.",
        href: "/products/vertical-baler",
        image: "/images/products/single/vertical baler.png"
      },
      {
        title: "Horizontal Baler",
        description: "Continuous horizontal baler for high throughput and consistent bale sizes.",
        href: "/products/horizontal-baler",
        image: "/images/products/single/horizontal balser_.png"
      }
    ]
  },
  {
    title: "Scrap Metal Shear",
    description: "Heavy-duty shearing solutions for scrap yards, demolition, and recycling facilities.",
    href: "/products/scrap-metal-shear",
    products: [
      {
        title: "Container Shear",
        description: "Mobile shearing solution for on-site processing with excellent mobility.",
        href: "/products/container-shear",
        image: "/images/products/single/container shear.png"
      },
      {
        title: "Gantry Shear",
        description: "High-capacity stationary shear for heavy-duty industrial applications.",
        href: "/products/gantry-shear", 
        image: "/images/products/single/gantry shear.png"
      },
      {
        title: "Alligator Shear",
        description: "Fast-cycling shear for cutting structural steel and plate materials.",
        href: "/products/alligator-shear",
        image: "/images/products/single/alligator shear.png"
      }
    ]
  },
  {
    title: "Shredder",
    description: "Powerful shredders designed to handle various scrap materials with precision.",
    href: "/products/shredder",
    products: [
      {
        title: "Single-Shaft Shredder",
        description: "Versatile single-shaft design for mixed material processing applications.",
        href: "/products/single-shaft-shredder",
        image: "/images/products/single/single-shaft-shredder.png"
      },
      {
        title: "Double-Shaft Shredder",
        description: "Dual-shaft configuration for enhanced processing capacity and efficiency.",
        href: "/products/double-shaft-shredder",
        image: "/images/products/single/double-shaft shredder.png"
      },
      {
        title: "Four-Shaft Shredder",
        description: "Multi-shaft design for fine size reduction and uniform output.",
        href: "/products/four-shaft-shredder",
        image: "/images/products/single/four-shaft shredder.png"
      }
    ]
  },
  {
    title: "Aluminium Extrusion Press", 
    description: "Precision extrusion presses for high-quality aluminium profiles.",
    href: "/products/aluminium-extrusion-press",
    products: [
      {
        title: "Aluminium Extrusion Press",
        description: "Precision hydraulic press for high-quality aluminium profile extrusion.",
        href: "/products/aluminium-extrusion-press",
        image: "/images/products/single/Extrusion Press.png"
      }
    ]
  },
  {
    title: "Briquetting Machine",
    description: "Efficient briquetting systems for compacting metal chips and turnings.",
    href: "/products/briquetting-machine",
    products: [
      {
        title: "Briquetting Machine",
        description: "High-pressure briquetting for metal chips with oil recovery system.",
        href: "/products/briquetting-machine",
        image: "/images/products/single/Briquetting Machine_.png"
      }
    ]
  }
];

export default function ProductsPage() {
  return (
    <>
      {/* Page Hero */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white">
        <div className="text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black">
            Our Products
          </h1>
          <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore ARZIR&apos;s complete range of high-performance recycling and metal processing machinery.
          </p>
        </div>
      </Section>

      {/* Product Categories */}
      {productCategories.map((category, categoryIndex) => (
        <Section key={category.title} background={categoryIndex % 2 === 0 ? "white" : "gray"} size="xl">
          <div className="space-y-8">
            {/* Category Header */}
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
                {category.title}
              </h2>
              <p className="text-lg text-arzir-gray-600 max-w-3xl mx-auto">
                {category.description}
              </p>
              <Button variant="outline" asChild>
                <Link href={category.href}>
                  View Category
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Products Grid */}
            <div className={`grid grid-cols-1 md:grid-cols-2 ${category.products.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6`}>
              {category.products.map((product) => (
                <div key={product.title} className="group">
                  <Link href={product.href}>
                    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-arzir-gray-100 overflow-hidden h-full">
                      {/* Product Image */}
                      <div className="aspect-[4/3] bg-gradient-to-br from-arzir-gray-50 to-arzir-gray-100 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="p-6 space-y-3">
                        <h3 className="text-lg font-heading font-semibold text-black group-hover:text-arzir-primary transition-colors duration-300">
                          {product.title}
                        </h3>
                        <p className="text-sm text-arzir-gray-600 leading-relaxed line-clamp-2">
                          {product.description}
                        </p>
                        <div className="flex items-center text-arzir-primary font-medium group-hover:gap-3 gap-2 transition-all duration-300 pt-2">
                          <span className="text-sm">Learn More</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Section>
      ))}

      {/* Bottom CTA */}
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
                    Ready to Work with ARZIR?
                  </h2>
                  <p className="text-xl text-blue-100 leading-relaxed">
                    Join thousands of satisfied customers worldwide who trust ARZIR for their 
                    recycling and metal processing equipment needs.
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
                
                <DirectQuoteForm source="products_page_form" />
                
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
    </>
  );
}