export const siteConfig = {
  name: "ARZIR",
  description: "Industrial Recycling & Metal Processing Machinery Manufacturer",
  url: "https://www.arzir.com",
  ogImage: "https://www.arzir.com/og.jpg",
  links: {
    twitter: "https://twitter.com/arzir",
    github: "https://github.com/arzir",
    youtube: "https://youtube.com/@arzir",
    facebook: "https://facebook.com/arzir",
    instagram: "https://instagram.com/arzir",
    tiktok: "https://tiktok.com/@arzir",
  },
  company: {
    name: "ARZIR",
    fullName: "ARZIR Industrial Equipment Co., Ltd.",
    address: "Mingjue Industrial Park, Lishui, Nanjing, Jiangsu, China",
    email: "info@arzir.com",
    phone: "+86-25-56200956",
    whatsapp: "+8618151685977",
    foundedYear: 2012,
  },
  navigation: {
    main: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "About",
        href: "/about",
      },
      {
        title: "Products",
        href: "/products",
        children: [
          {
            title: "Recycling Baler",
            href: "/products/recycling-baler",
            description: "High-density balers for efficient recycling",
          },
          {
            title: "Scrap Metal Shear",
            href: "/products/scrap-metal-shear",
            description: "Heavy-duty shearing solutions",
          },
          {
            title: "Shredder",
            href: "/products/shredder",
            description: "Powerful shredders for various materials",
          },
          {
            title: "Aluminium Extrusion Press",
            href: "/products/aluminium-extrusion-press",
            description: "Precision extrusion presses",
          },
          {
            title: "Briquetting Machine",
            href: "/products/briquetting-machine",
            description: "Efficient briquetting systems",
          },
        ],
      },
      {
        title: "Resources",
        href: "#",
        children: [
          {
            title: "Blog",
            href: "/blog",
            description: "Industry insights and guides",
          },
          {
            title: "Calculator",
            href: "/calculator",
            description: "Engineering calculation tools",
          },
          {
            title: "Applications",
            href: "/applications",
            description: "Industry use cases",
          },
        ],
      },
      {
        title: "Contact",
        href: "/contact",
      },
    ],
    footer: {
      products: [
        { title: "Recycling Baler", href: "/products/recycling-baler" },
        { title: "Scrap Metal Shear", href: "/products/scrap-metal-shear" },
        { title: "Shredder", href: "/products/shredder" },
        { title: "Aluminium Extrusion Press", href: "/products/aluminium-extrusion-press" },
        { title: "Briquetting Machine", href: "/products/briquetting-machine" },
      ],
      company: [
        { title: "About", href: "/about" },
        { title: "Applications", href: "/applications" },
        { title: "Blog", href: "/blog" },
        { title: "Calculator", href: "/calculator" },
        { title: "Contact", href: "/contact" },
      ],
    },
  },
  theme: {
    primary: "#006EB6",
    primaryRgb: "0, 110, 182",
    black: "#000000",
    white: "#FFFFFF",
    gray: {
      50: "#F9FAFB",
      100: "#F3F4F6",
      200: "#E5E7EB",
      600: "#4B5563",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;