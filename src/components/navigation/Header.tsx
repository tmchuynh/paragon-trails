"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navbarItems } from "@/lib/constants/info/navigation";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import { useState } from "react";
import { ThemeToggle } from "../button/ThemeToggle";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="top-0 z-50 absolute inset-x-0 bg-background w-full">
      <nav
        aria-label="Global"
        className="flex justify-between items-center shadow lg:px-8 p-6 border-b"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              alt=""
              src="/images/logoSmall.png"
              className="w-auto h-8"
              width={32}
              height={32}
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex justify-center items-center -m-2.5 p-2.5 rounded-md"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        {/* Desktop Navbar */}
        <div className="lg:flex items-center lg:gap-x-6 hidden">
          {navbarItems.map((item) =>
            item.dropdown ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger asChild>
                  <button
                    className="flex items-center gap-1 font-semibold text-sm/6"
                    type="button"
                  >
                    {item.label}
                    <ChevronDownIcon className="w-4 h-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="min-w-[180px]">
                  {item.dropdown.map((sub) => (
                    <DropdownMenuItem asChild key={sub.label}>
                      <a href={sub.href} className="block px-4 py-2 text-sm">
                        {sub.label}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="font-semibold text-sm/6"
              >
                {item.label}
              </a>
            ),
          )}
          <ThemeToggle />
        </div>
      </nav>
      {/* Mobile Navbar */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="z-50 fixed inset-0 bg-background" />
        <DialogPanel className="right-0 z-50 fixed inset-y-0 px-6 py-6 sm:ring-1 sm:ring-gray-900/10 w-full sm:max-w-sm overflow-y-auto">
          <div className="flex justify-between items-center">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="w-auto h-8"
                width={32}
                height={32}
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 p-2.5 rounded-md"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navbarItems.map((item) =>
                  item.dropdown ? (
                    <div key={item.label}>
                      <details>
                        <summary className="flex justify-between items-center hover:bg-card -mx-3 px-3 py-2 border border-border rounded-lg font-semibold text-base/7 cursor-pointer">
                          {item.label}
                          <ChevronDownIcon className="inline ml-2 w-4 h-4" />
                        </summary>
                        <div className="pl-4">
                          {item.dropdown.map((sub) => (
                            <a
                              key={sub.label}
                              href={sub.href}
                              className="block hover:bg-card -mx-3 px-3 py-2 border border-border rounded-lg text-sm"
                            >
                              {sub.label}
                            </a>
                          ))}
                        </div>
                      </details>
                    </div>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block hover:bg-card -mx-3 px-3 py-2 border border-border rounded-lg font-semibold text-base/7"
                    >
                      {item.label}
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
