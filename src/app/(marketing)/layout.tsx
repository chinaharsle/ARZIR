import { SiteHeader } from "@/components/layout/SiteHeader";
import { Suspense, lazy } from "react";

const SiteFooter = lazy(() => import("@/components/layout/SiteFooter").then(mod => ({ default: mod.SiteFooter })));

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen">
        {children}
      </main>
      <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse" />}>
        <SiteFooter />
      </Suspense>
    </>
  );
}