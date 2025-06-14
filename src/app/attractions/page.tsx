"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { mockAttractions } from "@/data/attractions";
import { MapPin, Star } from "lucide-react";
import Image from "next/image";
export default function AttractionsPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
        <h1 className="mb-6 font-bold text-2xl">Attractions</h1>
        <p className="mb-4 text-gray-600">
          Discover popular attractions and landmarks in your area.
        </p>
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {mockAttractions.map((attraction, index) => (
            <Card
              key={`${attraction.id}-${index}`}
              className="hover:shadow-xl p-0 transition-shadow overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={attraction.images[0]}
                  alt={attraction.name}
                  fill
                  className="object-cover"
                />
                <div className="top-4 right-4 absolute">
                  <Badge variant="secondary" className="text-xs">
                    {attraction.category}
                  </Badge>
                </div>
                <div className="bottom-4 left-4 absolute bg-black/70 px-3 py-1 rounded-full text-white">
                  <MapPin className="inline mr-1 w-3 h-3" />
                  {attraction.location.city}, {attraction.location.country}
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 font-bold text-slate-900 text-xl dark:text-white">
                  {attraction.name}
                </h3>
                <p className="mb-4 text-slate-600 text-sm dark:text-slate-400 line-clamp-2">
                  {attraction.description}
                </p>
                <div className="flex items-center mb-4">
                  <Star className="mr-1 w-4 h-4 text-yellow-500" />
                  <span className="text-sm">{attraction.rating}</span>
                </div>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => alert(`Visiting ${attraction.name}`)}
                >
                  Visit Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
