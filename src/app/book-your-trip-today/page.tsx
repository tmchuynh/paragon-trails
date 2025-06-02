"use client";
import TourCard from "@/components/cards/TourCard";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cityattractions } from "@/lib/constants/info/city";
import { Tour } from "@/lib/interfaces/services/tours";
import { cn } from "@/lib/utils";
import { displayRatingStars } from "@/lib/utils/displayRatingStars";
import { capitalize, formatToSlug } from "@/lib/utils/format";
import {
  findGuideBySpecialty,
  getAllTours,
  getTourData,
  getToursByCategory,
} from "@/lib/utils/get";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BookYourTripToday() {
  const router = useRouter();
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>Book Your Trip Today</h1>
        <h5>Your Dream Adventure Awaits</h5>
        <p>
          Ready to embark on your next adventure? Book your trip today and
          explore the world with us. Whether you're looking for a relaxing
          getaway or an exciting journey, we have the perfect options for you.
        </p>
      </header>
    </div>
  );
}
