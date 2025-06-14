"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TripItem } from "@/lib/interfaces/trip-planner";
import { formatDuration, parseDuration } from "@/lib/utils/trip-planner";
import { useDroppable } from "@dnd-kit/core";
import { Clock, Sun, Sunrise, Sunset } from "lucide-react";
import { useState } from "react";

interface TimeSlotManagerProps {
  dayIndex: number;
  items: TripItem[];
  onTimeSlotChange: (
    dayIndex: number,
    itemId: string,
    timeSlot: string
  ) => void;
}

type TimeSlot = "morning" | "afternoon" | "evening";

interface TimeSlotData {
  id: TimeSlot;
  label: string;
  icon: React.ReactNode;
  time: string;
  color: string;
}

const timeSlots: TimeSlotData[] = [
  {
    id: "morning",
    label: "Morning",
    icon: <Sunrise className="w-4 h-4" />,
    time: "6:00 AM - 12:00 PM",
    color:
      "bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800",
  },
  {
    id: "afternoon",
    label: "Afternoon",
    icon: <Sun className="w-4 h-4" />,
    time: "12:00 PM - 6:00 PM",
    color:
      "bg-orange-50 border-orange-200 dark:bg-orange-900/20 dark:border-orange-800",
  },
  {
    id: "evening",
    label: "Evening",
    icon: <Sunset className="w-4 h-4" />,
    time: "6:00 PM - 12:00 AM",
    color:
      "bg-purple-50 border-purple-200 dark:bg-purple-900/20 dark:border-purple-800",
  },
];

export default function TimeSlotManager({
  dayIndex,
  items,
  onTimeSlotChange,
}: TimeSlotManagerProps) {
  const [showTimeSlots, setShowTimeSlots] = useState(false);

  const getItemsByTimeSlot = (timeSlot: TimeSlot): TripItem[] => {
    return items.filter((item) => item.timeSlot === timeSlot);
  };

  const getUnassignedItems = (): TripItem[] => {
    return items.filter((item) => !item.timeSlot);
  };

  const calculateSlotDuration = (slotItems: TripItem[]): number => {
    return slotItems.reduce((total, item) => {
      return total + (item.customDuration || parseDuration(item.duration));
    }, 0);
  };

  const TimeSlotDropZone = ({ slot }: { slot: TimeSlotData }) => {
    const { setNodeRef, isOver } = useDroppable({
      id: `time-${dayIndex}-${slot.id}`,
    });

    const slotItems = getItemsByTimeSlot(slot.id);
    const totalDuration = calculateSlotDuration(slotItems);

    return (
      <Card
        ref={setNodeRef}
        className={`${slot.color} ${isOver ? "ring-2 ring-blue-500" : ""} transition-all`}
      >
        <CardHeader className="pb-3">
          <CardTitle className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-2">
              {slot.icon}
              <span>{slot.label}</span>
            </div>
            <Badge variant="secondary" className="text-xs">
              {formatDuration(totalDuration)}
            </Badge>
          </CardTitle>
          <p className="text-gray-600 text-xs dark:text-gray-300">
            {slot.time}
          </p>
        </CardHeader>

        {slotItems.length > 0 && (
          <CardContent className="pt-0">
            <div className="space-y-2">
              {slotItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white dark:bg-gray-800 p-2 border rounded text-xs"
                >
                  <div className="font-medium">{item.name}</div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock className="w-3 h-3" />
                    {formatDuration(
                      item.customDuration || parseDuration(item.duration)
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        )}

        {slotItems.length === 0 && (
          <CardContent className="pt-0">
            <div className="py-4 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded text-center text-gray-500 text-xs">
              Drop activities here
            </div>
          </CardContent>
        )}
      </Card>
    );
  };

  if (!showTimeSlots) {
    return (
      <div className="flex justify-center pt-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowTimeSlots(true)}
          className="text-xs"
        >
          <Clock className="mr-1 w-3 h-3" />
          Organize by Time
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4 mt-4 pt-4 border-t">
      <div className="flex justify-between items-center">
        <h4 className="flex items-center gap-2 font-medium text-sm">
          <Clock className="w-4 h-4" />
          Time Slots
        </h4>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowTimeSlots(false)}
          className="text-xs"
        >
          Hide
        </Button>
      </div>

      {/* Unassigned Items */}
      {getUnassignedItems().length > 0 && (
        <Card className="bg-gray-50 dark:bg-gray-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Unscheduled Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {getUnassignedItems().map((item) => (
                <div
                  key={item.id}
                  className="bg-white dark:bg-gray-700 p-2 border rounded text-xs"
                >
                  <div className="font-medium">{item.name}</div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock className="w-3 h-3" />
                    {formatDuration(
                      item.customDuration || parseDuration(item.duration)
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Time Slots */}
      <div className="gap-3 grid">
        {timeSlots.map((slot) => (
          <TimeSlotDropZone key={slot.id} slot={slot} />
        ))}
      </div>

      {/* Quick Tips */}
      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded text-gray-500 text-xs">
        <strong>💡 Time Management Tips:</strong>
        <ul className="space-y-1 mt-1">
          <li>• Morning: Museums, outdoor activities when fresh</li>
          <li>• Afternoon: Walking tours, shopping, cultural sites</li>
          <li>• Evening: Dining, entertainment, relaxed activities</li>
        </ul>
      </div>
    </div>
  );
}
