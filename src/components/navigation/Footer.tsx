import { navbarItems } from "@/lib/constants/info/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GlobeAltIcon } from "@heroicons/react/20/solid";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const getGroupedFooterLinks = () => {
    return navbarItems
      .filter((item) => item.dropdown) // Only use dropdown items for grouped sections
      .map((item) => ({
        section: item.label,
        links: item.dropdown!,
      }));
  };

  const additionalLinks = navbarItems.filter(
    (item) => !item.dropdown && item.label !== "Home",
  );

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-500 py-12">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h3 className="mb-4 font-bold text-2xl text-white md:text-3xl">
            Subscribe to Our Newsletter
          </h3>
          <p className="mb-6 text-white/90 max-w-2xl mx-auto">
            Get the latest travel deals, destination guides, and exclusive offers delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white text-gray-900 flex-1"
            />
            <Button className="bg-black hover:bg-gray-800 text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Company Info */}
          <div className="xl:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-2 rounded-lg">
                <GlobeAltIcon className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl">TripTrap</span>
            </div>
            <p className="mb-6 text-gray-300 text-sm leading-relaxed">
              At TripTrap, we believe that every journey is an opportunity for adventure, discovery, 
              and creating unforgettable experiences. Your passport to unforgettable stories.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>123 Travel Street, Adventure City, AC 12345</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>hello@triptrap.com</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          {getGroupedFooterLinks().map(({ section, links }) => (
            <div key={section}>
              <h4 className="mb-4 font-semibold text-white">{section}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 text-sm hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="mb-4 font-semibold text-white">More</h4>
            <ul className="space-y-3">
              {additionalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href || "#"}
                    className="text-gray-300 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/support" className="text-gray-300 text-sm hover:text-white transition-colors duration-200">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 text-sm hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 text-sm hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-4 md:mb-0 text-center md:text-left text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} TripTrap. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm">Follow us:</span>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="hover:bg-gray-800 p-2 text-gray-400 hover:text-white">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-gray-800 p-2 text-gray-400 hover:text-white">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-gray-800 p-2 text-gray-400 hover:text-white">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-gray-800 p-2 text-gray-400 hover:text-white">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
