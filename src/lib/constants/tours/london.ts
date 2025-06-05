import { Tour } from "@/lib/interfaces/services/tours";

export const londonTours: Tour[] = [
  {
    title: "Tower of London & Crown Jewels Tour",
    description:
      "Explore the iconic Tower of London with an expert Yeoman Warder (Beefeater) guide to discover royal history, infamous prisoners, and the dazzling Crown Jewels collection.",
    city: "London",
    country: "United Kingdom",
    region: "England",
    images: [
      "/images/tours/london/tower-of-london.jpg",
      "/images/tours/london/crown-jewels.jpg",
    ],
    duration: "3 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Historical", "Royal", "UNESCO"],
    meetingPoint: {
      address: "Tower Hill, London EC3N 4AB",
      coordinates: {
        latitude: 51.5098,
        longitude: -0.0766,
      },
      instructions:
        "Meet at the Tower of London Welcome Centre by the main entrance. Your guide will be holding a blue 'London Historical Tours' sign.",
      contactNumber: "+44 20 7123 4567",
      contactEmail: "bookings@londonhistoricaltours.com",
    },
    highlights: [
      "Skip-the-line access to the Tower of London",
      "See the magnificent Crown Jewels collection including the Imperial State Crown",
      "Guided tour with a genuine Yeoman Warder in traditional uniform",
      "Explore the White Tower, medieval palace, and infamous prison chambers",
      "Learn about the Tower's 900+ years of history and royal scandals",
    ],
    inclusions: [
      "Skip-the-line entrance ticket to the Tower of London",
      "Professional historian guide",
      "Yeoman Warder (Beefeater) guided segment",
      "Crown Jewels viewing with priority access",
      "Small group size (maximum 15 people)",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Food and beverages",
      "Gratuities (optional)",
      "Audio guide (as you'll have a live guide)",
      "Access to special exhibitions not included in general admission",
    ],
    itinerary: [
      "9:30 AM - Meet at the Tower of London Welcome Centre",
      "9:45 AM - Skip-the-line entrance and introduction",
      "10:00 AM - Join Yeoman Warder tour of the Tower grounds",
      "10:45 AM - Visit to the White Tower and medieval palace",
      "11:30 AM - Priority access to view the Crown Jewels collection",
      "12:00 PM - Free time to explore the Tower at your own pace",
      "12:30 PM - Tour conclusion with recommendations for nearby lunch options",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours before tour. No refund for cancellations less than 24 hours before scheduled tour.",
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How much time will we spend at the Crown Jewels?",
        answer:
          "The Crown Jewels segment typically lasts 30-45 minutes. With our priority access, you'll avoid the long queues that can form during busy periods. Note that the viewing area has a moving walkway to keep visitors flowing past the collection, but you can ride it multiple times if you wish to see items again.",
      },
      {
        question: "Is photography allowed inside the Tower of London?",
        answer:
          "Photography is permitted in most areas of the Tower, but strictly prohibited in the Crown Jewels house. Your guide will clearly indicate where photos are not allowed. Flash photography and tripods are not permitted anywhere inside the Tower.",
      },
      {
        question: "How much walking is involved in this tour?",
        answer:
          "This tour involves approximately 1.5 miles (2.4 km) of walking on mostly flat terrain, with some cobblestones and steps. There are several places to sit and rest throughout the Tower complex. Comfortable walking shoes are recommended.",
      },
    ],
  },
  {
    title: "Westminster Abbey & Changing of the Guard",
    description:
      "Experience London's royal heritage with a guided tour of magnificent Westminster Abbey, followed by the iconic Changing of the Guard ceremony at Buckingham Palace.",
    city: "London",
    country: "United Kingdom",
    region: "England",
    images: [
      "/images/tours/london/westminster-abbey.jpg",
      "/images/tours/london/changing-guard.jpg",
    ],
    duration: "3.5 hours",
    price: "$85",
    rating: 4.7,
    tags: ["Royal", "Historical", "Architecture"],
    meetingPoint: {
      address: "Westminster Abbey, 20 Deans Yd, London SW1P 3PA",
      coordinates: {
        latitude: 51.4994,
        longitude: -0.1276,
      },
      instructions:
        "Meet outside the West Entrance of Westminster Abbey (Great West Door). Your guide will be holding a Union Jack umbrella.",
      contactNumber: "+44 20 7234 5678",
      contactEmail: "info@londonroyaltours.com",
    },
    highlights: [
      "Guided tour of Westminster Abbey, the coronation church of British monarchs since 1066",
      "See Poets' Corner, Royal Tombs, and the magnificent medieval architecture",
      "Witness the famous Changing of the Guard ceremony at Buckingham Palace",
      "Learn about royal traditions and ceremonies from an expert guide",
      "Walk through St. James's Park and see Horse Guards Parade",
    ],
    inclusions: [
      "Fast-track entrance to Westminster Abbey",
      "Professional Blue Badge guide",
      "Headsets to clearly hear your guide",
      "Guided walk through royal London",
      "Prime viewing position for the Changing of the Guard ceremony",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Food and beverages",
      "Entrance to Buckingham Palace State Rooms (only open during summer months)",
      "Transportation",
      "Gratuities",
    ],
    itinerary: [
      "9:00 AM - Meet at Westminster Abbey West Entrance",
      "9:15 AM - Fast-track entry and guided tour of Westminster Abbey",
      "10:45 AM - Walk through St. James's Park toward Buckingham Palace",
      "11:15 AM - Take position for Changing of the Guard ceremony",
      "11:30 AM - Witness the Changing of the Guard ceremony",
      "12:15 PM - Visit Horse Guards Parade and Downing Street",
      "12:30 PM - Tour concludes near Trafalgar Square with recommendations",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours before tour. No refund for cancellations less than 24 hours before scheduled tour.",
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: true,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Does the Changing of the Guard take place every day?",
        answer:
          "The Changing of the Guard ceremony typically takes place on Mondays, Wednesdays, Fridays, and Sundays, weather permitting. During summer, it may occur daily. If the ceremony is canceled due to weather or official events, your guide will provide extended commentary on the palace and royal traditions instead.",
      },
      {
        question: "Is Westminster Abbey suitable for children?",
        answer:
          "Yes, children often find Westminster Abbey fascinating with its royal connections and historical significance. Our guides are skilled at engaging younger visitors with age-appropriate stories and interesting facts about the monarchs, poets, and scientists buried there.",
      },
      {
        question: "Is there a dress code for Westminster Abbey?",
        answer:
          "Westminster Abbey is a place of worship, so modest attire is appreciated. Shoulders should be covered, and overly casual clothing like shorts and flip-flops is discouraged. Comfortable shoes are recommended as there is considerable walking on stone floors.",
      },
    ],
  },
  {
    title: "Warner Bros. Studio: The Making of Harry Potter",
    description:
      "Step into the magical world of Harry Potter with a behind-the-scenes tour of Warner Bros. Studio, featuring original sets, costumes, and props from the beloved film series.",
    city: "London",
    country: "United Kingdom",
    region: "England",
    images: [
      "/images/tours/london/harry-potter-studio.jpg",
      "/images/tours/london/hogwarts-great-hall.jpg",
    ],
    duration: "7 hours",
    price: "$125",
    rating: 4.9,
    tags: ["Harry Potter", "Film", "Family"],
    meetingPoint: {
      address:
        "Victoria Coach Station, 164 Buckingham Palace Road, London SW1W 9TP",
      coordinates: {
        latitude: 51.4945,
        longitude: -0.1444,
      },
      instructions:
        "Meet at Victoria Coach Station, Gate 0. Look for your guide holding a 'Harry Potter Studio Tour' sign. Please arrive 15 minutes before departure.",
      contactNumber: "+44 20 8765 4321",
      contactEmail: "wizards@potterstudiotours.com",
    },
    highlights: [
      "Walk through the Great Hall of Hogwarts and see iconic film sets",
      "Discover original costumes, props, and magical creatures from the films",
      "See Diagon Alley, the Forbidden Forest, and Platform 9¾",
      "Learn filmmaking secrets and visual effects techniques",
      "Savor a refreshing Butterbeer in the studio café",
    ],
    inclusions: [
      "Round-trip transportation from central London",
      "Entrance ticket to Warner Bros. Studio Tour",
      "Multimedia guide in your chosen language",
      "Expert studio guide",
      "Free time to explore the studio at your own pace",
    ],
    exclusions: [
      "Food and beverages (including Butterbeer)",
      "Optional digital photos on broomsticks",
      "Souvenir purchases",
      "Gratuities",
      "Hotel pickup and drop-off",
    ],
    itinerary: [
      "9:00 AM - Meet at Victoria Coach Station",
      "9:30 AM - Depart London for Warner Bros. Studio in luxury coach",
      "10:45 AM - Arrival at Warner Bros. Studio Tour",
      "11:00 AM - Introduction and Great Hall visit with studio guide",
      "11:45 AM - Free time to explore all studio areas at your own pace",
      "3:00 PM - Final shopping opportunity at the Studio Shop",
      "3:30 PM - Depart studio for return journey",
      "5:00 PM - Arrive back at Victoria Station",
    ],
    cancellationPolicy:
      "Due to limited tickets: No refund within 7 days of tour. 50% refund if canceled 7-14 days before. Full refund only if canceled more than 14 days in advance.",
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isOutdoor: false,
    isIndoor: true,
    tourCategoryId: "entertainment",
    faqs: [
      {
        question:
          "Is this tour suitable for people who haven't read the books or seen the films?",
        answer:
          "While fans will certainly get the most enjoyment, the tour is designed to be accessible to everyone. The craftsmanship, artistry, and technology on display are impressive regardless of your familiarity with Harry Potter. Guides provide context so everyone can appreciate what they're seeing.",
      },
      {
        question: "How much time do we get at the studio?",
        answer:
          "You will have approximately 4 hours at the studio, which is typically enough time to see everything. The tour is self-guided after the initial introduction, so you can spend more time in the areas that interest you most. Most visitors spend 3-4 hours exploring all areas.",
      },
      {
        question: "Can I take photographs inside the studio?",
        answer:
          "Photography (without flash) is permitted and encouraged in most areas of the studio. There are a few sections where photography is prohibited, which will be clearly marked. The use of tripods or professional equipment requires prior permission.",
      },
    ],
  },
  {
    title: "London Eye & Thames River Cruise",
    description:
      "Combine two iconic London experiences with a flight on the London Eye observation wheel and a scenic cruise along the River Thames.",
    city: "London",
    country: "United Kingdom",
    region: "England",
    images: [
      "/images/tours/london/london-eye.jpg",
      "/images/tours/london/thames-cruise.jpg",
    ],
    duration: "3 hours",
    price: "$75",
    rating: 4.6,
    tags: ["Views", "River Cruise", "Landmarks"],
    meetingPoint: {
      address: "London Eye Pier, Westminster Bridge Road, London SE1 7PB",
      coordinates: {
        latitude: 51.5033,
        longitude: -0.1197,
      },
      instructions:
        "Meet at the London Eye ticket office. Your guide will be waiting with a 'London Experiences' placard.",
      contactNumber: "+44 20 7321 8765",
      contactEmail: "bookings@londonexperiences.co.uk",
    },
    highlights: [
      "Priority boarding on the London Eye for spectacular 360° views of London",
      "30-minute rotation in a private capsule with interactive tablets",
      "Scenic River Thames cruise passing major London landmarks",
      "Live commentary pointing out historical sites and interesting facts",
      "Photo opportunities of Big Ben, Houses of Parliament, Tower Bridge and more",
    ],
    inclusions: [
      "Fast-track London Eye ticket (priority boarding)",
      "Private capsule experience on the London Eye",
      "40-minute Thames river cruise",
      "Live commentary during the cruise",
      "Professional guide",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Food and beverages",
      "Gratuities",
      "Souvenir photos (available for purchase)",
      "Additional attractions",
    ],
    itinerary: [
      "2:00 PM - Meet at the London Eye ticket office",
      "2:15 PM - Fast-track boarding onto the London Eye",
      "2:20 PM - Begin 30-minute rotation with commentary",
      "2:50 PM - Exit London Eye and short walk to pier",
      "3:15 PM - Board Thames river cruise boat",
      "3:20 PM - Begin scenic cruise along the Thames",
      "4:00 PM - Disembark at Tower Pier (optional) or return to London Eye Pier",
      "4:15 PM - Tour conclusion with recommendations for evening activities",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours before. No refund for cancellations less than 24 hours before scheduled time.",
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "sightseeing",
    faqs: [
      {
        question: "What happens in case of bad weather?",
        answer:
          "The London Eye operates in most weather conditions except severe wind or storms. In case of dangerous weather, your ticket can be used another day. The river cruise may be modified or rescheduled in extreme weather, with the option to reschedule or receive a partial refund.",
      },
      {
        question:
          "Is the London Eye suitable for people with a fear of heights?",
        answer:
          "The capsules are very stable with minimal movement sensation. The rotation is extremely slow (30 minutes for one revolution) and the solid construction helps many visitors with mild fear of heights feel comfortable. The capsules are spacious, allowing you to stay toward the center if preferred.",
      },
      {
        question: "Can I get off the boat cruise at different piers?",
        answer:
          "Yes, this cruise allows you to disembark at any of the stops along the route, including Tower Pier, Greenwich, and Westminster. Your ticket is valid for the whole day, so you can explore areas of interest and continue your journey later.",
      },
    ],
  },
  {
    title: "Secret Underground London Walking Tour",
    description:
      "Uncover London's hidden subterranean world with a guided walking tour exploring ancient crypts, forgotten tunnels, and underground Roman ruins that reveal the city's mysterious past.",
    city: "London",
    country: "United Kingdom",
    region: "England",
    images: [
      "/images/tours/london/underground-london.jpg",
      "/images/tours/london/hidden-crypt.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Underground", "Hidden", "History"],
    meetingPoint: {
      address: "Temple Underground Station, Temple Place, London WC2R 2PH",
      coordinates: {
        latitude: 51.5111,
        longitude: -0.1141,
      },
      instructions:
        "Meet outside Temple Underground Station near the entrance. Your guide will be holding a lantern and wearing a black coat.",
      contactNumber: "+44 20 4567 8912",
      contactEmail: "underground@hiddenlondontours.co.uk",
    },
    highlights: [
      "Explore the ancient crypts of forgotten churches not open to the general public",
      "Descend beneath the city to discover Roman ruins and archaeological sites",
      "Visit a section of London's vast subterranean tunnel network",
      "Learn about the hidden rivers that flow beneath London's streets",
      "Hear chilling tales of plague pits, secret passages, and underground shelters",
    ],
    inclusions: [
      "Expert historian guide with specialist knowledge",
      "Access to restricted underground sites",
      "Small group size (maximum 12 people)",
      "Use of flashlights in darker sections",
      "Entry fees to all underground locations",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Food and beverages",
      "Gratuities",
      "Transportation between some sites (tube fare may be required)",
      "Souvenir photos or booklets",
    ],
    itinerary: [
      "10:00 AM - Meet at Temple Underground Station",
      "10:15 AM - Walk to first underground site with historical context",
      "10:45 AM - Explore ancient crypt beneath a working church",
      "11:30 AM - Visit to recently discovered Roman ruins beneath an office building",
      "12:15 PM - Short tube journey to next location (fare not included)",
      "12:30 PM - Descend into abandoned underground tunnels and chambers",
      "1:15 PM - Final underground site exploration",
      "1:45 PM - Return to street level and tour conclusion",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours before tour. No refund for cancellations less than 24 hours before scheduled tour.",
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    isAdventure: true,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    isFree: false,
    isPopular: false,
    isFamilyFriendly: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: false,
    isIndoor: true,
    tourCategoryId: "history",
    faqs: [
      {
        question: "Is this tour suitable for people with claustrophobia?",
        answer:
          "This tour is not recommended for those with severe claustrophobia as it involves several narrow passages, low ceilings, and enclosed spaces. Some underground sections are quite restricted, though most areas are reasonably spacious. Please contact us if you have specific concerns.",
      },
      {
        question: "How physically demanding is this tour?",
        answer:
          "The tour involves walking approximately 2 miles, climbing several staircases (some spiral and narrow), and navigating uneven surfaces. Participants should be able to walk comfortably for 3 hours and climb the equivalent of 5 flights of stairs throughout the tour.",
      },
      {
        question: "Are the underground spaces cold or damp?",
        answer:
          "Most underground locations maintain a constant cool temperature year-round (approximately 55°F/13°C). Some areas may be slightly damp or humid. We recommend bringing a light jacket even in summer and wearing closed-toe, comfortable shoes with good grip.",
      },
    ],
  },
];

export default londonTours;
