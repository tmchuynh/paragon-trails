"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
import { useRouter } from "next/navigation";
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
  const router = useRouter();

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
    <div className="min-h-screen">
      <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 font-bold text-4xl lg:text-5xl dark:text-white">
            Get in Touch
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg lg:text-xl">
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
              <h3 className="mb-2 font-semibold">Response Time</h3>
              <p className="text-sm">Within 2 hours during business hours</p>
            </div>

            <div className="flex flex-col items-center bg-white dark:bg-slate-900 shadow-sm p-6 rounded-xl">
              <div className="flex justify-center items-center bg-primary/10 mb-4 rounded-full w-16 h-16">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">Global Coverage</h3>
              <p className="text-sm">Worldwide support in multiple languages</p>
            </div>

            <div className="flex flex-col items-center bg-white dark:bg-slate-900 shadow-sm p-6 rounded-xl">
              <div className="flex justify-center items-center bg-primary/10 mb-4 rounded-full w-16 h-16">
                <Headphones className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">24/7 Emergency Support</h3>
              <p className="text-sm">
                Always available for urgent travel needs
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
                <p className="">
                  Fill out the form below and we'll get back to you promptly
                </p>
              </CardHeader>
              <CardContent>
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
                        className="flex flex-col justify-center mt-0.25 border focus:border-muted border-border focus:ring-muted/20"
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
                        className="flex flex-col justify-center mt-0.25 border focus:border-muted border-border focus:ring-muted/20"
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
                        className="flex flex-col justify-center mt-0.25 border focus:border-muted border-border focus:ring-muted/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <Select
                        value={formData.department}
                        onValueChange={(value) =>
                          setFormData((prev) => ({
                            ...prev,
                            department: value,
                          }))
                        }
                      >
                        <SelectTrigger className="border border-border w-full">
                          <SelectValue placeholder="Select a department" />
                        </SelectTrigger>
                        <SelectContent>
                          {contactDepartments.map((dept) => (
                            <SelectItem
                              key={dept.department}
                              value={dept.department}
                              variant="classic"
                            >
                              <HoverCard>
                                <HoverCardTrigger asChild>
                                  <span className="cursor-pointer">
                                    {dept.department}
                                  </span>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                  <div className="space-y-2">
                                    <h4 className="font-semibold text-sm">
                                      {dept.department}
                                    </h4>
                                    <p className="text-muted-foreground text-xs">
                                      {dept.description}
                                    </p>
                                    <div className="space-y-1 text-xs">
                                      <p>📞 {dept.phone}</p>
                                      <p>✉️ {dept.email}</p>
                                    </div>
                                  </div>
                                </HoverCardContent>
                              </HoverCard>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <p className="text-muted-foreground text-xs">
                        Choose the most relevant department for faster response
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="priority">Priority</Label>
                    <Select
                      value={formData.priority}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, priority: value }))
                      }
                    >
                      <SelectTrigger className="border border-border w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="normal" variant="classic">
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" size="xs">
                              Normal
                            </Badge>
                            <span>Standard inquiry</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="urgent" variant="classic">
                          <div className="flex items-center gap-2">
                            <Badge variant="warning" size="xs">
                              Urgent
                            </Badge>
                            <span>Needs quick response</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="emergency" variant="classic">
                          <div className="flex items-center gap-2">
                            <Badge variant="destructive" size="xs">
                              Emergency
                            </Badge>
                            <span>Travel disruption</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-muted-foreground text-xs">
                      Emergency: Travel disruptions requiring immediate
                      assistance
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Brief description of your inquiry"
                      required
                      className="flex flex-col justify-center mt-0.25 border focus:border-muted border-border focus:ring-muted/20"
                    />
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
                      rows={9}
                      required
                      maxLength={5000}
                      aria-describedby="message-help"
                    />
                    <div className="flex justify-between text-muted-foreground text-xs">
                      <span>
                        Provide as much detail as possible for better assistance
                      </span>
                      <span>{formData.message.length}/5000</span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 text-base"
                    size="lg"
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
                    <p className="text-xs">
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
                <p className="text-sm">
                  Our multilingual team provides support in your preferred
                  language
                </p>
              </CardHeader>
              <CardContent>
                <div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
                  <div className="space-y-2">
                    <h4 className="font-semibold">European Languages</h4>
                    <p className="text-sm">
                      English, Spanish, French, German, Italian, Portuguese
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Asian Languages</h4>
                    <p className="text-sm">
                      Mandarin, Japanese, Korean, Hindi, Thai, Vietnamese
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Middle Eastern</h4>
                    <p className="text-sm">Arabic, Hebrew, Persian, Turkish</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Additional Support</h4>
                    <p className="text-sm">
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
              <CardContent className="-mt-5">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Email Inquiries</span>
                    <Badge variant="secondary">Within 2 hours</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Phone Calls</span>
                    <Badge variant="secondary">Immediate</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-red-800 dark:text-red-400">
                      Emergency Support
                    </span>
                    <Badge variant="destructive">24/7 Worldwide</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Globe className="w-5 h-5 text-primary" />
                  Connect With Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm">
                    Follow us on social media for travel inspiration, company
                    updates, and exclusive offers.
                  </p>
                  <div className="flex justify-center gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href="#" className="hover:text-primary">
                        LinkedIn
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="#" className="hover:text-primary">
                        Instagram
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="#" className="hover:text-primary">
                        Facebook
                      </a>
                    </Button>
                  </div>
                  <div className="pt-4 text-center">
                    <p className="text-xs">
                      Join over 50,000+ travelers who trust Paragon Trails for
                      their luxury travel experiences
                    </p>
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
              <CardContent className="space-y-6 -mt-6">
                {/* Main Contact */}
                <div className="p-4 rounded-lg">
                  <h3 className="mb-3 font-semibold text-lg">
                    General Inquiries
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-primary" />
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href="tel:+13104778800"
                            className="font-medium hover:text-primary dark:text-white"
                          >
                            +1 (310) 477-8800
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          Click to call our general inquiries line
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-primary" />
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href="mailto:info@paragontrails.com"
                            className="hover:text-primary"
                          >
                            info@paragontrails.com
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          Send us an email for general inquiries
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm">
                        Mon–Fri, 9:00 AM – 6:00 PM PT
                      </span>
                    </div>
                  </div>
                </div>

                {/* Office Location */}
                <div className="p-4 rounded-lg">
                  <h3 className="flex items-center gap-2 mb-3 font-semibold text-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                    Our Location
                  </h3>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      123 Luxury Travel Boulevard
                      <br />
                      Beverly Hills, CA 90210
                      <br />
                      United States
                    </p>
                    <Badge variant="outline" size="sm">
                      Visits by appointment only
                    </Badge>
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
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href="tel:+13104778820"
                            className="font-medium text-red-800 hover:text-red-600 dark:text-red-400"
                          >
                            +1 (310) 477-8820
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          Emergency line - available 24/7 worldwide
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-red-600" />
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href="mailto:safety@paragontrails.com"
                            className="text-red-700 hover:text-red-600 dark:text-red-400"
                          >
                            safety@paragontrails.com
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          Emergency email for urgent travel assistance
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <Badge variant="destructive" className="mt-2">
                      Available 24/7 Worldwide
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Department Directory */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Department Directory</CardTitle>
                <p className="text-sm">
                  Contact the right team for faster assistance
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 -mt-3">
                  {/* Primary Departments */}
                  <div>
                    <h4 className="mb-3 font-semibold">Primary Services</h4>
                    <div className="space-y-3">
                      {primaryDepartments.map((dept) => (
                        <div key={dept.department}>
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h5>{dept.department}</h5>
                              <p className="mt-1 text-sm">{dept.short}</p>
                            </div>
                            <div className="flex gap-2 ml-4">
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="p-0 w-9 h-9"
                                    onClick={() =>
                                      router.push(`tel:${dept.phone}`)
                                    }
                                  >
                                    <Phone className="w-4 h-4" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  Call {dept.department}
                                </TooltipContent>
                              </Tooltip>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="p-0 w-9 h-9"
                                    onClick={() =>
                                      router.push(`mailto:${dept.email}`)
                                    }
                                  >
                                    <Mail className="w-4 h-4" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  Email {dept.department}
                                </TooltipContent>
                              </Tooltip>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Specialized Services */}
                  <div>
                    <h4 className="mb-3 font-semibold">Specialized Services</h4>
                    <div className="space-y-2">
                      {specializedDepartments.map((dept) => (
                        <div key={dept.department}>
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h5>{dept.department}</h5>
                              <p className="mt-1 text-sm">{dept.short}</p>
                            </div>
                            <div className="flex gap-2 ml-4">
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="p-0 w-9 h-9"
                                    onClick={() =>
                                      router.push(`tel:${dept.phone}`)
                                    }
                                  >
                                    <Phone className="w-3 h-3" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  Call {dept.department}
                                </TooltipContent>
                              </Tooltip>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="p-0 w-9 h-9"
                                    onClick={() =>
                                      router.push(`mailto:${dept.email}`)
                                    }
                                  >
                                    <Mail className="w-3 h-3" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  Email {dept.department}
                                </TooltipContent>
                              </Tooltip>
                            </div>
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
      </div>

      {/* Floating Emergency Button */}
      <div className="right-6 bottom-6 z-50 fixed">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              asChild
              variant="destructive"
              size="icon"
              className="group shadow-lg hover:shadow-xl rounded-full w-14 h-14 transition-all duration-200"
              aria-label="Emergency Contact"
            >
              <a href="tel:+13104778820" className="relative">
                <Headphones className="w-6 h-6" />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            Emergency: +1 (310) 477-8820
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}
