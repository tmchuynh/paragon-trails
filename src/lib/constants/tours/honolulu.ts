import { Tour } from "@/lib/interfaces/services/tours";

export const honoluluTours: Tour[] = [
  {
    title: "Diamond Head Sunrise Hike & Breakfast",
    description:
      "Start your day with a guided sunrise hike up Diamond Head crater for breathtaking panoramic views of Waikiki and the Pacific Ocean, followed by a gourmet Hawaiian breakfast.",
    images: [
      "/images/tours/honolulu/diamond-head-sunrise.jpg",
      "/images/tours/honolulu/hawaiian-breakfast.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Hiking", "Sunrise", "Food"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Kai Kahele",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How difficult is the hike?",
        answer:
          "The hike is moderately challenging with some steep sections and stairs. It takes about 30-45 minutes to reach the summit at a comfortable pace. Basic fitness is recommended.",
      },
      {
        question: "What time does the tour start?",
        answer:
          "The tour starts approximately 1.5 hours before sunrise to ensure we reach the summit with enough time to secure a prime viewing spot. Start times vary seasonally with the changing sunrise times, ranging from 4:30 AM in summer to 6:00 AM in winter. We'll confirm the exact pickup time when you book.",
      },
      {
        question: "What's included in the breakfast?",
        answer:
          "After the hike, we enjoy a gourmet Hawaiian breakfast featuring fresh local fruits, traditional loco moco (rice topped with a hamburger patty, fried egg, and gravy), Hawaiian sweet bread French toast with coconut syrup, Kona coffee, and fresh tropical juices. Vegetarian and gluten-free options are available with advance notice.",
      },
      {
        question: "What should I bring for the hike?",
        answer:
          "Please bring a water bottle, comfortable closed-toe hiking shoes, a light jacket or sweater (it can be windy at the summit), and a camera for the spectacular views. A small backpack is useful. We provide flashlights for the pre-dawn portion of the hike, but feel free to bring your own if preferred.",
      },
    ],
  },
  {
    title: "Pearl Harbor & USS Arizona Memorial",
    description:
      "Experience a moving journey through history with a guided tour of Pearl Harbor, the USS Arizona Memorial, and other significant WWII sites with historical expert commentary.",
    images: [
      "/images/tours/honolulu/pearl-harbor.jpg",
      "/images/tours/honolulu/uss-arizona-memorial.jpg",
    ],
    duration: "5 hours",
    price: "$105",
    rating: 4.8,
    tags: ["History", "Memorial", "Military"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Commander James Reynolds (Ret.)",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Is photography allowed at the memorial?",
        answer:
          "Photography is permitted at the USS Arizona Memorial, but please be respectful as this is a solemn site and final resting place for many servicemen. Bags are not allowed at Pearl Harbor but secure storage is provided.",
      },
      {
        question: "How much time do we spend at Pearl Harbor?",
        answer:
          "The tour includes approximately 75 minutes aboard the USS Arizona Memorial (including boat transportation), plus 2-3 hours exploring the Pearl Harbor Visitor Center museums, exhibits, and memorials. This provides a comprehensive understanding of the events of December 7, 1941, and their historical significance.",
      },
      {
        question: "Are there any age restrictions or considerations?",
        answer:
          "The tour is appropriate for all ages. For young children, our guides adjust their presentation to be age-appropriate while still educational. We recommend that parents prepare children for the solemn nature of the memorial. The National Park Service offers a Junior Ranger program that engages younger visitors.",
      },
      {
        question: "Does the tour include the USS Missouri or other ships?",
        answer:
          "Our standard tour focuses on the USS Arizona Memorial and Pearl Harbor Visitor Center. For those interested in exploring the USS Missouri Battleship, USS Bowfin Submarine, or Pearl Harbor Aviation Museum, we offer an extended 8-hour tour option for an additional fee that includes these fascinating sites.",
      },
    ],
  },
  {
    title: "Traditional Hawaiian Luau & Cultural Experience",
    description:
      "Immerse yourself in Hawaiian culture at an authentic luau featuring traditional ceremonies, cultural demonstrations, live music, hula dancing, and a lavish feast of Hawaiian specialties including kalua pork prepared in an underground imu oven.",
    images: [
      "/images/tours/honolulu/luau-fire-dancers.jpg",
      "/images/tours/honolulu/hawaiian-feast.jpg",
    ],
    duration: "5 hours",
    price: "$145",
    rating: 4.7,
    tags: ["Cultural", "Food", "Entertainment"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Kekoa Mahoe & Cultural Team",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What makes this luau authentic compared to others?",
        answer:
          "Our luau partners with cultural practitioners who are dedicated to preserving genuine Hawaiian traditions. The experience begins with traditional ceremonies and includes cultural demonstrations of ancient practices like tapa cloth making and poi pounding. The entertainment features authentic chants (oli), traditional hula (not just the tourist version), and music using traditional instruments. Even the food is prepared using traditional methods, including an underground imu oven for the kalua pork.",
      },
      {
        question: "What food is served at the luau?",
        answer:
          "The feast includes traditional Hawaiian dishes like kalua pork (slow-roasted in an underground oven), lomi lomi salmon, poi (taro paste), haupia (coconut pudding), and laulau (meat wrapped in taro leaves), alongside contemporary island favorites and some continental options. Open bar service includes tropical cocktails like Mai Tais and Blue Hawaiis, plus beer, wine, and non-alcoholic options.",
      },
      {
        question: "Is transportation included?",
        answer:
          "Yes, round-trip transportation from Waikiki hotels is included. Our air-conditioned vehicles pick guests up approximately 1 hour before the luau begins. For those with their own transportation, detailed directions and free parking information are provided.",
      },
      {
        question: "What if it rains?",
        answer:
          "The luau has both indoor and outdoor components. During inclement weather, the dining and performance portions move under cover while maintaining the magical Hawaiian atmosphere. The imu ceremony typically proceeds regardless of weather, as this is part of the authentic experience.",
      },
    ],
  },
  {
    title: "North Shore Oahu Adventure Tour",
    description:
      "Experience the legendary North Shore of Oahu with visits to famous surf spots, hidden beaches, charming towns, and tropical fruit stands. Watch surfers tackle massive waves (seasonally), spot sea turtles, and sample local specialties like shave ice and garlic shrimp.",
    images: [
      "/images/tours/honolulu/north-shore-surfing.jpg",
      "/images/tours/honolulu/turtle-beach.jpg",
    ],
    duration: "8 hours",
    price: "$125",
    rating: 4.8,
    tags: ["North Shore", "Surfing", "Beaches"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Malia Wong",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "When is the best time to see big wave surfing?",
        answer:
          "The legendary big waves of the North Shore typically occur from November through April, with the largest swells usually in December and January when waves can reach 20-30 feet. During summer months (May-October), the ocean is generally calmer and better suited for swimming and snorkeling. Our tour adjusts activities based on seasonal conditions to ensure the best experience year-round.",
      },
      {
        question: "Will we see sea turtles on this tour?",
        answer:
          "While wildlife sightings can never be guaranteed, our tour stops at Laniakea Beach (also known as 'Turtle Beach'), where Hawaiian green sea turtles (honu) frequently come ashore to rest. Our success rate for turtle sightings is approximately 90%. We maintain respectful distances and follow conservation guidelines to protect these endangered animals.",
      },
      {
        question: "Is lunch included in the tour?",
        answer:
          "Yes, the tour includes a stop for lunch at famous North Shore food trucks where you can choose between Hawaiian garlic shrimp, fresh poke bowls, or other local specialties (vegetarian options available). We also stop at tropical fruit stands and shave ice shops for optional treats throughout the day.",
      },
      {
        question: "Will we have time for swimming?",
        answer:
          "Yes, depending on ocean conditions, we schedule time for swimming at beaches known for safer conditions. During summer months, we often include snorkeling at Shark's Cove (despite its name, there are rarely sharks in this protected cove). We provide beach towels, but please bring your swimwear, sunscreen, and a change of clothes.",
      },
    ],
  },
  {
    title: "Hanauma Bay Snorkeling & Marine Conservation",
    description:
      "Discover the underwater paradise of Hanauma Bay Nature Preserve, a protected marine sanctuary teeming with colorful fish and coral reef formations. Includes professional snorkeling instruction, marine biology education, and transportation from Waikiki.",
    images: [
      "/images/tours/honolulu/hanauma-bay-aerial.jpg",
      "/images/tours/honolulu/coral-reef-snorkeling.jpg",
    ],
    duration: "5 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Snorkeling", "Marine Life", "Nature"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Emma Nakamura, Marine Biologist",
    tourCategoryId: "wildlife",
    faqs: [
      {
        question: "Do I need to know how to swim?",
        answer:
          "Basic swimming ability is recommended for the best experience, but we welcome non-swimmers too. We provide flotation devices and our guides offer close assistance for those less comfortable in water. The bay has shallow areas where you can stand while still observing marine life. Complete beginners can opt for our 'Intro to Snorkeling' mini-lesson at the start of the tour.",
      },
      {
        question: "Is snorkeling equipment provided?",
        answer:
          "Yes, we provide high-quality snorkeling gear including mask, snorkel, fins, and flotation devices. We thoroughly sanitize all equipment between uses. If you prefer to use your own equipment, you're welcome to bring it. Prescription masks are available upon request (please note your prescription when booking).",
      },
      {
        question: "What marine life might we see?",
        answer:
          "Hanauma Bay is home to over 400 species of fish, many unique to Hawaiian waters. Common sightings include parrotfish, butterfly fish, surgeon fish, triggerfish, and the state fish of Hawaii – the humuhumunukunukuapua'a! You may also spot sea turtles, eels, and various coral formations. Our marine biologist guide helps identify species and explains their ecological importance.",
      },
      {
        question: "Is Hanauma Bay always open to visitors?",
        answer:
          "Hanauma Bay is closed to the public every Tuesday to give the reef ecosystem a rest day. The preserve also limits daily visitors, which is why our tour includes guaranteed reserved entry (no waiting in the public line). Note that while rare, the bay occasionally closes due to water quality issues or high surf conditions; in such cases, we substitute an alternate snorkeling location.",
      },
    ],
  },
  {
    title: "Historic Honolulu & Iolani Palace Tour",
    description:
      "Explore Hawaii's royal heritage with an expert-guided tour of downtown Honolulu's historic district, featuring the only royal palace on US soil. Visit Iolani Palace, King Kamehameha Statue, Mission Houses, and other significant sites that tell the story of Hawaii's kingdom era.",
    images: [
      "/images/tours/honolulu/iolani-palace.jpg",
      "/images/tours/honolulu/kamehameha-statue.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.8,
    tags: ["History", "Hawaiian Royalty", "Architecture"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Dr. Leilani Kapuni, Hawaiian Historian",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "What will we see inside Iolani Palace?",
        answer:
          "Our docent-led palace tour includes both floors of this magnificent restoration. You'll see the Grand Hall, State Dining Room, Blue Room, Throne Room, and royal apartments including the room where Queen Liliuokalani was imprisoned following the overthrow of the Hawaiian Kingdom. The palace features original furnishings, royal artifacts, and Hawaiian crown jewels. You'll be amazed by the palace's advanced technology—it had electricity and telephones before the White House!",
      },
      {
        question: "How much walking is involved?",
        answer:
          "This tour involves approximately 1.5 miles of walking at a leisurely pace on relatively flat terrain through downtown Honolulu. Inside Iolani Palace, you'll need to climb one flight of stairs to see the second floor (no elevator available as this is a historic building). Comfortable walking shoes are recommended. For those with mobility concerns, please contact us to discuss accommodation options.",
      },
      {
        question: "Is this tour appropriate for children?",
        answer:
          "Yes, this tour is designed to engage visitors of all ages, including children. Our historians are skilled at presenting information in an accessible way that captivates younger listeners with stories of princes and princesses, royal customs, and interesting historical events. Children under 5 are free with a paying adult, though we ask parents to ensure children are respectful of the historic settings.",
      },
      {
        question: "What makes Hawaiian royal history unique?",
        answer:
          "Hawaii's monarchy was distinct from other royal systems as it evolved from ancient chiefdoms into a constitutional monarchy that was recognized internationally as a sovereign nation. This tour explores how Hawaiian royalty balanced traditional culture with Western influences, their diplomatic relations with world powers, and the complex circumstances surrounding the 1893 overthrow that led to eventual U.S. annexation. We present multiple perspectives on this sensitive chapter of Hawaiian history.",
      },
    ],
  },
  {
    title: "Farm-to-Table Hawaiian Cuisine & Cooking Class",
    description:
      "Discover Hawaii's diverse culinary traditions at a scenic farm with mountain views. Harvest fresh ingredients, learn traditional cooking methods, and prepare signature Hawaiian dishes under the guidance of a local chef before enjoying your creations at an open-air feast.",
    images: [
      "/images/tours/honolulu/farm-harvest.jpg",
      "/images/tours/honolulu/cooking-class.jpg",
    ],
    duration: "6 hours",
    price: "$175",
    rating: 4.9,
    tags: ["Cooking", "Farm", "Food"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Chef Keoni Mahelona",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes will we learn to prepare?",
        answer:
          "The cooking class focuses on both traditional Hawaiian dishes and modern local cuisine. You'll learn to prepare poke (seasoned raw fish), lomi lomi salmon, chicken long rice, taro-based dishes like poi, and haupia (coconut pudding). The menu incorporates elements of the diverse ethnic traditions that have influenced Hawaiian food, including Japanese, Portuguese, Chinese, Filipino, and Korean culinary techniques. All recipes are provided to take home.",
      },
      {
        question: "Do I need cooking experience?",
        answer:
          "No prior cooking experience is necessary! Our classes are designed for all skill levels, from beginners to experienced home cooks. Chef Keoni provides step-by-step guidance and shares techniques and cultural insights that make this accessible and enjoyable for everyone. The hands-on format ensures you'll gain practical skills while having fun.",
      },
      {
        question: "Where is the farm located?",
        answer:
          "The farm is situated in the scenic Waimanalo area on the windward (eastern) side of Oahu, about a 30-minute drive from Waikiki. This lush agricultural region sits between the Ko'olau Mountains and the turquoise waters of Waimanalo Bay, offering spectacular views throughout your experience. Round-trip transportation from Waikiki hotels is included in the tour price.",
      },
      {
        question: "Can you accommodate dietary restrictions?",
        answer:
          "Yes, we can accommodate most dietary needs including vegetarian, vegan, gluten-free, and most common allergies with advance notice. Hawaiian cuisine naturally includes many vegetable and fruit-based dishes, making these adaptations authentic rather than afterthoughts. Please let us know your specific requirements when booking so the chef can prepare accordingly.",
      },
    ],
  },
  {
    title: "Oahu Photography Tour: Sunrise to Sunset",
    description:
      "Capture Hawaii's diverse beauty through your camera lens with guidance from a professional photographer. Visit scenic locations around the island during optimal lighting conditions, from dramatic sunrise at Lanikai to sunset at Ko Olina lagoons.",
    images: [
      "/images/tours/honolulu/photography-sunrise.jpg",
      "/images/tours/honolulu/photography-waterfall.jpg",
    ],
    duration: "10 hours",
    price: "$195",
    rating: 4.7,
    tags: ["Photography", "Scenic", "Full-Day"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Michael Chen, Professional Photographer",
    tourCategoryId: "photography",
    faqs: [
      {
        question: "What photography skill level is this tour designed for?",
        answer:
          "This tour accommodates all skill levels from smartphone photographers to professional DSLR users. Our photographer guide provides tailored instruction based on your equipment and experience. Beginners receive help with basic settings and composition, while advanced photographers can explore specialized techniques like long exposures, HDR, and advanced composition for landscape and cultural photography.",
      },
      {
        question: "What locations will we visit?",
        answer:
          "The itinerary includes some of Oahu's most photogenic locations, strategically timed for optimal lighting: sunrise at Lanikai Beach with the Mokulua Islands, morning light at Byodo-In Temple, midday at tropical botanical gardens, afternoon at bamboo forest and waterfall locations, and sunset at Ko Olina lagoons or North Shore beaches (seasonal). We maintain flexibility to adapt to weather conditions and lighting.",
      },
      {
        question: "What camera equipment should I bring?",
        answer:
          "Bring whatever camera you're comfortable with—DSLR, mirrorless, point-and-shoot, or even smartphone. For those with interchangeable lens cameras, we recommend a wide-angle lens for landscapes (16-35mm range), medium zoom for versatility, and tripod for sunrise/sunset shots. Polarizing filters are useful for tropical scenes. Don't forget extra batteries, memory cards, and rain protection. We can provide specific recommendations when you book.",
      },
      {
        question: "How strenuous is this tour?",
        answer:
          "While not extremely demanding, this is a full day with early start (about 5:00 AM) that includes moderate hiking to some locations. The longest hike is approximately 1.5 miles round trip on occasionally muddy terrain. We carry photography equipment, so being able to walk with your gear is necessary. The pace is relaxed with plenty of stops for photography, but participants should be prepared for a full day of activity.",
      },
    ],
  },
  {
    title: "Hawaiian Cultural Immersion & Volunteer Experience",
    description:
      "Connect deeply with Hawaiian culture through hands-on learning and giving back to the land. Join cultural practitioners at an ancient fishpond restoration project, learn traditional land stewardship practices, and participate in activities like lei making, hula, and traditional food preparation.",
    images: [
      "/images/tours/honolulu/fishpond-restoration.jpg",
      "/images/tours/honolulu/lei-making.jpg",
    ],
    duration: "6 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Cultural", "Volunteer", "Educational"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Kumu Kawika Winter",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "What is the volunteer work involved?",
        answer:
          "The volunteer portion typically involves 1-2 hours of light physical activity such as removing invasive plants, helping rebuild traditional rock walls at an ancient fishpond, planting native species, or harvesting taro in a lo'i (traditional wetland farm). The work is suitable for most fitness levels, and our cultural practitioners explain the significance of each activity, connecting the physical work to Hawaiian cultural values and historical practices.",
      },
      {
        question: "Is this appropriate for children?",
        answer:
          "Yes, this is an excellent family experience! Children ages 5 and up particularly enjoy the hands-on nature of the activities. The cultural practitioners are skilled at engaging young people with age-appropriate tasks and explanations. Many families report this as their children's favorite activity in Hawaii because it offers authentic interaction beyond typical tourist experiences.",
      },
      {
        question: "What should I wear?",
        answer:
          "Please wear clothes that can get dirty, closed-toe shoes that can get wet or muddy, and bring a change of clothes. We recommend a hat, sunscreen, insect repellent, and a refillable water bottle. We provide work gloves, tools, and any specialized equipment needed for the day's activities.",
      },
      {
        question: "How does this tour support the local community?",
        answer:
          "This tour operates through direct partnerships with Hawaiian cultural non-profits and educational initiatives. A significant portion of your tour fee directly supports these organizations' restoration and cultural preservation efforts. Additionally, by participating in actual conservation work, you contribute tangibly to projects that are revitalizing traditional practices and restoring ecosystems. This model represents sustainable tourism that benefits both visitors and the host culture.",
      },
    ],
  },
  {
    title: "Circle Island Adventure: Oahu Complete Tour",
    description:
      "Experience the ultimate Oahu overview with this comprehensive island tour visiting scenic lookouts, famous beaches, historical sites, and local towns. From Diamond Head to the North Shore, Haleiwa to Kualoa Ranch, this tour showcases the island's diverse landscapes and cultural highlights.",
    images: [
      "/images/tours/honolulu/circle-island-scenic.jpg",
      "/images/tours/honolulu/dole-plantation.jpg",
    ],
    duration: "9 hours",
    price: "$135",
    rating: 4.8,
    tags: ["Full Island", "Sightseeing", "Highlights"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "David Kalama",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What are the main stops on this tour?",
        answer:
          "The route includes Diamond Head Lookout, Halona Blowhole, Makapu'u Point, Byodo-In Temple, Kualoa Regional Park with Chinaman's Hat views, North Shore beaches including Pipeline or Sunset Beach, historic Haleiwa Town, Dole Plantation, and central Oahu pineapple country. We maintain flexibility to adjust for weather, traffic, and seasonal conditions to maximize your experience. Each stop offers photo opportunities and insightful commentary from your guide.",
      },
      {
        question: "How much time do we spend at each location?",
        answer:
          "We typically spend 15-30 minutes at scenic stops like lookouts and beaches, and longer periods (45-60 minutes) at attraction sites like Byodo-In Temple and Dole Plantation. The North Shore stop includes approximately 90 minutes for lunch and exploration in Haleiwa. This balanced schedule allows you to experience the full diversity of Oahu without feeling rushed at key locations.",
      },
      {
        question: "Is lunch included?",
        answer:
          "Lunch is not included in the tour price, but we stop in the historic surf town of Haleiwa where you can choose from various options including famous garlic shrimp trucks, local plate lunch spots, acai bowl cafes, or renowned shave ice shops. Your guide can provide recommendations based on your preferences and budget, with options typically ranging from $12-25 per person.",
      },
      {
        question:
          "What makes this tour different from other circle island tours?",
        answer:
          "Our tour is distinguished by smaller groups (maximum 14 guests), creating a more personalized experience. Our guides are certified Hawaii Ambassadors with extensive knowledge of Hawaiian history, culture, and ecology beyond basic facts. We prioritize timing our visits to avoid peak crowds at popular locations, include a few lesser-known spots not on standard tours, and provide bottled water and local snacks throughout the day.",
      },
    ],
  },
  {
    title: "Oahu Sunset Cruise & Stargazing",
    description:
      "End your day with a magical sunset cruise along Oahu's coastline, complete with live Hawaiian music, complimentary drinks, and stargazing under the clear island skies. Experience the beauty of the Pacific Ocean as the sun sets over the horizon.",
    images: [
      "/images/tours/honolulu/sunset-cruise.jpg",
      "/images/tours/honolulu/stargazing.jpg",
    ],
    duration: "3 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Sunset", "Cruise", "Stargazing"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Captain Lani Kealoha",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "What type of boat is used for the cruise?",
        answer:
          "We use a comfortable 50-foot catamaran designed for smooth sailing and excellent views. It features shaded seating areas, restrooms, and a spacious deck for unobstructed sunset and stargazing views. The boat is equipped with safety gear and meets all US Coast Guard regulations.",
      },
      {
        question: "Is food available on the cruise?",
        answer:
          "While the cruise does not include a full meal, we offer complimentary light snacks such as tropical fruit platters, chips, and local treats. A selection of beverages is provided, including soft drinks, juices, and a variety of alcoholic options (beer, wine, and tropical cocktails). Guests are welcome to bring their own snacks or picnic items if desired.",
      },
    ],
  },
];

export default honoluluTours;
