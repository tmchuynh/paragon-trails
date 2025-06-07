/**
 * Luxury Car Rentals Generator Script
 * ==================================
 *
 * This script generates realistic luxury car rental data for city destinations in the Paragon Trails application.
 * It creates detailed luxury vehicle listings with properties like make, model, features, pricing,
 * availability, and other specifications for each city.
 *
 * Features:
 * - Generates 3-7 luxury cars per city by default
 * - Creates appropriate folder structure in src/lib/constants/rentals/cars
 * - Supports filtering by specific car types
 * - Includes realistic specifications, features, and pricing
 * - Adapts currency based on location (country/region)
 * - Generates realistic pickup and dropoff locations
 *
 * Usage: node scripts/generate-city-cars.mjs [options]
 *
 * Options:
 *   --rewrite, -r       Rewrite existing files instead of skipping them
 *   --append N, -a N    Append N new cars to existing files
 *   --type T, -t T      Generate cars of a specific type (options: Sedan, SUV, Convertible,
 *                       Coupe, Sports Car, Electric, Hybrid, Limousine)
 *   --city C, -c C      Process only cities matching the search term
 *
 * Examples:
 *   node scripts/generate-city-cars.mjs --rewrite
 *   node scripts/generate-city-cars.mjs --append 5
 *   node scripts/generate-city-cars.mjs --type "Convertible"
 *   node scripts/generate-city-cars.mjs --city "Monaco" --append 3 --type "Sports Car"
 */

import * as fs from "fs";
import * as path from "path";
import { promisify } from "util";
import { getCityFiles } from "./utils/file-utils.mjs";
import {
  formatKebabToCamelCase,
  formatTitleToCamelCase,
  formatKebebToTitleCase,
  removeAccents,
} from "./utils/format-utils.mjs";
import {
  cityCountryMap,
  cityToRegionMap,
  countryCurrencyMap,
  euroCountries,
  regionCurrencyMap,
} from "./utils/geo-utils.mjs";

const cities = getCityFiles();

// Add check for empty cities array
if (!cities || cities.length === 0) {
  console.error("No cities found. Check the city-data.json file.");
  process.exit(1);
}

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const mkdir = promisify(fs.mkdir);
const access = promisify(fs.access);

// Parse command line arguments
function parseCommandLineArgs() {
  const options = {
    rewrite: false,
    append: null,
    carType: null,
    cityFilter: null,
  };

  const args = process.argv.slice(2);
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg === "--rewrite" || arg === "-r") {
      options.rewrite = true;
    }

    if ((arg === "--append" || arg === "-a") && i + 1 < args.length) {
      const value = parseInt(args[++i]);
      if (!isNaN(value) && value > 0) {
        options.append = value;
      }
    }

    if ((arg === "--type" || arg === "-t") && i + 1 < args.length) {
      const value = args[++i];
      const validTypes = [
        "Sedan",
        "SUV",
        "Convertible",
        "Coupe",
        "Sports Car",
        "Electric",
        "Hybrid",
        "Limousine",
      ];
      if (validTypes.includes(value)) {
        options.carType = value;
      }
    }

    if ((arg === "--city" || arg === "-c") && i + 1 < args.length) {
      options.cityFilter = args[++i];
    }
  }

  return options;
}

const options = parseCommandLineArgs();

// Car data generation constants
const carMakes = {
  Sedan: [
    "Mercedes-Benz",
    "BMW",
    "Audi",
    "Lexus",
    "Cadillac",
    "Jaguar",
    "Genesis",
    "Volvo",
    "Infiniti",
    "Acura",
    "Lincoln",
    "Chrysler",
    "Tesla",
  ],
  SUV: [
    "Range Rover",
    "Porsche",
    "Bentley",
    "Lamborghini",
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Rolls-Royce",
    "Cadillac",
    "Lexus",
    "Genesis",
    "Volvo",
    "Rivian",
    "Infiniti",
    "Lincoln",
  ],
  Convertible: [
    "Ferrari",
    "Porsche",
    "Bentley",
    "Mercedes-Benz",
    "Aston Martin",
    "BMW",
    "Jaguar",
    "Maserati",
    "Lamborghini",
    "Rolls-Royce",
    "Audi",
    "Chevrolet",
    "Ford",
  ],
  Coupe: [
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Lexus",
    "Porsche",
    "Ferrari",
    "Lamborghini",
    "McLaren",
    "Aston Martin",
    "Maserati",
    "Infiniti",
    "Chevrolet",
  ],
  "Sports Car": [
    "Ferrari",
    "Lamborghini",
    "McLaren",
    "Porsche",
    "Aston Martin",
    "Bugatti",
    "Koenigsegg",
    "Pagani",
    "Lotus",
    "Maserati",
    "Corvette",
    "Nissan",
    "Toyota",
  ],
  Electric: [
    "Tesla",
    "Lucid",
    "Porsche",
    "Audi",
    "BMW",
    "Mercedes-Benz",
    "Jaguar",
    "Rivian",
    "Polestar",
    "Genesis",
    "Cadillac",
    "Ford",
    "Volkswagen",
    "Kia",
    "Hyundai",
  ],
  Hybrid: [
    "Lexus",
    "BMW",
    "Mercedes-Benz",
    "Porsche",
    "Ferrari",
    "McLaren",
    "Lamborghini",
    "Aston Martin",
    "Bentley",
    "Land Rover",
    "Toyota",
    "Ford",
    "Honda",
    "Hyundai",
  ],
  Limousine: [
    "Mercedes-Benz",
    "Rolls-Royce",
    "Bentley",
    "Cadillac",
    "Lincoln",
    "Chrysler",
    "Maybach",
    "BMW",
    "Lexus",
    "Jaguar",
    "Audi",
  ],
};

