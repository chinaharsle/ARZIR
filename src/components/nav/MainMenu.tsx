"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface MainMenuProps {
  isMobile?: boolean;
  onItemClick?: () => void;
}

export function MainMenu({ isMobile = false, onItemClick }: MainMenuProps) {
  if (isMobile) {
    return <MobileMenu onItemClick={onItemClick} />;
  }

  return <DesktopMenu />;
}

function DesktopMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {siteConfig.navigation.main.map((item) => (
          <NavigationMenuItem key={item.title}>
            {"children" in item && item.children ? (
              <>
                <NavigationMenuTrigger className="text-black hover:text-arzir-primary">
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className={`${
                    item.children.length >= 4 ? 'grid-cols-2 w-[500px]' : 'grid-cols-3 w-[600px]'
                  } grid gap-3 p-6`}>
                    {item.children.map((child) => (
                      <NavigationMenuLink asChild key={child.title}>
                        <Link
                          href={child.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-arzir-gray-50 hover:text-arzir-primary focus:bg-arzir-gray-50 focus:text-arzir-primary"
                         >
                          <div className="text-sm font-medium leading-none">
                            {child.title}
                          </div>
                          {child.description && (
                            <p className="line-clamp-2 text-sm leading-snug text-arzir-gray-600">
                              {child.description}
                            </p>
                          )}
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href={item.href}>
                  <span className="text-black hover:text-arzir-primary">
                    {item.title}
                  </span>
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileMenu({ onItemClick }: { onItemClick?: () => void }) {
  return (
    <div className="space-y-3">
      <Accordion type="multiple" className="w-full">
        {siteConfig.navigation.main.map((item) => (
          <div key={item.title}>
            {"children" in item && item.children ? (
              <AccordionItem value={item.title} className="border-none">
                <AccordionTrigger className="py-3 text-left hover:no-underline">
                  <span className="text-base font-medium">{item.title}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-2">
                  <div className="space-y-2 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.title}
                        href={child.href}
                        onClick={onItemClick}
                        className="block py-2 text-sm text-arzir-gray-600 hover:text-arzir-primary"
                       >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ) : (
              <div className="py-3">
                <Link
                  href={item.href}
                  onClick={onItemClick}
                  className="block text-base font-medium hover:text-arzir-primary"
                 >
                  {item.title}
                </Link>
              </div>
            )}
          </div>
        ))}
      </Accordion>
    </div>
  );
}