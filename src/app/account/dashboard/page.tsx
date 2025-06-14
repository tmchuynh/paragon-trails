"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";
import {
  CalendarDays,
  MapPin,
  ShoppingBag,
  Star,
  TrendingUp,
  UserCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="min-h-screen">
      <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
        {" "}
        <div className="mb-8">
          <h1 className="mb-2 font-bold text-3xl">
            Welcome back, {user.firstName}!
          </h1>
          <p className="text-muted-foreground">
            Manage your bookings, preferences, and account settings.
          </p>
        </div>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {/* Profile Overview */}
          <Card>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="font-medium text-sm">Profile</CardTitle>
              <UserCircle className="ml-auto w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="font-bold text-2xl">
                {user.firstName} {user.lastName}
              </div>
              <p className="text-muted-foreground text-xs">{user.email}</p>
              <Badge variant="secondary" className="mt-2">
                Verified Member
              </Badge>
            </CardContent>
          </Card>

          {/* Total Bookings */}
          <Card>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="font-medium text-sm">
                Total Bookings
              </CardTitle>
              <ShoppingBag className="ml-auto w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="font-bold text-2xl">12</div>
              <p className="text-muted-foreground text-xs">
                +2 from last month
              </p>
            </CardContent>
          </Card>

          {/* Rewards Points */}
          <Card>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="font-medium text-sm">
                Rewards Points
              </CardTitle>
              <Star className="ml-auto w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="font-bold text-2xl">2,847</div>
              <p className="text-muted-foreground text-xs">
                Valid until Dec 2025
              </p>
            </CardContent>
          </Card>
        </div>
        {/* Recent Activity */}
        <div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Bookings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <CalendarDays className="w-8 h-8 text-blue-500" />
                  <div>
                    <p className="font-medium">Grand Tour of Europe</p>
                    <p className="text-muted-foreground text-sm">
                      March 15-25, 2025
                    </p>
                  </div>
                </div>
                <Badge variant="outline">Confirmed</Badge>
              </div>

              <div className="flex justify-between items-center p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-8 h-8 text-green-500" />
                  <div>
                    <p className="font-medium">Tokyo City Explorer</p>
                    <p className="text-muted-foreground text-sm">
                      January 8-12, 2025
                    </p>
                  </div>
                </div>
                <Badge variant="secondary">Completed</Badge>
              </div>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => router.push("/account/dashboard/my-trips")}
              >
                View All Bookings
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                variant="outline"
                className="justify-start w-full"
                onClick={() => router.push("/destinations")}
              >
                <MapPin className="mr-2 w-4 h-4" />
                Browse Destinations
              </Button>

              <Button
                variant="outline"
                className="justify-start w-full"
                onClick={() => router.push("/my-cart")}
              >
                <ShoppingBag className="mr-2 w-4 h-4" />
                View Cart
              </Button>

              <Button
                variant="outline"
                className="justify-start w-full"
                onClick={() => router.push("/account/dashboard/my-stuff")}
              >
                <UserCircle className="mr-2 w-4 h-4" />
                My Stuff
              </Button>

              <Button
                variant="outline"
                className="justify-start w-full"
                onClick={() => router.push("/contact")}
              >
                <TrendingUp className="mr-2 w-4 h-4" />
                Get Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
