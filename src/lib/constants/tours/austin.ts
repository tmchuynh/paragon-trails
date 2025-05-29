import { Tour } from "@/lib/interfaces/services/tours";
import { findGuideBySpecialty } from "@/lib/utils/get";

export const austinTours: Tour[] = [
  {
    title: "Live Music Crawl & Backstage Access",
    description:
      "Experience Austin's legendary music scene with a local musician guide who provides VIP access to multiple venues, backstage introductions, and insider stories about the city's musical heritage.",
    images: [
      "/images/tours/austin/live-music-venue.jpg",
      "/images/tours/austin/backstage.jpg",
    ],
    duration: "4 hours",
    price: "$79",
    rating: 4.8,
    tags: ["Music", "Nightlife", "Cultural"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("austin", "cultural").name,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What music genres will we experience?",
        answer:
          "Austin's music scene is diverse! Our tours typically include a mix of rock, blues, country, and indie, but each night varies based on who's performing. Let us know your preferences and we'll try to accommodate.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "While the tour is family-friendly, most venues are bars or clubs that may not allow minors after a certain hour. We recommend checking with us in advance if you plan to bring children.",
      },
      {
        question: "Do we need to purchase tickets for the venues?",
        answer:
          "No, your tour ticket includes all venue cover charges. Drinks and food are not included but can be purchased at each location.",
      },
      {
        question: "What should I wear?",
        answer:
          "Dress comfortably! Austin's music scene is casual, but some venues may have dress codes. We recommend comfortable shoes for walking between venues.",
      },
    ],
  },
  {
    title: "BBQ & Brewery Experience",
    description:
      "Savor Austin's renowned BBQ scene with skip-the-line access at top smokehouses, followed by craft beer tastings at local breweries with an expert food and beverage guide.",
    images: [
      "/images/tours/austin/bbq-platter.jpg",
      "/images/tours/austin/craft-beer.jpg",
    ],
    duration: "5 hours",
    price: "$115",
    rating: 4.9,
    tags: ["Food", "BBQ", "Beer"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("austin", "culinary").name,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "How much BBQ will we actually eat?",
        answer:
          "Come hungry! We visit 3 legendary BBQ spots with substantial tastings at each, sampling brisket, ribs, sausage, and classic sides. The tour also includes 3-4 beer tastings at each brewery we visit.",
      },
      {
        question: "Are vegetarian options available?",
        answer:
          "While BBQ is the star of this tour, we can accommodate vegetarians with advance notice. We can also recommend vegetarian-friendly breweries in the area.",
      },
      {
        question: "Do I need to book in advance?",
        answer:
          "Yes, we highly recommend booking at least 24 hours in advance to secure your spot and ensure we can accommodate any dietary restrictions.",
      },
      {
        question: "What should I wear?",
        answer:
          "Dress comfortably! We will be walking between venues, so wear comfortable shoes. Austin's BBQ scene is casual, so feel free to dress down.",
      },
    ],
  },
  {
    title: "Austin City Tour & History Walk",
    description:
      "Explore Austin's rich history and vibrant culture with a guided walking tour through downtown, visiting iconic landmarks, historic districts, and learning about the city's unique heritage.",
    images: [
      "/images/tours/austin/city-tour.jpg",
      "/images/tours/austin/history-walk.jpg",
    ],
    duration: "3 hours",
    price: "$45",
    rating: 4.7,
    tags: ["History", "Culture", "Walking Tour"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("austin", "historical").name,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "What historical sites will we visit?",
        answer:
          "The tour includes stops at the Texas State Capitol, the Driskill Hotel, historic Sixth Street, and more. You'll learn about Austin's founding, its role in Texas history, and its cultural evolution.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes! The tour is family-friendly and designed to engage visitors of all ages with interesting stories and interactive elements.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "The tour covers approximately 1.5 miles (2.4 km) at a leisurely pace with plenty of stops for explanations and photos. Comfortable walking shoes are recommended.",
      },
      {
        question: "Can we customize the tour?",
        answer:
          "Absolutely! If you have specific interests or sites you'd like to include, just let us know when booking and we'll do our best to accommodate your requests.",
      },
    ],
  },
  {
    title: "Lady Bird Lake Kayak & Nature Tour",
    description:
      "Paddle through the scenic waters of Lady Bird Lake with a guided kayak tour, exploring Austin's natural beauty, wildlife, and iconic skyline views while learning about the area's ecology and history.",
    images: [
      "/images/tours/austin/kayak-lady-bird.jpg",
      "/images/tours/austin/nature-tour.jpg",
    ],
    duration: "2.5 hours",
    price: "$55",
    rating: 4.6,
    tags: ["Nature", "Kayaking", "Outdoor"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("austin", "outdoor").name,
    tourCategoryId: "outdoor",
    faqs: [
      {
        question: "Do I need prior kayaking experience?",
        answer:
          "No prior experience is necessary! Our guides provide a brief kayaking lesson and all necessary equipment. The tour is designed for all skill levels, including beginners.",
      },
      {
        question: "What should I wear for the kayak tour?",
        answer:
          "Wear comfortable, moisture-wicking clothing that can get wet. We recommend closed-toe shoes that can get wet, a hat, and sunscreen. A swimsuit is also a good option if you prefer.",
      },
      {
        question: "Is the tour weather-dependent?",
        answer:
          "Yes, the tour is weather-dependent for safety reasons. If conditions are unsafe (e.g., thunderstorms, high winds), we will reschedule or offer a full refund. We recommend checking the weather forecast before your tour date.",
      },
      {
        question: "Can we bring our own snacks or drinks?",
        answer:
          "Yes, you can bring small snacks and non-alcoholic beverages in a waterproof bag. We provide a cooler for any items you want to keep cool during the tour. Please avoid glass containers.",
      },
    ],
  },
  {
    title: "Texas Hill Country Wine & Scenic Tour",
    description:
      "Discover the beauty of Texas Hill Country with a guided tour of local wineries, including tastings of award-winning wines and scenic views of rolling hills and vineyards.",
    images: [
      "/images/tours/austin/wine-tasting.jpg",
      "/images/tours/austin/hill-country.jpg",
    ],
    duration: "6 hours",
    price: "$99",
    rating: 4.8,
    tags: ["Wine", "Scenic", "Nature"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("austin", "culinary").name,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "How many wineries will we visit?",
        answer:
          "The tour typically includes visits to 3-4 wineries, each offering unique wines and experiences. You'll have the opportunity to taste a variety of wines and learn about the winemaking process.",
      },
      {
        question: "Is transportation provided?",
        answer:
          "Yes, round-trip transportation from downtown Austin is included in the tour price. We ensure a comfortable ride with scenic views along the way.",
      },
      {
        question: "Can I purchase wine during the tour?",
        answer:
          "Absolutely! Most wineries offer wine for purchase, and we can help arrange shipping if you want to send bottles home.",
      },
      {
        question: "What should I wear for the winery tour?",
        answer:
          "Dress comfortably for a day in the Texas sun. We recommend wearing layers as temperatures can vary throughout the day. Comfortable shoes are also advisable as some wineries have uneven terrain.",
      },
    ],
  },
  {
    title: "Austin Street Art & Mural Tour",
    description:
      "Explore Austin's vibrant street art scene with a guided walking tour of the city's most iconic murals and public art installations, led by a local artist who shares insights into the stories and techniques behind the works.",
    images: [
      "/images/tours/austin/street-art.jpg",
      "/images/tours/austin/mural-tour.jpg",
    ],
    duration: "2 hours",
    price: "$35",
    rating: 4.7,
    tags: ["Art", "Culture", "Walking Tour"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("austin", "art").name,
    tourCategoryId: "art",
    faqs: [
      {
        question: "Will we see famous murals?",
        answer:
          "Yes, the tour includes stops at some of Austin's most famous murals, as well as hidden gems that showcase the city's diverse street art culture. You'll learn about the artists and the stories behind each piece.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, the tour is family-friendly and designed to engage visitors of all ages. Kids will enjoy the colorful art and interactive elements of the tour.",
      },
      {
        question: "Do I need to bring anything?",
        answer:
          "We recommend bringing a camera or smartphone for photos, comfortable walking shoes, and water to stay hydrated. Sunscreen is also a good idea, especially in warmer months.",
      },
      {
        question: "Can we customize the tour?",
        answer:
          "Absolutely! If you have specific murals or areas of interest, let us know when booking and we'll do our best to include them in the tour.",
      },
    ],
  },
];

export default austinTours;
