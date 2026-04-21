"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "/", description: "About me" },
  { name: "Projects", href: "/portfolio", description: "Case studies & work" },
  { name: "Writing", href: "/blog", description: "Blog posts & essays" },
];

export function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close sheet when pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="w-full flex items-center justify-between">
      <Link 
        href="/" 
        className="font-semibold text-foreground hover:text-foreground/80 transition-colors cursor-pointer mr-8"
        aria-label="Jeremy Kamber - Home"
      >
        JK
      </Link>

      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="-ml-3 h-10 w-10">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[80vw] sm:w-[350px] px-6">
            <SheetHeader className="px-0">
              <SheetTitle className="text-left text-lg font-bold">Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-5 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group transition-colors hover:text-foreground/80",
                    pathname === item.href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="text-base font-medium">{item.name}</div>
                  <div className="text-xs text-muted-foreground/60">{item.description}</div>
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:flex items-center space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-base font-medium transition-colors hover:text-foreground/80",
              pathname === item.href
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
