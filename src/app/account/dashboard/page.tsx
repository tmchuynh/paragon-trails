"use client";

import { useAuth } from "@/context/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  CalendarDays, 
  MapPin, 
  ShoppingBag, 
  Star, 
  TrendingUp,
  UserCircle
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
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {user.firstName}!</h1>
        <p className="text-muted-foreground">
          Manage your bookings, preferences, and account settings.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Profile Overview */}
        <Card>
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Profile</CardTitle>
            <UserCircle className="h-4 w-4 text-muted-foreground ml-auto" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{user.firstName} {user.lastName}</div>
            <p className="text-xs text-muted-foreground">{user.email}</p>
            <Badge variant="secondary" className="mt-2">Verified Member</Badge>
          </CardContent>
        </Card>

        {/* Total Bookings */}
        <Card>
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground ml-auto" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>

        {/* Rewards Points */}
        <Card>
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rewards Points</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground ml-auto" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-muted-foreground">Valid until Dec 2025</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-3">
                <CalendarDays className="h-8 w-8 text-blue-500" />
                <div>
                  <p className="font-medium">Grand Tour of Europe</p>
                  <p className="text-sm text-muted-foreground">March 15-25, 2025</p>
                </div>
              </div>
              <Badge variant="outline">Confirmed</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-3">
                <MapPin className="h-8 w-8 text-green-500" />
                <div>
                  <p className="font-medium">Tokyo City Explorer</p>
                  <p className="text-sm text-muted-foreground">January 8-12, 2025</p>
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
              className="w-full justify-start"
              onClick={() => router.push("/destinations")}
            >
              <MapPin className="h-4 w-4 mr-2" />
              Browse Destinations
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => router.push("/my-cart")}
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              View Cart
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => router.push("/account/dashboard/my-stuff")}
            >
              <UserCircle className="h-4 w-4 mr-2" />
              My Stuff
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => router.push("/contact")}
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              Get Support
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
