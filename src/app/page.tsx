"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  ArrowRight,
  Calendar,
  MapPin,
  PlayCircle,
  Search,
  Star,
  Users,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="z-0 absolute inset-0">
          <div className="bg-gradient-to-r from-blue-600 via-teal-500 to-green-400 opacity-90 w-full h-full"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full max-w-7xl">
          {/* Mobile Layout */}
          <div className="lg:hidden text-center text-white">
            <div className="mb-8">
              <h1 className="mb-6 font-bold text-4xl md:text-6xl leading-tight">
                Where You Get Trapped
                <br />
                <span className="text-yellow-300">
                  in the Beauty of the World
                </span>
                <br />
                and Unforgettable
                <br />
                Happiness!
              </h1>
              <p className="mx-auto mb-8 max-w-3xl text-gray-200 text-lg md:text-xl">
                At TripTrap, we believe that every journey is an opportunity for
                adventure, discovery, and creating unforgettable experiences.
              </p>
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 px-8 py-3 rounded-full font-bold text-black"
              >
                <PlayCircle className="mr-2 w-5 h-5" />
                Book Trip Now
              </Button>
            </div>

            {/* Mobile Search Card */}
            <div className="mt-12">
              <Card className="bg-white/95 shadow-2xl backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-gray-800">
                    <Search className="w-5 h-5" />
                    Find Hotels
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="font-medium text-gray-700 text-sm">
                        Destination
                      </label>
                      <div className="relative">
                        <MapPin className="top-1/2 left-3 absolute w-4 h-4 text-gray-400 transform -translate-y-1/2" />
                        <Input
                          placeholder="Banten Hotel Drexelore"
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="font-medium text-gray-700 text-sm">
                        Check-in & Check-out
                      </label>
                      <div className="relative">
                        <Calendar className="top-1/2 left-3 absolute w-4 h-4 text-gray-400 transform -translate-y-1/2" />
                        <Input placeholder="Tue, 31/05/24" className="pl-10" />
                      </div>
                    </div>
                  </div>
                  <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="font-medium text-gray-700 text-sm">
                        Guests and Rooms
                      </label>
                      <div className="relative">
                        <Users className="top-1/2 left-3 absolute w-4 h-4 text-gray-400 transform -translate-y-1/2" />
                        <Input
                          placeholder="2 Adult | Child | Room"
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="font-medium text-gray-700 text-sm">
                        Price Range
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="2H per night" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="budget">
                            Budget ($50-100)
                          </SelectItem>
                          <SelectItem value="mid">
                            Mid-range ($100-200)
                          </SelectItem>
                          <SelectItem value="luxury">Luxury ($200+)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button className="bg-black hover:bg-gray-800 w-full text-white">
                    Search Hotel
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Desktop Two-Column Layout */}
          <div className="lg:items-center lg:gap-12 hidden lg:grid lg:grid-cols-2">
            {/* Left Column - Hero Text */}
            <div className="text-white">
              <h1 className="mb-6 font-bold text-5xl xl:text-6xl leading-tight">
                Where You Get Trapped
                <br />
                <span className="text-yellow-300">
                  in the Beauty of the World
                </span>
                <br />
                and Unforgettable
                <br />
                Happiness!
              </h1>
              <p className="mb-8 text-gray-200 text-xl leading-relaxed">
                At TripTrap, we believe that every journey is an opportunity for
                adventure, discovery, and creating unforgettable experiences.
              </p>
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 px-8 py-3 rounded-full font-bold text-black"
              >
                <PlayCircle className="mr-2 w-5 h-5" />
                Book Trip Now
              </Button>
            </div>

            {/* Right Column - Search Form */}
            <div className="lg:ml-8">
              <Card className="bg-white/95 shadow-2xl backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-gray-800">
                    <Search className="w-5 h-5" />
                    Find Hotels
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="font-medium text-gray-700 text-sm">
                        Destination
                      </label>
                      <div className="relative">
                        <MapPin className="top-1/2 left-3 absolute w-4 h-4 text-gray-400 transform -translate-y-1/2" />
                        <Input
                          placeholder="Banten Hotel Drexelore"
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="font-medium text-gray-700 text-sm">
                        Check-in & Check-out
                      </label>
                      <div className="relative">
                        <Calendar className="top-1/2 left-3 absolute w-4 h-4 text-gray-400 transform -translate-y-1/2" />
                        <Input placeholder="Tue, 31/05/24" className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="font-medium text-gray-700 text-sm">
                        Guests and Rooms
                      </label>
                      <div className="relative">
                        <Users className="top-1/2 left-3 absolute w-4 h-4 text-gray-400 transform -translate-y-1/2" />
                        <Input
                          placeholder="2 Adult | Child | Room"
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="font-medium text-gray-700 text-sm">
                        Price Range
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="2H per night" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="budget">
                            Budget ($50-100)
                          </SelectItem>
                          <SelectItem value="mid">
                            Mid-range ($100-200)
                          </SelectItem>
                          <SelectItem value="luxury">Luxury ($200+)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button className="bg-black hover:bg-gray-800 w-full text-white">
                    Search Hotel
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Right Side Content */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="items-center gap-12 grid grid-cols-1 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-bold text-3xl text-gray-800 md:text-4xl">
                Curated Destinations for You
              </h2>
              <p className="mb-8 text-gray-600">
                At TripTrap, we believe in curating exceptional experiences that
                turn every journey into an adventure worth remembering.
              </p>

              {/* Destination Cards */}
              <div className="gap-4 grid grid-cols-2 mb-8">
                <Card className="hover:shadow-lg transition-all cursor-pointer">
                  <div className="relative bg-gradient-to-br from-blue-400 to-blue-600 rounded-t-lg h-32">
                    <div className="top-2 right-2 absolute bg-black px-2 py-1 rounded text-sm text-white">
                      $120.00
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-4 h-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                    <h3 className="mb-1 font-semibold text-gray-800">
                      Ocean Paradise
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Tropical beach destination
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all cursor-pointer">
                  <div className="relative bg-gradient-to-br from-teal-400 to-green-500 rounded-t-lg h-32">
                    <div className="top-2 right-2 absolute bg-black px-2 py-1 rounded text-sm text-white">
                      $165.00
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-4 h-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                    <h3 className="mb-1 font-semibold text-gray-800">
                      Mountain Retreat
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Alpine adventure escape
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all cursor-pointer">
                  <div className="relative bg-gradient-to-br from-gray-400 to-gray-600 rounded-t-lg h-32">
                    <div className="top-2 right-2 absolute bg-black px-2 py-1 rounded text-sm text-white">
                      $190.00
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-4 h-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                    <h3 className="mb-1 font-semibold text-gray-800">
                      City Explorer
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Urban cultural experience
                    </p>
                  </CardContent>
                </Card>

                <Card className="relative hover:shadow-lg h-full transition-all cursor-pointer">
                  <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-t-lg h-32">
                    <div className="top-2 right-2 absolute bg-black px-2 py-1 rounded text-sm text-white">
                      $250.00
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-4 h-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                    <h3 className="mb-1 font-semibold text-gray-800">
                      Desert Oasis
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Luxury desert adventure
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="shadow-md rounded-lg">
                <div className="bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 rounded-t-lg w-full h-48"></div>
                <CardContent className="p-4">
                  <p className="text-gray-600 text-sm">
                    At TripTrap, we believe in curating exceptional experiences
                    that turn every journey into an adventure worth remembering.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-md rounded-lg">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-t-lg w-full h-32"></div>
                <CardContent className="p-4">
                  <p className="text-gray-600 text-sm">
                    Cultural immersion, culinary discovery, natural beauty,
                    thrilling adventure, cultural and artistic experiences.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-md rounded-lg">
                <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-t-lg w-full h-32"></div>
                <CardContent className="p-4">
                  <p className="text-gray-600 text-sm">
                    History and culture, unique perspectives and remarkable
                    experiences available.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Sections */}
      <section className="bg-white py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="gap-12 grid grid-cols-1 lg:grid-cols-2">
            {/* Big Promo */}
            <Card className="bg-gradient-to-br from-yellow-400 to-orange-500 border-0 text-white">
              <CardHeader>
                <div className="bg-white/20 px-3 py-1 rounded-full w-fit font-medium text-sm">
                  Big Promo
                </div>
                <CardTitle className="font-bold text-3xl">
                  Limited Time Offer
                  <br />
                  Book Now and Save
                  <br />
                  Big!
                </CardTitle>
                <CardDescription className="text-white/90">
                  Big Promo About Plan for Journey like Gymnastic activity like
                  cultural background. Planning cultural background our Value
                  City Promo, offering much than before. Let's start our future
                  conversations!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="secondary"
                  className="bg-white hover:bg-gray-100 text-black"
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>

            {/* Let's Explore Together */}
            <div className="space-y-6">
              <Card className="shadow-lg border-0">
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 h-48">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-l-lg"></div>
                    <div className="bg-gradient-to-br from-teal-400 to-green-500 rounded-r-lg"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 font-bold text-xl">
                      Let's Explore Together
                    </h3>
                    <p className="mb-4 text-gray-600 text-sm">
                      At TripTrap, the world is our diama and every journey is
                      an opportunity to discover something new about ourselves
                      and the most interesting cultural of every one that
                      without a shadow.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-800">
                        Ramadhan Promo
                      </span>
                      <Button size="sm" className="rounded-full">
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations for 2024 */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-3xl text-gray-800 md:text-4xl">
              Featured Destinations for 2024
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Discover the most sought-after destinations this year, curated by
              our travel experts for unforgettable experiences.
            </p>
          </div>

          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {[
              { color: "from-blue-400 to-cyan-500", price: "$120.00" },
              { color: "from-green-400 to-emerald-500", price: "$165.00" },
              { color: "from-gray-400 to-slate-500", price: "$190.00" },
              { color: "from-orange-400 to-red-500", price: "$250.00" },
            ].map((destination, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all cursor-pointer"
              >
                <div
                  className={`relative h-64 bg-gradient-to-br ${destination.color} rounded-t-lg overflow-hidden`}
                >
                  <div className="top-4 right-4 absolute bg-white px-3 py-1 rounded-full font-semibold text-black">
                    {destination.price}
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all"></div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <h3 className="mb-1 font-semibold text-gray-800">
                    Amazing Destination {index + 1}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Experience the beauty and culture
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Experience Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20 text-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="items-center gap-12 grid grid-cols-1 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-bold text-3xl md:text-4xl">
                <span className="text-yellow-300">✱</span> Book Perfect Stay
                <br />
                For Your Vacation
              </h2>
              <p className="mb-8 text-gray-300 text-lg">
                We are premier hotel booking service that caters to the
                discerning traveler in search of luxury and sophistication.
              </p>

              {/* Booking Stats */}
              <div className="gap-8 grid grid-cols-2 mb-8">
                <div>
                  <div className="mb-2 font-bold text-2xl text-yellow-300">
                    100% + happy guests
                  </div>
                  <div className="text-gray-400 text-sm">
                    Customer satisfaction
                  </div>
                </div>
                <div>
                  <div className="mb-2 font-bold text-2xl text-yellow-300">
                    4.9 ★
                  </div>
                  <div className="text-gray-400 text-sm">Guest's Reviews</div>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-blue-600 hover:from-blue-700 to-teal-500 hover:to-teal-600">
                Book your stay
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Booking Confirmation Mockup */}
            <div className="relative">
              <div className="bg-white shadow-2xl p-6 rounded-2xl text-gray-800">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-lg">
                    Booking is confirmed!
                  </h3>
                  <div className="bg-green-100 p-2 rounded-full">
                    <div className="flex justify-center items-center bg-green-500 rounded-full w-6 h-6">
                      <span className="font-bold text-white text-xs">✓</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Check-In</span>
                    <span className="font-medium">13.07.2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Check-Out</span>
                    <span className="font-medium">16.07.2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Guests</span>
                    <span className="font-medium">5 people</span>
                  </div>
                </div>

                <div className="mb-4 p-4 border rounded-lg">
                  <div className="flex gap-3">
                    <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg w-16 h-16"></div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Your stay:</h4>
                      <p className="text-gray-600 text-sm">Bali</p>
                      <p className="text-gray-600 text-sm">
                        John Hilton Resort
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                    Apple Pay
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Confirm
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sophisticated Stays Section */}
      <section className="bg-white py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="items-center gap-12 grid grid-cols-1 lg:grid-cols-2">
            <div className="space-y-6">
              {/* Destination Cards */}
              <div className="gap-4 grid grid-cols-3">
                <Card className="shadow-md border-0">
                  <div className="relative bg-gradient-to-br from-green-400 to-blue-500 rounded-lg h-24">
                    <div className="bottom-2 left-2 absolute">
                      <Button size="sm" variant="secondary" className="text-xs">
                        Search
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-3">
                    <p className="font-medium text-xs">Lisbon, Portugal</p>
                  </CardContent>
                </Card>

                <Card className="shadow-md border-0">
                  <div className="relative bg-gradient-to-br from-orange-400 to-red-500 rounded-lg h-24">
                    <div className="bottom-2 left-2 absolute">
                      <Button size="sm" variant="secondary" className="text-xs">
                        Search
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-3">
                    <p className="font-medium text-xs">Positano, Italy</p>
                  </CardContent>
                </Card>

                <Card className="shadow-md border-0">
                  <div className="relative bg-gradient-to-br from-teal-400 to-green-500 rounded-lg h-24">
                    <div className="bottom-2 left-2 absolute">
                      <Button size="sm" variant="secondary" className="text-xs">
                        Search
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-3">
                    <p className="font-medium text-xs">Maldives</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="mb-4 font-bold text-3xl text-gray-800">
                Unlock the Art of
                <br />
                Sophisticated Stays
              </h2>
              <p className="mb-6 text-gray-600">
                We understand that accommodations play a pivotal role in shaping
                travel experience, and that's why we are committed to providing
                an innovative collection of exquisite hotels in the world's most
                desirable destinations.
              </p>
              <p className="text-gray-500 text-sm">From 2019</p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Showcase */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="gap-8 grid grid-cols-1 lg:grid-cols-3">
            {/* Main Property */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg border-0 overflow-hidden">
                <div className="relative bg-gradient-to-br from-gray-700 to-gray-900 h-80">
                  <div className="top-4 left-4 absolute">
                    <div className="flex items-center gap-2">
                      <div className="bg-white p-1 rounded">
                        <div className="bg-black rounded w-4 h-4"></div>
                      </div>
                      <span className="font-medium text-white">
                        CABINS & COTTAGES
                      </span>
                      <span className="text-white">ENTIRE HOMES</span>
                      <span className="text-white">UNIQUE STAYS</span>
                    </div>
                  </div>
                  <div className="top-4 right-4 absolute">
                    <Button variant="secondary" size="sm">
                      SIGN IN
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 font-bold text-xl">Mirror House Sud</h3>
                  <p className="mb-2 text-gray-600 text-sm">
                    Bolzano, Trentino-Alto Adige/South Tyrol, Italy
                  </p>
                  <p className="mb-4 font-bold text-2xl">
                    $1,600{" "}
                    <span className="font-normal text-base text-gray-600">
                      / night
                    </span>
                  </p>

                  <div className="flex items-center gap-6 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>4 Guests</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>🏠</span>
                      <span>2 Bedrooms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>🚿</span>
                      <span>1 Bathroom</span>
                    </div>
                  </div>

                  <Button className="bg-black hover:bg-gray-800 w-full text-white">
                    Check Availability
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Property Images */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-400 to-teal-500 rounded-lg h-40"></div>
              <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-lg h-40"></div>
              <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg h-40"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}