const carModels = {
  "Mercedes-Benz": [
    "S-Class",
    "E-Class",
    "C-Class",
    "AMG GT",
    "GLS",
    "GLE",
    "GLC",
    "SL",
    "Maybach S-Class",
    "EQS",
    "G-Class",
    "CLS",
    "A-Class",
    "CLA",
    "GLA",
    "GLB",
    "EQB",
    "EQC",
    "EQE",
    "EQS",
    "SLS AMG",
    "C63 AMG",
    "E63 AMG",
    "G63 AMG",
  ],
  BMW: [
    "7 Series",
    "5 Series",
    "X7",
    "X5",
    "X6",
    "8 Series",
    "M8",
    "M5",
    "M3",
    "i7",
    "iX",
    "i4",
    "i3",
    "Z4",
    "X3",
    "X4",
    "X1",
    "X2",
    "iX1",
    "iX3",
    "iX5",
    "iX6",
    "iX7",
    "i4 M50",
    "M2",
    "M4",
    "M6",
    "M8 Gran Coupe",
    "M850i",
    "Z8",
    "i8",
    "iX M60",
    "i7 M70",
    "iX1 M35i",
    "iX3 M40i",
    "iX5 M50",
    "iX6 M60",
    "iX7 M70",
  ],
  Audi: [
    "A8",
    "A7",
    "Q8",
    "Q7",
    "RS7",
    "RS6",
    "S8",
    "e-tron GT",
    "R8",

    "A6",
    "A5",
    "Q5",
    "Q3",
    "A4",
    "A3",
    "Q2",
    "e-tron",
    "Q4 e-tron",
    "Q8 e-tron",
    "A1",
    "A2",
    "A8 L",
    "S7",
    "S6",
    "S5",
    "S4",
    "S3",
    "TT RS",
    "TTS",
    "TT",
    "Q5 Sportback",
    "Q3 Sportback",
    "A4 Allroad",
    "A6 Allroad",
    "A7 Sportback",
    "A8 L Security",
    "A6 L",
    "A5 Sportback",
    "A3 Sportback",
    "Q2L",
    "Q3L",
    "Q5L",
    "Q7L",
    "Q8L",
    "A4L",
    "A6L",
    "A8L Security",
    "S8 Plus",
    "RS Q8",
    "RS Q7",
    "RS Q5",
    "RS Q3",
    "RS Q2",
    "RS 5",
    "RS 4",
    "RS 3",
    "RS 2",
    "RS 1",
    "RS Q4",
    "RS Q6",
    "RS Q9",
    "RS 7 Sportback",
    "RS 6 Avant",
    "RS 5 Sportback",
    "RS 4 Avant",
    "RS 3 Sportback",
    "RS 2 Avant",
    "RS 1 Sportback",
    "RS Q3 Sportback",
    "RS Q2 Sportback",
    "RS Q4 Sportback",
    "RS Q6 Sportback",
  ],
  Lexus: [
    "LS",
    "LC",
    "LX",
    "GX",
    "RX",
    "IS",
    "ES",
    "RC F",

    "NX",
    "UX",
    "GX",
    "RX L",
    "ES F Sport",
    "IS F Sport",
    "RC F Track Edition",
    "LS F Sport",
    "LC 500h",
    "RX 450h",
    "NX 300h",
    "UX 250h",
    "GX 460",
    "LX 600",
    "RX 500h",
    "NX 350h",
    "UX 300e",
    "ES 300h",
    "IS 300h",
    "RC 300h",
    "LS 500h",
    "LC 500",
    "RX 350",
    "NX 200t",
    "UX 200",
    "GX 460 Luxury",
    "LX 570",
    "RX 450hL",
    "NX 300",
    "UX 250h F Sport",
    "ES 350",
    "IS 350",
    "RC 350",
    "LS 500",
    "LC 500h F Sport",
    "RX 350L",
    "NX 350 F Sport",
  ],
  Cadillac: [
    "Escalade",
    "CT6",
    "CT5",
    "XT6",
    "Celestiq",

    "CT4",
    "XT5",
    "XT4",
    "CT6-V",
    "CT5-V",
    "CT4-V Blackwing",
    "Escalade ESV",
    "XT6 Sport",
    "XT5 Sport",
    "XT4 Sport",
    "CT5 Sport",
    "CT4 Sport",
    "Escalade Platinum",
    "CT6 Platinum",
    "CT5 Platinum",
    "XT6 Platinum",
    "XT5 Platinum",
    "XT4 Platinum",
    "CT4-V",
    "CT5-V Blackwing",
    "Escalade Sport",
    "Escalade Luxury",
    "CT6 Sport",
    "CT5 Luxury",
    "XT6 Luxury",
    "XT5 Luxury",
    "XT4 Luxury",
    "CT4 Luxury",
    "CT5 Premium Luxury",
    "XT6 Premium Luxury",
    "XT5 Premium Luxury",
    "XT4 Premium Luxury",
    "CT4 Premium Luxury",
    "CT5-V Sport",
    "XT6-V Sport",
    "XT5-V Sport",
    "XT4-V Sport",
  ],
  Jaguar: [
    "F-TYPE",
    "XJ",
    "F-PACE",
    "I-PACE",

    "E-PACE",
    "XF",
    "XE",
    "XK",
    "F-PACE SVR",
    "XJ LWB",
    "F-TYPE R",
    "F-TYPE SVR",
    "F-PACE R-Dynamic",
    "I-PACE EV400",
    "E-PACE R-Dynamic",
    "XF Sportbrake",
    "XE R-Dynamic",
    "XJ Portfolio",
    "F-TYPE P300",
    "F-TYPE P450",
    "F-TYPE P575",
    "F-PACE P250",
    "F-PACE P300",
    "I-PACE S",
    "I-PACE SE",
    "I-PACE HSE",
    "E-PACE P250",
    "E-PACE P300",
    "XF P250",
    "XF P300",
    "XE P250",
    "XE P300",
    "XK Convertible",
    "XK Coupe",
    "F-TYPE Convertible",
    "F-TYPE Coupe",
    "F-PACE SVR Carbon Edition",
  ],
  Maserati: [
    "Quattroporte",
    "Ghibli",
    "Levante",
    "MC20",
    "GranTurismo",

    "GranCabrio",
    "Alfieri",
    "MC20 Cielo",
    "Levante Trofeo",
    "Ghibli Trofeo",
    "Quattroporte GTS",
    "Ghibli S Q4",
    "Levante S Q4",
    "GranTurismo Sport",
    "GranCabrio Sport",
    "Quattroporte S Q4",
    "Ghibli S Q4 GranLusso",
    "Levante S Q4 GranLusso",
    "MC20 GT2",
    "GranTurismo Folgore",
    "Ghibli Hybrid",
  ],
  Genesis: [
    "G90",
    "G80",
    "GV80",
    "GV70",

    "G70",
    "G60",
    "GV60",
    "G90 Ultimate",
    "G80 Ultimate",
    "GV80 Ultimate",
    "GV70 Ultimate",
    "G70 Ultimate",
    "G60 Ultimate",
    "GV60 Ultimate",
  ],
  "Rolls-Royce": [
    "Phantom",
    "Ghost",
    "Wraith",
    "Dawn",
    "Cullinan",

    "Silver Shadow",
    "Silver Spirit",
    "Silver Spur",
    "Corniche",
    "Phantom Drophead Coupe",
    "Phantom Coupe",
    "Ghost Series II",
    "Wraith Black Badge",
    "Dawn Black Badge",
    "Cullinan Black Badge",
    "Phantom Series II",
    "Ghost Extended Wheelbase",
    "Wraith Coupe",
    "Dawn Convertible",
    "Cullinan Extended Wheelbase",
    "Phantom Extended Wheelbase",
    "Ghost Black Badge",
    "Wraith Convertible",
    "Dawn Series II",
    "Cullinan Series II",
    "Phantom Series II Extended Wheelbase",
  ],
  Volvo: [
    "S90",
    "XC90",
    "V90",

    "XC60",
    "S60",
    "V60",
    "XC40",
    "C40 Recharge",
    "S90 Recharge",
    "XC90 Recharge",
    "V90 Cross Country",
    "XC60 Recharge",
    "S60 Recharge",
    "V60 Recharge",
    "XC40 Recharge P8",
    "C40 Recharge P8",
    "S90 T8",
    "XC90 T8",
    "V90 T8",
    "XC60 T8",
    "S60 T8",
    "V60 T8",
    "XC40 T5",
    "C40 T5",
    "S90 T5",
    "XC90 T5",
    "V90 T5",
    "XC60 T5",
    "S60 T5",
    "V60 T5",
    "XC40 T4",
    "C40 T4",
    "S90 T4",
    "XC90 T4",
    "V90 T4",
    "XC60 T4",
    "S60 T4",
    "V60 T4",
    "XC40 Recharge P6",
  ],
  "Range Rover": [
    "Range Rover",
    "Range Rover Sport",
    "Velar",
    "Evoque",

    "Defender",
    "Range Rover Autobiography",
    "Range Rover Velar R-Dynamic",
    "Range Rover Sport SVR",
    "Range Rover Evoque R-Dynamic",
    "Range Rover Defender 110",
    "Range Rover Defender 90",
    "Range Rover Velar P400e",
    "Range Rover Sport P400e",
    "Range Rover Evoque P300e",
    "Range Rover Velar P250",
    "Range Rover Sport P360",
  ],
  Porsche: [
    "911",
    "Cayenne",
    "Panamera",
    "Taycan",
    "Macan",

    "718 Cayman",
    "718 Boxster",
    "Cayman GT4",
    "Boxster Spyder",
    "Panamera Turbo",
    "Cayenne Turbo",
    "Taycan Turbo",
    "Macan GTS",
    "911 Carrera",
    "911 Turbo",
    "911 GT3",
    "911 Targa",
    "Cayenne E-Hybrid",
    "Panamera E-Hybrid",
    "Taycan 4S",
    "Macan S",
    "Cayenne Coupe",
    "Panamera Sport Turismo",
    "Taycan Cross Turismo",
  ],
  Bentley: [
    "Continental GT",
    "Bentayga",
    "Flying Spur",

    "Mulsanne",
    "Azure",
    "Bentley Speed",
    "Bentley GT Convertible",
    "Bentley GT Coupe",
    "Bentley Bentayga Speed",
    "Bentley Flying Spur V8",
    "Bentley Mulsanne Speed",
    "Bentley Azure Convertible",
    "Bentley Azure Coupe",
    "Bentley Continental GT V8",
  ],
  Lamborghini: [
    "Urus",
    "Aventador",
    "Huracán",

    "Gallardo",
    "Sián",
    "Countach LPI 800-4",
    "Huracán EVO",
    "Aventador SVJ",
    "Urus Performante",
    "Huracán STO",
    "Aventador S",
    "Gallardo Spyder",
    "Huracán Spyder",
    "Aventador Roadster",
    "Urus S",
    "Huracán Tecnica",
    "Aventador Ultimae",
    "Huracán EVO Spyder",
    "Gallardo LP 570-4",
  ],
  Ferrari: [
    "296 GTB",
    "SF90 Stradale",
    "Roma",
    "F8 Tributo",
    "812 Superfast",

    "Portofino M",
    "488 GTB",
    "LaFerrari",
    "F12 Berlinetta",
    "GTC4Lusso",
    "California T",
    "458 Italia",
    "488 Spider",
    "F8 Spider",
    "812 GTS",
    "Roma Spider",
    "SF90 Spider",
    "LaFerrari Aperta",
    "F12 TDF",
    "GTC4Lusso T",
    "California",
    "458 Spider",
    "F8 Tributo Spider",
    "812 Superfast Spider",
    "Portofino",
    "F12 Berlinetta Spider",
    "GTC4Lusso Spider",
    "California T Spider",
  ],
  "Aston Martin": [
    "DB11",
    "DBS Superleggera",
    "Vantage",
    "DBX",

    "Rapide S",
    "Valkyrie",
    "Valhalla",
    "DBS Volante",
    "Vantage Roadster",
    "DB11 Volante",
    "DBX707",
    "Rapide AMR",
    "Vantage F1 Edition",
    "DBS Coupe",
    "DB11 Coupe",
    "Vantage Coupe",
    "DBX707 Ultimate",
    "Rapide S Ultimate",
    "Valkyrie AMR Pro",
    "Valhalla AMR Pro",
    "DBS Superleggera Volante",
  ],
  McLaren: [
    "720S",
    "Artura",
    "GT",
    "765LT",

    "P1",
    "Senna",
    "Elva",
    "540C",
    "570S",
    "600LT",
    "650S",
    "675LT",
    "720S Spider",
    "765LT Spider",
    "P1 GTR",
    "McLaren Sabre",
    "McLaren Speedtail",
    "McLaren GT Spider",
    "McLaren Artura Spider",
    "McLaren 600LT Spider",
    "McLaren 570S Spider",
    "McLaren 540C Spider",
    "McLaren 650S Spider",
    "McLaren 675LT Spider",
    "McLaren P1 Spider",
  ],
  Bugatti: [
    "Chiron",
    "Veyron",
    "Divo",
    "Bolide",
    "Centodieci",
    "La Voiture Noire",

    "Chiron Super Sport",
    "Chiron Pur Sport",
    "Chiron Sport",
    "Veyron Grand Sport",
    "Veyron Super Sport",
    "Divo Centodieci",
    "Bolide Centodieci",
    "La Voiture Noire Centodieci",
    "Chiron Super Sport 300+",
    "Veyron Grand Sport Vitesse",
    "Divo La Voiture Noire",
  ],
  Koenigsegg: [
    "Jesko",
    "Gemera",
    "Regera",
    "Agera RS",
    "CCX",
    "One:1",
    "CCXR Trevita",
    "Agera R",
    "Agera S",

    "Jesko Absolut",
    "Gemera 4-Door",
    "Regera Hybrid",
    "Agera Final Edition",
    "CCX Special Edition",
    "One:1 Final Edition",
    "CCXR Special Edition",
    "Agera RS Naraya",
    "Jesko Attack",
    "Gemera Prototype",
  ],
  Pagani: [
    "Huayra",
    "Zonda",
    "Imola",
    "Zonda Cinque",
    "Zonda Tricolore",
    "Zonda Revolucion",
    "Zonda HP Barchetta",
    "Zonda S",
    "Zonda F",
    "Zonda Roadster",
    "Zonda C12",
    "Zonda C12 S",
    "Zonda C12 F",
    "Zonda R",
    "Zonda Zonda",
    "Zonda Uno",
    "Zonda 760",
    "Zonda 760RS",
    "Zonda 760LH",
    "Zonda 760LH Roadster",
  ],
  Lotus: [
    "Evija",
    "Emira",
    "Exige",
    "Elise",
    "Evora",
    "Esprit",
    "Europa",
    "Elan",
    "Lotus 3-Eleven",
    "Lotus Exige Cup 430",
    "Lotus Elise Sprint",
    "Lotus Evora GT410",
    "Lotus Evora GT430",
    "Lotus Exige Sport 410",
    "Lotus Elise Cup 250",
    "Lotus Evora S",
    "Lotus Esprit V8",
  ],
  Tesla: [
    "Model S",
    "Model X",
    "Model 3",
    "Model Y",
    "Roadster",
    "Cybertruck",
    "Model S Plaid",
    "Model X Plaid",
    "Model 3 Performance",
    "Model Y Performance",
    "Roadster 2020",
    "Cybertruck Tri-Motor",
    "Cybertruck Dual Motor",
    "Cybertruck Single Motor",
    "Model S Long Range",
    "Model X Long Range",
    "Model 3 Long Range",
    "Model Y Long Range",
  ],
  Lucid: [
    "Air",
    "Air Dream Edition",
    "Air Grand Touring",
    "Air Touring",
    "Air Pure",
  ],
  Rivian: [
    "R1S",
    "R1T",
    "Rivian R1S Adventure",
    "Rivian R1T Adventure",
    "Rivian R1S Explore",
    "Rivian R1T Explore",
    "Rivian R1S Launch Edition",
    "Rivian R1T Launch Edition",
  ],
  Polestar: [
    "Polestar 1",
    "Polestar 2",
    "Polestar 3",
    "Polestar 4",
    "Polestar 5",
    "Polestar 6",
    "Polestar 2 Long Range",
    "Polestar 2 Performance",
    "Polestar 3 Long Range",
    "Polestar 4 Long Range",
    "Polestar 5 Long Range",
    "Polestar 6 Long Range",
  ],
  Lincoln: [
    "Continental",
    "Navigator",
    "Aviator",
    "Corsair",
    "Nautilus",
    "MKZ",
    "MKS",
    "MKT",
    "MKX",
    "MKC",
    "Zephyr",
    "LS",
    "Town Car",
    "Mark LT",
  ],
  Chrysler: [
    "300",
    "Pacifica",
    "Voyager",
    "Aspen",
    "Saratoga",
    "New Yorker",
    "Imperial",
    "Cordoba",
    "LeBaron",
    "Sebring",
    "Crossfire",
    "PT Cruiser",
    "Concorde",
    "LHS",
    "Cirrus",
    "Aspen Hybrid",
  ],
  Maybach: [
    "S 580",
    "S 680",
    "S 650",
    "S 600",
    "S 500",
    "S 560",
    "S 450",
    "S 400",
  ],
  Infiniti: [
    "Q50",
    "Q60",
    "QX80",
    "QX60",
    "QX55",
    "QX70",
    "QX50",
    "QX30",
    "Q70",
    "QX80 Limited",
    "QX55 Sport",
    "Q60 Red Sport",
    "Q50 Red Sport",
    "Q70L",
    "QX70S",
    "QX50S",
    "QX30S",
    "QX60S",
    "QX80S",
  ],
  Acura: [
    "TLX",
    "RLX",
    "MDX",
    "RDX",
    "NSX",
    "ILX",
    "ZDX",
    "RSX",
    "TSX",
    "CL",
    "Legend",
    "Integra",
    "Vigor",
    "SLX",
    "RDX Type S",
    "MDX Type S",
    "TLX Type S",
    "RLX Sport Hybrid",
  ],
  Lincoln: [
    "Aviator",
    "Corsair",
    "Nautilus",
    "Navigator",
    "MKZ",
    "MKS",
    "MKT",
    "MKX",
    "MKC",
    "Zephyr",
    "LS",
    "Town Car",
    "Mark LT",
    "Continental",
    "MKT Town Car",
    "MKS EcoBoost",
  ],
  Chrysler: [
    "Pacifica",
    "300",
    "Voyager",
    "Aspen",
    "Saratoga",
    "New Yorker",
    "Imperial",
    "Cordoba",
    "LeBaron",
    "Sebring",
    "Crossfire",
    "PT Cruiser",
    "Concorde",
    "LHS",
    "Cirrus",
    "Aspen Hybrid",
  ],
  Chevrolet: [
    "Corvette",
    "Camaro",
    "Bolt EUV",
    "Malibu",
    "Traverse",
    "Tahoe",
    "Suburban",
    "Equinox",
    "Blazer",
    "Trailblazer",
    "Silverado 1500",
    "Silverado 2500HD",
    "Silverado 3500HD",
    "Colorado",
    "Express 3500",
    "Express 2500",
    "Sonic",
    "Spark",
    "Cruze",
    "Impala",
    "Volt",
  ],
  Ford: [
    "Mustang",
    "F-150 Lightning",
    "Explorer Hybrid",
    "Escape PHEV",
    "Bronco",
    "Edge",
    "Expedition",
    "Ranger",
    "Maverick",
    "F-150 Raptor",
    "F-250 Super Duty",
    "F-350 Super Duty",
    "F-450 Super Duty",
    "Transit Connect",
    "Transit 350",
    "E-Series Cutaway",
    "E-Series Wagon",
    "Crown Victoria",
    "Taurus",
    "Fusion Hybrid",
    "Focus Electric",
  ],
  Toyota: [
    "Camry Hybrid",
    "Prius",
    "Mirai",
    "GR Supra",
    "RAV4 Hybrid",
    "Highlander Hybrid",
    "Avalon Hybrid",
    "Sienna",
    "C-HR Hybrid",
    "Venza",
    "Corolla Hybrid",
    "Tundra Hybrid",
    "Sequoia Hybrid",
    "Land Cruiser",
    "4Runner",
    "Tacoma",
    "Hilux",
    "Yaris Hybrid",
    "Prius Prime",
    "Mirai Fuel Cell",
  ],
  Honda: [
    "Accord Hybrid",
    "Clarity",
    "Insight",
    "CR-V Hybrid",
    "HR-V",
    "Pilot",
    "Ridgeline",
    "Civic Hybrid",
    "Fit",
    "Odyssey",
    "Passport",
    "Element",
  ],
  Hyundai: [
    "Ioniq 5",
    "Ioniq 6",
    "Sonata Hybrid",
    "Tucson Hybrid",
    "Santa Fe Hybrid",
    "Kona Electric",
    "Ioniq Electric",
    "Veloster N",
    "Elantra Hybrid",
    "Kona Hybrid",
    "Santa Cruz",
    "Palisade",
    "Genesis GV80",
    "Genesis G80",
    "Genesis G90",
    "Genesis G70",
  ],
  Kia: [
    "EV6",
    "Niro EV",
    "Sorento PHEV",
    "Sportage Hybrid",
    "Telluride",
    "K5",
    "Stinger",
    "Seltos",
    "Forte",
    "Optima Hybrid",
    "Cadenza",
    "Soul EV",
    "Niro Hybrid",
    "Rio",
    "Carnival",
    "Stonic",
    "Picanto",
    "Ceed",
    "XCeed",
  ],
  Volkswagen: [
    "ID.4",
    "Arteon",
    "Passat",
    "Touareg",
    "Tiguan",
    "Atlas",
    "Jetta",
    "Golf R",
    "Polo",
    "T-Cross",
    "T-Roc",
    "Scirocco",
    "Beetle",
    "CC",
    "Phaeton",
    "ID.3",
    "ID. Buzz",
    "ID.5",
    "ID.6",
    "ID.7",
  ],
  Corvette: [
    "C8 Stingray",
    "Z06",
    "E-Ray",
    "ZR1",
    "Grand Sport",
    "C7 Stingray",
    "C7 Z06",
    "C6 ZR1",
    "C6 Grand Sport",
    "C5 Z06",
    "C4 Corvette",
    "C3 Corvette",
    "C2 Corvette",
    "C1 Corvette",
  ],
  Maybach: [
    "S 680",
    "GLS 600",
    "S 580",
    "S 560",
    "S 450",
    "S 400",
    "S 600",
    "S 500",
    "S 550",
    "S 350",
    "S 300",
    "GLS 580",
    "GLS 500",
    "GLS 450",
    "GLS 400",
    "GLS 350",
    "GLS 300",
  ],
};

