import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ARZIR - Leading Industrial Recycling Equipment Manufacturer",
  description: "Learn about ARZIR's 12+ years of expertise in industrial recycling and metal processing machinery. Discover our mission, vision, and global presence in 100+ countries.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}