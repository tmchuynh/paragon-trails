export const navbarItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Explore",
    dropdown: [
      {
        label: "Find Tours",
        href: "/tours", // Page to browse/search tours
      },
      {
        label: "Discover Attractions",
        href: "/attractions", // Page to browse/search attractions
      },
      {
        label: "Book Activities",
        href: "/activities", // Page to browse/search activities
      },
      {
        label: "Search by Destination",
        href: "/destinations", // Main search page by location
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
    label: "My Account", // This section can be dynamic based on auth state
    dropdown: [
      {
        label: "Dashboard", // Or "Login/Sign Up" if not authenticated
        href: "/account/dashboard",
      },
      {
        label: "My Saved Tours",
        href: "/account/saved-tours",
      },
      {
        label: "My Saved Attractions",
        href: "/account/saved-attractions",
      },
      {
        label: "My Saved Activities",
        href: "/account/saved-activities",
      },
      {
        label: "My Budgets",
        href: "/account/my-budgets",
      },
      {
        label: "Profile Settings",
        href: "/account/settings",
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
