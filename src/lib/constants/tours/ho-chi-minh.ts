import { Tour } from "@/lib/interfaces/services/tours";

export const hoChiMinhTours: Tour[] = [
  {
    title: "Cu Chi Tunnels & War History",
    description:
      "Explore the famous Cu Chi tunnel network used during the Vietnam War and gain insights into this complex period of history from a knowledgeable guide.",
    images: [
      "/images/tours/ho-chi-minh/cu-chi-tunnels.jpg",
      "/images/tours/ho-chi-minh/war-remnants-museum.jpg",
    ],
    duration: "6 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Historical", "War History", "Educational"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Nguyen Van Minh",
    tourCategoryId: "history-expert",
    faqs: [
      {
        question: "Is crawling through the tunnels mandatory?",
        answer:
          "No, it's completely optional. Many visitors prefer to observe from above ground, which is equally informative.",
      },
    ],
  },
  {
    title: "Saigon After Dark: Street Food Adventure",
    description:
      "Experience Ho Chi Minh City's vibrant nightlife and culinary scene from the back of a vintage Vespa, sampling delicious street food at local hotspots.",
    images: [
      "/images/tours/ho-chi-minh/vespa-tour.jpg",
      "/images/tours/ho-chi-minh/street-food.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Food", "Nightlife", "Vespa"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Tran Thi Lan",
    tourCategoryId: "food-culture",
    faqs: [
      {
        question: "Do I drive the Vespa myself?",
        answer:
          "No, you'll be riding as a passenger with our experienced drivers, allowing you to fully enjoy the sights, sounds, and tastes of Saigon.",
      },
    ],
  },
];

export default hoChiMinhTours;
