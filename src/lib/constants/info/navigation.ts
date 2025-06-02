export const navbarItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    dropdown: [
      {
        label: "Our Company",
        href: "/about-paragon-trails",
      },
      {
        label: "Our History & Mission",
        href: "/about-paragon-trails/company-history-and-mission",
      },
      {
        label: "Our Team & Partnerships",
        href: "/about-paragon-trails/core-team-and-partnerships",
      },
      {
        label: "Core Pillars",
        href: "/about-paragon-trails/sustainability-and-community-involvement",
      },
    ],
  },
  {
    label: "Destinations",
    dropdown: [
      {
        label: "All Destinations",
        href: "/luxurious-destinations",
      },
      {
        label: "Popular Destinations",
        href: "/luxurious-destinations/popular-destinations",
      },
    ],
  },
  {
    label: "Tours",
    dropdown: [
      {
        label: "All Tours",
        href: "/tours",
      },
      {
        label: "Popular Tours",
        href: "/tours/popular-tours",
      },
      {
        label: "Types of Tours",
        href: "/tours/tour-categories",
      },
      {
        label: "Tour Guides",
        href: "/tours/tour-guides",
      },
    ],
  },
  {
    label: "Services",
    dropdown: [
      {
        label: "Rent a Vehicle for Your Trip",
        href: "/services/ground-transportations",
      },
      {
        label: "Fly Private with Us",
        href: "/services/private-aviation",
      },
      {
        label: "Rent a Yacht Charter",
        href: "/services/yacht-charters",
      },
      {
        label: "Homestays & Heritage Stays",
        href: "/services/homestays-and-heritage-stays",
      },
    ],
  },
  {
    label: "Info",
    dropdown: [
      {
        label: "FAQs",
        href: "/services/information/frequently-asked-questions",
      },
      {
        label: "Accommodations Policy",
        href: "/services/information/accommodations-policy",
      },
      {
        label: "Travel Insurance Policy",
        href: "/services/information/travel-insurance-policy",
      },
      {
        label: "Cancellation & Refund Policy",
        href: "/services/information/cancellation-and-refund-policy",
      },
      {
        label: "Travel Safety Information",
        href: "/services/information/travel-safety-information",
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact-information",
  },
  {
    label: "Book Now",
    href: "/book-your-trip-today",
  },
];

export const dockNavigationMenu = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Tours",
    href: "/tours",
    activeIcon: "TourActiveIcon", // Replace with actual icon component
    inactiveIcon: "TourInactiveIcon", // Replace with actual icon component
  },
  {
    name: "Destinations",
    href: "/luxurious-destinations",
    activeIcon: "DestinationActiveIcon", // Replace with actual icon component
    inactiveIcon: "DestinationInactiveIcon", // Replace with actual icon component
  },
  {
    name: "Contact",
    href: "/contact-information",
    activeIcon: "ContactActiveIcon", // Replace with actual icon component
    inactiveIcon: "ContactInactiveIcon", // Replace with actual icon component
  },
  {
    name: "Services",
    href: "/services",
    activeIcon: "ServiceActiveIcon", // Replace with actual icon component
    inactiveIcon: "ServiceInactiveIcon", // Replace with actual icon component
  },
];
