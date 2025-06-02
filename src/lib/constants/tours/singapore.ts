import { Tour } from "@/lib/interfaces/services/tours";

export const singaporeTours: Tour[] = [
  {
    title: "Gardens by the Bay & Marina Bay Sands Skypark",
    description:
      "Discover Singapore's futuristic green space with a guided tour of Gardens by the Bay, featuring the iconic Supertrees, Cloud Forest, and Flower Dome, followed by spectacular city views from the Marina Bay Sands Skypark.",
    city: "Singapore",
    country: "Singapore",
    region: "Marina Bay",
    images: [
      "/images/tours/singapore/gardens-by-the-bay.jpg",
      "/images/tours/singapore/marina-bay-sands.jpg",
    ],
    duration: "5 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Gardens", "Architecture", "City Views"],
    meetingPoint: {
      address: "18 Marina Gardens Drive, Singapore 018953",
      coordinates: {
        latitude: 1.2816,
        longitude: 103.8636,
      },
      instructions: "Meet at the main entrance to Gardens by the Bay (near Bayfront MRT Exit B). Look for guide holding a green 'Singapore Explorer' sign.",
      contactNumber: "+65 6123 4567",
      contactEmail: "bookings@singaporeexplorer.com"
    },
    highlights: [
      "Explore the futuristic Supertrees Grove and OCBC Skyway walkway",
      "Visit the climate-controlled Flower Dome and Cloud Forest conservatories",
      "Experience the Garden Rhapsody light and sound show (evening tour only)",
      "Enjoy panoramic views of Singapore from the Marina Bay Sands Skypark"
    ],
    inclusions: [
      "Professional English-speaking guide",
      "Skip-the-line admission to Cloud Forest and Flower Dome",
      "OCBC Skyway access",
      "Marina Bay Sands Skypark observation deck ticket",
      "Bottled water"
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Food and additional beverages",
      "OCBC Skyway ticket (can be purchased on-site)",
      "Gratuities"
    ],
    itinerary: [
      "1:00 PM - Meet at Gardens by the Bay entrance",
      "1:15 PM - Guided tour of Supertrees Grove and OCBC Skyway",
      "2:00 PM - Visit to Cloud Forest Conservatory",
      "3:00 PM - Explore the Flower Dome",
      "4:00 PM - Short walk to Marina Bay Sands",
      "4:30 PM - Ascend to Skypark Observation Deck for city views",
      "5:30 PM - Tour conclusion at Marina Bay Sands"
    ],
    cancellationPolicy: "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before scheduled tour.",
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isAdventure: false,
    isCultural: false,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: true,
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "city-sightseeing",
    faqs: [
      {
        question: "What should I wear for this tour?",
        answer: "Comfortable walking shoes and lightweight clothing are recommended. Both conservatories are air-conditioned, so bringing a light sweater might be comfortable for some visitors."
      },
      {
        question: "Is photography allowed?",
        answer: "Yes, photography is permitted throughout Gardens by the Bay and at the Marina Bay Sands Skypark. Tripods are not allowed in the conservatories or at the Skypark."
      },
      {
        question: "What happens in case of rain?",
        answer: "This tour operates rain or shine. Much of the tour takes place in covered or indoor areas. Umbrellas can be purchased at Gardens by the Bay if needed."
      }
    ],
  },
  {
    title: "Hawker Center Food Safari",
    description:
      "Sample Singapore's diverse culinary heritage with a guided tour through authentic hawker centers, tasting local favorites from Hainanese chicken rice to laksa while learning about the cultural influences behind each dish.",
    city: "Singapore",
    country: "Singapore",
    region: "Various Districts",
    images: [
      "/images/tours/singapore/hawker-center.jpg",
      "/images/tours/singapore/local-food.jpg",
    ],
    duration: "4 hours",
    price: "$70",
    rating: 4.9,
    tags: ["Food", "Cultural", "Local Experience"],
    meetingPoint: {
      address: "158 Rochor Road, Singapore 188433",
      coordinates: {
        latitude: 1.3023,
        longitude: 103.8522,
      },
      instructions: "Meet outside Exit A of Bugis MRT station. Look for guide holding a red umbrella with 'Singapore Food Tours' printed on it.",
      contactNumber: "+65 8765 4321",
      contactEmail: "taste@singaporefoodtrails.com"
    },
    highlights: [
      "Visit 3 authentic hawker centers loved by locals",
      "Sample 8-10 iconic Singaporean dishes with insights on their origins",
      "Learn about Singapore's food culture and unique hawker tradition",
      "Experience the vibrant atmosphere of local dining establishments"
    ],
    inclusions: [
      "Professional local food guide",
      "All food tastings (8-10 dishes)",
      "1 local beverage (Tiger beer, kopi, or teh tarik)",
      "Public transportation between hawker centers",
      "Food guide booklet with recommendations"
    ],
    exclusions: [
      "Additional food beyond included tastings",
      "Additional beverages",
      "Hotel pickup and drop-off",
      "Gratuities"
    ],
    itinerary: [
      "9:30 AM - Meet at Bugis MRT and introduction",
      "10:00 AM - First hawker center: sample Chinese-influenced dishes",
      "11:00 AM - Travel to second hawker center",
      "11:30 AM - Second hawker center: sample Malay and Indian dishes",
      "12:30 PM - Travel to final hawker center",
      "1:00 PM - Final hawker center: sample Peranakan specialties and desserts",
      "1:30 PM - Tour conclusion with food recommendations"
    ],
    cancellationPolicy: "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the tour.",
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
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
    isOutdoor: false,
    isIndoor: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes will we try?",
        answer: "Dishes typically include Singaporean classics like Hainanese chicken rice, laksa, char kway teow, satay, roti prata, and chili crab (subject to availability). We also try local desserts like ice kacang or cendol."
      },
      {
        question: "Can dietary restrictions be accommodated?",
        answer: "Yes, we can accommodate vegetarian, halal, and most other dietary restrictions with advance notice. Please inform us of your dietary needs when booking so we can arrange suitable alternatives."
      },
      {
        question: "How spicy is the food?",
        answer: "Singaporean cuisine spans a range of spice levels. Your guide will point out which dishes are spicy and can recommend milder options for those sensitive to heat. Most hawker stalls can adjust spice levels upon request."
      }
    ],
  },
  {
    title: "Night Safari Adventure",
    description:
      "Experience the world's first nocturnal wildlife park on this guided safari, observing over 900 animals in their nighttime habitats through special lighting that mimics moonlight.",
    city: "Singapore",
    country: "Singapore",
    region: "Mandai",
    images: [
      "/images/tours/singapore/night-safari.jpg",
      "/images/tours/singapore/nocturnal-animals.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.7,
    tags: ["Wildlife", "Night Tour", "Family Friendly"],
    meetingPoint: {
      address: "80 Mandai Lake Road, Singapore 729826",
      coordinates: {
        latitude: 1.4043,
        longitude: 103.7888,
      },
      instructions: "Meet at the Night Safari entrance plaza. Look for the guide holding an illuminated sign with 'Singapore Night Safari Tour' written on it.",
      contactNumber: "+65 6269 3411",
      contactEmail: "safari@wildlifesg.com"
    },
    highlights: [
      "Guided tram ride through 7 geographical zones with over 900 animals",
      "Walking trails through specialized habitats with nocturnal creatures",
      "Tribal fire performance show (subject to schedule)",
      "Close encounters with animals in their natural nighttime behavior"
    ],
    inclusions: [
      "Night Safari admission ticket",
      "40-minute guided tram ride",
      "Professional wildlife guide",
      "Walking tour of selected trails",
      "Tribal fire show (when available)"
    ],
    exclusions: [
      "Hotel pickup and drop-off (available for additional fee)",
      "Food and beverages",
      "Souvenir photos",
      "Gratuities"
    ],
    itinerary: [
      "6:30 PM - Meet at Night Safari entrance",
      "7:00 PM - Entry to Night Safari and orientation",
      "7:30 PM - Tribal fire performance (if scheduled)",
      "8:00 PM - Guided tram ride through the park's zones",
      "9:00 PM - Guided walking tour of selected trails",
      "10:00 PM - Free time to explore remaining trails",
      "10:30 PM - Tour conclusion"
    ],
    cancellationPolicy: "Full refund if canceled 72 hours in advance. 50% refund if canceled 48-72 hours in advance. No refund for cancellations less than 48 hours before the tour.",
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isAdventure: true,
    isCultural: false,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: true,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isOutdoor: true,
    isIndoor: false,
    tourCategoryId: "wildlife",
    faqs: [
      {
        question: "What animals will we see?",
        answer: "The Night Safari is home to over 900 animals representing 100 species, including many threatened species. You'll likely see Asian elephants, fishing cats, leopards, lions, tigers, giant flying squirrels, and various nocturnal creatures."
      },
      {
        question: "Is photography allowed?",
        answer: "Photography is permitted but without flash as this disturbs the animals. The lighting conditions are designed to mimic moonlight, so professional cameras with high ISO capabilities work best."
      },
      {
        question: "Is this tour suitable for young children?",
        answer: "Yes, children of all ages enjoy the Night Safari. However, some young children might find certain sections a bit dark or intimidating. The tram ride is suitable for all ages."
      }
    ],
  }
];

export default singaporeTours;
