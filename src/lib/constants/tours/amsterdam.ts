import { Tour } from "@/lib/interfaces/services/tours";

export const amsterdamTours: Tour[] = [
  {
    title: "Hidden Canals & Secret Gardens",
    description:
      "Explore Amsterdam beyond the tourist paths with a local historian, discovering hidden hofjes (courtyard gardens), secret canals, and architectural gems from the Golden Age that most visitors never see.",
    images: [
      "/images/tours/amsterdam/hidden-canals.jpg",
      "/images/tours/amsterdam/secret-hofjes.jpg",
    ],
    duration: "3 hours",
    price: "$75",
    rating: 4.9,
    tags: ["Hidden Gems", "Architecture", "History"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "How much walking is involved?",
        answer:
          "This tour covers approximately 4km at a leisurely pace with plenty of stops. We walk along some narrow cobblestone paths and cross several small bridges, so comfortable footwear is recommended. The route is relatively flat but does include some stairs to access certain hidden courtyards.",
      },
      {
        question: "Are the hofjes accessible?",
        answer:
          "Yes, all hofjes we visit are open to the public and accessible. Some may have limited opening hours, but our guide ensures we visit during times when they are open. Please note that some hofjes may have quiet areas where visitors are expected to maintain silence out of respect for residents.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and suitable for children aged 6 and up. The pace is relaxed, and our guide engages younger visitors with stories and activities related to the history and architecture of the sites we visit.",
      },
    ],
    availableDates: [
      "April 5, 2024",
      "April 19, 2024",
      "May 3, 2024",
      "May 17, 2024",
      "June 7, 2024",
      "June 21, 2024",
      "July 5, 2024",
      "July 19, 2024",
      "August 2, 2024",
      "August 16, 2024",
      "September 6, 2024",
      "September 20, 2024",
      "October 4, 2024",
    ],
    highlights: [
      "Discover hidden 'hofjes' (courtyard gardens) dating back to the 17th century",
      "Explore canals unknown to most tourists",
      "Learn about the architectural gems from Amsterdam's Golden Age",
      "Visit secret spots with a local historian",
      "Experience authentic Amsterdam beyond the tourist areas",
    ],
    inclusions: [
      "Expert local historian guide",
      "Small group experience (max 8 people)",
      "Entry to private courtyards and gardens",
      "Refreshment at a local café",
      "City map highlighting secret spots",
    ],
    exclusions: [
      "Public transportation tickets",
      "Food and additional beverages",
      "Gratuities",
      "Hotel pickup and drop-off",
    ],
    itinerary: [
      "10:00 AM: Meet guide at starting point",
      "10:15 AM: Walk through Begijnhof and learn about its history",
      "11:00 AM: Explore hidden canals in the Western Canal Belt",
      "11:45 AM: Visit private courtyard gardens normally closed to public",
      "12:30 PM: Coffee break at a local café",
      "1:00 PM: Discover secret architectural gems in Jordaan district",
      "1:45 PM: Tour conclusion with recommendations for further exploration",
    ],
    meetingPoint:
      "Statue at Spui Square, in front of the Amsterdam American Hotel, Amsterdam",
    cancellationPolicy:
      "Free cancellation up to 24 hours before the tour starts. No refund for cancellations less than 24 hours before the tour or no-shows.",
  },
  {
    title: "Dutch Masters & Rijksmuseum After Hours",
    description:
      "Experience the world-renowned Rijksmuseum without the crowds during a special after-hours visit, with an art historian guide illuminating the stories behind Rembrandt's Night Watch, Vermeer's masterpieces, and other Dutch Golden Age treasures.",
    images: [
      "/images/tours/amsterdam/rijksmuseum-night-watch.jpg",
      "/images/tours/amsterdam/rijksmuseum-hall.jpg",
    ],
    duration: "2.5 hours",
    price: "$125",
    rating: 5.0,
    tags: ["Art", "Museum", "After Hours"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What makes this museum visit special?",
        answer:
          "Our after-hours access means you'll experience the Rijksmuseum with only a small group (maximum 12 guests), enjoying the masterpieces without the usual crowds. Your guide is a published art historian specializing in Dutch Golden Age painting who provides context and stories about the artists and their work that bring the collection to life. The quieter atmosphere allows for an intimate experience with world-famous artworks.",
      },
      {
        question: "Are there any age restrictions for this tour?",
        answer:
          "No, this tour is suitable for all ages. However, please note that some artworks may contain mature themes. We encourage parents to use their discretion when bringing younger children. The tour is designed to be engaging for both adults and children, with interactive elements to keep younger visitors interested.",
      },
    ],
    availableDates: [
      "April 10, 2024",
      "April 24, 2024",
      "May 8, 2024",
      "May 22, 2024",
      "June 12, 2024",
      "June 26, 2024",
      "July 10, 2024",
      "July 24, 2024",
      "August 14, 2024",
      "August 28, 2024",
      "September 11, 2024",
      "September 25, 2024",
    ],
    highlights: [
      "Exclusive after-hours access to the Rijksmuseum",
      "See Rembrandt's Night Watch without the crowds",
      "Learn about Dutch Golden Age masterpieces from an art historian",
      "Discover the stories and symbolism behind famous paintings",
      "Experience the museum's magnificent architecture in evening light",
    ],
    inclusions: [
      "Skip-the-line museum entry ticket",
      "Expert art historian guide",
      "Small group experience (max 12 people)",
      "Welcome drink at the museum café",
      "Detailed information booklet about Dutch Masters",
    ],
    exclusions: [
      "Transportation to/from the museum",
      "Food and additional beverages",
      "Personal expenses",
      "Gratuities",
    ],
    itinerary: [
      "6:30 PM: Meet at Rijksmuseum entrance",
      "6:45 PM: Welcome introduction and overview of Dutch Golden Age",
      "7:00 PM: Gallery of Honor featuring Rembrandt and Vermeer masterpieces",
      "8:00 PM: Explore the Amsterdam Portrait Gallery",
      "8:30 PM: Dutch maritime history through art",
      "9:00 PM: View The Night Watch with expert commentary",
      "9:30 PM: Tour conclusion with welcome drink at museum café",
    ],
    meetingPoint: "Main entrance of the Rijksmuseum, Museumstraat 1, Amsterdam",
    cancellationPolicy:
      "Full refund if canceled 48 hours before the scheduled tour. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
  },
  {
    title: "Amsterdam Culinary Journey",
    description:
      "Taste your way through Amsterdam's diverse food scene with a local chef as your guide. Sample Dutch classics like stroopwafels and herring alongside international influences that make Amsterdam's cuisine unique. Visit local markets, family-owned cafés, and specialty shops off the tourist track.",
    images: [
      "/images/tours/amsterdam/food-market.jpg",
      "/images/tours/amsterdam/dutch-cuisine.jpg",
    ],
    duration: "4 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Food", "Culinary", "Local Markets"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Are dietary restrictions accommodated?",
        answer:
          "Yes, we can accommodate vegetarian, vegan, gluten-free, and most other dietary needs with advance notice. Please let us know your requirements when booking so we can arrange suitable alternatives.",
      },
      {
        question: "What types of food will we try?",
        answer:
          "You'll sample a variety of traditional Dutch dishes, international street food, and local specialties. Highlights include stroopwafels, raw herring, poffertjes (mini pancakes), and artisanal cheeses. We also visit multicultural neighborhoods to experience the city's diverse culinary influences.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and designed to be enjoyable for all ages. Children will love trying new foods and learning about Amsterdam's culinary culture. We can also provide child-friendly options upon request.",
      },
      {
        question: "Do we need to bring any money?",
        answer:
          "While most tastings are included in the tour price, you may want to bring some cash or a card for additional purchases at markets or shops if you wish to buy souvenirs or extra snacks.",
      },
    ],
    availableDates: [
      "April 12, 2024",
      "April 26, 2024",
      "May 10, 2024",
      "May 24, 2024",
      "June 14, 2024",
      "June 28, 2024",
      "July 12, 2024",
      "July 26, 2024",
      "August 9, 2024",
      "August 23, 2024",
      "September 13, 2024",
      "September 27, 2024",
    ],
    highlights: [
      "Visit local markets and taste fresh Dutch produce",
      "Enjoy a variety of Dutch cheeses, herring, and stroopwafels",
      "Experience a cooking demonstration by a local chef",
      "Discover the multicultural influences on Amsterdam's cuisine",
      "Dine in a historic Amsterdam café",
    ],
    inclusions: [
      "Local chef guide",
      "Food tastings at multiple locations",
      "Cooking demonstration",
      "Lunch or dinner at a local restaurant",
      "Recipe booklet to recreate dishes at home",
    ],
    exclusions: [
      "Transportation to/from the meeting point",
      "Additional food and beverages not specified",
      "Gratuities",
    ],
    itinerary: [
      "10:00 AM: Meet your guide at the designated location",
      "10:15 AM: Visit to a local market to sample fresh produce",
      "11:00 AM: Cheese tasting at a traditional cheese shop",
      "11:45 AM: Herring tasting at a local fishmonger",
      "12:30 PM: Stroopwafel demonstration and tasting",
      "1:00 PM: Lunch at a historic café (included)",
      "2:00 PM: Cooking demonstration and tasting of Dutch pancakes",
      "3:00 PM: Tour conclusion and recipe booklet distribution",
    ],
    meetingPoint: "Dam Square, in front of the Royal Palace, Amsterdam",
    cancellationPolicy:
      "Free cancellation up to 48 hours before the tour starts. 50% refund for cancellations made 24-48 hours before the tour. No refund for cancellations less than 24 hours before the tour or no-shows.",
  },
  {
    title: "Amsterdam by Bike: City Cycling Adventure",
    description:
      "Experience Amsterdam like a local – on two wheels! This guided cycling tour takes you through picturesque neighborhoods, along scenic canals, and past iconic landmarks. Learn about Amsterdam's cycling culture and discover why this city is the cycling capital of the world.",
    images: [
      "/images/tours/amsterdam/bike-canal.jpg",
      "/images/tours/amsterdam/cycling-group.jpg",
    ],
    duration: "3 hours",
    price: "$55",
    rating: 4.7,
    tags: ["Cycling", "Outdoor", "City Tour"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Do I need to be an experienced cyclist?",
        answer:
          "No prior experience is necessary. Amsterdam is flat and cyclist-friendly, with dedicated bike lanes throughout the city. We ride at a leisurely pace and our guides ensure everyone feels comfortable. Bikes are adjusted to fit each rider, and we provide a brief orientation before departing.",
      },
      {
        question: "What if it rains?",
        answer:
          "We provide rain ponchos for all participants, and cycling in light rain is quite common in Amsterdam. If the weather is severe, we will reschedule the tour or offer a full refund.",
      },
      {
        question: "Are bike helmets provided?",
        answer:
          "Helmets are not mandatory in the Netherlands, but we do have them available if you prefer to wear one. Most locals cycle without helmets, but we prioritize your comfort and safety.",
      },
      {
        question: "Can I bring my own bike?",
        answer:
          "Yes, you are welcome to bring your own bike. Just let us know in advance so we can adjust the tour accordingly. However, we do provide high-quality rental bikes that are well-maintained and suitable for city cycling.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and suitable for children aged 8 and up. We can provide child-sized bikes or attachable seats for younger kids. Please let us know the ages of your children when booking so we can prepare accordingly.",
      },
      {
        question: "What should I wear for the bike tour?",
        answer:
          "Comfortable clothing and closed-toe shoes are recommended. Dress in layers, as the weather can change throughout the day. We also suggest bringing a light jacket or sweater, especially in the spring and fall.",
      },
      {
        question: "Is there a weight limit for the bikes?",
        answer:
          "Our rental bikes can accommodate riders up to 120 kg (265 lbs). If you have any concerns about bike suitability, please contact us before booking.",
      },
      {
        question: "Can I take photos during the tour?",
        answer:
          "Absolutely! We encourage you to take photos along the way. Our guides will also be happy to assist with group photos at scenic spots.",
      },
      {
        question: "What happens if I get separated from the group?",
        answer:
          "Our guides will ensure that the group stays together, but in case you do get separated, we provide a map and contact information so you can easily find your way back to the meeting point. We also have a designated meeting spot in case anyone needs to take a break or return early.",
      },
      {
        question: "Is there a minimum number of participants for the tour?",
        answer:
          "No, we do not have a minimum number of participants. The tour will run as long as at least one person is booked. However, for private tours, we recommend booking in advance to ensure availability.",
      },
    ],
    availableDates: [
      "April 15, 2024",
      "April 29, 2024",
      "May 13, 2024",
      "May 27, 2024",
      "June 10, 2024",
      "June 24, 2024",
      "July 8, 2024",
      "July 22, 2024",
      "August 5, 2024",
      "August 19, 2024",
      "September 9, 2024",
      "September 23, 2024",
    ],
    highlights: [
      "Cycle through Amsterdam's historic city center and UNESCO-listed canals",
      "Visit the famous Anne Frank House and learn about its history",
      "Explore the vibrant Jordaan district and its hidden courtyards",
      "Discover the Royal Palace and Dam Square",
      "Enjoy a scenic break at Vondelpark",
    ],
    inclusions: [
      "Local cycling guide",
      "Use of a quality rental bike",
      "Bike helmet (optional)",
      "Rain poncho (if needed)",
      "Map of the cycling route and highlights",
    ],
    exclusions: [
      "Transportation to/from the meeting point",
      "Food and beverages",
      "Gratuities",
    ],
    itinerary: [
      "10:00 AM: Meet your guide at the designated location",
      "10:15 AM: Safety briefing and bike fitting",
      "10:30 AM: Start of the cycling tour through the city center",
      "11:15 AM: Stop at the Anne Frank House (exterior visit)",
      "11:45 AM: Continue cycling through the Jordaan district",
      "12:30 PM: Break at Vondelpark with refreshments (not included)",
      "1:00 PM: Visit the Royal Palace and Dam Square",
      "1:45 PM: Return to the starting point",
      "2:00 PM: Tour conclusion",
    ],
    meetingPoint: "Damrak 1, in front of the Victoria Hotel, Amsterdam",
    cancellationPolicy:
      "Free cancellation up to 24 hours before the tour starts. 50% refund for cancellations made 12-24 hours before the tour. No refund for cancellations less than 12 hours before the tour or no-shows.",
  },
  {
    title: "Evening Canal Cruise with Wine & Cheese",
    description:
      "Glide through Amsterdam's illuminated waterways on an intimate evening cruise aboard a traditional salon boat. Enjoy fine Dutch cheeses paired with selected wines as you pass under historic bridges and past magnificent 17th-century merchant houses glowing in the twilight.",
    images: [
      "/images/tours/amsterdam/canal-night-cruise.jpg",
      "/images/tours/amsterdam/canal-boat-wine.jpg",
    ],
    duration: "2 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Canal Cruise", "Evening", "Wine & Cheese"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "romantic",
    faqs: [
      {
        question: "Is the boat covered in case of rain?",
        answer:
          "Yes, our salon boats have a transparent cover that can be used in case of inclement weather, allowing you to still enjoy the views while staying dry. The boats are also heated during colder months for your comfort.",
      },
      {
        question: "What types of cheese are served?",
        answer:
          "We offer a selection of traditional Dutch cheeses, including aged Gouda, Edam, and Leyden, along with seasonal specialties. Vegetarian options are available upon request. The cheese is paired with a variety of wines to enhance your tasting experience.",
      },
      {
        question: "Can I book a private cruise for a special occasion?",
        answer:
          "Yes, we offer private evening cruises for special occasions such as anniversaries, birthdays, or corporate events. Please contact us for more details and to discuss your specific requirements.",
      },
      {
        question: "Is there a restroom on board?",
        answer:
          "Yes, our salon boats are equipped with a restroom for your convenience during the cruise.",
      },
    ],
    availableDates: [
      "April 20, 2024",
      "May 4, 2024",
      "May 18, 2024",
      "June 1, 2024",
      "June 15, 2024",
      "June 29, 2024",
      "July 13, 2024",
      "July 27, 2024",
      "August 10, 2024",
      "August 24, 2024",
      "September 14, 2024",
      "September 28, 2024",
    ],
    highlights: [
      "Cruise through Amsterdam's historic canals by night",
      "Enjoy a selection of fine Dutch cheeses and wines",
      "See the city’s illuminated landmarks from the water",
      "Learn about Amsterdam's history and architecture",
      "Relax in an intimate and cozy atmosphere",
    ],
    inclusions: [
      "Scenic evening cruise",
      "Tasting of Dutch cheeses",
      "Wine pairing with cheeses",
      "Knowledgeable guide",
      "Warm blankets available on request",
    ],
    exclusions: [
      "Transportation to/from the meeting point",
      "Additional food and beverages",
      "Gratuities",
    ],
    itinerary: [
      "7:00 PM: Board the salon boat at the designated location",
      "7:15 PM: Welcome drink and introduction",
      "7:30 PM: Start of the cruise through the canals",
      "8:15 PM: Cheese and wine tasting on board",
      "9:00 PM: Return to the starting point",
      "9:15 PM: Tour conclusion",
    ],
    meetingPoint: "Prinsengracht 263, Amsterdam (near the Anne Frank House)",
    cancellationPolicy:
      "Free cancellation up to 48 hours before the tour starts. 50% refund for cancellations made 24-48 hours before the tour. No refund for cancellations less than 24 hours before the tour or no-shows.",
  },
  {
    title: "Windmills, Cheese & Clogs: Dutch Countryside Day Trip",
    description:
      "Escape the city for a day exploring the quintessential Dutch countryside. Visit the historic windmill village of Zaanse Schans, learn the art of cheese-making at a traditional farm, and watch wooden clogs being crafted by hand using centuries-old techniques.",
    images: [
      "/images/tours/amsterdam/windmills-zaanse-schans.jpg",
      "/images/tours/amsterdam/cheese-farm.jpg",
    ],
    duration: "7 hours",
    price: "$110",
    rating: 4.8,
    tags: ["Day Trip", "Countryside", "Traditional"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "local",
    faqs: [
      {
        question: "How far is the countryside from Amsterdam?",
        answer:
          "The Zaanse Schans windmill village is approximately 30 minutes by private coach from central Amsterdam. The countryside locations we visit are close enough for a comfortable day trip while offering a complete contrast to the urban environment of the city.",
      },
      {
        question: "Are the windmills still operational?",
        answer:
          "Yes, many of the windmills at Zaanse Schans are still operational and demonstrate traditional milling techniques. You can enter some of the windmills to see how they work and learn about their history.",
      },
      {
        question: "Is lunch included in the tour?",
        answer:
          "Lunch is not included, but we will stop at a local café where you can purchase traditional Dutch dishes or snacks. We recommend trying a local pancake or herring sandwich.",
      },
      {
        question: "Can I buy cheese and clogs during the tour?",
        answer:
          "Yes, there will be opportunities to purchase cheese and clogs at the farm and clog workshop. We also visit a cheese shop where you can sample various types of Dutch cheese.",
      },
    ],
    availableDates: [
      "April 8, 2024",
      "April 22, 2024",
      "May 6, 2024",
      "May 20, 2024",
      "June 3, 2024",
      "June 17, 2024",
      "July 1, 2024",
      "July 15, 2024",
      "July 29, 2024",
      "August 12, 2024",
      "August 26, 2024",
      "September 9, 2024",
      "September 23, 2024",
    ],
    highlights: [
      "Visit the iconic windmills of Zaanse Schans",
      "Experience traditional cheese-making and tasting",
      "Watch a clog-making demonstration",
      "Explore the picturesque Dutch countryside",
      "Learn about the history and culture of the Netherlands",
    ],
    inclusions: [
      "Guided tour in a comfortable coach",
      "Visit to Zaanse Schans windmill village",
      "Cheese tasting at a traditional farm",
      "Clog-making demonstration",
      "Free time to explore and shop",
    ],
    exclusions: [
      "Transportation to/from Amsterdam",
      "Lunch and beverages",
      "Gratuities",
    ],
    itinerary: [
      "9:00 AM: Depart from Amsterdam by coach",
      "9:30 AM: Arrive at Zaanse Schans windmill village",
      "10:00 AM: Guided tour of the windmill village",
      "11:00 AM: Visit to a cheese farm for tasting and demonstration",
      "12:00 PM: Free time to explore the village and have lunch (not included)",
      "1:30 PM: Visit to a clog workshop to see traditional clog-making",
      "2:30 PM: Return to Amsterdam",
      "3:00 PM: Arrive in Amsterdam, tour conclusion",
    ],
    meetingPoint: "Geelvinck Hinlopen Huis, Amsterdam",
    cancellationPolicy:
      "Free cancellation up to 72 hours before the tour starts. 50% refund for cancellations made 24-72 hours before the tour. No refund for cancellations less than 24 hours before the tour or no-shows.",
  },
  {
    title: "Red Light District: Culture & History Tour",
    description:
      "Discover the fascinating history and cultural significance of Amsterdam's famous Red Light District with an informed local guide. Learn about the area's evolution from medieval times to today, the Dutch approach to social issues, and the lives of those who work in this unique neighborhood.",
    images: [
      "/images/tours/amsterdam/red-light-canal.jpg",
      "/images/tours/amsterdam/old-church-square.jpg",
    ],
    duration: "2 hours",
    price: "$45",
    rating: 4.6,
    tags: ["Cultural", "History", "Adults Only"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is this tour respectful to the workers in the area?",
        answer:
          "Absolutely. We maintain a respectful distance from working areas and never photograph the workers. Our guides are trained to discuss the subject matter factually and without sensationalism, focusing on the historical, cultural, and social aspects of the district. We support ethical tourism practices that respect both the local community and visitors.",
      },
      {
        question: "Is this tour suitable for all ages?",
        answer:
          "No, this tour is intended for adults only (18+). It contains mature themes and discussions that may not be appropriate for younger audiences. Valid ID may be required to join the tour.",
      },

      {
        question: "Is this tour suitable for all ages?",
        answer:
          "No, this tour is intended for adults only (18+). It contains mature themes and discussions that may not be appropriate for younger audiences. Valid ID may be required to join the tour.",
      },
    ],
    availableDates: [
      "April 3, 2024",
      "April 17, 2024",
      "May 1, 2024",
      "May 15, 2024",
      "June 5, 2024",
      "June 19, 2024",
      "July 3, 2024",
      "July 17, 2024",
      "July 31, 2024",
      "August 14, 2024",
      "August 28, 2024",
      "September 11, 2024",
      "September 25, 2024",
    ],
    highlights: [
      "Guided walking tour of the Red Light District",
      "Learn about the history and culture of Amsterdam",
      "Visit the famous Oude Kerk (Old Church)",
      "Discover hidden gems and local stories",
      "Experience Amsterdam's nightlife and entertainment district",
    ],
    inclusions: [
      "Local guide",
      "Walking tour of the Red Light District",
      "Visit to the Oude Kerk",
      "Complimentary drink at a local bar",
      "Map of the Red Light District",
    ],
    exclusions: [
      "Transportation to/from the meeting point",
      "Food and additional beverages",
      "Gratuities",
    ],
    itinerary: [
      "7:00 PM: Meet your guide at the designated location",
      "7:15 PM: Start of the walking tour through the Red Light District",
      "8:00 PM: Visit to the Oude Kerk and learn about its history",
      "8:30 PM: Explore the area and hear local stories",
      "9:15 PM: Enjoy a complimentary drink at a local bar",
      "9:45 PM: Tour conclusion",
    ],
    meetingPoint: "Dam Square, in front of the Royal Palace, Amsterdam",
    cancellationPolicy:
      "Free cancellation up to 24 hours before the tour starts. 50% refund for cancellations made 12-24 hours before the tour. No refund for cancellations less than 12 hours before the tour or no-shows.",
  },
  {
    title: "Artis Zoo & Botanical Gardens",
    description:
      "Explore one of the oldest zoos in Europe, Artis, which combines a traditional zoo experience with beautiful botanical gardens. Learn about conservation efforts and see a wide variety of animals in naturalistic habitats, all while enjoying the lush greenery of the gardens.",
    images: [
      "/images/tours/amsterdam/artis-zoo.jpg",
      "/images/tours/amsterdam/botanical-gardens.jpg",
    ],
    duration: "4 hours",
    price: "$60",
    rating: 4.7,
    tags: ["Zoo", "Nature", "Family"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "local",
    faqs: [
      {
        question: "Is the zoo accessible for strollers and wheelchairs?",
        answer:
          "Yes, Artis Zoo is fully accessible for strollers and wheelchairs. The paths are paved and wide enough for easy navigation. There are also accessible restrooms available throughout the zoo.",
      },
      {
        question: "Are there any animal shows or feeding sessions?",
        answer:
          "Yes, Artis offers various animal presentations and feeding sessions throughout the day. Our guide will inform you of the schedule during the tour so you can plan your visit accordingly.",
      },
      {
        question: "Can I bring my own food and drinks?",
        answer:
          "Yes, you are welcome to bring your own food and drinks. However, there are also several cafés and restaurants within the zoo where you can purchase meals and snacks if you prefer.",
      },
    ],
    availableDates: [
      "April 6, 2024",
      "April 20, 2024",
      "May 4, 2024",
      "May 18, 2024",
      "June 1, 2024",
      "June 15, 2024",
      "June 29, 2024",
      "July 13, 2024",
      "July 27, 2024",
      "August 10, 2024",
      "August 24, 2024",
      "September 7, 2024",
      "September 21, 2024",
    ],
    highlights: [
      "Visit to Artis, one of the oldest zoos in Europe",
      "Explore the beautiful botanical gardens",
      "See a wide variety of animals in naturalistic habitats",
      "Learn about conservation efforts and animal care",
      "Enjoy a relaxing day in a lush green environment",
    ],
    inclusions: [
      "Entry ticket to Artis Zoo and Botanical Gardens",
      "Guided tour with a knowledgeable guide",
      "Visit to the planetarium (if open)",
      "Free time to explore the zoo and gardens",
      "Discount at the zoo's restaurants and shops",
    ],
    exclusions: [
      "Transportation to/from the zoo",
      "Food and beverages",
      "Gratuities",
    ],
    itinerary: [
      "9:00 AM: Meet your guide at the designated location",
      "9:15 AM: Enter Artis Zoo and start the tour",
      "10:00 AM: Visit the botanical gardens",
      "11:00 AM: See the animal presentations and feeding sessions",
      "12:30 PM: Break for lunch (not included)",
      "1:30 PM: Continue exploring the zoo and gardens",
      "3:00 PM: Tour conclusion",
    ],
    meetingPoint: "Artis Zoo main entrance, Plantage Kerklaan 38-40, Amsterdam",
    cancellationPolicy:
      "Free cancellation up to 24 hours before the tour starts. 50% refund for cancellations made 12-24 hours before the tour. No refund for cancellations less than 12 hours before the tour or no-shows.",
  },
];

export default amsterdamTours;
