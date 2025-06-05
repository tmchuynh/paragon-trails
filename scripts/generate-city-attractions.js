"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var util_1 = require("util");
var city_1 = require("../src/lib/constants/info/city");
var readdir = (0, util_1.promisify)(fs.readdir);
var stat = (0, util_1.promisify)(fs.stat);
var writeFile = (0, util_1.promisify)(fs.writeFile);
var mkdir = (0, util_1.promisify)(fs.mkdir);
var access = (0, util_1.promisify)(fs.access);
// Various attraction components
var attractionTypes = [
    "Museum",
    "Park",
    "Monument",
    "Cathedral",
    "Castle",
    "Palace",
    "Market",
    "Square",
    "Bridge",
    "Tower",
    "Garden",
    "Temple",
    "Gallery",
    "Zoo",
];
var possibleTags = [
    "historical",
    "cultural",
    "romantic",
    "adventure",
    "culinary",
    "art-and-music",
    "spiritual",
    "local",
    "wellness",
];
var accessibilityOptions = [
    "wheelchair accessible",
    "limited accessibility",
    "accessible restrooms",
    "elevator access",
    "accessible entrance",
];
// Generate an attraction with all required properties
function generateAttraction(cityName) {
    // Generate random price range and set dependent properties
    var priceRanges = ["$", "$$", "$$$", "$$$$", "free"];
    var priceRange = priceRanges[Math.floor(Math.random() * priceRanges.length)];
    var priceCategory;
    switch (priceRange) {
        case "free":
            priceCategory = "free";
            break;
        case "$":
            priceCategory = "budget";
            break;
        case "$$":
            priceCategory = "moderate";
            break;
        case "$$$":
            priceCategory = "expensive";
            break;
        case "$$$$":
            priceCategory = "luxury";
            break;
    }
    // Set entry fee and category
    var entryFee;
    var entryFeeCategory;
    if (priceRange === "free" || Math.random() < 0.3) {
        entryFee = "Free";
        entryFeeCategory = "free";
    }
    else {
        var fee = Math.floor(Math.random() * 100) + 5;
        var currencySymbols = ["$", "€", "£", "¥"];
        var currencySymbol = currencySymbols[Math.floor(Math.random() * currencySymbols.length)];
        entryFee = "".concat(currencySymbol).concat(fee);
        if (fee < 15)
            entryFeeCategory = "budget";
        else if (fee < 50)
            entryFeeCategory = "moderate";
        else if (fee < 100)
            entryFeeCategory = "expensive";
        else
            entryFeeCategory = "luxury";
    }
    // Generate tags
    var numTags = Math.floor(Math.random() * 3) + 1;
    var tags = Array.from(new Set(Array(numTags)
        .fill(0)
        .map(function () { return possibleTags[Math.floor(Math.random() * possibleTags.length)]; })));
    // Generate accessibility features
    var numFeatures = Math.floor(Math.random() * 2) + 1;
    var accessibilityFeatures = Array.from(new Set(Array(numFeatures)
        .fill(0)
        .map(function () {
        return accessibilityOptions[Math.floor(Math.random() * accessibilityOptions.length)];
    })));
    // Set accessibility-dependent property
    var isWheelchairAccessible = accessibilityFeatures.some(function (f) {
        return f.includes("wheelchair");
    });
    // Generate random time of day
    var timesOfDay = ["all day", "daytime", "evening", "night"];
    var timeOfDay = timesOfDay[Math.floor(Math.random() * timesOfDay.length)];
    // Generate attraction details
    var attractionType = attractionTypes[Math.floor(Math.random() * attractionTypes.length)];
    var title = "".concat(cityName, " ").concat(attractionType);
    var description = "A beautiful ".concat(attractionType.toLowerCase(), " in ").concat(cityName, " offering visitors a unique cultural experience and stunning views.");
    var location = "".concat(Math.floor(Math.random() * 200) + 1, " Main Street, ").concat(cityName);
    var hours = ["9 AM - 5 PM", "10 AM - 6 PM", "Open 24 hours"][Math.floor(Math.random() * 3)];
    // Set isFree dependent on priceRange
    var isFree = priceRange === "free";
    // Generate other flag properties
    var isHistorical = Math.random() < 0.4;
    var isRomantic = Math.random() < 0.3;
    var isLuxury = priceCategory === "luxury";
    var isOffTheBeatenPath = Math.random() < 0.2;
    var isLocalExperience = Math.random() < 0.4;
    var isPetFriendly = Math.random() < 0.5;
    var isOutdoor = Math.random() < 0.5;
    var isIndoor = !isOutdoor;
    return {
        title: title,
        description: description,
        imageUrl: "https://plus.unsplash.com/".concat(cityName
            .toLowerCase()
            .replace(/\s+/g, "-"), "-").concat(attractionType
            .toLowerCase()
            .replace(/\s+/g, "-"), ".jpg"),
        location: location,
        openingHours: hours,
        entryFee: entryFee,
        entryFeeCategory: entryFeeCategory,
        priceRange: priceRange,
        priceCategory: priceCategory,
        timeOfDay: timeOfDay,
        rating: parseFloat((4.2 + Math.random() * 0.8).toFixed(1)),
        tags: tags,
        accessibilityFeatures: accessibilityFeatures,
        isPopular: true,
        isFree: isFree,
        isPetFriendly: isPetFriendly,
        isWheelchairAccessible: isWheelchairAccessible,
        isHistorical: isHistorical,
        isRomantic: isRomantic,
        isOffTheBeatenPath: isOffTheBeatenPath,
        isLocalExperience: isLocalExperience,
        isLuxury: isLuxury,
        isOutdoor: isOutdoor,
        isIndoor: isIndoor,
    };
}
// Format city name for variable and file naming
function formatCityName(city) {
    var cityName = city.city.toLowerCase().replace(/\s+/g, "");
    var region = city.region
        ? city.region.toLowerCase().replace(/\s+/g, "")
        : "";
    var state = city.state ? city.state.toLowerCase() : "";
    var country = city.country.toLowerCase().replace(/\s+/g, "");
    var variableName = "".concat(cityName).concat(region || state).concat(country);
    return {
        fileName: cityName,
        variableName: variableName,
    };
}
// Check if directory exists, create if needed
function ensureDirectoryExists(dirPath) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, access(dirPath)];
                case 1:
                    _b.sent();
                    return [3 /*break*/, 4];
                case 2:
                    _a = _b.sent();
                    return [4 /*yield*/, mkdir(dirPath, { recursive: true })];
                case 3:
                    _b.sent();
                    console.log("Created directory: ".concat(dirPath));
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Check if file exists
function fileExists(filePath) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, access(filePath, fs.constants.F_OK)];
                case 1:
                    _b.sent();
                    return [2 /*return*/, true];
                case 2:
                    _a = _b.sent();
                    return [2 /*return*/, false];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// Generate attractions and write to file
