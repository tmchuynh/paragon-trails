import { navbarItems } from "@/lib/constants/navigation";
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
    (item) => !item.dropdown && item.label !== "Home"
  );

  return (
    <footer className="mt-20 py-12 border-t-2 border-border">
      <div className="gap-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mx-auto w-10/12 md:w-11/12">
        {getGroupedFooterLinks().map(({ section, links }) => (
          <div key={section}>
            <h4 className="mb-3">{section}</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm underline-offset-4 hover:underline transition-colors duration-200 decoration-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="mb-3">More</h4>
          <ul className="space-y-2">
            {additionalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href || "#"}
                  className="text-sm hover:text-gray-300 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border text-center text-sm">
        &copy; {new Date().getFullYear()} Paragon Trails. All rights reserved.
      </div>
    </footer>
  );
}