const carFeatures = [
  // Comfort & Convenience
  "Leather Seats",
  "Heated Seats",
  "Ventilated Seats",
  "Massage Seats",
  "Electric Adjustable Seats",
  "Third-Row Seating",
  "Power Tailgate",
  "Remote Start",
  "Keyless Entry",
  "Push-Button Start",
  "Dual-Zone Climate Control",
  "Tri-Zone Climate Control",
  "Ambient Lighting",

  // Tech
  "GPS Navigation",
  "Bluetooth",
  "Wireless Charging",
  "Apple CarPlay",
  "Android Auto",
  "Heads-Up Display",
  "Digital Cockpit",
  "Wi-Fi Hotspot",
  "Touchscreen Display",
  "Rear Entertainment System",

  // Safety
  "Backup Camera",
  "360-Degree Camera",
  "Blind Spot Monitoring",
  "Lane Keep Assist",
  "Adaptive Cruise Control",
  "Automatic Emergency Braking",
  "Parking Sensors",
  "Cross Traffic Alert",
  "Night Vision",
  "Driver Attention Monitoring",

  // Performance & Utility
  "All-Wheel Drive",
  "Four-Wheel Drive",
  "Performance Tires",
  "Tow Package",
  "Sport Suspension",
  "Adjustable Ride Height",
  "Launch Control",

  // Exterior
  "Sunroof",
  "Panoramic Roof",
  "Convertible Roof",
  "Roof Rack",
  "Running Boards",
  "LED Headlights",
  "Fog Lights",

  // Audio & Media
  "Premium Sound System",
  "Satellite Radio",
  "Voice Control",
];

