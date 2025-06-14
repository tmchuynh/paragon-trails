export const navbarItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Find Your Next Adventure",
    dropdown: [
      {
        label: "Destinations",
        href: "/destinations", // Destination search page
      },
      {
        label: "Activities",
        href: "/activities", // Activity search page
      },
      {
        label: "Attractions",
        href: "/attractions", // Attraction search page
      },
      {
        label: "Tours",
        href: "/tours", // Tour search page
      },
    ],
  },
  {
    label: "Book Travel",
    dropdown: [
      {
        label: "Flights",
        href: "/flights", // Flight search page
      },
      {
        label: "Hotels",
        href: "/hotels", // Hotel search page
      },
      {
        label: "Vehicle Rentals",
        href: "/vehicles", // Vehicle rental search page
      },
    ],
  },
  {
    label: "Trip Planner",
    dropdown: [
      {
        label: "Create New Trip",
        href: "/trip-planner",
      },
      {
        label: "Trip Budget Calculator",
        href: "/budget-calculator",
      },
    ],
  },
  {
    label: "About Us",
    dropdown: [
      {
        label: "Our Story",
        href: "/about",
      },
      {
        label: "Our History",
        href: "/about/our-history",
      },
      {
        label: "Contact Us",
        href: "/contact",
      },
    ],
  },
];
