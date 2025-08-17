import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registration Disabled - Admin Only Access",
  description: "Public registration is disabled. Contact your administrator for access to the ARZIR management system.",
};

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}