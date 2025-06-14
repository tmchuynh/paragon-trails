"use client";

import { Button } from "@/components/ui/button";
import { TripDay, TripItem, TripPlan } from "@/lib/interfaces/trip-planner";
import { generateTripDays } from "@/lib/utils/trip-planner";
import {
  DndContext,
  DragEndEvent,
  DragStartEvent,
  closestCenter,
} from "@dnd-kit/core";
import { format } from "date-fns";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import ActivityPanel from "./ActivityPanel";
import DayPlanner from "./DayPlanner";
import TripExport from "./TripExport";
import TripSetup from "./TripSetup";

export default function TripPlannerContainer() {
  const [tripPlan, setTripPlan] = useState<TripPlan | null>(null);
  const [setupComplete, setSetupComplete] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<string>("");
  const [selectedHotel, setSelectedHotel] = useState<string>("");
  const [dateRange, setDateRange] = useState<{ start: Date; end: Date } | null>(
    null
  );
  const [guestCount, setGuestCount] = useState(2);
  const [tripDays, setTripDays] = useState<TripDay[]>([]);
  const [availableItems, setAvailableItems] = useState<TripItem[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [currentDragItem, setCurrentDragItem] = useState<TripItem | null>(null);

  // Initialize trip days when setup is complete
  useEffect(() => {
    if (setupComplete && dateRange) {
      const days = generateTripDays(dateRange.start, dateRange.end);
      setTripDays(days);
    }
  }, [setupComplete, dateRange]);

  const handleSetupComplete = (plan: TripPlan) => {
    setTripPlan(plan);
    setSelectedDestination(plan.destination);
    setSelectedHotel(plan.hotel);
    setDateRange({ start: plan.startDate, end: plan.endDate });
    setGuestCount(plan.guests);
    setSetupComplete(true);
  };

  const handleDragStart = useCallback(
    (event: DragStartEvent) => {
      const draggedItem = availableItems.find(
        (item) => item.id === event.active.id
      );
      if (draggedItem) {
        setIsDragging(true);
        setCurrentDragItem(draggedItem);
      }
    },
    [availableItems]
  );

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;

      // Reset drag state
      setIsDragging(false);
      setCurrentDragItem(null);

      if (!over || !currentDragItem) {
        return;
      }

      // Check if dropping on a day or time slot
      const overId = over.id.toString();

      // Generate a unique ID for the new item
      const uniqueId = `${currentDragItem.id}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

      if (overId.startsWith("day-")) {
        const dayIndex = parseInt(overId.split("-")[1]);
        const newItem = { ...currentDragItem, id: uniqueId };

        setTripDays((prevDays) => {
          const updatedDays = [...prevDays];
          if (updatedDays[dayIndex]) {
            updatedDays[dayIndex].items.push(newItem);
          }
          return updatedDays;
        });
      } else if (overId.startsWith("time-")) {
        // Handle time slot drops
        const [, dayIndex, timeSlot] = overId.split("-");
        const newItem = {
          ...currentDragItem,
          id: uniqueId,
          timeSlot: timeSlot,
        };

        setTripDays((prevDays) => {
          const updatedDays = [...prevDays];
          const day = updatedDays[parseInt(dayIndex)];
          if (day) {
            day.items.push(newItem);
          }
          return updatedDays;
        });
      }
    },
    [currentDragItem]
  );

  const removeItemFromDay = (dayIndex: number, itemId: string) => {
    setTripDays((prevDays) => {
      const updatedDays = [...prevDays];
      if (updatedDays[dayIndex]) {
        updatedDays[dayIndex].items = updatedDays[dayIndex].items.filter(
          (item: TripItem) => item.id !== itemId
        );
      }
      return updatedDays;
    });
  };

  const updateItemDuration = (
    dayIndex: number,
    itemId: string,
    duration: number
  ) => {
    setTripDays((prevDays) => {
      const updatedDays = [...prevDays];
      const day = updatedDays[dayIndex];
      if (day) {
        const itemIndex = day.items.findIndex(
          (item: TripItem) => item.id === itemId
        );
        if (itemIndex !== -1) {
          updatedDays[dayIndex].items[itemIndex].customDuration = duration;
        }
      }
      return updatedDays;
    });
  };

  const resetPlanner = () => {
    setSetupComplete(false);
    setTripPlan(null);
    setTripDays([]);
    setAvailableItems([]);
  };

  if (!setupComplete) {
    return (
      <TripSetup
        onComplete={handleSetupComplete}
        selectedDestination={selectedDestination}
        selectedHotel={selectedHotel}
        dateRange={dateRange}
        guestCount={guestCount}
        onDestinationChange={setSelectedDestination}
        onHotelChange={setSelectedHotel}
        onDateRangeChange={setDateRange}
        onGuestCountChange={setGuestCount}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Trip Summary Header */}
      <div className="bg-gradient-to-r from-blue-50 dark:from-blue-900/20 to-indigo-50 dark:to-indigo-900/20 p-6 rounded-lg">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="space-y-2">
            <h2 className="font-semibold text-2xl text-gray-900 dark:text-white">
              Your Trip to {tripPlan?.destinationName}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm dark:text-gray-300">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{tripPlan?.hotelName}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>
                  {dateRange && format(dateRange.start, "MMM d")} -{" "}
                  {dateRange && format(dateRange.end, "MMM d, yyyy")}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{guestCount} guests</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{tripDays.length} days</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <TripExport tripPlan={tripPlan!} days={tripDays} />
            <Button
              variant="outline"
              onClick={resetPlanner}
              className="shrink-0"
            >
              Start Over
            </Button>
          </div>
        </div>
      </div>

      <DndContext
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="gap-6 grid lg:grid-cols-3 xl:grid-cols-4">
          {/* Activity Panel */}
          <div className="col-span-1 xl:col-span-1">
            <ActivityPanel
              destination={selectedDestination}
              availableItems={availableItems}
              onItemsLoad={setAvailableItems}
            />
          </div>

          {/* Day Planner */}
          <div className="lg:col-span-2 xl:col-span-3">
            <DayPlanner
              days={tripDays}
              onRemoveItem={removeItemFromDay}
              onUpdateDuration={updateItemDuration}
            />
          </div>
        </div>
      </DndContext>
    </div>
  );
}
