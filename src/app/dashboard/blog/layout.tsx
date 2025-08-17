import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Editor - Create & Edit Posts",
  description: "ARZIR blog content management system for creating and editing industry articles, guides, and insights.",
};

export default function BlogEditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}