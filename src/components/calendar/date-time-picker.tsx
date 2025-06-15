"use client";

import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const FormSchema = z.object({
  datetime: z.date({
    required_error: "Date & time is required!.",
  }),
});

export function DateTimePickerV2() {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState<string>("05:00");
  const [date, setDate] = useState<Date | null>(null);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.success(`Meeting at: ${format(data.datetime, "PPP, p")}`);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex gap-4 w-full">
            <FormField
              control={form.control}
              name="datetime"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <FormLabel>Date</FormLabel>
                  <Popover open={isOpen} onOpenChange={setIsOpen}>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            `${format(field.value, "PPP")}, ${time}`
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="opacity-50 ml-auto w-4 h-4" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="p-0 w-auto" align="start">
                      <Calendar
                        mode="single"
                        captionLayout="dropdown"
                        selected={date || field.value}
                        onSelect={(selectedDate) => {
                          const [hours, minutes] = time.split(":")!;
                          selectedDate?.setHours(
                            parseInt(hours),
                            parseInt(minutes)
                          );
                          setDate(selectedDate!);
                          field.onChange(selectedDate);
                        }}
                        onDayClick={() => setIsOpen(false)}
                        fromYear={2000}
                        toYear={new Date().getFullYear()}
                        // disabled={(date) =>
                        //   Number(date) < Date.now() - 1000 * 60 * 60 * 24 ||
                        //   Number(date) > Date.now() + 1000 * 60 * 60 * 24 * 30
                        // }
                        defaultMonth={field.value}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>Set your date and time.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="datetime"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Time</FormLabel>
                  <FormControl>
                    <Select
                      defaultValue={time!}
                      onValueChange={(e) => {
                        setTime(e);
                        if (date) {
                          const [hours, minutes] = e.split(":");
                          const newDate = new Date(date.getTime());
                          newDate.setHours(parseInt(hours), parseInt(minutes));
                          setDate(newDate);
                          field.onChange(newDate);
                        }
                      }}
                    >
                      <SelectTrigger className="focus:ring-0 focus:ring-offset-0 w-[120px] font-normal">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <ScrollArea className="h-[15rem]">
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
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );
}
