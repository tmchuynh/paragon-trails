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
    label: "Explore Destinations",
    dropdown: [
      {
        label: "Cities We Serve",
        href: "/experiences-through-destinations",
      },
      {
        label: "Tours & Experiences",
        href: "/experiences-through-destinations/tours",
      },
      {
        label: "Our Dedicated Tour Guides Across the Globe",
        href: "/experiences-through-destinations/our-dedicated-team-of-experts/tour-guides",
      },
    ],
  },
  {
    label: "Services",
    dropdown: [
      {
        label: "Car Rentals & More",
        href: "/services/rentals/car-rentals",
      },
      {
        label: "Get Two Wheels on the Road",
        href: "/services/rentals/motorcycle-rentals",
      },
      {
        label: "Homestays & Accommodations",
        href: "/services/accomodations",
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact-us",
  },
  {
    label: "Begin Your Next Adventure",
    href: "/begin-your-next-adventure-today",
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
