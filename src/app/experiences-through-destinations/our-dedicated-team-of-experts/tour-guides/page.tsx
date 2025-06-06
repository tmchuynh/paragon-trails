"use client";

import { useState, useEffect } from "react";
import { getTourGuides } from "@/lib/utils/get/guides";
import { getTourGuideReviews } from "@/lib/utils/get/guides";
import { TourGuide } from "@/lib/interfaces/people/staff";
import { TourType } from "@/lib/interfaces/services/tours";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Loading from "@/components/Loading";
import { Filter, SlidersHorizontal, X } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { displayRatingStars } from "@/lib/utils/displayRatingStars";
import { Testimonial } from "@/lib/interfaces/services/testimonials";

export default function TourGuidesPage() {
  const [guides, setGuides] = useState<TourGuide[]>([]);
  const [filteredGuides, setFilteredGuides] = useState<TourGuide[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [sortField, setSortField] = useState<string>("rating");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  // Filter states
  const [isPopularFilter, setIsPopularFilter] = useState<boolean | null>(null);
  const [isCertifiedFilter, setIsCertifiedFilter] = useState<boolean | null>(
    null
  );
  const [tourTypeFilter, setTourTypeFilter] = useState<TourType | null>(null);
  const [maxGroupSizeFilter, setMaxGroupSizeFilter] = useState<number | null>(
    null
  );
  const [isAvailableFilter, setIsAvailableFilter] = useState<boolean | null>(
    null
  );
  const [minRatingFilter, setMinRatingFilter] = useState<number | null>(null);
  const [minReviewsFilter, setMinReviewsFilter] = useState<number | null>(null);
  const [languageFilter, setLanguageFilter] = useState<string | null>(null);
  const [cityFilter, setCityFilter] = useState<string | null>(null);

  useEffect(() => {
    async function loadGuides() {
      try {
        const allGuides = await getTourGuides();
        setGuides(allGuides);
        setFilteredGuides(allGuides);
      } catch (error) {
        console.error("Error loading tour guides:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadGuides();
  }, []);

  useEffect(() => {
    // Apply filters whenever filter states change
    const filtered = guides.filter((guide) => {
      // Apply each filter if it's set
      if (isPopularFilter !== null && guide.isPopular !== isPopularFilter)
        return false;
      if (isCertifiedFilter !== null && guide.isCertified !== isCertifiedFilter)
        return false;
      if (tourTypeFilter && !guide.tourTypes.includes(tourTypeFilter))
        return false;
      if (
        maxGroupSizeFilter !== null &&
        guide.maxGroupSize > maxGroupSizeFilter
      )
        return false;
      if (isAvailableFilter !== null && guide.available.length === 0)
        return false;
      if (minRatingFilter !== null && guide.rating < minRatingFilter)
        return false;
      if (minReviewsFilter !== null && guide.reviewsCount < minReviewsFilter)
        return false;
      if (languageFilter && !guide.languages.includes(languageFilter))
        return false;
      if (cityFilter && guide.city !== cityFilter) return false;

      return true;
    });

    // Apply sorting
    const sorted = [...filtered].sort((a, b) => {
      let valueA, valueB;

      switch (sortField) {
        case "rating":
          valueA = a.rating;
          valueB = b.rating;
          break;
        case "experience":
          valueA = a.experienceYears;
          valueB = b.experienceYears;
          break;
        case "reviews":
          valueA = a.reviewsCount;
          valueB = b.reviewsCount;
          break;
        case "name":
          valueA = a.name;
          valueB = b.name;
          break;
        default:
          valueA = a[sortField as keyof TourGuide];
          valueB = b[sortField as keyof TourGuide];
      }

      if (valueA !== undefined && valueB !== undefined && valueA < valueB) {
        return sortDirection === "asc" ? -1 : 1;
      }
      if (valueA !== undefined && valueB !== undefined && valueA > valueB) {
        return sortDirection === "asc" ? 1 : -1;
      }
      return 0; // Default return value to ensure a number is always returned
    });

    setFilteredGuides(sorted);
    setCurrentPage(1);
  }, [
    guides,
    isPopularFilter,
    isCertifiedFilter,
    tourTypeFilter,
    maxGroupSizeFilter,
    isAvailableFilter,
    minRatingFilter,
    minReviewsFilter,
    languageFilter,
    cityFilter,
    sortField,
    sortDirection,
  ]);

  if (isLoading) {
    return <Loading />;
  }

  // Get unique values for filters
  const uniqueTourTypes = Array.from(
    new Set(guides.flatMap((guide) => guide.tourTypes))
  );
  const uniqueLanguages = Array.from(
    new Set(guides.flatMap((guide) => guide.languages))
  );
  const uniqueGroupSizes = Array.from(
    new Set(guides.map((guide) => guide.maxGroupSize))
  ).sort((a, b) => a - b);
  const uniqueCities = Array.from(
    new Set(guides.map((guide) => guide.city))
  ).sort();

  // Pagination
  const totalItems = filteredGuides.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalItems);
  const currentGuides = filteredGuides.slice(startIndex, endIndex);

  // Reset filters function
  const resetFilters = () => {
    setIsPopularFilter(null);
    setIsCertifiedFilter(null);
    setTourTypeFilter(null);
    setMaxGroupSizeFilter(null);
    setIsAvailableFilter(null);
    setMinRatingFilter(null);
    setMinReviewsFilter(null);
    setLanguageFilter(null);
    setCityFilter(null);
  };

  // Pagination renderer
  const renderPagination = () => {
    if (totalPages <= 1) return null;

    let pageNumbers: (number | "ellipsis")[] = [];

    if (totalPages <= 7) {
      pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      pageNumbers.push(1);

      if (currentPage <= 3) {
        pageNumbers.push(2, 3, 4, "ellipsis");
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(
          "ellipsis",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1
        );
      } else {
        pageNumbers.push(
          "ellipsis",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "ellipsis"
        );
      }

      pageNumbers.push(totalPages);
    }

    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              aria-disabled={currentPage === 1}
              className={
                currentPage === 1 ? "pointer-events-none opacity-50" : ""
              }
            />
          </PaginationItem>

          {pageNumbers.map((page, index) =>
            page === "ellipsis" ? (
              <PaginationItem key={`ellipsis-${index}`}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem key={page}>
                <PaginationLink
                  isActive={page === currentPage}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            )
          )}

          <PaginationItem>
            <PaginationNext
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              aria-disabled={currentPage === totalPages}
              className={
                currentPage === totalPages
                  ? "pointer-events-none opacity-50"
                  : ""
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  };

  return (
    <div className="mx-auto pt-3 md:pt-6 lg:pt-12 w-10/12 md:w-11/12">
      <div className="flex flex-col gap-6">
        {/* Header and Controls */}
        <div className="flex md:flex-row flex-col justify-between items-start md:items-center gap-4">
          <header>
            <h1 className="text-start">Tour Guides</h1>
            <h5 className="text-start">
              {filteredGuides.length} expert
              {filteredGuides.length !== 1 ? "s" : ""} available
            </h5>
          </header>

          <div className="flex sm:flex-row flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
                size="sm"
              >
                <Filter className="w-4 h-4" />
                {showFilters ? "Hide Filters" : "Show Filters"}
              </Button>

              {/* Sort dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <SlidersHorizontal className="w-4 h-4" />
                    Sort
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem
                    onClick={() => {
                      setSortField("rating");
                      setSortDirection((prev) =>
                        prev === "desc" ? "asc" : "desc"
                      );
                    }}
                  >
                    By Rating{" "}
                    {sortField === "rating" &&
                      (sortDirection === "asc" ? "↑" : "↓")}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      setSortField("experience");
                      setSortDirection((prev) =>
                        prev === "desc" ? "asc" : "desc"
                      );
                    }}
                  >
                    By Experience{" "}
                    {sortField === "experience" &&
                      (sortDirection === "asc" ? "↑" : "↓")}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      setSortField("reviews");
                      setSortDirection((prev) =>
                        prev === "desc" ? "asc" : "desc"
                      );
                    }}
                  >
                    By Reviews{" "}
                    {sortField === "reviews" &&
                      (sortDirection === "asc" ? "↑" : "↓")}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      setSortField("name");
                      setSortDirection((prev) =>
                        prev === "desc" ? "asc" : "desc"
                      );
                    }}
                  >
                    By Name{" "}
                    {sortField === "name" &&
                      (sortDirection === "asc" ? "↑" : "↓")}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Items per page selector */}
            <Select
              value={pageSize.toString()}
              onValueChange={(value) => setPageSize(parseInt(value))}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Guides per page" />
              </SelectTrigger>
              <SelectContent className="max-h-[35em] overflow-y-auto">
                <SelectItem value="12">12 per page</SelectItem>
                <SelectItem value="24">24 per page</SelectItem>
                <SelectItem value="36">36 per page</SelectItem>
                <SelectItem value="48">48 per page</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="gap-6 grid grid-cols-1 lg:grid-cols-4">
          {/* Filters Panel */}
          {showFilters && (
            <div className="space-y-6 lg:col-span-1 shadow p-6 border border-border rounded-lg h-fit">
              <div className="flex justify-between items-center">
                <h3>Filters</h3>
                <Button variant="ghost" onClick={resetFilters}>
                  Reset All
                </Button>
              </div>

              {/* Cities filter */}
              <div className="space-y-2">
                <h5>Location</h5>
                <Select
                  value={cityFilter || "all"}
                  onValueChange={(value) =>
                    setCityFilter(value === "all" ? null : value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select City" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[35em] overflow-y-auto">
                    <SelectItem value="all">All Cities</SelectItem>
                    {uniqueCities.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Popular/Certified Filters */}
              <div className="space-y-2">
                <h5>Status</h5>
                <div className="space-y-1 p-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="popular"
                      checked={isPopularFilter === true}
                      onCheckedChange={(checked) =>
                        setIsPopularFilter(checked ? true : null)
                      }
                    />
                    <Label htmlFor="popular">Popular Guides</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="certified"
                      checked={isCertifiedFilter === true}
                      onCheckedChange={(checked) =>
                        setIsCertifiedFilter(checked ? true : null)
                      }
                    />
                    <Label htmlFor="certified">Certified Guides</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="available"
                      checked={isAvailableFilter === true}
                      onCheckedChange={(checked) =>
                        setIsAvailableFilter(checked ? true : null)
                      }
                    />
                    <Label htmlFor="available">Available Guides</Label>
                  </div>
                </div>
              </div>

              {/* Tour Types filter */}
              <div className="space-y-2">
                <h5>Tour Types</h5>
                <Select
                  value={tourTypeFilter || "all"}
                  onValueChange={(value) =>
                    setTourTypeFilter(
                      value === "all" ? null : (value as TourType)
                    )
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Tour Type" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[35em] overflow-y-auto">
                    <SelectItem value="all">All Types</SelectItem>
                    {uniqueTourTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Languages filter */}
              <div className="space-y-2">
                <h5>Languages</h5>
                <Select
                  value={languageFilter || "all"}
                  onValueChange={(value) =>
                    setLanguageFilter(value === "all" ? null : value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Language" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[35em] overflow-y-auto">
                    <SelectItem value="all">Any Language</SelectItem>
                    {uniqueLanguages.map((language) => (
                      <SelectItem key={language} value={language}>
                        {language}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Reviews Count Filter */}
              <div className="space-y-2">
                <h5>Minimum Reviews</h5>
                <Select
                  value={minReviewsFilter?.toString() || "all"}
                  onValueChange={(value) =>
                    setMinReviewsFilter(value === "all" ? null : Number(value))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Minimum Reviews" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[35em] overflow-y-auto">
                    <SelectItem value="all">Any Number</SelectItem>
                    {[5, 10, 25, 50, 100].map((count) => (
                      <SelectItem key={count} value={count.toString()}>
                        {count}+ Reviews
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Rating Filter */}
              <div className="space-y-2">
                <h5>Minimum Rating</h5>
                <Select
                  value={minRatingFilter?.toString() || "all"}
                  onValueChange={(value) =>
                    setMinRatingFilter(value === "all" ? null : Number(value))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Minimum Rating" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[35em] overflow-y-auto">
                    <SelectItem value="all">Any Rating</SelectItem>
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <SelectItem key={rating} value={rating.toString()}>
                        {rating}+ Stars
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Group Size Filter */}
              <div className="space-y-2">
                <h5>Max Group Size</h5>
                <Select
                  value={maxGroupSizeFilter?.toString() || "all"}
                  onValueChange={(value) =>
                    setMaxGroupSizeFilter(
                      value === "all" ? null : Number(value)
                    )
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Max Group Size" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[35em] overflow-y-auto">
                    <SelectItem value="all">Any Size</SelectItem>
                    {uniqueGroupSizes.map((size) => (
                      <SelectItem key={size} value={size.toString()}>
                        Up to {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Reset Button */}
              <Button
                variant="outline"
                className="w-full"
                onClick={resetFilters}
              >
                Reset All Filters
              </Button>
            </div>
          )}

          {/* Main Content - Tour Guide Cards */}
          <div
            className={`${showFilters ? "lg:col-span-3" : "lg:col-span-4"} space-y-6`}
          >
            {/* Results count */}
            <div className="text-gray-500">
              Showing {startIndex + 1} to {endIndex} of {totalItems} tour guides
            </div>

            {currentGuides.length > 0 ? (
              <>
                {/* Tour Guide Cards in a grid layout */}
                <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {currentGuides.map((guide) => (
                    <TourGuideProfileCard key={guide.id} guide={guide} />
                  ))}
                </div>

                {/* Pagination */}
                {renderPagination()}
              </>
            ) : (
              <div className="flex flex-col justify-center items-center shadow py-12 rounded-lg text-center">
                <div className="mb-4">
                  <X className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="font-semibold text-lg">No tour guides found</h3>
                <p className="mt-2 max-w-md text-gray-500">
                  We couldn't find any tour guides matching your filters. Try
                  adjusting your search criteria or reset filters.
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={resetFilters}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Tour Guide Profile Card in the style shown in the image
function TourGuideProfileCard({ guide }: { guide: TourGuide }) {
  const [reviews, setReviews] = useState<Testimonial[]>([]);
  const [isLoadingReviews, setIsLoadingReviews] = useState(false);

  // Load reviews when dialog opens
  const loadReviews = async () => {
    if (reviews.length > 0) return; // Don't reload if we already have them

    setIsLoadingReviews(true);
    try {
      const guideReviews = await getTourGuideReviews(guide.city, guide.id);
      setReviews(guideReviews);
    } catch (error) {
      console.error(`Error loading reviews for ${guide.name}:`, error);
    } finally {
      setIsLoadingReviews(false);
    }
  };

  return (
    <div className="flex flex-col shadow-md border border-border rounded-lg h-full overflow-hidden">
      {/* Guide Image */}
      <div className="relative h-64">
        <Image
          src={guide.profileImage}
          alt={guide.name}
          className="w-full h-full object-cover"
          width={800}
          height={500}
        />

        {/* Badges for popular and certified */}
        <div className="top-3 right-3 absolute flex flex-col gap-2">
          {guide.isPopular && <Badge>Popular</Badge>}
          {guide.isCertified && <Badge variant="secondary">Certified</Badge>}
        </div>
      </div>

      <div className="flex flex-col justify-between p-4 h-full text-center">
        <div className="h-full">
          <h3>{guide.name}</h3>
          <h5 className="mb-2">
            {guide.city}, {guide.country}
          </h5>
          {/* Rating display */}
          {displayRatingStars(Math.round(guide.rating))}
          {/* Specialty tags */}
          <div className="flex flex-wrap justify-center gap-1 mb-4">
            {guide.specialties?.slice(0, 2).map((specialty) => (
              <Badge key={specialty} variant="outline" size="sm">
                {specialty}
              </Badge>
            ))}
            {(guide.specialties?.length || 0) > 2 && (
              <Badge variant="outline" size="sm">
                +{(guide.specialties?.length || 0) - 2} more
              </Badge>
            )}
          </div>
        </div>

        {/* View Details Button */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full" onClick={loadReviews}>
              View Details
            </Button>
          </DialogTrigger>
          <DialogContent className="flex flex-col min-w-10/12 max-h-8/9 overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="sr-only">{guide.name}</DialogTitle>
              <h1>{guide.name}</h1>
              <h5>{guide.quote}</h5>
            </DialogHeader>

            <div className="gap-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 mt-4">
              {/* Left Column */}
              <div className="lg:col-span-1 xl:col-span-2">
                <Image
                  src={guide.profileImage}
                  alt={guide.name}
                  className="lg:block md:hidden mb-4 rounded-lg w-full aspect-square object-cover"
                  width={800}
                  height={500}
                  priority
                />

                <h2>Contact Information</h2>
                <p className="mb-1">
                  <strong>Phone:</strong> {guide.phoneNumber}
                </p>
                {guide.contactEmail && (
                  <p className="mb-1">
                    <strong>Email:</strong> {guide.contactEmail}
                  </p>
                )}
                <p className="mb-1">
                  <strong>License:</strong> {guide.licenseNumber}
                </p>

                <div className="inline-flex items-baseline gap-3 mt-4">
                  <h3>Ratings & Reviews</h3>
                  <p className="text-xs">({guide.reviewsCount} reviews)</p>
                </div>
                <div className="flex items-center mb-2">
                  {displayRatingStars(Math.round(guide.rating))}
                </div>
              </div>

              {/* Right Column */}
              <div className="xl:col-span-4">
                <h2>About</h2>
                <p className="mb-4">{guide.bio}</p>

                <div className="mb-5">
                  <h5>Experience & Expertise</h5>
                  <p>
                    <strong>Years of Experience:</strong>{" "}
                    {guide.experienceYears}
                  </p>
                  <p>
                    <strong>Maximum Group Size:</strong> {guide.maxGroupSize}
                  </p>
                </div>

                <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mb-6">
                  <div>
                    <h3>Regions Covered</h3>
                    <div className="flex flex-wrap gap-2 mt-2 mb-4">
                      {guide.regionsCovered.map((region) => (
                        <Badge key={region} variant="successFaded">
                          {region}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3>Tour Types</h3>
                    <div className="flex flex-wrap gap-2 mt-2 mb-4">
                      {guide.tourTypes.map((type) => (
                        <Badge key={type} variant="secondaryFaded">
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3>Languages</h3>
                    <div className="flex flex-wrap gap-2 mt-2 mb-4">
                      {guide.languages.map((language) => (
                        <Badge key={language} variant={"infoFaded"}>
                          {language}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {guide.specialties && guide.specialties.length > 0 && (
                    <div>
                      <h3>Specialties</h3>
                      <div className="flex flex-wrap gap-2 mt-2 mb-4">
                        {guide.specialties.map((specialty) => (
                          <Badge key={specialty}>{specialty}</Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <h3>Availability</h3>
                <div className="flex flex-col mt-2">
                  {guide.available.map((day) => (
                    <div
                      key={day.day}
                      className="inline-flex items-center gap-4"
                    >
                      <h5>{day.day}</h5>
                      <p>
                        {day.availableHours[0].from} -{" "}
                        {day.availableHours[0].to}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Reviews Section */}
            <div className="my-4">
              <h2>Recent Reviews</h2>
              {isLoadingReviews ? (
                <div className="py-4 text-center">Loading reviews...</div>
              ) : reviews.length > 0 ? (
                <div className="gap-3 grid md:grid-cols-2 w-full overflow-y-auto">
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="flex flex-col shadow p-4 border border-border rounded-lg h-full overflow-hidden"
                    >
                      {displayRatingStars(Math.round(review.rating))}
                      <p className="mb-2 text-sm italic">"{review.quote}"</p>
                      <div className="flex justify-between">
                        <h5>{review.author}</h5>
                        <h5>{review.date}</h5>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-2 text-gray-500">No reviews available yet.</p>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
