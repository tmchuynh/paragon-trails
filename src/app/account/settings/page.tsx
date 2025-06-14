"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/context/AuthContext";
import { ArrowLeft, Bell, CreditCard, Globe, Shield, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SettingsPage() {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    } else if (user) {
      setFormData({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      });
    }
  }, [isAuthenticated, user, router]);

  if (!isAuthenticated || !user) {
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back
          </Button>
          <h1 className="mb-2 font-bold text-3xl">Account Settings</h1>
          <p className="text-muted-foreground">
            Manage your account preferences and security settings.
          </p>
        </div>

        <div className="space-y-6">
          {/* Profile Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Profile Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="mt-2 focus:border-muted border-border focus:ring-muted/20 h-8"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="mt-2 focus:border-muted border-border focus:ring-muted/20 h-8"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-2 focus:border-muted border-border focus:ring-muted/20 h-8"
                />
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Password</h4>
                  <p className="text-muted-foreground text-sm">
                    Last changed 3 months ago
                  </p>
                </div>
                <Button variant="outline">Change Password</Button>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Two-Factor Authentication</h4>
                  <p className="text-muted-foreground text-sm">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <Button variant="outline">Enable 2FA</Button>
              </div>
            </CardContent>
          </Card>

          {/* Notification Preferences */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Email Notifications</h4>
                  <p className="text-muted-foreground text-sm">
                    Receive booking confirmations and travel updates
                  </p>
                </div>
                <Button variant="outline">Manage</Button>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Marketing Communications</h4>
                  <p className="text-muted-foreground text-sm">
                    Special offers and travel inspiration
                  </p>
                </div>
                <Button variant="outline">Manage</Button>
              </div>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Payment Methods
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Saved Cards</h4>
                  <p className="text-muted-foreground text-sm">
                    Manage your saved payment methods
                  </p>
                </div>
                <Button variant="outline">Manage Cards</Button>
              </div>
            </CardContent>
          </Card>

          {/* Preferences */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Language & Region</h4>
                  <p className="text-muted-foreground text-sm">
                    English (United States)
                  </p>
                </div>
                <Button variant="outline">Change</Button>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Currency</h4>
                  <p className="text-muted-foreground text-sm">
                    US Dollar (USD)
                  </p>
                </div>
                <Button variant="outline">Change</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
