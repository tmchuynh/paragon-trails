import { Tour } from "@/lib/interfaces/services/tours";
export const amsterdamTours: Tour[] = [
  {
    title: "Hidden Canals & Secret Gardens",
    description:
      "Explore Amsterdam beyond the tourist paths with a local historian, discovering hidden hofjes (courtyard gardens), secret canals, and architectural gems from the Golden Age that most visitors never see.",
    city: "Amsterdam",
    country: "Netherlands",
    region: "North Holland",
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
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "off-the-beaten-path",
    availableDates: [
      "2024-04-05",
      "2024-04-19",
      "2024-05-03",
      "2024-05-17",
      "2024-06-07",
      "2024-06-21",
      "2024-07-05",
      "2024-07-19",
      "2024-08-02",
      "2024-08-16",
      "2024-09-06",
      "2024-09-20",
      "2024-10-04",
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
    cancellationPolicy:
      "Free cancellation up to 24 hours before the tour starts. No refund for cancellations less than 24 hours before the tour or no-shows.",
    meetingPoint: {
      address: "Begijnhof 30, 1012 WT Amsterdam, Netherlands",
      coordinates: {
        latitude: 52.3702,
        longitude: 4.8901,
      },
      instructions:
        "Meet your guide at the entrance gate to the Begijnhof courtyard. Look for the guide holding a blue umbrella with 'Secret Amsterdam' written on it. Please arrive 10 minutes before the tour starts.",
      contactNumber: "+31 20 123 4567",
      contactEmail: "tours@secretamsterdam.com",
    },
    faqs: [
      {
        question: "How much walking is involved?",
        answer:
          "This tour covers approximately 3 kilometers at a gentle pace with plenty of stops. We'll be walking for about 3 hours total, mostly on flat terrain, though some areas have cobblestones which may be uneven.",
      },
      {
        question: "What should I wear?",
        answer:
          "Comfortable walking shoes are recommended. Amsterdam weather can be unpredictable, so dress in layers and bring a waterproof jacket or umbrella if rain is forecasted.",
      },
      {
        question:
          "Are the hidden hofjes accessible for those with mobility issues?",
        answer:
          "Some of the courtyards have steps and narrow entrances. While we try to accommodate all participants, this particular tour is challenging for wheelchair users or those with significant mobility limitations. Please contact us in advance to discuss alternatives.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, children are welcome. The tour includes many interesting visual elements and stories that can engage younger participants. We recommend it for children aged 8 and up who enjoy walking and exploring.",
      },
      {
        question: "Will we be able to take photos in the private courtyards?",
        answer:
          "Photography is permitted in most locations for personal use, but some private gardens have restrictions. Your guide will advise you about each specific location. We ask that you be respectful of residents when taking photos.",
      },
    ],
  },
  {
    title: "Dutch Masters & Rijksmuseum After Hours",
    description:
      "Experience the world-renowned Rijksmuseum without the crowds during a special after-hours visit, with an art historian guide illuminating the stories behind Rembrandt's Night Watch, Vermeer's masterpieces, and other Dutch Golden Age treasures.",
    city: "Amsterdam",
    country: "Netherlands",
    region: "North Holland",
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
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: true,
    isWellness: false,
    isLuxury: true,
    isArtOrMusic: true,
    tourCategoryId: "cultural",
    availableDates: [
      "2024-04-10",
      "2024-04-24",
      "2024-05-08",
      "2024-05-22",
      "2024-06-12",
      "2024-06-26",
      "2024-07-10",
      "2024-07-24",
      "2024-08-14",
      "2024-08-28",
      "2024-09-11",
      "2024-09-25",
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
    cancellationPolicy:
      "Full refund if canceled 48 hours before the scheduled tour. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
    meetingPoint: {
      address: "Museumstraat 1, 1071 XX Amsterdam, Netherlands",
      coordinates: {
        latitude: 52.3599,
        longitude: 4.8852,
      },
      instructions:
        "Meet at the main entrance of the Rijksmuseum under the passageway arch. Your guide will be holding a sign with 'After Hours Art Tour' written on it. Please arrive 15 minutes early with your ID as it's required for after-hours access.",
      contactNumber: "+31 20 674 7000",
      contactEmail: "afterhours@rijksmuseum.nl",
    },
    faqs: [
      {
        question: "What makes this after-hours experience special?",
        answer:
          "This exclusive experience allows you to enjoy the Rijksmuseum with dramatically fewer visitors than during regular hours. You'll be able to get up close to masterpieces like Rembrandt's Night Watch without crowds, take unobstructed photos, and have more personal interaction with your art historian guide.",
      },
      {
        question: "Is photography allowed in the museum?",
        answer:
          "Photography for personal use without flash is permitted in most permanent collection areas. Some special exhibitions and certain artworks may have restrictions, which your guide will point out.",
      },
      {
        question: "What should I bring?",
        answer:
          "Please bring a valid photo ID as it's required for after-hours access. We recommend comfortable shoes as there will be standing and walking involved. No large bags are allowed in the museum, but small purses and camera bags are permitted.",
      },
      {
        question: "How many masterpieces will we see?",
        answer:
          "The tour focuses on approximately 15-20 key masterpieces, allowing time for detailed explanation and appreciation. Your guide will cover the most significant works while adapting the tour to the group's specific interests whenever possible.",
      },
      {
        question: "Is this tour accessible for those with mobility issues?",
        answer:
          "Yes, the Rijksmuseum is fully wheelchair accessible with elevators to all floors. The tour pace is leisurely with opportunities to sit periodically. Please inform us in advance if you have specific mobility requirements so we can tailor the route accordingly.",
      },
    ],
  },
  {
    title: "Amsterdam Culinary Journey",
    description:
      "Taste your way through Amsterdam's diverse food scene with a local chef as your guide. Sample Dutch classics like stroopwafels and herring alongside international influences that make Amsterdam's cuisine unique. Visit local markets, family-owned cafés, and specialty shops off the tourist track.",
    city: "Amsterdam",
    country: "Netherlands",
    region: "North Holland",
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
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "culinary",
    availableDates: [
      "2024-04-12",
      "2024-04-26",
      "2024-05-10",
      "2024-05-24",
      "2024-06-14",
      "2024-06-28",
      "2024-07-12",
      "2024-07-26",
      "2024-08-09",
      "2024-08-23",
      "2024-09-13",
      "2024-09-27",
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
    cancellationPolicy:
      "Free cancellation up to 48 hours before the tour starts. 50% refund for cancellations made 24-48 hours before the tour. No refund for cancellations less than 24 hours before the tour or no-shows.",
    meetingPoint: {
      address: "Albert Cuypmarkt 1, 1072 CW Amsterdam, Netherlands",
      coordinates: {
        latitude: 52.3562,
        longitude: 4.8933,
      },
      instructions:
        "Meet your chef guide at the entrance to Albert Cuyp Market where Albert Cuypstraat meets Ferdinand Bolstraat. The guide will be wearing a chef's jacket with a 'Taste of Amsterdam' logo. Please arrive 5-10 minutes early.",
      contactNumber: "+31 20 423 1678",
      contactEmail: "bookings@amsterdamfoodtours.com",
    },
    faqs: [
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Yes, we can accommodate most dietary restrictions including vegetarian, vegan, gluten-free, and most food allergies. Please inform us at least 48 hours in advance so we can prepare appropriate alternatives while still providing an authentic Dutch culinary experience.",
      },
      {
        question: "How much food is included?",
        answer:
          "The tour includes multiple tastings that add up to a substantial meal. Come hungry! You'll sample Dutch cheeses, herring, stroopwafels, and other local specialties, plus a sit-down lunch or dinner depending on your tour time.",
      },
      {
        question: "Will we be sitting or standing during tastings?",
        answer:
          "The tour is a mix of standing tastings at markets and shops, with a sit-down component during the cooking demonstration and final meal. We aim to provide a balanced experience with opportunities to rest throughout the tour.",
      },
      {
        question: "Is alcohol served on the tour?",
        answer:
          "Yes, some tastings may include small samples of local Dutch beers or spirits for guests over 18 years old. Non-alcoholic alternatives are always available upon request.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "The tour covers approximately 2-3 kilometers at a leisurely pace with frequent stops for tastings. We visit multiple neighborhoods with food stops typically no more than 10-15 minutes walking distance apart.",
      },
    ],
  },
  {
    title: "Amsterdam by Bike: City Cycling Adventure",
    description:
      "Experience Amsterdam like a local – on two wheels! This guided cycling tour takes you through picturesque neighborhoods, along scenic canals, and past iconic landmarks. Learn about Amsterdam's cycling culture and discover why this city is the cycling capital of the world.",
    city: "Amsterdam",
    country: "Netherlands",
    region: "North Holland",
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
    isPopular: true,
    isAdventure: true,
    isCultural: false,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "adventure",
    availableDates: [
      "2024-04-15",
      "2024-04-29",
      "2024-05-13",
      "2024-05-27",
      "2024-06-10",
      "2024-06-24",
      "2024-07-08",
      "2024-07-22",
      "2024-08-05",
      "2024-08-19",
      "2024-09-09",
      "2024-09-23",
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
    cancellationPolicy:
      "Free cancellation up to 24 hours before the tour starts. 50% refund for cancellations made 12-24 hours before the tour. No refund for cancellations less than 12 hours before the tour or no-shows.",
    meetingPoint: {
      address: "Damrak 247, 1012 ZJ Amsterdam, Netherlands",
      coordinates: {
        latitude: 52.3749,
        longitude: 4.8957,
      },
      instructions:
        "Meet at the Yellow Bike rental shop on Damrak near Central Station. Look for your guide wearing a bright orange cycling vest with 'Amsterdam Bike Tours' on the back. Please arrive 15 minutes early to get fitted for your bike.",
      contactNumber: "+31 20 620 6940",
      contactEmail: "info@amsterdambiketours.com",
    },
    faqs: [
      {
        question: "Do I need to be an experienced cyclist?",
        answer:
          "No, you don't need to be an expert cyclist, but basic cycling skills are required. Amsterdam is very flat and bike-friendly with dedicated cycle paths. Our guides set an easy pace and provide safety instructions before departing.",
      },
      {
        question: "What if it's raining?",
        answer:
          "Tours run in light rain (we provide ponchos), but may be rescheduled or refunded in case of heavy rain or unsafe weather conditions. Amsterdam locals cycle in all weather, and sometimes rainy tours offer a more authentic experience!",
      },
      {
        question: "What size bikes do you have?",
        answer:
          "We have bikes suitable for all heights, from children to very tall adults. Please provide height information when booking so we can prepare appropriately sized bikes for everyone in your group.",
      },
      {
        question: "Is it safe to cycle in Amsterdam?",
        answer:
          "Amsterdam is one of the world's most bike-friendly cities with extensive dedicated cycling infrastructure. Our routes prioritize cycle paths and quieter streets. Guides are professionally trained and will ensure your safety throughout the tour.",
      },
      {
        question: "Can children join this tour?",
        answer:
          "Yes, children are welcome! We offer child seats for babies (1-3 years), tag-along bikes for younger children (4-7 years), and smaller bikes for older children. Please specify children's ages and heights when booking so we can prepare appropriate equipment.",
      },
    ],
  },
  {
    title: "Evening Canal Cruise with Wine & Cheese",
    description:
      "Glide through Amsterdam's illuminated waterways on an intimate evening cruise aboard a traditional salon boat. Enjoy fine Dutch cheeses paired with selected wines as you pass under historic bridges and past magnificent 17th-century merchant houses glowing in the twilight.",
    city: "Amsterdam",
    country: "Netherlands",
    region: "North Holland",
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
    isPopular: true,
    isAdventure: false,
    isCultural: false,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: true,
    isWellness: false,
    isLuxury: true,
    isArtOrMusic: false,
    tourCategoryId: "romantic",
    availableDates: [
      "2024-04-20",
      "2024-05-04",
      "2024-05-18",
      "2024-06-01",
      "2024-06-15",
      "2024-06-29",
      "2024-07-13",
      "2024-07-27",
      "2024-08-10",
      "2024-08-24",
      "2024-09-14",
      "2024-09-28",
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
    cancellationPolicy:
      "Free cancellation up to 48 hours before the tour starts. 50% refund for cancellations made 24-48 hours before the tour. No refund for cancellations less than 24 hours before the tour or no-shows.",
    meetingPoint: {
      address: "Prins Hendrikkade 25, 1012 TM Amsterdam, Netherlands",
      coordinates: {
        latitude: 52.3778,
        longitude: 4.9006,
      },
      instructions:
        "Meet at the private boat dock behind the Amsterdam Centraal Station. Look for the elegant salon boat with 'Amsterdam Luxury Cruises' flag. Your captain will welcome you aboard. Please arrive 10 minutes before departure time.",
      contactNumber: "+31 20 423 2777",
      contactEmail: "reservations@amsterdamluxurycruises.com",
    },
    faqs: [
      {
        question: "What type of boat will we be on?",
        answer:
          "You'll cruise on a traditional salon boat, a beautifully restored vessel from the early 20th century with polished wood interiors, comfortable seating, and large windows. These intimate boats accommodate a maximum of 12 guests for a personalized experience.",
      },
      {
        question: "What cheeses and wines are served?",
        answer:
          "We serve a selection of premium Dutch cheeses including aged Gouda, creamy Leiden, herb-infused varieties, and local specialties. These are paired with complementary wines from European vineyards, with an emphasis on selections that enhance the cheese flavors.",
      },
      {
        question: "Is the boat covered in case of rain?",
        answer:
          "Yes, the salon boat is fully covered with large windows, making it comfortable in any weather. The boat is climate-controlled, so you'll be comfortable regardless of outside temperatures.",
      },
      {
        question: "Will we see the major Amsterdam landmarks?",
        answer:
          "Absolutely! The cruise route passes many of Amsterdam's iconic sights including the Anne Frank House, Skinny Bridge, Seven Bridges, Amstel River, and 17th-century canal houses. Your guide will point out significant landmarks throughout the cruise.",
      },
      {
        question: "Is the cruise suitable for children?",
        answer:
          "While children are welcome, this cruise is designed as an adult experience focused on wine and cheese tasting in a sophisticated atmosphere. Non-alcoholic beverages are available for children and non-drinking adults.",
      },
    ],
  },
  {
    title: "Windmills, Cheese & Clogs: Dutch Countryside Day Trip",
    description:
      "Escape the city for a day exploring the quintessential Dutch countryside. Visit the historic windmill village of Zaanse Schans, learn the art of cheese-making at a traditional farm, and watch wooden clogs being crafted by hand using centuries-old techniques.",
    city: "Amsterdam",
    country: "Netherlands",
    region: "North Holland",
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
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "local",
    availableDates: [
      "2024-04-08",
      "2024-04-22",
      "2024-05-06",
      "2024-05-20",
      "2024-06-03",
      "2024-06-17",
      "2024-07-01",
      "2024-07-15",
      "2024-07-29",
      "2024-08-12",
      "2024-08-26",
      "2024-09-09",
      "2024-09-23",
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
    cancellationPolicy:
      "Free cancellation up to 72 hours before the tour starts. 50% refund for cancellations made 24-72 hours before the tour. No refund for cancellations less than 24 hours before the tour or no-shows.",
    meetingPoint: {
      address: "Damrak 26, 1012 LG Amsterdam, Netherlands",
      coordinates: {
        latitude: 52.3736,
        longitude: 4.8948,
      },
      instructions:
        "Meet in front of the Amsterdam Tourist Information Center (I amsterdam Visitor Centre) on Damrak. Look for a guide holding a sign with 'Dutch Countryside Tour' written on it. Please arrive 15 minutes before departure time.",
      contactNumber: "+31 20 217 0800",
      contactEmail: "daytrips@hollandtours.com",
    },
    faqs: [
      {
        question: "How long do we spend at each location?",
        answer:
          "We spend approximately 1.5 hours at Zaanse Schans exploring the windmills, about 1 hour at the cheese farm, and 45 minutes at the clog workshop. The schedule allows enough time to enjoy each location without rushing, while still covering all highlights in a single day.",
      },
      {
        question: "Will we go inside a windmill?",
        answer:
          "Yes, the tour includes entrance to one functioning windmill where you'll learn about its operation and historical significance. You'll see the internal mechanisms and understand how these ingenious machines have been vital to Dutch history.",
      },
      {
        question: "Are there opportunities to buy cheese and other souvenirs?",
        answer:
          "Yes, you'll have opportunities to purchase authentic Dutch products including cheese, clogs, and crafts directly from producers. These make wonderful souvenirs, and many items can be vacuum-sealed for travel or shipped internationally.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "The tour involves moderate walking, approximately 3-4 kilometers throughout the day on mostly flat terrain. Some windmills have steep, narrow stairs to climb if you choose to enter the upper levels. The pace is leisurely with plenty of stops.",
      },
      {
        question: "What should I bring for the day trip?",
        answer:
          "Bring a camera, comfortable walking shoes, and a light waterproof jacket as Dutch weather can change quickly. We recommend bringing some cash for small purchases, though credit cards are widely accepted. All entrance fees are covered in your tour price.",
      },
    ],
  },
  {
    title: "Red Light District: Culture & History Tour",
    description:
      "Discover the fascinating history and cultural significance of Amsterdam's famous Red Light District with an informed local guide. Learn about the area's evolution from medieval times to today, the Dutch approach to social issues, and the lives of those who work in this unique neighborhood.",
    city: "Amsterdam",
    country: "Netherlands",
    region: "North Holland",
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
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "cultural",
    availableDates: [
      "2024-04-03",
      "2024-04-17",
      "2024-05-01",
      "2024-05-15",
      "2024-06-05",
      "2024-06-19",
      "2024-07-03",
      "2024-07-17",
      "2024-07-31",
      "2024-08-14",
      "2024-08-28",
      "2024-09-11",
      "2024-09-25",
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
    cancellationPolicy:
      "Free cancellation up to 24 hours before the tour starts. 50% refund for cancellations made 12-24 hours before the tour. No refund for cancellations less than 12 hours before the tour or no-shows.",
    meetingPoint: {
      address: "Oude Kerk, Oudekerksplein 23, 1012 GX Amsterdam, Netherlands",
      coordinates: {
        latitude: 52.3743,
        longitude: 4.8982,
      },
      instructions:
        "Meet at the front entrance of the Oude Kerk (Old Church). Your guide will be holding a red lantern symbol. This tour starts promptly, so please arrive 5-10 minutes early.",
      contactNumber: "+31 20 421 1656",
      contactEmail: "info@amsterdamhistoricaltours.com",
    },
    faqs: [
      {
        question: "Is it appropriate to take photos during this tour?",
        answer:
          "Photography is prohibited in areas with active sex workers as a matter of respect and privacy. Your guide will clearly indicate where photography is and isn't allowed. There are plenty of interesting architectural and historical features you can photograph.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Due to the mature content discussed and the active adult entertainment industry in the area, this tour is only appropriate for adults and older teenagers (16+) accompanied by a parent or guardian. We offer many alternative family-friendly tours of Amsterdam.",
      },
      {
        question: "Will we see sex workers during this tour?",
        answer:
          "Yes, the tour passes through active areas of the Red Light District where sex workers may be visible in windows. The tour approaches this aspect of Amsterdam with respect and professionalism, focusing on cultural context, history, and social policy rather than sensationalism.",
      },
      {
        question: "Is this area safe in the evening?",
        answer:
          "Yes, despite its reputation, the Red Light District is one of the most heavily policed and monitored areas in Amsterdam. Our evening tours are timed to show the district when it's active but not at its busiest. Your guide will ensure the group stays together in comfortable areas.",
      },
      {
        question: "What makes this tour educational rather than exploitative?",
        answer:
          "Our guides are trained historians and sociologists who present the area's complex history and Amsterdam's unique approach to regulation. The tour discusses medieval history, architecture, the evolution of Dutch social policies, and ongoing debates about urban planning and rights of sex workers.",
      },
    ],
  },
  {
    title: "Artis Zoo & Botanical Gardens",
    description:
      "Explore one of the oldest zoos in Europe, Artis, which combines a traditional zoo experience with beautiful botanical gardens. Learn about conservation efforts and see a wide variety of animals in naturalistic habitats, all while enjoying the lush greenery of the gardens.",
    city: "Amsterdam",
    country: "Netherlands",
    region: "North Holland",
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
    isPopular: true,
    isAdventure: false,
    isCultural: false,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "local",
    availableDates: [
      "2024-04-06",
      "2024-04-20",
      "2024-05-04",
      "2024-05-18",
      "2024-06-01",
      "2024-06-15",
      "2024-06-29",
      "2024-07-13",
      "2024-07-27",
      "2024-08-10",
      "2024-08-24",
      "2024-09-07",
      "2024-09-21",
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
    cancellationPolicy:
      "Free cancellation up to 24 hours before the tour starts. 50% refund for cancellations made 12-24 hours before the tour. No refund for cancellations less than 12 hours before the tour or no-shows.",
    meetingPoint: {
      address: "Plantage Kerklaan 38-40, 1018 CZ Amsterdam, Netherlands",
      coordinates: {
        latitude: 52.366,
        longitude: 4.9165,
      },
      instructions:
        "Meet at the main entrance of Artis Royal Zoo. Your guide will be waiting by the ticket counters holding a sign with 'Artis Tour' written on it. Please arrive 15 minutes before the tour start time.",
      contactNumber: "+31 20 523 3400",
      contactEmail: "visits@artis.nl",
    },
    faqs: [
      {
        question: "What makes Artis different from other zoos?",
        answer:
          "Founded in 1838, Artis is one of the oldest zoos in mainland Europe with a unique blend of historical architecture, botanical gardens, and modern conservation facilities. Unlike many zoos, Artis is located right in the city center and integrates cultural heritage with natural history.",
      },
      {
        question: "Are there indoor areas if it rains?",
        answer:
          "Yes, Artis features numerous indoor exhibits including the Butterfly Pavilion, Insectarium, Planetarium, Aquarium, and several animal houses. The tour can be adapted for rainy weather to maximize time in covered areas while still experiencing the highlights.",
      },
      {
        question: "How long do people typically spend at Artis?",
        answer:
          "While our guided tour is 4 hours and covers the main highlights, many visitors choose to stay longer. Your ticket is valid for the full day, so you're welcome to continue exploring independently after the tour concludes.",
      },
      {
        question: "Is the zoo accessible for strollers and wheelchairs?",
        answer:
          "Yes, Artis is largely accessible with paved paths throughout the park. Wheelchairs and mobility scooters can access most areas, and strollers are welcome. The historic nature of some buildings means a few exhibits have limited accessibility, but alternatives are always available.",
      },
      {
        question: "Are there places to eat inside Artis?",
        answer:
          "Yes, Artis has several dining options including the historic Artis Café, de Plantage restaurant, and various kiosks throughout the park. Our tour schedule includes a break for lunch or refreshments (not included in tour price).",
      },
    ],
  },
];
export default amsterdamTours;
