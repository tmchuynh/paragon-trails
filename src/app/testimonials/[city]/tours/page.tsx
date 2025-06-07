"use client";

import { useState, useEffect, use } from "react";
import { getTourTestimonialsForCity } from "@/lib/utils/get/testimonials";
import { Testimonial } from "@/lib/interfaces/services/testimonials";
import { Button } from "@/components/ui/button";
import Loading from "@/components/Loading";
import { Filter, MapPin, SlidersHorizontal, X } from "lucide-react";
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
import { displayRatingStars } from "@/lib/utils/displayRatingStars";
import { formatKebabToTitle } from "@/lib/utils/format";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function TourTestimonialsForCityPage() {
  const searchParams = useSearchParams();
  const city = searchParams.get("city") || "";
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [filteredTestimonials, setFilteredTestimonials] = useState<
    Testimonial[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [sortField, setSortField] = useState<string>("date");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  // Enhanced filters
  const [minRatingFilter, setMinRatingFilter] = useState<number | null>(null);
  const [startDateFilter, setStartDateFilter] = useState<string | null>(null);
  const [endDateFilter, setEndDateFilter] = useState<string | null>(null);
  const cityName = formatKebabToTitle(city);

  useEffect(() => {
    async function loadTestimonials() {
      try {
        const allTestimonials = await getTourTestimonialsForCity(city);
        setTestimonials(allTestimonials);
        setFilteredTestimonials(allTestimonials);
      } catch (error) {
        console.error("Error loading tour testimonials:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadTestimonials();
  }, [city]);

  useEffect(() => {
    // Apply filters
    const filtered = testimonials.filter((testimonial) => {
      // Rating filter
      if (minRatingFilter !== null && testimonial.rating < minRatingFilter)
        return false;

      // Date range filter
      if (testimonial.date) {
        const testimonialDate = new Date(testimonial.date);
        if (startDateFilter && new Date(startDateFilter) > testimonialDate)
          return false;
        if (endDateFilter && new Date(endDateFilter) < testimonialDate)
          return false;
      } else if (startDateFilter || endDateFilter) {
        // If we're filtering by date and this testimonial has no date, exclude it
        return false;
      }

      return true;
    });

    // Apply sorting
    const sorted = [...filtered].sort((a, b) => {
      if (sortField === "date") {
        const dateA = a.date ? new Date(a.date).getTime() : 0;
        const dateB = b.date ? new Date(b.date).getTime() : 0;
        return sortDirection === "asc" ? dateA - dateB : dateB - dateA;
      } else if (sortField === "rating") {
        return sortDirection === "asc"
          ? a.rating - b.rating
          : b.rating - a.rating;
      }
      return 0;
    });

    setFilteredTestimonials(sorted);
    setCurrentPage(1);
  }, [
    testimonials,
    minRatingFilter,
    startDateFilter,
    endDateFilter,
    sortField,
    sortDirection,
  ]);

  // Get unique tour names and guide names from testimonials
  const uniqueTours = Array.from(
    new Set(testimonials.filter((t) => t.author).map((t) => t.author))
  ).sort();

  // Extract guide names from quotes (this is a simplification - ideally guides would be a proper field)
  const guideNames: string[] = [];
  testimonials.forEach((t) => {
    if (t.quote) {
      const match = t.quote.match(/([A-Z][a-z]+ [A-Z][a-z]+)(?:'s|\s)/);
      if (match) guideNames.push(match[1]);
    }
  });
  const uniqueGuides = Array.from(new Set(guideNames)).sort();

  if (isLoading) {
    return <Loading />;
  }

  // Pagination
  const totalItems = filteredTestimonials.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalItems);
  const currentTestimonials = filteredTestimonials.slice(startIndex, endIndex);

  // Reset filters function
  const resetFilters = () => {
    setMinRatingFilter(null);
    setStartDateFilter(null);
    setEndDateFilter(null);
    setSortField("date");
    setSortDirection("desc");
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
        {/* Header and Navigation Button */}
        <div className="flex md:flex-row flex-col justify-between items-start md:items-center gap-4">
          <header>
            <h1 className="text-start">{cityName} Tour Testimonials</h1>
            <h5 className="text-start">
              {filteredTestimonials.length} review
              {filteredTestimonials.length !== 1 ? "s" : ""}
            </h5>
          </header>

          <Link href={`/testimonials/${city}`} className="md:ml-auto">
            <Button variant="default" className="flex items-center gap-2">
              <MapPin size={16} />
              Back to {cityName} Testimonials
            </Button>
          </Link>
        </div>

        {/* Navigation message for better context */}
        <div className="bg-muted/50 mb-2 p-4 rounded-lg">
          <p className="text-sm">
            Reading what travelers say about their tour experiences in{" "}
            {cityName}. You might also be interested in seeing{" "}
            <Link
              href={`/experiences-through-destinations/${city}/tours`}
              className="font-medium underline underline-offset-4"
            >
              all available tours in {cityName}
            </Link>{" "}
            or reading{" "}
            <Link
              href={`/experiences-through-destinations/${city}?city=${city}`}
              className="font-medium underline underline-offset-4"
            >
              learn more about {cityName}
            </Link>
            .
          </p>
        </div>

        {/* Controls */}
        <div className="flex md:flex-row flex-col justify-between items-start md:items-center gap-4">
          <div className="flex sm:flex-row flex-col items-center gap-4 md:ml-auto">
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
                      setSortField("date");
                      setSortDirection((prev) =>
                        prev === "desc" ? "asc" : "desc"
                      );
                    }}
                  >
                    By Date{" "}
                    {sortField === "date" &&
                      (sortDirection === "asc" ? "↑" : "↓")}
                  </DropdownMenuItem>
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
                      setSortField("author");
                      setSortDirection((prev) =>
                        prev === "desc" ? "asc" : "desc"
                      );
                    }}
                  >
                    By Author{" "}
                    {sortField === "author" &&
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
                <SelectValue placeholder="Reviews per page" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="9">9 per page</SelectItem>
                <SelectItem value="12">12 per page</SelectItem>
                <SelectItem value="18">18 per page</SelectItem>
                <SelectItem value="24">24 per page</SelectItem>
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

              {/* Rating Filter */}
              <div className="space-y-2">
                <h5>Minimum Rating</h5>
                <Select
                  value={minRatingFilter?.toString() || "all"}
                  onValueChange={(value) =>
                    setMinRatingFilter(value === "all" ? null : Number(value))
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Minimum Rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any Rating</SelectItem>
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <SelectItem key={rating} value={rating.toString()}>
                        {rating}+ Stars
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date Range Filter */}
              <div className="space-y-2">
                <h5>Date Range</h5>
                <div className="space-y-2">
                  <div>
                    <label htmlFor="start-date" className="text-sm">
                      From
                    </label>
                    <input
                      id="start-date"
                      type="date"
                      className="bg-background mt-1 px-3 py-2 border border-border rounded-md w-full"
                      value={startDateFilter || ""}
                      onChange={(e) =>
                        setStartDateFilter(e.target.value || null)
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="end-date" className="text-sm">
                      To
                    </label>
                    <input
                      id="end-date"
                      type="date"
                      className="bg-background mt-1 px-3 py-2 border border-border rounded-md w-full"
                      value={endDateFilter || ""}
                      onChange={(e) => setEndDateFilter(e.target.value || null)}
                    />
                  </div>
                </div>
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

          {/* Main Content - Testimonial Cards */}
          <div
            className={`${showFilters ? "lg:col-span-3" : "lg:col-span-4"} space-y-6`}
          >
            {/* Results count */}
            <div className="text-gray-500">
              Showing {startIndex + 1} to {endIndex} of {totalItems} tour
              testimonials
            </div>

            {currentTestimonials.length > 0 ? (
              <>
                {/* Testimonial Cards in a grid layout */}
                <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {currentTestimonials.map((testimonial) => (
                    <TestimonialCard
                      key={testimonial.id}
                      testimonial={testimonial}
                    />
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
                <h3 className="font-semibold text-lg">
                  No tour testimonials found
                </h3>
                <p className="mt-2 max-w-md text-gray-500">
                  We couldn't find any tour testimonials matching your filters.
                  Try adjusting your search criteria or reset filters.
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

// Testimonial Card Component
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  // Format date if available
  const formattedDate = testimonial.date
    ? format(parseISO(testimonial.date), "MMM d, yyyy")
    : "";

  return (
    <div className="flex flex-col shadow-md border border-border rounded-lg h-full overflow-hidden">
      <div className="flex flex-col p-6 h-full">
        {/* Rating stars */}

        {/* Title */}
        <h4 className="mb-3 font-semibold">{testimonial.title}</h4>

        {/* Quote */}
        <p className="flex-grow mb-4 text-gray-600 italic">
          "{testimonial.quote}"
        </p>

        {/* Author and date */}
        <div className="flex justify-between items-center mt-auto">
          <div>
            {" "}
            <p className="font-medium text-sm">{testimonial.author}</p>
            {testimonial.date && (
              <p className="text-gray-500 text-xs">{testimonial.date}</p>
            )}
          </div>
          {displayRatingStars(Math.round(testimonial.rating), 5, {
            size: "sm",
            showRatingNumber: false,
            align: "right",
          })}
        </div>
      </div>
    </div>
  );
}
