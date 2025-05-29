import { Tour } from "@/lib/interfaces/services/tours";
import { findGuideBySpecialty } from "@/lib/utils/get";

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
    tourGuide: findGuideBySpecialty("amsterdam", "history").name,
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
    tourGuide: findGuideBySpecialty("amsterdam", "art").name,
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
    tourGuide: findGuideBySpecialty("amsterdam", "culinary").name,
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
    tourGuide: findGuideBySpecialty("amsterdam", "adventure").name,
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
    tourGuide: findGuideBySpecialty("amsterdam", "romantic").name,
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
    tourGuide: findGuideBySpecialty("amsterdam", "local").name,
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
    tourGuide: findGuideBySpecialty("amsterdam", "cultural").name,
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
    tourGuide: findGuideBySpecialty("amsterdam", "local").name,
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
  },
];

export default amsterdamTours;
