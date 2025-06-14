"use client";

import { Button } from "@/components/ui/button";
import { navbarItems } from "@/lib/constants/info/navigation";
import { cn } from "@/lib/utils";
import { GlobeAltIcon } from "@heroicons/react/20/solid";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      toast.success("Successfully subscribed to our newsletter!");
    }, 1500);
  };

  const getGroupedFooterLinks = () => {
    return navbarItems
      .filter((item) => item.dropdown) // Only use dropdown items for grouped sections
      .map((item) => ({
        section: item.label,
        links: item.dropdown!,
      }));
  };

  const additionalLinks = navbarItems.filter(
    (item) => !item.dropdown && item.label !== "Home"
  );

  return (
    <footer className="bg-muted/25 border-gray-800 border-t">
      {/* Main Footer Content */}
      <div className="py-16">
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Company Info */}
          <div className="xl:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-2 rounded-lg">
                <GlobeAltIcon className="w-6 h-6" />
              </div>
              <span className="font-bold text-xl">ParagonTrails</span>
            </div>
            <p className="mb-6 text-sm leading-relaxed">
              At ParagonTrails, we believe that every journey is an opportunity
              for adventure, discovery, and creating unforgettable experiences.
              Your passport to unforgettable stories.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>123 Travel Street, Adventure City, AC 12345</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>hello@ParagonTrails.com</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          {getGroupedFooterLinks().map(({ section, links }, index) => (
            <div
              key={section}
              className={cn("", {
                "lg:col-span-1": index === getGroupedFooterLinks().length - 1,
              })}
            >
              <h4 className="mb-4 font-semibold">{section}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="xl:col-span-2">
            <div className="mx-auto max-w-7xl">
              <h2 className="max-w-2xl font-semibold text-3xl text-balance sm:text-4xl tracking-tight">
                Want product news and updates? Sign up for our newsletter.
              </h2>
              <form className="mt-10 max-w-md">
                <div className="flex items-center gap-x-4">
                  <Label htmlFor="email-address" className="sr-only">
                    Email address
                  </Label>
                  <Input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    autoComplete="email"
                    className="border-slate-200 focus:border-primary focus:ring-primary/20 h-12"
                  />
                  <Button type="submit">Subscribe</Button>
                </div>
                <p className="mt-4 text-sm/6">
                  We care about your data. Read our{" "}
                  <a className="font-semibold text-primary hover:underline">
                    privacy&nbsp;policy
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 border-gray-800 border-t">
        <div className="flex md:flex-row flex-col justify-between items-center mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-4 md:mb-0 text-center text-gray-400 text-sm md:text-left">
            &copy; {new Date().getFullYear()} ParagonTrails. All rights
            reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm">Follow us:</span>
            <div className="flex space-x-3">
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-gray-800 p-2 text-gray-400 hover:text-white"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-gray-800 p-2 text-gray-400 hover:text-white"
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-gray-800 p-2 text-gray-400 hover:text-white"
              >
                <Instagram className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-gray-800 p-2 text-gray-400 hover:text-white"
              >
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
