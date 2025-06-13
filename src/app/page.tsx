"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Search, Users, Tag, Star, ArrowRight, PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-blue-600 via-teal-500 to-green-400 opacity-90"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Where You Get Trapped<br />
              <span className="text-yellow-300">in the Beauty of the World</span><br />
              and Unforgettable<br />
              Happiness!
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">
              At TripTrap, we believe that every journey is an opportunity for adventure, discovery, and 
              creating unforgettable experiences.
            </p>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 rounded-full">
              <PlayCircle className="w-5 h-5 mr-2" />
              Book Trip Now
            </Button>
          </div>
        </div>

        {/* Search Card Overlay */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-2xl px-4">
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-gray-800 flex items-center gap-2">
                <Search className="w-5 h-5" />
                Find Hotels
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Destination</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input 
                      placeholder="Banten Hotel Drexelore" 
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Check-in & Check-out</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input 
                      placeholder="Tue, 31/05/24" 
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Guests and Rooms</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input 
                      placeholder="2 Adult | Child | Room" 
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Price Range</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="2H per night" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="budget">Budget ($50-100)</SelectItem>
                      <SelectItem value="mid">Mid-range ($100-200)</SelectItem>
                      <SelectItem value="luxury">Luxury ($200+)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button className="w-full bg-black hover:bg-gray-800 text-white">
                Search Hotel
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Right Side Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Curated Destinations for You
              </h2>
              <p className="text-gray-600 mb-8">
                At TripTrap, we believe in curating exceptional experiences that turn every journey into an adventure worth remembering.
              </p>
              
              {/* Destination Cards */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <Card className="hover:shadow-lg transition-all cursor-pointer">
                  <div className="relative h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-t-lg">
                    <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded text-sm">
                      $120.00
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-1 mb-2">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all cursor-pointer">
                  <div className="relative h-32 bg-gradient-to-br from-teal-400 to-green-500 rounded-t-lg">
                    <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded text-sm">
                      $165.00
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-1 mb-2">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all cursor-pointer">
                  <div className="relative h-32 bg-gradient-to-br from-gray-400 to-gray-600 rounded-t-lg">
                    <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded text-sm">
                      $190.00
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-1 mb-2">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all cursor-pointer">
                  <div className="relative h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-t-lg">
                    <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded text-sm">
                      $250.00
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-1 mb-2">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-full h-48 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 rounded-lg mb-4"></div>
                <p className="text-sm text-gray-600">
                  At TripTrap, we believe in curating exceptional experiences that turn every journey into an adventure worth remembering.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-full h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg mb-4"></div>
                <p className="text-sm text-gray-600">
                  Cultural immersion, culinary discovery, natural beauty, thrilling adventure, cultural and artistic experiences.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-full h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg mb-4"></div>
                <p className="text-sm text-gray-600">
                  History and culture, unique perspectives and remarkable experiences available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Big Promo */}
            <Card className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white border-0">
              <CardHeader>
                <div className="text-sm font-medium bg-white/20 rounded-full px-3 py-1 w-fit">
                  Big Promo
                </div>
                <CardTitle className="text-3xl font-bold">
                  Limited Time Offer<br />
                  Book Now and Save<br />
                  Big!
                </CardTitle>
                <CardDescription className="text-white/90">
                  Big Promo About Plan for Journey like Gymnastic 
                  activity like cultural background. Planning 
                  cultural background our Value City Promo, offering 
                  much than before. Let's start our future conversations!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" className="bg-white text-black hover:bg-gray-100">
                  Book Now
                </Button>
              </CardContent>
            </Card>

            {/* Let's Explore Together */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 h-48">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-l-lg"></div>
                    <div className="bg-gradient-to-br from-teal-400 to-green-500 rounded-r-lg"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Let's Explore Together</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      At TripTrap, the world is our diama and every journey is an opportunity to discover something new about ourselves and the most interesting cultural of every one that without a shadow.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-800">Ramadhan Promo</span>
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Destinations for 2024
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the most sought-after destinations this year, curated by our travel experts 
              for unforgettable experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { color: "from-blue-400 to-cyan-500", price: "$120.00" },
              { color: "from-green-400 to-emerald-500", price: "$165.00" },
              { color: "from-gray-400 to-slate-500", price: "$190.00" },
              { color: "from-orange-400 to-red-500", price: "$250.00" }
            ].map((destination, index) => (
              <Card key={index} className="hover:shadow-xl transition-all cursor-pointer group">
                <div className={`relative h-64 bg-gradient-to-br ${destination.color} rounded-t-lg overflow-hidden`}>
                  <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full font-semibold">
                    {destination.price}
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all"></div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Amazing Destination {index + 1}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Experience the beauty and culture
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}