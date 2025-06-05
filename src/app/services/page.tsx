import { navbarItems } from "@/lib/constants/info/navigation";
import InformationDisplayCard from "@/components/cards/InformationDisplayCard";

export default function ServicesPage() {
  const getGroupedServicesLinks = () => {
    const servicesItem = navbarItems.find(
      (item) => item.label === "Services" && item.dropdown,
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
        <h1>Paragon Trial's Unique Services</h1>
        <p>
          We offer a variety of services to help you achieve your goals. From
          consulting to development, our team is here to support you every step
          of the way.
        </p>
      </header>

      <section className="gap-4">
        {getGroupedServicesLinks().map(({ section, links }) => (
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
        <h2 className="mb-4 font-semibold text-xl">More Services</h2>
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {navbarItems
            .filter(
              (item) =>
                item.label === "Destinations" ||
                (item.label === "Tours" && item.dropdown),
            )
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
