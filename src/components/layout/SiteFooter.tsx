import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Facebook, Instagram, Youtube, MapPin, Mail, Phone, MessageCircle } from "lucide-react";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-container">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column - Logo & Description - Takes 4 columns (reduced from 5) */}
            <div className="lg:col-span-4 space-y-6">
              <Image
                src="/logo/ARZIR-LOGO-white.png"
                alt="ARZIR - Industrial Recycling & Metal Processing Machinery"
                width={140}
                height={40}
                className="h-10 w-auto"
              />
              <div className="space-y-4">
                <p className="text-arzir-primary text-lg font-medium">
                  Powering the Future of Recycling
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Leading manufacturer of advanced recycling and metal processing equipment with over 12 years of industry experience. Committed to delivering innovative solutions that transform waste into valuable resources for a sustainable future.
                </p>
              </div>
            </div>

            {/* Products Column - Takes 2.5 columns */}
            <div className="lg:col-span-2">
              <h3 className="text-white text-lg font-semibold mb-6">Products</h3>
              <ul className="space-y-3">
                {siteConfig.navigation.footer.products.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-arzir-primary transition-colors text-sm"
                     >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column - Takes 2.5 columns */}
            <div className="lg:col-span-2">
              <h3 className="text-white text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                {siteConfig.navigation.footer.company.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-arzir-primary transition-colors text-sm"
                     >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column - Takes 4 columns (increased width) */}
            <div className="lg:col-span-4">{/* Contact section content remains the same */}
              <h3 className="text-white text-lg font-semibold mb-6">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-arzir-primary flex-shrink-0 mt-0.5" />
                  <div className="text-gray-300 text-sm leading-relaxed">
                    <div>Building A1, Industrial Zone</div>
                    <div>Nanjing, Jiangsu Province, China</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-arzir-primary flex-shrink-0" />
                  <a
                    href={`mailto:${siteConfig.company.email}`}
                    className="text-gray-300 hover:text-arzir-primary transition-colors text-sm"
                  >
                    {siteConfig.company.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-arzir-primary flex-shrink-0" />
                  <a
                    href={`tel:${siteConfig.company.phone}`}
                    className="text-gray-300 hover:text-arzir-primary transition-colors text-sm"
                  >
                    {siteConfig.company.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-arzir-primary flex-shrink-0" />
                  <a
                    href={`https://wa.me/${siteConfig.company.whatsapp.replace(/[^0-9]/g, "")}`}
                    className="text-gray-300 hover:text-arzir-primary transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {siteConfig.company.whatsapp}
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-6">
                <div className="flex space-x-4">
                  <a
                    href={siteConfig.links.youtube}
                    className="text-gray-300 hover:text-arzir-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                  <a
                    href={siteConfig.links.facebook}
                    className="text-gray-300 hover:text-arzir-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href={siteConfig.links.instagram}
                    className="text-gray-300 hover:text-arzir-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href={siteConfig.links.tiktok}
                    className="text-gray-300 hover:text-arzir-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5.15 20.1a6.34 6.34 0 0 0 10.86-4.43V7.56a8.16 8.16 0 0 0 4.77 1.17V6.69h-.19z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 py-6">
          <p className="text-center text-sm text-gray-400">
            © {currentYear} {siteConfig.company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}