function generateCityFile(city) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, fileName, variableName, destDir, filePath, exists, numAttractions, attractions, content;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = formatCityName(city), fileName = _a.fileName, variableName = _a.variableName;
                    destDir = path.join(process.cwd(), "src", "lib", "constants", "destinations", "city");
                    filePath = path.join(destDir, "".concat(fileName, ".ts"));
                    // Check if directory exists
                    return [4 /*yield*/, ensureDirectoryExists(destDir)];
                case 1:
                    // Check if directory exists
                    _b.sent();
                    return [4 /*yield*/, fileExists(filePath)];
                case 2:
                    exists = _b.sent();
                    if (exists) {
                        console.log("File already exists: ".concat(filePath));
                        return [2 /*return*/];
                    }
                    numAttractions = Math.floor(Math.random() * 4) + 5;
                    attractions = Array(numAttractions)
                        .fill(0)
                        .map(function () { return generateAttraction(city.city); });
                    content = "import { Attraction } from \"@/lib/interfaces/services/attractions\";\n\n";
                    content += "export const ".concat(variableName, ": Attraction[] = [\n");
                    attractions.forEach(function (attraction, index) {
                        content += "  {\n";
                        for (var _i = 0, _a = Object.entries(attraction); _i < _a.length; _i++) {
                            var _b = _a[_i], key = _b[0], value = _b[1];
                            if (typeof value === "string") {
                                content += "    ".concat(key, ": \"").concat(value, "\",\n");
                            }
                            else if (Array.isArray(value)) {
                                content += "    ".concat(key, ": [").concat(value
                                    .map(function (item) { return "\"".concat(item, "\""); })
                                    .join(", "), "],\n");
                            }
                            else {
                                content += "    ".concat(key, ": ").concat(value, ",\n");
                            }
                        }
                        content += "  }".concat(index < attractions.length - 1 ? "," : "", "\n");
                    });
                    content += "];\n";
                    // Write file
                    return [4 /*yield*/, writeFile(filePath, content)];
                case 3:
                    // Write file
                    _b.sent();
                    console.log("Created file: ".concat(filePath));
                    return [2 /*return*/];
            }
        });
    });
}
// Main function to process all cities
function generateAllCityFiles() {
    return __awaiter(this, void 0, void 0, function () {
        var _i, cities_1, city, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _i = 0, cities_1 = city_1.cities;
                    _a.label = 1;
                case 1:
                    if (!(_i < cities_1.length)) return [3 /*break*/, 6];
                    city = cities_1[_i];
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, generateCityFile(city)];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error("Error generating file for ".concat(city.city, ":"), error_1);
                    return [3 /*break*/, 5];
                case 5:
                    _i++;
                    return [3 /*break*/, 1];
                case 6: return [2 /*return*/];
            }
        });
    });
}
// Execute the script
generateAllCityFiles()
    .then(function () { return console.log("City attraction files generated successfully!"); })
    .catch(function (error) {
    return console.error("Error generating city attraction files:", error);
});