const carColors = [
  // Luxury/Tinted Variants
  "British Racing Green",
  "Champagne",
  "Burgundy",
  "Midnight Blue",
  "Alpine White",
  "Moonlight Silver",
  "Pearl White",
  "Sunset Orange",
  "Glacier White",
  "Diamond Black",
  "Emerald Green",
  "Sapphire Blue",
  "Ruby Red",
  "Ivory",

  // Modern Finishes
  "Matte Black",
  "Carbon Black",
  "Metallic Silver",
  "Gunmetal Gray",
  "Cement Gray",
  "Nardo Gray",
  "Matte Gray",
  "Steel Blue",
  "Canyon Red",
  "Forest Green",
  "Bronze",
  "Rose Gold",
  "Copper",
  "Ice Blue",
  "Ocean Teal",
  "Graphite",
  "Lava Orange",
  "Amethyst Purple",
];

const pickupLocations = [
  "Main Terminal", // General airport terminal
  "VIP Terminal", // Private or premium terminal
  "Car Rental Center", // Dedicated car rental facility (often offsite)
  "Airport Curbside", // Direct curbside pickup at airport
  "Hotel Lobby", // Valet or front desk pickup
  "Downtown Office", // Rental branch in city center
  "Train Station", // Common for urban or intercity pickup
  "Bus Terminal", // Useful for intermodal travelers
  "Convention Center", // For events or business travelers
  "Residential Address", // Home delivery or peer-to-peer rental
  "Shopping Mall", // Parking garage pickup or storefront
  "Cruise Port", // For cities with major cruise terminals
  "Transit Hub", // Covers subway/light rail stations
  "University Campus", // Common for student rentals or short trips
  "Dealer Lot", // Often used for peer-to-peer pickup
];

