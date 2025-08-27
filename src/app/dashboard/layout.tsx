import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Admin Portal",
  description: "ARZIR administration dashboard for managing inquiries, blog posts, users, and business analytics.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}