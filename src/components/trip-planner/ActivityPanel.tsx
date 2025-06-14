"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockActivities } from "@/data/activities";
import { mockAttractions } from "@/data/attractions";
import { mockDestinations } from "@/data/destinations";
import { mockTours } from "@/data/tours";
import { TripItem } from "@/lib/interfaces/trip-planner";
import { convertToTripItem } from "@/lib/utils/trip-planner";
import { Clock, MapPin, Search } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import DraggableItem from "./DraggableItem";

interface ActivityPanelProps {
  destination: string;
  availableItems: TripItem[];
  onItemsLoad: (items: TripItem[]) => void;
}

export default function ActivityPanel({
  destination,
  availableItems,
  onItemsLoad,
}: ActivityPanelProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activities, setActivities] = useState<TripItem[]>([]);
  const [attractions, setAttractions] = useState<TripItem[]>([]);
  const [tours, setTours] = useState<TripItem[]>([]);

  // Load items when destination changes
  useEffect(() => {
    if (destination) {
      const destinationData = mockDestinations.find(
        (d) => d.id === destination
      );
      if (!destinationData) return;

      const cityName = destinationData.name.toLowerCase();

      // Filter and convert activities
      const filteredActivities = mockActivities
        .filter((activity) => activity.location.city.toLowerCase() === cityName)
        .map((activity) => convertToTripItem(activity, "activity"));

      // Filter and convert attractions
      const filteredAttractions = mockAttractions
        .filter(
          (attraction) => attraction.location.city.toLowerCase() === cityName
        )
        .map((attraction) => convertToTripItem(attraction, "attraction"));

      // Filter and convert tours
      const filteredTours = mockTours
        .filter((tour) => tour.location.city.toLowerCase() === cityName)
        .map((tour) => convertToTripItem(tour, "tour"));

      setActivities(filteredActivities);
      setAttractions(filteredAttractions);
      setTours(filteredTours);

      // Combine all items for the parent component
      const allItems = [
        ...filteredActivities,
        ...filteredAttractions,
        ...filteredTours,
      ];
      onItemsLoad(allItems);
    }
  }, [destination, onItemsLoad]);

  const filterItems = (items: TripItem[]) => {
    if (!searchTerm) return items;

    return items.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const ItemCard = ({ item }: { item: TripItem }) => (
    <DraggableItem id={item.id} item={item}>
      <Card className="hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing">
        <CardContent className="p-4">
          <div className="space-y-3">
            {/* Image */}
            {item.image && (
              <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Content */}
            <div className="space-y-2">
              <div className="flex justify-between items-start gap-2">
                <h4 className="font-semibold text-sm leading-tight">
                  {item.name}
                </h4>
                {item.price && (
                  <Badge variant="secondary" className="text-xs">
                    {item.currency}
                    {item.price}
                  </Badge>
                )}
              </div>

              <p className="text-gray-600 text-xs dark:text-gray-300 line-clamp-2">
                {item.description}
              </p>

              <div className="flex items-center gap-3 text-gray-500 text-xs">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{item.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span className="truncate">{item.location}</span>
                </div>
              </div>

              <Badge variant="outline" className="text-xs">
                {item.category}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </DraggableItem>
  );

  return (
    <Card className="top-4 sticky h-fit">
      <CardHeader>
        <CardTitle>Available Activities</CardTitle>
        <CardDescription>Drag and drop items to your itinerary</CardDescription>

        {/* Search */}
        <div className="relative">
          <Search className="top-1/2 left-3 absolute w-4 h-4 text-gray-400 transform -translate-y-1/2" />
          <Input
            placeholder="Search activities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 border-slate-200 focus:border-primary focus:ring-primary/20 h-12"
          />
        </div>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="activities" className="w-full">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="activities" className="text-xs">
              Activities ({activities.length})
            </TabsTrigger>
            <TabsTrigger value="attractions" className="text-xs">
              Attractions ({attractions.length})
            </TabsTrigger>
            <TabsTrigger value="tours" className="text-xs">
              Tours ({tours.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="activities" className="mt-4">
            <div className="space-y-3 max-h-[600px] overflow-y-auto">
              {filterItems(activities).length > 0 ? (
                filterItems(activities).map((activity) => (
                  <ItemCard key={activity.id} item={activity} />
                ))
              ) : (
                <div className="py-8 text-center text-gray-500">
                  <p className="text-sm">No activities found</p>
                  {searchTerm && (
                    <p className="mt-1 text-xs">Try adjusting your search</p>
                  )}
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="attractions" className="mt-4">
            <div className="space-y-3 max-h-[600px] overflow-y-auto">
              {filterItems(attractions).length > 0 ? (
                filterItems(attractions).map((attraction) => (
                  <ItemCard key={attraction.id} item={attraction} />
                ))
              ) : (
                <div className="py-8 text-center text-gray-500">
                  <p className="text-sm">No attractions found</p>
                  {searchTerm && (
                    <p className="mt-1 text-xs">Try adjusting your search</p>
                  )}
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="tours" className="mt-4">
            <div className="space-y-3 max-h-[600px] overflow-y-auto">
              {filterItems(tours).length > 0 ? (
                filterItems(tours).map((tour) => (
                  <ItemCard key={tour.id} item={tour} />
                ))
              ) : (
                <div className="py-8 text-center text-gray-500">
                  <p className="text-sm">No tours found</p>
                  {searchTerm && (
                    <p className="mt-1 text-xs">Try adjusting your search</p>
                  )}
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
