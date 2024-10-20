import React from "react";
import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs";
import Logo from "@/public/Logo.svg";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-[#2e2427]">Welcome back!</h1>
          <p className="text-base text-[#7e8ca0]">
            Log in or create a new account to get back to your dashboard.
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignUp path="/sign-up" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animated-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>
      <div className="h-full bg-blue-100 hidden lg:flex items-center justify-center">
        <Image
          src={Logo}
          height={300}
          width={300}
          alt="Logo"
        />
      </div>
    </div>
  );
}
