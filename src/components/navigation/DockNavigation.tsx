"use client";
import { dockNavigationMenu } from "@/lib/constants/info/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { IconType } from "react-icons";

// Define the interface for navigation items
interface NavItem {
  name: string;
  href: string;
  activeIcon?: IconType | React.ReactNode;
  inactiveIcon?: IconType | React.ReactNode;
}

export default function DockNavigation() {
  const pathname = usePathname();

  return (
    <nav className="bottom-0 z-10 fixed sm:hidden bg-background dark:border-chart-1 border-t w-full text-foreground">
      <div className="mx-auto px-6">
        <div className="flex justify-between items-center">
          {dockNavigationMenu.map((item: NavItem) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex flex-col items-center gap-1 p-3 text-sm transition-transform hover:-translate-y-1 ${
                  isActive ? "text-primary dark:text-chart-2" : "text-accent"
                }`}
              >
                {isActive ? (
                  item.activeIcon && typeof item.activeIcon === "function" ? (
                    <item.activeIcon className="w-6 h-6" />
                  ) : (
                    <span className="w-6 h-6">{item.activeIcon}</span>
                  )
                ) : item.inactiveIcon &&
                  typeof item.inactiveIcon === "function" ? (
                  <item.inactiveIcon className="w-6 h-6" />
                ) : (
                  <span className="w-6 h-6">{item.inactiveIcon}</span>
                )}
                <span className="text-xs">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
