import { Tour } from "@/lib/interfaces/services/tours";
export const atlantaTours: Tour[] = [
  {
    title: "Civil Rights Legacy Tour",
    description:
      "Explore Atlanta's pivotal role in the Civil Rights Movement with visits to the Martin Luther King Jr. National Historical Park, Center for Civil and Human Rights, and historically significant locations guided by civil rights scholars.",
    city: "Atlanta",
    country: "USA",
    state: "Georgia",
    region: "Southeast",
    images: [
      "/images/tours/atlanta/mlk-center.jpg",
      "/images/tours/atlanta/civil-rights-center.jpg",
    ],
    duration: "6 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Civil Rights", "History", "Cultural"],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: true,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "historical",
    availableDates: [
      "2024-04-05",
      "2024-04-12",
      "2024-04-19",
      "2024-04-26",
      "2024-05-03",
      "2024-05-10",
      "2024-05-17",
      "2024-05-24",
      "2024-06-07",
      "2024-06-14",
      "2024-06-21",
      "2024-06-28",
      "2024-07-05",
      "2024-07-12",
    ],
    highlights: [
      "Visit the Martin Luther King Jr. National Historical Park including his birthplace and tomb",
      "Explore the Center for Civil and Human Rights with immersive exhibits",
      "Walk the historically significant Auburn Avenue and Sweet Auburn district",
      "Visit Ebenezer Baptist Church where Dr. King preached",
      "Learn from expert civil rights scholars and historians",
    ],
    inclusions: [
      "Professional guide specialized in civil rights history",
      "All entrance fees to museums and historical sites",
      "Transportation between sites in comfortable vehicle",
      "Lunch at a historically significant restaurant",
      "Bottled water and light refreshments",
      "Commemorative booklet with historical information",
    ],
    exclusions: [
      "Hotel pickup and drop-off (available for additional fee)",
      "Gratuities (optional)",
      "Personal expenses and souvenirs",
      "Additional food and beverages not specified",
    ],
    itinerary: [
      "9:00 AM: Meet your guide at the meeting point",
      "9:15 AM: Visit to Martin Luther King Jr. National Historical Park",
      "10:30 AM: Tour of Dr. King's birth home (subject to availability)",
      "11:15 AM: Visit Ebenezer Baptist Church",
      "12:00 PM: Lunch at historic local restaurant",
      "1:30 PM: Guided tour of the Center for Civil and Human Rights",
      "3:00 PM: Walking tour of Auburn Avenue and Sweet Auburn district",
      "4:30 PM: Tour conclusion with Q&A session",
    ],
    cancellationPolicy:
      "Full refund if canceled at least 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
    meetingPoint: {
      address:
        "Martin Luther King Jr. National Historical Park Visitor Center, 450 Auburn Ave NE, Atlanta, GA 30312",
      coordinates: {
        latitude: 33.7564,
        longitude: -84.373,
      },
      instructions:
        "Meet your guide in front of the Martin Luther King Jr. National Historical Park Visitor Center. Your guide will be holding a sign that says 'Civil Rights Legacy Tour'. Please arrive 15 minutes before the tour start time.",
      contactNumber: "+1 404-555-7890",
      contactEmail: "civilrights@paragontrails.com",
    },
    faqs: [
      {
        question: "Is photography allowed at all the sites we visit?",
        answer:
          "Photography is permitted in most areas we visit, but there are some restrictions inside certain historic buildings and museum exhibits. At Dr. King's birth home, flash photography is prohibited to preserve the historic furnishings. At the Center for Civil and Human Rights, photography is limited in certain exhibits out of respect for the sensitive content. Your guide will inform you about specific photography guidelines at each location.",
      },
      {
        question: "How much walking is involved in this tour?",
        answer:
          "This tour involves moderate walking, approximately 2 miles (3.2 km) in total, spread throughout the day with plenty of stops. Most sites have accessible pathways, but some historic areas have uneven surfaces. We maintain a leisurely pace suitable for most fitness levels. If you have mobility concerns, please let us know when booking so we can adjust the route accordingly.",
      },
      {
        question: "Is this tour appropriate for children?",
        answer:
          "Yes, we've designed this tour to be educational and engaging for visitors of all ages, including children. Our guides are skilled at adjusting their presentation to be age-appropriate while still conveying the significance of the Civil Rights Movement. For younger children (under 10), we incorporate more interactive elements and focus on themes of courage, fairness, and equality. The Center for Civil and Human Rights does contain some exhibits that may be intense for very young children.",
      },
      {
        question: "Will we meet any veterans of the Civil Rights Movement?",
        answer:
          "On select tour dates, we arrange for participants to meet with individuals who participated in the Civil Rights Movement or have direct connections to its history. These special guests might include former freedom riders, participants in sit-ins, or relatives of key figures. These opportunities depend on availability and cannot be guaranteed for every tour. When such meetings are scheduled, we'll inform you in advance.",
      },
      {
        question: "What's included in the lunch?",
        answer:
          "Lunch is provided at a historically significant restaurant with connections to the Civil Rights Movement. The meal typically includes Southern specialties such as fried chicken, collard greens, cornbread, and sweet tea, with vegetarian options available upon request. Please inform us of any dietary restrictions when booking so we can make appropriate arrangements.",
      },
    ],
  },
  {
    title: "Atlanta Film & TV Production Tour",
    description:
      "Go behind the scenes of Atlanta's booming film industry with exclusive access to production studios, filming locations from popular shows and movies, and meetings with industry professionals who bring Hollywood to the South.",
    city: "Atlanta",
    country: "USA",
    state: "Georgia",
    region: "Southeast",
    images: [
      "/images/tours/atlanta/film-studio.jpg",
      "/images/tours/atlanta/filming-location.jpg",
    ],
    duration: "5 hours",
    price: "$125",
    rating: 4.7,
    tags: ["Film", "Entertainment", "Behind the Scenes"],
    isHistorical: false,
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
    isArtOrMusic: true,
    tourCategoryId: "cultural",
    availableDates: [
      "2024-04-07",
      "2024-04-14",
      "2024-04-21",
      "2024-04-28",
      "2024-05-05",
      "2024-05-12",
      "2024-05-19",
      "2024-05-26",
      "2024-06-02",
      "2024-06-09",
      "2024-06-16",
      "2024-06-23",
      "2024-06-30",
      "2024-07-07",
    ],
    highlights: [
      "Exclusive access to working film studios (subject to production schedules)",
      "Visit iconic filming locations from popular movies and TV shows",
      "Meet with industry professionals including crew members and set designers",
      "Learn about Georgia's film industry growth and economic impact",
      "Behind-the-scenes insights into movie making and production processes",
    ],
    inclusions: [
      "Professional guide with film industry background",
      "Transportation between filming locations",
      "Studio tour access fees",
      "Lunch at a restaurant frequented by film crews",
      "Film location map of Atlanta",
      "Exclusive film memorabilia souvenir",
    ],
    exclusions: [
      "Hotel pickup and drop-off (available for additional fee)",
      "Gratuities (optional)",
      "Personal expenses and additional souvenirs",
      "Professional photography services",
    ],
    itinerary: [
      "9:30 AM: Meet your guide at the designated location",
      "10:00 AM: Visit to active production studio with guided tour",
      "11:30 AM: Explore outdoor filming locations in Atlanta",
      "1:00 PM: Lunch at a restaurant popular with film crews",
      "2:30 PM: Meet with industry professionals for Q&A session",
      "3:30 PM: Visit additional filming locations and studio facilities",
      "4:30 PM: Tour conclusion with film industry resources",
    ],
    cancellationPolicy:
      "Full refund if canceled at least 72 hours in advance. 50% refund if canceled 48-72 hours in advance. No refund for cancellations less than 48 hours before the scheduled tour.",
    meetingPoint: {
      address: "Atlanta Movie Tours, 327 Nelson St SW, Atlanta, GA 30313",
      coordinates: {
        latitude: 33.7516,
        longitude: -84.3984,
      },
      instructions:
        "Meet your film industry guide at the Atlanta Movie Tours headquarters. Look for the building with film posters in the windows. Your guide will greet you in the lobby. Please arrive 15 minutes before the tour start time.",
      contactNumber: "+1 404-555-8901",
      contactEmail: "filmtour@paragontrails.com",
    },
    faqs: [
      {
        question: "Will we see any celebrities during the tour?",
        answer:
          "While we cannot guarantee celebrity sightings as production schedules are confidential and frequently change, Atlanta is one of the busiest film production cities in the world. Our guides are industry insiders who know where productions are happening, and occasionally our groups do encounter filming in progress or actors on set. However, the focus of our tour is on the filmmaking process, iconic locations, and behind-the-scenes insights rather than celebrity spotting.",
      },
      {
        question: "Which movies and TV shows are featured on the tour?",
        answer:
          "Our tour covers locations from major productions filmed in Atlanta, including Marvel superhero films, The Walking Dead, Stranger Things, Hunger Games, and many others. The specific sites visited may vary based on current access and new additions. We regularly update our routes to include locations from the latest productions, ensuring even repeat visitors discover something new.",
      },
      {
        question: "Is photography allowed during the studio tour?",
        answer:
          "Photography policies vary depending on which studios we visit and whether active filming is in progress. In general, photos are permitted in exterior studio areas but restricted on active soundstages or near current productions. Your guide will clearly explain photography rules at each location. Many sites do allow photos in designated areas, and we ensure ample photo opportunities throughout the tour.",
      },
      {
        question: "Do we need to sign any confidentiality agreements?",
        answer:
          "Yes, when visiting active studios, participants are typically required to sign a brief non-disclosure agreement (NDA) to protect any productions currently filming. This is standard industry practice and helps maintain the security of upcoming releases. Your guide will provide and explain these forms at the appropriate time. The NDA generally restricts sharing specific details or photos of productions in progress.",
      },
      {
        question: "What industry professionals might we meet?",
        answer:
          "Depending on availability, you may meet production designers, location scouts, special effects technicians, costume department staff, or other behind-the-scenes professionals. These meetings provide authentic insights into the filmmaking process from people actively working in Georgia's film industry. The specific professionals available vary for each tour based on production schedules and their availability.",
      },
    ],
  },
  {
    title: "Southern Food & Cocktail Experience",
    description:
      "Savor the diverse flavors of Atlanta's renowned culinary scene, from traditional Southern comfort food to innovative farm-to-table creations, paired with craft cocktails at award-winning establishments.",
    city: "Atlanta",
    country: "USA",
    state: "Georgia",
    region: "Southeast",
    images: [
      "/images/tours/atlanta/southern-cuisine.jpg",
      "/images/tours/atlanta/craft-cocktails.jpg",
    ],
    duration: "4 hours",
    price: "$115",
    rating: 4.8,
    tags: ["Food", "Cocktails", "Southern Cuisine"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: true,
    isWellness: false,
    isLuxury: true,
    isArtOrMusic: false,
    tourCategoryId: "culinary",
    availableDates: [
      "2024-04-06",
      "2024-04-13",
      "2024-04-20",
      "2024-04-27",
      "2024-05-04",
      "2024-05-11",
      "2024-05-18",
      "2024-05-25",
      "2024-06-01",
      "2024-06-08",
      "2024-06-15",
      "2024-06-22",
      "2024-06-29",
      "2024-07-06",
    ],
    highlights: [
      "Tasting of iconic Southern dishes at renowned restaurants",
      "Craft cocktail pairing with each course",
      "Behind-the-scenes kitchen tour at a top restaurant",
      "Meet the chefs and learn about their culinary inspirations",
      "Explore the historic and cultural significance of Southern cuisine",
    ],
    inclusions: [
      "Professional foodie guide",
      "All food and cocktail tastings",
      "Transportation between tasting locations",
      "Gratuities for restaurant staff",
      "Recipe booklet with featured dishes",
      "Exclusive discounts at select restaurants",
    ],
    exclusions: [
      "Hotel pickup and drop-off (available for additional fee)",
      "Additional food and beverages not specified",
      "Personal expenses and souvenirs",
      "Transportation outside the tour itinerary",
    ],
    itinerary: [
      "10:00 AM: Meet your guide at the first restaurant",
      "10:15 AM: Start with a tasting tour of classic Southern breakfast dishes",
      "11:00 AM: Visit to a local market to explore Southern ingredients",
      "11:45 AM: Lunch featuring a selection of Southern favorites",
      "1:00 PM: Craft cocktail tasting at a renowned bar",
      "1:45 PM: Tour concludes at the final tasting location",
    ],
    cancellationPolicy:
      "Full refund if canceled at least 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
    meetingPoint: {
      address: "Ponce City Market, 675 Ponce De Leon Ave NE, Atlanta, GA 30308",
      coordinates: {
        latitude: 33.7718,
        longitude: -84.3665,
      },
      instructions:
        "Meet your culinary guide at the Central Food Hall entrance of Ponce City Market. Your guide will be wearing a chef's coat with the Paragon Trails logo. Please arrive 10 minutes before the tour start time with a good appetite!",
      contactNumber: "+1 404-555-9012",
      contactEmail: "food@paragontrails.com",
    },
    faqs: [
      {
        question: "How much food is served on the tour?",
        answer:
          "The tour includes generous tastings at multiple locations that add up to more than a full meal. You'll sample approximately 8-10 different Southern specialties and 4-5 craft cocktails throughout the experience. We recommend coming hungry and eating a light breakfast or skipping lunch before an afternoon tour. Most guests find they don't need additional meals before or after our food tour.",
      },
      {
        question: "Can you accommodate dietary restrictions?",
        answer:
          "Yes, we can accommodate most dietary needs including vegetarian, gluten-free, and most common allergies with advance notice. Please inform us of any dietary restrictions when booking (at least 48 hours in advance) so we can arrange appropriate alternatives while still providing an authentic Southern culinary experience. Due to the focus on traditional Southern cuisine, vegan options may be more limited but are still available.",
      },
      {
        question: "How much alcohol is served on the tour?",
        answer:
          "The tour includes 4-5 craft cocktail tastings, each approximately one-third the size of a standard drink. This allows you to experience a variety of flavors without excessive alcohol consumption. Non-alcoholic alternatives are available for those who don't drink or prefer not to consume alcohol during the tour. All participants must be 21+ with valid ID to receive alcohol tastings.",
      },
      {
        question: "Will we learn how to make the cocktails?",
        answer:
          "Yes, at one of our stops, a professional mixologist will demonstrate the techniques for crafting a signature Southern cocktail, explaining the ingredients, history, and methods involved. You'll have the opportunity to participate in creating your own version under expert guidance. We also provide recipe cards for all featured cocktails so you can recreate them at home.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "This tour covers approximately one mile of walking spread over 4 hours, with plenty of stops for food and drink. We maintain a leisurely pace suitable for most fitness levels. Most of the walking is indoors or on well-maintained sidewalks, making this tour accessible for most participants. We can accommodate those with mobility concerns with advance notice.",
      },
    ],
  },
  {
    title: "Atlanta BeltLine Art & Nature Walk",
    description:
      "Explore the Atlanta BeltLine, an innovative urban redevelopment project transforming former railway corridors into a network of public parks, multi-use trails and stunning public art installations.",
    city: "Atlanta",
    country: "USA",
    state: "Georgia",
    region: "Southeast",
    images: [
      "/images/tours/atlanta/beltline-art.jpg",
      "/images/tours/atlanta/beltline-trail.jpg",
    ],
    duration: "3 hours",
    price: "$45",
    rating: 4.6,
    tags: ["Urban Art", "Walking", "Outdoors"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: true,
    tourCategoryId: "off-the-beaten-path",
    availableDates: [
      "2024-04-08",
      "2024-04-15",
      "2024-04-22",
      "2024-04-29",
      "2024-05-06",
      "2024-05-13",
      "2024-05-20",
      "2024-05-27",
      "2024-06-03",
      "2024-06-10",
      "2024-06-17",
      "2024-06-24",
      "2024-07-01",
      "2024-07-08",
    ],
    highlights: [
      "Walk along the Eastside Trail with views of the Atlanta skyline",
      "See vibrant murals and street art by local and international artists",
      "Learn about the BeltLine's history, ecology, and community impact",
      "Explore historic neighborhoods and modern developments",
      "Enjoy a leisurely stroll in a pet-friendly environment",
    ],
    inclusions: [
      "Knowledgeable guide with expertise in art and local history",
      "Bottled water and light snacks",
      "Public art map of the BeltLine",
      "Discounts at local art galleries and shops",
      "Access to exclusive online content about the tour",
    ],
    exclusions: [
      "Hotel pickup and drop-off (available for additional fee)",
      "Gratuities (optional)",
      "Personal expenses and souvenirs",
      "Transportation to and from the BeltLine",
    ],
    itinerary: [
      "9:00 AM: Meet your guide at the start of the BeltLine",
      "9:15 AM: Guided walk focusing on the art installations",
      "10:30 AM: Break at a local café with views of the trail",
      "11:00 AM: Continue the tour exploring the natural aspects of the BeltLine",
      "12:00 PM: Tour concludes at a popular BeltLine destination",
    ],
    cancellationPolicy:
      "Full refund if canceled at least 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
    meetingPoint: {
      address:
        "Eastside Trail Entrance, 830 Willoughby Way NE, Atlanta, GA 30312",
      coordinates: {
        latitude: 33.7676,
        longitude: -84.3645,
      },
      instructions:
        "Meet your guide at the Eastside Trail entrance near Krog Street Market. Your guide will be holding a bright blue BeltLine Art & Nature Walk sign. Please arrive 10 minutes early wearing comfortable walking shoes and weather-appropriate clothing.",
      contactNumber: "+1 404-555-0123",
      contactEmail: "beltline@paragontrails.com",
    },
    faqs: [
      {
        question: "How long is the walking route?",
        answer:
          "The walking route covers approximately 2 miles (3.2 km) of the Atlanta BeltLine's Eastside Trail, conducted at a leisurely pace with frequent stops to view and discuss art installations and natural features. The terrain is primarily flat, paved paths suitable for all fitness levels. We take multiple breaks, including a refreshment stop at a local café around the midpoint of the tour.",
      },
      {
        question: "What type of art will we see?",
        answer:
          "The BeltLine features a diverse collection of public art, including large-scale murals, interactive installations, sculptures, and temporary exhibits. The art changes regularly as new pieces are installed and seasonal exhibitions rotate. Our guides stay updated on the latest additions and provide context about the artists, many of whom are local to Atlanta, and the significance of their works within the community.",
      },
      {
        question: "Is the tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and engaging for children, especially those interested in art and the outdoors. We incorporate interactive elements for younger participants, encouraging them to observe and respond to the artworks we encounter. The walking distance is manageable for children, with plenty of stops and opportunities to rest along the way.",
      },
      {
        question: "What's the story behind the Atlanta BeltLine?",
        answer:
          "The Atlanta BeltLine is one of the largest urban redevelopment projects in the United States, transforming 22 miles of historic railway corridors into a network of parks, trails, and transit. Started in the early 2000s based on a thesis project by Georgia Tech student Ryan Gravel, the BeltLine has become a catalyst for economic development, connecting 45 neighborhoods while promoting sustainable transportation, public art, and green space. During the tour, we'll discuss its history, ongoing development, and impact on Atlanta's urban landscape.",
      },
      {
        question: "What neighborhoods will we explore?",
        answer:
          "Our tour primarily explores the vibrant neighborhoods connected by the Eastside Trail, including Inman Park, the Old Fourth Ward, and Poncey-Highland. These historic areas have been revitalized in recent years, with the BeltLine serving as a catalyst for new developments, restaurants, and community spaces. Your guide will highlight the unique characteristics of each neighborhood and point out local landmarks and hidden gems along the way.",
      },
    ],
  },
  {
    title: "Atlanta Hip-Hop Heritage Experience",
    description:
      "Dive into Atlanta's influential hip-hop scene with visits to legendary studios, iconic neighborhoods, and venues that shaped the sound of Southern rap, guided by music industry insiders with personal connections to the scene.",
    city: "Atlanta",
    country: "USA",
    state: "Georgia",
    region: "Southeast",
    images: [
      "/images/tours/atlanta/recording-studio.jpg",
      "/images/tours/atlanta/hip-hop-mural.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Music", "Hip-Hop", "Cultural"],
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: true,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    tourCategoryId: "cultural",
    availableDates: [
      "2024-04-09",
      "2024-04-16",
      "2024-04-23",
      "2024-04-30",
      "2024-05-07",
      "2024-05-14",
      "2024-05-21",
      "2024-05-28",
      "2024-06-04",
      "2024-06-11",
      "2024-06-18",
      "2024-06-25",
      "2024-07-02",
      "2024-07-09",
    ],
    highlights: [
      "Visit to the Hip-Hop Hall of Fame and Museum",
      "Tour of iconic recording studios like Patchwerk and Stankonia",
      "Explore the AUC (Atlanta University Center) and its cultural significance",
      "See famous hip-hop landmarks and graffiti murals",
      "Engage in a Q&A session with a local hip-hop artist or producer",
    ],
    inclusions: [
      "Expert guide with deep roots in Atlanta's hip-hop community",
      "All entrance fees to studios, museums, and landmarks",
      "Transportation between sites in a comfortable vehicle",
      "Lunch at a soul food restaurant",
      "Bottled water and snacks",
      "Exclusive hip-hop memorabilia",
    ],
    exclusions: [
      "Hotel pickup and drop-off (available for additional fee)",
      "Gratuities (optional)",
      "Personal expenses and souvenirs",
      "Additional food and beverages not specified",
    ],
    itinerary: [
      "10:00 AM: Meet your guide at the first studio",
      "10:15 AM: Visit to the Hip-Hop Hall of Fame and Museum",
      "11:00 AM: Tour of iconic recording studios",
      "12:30 PM: Lunch at a local soul food restaurant",
      "1:30 PM: Drive through historic hip-hop neighborhoods",
      "2:00 PM: Visit to graffiti murals and hip-hop landmarks",
      "3:00 PM: Q&A session with a hip-hop artist or producer",
      "4:00 PM: Tour concludes with transportation back to the meeting point",
    ],
    cancellationPolicy:
      "Full refund if canceled at least 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
    meetingPoint: {
      address: "Hip-Hop Hall of Fame, 345 Peters St SW, Atlanta, GA 30313",
      coordinates: {
        latitude: 33.7467,
        longitude: -84.3991,
      },
      instructions:
        "Meet your guide at the entrance to the Hip-Hop Hall of Fame. Your guide will be wearing urban streetwear with a Paragon Trails badge. Please arrive 15 minutes before the tour start time.",
      contactNumber: "+1 404-555-1234",
      contactEmail: "hiphop@paragontrails.com",
    },
    faqs: [
      {
        question: "What makes Atlanta significant in hip-hop history?",
        answer:
          "Atlanta has been pivotal in shaping hip-hop since the 1990s, introducing distinctive sounds like 'Dirty South' and trap music that revolutionized the genre. Home to legendary artists including OutKast, T.I., Ludacris, Future, and Migos, Atlanta's influence extends beyond music to language, fashion, and culture. The city's music scene benefited from supportive radio stations, independent labels, and influential clubs that helped develop Atlanta's unique style and launch countless careers. Our tour explores this rich history and Atlanta's continuing importance in hip-hop evolution.",
      },
      {
        question: "Will we visit active recording studios?",
        answer:
          "Yes, our tour includes visits to working recording studios such as Stankonia (OutKast's studio) and Patchwerk, where countless hit records have been created. Access to certain areas depends on whether recording sessions are in progress. Our industry connections often allow us behind-the-scenes access not available to the general public. We coordinate with studio management to ensure our visits don't disrupt active sessions while still providing an authentic look at where Atlanta's sound is created.",
      },
      {
        question: "Is this tour appropriate for all ages?",
        answer:
          "This tour is most appropriate for adults and teens due to some mature content in the music and history discussed. While we keep the tour educational and informative, hip-hop culture sometimes includes themes and language that may not be suitable for young children. We recommend this experience for ages 13 and up, but parents can use their discretion. Please note that for visits to venues serving alcohol, all participants must be 21+ with valid ID.",
      },
      {
        question: "What neighborhoods will we visit?",
        answer:
          "Our tour explores several Atlanta neighborhoods significant to hip-hop history, including East Point, College Park, and the historically important areas around the Atlanta University Center. These neighborhoods produced many influential artists and shaped the distinctive Atlanta sound. We'll discuss how these communities influenced the music and how hip-hop has in turn impacted these areas, from economic development to cultural identity.",
      },
      {
        question: "What type of transportation is used during the tour?",
        answer:
          "We use a comfortable air-conditioned van to transport guests between locations, as the sites we visit are spread throughout different areas of Atlanta. The van is equipped with a professional sound system where we play relevant music and audio clips to enhance your understanding of Atlanta's hip-hop evolution while traveling between stops. All transportation during the scheduled tour is included in your ticket price.",
      },
    ],
  },
];
export default atlantaTours;
