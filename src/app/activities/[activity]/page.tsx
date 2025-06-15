"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCurrency } from "@/context/CurrencyContext";
import { getMockActivities } from "@/data/activities";
import { getMockTours } from "@/data/tours";
import { formatToSlug } from "@/lib/utils/format";
import { Label } from "@radix-ui/react-label";
import {
  ArrowLeft,
  Calendar,
  Clock,
  DollarSign,
  Heart,
  Info,
  MapPin,
  Shield,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ActivityDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const { formatPrice } = useCurrency();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Find activity by URL param
  const activitySlug = params.activity as string;
  const [activities, setActivities] = useState<any[]>([]);
  const [tours, setTours] = useState<any[]>([]);
  const [currentActivity, setCurrentActivity] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [activitiesData, toursData] = await Promise.all([
          getMockActivities(),
          getMockTours(),
        ]);

        setActivities(activitiesData);
        setTours(toursData);

        // Find the activity by slug
        const foundActivity = activitiesData.find(
          (activity: any) => formatToSlug(activity.name) === activitySlug
        );
        setCurrentActivity(foundActivity);
      } catch (error) {
        console.error("Error fetching activity data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activitySlug]);

  // Handle activity change from selector
  const handleActivityChange = (newActivityId: string) => {
    const newActivity = activities.find(
      (activity: any) => activity.id === newActivityId
    );
    if (newActivity) {
      const newSlug = formatToSlug(newActivity.name);
      // Update URL without reloading the page
      router.replace(`/activities/${newSlug}`, { scroll: false });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="mx-auto border-gray-900 border-b-2 rounded-full w-12 h-12 animate-spin"></div>
          <p className="mt-4 text-muted-foreground">
            Loading activity details...
          </p>
        </div>
      </div>
    );
  }

  if (!currentActivity) {
    return (
      <div className="min-h-screen">
        <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
          <div className="py-20 text-center">
            <h1 className="mb-4 font-bold text-2xl">Activity not found</h1>
            <Button onClick={() => router.push("/activities")}>
              Browse all activities
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Filter related content
  const relatedTours = tours.slice(0, 3);
  const relatedActivities = activities
    .filter(
      (activity: any) =>
        activity.id !== currentActivity.id &&
        activity.location.city === currentActivity.location.city
    )
    .slice(0, 3);

  // Get current activity slug for URLs
  const currentActivitySlug =
    currentActivity?.name.toLowerCase().replace(/\s+/g, "-") || activitySlug;

  // Get difficulty color
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Moderate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "Challenging":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      case "Expert":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
        {/* Back Button */}
        <Button variant="ghost" onClick={() => router.back()} className="mb-6">
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to activities
        </Button>

        {/* Activity Selector */}
        <div className="mb-6">
          <div className="flex items-center gap-4">
            <Label className="font-medium text-sm">Choose Activity:</Label>
            <Select
              value={currentActivity?.id || ""}
              onValueChange={handleActivityChange}
            >
              <SelectTrigger className="w-64">
                <SelectValue placeholder="Select an activity" />
              </SelectTrigger>
              <SelectContent>
                {activities.map((activity: any) => (
                  <SelectItem
                    key={activity.id}
                    value={activity.id}
                    variant="classic"
                  >
                    {activity.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Hero Section */}
        <div className="mb-8 rounded-xl overflow-hidden">
          <div className="relative h-96">
            <Image
              src={currentActivity.images[selectedImageIndex]}
              alt={currentActivity.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="bottom-6 left-6 absolute text-white">
              <div className="flex items-center gap-2 mb-2">
                <Badge
                  className={getDifficultyColor(currentActivity.difficulty)}
                >
                  {currentActivity.difficulty}
                </Badge>
                <Badge variant="secondary">{currentActivity.category}</Badge>
              </div>
              <h1 className="mb-2 font-bold text-4xl">
                {currentActivity.name}
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-lg">
                    {currentActivity.location.city},{" "}
                    {currentActivity.location.country}
                  </span>
                </div>
                <Separator orientation="vertical" className="bg-white/30 h-6" />
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span className="text-lg">{currentActivity.duration}</span>
                </div>
                <Separator orientation="vertical" className="bg-white/30 h-6" />
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="text-lg">
                    {currentActivity.rating} ({currentActivity.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          {currentActivity.images.length > 1 && (
            <div className="flex gap-2 mt-4">
              {currentActivity.images
                .slice(0, 4)
                .map((image: string, index: number) => (
                  <Button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative w-24 h-16 rounded-lg overflow-hidden ${
                      selectedImageIndex === index ? "ring-2 ring-blue-500" : ""
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${currentActivity.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </Button>
                ))}
            </div>
          )}
        </div>

        <div className="gap-8 grid grid-cols-1 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid grid-cols-4 mb-6 w-full">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="safety">Safety</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <div className="px-6">
                    <div className="flex items-center gap-2 mb-4 font-semibold text-lg">
                      <Info className="w-5 h-5" />
                      About This Activity
                    </div>
                    <p className="mb-4 text-slate-600 dark:text-slate-400">
                      {currentActivity.description}
                    </p>

                    <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                      <div className="space-y-3">
                        <h4 className="font-semibold">Key Features</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-blue-500" />
                            <span className="text-sm">
                              Duration: {currentActivity.duration}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-green-500" />
                            <span className="text-sm">
                              Group size: {currentActivity.groupSize.min}-
                              {currentActivity.groupSize.max} people
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-purple-500" />
                            <span className="text-sm">
                              Available: {currentActivity.schedule.frequency}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                          {currentActivity.tags.map(
                            (tag: string, index: number) => (
                              <Badge key={index} variant="outline">
                                {tag}
                              </Badge>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="px-6">
                    <div className="flex items-center gap-2 mb-4 font-semibold text-lg">
                      <MapPin className="w-5 h-5" />
                      Location & Schedule
                    </div>
                    <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                      <div>
                        <h4 className="mb-3 font-semibold">Location</h4>
                        <div className="space-y-2 text-sm">
                          <p>
                            <strong>City:</strong>{" "}
                            {currentActivity.location.city}
                          </p>
                          <p>
                            <strong>Country:</strong>{" "}
                            {currentActivity.location.country}
                          </p>
                          {currentActivity.location.address && (
                            <p>
                              <strong>Address:</strong>{" "}
                              {currentActivity.location.address}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-3 font-semibold">Schedule</h4>
                        <div className="space-y-2 text-sm">
                          <p>
                            <strong>Frequency:</strong>{" "}
                            {currentActivity.schedule.frequency}
                          </p>
                          <div>
                            <strong>Available times:</strong>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {currentActivity.schedule.times.map(
                                (time: string, index: number) => (
                                  <Badge
                                    key={index}
                                    variant="outline"
                                    className="text-xs"
                                  >
                                    {time}
                                  </Badge>
                                )
                              )}
                            </div>
                          </div>
                          {currentActivity.schedule.seasonality && (
                            <p>
                              <strong>Season:</strong>{" "}
                              {currentActivity.schedule.seasonality}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="details" className="space-y-6">
                <Card>
                  <div className="space-y-4 px-6">
                    <div className="font-semibold text-lg">
                      What's Included & Excluded
                    </div>

                    <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                      <div>
                        <h4 className="mb-2 font-semibold text-green-600">
                          ✓ Included
                        </h4>
                        <ul className="space-y-1 text-sm">
                          {currentActivity.inclusions.map(
                            (item: string, index: number) => (
                              <li
                                key={index}
                                className="flex items-start gap-2"
                              >
                                {item}
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      <div>
                        <h4 className="mb-2 font-semibold text-red-600">
                          ✗ Not Included
                        </h4>
                        <ul className="space-y-1 text-sm">
                          {currentActivity.exclusions.map(
                            (item: string, index: number) => (
                              <li
                                key={index}
                                className="flex items-start gap-2"
                              >
                                {item}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="mb-2 font-semibold">Equipment</h4>
                      <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                        <div>
                          <h5 className="mb-2 font-medium text-sm capitalize">
                            Provided:
                          </h5>
                          <ul className="space-y-1 text-sm">
                            {currentActivity.equipment.provided.map(
                              (item: string, index: number) => (
                                <li
                                  key={index}
                                  className="flex items-start gap-2"
                                >
                                  {item}
                                </li>
                              )
                            )}
                          </ul>
                        </div>

                        <div>
                          <h5 className="mb-2 font-medium text-sm capitalize">
                            Required to bring:
                          </h5>
                          {currentActivity.equipment.required.length > 0 ? (
                            <ul className="space-y-1 text-sm">
                              {currentActivity.equipment.required.map(
                                (item: string, index: number) => (
                                  <li
                                    key={index}
                                    className="flex items-start gap-2"
                                  >
                                    {item}
                                  </li>
                                )
                              )}
                            </ul>
                          ) : (
                            <p className="text-sm">Nothing required</p>
                          )}
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="mb-2 font-semibold">
                        Cancellation Policy
                      </h4>
                      <div className="space-y-2 text-sm">
                        <p>
                          <strong>Policy:</strong>{" "}
                          {currentActivity.cancellation.policy}
                        </p>
                        <p>
                          <strong>Refund:</strong>{" "}
                          {currentActivity.cancellation.refund}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="safety" className="space-y-6">
                <Card>
                  <div className="space-y-4 px-6">
                    <div className="flex items-center gap-2 font-semibold text-lg">
                      <Shield className="w-5 h-5" />
                      Safety Information
                    </div>

                    <div>
                      <h4 className="mb-2 font-semibold">Age Restrictions</h4>
                      <p className="text-sm">
                        Minimum age: {currentActivity.ageRestriction.minimum}{" "}
                        years
                        {currentActivity.ageRestriction.maximum &&
                          `, Maximum age: ${currentActivity.ageRestriction.maximum} years`}
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="mb-2 font-semibold">
                        Physical Requirements
                      </h4>
                      {currentActivity.physicalRequirements.length > 0 ? (
                        <ul className="space-y-1 text-sm">
                          {currentActivity.physicalRequirements.map(
                            (req: string, index: number) => (
                              <li
                                key={index}
                                className="flex items-start gap-2"
                              >
                                {req}
                              </li>
                            )
                          )}
                        </ul>
                      ) : (
                        <p className="text-sm">
                          No special physical requirements
                        </p>
                      )}
                    </div>

                    <Separator />

                    <div>
                      <h4 className="mb-2 font-semibold">Safety Guidelines</h4>
                      {currentActivity.safety.guidelines.length > 0 ? (
                        <ul className="space-y-1 text-sm">
                          {currentActivity.safety.guidelines.map(
                            (guideline: string, index: number) => (
                              <li
                                key={index}
                                className="flex items-start gap-2"
                              >
                                {guideline}
                              </li>
                            )
                          )}
                        </ul>
                      ) : (
                        <p className="text-sm">
                          Standard safety protocols apply
                        </p>
                      )}
                    </div>

                    <Separator />

                    <div>
                      <h4 className="mb-2 font-semibold">Weather Dependency</h4>
                      <p className="text-sm">
                        {currentActivity.weatherDependent
                          ? "This activity is weather dependent and may be cancelled or rescheduled due to adverse conditions."
                          : "This activity operates in all weather conditions."}
                      </p>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <Card>
                  <div className="space-y-4 px-6">
                    <div className="font-semibold text-lg">
                      Customer Reviews
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="font-bold text-3xl">
                          {currentActivity.rating}
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(currentActivity.rating)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <div className="text-sm">
                          {currentActivity.reviews} reviews
                        </div>
                      </div>
                    </div>

                    <div className="py-8 text-center">
                      <p>Detailed reviews would be displayed here.</p>
                      <p className="text-sm">This feature is coming soon!</p>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <div className="px-6">
                <div className="flex items-center gap-2 mb-4 font-semibold text-lg">
                  <DollarSign className="w-5 h-5" />
                  Pricing
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Adult</span>
                    <span className="font-semibold">
                      {formatPrice(currentActivity.pricing.adult)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Child</span>
                    <span className="font-semibold">
                      {formatPrice(currentActivity.pricing.child)}
                    </span>
                  </div>
                  {currentActivity.pricing.senior && (
                    <div className="flex justify-between">
                      <span className="text-sm">Senior</span>
                      <span className="font-semibold">
                        {formatPrice(currentActivity.pricing.senior)}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </Card>

            <Card>
              <div className="space-y-2 px-6 text-sm">
                <div className="mb-4 font-semibold text-lg">Quick Facts</div>
                <div className="flex justify-between">
                  <span>Duration</span>
                  <span>{currentActivity.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span>Difficulty</span>
                  <span>{currentActivity.difficulty}</span>
                </div>
                <div className="flex justify-between">
                  <span>Category</span>
                  <span>{currentActivity.category}</span>
                </div>
                <div className="flex justify-between">
                  <span>Group size</span>
                  <span>
                    {currentActivity.groupSize.min}-
                    {currentActivity.groupSize.max}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Weather dependent</span>
                  <span>{currentActivity.weatherDependent ? "Yes" : "No"}</span>
                </div>
              </div>
            </Card>

            <div className="space-y-3">
              <Button className="w-full" size="lg">
                Book Now
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                <Heart className="mr-2 w-4 h-4" />
                Add to Wishlist
              </Button>
            </div>

            {/* Related Activities */}
            {relatedActivities.length > 0 && (
              <Card>
                <div className="px-6">
                  <div className="mb-4 font-semibold text-lg">
                    More in {currentActivity.location.city}
                  </div>
                  <div className="space-y-3">
                    {relatedActivities.map((activity: any) => (
                      <div
                        key={activity.id}
                        className="pb-3 border-slate-200 dark:border-slate-700 last:border-0 border-b cursor-pointer"
                        onClick={() => {
                          const slug = activity.name
                            .toLowerCase()
                            .replace(/\s+/g, "-");
                          router.push(`/activities/${slug}`);
                        }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="relative flex-shrink-0 rounded-lg w-16 h-16 overflow-hidden">
                            <Image
                              src={activity.images[0]}
                              alt={activity.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm truncate">
                              {activity.name}
                            </h4>
                            <p className="mt-1 text-xs">
                              {activity.category} • {activity.duration}
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="flex items-center gap-1">
                                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                                <span className="text-xs">
                                  {activity.rating}
                                </span>
                              </div>
                              <span className="font-semibold text-sm">
                                {formatPrice(activity.pricing.adult)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 w-full"
                    onClick={() => router.push(`/activities`)}
                  >
                    View all activities
                  </Button>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
