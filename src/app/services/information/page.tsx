import { navbarItems } from "@/lib/constants/info/navigation";
import InformationDisplayCard from "@/components/cards/InformationDisplayCard";

export default function InformationPage() {
  const getGroupedInformationLinks = () => {
    const servicesItem = navbarItems.find(
      (item) => item.label === "Info" && item.dropdown
    );
    return servicesItem
      ? [
          {
            section: servicesItem.label,
            links: servicesItem.dropdown!,
          },
        ]
      : [];
  };

  const getMoreInformationLinks = () => {
    const servicesItem = navbarItems.find(
      (item) => item.label === "About Us" && item.dropdown
    );
    return servicesItem
      ? [
          {
            section: servicesItem.label,
            links: servicesItem.dropdown!,
          },
        ]
      : [];
  };
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>Essential Travel Information & Company Policies</h1>
        <h5>
          Everything You Need to Know Before, During, and After Your Journey
        </h5>
        <p>
          Welcome to our information hub. This page is designed to provide
          travelers with clear, concise details about our services, policies,
          and company principles. Whether you're preparing for a trip, seeking
          support, or simply learning more about our mission and values, you'll
          find everything you need below. Please take a moment to explore the
          sections, including frequently asked questions, safety guidelines,
          accommodation and insurance policies, and the story behind our brand.
          We're here to ensure you feel confident, informed, and supported at
          every step of your travel experience.
        </p>
      </header>

      <section className="gap-4">
        {getGroupedInformationLinks().map(({ section, links }) => (
          <div key={section} className="mt-6">
            <h2 className="mb-4 font-semibold text-xl">{section}</h2>
            <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {links.map((link) => (
                <InformationDisplayCard
                  key={link.href}
                  label={link.label}
                  href={link.href}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="mt-6">
        <h2 className="mb-4 font-semibold text-xl">More Information</h2>
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {getMoreInformationLinks().map(({ section, links }) =>
            links.map((link) => (
              <InformationDisplayCard
                key={link.href}
                label={link.label}
                href={link.href}
              />
            ))
          )}
          {navbarItems
            .filter((item) => item.label === "Contact")
            .map((link, index) => (
              <InformationDisplayCard
                key={`${link.label}-${index}`}
                label={link.label}
                href={link.href || "#"}
              />
            ))}
        </div>
      </section>
    </div>
  );
}
