"use client";

import { CartItem } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import {
  Calendar,
  MapPin,
  Minus,
  Plus,
  Shield,
  Star,
  Ticket,
  Trash2,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Label } from "../ui/label";

interface TicketType {
  type: "adult" | "child" | "senior" | "student" | "family";
  label: string;
  price: number;
  quantity: number;
}

interface ExperienceCartItemProps {
  item: CartItem;
  onQuantityChange: (id: string, quantity: number) => void;
  onGuestsChange: (id: string, guests: number) => void;
  onRemove: (id: string) => void;
}

export default function ExperienceCartItem({
  item,
  onQuantityChange,
  onGuestsChange,
  onRemove,
}: ExperienceCartItemProps) {
  const { formatPrice } = useCurrency();

  // For now, we'll use a simple structure - in a real implementation,
  // this would come from the cart item data structure
  const [ticketTypes, setTicketTypes] = useState<TicketType[]>([
    { type: "adult", label: "Adult", price: item.price, quantity: 1 },
    {
      type: "child",
      label: "Child (3-12)",
      price: item.price * 0.7,
      quantity: 0,
    },
    {
      type: "senior",
      label: "Senior (65+)",
      price: item.price * 0.8,
      quantity: 0,
    },
    { type: "student", label: "Student", price: item.price * 0.9, quantity: 0 },
  ]);

  const getServiceIcon = () => {
    switch (item.type) {
      case "tour":
        return <Star className="mr-1 w-3 h-3" />;
      case "attraction":
        return <MapPin className="mr-1 w-3 h-3" />;
      case "activity":
        return <Users className="mr-1 w-3 h-3" />;
      default:
        return <Ticket className="mr-1 w-3 h-3" />;
    }
  };

  const getServiceLabel = () => {
    switch (item.type) {
      case "tour":
        return "Tour";
      case "attraction":
        return "Attraction";
      case "activity":
        return "Activity";
      default:
        return "Experience";
    }
  };

  const updateTicketQuantity = (
    ticketType: "adult" | "child" | "senior" | "student" | "family",
    newQuantity: number,
  ) => {
    setTicketTypes((prev) =>
      prev.map((ticket) =>
        ticket.type === ticketType
          ? { ...ticket, quantity: Math.max(0, newQuantity) }
          : ticket,
      ),
    );
  };

  const getTotalTickets = () => {
    return ticketTypes.reduce((sum, ticket) => sum + ticket.quantity, 0);
  };

  const getTotalGuests = () => {
    return ticketTypes.reduce((sum, ticket) => {
      if (ticket.type === "family") {
        return sum + ticket.quantity * 4; // Assume family tickets cover 4 people
      }
      return sum + ticket.quantity;
    }, 0);
  };

  const getSubtotal = () => {
    return ticketTypes.reduce(
      (sum, ticket) => sum + ticket.price * ticket.quantity,
      0,
    );
  };

  return (
    <Card className="p-0 overflow-hidden">
      <CardContent className="p-0">
        <div className="flex md:flex-row flex-col">
          {/* Image */}
          <div className="md:w-1/3">
            <div
              className="relative bg-cover bg-center h-48 md:h-full"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-black/20" />
              <Badge className="top-4 left-4 absolute bg-white/90 text-slate-900">
                {getServiceIcon()}
                {getServiceLabel()}
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:w-2/3">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="mb-2 font-semibold text-slate-900 text-xl dark:text-white">
                  {item.name}
                </h3>
                <div className="flex items-center gap-4 mb-3 text-slate-600 text-sm dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {item.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(item.dates.startDate).toLocaleDateString()}
                    {item.dates.endDate !== item.dates.startDate && (
                      <>
                        {" - "}
                        {new Date(item.dates.endDate).toLocaleDateString()}
                      </>
                    )}
                  </div>
                </div>
                <p className="mb-4 text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onRemove(item.id)}
                className="hover:bg-red-50 text-red-500 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-4">
              {item.features.slice(0, 3).map((feature, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {feature}
                </Badge>
              ))}
              {item.features.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{item.features.length - 3} more
                </Badge>
              )}
            </div>

            {/* Ticket Types */}
            <div className="mb-4">
              <Label className="block mb-3 font-medium text-slate-700 text-sm dark:text-slate-300">
                <Ticket className="inline mr-1 w-4 h-4" />
                Tickets & Guests:
              </Label>
              <div className="space-y-3 bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                {ticketTypes.map((ticket) => (
                  <div
                    key={ticket.type}
                    className="flex justify-between items-center"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-slate-900 text-sm dark:text-white">
                          {ticket.label}
                        </span>
                        <span className="text-slate-600 text-sm dark:text-slate-400">
                          {formatPrice(ticket.price)}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          updateTicketQuantity(ticket.type, ticket.quantity - 1)
                        }
                        disabled={ticket.quantity <= 0}
                        className="p-0 w-8 h-8"
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="w-8 font-medium text-center text-sm">
                        {ticket.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          updateTicketQuantity(ticket.type, ticket.quantity + 1)
                        }
                        className="p-0 w-8 h-8"
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="flex justify-between items-center mt-3 text-sm">
                <span className="text-slate-600 dark:text-slate-400">
                  Total: {getTotalTickets()}{" "}
                  {getTotalTickets() === 1 ? "ticket" : "tickets"},{" "}
                  {getTotalGuests()}{" "}
                  {getTotalGuests() === 1 ? "guest" : "guests"}
                </span>
              </div>
            </div>

            {/* Pricing */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-slate-600 text-sm dark:text-slate-400">
                  Starting from
                </span>
                <span className="font-semibold text-lg text-slate-900 dark:text-white">
                  {formatPrice(item.price)}
                </span>
                <span className="text-slate-600 text-sm dark:text-slate-400">
                  per person
                </span>
              </div>
              <div className="text-right">
                <div className="text-slate-600 text-sm dark:text-slate-400">
                  Subtotal: {formatPrice(getSubtotal())}
                </div>
              </div>
            </div>

            {/* Cancellation Policy */}
            <div className="bg-slate-50 dark:bg-slate-800 mt-4 p-3 rounded-lg">
              <div className="flex items-center gap-2 text-slate-600 text-sm dark:text-slate-400">
                <Shield className="w-4 h-4" />
                <span className="font-medium">Cancellation:</span>
                <span>{item.cancellationPolicy}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
