"use client";

import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ScrollArea } from "../ui/scroll-area";

interface DateTimePickerProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  includeTime?: boolean;
  minDate?: Date;
  maxDate?: Date;
}

export function DateTimePicker({
  value,
  onChange,
  placeholder = "Pick a date",
  disabled = false,
  className,
  includeTime = false,
  minDate,
  maxDate,
}: DateTimePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState<string>("09:00");

  // Update time when value changes
  useEffect(() => {
    if (value && includeTime) {
      const hours = value.getHours().toString().padStart(2, "0");
      const minutes = value.getMinutes().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}`);
    }
  }, [value, includeTime]);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (!selectedDate) {
      onChange?.(undefined);
      return;
    }

    if (includeTime && value) {
      // Preserve the existing time
      const newDate = new Date(selectedDate);
      newDate.setHours(value.getHours(), value.getMinutes());
      onChange?.(newDate);
    } else if (includeTime) {
      // Set default time
      const [hours, minutes] = time.split(":");
      selectedDate.setHours(parseInt(hours), parseInt(minutes));
      onChange?.(selectedDate);
    } else {
      onChange?.(selectedDate);
    }
    
    if (!includeTime) {
      setIsOpen(false);
    }
  };

  const handleTimeChange = (newTime: string) => {
    setTime(newTime);
    if (value) {
      const [hours, minutes] = newTime.split(":");
      const newDate = new Date(value);
      newDate.setHours(parseInt(hours), parseInt(minutes));
      onChange?.(newDate);
    }
  };

  const formatDisplayValue = () => {
    if (!value) return placeholder;
    
    if (includeTime) {
      return `${format(value, "MMM dd, yyyy")} at ${format(value, "HH:mm")}`;
    } else {
      return format(value, "MMM dd, yyyy");
    }
  };

  return (
    <div className={cn("flex gap-2", className)}>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            disabled={disabled}
            className={cn(
              "justify-start text-left font-normal flex-1",
              !value && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {formatDisplayValue()}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="flex">
            <Calendar
              mode="single"
              captionLayout="dropdown"
              selected={value}
              onSelect={handleDateSelect}
              fromYear={2000}
              toYear={new Date().getFullYear() + 5}
              disabled={(date) => {
                if (minDate && date < minDate) return true;
                if (maxDate && date > maxDate) return true;
                return false;
              }}
              defaultMonth={value || new Date()}
            />
            {includeTime && (
              <div className="border-l p-3">
                <div className="text-sm font-medium mb-2">Time</div>
                <Select value={time} onValueChange={handleTimeChange}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <ScrollArea className="h-[200px]">
                      {Array.from({ length: 96 }).map((_, i) => {
                        const hour = Math.floor(i / 4)
                          .toString()
                          .padStart(2, "0");
                        const minute = ((i % 4) * 15)
                          .toString()
                          .padStart(2, "0");
                        return (
                          <SelectItem key={i} value={`${hour}:${minute}`}>
                            {hour}:{minute}
                          </SelectItem>
                        );
                      })}
                    </ScrollArea>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

// Keep the original component for backward compatibility
export function DateTimePickerV2() {
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <div className="space-y-4">
      <DateTimePicker
        value={date}
        onChange={setDate}
        includeTime={true}
        placeholder="Select date and time"
      />
    </div>
  );
}
