"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import useSmallScreen from "@/hooks/useSmallScreen";
import {
  about,
  aboutFeaturedLinks,
  contact,
  contactFeaturedLinks,
  serviceCategories,
  serviceFeaturedLinks,
} from "@/lib/constants/navigation";
import { Menu } from "@/lib/types/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import * as React from "react";
import DockNavigation from "./DockNavigation";

export function NavBar() {
  const isSmallScreen = useSmallScreen();

  return (
    <>
      {isSmallScreen ? (
        <DockNavigation />
      ) : (
        <div className="bg-primary py-5 w-full">
          <div className="flex justify-around items-center mx-auto w-11/12 text-primary-foreground">
            <Image
              src="/images/logo_white.png"
              alt="PCS Logo"
              className="object-cover"
              priority
              width={100}
              height={100}
            />

            <NavigationMenu className="flex justify-end max-w-full font-[NotoSans] text-white">
              <NavigationMenuList>
                <NavigationMenuItem className="mt-2 p-4">
                  <NavigationMenuLink
                    href="/"
                    className="text-lg 2xl:text-2xl xl:text-xl"
                  >
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Our Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="gap-3 grid lg:grid-cols-2 xl:grid-cols-4 lg:grid-rows-4 p-4 md:w-[35em] lg:w-[45em] xl:w-[50em] md:h-[28em] lg:h-[25em]">
                      {serviceFeaturedLinks.map((link, index) => (
                        <li
                          className="col-span-2 lg:col-span-1 xl:col-span-4 lg:row-span-4 m-0"
                          key={index}
                        >
                          {NavigationImageItem({ link })}
                        </li>
                      ))}
                      {serviceCategories.map((link, index) => (
                        <ListItem
                          href={link.href}
                          title={`${link.title}`}
                          key={index}
                        >
                          {link.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>About PCS</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="gap-3 grid grid-cols-2 lg:grid-rows-4 p-4 md:w-[35em] lg:w-[45em] xl:w-[60em] lg:h-[25em]">
                      {aboutFeaturedLinks.map((link, index) => (
                        <li
                          className="col-span-1 lg:col-span-1 row-span-1 lg:row-span-4 m-0"
                          key={index}
                        >
                          {NavigationImageItem({ link })}
                        </li>
                      ))}
                      {about.map((link, index) => (
                        <ListItem
                          href={link.href}
                          title={`${link.title}`}
                          key={index}
                        >
                          {link.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Contact Us</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="gap-3 grid grid-cols-2 lg:grid-cols-3 grid-rows-3 lg:grid-rows-3 p-4 md:w-[35em] lg:w-[40em] md:h-[28em] lg:h-[25em]">
                      {contactFeaturedLinks.map((link, index) => (
                        <li
                          className="col-span-1 lg:col-span-2 row-span-3 lg:row-span-3 m-0"
                          key={index}
                        >
                          {NavigationImageItem({ link })}
                        </li>
                      ))}
                      {contact.map((link, index) => (
                        <ListItem
                          href={link.href}
                          title={`${link.title}`}
                          key={index}
                        >
                          {link.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      )}
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li className={cn("mx-0", className)}>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className="group flex flex-col data-[state=open]:bg-accent hover:bg-primary/85 p-4 rounded-md focus-visible:ring-[3px] focus-visible:ring-ring/50 h-full data-[state=open]:text-accent-foreground hover:text-primary-foreground no-underline transition-colors select-none outline-none focus-visible:outline-none"
          {...props}
        >
          <div className="font-[Gloock] font-medium text-lg leading-none">
            {title}
          </div>
          <p className="font-[EncodeSans] font-normal text-xs group-hover:text-white leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

function NavigationImageItem(link: { link: Menu }) {
  return (
    <NavigationMenuLink
      className="relative flex flex-col justify-end bg-cover bg-center focus:shadow-md p-6 rounded-md w-full h-full font-[Gloock] no-underline select-none outline-none"
      href={`${link.link.href}`}
      style={{
        backgroundImage: `url(${link.link.imageUrl})`,
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 to-background/50 rounded-md"></div>
      <div className="relative mt-12 -mb-5 font-[Gloock] font-medium text-foreground text-lg uppercase">
        {link.link.title}
      </div>
      <p className="relative mt-4 font-[GreatVibes] text-foreground text-lg lg:text-xl tracking-wider">
        {link.link.description}
      </p>
    </NavigationMenuLink>
  );
}
