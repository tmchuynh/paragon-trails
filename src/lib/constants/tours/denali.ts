import { Tour } from "@/lib/interfaces/services/tours";

export const denaliTours: Tour[] = [
  {
    title: "Denali National Park Wildlife Safari",
    description:
      "Embark on a guided safari through Denali National Park, home to North America's highest peak and diverse wildlife including grizzly bears, moose, and caribou.",
    city: "Denali Park",
    country: "United States",
    state: "Alaska",
    region: "Interior Alaska",
    images: [
      "/images/tours/denali/wildlife-safari.jpg",
      "/images/tours/denali/grizzly-bear.jpg",
    ],
    duration: "8 hours",
    price: "$150",
    rating: 4.9,
    tags: ["Wildlife", "Adventure", "Nature"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "What should I wear for the safari?",
        answer:
          "Dress in layers with waterproof clothing, sturdy hiking boots, and bring binoculars for wildlife viewing.",
      },
      {
        question: "Is lunch provided during the tour?",
        answer:
          "Yes, a packed lunch will be provided. Please inform us of any dietary restrictions in advance.",
      },
      {
        question: "Can we see the Northern Lights on this tour?",
        answer:
          "This tour focuses on wildlife viewing. For Northern Lights experiences, consider our evening tours.",
      },
    ],
  },
  {
    title: "Denali Scenic Flight & Glacier Landing",
    description:
      "Experience breathtaking aerial views of Denali's glaciers and peaks, followed by a thrilling glacier landing for an up-close encounter with the Alaskan wilderness.",
    city: "Denali Park",
    country: "United States",
    state: "Alaska",
    region: "Interior Alaska",
    images: [
      "/images/tours/denali/scenic-flight.jpg",
      "/images/tours/denali/glacier-landing.jpg",
    ],
    duration: "3 hours",
    price: "$300",
    rating: 4.8,
    tags: ["Scenic", "Adventure", "Glacier"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Do I need prior flying experience for this tour?",
        answer:
          "No prior flying experience is required. Our experienced pilots will guide you throughout the flight.",
      },
      {
        question: "What should I bring on the flight?",
        answer:
          "Bring a camera, warm clothing, and any personal items you may need. We provide safety gear for the glacier landing.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, children are welcome on this tour. However, they must be accompanied by an adult and meet the minimum age requirement for safety.",
      },
    ],
  },
  {
    title: "Denali Hiking Adventure",
    description:
      "Join a guided hiking adventure through Denali's stunning landscapes, exploring hidden trails and enjoying panoramic views of the park's natural beauty.",
    city: "Denali Park",
    country: "United States",
    state: "Alaska",
    region: "Interior Alaska",
    images: [
      "/images/tours/denali/hiking-adventure.jpg",
      "/images/tours/denali/panoramic-view.jpg",
    ],
    duration: "6 hours",
    price: "$120",
    rating: 4.7,
    tags: ["Hiking", "Nature", "Adventure"],
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "What level of fitness is required for this hike?",
        answer:
          "This hike is suitable for moderate fitness levels. Our guides will adjust the pace based on the group's abilities.",
      },
      {
        question: "Are trekking poles provided?",
        answer:
          "Yes, trekking poles are available for use during the hike. We recommend bringing your own if you prefer.",
      },
      {
        question: "Can I bring my dog on this hike?",
        answer:
          "Unfortunately, pets are not allowed on this guided hike to protect the wildlife and natural environment of Denali National Park.",
      },
    ],
  },
];

export default denaliTours;