// Generate a random luxury car with all required properties
function generateLuxuryRentalCar(city, index) {
  // Determine car type - use specific type if provided, otherwise random
  const carTypes = [
    "Sedan",
    "SUV",
    "Convertible",
    "Coupe",
    "Sports Car",
    "Electric",
    "Hybrid",
    "Limousine",
  ];
  const carType =
    options.carType || carTypes[Math.floor(Math.random() * carTypes.length)];

  // Select car make based on type
  const makesForType = carMakes[carType];
  const make = makesForType[Math.floor(Math.random() * makesForType.length)];

  // Select car model based on make
  const models = carModels[make] || ["Premium"];
  const model = models[Math.floor(Math.random() * models.length)];

  // Get country and region for the city
  const country = cityCountryMap[city] || "";
  const region = cityToRegionMap[city] || "";

  // Determine currency based on country, with fallbacks
  let currency;
  if (euroCountries.includes(country)) {
    currency = "EUR";
  } else if (countryCurrencyMap[country]) {
    currency = countryCurrencyMap[country];
  } else if (regionCurrencyMap[region]) {
    currency = regionCurrencyMap[region];
  } else {
    currency = "USD"; // Default fallback
  }

  // Generate ID
  const id = `car-${city.toLowerCase().replace(/\s+/g, "-")}-${make.toLowerCase().replace(/\s+/g, "-")}-${index + 1}`;

  // Generate year (between 2019 and 2023)
  const year = Math.floor(Math.random() * 5) + 2019;

  // Generate seats (based on car type)
  let seats;
  switch (carType) {
    case "Sports Car":
      seats = Math.random() < 0.7 ? 2 : 4;
      break;
    case "Sedan":
    case "Coupe":
      seats = Math.random() < 0.8 ? 5 : 4;
      break;
    case "SUV":
      seats = Math.random() < 0.5 ? 5 : 7;
      break;
    case "Limousine":
      seats = Math.floor(Math.random() * 4) + 4; // 4-7
      break;
    default:
      seats = Math.floor(Math.random() * 3) + 2; // 2-4
  }

  // Generate transmission (mostly automatic for luxury cars)
  const transmission = Math.random() < 0.9 ? "Automatic" : "Manual";

  // Generate fuel type (based on car type)
  let fuelType;
  if (carType === "Electric") {
    fuelType = "Electric";
  } else if (carType === "Hybrid") {
    fuelType = "Hybrid";
  } else {
    fuelType = Math.random() < 0.7 ? "Petrol" : "Diesel";
  }

  // Generate horsepower
  const horsepowerBase = {
    Sedan: 250,
    SUV: 300,
    Convertible: 350,
    Coupe: 400,
    "Sports Car": 500,
    Electric: 450,
    Hybrid: 375,
    Limousine: 325,
  };
  const horsepower = horsepowerBase[carType] + Math.floor(Math.random() * 200);

  // Generate color options (3-5 colors)
  const numColors = Math.floor(Math.random() * 3) + 3;
  const colorOptions = Array.from(
    new Set(
      Array(numColors)
        .fill(0)
        .map(() => carColors[Math.floor(Math.random() * carColors.length)])
    )
  );

  // Generate features (5-10 features)
  const numFeatures = Math.floor(Math.random() * 6) + 5;
  const features = Array.from(
    new Set(
      Array(numFeatures)
        .fill(0)
        .map(() => carFeatures[Math.floor(Math.random() * carFeatures.length)])
    )
  );

  // Generate rental price per day (based on car type and make)
  let basePrice;
  switch (carType) {
    case "Sports Car":
      basePrice = 1000;
      break;
    case "Limousine":
      basePrice = 800;
      break;
    case "Convertible":
      basePrice = 600;
      break;
    case "Electric":
    case "Hybrid":
      basePrice = 500;
      break;
    case "SUV":
      basePrice = 450;
      break;
    case "Coupe":
      basePrice = 400;
      break;
    default:
      basePrice = 300;
  }

  // Premium brands add to the price
  if (
    [
      "Ferrari",
      "Lamborghini",
      "Rolls-Royce",
      "Bentley",
      "Bugatti",
      "McLaren",
    ].includes(make)
  ) {
    basePrice *= 1.8;
  } else if (["Porsche", "Aston Martin", "Maserati"].includes(make)) {
    basePrice *= 1.5;
  } else if (
    ["Mercedes-Benz", "BMW", "Audi", "Lexus", "Jaguar"].includes(make)
  ) {
    basePrice *= 1.2;
  }

  const rentalPricePerDay = Math.round(basePrice + Math.random() * 200);

  // Currency based on country (simplified)
  // const country = cityCountryMap[city] || "";
  // let currency;
  // if (["United States", "Puerto Rico"].includes(country)) {
  //   currency = "USD";
  // } else if (["United Kingdom"].includes(country)) {
  //   currency = "GBP";
  // } else if (["Japan"].includes(country)) {
  //   currency = "JPY";
  // } else {
  //   currency = "EUR"; // Default to EUR for most locations
  // }

  // Availability (70% chance of being available)
  const available = Math.random() < 0.7;

  // Pick-up location
  const pickUpLocation =
    pickupLocations[Math.floor(Math.random() * pickupLocations.length)];

  // Generate image URL
  const imageUrl = `https://images.unsplash.com/${carType.toLowerCase().replace(/\s+/g, "-")}/${make.toLowerCase().replace(/\s+/g, "-")}-${model.toLowerCase().replace(/\s+/g, "-")}.jpg`;

  // Generate description
  const descriptions = [
    `Experience the luxury and power of the ${year} ${make} ${model}. This stunning ${carType.toLowerCase()} offers an unforgettable driving experience in ${city}.`,
    `Discover ${city} in style with the ${year} ${make} ${model}. With ${horsepower} horsepower and premium features, this ${carType.toLowerCase()} is the perfect companion for your journey.`,
    `The ${year} ${make} ${model} combines elegance with performance. Enjoy premium features like ${features[0]} and ${features[1]} while exploring ${city} in this remarkable ${carType.toLowerCase()}.`,
    `Turn heads in ${city} with the sophisticated ${year} ${make} ${model}. This exceptional ${carType.toLowerCase()} offers unparalleled luxury and performance for discerning drivers.`,
    `Elevate your ${city} experience with the prestigious ${year} ${make} ${model}. This high-performance ${carType.toLowerCase()} delivers an incomparable driving experience with premium comfort.`,
  ];

  const description =
    descriptions[Math.floor(Math.random() * descriptions.length)];

  // Minimum rental age (usually 25 for luxury cars, 30 for exotic)
  const minimumRentalAge =
    ["Sports Car", "Convertible"].includes(carType) ||
    ["Ferrari", "Lamborghini", "McLaren", "Bugatti"].includes(make)
      ? 30
      : 25;

  // Generate deposit amount (typically 1.5-3x daily rate)
  const depositMultiplier = Math.floor(Math.random() * 3) + 2; // 2-4x daily rate
  const depositAmount = rentalPricePerDay * depositMultiplier;

  // Generate insurance included (50% chance)
  const insuranceIncluded = Math.random() < 0.5;

  return {
    id,
    make,
    model,
    year,
    type: carType,
    seats,
    transmission,
    fuelType,
    horsepower,
    colorOptions,
    features,
    rentalPricePerDay,
    currency, // Now using location-based currency
    available,
    pickUpCity: `${formatKebebToTitleCase(city)}`,
    pickUpCountry: country,
    pickUpLocation,
    imageUrl,
    description,
    insuranceIncluded,
    minimumRentalAge,
    depositAmount,
  };
}

