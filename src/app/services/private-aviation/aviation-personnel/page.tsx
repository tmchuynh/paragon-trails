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
import { aviationPersonnel } from "@/lib/constants/services/transportation/staff/aviationPersonnel";
import { groupAndSortByProperties } from "@/lib/utils/sort";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";

export default function AviationPersonnel() {
  const [showFilters, setShowFilters] = useState(false);
  // Gather all unique languages and experience years
  const allLanguages = new Set<string>();
  let maxExperience = 0;
  aviationPersonnel.forEach((category) => {
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
  const filteredStaff = aviationPersonnel
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
        <h1>Meet Your Aviation Crew</h1>
        <h5>
          Experienced professionals dedicated to safety, precision, and
          discretion
        </h5>
        <blockquote>
          “The crew’s attention to detail, calm professionalism, and
          personalized service made our flight truly unforgettable.” – Charles
          M., Frequent Flyer
        </blockquote>
        <p>
          Our team of aviation professionals is dedicated to providing
          exceptional service and ensuring the safety and comfort of our
          passengers. From pilots to cabin crew, each member is highly trained
          and experienced in private aviation. We pride ourselves on our
          attention to detail and commitment to excellence in every aspect of
          your flight experience.
        </p>
        <p>
          Inside the cabin, our crew members deliver a service experience that
          rivals five-star hospitality. With specialized training in private
          aviation protocols, luxury service, and in-flight safety, they
          anticipate your needs with grace and discretion—whether you require a
          quiet space to work, curated dining, or personal comfort enhancements.
          Beyond technical skill, what sets our team apart is their attention to
          detail and passion for excellence. Every interaction is guided by
          professionalism, courtesy, and a deep respect for your time, privacy,
          and preferences. At Paragon Trails, you're not just flying—you’re
          being looked after by a team that treats your journey as personally as
          you do.
        </p>
      </header>

      {/* Filter controls */}
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
                        (_, i) => (i + 1) * 5,
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

      {aviationPersonnel.map((category, index) => {
        const sortedCategory = groupAndSortByProperties(
          category.profiles,
          "experienceYears",
          "name",
        );

        return (
          <div key={index} className="mb-12">
            <h2 className="mb-6 pb-2 border-gray-700 border-b">
              {category.category}
            </h2>
            <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {sortedCategory.map((profile, profileIndex) => (
                <div
                  key={profileIndex}
                  className="shadow-md hover:shadow-lg border border-border rounded-lg transition-shadow duration-300 overflow-hidden"
                >
                  <div className="relative py-3 border-tertiary border-b-2">
                    <div className="px-6">
                      <Badge className="right-6 absolute" variant={"secondary"}>
                        {profile.availability}
                      </Badge>
                      <h3 className="mt-4">{profile.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    {/* Availability Tag */}
                    <strong className="mb-3 text-fancy text-sm">
                      {profile.experienceYears} Years Experience
                    </strong>
                    {/* Certifications */}
                    {profile.certifications && (
                      <div className="mb-3">
                        <strong>Certifications:</strong>
                        <ul className="ml-2 text-sm list-disc list-inside">
                          {profile.certifications.map((cert, i) => (
                            <li key={i}>{cert}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {/* Languages */}
                    {profile.languages && (
                      <div className="mb-3">
                        <strong>Languages:</strong>
                        <p className="ml-2 text-sm">
                          {profile.languages.join(", ")}
                        </p>
                      </div>
                    )}
                    {/* Aircraft Types */}
                    {profile.qualifiedAircraft && (
                      <div className="mb-3">
                        <strong>Qualified Aircraft:</strong>
                        <p className="ml-2 text-sm">
                          {profile.qualifiedAircraft.join(", ")}
                        </p>
                      </div>
                    )}
                    {/* Special Training */}
                    {profile.specialTraining && (
                      <div className="mb-3">
                        <strong>Special Training:</strong>
                        <ul className="ml-2 text-sm list-disc list-inside">
                          {profile.specialTraining.map((training, i) => (
                            <li key={i}>{training}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {/* Specialties (for chefs) */}
                    {profile.specialties && (
                      <div className="mb-3">
                        <p>Specialties:</p>
                        <ul className="ml-2 text-sm list-disc list-inside">
                          {profile.specialties.map((specialty, i) => (
                            <li key={i}>{specialty}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {/* Responsibilities */}
                    {profile.responsibilities && (
                      <div className="mb-3">
                        <p>Responsibilities:</p>
                        <ul className="ml-2 text-sm list-disc list-inside">
                          {profile.responsibilities.map((resp, i) => (
                            <li key={i}>{resp}</li>
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
      })}
    </div>
  );
}
