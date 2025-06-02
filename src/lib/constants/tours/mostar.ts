import { Tour } from "@/lib/interfaces/services/tours";

export const mostarTours: Tour[] = [
  {
    title: "Bridges of Mostar: Ottoman Heritage Tour",
    description:
      "Explore Mostar's architectural treasures and complex history with a local historian, focusing on the iconic Stari Most (Old Bridge) and the city's remarkable recovery from the 1990s conflict.",
    city: "Mostar",
    country: "Bosnia and Herzegovina",
    region: "Herzegovina-Neretva Canton",
    images: [
      "/images/tours/mostar/stari-most.jpg",
      "/images/tours/mostar/ottoman-quarter.jpg",
    ],
    duration: "3 hours",
    price: "$40",
    rating: 4.9,
    tags: ["Historical", "Architecture", "Cultural"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "historical",
    
    meetingPoint: {
      address: "Spanish Square (Španski trg), Mostar",
      coordinates: {
        latitude: 43.3423,
        longitude: 17.8081,
      },
      instructions: "Meet at the fountain in Spanish Square. Your guide will be holding a blue umbrella with 'Mostar Tours' written on it.",
      contactNumber: "+387 63 123 456",
      contactEmail: "mostar@paragontrails.com",
    },
    
    availableDates: [
      "2023-12-15", "2023-12-16", "2023-12-17", "2023-12-22", "2023-12-23", 
      "2024-01-05", "2024-01-06", "2024-01-12", "2024-01-13", "2024-01-19", "2024-01-20", "2024-01-26", "2024-01-27",
      "2024-02-02", "2024-02-03", "2024-02-09", "2024-02-10", "2024-02-16", "2024-02-17", "2024-02-23", "2024-02-24",
    ],
    
    highlights: [
      "Walk across the UNESCO-listed Stari Most (Old Bridge) with its dramatic history",
      "Explore the Ottoman quarter with its authentic Turkish houses and workshops",
      "Visit Koski Mehmed Pasha Mosque with minaret climb for panoramic city views",
      "Learn about Mostar's complex history and remarkable post-war recovery",
      "Meet local craftspeople continuing centuries-old traditions",
    ],
    
    inclusions: [
      "Professional local guide with historical expertise",
      "Entrance fees to Koski Mehmed Pasha Mosque and minaret",
      "Traditional Bosnian coffee experience",
      "Local craft demonstration",
      "Small group size (maximum 12 participants)",
      "Map of historical Mostar",
    ],
    
    exclusions: [
      "Hotel pickup and drop-off",
      "Food and additional beverages beyond included coffee",
      "Optional gratuities",
      "Personal purchases from craft shops",
    ],
    
    itinerary: [
      "10:00 - Meet at Spanish Square for introduction to Mostar's history",
      "10:15 - Walk to viewpoint for first glimpse of Stari Most",
      "10:30 - Cross the historic bridge while learning about its destruction and reconstruction",
      "10:45 - Explore Ottoman quarter with traditional stone houses",
      "11:15 - Visit to Koski Mehmed Pasha Mosque with optional minaret climb",
      "11:45 - Coffee break with traditional Bosnian coffee preparation",
      "12:15 - Visit copper craftsman workshop with demonstration",
      "12:45 - Walk through old bazaar with time for shopping",
      "13:00 - Tour concludes at Kriva Ćuprija (Crooked Bridge)",
    ],
    
    faqs: [
      {
        question: "Will we see bridge divers during the tour?",
        answer: "The famous bridge divers of Mostar typically perform during summer months when the river is at the right level and there are sufficient tourists (they collect donations before jumping). While we cannot guarantee a dive during your tour, your guide will explain this traditional practice dating back centuries and share stories about the divers' club. If divers are preparing to jump during our tour, we'll certainly pause to watch!"
      },
      {
        question: "Does this tour discuss the 1990s conflict?",
        answer: "Yes, our guides provide balanced and sensitive insights into the 1990s conflict that severely damaged Mostar, including the destruction of the Old Bridge. We explain both the historical context and the remarkable international effort to rebuild the bridge and heal community divisions. Our guides come from diverse backgrounds and focus on reconciliation while honoring the complex history."
      },
      {
        question: "Is the minaret climb mandatory?",
        answer: "The minaret climb is optional and requires ascending a narrow spiral staircase (approximately 90 steps). Those who prefer not to climb can enjoy the mosque's beautiful courtyard garden and interior. The panoramic view from the top is spectacular but alternative viewpoints are included in the tour for those who skip the climb."
      },
    ],
  },
  
  {
    title: "Neretva Valley: Wine, Waterfalls & Ancient Sites",
    description:
      "Journey beyond Mostar to discover the natural and historical treasures of the Neretva Valley. Visit ancient Roman ruins, sample wines from family vineyards, and enjoy the spectacular Kravice Waterfalls.",
    city: "Mostar",
    country: "Bosnia and Herzegovina",
    region: "Herzegovina-Neretva Canton",
    images: [
      "/images/tours/mostar/kravice-waterfalls.jpg",
      "/images/tours/mostar/herzegovina-vineyard.jpg",
    ],
    duration: "8 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Nature", "Wine", "History"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "off-the-beaten-path",
    
    meetingPoint: {
      address: "Mostar Bus Station, Sjeverni logor, Mostar",
      coordinates: {
        latitude: 43.3534,
        longitude: 17.8092,
      },
      instructions: "Meet in front of the main entrance to Mostar Bus Station. Your guide will be waiting in a vehicle marked with 'Neretva Valley Tours'.",
      contactNumber: "+387 63 123 457",
      contactEmail: "neretva@paragontrails.com",
    },
    
    availableDates: [
      "2023-12-15", "2023-12-20", "2023-12-27", 
      "2024-01-03", "2024-01-10", "2024-01-17", "2024-01-24", "2024-01-31",
      "2024-02-07", "2024-02-14", "2024-02-21", "2024-02-28",
    ],
    
    highlights: [
      "Explore the ancient Roman ruins of Mogorjelo with 4th-century mosaics",
      "Visit family-owned vineyards producing the native Žilavka and Blatina wines",
      "Swim beneath the magnificent Kravice Waterfalls (summer months)",
      "Discover the medieval necropolis at Radimlja with mysterious stećci tombstones",
      "Taste traditional Herzegovina cuisine at a local konoba restaurant",
    ],
    
    inclusions: [
      "Transportation in comfortable air-conditioned vehicle",
      "Professional English-speaking guide",
      "Wine tasting at premier Herzegovina winery",
      "Traditional lunch with local specialties",
      "Entrance fees to all sites (Roman villa, waterfalls, necropolis)",
      "Bottled water throughout the day",
      "Hotel pickup and drop-off within Mostar city limits",
    ],
    
    exclusions: [
      "Additional food and beverages beyond included lunch and tasting",
      "Optional gratuities",
      "Swimming equipment (bring your own if desired)",
      "Personal expenses",
    ],
    
    itinerary: [
      "09:00 - Pickup from your Mostar accommodation",
      "09:30 - Visit ancient Roman villa rustica at Mogorjelo",
      "10:30 - Drive through scenic Neretva Valley",
      "11:00 - Visit to family winery with tasting of local varieties",
      "12:30 - Traditional lunch at authentic konoba restaurant",
      "14:00 - Explore the medieval stećci tombstones at Radimlja necropolis",
      "15:00 - Visit spectacular Kravice Waterfalls with free time for swimming (seasonal)",
      "16:30 - Return journey to Mostar with photo stops",
      "17:30 - Drop-off at your accommodation",
    ],
    
    faqs: [
      {
        question: "Can we swim at Kravice Waterfalls?",
        answer: "Swimming is possible at Kravice Waterfalls from approximately May through September when water temperatures are comfortable. The pool beneath the falls reaches depths of 5-6 meters in places but has shallower areas suitable for less confident swimmers. Changing facilities are available at the site. During winter and early spring, water levels are much higher making swimming unsafe, but the falls are spectacularly powerful during these periods."
      },
      {
        question: "What kinds of wine will we taste?",
        answer: "Herzegovina is known for its distinctive native grape varieties, particularly Žilavka (white) and Blatina (red). Our tasting typically includes 4-5 wines, focusing on these indigenous varieties as well as international grapes that grow well in the region's Mediterranean climate. The winery we visit has been family-operated for generations and offers informative tastings that explain the unique terroir and winemaking traditions of Herzegovina."
      },
      {
        question: "What is included in the traditional lunch?",
        answer: "Lunch features authentic Herzegovina cuisine at a family-run konoba (traditional restaurant). Typical dishes include slow-roasted lamb under a bell (sač), homemade cheeses, locally produced prosciutto (pršut), river trout, seasonal vegetables, and homemade bread. Vegetarian options are available with advance notice. The meal is served family-style with multiple dishes to share, accompanied by local wine."
      },
    ],
  },
  
  {
    title: "War & Peace: Mostar's Recent History Tour",
    description:
      "Gain deeper understanding of the 1990s conflict that devastated Mostar through visits to key sites and personal accounts from locals who lived through the siege, while exploring efforts toward reconciliation and rebuilding.",
    city: "Mostar",
    country: "Bosnia and Herzegovina",
    region: "Herzegovina-Neretva Canton",
    images: [
      "/images/tours/mostar/war-museum.jpg",
      "/images/tours/mostar/sniper-tower.jpg",
    ],
    duration: "4 hours",
    price: "$45",
    rating: 4.7,
    tags: ["History", "Educational", "Cultural"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "historical",
    
    meetingPoint: {
      address: "Musala Bridge, Mostar",
      coordinates: {
        latitude: 43.3416,
        longitude: 17.8078,
      },
      instructions: "Meet at the eastern end of Musala Bridge, near Hotel Mostar. Your guide will be holding a white peace flag.",
      contactNumber: "+387 63 123 458",
      contactEmail: "warpeace@paragontrails.com",
    },
    
    availableDates: [
      "2023-12-18", "2023-12-25", 
      "2024-01-08", "2024-01-15", "2024-01-22", "2024-01-29",
      "2024-02-05", "2024-02-12", "2024-02-19", "2024-02-26",
    ],
    
    highlights: [
      "Visit the War Photo Exhibition with powerful images from wartime photojournalists",
      "Explore the former frontline along Bulevar street with visible war damage",
      "See the preserved ruins of the 'Sniper Tower' (former bank building)",
      "Learn about life during the 978-day siege from those who experienced it",
      "Discuss post-war reconciliation efforts and current community relations",
    ],
    
    inclusions: [
      "Local guide with personal experience of the conflict",
      "Entrance to War Photo Exhibition",
      "Visit to memorial sites not found in guidebooks",
      "Coffee or drink with local resident who lived through the siege",
      "Map marking key war sites and peace monuments",
      "Donation to local peacebuilding organization",
    ],
    
    exclusions: [
      "Hotel pickup and drop-off",
      "Lunch (optional extension available)",
      "Additional beverages beyond included drink",
      "Personal expenses",
    ],
    
    itinerary: [
      "14:00 - Meet at Musala Bridge for introduction and historical context",
      "14:15 - Walk to former frontline along Bulevar street",
      "14:45 - Visit symbolic 'Sniper Tower' with explanation of siege tactics",
      "15:15 - Tour of War Photo Exhibition with eyewitness commentary",
      "16:00 - Coffee break with local resident sharing personal experiences",
      "16:45 - Visit to peace monuments and reconciliation projects",
      "17:30 - Discussion of current community relations and future prospects",
      "18:00 - Tour conclusion with recommendations for further learning",
    ],
    
    faqs: [
      {
        question: "Is this tour politically biased?",
        answer: "We strive to present a balanced view of the conflict from multiple perspectives. Our guides include people from diverse backgrounds who focus on historical facts while acknowledging the complex ethnic and political dimensions. The tour emphasizes human experiences and reconciliation rather than assigning blame. We welcome respectful questions and discussion but avoid divisive political commentary."
      },
      {
        question: "Is this tour appropriate for children?",
        answer: "Due to the serious subject matter and potentially disturbing imagery, we recommend this tour for ages 16 and older. Parents should use discretion as some war photographs and discussions may be upsetting. For families with younger children, we offer a modified 'Building Bridges' tour that focuses more on reconciliation efforts and positive community projects."
      },
      {
        question: "Will this be an emotionally difficult tour?",
        answer: "This tour deals with difficult subject matter including siege, civilian suffering, and ethnic conflict. While not graphic or sensationalized, the personal stories and images can be emotionally impactful. Our guides are sensitive to participants' reactions and strike a respectful balance between honest historical account and appropriate emotional context. The tour ends with hopeful examples of reconciliation and rebuilding."
      },
    ],
  },
];

export default mostarTours;
