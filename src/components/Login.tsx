"use client";

import { ArrowRight, Compass, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    // Handle login logic here
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Panel - Branding */}
      <div className="relative lg:flex lg:flex-col lg:flex-1 lg:justify-center hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 lg:px-12 xl:px-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary.500/20),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative z-10">
          {/* Logo/Brand */}
          <div className="flex items-center gap-3 mb-12">
            <div className="bg-primary/20 backdrop-blur-sm p-3 rounded-xl">
              <Compass className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="font-bold text-2xl text-white">Paragon Trails</h1>
              <p className="text-slate-400 text-sm">Luxury redefined</p>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="space-y-6">
            <h2 className="font-bold text-4xl text-white leading-tight">
              Welcome back to your journey
            </h2>
            <p className="text-slate-300 text-xl leading-relaxed">
              Access your personalized travel experiences and continue crafting
              memories that last a lifetime.
            </p>

            {/* Features */}
            <div className="space-y-4 mt-12">
              <div className="flex items-center gap-3 text-slate-300">
                <div className="bg-primary rounded-full w-2 h-2" />
                <span>Exclusive access to luxury destinations</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="bg-primary rounded-full w-2 h-2" />
                <span>Personalized travel concierge service</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="bg-primary rounded-full w-2 h-2" />
                <span>24/7 premium support worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
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
              Sign in to your account
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Enter your credentials to access your travel dashboard
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="font-medium text-slate-700 text-sm dark:text-slate-300"
              >
                Email address
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
                  autoComplete="email"
                  placeholder="Enter your email"
                  className="pl-10 border-slate-200 focus:border-primary dark:border-slate-700 focus:ring-primary/20 h-12"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label
                  htmlFor="password"
                  className="font-medium text-slate-700 text-sm dark:text-slate-300"
                >
                  Password
                </Label>
                <Button
                  type="button"
                  variant="link"
                  size="sm"
                  onClick={() => router.push("/forgot-password")}
                  className="p-0 h-auto text-primary text-sm hover:text-primary/80"
                >
                  Forgot password?
                </Button>
              </div>
              <div className="relative">
                <div className="left-0 absolute inset-y-0 flex items-center pl-3 pointer-events-none">
                  <Lock className="w-5 h-5 text-slate-400" />
                </div>
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  placeholder="Enter your password"
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

            {/* Sign In Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 rounded-lg w-full h-12 font-medium text-white transition-all duration-200"
            >
              {isLoading ? (
                <div className="border-2 border-white/30 border-t-white rounded-full w-5 h-5 animate-spin" />
              ) : (
                <>
                  Sign in
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="border-slate-200 dark:border-slate-700 border-t w-full" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white dark:bg-slate-950 px-4 text-slate-500">
                or
              </span>
            </div>
          </div>

          {/* Register Link */}
          <div className="text-center">
            <p className="text-slate-600 dark:text-slate-400">
              Don't have an account?{" "}
              <Button
                type="button"
                variant="link"
                onClick={() => router.push("/register")}
                className="p-0 h-auto font-medium text-primary hover:text-primary/80"
              >
                Create one today
              </Button>
            </p>
          </div>

          {/* Security Notice */}
          <div className="bg-slate-50 dark:bg-slate-900/50 mt-12 p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
            <p className="text-center text-slate-500 text-xs dark:text-slate-400">
              Your information is protected with enterprise-grade security and
              encryption.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
