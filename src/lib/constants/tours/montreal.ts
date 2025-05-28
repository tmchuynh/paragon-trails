import { Tour } from "@/lib/interfaces/services/tours";

const montrealTours: Tour[] = [
  {
    title: "Underground City & Hidden Passages",
    description:
      "Explore Montreal's vast underground network with a local architect, discovering art installations, secret shortcuts, and architectural marvels while learning how this unique subterranean city developed.",
    images: [
      "/images/tours/montreal/underground-city.jpg",
      "/images/tours/montreal/underground-art.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.7,
    tags: ["Architecture", "Underground", "Art"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Jean-Pierre Tremblay",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "Is this tour accessible for those with mobility issues?",
        answer:
          "Yes, the entire underground network is wheelchair-accessible with elevators and ramps throughout. The pace is leisurely and there are many opportunities to rest along the route.",
      },
    ],
  },
  {
    title: "Plateau Food & Mural Art Experience",
    description:
      "Discover Montreal's hippest neighborhood through its cuisine and street art, sampling local specialties while exploring colorful murals and learning about the artists who transformed this vibrant district.",
    images: [
      "/images/tours/montreal/plateau-mural.jpg",
      "/images/tours/montreal/montreal-bagels.jpg",
    ],
    duration: "4 hours",
    price: "$89",
    rating: 4.9,
    tags: ["Food", "Street Art", "Local Culture"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Sophie Lavoie",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What foods will we try?",
        answer:
          "The tour includes 6-7 tastings, typically featuring Montreal's famous bagels, artisanal poutine, Quebecois pastries, craft beer samples, local cheeses, and seasonal specialties. We can accommodate most dietary restrictions with advance notice.",
      },
    ],
  },
];

export default montrealTours;
