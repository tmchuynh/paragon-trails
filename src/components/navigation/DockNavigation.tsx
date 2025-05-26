"use client";
import { dockNavigationMenu } from "@/lib/constants/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DockNavigation() {
  const pathname = usePathname();

  return (
    <nav className="bottom-0 z-10 fixed sm:hidden bg-background dark:border-chart-1 border-t w-full text-foreground">
      <div className="mx-auto px-6">
        <div className="flex justify-between items-center">
          {dockNavigationMenu.map((item) => {
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
                  <item.activeIcon className="w-6 h-6" />
                ) : (
                  <item.inactiveIcon className="w-6 h-6" />
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
