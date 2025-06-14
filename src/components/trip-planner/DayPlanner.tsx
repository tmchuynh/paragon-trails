"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { TripDay, TripItem } from "@/lib/interfaces/trip-planner";
import {
  calculateTotalDayTime,
  durationOptions,
  formatDuration,
  getTimeSlotRecommendation,
  parseDuration,
} from "@/lib/utils/trip-planner";
import { useDroppable } from "@dnd-kit/core";
import { format } from "date-fns";
import {
  AlertCircle,
  Calendar,
  Clock,
  Coffee,
  MapPin,
  Moon,
  Settings,
  Trash2,
  Utensils,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface DayPlannerProps {
  days: TripDay[];
  onRemoveItem: (dayIndex: number, itemId: string) => void;
  onUpdateDuration: (
    dayIndex: number,
    itemId: string,
    duration: number
  ) => void;
  onUpdateTimeSlot?: (dayIndex: number, itemId: string, timeSlot: string) => void;
}

export default function DayPlanner({
  days,
  onRemoveItem,
  onUpdateDuration,
}: DayPlannerProps) {
  const [selectedItemForDuration, setSelectedItemForDuration] = useState<{
    dayIndex: number;
    itemId: string;
    currentDuration: number;
  } | null>(null);

  const DayCard = ({ day, dayIndex }: { day: TripDay; dayIndex: number }) => {
    const { setNodeRef, isOver } = useDroppable({
      id: `day-${dayIndex}`,
    });

    const totalTime = calculateTotalDayTime(day.items);
    const recommendation = getTimeSlotRecommendation(totalTime);

    const getRecommendationColor = (rec: string) => {
      if (rec.includes("light day")) return "text-foreground";
      if (rec.includes("Perfect balance")) return "text-green-600";
      if (rec.includes("packed day")) return "text-yellow-600";
      if (rec.includes("too ambitious")) return "text-red-600";
      return "text-gray-600";
    };

    return (
      <Card
        className={`${isOver ? "ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-900/20" : ""} transition-all`}
      >
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Day {day.dayNumber}
              </CardTitle>
              <p className="text-gray-600 text-sm dark:text-gray-300">
                {format(day.date, "EEEE, MMMM do")}
              </p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 text-gray-600 text-sm dark:text-gray-300">
                <Clock className="w-4 h-4" />
                <span>{formatDuration(totalTime)}</span>
              </div>
              <Badge
                variant={
                  totalTime > 600
                    ? "destructive"
                    : totalTime > 360
                      ? "default"
                      : "secondary"
                }
              >
                {day.items.length} activities
              </Badge>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div ref={setNodeRef} className="space-y-4">
            {/* Drop Zone */}
            {day.items.length === 0 ? (
              <div className="p-8 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-lg text-center">
                <div className="text-gray-500 dark:text-gray-400">
                  <Calendar className="opacity-50 mx-auto mb-2 w-8 h-8" />
                  <p className="text-sm">
                    Drop activities here to add them to this day
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {day.items.map((item, itemIndex) => (
                  <TripItemCard
                    key={item.id}
                    item={item}
                    dayIndex={dayIndex}
                    onRemove={() => onRemoveItem(dayIndex, item.id)}
                    onUpdateDuration={(duration) =>
                      onUpdateDuration(dayIndex, item.id, duration)
                    }
                  />
                ))}
              </div>
            )}

            {/* Time Recommendation */}
            {day.items.length > 0 && (
              <div
                className={`flex items-start gap-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 ${getRecommendationColor(recommendation)}`}
              >
                <AlertCircle className="mt-0.5 w-4 h-4 shrink-0" />
                <p className="text-sm">{recommendation}</p>
              </div>
            )}

            {/* Meal Reminders */}
            {day.items.length > 0 && (
              <div className="gap-2 grid grid-cols-3 pt-2 border-t">
                <div className="flex items-center gap-1 text-gray-500 text-xs">
                  <Coffee className="w-3 h-3" />
                  <span>Breakfast</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500 text-xs">
                  <Utensils className="w-3 h-3" />
                  <span>Lunch</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500 text-xs">
                  <Moon className="w-3 h-3" />
                  <span>Dinner</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };

  const TripItemCard = ({
    item,
    dayIndex,
    onRemove,
    onUpdateDuration,
  }: {
    item: TripItem;
    dayIndex: number;
    onRemove: () => void;
    onUpdateDuration: (duration: number) => void;
  }) => {
    const currentDuration = item.customDuration || parseDuration(item.duration);

    return (
      <div className="bg-white dark:bg-gray-900 shadow-sm p-4 border rounded-lg">
        <div className="flex gap-3">
          {/* Image */}
          {item.image && (
            <div className="bg-gray-100 rounded-lg w-16 h-16 overflow-hidden shrink-0">
              <Image
                src={item.image}
                alt={item.name}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start gap-2">
              <h4 className="font-semibold text-sm leading-tight">
                {item.name}
              </h4>
              <div className="flex items-center gap-1 shrink-0">
                {/* Duration Setting */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="sm" className="p-0 w-8 h-8">
                      <Settings className="w-3 h-3" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Set Duration</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <p className="text-gray-600 text-sm">
                        How long do you plan to spend at {item.name}?
                      </p>
                      <Select
                        value={currentDuration.toString()}
                        onValueChange={(value) =>
                          onUpdateDuration(parseInt(value))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {durationOptions.map((option) => (
                            <SelectItem
                              key={option.value}
                              value={option.value.toString()}
                            >
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Remove Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onRemove}
                  className="p-0 w-8 h-8 text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </div>

            <p className="mt-1 text-gray-600 text-xs dark:text-gray-300 line-clamp-1">
              {item.description}
            </p>

            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center gap-3 text-gray-500 text-xs">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{formatDuration(currentDuration)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span className="max-w-[120px] truncate">
                    {item.location}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  {item.type}
                </Badge>
                {item.price && (
                  <Badge variant="secondary" className="text-xs">
                    {item.currency}
                    {item.price}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-xl">Your Daily Itinerary</h3>
        <p className="text-gray-600 text-sm dark:text-gray-300">
          Drag activities from the left panel to organize your days
        </p>
      </div>

      {/* Tips */}
      <div className="bg-blue-50 dark:bg-blue-900/20 mt-6 p-3 rounded-lg">
        <h5 className="mb-1 font-medium text-blue-900 text-sm dark:text-blue-100">
          💡 Planning Tips
        </h5>
        <ul className="space-y-1 text-blue-700 text-xs dark:text-blue-200">
          <li>• Leave time for meals and travel between activities</li>
          <li>• Consider energy levels throughout the day</li>
          <li>• Check opening hours and availability</li>
          <li>• Book popular attractions in advance</li>
        </ul>
      </div>

      <div className="gap-6 grid">
        {days.map((day, dayIndex) => (
          <DayCard key={day.id} day={day} dayIndex={dayIndex} />
        ))}
      </div>

      {days.length === 0 && (
        <div className="py-12 text-center">
          <Calendar className="mx-auto mb-4 w-16 h-16 text-gray-300" />
          <h3 className="mb-2 font-medium text-gray-900 text-lg dark:text-white">
            No Days Yet
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Complete the trip setup to start planning your daily itinerary.
          </p>
        </div>
      )}
    </div>
  );
}
