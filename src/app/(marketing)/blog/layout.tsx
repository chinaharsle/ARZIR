import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Recycling Blog - Expert Insights & Equipment Guides",
  description: "Stay updated with the latest industrial recycling trends, equipment guides, and expert insights from ARZIR. Learn about metal processing, sustainability, and machinery optimization.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}