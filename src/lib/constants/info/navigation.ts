export const navbarItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Find Your Next Adventure",
    href: "/destinations", // Main destinations page
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
