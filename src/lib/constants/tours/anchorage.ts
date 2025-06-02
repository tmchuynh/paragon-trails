import { Tour } from "@/lib/interfaces/services/tours";
export const anchorageTours: Tour[] = [
  {
    title: "Wildlife & Glacier Flight Safari",
    description:
      "Soar over Alaska's breathtaking wilderness in a floatplane to spot bears, moose, and wolves in their natural habitat, landing on a remote glacial lake for a wilderness champagne picnic.",
    images: [
      "https://images.unsplash.com/photo-1663429050871-bd0a8b41888b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxvYXRwbGFuZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1661897189445-e91ed35f8e89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmxvYXRwbGFuZXxlbnwwfHwwfHx8MA%3D%3D",
    ],
    duration: "6 hours",
    price: "$495",
    rating: 5.0,
    tags: ["Flightseeing", "Glacier"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    isPopular: true,
    isAdventure: true,
    isCultural: false,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: true,
    isArtOrMusic: false,
    tourCategoryId: "adventure",
    availableDates: [
      "2024-05-15",
      "2024-05-22",
      "2024-06-05",
      "2024-06-19",
      "2024-07-03",
      "2024-07-17",
      "2024-08-07",
      "2024-08-21",
    ],
    meetingPoint: {
      address: "Lake Hood Seaplane Base, 4101 Aircraft Dr, Anchorage, AK 99502",
      coordinates: {
        latitude: 61.1808,
        longitude: -149.9704,
      },
      instructions:
        "Meet at the main terminal building of Lake Hood Seaplane Base. Look for our company sign with the eagle logo. Please arrive 30 minutes before departure for check-in and safety briefing.",
      contactNumber: "+1 907-555-0189",
      contactEmail: "info@alaskaflightsafari.com",
    },
    highlights: [
      "Soar over pristine wilderness in a floatplane",
      "Land on a remote glacial lake",
      "Spot bears, moose, and other wildlife in their natural habitat",
      "Enjoy a champagne picnic in a wilderness setting",
      "Photography opportunities with spectacular mountain backdrops",
    ],
    inclusions: [
      "Round-trip floatplane flight",
      "Professional pilot/wildlife guide",
      "Landing fees and permits",
      "Wilderness champagne picnic with local delicacies",
      "Wildlife spotting guide and binoculars",
      "Safety equipment",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Gratuities",
      "Personal travel insurance",
      "Professional photography services",
    ],
    itinerary: [
      "8:00 AM: Meet at Lake Hood Seaplane Base for safety briefing",
      "8:30 AM: Takeoff and fly over Chugach Mountains",
      "9:30 AM: Wildlife spotting from the air over Denali foothills",
      "10:30 AM: Landing on remote glacial lake",
      "11:00 AM: Wilderness champagne picnic and guided nature walk",
      "12:30 PM: Return flight with glacier viewing",
      "2:00 PM: Landing at Lake Hood and tour conclusion",
    ],
    cancellationPolicy:
      "Full refund if canceled 72 hours before the scheduled departure. 50% refund if canceled between 24-72 hours before departure. No refund if canceled less than 24 hours before departure.",
    faqs: [
      {
        question: "What are our chances of seeing wildlife?",
        answer:
          "While wildlife sightings can never be guaranteed, our success rate exceeds 90% for bear sightings and 95% for moose during summer months. Our skilled pilots know the best areas and flying routes to maximize wildlife viewing opportunities.",
      },
      {
        question: "Is the flight safe for children?",
        answer:
          "Yes, our planes are equipped with safety gear and child-friendly seating. Children ages 2 and up can fly, and we provide life vests for all passengers. We also offer special child rates for ages 2-12.",
      },
      {
        question: "What should we wear for the flight?",
        answer:
          "Dress in layers, as temperatures can vary significantly at altitude. We recommend a warm jacket, hat, gloves, and sturdy shoes. Sunglasses are also advisable to protect against glare from the snow and water.",
      },
      {
        question: "Can we bring cameras or drones?",
        answer:
          "Yes, cameras are encouraged! Our pilots will make stops for photo opportunities. However, drones are not allowed due to safety regulations and wildlife disturbance concerns. Please ensure your camera gear is securely fastened during the flight.",
      },
      {
        question: "What happens if there's bad weather?",
        answer:
          "Safety is our top priority. If weather conditions are deemed unsafe for flying, we'll work with you to reschedule your tour or provide a full refund. Our pilots make weather-based decisions daily and will keep you informed about any potential changes to your scheduled tour.",
      },
    ],
  },
  {
    title: "Alaskan Culinary Foraging & Feast",
    description:
      "Explore Chugach State Park with a local chef to gather wild Alaskan ingredients, then enjoy a gourmet wilderness cooking class featuring freshly caught salmon and foraged delicacies.",
    images: [
      "https://images.unsplash.com/photo-1602166659170-92818fa8af19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yYWdpbmd8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1694557307170-0277eec8c2e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9yYWdpbmd8ZW58MHx8MHx8fDA%3D",
    ],
    duration: "7 hours",
    price: "$235",
    rating: 4.9,
    tags: ["Foraging", "Cooking", "Wilderness"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: true,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "culinary",
    availableDates: [
      "2024-05-10",
      "2024-05-24",
      "2024-06-07",
      "2024-06-21",
      "2024-07-05",
      "2024-07-19",
      "2024-08-02",
      "2024-08-16",
      "2024-09-06",
    ],
    meetingPoint: {
      address:
        "Alaska Botanical Garden, 4601 Campbell Airstrip Rd, Anchorage, AK 99507",
      coordinates: {
        latitude: 61.1935,
        longitude: -149.7835,
      },
      instructions:
        "Meet at the main entrance to the Alaska Botanical Garden. Your guide will be waiting with a 'Culinary Foraging' sign. Please wear appropriate outdoor clothing and sturdy footwear.",
      contactNumber: "+1 907-555-0127",
      contactEmail: "foraging@alaskaculinary.com",
    },
    highlights: [
      "Forage for wild Alaskan ingredients with a local chef",
      "Learn about edible plants and sustainable harvesting",
      "Master wilderness cooking techniques",
      "Prepare and enjoy a gourmet feast featuring freshly caught salmon",
      "Experience Chugach State Park's natural beauty",
    ],
    inclusions: [
      "Professional chef guide",
      "Transportation to/from Chugach State Park",
      "All foraging equipment and tools",
      "Wilderness cooking class materials",
      "Gourmet lunch featuring foraged ingredients",
      "Recipes to take home",
    ],
    exclusions: [
      "Alcoholic beverages",
      "Personal foraging containers (available for purchase)",
      "Gratuities",
      "Hotel pickup and drop-off",
    ],
    itinerary: [
      "9:00 AM: Meet guide and depart for Chugach State Park",
      "10:00 AM: Guided foraging hike with identification of edible plants",
      "12:00 PM: Wild food preparation lesson",
      "1:00 PM: Wilderness cooking class using foraged ingredients",
      "2:30 PM: Enjoy the gourmet feast you've prepared",
      "3:30 PM: Return to Anchorage with recipes and leftovers",
    ],
    cancellationPolicy:
      "Full refund available if canceled 48 hours before the scheduled activity. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled activity.",
    faqs: [
      {
        question: "What types of things might we forage?",
        answer:
          "Depending on the season, we may gather wild berries (blueberries, salmonberries, crowberries), spruce tips, fireweed, fiddlehead ferns, mushrooms, and various edible flowers and herbs. Your guide is an expert in identifying safe and delicious wild Alaskan foods.",
      },
      {
        question: "Do we need any special equipment?",
        answer:
          "No special equipment is required. We provide all necessary foraging tools, cooking gear, and safety equipment. Just bring comfortable clothing, sturdy shoes, and a sense of adventure!",
      },
      {
        question: "Is this tour suitable for vegetarians or vegans?",
        answer:
          "Yes! While we focus on local seafood, we can easily adapt the menu to accommodate vegetarian or vegan diets using foraged plants and mushrooms. Please inform us of dietary restrictions when booking.",
      },
      {
        question: "Is this tour suitable for people with limited mobility?",
        answer:
          "This tour involves walking on uneven terrain and forest paths for approximately 2 miles total. While we move at a leisurely pace with frequent stops, it may be challenging for those with mobility issues. Please contact us in advance if you have concerns about the physical requirements so we can discuss possible accommodations.",
      },
      {
        question: "What is the cancellation policy for this tour?",
        answer:
          "We offer full refunds for cancellations made at least 48 hours before the scheduled activity. Cancellations between 24-48 hours receive a 50% refund, and unfortunately, we cannot offer refunds for cancellations less than 24 hours before the tour begins.",
      },
    ],
  },
  {
    title: "Northern Lights Photography Expedition",
    description:
      "Venture into the Alaskan wilderness away from city lights with a professional photographer to capture the mesmerizing aurora borealis. Learn night photography techniques while witnessing one of nature's most spectacular light shows.",
    images: [
      "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Tm9ydGhlcm4lMjBMaWdodHN8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1675805015838-7f8b70536f0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Tm9ydGhlcm4lMjBMaWdodHN8ZW58MHx8MHx8fDA%3D",
    ],
    duration: "6 hours",
    price: "$275",
    rating: 4.8,
    tags: ["Northern Lights", "Photography", "Night Tour"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    isPopular: true,
    isAdventure: true,
    isCultural: false,
    isCulinary: false,
    isSpiritual: true,
    isNightlife: true,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    tourCategoryId: "art-and-music",
    availableDates: [
      "2024-09-15",
      "2024-09-22",
      "2024-10-05",
      "2024-10-19",
      "2024-11-10",
      "2024-11-24",
      "2024-12-14",
      "2025-01-18",
      "2025-02-15",
      "2025-03-10",
    ],
    meetingPoint: {
      address:
        "Aurora Photography Center, 420 Northern Lights Blvd, Anchorage, AK 99503",
      coordinates: {
        latitude: 61.195,
        longitude: -149.8914,
      },
      instructions:
        "Meet at our photography center located on Northern Lights Boulevard. We'll conduct an equipment check and briefing before departing for the viewing location. Dress warmly in layers, and bring any camera equipment you wish to use.",
      contactNumber: "+1 907-555-0231",
      contactEmail: "aurora@northernlightsphotos.com",
    },
    highlights: [
      "Photograph the magical Northern Lights away from city light pollution",
      "Learn night photography techniques from a professional",
      "Visit prime aurora viewing locations",
      "Enjoy hot beverages under the dancing lights",
      "Take home stunning aurora photographs",
    ],
    inclusions: [
      "Professional photography guide",
      "Transportation to/from viewing sites",
      "Use of tripods and camera equipment if needed",
      "Hot beverages and snacks",
      "Photography tips and post-processing advice",
      "Digital copies of guide's photos",
    ],
    exclusions: [
      "Personal camera equipment (available for rent)",
      "Meal service",
      "Hotel pickup and drop-off",
      "Specialized filters or camera accessories",
    ],
    itinerary: [
      "08:00 PM: Meet guide for equipment check and photography tutorial",
      "09:00 PM: Depart for prime aurora viewing location",
      "10:00 PM: Set up equipment at first viewing site",
      "10:30 PM - 01:00 AM: Aurora photography with expert guidance",
      "01:30 AM: Return to Anchorage",
      "02:00 AM: Tour conclusion",
    ],
    cancellationPolicy:
      "Weather-dependent activity. Full refund if aurora activity is low or weather prevents viewing. Rescheduling available at no additional cost. 48-hour cancellation notice required for full refund for non-weather related cancellations.",
    faqs: [
      {
        question: "What are the chances of seeing the Northern Lights?",
        answer:
          "During peak season (September-March), we have approximately 70% success rate. We monitor aurora forecasts closely and only run the tour when conditions are favorable. If no aurora activity is visible during your tour, we offer a 50% discount on a second attempt.",
      },
      {
        question: "Do I need to bring my own camera?",
        answer:
          "While we recommend bringing your own DSLR or mirrorless camera for the best results, we provide high-quality cameras and tripods for those who don't have their own. Our guide will also assist with camera settings and techniques.",
      },
      {
        question: "What should I wear for this tour?",
        answer:
          "Dress warmly in layers, including thermal base layers, insulated jackets, hats, gloves, and waterproof boots. Temperatures can drop significantly at night, especially in remote areas. We provide hand warmers and hot drinks to keep you comfortable.",
      },
      {
        question: "Can I bring my smartphone instead of a camera?",
        answer:
          "Yes, many modern smartphones have excellent night photography capabilities. Our guides can provide tips for smartphone aurora photography, though results won't be as detailed as those from DSLR cameras. We recommend bringing a small tripod for your phone if you plan to use it as your primary camera.",
      },
      {
        question: "Is there a minimum age requirement?",
        answer:
          "Due to the late hours and cold conditions, we recommend this tour for participants aged 12 and above. Children must be accompanied by an adult. Please keep in mind that the tour runs very late into the night, returning around 2:00 AM.",
      },
    ],
  },
  {
    title: "Historic Anchorage Walking Tour",
    description:
      "Walk through time as you explore Anchorage's rich history, from its indigenous origins to the 1964 earthquake that shaped the modern city. Visit historical landmarks and hear fascinating stories of gold rushes, railroad development, and frontier spirit.",
    images: [
      "/images/tours/anchorage/historic-downtown.jpg",
      "/images/tours/anchorage/earthquake-park.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.7,
    tags: ["History", "Walking Tour", "Architecture"],
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
    tourCategoryId: "historical",
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
    ],
    meetingPoint: {
      address:
        "Alaska Native Heritage Center, 8800 Heritage Center Dr, Anchorage, AK 99504",
      coordinates: {
        latitude: 61.2306,
        longitude: -149.7719,
      },
      instructions:
        "Meet in front of the main entrance of the Alaska Native Heritage Center. Your guide will be holding a sign reading 'Historic Anchorage Tour'. Parking is available on-site.",
      contactNumber: "+1 907-555-0467",
      contactEmail: "tours@historicanchorage.com",
    },
    highlights: [
      "Explore Anchorage's historic sites and learn their stories",
      "Visit the Alaska Native Heritage Center",
      "See the effects of the 1964 earthquake",
      "Discover the city's gold rush history",
      "Enjoy scenic views of Anchorage and the surrounding mountains",
    ],
    inclusions: [
      "Professional guide",
      "Transportation from/to downtown Anchorage",
      "Entry fees to all sites",
      "Bottled water and snacks",
      "Complimentary souvenir booklet",
    ],
    exclusions: [
      "Lunch (available for purchase)",
      "Gratuities",
      "Hotel pickup and drop-off",
    ],
    itinerary: [
      "1:00 PM: Meet at the Alaska Native Heritage Center",
      "1:15 PM: Guided tour of the Heritage Center",
      "2:30 PM: Depart for downtown historic sites",
      "3:00 PM: Visit the Anchorage Museum at Rasmuson Center",
      "4:30 PM: Walk through historic downtown Anchorage",
      "5:30 PM: Tour concludes at a downtown location",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours before the tour. 50% refund if canceled 24-48 hours before the tour. No refund for cancellations less than 24 hours before the tour.",
    faqs: [
      {
        question: "How much walking is involved?",
        answer:
          "This tour covers approximately 2 miles at a leisurely pace with frequent stops. The terrain is mostly flat with paved sidewalks, though some portions may involve slight inclines. We recommend comfortable walking shoes and weather-appropriate clothing.",
      },
      {
        question: "Are there restroom breaks during the tour?",
        answer:
          "Yes, we include a restroom break at a local café halfway through the tour. You can also purchase refreshments if desired.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Absolutely! We welcome families and provide engaging stories and activities to keep children entertained. Children under 12 are free with a paying adult.",
      },
      {
        question: "Can we take photos during the tour?",
        answer:
          "Yes, photography is encouraged! Our guide will point out the best spots for photos along the route.",
      },
      {
        question: "Will we be visiting any museums or attractions?",
        answer:
          "Yes, the tour includes entry to the Alaska Native Heritage Center and the Anchorage Museum at Rasmuson Center. Both locations offer fascinating insights into the history and culture of Alaska, with exhibits and artifacts that tell the story of the region's diverse peoples.",
      },
    ],
  },
  {
    title: "Iditarod Dog Sledding Experience",
    description:
      "Join an Iditarod veteran and their champion sled dogs for an authentic dog sledding adventure through snowy Alaskan wilderness. Learn mushing techniques, the history of this traditional transportation method, and bond with these incredible working dogs.",
    images: [
      "/images/tours/anchorage/dog-sledding.jpg",
      "/images/tours/anchorage/husky-team.jpg",
    ],
    duration: "5 hours",
    price: "$325",
    rating: 4.9,
    tags: ["Dog Sledding", "Winter", "Adventure"],
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: true,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "adventure",
    availableDates: [
      "2024-12-01",
      "2024-12-15",
      "2025-01-05",
      "2025-01-19",
      "2025-02-02",
      "2025-02-16",
      "2025-03-01",
      "2025-03-15",
    ],
    meetingPoint: {
      address:
        "Iditarod Headquarters, 2100 S Knik Goose Bay Rd, Wasilla, AK 99654",
      coordinates: {
        latitude: 61.5375,
        longitude: -149.9545,
      },
      instructions:
        "Meet at the Iditarod Headquarters in Wasilla. Transportation from downtown Anchorage is provided, departing from the Visit Anchorage Log Cabin at 546 W 4th Ave. Please arrive 15 minutes early for check-in.",
      contactNumber: "+1 907-555-0389",
      contactEmail: "mush@iditarodexperience.com",
    },
    highlights: [
      "Experience the thrill of dog sledding with Iditarod champions",
      "Learn from an experienced musher about the sport and its history",
      "Enjoy the stunning winter landscapes of Alaska",
      "Take part in driving the sled and caring for the dogs",
      "Warm up with hot drinks and snacks in a cozy cabin",
    ],
    inclusions: [
      "Transportation from/to Anchorage",
      "Professional Iditarod musher guide",
      "All necessary gear: boots, jackets, gloves, hats",
      "Hot drinks and snacks",
      "Souvenir photos",
    ],
    exclusions: [
      "Gratuities",
      "Personal items and additional snacks",
      "Hotel pickup and drop-off",
    ],
    itinerary: [
      "8:00 AM: Depart Anchorage for dog sledding location",
      "10:00 AM: Arrive and meet your dog team",
      "10:30 AM: Safety briefing and mushing lesson",
      "11:00 AM: Begin your dog sledding adventure",
      "1:00 PM: Return from the trail and warm up",
      "1:30 PM: Enjoy a hot drink and snack",
      "2:00 PM: Depart back to Anchorage",
      "4:00 PM: Arrive in Anchorage, tour concludes",
    ],
    cancellationPolicy:
      "Full refund if canceled 7 days before the tour. 50% refund if canceled 3-6 days before the tour. No refund for cancellations less than 3 days before the tour.",
    faqs: [
      {
        question: "Do I get to drive the sled myself?",
        answer:
          "Yes! After a comprehensive safety briefing and basic training, each participant gets the opportunity to mush their own dog team on a specially designed trail under the supervision of our experienced guides. The dogs know the trails well, making this a safe yet exhilarating experience even for beginners.",
      },
      {
        question: "What should I wear for dog sledding?",
        answer:
          "Dress warmly in layers, including thermal base layers, insulated jackets, hats, gloves, and waterproof boots. We provide additional gear like blankets and goggles to keep you comfortable during the ride.",
      },
      {
        question: "Can children participate in this tour?",
        answer:
          "Yes! Children ages 5 and up can ride along as passengers. For younger children, we can arrange a special sled designed for family rides. Please inform us of children's ages when booking.",
      },
      {
        question: "Is there a weight limit for participants?",
        answer:
          "For the safety of our dogs, we have a weight limit of 250 pounds (113 kg) per person for driving your own sled. Participants exceeding this limit can still enjoy the experience as passengers in a guide-driven sled. Please let us know in advance if you have any concerns.",
      },
      {
        question: "Will we learn about the history of the Iditarod race?",
        answer:
          "Absolutely! Your guide is an Iditarod veteran who will share personal stories from the famous 1,000-mile race across Alaska. You'll learn about the race's history, legendary mushers and dogs, and the importance of dog sledding in Alaska's history and modern culture.",
      },
    ],
  },
  {
    title: "Denali Wilderness Day Adventure",
    description:
      "Experience the majesty of Denali National Park on this full-day excursion from Anchorage. Travel along the scenic Alaska Railroad, then explore the park's wilderness with a naturalist guide, spotting wildlife and learning about this unique ecosystem.",
    images: [
      "/images/tours/anchorage/denali-vista.jpg",
      "/images/tours/anchorage/denali-wildlife.jpg",
    ],
    duration: "11 hours",
    price: "$375",
    rating: 4.9,
    tags: ["Denali", "National Park", "Wildlife"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    isPopular: true,
    isAdventure: true,
    isCultural: false,
    isCulinary: false,
    isSpiritual: true,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "adventure",
    availableDates: [
      "2024-05-20",
      "2024-05-27",
      "2024-06-10",
      "2024-06-24",
      "2024-07-08",
      "2024-07-22",
      "2024-08-05",
      "2024-08-19",
    ],
    meetingPoint: {
      address: "Alaska Railroad Depot, 411 W 1st Ave, Anchorage, AK 99501",
      coordinates: {
        latitude: 61.2219,
        longitude: -149.8908,
      },
      instructions:
        "Meet at the Alaska Railroad Depot in downtown Anchorage at 5:30 AM for check-in. Please bring your confirmation email, ID, and dress appropriately for variable weather conditions in Denali.",
      contactNumber: "+1 907-555-0543",
      contactEmail: "expeditions@denaliadventures.com",
    },
    highlights: [
      "Scenic train ride on the Alaska Railroad",
      "Guided tour in Denali National Park",
      "Wildlife viewing: moose, bears, wolves, and more",
      "Learn about the park's ecology and history",
      "Breathtaking views of Denali and the Alaska Range",
    ],
    inclusions: [
      "Round-trip train tickets from Anchorage to Denali",
      "Full-day guided tour in Denali National Park",
      "Lunch at a park lodge",
      "Use of binoculars and spotting scopes",
      "National Park entrance fees",
    ],
    exclusions: [
      "Gratuities",
      "Personal expenses and additional snacks",
      "Hotel pickup and drop-off",
    ],
    itinerary: [
      "6:00 AM: Depart Anchorage by train",
      "2:00 PM: Arrive at Denali National Park",
      "2:30 PM: Guided bus tour of the park",
      "6:00 PM: Dinner at a park lodge",
      "7:00 PM: Free time to explore or relax",
      "8:00 PM: Return bus to the train station",
      "9:00 PM: Depart Denali for Anchorage",
      "5:00 AM: Arrive back in Anchorage, tour concludes",
    ],
    cancellationPolicy:
      "Full refund if canceled 14 days before the tour. 50% refund if canceled 7-13 days before the tour. No refund for cancellations less than 7 days before the tour.",
    faqs: [
      {
        question: "What wildlife might we see?",
        answer:
          "Denali is home to the 'Big Five': grizzly bears, wolves, moose, caribou, and Dall sheep. While wildlife sightings vary by season and luck, our expert guides know the best viewing areas. You'll also likely spot smaller mammals like foxes and marmots, plus numerous bird species including eagles and ptarmigan.",
      },
      {
        question: "How long is the train ride to Denali?",
        answer:
          "The scenic train ride from Anchorage to Denali takes approximately 8 hours each way, with stunning views of mountains, rivers, and wildlife along the route. We provide comfortable seating, meals, and narration by knowledgeable guides during the journey.",
      },
      {
        question: "What should I bring for this tour?",
        answer:
          "Dress in layers for variable weather conditions. Bring a camera, binoculars for wildlife viewing, a refillable water bottle, and any personal items you may need for a full day outdoors. We provide lunch and snacks.",
      },
      {
        question: "How far in advance should I book this tour?",
        answer:
          "We recommend booking at least 3-4 weeks in advance during peak season (June-August) as the train tickets often sell out. For May and September visits, 2 weeks advance booking is usually sufficient. Last-minute bookings may be possible but cannot be guaranteed.",
      },
      {
        question: "Will we actually see Denali (Mt. McKinley)?",
        answer:
          "Denali is notoriously shy, with the mountain fully visible only about 30% of the time due to cloud cover. However, even if the peak is obscured, the park's stunning landscapes and wildlife viewing opportunities make the trip incredibly worthwhile. We'll always try to find the best viewpoints based on daily conditions.",
      },
    ],
  },
  {
    title: "Native Alaskan Cultural Heritage Tour",
    description:
      "Immerse yourself in Alaska's indigenous cultures with visits to the Alaska Native Heritage Center. Meet native artists, witness traditional dancing and storytelling, and learn about the customs and challenges of Alaska's first peoples.",
    images: [
      "/images/tours/anchorage/native-heritage-center.jpg",
      "/images/tours/anchorage/indigenous-art.jpg",
    ],
    duration: "4 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Indigenous Culture", "Art", "Education"],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: true,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    tourCategoryId: "cultural",
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
    ],
    meetingPoint: {
      address:
        "Alaska Native Heritage Center, 8800 Heritage Center Dr, Anchorage, AK 99504",
      coordinates: {
        latitude: 61.2306,
        longitude: -149.7719,
      },
      instructions:
        "Meet at the visitor information desk inside the main entrance of the Alaska Native Heritage Center. Your guide will be wearing a blue vest with the center's logo. Please arrive 15 minutes before the tour start time.",
      contactNumber: "+1 907-555-0287",
      contactEmail: "heritage@alaskanativetours.com",
    },
    highlights: [
      "Learn about Alaska Native cultures and histories",
      "Visit the Alaska Native Heritage Center",
      "Experience traditional Native dancing and storytelling",
      "See and purchase authentic Native art and crafts",
      "Engage with Native artists and community members",
    ],
    inclusions: [
      "Guided tour of the Alaska Native Heritage Center",
      "Transportation from/to Anchorage",
      "Entry fees to all sites",
      "Cultural demonstration fees",
      "Complimentary souvenir booklet",
    ],
    exclusions: [
      "Lunch (available for purchase)",
      "Gratuities",
      "Hotel pickup and drop-off",
    ],
    itinerary: [
      "9:00 AM: Depart Anchorage for the Alaska Native Heritage Center",
      "10:00 AM: Guided tour of the Heritage Center",
      "11:30 AM: Attend a cultural performance",
      "12:30 PM: Lunch break (on your own)",
      "1:30 PM: Visit local Native art galleries",
      "3:00 PM: Return to Anchorage",
      "4:00 PM: Tour concludes in Anchorage",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours before the tour. 50% refund if canceled 24-48 hours before the tour. No refund for cancellations less than 24 hours before the tour.",
    faqs: [
      {
        question: "Is photography allowed?",
        answer:
          "Photography is permitted in most areas, but there may be specific ceremonies or artifacts where photos are not allowed out of cultural respect. Your guide will clearly indicate these moments. When photographing people, especially elders or during cultural demonstrations, please ask permission first as a sign of respect.",
      },
      {
        question: "Are there any age restrictions for this tour?",
        answer:
          "No, this tour is suitable for all ages. We encourage families to participate and learn together. Children will find the stories and demonstrations engaging, and we can provide special activities for younger guests.",
      },
      {
        question: "What should we wear for this tour?",
        answer:
          "Dress comfortably for a mix of indoor and outdoor activities. We recommend wearing layers, as temperatures can vary. Comfortable walking shoes are essential, as some areas involve light walking. If visiting during colder months, a warm jacket and hat are advisable.",
      },
      {
        question:
          "Will we have the opportunity to purchase authentic Native Alaskan art?",
        answer:
          "Yes, the tour includes visits to authentic Native art galleries where you can purchase items directly from indigenous artisans. All items for sale meet the standards of the Silver Hand Program, guaranteeing they are handcrafted by Alaska Native artists. These make meaningful souvenirs with cultural significance.",
      },
      {
        question:
          "Will we learn about all Alaska Native cultures or just one specific group?",
        answer:
          "The tour provides information about all major Alaska Native cultural groups, including Athabascan, Yup'ik, Cup'ik, Inupiaq, St. Lawrence Island Yupik, Unangax̂, Sugpiaq (Alutiiq), Eyak, Haida, Tsimshian, and Tlingit peoples. You'll learn about their unique traditions, survival techniques, art forms, and modern challenges.",
      },
    ],
  },
  {
    title: "Family Ice Fishing Adventure",
    description:
      "Bundle up for a fun-filled day of ice fishing on a frozen Alaskan lake. Learn to drill ice holes, set up fishing gear, and hopefully catch Arctic char, trout or salmon. Enjoy a lakeside cookout of your fresh catch prepared by your guide.",
    images: [
      "/images/tours/anchorage/ice-fishing.jpg",
      "/images/tours/anchorage/winter-lake.jpg",
    ],
    duration: "6 hours",
    price: "$195",
    rating: 4.7,
    tags: ["Ice Fishing", "Winter", "Family Fun"],
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: true,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "adventure",
    availableDates: [
      "2025-01-10",
      "2025-01-24",
      "2025-02-07",
      "2025-02-21",
      "2025-03-07",
      "2025-03-21",
    ],
    meetingPoint: {
      address: "Alaska Wild Fish Tours, 333 W 4th Ave, Anchorage, AK 99501",
      coordinates: {
        latitude: 61.218,
        longitude: -149.8901,
      },
      instructions:
        "Meet at our downtown office on 4th Avenue. Look for the building with the large fish mural. We'll provide transportation to the ice fishing location. Arrive 15 minutes early to get fitted for any necessary gear.",
      contactNumber: "+1 907-555-0624",
      contactEmail: "fish@alaskawildtours.com",
    },
    highlights: [
      "Experience the thrill of ice fishing on a frozen lake",
      "Learn from an expert guide about ice fishing techniques",
      "Enjoy a scenic winter landscape",
      "Cook and taste your catch of the day",
      "Warm up with hot drinks by the fire",
    ],
    inclusions: [
      "All necessary ice fishing equipment",
      "Warm clothing and boots (if needed)",
      "Hot drinks and snacks",
      "Transportation from/to Anchorage",
      "Fishing license and permits",
    ],
    exclusions: [
      "Gratuities",
      "Personal items and additional snacks",
      "Hotel pickup and drop-off",
    ],
    itinerary: [
      "8:00 AM: Depart Anchorage for the fishing location",
      "10:00 AM: Arrive at the fishing location and set up",
      "10:30 AM: Begin ice fishing with guidance from your instructor",
      "12:30 PM: Break for a hot lunch and drink",
      "1:00 PM: Continue fishing or explore the area",
      "3:00 PM: Pack up and depart from the fishing location",
      "5:00 PM: Arrive back in Anchorage, tour concludes",
    ],
    cancellationPolicy:
      "Full refund if canceled 7 days before the tour. 50% refund if canceled 3-6 days before the tour. No refund for cancellations less than 3 days before the tour.",
    faqs: [
      {
        question: "Do we need to bring our own fishing equipment?",
        answer:
          "No, all fishing equipment is provided, including ice augers, fishing rods, bait, warm shelters, and ice scoops. We even provide hand and foot warmers! You should dress warmly in layers and bring sunglasses (the ice glare can be bright), but all technical equipment is included.",
      },
      {
        question: "Is this tour suitable for young children?",
        answer:
          "Yes! We welcome families with children ages 5 and up. Our guides are experienced in working with kids and will ensure a safe, fun experience for all ages. Children under 12 fish for free with a paying adult.",
      },
      {
        question: "What should we wear for ice fishing?",
        answer:
          "Dress warmly in layers, including thermal base layers, insulated jackets, hats, gloves, and waterproof boots. We provide heated shelters to keep you comfortable while fishing.",
      },
      {
        question: "What type of fish might we catch?",
        answer:
          "During winter months, we typically catch Arctic char, rainbow trout, and landlocked salmon. Occasionally, we also catch northern pike and burbot. All fishing is catch-and-release unless you specifically want to keep your catch for the included lakeside cookout.",
      },
      {
        question: "How cold does it get during the ice fishing activity?",
        answer:
          "Temperatures can range from 0°F to 20°F (-18°C to -7°C) during winter months. However, we provide heated ice shelters that maintain comfortable temperatures, and you can warm up any time. With our provided cold-weather gear and frequent breaks for hot drinks, most participants remain surprisingly comfortable.",
      },
    ],
  },
  {
    title: "Luxury Wilderness Retreat & Spa",
    description:
      "Escape to an exclusive wilderness lodge accessible only by seaplane for a day of ultimate relaxation and indulgence. Enjoy hot stone therapy using Alaskan river rocks, a cedar sauna with glacier views, and gourmet dining featuring local ingredients.",
    images: [
      "/images/tours/anchorage/wilderness-lodge.jpg",
      "/images/tours/anchorage/mountain-spa.jpg",
    ],
    duration: "10 hours",
    price: "$895",
    rating: 5.0,
    tags: ["Luxury", "Spa", "Wilderness"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    isPopular: true,
    isAdventure: false,
    isCultural: false,
    isCulinary: true,
    isSpiritual: true,
    isNightlife: false,
    isWellness: true,
    isLuxury: true,
    isArtOrMusic: false,
    tourCategoryId: "luxury",
    availableDates: [
      "2024-06-01",
      "2024-06-15",
      "2024-07-01",
      "2024-07-15",
      "2024-08-01",
      "2024-08-15",
    ],
    meetingPoint: {
      address: "Lakefront Seaplane Base, 4800 Spenard Rd, Anchorage, AK 99517",
      coordinates: {
        latitude: 61.1781,
        longitude: -149.9438,
      },
      instructions:
        "Meet at the Lakefront Seaplane Terminal's private lounge. Valet parking is available. Please check in at the concierge desk upon arrival where you'll be offered a welcome beverage before your departure briefing.",
      contactNumber: "+1 907-555-0861",
      contactEmail: "concierge@alaskawildernessretreat.com",
    },
    highlights: [
      "Relax at a luxury wilderness lodge",
      "Enjoy a scenic seaplane flight",
      "Indulge in a hot stone massage and spa treatments",
      "Savor gourmet meals with local ingredients",
      "Experience the beauty of Alaska's wilderness",
    ],
    inclusions: [
      "Round-trip seaplane transportation",
      "Full-day access to the wilderness lodge",
      "Hot stone massage and spa treatment",
      "Gourmet lunch and dinner",
      "Use of sauna, steam room, and relaxation areas",
    ],
    exclusions: [
      "Alcoholic beverages",
      "Gratuities",
      "Personal expenses",
      "Hotel pickup and drop-off",
    ],
    itinerary: [
      "8:00 AM: Depart Anchorage by seaplane",
      "9:00 AM: Arrive at the wilderness lodge",
      "9:30 AM: Welcome and orientation",
      "10:00 AM: Hot stone massage and spa treatments",
      "12:00 PM: Gourmet lunch at the lodge",
      "1:00 PM: Free time for hiking, kayaking, or relaxing",
      "3:00 PM: Afternoon tea and snacks",
      "4:00 PM: Scenic seaplane tour of the area",
      "6:00 PM: Dinner featuring local ingredients",
      "8:00 PM: Return flight to Anchorage",
      "9:00 PM: Arrive in Anchorage, tour concludes",
    ],
    cancellationPolicy:
      "Full refund if canceled 72 hours before the scheduled departure. 50% refund if canceled between 24-72 hours before departure. No refund if canceled less than 24 hours before departure.",
    faqs: [
      {
        question: "What spa treatments are included?",
        answer:
          "The package includes a 60-minute massage using heated Alaskan river stones and locally sourced botanical oils, followed by a private cedar sauna session and glacial plunge pool access. Additional treatments like facials or extended massages can be arranged for an additional fee when booking.",
      },
      {
        question: "Is transportation included?",
        answer:
          "Yes, round-trip seaplane transportation from Anchorage to the lodge is included in the tour price. The scenic flight offers stunning views of glaciers, mountains, and pristine wilderness.",
      },
      {
        question: "What should I wear for the spa day?",
        answer:
          "We provide plush robes and slippers for your comfort at the lodge. Please bring a swimsuit for the plunge pool and sauna, and wear comfortable clothing for the flight. Outdoor gear is recommended if you wish to explore the surrounding wilderness trails.",
      },
      {
        question: "Can we book this tour for a special occasion?",
        answer:
          "Absolutely! We can arrange special touches like champagne upon arrival, personalized spa treatments, or private dining experiences. Please let us know when booking so we can tailor the experience to your celebration.",
      },
    ],
  },
];
export default anchorageTours;
