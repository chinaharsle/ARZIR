import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  title: string;
  href: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center space-x-2 text-sm", className)}
    >
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center">
          {index > 0 && (
            <ChevronRight className="h-4 w-4 text-arzir-gray-400 mx-2" />
          )}
          {item.current ? (
            <span className="text-arzir-gray-600 font-medium" aria-current="page">
              {item.title}
            </span>
          ) : (
            <Link
              href={item.href}
              className="text-arzir-gray-500 hover:text-arzir-primary transition-colors"
            >
              {item.title}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}