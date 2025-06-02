import { Tour } from "@/lib/interfaces/services/tours";

export const amalfiCoastTours: Tour[] = [
  {
    title: "Positano & Path of the Gods Hike",
    description:
      "Experience the breathtaking beauty of the Amalfi Coast with a guided hike along the famous 'Path of the Gods' trail, offering spectacular panoramic views of the Mediterranean, followed by exploration of the picturesque cliffside village of Positano.",
    city: "Positano",
    country: "Italy",
    region: "Campania",
    images: [
      "https://images.unsplash.com/photo-1562966173-2a864c016b8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1hbGZpJTIwY29hc3QlMkZwYXRoJTIwb2YlMjBnb2RzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1683574932064-21fafd50a67c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFtYWxmaSUyMGNvYXN0JTJGcGF0aCUyMG9mJTIwZ29kc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1732388599539-d02b073745e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFtYWxmaSUyMGNvYXN0JTJGcGF0aCUyMG9mJTIwZ29kc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1660007055945-fcc37170c2c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFtYWxmaSUyMGNvYXN0JTJGcGF0aCUyMG9mJTIwZ29kc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1676587123864-bd9279f3eeae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFtYWxmaSUyMGNvYXN0JTJGcGF0aCUyMG9mJTIwZ29kc3xlbnwwfHwwfHx8MA%3D%3D",
    ],
    duration: "7 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Hiking", "Scenery", "Village"],
    isPopular: true,
    isHistorical: false,
    isRomantic: true,
    isAdventure: true,
    isCultural: false,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "adventure",
    meetingPoint: {
      address: "Piazza Paolo Capasso, 84017 Bomerano, Agerola, Italy",
      coordinates: {
        latitude: 40.6273,
        longitude: 14.5358,
      },
      instructions:
        "Meet your guide at the main square in Bomerano, in front of the Bar Agerola. Look for a guide holding a 'Path of the Gods' sign. Please arrive 15 minutes before the departure time.",
      contactNumber: "+39 081 1234567",
      contactEmail: "hiking@paragontrails.com",
    },
    faqs: [
      {
        question: "How difficult is the hiking trail?",
        answer:
          "The Path of the Gods is a moderate hike of about 7km with some elevation changes. While not technically difficult, it requires reasonable fitness and comfortable walking shoes. The path includes some steep sections and uneven terrain, but the spectacular views make every step worthwhile. We maintain a comfortable pace with plenty of stops for photos and rest.",
      },
      {
        question: "What should I bring for the hike?",
        answer:
          "We recommend wearing sturdy hiking shoes, bringing a refillable water bottle, sunscreen, and a light jacket as temperatures can change quickly in the mountains. A small backpack for personal items is also advisable. We provide snacks and refreshments during the hike.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and suitable for children aged 8 and up who are comfortable with hiking. We can adjust the pace to accommodate younger hikers, but parents should assess their child's fitness level before booking. Children under 8 may find the trail too challenging.",
      },
      {
        question: "What if the weather is bad?",
        answer:
          "We monitor weather conditions closely. If the forecast indicates heavy rain or unsafe hiking conditions, we will reschedule your tour or offer a full refund. In case of light rain, we provide ponchos and continue with the hike as planned, as the Amalfi Coast can be even more beautiful in misty weather.",
      },
      {
        question: "How is transportation handled after the hike?",
        answer:
          "After completing the hike in Nocelle, we provide transportation down to Positano. At the end of the tour, we include return transportation back to the starting point in Bomerano. If you prefer to stay in Positano afterwards, just let your guide know and we can arrange for your belongings to be transported down from Bomerano.",
      },
    ],
    availableDates: [
      "2024-04-15",
      "2024-04-29",
      "2024-05-13",
      "2024-05-27",
      "2024-06-10",
      "2024-06-24",
      "2024-09-09",
      "2024-09-23",
      "2024-10-07",
      "2024-10-21",
    ],
    highlights: [
      "Hike the famous 'Path of the Gods' trail with panoramic coastal views",
      "Professional hiking guide sharing local knowledge and history",
      "Explore the picturesque cliffside village of Positano",
      "Spectacular photo opportunities along the Mediterranean coastline",
      "Authentic local experience away from tourist crowds",
    ],
    inclusions: [
      "Professional hiking guide",
      "Small group experience (max 10 people)",
      "Trail snacks and water",
      "Local transportation between trail points",
      "Map of the path and surrounding area",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Lunch (available in Positano at own expense)",
      "Hiking poles (available for rent)",
      "Personal travel insurance",
      "Gratuities",
    ],
    itinerary: [
      "08:30 AM: Meet guide in Bomerano",
      "08:45 AM: Safety briefing and route overview",
      "09:00 AM: Begin hike along the Path of the Gods",
      "10:30 AM: Rest stop at panoramic viewpoint with refreshments",
      "11:30 AM: Continue hiking with views of Praiano and Positano",
      "12:30 PM: Descend to Nocelle",
      "01:00 PM: Transfer to Positano",
      "01:30 PM - 03:00 PM: Free time to explore Positano and have lunch",
      "03:30 PM: Return transportation to starting point",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled activity or in case of no-show.",
  },
  {
    title: "Limoncello & Culinary Traditions",
    description:
      "Discover the secrets of Amalfi Coast cuisine with visits to family-run lemon groves, a hands-on cooking class featuring local specialties, and a limoncello making demonstration at a historic distillery in Ravello.",
    city: "Ravello",
    country: "Italy",
    region: "Campania",
    images: [
      "https://images.unsplash.com/photo-1710443165761-bcfdce7bded6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QW1hbGZpJTIwQ29hc3QlMjBjdWlzaW5lJTIwd2l0aCUyMHZpc2l0cyUyMHRvJTIwZmFtaWx5JTIwcnVuJTIwbGVtb24lMjBncm92ZXN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1654803771411-f09348fb1645?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QW1hbGZpJTIwQ29hc3QlMjBjdWlzaW5lJTIwd2l0aCUyMHZpc2l0cyUyMHRvJTIwZmFtaWx5JTIwcnVuJTIwbGVtb24lMjBncm92ZXN8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1686156705816-6904c563c787?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QW1hbGZpJTIwQ29hc3QlMjBjdWlzaW5lJTIwd2l0aCUyMHZpc2l0cyUyMHRvJTIwZmFtaWx5JTIwcnVuJTIwbGVtb24lMjBncm92ZXN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1721906494477-74d62ab31a14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEFtYWxmaSUyMENvYXN0JTIwY3Vpc2luZSUyMHdpdGglMjB2aXNpdHMlMjB0byUyMGZhbWlseSUyMHJ1biUyMGxlbW9uJTIwZ3JvdmVzfGVufDB8fDB8fHww",
    ],
    duration: "6 hours",
    price: "$145",
    rating: 5.0,
    tags: ["Food", "Cooking", "Limoncello"],
    isPopular: true,
    isHistorical: false,
    isRomantic: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    meetingPoint: {
      address: "Piazza Duomo, 84011 Amalfi, Italy",
      coordinates: {
        latitude: 40.6344,
        longitude: 14.6026,
      },
      instructions:
        "Meet your guide at the fountain in front of the Amalfi Cathedral (Duomo di Amalfi). Your guide will be holding a yellow sign with 'Limoncello Tour' written on it. Please arrive 10 minutes before departure time.",
      contactNumber: "+39 081 9876543",
      contactEmail: "culinary@paragontrails.com",
    },
    faqs: [
      {
        question: "What will we cook during the class?",
        answer:
          "The menu changes seasonally but typically includes traditional Amalfi Coast specialties such as scialatielli pasta with seafood, lemon-infused dishes, and local desserts like delizia al limone. Our chef adapts the class to accommodate dietary restrictions and preferences when notified in advance.",
      },
      {
        question: "Do we get to taste the limoncello?",
        answer:
          "Absolutely! After the limoncello making demonstration, you'll have the opportunity to taste several varieties of this iconic liqueur, including traditional and flavored versions. We also provide recipes so you can recreate your own limoncello at home.",
      },
      {
        question: "Is transportation included?",
        answer:
          "Yes, we provide round-trip transportation from your accommodation in Amalfi or Positano. The drive through the coastal roads is part of the experience, offering stunning views along the way.",
      },
      {
        question: "Are the recipes suitable for beginners?",
        answer:
          "Yes, all recipes are designed to be accessible for home cooks of any level. Our expert instructor breaks down complex techniques into simple steps that anyone can follow. You'll receive detailed recipe cards to take home so you can recreate your Amalfi feast for friends and family.",
      },
      {
        question: "What makes Amalfi lemons different from regular lemons?",
        answer:
          "Amalfi lemons (Sfusato Amalfitano) are larger, sweeter, and more aromatic than regular lemons. They have a thicker pith and less acidity, which makes them perfect for limoncello and cooking. These lemons are protected by a PGI designation (Protected Geographical Indication) and are cultivated on terraced hillsides using traditional methods that date back centuries.",
      },
    ],
    availableDates: [
      "2024-04-10",
      "2024-04-24",
      "2024-05-08",
      "2024-05-22",
      "2024-06-05",
      "2024-06-19",
      "2024-07-10",
      "2024-07-24",
      "2024-09-04",
      "2024-09-18",
      "2024-10-09",
    ],
    highlights: [
      "Visit family-run lemon groves with centuries of tradition",
      "Learn the secrets of authentic limoncello production",
      "Hands-on cooking class featuring regional specialties",
      "Taste a variety of limoncello styles and citrus-based products",
      "Enjoy a full meal of dishes you've prepared with coastal views",
    ],
    inclusions: [
      "Transportation between locations",
      "English-speaking culinary guide",
      "Lemon grove tour with owner",
      "Limoncello making demonstration and tasting",
      "Cooking class with all ingredients",
      "Full meal with wine and your homemade limoncello",
      "Recipe booklet to take home",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional alcoholic beverages beyond included wine",
      "Personal cooking equipment",
      "Gratuities",
    ],
    itinerary: [
      "09:30 AM: Meet guide and depart for lemon grove",
      "10:00 AM: Guided tour of traditional terraced lemon cultivation",
      "11:00 AM: Limoncello production demonstration and tasting",
      "12:00 PM: Transfer to cooking school in Ravello",
      "12:30 PM: Hands-on cooking class with local chef",
      "02:30 PM: Lunch featuring dishes prepared during class",
      "03:30 PM: Tour conclusion with limoncello gift and recipes",
    ],
    cancellationPolicy:
      "Full refund available if canceled 72 hours before the scheduled activity. 50% refund if canceled between 48-72 hours. No refund for cancellations less than 48 hours in advance.",
  },
  {
    title: "Private Amalfi Coast Yacht Experience",
    description:
      "Sail the stunning Amalfi coastline aboard a private luxury yacht, stopping to swim in hidden coves, visit sea caves including the famous Emerald Grotto, and enjoy a gourmet seafood lunch with local wine while anchored off a secluded beach.",
    city: "Amalfi",
    country: "Italy",
    region: "Campania",
    images: [
      "https://images.unsplash.com/photo-1654991939562-17abe49e3687?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2FpbCUyMHRoZSUyMHN0dW5uaW5nJTIwQW1hbGZpJTIwY29hc3RsaW5lJTIwYWJvYXJkJTIwYSUyMHByaXZhdGUlMjBsdXh1cnklMjB5YWNodHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1627640408385-0c54a7410b7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U2FpbCUyMHRoZSUyMHN0dW5uaW5nJTIwQW1hbGZpJTIwY29hc3RsaW5lJTIwYWJvYXJkJTIwYSUyMHByaXZhdGUlMjBsdXh1cnklMjB5YWNodHxlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1683121812652-ca9bd27de727?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8U2FpbCUyMHRoZSUyMHN0dW5uaW5nJTIwQW1hbGZpJTIwY29hc3RsaW5lJTIwYWJvYXJkJTIwYSUyMHByaXZhdGUlMjBsdXh1cnklMjB5YWNodHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1587922143435-5fd353c240ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFNhaWwlMjB0aGUlMjBzdHVubmluZyUyMEFtYWxmaSUyMGNvYXN0bGluZSUyMGFib2FyZCUyMGElMjBwcml2YXRlJTIwbHV4dXJ5JTIweWFjaHR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1664730068104-e3ca0b59f2b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFNhaWwlMjB0aGUlMjBzdHVubmluZyUyMEFtYWxmaSUyMGNvYXN0bGluZSUyMGFib2FyZCUyMGElMjBwcml2YXRlJTIwbHV4dXJ5JTIweWFjaHR8ZW58MHx8MHx8fDA%3D",
    ],
    duration: "8 hours",
    price: "$795",
    rating: 4.9,
    tags: ["Yacht", "Swimming", "Luxury"],
    isPopular: true,
    isHistorical: false,
    isRomantic: true,
    isAdventure: true,
    isCultural: false,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: true,
    isArtOrMusic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "luxury",
    meetingPoint: {
      address: "Marina Grande, 84011 Amalfi, Italy",
      coordinates: {
        latitude: 40.6336,
        longitude: 14.6024,
      },
      instructions:
        "Meet at the main pier of Marina Grande in Amalfi. Look for a crew member holding a sign with your name and 'Paragon Yacht Tours'. Please arrive 15 minutes before departure to complete boarding procedures.",
      contactNumber: "+39 081 2345678",
      contactEmail: "yachting@paragontrails.com",
    },
    faqs: [
      {
        question: "How many people can join the yacht experience?",
        answer:
          "Our luxury yacht accommodates up to 8 guests comfortably, making it perfect for families or small groups. The experience is fully private, so you won't be sharing the vessel with other travelers. For larger groups, we can arrange for a bigger boat at an additional cost.",
      },
      {
        question: "What should we bring for the yacht trip?",
        answer:
          "We recommend bringing swimwear, sunscreen, a hat, and a light jacket for the sea breeze. We provide towels, snorkeling gear, and a gourmet lunch with local wines. Feel free to bring your own drinks or snacks if you have specific preferences.",
      },
      {
        question: "Can we customize the itinerary?",
        answer:
          "Yes! We can tailor the yacht experience to your interests, whether you want more time swimming, visiting specific coastal towns, or enjoying a sunset cruise. Just let us know your preferences when booking.",
      },
      {
        question: "What if the weather is bad?",
        answer:
          "Safety is our top priority. If weather conditions are unsafe for sailing, we will reschedule your tour or offer a full refund. In case of light rain, we can still proceed with the trip as long as it is safe to do so.",
      },
      {
        question: "Is the yacht captain experienced with the Amalfi Coast?",
        answer:
          "Absolutely! All our captains have at least 15 years of experience navigating the Amalfi Coast waters and know every hidden cove and secret spot along the coastline. They are licensed professionals with safety certifications and extensive knowledge of local maritime conditions, ensuring both a safe and enriching experience.",
      },
    ],
    availableDates: [
      "2024-04-01",
      "2024-04-15",
      "2024-05-01",
      "2024-05-15",
      "2024-06-01",
      "2024-06-15",
      "2024-07-01",
      "2024-07-15",
      "2024-08-01",
      "2024-08-15",
      "2024-09-01",
      "2024-09-15",
      "2024-10-01",
      "2024-10-15",
    ],
    highlights: [
      "Private luxury yacht with personalized itinerary",
      "Swim in hidden coves and snorkel in crystal-clear waters",
      "Visit the famous Emerald Grotto and other sea caves",
      "Gourmet seafood lunch with local wine",
      "Relax on secluded beaches away from the crowds",
    ],
    inclusions: [
      "Private yacht for your group",
      "Professional captain and crew",
      "Snorkeling equipment",
      "Gourmet lunch and beverages",
      "Beach towels and sun loungers",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Gratuities",
      "Additional food and drinks not specified",
    ],
    itinerary: [
      "09:00 AM: Meet at the marina in Amalfi",
      "09:30 AM: Depart for a day of exploration along the coast",
      "10:00 AM: Stop at the Emerald Grotto for a guided tour",
      "11:00 AM: Swim and snorkel in a secluded cove",
      "12:30 PM: Enjoy a gourmet lunch on board",
      "02:00 PM: Visit another picturesque village or beach",
      "04:00 PM: Return to Amalfi",
    ],
    cancellationPolicy:
      "Full refund if canceled 7 days in advance. 50% refund if canceled 3-6 days in advance. No refund for cancellations less than 3 days before the scheduled activity.",
  },
  {
    title: "Ravello's Historic Villas & Gardens",
    description:
      "Explore the elegant hill town of Ravello with exclusive access to its historic villas, magnificent gardens, and hidden corners that inspired composers and writers throughout history, accompanied by classical music performances in breathtaking settings.",
    city: "Ravello",
    country: "Italy",
    region: "Campania",
    images: [
      "https://images.unsplash.com/photo-1725908704851-f354d169eca5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RXhwbG9yZSUyMHRoZSUyMGVsZWdhbnQlMjBoaWxsJTIwdG93biUyMG9mJTIwUmF2ZWxsb3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1745521717940-efaeb3cbc8d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEV4cGxvcmUlMjB0aGUlMjBlbGVnYW50JTIwaGlsbCUyMHRvd24lMjBvZiUyMFJhdmVsbG98ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1705087857981-57e171da5078?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEV4cGxvcmUlMjB0aGUlMjBlbGVnYW50JTIwaGlsbCUyMHRvd24lMjBvZiUyMFJhdmVsbG98ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1676240583597-34846aa8134c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEV4cGxvcmUlMjB0aGUlMjBlbGVnYW50JTIwaGlsbCUyMHRvd24lMjBvZiUyMFJhdmVsbG98ZW58MHx8MHx8fDA%3D",
    ],
    duration: "5 hours",
    price: "$110",
    rating: 4.8,
    tags: ["Villas", "Gardens", "History"],
    isPopular: true,
    isHistorical: true,
    isRomantic: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: true,
    isArtOrMusic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "historical",
    meetingPoint: {
      address: "Piazza Duomo, 84010 Ravello, Italy",
      coordinates: {
        latitude: 40.6491,
        longitude: 14.6128,
      },
      instructions:
        "Meet in Ravello's main square by the entrance to the Cathedral. Your guide will be holding a sign with 'Historic Villas Tour'. Please arrive 10 minutes before the tour starts.",
      contactNumber: "+39 081 5678901",
      contactEmail: "villas@paragontrails.com",
    },
    faqs: [
      {
        question: "What makes Ravello's villas so special?",
        answer:
          "Ravello's villas represent the pinnacle of medieval Italian architecture blended with Moorish influences. Villa Rufolo (1270 AD) and Villa Cimbrone offer some of the Mediterranean's most spectacular panoramic views and gardens. These villas have inspired countless artists, including composer Richard Wagner, whose visit to Villa Rufolo inspired the setting for his opera Parsifal. Our tour provides historical context and special access to areas not always open to the general public.",
      },
      {
        question: "Are the gardens accessible year-round?",
        answer:
          "Yes, both Villa Rufolo and Villa Cimbrone's gardens are open year-round, though some plants may be seasonal. We visit during the best times for blooming flowers and lush greenery. The gardens are designed to be enjoyed in all seasons, with different plants and views to appreciate throughout the year.",
      },
      {
        question: "Is this tour suitable for those with mobility issues?",
        answer:
          "While the villas and gardens are generally accessible, some areas have uneven paths and steps. We can provide assistance and adjust the itinerary to accommodate guests with limited mobility. Please inform us in advance so we can ensure a comfortable experience for everyone.",
      },
      {
        question: "Do we need to book in advance?",
        answer:
          "Yes, we recommend booking at least 48 hours in advance to secure your spot, especially during peak tourist seasons. This allows us to arrange exclusive access and ensure a personalized experience. Last-minute bookings may be accommodated based on availability.",
      },
      {
        question: "What is the cancellation policy for this tour?",
        answer:
          "Cancellations made at least 24 hours in advance will receive a full refund. Cancellations within 24 hours are non-refundable. We understand that plans can change, so please contact us as soon as possible if you need to cancel or reschedule.",
      },
    ],
    availableDates: [
      "2024-04-01",
      "2024-04-15",
      "2024-05-01",
      "2024-05-15",
      "2024-06-01",
      "2024-06-15",
      "2024-07-01",
      "2024-07-15",
      "2024-08-01",
      "2024-08-15",
      "2024-09-01",
      "2024-09-15",
      "2024-10-01",
      "2024-10-15",
    ],
    highlights: [
      "Exclusive access to Ravello's historic villas and gardens",
      "Guided tour with expert local historian",
      "Classical music performance in a villa garden",
      "Breathtaking views of the Amalfi Coast",
      "Small group size for a personalized experience",
    ],
    inclusions: [
      "Entrance fees to all villas and gardens",
      "Guided tour with historical insights",
      "Classical music performance",
      "Light refreshments",
      "Transportation between sites",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Gratuities",
      "Additional food and drinks",
    ],
    itinerary: [
      "09:00 AM: Meet guide in Ravello",
      "09:15 AM: Visit Villa Rufolo and its gardens",
      "10:30 AM: Explore Villa Cimbrone and its famous terrace",
      "12:00 PM: Enjoy a classical music performance",
      "01:00 PM: Tour conclusion and return transportation",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled activity.",
  },
  {
    title: "Amalfi Paper Making & Historic Center",
    description:
      "Discover the ancient art of paper making in Amalfi, once a major medieval maritime power, with a visit to a 13th-century paper mill still producing handcrafted paper, followed by exploration of the town's impressive Duomo and historic center.",
    city: "Amalfi",
    country: "Italy",
    region: "Campania",
    images: [
      "https://plus.unsplash.com/premium_photo-1744995489083-7e048ac2db1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RGlzY292ZXIlMjB0aGUlMjBhbmNpZW50JTIwYXJ0JTIwb2YlMjBwYXBlciUyMG1ha2luZyUyMGluJTIwQW1hbGZpfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1703705632001-5791cfd494ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fERpc2NvdmVyJTIwdGhlJTIwYW5jaWVudCUyMGFydCUyMG9mJTIwcGFwZXIlMjBtYWtpbmclMjBpbiUyMEFtYWxmaXxlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1744995489205-ed0daf126fa2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fERpc2NvdmVyJTIwdGhlJTIwYW5jaWVudCUyMGFydCUyMG9mJTIwcGFwZXIlMjBtYWtpbmclMjBpbiUyMEFtYWxmaXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1723934604207-6d17bec8ece0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fERpc2NvdmVyJTIwdGhlJTIwYW5jaWVudCUyMGFydCUyMG9mJTIwcGFwZXIlMjBtYWtpbmclMjBpbiUyMEFtYWxmaXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1748563223565-2ce5f28e243d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fERpc2NvdmVyJTIwdGhlJTIwYW5jaWVudCUyMGFydCUyMG9mJTIwcGFwZXIlMjBtYWtpbmclMjBpbiUyMEFtYWxmaXxlbnwwfHwwfHx8MA%3D%3D",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.7,
    tags: ["Crafts", "History", "Local Traditions"],
    isPopular: true,
    isHistorical: true,
    isRomantic: false,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    meetingPoint: {
      address: "Piazza Duomo, 84011 Amalfi, Italy",
      coordinates: {
        latitude: 40.6344,
        longitude: 14.6026,
      },
      instructions:
        "Meet your guide at the fountain in front of the Amalfi Cathedral (Duomo di Amalfi). Your guide will be holding a sign with 'Paper Making Tour' written on it. Please arrive 10 minutes before departure time.",
      contactNumber: "+39 081 3456789",
      contactEmail: "tours@paragontrails.com",
    },
    faqs: [
      {
        question: "Will we make our own paper?",
        answer:
          "Yes! This interactive experience includes a hands-on workshop where you'll create your own sheet of paper using traditional methods. You'll learn the entire process from pulp preparation to pressing and drying. Your handmade paper creation makes a unique souvenir, and you can have it custom-stamped with the historic mark of Amalfi.",
      },
      {
        question: "What else do we see in Amalfi?",
        answer:
          "After the paper-making workshop, we explore Amalfi's historic center, including the stunning Cathedral of St. Andrew (Duomo di Amalfi) with its beautiful Arab-Norman architecture. You'll also have time to wander the charming streets, visit local artisan shops, and enjoy a gelato or coffee at a traditional café.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and suitable for children aged 6 and up. The paper-making workshop is engaging and educational, making it a fun experience for kids. We can adjust the pace to accommodate younger participants, ensuring everyone has an enjoyable time.",
      },
      {
        question: "How long does the paper-making process take?",
        answer:
          "The entire paper-making process takes about 2 hours, including drying time. You'll be involved in every step, from preparing the pulp to pressing and drying the paper. After the workshop, you can explore Amalfi while your paper dries, and then return to collect your custom-made sheet of paper.",
      },
      {
        question: "What is the cancellation policy for this tour?",
        answer:
          "Cancellations made at least 24 hours in advance will receive a full refund. Cancellations within 24 hours are non-refundable. We understand that plans can change, so please contact us as soon as possible if you need to cancel or reschedule.",
      },
    ],
    availableDates: [
      "2024-04-05",
      "2024-04-19",
      "2024-05-03",
      "2024-05-17",
      "2024-05-31",
      "2024-06-14",
      "2024-06-28",
      "2024-09-06",
      "2024-09-20",
      "2024-10-04",
      "2024-10-18",
    ],
    highlights: [
      "Hands-on experience at a traditional paper mill",
      "Create your own sheet of handmade paper",
      "Explore Amalfi's historic center and Duomo",
      "Learn about Amalfi's maritime history",
      "Small group size for personalized attention",
    ],
    inclusions: [
      "Guided paper-making workshop",
      "All materials for paper making",
      "Entrance fee to the paper museum",
      "Guided tour of Amalfi's historic center",
      "Gelato or coffee at a local café",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Gratuities",
      "Additional food and drinks",
    ],
    itinerary: [
      "09:00 AM: Meet guide in Amalfi",
      "09:15 AM: Visit the paper mill and museum",
      "10:00 AM: Hands-on paper-making workshop",
      "11:30 AM: Guided tour of Amalfi's historic center",
      "12:30 PM: Visit the Cathedral of St. Andrew",
      "01:00 PM: Tour conclusion and free time in Amalfi",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled activity.",
  },
  {
    title: "Hidden Villages & Local Life",
    description:
      "Venture beyond the tourist trail to the Amalfi Coast's hidden villages perched high in the mountains, meeting local families, visiting small-scale producers of cheese and wine, and experiencing authentic Italian daily life away from the crowds.",
    city: "Amalfi",
    country: "Italy",
    region: "Campania",
    images: [
      "https://images.unsplash.com/photo-1711701024388-0bb8b6046c70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QW1hbGZpJTIwQ29hc3QncyUyMGhpZGRlbiUyMHZpbGxhZ2VzJTIwcGVyY2hlZCUyMGhpZ2glMjBpbiUyMHRoZSUyMG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1711701023364-4d29570d2814?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEFtYWxmaSUyMENvYXN0J3MlMjBoaWRkZW4lMjB2aWxsYWdlcyUyMHBlcmNoZWQlMjBoaWdoJTIwaW4lMjB0aGUlMjBtb3VudGFpbnN8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1695735925959-c2faf5ed68aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QW1hbGZpJTIwQ29hc3QncyUyMGhpZGRlbiUyMHZpbGxhZ2VzJTIwcGVyY2hlZCUyMGhpZ2glMjBpbiUyMHRoZSUyMG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1724003751441-f95f83cdbdbd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEFtYWxmaSUyMENvYXN0J3MlMjBoaWRkZW4lMjB2aWxsYWdlcyUyMHBlcmNoZWQlMjBoaWdoJTIwaW4lMjB0aGUlMjBtb3VudGFpbnN8ZW58MHx8MHx8fDA%3D",
    ],
    duration: "7 hours",
    price: "$125",
    rating: 4.8,
    tags: ["Off the Beaten Path", "Local Culture", "Food"],
    isPopular: true,
    isHistorical: false,
    isRomantic: false,
    isAdventure: true,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "off-the-beaten-path",
    meetingPoint: {
      address: "Piazza Flavio Gioia, 84011 Amalfi, Italy",
      coordinates: {
        latitude: 40.6342,
        longitude: 14.6028,
      },
      instructions:
        "Meet your guide at the square in front of the Amalfi Coast Travel office. Look for a guide with a green 'Local Life Tour' sign. Please arrive 10 minutes before the departure time.",
      contactNumber: "+39 081 2345678",
      contactEmail: "localtours@paragontrails.com",
    },
    faqs: [
      {
        question: "Which villages do we visit?",
        answer:
          "We typically visit combinations of Scala, Tramonti, and Furore - authentic mountain communities where tourism is minimal and traditions remain strong. Our exact route sometimes changes based on seasonal activities or local festivals that might be happening. These villages offer spectacular views of the coast from a completely different perspective than the typical tourist spots.",
      },
      {
        question: "What kind of local products do we sample?",
        answer:
          "During this tour, you'll have the opportunity to taste locally produced cheeses, wines, and cured meats. We visit small family-run farms and vineyards where you can see traditional production methods in action. Depending on the season, we may also sample seasonal fruits and vegetables, homemade jams, and other artisanal products unique to the region.",
      },
      {
        question: "Are the village visits suitable for children?",
        answer:
          "Yes, this tour is family-friendly and offers a great opportunity for children to learn about rural Italian life and enjoy nature. We can adjust the itinerary to accommodate younger visitors, and all tastings are child-friendly. Please inform us in advance if you have specific concerns or needs.",
      },
      {
        question: "How do we get to the villages?",
        answer:
          "Transportation is provided from Amalfi to the villages in a comfortable, air-conditioned vehicle. The drive itself is a highlight, offering stunning views of the coastline and mountains. In the villages, the tour involves walking at a leisurely pace to explore the sights and visit local producers.",
      },
      {
        question: "What is the cancellation policy for this tour?",
        answer:
          "Cancellations made at least 24 hours in advance will receive a full refund. Cancellations within 24 hours are non-refundable. We understand that plans can change, so please contact us as soon as possible if you need to cancel or reschedule.",
      },
    ],
    availableDates: [
      "2024-04-12",
      "2024-04-26",
      "2024-05-10",
      "2024-05-24",
      "2024-06-07",
      "2024-06-21",
      "2024-07-12",
      "2024-07-26",
      "2024-09-05",
      "2024-09-19",
      "2024-10-10",
    ],
    highlights: [
      "Visit authentic Amalfi Coast villages rarely seen by tourists",
      "Meet local artisans and producers in their homes",
      "Taste homemade limoncello, cheese, and local wines",
      "Learn about traditional farming and production methods",
      "Enjoy a scenic hike with breathtaking views",
    ],
    inclusions: [
      "Guided tour of hidden villages",
      "Tastings of local products",
      "Visit to a family-run farm and vineyard",
      "Traditional Italian lunch with locals",
      "Transportation from/to Amalfi",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Gratuities",
      "Additional food and drinks",
    ],
    itinerary: [
      "08:30 AM: Depart from Amalfi",
      "09:00 AM: Visit the village of Scala and its historic sites",
      "10:30 AM: Tour a local cheese producer in Tramonti",
      "12:00 PM: Wine tasting at a family-run vineyard",
      "01:00 PM: Enjoy a traditional lunch with a local family",
      "02:30 PM: Explore the village of Furore and its fjord",
      "04:00 PM: Return to Amalfi",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled activity.",
  },
  {
    title: "Sunset Photography Cruise",
    description:
      "Capture the magical light of the Amalfi Coast during the golden hour with a photography-focused sunset cruise, guided by a professional photographer who will help you master techniques for shooting coastal landscapes, architecture, and the famous Mediterranean light.",
    city: "Amalfi",
    country: "Italy",
    region: "Campania",
    images: [
      "https://images.unsplash.com/photo-1700413739082-ced1f43acf09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2FwdHVyZSUyMHRoZSUyMG1hZ2ljYWwlMjBsaWdodCUyMG9mJTIwdGhlJTIwQW1hbGZpJTIwQ29hc3QlMjBkdXJpbmclMjB0aGUlMjBnb2xkZW4lMjBob3VyfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1529914266944-527632c9ea58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2FwdHVyZSUyMHRoZSUyMG1hZ2ljYWwlMjBsaWdodCUyMG9mJTIwdGhlJTIwQW1hbGZpJTIwQ29hc3QlMjBkdXJpbmclMjB0aGUlMjBnb2xkZW4lMjBob3VyfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1667852556952-21e0634330a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2FwdHVyZSUyMHRoZSUyMG1hZ2ljYWwlMjBsaWdodCUyMG9mJTIwdGhlJTIwQW1hbGZpJTIwQ29hc3QlMjBkdXJpbmclMjB0aGUlMjBnb2xkZW4lMjBob3VyfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1729091331509-15f560616ea9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENhcHR1cmUlMjB0aGUlMjBtYWdpY2FsJTIwbGlnaHQlMjBvZiUyMHRoZSUyMEFtYWxmaSUyMENvYXN0JTIwZHVyaW5nJTIwdGhlJTIwZ29sZGVuJTIwaG91cnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1628438080069-521ac6ea0eb4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENhcHR1cmUlMjB0aGUlMjBtYWdpY2FsJTIwbGlnaHQlMjBvZiUyMHRoZSUyMEFtYWxmaSUyMENvYXN0JTIwZHVyaW5nJTIwdGhlJTIwZ29sZGVuJTIwaG91cnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1567878782477-e71209af29b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fENhcHR1cmUlMjB0aGUlMjBtYWdpY2FsJTIwbGlnaHQlMjBvZiUyMHRoZSUyMEFtYWxmaSUyMENvYXN0JTIwZHVyaW5nJTIwdGhlJTIwZ29sZGVuJTIwaG91cnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1581416271120-61cbe0c2cafb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fENhcHR1cmUlMjB0aGUlMjBtYWdpY2FsJTIwbGlnaHQlMjBvZiUyMHRoZSUyMEFtYWxmaSUyMENvYXN0JTIwZHVyaW5nJTIwdGhlJTIwZ29sZGVuJTIwaG91cnxlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1716236653727-11d7f6a26344?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fENhcHR1cmUlMjB0aGUlMjBtYWdpY2FsJTIwbGlnaHQlMjBvZiUyMHRoZSUyMEFtYWxmaSUyMENvYXN0JTIwZHVyaW5nJTIwdGhlJTIwZ29sZGVuJTIwaG91cnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1596399677774-2bcec16fd7e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fENhcHR1cmUlMjB0aGUlMjBtYWdpY2FsJTIwbGlnaHQlMjBvZiUyMHRoZSUyMEFtYWxmaSUyMENvYXN0JTIwZHVyaW5nJTIwdGhlJTIwZ29sZGVuJTIwaG91cnxlbnwwfHwwfHx8MA%3D%3D",
    ],
    duration: "3 hours",
    price: "$135",
    rating: 4.8,
    tags: ["Photography", "Sunset", "Boat Tour"],
    isPopular: true,
    isHistorical: false,
    isRomantic: true,
    isAdventure: false,
    isCultural: false,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "romantic",
    meetingPoint: {
      address: "Via Marina, 84011 Amalfi, Italy",
      coordinates: {
        latitude: 40.6342,
        longitude: 14.6026,
      },
      instructions:
        "Meet at the dock located at Via Marina, near the Tourist Office. Look for a guide with a camera and a sign saying 'Sunset Photography Cruise'. Please arrive 15 minutes early to board the boat.",
      contactNumber: "+39 081 2345678",
      contactEmail: "phototours@paragontrails.com",
    },
    faqs: [
      {
        question: "Is specialized camera equipment needed?",
        answer:
          "This workshop accommodates photographers of all levels using any type of camera, from smartphones to professional DSLRs. Our instructor provides tips specific to your equipment. For DSLR users, we recommend bringing a versatile zoom lens and a tripod if possible, though we do have a limited number of tripods available to borrow during the cruise.",
      },
      {
        question: "What if the weather is cloudy?",
        answer:
          "While we hope for clear skies, the Amalfi Coast can be stunning even under overcast conditions. If the weather is unsuitable for photography, we will reschedule your cruise or offer a full refund. Cloudy sunsets can create dramatic lighting and reflections on the water, so we often find beauty in unexpected weather.",
      },
      {
        question: "Do I need prior photography experience?",
        answer:
          "No prior experience is necessary! This tour is designed for all skill levels, from beginners to advanced photographers. Our guide will provide personalized instruction based on your current knowledge and help you improve your skills during the cruise.",
      },
      {
        question:
          "Will there be an opportunity to purchase photos taken during the tour?",
        answer:
          "Yes, our photographer will capture high-quality images during the cruise, and you will have the option to purchase these photos after the tour. You'll receive a selection of edited digital images that you can download and print as you wish.",
      },
      {
        question: "What is the cancellation policy for this tour?",
        answer:
          "Cancellations made at least 24 hours in advance will receive a full refund. Cancellations within 24 hours are non-refundable. We understand that plans can change, so please contact us as soon as possible if you need to cancel or reschedule.",
      },
    ],
    availableDates: [
      "2024-04-20",
      "2024-05-04",
      "2024-05-18",
      "2024-06-01",
      "2024-06-15",
      "2024-06-29",
      "2024-09-07",
      "2024-09-21",
      "2024-10-05",
      "2024-10-19",
    ],
    highlights: [
      "Sunset cruise along the stunning Amalfi Coast",
      "Photography tips and guidance from a pro",
      "Capture iconic sites like Positano and the Faraglioni",
      "Small group for personalized instruction",
      "Snacks and drinks included on board",
    ],
    inclusions: [
      "3-hour private boat cruise",
      "Professional photographer as your guide",
      "Snacks and beverages on board",
      "Use of tripod and camera equipment (if needed)",
      "Post-cruise photo review and editing tips",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Gratuities",
      "Additional food and drinks",
    ],
    itinerary: [
      "05:30 PM: Meet at the marina in Amalfi",
      "06:00 PM: Depart for a sunset cruise along the coast",
      "06:30 PM: Photography session at the best sunset spots",
      "08:00 PM: Return to Amalfi",
    ],
    cancellationPolicy:
      "Full refund if canceled 7 days in advance. 50% refund if canceled 3-6 days in advance. No refund for cancellations less than 3 days before the scheduled activity.",
  },
  {
    title: "Ceramics of Vietri & Artisan Workshops",
    description:
      "Discover the colorful ceramic traditions that have made the Amalfi Coast famous for centuries. Visit historic workshops in Vietri sul Mare, meet master artisans, learn traditional hand-painting techniques, and create your own ceramic piece to take home.",
    city: "Vietri sul Mare",
    country: "Italy",
    region: "Campania",
    images: [
      "https://plus.unsplash.com/premium_photo-1679811675652-2302bf23c9f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGlzY292ZXIlMjB0aGUlMjBjb2xvcmZ1bCUyMGNlcmFtaWMlMjB0cmFkaXRpb25zJTIwdGhhdCUyMGhhdmUlMjBtYWRlJTIwdGhlJTIwQW1hbGZpJTIwQ29hc3QlMjBmYW1vdXMlMjBmb3IlMjBjZW50dXJpZXN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1649670904906-6015930738c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RGlzY292ZXIlMjB0aGUlMjBjb2xvcmZ1bCUyMGNlcmFtaWMlMjB0cmFkaXRpb25zJTIwdGhhdCUyMGhhdmUlMjBtYWRlJTIwdGhlJTIwQW1hbGZpJTIwQ29hc3QlMjBmYW1vdXMlMjBmb3IlMjBjZW50dXJpZXN8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1679811672144-2aa065294403?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RGlzY292ZXIlMjB0aGUlMjBjb2xvcmZ1bCUyMGNlcmFtaWMlMjB0cmFkaXRpb25zJTIwdGhhdCUyMGhhdmUlMjBtYWRlJTIwdGhlJTIwQW1hbGZpJTIwQ29hc3QlMjBmYW1vdXMlMjBmb3IlMjBjZW50dXJpZXN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1629140877328-77e5a10019e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fERpc2NvdmVyJTIwdGhlJTIwY29sb3JmdWwlMjBjZXJhbWljJTIwdHJhZGl0aW9ucyUyMHRoYXQlMjBoYXZlJTIwbWFkZSUyMHRoZSUyMEFtYWxmaSUyMENvYXN0JTIwZmFtb3VzJTIwZm9yJTIwY2VudHVyaWVzfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1679811667938-653de2474ca1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fERpc2NvdmVyJTIwdGhlJTIwY29sb3JmdWwlMjBjZXJhbWljJTIwdHJhZGl0aW9ucyUyMHRoYXQlMjBoYXZlJTIwbWFkZSUyMHRoZSUyMEFtYWxmaSUyMENvYXN0JTIwZmFtb3VzJTIwZm9yJTIwY2VudHVyaWVzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1706794831005-e0cbae755fae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fERpc2NvdmVyJTIwdGhlJTIwY29sb3JmdWwlMjBjZXJhbWljJTIwdHJhZGl0aW9ucyUyMHRoYXQlMjBoYXZlJTIwbWFkZSUyMHRoZSUyMEFtYWxmaSUyMENvYXN0JTIwZmFtb3VzJTIwZm9yJTIwY2VudHVyaWVzfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1679852311266-2f78098f67a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fERpc2NvdmVyJTIwdGhlJTIwY29sb3JmdWwlMjBjZXJhbWljJTIwdHJhZGl0aW9ucyUyMHRoYXQlMjBoYXZlJTIwbWFkZSUyMHRoZSUyMEFtYWxmaSUyMENvYXN0JTIwZmFtb3VzJTIwZm9yJTIwY2VudHVyaWVzfGVufDB8fDB8fHww",
    ],
    duration: "5 hours",
    price: "$120",
    rating: 4.7,
    tags: ["Crafts", "Artisanal", "Creative"],
    isPopular: true,
    isHistorical: true,
    isRomantic: false,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    meetingPoint: {
      address: "Piazza Vittorio Emanuele, 84019 Vietri sul Mare, Italy",
      coordinates: {
        latitude: 40.6281,
        longitude: 14.7359,
      },
      instructions:
        "Meet at the main square of Vietri sul Mare, in front of the Church of San Giovanni Battista. Your guide will be holding a sign with 'Ceramics Tour' written on it. Please arrive 10 minutes before the tour starts.",
      contactNumber: "+39 089 763456",
      contactEmail: "ceramics@paragontrails.com",
    },
    faqs: [
      {
        question: "Do I need artistic skills to participate?",
        answer:
          "Not at all! The workshop portion is designed for all skill levels, including complete beginners. Our master ceramicists provide step-by-step guidance and templates for those who prefer more structure. Everyone creates something beautiful regardless of artistic experience, and many guests are surprised by what they can accomplish with expert instruction.",
      },
      {
        question:
          "Will my ceramic creation be ready to take home the same day?",
        answer:
          "Unfortunately, ceramics require firing in a kiln after painting, which takes at least 24-48 hours. We offer secure worldwide shipping of your finished piece directly to your home address (shipping fees apply based on destination). If you're staying in the area for several days, we can arrange local pickup once your piece is ready.",
      },
      {
        question: "Can children participate in this workshop?",
        answer:
          "Yes, this tour is very family-friendly! Children especially enjoy the hands-on creative aspects. We adapt the workshop for younger participants with age-appropriate projects and guidance. The minimum recommended age is 5 years old, as younger children may find it difficult to focus for the duration of the workshop.",
      },
      {
        question: "Is there an opportunity to purchase authentic ceramics?",
        answer:
          "Absolutely! The tour includes visits to several workshops and a curated showroom featuring work from top local artisans. You'll see everything from traditional designs to contemporary interpretations, available in all price ranges. All purchases can be shipped worldwide, and our guide can help negotiate fair prices and authenticate genuine Vietri ceramics.",
      },
      {
        question: "What is the cancellation policy for this tour?",
        answer:
          "Cancellations made at least 24 hours in advance will receive a full refund. Cancellations within 24 hours are non-refundable. We understand that plans can change, so please contact us as soon as possible if you need to cancel or reschedule.",
      },
    ],
    availableDates: [
      "2024-04-08",
      "2024-04-22",
      "2024-05-06",
      "2024-05-20",
      "2024-06-03",
      "2024-06-17",
      "2024-07-08",
      "2024-07-22",
      "2024-09-09",
      "2024-09-23",
      "2024-10-14",
    ],
    highlights: [
      "Visit historic ceramic workshops in Vietri sul Mare",
      "Learn from master ceramicists in hands-on sessions",
      "Create your own custom-painted ceramic piece",
      "Explore the techniques behind Vietri ceramics",
      "Small group size for personalized instruction",
    ],
    inclusions: [
      "Guided tour of ceramic workshops",
      "All materials and tools for ceramic painting",
      "Firing and shipping of your ceramic piece",
      "Visit to a local artisan shop",
      "Light refreshments",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Gratuities",
      "Additional food and drinks",
    ],
    itinerary: [
      "09:00 AM: Meet guide in Vietri sul Mare",
      "09:15 AM: Visit the first ceramic workshop",
      "10:30 AM: Hands-on ceramic painting session",
      "12:00 PM: Tour of Vietri's historic center",
      "01:00 PM: Lunch at a local trattoria (own expense)",
      "02:30 PM: Visit to a second ceramic workshop",
      "04:00 PM: Return to Amalfi",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled activity.",
  },
  {
    title: "Pompeii & Herculaneum Archaeological Expedition",
    description:
      "Explore the remarkably preserved ancient Roman cities of Pompeii and Herculaneum with an archaeology expert. Walk through streets, homes, and public buildings frozen in time by Mount Vesuvius's eruption in 79 AD, gaining insights into daily Roman life.",
    city: "Amalfi",
    country: "Italy",
    region: "Campania",
    images: [
      "https://plus.unsplash.com/premium_photo-1693256458375-f7822de0cdbb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RXhwbG9yZSUyMHRoZSUyMHJlbWFya2FibHklMjBwcmVzZXJ2ZWQlMjBhbmNpZW50JTIwUm9tYW4lMjBjaXRpZXMlMjBvZiUyMFBvbXBlaWklMjBhbmQlMjBIZXJjdWxhbmV1bSUyMHdpdGglMjBhbiUyMGFyY2hhZW9sb2d5JTIwZXhwZXJ0fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1656073257815-f11379117fb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RXhwbG9yZSUyMHRoZSUyMHJlbWFya2FibHklMjBwcmVzZXJ2ZWQlMjBhbmNpZW50JTIwUm9tYW4lMjBjaXRpZXMlMjBvZiUyMFBvbXBlaWklMjBhbmQlMjBIZXJjdWxhbmV1bSUyMHdpdGglMjBhbiUyMGFyY2hhZW9sb2d5JTIwZXhwZXJ0fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1690069190509-c1364365eacf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RXhwbG9yZSUyMHRoZSUyMHJlbWFya2FibHklMjBwcmVzZXJ2ZWQlMjBhbmNpZW50JTIwUm9tYW4lMjBjaXRpZXMlMjBvZiUyMFBvbXBlaWklMjBhbmQlMjBIZXJjdWxhbmV1bSUyMHdpdGglMjBhbiUyMGFyY2hhZW9sb2d5JTIwZXhwZXJ0fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1531220238712-18cea1d53e59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEV4cGxvcmUlMjB0aGUlMjByZW1hcmthYmx5JTIwcHJlc2VydmVkJTIwYW5jaWVudCUyMFJvbWFuJTIwY2l0aWVzJTIwb2YlMjBQb21wZWlpJTIwYW5kJTIwSGVyY3VsYW5ldW0lMjB3aXRoJTIwYW4lMjBhcmNoYWVvbG9neSUyMGV4cGVydHxlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1694475113452-a9bd144946eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEV4cGxvcmUlMjB0aGUlMjByZW1hcmthYmx5JTIwcHJlc2VydmVkJTIwYW5jaWVudCUyMFJvbWFuJTIwY2l0aWVzJTIwb2YlMjBQb21wZWlpJTIwYW5kJTIwSGVyY3VsYW5ldW0lMjB3aXRoJTIwYW4lMjBhcmNoYWVvbG9neSUyMGV4cGVydHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1648408687121-a66aad2a5b66?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEV4cGxvcmUlMjB0aGUlMjByZW1hcmthYmx5JTIwcHJlc2VydmVkJTIwYW5jaWVudCUyMFJvbWFuJTIwY2l0aWVzJTIwb2YlMjBQb21wZWlpJTIwYW5kJTIwSGVyY3VsYW5ldW0lMjB3aXRoJTIwYW4lMjBhcmNoYWVvbG9neSUyMGV4cGVydHxlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1694475128245-999b1ae8a44e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fEV4cGxvcmUlMjB0aGUlMjByZW1hcmthYmx5JTIwcHJlc2VydmVkJTIwYW5jaWVudCUyMFJvbWFuJTIwY2l0aWVzJTIwb2YlMjBQb21wZWlpJTIwYW5kJTIwSGVyY3VsYW5ldW0lMjB3aXRoJTIwYW4lMjBhcmNoYWVvbG9neSUyMGV4cGVydHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1688133222283-67c0644d913e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fEV4cGxvcmUlMjB0aGUlMjByZW1hcmthYmx5JTIwcHJlc2VydmVkJTIwYW5jaWVudCUyMFJvbWFuJTIwY2l0aWVzJTIwb2YlMjBQb21wZWlpJTIwYW5kJTIwSGVyY3VsYW5ldW0lMjB3aXRoJTIwYW4lMjBhcmNoYWVvbG9neSUyMGV4cGVydHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1679031709303-500b48a468bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fEV4cGxvcmUlMjB0aGUlMjByZW1hcmthYmx5JTIwcHJlc2VydmVkJTIwYW5jaWVudCUyMFJvbWFuJTIwY2l0aWVzJTIwb2YlMjBQb21wZWlpJTIwYW5kJTIwSGVyY3VsYW5ldW0lMjB3aXRoJTIwYW4lMjBhcmNoYWVvbG9neSUyMGV4cGVydHxlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1694475536270-3d8f3860923b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fEV4cGxvcmUlMjB0aGUlMjByZW1hcmthYmx5JTIwcHJlc2VydmVkJTIwYW5jaWVudCUyMFJvbWFuJTIwY2l0aWVzJTIwb2YlMjBQb21wZWlpJTIwYW5kJTIwSGVyY3VsYW5ldW0lMjB3aXRoJTIwYW4lMjBhcmNoYWVvbG9neSUyMGV4cGVydHxlbnwwfHwwfHx8MA%3D%3D",
    ],
    duration: "8 hours",
    price: "$175",
    rating: 4.9,
    tags: ["Archaeology", "Roman", "Historical"],
    isPopular: true,
    isHistorical: true,
    isRomantic: false,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "historical",
    meetingPoint: {
      address: "Piazza Flavio Gioia, 84011 Amalfi, Italy",
      coordinates: {
        latitude: 40.6342,
        longitude: 14.6026,
      },
      instructions:
        "Meet your guide at the square in front of the Amalfi Coast Travel office. Look for a guide with a blue 'Archaeological Tour' sign. Please arrive 10 minutes before the departure time.",
      contactNumber: "+39 081 2345678",
      contactEmail: "archaeology@paragontrails.com",
    },
    faqs: [
      {
        question: "How much walking is involved at the archaeological sites?",
        answer:
          "This tour involves approximately 5-6 hours of walking on uneven ancient streets, with limited shade and seating. We cover about 5 km at Pompeii and 2 km at Herculaneum, with a lunch break between sites. While challenging for those with mobility issues, our guide paces the tour appropriately and focuses on the most significant highlights while avoiding unnecessary exertion.",
      },
      {
        question: "What's the difference between Pompeii and Herculaneum?",
        answer:
          "Pompeii was a larger commercial city preserved by ash and pumice, offering expansive views of urban planning with its forum, theaters, and extensive street grid. Herculaneum was a smaller, wealthier seaside resort buried under pyroclastic flows that actually better preserved organic materials like wooden furniture, food, and textiles. Visiting both provides a more complete picture of Roman life, seeing both the grand public spaces and the intimate details of daily living.",
      },
      {
        question: "Is this tour appropriate for children?",
        answer:
          "Yes, the tour is suitable for children interested in history and archaeology. Our guides are skilled at engaging younger visitors with stories of daily Roman life, gladiator contests, and the dramatic eruption. However, parents should note that some exhibits display plaster casts of disaster victims and certain frescoes depict adult themes. Our guide can discreetly navigate around sensitive content for family groups.",
      },
      {
        question:
          "Does this tour include transportation from the Amalfi Coast?",
        answer:
          "Yes, we provide round-trip transportation from your Amalfi Coast accommodation in a comfortable air-conditioned vehicle. The journey takes approximately 1-1.5 hours each way, depending on your specific location along the coast. The scenic drive along the coastline and through the Lattari Mountains adds to the experience.",
      },
      {
        question: "What is the cancellation policy for this tour?",
        answer:
          "Cancellations made at least 24 hours in advance will receive a full refund. Cancellations within 24 hours are non-refundable. We understand that plans can change, so please contact us as soon as possible if you need to cancel or reschedule.",
      },
    ],
    availableDates: [
      "2024-04-03",
      "2024-04-17",
      "2024-05-01",
      "2024-05-15",
      "2024-05-29",
      "2024-06-12",
      "2024-06-26",
      "2024-09-11",
      "2024-09-25",
      "2024-10-09",
    ],
    highlights: [
      "Guided tour of the ancient cities of Pompeii and Herculaneum",
      "See the famous plaster casts of Pompeii victims",
      "Explore well-preserved frescoes and mosaics",
      "Learn about ancient Roman daily life and culture",
      "Small group for personalized experience",
    ],
    inclusions: [
      "Guided tour of Pompeii and Herculaneum",
      "Entrance fees to both archaeological sites",
      "Transportation from/to Amalfi",
      "Lunch at a local restaurant",
      "Small group size for personalized attention",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Gratuities",
      "Additional food and drinks",
    ],
    itinerary: [
      "08:00 AM: Depart from Amalfi",
      "09:30 AM: Arrive at Pompeii, guided tour",
      "12:00 PM: Lunch at a local restaurant",
      "01:00 PM: Transfer to Herculaneum, guided tour",
      "03:30 PM: Return to Amalfi",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled activity.",
  },
  {
    title: "Amalfi Coast Wine Tour & Vineyard Experience",
    description:
      "Discover the unique viticulture of the Amalfi Coast's vertical vineyards with visits to family-run wineries, tastings of local varietals like Falanghina and Costa d'Amalfi DOC wines, and a vineyard lunch featuring paired regional cuisine.",
    city: "Amalfi",
    country: "Italy",
    region: "Campania",
    images: [
      "https://plus.unsplash.com/premium_photo-1694475516929-a6cea77cafbd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGlzY292ZXIlMjB0aGUlMjB1bmlxdWUlMjB2aXRpY3VsdHVyZSUyMG9mJTIwdGhlJTIwQW1hbGZpJTIwQ29hc3QncyUyMHZlcnRpY2FsJTIwdmluZXlhcmRzfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1663127459691-b49eae9c9048?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fERpc2NvdmVyJTIwdGhlJTIwdW5pcXVlJTIwdml0aWN1bHR1cmUlMjBvZiUyMHRoZSUyMEFtYWxmaSUyMENvYXN0J3MlMjB2ZXJ0aWNhbCUyMHZpbmV5YXJkc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1565788185831-1756634385fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fERpc2NvdmVyJTIwdGhlJTIwdW5pcXVlJTIwdml0aWN1bHR1cmUlMjBvZiUyMHRoZSUyMEFtYWxmaSUyMENvYXN0JTIwZHVyaW5nJTIwdGhlJTIwZ29sZGVuJTIwaG91cnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1710667407646-6002a9fb1aa0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fERpc2NvdmVyJTIwdGhlJTIwdW5pcXVlJTIwdml0aWN1bHR1cmUlMjBvZiUyMHRoZSUyMEFtYWxmaSUyMENvYXN0J3MlMjB2ZXJ0aWNhbCUyMHZpbmV5YXJkc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1579385069688-38fed978de43?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fERpc2NvdmVyJTIwdGhlJTIwdW5pcXVlJTIwdml0aWN1bHR1cmUlMjBvZiUyMHRoZSUyMEFtYWxmaSUyMENvYXN0JTIwZHVyaW5nJTIwdGhlJTIwZ29sZGVuJTIwaG91cnxlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1667051580508-d6ff0bdde642?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fERpc2NvdmVyJTIwdGhlJTIwdW5pcXVlJTIwdml0aWN1bHR1cmUlMjBvZiUyMHRoZSUyMEFtYWxmaSUyMENvYXN0J3MlMjB2ZXJ0aWNhbCUyMHZpbmV5YXJkc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1741646557128-ce451cc48f59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fERpc2NvdmVyJTIwdGhlJTIwdW5pcXVlJTIwdml0aWN1bHR1cmUlMjBvZiUyMHRoZSUyMEFtYWxmaSUyMENvYXN0J3MlMjB2ZXJ0aWNhbCUyMHZpbmV5YXJkc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1689877572686-0274eeffccc3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fERpc2NvdmVyJTIwdGhlJTIwdW5pcXVlJTIwdml0aWN1bHR1cmUlMjBvZiUyMHRoZSUyMEFtYWxmaSUyMENvYXN0J3MlMjB2ZXJ0aWNhbCUyMHZpbmV5YXJkc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1675970835725-a339c261d5c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fERpc2NvdmVyJTIwdGhlJTIwdW5pcXVlJTIwdml0aWN1bHR1cmUlMjBvZiUyMHRoZSUyMEFtYWxmaSUyMENvYXN0J3MlMjB2ZXJ0aWNhbCUyMHZpbmV5YXJkc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1676450472092-955311a1cc02?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fERpc2NvdmVyJTIwdGhlJTIwdW5pcXVlJTIwdml0aWN1bHR1cmUlMjBvZiUyMHRoZSUyMEFtYWxmaSUyMENvYXN0J3MlMjB2ZXJ0aWNhbCUyMHZpbmV5YXJkc3xlbnwwfHwwfHx8MA%3D%3D",
    ],
    duration: "6 hours",
    price: "$155",
    rating: 4.8,
    tags: ["Wine", "Vineyards", "Tasting"],
    isPopular: true,
    isHistorical: false,
    isRomantic: true,
    isAdventure: true,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    meetingPoint: {
      address: "Piazza Flavio Gioia, 84011 Amalfi, Italy",
      coordinates: {
        latitude: 40.6342,
        longitude: 14.6026,
      },
      instructions:
        "Meet your guide at the square in front of the Amalfi Coast Travel office. Look for a guide with a red 'Wine Tour' sign. Please arrive 10 minutes before the departure time.",
      contactNumber: "+39 081 2345678",
      contactEmail: "winetours@paragontrails.com",
    },
    faqs: [
      {
        question: "What makes Amalfi Coast wines unique?",
        answer:
          "The Amalfi Coast's extreme vertical terrain creates a challenging environment for viticulture, with vineyards often planted on terraced cliffs above the sea. This unique geography, combined with indigenous grape varieties and ancient cultivation techniques, produces wines with distinctive minerality and saline characteristics not found elsewhere. Many vineyards are only accessible by foot and require all harvesting to be done by hand, preserving traditional methods that have remained unchanged for centuries.",
      },
      {
        question: "How many wineries do we visit?",
        answer:
          "The tour includes visits to two carefully selected small-production wineries and a tasting session featuring wines from a third producer. This allows you to experience different approaches to winemaking while maintaining a relaxed pace. Each winery offers something unique—one might focus on indigenous varieties, another on innovative techniques, providing a comprehensive overview of the region's viticulture.",
      },
      {
        question: "How many wines will we taste?",
        answer:
          "You'll sample 8-10 wines throughout the day, including whites, rosés, and reds representative of the Costa d'Amalfi DOC appellation. Each wine is presented by either the winemaker or our sommelier guide with detailed explanations of its production, characteristics, and food pairing suggestions. Tastings are generous enough to appreciate each wine fully without overwhelming your palate.",
      },
      {
        question: "Is transportation included?",
        answer:
          "Yes, we provide door-to-door service in a comfortable air-conditioned vehicle from your accommodation. This is essential as the wineries are located in remote areas with challenging access. Our professional driver navigates the coastal roads, allowing you to fully enjoy the wine experience without concerns about driving.",
      },
      {
        question: "What is the cancellation policy for this tour?",
        answer:
          "Cancellations made at least 24 hours in advance will receive a full refund. Cancellations within 24 hours are non-refundable. We understand that plans can change, so please contact us as soon as possible if you need to cancel or reschedule.",
      },
    ],
    availableDates: [
      "2024-04-10",
      "2024-04-24",
      "2024-05-08",
      "2024-05-22",
      "2024-06-05",
      "2024-06-19",
      "2024-07-10",
      "2024-07-24",
      "2024-09-04",
      "2024-09-18",
      "2024-10-09",
    ],
    highlights: [
      "Visit to unique vertical vineyards of the Amalfi Coast",
      "Tasting of local wines with a focus on Falanghina and Costa d'Amalfi DOC",
      "Lunch at a vineyard featuring regional dishes",
      "Learn about traditional and modern winemaking techniques",
      "Small group size for an intimate experience",
    ],
    inclusions: [
      "Guided tour of two wineries and tasting at a third",
      "Transportation between wineries",
      "Wine tastings of 8-10 different wines",
      "Lunch with wine pairings at a vineyard",
      "Small group size for personalized attention",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Gratuities",
      "Additional food and drinks",
    ],
    itinerary: [
      "09:00 AM: Depart from Amalfi",
      "09:30 AM: Visit the first winery for a tour and tasting",
      "11:00 AM: Transfer to the second winery",
      "11:30 AM: Tour and tasting at the second winery",
      "01:00 PM: Enjoy lunch at a vineyard with wine pairings",
      "02:30 PM: Visit a third winery for a tasting",
      "04:00 PM: Return to Amalfi",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled activity.",
  },
  {
    title: "Amalfi Coast Cooking Class & Farm Experience",
    description:
      "Spend a day at an organic farm in the hills above Positano, harvesting seasonal ingredients from the garden, learning traditional recipes from a local nonna, and enjoying your creations with paired local wines on a terrace overlooking the Mediterranean.",
    city: "Positano",
    country: "Italy",
    region: "Campania",
    images: [
      "https://plus.unsplash.com/premium_photo-1737073974848-49862966b994?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fFNwZW5kJTIwYSUyMGRheSUyMGF0JTIwYW4lMjBvcmdhbmljJTIwZmFybSUyMGluJTIwdGhlJTIwaGlsbHMlMjBhYm92ZSUyMFBvc2l0YW5vJTJDJTIwaGFydmVzdGluZyUyMHNlYXNvbmFsJTIwaW5ncmVkaWVudHMlMjBmcm9tJTIwdGhlJTIwZ2FyZGVufGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1668931003703-f406d63d61f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFNwZW5kJTIwYSUyMGRheSUyMGF0JTIwYW4lMjBvcmdhbmljJTIwZmFybSUyMGluJTIwdGhlJTIwaGlsbHMlMjBhYm92ZSUyMFBvc2l0YW5vJTJDJTIwaGFydmVzdGluZyUyMHNlYXNvbmFsJTIwaW5ncmVkaWVudHMlMjBmcm9tJTIwdGhlJTIwZ2FyZGVufGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1739681118696-d7b3d05d5fa9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fFNwZW5kJTIwYSUyMGRheSUyMGF0JTIwYW4lMjBvcmdhbmljJTIwZmFybSUyMGluJTIwdGhlJTIwaGlsbHMlMjBhYm92ZSUyMFBvc2l0YW5vJTJDJTIwaGFydmVzdGluZyUyMHNlYXNvbmFsJTIwaW5ncmVkaWVudHMlMjBmcm9tJTIwdGhlJTIwZ2FyZGVufGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1728498972482-90dc3e7a1c91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFNwZW5kJTIwYSUyMGRheSUyMGF0JTIwYW4lMjBvcmdhbmljJTIwZmFybSUyMGluJTIwdGhlJTIwaGlsbHMlMjBhYm92ZSUyMFBvc2l0YW5vJTJDJTIwaGFydmVzdGluZyUyMHNlYXNvbmFsJTIwaW5ncmVkaWVudHMlMjBmcm9tJTIwdGhlJTIwZ2FyZGVufGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1582027213356-f9835da65eda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fFNwZW5kJTIwYSUyMGRheSUyMGF0JTIwYW4lMjBvcmdhbmljJTIwZmFybSUyMGluJTIwdGhlJTIwaGlsbHMlMjBhYm92ZSUyMFBvc2l0YW5vJTJDJTIwaGFydmVzdGluZyUyMHNlYXNvbmFsJTIwaW5ncmVkaWVudHMlMjBmcm9tJTIwdGhlJTIwZ2FyZGVufGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1563306834-92d7b33e9327?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFNwZW5kJTIwYSUyMGRheSUyMGF0JTIwYW4lMjBvcmdhbmljJTIwZmFybSUyMGluJTIwdGhlJTIwaGlsbHMlMjBhYm92ZSUyMFBvc2l0YW5vJTJDJTIwaGFydmVzdGluZyUyMHNlYXNvbmFsJTIwaW5ncmVkaWVudHMlMjBmcm9tJTIwdGhlJTIwZ2FyZGVufGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1722107971654-3692b05ea362?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFNwZW5kJTIwYSUyMGRheSUyMGF0JTIwYW4lMjBvcmdhbmljJTIwZmFybSUyMGluJTIwdGhlJTIwaGlsbHMlMjBhYm92ZSUyMFBvc2l0YW5vJTJDJTIwaGFydmVzdGluZyUyMHNlYXNvbmFsJTIwaW5ncmVkaWVudHMlMjBmcm9tJTIwdGhlJTIwZ2FyZGVufGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1722048818404-60568ff02bb9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFNwZW5kJTIwYSUyMGRheSUyMGF0JTIwYW4lMjBvcmdhbmljJTIwZmFybSUyMGluJTIwdGhlJTIwaGlsbHMlMjBhYm92ZSUyMFBvc2l0YW5vJTJDJTIwaGFydmVzdGluZyUyMHNlYXNvbmFsJTIwaW5ncmVkaWVudHMlMjBmcm9tJTIwdGhlJTIwZ2FyZGVufGVufDB8fDB8fHww",
    ],
    duration: "6 hours",
    price: "$160",
    rating: 4.9,
    tags: ["Cooking", "Farm-to-Table", "Organic"],
    isPopular: true,
    isHistorical: false,
    isRomantic: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    meetingPoint: {
      address: "Via Pasitea, 84017 Positano SA, Italy",
      coordinates: {
        latitude: 40.628,
        longitude: 14.4849,
      },
      instructions:
        "Meet your guide at the Bar Internazionale in Positano. Look for a guide holding a sign with 'Cooking Class Tour'. Please arrive 10 minutes before the departure time.",
      contactNumber: "+39 089 875454",
      contactEmail: "cooking@paragontrails.com",
    },
    faqs: [
      {
        question: "What dishes will we prepare?",
        answer:
          "The menu varies seasonally based on garden availability, but typically includes handmade pasta (like scialatielli or ravioli), a vegetable-forward antipasto using just-picked produce, a main course featuring local seafood or traditional meat preparation, and a classic dessert such as delizia al limone or torta caprese. Each recipe showcases the simplicity and quality-focused approach of authentic Amalfi Coast cuisine.",
      },
      {
        question: "Do I need cooking experience to participate?",
        answer:
          "No previous cooking experience is necessary! Our class is designed for all skill levels, from beginners to experienced home cooks. Nonna Maria and Chef Paolo provide clear, step-by-step instruction in a supportive environment. The techniques taught are traditional and practical, allowing you to recreate the recipes successfully at home.",
      },
      {
        question: "Is transportation to the farm included?",
        answer:
          "Yes, we provide round-trip transportation from your accommodation to the hillside farm, which is located in a hard-to-reach area above Positano. The scenic drive through olive groves and lemon orchards is part of the experience, offering spectacular views of the coastline as you ascend into the mountains.",
      },
      {
        question: "Can you accommodate dietary restrictions?",
        answer:
          "Yes, we can accommodate vegetarian, gluten-free, and most common allergies with advance notice. Many traditional Amalfi Coast recipes are naturally vegetarian or can be easily adapted. Please inform us of any dietary needs when booking so we can prepare appropriate alternatives while maintaining an authentic culinary experience.",
      },
      {
        question: "What is the cancellation policy for this tour?",
        answer:
          "Cancellations made at least 24 hours in advance will receive a full refund. Cancellations within 24 hours are non-refundable. We understand that plans can change, so please contact us as soon as possible if you need to cancel or reschedule.",
      },
    ],
    availableDates: [
      "2024-04-10",
      "2024-04-24",
      "2024-05-08",
      "2024-05-22",
      "2024-06-05",
      "2024-06-19",
      "2024-07-10",
      "2024-07-24",
      "2024-09-04",
      "2024-09-18",
      "2024-10-09",
    ],
    highlights: [
      "Hands-on cooking class at an organic farm",
      "Harvest seasonal ingredients from the garden",
      "Learn traditional recipes from a local nonna",
      "Enjoy your meal with local wine on a scenic terrace",
      "Small group for personalized instruction",
    ],
    inclusions: [
      "Guided farm tour and cooking class",
      "All ingredients and materials for cooking",
      "Lunch with wine pairing",
      "Transportation to/from the farm",
      "Recipe booklet to take home",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Gratuities",
      "Additional food and drinks",
    ],
    itinerary: [
      "09:00 AM: Depart from Positano",
      "09:30 AM: Arrive at the organic farm",
      "10:00 AM: Guided tour of the farm and gardens",
      "11:00 AM: Cooking class with Nonna Maria",
      "01:00 PM: Enjoy lunch on the terrace",
      "02:30 PM: Return to Positano",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled activity.",
  },
  {
    title: "Amalfi Coast Private Boat & Secret Beaches",
    description:
      "Escape the crowds aboard a private boat to discover hidden coves and secret beaches accessible only by water. Swim in crystal-clear grottos, snorkel around ancient Roman ruins, and enjoy a champagne picnic on a secluded slice of paradise.",
    city: "Amalfi",
    country: "Italy",
    region: "Campania",
    images: [
      "https://plus.unsplash.com/premium_photo-1663011528178-8784c8f6d767?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3dpbSUyMGluJTIwY3J5c3RhbCUyMGNsZWFyJTIwZ3JvdHRvcyUyMEFtYWxmaSUyMENvYXN0JTIwUHJpdmF0ZSUyMEJvYXQlMjAlMjYlMjBTZWNyZXQlMjBCZWFjaGVzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1602071117566-be314e93564b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3dpbSUyMGluJTIwY3J5c3RhbCUyMGNsZWFyJTIwZ3JvdHRvcyUyMEFtYWxmaSUyMENvYXN0JTIwUHJpdmF0ZSUyMEJvYXQlMjAlMjYlMjBTZWNyZXQlMjBCZWFjaGVzfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1663040158145-54aaca9c0d3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fFN3aW0lMjBpbiUyMGNyeXN0YWwlMjBjbGVhciUyMGdyb3R0b3MlMjBBbWFsZmklMjBDb2FzdCUyMFByaXZhdGUlMjBCb2F0JTIwJTI2JTIwU2VjcmV0JTIwQmVhY2hlc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1685539975279-520c52d074e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fFN3aW0lMjBpbiUyMGNyeXN0YWwlMjBjbGVhciUyMGdyb3R0b3MlMjBBbWFsZmklMjBDb2FzdCUyMFByaXZhdGUlMjBCb2F0JTIwJTI2JTIwU2VjcmV0JTIwQmVhY2hlc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1629720048894-8f811ae7b3a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fFN3aW0lMjBpbiUyMGNyeXN0YWwlMjBjbGVhciUyMGdyb3R0b3MlMjBBbWFsZmklMjBDb2FzdCUyMFByaXZhdGUlMjBCb2F0JTIwJTI2JTIwU2VjcmV0JTIwQmVhY2hlc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1622357743335-547b67579987?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fFN3aW0lMjBpbiUyMGNyeXN0YWwlMjBjbGVhciUyMGdyb3R0b3MlMjBBbWFsZmklMjBDb2FzdCUyMFByaXZhdGUlMjBCb2F0JTIwJTI2JTIwU2VjcmV0JTIwQmVhY2hlc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1663011524822-e32fc07f7105?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fFN3aW0lMjBpbiUyMGNyeXN0YWwlMjBjbGVhciUyMGdyb3R0b3MlMjBBbWFsZmklMjBDb2FzdCUyMFByaXZhdGUlMjBCb2F0JTIwJTI2JTIwU2VjcmV0JTIwQmVhY2hlc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1724916358912-3a1a1397fb3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fFN3aW0lMjBpbiUyMGNyeXN0YWwlMjBjbGVhciUyMGdyb3R0b3MlMjBBbWFsZmklMjBDb2FzdCUyMFByaXZhdGUlMjBCb2F0JTIwJTI2JTIwU2VjcmV0JTIwQmVhY2hlc3xlbnwwfHwwfHx8MA%3D%3D",
    ],
    duration: "6 hours",
    price: "$395",
    rating: 5.0,
    tags: ["Exclusive", "Swimming", "Beaches"],
    isPopular: true,
    isHistorical: false,
    isRomantic: true,
    isAdventure: true,
    isCultural: false,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: true,
    isArtOrMusic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "luxury",
    meetingPoint: {
      address: "Marina Grande, 84011 Amalfi, Italy",
      coordinates: {
        latitude: 40.6336,
        longitude: 14.6024,
      },
      instructions:
        "Meet at the main pier of Marina Grande in Amalfi. Look for a crew member holding a sign with your name and 'Paragon Boat Tours'. Please arrive 15 minutes before departure to complete boarding procedures.",
      contactNumber: "+39 081 2345678",
      contactEmail: "boattours@paragontrails.com",
    },
    faqs: [
      {
        question: "How many people can join this private boat tour?",
        answer:
          "The tour is priced for up to 6 people on a beautiful wooden gozzo boat, traditional to the Amalfi Coast. For larger groups, we can arrange a bigger vessel for an additional fee. The experience remains private for your party regardless of size, ensuring a personalized and intimate day on the water.",
      },
      {
        question: "What's included in the champagne picnic?",
        answer:
          "We serve a gourmet picnic featuring local specialties including fresh mozzarella, prosciutto, artisanal breads, marinated vegetables, and seasonal fruits, accompanied by chilled prosecco or champagne. For full-day tours, we can arrange a more substantial seafood lunch at a seaside restaurant accessible only by boat (additional cost applies).",
      },
      {
        question: "Is snorkeling equipment provided?",
        answer:
          "Yes, we provide quality masks, snorkels, and fins in various sizes. Our captain knows the best snorkeling spots with the clearest water and most interesting marine life or underwater artifacts. For experienced swimmers, we also offer basic freediving guidance to explore a bit deeper in safe conditions.",
      },
      {
        question: "What if the sea conditions are rough?",
        answer:
          "Safety is our priority. If sea conditions are unsuitable for a comfortable and safe experience, we'll offer to reschedule or provide a full refund. Sometimes we can adjust the itinerary to stay in more protected waters while still providing a wonderful coastal experience. Our captains are highly experienced and make prudent decisions based on current conditions.",
      },
      {
        question: "What is the cancellation policy for this tour?",
        answer:
          "Cancellations made at least 7 days in advance will receive a full refund. Cancellations made 3-6 days in advance will receive a 50% refund. No refund for cancellations less than 3 days before the scheduled activity.",
      },
    ],
    availableDates: [
      "2024-04-01",
      "2024-04-15",
      "2024-05-01",
      "2024-05-15",
      "2024-06-01",
      "2024-06-15",
      "2024-07-01",
      "2024-07-15",
      "2024-08-01",
      "2024-08-15",
      "2024-09-01",
      "2024-09-15",
      "2024-10-01",
      "2024-10-15",
    ],
    highlights: [
      "Private boat tour to hidden beaches and coves",
      "Swim and snorkel in crystal-clear waters",
      "Explore ancient Roman ruins by the sea",
      "Enjoy a gourmet picnic with champagne",
      "Personalized itinerary based on your preferences",
    ],
    inclusions: [
      "Private boat for your group",
      "Professional captain and crew",
      "Snorkeling equipment",
      "Gourmet picnic and beverages",
      "Beach towels and sun loungers",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Gratuities",
      "Additional food and drinks not specified",
    ],
    itinerary: [
      "09:00 AM: Meet at the marina in Amalfi",
      "09:30 AM: Depart for a day of exploration along the coast",
      "10:00 AM: Stop at the Emerald Grotto for a guided tour",
      "11:00 AM: Swim and snorkel in a secluded cove",
      "12:30 PM: Enjoy a gourmet lunch on board",
      "02:00 PM: Visit another picturesque village or beach",
      "04:00 PM: Return to Amalfi",
    ],
    cancellationPolicy:
      "Full refund if canceled 7 days in advance. 50% refund if canceled 3-6 days in advance. No refund for cancellations less than 3 days before the scheduled activity.",
  },
];

export default amalfiCoastTours;
