"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { yachtStaff } from "@/lib/constants/services/transportation/staff/yachtStaff";
import { groupAndSortByProperties } from "@/lib/utils/sort";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";

export default function CaptainsAndCrewMembersPage() {
  const [showFilters, setShowFilters] = useState(false);
  // Gather all unique languages and experience years
  const allLanguages = new Set<string>();
  let maxExperience = 0;
  yachtStaff.forEach((category) => {
    category.profiles.forEach((profile) => {
      profile.languages.forEach((lang) => allLanguages.add(lang));
      if (profile.experienceYears > maxExperience) {
        maxExperience = profile.experienceYears;
      }
    });
  });

  // Filter states
  const [experienceFilter, setExperienceFilter] = useState<number | null>(null);
  const [languageFilter, setLanguageFilter] = useState<string>("");

  // Filtering logic
  const filteredStaff = yachtStaff
    .map((category) => {
      const filteredProfiles = category.profiles.filter((profile) => {
        // Experience filter
        if (
          experienceFilter !== null &&
          profile.experienceYears < experienceFilter
        ) {
          return false;
        }
        // Language filter
        if (
          languageFilter &&
          !profile.languages
            .map((l) => l.toLowerCase())
            .includes(languageFilter.toLowerCase())
        ) {
          return false;
        }
        return true;
      });
      return { ...category, profiles: filteredProfiles };
    })
    .filter((category) => category.profiles.length > 0);

  const handleExperienceChange = (value: string) => {
    const numValue = value === "any" ? null : parseInt(value, 10);
    setExperienceFilter(numValue);
  };

  const handleLanguageChange = (value: string) => {
    setLanguageFilter(value === "any" ? "" : value);
  };

  const resetFilters = () => {
    setExperienceFilter(null);
    setLanguageFilter("");
  };

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>Command & Concierge at Sea</h1>
        <h5>
          Meet the experienced professionals who ensure your voyage is seamless,
          safe, and exceptional.
        </h5>
        <blockquote>
          "Our crew is dedicated to delivering impeccable service and expert
          navigation, making every journey aboard your private yacht
          unforgettable." — Samantha R., Yacht Charter Specialist
        </blockquote>
        <p>
          Whether you're looking for a skilled captain to navigate your yacht or
          a professional crew to enhance your sailing experience, we have a
          variety of options to suit your needs. Our crew members are carefully
          selected for their expertise, professionalism, and passion for the
          sea. Browse through our crew profiles to find the perfect match for
          your yacht charter, and let us help you create an unforgettable
          sailing adventure.
        </p>
      </header>

      {/* Filter Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2>Filter Personnel</h2>
          <Button
            onClick={() => setShowFilters(!showFilters)}
            variant="icon"
            size={"sm"}
            className="flex items-center gap-2"
          >
            <FaFilter />
          </Button>
        </div>

        {showFilters && (
          <Card>
            <CardContent>
              <div className="gap-4 grid grid-cols-1 md:grid-cols-3">
                <div>
                  <Label htmlFor="experience" className="block mb-2">
                    <strong>Minimum Experience</strong>
                  </Label>
                  <Select
                    value={
                      experienceFilter === null
                        ? "any"
                        : experienceFilter.toString()
                    }
                    onValueChange={handleExperienceChange}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any</SelectItem>
                      {Array.from(
                        { length: Math.ceil(maxExperience / 5) },
                        (_, i) => (i + 1) * 5
                      )
                        .filter((num) => num <= maxExperience)
                        .concat(maxExperience % 5 !== 0 ? [maxExperience] : [])
                        .sort((a, b) => a - b)
                        .map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num}+ Years
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="language" className="block mb-2">
                    <strong>Language Spoken</strong>
                  </Label>
                  <Select
                    value={languageFilter || "any"}
                    onValueChange={handleLanguageChange}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any</SelectItem>
                      {Array.from(allLanguages)
                        .sort((a, b) => a.localeCompare(b))
                        .map((lang) => (
                          <SelectItem key={lang} value={lang}>
                            {lang}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-end">
                  <Button
                    variant="destructive"
                    onClick={resetFilters}
                    className="my-0 w-full"
                  >
                    Reset Filters
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Staff Categories */}
      {filteredStaff.length > 0 ? (
        filteredStaff.map((category, categoryIndex) => {
          const sortedCategory = groupAndSortByProperties(
            category.profiles,
            "experienceYears",
            "name"
          );

          return (
            <div key={categoryIndex} className="mb-16">
              <h2 className="mb-6 pb-2 border-gray-700 border-b">
                {category.category}
              </h2>

              {/* Staff Grid */}
              <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {sortedCategory.map((profile, profileIndex) => (
                  <div
                    key={profileIndex}
                    className="shadow-md hover:shadow-lg border border-border rounded-lg transition-shadow duration-300 overflow-hidden"
                  >
                    {/* Profile Header */}
                    <div className="relative py-3 border-tertiary border-b-2">
                      <div className="px-6">
                        <Badge
                          className="right-6 absolute"
                          variant={"secondary"}
                        >
                          {category.category.slice(0, -1)}
                        </Badge>
                        <h3 className="mt-4">{profile.name}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      {/* Experience */}
                      <strong className="mb-3 text-fancy text-sm">
                        {profile.experienceYears} Years Experience
                      </strong>

                      {/* Languages */}
                      <div className="mb-4">
                        <strong>Languages:</strong>
                        <p className="text-sm">
                          {profile.languages.join(", ")}
                        </p>
                      </div>

                      {/* Certifications */}
                      <div className="mb-4">
                        <div className="flex items-center mb-2">
                          <strong>Certifications</strong>
                        </div>
                        <ul className="space-y-1 ml-2 text-sm list-disc list-inside">
                          {profile.certifications?.map((cert, index) => (
                            <li key={index}>{cert}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Specialties or Responsibilities */}
                      {profile.specialties && (
                        <div className="mb-4">
                          <strong>Specialties</strong>
                          <ul className="space-y-1 ml-2 text-sm list-disc list-inside">
                            {profile.specialties.map((specialty, index) => (
                              <li key={index}>{specialty}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {profile.responsibilities && (
                        <div className="mb-4">
                          <strong>Responsibilities</strong>
                          <ul className="space-y-1 ml-2 text-sm list-disc list-inside">
                            {profile.responsibilities.map(
                              (responsibility, index) => (
                                <li key={index}>{responsibility}</li>
                              )
                            )}
                          </ul>
                        </div>
                      )}

                      {/* Special Training (if available) */}
                      {profile.specialTraining && (
                        <div className="mb-4">
                          <strong>Special Training</strong>
                          <ul className="space-y-1 ml-2 text-sm list-disc list-inside">
                            {profile.specialTraining.map((training, index) => (
                              <li key={index}>{training}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })
      ) : (
        <div className="py-12 text-center">
          <h3 className="mb-4 font-semibold text-xl">
            No crew members match your filter criteria
          </h3>
          <Button variant={"accent"} onClick={resetFilters}>
            Reset All Filters
          </Button>
        </div>
      )}
    </div>
  );
}
