"use client";

import Loading from "@/components/Loading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  tourCategories,
  tourCategoryMap,
} from "@/lib/constants/info/tourCategories";
import { TourGuide } from "@/lib/interfaces/people/staff";
import { formatToSlug } from "@/lib/utils/format";
import { getAllTourGuides } from "@/lib/utils/get";
import {
  generateRandomString,
  groupAndSortByProperties,
} from "@/lib/utils/sort";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export default function TourGuides() {
  const router = useRouter();
  const [tourGuides, setTourGuides] = useState<TourGuide[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Await the Promise from getToolResource
        const data = await getAllTourGuides();
        setTourGuides(data);
      } catch (error) {
        console.error("Failed to load affirmation cards:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log("Tour Guides Data:", tourGuides);

  // Filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [selectedCity, setSelectedCity] = useState<string>("all");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("all");

  // Extract unique values for filters
  const allCountries = [
    ...new Set(tourGuides.map((guide) => guide.country)),
  ].sort();
  const allCities = [...new Set(tourGuides.map((guide) => guide.city))].sort();

  const allLanguages = [
    ...new Set(tourGuides.flatMap((guide) => guide.languages || [])),
  ].sort();

  const allSpecialties = [
    ...new Set(tourGuides.flatMap((guide) => guide.specialties || [])),
  ].sort();

  // Filter tour guides based on selected filters
  const filteredTourGuides = useMemo(() => {
    return tourGuides.filter((guide) => {
      // Filter by search query (name)
      if (
        searchQuery &&
        !guide.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Filter by country
      if (selectedCountry !== "all" && guide.country !== selectedCountry) {
        return false;
      }

      // Filter by city
      if (selectedCity !== "all" && guide.city !== selectedCity) {
        return false;
      }

      // Filter by language
      if (
        selectedLanguage !== "all" &&
        !(guide.languages || []).includes(selectedLanguage)
      ) {
        return false;
      }

      // Filter by specialty - check both category IDs and display names
      if (selectedSpecialty !== "all") {
        const specialties = guide.specialties || [];
        const matchesId = specialties.includes(selectedSpecialty);

        // Check if the selected specialty matches a category name from our official categories
        const matchesName = specialties.some((specialty) => {
          const category = Object.values(tourCategoryMap).find(
            (cat) => cat.title.toLowerCase() === specialty.toLowerCase(),
          );
          return category && category.id === selectedSpecialty;
        });

        if (!matchesId && !matchesName) {
          return false;
        }
      }

      return true;
    });
  }, [
    searchQuery,
    selectedCountry,
    selectedCity,
    selectedLanguage,
    selectedSpecialty,
    tourGuides,
  ]);

  // Sort filtered tour guides by country and then by name
  const sortedTourGuides = useMemo(() => {
    return groupAndSortByProperties(filteredTourGuides, "country", "name");
  }, [filteredTourGuides]);

  // Group tour guides by country for better organization
  const guidesByCountry = useMemo(() => {
    return sortedTourGuides.reduce(
      (acc, guide) => {
        const country = guide.country || "Global";
        if (!acc[country]) {
          acc[country] = [];
        }
        acc[country].push(guide);
        return acc;
      },
      {} as Record<string, typeof tourGuides>,
    );
  }, [sortedTourGuides]);

  // Sort countries alphabetically
  const sortedCountries = useMemo(() => {
    return Object.keys(guidesByCountry).sort();
  }, [guidesByCountry]);

  // Update available cities when country changes
  const availableCities = useMemo(() => {
    if (selectedCountry === "all") return allCities;
    return [
      ...new Set(
        tourGuides
          .filter((guide) => guide.country === selectedCountry)
          .map((guide) => guide.city),
      ),
    ].sort();
  }, [selectedCountry, allCities]);

  // Reset dependent filters when parent filter changes
  useEffect(() => {
    if (selectedCountry !== "all") {
      // Check if the currently selected city is available in the filtered list
      const cityStillValid = availableCities.includes(selectedCity);
      if (!cityStillValid && selectedCity !== "all") {
        setSelectedCity("all");
      }
    }
  }, [selectedCountry, availableCities, selectedCity]);

  // Scroll to section function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (loading) {
    return <Loading />;
  }

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCountry("all");
    setSelectedCity("all");
    setSelectedLanguage("all");
    setSelectedSpecialty("all");
  };

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>The Ones Who Lead The Way</h1>
        <h5>
          Passionate Locals. Expert Storytellers. Your Gateway to Authentic
          Experiences.
        </h5>
        <blockquote>
          "Our guides don't just show you places; they open doors to experiences
          that would otherwise remain hidden."
          <cite>— Alexandra Chen, Head of Guide Relations</cite>
        </blockquote>
      </header>

      <section className="mb-16">
        <p className="mx-auto mb-12 max-w-3xl text-center">
          Paragon Trails guides are carefully selected for their deep local
          knowledge, storytelling abilities, and passion for sharing their
          culture. Many are published authors, renowned historians, or respected
          cultural figures in their communities. All are committed to creating
          meaningful connections between travelers and destinations.
        </p>

        {/* Filter section */}
        <section className="bg-muted/30 my-8 p-6 rounded-lg">
          <h2 className="mb-4">Find Your Perfect Guide</h2>

          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mb-4">
            {/* Search by name */}
            <div>
              <Label htmlFor="search-name">Search by Name</Label>
              <Input
                id="search-name"
                placeholder="Guide name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filter by country */}
            <div>
              <Label htmlFor="filter-country">Filter by Country</Label>
              <Select
                value={selectedCountry}
                onValueChange={setSelectedCountry}
              >
                <SelectTrigger id="filter-country">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Countries</SelectItem>
                  {allCountries.map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Filter by city */}
            <div>
              <Label htmlFor="filter-city">Filter by City</Label>
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger id="filter-city">
                  <SelectValue placeholder="Select city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Cities</SelectItem>
                  {availableCities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Filter by language */}
            <div>
              <Label htmlFor="filter-language">Filter by Language</Label>
              <Select
                value={selectedLanguage}
                onValueChange={setSelectedLanguage}
              >
                <SelectTrigger id="filter-language">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Languages</SelectItem>
                  {allLanguages.map((language) => (
                    <SelectItem key={language} value={language}>
                      {language}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Filter by specialty - updated to use official categories */}
            <div>
              <Label htmlFor="filter-specialty">Filter by Specialty</Label>
              <Select
                value={selectedSpecialty}
                onValueChange={setSelectedSpecialty}
              >
                <SelectTrigger id="filter-specialty">
                  <SelectValue placeholder="Select specialty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Specialties</SelectItem>
                  {tourCategories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.title}
                    </SelectItem>
                  ))}
                  {allSpecialties
                    .filter(
                      (specialty) =>
                        !tourCategories.some(
                          (cat) =>
                            cat.title.toLowerCase() ===
                              specialty.toLowerCase() || cat.id === specialty,
                        ),
                    )
                    .map((specialty) => (
                      <SelectItem key={specialty} value={specialty}>
                        {specialty}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button variant="outline" onClick={clearFilters}>
            Clear Filters
          </Button>

          {filteredTourGuides.length === 0 && (
            <p className="mt-4 text-center text-muted-foreground">
              No tour guides found matching your criteria. Please try adjusting
              your filters.
            </p>
          )}
        </section>

        {/* Table of Contents */}
        {filteredTourGuides.length > 0 && (
          <section className="bg-muted/30 my-8 p-6 rounded-lg">
            <h2 className="mb-4">Quick Navigation</h2>
            <div className="flex flex-wrap gap-3">
              {sortedCountries.map((country) => (
                <Button
                  key={`toc-${formatToSlug(country)}-${generateRandomString(
                    5,
                  )}`}
                  variant="outline"
                  size="sm"
                  onClick={() => scrollToSection(formatToSlug(country))}
                >
                  {country}
                </Button>
              ))}
            </div>
          </section>
        )}

        <Accordion type="single" collapsible>
          {sortedCountries.map((country, index) => {
            const sortedTourGuides = groupAndSortByProperties(
              guidesByCountry[country],
              "city",
              "name",
            );

            return (
              <AccordionItem
                id={formatToSlug(country)}
                value={`${country}-${index}`}
                key={`${country}-${index}-${generateRandomString(5)}`}
                className="bg-card scroll-mt-24 mb-16 px-6 border border-border rounded-2xl"
              >
                <AccordionTrigger>
                  <h2 className="mb-0">{country}</h2>
                </AccordionTrigger>

                <AccordionContent>
                  <ul className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-7 border-t-2 border-tertiary">
                    {sortedTourGuides.map((guide) => (
                      <li
                        key={`${guide.name}-${generateRandomString(5)}`}
                        className="bg-card border border-border rounded-lg transition-shadow overflow-hidden"
                      >
                        <div className="relative h-64">
                          <Image
                            alt={`Portrait of ${guide.name}`}
                            src={
                              guide.profileImage ||
                              "/images/people/default-tour-guide.jpg"
                            }
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="p-6">
                          <h3 className="mb-1 font-semibold text-xl">
                            {guide.name}
                          </h3>
                          <p className="mb-3 text-tertiary">
                            {guide.city}, <span>{guide.country}</span>
                          </p>

                          {/* Render badge with proper display name for official categories */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {guide.specialties &&
                              guide.specialties.map((specialty, index) => {
                                const officialCategory = tourCategories.find(
                                  (cat) => cat.id === specialty,
                                );
                                const displayName = officialCategory
                                  ? officialCategory.title
                                  : specialty;

                                return (
                                  <Badge
                                    size={"lg"}
                                    key={index}
                                    variant="secondary"
                                  >
                                    {displayName}
                                  </Badge>
                                );
                              })}
                          </div>

                          <p className="mb-3">"{guide.quote}"</p>

                          {guide.languages && (
                            <p>
                              <strong>Languages:</strong>{" "}
                              {guide.languages.join(", ")}
                            </p>
                          )}

                          <Button
                            className="mt-5 w-full"
                            onClick={() =>
                              router.push(
                                `/luxurious-destinations/${guide.country}/${guide.city}/tours?city=${guide.city}&country=${guide.country}`,
                              )
                            }
                          >
                            View Available Tours in {guide.city}
                          </Button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </section>

      <section className="mb-16">
        <h2>Our Guide Selection Process</h2>

        <div className="gap-8 grid grid-cols-1 md:grid-cols-3 mt-8">
          <div className="bg-card p-6 border border-border rounded-lg">
            <div className="flex justify-center items-center bg-primary/10 mb-4 rounded-full w-12 h-12 text-primary">
              1
            </div>
            <h3 className="mb-3">Local Expertise</h3>
            <p>
              We select guides who have deep, often academic knowledge of their
              regions, with a minimum of five years living experience in their
              guide location.
            </p>
          </div>

          <div className="bg-card p-6 border border-border rounded-lg">
            <div className="flex justify-center items-center bg-primary/10 mb-4 rounded-full w-12 h-12 text-primary">
              2
            </div>
            <h3 className="mb-3">Rigorous Training</h3>
            <p>
              Our guides undergo extensive training in cultural sensitivity,
              sustainability practices, and emergency protocols beyond standard
              certifications.
            </p>
          </div>

          <div className="bg-card p-6 border border-border rounded-lg">
            <div className="flex justify-center items-center bg-primary/10 mb-4 rounded-full w-12 h-12 text-primary">
              3
            </div>
            <h3 className="mb-3">Exceptional Storytelling</h3>
            <p>
              The ability to weave history, culture, and personal insights into
              compelling narratives is essential for all Paragon Trails guides.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2>Interested in Joining Our Guide Network?</h2>
        <p className="mb-6">
          We're always looking for exceptional local experts to join our global
          network of guides. If you have deep knowledge of your region, a
          passion for storytelling, and a commitment to creating authentic
          travel experiences, we'd love to hear from you.
        </p>

        <p>
          Contact our Guide Relations team at{" "}
          <a
            href="mailto:guides@paragontrails.com"
            className="text-primary hover:underline"
          >
            guides@paragontrails.com
          </a>
        </p>
      </section>
    </div>
  );
}
