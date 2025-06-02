import { Tour } from "@/lib/interfaces/services/tours";

export const sevilleTours: Tour[] = [
  {
    title: "Seville Historical City Tour",
    description:
      "Discover the rich history and stunning architecture of Seville with a guided tour through its iconic landmarks.",
    city: "Seville",
    country: "Spain",
    region: "Andalusia",
    images: [
      "/images/tours/seville/historical-city.jpg",
      "/images/tours/seville/alcazar.jpg",
    ],
    duration: "4 hours",
    price: "$35",
    rating: 4.8,
    tags: ["Cultural", "Historical", "City Tour"],
    meetingPoint: {
      address: "Plaza Nueva, 41001 Seville, Spain",
      coordinates: {
        latitude: 37.3892,
        longitude: -5.9946,
      },
      instructions:
        "Meet by the statue of King Ferdinand III in Plaza Nueva. Look for your guide holding a red umbrella with 'Seville Tours' logo.",
      contactNumber: "+34 954 123 456",
      contactEmail: "info@sevillewalkingtours.com",
    },
    highlights: [
      "Visit the magnificent Royal Alcázar, a UNESCO World Heritage site",
      "Explore Seville Cathedral, the largest Gothic cathedral in the world",
      "Wander through Santa Cruz, the charming former Jewish quarter",
      "Discover Plaza de España with its stunning architecture and ceramic tile work",
    ],
    inclusions: [
      "Professional English-speaking local guide",
      "Skip-the-line entrance to Royal Alcázar",
      "Skip-the-line entrance to Seville Cathedral",
      "Small group size (maximum 12 people)",
    ],
    exclusions: [
      "Food and beverages",
      "Gratuities",
      "Hotel pickup and drop-off",
      "Additional entrance fees to other monuments",
    ],
    itinerary: [
      "10:00 AM - Meet at Plaza Nueva and introduction",
      "10:15 AM - Walk to Royal Alcázar for guided tour",
      "11:30 AM - Visit to Seville Cathedral and La Giralda tower",
      "12:45 PM - Explore the Santa Cruz quarter with its narrow streets",
      "1:30 PM - Visit Plaza de España and Maria Luisa Park",
      "2:00 PM - Tour conclusion with recommendations for lunch",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours in advance. 50% refund if canceled between 12-24 hours in advance. No refund for cancellations less than 12 hours before the tour.",
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
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
    isPetFriendly: true,
    isWheelchairAccessible: true,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What are the must-see attractions in Seville?",
        answer:
          "Must-see attractions include the Alcázar, Seville Cathedral, and Plaza de España.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "The tour covers approximately 2.5 km (1.5 miles) at a leisurely pace with frequent stops. Comfortable walking shoes are recommended.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and engaging for children, with interesting stories and visual elements that appeal to younger participants.",
      },
    ],
  },
  {
    title: "Flamenco Show and Dinner Experience",
    description:
      "Enjoy an authentic Flamenco show while savoring traditional Andalusian cuisine in a local restaurant.",
    city: "Seville",
    country: "Spain",
    region: "Andalusia",
    images: [
      "/images/tours/seville/flamenco-show.jpg",
      "/images/tours/seville/dinner-experience.jpg",
    ],
    duration: "3 hours",
    price: "$50",
    rating: 4.9,
    tags: ["Cultural", "Culinary", "Entertainment"],
    meetingPoint: {
      address: "Calle Cuna, 6, 41004 Seville, Spain",
      coordinates: {
        latitude: 37.3925,
        longitude: -5.9969,
      },
      instructions:
        "Meet at Tablao El Arenal entrance, 15 minutes before the show starts. Your name will be on the reservation list.",
      contactNumber: "+34 954 987 654",
      contactEmail: "reservations@tablaoarenal.com",
    },
    highlights: [
      "Experience the passion and artistry of authentic Andalusian flamenco",
      "Enjoy a delicious 3-course meal of traditional Spanish cuisine",
      "Watch performances by award-winning flamenco dancers, singers, and guitarists",
      "Learn about the cultural significance and history of flamenco",
    ],
    inclusions: [
      "90-minute professional flamenco performance",
      "3-course traditional Andalusian dinner",
      "One welcome drink (sangria, wine, beer, or soft drink)",
      "Reserved seating with excellent views of the stage",
    ],
    exclusions: [
      "Additional drinks beyond the welcome drink",
      "Transportation to/from the venue",
      "Gratuities",
      "Professional photos (available for purchase at venue)",
    ],
    itinerary: [
      "7:45 PM - Arrival and seating at Tablao El Arenal",
      "8:00 PM - Welcome drink service",
      "8:15 PM - First dinner course served",
      "8:45 PM - Flamenco performance begins",
      "9:30 PM - Main course served during brief intermission",
      "10:00 PM - Performance continues",
      "10:30 PM - Dessert and coffee service",
      "10:45 PM - Experience concludes",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the show.",
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: true,
    isWellness: false,
    isLuxury: true,
    isArtOrMusic: true,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isOutdoor: false,
    isIndoor: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What type of food is served?",
        answer:
          "The dinner includes traditional Andalusian cuisine, typically featuring Spanish tapas, paella, and regional desserts. Vegetarian options are available upon request when booking.",
      },
      {
        question: "Is there a dress code?",
        answer:
          "Smart casual attire is recommended. While there's no strict dress code, most guests dress nicely for the occasion as it's a cultural night out.",
      },
      {
        question: "How authentic is the flamenco show?",
        answer:
          "This is an authentic performance by professional flamenco artists, not a tourist show. Many performers have won national competitions and come from families with generations of flamenco tradition.",
      },
    ],
  },
  {
    title: "Seville Bike Tour",
    description:
      "Explore the beautiful city of Seville on a guided bike tour, visiting parks, plazas, and hidden gems.",
    city: "Seville",
    country: "Spain",
    region: "Andalusia",
    images: [
      "/images/tours/seville/bike-tour.jpg",
      "/images/tours/seville/parks.jpg",
    ],
    duration: "2 hours",
    price: "$25",
    rating: 4.7,
    tags: ["Adventure", "Nature", "City Tour"],
    meetingPoint: {
      address: "Calle Adriano, 22, 41001 Seville, Spain",
      coordinates: {
        latitude: 37.3867,
        longitude: -5.9989,
      },
      instructions:
        "Meet at Seville Bikes shop near the Bullring. Arrive 15 minutes early to select and adjust your bike.",
      contactNumber: "+34 954 123 789",
      contactEmail: "hola@sevillebikes.es",
    },
    highlights: [
      "Cycle along the Guadalquivir River with beautiful views",
      "Visit Triana neighborhood, known for its unique character and ceramics",
      "Explore Maria Luisa Park and Plaza de España",
      "Discover hidden plazas and gardens off the typical tourist route",
    ],
    inclusions: [
      "Bicycle rental with comfortable city bikes",
      "Helmet (optional but recommended)",
      "Local English-speaking guide",
      "Bottle of water",
      "Small group experience (maximum 10 riders)",
    ],
    exclusions: [
      "Food and additional beverages",
      "Entrance fees to attractions",
      "Gratuities",
      "Hotel pickup and drop-off",
    ],
    itinerary: [
      "10:00 AM - Meet at bike shop, bike fitting and safety briefing",
      "10:15 AM - Begin tour along the Guadalquivir River",
      "10:45 AM - Cross the bridge to explore Triana neighborhood",
      "11:15 AM - Cycle to Maria Luisa Park and Plaza de España",
      "11:45 AM - Discover hidden plazas and local spots",
      "12:00 PM - Return toward city center via bike-friendly routes",
      "12:30 PM - Tour concludes at original meeting point",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours in advance. 50% refund if canceled 12-24 hours in advance. No refund for cancellations less than 12 hours before tour.",
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isAdventure: true,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: false,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How difficult is the bike route?",
        answer:
          "The route is easy and flat, making it suitable for casual riders. Seville is one of the most bike-friendly cities in Europe with extensive dedicated bike lanes.",
      },
      {
        question: "What if I haven't ridden a bike in years?",
        answer:
          "No worries! We'll provide a brief orientation and the pace is relaxed. Seville's flat terrain makes it perfect for getting back on a bike.",
      },
      {
        question: "What happens in case of rain?",
        answer:
          "The tour operates in light rain (ponchos provided). In case of heavy rain, we offer the option to reschedule or receive a full refund.",
      },
    ],
  },
];

export default sevilleTours;
