"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { contactDepartments } from "@/lib/constants/info/contact";
import {
  Clock,
  Globe,
  Headphones,
  Mail,
  MapPin,
  Phone,
  Send,
  Shield,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    subject: "",
    message: "",
    priority: "normal",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success("Your message has been sent! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      department: "",
      subject: "",
      message: "",
      priority: "normal",
    });
    setIsSubmitting(false);
  };

  const primaryDepartments = contactDepartments.slice(0, 4);
  const specializedDepartments = contactDepartments.slice(4);

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 font-bold text-4xl text-slate-900 lg:text-5xl dark:text-white">
            Get in Touch
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-slate-600 lg:text-xl dark:text-slate-400">
            Our dedicated team of travel specialists is here to help you create
            extraordinary journeys. Reach out to us for personalized assistance,
            expert advice, or any questions about your travel plans.
          </p>

          {/* Quick Contact Stats */}
          <div className="gap-8 grid grid-cols-1 md:grid-cols-3 mx-auto mb-12 max-w-4xl">
            <div className="flex flex-col items-center bg-white dark:bg-slate-900 shadow-sm p-6 rounded-xl">
              <div className="flex justify-center items-center bg-primary/10 mb-4 rounded-full w-16 h-16">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                Response Time
              </h3>
              <p className="text-slate-600 text-sm dark:text-slate-400">
                Within 2 hours during business hours
              </p>
            </div>

            <div className="flex flex-col items-center bg-white dark:bg-slate-900 shadow-sm p-6 rounded-xl">
              <div className="flex justify-center items-center bg-primary/10 mb-4 rounded-full w-16 h-16">
                <Headphones className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                24/7 Emergency Support
              </h3>
              <p className="text-slate-600 text-sm dark:text-slate-400">
                Always available for urgent travel needs
              </p>
            </div>

            <div className="flex flex-col items-center bg-white dark:bg-slate-900 shadow-sm p-6 rounded-xl">
              <div className="flex justify-center items-center bg-primary/10 mb-4 rounded-full w-16 h-16">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                Global Coverage
              </h3>
              <p className="text-slate-600 text-sm dark:text-slate-400">
                Worldwide support in multiple languages
              </p>
            </div>
          </div>
        </div>

        <div className="gap-8 lg:gap-12 grid lg:grid-cols-2">
          {/* Contact Form */}
          <div className="space-y-6 lg:space-y-8 lg:order-2 h-full">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Send className="w-6 h-6 text-primary" />
                  Send Us a Message
                </CardTitle>
                <p className="text-slate-600 dark:text-slate-400">
                  Fill out the form below and we'll get back to you promptly
                </p>
              </CardHeader>
              <CardContent className="p-6 lg:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <select
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        className="flex bg-background file:bg-transparent disabled:opacity-50 px-3 py-2 border border-input file:border-0 rounded-md focus-visible:ring-2 focus-visible:ring-ring ring-offset-background focus-visible:ring-offset-2 w-full file:font-medium text-sm placeholder:text-muted-foreground file:text-foreground file:text-sm disabled:cursor-not-allowed focus-visible:outline-none"
                        aria-describedby="department-help"
                      >
                        <option value="">Select a department</option>
                        {contactDepartments.map((dept) => (
                          <option key={dept.department} value={dept.department}>
                            {dept.department}
                          </option>
                        ))}
                      </select>
                      <p
                        id="department-help"
                        className="text-slate-500 text-xs dark:text-slate-400"
                      >
                        Choose the most relevant department for faster response
                      </p>
                    </div>
                  </div>

                  {/* Priority and Subject */}
                  <div className="gap-4 grid grid-cols-1 sm:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="priority">Priority</Label>
                      <select
                        id="priority"
                        name="priority"
                        value={formData.priority}
                        onChange={handleInputChange}
                        className="flex bg-background file:bg-transparent disabled:opacity-50 px-3 py-2 border border-input file:border-0 rounded-md focus-visible:ring-2 focus-visible:ring-ring ring-offset-background focus-visible:ring-offset-2 w-full file:font-medium text-sm placeholder:text-muted-foreground file:text-foreground file:text-sm disabled:cursor-not-allowed focus-visible:outline-none"
                        aria-describedby="priority-help"
                      >
                        <option value="normal">Normal</option>
                        <option value="urgent">Urgent</option>
                        <option value="emergency">Emergency</option>
                      </select>
                      <p
                        id="priority-help"
                        className="text-slate-500 text-xs dark:text-slate-400"
                      >
                        Emergency: Travel disruptions requiring immediate
                        assistance
                      </p>
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Brief description of your inquiry"
                        required
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please provide details about your inquiry..."
                      rows={6}
                      required
                      maxLength={1000}
                      aria-describedby="message-help"
                    />
                    <div className="flex justify-between text-slate-500 text-xs dark:text-slate-400">
                      <span id="message-help">
                        Provide as much detail as possible for better assistance
                      </span>
                      <span>{formData.message.length}/1000</span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="mr-2 border-2 border-white border-t-transparent rounded-full w-4 h-4 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {/* Privacy Note */}
                  <div className="flex items-start gap-2 p-4 rounded-lg">
                    <Shield className="flex-shrink-0 mt-0.5 w-4 h-4 text-primary" />
                    <p className="text-slate-600 text-xs dark:text-slate-400">
                      Your privacy is important to us. All information submitted
                      through this form is encrypted and handled according to
                      our privacy policy. We will never share your details with
                      third parties without your consent.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Globe className="w-5 h-5 text-primary" />
                  Global Language Support
                </CardTitle>
                <p className="text-slate-600 text-sm dark:text-slate-400">
                  Our multilingual team provides support in your preferred
                  language
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      European Languages
                    </h4>
                    <p className="text-slate-600 text-sm dark:text-slate-400">
                      English, Spanish, French, German, Italian, Portuguese
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      Asian Languages
                    </h4>
                    <p className="text-slate-600 text-sm dark:text-slate-400">
                      Mandarin, Japanese, Korean, Hindi, Thai, Vietnamese
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      Middle Eastern
                    </h4>
                    <p className="text-slate-600 text-sm dark:text-slate-400">
                      Arabic, Hebrew, Persian, Turkish
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      Additional Support
                    </h4>
                    <p className="text-slate-600 text-sm dark:text-slate-400">
                      Russian, Dutch, Swedish, and more upon request
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Clock className="w-5 h-5 text-primary" />
                  Response Times
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 rounded-lg">
                    <span>Email Inquiries</span>
                    <Badge variant="secondary">Within 2 hours</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg">
                    <span>Phone Calls</span>
                    <Badge variant="secondary">Immediate</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg">
                    <span className="font-medium text-red-800 dark:text-red-400">
                      Emergency Support
                    </span>
                    <Badge variant="destructive">24/7 Worldwide</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 lg:space-y-8 lg:order-2">
            {/* Primary Contact Methods */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Phone className="w-6 h-6 text-primary" />
                  Quick Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                {/* Main Contact */}
                <div className="p-4 rounded-lg">
                  <h3 className="mb-3 font-semibold text-lg text-slate-900 dark:text-white">
                    General Inquiries
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-primary" />
                      <a
                        href="tel:+13104778800"
                        className="font-medium text-slate-900 hover:text-primary dark:text-white"
                      >
                        +1 (310) 477-8800
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-primary" />
                      <a
                        href="mailto:info@paragontrails.com"
                        className="text-slate-600 hover:text-primary dark:text-slate-400"
                      >
                        info@paragontrails.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-slate-600 text-sm dark:text-slate-400">
                        Mon–Fri, 9:00 AM – 6:00 PM PT
                      </span>
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="bg-red-50 dark:bg-red-950/20 p-4 border-2 border-red-200 dark:border-red-800 rounded-lg">
                  <h3 className="flex items-center gap-2 mb-3 font-semibold text-lg text-red-800 dark:text-red-400">
                    <Headphones className="w-5 h-5" />
                    Emergency Support
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-red-600" />
                      <a
                        href="tel:+13104778820"
                        className="font-medium text-red-800 hover:text-red-600 dark:text-red-400"
                      >
                        +1 (310) 477-8820
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-red-600" />
                      <a
                        href="mailto:safety@paragontrails.com"
                        className="text-red-700 hover:text-red-600 dark:text-red-400"
                      >
                        safety@paragontrails.com
                      </a>
                    </div>
                    <Badge variant="destructive" className="mt-2">
                      Available 24/7 Worldwide
                    </Badge>
                  </div>
                </div>

                {/* Office Location */}
                <div className="p-4 rounded-lg">
                  <h3 className="flex items-center gap-2 mb-3 font-semibold text-lg text-slate-900 dark:text-white">
                    <MapPin className="w-5 h-5 text-primary" />
                    Our Location
                  </h3>
                  <div className="space-y-2">
                    <p className="text-slate-700 dark:text-slate-300">
                      123 Luxury Travel Boulevard
                      <br />
                      Beverly Hills, CA 90210
                      <br />
                      United States
                    </p>
                    <p className="text-slate-600 text-sm dark:text-slate-400">
                      Visits by appointment only
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Department Directory */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Department Directory</CardTitle>
                <p className="text-slate-600 text-sm dark:text-slate-400">
                  Contact the right team for faster assistance
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Primary Departments */}
                  <div>
                    <h4 className="mb-3 font-semibold text-slate-900 dark:text-white">
                      Primary Services
                    </h4>
                    <div className="space-y-3">
                      {primaryDepartments.map((dept) => (
                        <div
                          key={dept.department}
                          className="hover:bg-slate-50 dark:hover:bg-slate-800 p-3 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors"
                        >
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h5>{dept.department}</h5>
                              <p className="mt-1 text-slate-600 text-sm dark:text-slate-400">
                                {dept.short}
                              </p>
                            </div>
                            <div className="flex gap-2 ml-4">
                              <Button
                                variant="outline"
                                size="sm"
                                className="p-0 w-9 h-9"
                                asChild
                              >
                                <a href={`tel:${dept.phone}`}>
                                  <Phone className="w-4 h-4" />
                                </a>
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="p-0 w-9 h-9"
                                asChild
                              >
                                <a href={`mailto:${dept.email}`}>
                                  <Mail className="w-4 h-4" />
                                </a>
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Specialized Services */}
                  <div>
                    <h4 className="mb-3 font-semibold text-slate-900 dark:text-white">
                      Specialized Services
                    </h4>
                    <div className="space-y-2">
                      {specializedDepartments.map((dept) => (
                        <div
                          key={dept.department}
                          className="flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-800 p-2 rounded transition-colors"
                        >
                          <div className="flex-1">
                            <span className="font-medium text-slate-900 text-sm dark:text-white">
                              {dept.department}
                            </span>
                          </div>
                          <div className="flex gap-1 ml-4">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="p-0 w-8 h-8"
                              asChild
                            >
                              <a href={`tel:${dept.phone}`}>
                                <Phone className="w-3 h-3" />
                              </a>
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="p-0 w-8 h-8"
                              asChild
                            >
                              <a href={`mailto:${dept.email}`}>
                                <Mail className="w-3 h-3" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Languages Supported Section */}

        {/* Response Time & Social Media */}
        <div className="gap-8 grid md:grid-cols-2 mt-8">
          <Card className="md:col-span-2 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Globe className="w-5 h-5 text-primary" />
                Connect With Us
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-slate-600 text-sm dark:text-slate-400">
                  Follow us on social media for travel inspiration, company
                  updates, and exclusive offers.
                </p>
                <div className="flex justify-center gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" className="text-slate-600 hover:text-primary">
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" className="text-slate-600 hover:text-primary">
                      Instagram
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" className="text-slate-600 hover:text-primary">
                      Facebook
                    </a>
                  </Button>
                </div>
                <div className="pt-4 border-slate-200 dark:border-slate-700 border-t text-center">
                  <p className="text-slate-600 text-xs dark:text-slate-400">
                    Join over 50,000+ travelers who trust Paragon Trails for
                    their luxury travel experiences
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Floating Emergency Button */}
      <div className="right-6 bottom-6 z-50 fixed">
        <Button
          asChild
          className="group bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-xl rounded-full w-14 h-14 text-white transition-all duration-200"
          aria-label="Emergency Contact"
        >
          <a href="tel:+13104778820" className="relative">
            <Headphones className="w-6 h-6" />
            <span className="-top-10 -left-8 absolute bg-slate-900 opacity-0 group-hover:opacity-100 px-2 py-1 rounded text-white text-xs whitespace-nowrap transition-opacity">
              Emergency: +1 (310) 477-8820
            </span>
          </a>
        </Button>
      </div>
    </div>
  );
}
