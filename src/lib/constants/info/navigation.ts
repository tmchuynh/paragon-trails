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
        href: "/trip-planner/new",
      },
      {
        label: "My Saved Trips",
        href: "/trip-planner/my-trips", // User's saved trips
      },
      {
        label: "Trip Budget Calculator",
        href: "/trip-planner/budget-calculator",
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
        label: "Contact Us",
        href: "/contact",
      },
    ],
  },
];
