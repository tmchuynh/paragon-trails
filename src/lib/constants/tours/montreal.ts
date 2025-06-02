import { Tour } from "@/lib/interfaces/services/tours";

export const montrealTours: Tour[] = [
  {
    title: "Underground City & Hidden Passages",
    description:
      "Explore Montreal's vast underground network with a local architect, discovering art installations, secret shortcuts, and architectural marvels while learning how this unique subterranean city developed.",
    city: "Montreal",
    country: "Canada",
    region: "Quebec",
    images: [
      "/images/tours/montreal/underground-city.jpg",
      "/images/tours/montreal/underground-art.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.7,
    tags: ["Architecture", "Underground", "Art"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "Is this tour accessible for those with mobility issues?",
        answer:
          "Yes, the entire underground network is wheelchair-accessible with elevators and ramps throughout. The pace is leisurely and there are many opportunities to rest along the route.",
      },
      {
        question: "What should I wear for the underground tour?",
        answer:
          "Dress in layers as temperatures can vary underground. Comfortable walking shoes are recommended, and a light jacket or sweater is advisable as some areas can be cooler.",
      },
    ],
  },
  {
    title: "Plateau Food & Mural Art Experience",
    description:
      "Discover Montreal's hippest neighborhood through its cuisine and street art, sampling local specialties while exploring colorful murals and learning about the artists who transformed this vibrant district.",
    city: "Montreal",
    country: "Canada",
    region: "Quebec",
    images: [
      "/images/tours/montreal/plateau-mural.jpg",
      "/images/tours/montreal/montreal-bagels.jpg",
    ],
    duration: "4 hours",
    price: "$89",
    rating: 4.9,
    tags: ["Food", "Street Art", "Local Culture"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What foods will we try?",
        answer:
          "The tour includes 6-7 tastings, typically featuring Montreal's famous bagels, artisanal poutine, Quebecois pastries, craft beer samples, local cheeses, and seasonal specialties. We can accommodate most dietary restrictions with advance notice.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "The tour covers approximately 3 km (1.9 miles) at a leisurely pace with plenty of stops. We take breaks to enjoy tastings and explore murals, so it's suitable for all fitness levels.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and children will enjoy the interactive street art and delicious food tastings. We can also provide kid-friendly food options upon request.",
      },
    ],
  },
  {
    title: "Montreal's Historic Neighborhoods Walking Tour",
    description:
      "Stroll through Montreal's historic districts with a local historian, visiting Old Montreal, the Latin Quarter, and Little Italy while learning about the city's rich cultural heritage and architectural evolution.",
    city: "Montreal",
    country: "Canada",
    region: "Quebec",
    images: [
      "/images/tours/montreal/old-montreal.jpg",
      "/images/tours/montreal/latin-quarter.jpg",
    ],
    duration: "3 hours",
    price: "$55",
    rating: 4.8,
    tags: ["History", "Architecture", "Culture"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Are there any entry fees for sites we visit?",
        answer:
          "No, this walking tour focuses on outdoor sites and public spaces, so there are no entry fees. We will visit historical landmarks, parks, and plazas.",
      },
      {
        question: "What should I wear for the walking tour?",
        answer:
          "Comfortable walking shoes are recommended as we will cover approximately 2 km (1.2 miles) on foot. Dress in layers to accommodate changing weather conditions.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and designed to engage visitors of all ages with fascinating stories and interactive elements.",
      },
    ],
  },
];

export default montrealTours;