// Check if directory exists, create if needed
async function ensureDirectoryExists(dirPath) {
  try {
    await access(dirPath);
  } catch {
    await mkdir(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
}

// Check if file exists
async function fileExists(filePath) {
  try {
    await access(filePath, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

// Extract existing cars from a file
async function extractExistingCars(filePath) {
  try {
    const content = await readFile(filePath, "utf-8");
    const match = content.match(
      /export const \w+: LuxuryRentalCar\[\] = \[([\s\S]*?)\];/
    );
    if (!match || !match[1]) return [];

    const itemsText = match[1].trim();
    if (!itemsText) return [];

    const items = [];
    let bracketCount = 0;
    let currentItem = "";

    for (let i = 0; i < itemsText.length; i++) {
      const char = itemsText[i];

      if (char === "{") bracketCount++;
      if (char === "}") bracketCount--;

      currentItem += char;

      if (bracketCount === 0 && currentItem.trim()) {
        try {
          const cleanedItem = currentItem.replace(/,\s*$/, "");
          const obj = new Function(`return ${cleanedItem}`)();
          items.push(obj);
          currentItem = "";
        } catch (e) {
          console.warn("Failed to parse car:", e);
          currentItem = "";
        }
      }
    }

    return items;
  } catch (e) {
    console.error("Error extracting cars:", e);
    return [];
  }
}

// Generate cars and write to file
async function generateCityFile(city) {
  const countryName = cityCountryMap[city] || "";
  const regionName = cityToRegionMap[city] || "";

  const formattedCountry = formatTitleToCamelCase(removeAccents(countryName));
  const formattedRegion = formatTitleToCamelCase(removeAccents(regionName));

  const formattedName = removeAccents(city);

  // Follow the same variable naming convention as yachts
  let variableName;
  if (formattedCountry && formattedRegion) {
    variableName = `${formatKebabToCamelCase(formattedName)}${formattedCountry.replaceAll(".", "")}${formattedRegion}Cars`;
  } else {
    variableName = `${formatKebabToCamelCase(formattedName)}Cars`;
  }

  const destDir = path.join(
    process.cwd(),
    "src",
    "lib",
    "constants",
    "rentals",
    "cars"
  );
  const filePath = path.join(destDir, `${formattedName}.ts`);

  // Check if directory exists
  await ensureDirectoryExists(destDir);

  // Check if file exists
  const exists = await fileExists(filePath);

  // Handle existing file based on options
  let cars = [];
  if (exists) {
    if (options.rewrite) {
      console.log(`Rewriting existing file: ${filePath}`);
    } else if (options.append) {
      console.log(`Appending ${options.append} cars to: ${filePath}`);
      cars = await extractExistingCars(filePath);
    } else {
      console.log(
        `File already exists (use --rewrite to replace): ${filePath}`
      );
      return;
    }
  }

  // Generate cars
  const numNewCars = options.append || Math.floor(Math.random() * 20) + 7; // 3-7 cars
  const newCars = Array(numNewCars)
    .fill(0)
    .map((_, index) => generateLuxuryRentalCar(city, index + cars.length));

  // Combine existing and new cars
  cars = cars.concat(newCars);

  // Create file content with proper formatting
  let content = `// Auto-generated luxury car rentals for ${city}\n`;
  content += `// Country: ${countryName}, Region: ${regionName}\n`;
  content += `// This file is auto-generated. Do not edit manually.\n\n`;
  content += `import { LuxuryRentalCar } from "@/lib/interfaces/services/rentals";\n\n`;
  content += `export const ${variableName}: LuxuryRentalCar[] = [\n`;

  cars.forEach((car, index) => {
    content += `  {\n`;
    for (const [key, value] of Object.entries(car)) {
      if (typeof value === "string") {
        content += `    ${key}: "${value}",\n`;
      } else if (Array.isArray(value)) {
        content += `    ${key}: [${value
          .map((item) => `"${item}"`)
          .join(", ")}],\n`;
      } else {
        content += `    ${key}: ${value},\n`;
      }
    }
    content += `  }${index < cars.length - 1 ? "," : ""}\n`;
  });

  content += `];\n`;

  // Write file
  await writeFile(filePath, content);
  console.log(
    `${exists && !options.rewrite ? "Updated" : "Created"} file: ${filePath}`
  );
}

// Main function to process all cities
async function generateAllCityFiles() {
  let citiesToProcess = cities;

  // Filter by city name if specified
  if (options.cityFilter) {
    const filterLower = options.cityFilter.toLowerCase();
    citiesToProcess = cities.filter((city) =>
      city.toLowerCase().includes(filterLower),
    );

    if (citiesToProcess.length === 0) {
      console.log(`No cities found matching: ${options.cityFilter}`);
      return;
    }

    console.log(
      `Processing ${citiesToProcess.length} cities matching: ${options.cityFilter}`,
    );
  }

  for (const city of citiesToProcess) {
    try {
      await generateCityFile(city);
    } catch (error) {
      console.error(`Error generating file for ${city}:`, error);
    }
  }
}

// Execute the script
generateAllCityFiles()
  .then(() => console.log("City luxury car files generated successfully!"))
  .catch((error) =>
    console.error("Error generating city luxury car files:", error),
  );

// Print usage information
console.log(`
Usage: node scripts/generate-city-cars.mjs [options]

Options:
  --rewrite, -r       Rewrite existing files instead of skipping them
  --append N, -a N    Append N new cars to existing files
  --type T, -t T      Generate cars of a specific type (options: Sedan, SUV, Convertible, Coupe, Sports Car, Electric, Hybrid, Limousine)
  --city C, -c C      Process only cities matching the search term

Examples:
  node scripts/generate-city-cars.mjs --rewrite
  node scripts/generate-city-cars.mjs --append 5
  node scripts/generate-city-cars.mjs --type "Convertible"
  node scripts/generate-city-cars.mjs --city "Monaco" --append 3 --type "Sports Car"
`);
