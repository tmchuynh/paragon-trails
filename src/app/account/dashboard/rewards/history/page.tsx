"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/context/AuthContext";
import {
  AlertTriangle,
  ArrowLeft,
  Award,
  CalendarDays,
  Car,
  Clock,
  CreditCard,
  Filter,
  Gift,
  Hotel,
  MapPin,
  Plane,
  Search,
  Star,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface HistoryItem {
  id: string;
  type:
    | "flight"
    | "hotel"
    | "activity"
    | "attraction"
    | "tour"
    | "vehicle"
    | "reward_redemption"
    | "reward_expiry"
    | "points_earned";
  title: string;
  date: string;
  status:
    | "confirmed"
    | "completed"
    | "cancelled"
    | "pending"
    | "expired"
    | "redeemed";
  amount?: string;
  points?: number;
  description?: string;
  icon: any;
  color: string;
  location?: string;
  expiryDate?: string;
  daysLeft?: number;
}

// Comprehensive mock history data
const mockHistoryData: HistoryItem[] = [
  // Recent reward redemption with expiry
  {
    id: "h001",
    type: "reward_redemption",
    title: "15% Off Hotel Booking Coupon",
    date: "2025-06-12",
    status: "redeemed",
    points: -750,
    description: "Redeemed 15% discount coupon for hotel bookings",
    icon: Gift,
    color: "text-purple-500",
    expiryDate: "2025-07-12",
    daysLeft: 28,
  },
  // Flight booking
  {
    id: "h002",
    type: "flight",
    title: "Round-trip Flight to Tokyo",
    date: "2025-06-10",
    status: "confirmed",
    amount: "$1,245",
    points: 250,
    description: "Flight booking with JAL Airlines",
    icon: Plane,
    color: "text-blue-500",
    location: "Tokyo, Japan",
  },
  // Hotel booking
  {
    id: "h003",
    type: "hotel",
    title: "Grand Hotel Tokyo",
    date: "2025-06-08",
    status: "confirmed",
    amount: "$850",
    points: 170,
    description: "5-night stay in Shibuya district",
    icon: Hotel,
    color: "text-green-500",
    location: "Tokyo, Japan",
  },
  // Activity booking
  {
    id: "h004",
    type: "activity",
    title: "Tokyo Food Tour",
    date: "2025-06-05",
    status: "confirmed",
    amount: "$120",
    points: 24,
    description: "Guided food tour through local markets",
    icon: MapPin,
    color: "text-orange-500",
    location: "Tokyo, Japan",
  },
  // Vehicle rental
  {
    id: "h005",
    type: "vehicle",
    title: "Car Rental - Toyota Camry",
    date: "2025-05-28",
    status: "completed",
    amount: "$320",
    points: 64,
    description: "7-day car rental in Kyoto",
    icon: Car,
    color: "text-indigo-500",
    location: "Kyoto, Japan",
  },
  // Tour booking
  {
    id: "h006",
    type: "tour",
    title: "Mount Fuji Climbing Tour",
    date: "2025-05-25",
    status: "completed",
    amount: "$450",
    points: 90,
    description: "2-day guided climbing expedition",
    icon: MapPin,
    color: "text-emerald-500",
    location: "Mount Fuji, Japan",
  },
  // Expired reward
  {
    id: "h007",
    type: "reward_expiry",
    title: "10% Off Flight Booking Coupon",
    date: "2025-05-15",
    status: "expired",
    points: -500,
    description: "Unused discount coupon expired",
    icon: AlertTriangle,
    color: "text-red-500",
    expiryDate: "2025-05-15",
    daysLeft: -30,
  },
  // Points earned
  {
    id: "h008",
    type: "points_earned",
    title: "Membership Bonus Points",
    date: "2025-05-01",
    status: "completed",
    points: 1000,
    description: "Annual membership tier bonus",
    icon: Award,
    color: "text-yellow-500",
  },
  // Attraction booking
  {
    id: "h009",
    type: "attraction",
    title: "Universal Studios Japan",
    date: "2025-04-20",
    status: "completed",
    amount: "$75",
    points: 15,
    description: "Day pass to theme park",
    icon: Star,
    color: "text-pink-500",
    location: "Osaka, Japan",
  },
  // Another reward redemption
  {
    id: "h010",
    type: "reward_redemption",
    title: "Airport Lounge Access",
    date: "2025-04-18",
    status: "redeemed",
    points: -1000,
    description: "Premium lounge access for 1 year",
    icon: Gift,
    color: "text-purple-500",
    expiryDate: "2026-04-18",
    daysLeft: 308,
  },
  // Hotel booking
  {
    id: "h011",
    type: "hotel",
    title: "Ritz-Carlton Kyoto",
    date: "2025-04-15",
    status: "completed",
    amount: "$1,200",
    points: 240,
    description: "3-night luxury stay",
    icon: Hotel,
    color: "text-green-500",
    location: "Kyoto, Japan",
  },
  // Flight booking
  {
    id: "h012",
    type: "flight",
    title: "Round-trip Flight to Paris",
    date: "2025-03-10",
    status: "completed",
    amount: "$890",
    points: 178,
    description: "Flight booking with Air France",
    icon: Plane,
    color: "text-blue-500",
    location: "Paris, France",
  },
];

export default function HistoryPage() {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();

  const [historyItems, setHistoryItems] =
    useState<HistoryItem[]>(mockHistoryData);
  const [filteredItems, setFilteredItems] =
    useState<HistoryItem[]>(mockHistoryData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<string>("all");
  const [filterStatus, setFilterStatus] = useState<string>("all");

  useEffect(() => {
    if (!isAuthenticated) {
      toast.error("You must be logged in to access this page.");
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    let filtered = historyItems;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.location?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by type
    if (filterType !== "all") {
      filtered = filtered.filter((item) => item.type === filterType);
    }

    // Filter by status
    if (filterStatus !== "all") {
      filtered = filtered.filter((item) => item.status === filterStatus);
    }

    setFilteredItems(filtered);
  }, [searchTerm, filterType, filterStatus, historyItems]);

  if (!isAuthenticated) {
    return null;
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "gradientPrimary";
      case "completed":
        return "gradientSuccess";
      case "cancelled":
        return "gradientWarning";
      case "pending":
        return "gradientInfo";
      case "expired":
        return "gradientDanger";
      case "redeemed":
        return "gradientSecondary";
      default:
        return "gradientInfo";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "flight":
        return "Flight";
      case "hotel":
        return "Hotel";
      case "activity":
        return "Activity";
      case "attraction":
        return "Attraction";
      case "tour":
        return "Tour";
      case "vehicle":
        return "Vehicle";
      case "reward_redemption":
        return "Reward";
      case "reward_expiry":
        return "Expired";
      case "points_earned":
        return "Points";
      default:
        return type;
    }
  };

  const formatDaysLeft = (daysLeft?: number) => {
    if (!daysLeft) return null;
    if (daysLeft <= 0) return "Expired";
    if (daysLeft === 1) return "1 day left";
    if (daysLeft <= 30) return `${daysLeft} days left`;
    if (daysLeft <= 365) return `${Math.ceil(daysLeft / 30)} months left`;
    return `${Math.ceil(daysLeft / 365)} years left`;
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Dashboard
          </Button>

          <h1 className="mb-2 font-bold text-4xl">Full History</h1>
          <p>View all your bookings, activities, and reward transactions</p>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filters & Search
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="gap-4 grid grid-cols-1 md:grid-cols-4">
              <div className="space-y-2">
                <label className="font-medium text-sm">Search</label>
                <div className="relative">
                  <Search className="top-2.5 left-2.5 absolute w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by title, location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="mt-2 pl-9 focus:border-muted border-border focus:ring-muted/20 h-8"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-medium text-sm">Type</label>
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="mt-2 border border-border w-full">
                    <SelectValue placeholder="All types" />
                  </SelectTrigger>
                  <SelectContent
                    variant="professional"
                    className="w-full max-h-60"
                  >
                    <SelectItem value="all" variant="classic">
                      All Types
                    </SelectItem>
                    <SelectItem value="flight" variant="classic">
                      Flights
                    </SelectItem>
                    <SelectItem value="hotel" variant="classic">
                      Hotels
                    </SelectItem>
                    <SelectItem value="activity" variant="classic">
                      Activities
                    </SelectItem>
                    <SelectItem value="attraction" variant="classic">
                      Attractions
                    </SelectItem>
                    <SelectItem value="tour" variant="classic">
                      Tours
                    </SelectItem>
                    <SelectItem value="vehicle" variant="classic">
                      Vehicles
                    </SelectItem>
                    <SelectItem value="reward_redemption" variant="classic">
                      Rewards
                    </SelectItem>
                    <SelectItem value="points_earned" variant="classic">
                      Points
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="font-medium text-sm">Status</label>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="mt-2 border border-border w-full">
                    <SelectValue placeholder="All statuses" />
                  </SelectTrigger>
                  <SelectContent
                    className="w-full max-h-60"
                    variant="professional"
                  >
                    <SelectItem value="all" variant="classic">
                      All Statuses
                    </SelectItem>
                    <SelectItem value="confirmed" variant="classic">
                      Confirmed
                    </SelectItem>
                    <SelectItem value="completed" variant="classic">
                      Completed
                    </SelectItem>
                    <SelectItem value="cancelled" variant="classic">
                      Cancelled
                    </SelectItem>
                    <SelectItem value="pending" variant="classic">
                      Pending
                    </SelectItem>
                    <SelectItem value="expired" variant="classic">
                      Expired
                    </SelectItem>
                    <SelectItem value="redeemed" variant="classic">
                      Redeemed
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setFilterType("all");
                    setFilterStatus("all");
                  }}
                  className="w-full"
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* History Items */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              History ({filteredItems.length} items)
            </CardTitle>
          </CardHeader>
          <CardContent>
            {filteredItems.length === 0 ? (
              <div className="flex flex-col justify-center items-center py-12 text-center">
                <Search className="mb-4 w-12 h-12 text-muted-foreground" />
                <h3 className="mb-2 font-semibold text-lg">No items found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or filters
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredItems.map((item, index) => {
                  const IconComponent = item.icon;
                  const daysLeftText = formatDaysLeft(item.daysLeft);

                  return (
                    <div key={item.id}>
                      <div className="flex items-start gap-4 p-4 rounded-lg transition-colors">
                        <div className={`p-3 rounded-full  ${item.color}`}>
                          <IconComponent className="w-6 h-6" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                            <div>
                              <h3 className="font-semibold text-lg">
                                {item.title}
                              </h3>
                              {item.location && (
                                <p className="text-muted-foreground text-sm">
                                  <MapPin className="inline mr-1 w-3 h-3" />
                                  {item.location}
                                </p>
                              )}
                            </div>

                            <div className="flex flex-col items-end gap-2">
                              <Badge variant={`${getStatusColor(item.status)}`}>
                                {item.status.charAt(0).toUpperCase() +
                                  item.status.slice(1)}
                              </Badge>
                              <Badge variant="outlineGradient">
                                {getTypeLabel(item.type)}
                              </Badge>
                            </div>
                          </div>

                          {item.description && (
                            <p className="mb-2 text-muted-foreground text-sm">
                              {item.description}
                            </p>
                          )}

                          <div className="flex flex-wrap items-center gap-4 text-sm">
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <CalendarDays className="w-3 h-3" />
                              {new Date(item.date).toLocaleDateString()}
                            </span>

                            {item.amount && (
                              <span className="flex items-center gap-1 font-medium text-green-600">
                                <CreditCard className="w-3 h-3" />
                                {item.amount}
                              </span>
                            )}

                            {item.points && (
                              <span
                                className={`flex items-center gap-1 font-medium ${item.points > 0 ? "text-blue-600" : "text-red-600"}`}
                              >
                                <Star className="w-3 h-3" />
                                {item.points > 0 ? "+" : ""}
                                {item.points} points
                              </span>
                            )}

                            {daysLeftText && (
                              <span
                                className={`flex items-center gap-1 font-medium ${
                                  item.daysLeft && item.daysLeft <= 7
                                    ? "text-red-600"
                                    : item.daysLeft && item.daysLeft <= 30
                                      ? "text-orange-600"
                                      : "text-green-600"
                                }`}
                              >
                                <Clock className="w-3 h-3" />
                                {daysLeftText}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {index < filteredItems.length - 1 && <Separator />}
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
