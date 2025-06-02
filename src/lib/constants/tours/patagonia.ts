import { Tour } from "@/lib/interfaces/services/tours";

export const patagoniaTours: Tour[] = [
  {
    title: "Torres del Paine W Trek",
    description:
      "Challenge yourself with the legendary W Trek through Torres del Paine National Park, experiencing breathtaking mountain scenery, glaciers, and lakes in one of the world's most spectacular trekking destinations.",
    city: "Puerto Natales",
    country: "Chile",
    region: "Magallanes",
    images: [
      "/images/tours/patagonia/w-trek.jpg",
      "/images/tours/patagonia/torres-del-paine.jpg",
    ],
    duration: "5 days",
    price: "$1,200",
    rating: 4.9,
    tags: ["Trekking", "Mountains", "National Park"],
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "adventure",
  },
  {
    title: "Perito Moreno Glacier Adventure",
    description:
      "Get up close with the impressive Perito Moreno Glacier in Los Glaciares National Park, including glacier trekking with crampons and a boat safari to witness massive ice calving events.",
    city: "El Calafate",
    country: "Argentina",
    region: "Santa Cruz Province",
    images: [
      "/images/tours/patagonia/perito-moreno.jpg",
      "/images/tours/patagonia/glacier-trekking.jpg",
    ],
    duration: "1 day",
    price: "$240",
    rating: 4.8,
    tags: ["Glacier", "Ice Trekking", "UNESCO Site"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "adventure",
  },
  {
    title: "Wildlife Safari: Pumas & Guanacos",
    description:
      "Embark on a wildlife safari to spot the elusive Patagonian puma in its natural habitat, along with guanacos, Andean condors, and other native species, guided by expert wildlife trackers and photographers.",
    city: "Torres del Paine",
    country: "Chile",
    region: "Magallanes",
    images: [
      "/images/tours/patagonia/puma-tracking.jpg",
      "/images/tours/patagonia/wildlife-guanacos.jpg",
    ],
    duration: "3 days",
    price: "$1,500",
    rating: 4.9,
    tags: ["Wildlife", "Photography", "Nature"],
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "nature-experience",
  },
];

export default patagoniaTours;
