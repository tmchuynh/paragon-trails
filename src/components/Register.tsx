"use client";

import { Progress } from "@/components/ui/progress";
import {
  ArrowRight,
  Check,
  Compass,
  Eye,
  EyeOff,
  Lock,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Loading from "./Loading";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  country: string;
  travelInterests: string[];
  agreeToTerms: boolean;
  agreeToMarketing: boolean;
}

export default function Register() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    country: "",
    travelInterests: [],
    agreeToTerms: false,
    agreeToMarketing: false,
  });

  const travelInterests = [
    "Luxury Resorts",
    "Cultural Experiences",
    "Adventure Travel",
    "Wellness Retreats",
    "Business Travel",
    "Family Vacations",
    "Romantic Getaways",
    "Solo Travel",
    "Culinary Tours",
    "Wildlife & Nature",
  ];

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleTravelInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      travelInterests: prev.travelInterests.includes(interest)
        ? prev.travelInterests.filter((i) => i !== interest)
        : [...prev.travelInterests, interest],
    }));
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Calculate progress percentage based on current step
  const progressPercentage = (currentStep / 3) * 100;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    // Handle registration logic here
    router.push("/login");
  };

  const isStep1Valid =
    formData.firstName && formData.lastName && formData.email && formData.phone;
  const isStep2Valid =
    formData.password &&
    formData.confirmPassword &&
    formData.password === formData.confirmPassword;
  const isStep3Valid = formData.agreeToTerms;

  return (
    <div className="flex min-h-screen">
      {/* Left Panel - Branding */}
      <div className="relative lg:flex lg:flex-col lg:flex-1 lg:justify-center hidden lg:px-12 xl:px-24 overflow-hidden">
        <div className="relative z-10">
          {/* Logo/Brand */}
          <div className="flex items-center gap-3 mb-12">
            <div className="backdrop-blur-sm p-3 rounded-xl">
              <Compass className="w-8 h-8" />
            </div>
            <div>
              <h1 className="font-bold text-2xl">Paragon Trails</h1>
              <p className="text-sm /80">Luxury redefined</p>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="space-y-6">
            <h2 className="font-bold text-4xl leading-tight">
              Begin your extraordinary journey
            </h2>
            <p className="text-xl leading-relaxed /90">
              Join our exclusive community of discerning travelers and unlock
              access to the world's most extraordinary experiences.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mt-12">
              <div className="flex items-center gap-3 /90">
                <div className="rounded-full w-2 h-2" />
                <span>Personalized luxury travel curation</span>
              </div>
              <div className="flex items-center gap-3 /90">
                <div className="rounded-full w-2 h-2" />
                <span>Exclusive access to private venues</span>
              </div>
              <div className="flex items-center gap-3 /90">
                <div className="rounded-full w-2 h-2" />
                <span>24/7 dedicated concierge service</span>
              </div>
              <div className="flex items-center gap-3 /90">
                <div className="rounded-full w-2 h-2" />
                <span>Invitation-only events and experiences</span>
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mt-16">
            <div className="flex justify-between items-center mb-4">
              <Progress value={progressPercentage} className="w-[30%]" />
              <span className="text-sm /80">Registration Progress</span>
              <span className="font-medium text-sm">{currentStep}/3</span>
            </div>
            <div className="rounded-full w-full h-2">
              <div
                className="rounded-full h-2 transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Registration Form */}
      <div className="flex flex-col flex-1 justify-center px-6 sm:px-12 lg:px-16 xl:px-24">
        <div className="mx-auto w-full max-w-md">
          {/* Mobile Logo */}
          <div className="flex justify-center items-center gap-3 lg:hidden mb-12">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Compass className="w-6 h-6 text-primary" />
            </div>
            <span className="font-bold text-xl">Paragon Trails</span>
          </div>

          {/* Form Header */}
          <div className="mb-10 text-center">
            <h1 className="mb-3 font-bold text-3xl">Create your account</h1>
            <p className="">
              Step {currentStep} of 3 -{" "}
              {currentStep === 1
                ? "Personal Information"
                : currentStep === 2
                  ? "Account Security"
                  : "Preferences & Terms"}
            </p>
          </div>

          {/* Step Progress (Mobile) */}
          <div className="lg:hidden mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm">Progress</span>
              <span className="font-medium text-sm">{currentStep}/3</span>
            </div>
            <Progress value={progressPercentage} className="w-full" />
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <>
                <div className="gap-4 grid grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="font-medium text-sm">
                      First Name
                    </Label>
                    <div className="relative">
                      <div className="left-0 absolute inset-y-0 flex items-center pl-3 pointer-events-none">
                        <User className="w-5 h-5" />
                      </div>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        placeholder="John"
                        className="pl-10 border-slate-200 focus:border-primary focus:ring-primary/20 h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="font-medium text-sm">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      placeholder="Doe"
                      className="border-slate-200 focus:border-primary focus:ring-primary/20 h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-medium text-sm">
                    Email Address
                  </Label>
                  <div className="relative">
                    <div className="left-0 absolute inset-y-0 flex items-center pl-3 pointer-events-none">
                      <Mail className="w-5 h-5" />
                    </div>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="john.doe@example.com"
                      className="pl-10 border-slate-200 focus:border-primary focus:ring-primary/20 h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-medium text-sm">
                    Phone Number
                  </Label>
                  <div className="relative">
                    <div className="left-0 absolute inset-y-0 flex items-center pl-3 pointer-events-none">
                      <Phone className="w-5 h-5" />
                    </div>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      placeholder="+1 (555) 123-4567"
                      className="pl-10 border-slate-200 focus:border-primary focus:ring-primary/20 h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country" className="font-medium text-sm">
                    Country/Region
                  </Label>
                  <div className="relative">
                    <div className="left-0 z-10 absolute inset-y-0 flex items-center pl-3 pointer-events-none">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <Select
                      value={formData.country}
                      onValueChange={(value) =>
                        handleInputChange("country", value)
                      }
                    >
                      <SelectTrigger className="pl-10 h-12">
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent className="w-full max-h-60">
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="fr">France</SelectItem>
                        <SelectItem value="de">Germany</SelectItem>
                        <SelectItem value="jp">Japan</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                        <SelectItem value="in">India</SelectItem>
                        <SelectItem value="cn">China</SelectItem>
                        <SelectItem value="br">Brazil</SelectItem>
                        <SelectItem value="za">South Africa</SelectItem>
                        <SelectItem value="mx">Mexico</SelectItem>
                        <SelectItem value="it">Italy</SelectItem>
                        <SelectItem value="es">Spain</SelectItem>
                        <SelectItem value="ru">Russia</SelectItem>
                        <SelectItem value="kr">South Korea</SelectItem>
                        <SelectItem value="se">Sweden</SelectItem>
                        <SelectItem value="no">Norway</SelectItem>
                        <SelectItem value="fi">Finland</SelectItem>
                        <SelectItem value="dk">Denmark</SelectItem>
                        <SelectItem value="nl">Netherlands</SelectItem>
                        <SelectItem value="pl">Poland</SelectItem>
                        <SelectItem value="ch">Switzerland</SelectItem>
                        <SelectItem value="be">Belgium</SelectItem>
                        <SelectItem value="at">Austria</SelectItem>
                        <SelectItem value="pt">Portugal</SelectItem>
                        <SelectItem value="gr">Greece</SelectItem>
                        <SelectItem value="tr">Turkey</SelectItem>
                        <SelectItem value="ar">Argentina</SelectItem>
                        <SelectItem value="cl">Chile</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button
                  type="button"
                  onClick={handleNextStep}
                  disabled={!isStep1Valid}
                  className="flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 rounded-lg w-full h-12 font-medium transition-all duration-200"
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </>
            )}

            {/* Step 2: Account Security */}
            {currentStep === 2 && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="password" className="font-medium text-sm">
                    Password
                  </Label>
                  <div className="relative">
                    <div className="left-0 absolute inset-y-0 flex items-center pl-3 pointer-events-none">
                      <Lock className="w-5 h-5" />
                    </div>
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={formData.password}
                      onChange={(e) =>
                        handleInputChange("password", e.target.value)
                      }
                      placeholder="Create a strong password"
                      className="pr-10 pl-10 border-slate-200 focus:border-primary focus:ring-primary/20 h-12"
                    />
                    <Button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="right-0 absolute inset-y-0 flex items-center pr-3"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="confirmPassword"
                    className="font-medium text-sm"
                  >
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <div className="left-0 absolute inset-y-0 flex items-center pl-3 pointer-events-none">
                      <Lock className="w-5 h-5" />
                    </div>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      required
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        handleInputChange("confirmPassword", e.target.value)
                      }
                      placeholder="Confirm your password"
                      className="pr-10 pl-10 border-slate-200 focus:border-primary focus:ring-primary/20 h-12"
                    />
                    <Button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="right-0 absolute inset-y-0 flex items-center pr-3"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </Button>
                  </div>
                  {formData.password &&
                    formData.confirmPassword &&
                    formData.password !== formData.confirmPassword && (
                      <p className="text-red-500 text-sm">
                        Passwords do not match
                      </p>
                    )}
                </div>

                {/* Password Requirements */}
                <div className="p-4 rounded-lg">
                  <p className="mb-2 font-medium text-sm">
                    Password requirements:
                  </p>
                  <ul className="space-y-1 text-xs">
                    <li className="flex items-center gap-2">
                      <div className="rounded-full w-1 h-1" />
                      At least 8 characters long
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="rounded-full w-1 h-1" />
                      Contains uppercase and lowercase letters
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="rounded-full w-1 h-1" />
                      Contains at least one number
                    </li>
                  </ul>
                </div>

                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrevStep}
                    className="flex-1 h-12"
                  >
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={handleNextStep}
                    disabled={!isStep2Valid}
                  >
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </>
            )}

            {/* Step 3: Preferences & Terms */}
            {currentStep === 3 && (
              <>
                <div className="space-y-4">
                  <Label className="font-medium text-sm">
                    Travel Interests (Optional)
                  </Label>
                  <div className="gap-3 grid grid-cols-2">
                    {travelInterests.map((interest) => (
                      <div
                        key={interest}
                        onClick={() => handleTravelInterestToggle(interest)}
                        className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                          formData.travelInterests.includes(interest)
                            ? "border-primary bg-primary/5 text-primary"
                            : "  hover:border-slate-300"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-4 h-4 rounded border flex items-center justify-center ${
                              formData.travelInterests.includes(interest)
                                ? "border-primary bg-primary"
                                : "border-slate-300"
                            }`}
                          >
                            {formData.travelInterests.includes(interest) && (
                              <Check className="w-3 h-3" />
                            )}
                          </div>
                          <span className="text-sm">{interest}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) =>
                        handleInputChange("agreeToTerms", checked)
                      }
                      className="data-[state=checked]:bg-accentdata-[state=checked]:bg-accent mt-1 data-[state=checked]:border-accent data-[state=checked]:text-accent-foreground"
                    />
                    <Label htmlFor="terms" className="text-sm leading-relaxed">
                      I agree to the{" "}
                      <Button
                        onClick={() => router.push("/terms")}
                        variant="link"
                        size="sm"
                        type="button"
                        className="m-0 p-0 text-primary hover:underline"
                      >
                        Terms of Service
                      </Button>{" "}
                      and{" "}
                      <Button
                        onClick={() => router.push("/privacy")}
                        variant="link"
                        size="sm"
                        type="button"
                        className="m-0 p-0 text-primary hover:underline"
                      >
                        Privacy Policy
                      </Button>
                    </Label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="marketing"
                      checked={formData.agreeToMarketing}
                      onCheckedChange={(checked) =>
                        handleInputChange("agreeToMarketing", checked)
                      }
                      className="data-[state=checked]:bg-accentdata-[state=checked]:bg-accent mt-1 data-[state=checked]:border-accent data-[state=checked]:text-accent-foreground"
                    />
                    <Label
                      htmlFor="marketing"
                      className="text-sm leading-relaxed"
                    >
                      I would like to receive exclusive travel offers,
                      inspiration, and updates from Paragon Trails
                    </Label>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrevStep}
                  >
                    Back
                  </Button>
                  <Button type="submit" disabled={!isStep3Valid || isLoading}>
                    {isLoading ? (
                      <Loading />
                    ) : (
                      <>
                        Create Account
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
              </>
            )}
          </form>

          {/* Sign In Link */}
          <div className="mt-8 text-center">
            <p className="">
              Already have an account?{" "}
              <Button
                type="button"
                variant="link"
                onClick={() => router.push("/login")}
              >
                Sign in here
              </Button>
            </p>
          </div>

          {/* Security Notice */}
          <div className="mt-8 p-4 border rounded-lg">
            <p className="text-center text-xs">
              Your personal information is protected with enterprise-grade
              security and will never be shared with third parties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
