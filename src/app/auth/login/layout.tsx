import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Login - ARZIR Dashboard Access",
  description: "Secure login portal for ARZIR administrators and authorized personnel to access the management dashboard.",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}