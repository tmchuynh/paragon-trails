"use client";

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
      <div className="relative lg:flex lg:flex-col lg:flex-1 lg:justify-center hidden bg-gradient-to-br from-primary via-primary/90 to-blue-600 lg:px-12 xl:px-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.white/10),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative z-10">
          {/* Logo/Brand */}
          <div className="flex items-center gap-3 mb-12">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
              <Compass className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-2xl text-white">Paragon Trails</h1>
              <p className="text-sm text-white/80">Luxury redefined</p>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="space-y-6">
            <h2 className="font-bold text-4xl text-white leading-tight">
              Begin your extraordinary journey
            </h2>
            <p className="text-white/90 text-xl leading-relaxed">
              Join our exclusive community of discerning travelers and unlock
              access to the world's most extraordinary experiences.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mt-12">
              <div className="flex items-center gap-3 text-white/90">
                <div className="bg-white rounded-full w-2 h-2" />
                <span>Personalized luxury travel curation</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="bg-white rounded-full w-2 h-2" />
                <span>Exclusive access to private venues</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="bg-white rounded-full w-2 h-2" />
                <span>24/7 dedicated concierge service</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="bg-white rounded-full w-2 h-2" />
                <span>Invitation-only events and experiences</span>
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mt-16">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-white/80">
                Registration Progress
              </span>
              <span className="font-medium text-sm text-white">
                {currentStep}/3
              </span>
            </div>
            <div className="bg-white/20 rounded-full w-full h-2">
              <div
                className="bg-white rounded-full h-2 transition-all duration-500"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Registration Form */}
      <div className="flex flex-col flex-1 justify-center bg-white dark:bg-slate-950 px-6 sm:px-12 lg:px-16 xl:px-24">
        <div className="mx-auto w-full max-w-md">
          {/* Mobile Logo */}
          <div className="flex justify-center items-center gap-3 lg:hidden mb-12">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Compass className="w-6 h-6 text-primary" />
            </div>
            <span className="font-bold text-slate-900 text-xl dark:text-white">
              Paragon Trails
            </span>
          </div>

          {/* Form Header */}
          <div className="mb-10 text-center">
            <h1 className="mb-3 font-bold text-3xl text-slate-900 dark:text-white">
              Create your account
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
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
              <span className="text-slate-600 text-sm dark:text-slate-400">
                Progress
              </span>
              <span className="font-medium text-slate-900 text-sm dark:text-white">
                {currentStep}/3
              </span>
            </div>
            <div className="bg-slate-200 dark:bg-slate-700 rounded-full w-full h-2">
              <div
                className="bg-primary rounded-full h-2 transition-all duration-500"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              />
            </div>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <>
                <div className="gap-4 grid grid-cols-2">
                  <div className="space-y-2">
                    <Label
                      htmlFor="firstName"
                      className="font-medium text-slate-700 text-sm dark:text-slate-300"
                    >
                      First Name
                    </Label>
                    <div className="relative">
                      <div className="left-0 absolute inset-y-0 flex items-center pl-3 pointer-events-none">
                        <User className="w-5 h-5 text-slate-400" />
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
                        className="pl-10 border-slate-200 focus:border-primary dark:border-slate-700 focus:ring-primary/20 h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="lastName"
                      className="font-medium text-slate-700 text-sm dark:text-slate-300"
                    >
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
                      className="border-slate-200 focus:border-primary dark:border-slate-700 focus:ring-primary/20 h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="font-medium text-slate-700 text-sm dark:text-slate-300"
                  >
                    Email Address
                  </Label>
                  <div className="relative">
                    <div className="left-0 absolute inset-y-0 flex items-center pl-3 pointer-events-none">
                      <Mail className="w-5 h-5 text-slate-400" />
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
                      className="pl-10 border-slate-200 focus:border-primary dark:border-slate-700 focus:ring-primary/20 h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="font-medium text-slate-700 text-sm dark:text-slate-300"
                  >
                    Phone Number
                  </Label>
                  <div className="relative">
                    <div className="left-0 absolute inset-y-0 flex items-center pl-3 pointer-events-none">
                      <Phone className="w-5 h-5 text-slate-400" />
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
                      className="pl-10 border-slate-200 focus:border-primary dark:border-slate-700 focus:ring-primary/20 h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="country"
                    className="font-medium text-slate-700 text-sm dark:text-slate-300"
                  >
                    Country/Region
                  </Label>
                  <div className="relative">
                    <div className="left-0 z-10 absolute inset-y-0 flex items-center pl-3 pointer-events-none">
                      <MapPin className="w-5 h-5 text-slate-400" />
                    </div>
                    <Select
                      value={formData.country}
                      onValueChange={(value) =>
                        handleInputChange("country", value)
                      }
                    >
                      <SelectTrigger className="pl-10 border-slate-200 focus:border-primary dark:border-slate-700 focus:ring-primary/20 h-12">
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="fr">France</SelectItem>
                        <SelectItem value="de">Germany</SelectItem>
                        <SelectItem value="jp">Japan</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button
                  type="button"
                  onClick={handleNextStep}
                  disabled={!isStep1Valid}
                  className="flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 rounded-lg w-full h-12 font-medium text-white transition-all duration-200"
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
                  <Label
                    htmlFor="password"
                    className="font-medium text-slate-700 text-sm dark:text-slate-300"
                  >
                    Password
                  </Label>
                  <div className="relative">
                    <div className="left-0 absolute inset-y-0 flex items-center pl-3 pointer-events-none">
                      <Lock className="w-5 h-5 text-slate-400" />
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
                      className="pr-10 pl-10 border-slate-200 focus:border-primary dark:border-slate-700 focus:ring-primary/20 h-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="right-0 absolute inset-y-0 flex items-center pr-3"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5 text-slate-400 hover:text-slate-600" />
                      ) : (
                        <Eye className="w-5 h-5 text-slate-400 hover:text-slate-600" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="confirmPassword"
                    className="font-medium text-slate-700 text-sm dark:text-slate-300"
                  >
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <div className="left-0 absolute inset-y-0 flex items-center pl-3 pointer-events-none">
                      <Lock className="w-5 h-5 text-slate-400" />
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
                      className="pr-10 pl-10 border-slate-200 focus:border-primary dark:border-slate-700 focus:ring-primary/20 h-12"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="right-0 absolute inset-y-0 flex items-center pr-3"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-5 h-5 text-slate-400 hover:text-slate-600" />
                      ) : (
                        <Eye className="w-5 h-5 text-slate-400 hover:text-slate-600" />
                      )}
                    </button>
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
                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                  <p className="mb-2 font-medium text-slate-700 text-sm dark:text-slate-300">
                    Password requirements:
                  </p>
                  <ul className="space-y-1 text-slate-600 text-xs dark:text-slate-400">
                    <li className="flex items-center gap-2">
                      <div className="bg-slate-400 rounded-full w-1 h-1" />
                      At least 8 characters long
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-slate-400 rounded-full w-1 h-1" />
                      Contains uppercase and lowercase letters
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-slate-400 rounded-full w-1 h-1" />
                      Contains at least one number
                    </li>
                  </ul>
                </div>

                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrevStep}
                    className="flex-1 border-slate-200 dark:border-slate-700 h-12"
                  >
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={handleNextStep}
                    disabled={!isStep2Valid}
                    className="flex flex-1 justify-center items-center gap-2 bg-primary hover:bg-primary/90 rounded-lg h-12 font-medium text-white transition-all duration-200"
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
                  <Label className="font-medium text-slate-700 text-sm dark:text-slate-300">
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
                            : "border-slate-200 dark:border-slate-700 hover:border-slate-300"
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
                              <Check className="w-3 h-3 text-white" />
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
                      className="mt-1"
                    />
                    <Label
                      htmlFor="terms"
                      className="text-slate-600 text-sm dark:text-slate-300 leading-relaxed"
                    >
                      I agree to the{" "}
                      <button
                        type="button"
                        className="text-primary hover:underline"
                      >
                        Terms of Service
                      </button>{" "}
                      and{" "}
                      <button
                        type="button"
                        className="text-primary hover:underline"
                      >
                        Privacy Policy
                      </button>
                    </Label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="marketing"
                      checked={formData.agreeToMarketing}
                      onCheckedChange={(checked) =>
                        handleInputChange("agreeToMarketing", checked)
                      }
                      className="mt-1"
                    />
                    <Label
                      htmlFor="marketing"
                      className="text-slate-600 text-sm dark:text-slate-300 leading-relaxed"
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
                    className="flex-1 border-slate-200 dark:border-slate-700 h-12"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    disabled={!isStep3Valid || isLoading}
                    className="flex flex-1 justify-center items-center gap-2 bg-primary hover:bg-primary/90 rounded-lg h-12 font-medium text-white transition-all duration-200"
                  >
                    {isLoading ? (
                      <div className="border-2 border-white/30 border-t-white rounded-full w-5 h-5 animate-spin" />
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
            <p className="text-slate-600 dark:text-slate-400">
              Already have an account?{" "}
              <Button
                type="button"
                variant="link"
                onClick={() => router.push("/login")}
                className="p-0 h-auto font-medium text-primary hover:text-primary/80"
              >
                Sign in here
              </Button>
            </p>
          </div>

          {/* Security Notice */}
          <div className="bg-slate-50 dark:bg-slate-900/50 mt-8 p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
            <p className="text-center text-slate-500 text-xs dark:text-slate-400">
              Your personal information is protected with enterprise-grade
              security and will never be shared with third parties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
