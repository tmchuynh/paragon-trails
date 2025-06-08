// scripts/audit-city-attractions.mjs
// Node.js script to audit and synchronize city/attraction data
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Helper to load JS/TS files as modules (for .mjs files)
async function loadModule(filePath) {
  return import(filePath);
}

// Load cityFiles from city.ts (parse as text)
function getCityFiles() {
  const cityTsPath = path.join(__dirname, "../src/lib/constants/info/city.ts");
  const content = fs.readFileSync(cityTsPath, "utf-8");
  const match = content.match(/export const cityFiles = \[([\s\S]*?)\];/);
  if (!match) throw new Error("cityFiles array not found in city.ts");
  return match[1]
    .split(",")
    .map((s) => s.trim().replace(/['"]/g, ""))
    .filter(Boolean);
}

// Load attractionBasicInfo and attractionDetails
async function getAttractionUtils() {
  const basicPath = path.join(__dirname, "utils/attraction-basic-utils.mjs");
  const detailsPath = path.join(
    __dirname,
    "utils/attraction-details-utils.mjs"
  );
  const { attractionBasicInfo } = await import(basicPath);
  const { attractionDetails } = await import(detailsPath);
  return { attractionBasicInfo, attractionDetails };
}

function getCityKeys(obj) {
  return Object.keys(obj);
}

function getAttractionCount(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([city, attractions]) => [
      city,
      Object.keys(attractions).length,
    ])
  );
}

function compareCities(
  cityFiles,
  basicKeys,
  detailsKeys,
  basicCounts,
  detailsCounts
) {
  const missingInBasic = cityFiles.filter((c) => !basicKeys.includes(c));
  const missingInDetails = cityFiles.filter((c) => !detailsKeys.includes(c));
  const extraInBasic = basicKeys.filter((c) => !cityFiles.includes(c));
  const extraInDetails = detailsKeys.filter((c) => !cityFiles.includes(c));

  const underpopulated = cityFiles.filter(
    (c) => (basicCounts[c] || 0) < 4 || (detailsCounts[c] || 0) < 4
  );
  const complete = cityFiles.filter(
    (c) =>
      basicKeys.includes(c) &&
      detailsKeys.includes(c) &&
      (basicCounts[c] || 0) >= 4 &&
      (detailsCounts[c] || 0) >= 4
  );
  return {
    missingInBasic,
    missingInDetails,
    extraInBasic,
    extraInDetails,
    underpopulated,
    complete,
  };
}

async function main() {
  const cityFiles = getCityFiles();
  const { attractionBasicInfo, attractionDetails } = await getAttractionUtils();
  const basicKeys = getCityKeys(attractionBasicInfo);
  const detailsKeys = getCityKeys(attractionDetails);
  const basicCounts = getAttractionCount(attractionBasicInfo);
  const detailsCounts = getAttractionCount(attractionDetails);

  const result = compareCities(
    cityFiles,
    basicKeys,
    detailsKeys,
    basicCounts,
    detailsCounts
  );

  console.log("--- City Attraction Data Audit Report ---");
  console.log(`Total cities in cityFiles: ${cityFiles.length}`);
  console.log(`Cities missing in attractionBasicInfo:`, result.missingInBasic);
  console.log(`Cities missing in attractionDetails:`, result.missingInDetails);
  console.log(`Extra cities in attractionBasicInfo:`, result.extraInBasic);
  console.log(`Extra cities in attractionDetails:`, result.extraInDetails);
  console.log(`Cities with fewer than 4 attractions:`, result.underpopulated);
  console.log(
    `Cities fully synchronized and complete:`,
    result.complete.length
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
