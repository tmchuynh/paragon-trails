"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { driverQualificationMatrix } from "@/lib/constants/services/transportation/staff/drivers";
import { groupAndSortByProperties } from "@/lib/utils/sort";
import { useState } from "react";

export default function AvailableDriversPage() {
  // Gather all unique languages and experience years
  const allLanguages = new Set<string>();
  let maxExperience = 0;
  driverQualificationMatrix.forEach((category) => {
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
  const filteredStaff = driverQualificationMatrix
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

  const handleExperienceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === "" ? null : parseInt(e.target.value, 10);
    setExperienceFilter(value);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguageFilter(e.target.value);
  };

  const resetFilters = () => {
    setExperienceFilter(null);
    setLanguageFilter("");
  };

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>Expertise on Every Mile</h1>
        <h5>
          Skilled chauffeurs ensuring safe, comfortable, and timely journeys.
        </h5>
        <blockquote>
          "Having a professional driver made all the difference—effortless
          travel with exceptional service from start to finish." – Emily R.,
          Frequent Traveler
        </blockquote>
        <p>
          Whether you need a swift city transfer or a dedicated chauffeur for a
          long-distance journey, our network of professional drivers is at your
          service. At Paragon Trails, we understand that the right driver can
          transform your travel experience—from a routine ride into a journey
          marked by comfort, reliability, and discretion. Our drivers are
          carefully vetted, highly trained, and deeply familiar with regional
          routes and local nuances. Each brings years of experience in executive
          transport, with an unwavering commitment to safety, punctuality, and
          guest care. Whether you prefer conversational engagement or a quiet
          ride, our drivers adapt to your preferences to ensure a seamless and
          personalized experience.
        </p>
      </header>

      {/* Filter Section */}
      <div className="bg-muted/20 mb-8 p-4 border border-border rounded-lg">
        <h3 className="mb-4">Filter Personnel</h3>
        <div className="gap-4 grid grid-cols-1 md:grid-cols-3">
          <div>
            <label htmlFor="experience" className="block mb-2 text-sm">
              Minimum Experience
            </label>
            <select
              className="p-2 border rounded w-full"
              value={experienceFilter || ""}
              onChange={handleExperienceChange}
            >
              <option value="">Any</option>
              {Array.from(
                { length: Math.ceil(maxExperience / 5) },
                (_, i) => (i + 1) * 5
              )
                .filter((num) => num <= maxExperience)
                .concat(maxExperience % 5 !== 0 ? [maxExperience] : [])
                .sort((a, b) => a - b)
                .map((num) => (
                  <option key={num} value={num}>
                    {num}+ Years
                  </option>
                ))}
            </select>
          </div>

          <div>
            <label htmlFor="language" className="block mb-2 text-sm">
              Language Spoken
            </label>
            <select
              className="p-2 border rounded w-full"
              value={languageFilter}
              onChange={handleLanguageChange}
            >
              <option value="">Any</option>
              {Array.from(allLanguages)
                .sort((a, b) => a.localeCompare(b))
                .map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
            </select>
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
      </div>

      {/* Driver Categories */}
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

              {/* Driver Grid */}
              <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {sortedCategory.map((profile, profileIndex) => (
                  <div
                    key={profileIndex}
                    className="shadow-md hover:shadow-lg border border-border rounded-lg transition-shadow duration-300 overflow-hidden"
                  >
                    {/* Driver Profile Header */}
                    <div className="relative py-3 border-tertiary border-b-2">
                      <div className="px-6">
                        <Badge
                          className="right-6 absolute"
                          variant={"secondary"}
                        >
                          {profile.availability}
                        </Badge>
                        <h3 className="mt-4">{profile.name}</h3>
                      </div>
                    </div>

                    <div className="p-6">
                      {/* Experience */}
                      <strong className="mb-3 text-fancy text-sm">
                        {profile.experienceYears} Years Experience
                      </strong>

                      {/* Certifications */}
                      <div className="mb-4">
                        <strong>Certifications</strong>
                        <ul className="space-y-1 ml-2 text-sm list-disc list-inside">
                          {profile.certifications?.map((cert, index) => (
                            <li key={index}>{cert}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Languages */}
                      <div className="mb-4">
                        <strong>Languages:</strong>
                        <p className="text-sm">
                          {profile.languages.join(", ")}
                        </p>
                      </div>

                      {/* Special Training */}
                      <div className="mb-4">
                        <div className="flex items-center mb-2">
                          <strong>Special Training:</strong>
                        </div>
                        <ul className="space-y-1 ml-2 text-sm list-disc list-inside">
                          {profile.specialTraining?.map((training, index) => (
                            <li key={index}>{training}</li>
                          ))}
                        </ul>
                      </div>
                      {/* Specialties (if available) */}
                      {profile.specialties && (
                        <div className="mb-4">
                          <strong>Specialties:</strong>
                          <ul className="space-y-1 ml-2 text-sm list-disc list-inside">
                            {profile.specialties.map((specialty, index) => (
                              <li key={index}>{specialty}</li>
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
            No drivers match your filter criteria
          </h3>
          <Button variant={"accent"} onClick={resetFilters}>
            Reset All Filters
          </Button>
        </div>
      )}
    </div>
  );
}
